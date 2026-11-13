import { beforeAll, afterAll, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { createApp } from "../src/app.js";
import { catalogRelease } from "../src/modules/catalog/data/catalog-release.js";
import { solutionPreviews } from "../src/modules/catalog/server/solution-preview.server.js";

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
it("all five solution HTTP projections preserve source copy and exact 15 price cells", async () => {
  const copy = readFileSync(
    new URL("../../docs/sources/09-content-assets.md", import.meta.url),
    "utf8",
  );
  const response = await fetch(`${base}/api/catalog/solutions`);
  expect(response.status).toBe(200);
  expect(response.headers.get("cache-control")).toBe("no-store");
  const { solutions } = await response.json();
  expect(solutions).toHaveLength(5);
  for (const record of catalogRelease.solutions) {
    const result = await fetch(`${base}/api/catalog${record.route}`);
    expect(result.status).toBe(200);
    const { solution, preview } = await result.json();
    expect(preview).toBe(true);
    expect(solution.id).toBe(record.solutionId);
    expect(solution.name).toBe(record.name);
    expect(
      solution.prices.map(
        (item: { price: { label: string } }) => item.price.label,
      ),
    ).toEqual(record.sourceTiers.map((item) => item.sourcePriceLabel));
    for (const field of [
      solution.summary,
      solution.description,
      solution.audience,
      solution.problem,
      solution.approach,
      solution.metaDescription,
      ...solution.faqs.flatMap((faq: { question: string; answer: string }) => [
        faq.question,
        faq.answer,
      ]),
    ])
      expect(copy).toContain(field);
    expect(solution).not.toHaveProperty("availability");
    expect(record.serviceIds).toEqual([]);
  }
  expect(
    solutionPreviews()
      .find((item) => item.id === "SOL-005")!
      .prices.every((item) => item.price.label === "Custom"),
  ).toBe(true);
  expect(
    (await fetch(`${base}/api/catalog/solutions/not-a-solution`)).status,
  ).toBe(404);
});
it("pricing exposes 58 ordered memberships but only 57 unique editable selections", async () => {
  const response = await fetch(`${base}/api/catalog/pricing`);
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data.solutions).toHaveLength(5);
  expect(data.groups).toHaveLength(8);
  expect(
    data.groups.flatMap((group: { services: unknown[] }) => group.services),
  ).toHaveLength(58);
  expect(data.services).toHaveLength(57);
  expect(
    new Set(data.services.map((service: { id: string }) => service.id)).size,
  ).toBe(57);
  expect(data).not.toHaveProperty("total");
  for (const item of data.services)
    expect(item.priceLabel).toBe(
      catalogRelease.services.find((service) => service.serviceId === item.id)!
        .sourcePriceLabel,
    );
});
