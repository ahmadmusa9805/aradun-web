import {
  Schema,
  type Connection,
  type Model,
  type InferSchemaType,
} from "mongoose";
const schema = new Schema(
  {
    scope: {
      type: String,
      enum: ["intake", "catalog-read", "identity-login"],
      maxlength: 80,
      required: true,
    },
    subjectHash: { type: String, match: /^[a-f0-9]{64}$/, required: true },
    windowStart: { type: Date, required: true },
    requestCount: {
      type: Number,
      min: 0,
      required: true,
      validate: Number.isSafeInteger,
    },
    expiresAt: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
    schemaVersion: { type: Number, default: 1, enum: [1], required: true },
  },
  {
    collection: "rateLimitBuckets",
    strict: "throw",
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
    bufferCommands: false,
  },
);
schema.index({ scope: 1, subjectHash: 1, windowStart: 1 }, { unique: true });
schema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
export function rateLimitBucketModel(
  connection: Connection,
): Model<InferSchemaType<typeof schema>> {
  return (
    (connection.models.RateLimitBucket as
      Model<InferSchemaType<typeof schema>> | undefined) ??
    connection.model<InferSchemaType<typeof schema>>("RateLimitBucket", schema)
  );
}
