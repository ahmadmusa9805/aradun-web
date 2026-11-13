import {
  Schema,
  type Connection,
  type InferSchemaType,
  type Model,
} from "mongoose";
import { auditPolicies, auditActions } from "../audit-policy.js";

const actor = new Schema(
  {
    kind: {
      type: String,
      required: true,
      enum: ["staff", "system", "anonymous"],
    },
    staffUserId: {
      type: Schema.Types.ObjectId,
      required(this: { kind: string }): boolean {
        return this.kind === "staff";
      },
    },
    jobKey: {
      type: String,
      maxlength: 100,
      required(this: { kind: string }): boolean {
        return this.kind === "system";
      },
    },
  },
  { _id: false, strict: "throw" },
);
const schema = new Schema(
  {
    eventKey: { type: String, required: true, maxlength: 180, immutable: true },
    actor: { type: actor, required: true, immutable: true },
    action: {
      type: String,
      required: true,
      enum: auditActions,
      immutable: true,
    },
    targetType: {
      type: String,
      required: true,
      enum: ["article", "staffUser", "opportunity"],
      immutable: true,
    },
    targetId: { type: String, required: true, maxlength: 180, immutable: true },
    outcome: {
      type: String,
      required: true,
      enum: ["success", "denied", "failed"],
      immutable: true,
    },
    occurredAt: {
      type: Date,
      required: true,
      default: Date.now,
      immutable: true,
    },
    correlationId: {
      type: String,
      required: true,
      maxlength: 100,
      immutable: true,
    },
    changedFields: {
      type: [String],
      required: true,
      default: [],
      immutable: true,
      validate: [(value: string[]) => value.length <= 50, "Too many fields"],
    },
    safeSummary: {
      type: String,
      required: true,
      maxlength: 2000,
      immutable: true,
    },
    reasonCode: { type: String, maxlength: 100, immutable: true },
    actorIpHash: { type: String, immutable: true },
    retentionClass: {
      type: String,
      required: true,
      default: "security",
      enum: ["security", "business-change", "privacy-action"],
      immutable: true,
    },
    schemaVersion: {
      type: Number,
      required: true,
      default: 1,
      immutable: true,
      validate: Number.isSafeInteger,
      min: 1,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
      immutable: true,
    },
  },
  {
    collection: "auditEvents",
    strict: "throw",
    versionKey: false,
    autoIndex: false,
    autoCreate: false,
  },
);
schema.pre("validate", function () {
  const policy = auditPolicies[this.action];
  if (
    !policy ||
    this.targetType !== policy.targetType ||
    !this.changedFields.every((field) =>
      (policy.fields as readonly string[]).includes(field),
    ) ||
    new Set(this.changedFields).size !== this.changedFields.length
  )
    this.invalidate("changedFields", "Invalid audit operation");
  if (policy && this.safeSummary !== `${policy.summary}: ${this.outcome}`)
    this.invalidate(
      "safeSummary",
      "Only controlled audit summaries are permitted",
    );
  if (
    this.actor &&
    ((this.actor.kind !== "staff" && this.actor.staffUserId) ||
      (this.actor.kind !== "system" && this.actor.jobKey))
  )
    this.invalidate("actor", "Invalid actor identity");
});
schema.index({ eventKey: 1 }, { unique: true });
schema.index({ targetType: 1, targetId: 1, occurredAt: -1, _id: -1 });
schema.index({ "actor.staffUserId": 1, occurredAt: -1 });
schema.index({ correlationId: 1 });
schema.index({ occurredAt: -1, _id: -1 });
schema.pre("save", function () {
  if (!this.isNew) throw new Error("Audit history is append-only");
});
for (const operation of [
  "updateOne",
  "updateMany",
  "replaceOne",
  "findOneAndUpdate",
  "findOneAndReplace",
  "findOneAndDelete",
  "deleteMany",
] as const)
  schema.pre(operation, function () {
    throw new Error("Audit history is append-only");
  });
schema.pre("deleteOne", { document: true, query: true }, function () {
  throw new Error("Audit history is append-only");
});
schema.pre("bulkWrite", function () {
  throw new Error("Audit history is append-only");
});

/** Internal persistence only; features use the restricted audit service, not the model. */
export function auditEventModel(
  connection: Connection,
): Model<InferSchemaType<typeof schema>> {
  if (
    connection.models.AuditEvent &&
    connection.models.AuditEvent.schema !== schema
  )
    throw new Error("Incompatible AuditEvent registration");
  return (
    (connection.models.AuditEvent as
      Model<InferSchemaType<typeof schema>> | undefined) ??
    connection.model<InferSchemaType<typeof schema>>(
      "AuditEvent",
      schema,
      "auditEvents",
    )
  );
}
