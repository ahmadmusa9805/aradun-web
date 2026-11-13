import express from "express";
import session, { Store, type SessionData } from "express-session";
import {
  Schema,
  Types,
  type Connection,
  type Model,
  type InferSchemaType,
} from "mongoose";
import { createHash, randomBytes } from "node:crypto";
import { assertOwnedNotificationFixture } from "../../src/modules/notifications/server/local-test-guard.server.js";
const schema = new Schema(
  {
    tokenHash: { type: String, required: true, match: /^[a-f0-9]{64}$/ },
    staffUserId: { type: Schema.Types.ObjectId, required: true },
    accessVersion: {
      type: Number,
      required: true,
      min: 0,
      validate: Number.isSafeInteger,
    },
    authenticatedAt: { type: Date, required: true },
    lastSeenAt: { type: Date, required: true },
    expiresAt: { type: Date, required: true },
    idleExpiresAt: { type: Date, required: true },
    assurance: { type: String, enum: ["primary", "mfa"], required: true },
    mfaVerifiedAt: {
      type: Date,
      required: function () {
        return this.assurance === "mfa";
      },
    },
    revokedAt: Date,
    revokedBy: Schema.Types.ObjectId,
    schemaVersion: { type: Number, default: 1, enum: [1], required: true },
    revision: {
      type: Number,
      default: 0,
      min: 0,
      required: true,
      validate: Number.isSafeInteger,
    },
  },
  {
    collection: "staffSessions",
    strict: "throw",
    timestamps: true,
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
    bufferCommands: false,
  },
);
schema.index({ tokenHash: 1 }, { unique: true });
schema.index({ staffUserId: 1, revokedAt: 1 });
schema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
type Data = SessionData & { proof?: { tokenHash: string; revision: number } };
const digest = (sid: string) => createHash("sha256").update(sid).digest("hex");
const fail = () => new Error("SAMPLE session proof denied");

/** Entire module is test-only; synthetic assertions never authenticate a real person. */
export async function sessionProof(
  connection: Connection,
  clock = () => new Date(),
  sharedSecret = randomBytes(48).toString("base64url"),
) {
  await assertOwnedNotificationFixture(connection, "development");
  const model =
    (connection.models.SessionProof as
      Model<InferSchemaType<typeof schema>> | undefined) ??
    connection.model<InferSchemaType<typeof schema>>("SessionProof", schema);
  await model.createCollection();
  await model.createIndexes(); // Explicit owned fixture only.
  const live = (sid: string) => ({
    tokenHash: digest(sid),
    revokedAt: { $exists: false },
    expiresAt: { $gt: clock() },
    idleExpiresAt: { $gt: clock() },
  });
  async function read(sid: string) {
    if (connection.readyState !== 1) throw fail();
    return model.findOne(live(sid)).maxTimeMS(2000);
  }
  class ProofStore extends Store {
    override get(
      sid: string,
      callback: (error: unknown, value?: SessionData | null) => void,
    ) {
      void read(sid)
        .then((row) =>
          callback(
            null,
            row
              ? ({
                  cookie: {
                    originalMaxAge: Math.max(
                      0,
                      row.expiresAt.getTime() - clock().getTime(),
                    ),
                    expires: row.expiresAt,
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "lax",
                  },
                  proof: { tokenHash: row.tokenHash, revision: row.revision },
                } as Data)
              : null,
          ),
        )
        .catch(() => callback(fail()));
    }
    override set(
      sid: string,
      value: SessionData,
      callback?: (error?: unknown) => void,
    ) {
      const data = value as Data;
      if (
        Object.keys(data).some((key) => !["cookie", "proof"].includes(key)) ||
        !data.proof ||
        data.proof.tokenHash !== digest(sid)
      ) {
        callback?.(fail());
        return;
      }
      // Never upsert or copy security policy from middleware/client data.
      void read(sid)
        .then((row) =>
          callback?.(
            row && row.revision === data.proof!.revision ? undefined : fail(),
          ),
        )
        .catch(() => callback?.(fail()));
    }
    override touch(
      sid: string,
      _value: SessionData,
      callback?: (error?: unknown) => void,
    ) {
      // Polls/response finalization do not extend deliberate-activity idle time.
      void read(sid)
        .then(() => callback?.())
        .catch(() => callback?.(fail()));
    }
    override destroy(sid: string, callback?: (error?: unknown) => void) {
      void model
        .updateOne(
          { tokenHash: digest(sid), revokedAt: { $exists: false } },
          { $set: { revokedAt: clock() }, $inc: { revision: 1 } },
          { maxTimeMS: 2000 },
        )
        .then(() => callback?.())
        .catch(() => callback?.(fail()));
    }
    async issue(
      sid: string,
      assurance: "primary" | "mfa" = "primary",
      assertion?: {
        staffUserId: Types.ObjectId;
        authenticatedAt: Date;
        expiresAt: Date;
      },
    ) {
      const now = clock();
      if (
        assertion &&
        (assertion.authenticatedAt > now ||
          assertion.expiresAt <= now ||
          assertion.expiresAt.getTime() >
            assertion.authenticatedAt.getTime() + 28800000)
      )
        throw fail();
      const row = await model.create({
        tokenHash: digest(sid),
        staffUserId: assertion?.staffUserId ?? new Types.ObjectId(),
        accessVersion: 0,
        authenticatedAt: assertion?.authenticatedAt ?? now,
        lastSeenAt: now,
        expiresAt: assertion?.expiresAt ?? new Date(now.getTime() + 28800000),
        idleExpiresAt: new Date(
          Math.min(
            assertion?.expiresAt.getTime() ?? Infinity,
            now.getTime() + 1800000,
          ),
        ),
        assurance,
        ...(assurance === "mfa" ? { mfaVerifiedAt: now } : {}),
      });
      return {
        tokenHash: row.tokenHash as string,
        revision: row.revision as number,
      };
    }
  }
  const store = new ProofStore();
  // Activity needs explicit CAS to extend monotonically, always capped by absolute expiry.
  async function activity(sid: string) {
    const row = await read(sid);
    if (!row) return false;
    const now = clock();
    if (now.getTime() - row.lastSeenAt.getTime() < 60000) return true;
    return (
      (
        await model.updateOne(
          { ...live(sid), revision: row.revision },
          {
            $set: {
              lastSeenAt: now,
              idleExpiresAt: new Date(
                Math.min(row.expiresAt.getTime(), now.getTime() + 1800000),
              ),
            },
            $inc: { revision: 1 },
          },
          { maxTimeMS: 2000 },
        )
      ).modifiedCount === 1
    );
  }
  const app = express();
  app.set("trust proxy", false);
  const issueKey = randomBytes(32).toString("hex");
  app.use((request, response, next) => {
    response.setHeader("Cache-Control", "no-store");
    if (
      request.method === "POST" &&
      request.get("Origin") !== "http://127.0.0.1:3998"
    ) {
      response.sendStatus(403);
      return;
    }
    next();
  });
  app.use(
    session({
      name: "sample-proof",
      secret: sharedSecret,
      store,
      resave: false,
      saveUninitialized: false,
      rolling: false,
      cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 28800000,
      },
    }),
  );
  app.post("/issue", (request, response, next) => {
    if (request.get("X-SAMPLE-Proof") !== issueKey) {
      response.sendStatus(403);
      return;
    }
    request.session.regenerate((error) => {
      if (error) {
        next(fail());
        return;
      }
      void store
        .issue(
          request.sessionID,
          request.get("X-SAMPLE-Assurance") === "mfa" ? "mfa" : "primary",
        )
        .then((meta) => {
          (request.session as Data).proof = meta;
          request.session.save((error) =>
            error ? next(fail()) : response.sendStatus(204),
          );
        })
        .catch(() => next(fail()));
    });
  });
  app.get("/poll", (request, response) => {
    response.sendStatus((request.session as Data).proof ? 200 : 401);
  });
  app.post("/activity", (request, response, next) => {
    void activity(request.sessionID)
      .then((valid) => response.sendStatus(valid ? 204 : 401))
      .catch(() => next(fail()));
  });
  app.post("/sensitive", (request, response, next) => {
    void read(request.sessionID)
      .then((row) =>
        response.sendStatus(
          row &&
            row.assurance === "mfa" &&
            row.mfaVerifiedAt &&
            clock().getTime() - row.mfaVerifiedAt.getTime() < 300000 &&
            clock().getTime() - row.authenticatedAt.getTime() < 300000
            ? 204
            : 403,
        ),
      )
      .catch(() => next(fail()));
  });
  app.post("/logout", (request, response, next) =>
    request.session.destroy((error) =>
      error ? next(fail()) : response.sendStatus(204),
    ),
  );
  app.use(((
    error: unknown,
    _request: express.Request,
    response: express.Response,
    _next: express.NextFunction,
  ) => {
    void error;
    void _next;
    response.status(503).json({ error: "SAMPLE proof unavailable" });
  }) satisfies express.ErrorRequestHandler);
  return {
    app,
    store,
    model,
    issueKey,
    secret: sharedSecret,
    read,
    activity,
    digest,
  };
}
