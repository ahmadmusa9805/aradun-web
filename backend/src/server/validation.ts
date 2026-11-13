import { z } from "zod";
import { ServiceError } from "./errors.js";

/** Reject hostile structure before schema parsing; never use browser objects as DB filters. */
export function parseInput<T>(schema: z.ZodType<T>, input: unknown): T {
  let nodes = 0;
  const seen = new WeakSet<object>();
  function inspect(value: unknown, depth: number) {
    if (++nodes > 10_000 || depth > 20) throw new ServiceError("invalid_input");
    if (value === null) return;
    if (typeof value !== "object") {
      if (
        !["string", "boolean", "number"].includes(typeof value) ||
        (typeof value === "number" && !Number.isFinite(value)) ||
        (typeof value === "string" && value.length > 256 * 1024)
      )
        throw new ServiceError("invalid_input");
      return;
    }
    if (seen.has(value)) throw new ServiceError("invalid_input");
    seen.add(value);
    const prototype: unknown = Object.getPrototypeOf(value);
    if (
      Array.isArray(value)
        ? prototype !== Array.prototype
        : prototype !== Object.prototype && prototype !== null
    )
      throw new ServiceError("invalid_input");
    for (const key of Reflect.ownKeys(value)) {
      if (Array.isArray(value) && key === "length") continue;
      if (
        typeof key !== "string" ||
        key.startsWith("$") ||
        key.includes(".") ||
        ["__proto__", "constructor", "prototype"].includes(key)
      )
        throw new ServiceError("invalid_input");
      const descriptor = Object.getOwnPropertyDescriptor(value, key)!;
      if (!descriptor.enumerable || !Object.hasOwn(descriptor, "value"))
        throw new ServiceError("invalid_input");
      inspect(descriptor.value, depth + 1);
    }
  }
  inspect(input, 0);
  // Bound UTF-8 size before returning parsed input; never emit payloads in errors.
  try {
    if (Buffer.byteLength(JSON.stringify(input) ?? "", "utf8") > 256 * 1024)
      throw new Error();
  } catch {
    throw new ServiceError("invalid_input");
  }
  const result = schema.safeParse(input);
  if (!result.success) throw new ServiceError("invalid_input");
  return result.data;
}
