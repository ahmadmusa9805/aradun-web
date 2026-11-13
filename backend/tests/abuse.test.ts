import { beforeAll, afterAll, it, expect, vi } from "vitest";
import express from "express";
import { createServer } from "node:http";
import { once } from "node:events";
import { randomBytes } from "node:crypto";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { rateLimitBucketModel } from "../src/modules/operations/models/rate-limit-bucket.model.js";
import {
  createSharedLimiter,
  normalizePeer,
  validateLimitSecret,
} from "../src/modules/operations/server/rate-limit.server.js";
import {
  limitRequests,
  publicJsonGuards,
  requestGuardErrors,
} from "../src/modules/operations/server/request-controls.server.js";
import { createApp } from "../src/app.js";
import { loadBackendEnv } from "../src/config/env.server.js";
let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
const secret = () => randomBytes(32).toString("base64url");
beforeAll(async () => {
  fixture = await startMongoFixture();
  const model = rateLimitBucketModel(fixture.connection);
  await model.createCollection();
  await model.createIndexes();
}, 30000);
afterAll(async () => {
  await fixture?.close();
});
it("normalizes equivalent socket addresses and requires canonical keyed secrets", () => {
  expect(normalizePeer("::ffff:127.0.0.1")).toBe("127.0.0.1");
  expect(normalizePeer("0:0:0:0:0:ffff:7f00:1")).toBe("127.0.0.1");
  expect(normalizePeer("2001:0db8:0:0:0:0:0:1")).toBe(
    normalizePeer("2001:db8::1"),
  );
  expect(() => normalizePeer("untrusted")).toThrow();
  expect(() => validateLimitSecret("short")).toThrow();
  expect(() => loadBackendEnv({ RATE_LIMIT_HASH_SECRET: "short" })).toThrow();
  expect(validateLimitSecret(secret())).toBeTruthy();
});
it("shares exactly ten admissions across concurrent instances and saturates counters", async () => {
  const key = secret(),
    a = createSharedLimiter(fixture.connection, key),
    b = createSharedLimiter(fixture.connection, key);
  const results = await Promise.all(
    Array.from({ length: 30 }, (_, i) =>
      (i % 2 ? a : b).admit("intake", "192.0.2.1"),
    ),
  );
  expect(results.filter((result) => result.allowed)).toHaveLength(10);
  expect(
    results
      .filter((result) => !result.allowed)
      .every((result) => result.retryAfter > 0),
  ).toBe(true);
  const records = await rateLimitBucketModel(fixture.connection).find({});
  expect(records).toHaveLength(1);
  expect(records[0]?.requestCount).toBe(10);
  expect(JSON.stringify(records)).not.toContain("192.0.2.1");
  expect(records[0]?.subjectHash).toMatch(/^[a-f0-9]{64}$/);
});
it("checks window expiry in logic while old bucket remains, with exact cleanup eligibility", async () => {
  let stamp = Date.parse("2030-01-01T00:00:00Z");
  const job = createSharedLimiter(
    fixture.connection,
    secret(),
    () => new Date(stamp),
  );
  for (let i = 0; i < 10; i++)
    expect((await job.admit("intake", "192.0.2.2")).allowed).toBe(true);
  expect((await job.admit("intake", "192.0.2.2")).allowed).toBe(false);
  stamp += 600000;
  expect((await job.admit("intake", "192.0.2.2")).allowed).toBe(true);
  const rows = await rateLimitBucketModel(fixture.connection).find({
    windowStart: { $gte: new Date("2030-01-01") },
  });
  expect(rows).toHaveLength(2);
  for (const row of rows)
    expect(row.expiresAt.getTime() - row.windowStart.getTime()).toBe(4200000);
  const indexes = await rateLimitBucketModel(fixture.connection).listIndexes();
  expect(indexes).toHaveLength(3);
  expect(
    indexes.find((index) => index.name === "expiresAt_1")?.expireAfterSeconds,
  ).toBe(0);
});
it("fails safely on exhausted collisions and unavailable store", async () => {
  const model = rateLimitBucketModel(fixture.connection),
    insert = vi
      .spyOn(model.collection, "insertOne")
      .mockRejectedValue(
        Object.assign(new Error("private socket"), { code: 11000 }),
      );
  try {
    await expect(
      createSharedLimiter(fixture.connection, secret()).admit(
        "intake",
        "192.0.2.3",
      ),
    ).rejects.toMatchObject({ code: "unavailable" });
    expect(insert).toHaveBeenCalledTimes(3);
  } finally {
    insert.mockRestore();
  }
});
async function serve(app: ReturnType<typeof express>) {
  const server = createServer(app);
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("port");
  return {
    url: `http://127.0.0.1:${address.port}`,
    close: () =>
      new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      ),
  };
}
it("actual HTTP preserves origin/body rules and denies before domain work", async () => {
  const app = express(),
    limiter = createSharedLimiter(fixture.connection, secret()),
    writes = vi.fn(),
    origins = ["http://127.0.0.1:3000"];
  app.post(
    "/fixture",
    publicJsonGuards(origins)[0]!,
    limitRequests(limiter, "intake"),
    ...publicJsonGuards(origins).slice(1),
    (_request, response) => {
      writes();
      response.json({ saved: true });
    },
  );
  app.use(requestGuardErrors);
  const server = await serve(app),
    url = server.url + "/fixture",
    headers = { Origin: origins[0]!, "Content-Type": "application/json" };
  try {
    expect(
      (
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: "{}",
        })
      ).status,
    ).toBe(403);
    expect(
      (
        await fetch(url, {
          method: "POST",
          headers: { ...headers, Origin: "null" },
          body: "{}",
        })
      ).status,
    ).toBe(403);
    expect(
      (
        await fetch(url, {
          method: "POST",
          headers: { ...headers, "Content-Type": "text/plain" },
          body: "{}",
        })
      ).status,
    ).toBe(415);
    expect(
      (
        await fetch(url, {
          method: "POST",
          headers: { ...headers, "Content-Encoding": "gzip" },
          body: "{}",
        })
      ).status,
    ).toBe(415);
    expect(
      (
        await fetch(url, {
          method: "POST",
          headers,
          body: JSON.stringify({ message: "x".repeat(33000) }),
        })
      ).status,
    ).toBe(413);
    expect(
      (await fetch(url, { method: "POST", headers, body: "[]" })).status,
    ).toBe(400);
    expect(writes).not.toHaveBeenCalled();
    for (let i = 0; i < 8; i++)
      expect(
        (
          await fetch(url, {
            method: "POST",
            headers: { ...headers, "X-Forwarded-For": `192.0.2.${i}` },
            body: "{}",
          })
        ).status,
      ).toBe(200);
    const result = await fetch(url, { method: "POST", headers, body: "{}" });
    expect(result.status).toBe(429);
    expect(Number(result.headers.get("Retry-After"))).toBeGreaterThan(0);
    expect(await result.text()).not.toContain("127.0.0.1");
    expect(writes).toHaveBeenCalledTimes(8);
  } finally {
    await server.close();
  }
});
it("catalog runtime fails closed without binding and runs with real shared limiter", async () => {
  const no = await serve(createApp());
  try {
    const result = await fetch(no.url + "/api/catalog/categories");
    expect(result.status).toBe(503);
    expect(result.headers.get("Retry-After")).toBe("5");
    expect((await fetch(no.url + "/")).status).toBe(200);
  } finally {
    await no.close();
  }
  const model = rateLimitBucketModel(fixture.connection),
    job = createSharedLimiter(fixture.connection, secret()),
    server = await serve(createApp(undefined, { limiter: job }));
  try {
    expect((await fetch(server.url + "/api/catalog/categories")).status).toBe(
      200,
    );
    const update = vi
      .spyOn(model, "findOneAndUpdate")
      .mockRejectedValue(new Error("private details"));
    try {
      const result = await fetch(server.url + "/api/catalog/categories");
      expect(result.status).toBe(503);
      expect(await result.text()).not.toContain("private details");
    } finally {
      update.mockRestore();
    }
  } finally {
    await server.close();
  }
});
it("refuses admission without the reviewed unique index and recovers after fixture repair", async () => {
  const model = rateLimitBucketModel(fixture.connection),
    job = createSharedLimiter(fixture.connection, secret());
  await model.collection.dropIndex("scope_1_subjectHash_1_windowStart_1");
  try {
    await expect(job.admit("intake", "192.0.2.10")).rejects.toMatchObject({
      code: "unavailable",
    });
  } finally {
    await model.createIndexes();
  }
  expect((await job.admit("intake", "192.0.2.10")).allowed).toBe(true);
});
