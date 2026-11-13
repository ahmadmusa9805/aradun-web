import {
  Schema,
  type Connection,
  type Model,
  type InferSchemaType,
} from "mongoose";
const integer = { type: Number, min: 0, validate: Number.isSafeInteger };
const schema = new Schema(
  {
    tokenHash: { type: String, required: true, match: /^[a-f0-9]{64}$/ },
    staffUserId: { type: Schema.Types.ObjectId, required: true },
    accessVersion: { ...integer, required: true },
    authenticatedAt: { type: Date, required: true },
    lastSeenAt: { type: Date, required: true },
    expiresAt: { type: Date, required: true },
    idleExpiresAt: { type: Date, required: true },
    assurance: { type: String, enum: ["primary", "mfa"], required: true },
    mfaVerifiedAt: Date,
    revokedAt: Date,
    revokedBy: Schema.Types.ObjectId,
    schemaVersion: { type: Number, required: true, enum: [1], default: 1 },
    revision: { ...integer, required: true, default: 0 },
  },
  {
    collection: "staffSessions",
    strict: "throw",
    timestamps: true,
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
    bufferCommands: false,
  },
);
schema.pre("validate", function () {
  if (this.assurance === "mfa" && !this.mfaVerifiedAt)
    this.invalidate("assurance", "Validated factor evidence required");
  if (
    this.expiresAt.getTime() > this.authenticatedAt.getTime() + 28800000 ||
    this.idleExpiresAt > this.expiresAt ||
    this.idleExpiresAt.getTime() > this.lastSeenAt.getTime() + 1800000
  )
    this.invalidate("expiresAt", "Invalid session policy");
});
schema.index({ tokenHash: 1 }, { unique: true });
schema.index({ staffUserId: 1, revokedAt: 1 });
schema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
export function staffSessionModel(
  connection: Connection,
): Model<InferSchemaType<typeof schema>> {
  return (
    (connection.models.StaffSession as
      Model<InferSchemaType<typeof schema>> | undefined) ??
    connection.model<InferSchemaType<typeof schema>>("StaffSession", schema)
  );
}
