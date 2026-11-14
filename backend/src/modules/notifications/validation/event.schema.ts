import { z } from "zod";
const text = (max: number) => z.string().min(1).max(max);
const id = z
  .string()
  .regex(/^[a-fA-F0-9]{24}$/)
  .transform((value) => value.toLowerCase());
export const outboxInputSchema = z
  .strictObject({
    kind: z.enum(["inquiry-acknowledgement", "staff-intake-alert"]),
    aggregateType: z.literal("inquiry"),
    aggregateId: id,
    recipient: z.discriminatedUnion("kind", [
      z.strictObject({
        kind: z.literal("prospect"),
        prospectEmail: z.email().max(254),
      }),
      z.strictObject({ kind: z.literal("staff"), staffUserId: id }),
      z.strictObject({ kind: z.literal("inbox") }),
    ]),
    templateKey: z.enum(["inquiry-acknowledgement", "staff-intake-alert"]),
    templateVersion: z.literal(1),
    payload: z.strictObject({
      reference: text(100).regex(/^[A-Za-z0-9_-]+$/),
      inquiryType: z.enum(["quote", "contact", "consultation"]),
      safePublicSummary: text(500).optional(),
      locale: z.literal("en").default("en"),
    }),
  })
  .superRefine((value, context) => {
    if (
      value.templateKey !== value.kind ||
      (value.kind === "inquiry-acknowledgement") !==
        (value.recipient.kind === "prospect")
    )
      context.addIssue({
        code: "custom",
        message: "Invalid notification template/recipient contract",
      });
  });
export type OutboxInput = z.infer<typeof outboxInputSchema>;
export function eventDedupeKey(event: OutboxInput) {
  return `${event.aggregateType}:${event.aggregateId}:${event.kind}:${event.recipient.kind}:${event.recipient.kind === "staff" ? event.recipient.staffUserId : "submitted"}:v${event.templateVersion}`;
}
