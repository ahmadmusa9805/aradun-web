import { Store, type SessionData } from "express-session";
import type { Request } from "express";
import { createHash } from "node:crypto";
import type { Connection, Types } from "mongoose";
import { staffSessionModel } from "../models/staff-session.model.js";
import { staffUserModel, LOCAL_PROVIDER } from "../models/staff-user.model.js";
import { ServiceError } from "../../../server/errors.js";
export type IdentitySessionData = SessionData & {
  identity?: { revision: number; tokenHash: string };
};
export const sessionHash = (sid: string) =>
  createHash("sha256").update(sid).digest("hex");
export function createIdentityStore(
  connection: Connection,
  clock = () => new Date(),
) {
  const sessions = staffSessionModel(connection),
    staff = staffUserModel(connection);
  async function read(sid: string) {
    if (connection.readyState !== 1) throw new ServiceError("unavailable");
    if (sid.length > 256 || sid.length < 24) return null;
    const row = await sessions
      .findOne({
        tokenHash: sessionHash(sid),
        revokedAt: { $exists: false },
        expiresAt: { $gt: clock() },
        idleExpiresAt: { $gt: clock() },
      })
      .maxTimeMS(2000);
    if (!row) return null;
    const actor = await staff
      .findOne({
        _id: row.staffUserId,
        provider: LOCAL_PROVIDER,
        status: "active",
        accessVersion: row.accessVersion,
        mfaPolicy: "required",
        archivedAt: { $exists: false },
      })
      .maxTimeMS(2000);
    return actor ? { row, actor } : null;
  }
  class IdentityStore extends Store {
    override regenerate(request: Request, callback: (error?: unknown) => void) {
      const meta = (request.session as IdentitySessionData).identity;
      if (!meta) {
        super.regenerate(request, callback);
        return;
      }
      // A verified rotation must win against logout/revocation, not merely
      // regenerate after an already-revoked session's no-op destroy.
      void sessions
        .updateOne(
          {
            tokenHash: sessionHash(request.sessionID),
            revision: meta.revision,
            revokedAt: { $exists: false },
            expiresAt: { $gt: clock() },
            idleExpiresAt: { $gt: clock() },
          },
          { $set: { revokedAt: clock() }, $inc: { revision: 1 } },
          { maxTimeMS: 2000 },
        )
        .then((result) => {
          if (result.modifiedCount !== 1) {
            callback(new ServiceError("unauthenticated"));
            return;
          }
          request.sessionStore.generate(request);
          callback();
        })
        .catch(() => callback(new ServiceError("unavailable")));
    }
    override get(
      sid: string,
      callback: (error: unknown, value?: SessionData | null) => void,
    ) {
      void read(sid)
        .then((value) =>
          callback(
            null,
            value
              ? ({
                  cookie: {
                    originalMaxAge:
                      value.row.expiresAt.getTime() - clock().getTime(),
                    expires: value.row.expiresAt,
                    path: "/api/identity",
                    httpOnly: true,
                    sameSite: "lax",
                  },
                  identity: {
                    tokenHash: value.row.tokenHash,
                    revision: value.row.revision,
                  },
                } as IdentitySessionData)
              : null,
          ),
        )
        .catch(() => callback(new ServiceError("unavailable")));
    }
    override set(
      sid: string,
      value: SessionData,
      callback?: (error?: unknown) => void,
    ) {
      const data = value as IdentitySessionData;
      if (
        Object.keys(data).some(
          (key) => !["cookie", "identity"].includes(key),
        ) ||
        data.identity?.tokenHash !== sessionHash(sid)
      ) {
        callback?.(new ServiceError("forbidden"));
        return;
      }
      void read(sid)
        .then((current) =>
          callback?.(
            current && current.row.revision === data.identity?.revision
              ? undefined
              : new ServiceError("unauthenticated"),
          ),
        )
        .catch(() => callback?.(new ServiceError("unavailable")));
    }
    override touch(
      sid: string,
      _value: SessionData,
      callback?: (error?: unknown) => void,
    ) {
      void read(sid)
        .then(() => callback?.())
        .catch(() => callback?.(new ServiceError("unavailable")));
    }
    override destroy(sid: string, callback?: (error?: unknown) => void) {
      void sessions
        .updateOne(
          { tokenHash: sessionHash(sid), revokedAt: { $exists: false } },
          { $set: { revokedAt: clock() }, $inc: { revision: 1 } },
          { maxTimeMS: 2000 },
        )
        .then(() => callback?.())
        .catch(() => callback?.(new ServiceError("unavailable")));
    }
  }
  const store = new IdentityStore();
  async function issuePrimary(
    sid: string,
    actorId: Types.ObjectId,
    providerSubject: string,
  ) {
    const actor = await staff
      .findOne({
        _id: actorId,
        providerSubject,
        provider: LOCAL_PROVIDER,
        status: "active",
        mfaPolicy: "required",
        archivedAt: { $exists: false },
      })
      .maxTimeMS(2000);
    if (!actor) throw new ServiceError("unauthenticated");
    const now = clock();
    const row = await sessions.create({
      tokenHash: sessionHash(sid),
      staffUserId: actor._id,
      accessVersion: actor.accessVersion,
      authenticatedAt: now,
      lastSeenAt: now,
      expiresAt: new Date(now.getTime() + 28800000),
      idleExpiresAt: new Date(now.getTime() + 1800000),
      assurance: "primary",
    });
    return { tokenHash: row.tokenHash, revision: row.revision };
  }
  return { store, read, issuePrimary };
}
