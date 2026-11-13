import { z } from "zod";
import { catalogRelease } from "../data/catalog-release.js";
import { sourcePricePositions } from "../data/packages.js";
import {
  captureOfferSnapshot,
  offerSelectionSchema,
  priceTermsSchema,
} from "../../../server/db/value-schemas.server.js";
import { parseInput } from "../../../server/validation.js";
import { ServiceError } from "../../../server/errors.js";

const rawSelection = z.strictObject({
  serviceIds: z.array(z.string()).max(57).default([]),
  solutionIds: z.array(z.string()).max(5).default([]),
  packageIds: z.array(z.string()).max(100).default([]),
  customRequested: z.boolean().default(false),
});
const packageSchema = z.strictObject({
  packageId: z.string().min(1).max(100),
  tierLabel: z.string().min(1).max(100).optional(),
  scopeVersion: z.string().min(1).max(100),
  scopeApproved: z.boolean(),
  priceTerms: priceTermsSchema,
});
const releaseSchema = z
  .strictObject({
    version: z.string().min(1).max(100),
    approved: z.boolean(),
    offers: z
      .array(
        z.strictObject({
          offerId: z.string().regex(/^(SVC|SOL)-\d{3}$/),
          name: z.string().min(1).max(200),
          kind: z.enum(["service", "solution"]),
          published: z.boolean(),
          availability: z
            .enum(["available", "specialist-led", "coming-soon"])
            .optional(),
          defaultPriceTerms: priceTermsSchema.optional(),
          packages: z.array(packageSchema).max(100),
        }),
      )
      .max(62),
  })
  .superRefine((value, context) => {
    const ids = new Set<string>(),
      packages = new Set<string>();
    for (const offer of value.offers) {
      if (
        ids.has(offer.offerId) ||
        (offer.kind === "service"
          ? !offer.offerId.startsWith("SVC-")
          : !offer.offerId.startsWith("SOL-"))
      )
        context.addIssue({
          code: "custom",
          message: "Invalid canonical offer",
        });
      ids.add(offer.offerId);
      for (const item of offer.packages) {
        if (packages.has(item.packageId))
          context.addIssue({
            code: "custom",
            message: "Duplicate package identity",
          });
        packages.add(item.packageId);
      }
    }
  });
type SnapshotRelease = z.infer<typeof releaseSchema>;

/** Server-only immutable release binding; never pass a browser-provided release or approval flag. */
export function createOfferSnapshotService(serverRelease: SnapshotRelease) {
  const release = releaseSchema.parse(serverRelease); // independent copy protects captured release from later edits
  return (input: unknown, capturedAt = new Date().toISOString()) => {
    const raw = parseInput(rawSelection, input);
    const selection = parseInput(offerSelectionSchema, {
      ...raw,
      serviceIds: [...new Set(raw.serviceIds)],
      solutionIds: [...new Set(raw.solutionIds)],
      packageIds: [...new Set(raw.packageIds)],
    });
    const selected = new Map<
      string,
      {
        offer: SnapshotRelease["offers"][number];
        package?: SnapshotRelease["offers"][number]["packages"][number];
      }
    >();
    for (const id of [...selection.serviceIds, ...selection.solutionIds]) {
      const offer = release.offers.find((offer) => offer.offerId === id);
      if (!offer) throw new ServiceError("invalid_input");
      selected.set(id, { offer });
    }
    for (const id of selection.packageIds) {
      const offer = release.offers.find((offer) =>
        offer.packages.some((item) => item.packageId === id),
      );
      const item = offer?.packages.find((item) => item.packageId === id);
      if (!offer || !item) throw new ServiceError("invalid_input");
      const previous = selected.get(offer.offerId);
      if (previous?.package && previous.package.packageId !== id)
        throw new ServiceError("invalid_input");
      selected.set(offer.offerId, { offer, package: item });
    }
    if (!selected.size && !selection.customRequested)
      throw new ServiceError("invalid_input");
    if (!release.approved) throw new ServiceError("not_found");
    const offers = [...selected.values()].map(({ offer, package: item }) => {
      const terms = item?.priceTerms ?? offer.defaultPriceTerms;
      if (
        !offer.published ||
        !offer.availability ||
        !terms ||
        (item && !item.scopeApproved) ||
        (!terms.unitConfirmed && terms.model !== "custom")
      )
        throw new ServiceError("not_found");
      return {
        offerId: offer.offerId,
        name: offer.name,
        kind: offer.kind,
        availability: offer.availability,
        priceTerms: Object.fromEntries(
          Object.entries(terms).filter(([, value]) => value !== undefined),
        ),
        ...(item
          ? {
              packageId: item.packageId,
              ...(item.tierLabel ? { tier: item.tierLabel } : {}),
              scopeVersion: item.scopeVersion,
            }
          : {}),
      };
    });
    return captureOfferSnapshot({
      catalogVersion: release.version,
      capturedAt,
      offers,
    });
  };
}

/** Current source is draft. No made-up approval/availability can enable live snapshots. */
export const captureSelectedOffers = createOfferSnapshotService({
  version: catalogRelease.version,
  approved: false,
  offers: [
    ...catalogRelease.services.map((service) => ({
      offerId: service.serviceId,
      name: service.name,
      kind: "service" as const,
      published: false,
      packages: sourcePricePositions
        .filter((item) => item.offerId === service.serviceId && item.priceTerms)
        .map((item) => ({
          packageId: item.packageId,
          ...(item.tierLabel ? { tierLabel: item.tierLabel } : {}),
          scopeVersion: item.scopeVersion,
          scopeApproved: false,
          priceTerms: item.priceTerms!,
        })),
    })),
    ...catalogRelease.solutions.map((solution) => ({
      offerId: solution.solutionId,
      name: solution.name,
      kind: "solution" as const,
      published: false,
      packages: sourcePricePositions
        .filter(
          (item) => item.offerId === solution.solutionId && item.priceTerms,
        )
        .map((item) => ({
          packageId: item.packageId,
          ...(item.tierLabel ? { tierLabel: item.tierLabel } : {}),
          scopeVersion: item.scopeVersion,
          scopeApproved: false,
          priceTerms: item.priceTerms!,
        })),
    })),
  ],
});
