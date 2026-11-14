import { Router } from "express";
import { z } from "zod";
import contentSource from "./data/category-content.json" with { type: "json" };
import { catalogSchema } from "./validation/input.schema.js";
import { catalogRelease } from "./data/catalog-release.js";
import { servicePreview } from "./server/service-preview.server.js";
import { publishedCatalog } from "./server/publication.server.js";
import {
  solutionPreviews,
  pricingPreview,
} from "./server/solution-preview.server.js";

const content = z
  .array(
    z.strictObject({
      categoryId: z.string(),
      serviceIds: z.array(z.string()).min(1).max(9),
      relatedSolutionIds: z.array(z.string()).max(5),
      headline: z.string(),
      intro: z.string(),
      audience: z.string(),
      problem: z.string(),
      guide: z.string(),
      process: z.string(),
      faqs: z
        .array(z.strictObject({ question: z.string(), answer: z.string() }))
        .length(4),
    }),
  )
  .length(8)
  .parse(contentSource);
if (
  new Set(content.map((item) => item.categoryId)).size !== 8 ||
  content.some(
    (item) =>
      !catalogRelease.categories.some(
        (category) => category.categoryId === item.categoryId,
      ),
  )
)
  throw new Error("Category content references invalid");
for (const item of content) {
  const expected = catalogRelease.services
    .filter((service) => service.categoryIds.includes(item.categoryId))
    .map((service) => service.serviceId)
    .sort();
  if (
    [...item.serviceIds].sort().join(",") !== expected.join(",") ||
    item.relatedSolutionIds.some(
      (id) =>
        !catalogRelease.solutions.some(
          (solution) => solution.solutionId === id,
        ),
    )
  )
    throw new Error("Category membership references invalid");
}

/** Safe local preview only: no publishing pending copy, prices or availability in hosted environments. */
export function createCatalogRouter(
  development: boolean,
  releaseId?: string,
  source = catalogRelease,
) {
  const catalog = catalogSchema.parse(source);
  const publication = development ? null : publishedCatalog(releaseId, catalog);
  const preview = !publication;
  const router = Router();
  router.use((_request, response, next) => {
    response.setHeader("Cache-Control", "no-store");
    if (!development && !publication) {
      response.sendStatus(404);
      return;
    }
    next();
  });
  router.get("/publication", (_request, response) => {
    if (!publication) {
      response.sendStatus(404);
      return;
    }
    response.json(publication);
  });
  const categories = catalog.categories.map((category) => ({
    id: category.categoryId,
    name: category.name,
    slug: category.slug,
    href: category.route,
    representatives: catalog.services
      .filter((service) => service.categoryIds.includes(category.categoryId))
      .slice(0, 3)
      .map((service) => ({ name: service.name, href: service.route })),
    headline: content.find((item) => item.categoryId === category.categoryId)!
      .headline,
  }));
  router.get("/solutions", (_request, response) =>
    response.json({ preview, solutions: solutionPreviews() }),
  );
  router.get("/solutions/:slug", (request, response) => {
    const solution = solutionPreviews().find(
      (item) => item.href === `/solutions/${request.params.slug}`,
    );
    if (!solution) {
      response.sendStatus(404);
      return;
    }
    response.json({ preview, solution });
  });
  router.get("/pricing", (_request, response) =>
    response.json({ preview, ...pricingPreview() }),
  );
  router.get("/services/:slug", (request, response) => {
    const service = servicePreview(request.params.slug);
    if (!service) {
      response.sendStatus(404);
      return;
    }
    response.json({
      preview,
      service: {
        ...service,
        ...(publication
          ? {
              availability: catalog.services.find(
                (item) => item.serviceId === service.id,
              )!.availability,
            }
          : {}),
      },
    });
  });
  router.get("/categories", (_request, response) => {
    response.json({ preview, categories });
  });
  router.get("/categories/:slug", (request, response) => {
    const category = categories.find(
      (item) => item.slug === request.params.slug,
    );
    if (!category) {
      response.sendStatus(404);
      return;
    }
    const copy = content.find((item) => item.categoryId === category.id)!;
    const services = copy.serviceIds
      .map((id) => catalog.services.find((item) => item.serviceId === id)!)
      .map((item) => ({
        id: item.serviceId,
        name: item.name,
        summary: servicePreview(item.slug)!.summary,
        href: item.route,
        ...(publication ? { availability: item.availability } : {}),
        price: {
          label: item.sourcePriceLabel,
          currency: "USD" as const,
          model: /per month/.test(item.sourcePriceLabel)
            ? "monthly"
            : /^Custom/.test(item.sourcePriceLabel)
              ? "custom"
              : "unconfirmed",
          unitConfirmed: /per month/.test(item.sourcePriceLabel),
          indicative: true as const,
        },
      }));
    response.json({
      preview,
      category: {
        ...category,
        ...copy,
        services,
        relatedSolutions: copy.relatedSolutionIds.map((id) => {
          const solution = catalog.solutions.find(
            (item) => item.solutionId === id,
          )!;
          return { name: solution.name, href: solution.route };
        }),
      },
    });
  });
  return router;
}
