import { expect, it } from "vitest";
import { sourcePricePositions } from "../src/modules/catalog/data/packages.js";
import {
  captureSelectedOffers,
  createOfferSnapshotService,
} from "../src/modules/catalog/server/offer-snapshot.service.server.js";
import {
  presentPriceTerms,
  presentSourcePosition,
} from "../src/modules/catalog/server/price-presentation.server.js";
import { catalogRelease } from "../src/modules/catalog/data/catalog-release.js";

const terms = {
  model: "one-time" as const,
  currency: "USD" as const,
  startingAmountMinor: 69900,
  billingUnit: "project",
  unitConfirmed: true,
  indicative: true as const,
  sourceLabel: "SAMPLE $699/project",
};
function fixture(version = "SAMPLE-release-A") {
  return {
    version,
    approved: true,
    offers: [
      {
        offerId: "SVC-009",
        name: "SAMPLE Mobile App UI/UX Design",
        kind: "service" as const,
        published: true,
        availability: "specialist-led" as const,
        defaultPriceTerms: { ...terms },
        packages: [
          {
            packageId: "SAMPLE-SVC-009-P01",
            tierLabel: "Starter",
            scopeVersion: "SAMPLE-scope-1",
            scopeApproved: true,
            priceTerms: { ...terms },
          },
        ],
      },
      {
        offerId: "SOL-001",
        name: "SAMPLE Digital Presence",
        kind: "solution" as const,
        published: true,
        availability: "available" as const,
        defaultPriceTerms: {
          ...terms,
          model: "monthly" as const,
          startingAmountMinor: undefined,
          recurringAmountMinor: 39900,
          billingUnit: "month",
        },
        packages: [],
      },
    ],
  };
}

it("preserves every source price position, tier ordinal and unknown service units", () => {
  for (const service of catalogRelease.services) {
    const positions = sourcePricePositions.filter(
      (item) => item.offerId === service.serviceId,
    );
    expect(positions.length).toBe(
      [...service.sourcePriceLabel.matchAll(/\$[\d,]+/g)].length || 1,
    );
    expect(positions.map((item) => item.sourceOrdinal)).toEqual(
      positions.map((_item, index) => index + 1),
    );
    if (positions.length === 3)
      expect(positions.every((item) => item.tierLabel === undefined)).toBe(
        true,
      );
    if (positions.length === 2)
      expect(positions.map((item) => item.tierLabel)).toEqual([
        "Starter",
        "Professional",
      ]);
    for (const position of positions)
      expect(position.scopeApproval).toBe("pending");
  }
  const video = sourcePricePositions.filter(
    (item) => item.offerId === "SVC-057",
  );
  expect(video).toHaveLength(3);
  expect(video.every((item) => item.priceTerms === undefined)).toBe(true);
  expect(presentSourcePosition(video[0]!).model).toBe("unconfirmed");
  for (const solution of catalogRelease.solutions)
    expect(
      sourcePricePositions
        .filter((item) => item.offerId === solution.solutionId)
        .map((item) => item.sourceLabel),
    ).toEqual(solution.sourceTiers.map((item) => item.sourcePriceLabel));
  expect(new Set(sourcePricePositions.map((item) => item.packageId)).size).toBe(
    sourcePricePositions.length,
  );
});
it("shows source positions and all price models without summing mixed periods or inventing custom zero", () => {
  expect(presentPriceTerms(terms).label).toBe("From $699/project");
  expect(
    presentPriceTerms({ ...terms, sourceLabel: "SAMPLE ad spend separate" })
      .sourceLabel,
  ).toBe("SAMPLE ad spend separate");
  expect(
    presentPriceTerms({
      model: "monthly",
      currency: "USD",
      recurringAmountMinor: 4999,
      billingUnit: "month",
      unitConfirmed: true,
      sourceLabel: "SAMPLE",
    }).label,
  ).toBe("From $49.99/month");
  expect(
    presentPriceTerms({
      model: "setup-plus-monthly",
      currency: "USD",
      setupAmountMinor: 9900,
      recurringAmountMinor: 4900,
      billingUnit: "month",
      unitConfirmed: true,
      sourceLabel: "SAMPLE",
    }).label,
  ).toBe("$99 setup + $49/month");
  expect(
    presentPriceTerms({
      model: "custom",
      currency: "USD",
      sourceLabel: "Custom",
    }).label,
  ).toBe("Custom");
  expect(
    presentPriceTerms({
      ...terms,
      unitConfirmed: false,
      sourceLabel: "SAMPLE $699, unit pending",
    }).label,
  ).toBe("SAMPLE $699, unit pending");
  expect(
    presentPriceTerms({
      ...terms,
      startingAmountMinor: Number.MAX_SAFE_INTEGER,
    }).label,
  ).toBe("From $90,071,992,547,409.91/project");
});
it.each([
  { ...terms, currency: "EUR" },
  { ...terms, startingAmountMinor: 1.1 },
  { ...terms, startingAmountMinor: -1 },
  { ...terms, model: "custom" },
  { ...terms, recurringAmountMinor: 999 },
])("rejects malformed or contradictory price models %#", (input) => {
  expect(() => presentPriceTerms(input)).toThrow();
});

it("deduplicates cross-list selection and package/offer overlap, retaining only server price", () => {
  const capture = createOfferSnapshotService(fixture());
  const snapshot = capture(
    {
      serviceIds: ["SVC-009", "SVC-009"],
      packageIds: ["SAMPLE-SVC-009-P01", "SAMPLE-SVC-009-P01"],
    },
    "2026-11-09T00:00:00Z",
  );
  expect(snapshot.offers).toHaveLength(1);
  expect(snapshot.offers[0]!.priceTerms.startingAmountMinor).toBe(69900);
  expect(snapshot.offers[0]!.packageId).toBe("SAMPLE-SVC-009-P01");
  expect(snapshot.capturedAt).toBe("2026-11-09T00:00:00.000Z");
  expect(() => {
    snapshot.offers[0]!.priceTerms.startingAmountMinor = 1;
  }).toThrow();
});
it("keeps release A snapshots unchanged after release B and input release objects change", () => {
  const release = fixture();
  const captureA = createOfferSnapshotService(release);
  const a = captureA({ serviceIds: ["SVC-009"] });
  release.offers[0]!.defaultPriceTerms.startingAmountMinor = 1;
  expect(
    captureA({ serviceIds: ["SVC-009"] }).offers[0]!.priceTerms
      .startingAmountMinor,
  ).toBe(69900);
  const next = fixture("SAMPLE-release-B");
  next.offers[0]!.defaultPriceTerms.startingAmountMinor = 99900;
  const b = createOfferSnapshotService(next)({ serviceIds: ["SVC-009"] });
  expect(a.catalogVersion).toBe("SAMPLE-release-A");
  expect(a.offers[0]!.priceTerms.startingAmountMinor).toBe(69900);
  expect(b.offers[0]!.priceTerms.startingAmountMinor).toBe(99900);
});
it.each([
  { serviceIds: ["SVC-009"], price: 1 },
  { serviceIds: ["SVC-999"] },
  { serviceIds: ["SVC-009"], currency: "EUR" },
  { packageIds: ["unknown"] },
  { serviceIds: ["SVC-009"], capturedAt: "forged" },
  { solutionIds: ["SVC-009"] },
])("rejects tampered client input %#", (input) => {
  expect(() => createOfferSnapshotService(fixture())(input)).toThrow();
});
it("retains individual monthly/project terms with no automatic combined total", () => {
  const snapshot = createOfferSnapshotService(fixture())({
    serviceIds: ["SVC-009"],
    solutionIds: ["SOL-001"],
  });
  expect(snapshot.offers.map((item) => item.priceTerms.model)).toEqual([
    "one-time",
    "monthly",
  ]);
  expect(snapshot).not.toHaveProperty("total");
});
it("rejects unpublished, unknown-availability, unapproved-scope, draft-release and unknown-unit selections", () => {
  const draft = fixture();
  const withoutAvailability = fixture();
  expect(() =>
    createOfferSnapshotService({
      ...withoutAvailability,
      offers: withoutAvailability.offers.map((offer) => ({
        ...offer,
        availability: undefined,
      })),
    })({ serviceIds: ["SVC-009"] }),
  ).toThrow();
  draft.approved = false;
  expect(() =>
    createOfferSnapshotService(draft)({ serviceIds: ["SVC-009"] }),
  ).toThrow();
  const hidden = fixture();
  hidden.offers[0]!.published = false;
  expect(() =>
    createOfferSnapshotService(hidden)({ serviceIds: ["SVC-009"] }),
  ).toThrow();
  const pending = fixture();
  pending.offers[0]!.packages[0]!.scopeApproved = false;
  expect(() =>
    createOfferSnapshotService(pending)({ packageIds: ["SAMPLE-SVC-009-P01"] }),
  ).toThrow();
  const unit = fixture();
  unit.offers[0]!.defaultPriceTerms.unitConfirmed = false;
  expect(() =>
    createOfferSnapshotService(unit)({ serviceIds: ["SVC-009"] }),
  ).toThrow();
  expect(() => captureSelectedOffers({ serviceIds: ["SVC-009"] })).toThrow(
    "The requested resource was not found.",
  );
  expect(() => captureSelectedOffers({ customRequested: true })).toThrow();
});
it("allows a custom-only request without inventing a priced offer in an approved server release", () => {
  expect(
    createOfferSnapshotService(fixture())({ customRequested: true }).offers,
  ).toEqual([]);
});
