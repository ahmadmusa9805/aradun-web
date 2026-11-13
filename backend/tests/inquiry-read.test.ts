import { randomBytes, randomUUID } from "node:crypto";
import { Types } from "mongoose";
import { afterAll, beforeAll, expect, it } from "vitest";
import {
  startAccessFixture,
  deniedSessionKinds,
} from "./support/access-fixture.js";
import { createSubmissionService } from "../src/modules/intake/server/submission.service.server.js";
import { inquiryModel } from "../src/modules/intake/models/inquiry.model.js";
import { captureOfferSnapshot } from "../src/server/db/value-schemas.server.js";
let fixture: Awaited<ReturnType<typeof startAccessFixture>>;
let admin: Awaited<ReturnType<typeof fixture.identity>>;
let sales: Awaited<ReturnType<typeof fixture.identity>>;
let submit: Awaited<ReturnType<typeof createSubmissionService>>;
const saved: string[] = [];
beforeAll(async () => {
  fixture = await startAccessFixture();
  admin = await fixture.identity();
  sales = await fixture.identity("sales");
  submit = await createSubmissionService(fixture.connection, {
    secret: randomBytes(32).toString("base64url"),
    staffRecipientIds: [String(admin.staff._id)],
    policy: {
      privacyAcknowledgementRequired: true,
      privacyNoticeVersion: "SAMPLE-test",
    },
    capture: (_selection, at) =>
      captureOfferSnapshot({
        catalogVersion: "SAMPLE-reviewed-fixture",
        capturedAt: at,
        offers: [
          {
            offerId: "SVC-001",
            name: "SAMPLE service",
            kind: "service",
            availability: "available",
            priceTerms: {
              model: "custom",
              currency: "USD",
              indicative: true,
              sourceLabel: "SAMPLE scoped after review",
              unitConfirmed: false,
            },
          },
        ],
      }),
  });
  for (let i = 0; i < 4; i++) {
    const receipt = await submit(
      {
        type: "contact",
        identity: { name: `SAMPLE ${i}`, email: "sample@example.invalid" },
        subject: `SAMPLE subject ${i}`,
        message: "PRIVATE SYNTHETIC <script>alert(1)</script>",
        consent: { privacyAcknowledged: true, marketingOptIn: false },
      },
      randomUUID(),
    );
    const doc = await inquiryModel(fixture.connection).findOne({
      reference: receipt.reference,
    });
    if (!doc) throw Error();
    saved.push(String(doc._id));
    if (i < 2) {
      doc.assignedTo = sales.staff._id;
      doc.assignedBy = admin.staff._id;
      doc.assignedAt = new Date();
      await doc.save();
    }
  }
});
afterAll(async () => {
  await fixture?.close();
});

it("paginates deterministically with a bounded allowlisted summary, without email/message or private internals", async () => {
  const first = await fixture.request("/inquiries?limit=2", {
    cookie: admin.cookie,
  });
  expect(first.status).toBe(200);
  expect(first.headers.get("cache-control")).toBe("no-store");
  expect(first.headers.get("x-robots-tag")).toContain("noindex");
  const a = await first.json();
  expect(a.items).toHaveLength(2);
  expect(a.nextCursor).toBeTypeOf("string");
  expect(Object.keys(a.items[0]).sort()).toEqual(
    [
      "id",
      "reference",
      "type",
      "subject",
      "name",
      "status",
      "createdAt",
    ].sort(),
  );
  const second = await fixture.request(
    `/inquiries?limit=2&cursor=${a.nextCursor}`,
    { cookie: admin.cookie },
  );
  const b = await second.json();
  expect(b.items).toHaveLength(2);
  expect(b.nextCursor).toBeNull();
  expect(new Set([...a.items, ...b.items].map((x) => x.id)).size).toBe(4);
  expect(
    (await fixture.request("/inquiries", { cookie: admin.cookie })).status,
  ).toBe(200);
});
it("enforces sales assignment and hides guessed, archived and redacted records", async () => {
  const list = await (
    await fixture.request("/inquiries", { cookie: sales.cookie })
  ).json();
  expect(list.items).toHaveLength(2);
  expect(
    (await fixture.request(`/inquiries/${saved[0]}`, { cookie: sales.cookie }))
      .status,
  ).toBe(200);
  for (const target of [saved[3], new Types.ObjectId().toHexString()])
    expect(
      (await fixture.request(`/inquiries/${target}`, { cookie: sales.cookie }))
        .status,
    ).toBe(404);
  const model = inquiryModel(fixture.connection);
  const archived = await model.findById(saved[2]);
  if (!archived) throw Error();
  archived.archivedAt = new Date();
  archived.archivedBy = admin.staff._id;
  await archived.save();
  const redacted = await model.findById(saved[3]);
  if (!redacted) throw Error();
  redacted.redactedAt = new Date();
  redacted.redactionReason = "SAMPLE privacy case";
  await redacted.save();
  for (const target of [saved[2], saved[3]])
    expect(
      (await fixture.request(`/inquiries/${target}`, { cookie: admin.cookie }))
        .status,
    ).toBe(404);
});
it("returns explicit detail fields and immutable offer labels without operational hashes or tracking", async () => {
  const detail = await (
    await fixture.request(`/inquiries/${saved[0]}`, { cookie: admin.cookie })
  ).json();
  expect(detail.message).toContain("<script>");
  expect(detail.email).toBe("sample@example.invalid");
  for (const key of [
    "submissionKeyHash",
    "payloadHash",
    "consent",
    "attribution",
    "assignedBy",
    "_id",
    "revision",
  ])
    expect(detail).not.toHaveProperty(key);
  const receipt = await submit(
    {
      type: "quote",
      message: "SAMPLE quote request",
      identity: { name: "SAMPLE quote", email: "quote@example.invalid" },
      selection: {
        serviceIds: ["SVC-001"],
        solutionIds: [],
        packageIds: [],
        customRequested: false,
      },
      projectContext: { additionalDetails: "SAMPLE scope" },
      consent: { privacyAcknowledged: true, marketingOptIn: false },
    },
    randomUUID(),
  );
  const doc = await inquiryModel(fixture.connection).findOne({
    reference: receipt.reference,
  });
  if (!doc) throw Error();
  const quote = await (
    await fixture.request(`/inquiries/${doc._id}`, { cookie: admin.cookie })
  ).json();
  expect(quote.offers).toHaveLength(1);
  expect(quote.offers[0].priceLabel).toBe(
    doc.offerSnapshot!.offers[0]!.priceTerms.sourceLabel,
  );
  expect(quote.catalogVersion).toBe(doc.offerSnapshot!.catalogVersion);
});
it("rejects unexpected filters, malformed cursors/IDs, excessive limits and mutation attempts", async () => {
  for (const path of [
    "?limit=51",
    "?limit=0",
    "?cursor=abc",
    "?assignedTo=forged",
    "?limit=2&limit=3",
    "/not-an-id",
    `/${saved[0]}?fields=payloadHash`,
  ])
    expect(
      (await fixture.request(`/inquiries${path}`, { cookie: admin.cookie }))
        .status,
    ).toBe(400);
  expect(
    (
      await fixture.request(`/inquiries/${saved[0]}`, {
        cookie: admin.cookie,
        body: { message: "tampered" },
      })
    ).status,
  ).toBe(404);
});
it("shows submitted manual consultation timing without claiming a confirmed booking", async () => {
  const receipt = await submit(
    {
      type: "consultation",
      identity: { name: "SAMPLE meeting", email: "sample@example.invalid" },
      subject: "SAMPLE consultation",
      consultation: {
        preferredTimeText: "SAMPLE tomorrow afternoon",
        timezone: "Asia/Dhaka",
      },
      consent: { privacyAcknowledged: true, marketingOptIn: false },
    },
    randomUUID(),
  );
  const row = await inquiryModel(fixture.connection).findOne({
    reference: receipt.reference,
  });
  if (!row) throw Error();
  const value = await (
    await fixture.request(`/inquiries/${row._id}`, { cookie: admin.cookie })
  ).json();
  expect(value).toMatchObject({
    preferredTime: "SAMPLE tomorrow afternoon",
    timezone: "Asia/Dhaka",
    consultationState: "requested",
  });
  expect(value).not.toHaveProperty("confirmedBy");
});
it.each(deniedSessionKinds)(
  "denies %s sessions on list and detail",
  async (kind) => {
    const user = await fixture.denied(kind);
    for (const path of ["/inquiries", `/inquiries/${saved[0]}`])
      expect(
        (await fixture.request(path, { cookie: user.cookie })).status,
      ).toBe(user.expected);
  },
);
it("denies an active Editor", async () => {
  const editor = await fixture.identity("editor");
  expect(
    (await fixture.request("/inquiries", { cookie: editor.cookie })).status,
  ).toBe(403);
  expect(
    (await fixture.request(`/inquiries/${saved[0]}`, { cookie: editor.cookie }))
      .status,
  ).toBe(403);
});
