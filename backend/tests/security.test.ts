import { beforeAll, afterAll, it, expect, vi } from "vitest";
import { createServer } from "node:http";
import { once } from "node:events";
import { randomBytes } from "node:crypto";
import { generate } from "otplib";
import type { Request } from "express";
import { createApp } from "../src/app.js";
import { loadBackendEnv } from "../src/config/env.server.js";
import { createIdentityRouter } from "../src/modules/identity/identity.routes.js";
import { createSecurityService } from "../src/modules/identity/server/security.service.server.js";
import {
  identityFactorModel,
  identityChallengeModel,
  identityRecoveryPackModel,
  identitySecurityEventModel,
} from "../src/modules/identity/models/security-state.model.js";
import { createStaffAuthorization } from "../src/modules/identity/server/authorization.server.js";
import {
  createIdentityStore,
  sessionHash,
} from "../src/modules/identity/server/session-store.server.js";
import {
  staffUserModel,
  LOCAL_PROVIDER,
} from "../src/modules/identity/models/staff-user.model.js";
import { staffSessionModel } from "../src/modules/identity/models/staff-session.model.js";
import { authCredentialModel } from "../src/modules/identity/models/auth-credential.model.js";
import { registeredModels } from "../src/server/db/model-registry.server.js";
import { startMongoFixture } from "./support/mongo-fixture.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>,
  server: ReturnType<typeof createServer>,
  base: string,
  service: Awaited<ReturnType<typeof createSecurityService>>;
let stamp = Date.now();
const now = () => new Date(stamp),
  random = () => randomBytes(32).toString("base64url"),
  origin = "http://127.0.0.1:3000",
  seal = random();
const capture = new Map<string, string>();
const otp = (secret: string, offset = 0) =>
  generate({ secret, epoch: Math.floor((stamp + offset) / 1000) });
beforeAll(async () => {
  fixture = await startMongoFixture();
  for (const { model } of registeredModels(fixture.connection)) {
    await model.createCollection();
    await model.createIndexes();
  }
  service = await createSecurityService(
    fixture.connection,
    {
      sealingKey: seal,
      captureReset: (email, code) => capture.set(email, code),
    },
    now,
  );
  const router = await createIdentityRouter(
    fixture.connection,
    {
      secret: random(),
      rateSecret: random(),
      origins: [origin],
      loginPolicy: { count: 100, windowMs: 60000 },
      security: {
        sealingKey: seal,
        captureReset: (email, code) => capture.set(email, code),
      },
    },
    now,
  );
  server = createServer(
    createApp(loadBackendEnv({ APP_URL: origin }), { identity: router }),
  );
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw Error();
  base = `http://127.0.0.1:${address.port}`;
});
afterAll(async () => {
  if (server)
    await new Promise<void>((resolve) => server.close(() => resolve()));
  await fixture?.close();
});
async function actor() {
  const email = `sample-${randomBytes(8).toString("hex")}@example.invalid`,
    password = "SAMPLE-" + random(),
    credential = await authCredentialModel(fixture.connection).register(
      { email },
      password,
    ),
    staff = await staffUserModel(fixture.connection).create({
      provider: LOCAL_PROVIDER,
      providerSubject: String(credential._id),
      email,
      emailNormalized: email,
      displayName: "SAMPLE Staff",
      roles: ["admin"],
      status: "active",
      activatedAt: now(),
    }),
    sid = random();
  await createIdentityStore(fixture.connection, now).issuePrimary(
    sid,
    staff._id,
    String(credential._id),
  );
  return { email, password, staff, credential, sid };
}
async function enroll() {
  const user = await actor(),
    setup = await service.beginEnrollment(user.sid),
    code = await otp(setup.secret),
    complete = await service.verifyFactor(user.sid, code, true),
    sid = random();
  await complete(sid);
  return { ...user, setup, mfaSid: sid };
}
async function request(
  path: string,
  body?: unknown,
  cookie?: string,
  headers: Record<string, string> = {},
) {
  return fetch(base + "/api/identity" + path, {
    method: body === undefined ? "GET" : "POST",
    headers: {
      Origin: origin,
      ...(body === undefined
        ? {}
        : {
            "Content-Type": "application/json",
            "X-ARADUN-Request": "identity",
          }),
      ...(cookie ? { Cookie: cookie } : {}),
      ...headers,
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
}
const cookie = (response: Response) =>
  response.headers
    .getSetCookie()
    .map((value) => value.split(";", 1)[0])
    .join("; ");

it("performs real HTTP password, enrollment, ID rotation, MFA account access and logout", async () => {
  const user = await actor(),
    login = await request("/login", {
      email: user.email,
      password: user.password,
    }),
    primary = cookie(login);
  expect(login.status).toBe(200);
  expect((await request("/account", undefined, primary)).status).toBe(403);
  const setup = await (await request("/security/enroll", {}, primary)).json();
  expect(setup.secret).toBeTruthy();
  const verified = await request(
      "/security/verify",
      { token: await otp(setup.secret), enrollment: true },
      primary,
    ),
    mfa = cookie(verified);
  expect(verified.status).toBe(200);
  expect(mfa).not.toBe(primary);
  expect(await (await request("/session", undefined, primary)).json()).toEqual({
    status: "anonymous",
  });
  const account = await request("/account", undefined, mfa);
  expect(account.status).toBe(200);
  expect(account.headers.get("cache-control")).toBe("no-store");
  expect(JSON.stringify(await account.json())).not.toMatch(
    /roles|hash|salt|sealed/,
  );
  expect((await request("/account", { roles: ["admin"] }, mfa)).status).toBe(
    400,
  );
  expect(
    (
      await request(
        "/account",
        { displayName: "SAMPLE Updated", preferredTimezone: "Asia/Dhaka" },
        mfa,
      )
    ).status,
  ).toBe(204);
  expect((await request("/logout", {}, mfa)).status).toBe(204);
  expect((await request("/account", undefined, mfa)).status).toBe(401);
});
it("rejects wrong, expired and concurrently replayed TOTP without raw seed storage", async () => {
  const user = await actor(),
    setup = await service.beginEnrollment(user.sid);
  const factor = await identityFactorModel(fixture.connection).findOne({
    staffUserId: user.staff._id,
  });
  expect(JSON.stringify(factor)).not.toContain(setup.secret);
  await expect(
    service.verifyFactor(user.sid, "000000", true),
  ).rejects.toBeDefined();
  await expect(
    service.verifyFactor(user.sid, await otp(setup.secret, -120000), true),
  ).rejects.toBeDefined();
  const code = await otp(setup.secret),
    one = await service.verifyFactor(user.sid, code, true),
    two = await service.verifyFactor(user.sid, code, true);
  const results = await Promise.allSettled([one(random()), two(random())]);
  expect(results.filter((x) => x.status === "fulfilled")).toHaveLength(1);
  await expect(
    service.verifyFactor(user.sid, code, true),
  ).rejects.toBeDefined();
  const other = await actor();
  await service.beginEnrollment(other.sid);
  stamp += 300001;
  await expect(
    service.verifyFactor(other.sid, "123456", true),
  ).rejects.toMatchObject({ code: "forbidden" });
});
it("uses generic acknowledgement with disabled real delivery and no normal reset token issuance", async () => {
  const user = await actor(),
    disabled = await createSecurityService(
      fixture.connection,
      { sealingKey: seal },
      now,
    ),
    before = await identityChallengeModel(fixture.connection).countDocuments();
  expect(await disabled.requestReset(user.email)).toEqual(
    await disabled.requestReset("unknown@example.invalid"),
  );
  expect(
    await identityChallengeModel(fixture.connection).countDocuments(),
  ).toBe(before);
  expect(
    await (await request("/recovery/request", { email: user.email })).json(),
  ).toEqual(
    await (
      await request("/recovery/request", { email: "unknown@example.invalid" })
    ).json(),
  );
});
it("atomically changes library credentials, revokes sessions and rejects reset replay/races", async () => {
  const user = await enroll();
  await service.requestReset(user.email);
  const code = capture.get(user.email)!;
  expect(
    JSON.stringify(
      await identityChallengeModel(fixture.connection).findOne({
        staffUserId: user.staff._id,
      }),
    ),
  ).not.toContain(code);
  const password = "SAMPLE-new-" + random();
  const results = await Promise.allSettled([
    service.resetPassword(code, password),
    service.resetPassword(code, password),
  ]);
  expect(results.filter((x) => x.status === "fulfilled")).toHaveLength(1);
  await expect(
    createStaffAuthorization(fixture.connection, now)(
      user.mfaSid,
      "account.read",
    ),
  ).rejects.toBeDefined();
  expect(
    (
      await authCredentialModel(fixture.connection).authenticate()(
        user.email,
        password,
      )
    ).user,
  ).toBeTruthy();
  expect(
    (
      await authCredentialModel(fixture.connection).authenticate()(
        user.email,
        user.password,
      )
    ).user,
  ).toBe(false);
  await expect(service.resetPassword(code, password)).rejects.toBeDefined();
  expect(
    (
      await identityFactorModel(fixture.connection).findOne({
        staffUserId: user.staff._id,
      })
    )?.enabled,
  ).toBe(true);
});
it("rejects expired reset, stale mapping/version and transaction failure without consuming a usable code", async () => {
  const user = await actor();
  await service.requestReset(user.email);
  let code = capture.get(user.email)!;
  stamp += 900001;
  await expect(
    service.resetPassword(code, "SAMPLE-new-" + random()),
  ).rejects.toBeDefined();
  await service.requestReset(user.email);
  code = capture.get(user.email)!;
  const events = identitySecurityEventModel(fixture.connection),
    mock = vi
      .spyOn(events, "create")
      .mockRejectedValueOnce(new Error("SAMPLE transaction failure"));
  await expect(
    service.resetPassword(code, "SAMPLE-new-" + random()),
  ).rejects.toThrow();
  mock.mockRestore();
  expect(
    (
      await authCredentialModel(fixture.connection).authenticate()(
        user.email,
        user.password,
      )
    ).user,
  ).toBeTruthy();
  expect(
    (
      await identityChallengeModel(fixture.connection).findOne({
        tokenHash: sessionHash(code),
      })
    )?.consumedAt,
  ).toBeUndefined();
  await staffUserModel(fixture.connection).updateOne(
    { _id: user.staff._id },
    { $inc: { accessVersion: 1 } },
  );
  await expect(
    service.resetPassword(code, "SAMPLE-new-" + random()),
  ).rejects.toBeDefined();
});
it("recovery codes allow only restricted factor replacement, never business access or enrollment bypass", async () => {
  const user = await enroll(),
    pack = await service.issuePack(user.mfaSid);
  expect(pack.codes).toHaveLength(10);
  expect(
    JSON.stringify(
      await identityRecoveryPackModel(fixture.connection).findOne({
        staffUserId: user.staff._id,
      }),
    ),
  ).not.toContain(pack.codes[0]);
  await expect(
    service.startReplacement(user.email, "wrong", pack.codes[0]!),
  ).rejects.toBeDefined();
  const interrupted = await service.startReplacement(
    user.email,
    user.password,
    pack.codes[0]!,
  );
  const recovery = await service.startReplacement(
    user.email,
    user.password,
    pack.codes[1]!,
  );
  await expect(
    service.finishReplacement(interrupted.grant, await otp(interrupted.secret)),
  ).rejects.toBeDefined();

  await expect(service.account(user.mfaSid)).rejects.toBeDefined();
  await expect(
    service.startReplacement(user.email, user.password, pack.codes[0]!),
  ).rejects.toBeDefined();
  const primary = random();
  await createIdentityStore(fixture.connection, now).issuePrimary(
    primary,
    user.staff._id,
    String(user.credential._id),
  );
  await expect(service.beginEnrollment(primary)).rejects.toMatchObject({
    code: "forbidden",
  });
  await expect(service.account(primary)).rejects.toMatchObject({
    code: "forbidden",
  });
  await expect(
    service.finishReplacement(recovery.grant, "000000"),
  ).rejects.toBeDefined();
  const token = await otp(recovery.secret);
  await service.finishReplacement(recovery.grant, token);
  await expect(
    service.finishReplacement(recovery.grant, token),
  ).rejects.toBeDefined();
  expect(
    (
      await identityFactorModel(fixture.connection).findOne({
        staffUserId: user.staff._id,
      })
    )?.enabled,
  ).toBe(true);
  const newPrimary = random();
  await createIdentityStore(fixture.connection, now).issuePrimary(
    newPrimary,
    user.staff._id,
    String(user.credential._id),
  );
  await expect(
    service.verifyFactor(newPrimary, await otp(recovery.secret), false),
  ).rejects.toBeDefined();
  stamp += 30000;
  const complete = await service.verifyFactor(
      newPrimary,
      await otp(recovery.secret),
      false,
    ),
    mfa = random();
  await complete(mfa);
  await expect(service.account(mfa)).resolves.toBeDefined();
});
it("enforces fresh MFA on recovery packs and password changes and revokes every session on change", async () => {
  const user = await enroll();
  await expect(service.issuePack(user.sid)).rejects.toBeDefined();
  await expect(
    service.changePassword(user.mfaSid, "wrong", "SAMPLE-new-" + random()),
  ).rejects.toBeDefined();
  stamp += 300001;
  await expect(service.issuePack(user.mfaSid)).rejects.toMatchObject({
    code: "forbidden",
  });
  const fresh = await enroll(),
    password = "SAMPLE-new-" + random();
  await service.changePassword(fresh.mfaSid, fresh.password, password);
  await expect(service.account(fresh.mfaSid)).rejects.toBeDefined();
  expect(
    (
      await authCredentialModel(fixture.connection).authenticate()(
        fresh.email,
        password,
      )
    ).user,
  ).toBeTruthy();
});
it("keeps body/origin/preflight protection and explicit private-key activation", async () => {
  expect(
    (
      await request(
        "/recovery/request",
        { email: "sample@example.invalid" },
        undefined,
        { Origin: "https://wrong.invalid" },
      )
    ).status,
  ).toBe(403);
  expect(
    (
      await request("/recovery/reset", {
        code: random(),
        newPassword: "short",
        roles: ["admin"],
      })
    ).status,
  ).toBe(400);
  const pre = await fetch(base + "/api/identity/security/verify", {
    method: "OPTIONS",
    headers: {
      Origin: origin,
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "content-type,x-aradun-request",
    },
  });
  expect(pre.status).toBe(204);
  const env = {
    AUTH_PROVIDER: "aradun-local",
    AUTH_SESSION_SECRET: random(),
    RATE_LIMIT_HASH_SECRET: random(),
    AUTH_LOGIN_LIMIT: "10",
    AUTH_LOGIN_WINDOW_SECONDS: "60",
    AUTH_SECURITY_ENABLED: "true",
  };
  expect(() => loadBackendEnv(env)).toThrow("AUTH_FACTOR_SEALING_KEY");
  expect(() =>
    loadBackendEnv({
      ...env,
      AUTH_FACTOR_SEALING_KEY: env.AUTH_SESSION_SECRET,
    }),
  ).toThrow();
  expect(
    loadBackendEnv({ ...env, AUTH_FACTOR_SEALING_KEY: random() }).identity
      ?.security,
  ).toBeDefined();
});

it("does not regenerate an already revoked session during verified rotation", async () => {
  const user = await actor(),
    transport = createIdentityStore(fixture.connection, now);
  const value = await transport.read(user.sid);
  const generateSession = vi.fn();
  const request = {
    sessionID: user.sid,
    session: {
      identity: {
        tokenHash: sessionHash(user.sid),
        revision: value!.row.revision,
      },
    },
    sessionStore: { generate: generateSession },
  } as unknown as Request;
  await new Promise<void>((resolve, reject) =>
    transport.store.destroy(user.sid, (error) =>
      error ? reject(error) : resolve(),
    ),
  );
  const before = await staffSessionModel(fixture.connection).countDocuments({
    staffUserId: user.staff._id,
  });
  const error = await new Promise<unknown>((resolve) =>
    transport.store.regenerate(request, resolve),
  );
  expect(error).toMatchObject({ code: "unauthenticated" });
  expect(generateSession).not.toHaveBeenCalled();
  expect(
    await staffSessionModel(fixture.connection).countDocuments({
      staffUserId: user.staff._id,
    }),
  ).toBe(before);
});
