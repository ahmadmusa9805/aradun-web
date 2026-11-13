import { randomBytes, createHash } from "node:crypto";
import { Types, type Connection, type ClientSession } from "mongoose";
import { generateSecret, verify } from "otplib";
import * as Iron from "@hapi/iron";
import { staffUserModel, LOCAL_PROVIDER } from "../models/staff-user.model.js";
import { staffSessionModel } from "../models/staff-session.model.js";
import { authCredentialModel } from "../models/auth-credential.model.js";
import {
  identityFactorModel,
  identityChallengeModel,
  identityRecoveryPackModel,
  identitySecurityEventModel,
} from "../models/security-state.model.js";
import { createIdentityStore, sessionHash } from "./session-store.server.js";
import { createStaffAuthorization } from "./authorization.server.js";
import { ServiceError } from "../../../server/errors.js";
import { runTransaction } from "../../../server/db/transaction.server.js";
import { assertOwnedNotificationFixture } from "../../notifications/server/local-test-guard.server.js";
import { ownAccountInput } from "../policies/roles.js";

export type SecurityConfig = {
  sealingKey: string;
  // No live delivery adapter is authorized. Injection is owned-test-only.
  captureReset?: (email: string, code: string) => void;
};
const random = () => randomBytes(32).toString("base64url");
const hash = (value: string) =>
  createHash("sha256").update(value).digest("hex");
const invalid = () => new ServiceError("invalid_input");
const secretCode = (value: string) => /^[A-Za-z0-9_-]{43}$/.test(value);
export async function createSecurityService(
  connection: Connection,
  config: SecurityConfig,
  clock = () => new Date(),
) {
  if (config.sealingKey.length < 43)
    throw new Error("Private factor sealing key required");
  if (config.captureReset)
    await assertOwnedNotificationFixture(connection, "development");
  const staff = staffUserModel(connection),
    sessions = staffSessionModel(connection),
    credentials = authCredentialModel(connection),
    factors = identityFactorModel(connection),
    challenges = identityChallengeModel(connection),
    packs = identityRecoveryPackModel(connection),
    events = identitySecurityEventModel(connection),
    transport = createIdentityStore(connection, clock),
    authorize = createStaffAuthorization(connection, clock);
  async function current(sid: string, fresh = false) {
    const value = await transport.read(sid),
      now = +clock();
    if (!value) throw new ServiceError("unauthenticated");
    if (
      value.row.authenticatedAt.getTime() > now ||
      (fresh && now - +value.row.authenticatedAt > 300000)
    )
      throw new ServiceError("forbidden");
    return value;
  }
  async function liveActor(
    id: Types.ObjectId,
    subject: string,
    version: number,
    session?: ClientSession,
  ) {
    const value = await staff
      .findOne({
        _id: id,
        provider: LOCAL_PROVIDER,
        providerSubject: subject,
        status: "active",
        accessVersion: version,
        mfaPolicy: "required",
        archivedAt: { $exists: false },
      })
      .session(session ?? null)
      .maxTimeMS(2000);
    if (!value) throw new ServiceError("unauthenticated");
    return value;
  }
  async function event(
    id: Types.ObjectId,
    operation:
      | "mfa-enrolled"
      | "mfa-verified"
      | "password-reset"
      | "password-changed"
      | "recovery-pack"
      | "factor-recovery-start"
      | "factor-recovery-complete",
    session: ClientSession,
  ) {
    await events.create([{ staffUserId: id, operation, occurredAt: clock() }], {
      session,
    });
  }
  async function revoke(id: Types.ObjectId, session: ClientSession) {
    await sessions.updateMany(
      { staffUserId: id, revokedAt: { $exists: false } },
      { $set: { revokedAt: clock() }, $inc: { revision: 1 } },
      { session, maxTimeMS: 2000 },
    );
    await challenges.updateMany(
      { staffUserId: id, consumedAt: { $exists: false } },
      { $set: { consumedAt: clock() } },
      { session, maxTimeMS: 2000 },
    );
  }
  async function bump(
    id: Types.ObjectId,
    subject: string,
    version: number,
    session: ClientSession,
  ) {
    const changed = await staff.updateOne(
      {
        _id: id,
        provider: LOCAL_PROVIDER,
        providerSubject: subject,
        status: "active",
        accessVersion: version,
        archivedAt: { $exists: false },
      },
      { $inc: { accessVersion: 1, revision: 1 } },
      { session, maxTimeMS: 2000 },
    );
    if (changed.modifiedCount !== 1) throw new ServiceError("conflict");
  }
  async function checkedStep(sealed: string, token: string, lastStep = -1) {
    if (!/^\d{6}$/.test(token)) throw invalid();
    try {
      const opened = (await Iron.unseal(
        sealed,
        config.sealingKey,
        Iron.defaults,
      )) as { secret: string };
      const result = await verify({
        secret: opened.secret,
        token,
        epoch: Math.floor(+clock() / 1000),
        epochTolerance: 0,
        ...(lastStep >= 0 ? { afterTimeStep: lastStep } : {}),
      });
      if (result.valid && "timeStep" in result) return result.timeStep;
    } catch {
      /* No seed, token or library error escapes. */
    }
    throw invalid();
  }
  async function beginEnrollment(sid: string) {
    const value = await current(sid, true),
      secret = generateSecret();
    const sealed = await Iron.seal(
      { secret },
      config.sealingKey,
      Iron.defaults,
    );
    await runTransaction(connection, async (session) => {
      await liveActor(
        value.actor._id,
        value.actor.providerSubject!,
        value.actor.accessVersion,
        session,
      );
      const existing = await factors
        .findOne({ staffUserId: value.actor._id })
        .session(session)
        .maxTimeMS(2000);
      if (existing?.enabled || existing?.replacementPending)
        throw new ServiceError("forbidden");
      await factors.updateOne(
        { staffUserId: value.actor._id, enabled: false },
        {
          $set: {
            pendingSealed: sealed,
            pendingExpiresAt: new Date(+clock() + 300000),
          },
          $inc: { revision: 1 },
        },
        { upsert: !existing, session, runValidators: true, maxTimeMS: 2000 },
      );
    });
    return {
      secret,
      issuer: "ARADUN",
      account: value.actor.email,
      expiresInSeconds: 300,
    };
  }
  async function verifyFactor(sid: string, token: string, enrollment: boolean) {
    const value = await current(sid, true),
      factor = await factors
        .findOne({ staffUserId: value.actor._id, enabled: !enrollment })
        .maxTimeMS(2000);
    if (!factor || factor.replacementPending) throw invalid();
    const sealed = enrollment ? factor.pendingSealed : factor.sealed;
    if (
      !sealed ||
      (enrollment &&
        (!factor.pendingExpiresAt || +factor.pendingExpiresAt <= +clock()))
    )
      throw invalid();
    const step = await checkedStep(sealed, token, factor.lastStep);
    // This closure is server-only proof, never a client assertion. express-session
    // regenerates its ID before completion; the DB CAS consumes the factor once.
    return async (newSid: string) =>
      runTransaction(connection, async (session) => {
        const actor = await liveActor(
          value.actor._id,
          value.actor.providerSubject!,
          value.actor.accessVersion,
          session,
        );
        const now = clock();
        if (
          +value.row.expiresAt <= +now ||
          +value.row.idleExpiresAt <= +now ||
          +now - +value.row.authenticatedAt > 300000 ||
          newSid === sid
        )
          throw new ServiceError("unauthenticated");
        const result = await factors.updateOne(
          {
            _id: factor._id,
            revision: factor.revision,
            enabled: !enrollment,
            lastStep: { $lt: step },
            ...(enrollment
              ? { pendingExpiresAt: { $gt: now }, pendingSealed: sealed }
              : { sealed }),
          },
          {
            $set: { sealed, enabled: true, lastStep: step },
            $unset: { pendingSealed: "", pendingExpiresAt: "" },
            $inc: { revision: 1 },
          },
          { session, maxTimeMS: 2000 },
        );
        if (result.modifiedCount !== 1) throw invalid();
        if (enrollment) await revoke(actor._id, session);
        else
          await sessions.updateOne(
            { tokenHash: sessionHash(sid) },
            { $set: { revokedAt: now }, $inc: { revision: 1 } },
            { session, maxTimeMS: 2000 },
          );
        await sessions.create(
          [
            {
              tokenHash: sessionHash(newSid),
              staffUserId: actor._id,
              accessVersion: actor.accessVersion,
              authenticatedAt: value.row.authenticatedAt,
              lastSeenAt: now,
              expiresAt: value.row.expiresAt,
              idleExpiresAt: new Date(
                Math.min(+value.row.expiresAt, +now + 1800000),
              ),
              assurance: "mfa",
              mfaVerifiedAt: now,
            },
          ],
          { session },
        );
        await staff.updateOne(
          { _id: actor._id },
          { $set: { mfaLastVerifiedAt: now }, $inc: { revision: 1 } },
          { session, maxTimeMS: 2000 },
        );
        await event(
          actor._id,
          enrollment ? "mfa-enrolled" : "mfa-verified",
          session,
        );
        return { tokenHash: sessionHash(newSid), revision: 0 };
      });
  }
  async function account(sid: string) {
    const actor = await authorize(sid, "account.read");
    const row = await staff
      .findOne({
        _id: actor.id,
        status: "active",
        accessVersion: actor.accessVersion,
        archivedAt: { $exists: false },
      })
      .select({ displayName: 1, email: 1, preferredTimezone: 1 })
      .maxTimeMS(2000);
    if (!row) throw new ServiceError("unauthenticated");
    return {
      displayName: row.displayName,
      email: row.email,
      preferredTimezone: row.preferredTimezone,
      deliveryEnabled: false,
    };
  }
  async function updateAccount(sid: string, input: unknown) {
    const actor = await authorize(sid, "account.update"),
      data = ownAccountInput.safeParse(input);
    if (!data.success) throw invalid();
    const changed = await staff.updateOne(
      {
        _id: actor.id,
        status: "active",
        accessVersion: actor.accessVersion,
        archivedAt: { $exists: false },
      },
      { $set: data.data, $inc: { revision: 1 } },
      { runValidators: true, maxTimeMS: 2000 },
    );
    if (changed.matchedCount !== 1) throw new ServiceError("unauthenticated");
  }
  async function issuePack(sid: string) {
    await authorize(sid, "account.security");
    const value = await current(sid, true),
      codes = Array.from({ length: 10 }, random);
    await runTransaction(connection, async (session) => {
      await liveActor(
        value.actor._id,
        value.actor.providerSubject!,
        value.actor.accessVersion,
        session,
      );
      await sessions.updateMany(
        {
          staffUserId: value.actor._id,
          tokenHash: { $ne: sessionHash(sid) },
          revokedAt: { $exists: false },
        },
        { $set: { revokedAt: clock() }, $inc: { revision: 1 } },
        { session, maxTimeMS: 2000 },
      );
      await packs.updateOne(
        { staffUserId: value.actor._id },
        {
          $set: {
            accessVersion: value.actor.accessVersion,
            expiresAt: new Date(+clock() + 90 * 86400000),
            codes: codes.map((code) => ({ hash: hash(code) })),
          },
        },
        { upsert: true, session, runValidators: true, maxTimeMS: 2000 },
      );
      await event(value.actor._id, "recovery-pack", session);
    });
    return { codes };
  }
  async function requestReset(email: string) {
    // No token or fictional queued email when delivery is disabled. Same response
    // for every address. Test capture is only permitted on marked owned fixtures.
    if (config.captureReset) {
      const credential = await credentials.findOne({ email }).maxTimeMS(2000);
      const actor =
        credential &&
        (await staff
          .findOne({
            provider: LOCAL_PROVIDER,
            providerSubject: String(credential._id),
            status: "active",
            archivedAt: { $exists: false },
          })
          .maxTimeMS(2000));
      if (actor) {
        const code = random();
        await challenges.create({
          staffUserId: actor._id,
          subject: actor.providerSubject!,
          accessVersion: actor.accessVersion,
          purpose: "password-reset",
          tokenHash: hash(code),
          issuedAt: clock(),
          expiresAt: new Date(+clock() + 900000),
        });
        config.captureReset(email, code);
      }
    }
    return { acknowledged: true, deliveryEnabled: false };
  }
  async function preparedPassword(subject: string, password: string) {
    const row = await credentials
      .findById(subject)
      .select("+hash +salt")
      .maxTimeMS(2000);
    if (!row || password.length < 15 || password.length > 128) throw invalid();
    const previousHash = row.hash;
    if (!previousHash) throw invalid();
    await row.setPassword(password);
    if (!row.hash || !row.salt) throw invalid();
    return { previousHash, hash: row.hash, salt: row.salt };
  }
  async function resetPassword(code: string, password: string) {
    if (!secretCode(code)) throw invalid();
    const row = await challenges
      .findOne({
        purpose: "password-reset",
        tokenHash: hash(code),
        consumedAt: { $exists: false },
        expiresAt: { $gt: clock() },
      })
      .maxTimeMS(2000);
    if (!row) throw invalid();
    const prepared = await preparedPassword(row.subject, password);
    await runTransaction(connection, async (session) => {
      await liveActor(row.staffUserId, row.subject, row.accessVersion, session);
      const consumed = await challenges.updateOne(
        {
          _id: row._id,
          consumedAt: { $exists: false },
          expiresAt: { $gt: clock() },
        },
        { $set: { consumedAt: clock() } },
        { session, maxTimeMS: 2000 },
      );
      if (consumed.modifiedCount !== 1) throw invalid();
      const changed = await credentials.updateOne(
        { _id: new Types.ObjectId(row.subject), hash: prepared.previousHash },
        { $set: { hash: prepared.hash, salt: prepared.salt } },
        { session, maxTimeMS: 2000 },
      );
      if (changed.modifiedCount !== 1) throw new ServiceError("conflict");
      await bump(row.staffUserId, row.subject, row.accessVersion, session);
      await revoke(row.staffUserId, session);
      await packs.updateOne(
        { staffUserId: row.staffUserId },
        { $set: { expiresAt: clock() } },
        { session, maxTimeMS: 2000 },
      );
      await event(row.staffUserId, "password-reset", session);
    });
  }
  async function changePassword(
    sid: string,
    oldPassword: string,
    newPassword: string,
  ) {
    await authorize(sid, "account.security");
    const value = await current(sid, true);
    const checked = await credentials.authenticate()(
      value.actor.emailNormalized,
      oldPassword,
    );
    if (
      !checked.user ||
      String(checked.user._id) !== value.actor.providerSubject
    )
      throw invalid();
    const prepared = await preparedPassword(
      value.actor.providerSubject!,
      newPassword,
    );
    await runTransaction(connection, async (session) => {
      await liveActor(
        value.actor._id,
        value.actor.providerSubject!,
        value.actor.accessVersion,
        session,
      );
      const changed = await credentials.updateOne(
        {
          _id: new Types.ObjectId(value.actor.providerSubject!),
          hash: prepared.previousHash,
        },
        { $set: { hash: prepared.hash, salt: prepared.salt } },
        { session, maxTimeMS: 2000 },
      );
      if (changed.modifiedCount !== 1) throw new ServiceError("conflict");
      await bump(
        value.actor._id,
        value.actor.providerSubject!,
        value.actor.accessVersion,
        session,
      );
      await revoke(value.actor._id, session);
      await packs.updateOne(
        { staffUserId: value.actor._id },
        { $set: { expiresAt: clock() } },
        { session, maxTimeMS: 2000 },
      );
      await event(value.actor._id, "password-changed", session);
    });
  }
  async function startReplacement(
    email: string,
    password: string,
    code: string,
  ) {
    if (!secretCode(code)) throw invalid();
    const checked = await credentials.authenticate()(email, password);
    if (!checked.user) throw invalid();
    const actor = await staff
      .findOne({
        provider: LOCAL_PROVIDER,
        providerSubject: String(checked.user._id),
        status: "active",
        archivedAt: { $exists: false },
      })
      .maxTimeMS(2000);
    if (!actor) throw invalid();
    const grant = random(),
      secret = generateSecret(),
      sealed = await Iron.seal({ secret }, config.sealingKey, Iron.defaults);
    await runTransaction(connection, async (session) => {
      await liveActor(
        actor._id,
        actor.providerSubject!,
        actor.accessVersion,
        session,
      );
      const used = await packs.updateOne(
        {
          staffUserId: actor._id,
          accessVersion: actor.accessVersion,
          expiresAt: { $gt: clock() },
          codes: {
            $elemMatch: { hash: hash(code), consumedAt: { $exists: false } },
          },
        },
        { $set: { "codes.$.consumedAt": clock() } },
        { session, maxTimeMS: 2000 },
      );
      if (used.modifiedCount !== 1) throw invalid();
      await bump(
        actor._id,
        actor.providerSubject!,
        actor.accessVersion,
        session,
      );
      await revoke(actor._id, session);
      await factors.updateOne(
        { staffUserId: actor._id },
        {
          $set: { enabled: false, replacementPending: true },
          $inc: { revision: 1 },
        },
        { session, maxTimeMS: 2000 },
      );
      await packs.updateOne(
        { staffUserId: actor._id },
        { $set: { accessVersion: actor.accessVersion + 1 } },
        { session, maxTimeMS: 2000 },
      );
      await challenges.create(
        [
          {
            staffUserId: actor._id,
            subject: actor.providerSubject!,
            accessVersion: actor.accessVersion + 1,
            purpose: "factor-replace",
            tokenHash: hash(grant),
            sealedPending: sealed,
            issuedAt: clock(),
            expiresAt: new Date(+clock() + 300000),
          },
        ],
        { session },
      );
      await event(actor._id, "factor-recovery-start", session);
    });
    return { grant, secret, account: actor.email, issuer: "ARADUN" };
  }
  async function finishReplacement(grant: string, token: string) {
    if (!secretCode(grant)) throw invalid();
    const row = await challenges
      .findOne({
        purpose: "factor-replace",
        tokenHash: hash(grant),
        consumedAt: { $exists: false },
        expiresAt: { $gt: clock() },
      })
      .maxTimeMS(2000);
    if (!row?.sealedPending) throw invalid();
    const step = await checkedStep(row.sealedPending, token);
    await runTransaction(connection, async (session) => {
      await liveActor(row.staffUserId, row.subject, row.accessVersion, session);
      const used = await challenges.updateOne(
        {
          _id: row._id,
          consumedAt: { $exists: false },
          expiresAt: { $gt: clock() },
        },
        { $set: { consumedAt: clock() } },
        { session, maxTimeMS: 2000 },
      );
      if (used.modifiedCount !== 1) throw invalid();
      const changed = await factors.updateOne(
        {
          staffUserId: row.staffUserId,
          enabled: false,
          replacementPending: true,
        },
        {
          $set: {
            sealed: row.sealedPending,
            enabled: true,
            replacementPending: false,
            lastStep: step,
          },
          $unset: { pendingSealed: "", pendingExpiresAt: "" },
          $inc: { revision: 1 },
        },
        { session, maxTimeMS: 2000 },
      );
      if (changed.matchedCount !== 1) throw invalid();
      await bump(row.staffUserId, row.subject, row.accessVersion, session);
      await revoke(row.staffUserId, session);
      await packs.updateOne(
        { staffUserId: row.staffUserId },
        { $set: { expiresAt: clock() } },
        { session, maxTimeMS: 2000 },
      );
      await event(row.staffUserId, "factor-recovery-complete", session);
    });
    // Never issue a business session from a recovery grant. Sign in again.
  }
  return {
    beginEnrollment,
    verifyFactor,
    account,
    updateAccount,
    issuePack,
    requestReset,
    resetPassword,
    changePassword,
    startReplacement,
    finishReplacement,
  };
}
