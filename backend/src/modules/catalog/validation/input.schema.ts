import { z } from "zod";

const text = z.string().trim().min(1).max(1000);
const slug = z
  .string()
  .max(150)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const categoryId = z.string().regex(/^CAT-0[1-8]$/);
const serviceId = z.string().regex(/^SVC-0(?:0[1-9]|[1-4][0-9]|5[0-7])$/);
const solutionId = z.string().regex(/^SOL-00[1-5]$/);
const stringIds = z.array(text).max(100);
const category = z.strictObject({
  categoryId,
  name: text,
  slug,
  route: text,
  order: z.number().int().min(1).max(8),
});
const availability = z.enum(["available", "specialist-led", "coming-soon"]);
const service = z.strictObject({
  serviceId,
  pageId: z.string().regex(/^PUB-S\d{3}$/),
  name: text,
  slug,
  route: text,
  categoryIds: z.array(categoryId).min(1).max(8),
  primaryCategoryId: categoryId,
  availability: availability.optional(),
  availabilityApprovedAt: z.iso.datetime().optional(),
  availabilityApprovedBy: text.optional(),
  sourcePriceLabel: text,
  packageIds: stringIds,
  relatedServiceIds: z.array(serviceId).max(56),
  solutionIds: z.array(solutionId).max(5),
  contentVersion: text,
  publication: z.literal("draft"),
});
const solution = z.strictObject({
  solutionId,
  pageId: z.string().regex(/^SOL-0[1-5]$/),
  name: text,
  slug,
  route: text,
  serviceIds: z.array(serviceId).max(57),
  packageIds: stringIds,
  sourceTiers: z
    .array(
      z.strictObject({
        tierLabel: z.enum(["Starter", "Professional", "Enterprise"]),
        sourceOrdinal: z.number().int().min(1).max(3),
        sourcePriceLabel: text,
      }),
    )
    .length(3),
  version: text,
  publication: z.literal("draft"),
});

/** This task validates draft source identities. Full price/scope/body contracts belong to M05-02/04/05. */
export const catalogSchema = z
  .strictObject({
    version: text,
    releaseStatus: z.literal("draft"),
    sourceHashes: z.record(text, z.string().regex(/^[a-f0-9]{64}$/)),
    categories: z.array(category).length(8),
    services: z.array(service).length(57),
    solutions: z.array(solution).length(5),
  })
  .superRefine((catalog, context) => {
    const fail = (message: string) =>
      context.addIssue({ code: "custom", message });
    const unique = (values: readonly string[], message: string) => {
      if (new Set(values).size !== values.length) fail(message);
    };
    unique(
      catalog.categories.map((item) => item.categoryId),
      "Duplicate category ID",
    );
    unique(
      catalog.categories.map((item) => String(item.order)),
      "Duplicate category order",
    );
    unique(
      catalog.services.map((item) => item.serviceId),
      "Duplicate service ID",
    );
    unique(
      catalog.solutions.map((item) => item.solutionId),
      "Duplicate solution ID",
    );
    unique(
      [...catalog.categories, ...catalog.services].map((item) => item.slug),
      "Category/service slug collision",
    );
    unique(
      catalog.solutions.map((item) => item.slug),
      "Solution slug collision",
    );
    unique(
      [...catalog.categories, ...catalog.services, ...catalog.solutions].map(
        (item) => item.route,
      ),
      "Duplicate catalog route",
    );
    const categoryIds = new Set(
      catalog.categories.map((item) => item.categoryId),
    );
    const serviceIds = new Set(catalog.services.map((item) => item.serviceId));
    const solutionIds = new Set(
      catalog.solutions.map((item) => item.solutionId),
    );
    for (const item of catalog.categories)
      if (item.route !== `/services/${item.slug}`)
        fail("Category route mismatch");
    for (const item of catalog.services) {
      if (
        item.pageId !== `PUB-S${item.serviceId.slice(4)}` ||
        item.route !== `/services/${item.slug}`
      )
        fail("Service identity/route mismatch");
      unique(item.categoryIds, "Duplicate category membership");
      if (
        item.categoryIds.some((id) => !categoryIds.has(id)) ||
        !item.categoryIds.includes(item.primaryCategoryId)
      )
        fail("Invalid category reference");
      if (
        item.relatedServiceIds.some(
          (id) => !serviceIds.has(id) || id === item.serviceId,
        ) ||
        item.solutionIds.some((id) => !solutionIds.has(id))
      )
        fail("Invalid related offer reference");
      unique(item.relatedServiceIds, "Duplicate related service");
      unique(item.solutionIds, "Duplicate related solution");
      if (item.packageIds.length)
        fail(
          "Package registry not yet implemented; no dangling package IDs allowed",
        );
      if (
        Boolean(item.availability) !==
          Boolean(item.availabilityApprovedAt && item.availabilityApprovedBy) ||
        Boolean(item.availabilityApprovedAt) !==
          Boolean(item.availabilityApprovedBy)
      )
        fail("Availability requires accountable approval");
    }
    if (
      catalog.services.reduce(
        (sum, item) => sum + item.categoryIds.length,
        0,
      ) !== 58
    )
      fail("Expected 58 memberships");
    const crossListed = catalog.services.find(
      (item) => item.serviceId === "SVC-009",
    );
    if (
      !crossListed ||
      crossListed.primaryCategoryId !== "CAT-02" ||
      crossListed.categoryIds.join(",") !== "CAT-02,CAT-07"
    )
      fail("SVC-009 canonical identity/memberships changed");
    for (const item of catalog.solutions) {
      if (
        item.pageId !== `SOL-${item.solutionId.slice(-2)}` ||
        item.route !== `/solutions/${item.slug}`
      )
        fail("Solution identity/route mismatch");
      unique(item.serviceIds, "Duplicate solution service");
      if (item.serviceIds.some((id) => !serviceIds.has(id)))
        fail("Invalid solution constituent");
      if (item.packageIds.length)
        fail(
          "Package registry not yet implemented; no dangling package IDs allowed",
        );
      if (
        item.sourceTiers
          .map((tier) => `${tier.sourceOrdinal}:${tier.tierLabel}`)
          .join(",") !== "1:Starter,2:Professional,3:Enterprise"
      )
        fail("Source tier order changed");
    }
  });
export type DraftCatalog = z.infer<typeof catalogSchema>;
