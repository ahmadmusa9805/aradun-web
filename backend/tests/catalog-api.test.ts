import { createServer } from "node:http";
import { afterAll, beforeAll, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { createCatalogRouter } from "../src/modules/catalog/catalog.routes.js";
import express from "express";
import { readFileSync } from "node:fs";
import { catalogRelease } from "../src/modules/catalog/data/catalog-release.js";

const server = createServer(
  createApp(undefined, {
    limiter: { admit: async () => ({ allowed: true, retryAfter: 0 }) },
  }),
);
let base: string;
beforeAll(async () => {
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
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
it("serves eight safe preview categories and actual memberships with no invented availability", async () => {
  const response = await fetch(`${base}/api/catalog/categories`);
  expect(response.status).toBe(200);
  expect(response.headers.get("cache-control")).toBe("no-store");
  const index = await response.json();
  expect(index.categories).toHaveLength(8);
  let count = 0;
  const shared: string[] = [];
  for (const category of index.categories) {
    const r = await fetch(`${base}/api/catalog/categories/${category.slug}`);
    expect(r.status).toBe(200);
    const data = await r.json();
    expect(data.preview).toBe(true);
    expect(data.category.faqs).toHaveLength(4);
    expect(category.representatives).toHaveLength(3);
    for (const service of category.representatives)
      expect(
        data.category.services.some(
          (member: { name: string; href: string }) =>
            member.name === service.name && member.href === service.href,
        ),
      ).toBe(true);
    count += data.category.services.length;
    for (const service of data.category.services) {
      const detail = await (
        await fetch(
          `${base}/api/catalog/services/${service.href.split("/").at(-1)}`,
        )
      ).json();
      expect(service.summary).toBe(detail.service.summary);
      expect(service).not.toHaveProperty("availability");
      expect(service).not.toHaveProperty("availabilityApprovedBy");
      if (service.id === "SVC-009") shared.push(service.href);
    }
  }
  expect(count).toBe(58);
  expect(shared).toEqual([
    "/services/mobile-app-ui-ux-design",
    "/services/mobile-app-ui-ux-design",
  ]);
});
it("category copy matches the source text and all categories have distinct intros/selection guidance", async () => {
  const rawSource = readFileSync(
    new URL("../../docs/sources/09-content-assets.md", import.meta.url),
    "utf8",
  );
  // Existing approved public-copy projection expands internal source IDs into buyer-facing names.
  const names = new Map(
    catalogRelease.services.map((service) => [service.serviceId, service.name]),
  );
  const source = rawSource.replace(
    /\bSVC-[0-9]{3}\b/g,
    (id) => names.get(id) ?? id,
  );
  const index = await (await fetch(`${base}/api/catalog/categories`)).json();
  const intros = new Set();
  const guides = new Set();
  for (const item of index.categories) {
    const { category } = await (
      await fetch(`${base}/api/catalog/categories/${item.slug}`)
    ).json();
    intros.add(category.intro);
    guides.add(category.guide);
    for (const value of [
      category.intro,
      category.headline,
      category.guide,
      category.process,
      ...category.faqs.flatMap((faq: { question: string; answer: string }) => [
        faq.question,
        faq.answer,
      ]),
    ])
      expect(
        source.includes(value),
        `Source copy differs: ${item.id}; ${value.slice(0, 100)}`,
      ).toBe(true);
  }
  expect(intros.size).toBe(8);
  expect(guides.size).toBe(8);
});
it("rejects unknown/service slugs and keeps hosted preview disabled", async () => {
  expect(
    (await fetch(`${base}/api/catalog/categories/not-a-category`)).status,
  ).toBe(404);
  expect(
    (await fetch(`${base}/api/catalog/categories/mobile-app-ui-ux-design`))
      .status,
  ).toBe(404);
  const app = express();
  app.use("/api/catalog", createCatalogRouter(false));
  const hosted = app.listen(0, "127.0.0.1");
  await new Promise<void>((resolve) => hosted.once("listening", resolve));
  try {
    const addr = hosted.address();
    if (!addr || typeof addr === "string") throw new Error();
    expect(
      (await fetch(`http://127.0.0.1:${addr.port}/api/catalog/categories`))
        .status,
    ).toBe(404);
  } finally {
    await new Promise<void>((resolve) => hosted.close(() => resolve()));
  }
});
