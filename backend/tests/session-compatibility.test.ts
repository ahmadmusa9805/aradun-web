import { beforeAll, afterAll, it, expect, vi } from "vitest";
import { once } from "node:events";
import { createServer } from "node:http";
import { createConnection } from "mongoose";
import session, { type SessionData } from "express-session";
import { sessionProof } from "./support/session-proof.js";
import { startMongoFixture } from "./support/mongo-fixture.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
beforeAll(async () => {
  fixture = await startMongoFixture();
}, 30000);
afterAll(async () => {
  await fixture?.close();
});
async function harness() {
  let stamp = Date.now();
  const proof = await sessionProof(fixture.connection, () => new Date(stamp));
  const server = createServer(proof.app);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("No port");
  const url = `http://127.0.0.1:${address.port}`;
  return {
    ...proof,
    advance: (ms: number) => {
      stamp += ms;
    },
    async request(
      path: string,
      cookie?: string,
      headers: Record<string, string> = {},
    ) {
      return fetch(url + path, {
        method: path === "/poll" ? "GET" : "POST",
        headers: {
          Origin: "http://127.0.0.1:3998",
          "X-SAMPLE-Proof": proof.issueKey,
          ...(cookie ? { Cookie: cookie } : {}),
          ...headers,
        },
      });
    },
    close: () =>
      new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      ),
  };
}
const cookie = (response: Response) =>
  response.headers
    .getSetCookie()
    .map((value) => value.split(";", 1)[0]!)
    .join("; ");
const sid = (value: string) =>
  decodeURIComponent(value.split("=", 2)[1]!).slice(2).split(".")[0]!; // Decode fixture cookie for boolean storage checks only; no signer/parser implementation.
const mutate = (value: string) =>
  value.slice(0, -1) + (value.endsWith("a") ? "b" : "a");
const save = (
  store: Awaited<ReturnType<typeof sessionProof>>["store"],
  id: string,
  data: SessionData,
) =>
  new Promise<void>((resolve, reject) =>
    store.set(id, data, (error) =>
      error ? reject(new Error("Safe proof denial")) : resolve(),
    ),
  );
it("refuses unowned fixture before schema creation", async () => {
  const connection = createConnection();
  await expect(sessionProof(connection)).rejects.toThrow();
  await connection.close();
});
it("uses library cookies, hashes only in source-shaped storage and denies tampering", async () => {
  const h = await harness();
  try {
    const issued = await h.request("/issue"),
      value = cookie(issued);
    expect(issued.status).toBe(204);
    expect(Boolean(value)).toBe(true);
    expect(issued.headers.get("set-cookie")?.includes("HttpOnly")).toBe(true);
    expect((await h.request("/poll", value)).status).toBe(200);
    expect((await h.request("/poll", mutate(value))).status).toBe(401);
    const row = await h.model.findOne({ tokenHash: h.digest(sid(value)) });
    expect(Boolean(row)).toBe(true);
    expect(JSON.stringify(row).includes(sid(value))).toBe(false);
    expect(row?.assurance).toBe("primary");
    expect(row?.mfaVerifiedAt == null).toBe(true);
    const indexes = await h.model.listIndexes();
    expect(indexes).toHaveLength(4);
    expect(
      indexes.find((index) => index.name === "expiresAt_1")?.expireAfterSeconds,
    ).toBe(0);
  } finally {
    await h.close();
  }
});
it("polling cannot extend idle; expiry is enforced while TTL documents remain", async () => {
  const h = await harness();
  try {
    const value = cookie(await h.request("/issue")),
      id = sid(value);
    h.advance(29 * 60000);
    expect((await h.request("/poll", value)).status).toBe(200);
    h.advance(60000);
    expect((await h.request("/poll", value)).status).toBe(401);
    expect(await h.model.countDocuments({ tokenHash: h.digest(id) })).toBe(1);
  } finally {
    await h.close();
  }
});
it("deliberate activity extends idle but never the absolute cap or remember-me option", async () => {
  const h = await harness();
  try {
    const value = cookie(
        await h.request("/issue", undefined, { "X-SAMPLE-Remember": "true" }),
      ),
      id = sid(value),
      initial = await h.read(id);
    for (let i = 0; i < 23; i++) {
      h.advance(20 * 60000);
      expect((await h.request("/activity", value)).status).toBe(204);
    }
    h.advance(19 * 60000);
    expect((await h.request("/activity", value)).status).toBe(204);
    const current = await h.read(id);
    expect(current?.expiresAt.getTime() === initial?.expiresAt.getTime()).toBe(
      true,
    );
    expect(
      current?.idleExpiresAt.getTime() === initial?.expiresAt.getTime(),
    ).toBe(true);
    h.advance(60000);
    expect((await h.request("/poll", value)).status).toBe(401);
  } finally {
    await h.close();
  }
});
it("regeneration rotates IDs and logout fences stale saves/touches without resurrection", async () => {
  const h = await harness();
  try {
    const old = cookie(await h.request("/issue")),
      fresh = cookie(await h.request("/issue", old));
    expect(fresh !== old).toBe(true);
    expect((await h.request("/poll", old)).status).toBe(401);
    const id = sid(fresh),
      row = await h.read(id);
    expect((await h.request("/logout", fresh)).status).toBe(204);
    await expect(
      save(h.store, id, {
        cookie: new session.Cookie(),
        proof: { tokenHash: h.digest(id), revision: row!.revision },
      } as SessionData),
    ).rejects.toThrow("Safe");
    await new Promise<void>((resolve, reject) =>
      h.store.touch(
        id,
        { cookie: new session.Cookie() } as SessionData,
        (error) => (error ? reject(new Error("Safe")) : resolve()),
      ),
    );
    expect((await h.request("/poll", fresh)).status).toBe(401);
    expect(
      await h.model.countDocuments({
        tokenHash: h.digest(id),
        revokedAt: { $exists: false },
      }),
    ).toBe(0);
  } finally {
    await h.close();
  }
});
it("generic set cannot create sessions or promote assurance", async () => {
  const h = await harness();
  try {
    await expect(
      save(h.store, "SAMPLE-never-issued", {
        cookie: new session.Cookie(),
      } as SessionData),
    ).rejects.toThrow();
    const value = cookie(await h.request("/issue")),
      id = sid(value),
      row = await h.read(id);
    await expect(
      save(h.store, id, {
        cookie: new session.Cookie(),
        proof: { tokenHash: h.digest(id), revision: row!.revision },
        assurance: "mfa",
      } as SessionData),
    ).rejects.toThrow();
    expect((await h.read(id))?.assurance).toBe("primary");
  } finally {
    await h.close();
  }
});
it("two store instances share revocation and bound concurrent activity writes", async () => {
  const h = await harness();
  try {
    const value = cookie(await h.request("/issue")),
      id = sid(value);
    const other = await sessionProof(
      fixture.connection,
      () => new Date(),
      h.secret,
    );
    h.advance(120000);
    await Promise.all([h.activity(id), h.activity(id)]);
    expect((await h.read(id))?.revision).toBe(1);
    await new Promise<void>((resolve, reject) =>
      other.store.destroy(id, (error) =>
        error ? reject(new Error("Safe")) : resolve(),
      ),
    );
    expect(await h.activity(id)).toBe(false);
    expect((await h.request("/poll", value)).status).toBe(401);
  } finally {
    await h.close();
  }
});
it("synthetic assurance/freshness policy denies primary and stale factors", async () => {
  const h = await harness();
  try {
    const primary = cookie(await h.request("/issue"));
    expect((await h.request("/sensitive", primary)).status).toBe(403);
    const mfa = cookie(
      await h.request("/issue", undefined, { "X-SAMPLE-Assurance": "mfa" }),
    );
    expect((await h.request("/sensitive", mfa)).status).toBe(204);
    h.advance(300000);
    expect((await h.request("/sensitive", mfa)).status).toBe(403);
  } finally {
    await h.close();
  }
});
it("store failure is safe and fails closed", async () => {
  const h = await harness();
  try {
    const value = cookie(await h.request("/issue")),
      spy = vi.spyOn(h.model, "findOne").mockImplementation(() => {
        throw new Error("SAMPLE private diagnostic");
      });
    try {
      const response = await h.request("/poll", value);
      expect(response.status).toBe(503);
      expect((await response.text()).includes("private diagnostic")).toBe(
        false,
      );
    } finally {
      spy.mockRestore();
    }
  } finally {
    await h.close();
  }
});
