import {
  Schema,
  Types,
  type Connection,
  type Model,
  type InferSchemaType,
} from "mongoose";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import * as Iron from "@hapi/iron";
import { generateSecret, generate, verify } from "otplib";
import { credentialMfaProof } from "./credential-mfa-proof.js";
import { assertOwnedNotificationFixture } from "../../src/modules/notifications/server/local-test-guard.server.js";
import { runTransaction } from "../../src/server/db/transaction.server.js";
const options = {
  strict: "throw" as const,
  autoCreate: false,
  autoIndex: false,
  bufferCommands: false,
  versionKey: false as const,
};
const challengeSchema = new Schema(
  {
    subjectId: { type: Schema.Types.ObjectId, required: true },
    purpose: {
      type: String,
      enum: ["password-reset", "factor-replace"],
      required: true,
    },
    tokenHash: { type: String, required: true },
    issuedAt: { type: Date, required: true },
    expiresAt: { type: Date, required: true },
    consumedAt: Date,
    sealedPending: String,
    attempts: { type: Number, default: 0, min: 0, max: 5 },
    version: { type: Number, default: 0 },
  },
  { ...options, collection: "proofRecoveryChallenges" },
);
challengeSchema.index({ tokenHash: 1 }, { unique: true });
challengeSchema.index({ subjectId: 1, purpose: 1 });
const entrySchema = new Schema(
  { hash: { type: String, required: true }, consumedAt: Date },
  { ...options, _id: false },
);
const packSchema = new Schema(
  {
    subjectId: { type: Schema.Types.ObjectId, required: true },
    packVersion: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    codes: { type: [entrySchema], required: true },
  },
  { ...options, collection: "proofRecoveryPacks" },
);
packSchema.index({ subjectId: 1 }, { unique: true });
const accessSchema = new Schema(
  {
    subjectId: { type: Schema.Types.ObjectId, required: true },
    accessVersion: { type: Number, default: 0 },
  },
  { ...options, collection: "proofRecoveryAccess" },
);
accessSchema.index({ subjectId: 1 }, { unique: true });
const auditSchema = new Schema(
  {
    subjectId: { type: Schema.Types.ObjectId, required: true },
    operation: {
      type: String,
      enum: [
        "password-reset",
        "factor-recovery-start",
        "factor-recovery-complete",
      ],
      required: true,
    },
    at: { type: Date, required: true },
  },
  { ...options, collection: "proofRecoveryAudit" },
);
const random = () => randomBytes(32).toString("base64url");
const hash = (value: string) =>
  createHash("sha256").update(value).digest("hex");
const isCode = (value: string) => /^[A-Za-z0-9_-]{43}$/.test(value);
/** Test-only recovery orchestration under the explicit subject amendment. No application import. */
export async function recoveryProof(connection: Connection) {
  await assertOwnedNotificationFixture(connection, "development");
  const identity = await credentialMfaProof(connection);
  const challenges =
    (connection.models.RecoveryChallengeProof as
      Model<InferSchemaType<typeof challengeSchema>> | undefined) ??
    connection.model<InferSchemaType<typeof challengeSchema>>(
      "RecoveryChallengeProof",
      challengeSchema,
    );
  const packs =
    (connection.models.RecoveryPackProof as
      Model<InferSchemaType<typeof packSchema>> | undefined) ??
    connection.model<InferSchemaType<typeof packSchema>>(
      "RecoveryPackProof",
      packSchema,
    );
  const access =
    (connection.models.RecoveryAccessProof as
      Model<InferSchemaType<typeof accessSchema>> | undefined) ??
    connection.model<InferSchemaType<typeof accessSchema>>(
      "RecoveryAccessProof",
      accessSchema,
    );
  const audit =
    (connection.models.RecoveryAuditProof as
      Model<InferSchemaType<typeof auditSchema>> | undefined) ??
    connection.model<InferSchemaType<typeof auditSchema>>(
      "RecoveryAuditProof",
      auditSchema,
    );
  for (const model of [challenges, packs, access, audit]) {
    await model.createCollection();
    await model.createIndexes();
  }
  const capture = new Map<string, string>();
  const now = identity.now;
  async function provision(email: string, password: string) {
    const user = await identity.provision(email, password);
    await access.create({ subjectId: user._id });
    return user;
  }
  async function requestReset(email: string) {
    const user = await identity.credentials.findOne({ email }).maxTimeMS(2000);
    if (user) {
      const code = random();
      await challenges.create({
        subjectId: user._id,
        purpose: "password-reset",
        tokenHash: hash(code),
        issuedAt: now(),
        expiresAt: new Date(now().getTime() + 900000),
      });
      capture.set(email, code);
    }
    return { acknowledged: true };
  }
  async function reset(
    subjectId: Types.ObjectId,
    purpose: string,
    code: string,
    password: string,
    injectFailure = false,
  ) {
    if (
      purpose !== "password-reset" ||
      !isCode(code) ||
      !password.startsWith("SAMPLE-") ||
      password.length > 128
    )
      return false;
    // Library hashing is expensive and must happen before the replayable DB-only transaction.
    const credential = await identity.credentials
      .findById(subjectId)
      .select("+hash +salt")
      .maxTimeMS(2000);
    if (!credential) return false;
    const previousHash = credential.hash;
    await credential.setPassword(password);
    const preparedHash = credential.hash,
      preparedSalt = credential.salt;
    return runTransaction(connection, async (session) => {
      const consumed = await challenges.updateOne(
        {
          subjectId,
          purpose,
          tokenHash: hash(code),
          consumedAt: { $exists: false },
          expiresAt: { $gt: now() },
        },
        { $set: { consumedAt: now() }, $inc: { version: 1 } },
        { session, maxTimeMS: 2000 },
      );
      if (consumed.modifiedCount !== 1) return false;
      const changed = await identity.credentials.updateOne(
        { _id: subjectId, hash: previousHash },
        { $set: { hash: preparedHash, salt: preparedSalt } },
        { session, maxTimeMS: 2000 },
      );
      if (changed.modifiedCount !== 1)
        throw new Error("SAMPLE credential conflict");
      const version = await access.updateOne(
        { subjectId },
        { $inc: { accessVersion: 1 } },
        { session, maxTimeMS: 2000 },
      );
      if (version.modifiedCount !== 1)
        throw new Error("SAMPLE missing access state");
      await identity.transport.model.updateMany(
        { staffUserId: subjectId, revokedAt: { $exists: false } },
        { $set: { revokedAt: now() }, $inc: { revision: 1 } },
        { session, maxTimeMS: 2000 },
      );
      await challenges.updateMany(
        {
          subjectId,
          purpose: "password-reset",
          consumedAt: { $exists: false },
        },
        { $set: { consumedAt: now() } },
        { session, maxTimeMS: 2000 },
      );
      await audit.create(
        [{ subjectId, operation: "password-reset", at: now() }],
        { session },
      );
      if (injectFailure) throw new Error("SAMPLE injected rollback");
      return true;
    });
  }
  async function issuePack(subjectId: Types.ObjectId, sessionId: string) {
    const current = await identity.transport.read(sessionId);
    if (
      !current ||
      !current.staffUserId.equals(subjectId) ||
      current.assurance !== "mfa" ||
      !current.mfaVerifiedAt ||
      now().getTime() - current.authenticatedAt.getTime() >= 300000 ||
      now().getTime() - current.mfaVerifiedAt.getTime() >= 300000
    )
      throw new Error("SAMPLE fresh MFA required");
    const codes = Array.from({ length: 10 }, () => random()),
      packVersion = randomUUID();
    await packs.updateOne(
      { subjectId },
      {
        $set: {
          packVersion,
          expiresAt: new Date(now().getTime() + 90 * 86400000),
          codes: codes.map((code) => ({ hash: hash(code) })),
        },
      },
      { upsert: true, runValidators: true, maxTimeMS: 2000 },
    );
    return { codes, packVersion };
  }
  async function recoverFactor(
    email: string,
    password: string,
    packVersion: string,
    code: string,
  ) {
    if (!isCode(code) || password.length > 128) return null;
    const checked = await identity.credentials.authenticate()(email, password);
    if (!checked.user) return null;
    const subjectId = new Types.ObjectId(String(checked.user._id)),
      grant = random();
    const accepted = await runTransaction(connection, async (session) => {
      const result = await packs.updateOne(
        {
          subjectId,
          packVersion,
          expiresAt: { $gt: now() },
          codes: {
            $elemMatch: { hash: hash(code), consumedAt: { $exists: false } },
          },
        },
        { $set: { "codes.$.consumedAt": now() } },
        { session, maxTimeMS: 2000 },
      );
      if (result.modifiedCount !== 1) return false;
      const accessChange = await access.updateOne(
        { subjectId },
        { $inc: { accessVersion: 1 } },
        { session, maxTimeMS: 2000 },
      );
      if (accessChange.modifiedCount !== 1)
        throw new Error("SAMPLE missing access state");
      await identity.transport.model.updateMany(
        { staffUserId: subjectId, revokedAt: { $exists: false } },
        { $set: { revokedAt: now() }, $inc: { revision: 1 } },
        { session, maxTimeMS: 2000 },
      );
      await identity.factors.updateOne(
        { subjectId },
        { $set: { enabled: false } },
        { session, maxTimeMS: 2000 },
      );
      await challenges.updateMany(
        {
          subjectId,
          purpose: "factor-replace",
          consumedAt: { $exists: false },
        },
        { $set: { consumedAt: now() } },
        { session, maxTimeMS: 2000 },
      );
      await challenges.create(
        [
          {
            subjectId,
            purpose: "factor-replace",
            tokenHash: hash(grant),
            issuedAt: now(),
            expiresAt: new Date(now().getTime() + 300000),
          },
        ],
        { session },
      );
      await audit.create(
        [{ subjectId, operation: "factor-recovery-start", at: now() }],
        { session },
      );
      return true;
    });
    return accepted ? { subjectId, grant } : null;
  }
  async function prepareReplacement(subjectId: Types.ObjectId, grant: string) {
    if (!isCode(grant)) return null;
    const secret = generateSecret(),
      sealed = await Iron.seal({ secret }, identity.sealingKey, Iron.defaults);
    const result = await challenges.updateOne(
      {
        subjectId,
        purpose: "factor-replace",
        tokenHash: hash(grant),
        consumedAt: { $exists: false },
        sealedPending: { $exists: false },
        expiresAt: { $gt: now() },
      },
      { $set: { sealedPending: sealed } },
      { maxTimeMS: 2000 },
    );
    return result.modifiedCount === 1
      ? {
          code: () =>
            generate({ secret, epoch: Math.floor(now().getTime() / 1000) }),
        }
      : null;
  }
  async function finishReplacement(
    subjectId: Types.ObjectId,
    grant: string,
    token: string,
  ) {
    if (!isCode(grant) || !/^\d{6}$/.test(token)) return false;
    const query = {
      subjectId,
      purpose: "factor-replace" as const,
      tokenHash: hash(grant),
      consumedAt: { $exists: false },
      expiresAt: { $gt: now() },
    };
    const challenge = await challenges.findOneAndUpdate(
      { ...query, attempts: { $lt: 5 } },
      { $inc: { attempts: 1 } },
      { returnDocument: "after", maxTimeMS: 2000 },
    );
    if (!challenge?.sealedPending) return false;
    const sealedPending = challenge.sealedPending;
    let step: number;
    try {
      const seed = (await Iron.unseal(
        challenge.sealedPending,
        identity.sealingKey,
        Iron.defaults,
      )) as { secret: string };
      const checked = await verify({
        secret: seed.secret,
        token,
        epoch: Math.floor(now().getTime() / 1000),
        epochTolerance: 0,
      });
      if (!checked.valid || !("timeStep" in checked)) return false;
      step = checked.timeStep;
    } catch {
      return false;
    }
    return runTransaction(connection, async (session) => {
      const consumed = await challenges.updateOne(
        { ...query, sealedPending },
        { $set: { consumedAt: now() }, $inc: { version: 1 } },
        { session, maxTimeMS: 2000 },
      );
      if (consumed.modifiedCount !== 1) return false;
      const changed = await identity.factors.updateOne(
        { subjectId },
        {
          $set: {
            sealed: sealedPending,
            enabled: true,
            lastStep: step,
            attempts: 0,
          },
        },
        { session, maxTimeMS: 2000 },
      );
      if (changed.matchedCount !== 1) throw new Error("SAMPLE missing factor");
      const accessChange = await access.updateOne(
        { subjectId },
        { $inc: { accessVersion: 1 } },
        { session, maxTimeMS: 2000 },
      );
      if (accessChange.modifiedCount !== 1)
        throw new Error("SAMPLE missing access state");
      await identity.transport.model.updateMany(
        { staffUserId: subjectId, revokedAt: { $exists: false } },
        { $set: { revokedAt: now() }, $inc: { revision: 1 } },
        { session, maxTimeMS: 2000 },
      );
      await packs.updateOne(
        { subjectId },
        { $set: { expiresAt: now() } },
        { session, maxTimeMS: 2000 },
      );
      await audit.create(
        [{ subjectId, operation: "factor-recovery-complete", at: now() }],
        { session },
      );
      return true;
    });
  }
  // POST-only synthetic recovery code harness; credentials and codes never enter URLs.
  identity.app.post("/reset/request", (request, response) => {
    if (typeof request.body?.email !== "string") {
      response.status(400).json({ error: "SAMPLE invalid request" });
      return;
    }
    void requestReset(request.body.email)
      .then((result) => response.json(result))
      .catch(() => response.status(503).json({ error: "SAMPLE unavailable" }));
  });
  identity.app.post("/reset/complete", (request, response) => {
    const body = request.body;
    if (
      !body ||
      Object.keys(body).some(
        (key) => !["email", "code", "newPassword"].includes(key),
      ) ||
      ![body.email, body.code, body.newPassword].every(
        (value) => typeof value === "string",
      )
    ) {
      response.status(400).json({ error: "SAMPLE invalid request" });
      return;
    }
    void (async () => {
      const user = await identity.credentials
        .findOne({ email: body.email })
        .maxTimeMS(2000);
      return user
        ? reset(
            new Types.ObjectId(String(user._id)),
            "password-reset",
            body.code,
            body.newPassword,
          )
        : false;
    })()
      .then((result) =>
        response
          .status(result ? 204 : 400)
          .json(result ? undefined : { error: "SAMPLE invalid recovery" }),
      )
      .catch(() => response.status(503).json({ error: "SAMPLE unavailable" }));
  });
  return {
    identity,
    provision,
    challenges,
    packs,
    access,
    audit,
    requestReset,
    reset,
    issuePack,
    recoverFactor,
    prepareReplacement,
    finishReplacement,
    capture: (email: string) => capture.get(email),
    hash,
  };
}
