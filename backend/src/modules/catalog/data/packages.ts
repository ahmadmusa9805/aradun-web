import { catalogRelease } from "./catalog-release.js";
import { priceTermsSchema } from "../../../server/db/value-schemas.server.js";
import type { z } from "zod";

export type PriceTerms = z.infer<typeof priceTermsSchema>;
export type SourcePricePosition = {
  packageId: string;
  offerType: "service" | "solution";
  offerId: string;
  sourceOrdinal: number;
  tierLabel?: string;
  sourceLabel: string;
  amountMinor?: number;
  priceTerms?: PriceTerms;
  scopeApproval: "pending";
  scopeVersion: string;
};

function sourcePosition(
  offerId: string,
  offerType: "service" | "solution",
  sourceOrdinal: number,
  sourceLabel: string,
  tierLabel?: string,
): SourcePricePosition {
  const prefix = {
    packageId: `${offerId}-P${String(sourceOrdinal).padStart(2, "0")}`,
    offerType,
    offerId,
    sourceOrdinal,
    sourceLabel,
    scopeApproval: "pending" as const,
    scopeVersion: "draft-1",
    ...(tierLabel ? { tierLabel } : {}),
  };
  if (/^Custom(?: quote)?$/.test(sourceLabel))
    return {
      ...prefix,
      priceTerms: priceTermsSchema.parse({
        model: "custom",
        currency: "USD",
        sourceLabel,
        unitConfirmed: false,
      }),
    };
  const amountMatch = sourceLabel.match(/\$([\d,]+)/);
  if (!amountMatch) throw new Error("Source price position has no price");
  const amountMinor = Number(amountMatch[1]!.replaceAll(",", "")) * 100;
  if (!Number.isSafeInteger(amountMinor))
    throw new Error("Invalid source price precision");
  if (/\/month|per month/.test(sourceLabel))
    return {
      ...prefix,
      amountMinor,
      priceTerms: priceTermsSchema.parse({
        model: "monthly",
        currency: "USD",
        recurringAmountMinor: amountMinor,
        billingUnit: "month",
        sourceLabel,
        unitConfirmed: true,
      }),
    };
  if (/\/project/.test(sourceLabel))
    return {
      ...prefix,
      amountMinor,
      priceTerms: priceTermsSchema.parse({
        model: "one-time",
        currency: "USD",
        startingAmountMinor: amountMinor,
        billingUnit: "project",
        sourceLabel,
        unitConfirmed: true,
      }),
    };
  // A dollar value and a name such as Monthly Video Editing do not approve its billing unit.
  return { ...prefix, amountMinor };
}

export const sourcePricePositions: readonly SourcePricePosition[] =
  Object.freeze(
    [
      ...catalogRelease.services.flatMap((service) => {
        const matches = [...service.sourcePriceLabel.matchAll(/\$[\d,]+\+?/g)];
        if (!matches.length)
          return [
            sourcePosition(
              service.serviceId,
              "service",
              1,
              service.sourcePriceLabel,
            ),
          ];
        const tail = service.sourcePriceLabel.slice(
          matches.at(-1)!.index! + matches.at(-1)![0].length,
        );
        return matches.map((match, index) =>
          sourcePosition(
            service.serviceId,
            "service",
            index + 1,
            `${match[0]}${tail}`,
            matches.length === 2
              ? ["Starter", "Professional"][index]
              : undefined,
          ),
        );
      }),
      ...catalogRelease.solutions.flatMap((solution) =>
        solution.sourceTiers.map((tier) =>
          sourcePosition(
            solution.solutionId,
            "solution",
            tier.sourceOrdinal,
            tier.sourcePriceLabel,
            tier.tierLabel,
          ),
        ),
      ),
    ].map((position) => {
      if (position.priceTerms) Object.freeze(position.priceTerms);
      return Object.freeze(position);
    }),
  );
