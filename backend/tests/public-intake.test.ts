import { createReceiptCodec } from "../src/modules/intake/server/receipt.server.js";
import express from "express";
import { createIntakeRouter } from "../src/modules/intake/intake.routes.js";
import { randomBytes, randomUUID } from "node:crypto";
import { once } from "node:events";
import { beforeAll, afterAll, it, expect, vi } from "vitest";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { registeredModels } from "../src/server/db/model-registry.server.js";
import { inquiryModel } from "../src/modules/intake/models/inquiry.model.js";
import { outboxEventModel } from "../src/modules/notifications/models/outbox-event.model.js";
import {
  staffUserModel,
  LOCAL_PROVIDER,
} from "../src/modules/identity/models/staff-user.model.js";
import { createSubmissionService } from "../src/modules/intake/server/submission.service.server.js";
import * as outbox from "../src/modules/notifications/server/outbox.service.server.js";
import { createApp } from "../src/app.js";
import { loadBackendEnv } from "../src/config/env.server.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
let submit: Awaited<ReturnType<typeof createSubmissionService>>;
let staffId: string;
const contact = () => ({
  type: "contact",
  identity: { name: "SAMPLE Prospect", email: "sample@example.invalid" },
  subject: "SAMPLE inquiry",
  message: "Synthetic request only",
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
afterAll(async () => {
  await fixture?.close();
});
it("concurrent same-key requests and a lost response return one durable inquiry and two queued events", async () => {
  const key = randomUUID(),
    input = contact();
  const values = await Promise.all([
    submit(input, key),
    submit(input, key),
    submit(input, key),
  ]);
  expect(new Set(values.map((value) => value.reference)).size).toBe(1);
  expect(await submit(input, key)).toMatchObject({
    reference: values[0]!.reference,
    type: "contact",
  });
  const model = inquiryModel(fixture.connection);
  const record = await model
    .findOne({ reference: values[0]!.reference })
    .lean();
  expect(record?.submittedIdentity.emailNormalized).toBe(
    "sample@example.invalid",
  );
  expect(
    await outboxEventModel(fixture.connection).countDocuments({
      aggregateId: record!._id,
    }),
  ).toBe(2);
  expect(values[0]).toEqual({
    reference: expect.stringMatching(/^ARQ-/),
    type: "contact",
    delivery: "queued",
    bookingConfirmed: false,
    receiptToken: expect.any(String),
  });
  expect(JSON.stringify(values[0])).not.toContain("example.invalid");
  await expect(
    submit({ ...input, message: "Changed" }, key),
  ).rejects.toMatchObject({ code: "conflict" });
});
it("outbox failure rolls back inquiry and all queued work", async () => {
  const before = await inquiryModel(fixture.connection).countDocuments(),
    events = await outboxEventModel(fixture.connection).countDocuments();
  const spy = vi
    .spyOn(outbox, "enqueueOutbox")
    .mockRejectedValueOnce(new Error("SAMPLE queue outage"));
  try {
    await expect(submit(contact(), randomUUID())).rejects.toThrow(
      "SAMPLE queue outage",
    );
  } finally {
    spy.mockRestore();
  }
  expect(await inquiryModel(fixture.connection).countDocuments()).toBe(before);
  expect(await outboxEventModel(fixture.connection).countDocuments()).toBe(
    events,
  );
});
it("rejects forged roles/prices, missing consent and unknown IDs without persistence", async () => {
  const before = await inquiryModel(fixture.connection).countDocuments();
  await expect(
    submit({ ...contact(), roles: ["admin"] }, randomUUID()),
  ).rejects.toMatchObject({ code: "invalid_input" });
  await expect(
    submit(
      { ...contact(), consent: { privacyAcknowledged: false } },
      randomUUID(),
    ),
  ).rejects.toMatchObject({ code: "invalid_input" });
  const quote = {
    type: "quote",
    identity: contact().identity,
    consent: contact().consent,
    message: "SAMPLE quote",
    selection: {
      serviceIds: ["SVC-999"],
      solutionIds: [],
      packageIds: [],
      customRequested: false,
    },
  };
  await expect(submit(quote, randomUUID())).rejects.toMatchObject({
    code: "invalid_input",
  });
  expect(await inquiryModel(fixture.connection).countDocuments()).toBe(before);
});
it("saves custom scope without inventing offer approval and keeps manual consultation unconfirmed", async () => {
  const quote = await submit(
    {
      type: "quote",
      identity: contact().identity,
      consent: contact().consent,
      message: "SAMPLE custom",
      selection: {
        serviceIds: [],
        solutionIds: [],
        packageIds: [],
        customRequested: true,
      },
    },
    randomUUID(),
  );
  const saved = await inquiryModel(fixture.connection)
    .findOne({ reference: quote.reference })
    .lean();
  expect(saved?.offerSnapshot?.offers).toHaveLength(0);
  const consultation = await submit(
    {
      type: "consultation",
      identity: contact().identity,
      consent: contact().consent,
      subject: "SAMPLE topic",
      consultation: {
        preferredTimeText: "Weekdays afternoon",
        timezone: "Asia/Dhaka",
      },
    },
    randomUUID(),
  );
  expect(consultation.bookingConfirmed).toBe(false);
  const meeting = await inquiryModel(fixture.connection)
    .findOne({ reference: consultation.reference })
    .lean();
  expect(meeting?.consultation?.state).toBe("requested");
  await expect(
    submit(
      {
        type: "quote",
        identity: contact().identity,
        consent: contact().consent,
        message: "SAMPLE draft offer",
        selection: {
          serviceIds: ["SVC-001"],
          solutionIds: [],
          packageIds: [],
          customRequested: false,
        },
      },
      randomUUID(),
    ),
  ).rejects.toMatchObject({ code: "unavailable" });
});
it("HTTP boundary rejects origins, missing keys, arrays and leaked input; accepts credential-free JSON preflight", async () => {
  const app = createApp(loadBackendEnv({ APP_ENV: "development" }), {
    limiter: { admit: async () => ({ allowed: true, retryAfter: 0 }) },
    intake: submit,
  });
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw Error();
  const base = `http://127.0.0.1:${address.port}`;
  try {
    const headers = {
      Origin: "http://127.0.0.1:3000",
      "Content-Type": "application/json",
    };
    const preflight = await fetch(`${base}/api/intake`, {
      method: "OPTIONS",
      headers: {
        Origin: headers.Origin,
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type, Idempotency-Key",
      },
    });
    expect(preflight.status).toBe(204);
    expect(preflight.headers.get("access-control-allow-headers")).toContain(
      "Idempotency-Key",
    );
    for (const [body, extra, status] of [
      [contact(), {}, 400],
      [[], { "Idempotency-Key": randomUUID() }, 400],
      [
        contact(),
        { Origin: "https://evil.invalid", "Idempotency-Key": randomUUID() },
        403,
      ],
    ] as const) {
      const response = await fetch(`${base}/api/intake`, {
        method: "POST",
        headers: { ...headers, ...extra },
        body: JSON.stringify(body),
      });
      expect(response.status).toBe(status);
      expect(response.headers.get("cache-control")).toBe("no-store");
      expect(await response.text()).not.toContain("sample@example.invalid");
    }
    const response = await fetch(`${base}/api/intake`, {
      method: "POST",
      headers: { ...headers, "Idempotency-Key": randomUUID() },
      body: JSON.stringify(contact()),
    });
    expect(response.status).toBe(201);
    expect(await response.json()).toMatchObject({
      type: "contact",
      bookingConfirmed: false,
    });
  } finally {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  }
});
it("disabled or incomplete notice configuration stays off and cannot silently enable production", () => {
  expect(loadBackendEnv({ APP_ENV: "development" }).intake).toBeUndefined();
  expect(() =>
    loadBackendEnv({ APP_ENV: "development", PUBLIC_INTAKE_ENABLED: "true" }),
  ).toThrow();
});

it("receipts reject tampering, arbitrary values and expiry without personal data", () => {
  let now = 1700000000000;
  const codec = createReceiptCodec("SAMPLE-secret", () => now),
    token = codec.issue("ARQ-2026-aaaaaaaaaaaaaaaaaaaaaaaa", "contact");
  expect(codec.read(token)).toMatchObject({
    type: "contact",
    bookingConfirmed: false,
  });
  expect(() => codec.read(token.replace("contact", "quote"))).toThrow();
  expect(() => codec.read({ token })).toThrow();
  now += 15 * 60 * 1000;
  expect(() => codec.read(token)).toThrow();
});
it("reports configured email capability without claiming delivered mail or changing the saved receipt", async () => {
  const saved = await submit(contact(), randomUUID());
  for (const enabled of [false, true]) {
    const app = express();
    app.use(
      "/api/intake",
      createIntakeRouter(
        ["http://127.0.0.1:3000"],
        { admit: async () => ({ allowed: true, retryAfter: 0 }) },
        submit,
        enabled,
      ),
    );
    const server = app.listen(0, "127.0.0.1");
    await once(server, "listening");
    try {
      const address = server.address();
      if (!address || typeof address === "string") throw Error();
      const base = `http://127.0.0.1:${address.port}/api/intake`;
      expect(await (await fetch(base + "/status")).json()).toEqual({
        available: true,
        emailDeliveryEnabled: enabled,
      });
      const result = await fetch(base + "/receipt", {
        method: "POST",
        headers: {
          Origin: "http://127.0.0.1:3000",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: saved.receiptToken }),
      });
      expect(result.status).toBe(200);
      expect(await result.json()).toEqual({
        reference: saved.reference,
        type: "contact",
        delivery: "queued",
        bookingConfirmed: false,
        emailDeliveryEnabled: enabled,
      });
    } finally {
      await new Promise<void>((resolve) => server.close(() => resolve()));
    }
  }
});

it("receipt verification preflight permits only its explicit POST path", async () => {
  const app = createApp(loadBackendEnv({ APP_ENV: "development" }));
  const server = app.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw Error();
  try {
    const result = await fetch(
      `http://127.0.0.1:${address.port}/api/intake/receipt`,
      {
        method: "OPTIONS",
        headers: {
          Origin: "http://127.0.0.1:3000",
          "Access-Control-Request-Method": "POST",
        },
      },
    );
    expect(result.status).toBe(204);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
});
