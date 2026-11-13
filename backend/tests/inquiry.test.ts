import { beforeAll, afterAll, it, expect } from "vitest";
import { randomBytes } from "node:crypto";
import { Types } from "mongoose";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { inquiryModel } from "../src/modules/intake/models/inquiry.model.js";
import {
  parseInquiryInput,
  sanitizeAttribution,
} from "../src/modules/intake/validation/input.schema.js";

const policy = {
  privacyAcknowledgementRequired: true,
  privacyNoticeVersion: "SAMPLE-privacy-v1",
  marketingNoticeVersion: "SAMPLE-marketing-v1",
};
const identity = {
  name: "SAMPLE Prospect",
  email: "SAMPLE+tag@Example.invalid",
};
const contact = () => ({
  type: "contact",
  identity: { ...identity },
  subject: "SAMPLE question",
  message: "SAMPLE message",
  consent: { privacyAcknowledged: true },
});
const stamp = "2026-11-10T00:00:00Z";
const data = () => ({
  ...parseInquiryInput(contact(), policy, stamp),
  submissionKeyHash: randomBytes(32).toString("hex"),
  payloadHash: randomBytes(32).toString("hex"),
});

it("captures supplied spelling, derived email and exact server privacy version/time without forcing optional identity", () => {
  const result = parseInquiryInput(contact(), policy, stamp);
  expect(result.submittedIdentity.email).toBe(identity.email);
  expect(result.submittedIdentity.emailNormalized).toBe(
    "sample+tag@example.invalid",
  );
  expect(result.submittedIdentity).not.toHaveProperty("phone");
  expect(result.submittedIdentity).not.toHaveProperty("company");
  expect(result.consent).toMatchObject({
    privacyNoticeVersion: "SAMPLE-privacy-v1",
    privacyAcknowledgedAt: "2026-11-10T00:00:00.000Z",
    marketingOptIn: false,
  });
  expect(result).not.toHaveProperty("contactId");
});
it("accepts custom quote brief and optional free-text context without invented budget bands", () => {
  const optional = parseInquiryInput(
    {
      ...contact(),
      identity: {
        ...identity,
        company: "SAMPLE company",
        website: "https://example.invalid",
        phone: "SAMPLE +880",
      },
    },
    policy,
    stamp,
  );
  expect(optional.submittedIdentity).toMatchObject({
    company: "SAMPLE company",
    website: "https://example.invalid",
    phone: "SAMPLE +880",
  });
  const result = parseInquiryInput(
    {
      type: "quote",
      identity,
      consent: { privacyAcknowledged: true },
      selection: { customRequested: true },
      message: "SAMPLE custom brief",
      projectContext: {
        budgetText: "SAMPLE to discuss",
        timelineText: "SAMPLE next quarter",
        additionalDetails: "SAMPLE context",
      },
    },
    policy,
    stamp,
  );
  expect(result).toMatchObject({
    type: "quote",
    selection: { customRequested: true },
    projectContext: { budgetText: "SAMPLE to discuss" },
  });
  expect(result).not.toHaveProperty("offerSnapshot");
});
it("manual consultation requires topic/preferred time/IANA zone, never booked/confirmed", () => {
  const result = parseInquiryInput(
    {
      type: "consultation",
      identity,
      subject: "SAMPLE topic",
      consent: { privacyAcknowledged: true },
      consultation: {
        preferredTimeText: "SAMPLE next Tuesday afternoon",
        timezone: "Asia/Dhaka",
      },
    },
    policy,
    stamp,
  );
  expect(result).toMatchObject({
    type: "consultation",
    consultation: {
      mode: "manual-request",
      state: "requested",
      timezone: "Asia/Dhaka",
    },
  });
  expect(result).not.toHaveProperty("message");
});
it.each([
  { message: "" },
  { subject: "x".repeat(201) },
  { message: "x".repeat(10001) },
  { identity: { ...identity, email: "invalid" } },
  { identity: { ...identity, website: "javascript:alert(1)" } },
  { identity: { ...identity, name: "x".repeat(121) } },
  { identity: { ...identity, phone: "x".repeat(41) } },
  { contactId: new Types.ObjectId().toString() },
  { handlingStatus: "closed" },
  { offerSnapshot: {} },
  { consent: { privacyAcknowledged: true, privacyNoticeVersion: "forged" } },
  { consent: { privacyAcknowledged: false } },
  { role: "Admin" },
])("rejects invalid limits or forged server fields %#", (change) =>
  expect(() =>
    parseInquiryInput({ ...contact(), ...change }, policy, stamp),
  ).toThrow(),
);
it("rejects type-specific omissions, unknown timezone, fake confirmation and empty quote choices", () => {
  const common = { identity, consent: { privacyAcknowledged: true } };
  for (const fields of [
    { type: "quote", message: "brief", selection: {} },
    {
      type: "consultation",
      subject: "topic",
      consultation: { preferredTimeText: "text", timezone: "not-a-zone" },
    },
    {
      type: "consultation",
      subject: "topic",
      consultation: {
        preferredTimeText: "text",
        timezone: "UTC",
        state: "confirmed",
      },
    },
    { type: "contact", message: "message" },
  ])
    expect(() =>
      parseInquiryInput({ ...common, ...fields }, policy, stamp),
    ).toThrow();
});
it("sanitizes attribution and keeps absent/malformed hints from blocking valid intake", () => {
  const result = sanitizeAttribution(
    {
      landingPath: "/services?token=SECRET#fragment",
      sourcePath: "/pricing?email=SAMPLE%40example.invalid",
      referrer: "https://example.invalid/private?token=SECRET",
      utmSource: "SAMPLE_campaign",
      utmCampaign: "email@example.invalid",
      utmMedium: "x".repeat(201),
    },
    stamp,
  );
  expect(result).toEqual({
    sourceLabel: "Unknown",
    capturedAt: "2026-11-10T00:00:00.000Z",
    landingPath: "/services",
    sourcePath: "/pricing",
    referrerHost: "example.invalid",
    utmSource: "SAMPLE_campaign",
  });
  expect(sanitizeAttribution(null, stamp).sourceLabel).toBe("Unknown");
  expect(
    parseInquiryInput({ ...contact(), attribution: "blocked" }, policy, stamp)
      .attribution.sourceLabel,
  ).toBe("Unknown");
});
it("requires separate marketing evidence and never invents a missing approved notice", () => {
  const result = parseInquiryInput(
    {
      ...contact(),
      consent: { privacyAcknowledged: true, marketingOptIn: true },
    },
    policy,
    stamp,
  );
  expect(result.consent.marketingNoticeVersion).toBe("SAMPLE-marketing-v1");
  expect(result.consent.marketingOptInAt).toBe("2026-11-10T00:00:00.000Z");
  expect(() =>
    parseInquiryInput(
      contact(),
      { privacyAcknowledgementRequired: true },
      stamp,
    ),
  ).toThrow("notice version");
});

let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
async function persist(
  model: ReturnType<typeof inquiryModel>,
  values: Record<string, unknown>,
) {
  const record = new model();
  record.set(values);
  return record.save();
}

beforeAll(async () => {
  fixture = await startMongoFixture();
  await inquiryModel(fixture.connection).createCollection();
  await inquiryModel(fixture.connection).createIndexes();
});
afterAll(async () => {
  await fixture?.close();
});
it("creates strict Inquiry records with six source indexes, defaults and no automatic contact lookup/merge", async () => {
  const model = inquiryModel(fixture.connection);
  const a = await persist(model, data());
  const b = await persist(model, data());
  expect(a._id.equals(b._id)).toBe(false);
  expect(a.reference).not.toBe(b.reference);
  expect(a.contactId).toBeUndefined();
  expect(a.handlingStatus).toBe("received");
  expect(a.revision).toBe(0);
  expect(a.schemaVersion).toBe(1);
  expect(a.createdAt).toBeInstanceOf(Date);
  expect(a.attribution.sourceLabel).toBe("Unknown");
  expect(model.schema.indexes()).toHaveLength(6);
  expect(
    (await model.collection.listIndexes().toArray()).filter(
      (index) => index.unique,
    ),
  ).toHaveLength(2);
  expect(
    (await model.collection.listIndexes().toArray()).some(
      (index) => index.name === "_id_",
    ),
  ).toBe(true);
});
it("enforces actual unique-reference/submission-key races without making email unique", async () => {
  const model = inquiryModel(fixture.connection);
  const value = data();
  await persist(model, value);
  await expect(
    persist(model, { ...data(), submissionKeyHash: value.submissionKeyHash }),
  ).rejects.toMatchObject({ code: 11000 });
  const ref = `SAMPLE-${randomBytes(8).toString("hex")}`;
  const attempts = await Promise.allSettled([
    persist(model, { ...data(), reference: ref }),
    persist(model, { ...data(), reference: ref }),
  ]);
  expect(
    attempts.filter((result) => result.status === "fulfilled"),
  ).toHaveLength(1);
  expect(
    attempts.filter((result) => result.status === "rejected"),
  ).toHaveLength(1);
});
it("rejects forged persistence fields, missing contracts and local duplicate/assignment/closure invariants", async () => {
  const model = inquiryModel(fixture.connection);
  await expect(
    persist(model, { ...data(), unexpectedRole: "Admin" }),
  ).rejects.toThrow();
  for (const change of [
    { type: "quote" },
    { type: "consultation" },
    { subject: "" },
    { classifications: ["spam", "spam"] },
    { classifications: ["duplicate"] },
    { assignedTo: new Types.ObjectId() },
    { handlingStatus: "closed" },
    { submittedIdentity: { name: "SAMPLE", email: "bad" } },
  ])
    await expect(persist(model, { ...data(), ...change })).rejects.toThrow();
  const id = new Types.ObjectId();
  await expect(
    persist(model, {
      ...data(),
      _id: id,
      classifications: ["duplicate"],
      duplicateOfInquiryId: id,
    }),
  ).rejects.toThrow();
});
it("rejects submitted-value mutation across save, query, replacement and bulk paths", async () => {
  const model = inquiryModel(fixture.connection);
  const record = await persist(model, data());
  record.message = "Changed";
  await expect(record.save()).rejects.toThrow("immutable");
  await expect(
    model.updateOne({ _id: record._id }, { $set: { message: "Changed" } }),
  ).rejects.toThrow("document writes");
  await expect(model.replaceOne({ _id: record._id }, data())).rejects.toThrow(
    "document writes",
  );
  await expect(
    model.bulkWrite([{ deleteOne: { filter: { _id: record._id } } }]),
  ).rejects.toThrow("document writes");
  await expect(record.deleteOne()).rejects.toThrow("privacy operation");
  const invalid = new model();
  invalid.set({ ...data(), subject: "" });
  await expect(invalid.save({ validateBeforeSave: false })).rejects.toThrow(
    "full document validation",
  );
});
it("validates complete documents with optimistic revision races for future staff-owned writes", async () => {
  const model = inquiryModel(fixture.connection);
  const record = await persist(model, data());
  const first = await model.findById(record._id).orFail();
  const second = await model.findById(record._id).orFail();
  first.handlingStatus = "in-review";
  await first.save();
  expect(first.revision).toBe(1);
  second.handlingStatus = "in-review";
  await expect(second.save()).rejects.toThrow();
});
it("persists immutable custom-only quote snapshots with no price invention", async () => {
  const model = inquiryModel(fixture.connection);
  const quote = parseInquiryInput(
    {
      type: "quote",
      identity,
      consent: { privacyAcknowledged: true },
      message: "SAMPLE brief",
      selection: { customRequested: true },
    },
    policy,
    stamp,
  );
  const record = await persist(model, {
    ...data(),
    ...quote,
    offerSnapshot: {
      catalogVersion: "SAMPLE-release",
      capturedAt: stamp,
      offers: [],
    },
  });
  expect(record.offerSnapshot!.offers).toHaveLength(0);
  record.offerSnapshot!.catalogVersion = "changed";
  await expect(record.save()).rejects.toThrow("immutable");
});
it("retains a typed nonempty server snapshot and rejects mismatched offer identity", async () => {
  const model = inquiryModel(fixture.connection);
  const quote = parseInquiryInput(
    {
      type: "quote",
      identity,
      consent: { privacyAcknowledged: true },
      message: "SAMPLE brief",
      selection: { serviceIds: ["SVC-009"] },
    },
    policy,
    stamp,
  );
  const snapshot = {
    catalogVersion: "SAMPLE-release",
    capturedAt: stamp,
    offers: [
      {
        offerId: "SVC-009",
        name: "SAMPLE design",
        kind: "service",
        availability: "specialist-led",
        priceTerms: {
          model: "custom",
          currency: "USD",
          sourceLabel: "SAMPLE custom quote",
          startingAmountMinor: null,
          unitConfirmed: false,
          indicative: true,
        },
      },
    ],
  };
  const record = await persist(model, {
    ...data(),
    ...quote,
    offerSnapshot: snapshot,
  });
  expect(
    record.offerSnapshot!.offers[0]!.priceTerms.startingAmountMinor,
  ).toBeNull();
  record.offerSnapshot!.offers[0]!.priceTerms.sourceLabel = "Changed";
  await expect(record.save()).rejects.toThrow("immutable");
  await expect(
    persist(model, {
      ...data(),
      ...quote,
      offerSnapshot: {
        ...snapshot,
        offers: [{ ...snapshot.offers[0]!, offerId: "SVC-001" }],
      },
    }),
  ).rejects.toThrow("Snapshot must match");
});
it("requires existing acyclic duplicate targets and blocks changing established duplicate links", async () => {
  const model = inquiryModel(fixture.connection);
  const parent = await persist(model, data());
  const child = await persist(model, {
    ...data(),
    classifications: ["duplicate"],
    duplicateOfInquiryId: parent._id,
  });
  expect(child.duplicateOfInquiryId!.equals(parent._id)).toBe(true);
  await expect(
    persist(model, {
      ...data(),
      classifications: ["duplicate"],
      duplicateOfInquiryId: new Types.ObjectId(),
    }),
  ).rejects.toThrow("target must exist");
  parent.classifications = ["duplicate"];
  parent.duplicateOfInquiryId = child._id;
  await expect(parent.save()).rejects.toThrow("cycle");
  const other = await persist(model, data());
  child.duplicateOfInquiryId = other._id;
  await expect(child.save()).rejects.toThrow("immutable");
});
it("persists manual consultation preferences without inventing a confirmed slot", async () => {
  const model = inquiryModel(fixture.connection);
  const request = parseInquiryInput(
    {
      type: "consultation",
      identity,
      subject: "SAMPLE topic",
      message: "SAMPLE optional preparation",
      consent: { privacyAcknowledged: true },
      consultation: {
        preferredTimeText: "SAMPLE next week",
        timezone: "Asia/Dhaka",
      },
    },
    policy,
    stamp,
  );
  const record = await persist(model, { ...data(), ...request });
  expect(record.consultation!.state).toBe("requested");
  expect(record.consultation!.mode).toBe("manual-request");
  expect(record.consultation!.confirmedStartAt).toBeUndefined();
  expect(record.message).toBe("SAMPLE optional preparation");
  record.consultation!.state = "confirmed";
  await expect(record.save()).rejects.toThrow("Invalid inquiry contract");
});
