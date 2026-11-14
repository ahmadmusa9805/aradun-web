import { afterAll, beforeAll, beforeEach, expect, it, vi } from "vitest";
import { randomBytes, randomUUID } from "node:crypto";
import { Types } from "mongoose";
import { runTransaction } from "../src/server/db/transaction.server.js";
import { enqueueOutbox } from "../src/modules/notifications/server/outbox.service.server.js";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { registeredModels } from "../src/server/db/model-registry.server.js";
import {
  staffUserModel,
  LOCAL_PROVIDER,
} from "../src/modules/identity/models/staff-user.model.js";
import { outboxEventModel } from "../src/modules/notifications/models/outbox-event.model.js";
import { createSubmissionService } from "../src/modules/intake/server/submission.service.server.js";
import { createInquiryMailWorker } from "../src/modules/notifications/server/inquiry-mail.server.js";
import { inquiryModel } from "../src/modules/intake/models/inquiry.model.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
let submit: Awaited<ReturnType<typeof createSubmissionService>>;
let staffId: string;
const config = {
  apiKey: "re_SYNTHETIC_NOT_A_REAL_KEY",
  from: "ARADUN <sender@example.invalid>",
  replyTo: "reply@example.invalid",
  notificationEmail: "owner@example.invalid",
  sandbox: true,
};
const contact = () => ({
  type: "contact",
  identity: { name: "SAMPLE Prospect", email: "sample@example.invalid" },
  subject: "SAMPLE subject",
  message: "PRIVATE SYNTHETIC MESSAGE <script>",
  consent: { privacyAcknowledged: true, marketingOptIn: false },
});
beforeAll(async () => {
  fixture = await startMongoFixture();
  for (const { model } of registeredModels(fixture.connection)) {
    await model.createCollection();
    await model.createIndexes();
  }
  const staff = await staffUserModel(fixture.connection).create({
    provider: LOCAL_PROVIDER,
    providerSubject: randomUUID(),
    email: "staff@example.invalid",
    emailNormalized: "staff@example.invalid",
    displayName: "SAMPLE Admin",
    roles: ["admin"],
    status: "active",
    activatedAt: new Date(),
  });
  staffId = String(staff._id);
  submit = await createSubmissionService(fixture.connection, {
    secret: randomBytes(48).toString("base64url"),
    policy: {
      privacyAcknowledgementRequired: true,
      privacyNoticeVersion: "SAMPLE-test-only",
    },
    staffRecipientIds: [staffId],
  });
});
beforeEach(async () => {
  await outboxEventModel(fixture.connection).updateMany(
    {},
    { $set: { status: "suppressed" } },
  );
  await staffUserModel(fixture.connection).updateOne(
    { _id: staffId },
    { $set: { status: "active" } },
  );
});
afterAll(async () => {
  await fixture?.close();
});
it("commits one inquiry/alias notification set and processes it once with provider acceptance IDs", async () => {
  const key = randomUUID();
  const receipts = await Promise.all([
    submit(contact(), key),
    submit(contact(), key),
  ]);
  expect(receipts[0]!.reference).toBe(receipts[1]!.reference);
  expect(await outboxEventModel(fixture.connection).countDocuments()).toBe(2);
  const fetcher = vi
    .fn<typeof fetch>()
    .mockImplementation(
      async () => new Response(JSON.stringify({ id: randomUUID() })),
    );
  const worker = await createInquiryMailWorker(
    fixture.connection,
    config,
    "development",
    [staffId],
    "http://127.0.0.1:3000",
    fetcher,
  );
  const results = await Promise.all([worker.run(), worker.run()]);
  expect(results.reduce((sum, result) => sum + result.accepted, 0)).toBe(2);
  expect(fetcher).toHaveBeenCalledTimes(2);
  const bodies = fetcher.mock.calls.map((call) =>
    JSON.parse(String(call[1]!.body)),
  );
  expect(bodies.every((body) => body.to[0] === config.notificationEmail)).toBe(
    true,
  );
  expect(JSON.stringify(bodies)).not.toContain("PRIVATE SYNTHETIC MESSAGE");
  expect(JSON.stringify(bodies)).not.toContain("sample@example.invalid");
  const inquiry = await inquiryModel(fixture.connection)
    .findOne({ reference: receipts[0]!.reference })
    .select("_id")
    .lean();
  expect(inquiry).not.toBeNull();
  const alert = bodies.find((body) => body.subject.includes("New ARADUN"));
  const acknowledgement = bodies.find((body) =>
    body.subject.includes("received your"),
  );
  expect(alert.text).toContain(
    `http://127.0.0.1:3000/dashboard/leads/${inquiry!._id}`,
  );
  expect(alert.text).toContain("authorized staff sign-in required");
  expect(acknowledgement.text).not.toContain("/dashboard/leads/");
  for (const event of await outboxEventModel(fixture.connection).find())
    expect(event).toMatchObject({
      status: "sent",
      provider: "resend",
      deliveryState: "accepted",
    });
  expect((await worker.run()).processed).toBe(0);
});
it("refuses unreviewed link origins without attempting provider delivery", async () => {
  const fetcher = vi.fn<typeof fetch>();
  for (const url of [
    "https://site.example.invalid/path",
    "https://user:secret@site.example.invalid",
    "http://site.example.invalid",
    "https://site.example.invalid?redirect=other",
    "javascript:alert(1)",
  ])
    await expect(
      createInquiryMailWorker(
        fixture.connection,
        config,
        "development",
        [staffId],
        url,
        fetcher,
      ),
    ).rejects.toThrow();
  await expect(
    createInquiryMailWorker(
      fixture.connection,
      config,
      "staging",
      [staffId],
      "http://127.0.0.1:3000",
      fetcher,
    ),
  ).rejects.toThrow();
  expect(fetcher).not.toHaveBeenCalled();
});
it("suppresses notifications for a privacy-redacted inquiry without leaking its link", async () => {
  const receipt = await submit(contact(), randomUUID());
  const doc = await inquiryModel(fixture.connection).findOne({
    reference: receipt.reference,
  });
  if (!doc) throw Error();
  doc.redactedAt = new Date();
  doc.redactionReason = "SAMPLE privacy request";
  await doc.save();
  const fetcher = vi.fn<typeof fetch>();
  const worker = await createInquiryMailWorker(
    fixture.connection,
    config,
    "development",
    [staffId],
    "http://127.0.0.1:3000",
    fetcher,
  );
  expect((await worker.run()).suppressed).toBe(2);
  expect(fetcher).not.toHaveBeenCalled();
});
it("keeps saved inquiries and ambiguous provider failures uncertain without automatic duplicates", async () => {
  await submit(contact(), randomUUID());
  const fetcher = vi
    .fn<typeof fetch>()
    .mockRejectedValue(new Error("PRIVATE network failure"));
  const worker = await createInquiryMailWorker(
    fixture.connection,
    config,
    "development",
    [staffId],
    "http://127.0.0.1:3000",
    fetcher,
  );
  expect((await worker.run()).uncertain).toBe(2);
  expect((await worker.run()).processed).toBe(0);
  expect(fetcher).toHaveBeenCalledTimes(2);
  expect(
    JSON.stringify(await outboxEventModel(fixture.connection).find().lean()),
  ).not.toContain("PRIVATE network failure");
});
it("suppresses a disabled staff recipient and never sends an orphaned acknowledgement", async () => {
  await submit(contact(), randomUUID());
  await staffUserModel(fixture.connection).updateOne(
    { _id: staffId },
    { $set: { status: "suspended" } },
  );
  await runTransaction(fixture.connection, async (session) => {
    await enqueueOutbox(
      fixture.connection,
      {
        kind: "inquiry-acknowledgement",
        aggregateType: "inquiry",
        aggregateId: String(new Types.ObjectId()),
        recipient: {
          kind: "prospect",
          prospectEmail: "orphan@example.invalid",
        },
        templateKey: "inquiry-acknowledgement",
        templateVersion: 1,
        payload: {
          reference: "SAMPLE-orphan",
          inquiryType: "contact",
          locale: "en",
        },
      },
      session,
    );
  });
  const fetcher = vi
    .fn<typeof fetch>()
    .mockResolvedValue(new Response(JSON.stringify({ id: randomUUID() })));
  const worker = await createInquiryMailWorker(
    fixture.connection,
    config,
    "development",
    [staffId],
    "http://127.0.0.1:3000",
    fetcher,
  );
  const result = await worker.run();
  expect(result.suppressed).toBe(2);
  expect(result.accepted).toBe(1);
  expect(fetcher).toHaveBeenCalledTimes(1);
});

it("fixed inbox accepts all public inquiry types without staff and sends durable client/inbox work exactly once", async () => {
  const publicSubmit = await createSubmissionService(fixture.connection, {
    secret: randomBytes(48).toString("base64url"),
    fixedInbox: true,
    staffRecipientIds: [],
    policy: {
      privacyAcknowledgementRequired: true,
      privacyNoticeVersion: "SAMPLE-policy",
    },
  });
  const inputs = [
    contact(),
    {
      type: "quote",
      identity: contact().identity,
      consent: contact().consent,
      message:
        "SAMPLE requested service " +
        '"\\\n'.repeat(2400) +
        " END_OF_LONG_BRIEF",
      projectContext: {
        additionalDetails: "SAMPLE ".repeat(600) + " END_OF_DETAILS",
      },
      selection: {
        serviceIds: ["SVC-001"],
        solutionIds: [],
        packageIds: [],
        customRequested: false,
      },
    },
    {
      type: "consultation",
      identity: contact().identity,
      consent: contact().consent,
      subject: "SAMPLE appointment",
      message: "SAMPLE consultation",
      consultation: {
        preferredTimeText: "Next Tuesday",
        timezone: "Asia/Dhaka",
      },
    },
  ];
  for (const input of inputs) {
    const key = randomUUID();
    const receipt = await publicSubmit(input, key);
    expect((await publicSubmit(input, key)).reference).toBe(receipt.reference);
    expect(receipt.bookingConfirmed).toBe(false);
  }
  const fetcher = vi
    .fn<typeof fetch>()
    .mockImplementation(
      async () => new Response(JSON.stringify({ id: randomUUID() })),
    );
  const worker = await createInquiryMailWorker(
    fixture.connection,
    config,
    "development",
    [],
    "http://127.0.0.1:3000",
    fetcher,
    true,
  );
  await worker.run();
  await worker.run();
  await worker.run();
  expect(fetcher).toHaveBeenCalledTimes(6);
  const bodies = fetcher.mock.calls.map(([, init]) =>
    JSON.parse(String(init?.body)),
  );
  expect(bodies.every((body) => body.to[0] === config.notificationEmail)).toBe(
    true,
  );
  expect(
    bodies.filter((body) => body.subject.includes("received your")),
  ).toHaveLength(3);
  const alerts = bodies.filter((body) => body.subject.includes("New ARADUN"));
  expect(alerts).toHaveLength(3);
  expect(
    alerts.some((body) => body.text.includes("PRIVATE SYNTHETIC MESSAGE")),
  ).toBe(true);
  expect(alerts.every((body) => !body.text.includes("/dashboard/"))).toBe(true);
  const quoteAlert = alerts.find((body) => body.subject.includes("quote"));
  expect(quoteAlert.text).toContain("END_OF_LONG_BRIEF");
  expect(quoteAlert.text).toContain("END_OF_DETAILS");
  expect(quoteAlert.text).toContain("Requested services:");
  expect(quoteAlert.text).toContain("(SVC-001)");
  expect(
    alerts.find((body) => body.subject.includes("consultation")).text,
  ).toContain("Timezone: Asia/Dhaka");
  expect(
    await outboxEventModel(fixture.connection).countDocuments({
      "recipient.kind": "inbox",
      status: "sent",
    }),
  ).toBe(3);
  await expect(
    publicSubmit(
      { ...contact(), recipient: "attacker@example.invalid" },
      randomUUID(),
    ),
  ).rejects.toBeDefined();
  await expect(
    publicSubmit(
      {
        ...inputs[1],
        selection: { serviceIds: ["SVC-999"], customRequested: false },
      },
      randomUUID(),
    ),
  ).rejects.toBeDefined();
});

it("public clients cannot request unapproved snapshot bypasses or select a notification recipient", async () => {
  const submit = await createSubmissionService(fixture.connection, {
    secret: randomBytes(48).toString("base64url"),
    fixedInbox: true,
    staffRecipientIds: [],
    policy: {
      privacyAcknowledgementRequired: true,
      privacyNoticeVersion: "SAMPLE",
    },
  });
  await expect(
    submit({ ...contact(), requestedOffersOnly: true }, randomUUID()),
  ).rejects.toBeDefined();
  await expect(
    submit({ ...contact(), staffRecipientIds: [staffId] }, randomUUID()),
  ).rejects.toBeDefined();
});
