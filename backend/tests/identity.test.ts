import { beforeAll, afterAll, it, expect, vi } from "vitest";
import { createConnection } from "mongoose";
import { randomBytes } from "node:crypto";
import { once } from "node:events";
import { createServer } from "node:http";
import type { Router } from "express";
import { createApp } from "../src/app.js";
import { loadBackendEnv } from "../src/config/env.server.js";
import {
  createIdentityRouter,
  safeLocalReturn,
} from "../src/modules/identity/identity.routes.js";
import {
  staffUserModel,
  LOCAL_PROVIDER,
} from "../src/modules/identity/models/staff-user.model.js";
import { staffSessionModel } from "../src/modules/identity/models/staff-session.model.js";
import { authCredentialModel } from "../src/modules/identity/models/auth-credential.model.js";
import { registeredModels } from "../src/server/db/model-registry.server.js";
import {
  createIdentityStore,
  sessionHash,
} from "../src/modules/identity/server/session-store.server.js";
import { startMongoFixture } from "./support/mongo-fixture.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>,
  server: ReturnType<typeof createServer>,
  base: string,
  router: Router;
let stamp = Date.now();
const config = loadBackendEnv({ APP_URL: "http://127.0.0.1:3000" });
const origin = "http://127.0.0.1:3000",
  secret = () => randomBytes(48).toString("base64url");
const cookie = (response: Response) =>
  response.headers
    .getSetCookie()
    .map((value) => value.split(";", 1)[0]!)
    .join("; ");
const sid = (value: string) =>
  decodeURIComponent(value.split("=", 2)[1]!).slice(2).split(".")[0]!;
async function request(
  path: string,
  body?: Record<string, unknown>,
  value?: string,
  headers: Record<string, string> = {},
) {
  return fetch(base + "/api/identity" + path, {
    method: body ? "POST" : "GET",
    headers: {
      Origin: origin,
      ...(body
        ? { "Content-Type": "application/json", "X-ARADUN-Request": "identity" }
        : {}),
      ...(value ? { Cookie: value } : {}),
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
}
async function identity(mapped = true) {
  const email = `sample-${randomBytes(6).toString("hex")}@example.invalid`,
    password = `SAMPLE-${randomBytes(24).toString("base64url")}`,
    credential = await authCredentialModel(fixture.connection).register(
      { email },
      password,
    );
  const actor = mapped
    ? await staffUserModel(fixture.connection).create({
        provider: LOCAL_PROVIDER,
        providerSubject: String(credential._id),
        email,
        emailNormalized: email,
        displayName: "SAMPLE Staff",
        roles: ["admin"],
        status: "active",
        activatedAt: new Date(),
      })
    : undefined;
  return { email, password, credential, actor };
}
async function login(user: { email: string; password: string }) {
  const response = await request("/login", {
    email: user.email,
    password: user.password,
  });
  expect(response.status).toBe(200);
  return { response, value: cookie(response), body: await response.json() };
}
beforeAll(async () => {
  fixture = await startMongoFixture();
  for (const { model } of registeredModels(fixture.connection)) {
    await model.createCollection();
    await model.createIndexes();
  }
  router = await createIdentityRouter(
    fixture.connection,
    {
      secret: secret(),
      rateSecret: secret(),
      loginPolicy: { count: 100, windowMs: 60000 },
      origins: [origin],
    },
    () => new Date(stamp),
  );
  server = createServer(createApp(config, { identity: router }));
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("No port");
  base = `http://127.0.0.1:${address.port}`;
}, 30000);
afterAll(async () => {
  await new Promise<void>((resolve, reject) =>
    server?.close((error) => (error ? reject(error) : resolve())),
  );
  await fixture?.close();
});
it("maps verified credential subject only, signs primary cookie and never exposes credential/session secrets", async () => {
  const user = await identity(),
    signed = await login(user);
  expect(signed.body).toEqual({
    status: "primary",
    requiresMfa: true,
    displayName: "SAMPLE Staff",
    returnTo: "/staff/login",
  });
  expect(Boolean(signed.value)).toBe(true);
  expect(signed.response.headers.get("set-cookie")?.includes("HttpOnly")).toBe(
    true,
  );
  const session = await staffSessionModel(fixture.connection).findOne({
    tokenHash: sessionHash(sid(signed.value)),
  });
  expect(Boolean(session)).toBe(true);
  expect(JSON.stringify(session).includes(sid(signed.value))).toBe(false);
  expect(session?.assurance).toBe("primary");
  expect((await request("/session", undefined, signed.value)).status).toBe(200);
  expect(
    await (await request("/session", undefined, signed.value)).json(),
  ).not.toHaveProperty("roles");
});
it("email coincidence or alternate provider subject never grants staff access", async () => {
  const user = await identity(false);
  await staffUserModel(fixture.connection).create({
    provider: "another-provider",
    providerSubject: String(user.credential._id),
    email: user.email,
    emailNormalized: user.email,
    displayName: "SAMPLE",
    roles: ["admin"],
    status: "active",
    activatedAt: new Date(),
  });
  expect(
    (await request("/login", { email: user.email, password: user.password }))
      .status,
  ).toBe(401);
});
it("rejects wrong password, unprovisioned, suspended and forged privileged input", async () => {
  const user = await identity();
  expect(
    (await request("/login", { email: user.email, password: "SAMPLE-wrong" }))
      .status,
  ).toBe(401);
  expect(
    (
      await request("/login", {
        email: user.email,
        password: user.password,
        roles: ["admin"],
      })
    ).status,
  ).toBe(400);
  await staffUserModel(fixture.connection).updateOne(
    { _id: user.actor!._id },
    { $set: { status: "suspended" } },
  );
  expect(
    (await request("/login", { email: user.email, password: user.password }))
      .status,
  ).toBe(401);
  const unknown = await identity(false);
  expect(
    (
      await request("/login", {
        email: unknown.email,
        password: unknown.password,
      })
    ).status,
  ).toBe(401);
});
it("denies stale accessVersion/status immediately and old cookies after logout", async () => {
  const user = await identity(),
    signed = await login(user);
  await staffUserModel(fixture.connection).updateOne(
    { _id: user.actor!._id },
    { $inc: { accessVersion: 1 } },
  );
  expect(
    await (await request("/session", undefined, signed.value)).json(),
  ).toEqual({ status: "anonymous" });
  const another = await login(user);
  expect((await request("/logout", {}, another.value)).status).toBe(204);
  expect(
    await (await request("/session", undefined, another.value)).json(),
  ).toEqual({ status: "anonymous" });
});
it("checks logical idle/absolute expiry and signed-cookie tampering without TTL", async () => {
  const user = await identity(),
    signed = await login(user);
  const tampered =
    signed.value.slice(0, -1) + (signed.value.endsWith("a") ? "b" : "a");
  expect(await (await request("/session", undefined, tampered)).json()).toEqual(
    { status: "anonymous" },
  );
  stamp += 1800000;
  expect(
    await (await request("/session", undefined, signed.value)).json(),
  ).toEqual({ status: "anonymous" });
  const newer = await login(user);
  await staffSessionModel(fixture.connection).updateOne(
    { tokenHash: sessionHash(sid(newer.value)) },
    { $set: { expiresAt: new Date(stamp - 1) } },
  );
  expect(
    await (await request("/session", undefined, newer.value)).json(),
  ).toEqual({ status: "anonymous" });
});
it("keeps generic Store writes from creating/promoting sessions and guards origin/media/preflight", async () => {
  const store = createIdentityStore(fixture.connection).store;
  await expect(
    new Promise((resolve, reject) =>
      store.set(
        "SAMPLE-never-issued",
        { cookie: { originalMaxAge: 0 } } as never,
        (error) => (error ? reject(new Error("Denied")) : resolve(true)),
      ),
    ),
  ).rejects.toThrow();
  expect(
    (
      await request(
        "/login",
        { email: "sample@example.invalid", password: "SAMPLE" },
        undefined,
        { "X-ARADUN-Request": "" },
      )
    ).status,
  ).toBe(403);
  expect(
    (await request("/logout", {}, undefined, { Origin: "null" })).status,
  ).toBe(403);
  const response = await fetch(base + "/api/identity/login", {
    method: "OPTIONS",
    headers: {
      Origin: origin,
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "content-type,x-aradun-request",
    },
  });
  expect(response.status).toBe(204);
  expect(response.headers.get("Access-Control-Allow-Headers")).toContain(
    "X-ARADUN-Request",
  );
  expect(
    (
      await fetch(base + "/api/catalog/categories", {
        method: "OPTIONS",
        headers: { Origin: origin, "Access-Control-Request-Method": "POST" },
      })
    ).status,
  ).toBe(403);
});
it("sanitizes every external/unimplemented return and refuses signup/recovery endpoints", async () => {
  for (const value of [
    "https://example.invalid",
    "//example.invalid",
    "/dashboard",
    "/staff/login?token=SAMPLE",
    undefined,
  ])
    expect(safeLocalReturn(value)).toBe("/staff/login");
  expect((await request("/signup", {})).status).toBe(404);
  expect((await request("/recover", {})).status).toBe(404);
});
it("requires explicit local secrets/attempt policy and refuses hosted activation", () => {
  expect(() => loadBackendEnv({ AUTH_PROVIDER: "aradun-local" })).toThrow();
  expect(() =>
    loadBackendEnv({ APP_ENV: "staging", AUTH_PROVIDER: "aradun-local" }),
  ).toThrow();
  const env = loadBackendEnv({
    AUTH_PROVIDER: "aradun-local",
    AUTH_SESSION_SECRET: secret(),
    RATE_LIMIT_HASH_SECRET: secret(),
    AUTH_LOGIN_LIMIT: "10",
    AUTH_LOGIN_WINDOW_SECONDS: "600",
  });
  expect(env.identity?.loginPolicy.count).toBe(10);
});
it("fails closed on DB errors and refuses missing reviewed identity indexes", async () => {
  const spy = vi
    .spyOn(staffSessionModel(fixture.connection), "findOne")
    .mockImplementation(() => {
      throw new Error("SAMPLE private detail");
    });
  try {
    const response = await request("/session");
    expect(response.status).toBe(503);
    expect((await response.text()).includes("private detail")).toBe(false);
  } finally {
    spy.mockRestore();
  }
  await staffSessionModel(fixture.connection).collection.dropIndex(
    "tokenHash_1",
  );
  try {
    await expect(
      createIdentityRouter(fixture.connection, {
        secret: secret(),
        rateSecret: secret(),
        loginPolicy: { count: 10, windowMs: 600000 },
        origins: [origin],
      }),
    ).rejects.toThrow("indexes");
  } finally {
    await staffSessionModel(fixture.connection).createIndexes();
  }
  const connection = createConnection();
  await expect(
    createIdentityRouter(connection, {
      secret: secret(),
      rateSecret: secret(),
      loginPolicy: { count: 10, windowMs: 600000 },
      origins: [origin],
    }),
  ).rejects.toThrow();
  await connection.close();
});
