import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { expect, it } from "vitest";
import { catalogRelease } from "../src/modules/catalog/data/catalog-release.js";
import {
  catalogSchema,
  type DraftCatalog,
} from "../src/modules/catalog/validation/input.schema.js";
import {
  assertOfferPublishable,
  catalogNavigation,
  publicationBlockers,
  resolveCatalogRoute,
} from "../src/modules/catalog/server/catalog.service.server.js";

const read = (name: string) =>
  readFileSync(new URL(`../../docs/sources/${name}`, import.meta.url), "utf8");
const rows = (text: string) =>
  text
    .split(/\r?\n/)
    .filter((line) => line.startsWith("|"))
    .map((line) =>
      line
        .slice(1, -1)
        .split("|")
        .map((cell) => cell.trim().replaceAll("`", "")),
    );

it("reconciles all service identities, exact prices and 58 memberships to authoritative master", () => {
  const master = read("01-master-requirements.md");
  const block = master
    .split("## 4. Services and existing pricing")[1]!
    .split("## 5. Business solutions")[0]!;
  const expected = new Map<
    string,
    { name: string; price: string; memberships: string[] }
  >();
  const sections = block.split(/^### /m).slice(1);
  expect(sections).toHaveLength(8);
  sections.forEach((section, index) => {
    for (const row of rows(section).filter((row) =>
      /^SVC-\d{3}$/.test(row[0]!),
    )) {
      const existing = expected.get(row[0]!);
      if (existing)
        existing.memberships.push(`CAT-${String(index + 1).padStart(2, "0")}`);
      else
        expected.set(row[0]!, {
          name: row[1]!,
          price: row[2]!,
          memberships: [`CAT-${String(index + 1).padStart(2, "0")}`],
        });
    }
  });
  expect(expected.size).toBe(57);
  expect(catalogRelease.services).toHaveLength(57);
  for (const item of catalogRelease.services) {
    const oracle = expected.get(item.serviceId)!;
    expect(item.name).toBe(oracle.name);
    expect(item.sourcePriceLabel).toBe(oracle.price);
    expect(item.categoryIds).toEqual(oracle.memberships);
  }
  expect(
    catalogRelease.services.reduce(
      (sum, item) => sum + item.categoryIds.length,
      0,
    ),
  ).toBe(58);
});

it("reconciles all 70 catalog routes/names/page IDs to sitemap and 15 source solution tier positions", () => {
  const sitemap = rows(read("02-pages-sitemap.md"));
  for (const item of [
    ...catalogRelease.categories,
    ...catalogRelease.services,
    ...catalogRelease.solutions,
  ]) {
    const pageId = "categoryId" in item ? item.categoryId : item.pageId;
    const row = sitemap.find((row) => row[0] === pageId)!;
    expect(row).toBeDefined();
    expect(item.name).toBe(row[1]);
    expect(item.route).toBe(row[2]);
    expect(resolveCatalogRoute(item.route)?.record).toBe(item);
  }
  const master = read("01-master-requirements.md");
  const block = master
    .split("## 5. Business solutions")[1]!
    .split("## 6. Sales")[0]!;
  const solutionRows = rows(block).filter((row) => /^SOL-\d{3}$/.test(row[0]!));
  expect(solutionRows).toHaveLength(5);
  for (const item of catalogRelease.solutions) {
    const row = solutionRows.find((row) => row[0] === item.solutionId)!;
    expect(item.name).toBe(row[1]);
    expect(item.sourceTiers.map((tier) => tier.sourcePriceLabel)).toEqual(
      row.slice(2, 5),
    );
    expect(item.serviceIds).toEqual([]); // no invented contractual composition
  }
  expect(
    new Set(
      [...catalogRelease.categories, ...catalogRelease.services].map(
        (item) => item.slug,
      ),
    ).size,
  ).toBe(65);
});

it("verifies provenance hashes and exact safe generated frontend navigation", () => {
  for (const [file, hash] of Object.entries(catalogRelease.sourceHashes))
    expect(
      createHash("sha256")
        .update(
          readFileSync(new URL(`../../docs/sources/${file}`, import.meta.url)),
        )
        .digest("hex"),
    ).toBe(hash);
  const projection = JSON.parse(
    readFileSync(
      new URL(
        "../../frontend/src/modules/catalog/data/navigation.generated.json",
        import.meta.url,
      ),
      "utf8",
    ),
  );
  expect(projection).toEqual(catalogNavigation());
  expect(Object.keys(projection)).toEqual(["categories", "solutions"]);
  expect(
    projection.categories.every(
      (item: object) => Object.keys(item).sort().join(",") === "href,id,label",
    ),
  ).toBe(true);
});

const invalid: Array<[string, (draft: DraftCatalog) => void]> = [
  [
    "missing service",
    (draft) => {
      draft.services.pop();
    },
  ],
  [
    "duplicate service",
    (draft) => {
      draft.services[1] = draft.services[0]!;
    },
  ],
  [
    "flat namespace collision",
    (draft) => {
      draft.services[0]!.slug = draft.categories[0]!.slug;
      draft.services[0]!.route = draft.categories[0]!.route;
    },
  ],
  [
    "dangling category",
    (draft) => {
      draft.services[0]!.categoryIds = ["CAT-99"];
    },
  ],
  [
    "duplicate memberships",
    (draft) => {
      draft.services[0]!.categoryIds.push("CAT-01");
    },
  ],
  [
    "wrong cross-list parent",
    (draft) => {
      draft.services.find(
        (item) => item.serviceId === "SVC-009",
      )!.primaryCategoryId = "CAT-07";
    },
  ],
  [
    "invented public availability",
    (draft) => {
      Object.assign(draft.services[0]!, { availability: "pending" });
    },
  ],
  [
    "unapproved availability",
    (draft) => {
      draft.services[0]!.availability = "available";
    },
  ],
  [
    "orphan approval",
    (draft) => {
      draft.services[0]!.availabilityApprovedAt = "2026-11-09T00:00:00Z";
    },
  ],
  [
    "route mismatch",
    (draft) => {
      draft.services[0]!.route = "/services/not-canonical";
    },
  ],
  [
    "wrong page namespace",
    (draft) => {
      draft.solutions[0]!.pageId = "SOL-02";
    },
  ],
  [
    "dangling solution service",
    (draft) => {
      draft.solutions[0]!.serviceIds = ["SVC-999"];
    },
  ],
  [
    "dangling package",
    (draft) => {
      draft.services[0]!.packageIds = ["nonexistent"];
    },
  ],
  [
    "invented solution tier",
    (draft) => {
      Object.assign(draft.solutions[0]!.sourceTiers[0]!, {
        tierLabel: "Unlimited",
      });
    },
  ],
  [
    "unknown source property",
    (draft) => {
      Object.assign(draft.services[0]!, { published: true });
    },
  ],
];
it.each(invalid)("rejects invalid source registry: %s", (_label, mutate) => {
  const draft = structuredClone(catalogRelease);
  mutate(draft);
  expect(catalogSchema.safeParse(draft).success).toBe(false);
});

it("resolves one canonical cross-listed service and rejects malformed/unregistered routes", () => {
  const item = catalogRelease.services.find(
    (item) => item.serviceId === "SVC-009",
  )!;
  expect(item.categoryIds).toEqual(["CAT-02", "CAT-07"]);
  expect(resolveCatalogRoute(item.route)?.record).toBe(item);
  for (const route of [
    null,
    {},
    "/services/__proto__",
    "/services/%2e%2e",
    "/services/unknown",
    "/services//mobile-app-ui-ux-design",
    "/solutions/digital-presence?published=true",
    "https://example.invalid/services/mobile-app-ui-ux-design",
  ])
    expect(resolveCatalogRoute(route)).toBeUndefined();
});
it("keeps all offers draft and blocks availability/commercial/content publication without fake public states", () => {
  for (const service of catalogRelease.services) {
    expect(service.availability).toBeUndefined();
    expect(publicationBlockers(service.serviceId)).toContain(
      "availability-approval-pending",
    );
    expect(() => assertOfferPublishable(service.serviceId)).toThrow(
      "The requested resource was not found.",
    );
  }
  expect(publicationBlockers("SVC-057")).toContain(
    "billing-unit-approval-pending",
  );
  for (const item of catalogRelease.solutions)
    expect(publicationBlockers(item.solutionId)).toContain(
      "solution-composition-approval-pending",
    );
  expect(publicationBlockers("SVC-999")).toEqual(["unknown-offer"]);
  expect(() => {
    catalogRelease.services[0]!.name = "Forged";
  }).toThrow();
});
