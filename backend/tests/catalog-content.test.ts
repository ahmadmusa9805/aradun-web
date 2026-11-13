import { expect, it } from "vitest";
import categoryCopy from "../src/modules/catalog/data/category-content.json" with { type: "json" };
import { catalogRelease } from "../src/modules/catalog/data/catalog-release.js";
import { servicePreview } from "../src/modules/catalog/server/service-preview.server.js";
import {
  solutionPreviews,
  pricingPreview,
} from "../src/modules/catalog/server/solution-preview.server.js";
it("all 57 public service descriptions have distinct source-backed fit, scope, process and four FAQs without editorial instructions", () => {
  const summaries = new Set<string>();
  for (const item of catalogRelease.services) {
    const view = servicePreview(item.slug)!;
    expect(view.name).toBe(item.name);
    expect(view.sourcePriceLabel).toBe(item.sourcePriceLabel);
    expect(view.href).toBe(item.route);
    expect(view.faqs).toHaveLength(4);
    expect(view.candidates.split(";").length).toBeGreaterThanOrEqual(3);
    expect(view.approach.split(";").length).toBeGreaterThanOrEqual(4);
    const text = [
      view.summary,
      view.fit,
      view.problem,
      view.benefit,
      view.candidates,
      view.approach,
      ...view.faqs.map((faq) => faq.answer),
    ].join(" ");
    expect(text).not.toMatch(
      /Technology references must|ARADUN website stack|\b(?:SVC|CAT|SOL)-[0-9]+/,
    );
    summaries.add(view.summary);
  }
  expect(summaries.size).toBe(57);
});
it("eight categories retain 58 memberships and buyer-facing FAQ answers", () => {
  expect(categoryCopy).toHaveLength(8);
  expect(categoryCopy.flatMap((item) => item.serviceIds)).toHaveLength(58);
  for (const category of categoryCopy) {
    expect(category.faqs).toHaveLength(4);
    for (const faq of category.faqs)
      expect(faq.answer).not.toMatch(/\b(?:SVC|CAT|SOL)-[0-9]+/);
  }
  expect(new Set(pricingPreview().services.map((item) => item.id)).size).toBe(
    57,
  );
});
it("all five solutions retain canonical identity and 15 original pricing positions", () => {
  const views = solutionPreviews();
  expect(views).toHaveLength(5);
  expect(views.flatMap((item) => item.prices)).toHaveLength(15);
  for (const item of views) {
    const source = catalogRelease.solutions.find(
      (record) => record.solutionId === item.id,
    )!;
    expect(item.name).toBe(source.name);
    expect(item.href).toBe(source.route);
    expect(item.faqs).toHaveLength(4);
    for (const related of item.candidates)
      expect(
        catalogRelease.services.some(
          (service) =>
            service.serviceId === related.id && service.route === related.href,
        ),
      ).toBe(true);
  }
});
