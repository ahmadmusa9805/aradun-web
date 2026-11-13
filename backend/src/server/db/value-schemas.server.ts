import { z } from "zod";
import { parseInput } from "../validation.js";
import { ServiceError } from "../errors.js";

const text = (max: number) =>
  z
    .string()
    .min(1)
    .max(max)
    .refine((value) => value.trim().length > 0);
export const objectIdSchema = z
  .string()
  .regex(/^[a-fA-F0-9]{24}$/)
  .transform((value) => value.toLowerCase());
export const utcInstantSchema = z.iso
  .datetime({ offset: true })
  .refine((value) => !/\.\d{4,}/.test(value), "Use millisecond precision")
  .transform((value) => new Date(value).toISOString());
export const timeZoneSchema = text(100).refine((value) => {
  if (/^[+-]/.test(value)) return false;
  try {
    new Intl.DateTimeFormat("en", { timeZone: value });
    return true;
  } catch {
    return false;
  }
}, "Invalid IANA timezone");

export function moneySchema(maximumMinor = Number.MAX_SAFE_INTEGER) {
  if (!Number.isSafeInteger(maximumMinor) || maximumMinor < 0)
    throw new Error("Invalid money ceiling");
  return z.strictObject({
    amountMinor: z.number().int().nonnegative().max(maximumMinor),
    currency: z.literal("USD").default("USD"),
  });
}
export const recordTargetSchema = z.strictObject({
  kind: z.enum(["inquiry", "contact", "opportunity"]),
  id: objectIdSchema,
});
export const consentContextSchema = z
  .strictObject({
    privacyNoticeVersion: text(100).optional(),
    privacyAcknowledgedAt: utcInstantSchema.optional(),
    marketingOptIn: z.boolean().default(false),
    marketingNoticeVersion: text(100).optional(),
    marketingOptInAt: utcInstantSchema.optional(),
    locale: z.literal("en").default("en"),
  })
  .superRefine((value, context) => {
    if (
      Boolean(value.privacyNoticeVersion) !==
      Boolean(value.privacyAcknowledgedAt)
    )
      context.addIssue({
        code: "custom",
        message: "Privacy notice and acknowledgement must accompany each other",
      });
    if (
      value.marketingOptIn &&
      (!value.marketingNoticeVersion || !value.marketingOptInAt)
    )
      context.addIssue({
        code: "custom",
        message: "Marketing opt-in requires notice and timestamp",
      });
    if (
      !value.marketingOptIn &&
      (value.marketingNoticeVersion || value.marketingOptInAt)
    )
      context.addIssue({
        code: "custom",
        message: "Opt-in evidence requires opt-in",
      });
  });

/** Policy is supplied by the owning feature, never inferred from a browser flag. */
export function parseConsent(
  input: unknown,
  policy: { privacyAcknowledgementRequired: boolean },
) {
  const consent = parseInput(consentContextSchema, input);
  if (policy.privacyAcknowledgementRequired && !consent.privacyAcknowledgedAt)
    throw new ServiceError("invalid_input");
  return consent;
}

const amount = z
  .number()
  .int()
  .nonnegative()
  .max(Number.MAX_SAFE_INTEGER)
  .nullable()
  .optional();
export const priceTermsSchema = z
  .strictObject({
    model: z.enum(["one-time", "monthly", "setup-plus-monthly", "custom"]),
    currency: z.literal("USD"),
    startingAmountMinor: amount,
    setupAmountMinor: amount,
    recurringAmountMinor: amount,
    billingUnit: text(100).optional(),
    indicative: z.literal(true).default(true),
    sourceLabel: text(1000),
    unitConfirmed: z.boolean().default(false),
  })
  .superRefine((value, context) => {
    const present = (value: number | null | undefined) =>
      typeof value === "number";
    if (
      value.model === "custom" &&
      [
        value.startingAmountMinor,
        value.setupAmountMinor,
        value.recurringAmountMinor,
      ].some(present)
    )
      context.addIssue({
        code: "custom",
        message: "Custom pricing has no numeric amount",
      });
    if (
      (value.model === "one-time" &&
        [value.setupAmountMinor, value.recurringAmountMinor].some(present)) ||
      (value.model === "monthly" &&
        [value.startingAmountMinor, value.setupAmountMinor].some(present)) ||
      (value.model === "setup-plus-monthly" &&
        present(value.startingAmountMinor))
    )
      context.addIssue({
        code: "custom",
        message: "Price amounts must match their model",
      });
    if (value.unitConfirmed && value.model !== "custom") {
      const valid =
        value.model === "one-time"
          ? present(value.startingAmountMinor)
          : value.model === "monthly"
            ? present(value.recurringAmountMinor) && Boolean(value.billingUnit)
            : present(value.setupAmountMinor) &&
              present(value.recurringAmountMinor) &&
              Boolean(value.billingUnit);
      if (!valid)
        context.addIssue({
          code: "custom",
          message: "Confirmed terms require model amounts and recurring period",
        });
    }
  });

export const offerSelectionSchema = z
  .strictObject({
    serviceIds: z
      .array(z.string().regex(/^SVC-\d{3}$/))
      .max(57)
      .default([]),
    solutionIds: z
      .array(z.string().regex(/^SOL-\d{3}$/))
      .max(5)
      .default([]),
    packageIds: z.array(text(100)).max(100).default([]),
    customRequested: z.boolean().default(false),
  })
  .refine(
    (value) =>
      [value.serviceIds, value.solutionIds, value.packageIds].every(
        (ids) => new Set(ids).size === ids.length,
      ),
    "Duplicate selection",
  );

export const offerSnapshotSchema = z.strictObject({
  catalogVersion: text(100),
  capturedAt: utcInstantSchema,
  offers: z
    .array(
      z
        .strictObject({
          offerId: text(100),
          name: text(200),
          kind: z.enum(["service", "solution"]),
          packageId: text(100).optional(),
          tier: text(100).optional(),
          availability: text(100),
          priceTerms: priceTermsSchema,
          scopeVersion: text(100).optional(),
        })
        .refine(
          (value) =>
            (value.kind === "service" ? /^SVC-\d{3}$/ : /^SOL-\d{3}$/).test(
              value.offerId,
            ),
          "Offer identity mismatch",
        ),
    )
    .max(100),
});

/** Only server-resolved catalog values belong here; never accept browser prices. */
export function captureOfferSnapshot(serverCatalogValues: unknown) {
  const parsed = parseInput(offerSnapshotSchema, serverCatalogValues);
  function freeze(value: object): void {
    for (const child of Object.values(value))
      if (child && typeof child === "object") freeze(child);
    Object.freeze(value);
  }
  freeze(parsed);
  return parsed;
}
