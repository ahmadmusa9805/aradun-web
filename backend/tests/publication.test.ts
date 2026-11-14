import { afterAll, beforeAll, expect, it } from "vitest";
import express from "express";
import { once } from "node:events";
import { catalogRelease } from "../src/modules/catalog/data/catalog-release.js";
import { publishedCatalog } from "../src/modules/catalog/server/publication.server.js";
import { createCatalogRouter } from "../src/modules/catalog/catalog.routes.js";

const approved = () => ({
  ...structuredClone(catalogRelease),
  releaseStatus: "approved",
  publicationApproval: {
    releaseId: "SAMPLE-release",
    approvedAt: "2026-01-02T00:00:00.000Z",
    approvedBy: "SAMPLE Owner",
    contentApprovalReference: "SAMPLE-content-review",
    commercialApprovalReference: "SAMPLE-commercial-review",
  },
  services: catalogRelease.services.map((item) => ({
    ...item,
    publication: "published",
    availability: "coming-soon",
    availabilityApprovedAt: "2026-01-01T00:00:00.000Z",
    availabilityApprovedBy: "SAMPLE Owner",
  })),
  solutions: catalogRelease.solutions.map((item) => ({
    ...item,
    publication: "published",
  })),
});
it("never treats existing drafts, environment selection or mismatched identities as publication", () => {
  expect(publishedCatalog()).toBeNull();
  expect(publishedCatalog("SAMPLE-release")).toBeNull();
  expect(publishedCatalog("different-release", approved())).toBeNull();
  const source = approved();
  delete (source as Partial<typeof source>).publicationApproval;
  expect(publishedCatalog("SAMPLE-release", source)).toBeNull();
});
it("requires full catalog, real approval references and accountable availability before release", () => {
  expect(
    publishedCatalog("SAMPLE-release", approved())?.catalogPaths,
  ).toHaveLength(70);
  for (const edit of [
    (s: ReturnType<typeof approved>) => {
      s.services[0]!.publication = "draft";
    },
    (s: ReturnType<typeof approved>) => {
      s.services[0]!.availabilityApprovedBy = "";
    },
    (s: ReturnType<typeof approved>) => {
      s.services[0]!.availabilityApprovedAt = "2026-01-03T00:00:00.000Z";
    },
    (s: ReturnType<typeof approved>) => {
      s.publicationApproval.contentApprovalReference = "";
    },
    (s: ReturnType<typeof approved>) => {
      s.publicationApproval.commercialApprovalReference = "";
    },
    (s: ReturnType<typeof approved>) => {
      s.publicationApproval.approvedAt = "2099-01-01T00:00:00.000Z";
    },
    (s: ReturnType<typeof approved>) => {
      s.releaseStatus = "draft";
    },
  ]) {
    const source = approved();
    edit(source);
    expect(publishedCatalog("SAMPLE-release", source)).toBeNull();
  }
  expect(
    Object.keys(publishedCatalog("SAMPLE-release", approved())!).sort(),
  ).toEqual(["catalogPaths", "releaseId"]);
});
let server: ReturnType<ReturnType<typeof express>["listen"]>, base: string;
beforeAll(async () => {
  const app = express();
  app.use(
    "/approved",
    createCatalogRouter(
      false,
      "SAMPLE-release",
      approved() as unknown as typeof catalogRelease,
    ),
  );
  app.use(
    "/mismatch",
    createCatalogRouter(
      false,
      "different-release",
      approved() as unknown as typeof catalogRelease,
    ),
  );
  app.use("/draft", createCatalogRouter(false, "SAMPLE-release"));
  server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw Error();
  base = `http://127.0.0.1:${address.port}`;
});
afterAll(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()));
});
it("serves hosted canonical catalog DTOs only for the exact approved release and never exposes approval metadata", async () => {
  const publication = await (
    await fetch(base + "/approved/publication")
  ).json();
  expect(publication.catalogPaths).toHaveLength(70);
  expect(JSON.stringify(publication)).not.toContain("SAMPLE Owner");
  const service = await (
    await fetch(base + "/approved/services/business-website-development")
  ).json();
  expect(service.preview).toBe(false);
  expect(service.service.availability).toBe("coming-soon");
  const categoryPath = publication.catalogPaths.find(
    (p: string) =>
      p.startsWith("/services/") &&
      catalogRelease.categories.some((c) => c.route === p),
  );
  const category = await (
    await fetch(base + "/approved/categories/" + categoryPath.split("/").at(-1))
  ).json();
  expect(
    category.category.services.every(
      (s: { availability: string }) => s.availability === "coming-soon",
    ),
  ).toBe(true);
  for (const prefix of ["/mismatch", "/draft"])
    for (const path of [
      "/publication",
      "/services/business-website-development",
    ])
      expect((await fetch(base + prefix + path)).status).toBe(404);
});
