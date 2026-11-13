import { createServer } from "node:http";
import { once } from "node:events";
import { randomBytes } from "node:crypto";
import { generate } from "otplib";
import { startMongoFixture } from "./mongo-fixture.js";
import { registeredModels } from "../../src/server/db/model-registry.server.js";
import { createIdentityRouter } from "../../src/modules/identity/identity.routes.js";
import { createStaffLifecycle } from "../../src/modules/identity/server/lifecycle.service.server.js";
import { createApp } from "../../src/app.js";
import { loadBackendEnv } from "../../src/config/env.server.js";
import { authCredentialModel } from "../../src/modules/identity/models/auth-credential.model.js";
import {
  staffUserModel,
  LOCAL_PROVIDER,
} from "../../src/modules/identity/models/staff-user.model.js";
import { staffSessionModel } from "../../src/modules/identity/models/staff-session.model.js";
import { sessionHash } from "../../src/modules/identity/server/session-store.server.js";
export const deniedSessionKinds = [
  "anonymous",
  "primary",
  "idle-expired",
  "absolute-expired",
  "revoked",
  "suspended",
  "deactivated",
  "access-version",
  "provider-mismatch",
  "forged-cookie",
] as const;
export type DeniedSessionKind = (typeof deniedSessionKinds)[number];
const random = () => randomBytes(32).toString("base64url");
const cookieOf = (response: Response) =>
  response.headers
    .getSetCookie()
    .map((value) => value.split(";", 1)[0])
    .join("; ");
/** Real credential/TOTP/opaque-cookie fixture for current and later P1 feature tests.
 * Never accepts owner URIs or synthetic 'assurance=true' grants. */
export async function startAccessFixture(
  options: { localPasswordOnly?: boolean } = {},
) {
  const mongo = await startMongoFixture(),
    stamp = Date.now(),
    clock = () => new Date(stamp);
  let server: ReturnType<typeof createServer> | undefined;
  try {
    for (const { model } of registeredModels(mongo.connection)) {
      await model.createCollection();
      await model.createIndexes();
    }
    const origin = "http://127.0.0.1:3000";
    const router = await createIdentityRouter(
      mongo.connection,
      {
        localPasswordOnly: options.localPasswordOnly ?? false,
        secret: random(),
        rateSecret: random(),
        origins: [origin],
        loginPolicy: { count: 100, windowMs: 60000 },
        security: { sealingKey: random() },
      },
      clock,
    );
    const lifecycle = await createStaffLifecycle(
      mongo.connection,
      { environment: "development" },
      clock,
    );
    server = createServer(
      createApp(loadBackendEnv({ APP_URL: origin }), { identity: router }),
    );
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
    const address = server.address();
    if (!address || typeof address === "string")
      throw Error("Owned API unavailable");
    const base = `http://127.0.0.1:${address.port}/api/identity`;
    async function request(
      path: string,
      options: {
        cookie?: string;
        body?: unknown;
        method?: string;
        headers?: Record<string, string>;
      } = {},
    ) {
      return fetch(base + path, {
        method: options.method ?? (options.body === undefined ? "GET" : "POST"),
        headers: {
          Origin: origin,
          ...(options.body === undefined
            ? {}
            : {
                "Content-Type": "application/json",
                "X-ARADUN-Request": "identity",
              }),
          ...(options.cookie ? { Cookie: options.cookie } : {}),
          ...options.headers,
        },
        ...(options.body === undefined
          ? {}
          : { body: JSON.stringify(options.body) }),
      });
    }
    async function identity(
      role: "admin" | "sales" | "editor" = "admin",
      primary = false,
    ) {
      const email = `sample-${randomBytes(8).toString("hex")}@example.invalid`,
        password = "SAMPLE-" + random(),
        credential = await authCredentialModel(mongo.connection).register(
          { email },
          password,
        );
      const staff = await staffUserModel(mongo.connection).create({
        provider: LOCAL_PROVIDER,
        providerSubject: String(credential._id),
        email,
        emailNormalized: email,
        displayName: "SAMPLE Staff",
        roles: [role],
        status: "active",
        activatedAt: clock(),
      });
      const login = await request("/login", { body: { email, password } });
      if (login.status !== 200)
        throw Error("Owned fixture password verification failed");
      let cookie = cookieOf(login);
      if (!primary) {
        const pending = await request("/security/enroll", { cookie, body: {} });
        const setup = await pending.json();
        if (pending.status !== 200 || typeof setup.secret !== "string")
          throw Error("Owned fixture enrollment failed");
        const token = await generate({
          secret: setup.secret,
          epoch: Math.floor(+clock() / 1000),
        });
        const verified = await request("/security/verify", {
          cookie,
          body: { token, enrollment: true },
        });
        if (verified.status !== 200)
          throw Error("Owned fixture factor verification failed");
        cookie = cookieOf(verified);
      }
      const sid = decodeURIComponent(cookie.slice(cookie.indexOf("=") + 1))
        .slice(2)
        .split(".")[0]!;
      return { staff, cookie, sid, email, password };
    }
    async function denied(kind: DeniedSessionKind) {
      if (kind === "anonymous") return { cookie: "", expected: 401 };
      const actor = await identity("admin", kind === "primary");
      const sessions = staffSessionModel(mongo.connection),
        staff = staffUserModel(mongo.connection),
        query = { tokenHash: sessionHash(actor.sid) };
      if (kind === "idle-expired")
        await sessions.updateOne(query, {
          $set: { idleExpiresAt: new Date(0) },
        });
      if (kind === "absolute-expired")
        await sessions.updateOne(query, { $set: { expiresAt: new Date(0) } });
      if (kind === "revoked")
        await sessions.updateOne(query, { $set: { revokedAt: clock() } });
      if (kind === "suspended" || kind === "deactivated")
        await staff.updateOne(
          { _id: actor.staff._id },
          { $set: { status: kind } },
        );
      if (kind === "access-version")
        await staff.updateOne(
          { _id: actor.staff._id },
          { $inc: { accessVersion: 1 } },
        );
      if (kind === "provider-mismatch")
        await staff.updateOne(
          { _id: actor.staff._id },
          { $set: { provider: "SAMPLE-other-provider" } },
        );
      const cookie =
        kind === "forged-cookie"
          ? actor.cookie.slice(0, -1) + (actor.cookie.endsWith("A") ? "B" : "A")
          : actor.cookie;
      return { ...actor, cookie, expected: kind === "primary" ? 403 : 401 };
    }
    return {
      ...mongo,
      origin,
      base,
      lifecycle,
      request,
      identity,
      denied,
      async close() {
        await new Promise<void>((resolve) => server!.close(() => resolve()));
        await mongo.close();
      },
    };
  } catch (error) {
    if (server)
      await new Promise<void>((resolve) => server!.close(() => resolve()));
    await mongo.close();
    throw error;
  }
}
