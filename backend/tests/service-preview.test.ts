import { beforeAll, afterAll, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { createApp } from "../src/app.js";
import { servicePreview } from "../src/modules/catalog/server/service-preview.server.js";
import { catalogRelease } from "../src/modules/catalog/data/catalog-release.js";
const server = createApp(undefined, {
  limiter: { admit: async () => ({ allowed: true, retryAfter: 0 }) },
}).listen(0, "127.0.0.1");
let base: string;
beforeAll(async () => {
  if (!server.listening)
    await new Promise<void>((resolve) => server.once("listening", resolve));
  const address = server.address();
  if (!address || typeof address === "string") throw new Error();
  base = `http://127.0.0.1:${address.port}`;
});
afterAll(
  () =>
    new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    ),
);
it("projects all 57 canonical services through HTTP with unique source fit/scope/process/input/FAQ", async () => {
  const source = readFileSync(
    new URL("../../docs/sources/09-content-assets.md", import.meta.url),
    "utf8",
  );
  const fits = new Set<string>(),
    scopes = new Set<string>(),
    processes = new Set<string>(),
    inputs = new Set<string>(),
    faqs = new Set<string>();
  for (const item of catalogRelease.services) {
    const response = await fetch(`${base}/api/catalog/services/${item.slug}`);
    expect(response.status).toBe(200);
    const { service, preview } = await response.json();
    expect(preview).toBe(true);
    expect(service.id).toBe(item.serviceId);
    expect(service.name).toBe(item.name);
    expect(service.href).toBe(item.route);
    for (const field of [
      service.summary,
      service.fit,
      service.problem,
      service.benefit,
      service.candidates,
      service.approach,
      service.description,
      ...service.faqs.flatMap((faq: { question: string; answer: string }) => [
        faq.question,
        faq.answer,
      ]),
    ])
      expect(source).toContain(field);
    fits.add(service.fit);
    scopes.add(service.candidates);
    processes.add(service.approach);
    inputs.add(service.faqs[1].answer);
    faqs.add(service.faqs[0].question);
    expect(service).not.toHaveProperty("availability");
    expect(service).not.toHaveProperty("availabilityApprovedBy");
    expect(service).not.toHaveProperty("assets");
    expect(service.approach).not.toContain("ARADUN website stack");
  }
  expect([
    fits.size,
    scopes.size,
    processes.size,
    inputs.size,
    faqs.size,
  ]).toEqual([57, 57, 57, 57, 57]);
});
it("retains cross-list parent, source price positions and unknown video period", () => {
  expect(servicePreview("mobile-app-ui-ux-design")!.parent.href).toBe(
    "/services/mobile-app-development",
  );
  const video = servicePreview("monthly-video-editing")!;
  expect(video.prices).toHaveLength(3);
  expect(
    video.prices.every(
      (item) =>
        item.price.model === "unconfirmed" &&
        !item.price.unitConfirmed &&
        !item.tierLabel,
    ),
  ).toBe(true);
  expect(servicePreview("custom-web-application")!.prices[0]!.price.label).toBe(
    "Custom quote",
  );
  expect(
    catalogRelease.services.flatMap(
      (item) => servicePreview(item.slug)!.prices,
    ),
  ).toHaveLength(117);
});
it("keeps variants intentional and denies category/unknown slugs", () => {
  expect(servicePreview("business-website-development")!.variant).toBe(
    "project",
  );
  expect(servicePreview("website-maintenance")!.variant).toBe("recurring");
  expect(servicePreview("custom-web-application")!.variant).toBe("custom");
  expect(servicePreview("web-application-security-assessment")!.variant).toBe(
    "assessment",
  );
  expect(servicePreview("website-ui-ux-design")!.variant).toBe("design-media");
  expect(servicePreview("web-software-development")).toBeUndefined();
  expect(servicePreview("not-a-service")).toBeUndefined();
});
