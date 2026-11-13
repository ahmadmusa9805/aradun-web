import { beforeAll, afterAll, it, expect } from "vitest";
import { randomBytes } from "node:crypto";
import { once } from "node:events";
import { createServer } from "node:http";
import { createConnection, Types } from "mongoose";
import * as Iron from "@hapi/iron";
import { credentialMfaProof } from "./support/credential-mfa-proof.js";
import { startMongoFixture } from "./support/mongo-fixture.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>,
  proof: Awaited<ReturnType<typeof credentialMfaProof>>,
  url: string,
  server: ReturnType<typeof createServer>;
const password = () => `SAMPLE-${randomBytes(24).toString("base64url")}`;
const email = () => `sample-${randomBytes(6).toString("hex")}@example.invalid`;
const cookies = (response: Response) =>
  response.headers
    .getSetCookie()
    .map((value) => value.split(";", 1)[0]!)
    .join("; ");
const sid = (value: string) =>
  decodeURIComponent(value.split("=", 2)[1]!).slice(2).split(".")[0]!;
async function request(
  path: string,
  body?: Record<string, unknown>,
  cookie?: string,
) {
  return fetch(url + path, {
    method: body ? "POST" : "GET",
    headers: {
      Origin: "http://127.0.0.1:3997",
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...(cookie ? { Cookie: cookie } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
}
async function identity() {
  const name = email(),
    pass = password(),
    document = await proof.provision(name, pass);
  return {
    email: name,
    password: pass,
    id: new Types.ObjectId(String(document._id)),
    document,
  };
}
async function login(user: { email: string; password: string }) {
  const response = await request("/login", {
    email: user.email,
    password: user.password,
  });
  expect(response.status).toBe(204);
  return cookies(response);
}
beforeAll(async () => {
  fixture = await startMongoFixture();
  proof = await credentialMfaProof(fixture.connection);
  server = createServer(proof.app);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("No port");
  url = `http://127.0.0.1:${address.port}`;
}, 30000);
afterAll(async () => {
  await new Promise<void>((resolve, reject) =>
    server?.close((error) => (error ? reject(error) : resolve())),
  );
  await fixture?.close();
});
it("refuses unowned database and synthetic-only provisioning violations", async () => {
  const connection = createConnection();
  await expect(credentialMfaProof(connection)).rejects.toThrow();
  await connection.close();
  await expect(
    proof.provision("real@example.com", password()),
  ).rejects.toThrow();
});
it("uses actual plugin credential fields/indexes and generic password failures at reviewed work factor", async () => {
  const user = await identity(),
    record = await proof.credentials.collection.findOne({ _id: user.id });
  expect(
    Boolean(
      record &&
      typeof record.hash === "string" &&
      typeof record.salt === "string" &&
      record.hash !== user.password,
    ),
  ).toBe(true);
  expect(typeof record?.hash === "string" && record.hash.length === 64).toBe(
    true,
  );
  const indexes = await proof.credentials.listIndexes();
  expect(
    indexes.some((index) => index.unique === true && Boolean(index.key.email)),
  ).toBe(true);
  const before = performance.now();
  const wrong = await request("/login", {
      email: user.email,
      password: password(),
    }),
    missing = await request("/login", { email: email(), password: password() });
  expect(wrong.status).toBe(401);
  expect(missing.status).toBe(401);
  expect((await wrong.text()) === (await missing.text())).toBe(true);
  const elapsedMs = Math.round(performance.now() - before);
  console.info("SAMPLE credential failure probe elapsedMs", elapsedMs);
  expect(elapsedMs < 10000).toBe(true);
  expect(
    (await request("/protected", undefined, await login(user))).status,
  ).toBe(401);
});
it("verifies enrollment, binds factor to identity, rotates session and retains original absolute expiry", async () => {
  const user = await identity(),
    pending = await proof.pendingFactor(user.id),
    primary = await login(user),
    old = await proof.transport.read(sid(primary));
  expect(
    (await request("/mfa", { token: await pending.code() }, primary)).status,
  ).toBe(401);
  expect(
    (await request("/enroll", { token: await pending.code() }, primary)).status,
  ).toBe(204);
  proof.advance(30000);
  const result = await request(
    "/mfa",
    { token: await pending.code() },
    primary,
  );
  expect(result.status).toBe(204);
  const mfa = cookies(result);
  expect(mfa !== primary).toBe(true);
  expect((await request("/protected", undefined, primary)).status).toBe(401);
  expect((await request("/protected", undefined, mfa)).status).toBe(204);
  const state = await proof.transport.read(sid(mfa));
  expect(state?.staffUserId.toString() === user.id.toString()).toBe(true);
  expect(state?.expiresAt.getTime() === old?.expiresAt.getTime()).toBe(true);
});
it("refuses wrong, expired and replayed TOTP and accepts concurrent code at most once", async () => {
  const user = await identity(),
    pending = await proof.pendingFactor(user.id);
  expect(await proof.factor(user.id, "invalid", true)).toBe(false);
  expect(await proof.factor(user.id, await pending.expiredCode(), true)).toBe(
    false,
  );
  expect(await proof.factor(user.id, await pending.code(), true)).toBe(true);
  proof.advance(30000);
  const token = await pending.code(),
    results = await Promise.all([
      proof.factor(user.id, token),
      proof.factor(user.id, token),
    ]);
  expect(results.filter(Boolean)).toHaveLength(1);
  expect(await proof.factor(user.id, token)).toBe(false);
});
it("seals stored seeds and denies tampered or wrong-key envelopes", async () => {
  const user = await identity(),
    pending = await proof.pendingFactor(user.id),
    row = await proof.factors.findOne({ subjectId: user.id });
  expect(Boolean(row && !JSON.stringify(row).includes(pending.secret))).toBe(
    true,
  );
  const opened = (await Iron.unseal(
    row!.sealed,
    proof.sealingKey,
    Iron.defaults,
  )) as { secret: string };
  expect(opened.secret === pending.secret).toBe(true);
  let denied = false;
  try {
    await Iron.unseal(
      row!.sealed,
      randomBytes(48).toString("base64url"),
      Iron.defaults,
    );
  } catch {
    denied = true;
  }
  expect(denied).toBe(true);
  const changed =
    row!.sealed.slice(0, -1) + (row!.sealed.endsWith("a") ? "b" : "a");
  await proof.factors.updateOne(
    { _id: row!._id },
    { $set: { sealed: changed } },
  );
  expect(await proof.factor(user.id, await pending.code(), true)).toBe(false);
});
it("rejects forged assurance/subject fields and factor from another identity", async () => {
  const a = await identity(),
    b = await identity(),
    fa = await proof.pendingFactor(a.id),
    fb = await proof.pendingFactor(b.id);
  await proof.factor(a.id, await fa.code(), true);
  await proof.factor(b.id, await fb.code(), true);
  proof.advance(30000);
  const primary = await login(a);
  expect(
    (
      await request(
        "/mfa",
        {
          token: await fa.code(),
          assurance: "mfa",
          subjectId: b.id.toString(),
        },
        primary,
      )
    ).status,
  ).toBe(401);
  const wrong = await fb.code(),
    own = await fa.code();
  if (wrong === own) throw new Error("SAMPLE test code collision; rerun");
  expect((await request("/mfa", { token: wrong }, primary)).status).toBe(401);
  expect((await request("/protected", undefined, primary)).status).toBe(401);
});
it("supports library password change without claiming forgotten-password or factor recovery", async () => {
  const user = await identity(),
    next = password();
  await user.document.changePassword(user.password, next);
  expect(
    (await request("/login", { email: user.email, password: user.password }))
      .status,
  ).toBe(401);
  expect(
    (await request("/login", { email: user.email, password: next })).status,
  ).toBe(204);
});
it("bounds factor attempts and refuses a stale primary-auth challenge", async () => {
  const user = await identity(),
    pending = await proof.pendingFactor(user.id),
    primary = await login(user);
  const valid = await pending.code(),
    wrong = (valid[0] === "0" ? "1" : "0") + valid.slice(1);
  for (let i = 0; i < 5; i++)
    expect(await proof.factor(user.id, wrong, true)).toBe(false);
  expect(await proof.factor(user.id, valid, true)).toBe(false);
  proof.advance(300000);
  expect(
    (await request("/enroll", { token: await pending.code() }, primary)).status,
  ).toBe(401);
  expect(
    (await request("/signup", { email: email(), password: password() })).status,
  ).toBe(404);
});
