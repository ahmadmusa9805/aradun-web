import {
  Schema,
  type Connection,
  type InferSchemaType,
  type Model,
} from "mongoose";
const schema = new Schema(
  {
    _id: { type: String, enum: ["staff-access"], required: true },
    revision: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      validate: Number.isSafeInteger,
    },
    bootstrapCompletedAt: Date,
    bootstrapStaffUserId: Schema.Types.ObjectId,
    bootstrapApprovalHash: { type: String, match: /^[a-f0-9]{64}$/ },
  },
  {
    collection: "identityLifecycleControl",
    strict: "throw",
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
    bufferCommands: false,
  },
);
// The fixed _id serializes lifecycle changes and permanently closes bootstrap.
export function lifecycleControlModel(
  connection: Connection,
): Model<InferSchemaType<typeof schema>> {
  return (
    (connection.models.IdentityLifecycleControl as
      Model<InferSchemaType<typeof schema>> | undefined) ??
    connection.model<InferSchemaType<typeof schema>>(
      "IdentityLifecycleControl",
      schema,
    )
  );
}
