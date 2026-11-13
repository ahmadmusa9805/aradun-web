import { Router } from "express";
import { z } from "zod";

export const contentKind = z.enum(["work", "insights", "help"]);
export type ContentKind = z.infer<typeof contentKind>;
const text = z.string().trim().min(1).max(8000);
const slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  .max(160);
// Local links only. No executable URLs, protocol-relative links or arbitrary media.
const href = z
  .string()
  .regex(
    /^\/(?:(?:services|solutions|faq|insights|our-work)(?:\/[a-z0-9-]+)?|contact|consultation|get-a-quote|pricing)$/,
  );
export const blockSchema = z.discriminatedUnion("type", [
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
// Images remain excluded until an approved public asset manifest is connected.
const section = z.strictObject({
  title: text.max(200),
  blocks: z.array(blockSchema).min(1).max(100),
});
export const readingSchema = z
  .strictObject({
    kind: contentKind,
    slug,
    title: text.max(200),
    summary: text.max(1000),
    sections: z.array(section).min(1).max(30),
    related: z.array(z.strictObject({ title: text.max(200), href })).max(12),
    classification: z
      .enum(["Client Work", "ARADUN Internal Product", "Concept/Demo"])
      .optional(),
    author: text.max(160).optional(),
    publishedAt: z.iso.datetime().optional(),
  })
  .superRefine((record, context) => {
    if (
      record.sections.reduce(
        (count, section) => count + section.blocks.length,
        0,
      ) > 1000
    )
      context.addIssue({
        code: "custom",
        message: "Too many editorial blocks",
      });
    if (record.kind === "work" && !record.classification)
      context.addIssue({
        code: "custom",
        message: "Work classification required",
      });
    if (record.kind === "insights" && (!record.author || !record.publishedAt))
      context.addIssue({
        code: "custom",
        message: "Genuine author and publication date required",
      });
    if (Buffer.byteLength(JSON.stringify(record)) > 200 * 1024)
      context.addIssue({
        code: "custom",
        message: "Reading payload too large",
      });
  });
export type Reading = z.infer<typeof readingSchema>;
export type PublishedRecord = {
  publicationState: "draft" | "published" | "unpublished";
  archived: boolean;
  publishedSnapshot?: unknown;
};
/** Reader must recheck the authoritative current state on every call, never draft/search copies. */
export type ContentReader = (
  kind: ContentKind,
  slug: string,
) => Promise<PublishedRecord | null>;
// No genuine approved long-form records have been supplied. No demo records in application data.
const emptyReader: ContentReader = async () => null;
export function createPublicContentRouter(reader: ContentReader = emptyReader) {
  const router = Router();
  router.use((_request, response, next) => {
    response.setHeader("Cache-Control", "no-store");
    next();
  });
  router.get("/:kind/:slug", async (request, response) => {
    const parsedKind = contentKind.safeParse(request.params.kind);
    const parsedSlug = slug.safeParse(request.params.slug);
    if (
      !parsedKind.success ||
      !parsedSlug.success ||
      Object.keys(request.query).length
    ) {
      response.sendStatus(404);
      return;
    }
    try {
      const record = await reader(parsedKind.data, parsedSlug.data);
      if (
        !record ||
        record.archived !== false ||
        record.publicationState !== "published"
      ) {
        response.sendStatus(404);
        return;
      }
      const parsed = readingSchema.safeParse(record.publishedSnapshot);
      if (
        !parsed.success ||
        parsed.data.kind !== parsedKind.data ||
        parsed.data.slug !== parsedSlug.data
      ) {
        response.sendStatus(404);
        return;
      }
      response.json(parsed.data);
    } catch {
      response.status(503).json({ error: "Reading temporarily unavailable" });
    }
  });
  return router;
}
