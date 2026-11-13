import { randomUUID } from "node:crypto";
import { Types } from "mongoose";
import { afterAll, beforeAll, expect, it, vi } from "vitest";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { auditEventModel } from "../src/modules/operations/models/audit-event.js";
import {
  createAuditService,
  type AuditPrincipal,
} from "../src/modules/operations/server/audit.js";
import { logOperationalFailure } from "../src/modules/operations/server/logging.js";
import { runTransaction } from "../src/server/db/transaction.server.js";

let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
const staffId = new Types.ObjectId().toHexString();
const targetId = new Types.ObjectId().toHexString();
let principal: AuditPrincipal | undefined = {
  kind: "staff",
  staffUserId: staffId,
  active: true,
  roles: ["admin"],
};
const authorize = vi.fn(async () => principal);
const makeInput = () => ({
  eventKey: randomUUID(),
  action: "stage-change",
  targetType: "opportunity",
  targetId,
  outcome: "success",
  correlationId: randomUUID(),
  changedFields: ["stage"],
});
beforeAll(async () => {
  fixture = await startMongoFixture();
  await auditEventModel(fixture.connection).createIndexes();
});
afterAll(async () => {
  await fixture?.close();
});

it("creates exact source indexes without retention TTL or mutable model fields", async () => {
  const model = auditEventModel(fixture.connection);
  const indexes = await model.listIndexes();
  expect(indexes).toHaveLength(6);
  expect(indexes.find((index) => index.name === "eventKey_1")?.unique).toBe(
    true,
  );
  expect(indexes.some((index) => index.expireAfterSeconds !== undefined)).toBe(
    false,
  );
  expect(model.schema.path("updatedAt")).toBeUndefined();
  expect(model.schema.path("revision")).toBeUndefined();
  await expect(model.create({ eventKey: "invalid" })).rejects.toThrow();
  await expect(
    model.insertMany([
      {
        ...makeInput(),
        actor: { kind: "staff", staffUserId: new Types.ObjectId(staffId) },
        safeSummary: "SAMPLE_PRIVATE_MESSAGE",
      },
    ]),
  ).rejects.toThrow();
});

it("reports local log sink failure without exposing exceptions", () => {
  expect(
    logOperationalFailure(
      { code: "operation_failed", correlationId: randomUUID() },
      () => {
        throw new Error("SAMPLE_PRIVATE_LOG_TOKEN");
      },
    ),
  ).toBe(false);
});

it("commits sensitive state plus audit atomically, or rolls both back", async () => {
  const service = createAuditService(fixture.connection, authorize);
  const records = fixture.connection.collection("synthetic_sensitive_changes");
  await records.insertOne({ key: "baseline" });
  const success = makeInput();
  await runTransaction(fixture.connection, async (session) => {
    await records.insertOne({ key: "commit" }, { session });
    await service.append(success, session);
  });
  const aborted = makeInput();
  await expect(
    runTransaction(fixture.connection, async (session) => {
      await records.insertOne({ key: "abort" }, { session });
      await service.append(aborted, session);
      throw new Error("deliberate rollback");
    }),
  ).rejects.toThrow("deliberate rollback");
  expect(await records.countDocuments({ key: "commit" })).toBe(1);
  expect(await records.countDocuments({ key: "abort" })).toBe(0);
  expect(
    await fixture.connection
      .collection("auditEvents")
      .countDocuments({ eventKey: success.eventKey }),
  ).toBe(1);
  expect(
    await fixture.connection
      .collection("auditEvents")
      .countDocuments({ eventKey: aborted.eventKey }),
  ).toBe(0);
  await expect(service.append(makeInput())).rejects.toMatchObject({
    code: "invalid_input",
  });
});

it("denies missing/inactive actors, non-admin review and unrestricted inputs", async () => {
  const service = createAuditService(fixture.connection, authorize);
  const review = { targetType: "opportunity", targetId };
  try {
    for (const denied of [
      undefined,
      { kind: "staff", staffUserId: staffId, active: false, roles: ["admin"] },
    ] as const) {
      principal = denied;
      await expect(service.read(review)).rejects.toMatchObject({
        code: "forbidden",
      });
    }
    principal = {
      kind: "staff",
      staffUserId: staffId,
      active: true,
      roles: ["sales"],
    };
    await expect(service.read(review)).rejects.toMatchObject({
      code: "forbidden",
    });
    principal = undefined;
    await expect(
      service.append({ ...makeInput(), outcome: "denied" }),
    ).rejects.toMatchObject({ code: "forbidden" });
  } finally {
    principal = {
      kind: "staff",
      staffUserId: staffId,
      active: true,
      roles: ["admin"],
    };
  }
  await expect(
    service.append({ ...makeInput(), actor: { kind: "system" } }),
  ).rejects.toMatchObject({ code: "invalid_input" });
  await expect(service.read({ ...review, limit: 101 })).rejects.toMatchObject({
    code: "invalid_input",
  });
  await expect(
    service.read({ ...review, filter: { $ne: null } }),
  ).rejects.toMatchObject({ code: "invalid_input" });
});

it("rejects ordinary history mutations and retains original audit contents", async () => {
  const model = auditEventModel(fixture.connection);
  const existing = await model.findOne().orFail();
  const before = existing.safeSummary;
  for (const attempt of [
    () =>
      model.updateOne(
        { _id: existing._id },
        { $set: { safeSummary: "changed" } },
      ),
    () => model.deleteMany({}),
    () =>
      model.findOneAndUpdate(
        { _id: existing._id },
        { $set: { outcome: "failed" } },
      ),
    () => model.replaceOne({ _id: existing._id }, { safeSummary: "changed" }),
    () => model.bulkWrite([{ deleteOne: { filter: { _id: existing._id } } }]),
    () => existing.deleteOne(),
  ])
    await expect(attempt()).rejects.toThrow("append-only");
  existing.safeSummary = "changed";
  await expect(existing.save()).rejects.toThrow();
  expect((await model.findById(existing._id).orFail()).safeSummary).toBe(
    before,
  );
});

it("persists failures outside rollback; projection and operational logs exclude secrets/PII", async () => {
  const service = createAuditService(fixture.connection, authorize);
  const value = {
    ...makeInput(),
    outcome: "denied",
    reasonCode: "permission_denied",
  };
  await service.append(value);
  const rows = await service.read({ targetType: "opportunity", targetId });
  expect(rows.some((row) => row.outcome === "denied")).toBe(true);
  expect(
    rows.every(
      (row) =>
        !Object.hasOwn(row, "actor") && !Object.hasOwn(row, "actorIpHash"),
    ),
  ).toBe(true);
  const secret = "SAMPLE_PASSWORD_TOKEN_person@example.invalid";
  await expect(
    service.append({ ...value, safeSummary: secret, message: secret }),
  ).rejects.toMatchObject({ code: "invalid_input" });
  const sink = vi.fn();
  logOperationalFailure(
    {
      code: "operation_failed",
      correlationId: randomUUID(),
      message: secret,
      authorization: secret,
    },
    sink,
  );
  expect(sink).toHaveBeenCalledOnce();
  expect(sink.mock.calls[0]![0]).not.toContain(secret);
  const parsed = JSON.parse(sink.mock.calls[0]![0] as string);
  expect(Object.keys(parsed).sort()).toEqual([
    "code",
    "correlationId",
    "occurredAt",
    "severity",
  ]);
});

it("unique event keys prevent duplicate audit records and report redacted persistence failure", async () => {
  const logs = vi.fn();
  const service = createAuditService(fixture.connection, authorize, logs);
  const value = { ...makeInput(), outcome: "failed" };
  await service.append(value);
  expect(await service.append(value)).toMatchObject({
    correlationId: value.correlationId,
  });
  await expect(
    service.append({ ...value, outcome: "denied" }),
  ).rejects.toMatchObject({ code: "conflict" });
  expect(
    await fixture.connection
      .collection("auditEvents")
      .countDocuments({ eventKey: value.eventKey }),
  ).toBe(1);
  await fixture.connection.db!.admin().command({
    configureFailPoint: "failCommand",
    mode: { times: 1 },
    data: { failCommands: ["insert"], errorCode: 121 },
  });
  try {
    await expect(
      service.append({ ...value, eventKey: randomUUID() }),
    ).rejects.toMatchObject({ code: "unavailable" });
  } finally {
    await fixture.connection
      .db!.admin()
      .command({ configureFailPoint: "failCommand", mode: "off" });
  }
  expect(logs).toHaveBeenCalledWith({
    code: "audit_write_failed",
    correlationId: value.correlationId,
    severity: "error",
  });
});
