import { once } from "node:events";
import { beforeAll, afterAll, it, expect } from "vitest";
import { randomBytes } from "node:crypto";
import { createConnection, Types } from "mongoose";
import { symmetricDecrypt } from "better-auth/crypto";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { authProof, responseCookies } from "./support/auth-proof.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
let proof: Awaited<ReturnType<typeof authProof>>,
  provision: Awaited<ReturnType<typeof authProof>>;
const password = () => `SAMPLE-${randomBytes(24).toString("base64url")}`;
async function account() {
  const email = `sample-${randomBytes(6).toString("hex")}@example.invalid`,
    pass = password();
  const response = await provision.request("/sign-up/email", {
    email,
    password: pass,
    name: "SAMPLE staff",
  });
  expect(response.status).toBe(200);
  return { email, password: pass };
}
async function login(user: { email: string; password: string }) {
  const response = await proof.request("/sign-in/email", user);
  expect(response.status).toBe(200);
  return {
    response,
    cookie: responseCookies(response),
    body: await response.json(),
  };
}
beforeAll(async () => {
  fixture = await startMongoFixture();
  proof = await authProof(fixture.connection);
  provision = await authProof(fixture.connection, {
    signup: true,
    secret: proof.secret,
  });
}, 30000);
afterAll(async () => {
  await fixture?.close();
});
it("refuses an unowned database before configuring the candidate", async () => {
  const connection = createConnection();
  await expect(authProof(connection)).rejects.toThrow();
  await connection.close();
});
it("denies public signup, verifies credentials and invalidates logout cookies", async () => {
  const response = await proof.request("/sign-up/email", {
    email: "nobody@example.invalid",
    password: password(),
    name: "SAMPLE",
  });
  expect(response.ok).toBe(false);
  const user = await account(),
    signed = await login(user);
  expect(Boolean(signed.body.user?.id)).toBe(true);
  expect(
    (await proof.request("/sign-in/email", { ...user, password: password() }))
      .ok,
  ).toBe(false);
  expect(
    Boolean(
      (
        await (
          await proof.request("/get-session", undefined, signed.cookie)
        ).json()
      )?.user,
    ),
  ).toBe(true);
  expect((await proof.request("/sign-out", {}, signed.cookie)).ok).toBe(true);
  expect(
    (await (
      await proof.request("/get-session", undefined, signed.cookie)
    ).json()) === null,
  ).toBe(true);
});
it("characterizes token-at-rest mismatch and missing declared session indexes without exposing secrets", async () => {
  const signed = await login(await account()),
    db = fixture.connection.db!;
  const row = await db
    .collection("session")
    .findOne({ token: signed.body.token });
  expect(Boolean(row && row.token === signed.body.token)).toBe(true); // Characterization: not a source-compatibility pass.
  expect(Boolean(row && "tokenHash" in row)).toBe(false);
  const credentials = await db
    .collection("account")
    .find({ providerId: "credential" })
    .toArray();
  expect(
    credentials.length > 0 &&
      credentials.every(
        (row) =>
          typeof row.password === "string" &&
          !row.password.startsWith("SAMPLE-"),
      ),
  ).toBe(true);
  const indexes = await db.collection("session").listIndexes().toArray();
  expect(indexes.length === 1).toBe(true);
});
it("enforces configured absolute expiry but does not supply deliberate-idle policy", async () => {
  const signed = await login(await account()),
    sessions = fixture.connection.db!.collection("session");
  const row = await sessions.findOne({ token: signed.body.token });
  expect(
    Boolean(
      row &&
      Math.abs(row.expiresAt.getTime() - row.createdAt.getTime() - 28800000) <
        2000,
    ),
  ).toBe(true);
  await sessions.updateOne(
    { token: signed.body.token },
    {
      $set: {
        createdAt: new Date(Date.now() - 31 * 60000),
        updatedAt: new Date(Date.now() - 31 * 60000),
      },
    },
  );
  expect(
    Boolean(
      (
        await (
          await proof.request("/get-session", undefined, signed.cookie)
        ).json()
      )?.session,
    ),
  ).toBe(true); // Missing idle enforcement, not accepted behavior.
  await sessions.updateOne(
    { token: signed.body.token },
    { $set: { expiresAt: new Date(Date.now() - 1000) } },
  );
  expect(
    (await (
      await proof.request("/get-session", undefined, signed.cookie)
    ).json()) === null,
  ).toBe(true);
});
it("password-reset token is one-use and resets revoke existing sessions", async () => {
  const user = await account(),
    signed = await login(user);
  expect(
    (
      await proof.request("/request-password-reset", {
        email: user.email,
        redirectTo: "http://127.0.0.1:3999/reset",
      })
    ).ok,
  ).toBe(true);
  const token = proof.getResetToken();
  expect(Boolean(token)).toBe(true);
  const newPassword = password();
  expect(
    (await proof.request("/reset-password", { token, newPassword })).ok,
  ).toBe(true);
  expect(
    (await proof.request("/reset-password", { token, newPassword: password() }))
      .ok,
  ).toBe(false);
  expect(
    (await (
      await proof.request("/get-session", undefined, signed.cookie)
    ).json()) === null,
  ).toBe(true);
  const result = await proof.request("/sign-in/email", {
    email: user.email,
    password: newPassword,
  });
  expect(result.ok).toBe(true);
});
it("characterizes MFA enrollment, challenge and backup replay using maintained crypto only", async () => {
  const user = await account(),
    signed = await login(user);
  const enabled = await proof.request(
    "/two-factor/enable",
    { password: user.password },
    signed.cookie,
  );
  expect(enabled.ok).toBe(true);
  const setup = await enabled.json();
  expect(Array.isArray(setup.backupCodes) && setup.backupCodes.length > 0).toBe(
    true,
  );
  const seed = await fixture.connection.db!.collection("twoFactor").findOne({
    $or: [
      { userId: signed.body.user.id },
      { userId: new Types.ObjectId(signed.body.user.id) },
    ],
  });
  expect(Boolean(seed)).toBe(true);
  const decrypted = await symmetricDecrypt({
    key: proof.secret,
    data: seed!.secret,
  });
  expect(Boolean(decrypted && decrypted !== seed!.secret)).toBe(true);
  const generated = await proof.auth.api.generateTOTP({
    body: { secret: decrypted },
  });
  const verified = await proof.request(
    "/two-factor/verify-totp",
    { code: generated.code },
    responseCookies(enabled) || signed.cookie,
  );
  expect(verified.ok).toBe(true);
  const challenge = await proof.request("/sign-in/email", user);
  const body = await challenge.json();
  expect(body.twoFactorRedirect === true).toBe(true);
  const cookie = responseCookies(challenge);
  expect(
    (await (await proof.request("/get-session", undefined, cookie)).json()) ===
      null,
  ).toBe(true);
  expect(
    (
      await proof.request(
        "/two-factor/verify-totp",
        { code: "invalid" },
        cookie,
      )
    ).ok,
  ).toBe(false);
  expect(
    (
      await proof.request(
        "/two-factor/verify-backup-code",
        { code: setup.backupCodes[0] },
        cookie,
      )
    ).ok,
  ).toBe(true);
  const another = await proof.request("/sign-in/email", user);
  expect(
    (
      await proof.request(
        "/two-factor/verify-backup-code",
        { code: setup.backupCodes[0] },
        responseCookies(another),
      )
    ).ok,
  ).toBe(false);
});
it("characterizes rememberMe=false lifetime overriding the configured eight-hour maximum", async () => {
  const user = await account(),
    response = await proof.request("/sign-in/email", {
      ...user,
      rememberMe: false,
    });
  expect(response.ok).toBe(true);
  const body = await response.json();
  const session = await fixture.connection
    .db!.collection("session")
    .findOne({ token: body.token });
  expect(
    Boolean(
      session &&
      Math.abs(
        session.expiresAt.getTime() - session.createdAt.getTime() - 86400000,
      ) < 2000,
    ),
  ).toBe(true); // Candidate mismatch, never an approved application policy.
});
it("mounts the candidate handler in isolated Express 5 with signup and origin denial", async () => {
  const { default: express } = await import("express"),
    { toNodeHandler } = await import("better-auth/node"),
    { createServer } = await import("node:http");
  const app = express();
  app.all("/api/auth/*splat", toNodeHandler(proof.auth));
  const server = createServer(app);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("No test port");
  const base = `http://127.0.0.1:${address.port}/api/auth`;
  try {
    const response = await fetch(base + "/get-session");
    expect(response.ok).toBe(true);
    expect((await response.json()) === null).toBe(true);
    const user = await account();
    const denied = await fetch(base + "/sign-in/email", {
      method: "POST",
      headers: {
        Origin: "http://example.invalid",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    expect(denied.ok).toBe(false);
    const deniedSignup = await fetch(base + "/sign-up/email", {
      method: "POST",
      headers: {
        Origin: "http://127.0.0.1:3999",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "sample-forbidden@example.invalid",
        name: "SAMPLE",
        password: password(),
      }),
    });
    expect(deniedSignup.ok).toBe(false);
  } finally {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  }
});
