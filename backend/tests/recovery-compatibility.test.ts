import { beforeAll, afterAll, it, expect } from "vitest";
import { Types, createConnection } from "mongoose";
import { randomBytes } from "node:crypto";
import { once } from "node:events";
import { createServer } from "node:http";
import { recoveryProof } from "./support/recovery-proof.js";
import { startMongoFixture } from "./support/mongo-fixture.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>,
  proof: Awaited<ReturnType<typeof recoveryProof>>,
  server: ReturnType<typeof createServer>,
  base: string;
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
  return fetch(base + path, {
    method: body ? "POST" : "GET",
    headers: {
      Origin: "http://127.0.0.1:3997",
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...(cookie ? { Cookie: cookie } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
}
async function account(withMfa = false) {
  const username = email(),
    pass = password(),
    doc = await proof.provision(username, pass),
    id = new Types.ObjectId(String(doc._id));
  const login = await request("/login", { email: username, password: pass });
  expect(login.status).toBe(204);
  let cookie = cookies(login);
  let factor:
    Awaited<ReturnType<typeof proof.identity.pendingFactor>> | undefined;
  if (withMfa) {
    factor = await proof.identity.pendingFactor(id);
    expect(await proof.identity.factor(id, await factor.code(), true)).toBe(
      true,
    );
    proof.identity.advance(30000);
    const response = await request(
      "/mfa",
      { token: await factor.code() },
      cookie,
    );
    expect(response.status).toBe(204);
    cookie = cookies(response);
  }
  return { email: username, password: pass, id, cookie, factor };
}
beforeAll(async () => {
  fixture = await startMongoFixture();
  proof = await recoveryProof(fixture.connection);
  server = createServer(proof.identity.app);
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
it("refuses an unowned target and keeps known/unknown recovery acknowledgement generic", async () => {
  const connection = createConnection();
  await expect(recoveryProof(connection)).rejects.toThrow();
  await connection.close();
  const user = await account();
  const known = await request("/reset/request", { email: user.email }),
    unknown = await request("/reset/request", { email: email() });
  expect(known.status).toBe(200);
  expect(unknown.status).toBe(200);
  expect((await known.text()) === (await unknown.text())).toBe(true);
  const code = proof.capture(user.email);
  expect(Boolean(code)).toBe(true);
  const record = await proof.challenges.findOne({ subjectId: user.id });
  expect(JSON.stringify(record).includes(code!)).toBe(false);
});
it("binds reset purpose/subject and logical expiry, without relying on TTL", async () => {
  const user = await account();
  await proof.requestReset(user.email);
  const code = proof.capture(user.email)!;
  expect(await proof.reset(user.id, "factor-replace", code, password())).toBe(
    false,
  );
  expect(
    await proof.reset(new Types.ObjectId(), "password-reset", code, password()),
  ).toBe(false);
  proof.identity.advance(900000);
  expect(await proof.reset(user.id, "password-reset", code, password())).toBe(
    false,
  );
  expect(
    await proof.challenges.countDocuments({
      subjectId: user.id,
      consumedAt: { $exists: false },
    }),
  ).toBe(1);
});
it("resets atomically, revokes sessions, retains MFA and does not automatically log in", async () => {
  const user = await account(true);
  expect((await request("/protected", undefined, user.cookie)).status).toBe(
    204,
  );
  await proof.requestReset(user.email);
  const code = proof.capture(user.email)!,
    next = password();
  const response = await request("/reset/complete", {
    email: user.email,
    code,
    newPassword: next,
  });
  expect(response.status).toBe(204);
  expect(response.headers.get("set-cookie") == null).toBe(true);
  expect((await request("/protected", undefined, user.cookie)).status).toBe(
    401,
  );
  expect(
    (await proof.access.findOne({ subjectId: user.id }))?.accessVersion,
  ).toBe(1);
  expect(
    (await proof.identity.factors.findOne({ subjectId: user.id }))?.enabled,
  ).toBe(true);
  expect(
    (await request("/login", { email: user.email, password: user.password }))
      .status,
  ).toBe(401);
  const primary = await request("/login", {
    email: user.email,
    password: next,
  });
  expect(primary.status).toBe(204);
  expect(
    (await request("/protected", undefined, cookies(primary))).status,
  ).toBe(401);
});
it("rolls back challenge consumption, password/version and revocation on failure", async () => {
  const user = await account();
  await proof.requestReset(user.email);
  const code = proof.capture(user.email)!,
    next = password();
  await expect(
    proof.reset(user.id, "password-reset", code, next, true),
  ).rejects.toThrow("SAMPLE injected rollback");
  expect(
    (await proof.access.findOne({ subjectId: user.id }))?.accessVersion,
  ).toBe(0);
  expect(await proof.identity.transport.read(sid(user.cookie))).not.toBeNull();
  expect(
    await proof.challenges.countDocuments({
      subjectId: user.id,
      consumedAt: { $exists: false },
    }),
  ).toBe(1);
  expect(await proof.audit.countDocuments({ subjectId: user.id })).toBe(0);
  expect(
    (await request("/login", { email: user.email, password: user.password }))
      .status,
  ).toBe(204);
  expect(await proof.reset(user.id, "password-reset", code, next)).toBe(true);
});
it("one concurrent reset wins; lost response and replay cannot create a second reset", async () => {
  const user = await account();
  await proof.requestReset(user.email);
  const code = proof.capture(user.email)!,
    next = password();
  const results = await Promise.all([
    proof.reset(user.id, "password-reset", code, next),
    proof.reset(user.id, "password-reset", code, next),
  ]);
  expect(results.filter(Boolean)).toHaveLength(1);
  expect(await proof.reset(user.id, "password-reset", code, password())).toBe(
    false,
  );
  expect(
    (await proof.access.findOne({ subjectId: user.id }))?.accessVersion,
  ).toBe(1);
  expect(
    await proof.audit.countDocuments({
      subjectId: user.id,
      operation: "password-reset",
    }),
  ).toBe(1);
  expect(
    (await request("/login", { email: user.email, password: next })).status,
  ).toBe(204);
});
it("issues hashed-only packs only after fresh MFA and rotation invalidates old material", async () => {
  const primary = await account();
  await expect(
    proof.issuePack(primary.id, sid(primary.cookie)),
  ).rejects.toThrow();
  const user = await account(true),
    pack = await proof.issuePack(user.id, sid(user.cookie));
  expect(pack.codes).toHaveLength(10);
  const row = await proof.packs.findOne({ subjectId: user.id });
  expect(pack.codes.every((code) => !JSON.stringify(row).includes(code))).toBe(
    true,
  );
  await proof.issuePack(user.id, sid(user.cookie));
  expect(
    await proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[0]!,
    ),
  ).toBeNull();
});
it("recovery-code race grants only one restricted replacement, never a business session", async () => {
  const user = await account(true),
    pack = await proof.issuePack(user.id, sid(user.cookie));
  const results = await Promise.all([
    proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[0]!,
    ),
    proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[0]!,
    ),
  ]);
  expect(results.filter(Boolean)).toHaveLength(1);
  expect(
    await proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[0]!,
    ),
  ).toBeNull();
  expect((await request("/protected", undefined, user.cookie)).status).toBe(
    401,
  );
  expect(
    (await proof.identity.factors.findOne({ subjectId: user.id }))?.enabled,
  ).toBe(false);
  const grant = results.find(Boolean)!;
  const challenge = await proof.challenges.findOne({
    subjectId: user.id,
    purpose: "factor-replace",
    consumedAt: { $exists: false },
  });
  expect(JSON.stringify(challenge).includes(grant.grant)).toBe(false);
  expect(
    await proof.identity.transport.model.countDocuments({
      staffUserId: user.id,
      revokedAt: { $exists: false },
    }),
  ).toBe(0);
});
it("requires verified replacement factor; grant/code replay cannot bypass MFA", async () => {
  const user = await account(true),
    pack = await proof.issuePack(user.id, sid(user.cookie)),
    grant = await proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[0]!,
    );
  expect(Boolean(grant)).toBe(true);
  expect(
    await proof.prepareReplacement(new Types.ObjectId(), grant!.grant),
  ).toBeNull();
  const pending = await proof.prepareReplacement(user.id, grant!.grant);
  expect(Boolean(pending)).toBe(true);
  expect(await proof.finishReplacement(user.id, grant!.grant, "invalid")).toBe(
    false,
  );
  expect(
    await proof.finishReplacement(user.id, grant!.grant, await pending!.code()),
  ).toBe(true);
  expect(
    await proof.finishReplacement(user.id, grant!.grant, await pending!.code()),
  ).toBe(false);
  expect(
    await proof.identity.transport.model.countDocuments({
      staffUserId: user.id,
      revokedAt: { $exists: false },
    }),
  ).toBe(0);
  expect(
    await proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[1]!,
    ),
  ).toBeNull();
  proof.identity.advance(30000);
  const primary = await request("/login", {
    email: user.email,
    password: user.password,
  });
  expect(primary.status).toBe(204);
  expect(
    (await request("/protected", undefined, cookies(primary))).status,
  ).toBe(401);
  const mfa = await request(
    "/mfa",
    { token: await pending!.code() },
    cookies(primary),
  );
  expect(mfa.status).toBe(204);
  expect((await request("/protected", undefined, cookies(mfa))).status).toBe(
    204,
  );
});
it("expired pack and replacement grant fail closed while retained records remain", async () => {
  const user = await account(true),
    pack = await proof.issuePack(user.id, sid(user.cookie)),
    grant = await proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[0]!,
    );
  proof.identity.advance(300000);
  expect(await proof.prepareReplacement(user.id, grant!.grant)).toBeNull();
  proof.identity.advance(90 * 86400000);
  expect(
    await proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[1]!,
    ),
  ).toBeNull();
  expect(await proof.packs.countDocuments({ subjectId: user.id })).toBe(1);
});
it("wrong password or wrong recovery subject cannot consume pack material", async () => {
  const user = await account(true),
    pack = await proof.issuePack(user.id, sid(user.cookie));
  expect(
    await proof.recoverFactor(
      user.email,
      password(),
      pack.packVersion,
      pack.codes[0]!,
    ),
  ).toBeNull();
  const other = await account();
  expect(
    await proof.recoverFactor(
      other.email,
      other.password,
      pack.packVersion,
      pack.codes[0]!,
    ),
  ).toBeNull();
  const row = await proof.packs.findOne({ subjectId: user.id });
  expect(row?.codes.every((entry) => !entry.consumedAt)).toBe(true);
  expect((await request("/protected", undefined, user.cookie)).status).toBe(
    204,
  );
});
it("replacement proof has bounded attempts and reset endpoints reject URL-code GETs", async () => {
  const user = await account(true),
    pack = await proof.issuePack(user.id, sid(user.cookie)),
    grant = await proof.recoverFactor(
      user.email,
      user.password,
      pack.packVersion,
      pack.codes[0]!,
    ),
    pending = await proof.prepareReplacement(user.id, grant!.grant);
  const correct = await pending!.code(),
    wrong = (correct[0] === "0" ? "1" : "0") + correct.slice(1);
  for (let i = 0; i < 5; i++)
    expect(await proof.finishReplacement(user.id, grant!.grant, wrong)).toBe(
      false,
    );
  expect(await proof.finishReplacement(user.id, grant!.grant, correct)).toBe(
    false,
  );
  expect((await request("/reset/complete?code=SAMPLE")).status).toBe(404);
  expect(
    await proof.identity.transport.model.countDocuments({
      staffUserId: user.id,
      revokedAt: { $exists: false },
    }),
  ).toBe(0);
});
