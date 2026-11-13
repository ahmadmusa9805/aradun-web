import { beforeAll, afterAll, it, expect, vi } from "vitest";
import { Types, createConnection } from "mongoose";
import { createServer } from "node:http";
import { once } from "node:events";
import { randomBytes } from "node:crypto";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { runTransaction } from "../src/server/db/transaction.server.js";
import { outboxEventModel } from "../src/modules/notifications/models/outbox-event.model.js";
import {
  enqueueOutbox,
  createLocalOutboxWorker,
  syntheticTransport,
} from "../src/modules/notifications/server/outbox.service.server.js";
import { assertOwnedNotificationFixture } from "../src/modules/notifications/server/local-test-guard.server.js";
import { createApp } from "../src/app.js";
import { loadBackendEnv } from "../src/config/env.server.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
const input = () => ({
  kind: "inquiry-acknowledgement",
  aggregateType: "inquiry",
  aggregateId: new Types.ObjectId().toString(),
  recipient: { kind: "prospect", prospectEmail: "sample@example.invalid" },
  templateKey: "inquiry-acknowledgement",
  templateVersion: 1,
  payload: { reference: "SAMPLE-reference", inquiryType: "contact" },
});
const model = () => outboxEventModel(fixture.connection);
const enqueue = (value = input()) =>
  runTransaction(fixture.connection, (session) =>
    enqueueOutbox(fixture.connection, value, session),
  );
const eligible = async () => ({
  eligible: true as const,
  email: "sample@example.invalid",
});
const worker = (transport = syntheticTransport([]), extra = {}) =>
  createLocalOutboxWorker(fixture.connection, {
    mode: "local-test",
    appEnv: "development",
    transport,
    eligible,
    ...extra,
  });
beforeAll(async () => {
  fixture = await startMongoFixture();
  await model().createCollection();
  await model().createIndexes();
}, 30000);
afterAll(async () => {
  await fixture?.close();
});
it("enqueues transactionally, deduplicates immutable intent and rolls back", async () => {
  const value = input(),
    one = await enqueue(value),
    two = await enqueue(value);
  expect(two.id).toBe(one.id);
  expect(one.dedupeKey).not.toContain("@");
  await expect(
    enqueue({
      ...value,
      payload: { ...value.payload, reference: "SAMPLE-changed" },
    }),
  ).rejects.toThrow();
  const rolled = input();
  await expect(
    runTransaction(fixture.connection, async (session) => {
      await enqueueOutbox(fixture.connection, rolled, session);
      throw new Error("rollback");
    }),
  ).rejects.toThrow("rollback");
  expect(
    await model().countDocuments({ aggregateId: rolled.aggregateId }),
  ).toBe(0);
  await model().updateOne({ _id: one._id }, { $set: { status: "suppressed" } });
});
it("rejects invalid payloads, identity updates, bulk bypasses and retention", async () => {
  const session = await fixture.connection.startSession();
  try {
    await expect(
      enqueueOutbox(fixture.connection, input(), session),
    ).rejects.toThrow("transaction");
  } finally {
    await session.endSession();
  }
  await expect(
    enqueue({
      ...input(),
      payload: { reference: "SAMPLE-reference", inquiryType: "bogus" },
    }),
  ).rejects.toThrow();
  const event = await enqueue();
  await expect(
    model().updateOne({ _id: event._id }, { $set: { dedupeKey: "forged" } }),
  ).rejects.toThrow();
  await expect(
    model().updateOne({ _id: event._id }, { $set: { expiresAt: new Date() } }),
  ).rejects.toThrow();
  await expect(model().insertMany([input()])).rejects.toThrow();
  const indexes = await model().listIndexes();
  expect(indexes).toHaveLength(5);
  expect(indexes.some((index) => "expireAfterSeconds" in index)).toBe(false);
  await model().updateOne(
    { _id: event._id },
    { $set: { status: "suppressed" } },
  );
});
it("concurrent workers claim each event once and report synthetic acceptance, not delivery", async () => {
  const event = await enqueue(),
    transport = syntheticTransport([]),
    send = vi.spyOn(transport, "send"),
    a = await worker(transport),
    b = await worker(transport);
  await Promise.all([a.run(), b.run()]);
  expect(send).toHaveBeenCalledTimes(1);
  expect(await model().findById(event._id)).toMatchObject({
    status: "sent",
    attempts: 1,
    deliveryState: "accepted",
    provider: "synthetic",
  });
});
it("retries the same event only when due and exhausts five attempts", async () => {
  const event = await enqueue();
  let now = Date.now() + 100;
  const transport = syntheticTransport(Array(5).fill("transient")),
    send = vi.spyOn(transport, "send"),
    job = await worker(transport, { now: () => new Date(now) });
  await job.run();
  expect((await model().findById(event._id))?.status).toBe("retry");
  await job.run();
  expect(send).toHaveBeenCalledTimes(1);
  for (let i = 0; i < 4; i++) {
    now += 200000;
    await job.run();
  }
  expect(await model().findById(event._id)).toMatchObject({
    status: "failed",
    attempts: 5,
  });
  await job.run();
  expect(send).toHaveBeenCalledTimes(5);
});
it("suppresses revoked eligibility and refuses real recipients without sending", async () => {
  const event = await enqueue(),
    transport = syntheticTransport([]),
    send = vi.spyOn(transport, "send");
  await (
    await worker(transport, { eligible: async () => ({ eligible: false }) })
  ).run();
  expect((await model().findById(event._id))?.status).toBe("suppressed");
  const unsafe = await enqueue();
  await (
    await worker(transport, {
      eligible: async () => ({ eligible: true, email: "sample@example.com" }),
    })
  ).run();
  expect((await model().findById(unsafe._id))?.status).toBe("failed");
  expect(send).not.toHaveBeenCalled();
});
it("quarantines unknown acceptance and requires matching lease evidence to reconcile", async () => {
  const event = await enqueue(),
    transport = syntheticTransport(["uncertain"]),
    send = vi.spyOn(transport, "send"),
    job = await worker(transport);
  await job.run();
  const uncertain = await model().findById(event._id);
  expect(uncertain?.status).toBe("uncertain");
  await job.run();
  expect(send).toHaveBeenCalledTimes(1);
  expect(await job.reconcile(event.id, "wrong", "accepted")).toBe(false);
  expect(
    await job.reconcile(event.id, uncertain!.leaseToken!, "accepted"),
  ).toBe(true);
  expect((await model().findById(event._id))?.deliveryState).toBe("accepted");
});
it("expired leases are quarantined and stale completion cannot overwrite them", async () => {
  const event = await enqueue();
  let clock = Date.now() + 100;
  let release!: () => void;
  let started!: () => void;
  const entered = new Promise<void>((resolve) => {
    started = resolve;
  });
  const transport = syntheticTransport([]);
  transport.send = async () => {
    started();
    await new Promise<void>((resolve) => {
      release = resolve;
    });
    return "accepted";
  };
  const first = await worker(transport, { now: () => new Date(clock) });
  const running = first.run();
  await entered;
  clock += 31000;
  const second = await worker(syntheticTransport([]), {
    now: () => new Date(clock),
  });
  expect((await second.run()).uncertain).toBe(1);
  release();
  expect((await running).stale).toBe(1);
  expect((await model().findById(event._id))?.status).toBe("uncertain");
});
it("disabled mode leaves attempts untouched and local mode rejects unowned targets", async () => {
  const event = await enqueue(),
    disabled = await createLocalOutboxWorker(fixture.connection, {
      mode: "disabled",
    });
  expect((await disabled.run()).disabled).toBe(true);
  expect((await model().findById(event._id))?.attempts).toBe(0);
  const connection = createConnection();
  await expect(
    assertOwnedNotificationFixture(connection, "development"),
  ).rejects.toThrow();
  await expect(
    assertOwnedNotificationFixture(fixture.connection, "production"),
  ).rejects.toThrow();
  await connection.close();
  await model().updateOne(
    { _id: event._id },
    { $set: { status: "suppressed" } },
  );
});
it("enforces test-only configuration and fails required notifications closed", () => {
  expect(() => loadBackendEnv({}, ["notifications"])).toThrow();
  expect(() =>
    loadBackendEnv({
      NODE_ENV: "production",
      OUTBOX_MODE: "local-test",
      JOB_TRIGGER_SECRET: "x".repeat(40),
    }),
  ).toThrow();
});
it("authenticates job requests before work and preserves machine/browser isolation", async () => {
  const secret = randomBytes(32).toString("hex"),
    config = loadBackendEnv({
      NODE_ENV: "test",
      APP_ENV: "development",
      OUTBOX_MODE: "local-test",
      JOB_TRIGGER_SECRET: secret,
      EMAIL_PROVIDER: "disabled",
    });
  const job = await worker(),
    run = vi.spyOn(job, "run"),
    server = createServer(createApp(config, { outbox: job }));
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("No port");
  const url = `http://127.0.0.1:${address.port}/internal/jobs/outbox/run`,
    headers = {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    };
  try {
    expect((await fetch(url, { method: "POST" })).status).toBe(401);
    expect(
      (
        await fetch(url, {
          method: "POST",
          headers: { ...headers, Origin: "http://localhost:3000" },
        })
      ).status,
    ).toBe(403);
    expect(
      (
        await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify({ recipient: "sample@example.invalid" }),
        })
      ).status,
    ).toBe(400);
    expect(
      (
        await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify({ data: "x".repeat(2000) }),
        })
      ).status,
    ).toBe(400);
    expect(run).not.toHaveBeenCalled();
    const response = await fetch(url, { method: "POST", headers, body: "{}" });
    expect(response.status).toBe(200);
    const body = await response.text();
    expect(body).toContain('"simulated":true');
    expect(body).not.toContain(secret);
    expect(body).not.toContain("@");
    expect(run).toHaveBeenCalledTimes(1);
  } finally {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  }
});
it("bounds each batch and retries eligibility failures without any transport call", async () => {
  const events = [];
  for (let i = 0; i < 6; i++) events.push(await enqueue());
  const transport = syntheticTransport([]),
    send = vi.spyOn(transport, "send"),
    job = await worker(transport, {
      eligible: async () => {
        throw new Error("private details");
      },
    });
  expect((await job.run()).processed).toBe(5);
  expect(send).not.toHaveBeenCalled();
  expect(
    await model().countDocuments({
      _id: { $in: events.map((event) => event._id) },
      status: "pending",
    }),
  ).toBe(1);
  for (const event of events)
    await model().updateOne(
      { _id: event._id },
      { $set: { status: "suppressed" } },
    );
});
it("permanent transport failure is terminal with safe fixed errors", async () => {
  const event = await enqueue();
  await (await worker(syntheticTransport(["permanent"]))).run();
  expect(await model().findById(event._id)).toMatchObject({
    status: "failed",
    attempts: 1,
    lastErrorCode: "permanent_failure",
  });
});
it("transport timeout is uncertain and late acceptance never overwrites it", async () => {
  const event = await enqueue(),
    transport = syntheticTransport([]);
  let release!: (value: "accepted") => void;
  transport.send = () =>
    new Promise((resolve) => {
      release = resolve;
    });
  const job = await worker(transport);
  expect((await job.run()).uncertain).toBe(1);
  release("accepted");
  await new Promise((resolve) => setTimeout(resolve, 10));
  expect((await model().findById(event._id))?.status).toBe("uncertain");
}, 10000);
