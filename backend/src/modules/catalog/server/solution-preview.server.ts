import { z } from "zod";
import source from "../data/solution-content.json" with { type: "json" };
import { catalogRelease } from "../data/catalog-release.js";
import categoryContent from "../data/category-content.json" with { type: "json" };
import { sourcePricePositions } from "../data/packages.js";
import { presentSourcePosition } from "./price-presentation.server.js";

const text = z.string().min(1).max(8000);
const copies = z
  .array(
    z.strictObject({
      solutionId: text,
      summary: text,
      description: text,
      audience: text,
      problem: text,
      categories: text,
      candidateServiceIds: z.array(text).max(57),
      approach: text,
      relatedPageIds: z.array(text).max(5),
      faqs: z.array(z.strictObject({ question: text, answer: text })).length(4),
      metaDescription: text,
    }),
  )
  .length(5)
  .parse(source);
if (
  new Set(copies.map((item) => item.solutionId)).size !== 5 ||
  copies.some(
    (item) =>
      !catalogRelease.solutions.some(
        (solution) => solution.solutionId === item.solutionId,
      ) ||
      item.candidateServiceIds.some(
        (id) =>
          !catalogRelease.services.some((service) => service.serviceId === id),
      ) ||
      item.relatedPageIds.some(
        (id) =>
          !catalogRelease.solutions.some((solution) => solution.pageId === id),
      ),
  )
)
  throw new Error("Invalid solution content references");
const serviceLink = (id: string) => {
  const item = catalogRelease.services.find((item) => item.serviceId === id)!;
  return {
    id: item.serviceId,
    name: item.name,
    href: item.route,
    priceLabel: item.sourcePriceLabel,
  };
};
export function solutionPreviews() {
  return catalogRelease.solutions.map((record) => {
    const copy = copies.find((item) => item.solutionId === record.solutionId)!;
    return {
      ...copy,
      id: record.solutionId,
      name: record.name,
      href: record.route,
      prices: sourcePricePositions
        .filter((item) => item.offerId === record.solutionId)
        .map((item) => ({
          packageId: item.packageId,
          tierLabel: item.tierLabel!,
          price: presentSourcePosition(item),
        })),
      candidates: copy.candidateServiceIds.map(serviceLink),
      related: copy.relatedPageIds.map((id) => {
        const item = catalogRelease.solutions.find(
          (item) => item.pageId === id,
        )!;
        return { name: item.name, href: item.route };
      }),
    };
  });
}
export function pricingPreview() {
  return {
    solutions: solutionPreviews(),
    groups: catalogRelease.categories.map((category) => ({
      id: category.categoryId,
      name: category.name,
      href: category.route,
      services: categoryContent
        .find((item) => item.categoryId === category.categoryId)!
        .serviceIds.map(serviceLink),
    })),
    services: catalogRelease.services.map((service) =>
      serviceLink(service.serviceId),
    ),
  };
}
