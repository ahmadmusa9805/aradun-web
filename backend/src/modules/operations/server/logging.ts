import { randomUUID } from "node:crypto";
import { z } from "zod";
import { parseInput } from "../../../server/validation.js";

const record = z.strictObject({
  code: z.enum([
    "audit_write_failed",
    "dependency_unavailable",
    "operation_failed",
  ]),
  correlationId: z.uuid(),
  severity: z.enum(["warning", "error"]).default("error"),
});
/** Callers supply codes only. Never log error.message, stack, bodies, headers or provider payloads. */
export function logOperationalFailure(
  input: unknown,
  sink: (line: string) => void = console.error,
) {
  let safe: z.infer<typeof record>;
  try {
    safe = parseInput(record, input);
  } catch {
    safe = {
      code: "operation_failed",
      correlationId: randomUUID(),
      severity: "error",
    };
  }
  try {
    sink(JSON.stringify({ ...safe, occurredAt: new Date().toISOString() }));
    return true;
  } catch {
    return false;
  } // No claim of delivered monitoring when the local sink fails.
}
