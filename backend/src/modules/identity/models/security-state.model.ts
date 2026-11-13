import {
  Schema,
  type Connection,
  type InferSchemaType,
  type Model,
} from "mongoose";
const options = {
  strict: "throw" as const,
  autoCreate: false,
  autoIndex: false,
  bufferCommands: false,
  versionKey: false as const,
};
const hash = { type: String, match: /^[a-f0-9]{64}$/, required: true };
const factor = new Schema(
  {
    staffUserId: { type: Schema.Types.ObjectId, required: true },
    sealed: String,
    pendingSealed: String,
    pendingExpiresAt: Date,
    enabled: { type: Boolean, default: false },
    replacementPending: { type: Boolean, default: false },
    lastStep: { type: Number, default: -1 },
    revision: { type: Number, default: 0 },
  },
  { ...options, collection: "identityFactors" },
);
factor.index({ staffUserId: 1 }, { unique: true });
const challenge = new Schema(
  {
    staffUserId: { type: Schema.Types.ObjectId, required: true },
    subject: { type: String, required: true },
    accessVersion: { type: Number, required: true },
    purpose: {
      type: String,
      enum: ["password-reset", "factor-replace"],
      required: true,
    },
    tokenHash: hash,
    issuedAt: { type: Date, required: true },
    expiresAt: { type: Date, required: true },
    consumedAt: Date,
    sealedPending: String,
  },
  { ...options, collection: "identityChallenges" },
);
challenge.index({ tokenHash: 1 }, { unique: true });
challenge.index({ staffUserId: 1, purpose: 1 });
challenge.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
const pack = new Schema(
  {
    staffUserId: { type: Schema.Types.ObjectId, required: true },
    accessVersion: { type: Number, required: true },
    expiresAt: { type: Date, required: true },
    codes: {
      type: [
        new Schema({ hash, consumedAt: Date }, { _id: false, strict: "throw" }),
      ],
      required: true,
    },
  },
  { ...options, collection: "identityRecoveryPacks" },
);
pack.index({ staffUserId: 1 }, { unique: true });
const event = new Schema(
  {
    staffUserId: { type: Schema.Types.ObjectId, required: true },
    operation: {
      type: String,
      enum: [
        "mfa-enrolled",
        "mfa-verified",
        "password-reset",
        "password-changed",
        "recovery-pack",
        "factor-recovery-start",
        "factor-recovery-complete",
      ],
      required: true,
    },
    occurredAt: { type: Date, required: true },
  },
  { ...options, collection: "identitySecurityEvents" },
);
event.index({ staffUserId: 1, occurredAt: -1 });
function model<T>(connection: Connection, name: string, schema: Schema<T>) {
  return (
    (connection.models[name] as Model<T> | undefined) ??
    connection.model<T>(name, schema)
  );
}
export const identityFactorModel = (c: Connection) =>
  model<InferSchemaType<typeof factor>>(c, "IdentityFactor", factor);
export const identityChallengeModel = (c: Connection) =>
  model<InferSchemaType<typeof challenge>>(c, "IdentityChallenge", challenge);
export const identityRecoveryPackModel = (c: Connection) =>
  model<InferSchemaType<typeof pack>>(c, "IdentityRecoveryPack", pack);
export const identitySecurityEventModel = (c: Connection) =>
  model<InferSchemaType<typeof event>>(c, "IdentitySecurityEvent", event);
