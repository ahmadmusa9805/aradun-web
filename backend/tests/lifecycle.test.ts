import { beforeEach, afterEach, it, expect, vi } from "vitest";
import { randomBytes, randomUUID } from "node:crypto";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { once } from "node:events";
import { generate } from "otplib";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { registeredModels } from "../src/server/db/model-registry.server.js";
import { createStaffLifecycle } from "../src/modules/identity/server/lifecycle.service.server.js";
import { lifecycleControlModel } from "../src/modules/identity/models/lifecycle-control.model.js";
import { staffUserModel } from "../src/modules/identity/models/staff-user.model.js";
import { staffSessionModel } from "../src/modules/identity/models/staff-session.model.js";
import { authCredentialModel } from "../src/modules/identity/models/auth-credential.model.js";
import { auditEventModel } from "../src/modules/operations/models/audit-event.js";
import { createSecurityService } from "../src/modules/identity/server/security.service.server.js";
import { createIdentityStore } from "../src/modules/identity/server/session-store.server.js";
import { createStaffAuthorization } from "../src/modules/identity/server/authorization.server.js";
import { identityRecoveryPackModel } from "../src/modules/identity/models/security-state.model.js";
import { createIdentityRouter } from "../src/modules/identity/identity.routes.js";
import { createApp } from "../src/app.js";
import { loadBackendEnv } from "../src/config/env.server.js";
import { inquiryModel } from "../src/modules/intake/models/inquiry.model.js";
import { parseInquiryInput } from "../src/modules/intake/validation/input.schema.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>,
  lifecycle: Awaited<ReturnType<typeof createStaffLifecycle>>,
  security: Awaited<ReturnType<typeof createSecurityService>>;
let stamp: number, sealingKey: string;
const now = () => new Date(stamp),
  random = () => randomBytes(32).toString("base64url"),
  command = () => ({
    commandId: randomUUID(),
    approvalReference: "SAMPLE-private-owner-approval",
  });
const identity = () => ({
  email: `sample-${randomBytes(6).toString("hex")}@example.invalid`,
  displayName: "SAMPLE Staff",
  password: "SAMPLE-" + random(),
});
beforeEach(async () => {
  stamp = Date.now();
  sealingKey = random();
  fixture = await startMongoFixture();
  for (const { model } of registeredModels(fixture.connection)) {
    await model.createCollection();
    await model.createIndexes();
  }
  lifecycle = await createStaffLifecycle(
    fixture.connection,
    { environment: "development", bootstrapArmed: true },
    now,
  );
  security = await createSecurityService(
    fixture.connection,
    { sealingKey },
    now,
  );
});
afterEach(async () => {
  vi.restoreAllMocks();
  await fixture?.close();
});
async function ready(id: string, pack = true) {
  const row = await staffUserModel(fixture.connection).findById(id);
  if (!row) throw Error();
  const sid = random();
  await createIdentityStore(fixture.connection, now).issuePrimary(
    sid,
    row._id,
    row.providerSubject!,
  );
  const setup = await security.beginEnrollment(sid),
    complete = await security.verifyFactor(
      sid,
      await generate({ secret: setup.secret, epoch: Math.floor(stamp / 1000) }),
      true,
    ),
    mfa = random();
  await complete(mfa);
  if (pack) await security.issuePack(mfa);
  return { sid: mfa, setup };
}
async function admin() {
  const input = identity(),
    receipt = await lifecycle.bootstrap({
      ...command(),
      ...input,
      confirmedOwnerEmail: input.email,
    });
  return {
    ...input,
    id: receipt.staffUserId,
    ...(await ready(receipt.staffUserId)),
  };
}
async function provision(
  owner: { sid: string },
  roles: ("admin" | "sales" | "editor")[] = ["sales"],
  activate = true,
) {
  const input = identity(),
    receipt = await lifecycle.provision(owner.sid, {
      ...command(),
      ...input,
      roles,
    });
  if (activate)
    await lifecycle.setStatus(owner.sid, {
      ...command(),
      targetId: receipt.staffUserId,
      expectedRevision: 0,
      status: "active",
    });
  return { ...input, id: receipt.staffUserId };
}
async function revision(id: string) {
  return (await staffUserModel(fixture.connection).findById(id))!.revision;
}

it("requires explicit bootstrap arming and matching confirmed owner; maps immutable library subject and records safe provenance", async () => {
  const input = identity(),
    body = { ...command(), ...input, confirmedOwnerEmail: input.email };
  const disabled = await createStaffLifecycle(
    fixture.connection,
    { environment: "development" },
    now,
  );
  await expect(disabled.bootstrap(body)).rejects.toMatchObject({
    code: "forbidden",
  });
  await expect(
    lifecycle.bootstrap({
      ...body,
      confirmedOwnerEmail: "other@example.invalid",
    }),
  ).rejects.toMatchObject({ code: "forbidden" });
  const result = await lifecycle.bootstrap(body),
    row = await staffUserModel(fixture.connection).findById(result.staffUserId),
    credential = await authCredentialModel(fixture.connection).findById(
      row!.providerSubject,
    );
  expect(String(credential!._id)).toBe(row!.providerSubject);
  expect(row!.roles).toEqual(["admin"]);
  expect(row!.provisionedBy).toBeUndefined();
  expect(result.requiresMfaEnrollment).toBe(true);
  await expect(security.account(random())).rejects.toMatchObject({
    code: "unauthenticated",
  });
  const audit = await auditEventModel(fixture.connection).findOne({
    action: "staff-bootstrap",
  });
  expect(audit!.actor.kind).toBe("system");
  const raw = JSON.stringify({
    audit,
    control: await lifecycleControlModel(fixture.connection).findById(
      "staff-access",
    ),
  });
  expect(raw).not.toContain(input.password);
  expect(raw).not.toContain(input.email);
  expect(raw).not.toContain(body.approvalReference);
  expect(
    (
      await authCredentialModel(fixture.connection).authenticate()(
        input.email,
        input.password,
      )
    ).user,
  ).toBeTruthy();
});

it("serializes concurrent bootstrap and never reopens it after staff data removal", async () => {
  const a = identity(),
    b = identity();
  const results = await Promise.allSettled([
    lifecycle.bootstrap({ ...command(), ...a, confirmedOwnerEmail: a.email }),
    lifecycle.bootstrap({ ...command(), ...b, confirmedOwnerEmail: b.email }),
  ]);
  expect(results.filter((x) => x.status === "fulfilled")).toHaveLength(1);
  expect(await staffUserModel(fixture.connection).countDocuments()).toBe(1);
  expect(await authCredentialModel(fixture.connection).countDocuments()).toBe(
    1,
  );
  expect(await auditEventModel(fixture.connection).countDocuments()).toBe(1);
  // Deliberate damage only within this marked disposable fixture, never a reset recipe.
  await staffUserModel(fixture.connection).deleteMany({});
  await authCredentialModel(fixture.connection).deleteMany({});
  await expect(
    lifecycle.bootstrap({ ...command(), ...a, confirmedOwnerEmail: a.email }),
  ).rejects.toMatchObject({ code: "conflict" });
});

it("provisions invited staff only through fresh Admin and requires explicit activation before login", async () => {
  const owner = await admin(),
    user = await provision(owner, ["sales", "editor"], false),
    row = await staffUserModel(fixture.connection).findById(user.id);
  const inspected = await lifecycle.inspect(owner.sid, { targetId: user.id });
  expect(inspected).toMatchObject({ status: "invited", revision: 0 });
  expect(inspected).not.toHaveProperty("email");
  expect(row!.status).toBe("invited");
  expect(String(row!.provisionedBy)).toBe(owner.id);
  expect(row!.mfaPolicy).toBe("required");
  await expect(
    createIdentityStore(fixture.connection, now).issuePrimary(
      random(),
      row!._id,
      row!.providerSubject!,
    ),
  ).rejects.toMatchObject({ code: "unauthenticated" });
  await lifecycle.setStatus(owner.sid, {
    ...command(),
    targetId: user.id,
    expectedRevision: 0,
    status: "active",
  });
  await expect(
    createIdentityStore(fixture.connection, now).issuePrimary(
      random(),
      row!._id,
      row!.providerSubject!,
    ),
  ).resolves.toBeDefined();
  await expect(
    lifecycle.provision(owner.sid, {
      ...command(),
      email: user.email,
      displayName: user.displayName,
      password: user.password,
      roles: ["sales"],
    }),
  ).rejects.toBeDefined();
  expect(await staffUserModel(fixture.connection).countDocuments()).toBe(2);
});

it("denies primary, stale, non-Admin and unapproved field/role contexts", async () => {
  const owner = await admin(),
    user = await provision(owner),
    sales = await ready(user.id),
    input = {
      ...command(),
      targetId: owner.id,
      expectedRevision: await revision(owner.id),
      roles: ["sales"],
    };
  await expect(lifecycle.setRoles(sales.sid, input)).rejects.toMatchObject({
    code: "forbidden",
  });
  const primary = random(),
    row = await staffUserModel(fixture.connection).findById(owner.id);
  await createIdentityStore(fixture.connection, now).issuePrimary(
    primary,
    row!._id,
    row!.providerSubject!,
  );
  await expect(lifecycle.setRoles(primary, input)).rejects.toMatchObject({
    code: "forbidden",
  });
  await expect(
    lifecycle.setRoles(owner.sid, { ...input, roles: ["manager"] }),
  ).rejects.toMatchObject({ code: "invalid_input" });
  stamp += 300001;
  await expect(
    lifecycle.revoke(owner.sid, {
      ...command(),
      targetId: user.id,
      expectedRevision: await revision(user.id),
    }),
  ).rejects.toMatchObject({ code: "forbidden" });
  await expect(
    createStaffLifecycle(
      fixture.connection,
      { environment: "production" },
      now,
    ),
  ).rejects.toMatchObject({ code: "forbidden" });
});

it("protects the last Admin and requires a ready explicitly named replacement", async () => {
  const owner = await admin(),
    body = {
      ...command(),
      targetId: owner.id,
      expectedRevision: await revision(owner.id),
      status: "deactivated",
    };
  await expect(lifecycle.setStatus(owner.sid, body)).rejects.toMatchObject({
    code: "conflict",
  });
  await expect(
    lifecycle.setStatus(owner.sid, {
      ...body,
      replacementId: owner.id.toUpperCase(),
    }),
  ).rejects.toMatchObject({ code: "conflict" });
  const other = await provision(owner, ["admin"]);
  let request = {
    ...body,
    ...command(),
    expectedRevision: await revision(owner.id),
    replacementId: other.id,
  };
  await expect(lifecycle.setStatus(owner.sid, request)).rejects.toMatchObject({
    code: "conflict",
  });
  const replacement = await ready(other.id, false);
  request = {
    ...request,
    ...command(),
    expectedRevision: await revision(owner.id),
  };
  await expect(lifecycle.setStatus(owner.sid, request)).rejects.toMatchObject({
    code: "conflict",
  });
  await security.issuePack(replacement.sid);
  const result = await lifecycle.setStatus(owner.sid, {
    ...request,
    ...command(),
    expectedRevision: await revision(owner.id),
  });
  expect(result.status).toBe("deactivated");
  expect(
    await staffUserModel(fixture.connection).countDocuments({
      status: "active",
      roles: "admin",
    }),
  ).toBe(1);
  await expect(
    lifecycle.setStatus(replacement.sid, {
      ...command(),
      targetId: owner.id,
      expectedRevision: await revision(owner.id),
      status: "active",
    }),
  ).rejects.toMatchObject({ code: "conflict" });
});

it("survives concurrent reciprocal Admin removal without leaving zero active Admins", async () => {
  const a = await admin(),
    b = await provision(a, ["admin"]),
    bReady = await ready(b.id);
  const results = await Promise.allSettled([
    lifecycle.setStatus(a.sid, {
      ...command(),
      targetId: a.id,
      expectedRevision: await revision(a.id),
      status: "suspended",
      replacementId: b.id,
    }),
    lifecycle.setStatus(bReady.sid, {
      ...command(),
      targetId: b.id,
      expectedRevision: await revision(b.id),
      status: "suspended",
      replacementId: a.id,
    }),
  ]);
  expect(results.filter((x) => x.status === "fulfilled")).toHaveLength(1);
  expect(
    await staffUserModel(fixture.connection).countDocuments({
      status: "active",
      roles: "admin",
    }),
  ).toBe(1);
});

it("deactivation denies an actual stale browser cookie and reports assignments without reassigning", async () => {
  const owner = await admin(),
    user = await provision(owner),
    sales = await ready(user.id);
  const data = parseInquiryInput(
    {
      type: "contact",
      identity: { name: "SAMPLE Prospect", email: "sample@example.invalid" },
      subject: "SAMPLE subject",
      message: "SAMPLE message",
      consent: { privacyAcknowledged: true },
    },
    {
      privacyAcknowledgementRequired: true,
      privacyNoticeVersion: "SAMPLE-policy",
      marketingNoticeVersion: "SAMPLE-marketing",
    },
    now().toISOString(),
  );
  const Inquiry = inquiryModel(fixture.connection);
  const inquiry = new Inquiry({
    ...data,
    submissionKeyHash: randomBytes(32).toString("hex"),
    payloadHash: randomBytes(32).toString("hex"),
    assignedTo: user.id,
    assignedAt: now(),
    assignedBy: owner.id,
  });
  await inquiry.save();
  const origin = "http://127.0.0.1:3000",
    router = await createIdentityRouter(
      fixture.connection,
      {
        secret: random(),
        rateSecret: random(),
        origins: [origin],
        loginPolicy: { count: 100, windowMs: 60000 },
        security: { sealingKey },
      },
      now,
    ),
    server = createServer(
      createApp(loadBackendEnv({ APP_URL: origin }), { identity: router }),
    );
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw Error();
  const base = `http://127.0.0.1:${address.port}/api/identity`;
  const cookie = (r: Response) =>
    r.headers
      .getSetCookie()
      .map((v) => v.split(";", 1)[0])
      .join("; ");
  const post = (path: string, body: unknown, cookieValue = "") =>
    fetch(base + path, {
      method: "POST",
      headers: {
        Origin: origin,
        "Content-Type": "application/json",
        "X-ARADUN-Request": "identity",
        Cookie: cookieValue,
      },
      body: JSON.stringify(body),
    });
  try {
    stamp += 30000;
    const login = await post("/login", {
      email: user.email,
      password: user.password,
    });
    expect(login.status).toBe(200);
    const mfa = await post(
      "/security/verify",
      {
        enrollment: false,
        token: await generate({
          secret: sales.setup.secret,
          epoch: Math.floor(stamp / 1000),
        }),
      },
      cookie(login),
    );
    expect(mfa.status).toBe(200);
    const value = cookie(mfa);
    expect(
      (
        await fetch(base + "/account", {
          headers: { Origin: origin, Cookie: value },
        })
      ).status,
    ).toBe(200);
    const receipt = await lifecycle.setStatus(owner.sid, {
      ...command(),
      targetId: user.id,
      expectedRevision: await revision(user.id),
      status: "deactivated",
    });
    expect(receipt.reassignment.assignedInquiries).toBe(1);
    expect(receipt.reassignment.contactsOpportunitiesTasks).toMatch(
      /not-implemented/,
    );
    expect(
      (
        await fetch(base + "/account", {
          headers: { Origin: origin, Cookie: value },
        })
      ).status,
    ).toBe(401);
    expect(
      String(
        (await inquiryModel(fixture.connection).findById(inquiry._id))!
          .assignedTo,
      ),
    ).toBe(user.id);
    expect(
      await staffSessionModel(fixture.connection).countDocuments({
        staffUserId: user.id,
        revokedAt: { $exists: false },
      }),
    ).toBe(0);
    expect(
      (await identityRecoveryPackModel(fixture.connection).findOne({
        staffUserId: user.id,
      }))!.expiresAt.getTime(),
    ).toBeLessThanOrEqual(stamp);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
  }
});

it("atomically rolls back role/version/session changes when audit persistence fails, then rejects stale revisions", async () => {
  const owner = await admin(),
    user = await provision(owner),
    sales = await ready(user.id),
    before = await staffUserModel(fixture.connection).findById(user.id),
    body = {
      ...command(),
      targetId: user.id,
      expectedRevision: before!.revision,
      roles: ["editor"],
    };
  const mock = vi
    .spyOn(auditEventModel(fixture.connection), "insertMany")
    .mockRejectedValueOnce(new Error("SAMPLE audit failure"));
  vi.spyOn(console, "error").mockImplementation(() => {});
  await expect(lifecycle.setRoles(owner.sid, body)).rejects.toMatchObject({
    code: "unavailable",
  });
  mock.mockRestore();
  expect(
    (await staffUserModel(fixture.connection).findById(user.id))!.accessVersion,
  ).toBe(before!.accessVersion);
  await expect(
    createStaffAuthorization(fixture.connection, now)(sales.sid, "crm.read"),
  ).resolves.toBeDefined();
  await lifecycle.setRoles(owner.sid, body);
  await expect(
    createStaffAuthorization(fixture.connection, now)(sales.sid, "crm.read"),
  ).rejects.toBeDefined();
  await expect(lifecycle.setRoles(owner.sid, body)).rejects.toMatchObject({
    code: "conflict",
  });
  expect(
    await auditEventModel(fixture.connection).countDocuments({
      eventKey: `staff:${body.commandId}`,
    }),
  ).toBe(1);
});

it("CLI help is inert; unarmed/hosted/argument-secret commands fail without exposing input", async () => {
  async function run(args: string[], env: Record<string, string> = {}) {
    const child = spawn(
      process.execPath,
      ["--import", "tsx", "backend/scripts/staff/access.ts", ...args],
      {
        env: { ...process.env, ENABLE_LOCAL_STAFF_LIFECYCLE: "false", ...env },
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: true,
      },
    );
    let output = "";
    child.stdout.on("data", (chunk) => (output += String(chunk)));
    child.stderr.on("data", (chunk) => (output += String(chunk)));
    const [code] = await once(child, "exit");
    return { code, output };
  }
  expect((await run(["--help"])).code).toBe(0);
  const secret = "SAMPLE_PRIVATE_OPERATION_PASSWORD",
    bad = await run(["--bootstrap", secret]);
  expect(bad.code).toBe(1);
  expect(bad.output).not.toContain(secret);
  const refused = await run(["--bootstrap"], {
    ENABLE_LOCAL_STAFF_LIFECYCLE: "true",
    ALLOW_LOCAL_STAFF_BOOTSTRAP: "true",
    APP_ENV: "production",
    DB_OPERATIONS_URI: `mongodb://sample:${secret}@unreachable.invalid/aradun_production`,
  });
  expect(refused.code).toBe(1);
  expect(refused.output).not.toContain(secret);
  expect(refused.output).not.toContain("mongodb://");
});
