import {
  Schema,
  type Connection,
  type Model,
  type InferSchemaType,
} from "mongoose";
const schema = new Schema(
  {
    _id: { type: String, enum: ["inquiries"], required: true },
    value: {
      type: Number,
      required: true,
      min: 0,
      max: Number.MAX_SAFE_INTEGER,
      validate: Number.isSafeInteger,
    },
  },
  {
    collection: "inquirySequences",
    strict: "throw",
    versionKey: false,
    autoCreate: false,
    autoIndex: false,
    bufferCommands: false,
  },
);
/** One per-database sequence; the built-in unique _id index fences initial creation. */
export function inquirySequenceModel(
  connection: Connection,
): Model<InferSchemaType<typeof schema>> {
  return (
    (connection.models.InquirySequence as
      Model<InferSchemaType<typeof schema>> | undefined) ??
    connection.model<InferSchemaType<typeof schema>>("InquirySequence", schema)
  );
}
