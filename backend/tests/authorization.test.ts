import { beforeAll, afterAll, it, expect } from "vitest";
import { Types } from "mongoose";
import { randomBytes } from "node:crypto";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { createStaffAuditReader } from "../src/server/workflows/staff-audit.server.js";
import { auditEventModel } from "../src/modules/operations/models/audit-event.js";
import {
  staffUserModel,
  LOCAL_PROVIDER,
} from "../src/modules/identity/models/staff-user.model.js";
import { staffSessionModel } from "../src/modules/identity/models/staff-session.model.js";
import {
  createIdentityStore,
  sessionHash,
} from "../src/modules/identity/server/session-store.server.js";
import { createStaffAuthorization } from "../src/modules/identity/server/authorization.server.js";
import {
  requirePermission,
  ownAccountInput,
  type Operation,
  type StaffRole,
} from "../src/modules/identity/policies/roles.js";
import {
  salesScope,
  scopedRecordFilter,
  requireRecord,
  taskScope,
  linkedContactFilter,
  linkedContactDto,
  linkedContactProjection,
  ownAccountFilter,
  type PolicyActor,
} from "../src/modules/identity/policies/record-access.server.js";

let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
const now = new Date(),
  id = () => new Types.ObjectId();
beforeAll(async () => {
  fixture = await startMongoFixture();
  for (const model of [
    staffUserModel(fixture.connection),
    staffSessionModel(fixture.connection),
  ]) {
    await model.createCollection();
    await model.createIndexes();
  }
});
afterAll(async () => {
  await fixture?.close();
});
async function actor(roles: StaffRole[] = ["sales"]) {
  const suffix = randomBytes(8).toString("hex"),
    sid = randomBytes(32).toString("base64url");
  const staff = await staffUserModel(fixture.connection).create({
    provider: LOCAL_PROVIDER,
    providerSubject: suffix,
    email: suffix + "@example.invalid",
    emailNormalized: suffix + "@example.invalid",
    displayName: "SAMPLE Staff",
    roles,
    status: "active",
    activatedAt: now,
  });
  await createIdentityStore(fixture.connection, () => now).issuePrimary(
    sid,
    staff._id,
    suffix,
  );
  // Trusted test-only factor evidence. No application API can promote assurance yet.
  await staffSessionModel(fixture.connection).updateOne(
    { tokenHash: sessionHash(sid) },
    { $set: { assurance: "mfa", mfaVerifiedAt: now } },
  );
  return { staff, sid, policy: { id: staff._id, roles } satisfies PolicyActor };
}
const authorize = (sid: string, operation: Operation, date = now) =>
  createStaffAuthorization(fixture.connection, () => date)(sid, operation);

it("enforces the approved role matrix, combined bundles and deny-by-default", () => {
  const content: Operation[] = [
    "content.draft",
    "content.preview",
    "content.seo",
  ];
  for (const op of content) {
    expect(() => requirePermission(["editor"], op)).not.toThrow();
    expect(() => requirePermission(["sales"], op)).toThrow();
  }
  for (const op of [
    "crm.read",
    "crm.write",
    "crm.assign",
    "crm.correct",
    "content.publish",
    "staff.manage",
    "audit.read",
  ] as Operation[]) {
    expect(() => requirePermission(["admin"], op)).not.toThrow();
    expect(() => requirePermission(["editor"], op)).toThrow();
  }
  for (const op of [
    "crm.assign",
    "crm.correct",
    "content.publish",
    "content.indexing",
    "staff.manage",
    "audit.read",
  ] as Operation[])
    expect(() => requirePermission(["sales"], op)).toThrow();
  expect(() =>
    requirePermission(["sales", "editor"], "content.draft"),
  ).not.toThrow();
  for (const roles of [[], ["finance"], ["__proto__"], ["constructor"]])
    expect(() => requirePermission(roles, "crm.read")).toThrow();
  expect(() =>
    requirePermission(["admin"], "finance.read" as Operation),
  ).toThrow();
});

it("reloads current roles/status/version and denies forged, primary or revoked sessions", async () => {
  const { staff, sid } = await actor(["editor"]);
  await expect(authorize(sid, "content.draft")).resolves.toMatchObject({
    accessVersion: 0,
  });
  await expect(authorize(sid, "crm.read")).rejects.toMatchObject({
    code: "forbidden",
  });
  await staffUserModel(fixture.connection).updateOne(
    { _id: staff._id },
    { $set: { roles: ["sales"] } },
  );
  await expect(authorize(sid, "content.draft")).rejects.toMatchObject({
    code: "forbidden",
  });
  await expect(authorize(sid, "crm.read")).resolves.toBeDefined();
  await staffUserModel(fixture.connection).updateOne(
    { _id: staff._id },
    { $inc: { accessVersion: 1 } },
  );
  await expect(authorize(sid, "crm.read")).rejects.toMatchObject({
    code: "unauthenticated",
  });
  await expect(
    authorize(randomBytes(32).toString("hex"), "crm.read"),
  ).rejects.toMatchObject({ code: "unauthenticated" });
  for (const change of [
    { assurance: "primary" },
    { revokedAt: now },
    { idleExpiresAt: now },
    { expiresAt: now },
  ]) {
    const value = await actor();
    await staffSessionModel(fixture.connection).updateOne(
      { tokenHash: sessionHash(value.sid) },
      { $set: change },
    );
    await expect(authorize(value.sid, "crm.read")).rejects.toBeDefined();
  }
  for (const status of ["suspended", "deactivated"]) {
    const value = await actor();
    await staffUserModel(fixture.connection).updateOne(
      { _id: value.staff._id },
      { $set: { status } },
    );
    await expect(authorize(value.sid, "crm.read")).rejects.toMatchObject({
      code: "unauthenticated",
    });
  }
});

it("requires fresh primary and factor authentication for sensitive security changes", async () => {
  const { sid } = await actor(["admin"]);
  await expect(authorize(sid, "staff.manage")).resolves.toBeDefined();
  await expect(
    authorize(sid, "account.security", new Date(+now + 300001)),
  ).rejects.toMatchObject({ code: "forbidden" });
  await expect(
    authorize(sid, "audit.read", new Date(+now + 300001)),
  ).resolves.toBeDefined();
  await staffSessionModel(fixture.connection).updateOne(
    { tokenHash: sessionHash(sid) },
    { $set: { mfaVerifiedAt: new Date(+now + 1000) } },
  );
  await expect(authorize(sid, "audit.read")).rejects.toMatchObject({
    code: "forbidden",
  });
});

it("uses identical scopes for reads, counts, search and mutations against real MongoDB", async () => {
  const { policy } = await actor(),
    other = id(),
    collection = fixture.connection.collection("sample_policy_records");
  const owned = id(),
    hidden = id();
  await collection.insertMany([
    { _id: owned, ownerId: policy.id, label: "SAMPLE matched", revision: 0 },
    { _id: hidden, ownerId: other, label: "SAMPLE matched", revision: 0 },
  ]);
  const scope = salesScope(policy, "opportunity");
  expect(await collection.countDocuments(scope)).toBe(1);
  expect(
    (
      await collection
        .find({ $and: [scope, { label: /matched/ }] })
        .limit(10)
        .toArray()
    ).map((x) => String(x._id)),
  ).toEqual([String(owned)]);
  for (const target of [hidden, id()]) {
    const filter = scopedRecordFilter(
      policy,
      "opportunity",
      String(target),
      "crm.write",
    );
    expect(await collection.findOne(filter)).toBeNull();
    expect(
      (await collection.updateOne(filter, { $set: { revision: 1 } }))
        .matchedCount,
    ).toBe(0);
  }
  expect(
    (
      await collection.updateOne(
        scopedRecordFilter(policy, "opportunity", String(owned), "crm.write"),
        { $set: { revision: 1 } },
      )
    ).matchedCount,
  ).toBe(1);
  expect(() =>
    scopedRecordFilter(policy, "opportunity", { $ne: null }),
  ).toThrow();
  expect(() => scopedRecordFilter(policy, "opportunity", "bad-id")).toThrow();
  expect(() =>
    salesScope({ id: policy.id, roles: ["editor"] }, "contact"),
  ).toThrow();
  expect(
    salesScope({ id: policy.id, roles: ["admin"] }, "opportunity"),
  ).toEqual({});
});

it("does not turn linked contact context into unrelated history or ownership", async () => {
  const { policy } = await actor(),
    contact = id(),
    other = id(),
    inquiry = { _id: id(), assignedTo: policy.id, contactId: contact };
  const contacts = fixture.connection.collection("sample_policy_contacts");
  await contacts.insertOne({
    _id: contact,
    ownerId: other,
    displayName: "SAMPLE Contact",
    email: "private@example.invalid",
    notes: "SAMPLE PRIVATE",
    customerProfile: { status: "active" },
  });
  const row = await contacts.findOne(
    linkedContactFilter(policy, "inquiry", inquiry, String(contact)),
    { projection: linkedContactProjection },
  );
  expect(row).not.toHaveProperty("email");
  expect(row).not.toHaveProperty("notes");
  expect(
    linkedContactDto(row as { _id: Types.ObjectId; displayName: string }),
  ).toEqual({ id: String(contact), displayName: "SAMPLE Contact" });
  expect(
    await contacts.findOne(
      scopedRecordFilter(policy, "contact", String(contact)),
    ),
  ).toBeNull();
  expect(() =>
    linkedContactFilter(policy, "inquiry", inquiry, String(id())),
  ).toThrow();
  expect(() =>
    linkedContactFilter(
      policy,
      "inquiry",
      { ...inquiry, assignedTo: other },
      String(contact),
    ),
  ).toThrow();
  expect(() =>
    requireRecord(policy, "opportunity", {
      _id: id(),
      ownerId: other,
      contactId: contact,
    }),
  ).toThrow();
});

it("requires both task assignment and exact authorized target, never task-based privilege escalation", async () => {
  const { policy } = await actor(),
    target = { _id: id(), ownerId: policy.id },
    other = id(),
    tasks = fixture.connection.collection("sample_policy_tasks");
  await tasks.insertMany([
    { assignedTo: policy.id, target: { kind: "opportunity", id: target._id } },
    { assignedTo: other, target: { kind: "opportunity", id: target._id } },
    { assignedTo: policy.id, target: { kind: "opportunity", id: other } },
  ]);
  const scope = taskScope(policy, "opportunity", String(target._id), target);
  expect(await tasks.countDocuments(scope)).toBe(1);
  expect(() =>
    taskScope(policy, "opportunity", String(target._id), {
      ...target,
      ownerId: other,
    }),
  ).toThrow();
  expect(() =>
    taskScope(policy, "opportunity", String(other), target),
  ).toThrow();
  expect(() => taskScope(policy, "opportunity", String(other), null)).toThrow();
});

it("My Account is self-only and cannot accept privilege, identity or arbitrary field changes", async () => {
  const { policy } = await actor(["admin"]);
  expect(ownAccountFilter(policy, String(policy.id), "account.update")).toEqual(
    { _id: policy.id },
  );
  expect(() => ownAccountFilter(policy, String(id()))).toThrow();
  for (const field of [
    "roles",
    "status",
    "accessVersion",
    "providerSubject",
    "email",
    "mfaPolicy",
    "__proto__",
  ])
    expect(
      ownAccountInput.safeParse(JSON.parse(`{"${field}":"admin"}`)).success,
    ).toBe(false);
  expect(
    ownAccountInput.safeParse({
      displayName: "SAMPLE Name",
      preferredTimezone: "Asia/Dhaka",
    }).success,
  ).toBe(true);
  expect(
    ownAccountInput.safeParse({ preferredTimezone: "invalid/zone" }).success,
  ).toBe(false);
});

it("fails closed when the database is unavailable", async () => {
  // A separate unconnected Mongoose connection avoids touching the owned fixture.
  const { createConnection } = await import("mongoose");
  const empty = createConnection();
  await expect(
    createStaffAuthorization(empty)(
      randomBytes(32).toString("hex"),
      "crm.read",
    ),
  ).rejects.toMatchObject({ code: "unavailable" });
  await empty.close();
});

it("binds the existing restricted audit read to a real current session without exposing append", async () => {
  await auditEventModel(fixture.connection).createCollection();
  const admin = await actor(["admin"]),
    editor = await actor(["editor"]);
  const reader = createStaffAuditReader(
    fixture.connection,
    () => admin.sid,
    () => now,
  );
  expect(reader).not.toHaveProperty("append");
  await expect(
    reader.read({ limit: 5, targetType: "article", targetId: String(id()) }),
  ).resolves.toEqual([]);
  await expect(
    createStaffAuditReader(
      fixture.connection,
      () => editor.sid,
      () => now,
    ).read({ limit: 5 }),
  ).rejects.toMatchObject({ code: "forbidden" });
  await staffUserModel(fixture.connection).updateOne(
    { _id: admin.staff._id },
    { $set: { status: "suspended" } },
  );
  await expect(
    reader.read({ limit: 5, targetType: "article", targetId: String(id()) }),
  ).rejects.toMatchObject({
    code: "unauthenticated",
  });
});
