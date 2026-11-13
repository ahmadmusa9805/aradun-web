import {
  Schema,
  type Connection,
  type Model,
  type InferSchemaType,
} from "mongoose";
export const LOCAL_PROVIDER = "aradun-local";
const integer = { type: Number, min: 0, validate: Number.isSafeInteger };
const staffSchema = new Schema(
  {
    provider: { type: String, maxlength: 80 },
    providerSubject: { type: String, maxlength: 300 },
    email: { type: String, required: true, maxlength: 254 },
    emailNormalized: { type: String, required: true, maxlength: 254 },
    displayName: { type: String, required: true, maxlength: 120 },
    roles: {
      type: [{ type: String, enum: ["admin", "sales", "editor"] }],
      required: true,
      validate: (roles: string[]) =>
        roles.length > 0 && new Set(roles).size === roles.length,
    },
    status: {
      type: String,
      enum: ["invited", "active", "suspended", "deactivated"],
      default: "invited",
      required: true,
    },
    provisionedBy: Schema.Types.ObjectId,
    activatedAt: Date,
    deactivatedAt: Date,
    deactivatedBy: Schema.Types.ObjectId,
    accessVersion: { ...integer, required: true, default: 0 },
    lastSignInAt: Date,
    preferredTimezone: {
      type: String,
      required: true,
      default: "UTC",
      validate: (value: string) => {
        try {
          new Intl.DateTimeFormat("en", { timeZone: value });
          return true;
        } catch {
          return false;
        }
      },
    },
    mfaPolicy: {
      type: String,
      enum: ["required", "provider-policy", "pending-decision"],
      required: true,
      default: "required",
    },
    mfaLastVerifiedAt: Date,
    schemaVersion: { type: Number, enum: [1], required: true, default: 1 },
    revision: { ...integer, required: true, default: 0 },
    archivedAt: Date,
    archivedBy: Schema.Types.ObjectId,
  },
  {
    collection: "staffUsers",
    strict: "throw",
    timestamps: true,
    versionKey: "revision",
    optimisticConcurrency: true,
    autoIndex: false,
    autoCreate: false,
    bufferCommands: false,
  },
);
staffSchema.pre("validate", function () {
  if (this.emailNormalized !== this.email.trim().toLowerCase())
    this.invalidate("emailNormalized", "Invalid identity normalization");
  if (
    this.status === "active" &&
    (!this.provider ||
      !this.providerSubject ||
      !this.activatedAt ||
      this.mfaPolicy !== "required")
  )
    this.invalidate(
      "status",
      "Activation requires verified mapping and required MFA",
    );
  if (
    this.status === "deactivated" &&
    (!this.deactivatedAt || !this.deactivatedBy)
  )
    this.invalidate("status", "Missing lifecycle evidence");
});
staffSchema.index(
  { provider: 1, providerSubject: 1 },
  {
    unique: true,
    partialFilterExpression: {
      provider: { $type: "string" },
      providerSubject: { $type: "string" },
    },
  },
);
staffSchema.index({ emailNormalized: 1 }, { unique: true });
staffSchema.index({ status: 1, roles: 1 });
export function staffUserModel(
  connection: Connection,
): Model<InferSchemaType<typeof staffSchema>> {
  return (
    (connection.models.StaffUser as
      Model<InferSchemaType<typeof staffSchema>> | undefined) ??
    connection.model<InferSchemaType<typeof staffSchema>>(
      "StaffUser",
      staffSchema,
    )
  );
}
