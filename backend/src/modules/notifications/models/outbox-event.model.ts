import {
  Schema,
  type Connection,
  type Model,
  type InferSchemaType,
} from "mongoose";
import {
  outboxInputSchema,
  eventDedupeKey,
} from "../validation/event.schema.js";
const short = (max: number) => ({ type: String, maxlength: max });
const recipient = new Schema(
  {
    kind: { type: String, enum: ["prospect", "staff"], required: true },
    prospectEmail: short(254),
    staffUserId: Schema.Types.ObjectId,
  },
  { _id: false, strict: "throw", versionKey: false },
);
const payload = new Schema(
  {
    reference: { ...short(100), required: true },
    inquiryType: {
      type: String,
      enum: ["contact", "quote", "consultation"],
      required: true,
    },
    safePublicSummary: short(500),
    locale: { type: String, enum: ["en"], default: "en", required: true },
  },
  { _id: false, strict: "throw", versionKey: false },
);
const schema = new Schema(
  {
    dedupeKey: { ...short(200), required: true },
    kind: {
      type: String,
      enum: ["inquiry-acknowledgement", "staff-intake-alert"],
      required: true,
    },
    aggregateType: {
      type: String,
      enum: ["inquiry", "opportunity"],
      required: true,
    },
    aggregateId: { type: Schema.Types.ObjectId, required: true },
    recipient: { type: recipient, required: true },
    templateKey: { ...short(100), required: true },
    templateVersion: {
      type: Number,
      required: true,
      min: 1,
      validate: Number.isSafeInteger,
    },
    payload: { type: payload, required: true },
    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "retry",
        "sent",
        "failed",
        "suppressed",
        "uncertain",
      ],
      default: "pending",
      required: true,
    },
    attempts: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
      required: true,
      validate: Number.isSafeInteger,
    },
    nextAttemptAt: { type: Date, default: Date.now, required: true },
    leaseToken: short(100),
    leaseUntil: Date,
    provider: short(80),
    providerMessageId: short(300),
    lastAttemptAt: Date,
    sentAt: Date,
    lastErrorCode: short(100),
    lastErrorSummary: short(1000),
    deliveryState: {
      type: String,
      enum: ["unknown", "accepted", "delivered", "bounced"],
      default: "unknown",
      required: true,
    },
    expiresAt: Date,
    schemaVersion: {
      type: Number,
      min: 1,
      default: 1,
      required: true,
      validate: Number.isSafeInteger,
    },
    revision: {
      type: Number,
      min: 0,
      default: 0,
      required: true,
      validate: Number.isSafeInteger,
    },
  },
  {
    collection: "outboxEvents",
    strict: "throw",
    autoIndex: false,
    autoCreate: false,
    timestamps: true,
    versionKey: "revision",
  },
);
schema.pre("validate", function () {
  const raw = JSON.parse(JSON.stringify(this.toObject()));
  const parsed = outboxInputSchema.safeParse({
    kind: raw.kind,
    aggregateType: raw.aggregateType,
    aggregateId: raw.aggregateId,
    recipient: raw.recipient,
    templateKey: raw.templateKey,
    templateVersion: raw.templateVersion,
    payload: raw.payload,
  });
  if (!parsed.success || this.dedupeKey !== eventDedupeKey(parsed.data))
    this.invalidate("payload", "Invalid controlled outbox identity/payload");
  if (this.status === "processing" && !(this.leaseToken && this.leaseUntil))
    this.invalidate("leaseToken", "Processing requires a lease");
  if (
    this.isNew &&
    (this.status !== "pending" ||
      this.attempts !== 0 ||
      this.deliveryState !== "unknown" ||
      this.leaseToken ||
      this.leaseUntil ||
      this.provider ||
      this.providerMessageId ||
      this.sentAt)
  )
    this.invalidate("status", "New events must be unattempted pending work");
  if (this.expiresAt)
    this.invalidate("expiresAt", "Retention/expiry is not approved");
});
schema.pre("save", function (options) {
  if (
    !this.isNew ||
    options.validateBeforeSave === false ||
    options.validateModifiedOnly
  )
    throw new Error(
      "Outbox writes require validated enqueue or fenced worker commands",
    );
});
const mutable = new Set([
  "status",
  "attempts",
  "nextAttemptAt",
  "leaseToken",
  "leaseUntil",
  "provider",
  "providerMessageId",
  "lastAttemptAt",
  "sentAt",
  "lastErrorCode",
  "lastErrorSummary",
  "deliveryState",
  "updatedAt",
  "revision",
]);
for (const operation of [
  "updateOne",
  "updateMany",
  "findOneAndUpdate",
] as const)
  schema.pre(operation, function () {
    if (this.getOptions().upsert) throw new Error("Outbox upsert refused");
    const update = this.getUpdate();
    if (!update || Array.isArray(update))
      throw new Error("Outbox pipeline/replacement refused");
    for (const [operator, fields] of Object.entries(update)) {
      if (
        operator === "$setOnInsert" &&
        Object.keys(fields).every((key) => key === "createdAt")
      )
        continue;
      if (
        !["$set", "$unset", "$inc"].includes(operator) ||
        !fields ||
        typeof fields !== "object" ||
        Object.keys(fields).some((field) => !mutable.has(field))
      )
        throw new Error("Outbox event identity is immutable");
    }
    this.setOptions({ runValidators: true });
  });
for (const operation of [
  "replaceOne",
  "findOneAndReplace",
  "findOneAndDelete",
  "deleteMany",
] as const)
  schema.pre(operation, function () {
    throw new Error("Outbox replacement/deletion is not exposed");
  });
schema.pre("deleteOne", { document: true, query: true }, function () {
  throw new Error("Outbox deletion requires approved retention");
});
schema.pre("bulkWrite", function () {
  throw new Error("Outbox bulk writes are not exposed");
});
schema.pre("insertMany", function () {
  throw new Error("Use validated enqueue");
});
schema.index({ dedupeKey: 1 }, { unique: true });
schema.index({ status: 1, nextAttemptAt: 1, _id: 1 });
schema.index({ status: 1, leaseUntil: 1 });
schema.index({ aggregateType: 1, aggregateId: 1 });
export function outboxEventModel(
  connection: Connection,
): Model<InferSchemaType<typeof schema>> {
  if (
    connection.models.OutboxEvent &&
    connection.models.OutboxEvent.schema !== schema
  )
    throw new Error("Incompatible OutboxEvent registration");
  return (
    (connection.models.OutboxEvent as
      Model<InferSchemaType<typeof schema>> | undefined) ??
    connection.model<InferSchemaType<typeof schema>>(
      "OutboxEvent",
      schema,
      "outboxEvents",
    )
  );
}
