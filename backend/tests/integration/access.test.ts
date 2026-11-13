import { beforeAll, afterAll, it, expect, vi } from "vitest";
import { randomUUID } from "node:crypto";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { once } from "node:events";
import {
  startAccessFixture,
  deniedSessionKinds,
} from "../support/access-fixture.js";
import { staffUserModel } from "../../src/modules/identity/models/staff-user.model.js";
import { staffSessionModel } from "../../src/modules/identity/models/staff-session.model.js";
import { createStaffAuditReader } from "../../src/server/workflows/staff-audit.server.js";
import { logOperationalFailure } from "../../src/modules/operations/server/logging.js";
import { auditEventModel } from "../../src/modules/operations/models/audit-event.js";
let fixture: Awaited<ReturnType<typeof startAccessFixture>>;
beforeAll(async () => {
  fixture = await startAccessFixture();
});
afterAll(async () => {
  await fixture?.close();
});

for (const kind of deniedSessionKinds)
  it(`direct account read/action denies ${kind} without any layout guard`, async () => {
    const context = await fixture.denied(kind);
    for (const body of [
      undefined,
      { displayName: "SAMPLE attempted change" },
    ]) {
      const response = await fixture.request("/account", {
        cookie: context.cookie,
        ...(body ? { body } : {}),
      });
      expect(response.status).toBe(context.expected);
      expect(response.headers.get("cache-control")).toBe("no-store");
      expect(response.headers.get("x-robots-tag")).toContain("noindex");
      const text = await response.text();
      expect(text).not.toContain("@example.invalid");
      expect(text).not.toMatch(/tokenHash|providerSubject|salt|stack/);
    }
  });
it("checks current roles for private operations even before accessVersion is updated", async () => {
  const actor = await fixture.identity(),
    read = createStaffAuditReader(fixture.connection, () => actor.sid);
  const target = { targetType: "staffUser", targetId: String(actor.staff._id) };
  await expect(read.read(target)).resolves.toEqual([]);
  await staffUserModel(fixture.connection).updateOne(
    { _id: actor.staff._id },
    { $set: { roles: ["editor"] } },
  );
  await expect(read.read(target)).rejects.toMatchObject({ code: "forbidden" });
  await expect(
    fixture.lifecycle.inspect(actor.sid, { targetId: String(actor.staff._id) }),
  ).rejects.toMatchObject({ code: "forbidden" });
  expect(
    (await fixture.request("/account", { cookie: actor.cookie })).status,
  ).toBe(200); // Own account remains permitted for Editors.
});
it("rejects forged privilege fields for every staff bundle without changing the actor", async () => {
  for (const role of ["admin", "sales", "editor"] as const) {
    const actor = await fixture.identity(role),
      before = await staffUserModel(fixture.connection).findById(
        actor.staff._id,
      );
    const response = await fixture.request("/account", {
      cookie: actor.cookie,
      body: {
        displayName: "SAMPLE",
        roles: ["admin"],
        status: "active",
        assurance: "mfa",
        staffUserId: String(actor.staff._id),
      },
    });
    expect(response.status).toBe(400);
    const after = await staffUserModel(fixture.connection).findById(
      actor.staff._id,
    );
    expect(after!.roles).toEqual(before!.roles);
    expect(after!.revision).toBe(before!.revision);
  }
});
it("marks all private denials and preflights no-store, including outer Origin rejection", async () => {
  const cases = [
    { method: "GET", headers: { Origin: "https://wrong.invalid" } },
    { method: "POST", body: {}, headers: { Origin: "https://wrong.invalid" } },
    {
      method: "OPTIONS",
      headers: {
        Origin: "https://wrong.invalid",
        "Access-Control-Request-Method": "POST",
      },
    },
    { method: "HEAD" },
  ];
  for (const value of cases) {
    const response = await fixture.request("/account", value);
    if (value.method === "HEAD") expect([401, 403]).toContain(response.status);
    else expect(response.status).toBe(403);
    expect(response.headers.get("cache-control")).toBe("no-store");
  }
});
it("denies missing mutation header, unexpected preflight methods and query privilege injection", async () => {
  const actor = await fixture.identity();
  expect(
    (
      await fixture.request("/security/pack", {
        cookie: actor.cookie,
        body: {},
        headers: { "X-ARADUN-Request": "" },
      })
    ).status,
  ).toBe(403);
  expect(
    (
      await fixture.request("/account", {
        method: "OPTIONS",
        headers: { "Access-Control-Request-Method": "DELETE" },
      })
    ).status,
  ).toBe(403);
  const value = await fixture.request(
    "/account?roles=admin&staffUserId=000000000000000000000000",
    { cookie: actor.cookie },
  );
  expect(value.status).toBe(200);
  expect((await value.json()).email).toBe(actor.email);
  expect((await fixture.request("/signup", { body: {} })).status).toBe(404);
  expect((await fixture.request("/bootstrap", { body: {} })).status).toBe(404);
});
it("redacts dependency errors and cannot log credential/header/body injection", async () => {
  const actor = await fixture.identity(),
    sentinel = "SAMPLE_PRIVATE_ACCESS_SECRET",
    sink: string[] = [];
  const spy = vi
    .spyOn(staffSessionModel(fixture.connection), "findOne")
    .mockImplementationOnce(() => {
      throw new Error(sentinel);
    });
  try {
    const response = await fixture.request("/account", {
      cookie: actor.cookie,
    });
    expect(response.status).toBe(503);
    expect(await response.text()).not.toContain(sentinel);
  } finally {
    spy.mockRestore();
  }
  expect(
    logOperationalFailure(
      {
        code: "dependency_unavailable",
        correlationId: randomUUID(),
        password: sentinel,
        headers: { Cookie: actor.cookie },
      },
      (line) => sink.push(line),
    ),
  ).toBe(true);
  expect(sink.join("")).not.toContain(sentinel);
  expect(sink.join("")).not.toContain(actor.cookie);
  expect(JSON.parse(sink[0]!).code).toBe("operation_failed");
  expect(
    logOperationalFailure(
      { code: "operation_failed", correlationId: randomUUID() },
      () => {
        throw Error(sentinel);
      },
    ),
  ).toBe(false);
});
it("audit failure diagnostics survive rollback without leaking operation secrets", async () => {
  const actor = await fixture.identity(),
    target = await fixture.identity("sales"),
    logs: string[] = [],
    sentinel = "SAMPLE_PRIVATE_AUDIT_CREDENTIAL";
  const spy = vi
    .spyOn(auditEventModel(fixture.connection), "insertMany")
    .mockRejectedValueOnce(new Error(sentinel));
  const output = vi
    .spyOn(console, "error")
    .mockImplementation((line) => logs.push(String(line)));
  try {
    await expect(
      fixture.lifecycle.setRoles(actor.sid, {
        commandId: randomUUID(),
        approvalReference: "SAMPLE-approval",
        targetId: String(target.staff._id),
        expectedRevision: (await staffUserModel(fixture.connection).findById(
          target.staff._id,
        ))!.revision,
        roles: ["editor"],
      }),
    ).rejects.toMatchObject({ code: "unavailable" });
  } finally {
    spy.mockRestore();
    output.mockRestore();
  }
  expect(logs.length).toBeGreaterThan(0);
  expect(logs.join("")).not.toContain(sentinel);
  expect(logs.join("")).not.toContain(actor.sid);
  expect(
    (await staffUserModel(fixture.connection).findById(target.staff._id))!
      .roles,
  ).toEqual(["sales"]);
});

it("CLI rejects a mismatched private target before connecting and never prints its credentials", async () => {
  await refusedCli(false);
});
it("CLI refuses oversized private stdin before connecting or printing the payload", async () => {
  await refusedCli(true);
});
async function refusedCli(oversized: boolean) {
  let connections = 0;
  const listener = createServer((socket) => {
    connections++;
    socket.destroy();
  });
  listener.listen(0, "127.0.0.1");
  await once(listener, "listening");
  const address = listener.address();
  if (!address || typeof address === "string") throw Error();
  const sentinel = "SAMPLE_PRIVATE_CLI_PASSWORD";
  try {
    const child = spawn(
      process.execPath,
      ["--import", "tsx", "backend/scripts/staff/access.ts", "--inspect"],
      {
        env: {
          ...process.env,
          NODE_ENV: "test",
          APP_ENV: "development",
          ENABLE_LOCAL_STAFF_LIFECYCLE: "true",
          MONGODB_DB_NAME: "aradun_development",
          DB_OPERATIONS_URI: `mongodb://sample:${sentinel}@127.0.0.1:${address.port}/aradun_development?replicaSet=SAMPLE_rs`,
        },
        windowsHide: true,
        stdio: ["pipe", "pipe", "pipe"],
      },
    );
    let output = "";
    child.stdout.on("data", (value) => (output += String(value)));
    child.stderr.on("data", (value) => (output += String(value)));
    child.stdin.on("error", () => {});
    child.stdin.end(
      JSON.stringify({
        database: oversized ? "aradun_development" : "aradun_development_wrong",
        sessionId: "SAMPLE_opaque_session".padEnd(43, "x"),
        input: {
          targetId: "000000000000000000000000",
          private: oversized ? sentinel.repeat(1000) : sentinel,
        },
      }),
    );
    const [code] = await once(child, "exit");
    expect(code).toBe(1);
    expect(output).toContain(oversized ? "invalid_input" : "forbidden");
    expect(output).not.toContain(sentinel);
    expect(output).not.toContain("mongodb://");
    expect(connections).toBe(0);
  } finally {
    await new Promise<void>((resolve) => listener.close(() => resolve()));
  }
}
