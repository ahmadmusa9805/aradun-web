import { expect, it } from "vitest";
import { z } from "zod";
import { Types } from "mongoose";
import {
  captureOfferSnapshot,
  consentContextSchema,
  moneySchema,
  objectIdSchema,
  offerSelectionSchema,
  parseConsent,
  priceTermsSchema,
  recordTargetSchema,
  timeZoneSchema,
  utcInstantSchema,
} from "../src/server/db/value-schemas.server.js";
import { parseInput } from "../src/server/validation.js";
import { serializeId, serializeInstant } from "../src/server/transport.js";
import { errorResponse, ServiceError } from "../src/server/errors.js";

it("maps ObjectIds to normalized explicit DTO fields and rejects malformed identities", () => {
  const id = new Types.ObjectId();
  expect(serializeId(id)).toBe(id.toHexString());
  expect(serializeId("ABCDEF0123456789ABCDEF01")).toBe(
    "abcdef0123456789abcdef01",
  );
  for (const value of ["123", "x".repeat(24), 123, { $ne: null }])
    expect(objectIdSchema.safeParse(value).success).toBe(false);
  expect(
    parseInput(recordTargetSchema, { kind: "contact", id: id.toHexString() }),
  ).toEqual({ kind: "contact", id: id.toHexString() });
  expect(() =>
    parseInput(recordTargetSchema, { kind: "customers", id: id.toHexString() }),
  ).toThrow();
});

it("requires explicit timezone instants, validates calendar dates and preserves DST fold identity", () => {
  expect(serializeInstant(new Date("2024-02-29T12:00:00Z"))).toBe(
    "2024-02-29T12:00:00.000Z",
  );
  expect(serializeInstant("2024-11-03T01:30:00-04:00")).toBe(
    "2024-11-03T05:30:00.000Z",
  );
  expect(serializeInstant("2024-11-03T01:30:00-05:00")).toBe(
    "2024-11-03T06:30:00.000Z",
  );
  for (const value of [
    "2023-02-29T00:00:00Z",
    "2024-01-01T12:00:00",
    "2024-01-01",
    "2024-01-01T25:00:00Z",
    "2024-01-01T00:00:00.1234Z",
  ])
    expect(utcInstantSchema.safeParse(value).success).toBe(false);
  for (const zone of ["Asia/Dhaka", "America/New_York", "UTC"])
    expect(timeZoneSchema.parse(zone)).toBe(zone);
  for (const zone of ["Not/AZone", "+06:00", ""])
    expect(timeZoneSchema.safeParse(zone).success).toBe(false);
  expect(() => serializeInstant(new Date("invalid"))).toThrow();
});

it("keeps exact integer minor units, configurable ceilings and the P1 currency", () => {
  expect(parseInput(moneySchema(1000), { amountMinor: 1000 })).toEqual({
    amountMinor: 1000,
    currency: "USD",
  });
  for (const amountMinor of [
    -1,
    0.1,
    NaN,
    Infinity,
    Number.MAX_SAFE_INTEGER + 1,
    "100",
  ])
    expect(moneySchema().safeParse({ amountMinor }).success).toBe(false);
  expect(moneySchema().parse({ amountMinor: 0 }).amountMinor).toBe(0);
  expect(
    moneySchema().parse({ amountMinor: Number.MAX_SAFE_INTEGER }).amountMinor,
  ).toBe(Number.MAX_SAFE_INTEGER);
  expect(() => parseInput(moneySchema(1000), { amountMinor: 1001 })).toThrow();
  expect(
    moneySchema().safeParse({ amountMinor: 100, currency: "EUR" }).success,
  ).toBe(false);
  expect(() => moneySchema(Infinity)).toThrow();
});

const price = {
  model: "setup-plus-monthly",
  currency: "USD",
  setupAmountMinor: 12345,
  recurringAmountMinor: 6789,
  billingUnit: "per month",
  indicative: true,
  sourceLabel: "SAMPLE source label retained exactly",
  unitConfirmed: true,
};
it("preserves price basis/period and represents custom pricing without a fabricated zero", () => {
  expect(parseInput(priceTermsSchema, price)).toEqual(price);
  expect(
    priceTermsSchema.parse({
      model: "custom",
      currency: "USD",
      sourceLabel: "Custom",
      startingAmountMinor: null,
    }).startingAmountMinor,
  ).toBeNull();
  expect(
    priceTermsSchema.safeParse({
      model: "custom",
      currency: "USD",
      sourceLabel: "Custom",
      startingAmountMinor: 0,
    }).success,
  ).toBe(false);
  expect(
    priceTermsSchema.safeParse({ ...price, billingUnit: undefined }).success,
  ).toBe(false);
  expect(
    priceTermsSchema.safeParse({ ...price, recurringAmountMinor: undefined })
      .success,
  ).toBe(false);
  expect(
    priceTermsSchema.safeParse({ ...price, indicative: false }).success,
  ).toBe(false);
  expect(
    priceTermsSchema.parse({
      model: "monthly",
      currency: "USD",
      sourceLabel: "Unit unresolved",
    }).unitConfirmed,
  ).toBe(false);
});

it("keeps independent immutable server snapshots without exposing browser pricing as authoritative", () => {
  const source = {
    catalogVersion: "sample-1",
    capturedAt: "2024-01-01T00:00:00Z",
    offers: [
      {
        offerId: "SVC-001",
        name: "SAMPLE",
        kind: "service",
        availability: "source label",
        priceTerms: { ...price },
      },
    ],
  };
  const snapshot = captureOfferSnapshot(source);
  source.offers[0]!.priceTerms.recurringAmountMinor = 1;
  expect(snapshot.offers[0]!.priceTerms.recurringAmountMinor).toBe(6789);
  expect(Object.isFrozen(snapshot.offers[0]!.priceTerms)).toBe(true);
  expect(() => {
    snapshot.offers[0]!.priceTerms.recurringAmountMinor = 1;
  }).toThrow();
  expect(() =>
    captureOfferSnapshot({
      ...source,
      offers: Array.from({ length: 101 }, () => source.offers[0]),
    }),
  ).toThrow();
  expect(() => captureOfferSnapshot({ ...source, clientTotal: 123 })).toThrow();
});

it("rejects duplicate selections and over-limit lists; preserves custom/unsure defaults", () => {
  expect(parseInput(offerSelectionSchema, {})).toEqual({
    serviceIds: [],
    solutionIds: [],
    packageIds: [],
    customRequested: false,
  });
  expect(
    offerSelectionSchema.safeParse({ serviceIds: ["SVC-001", "SVC-001"] })
      .success,
  ).toBe(false);
  expect(
    offerSelectionSchema.safeParse({
      solutionIds: Array.from({ length: 6 }, (_, index) => `SOL-00${index}`),
    }).success,
  ).toBe(false);
});

it("requires paired consent evidence, explicit opt-in and owning-feature privacy policy", () => {
  expect(parseConsent({}, { privacyAcknowledgementRequired: false })).toEqual({
    marketingOptIn: false,
    locale: "en",
  });
  expect(() =>
    parseConsent({}, { privacyAcknowledgementRequired: true }),
  ).toThrow();
  for (const value of [
    { marketingOptIn: true },
    { privacyNoticeVersion: "v1" },
    { marketingOptInAt: "2024-01-01T00:00:00Z" },
  ])
    expect(consentContextSchema.safeParse(value).success).toBe(false);
  expect(
    parseConsent(
      {
        privacyNoticeVersion: "v1",
        privacyAcknowledgedAt: "2024-01-01T00:00:00Z",
        marketingOptIn: true,
        marketingNoticeVersion: "v2",
        marketingOptInAt: "2024-01-01T00:00:00Z",
      },
      { privacyAcknowledgementRequired: true },
    ).marketingOptIn,
  ).toBe(true);
});

it.each([
  '{"name":"safe","$set":{"role":"Admin"}}',
  '{"name":"safe","__proto__":{"isAdmin":true}}',
  '{"name":"safe","nested":{"constructor":{"prototype":{"isAdmin":true}}}}',
  '{"name":"safe","profile.role":"Admin"}',
  '{"name":"safe","role":"Admin"}',
])("rejects operator/prototype/mass-assignment payload %#", (json) => {
  expect(() =>
    parseInput(z.strictObject({ name: z.string() }), JSON.parse(json)),
  ).toThrow();
  expect(Object.hasOwn(Object.prototype, "isAdmin")).toBe(false);
});

it("refuses accessors/custom prototypes/cycles and bounds nesting, nodes and payload size", () => {
  const accessor = Object.defineProperty({}, "secret", {
    enumerable: true,
    get() {
      throw new Error("Getter executed");
    },
  });
  expect(() => parseInput(z.unknown(), accessor)).toThrow(
    "Check the submitted",
  );
  expect(() =>
    parseInput(z.unknown(), Object.create({ admin: true })),
  ).toThrow();
  const cycle: { self?: unknown } = {};
  cycle.self = cycle;
  expect(() => parseInput(z.unknown(), cycle)).toThrow();
  let nested: unknown = {};
  for (let index = 0; index < 22; index++) nested = { child: nested };
  for (const value of [
    nested,
    Array(10001).fill(1),
    { text: "x".repeat(262145) },
  ])
    expect(() => parseInput(z.unknown(), value)).toThrow();
});

it("rejects non-JSON values without invoking custom serializers", () => {
  let called = false;
  for (const input of [
    {
      toJSON() {
        called = true;
        return {};
      },
    },
    { value: undefined },
    { value: Symbol("private") },
    { value: Infinity },
    { value: BigInt(1) },
  ])
    expect(() => parseInput(z.unknown(), input)).toThrow();
  expect(called).toBe(false);
});

it("public errors expose fixed copy/correlation only, never raw exceptions or input details", () => {
  const secret = "SAMPLE_PRIVATE_PASSWORD_AND_EMAIL@example.invalid";
  for (const error of [
    new Error(secret),
    { message: secret, code: "invalid_input" },
    new z.ZodError([]),
  ]) {
    const result = errorResponse(error);
    expect(result.status).toBe(500);
    expect(JSON.stringify(result)).not.toContain(secret);
    expect(result.body.error.correlationId).toMatch(/^[0-9a-f-]{36}$/);
    expect(Object.keys(result.body.error).sort()).toEqual([
      "code",
      "correlationId",
      "message",
    ]);
  }
  expect(errorResponse(new ServiceError("conflict")).status).toBe(409);
  try {
    parseInput(z.strictObject({ name: z.string() }), { name: 123 });
  } catch (error) {
    expect(errorResponse(error).status).toBe(400);
  }
});
