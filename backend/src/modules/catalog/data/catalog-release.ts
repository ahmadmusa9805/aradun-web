import source from "./catalog-source.json" with { type: "json" };
import { catalogSchema } from "../validation/input.schema.js";

function freeze<T>(value: T): T {
  if (value && typeof value === "object") {
    for (const child of Object.values(value)) freeze(child);
    Object.freeze(value);
  }
  return value;
}
/** Parsed and frozen once. No mutable browser inputs, DB collection or fabricated release approver. */
export const catalogRelease = freeze(catalogSchema.parse(source));
