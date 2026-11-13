import { z } from "zod";
import { parseInput } from "../../../server/validation.js";
import { ServiceError } from "../../../server/errors.js";
import {
  consentContextSchema,
  offerSelectionSchema,
  timeZoneSchema,
  utcInstantSchema,
} from "../../../server/db/value-schemas.server.js";

const text = (max: number) =>
  z
    .string()
    .min(1)
    .max(max)
    .refine((value) => value.trim().length > 0);
const email = z
  .string()
  .min(1)
  .max(254)
  .refine((value) => z.email().safeParse(value.trim()).success);
const website = z
  .string()
  .max(2048)
  .refine((value) => {
    try {
      const url = new URL(value);
      return (
        ["http:", "https:"].includes(url.protocol) &&
        !url.username &&
        !url.password
      );
    } catch {
      return false;
    }
  });
export const identityInputSchema = z.strictObject({
  name: text(120),
  email,
  company: text(160).optional(),
  website: website.optional(),
  phone: text(40).optional(),
});
export const submittedIdentitySchema = identityInputSchema
  .extend({ emailNormalized: email })
  .refine(
    (value) => value.emailNormalized === value.email.trim().toLowerCase(),
  );
export const projectContextSchema = z.strictObject({
  budgetText: text(200).optional(),
  timelineText: text(300).optional(),
  additionalDetails: text(5000).optional(),
});
export const consultationSchema = z
  .strictObject({
    mode: z.literal("manual-request"),
    preferredTimeText: text(500),
    timezone: timeZoneSchema,
    state: z.enum([
      "requested",
      "pending-confirmation",
      "confirmed",
      "cancelled",
    ]),
    confirmedStartAt: utcInstantSchema.optional(),
    confirmedBy: z
      .string()
      .regex(/^[a-fA-F0-9]{24}$/)
      .optional(),
  })
  .refine(
    (value) =>
      value.state !== "confirmed" ||
      Boolean(value.confirmedStartAt && value.confirmedBy),
  );
const choice = z.strictObject({
  privacyAcknowledged: z.boolean().default(false),
  marketingOptIn: z.boolean().default(false),
});
const common = {
  identity: identityInputSchema,
  consent: choice,
  attribution: z.unknown().optional(),
};
const selection = offerSelectionSchema.refine(
  (value) =>
    value.serviceIds.length +
      value.solutionIds.length +
      value.packageIds.length >
      0 || value.customRequested,
);
export const inquiryInputSchema = z.discriminatedUnion("type", [
  z.strictObject({
    ...common,
    type: z.literal("contact"),
    subject: text(200),
    message: text(10000),
  }),
  z.strictObject({
    ...common,
    type: z.literal("quote"),
    message: text(10000),
    selection,
    projectContext: projectContextSchema.optional(),
  }),
  z.strictObject({
    ...common,
    type: z.literal("consultation"),
    subject: text(200),
    message: text(10000).optional(),
    consultation: z.strictObject({
      preferredTimeText: text(500),
      timezone: timeZoneSchema,
    }),
  }),
]);
export const attributionSchema = z.strictObject({
  landingPath: text(512).optional(),
  sourcePath: text(512).optional(),
  referrerHost: text(253).optional(),
  utmSource: text(200).optional(),
  utmMedium: text(200).optional(),
  utmCampaign: text(200).optional(),
  utmTerm: text(200).optional(),
  utmContent: text(200).optional(),
  sourceLabel: text(200),
  capturedAt: utcInstantSchema,
});

export function sanitizeAttribution(input: unknown, now: string) {
  const capturedAt = utcInstantSchema.parse(now);
  const result: Record<string, string> = { sourceLabel: "Unknown", capturedAt };
  if (!input || typeof input !== "object" || Array.isArray(input))
    return attributionSchema.parse(result);
  const raw = input as Record<string, unknown>;
  for (const key of ["landingPath", "sourcePath"] as const) {
    const value = raw[key];
    if (
      typeof value !== "string" ||
      value.length > 2048 ||
      !value.startsWith("/") ||
      value.startsWith("//") ||
      /[\\\r\n]/.test(value)
    )
      continue;
    try {
      const path = new URL(value, "https://aradun.invalid").pathname;
      if (path.length <= 512) result[key] = path;
    } catch {
      /* Untrusted hints never block intake. */
    }
  }
  const referrer = raw.referrer;
  if (typeof referrer === "string" && referrer.length <= 2048) {
    try {
      const url = new URL(referrer);
      if (
        ["http:", "https:"].includes(url.protocol) &&
        url.hostname.length <= 253
      )
        result.referrerHost = url.hostname;
    } catch {
      /* Keep Unknown. */
    }
  }
  for (const key of [
    "utmSource",
    "utmMedium",
    "utmCampaign",
    "utmTerm",
    "utmContent",
  ] as const) {
    const value = raw[key];
    if (typeof value === "string" && /^[\p{L}\p{N} _.-]{1,200}$/u.test(value))
      result[key] = value;
  }
  return attributionSchema.parse(result);
}
export type ConsentPolicy = {
  privacyAcknowledgementRequired: boolean;
  privacyNoticeVersion?: string;
  marketingNoticeVersion?: string;
};
/** Server policy/version/time, never browser versions, identity links, roles or money. No persistence or matching. */
export function parseInquiryInput(
  input: unknown,
  policy: ConsentPolicy,
  now = new Date().toISOString(),
) {
  const parsed = parseInput(inquiryInputSchema, input);
  const capturedAt = utcInstantSchema.parse(now);
  if (
    policy.privacyAcknowledgementRequired &&
    !parsed.consent.privacyAcknowledged
  )
    throw new ServiceError("invalid_input");
  if (
    (parsed.consent.privacyAcknowledged && !policy.privacyNoticeVersion) ||
    (parsed.consent.marketingOptIn && !policy.marketingNoticeVersion)
  )
    throw new Error("Required approved notice version is not configured");
  const consent = consentContextSchema.parse({
    locale: "en",
    marketingOptIn: parsed.consent.marketingOptIn,
    ...(parsed.consent.privacyAcknowledged
      ? {
          privacyNoticeVersion: policy.privacyNoticeVersion,
          privacyAcknowledgedAt: capturedAt,
        }
      : {}),
    ...(parsed.consent.marketingOptIn
      ? {
          marketingNoticeVersion: policy.marketingNoticeVersion,
          marketingOptInAt: capturedAt,
        }
      : {}),
  });
  const { identity, attribution, consent: _consent, ...journey } = parsed;
  void _consent;
  return {
    ...journey,
    submittedIdentity: {
      ...identity,
      emailNormalized: identity.email.trim().toLowerCase(),
    },
    consent,
    attribution: sanitizeAttribution(attribution, capturedAt),
    ...(parsed.type === "consultation"
      ? {
          consultation: {
            ...parsed.consultation,
            mode: "manual-request" as const,
            state: "requested" as const,
          },
        }
      : {}),
  };
}
