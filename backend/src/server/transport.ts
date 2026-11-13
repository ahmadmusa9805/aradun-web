import { Types } from "mongoose";
import { objectIdSchema, utcInstantSchema } from "./db/value-schemas.server.js";

/** Map only explicitly chosen DTO fields; never recursively serialize whole documents. */
export function serializeId(value: Types.ObjectId | string): string {
  return objectIdSchema.parse(
    value instanceof Types.ObjectId ? value.toHexString() : value,
  );
}
export function serializeInstant(value: Date | string): string {
  return utcInstantSchema.parse(
    value instanceof Date ? value.toISOString() : value,
  );
}
