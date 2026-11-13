import { priceTermsSchema } from "../../../server/db/value-schemas.server.js";
import { parseInput } from "../../../server/validation.js";
import type { SourcePricePosition } from "../data/packages.js";

export function presentSourcePosition(position: SourcePricePosition) {
  return {
    label: position.sourceLabel,
    currency: "USD" as const,
    model: position.priceTerms?.model ?? ("unconfirmed" as const),
    unitConfirmed: position.priceTerms?.unitConfirmed ?? false,
    indicative: true as const,
  };
}

/** Safe integer minor units, with no floating-point conversion even at the supported maximum. */
function dollars(minor: number) {
  const cents = BigInt(minor);
  const whole = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100n);
  return cents % 100n === 0n
    ? whole
    : `${whole}.${String(cents % 100n).padStart(2, "0")}`;
}
export function presentPriceTerms(input: unknown) {
  const terms = parseInput(priceTermsSchema, input);
  let label = terms.sourceLabel;
  if (terms.unitConfirmed) {
    if (terms.model === "one-time")
      label = `From ${dollars(terms.startingAmountMinor!)}${terms.billingUnit ? `/${terms.billingUnit}` : ""}`;
    if (terms.model === "monthly")
      label = `From ${dollars(terms.recurringAmountMinor!)}/${terms.billingUnit}`;
    if (terms.model === "setup-plus-monthly")
      label = `${dollars(terms.setupAmountMinor!)} setup + ${dollars(terms.recurringAmountMinor!)}/${terms.billingUnit}`;
  }
  return {
    label,
    sourceLabel: terms.sourceLabel,
    currency: terms.currency,
    model: terms.model,
    unitConfirmed: terms.unitConfirmed,
    indicative: true as const,
  };
}
