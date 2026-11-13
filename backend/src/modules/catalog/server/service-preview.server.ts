import { z } from "zod";
import source from "../data/service-content.json" with { type: "json" };
import { catalogRelease } from "../data/catalog-release.js";
import { sourcePricePositions } from "../data/packages.js";
import { presentSourcePosition } from "./price-presentation.server.js";
import { resolveCatalogRoute } from "./catalog.service.server.js";

const text = z.string().min(1).max(8000);
const copies = z
  .array(
    z.strictObject({
      serviceId: text,
      summary: text,
      fit: text,
      problem: text,
      benefit: text,
      candidates: text,
      approach: text,
      description: text,
      relatedPageIds: z.array(text).max(10),
      faqs: z.array(z.strictObject({ question: text, answer: text })).length(4),
    }),
  )
  .length(57)
  .parse(source);
const relatedRecords = [
  ...catalogRelease.services,
  ...catalogRelease.solutions,
];
if (
  new Set(copies.map((item) => item.serviceId)).size !== 57 ||
  copies.some(
    (item) =>
      !catalogRelease.services.some(
        (service) => service.serviceId === item.serviceId,
      ) ||
      item.relatedPageIds.some(
        (id) => !relatedRecords.some((record) => record.pageId === id),
      ),
  )
)
  throw new Error("Invalid service copy references");

/** Safe draft projection only; the router owns development-only exposure. No proof/approval data. */
export function servicePreview(slug: string) {
  const resolved = resolveCatalogRoute(`/services/${slug}`);
  if (resolved?.kind !== "service") return undefined;
  const record = resolved.record;
  const copy = copies.find((item) => item.serviceId === record.serviceId)!;
  const parent = catalogRelease.categories.find(
    (category) => category.categoryId === record.primaryCategoryId,
  )!;
  const variant = /^Custom/.test(record.sourcePriceLabel)
    ? "custom"
    : /per month/.test(record.sourcePriceLabel)
      ? "recurring"
      : /Assessment|Penetration Testing|Audit/.test(record.name)
        ? "assessment"
        : record.categoryIds.some((id) => id === "CAT-07" || id === "CAT-08")
          ? "design-media"
          : "project";
  return {
    ...copy,
    // Source suffix is editorial guidance, not a customer delivery step.
    approach: copy.approach.split(". Technology references")[0]!,
    id: record.serviceId,
    name: record.name,
    sourcePriceLabel: record.sourcePriceLabel,
    href: record.route,
    variant,
    parent: { name: parent.name, href: parent.route },
    prices: sourcePricePositions
      .filter((item) => item.offerId === record.serviceId)
      .map((item) => ({
        packageId: item.packageId,
        ordinal: item.sourceOrdinal,
        ...(item.tierLabel ? { tierLabel: item.tierLabel } : {}),
        price: presentSourcePosition(item),
      })),
    related: copy.relatedPageIds.map((id) => {
      const item = relatedRecords.find((record) => record.pageId === id)!;
      return { name: item.name, href: item.route };
    }),
  };
}
