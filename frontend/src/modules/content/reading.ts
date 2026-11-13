import { z } from "zod";

const text = z.string().min(1).max(8000);
const href = z
  .string()
  .regex(
    /^\/(?:(?:services|solutions|faq|insights|our-work)(?:\/[a-z0-9-]+)?|contact|consultation|get-a-quote|pricing)$/,
  );
const block = z.discriminatedUnion("type", [
  z.strictObject({ type: z.literal("paragraph"), text }),
  z.strictObject({ type: z.literal("heading"), text: text.max(200) }),
  z.strictObject({
    type: z.literal("list"),
    items: z.array(text).min(1).max(40),
  }),
  z.strictObject({ type: z.literal("link"), text: text.max(200), href }),
  z.strictObject({ type: z.literal("quote"), text }),
  z.strictObject({ type: z.literal("code-text"), text }),
]);
export const readingSchema = z
  .strictObject({
    kind: z.enum(["work", "insights", "help"]),
    slug: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      .max(160),
    title: text.max(200),
    summary: text.max(1000),
    sections: z
      .array(
        z.strictObject({
          title: text.max(200),
          blocks: z.array(block).min(1).max(100),
        }),
      )
      .min(1)
      .max(30),
    related: z.array(z.strictObject({ title: text.max(200), href })).max(12),
    classification: z
      .enum(["Client Work", "ARADUN Internal Product", "Concept/Demo"])
      .optional(),
    author: text.max(160).optional(),
    publishedAt: z.iso.datetime().optional(),
  })
  .refine((record) => record.kind !== "work" || Boolean(record.classification))
  .refine(
    (record) =>
      record.kind !== "insights" ||
      Boolean(record.author && record.publishedAt),
  );
export type Reading = z.infer<typeof readingSchema>;
export const readingPaths = {
  work: "/our-work",
  insights: "/insights",
  help: "/faq",
} as const;
