import { Schema } from "mongoose";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { resetTestDatabase } from "./support/test-target.js";
import { createDatabase } from "../src/server/db/connection.server.js";
import { runTransaction } from "../src/server/db/transaction.server.js";
import { createServer, connect as connectSocket, type Socket } from "node:net";
import { once } from "node:events";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

describe("native disposable replica-set behavior", () => {
  let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
  beforeAll(async () => {
    fixture = await startMongoFixture();
  });
  afterAll(async () => {
    await fixture?.close();
  });

  it("commits then aborts sequential multi-collection writes without partial data", async () => {
    const first = fixture.connection.collection("synthetic_records");
    const second = fixture.connection.collection("synthetic_events");
    await first.insertOne({ key: "baseline", revision: 0 });
    await second.insertOne({ key: "baseline" });
    const session = await fixture.connection.startSession();
    try {
      await session.withTransaction(async () => {
        await first.insertOne({ key: "committed" }, { session });
        await second.insertOne({ key: "committed" }, { session });
      });
      await expect(
        session.withTransaction(async () => {
          await first.insertOne({ key: "aborted" }, { session });
          await second.insertOne({ key: "aborted" }, { session });
          throw new Error("Deliberate synthetic transaction failure");
        }),
      ).rejects.toThrow("Deliberate synthetic");
      expect(await first.countDocuments({ key: "committed" })).toBe(1);
      expect(await second.countDocuments({ key: "committed" })).toBe(1);
      expect(await first.countDocuments({ key: "aborted" })).toBe(0);
      expect(await second.countDocuments({ key: "aborted" })).toBe(0);
      const race = await Promise.all([
        first.updateOne(
          { key: "baseline", revision: 0 },
          { $inc: { revision: 1 } },
        ),
        first.updateOne(
          { key: "baseline", revision: 0 },
          { $inc: { revision: 1 } },
        ),
      ]);
      expect(race.reduce((sum, result) => sum + result.modifiedCount, 0)).toBe(
        1,
      );
    } finally {
      await session.endSession();
    }
  });

  it("proves unique indexes are database constraints and allows absent partial keys", async () => {
    const schema = new Schema({
      key: { type: String, required: true },
      optionalKey: String,
      syntheticEmail: String,
    });
    schema.index({ key: 1 }, { unique: true });
    schema.index(
      { optionalKey: 1 },
      {
        unique: true,
        partialFilterExpression: { optionalKey: { $type: "string" } },
      },
    );
    const Model = fixture.connection.model(
      "SyntheticIndexFixture",
      schema,
      "synthetic_indexes",
    );
    await Model.createIndexes();
    const indexes = await Model.listIndexes();
    expect(
      indexes.some((index) => index.name === "key_1" && index.unique),
    ).toBe(true);
    expect(
      indexes.find((index) => index.name === "optionalKey_1"),
    ).toMatchObject({
      unique: true,
      partialFilterExpression: { optionalKey: { $type: "string" } },
    });
    const concurrent = await Promise.allSettled([
      Model.create({ key: "duplicate" }),
      Model.create({ key: "duplicate" }),
    ]);
    expect(
      concurrent.filter((result) => result.status === "fulfilled"),
    ).toHaveLength(1);
    const rejected = concurrent.find((result) => result.status === "rejected");
    expect(rejected?.status === "rejected" && rejected.reason.code).toBe(11000);
    await Model.create([
      { key: "a", syntheticEmail: "shared@example.invalid" },
      { key: "b", syntheticEmail: "shared@example.invalid" },
    ]);
    expect(
      await Model.countDocuments({ syntheticEmail: "shared@example.invalid" }),
    ).toBe(2);
    await Model.create({ key: "partial-a", optionalKey: "same-key" });
    await expect(
      Model.create({ key: "partial-b", optionalKey: "same-key" }),
    ).rejects.toMatchObject({ code: 11000 });
  });

  it("shares one connection/pending promise, uses the explicit DB and closes once", async () => {
    const database = createDatabase({
      uri: fixture.target.uri,
      name: fixture.connection.name,
      maxPoolSize: 3,
      serverSelectionTimeoutMS: 1000,
      waitQueueTimeoutMS: 500,
    });
    try {
      const first = database.connect();
      expect(database.connect()).toBe(first);
      const connection = await first;
      expect(await database.connect()).toBe(connection);
      expect(connection.name).toBe(fixture.connection.name);
      expect(connection.getClient().options).toMatchObject({
        maxPoolSize: 3,
        minPoolSize: 0,
        maxConnecting: 2,
        waitQueueTimeoutMS: 500,
        socketTimeoutMS: 10000,
      });
      await connection
        .collection("connection_probe")
        .insertOne({ synthetic: true });
      expect(
        await fixture.connection
          .collection("connection_probe")
          .countDocuments(),
      ).toBe(1);
      const closing = database.close();
      expect(database.close()).toBe(closing);
      await closing;
      await expect(database.connect()).rejects.toThrow("shutting down");
    } finally {
      await database.close();
    }
  });

  it("clears a rejected connection promise and recovers when the same target becomes available", async () => {
    let available = false;
    const sockets = new Set<Socket>();
    const proxy = createServer((client) => {
      sockets.add(client);
      client.on("close", () => sockets.delete(client));
      client.on("error", () => client.destroy());
      if (!available) {
        client.destroy();
        return;
      }
      const upstream = connectSocket(fixture.target.port, "127.0.0.1");
      sockets.add(upstream);
      upstream.on("close", () => {
        sockets.delete(upstream);
        client.destroy();
      });
      upstream.on("error", () => {
        upstream.destroy();
        client.destroy();
      });
      client.on("close", () => upstream.destroy());
      client.pipe(upstream).pipe(client);
    });
    proxy.listen(0, "127.0.0.1");
    await once(proxy, "listening");
    const address = proxy.address();
    if (!address || typeof address === "string")
      throw new Error("No owned proxy port");
    const uri = fixture.target.uri.replace(
      `:${fixture.target.port}/`,
      `:${address.port}/`,
    );
    const database = createDatabase({
      uri,
      name: fixture.connection.name,
      maxPoolSize: 1,
      serverSelectionTimeoutMS: 250,
      waitQueueTimeoutMS: 200,
    });
    try {
      const failed = database.connect();
      await expect(failed).rejects.toThrow("Database connection unavailable");
      available = true;
      const recovered = database.connect();
      expect(recovered).not.toBe(failed);
      const connection = await recovered;
      expect(await connection.db!.command({ ping: 1 })).toMatchObject({
        ok: 1,
      });
    } finally {
      await database.close();
      for (const socket of sockets) socket.destroy();
      await new Promise<void>((resolve, reject) =>
        proxy.close((error) => (error ? reject(error) : resolve())),
      );
    }
  });

  it("retries a server-injected transient transaction failure and rolls back failed writes", async () => {
    const records = fixture.connection.collection("helper_records");
    const events = fixture.connection.collection("helper_events");
    await records.insertOne({ key: "baseline" });
    await events.insertOne({ key: "baseline" });
    await fixture.connection.db!.admin().command({
      configureFailPoint: "failCommand",
      mode: { times: 1 },
      data: {
        failCommands: ["insert"],
        errorCode: 112,
        errorLabels: ["TransientTransactionError"],
      },
    });
    let attempts = 0;
    const delivery = vi.fn();
    try {
      const receipt = await runTransaction(
        fixture.connection,
        async (session) => {
          attempts++;
          expect(delivery).not.toHaveBeenCalled();
          await records.insertOne({ key: "retry-commit" }, { session });
          await events.insertOne({ key: "retry-commit" }, { session });
          return "committed";
        },
      );
      expect(attempts).toBe(2);
      expect(receipt).toBe("committed");
      delivery(receipt); // Deliberate demonstration: external work only after commit.
      expect(delivery).toHaveBeenCalledTimes(1);
      expect(await records.countDocuments({ key: "retry-commit" })).toBe(1);
      expect(await events.countDocuments({ key: "retry-commit" })).toBe(1);
      await expect(
        runTransaction(fixture.connection, async (session) => {
          await records.insertOne({ key: "helper-abort" }, { session });
          await events.insertOne({ key: "helper-abort" }, { session });
          throw new Error("deliberate helper rollback");
        }),
      ).rejects.toThrow("deliberate helper rollback");
      expect(await records.countDocuments({ key: "helper-abort" })).toBe(0);
      expect(await events.countDocuments({ key: "helper-abort" })).toBe(0);
      expect(delivery).toHaveBeenCalledTimes(1);
    } finally {
      await fixture.connection
        .db!.admin()
        .command({ configureFailPoint: "failCommand", mode: "off" });
    }
  });

  it("bounds pool wait during saturation and recovers after the slow command", async () => {
    const database = createDatabase({
      uri: fixture.target.uri,
      name: fixture.connection.name,
      maxPoolSize: 1,
      serverSelectionTimeoutMS: 1000,
      waitQueueTimeoutMS: 200,
    });
    try {
      const connection = await database.connect();
      const records = connection.collection("helper_records");
      await fixture.connection.db!.admin().command({
        configureFailPoint: "failCommand",
        mode: { times: 1 },
        data: {
          failCommands: ["find"],
          blockConnection: true,
          blockTimeMS: 1000,
        },
      });
      const checkedOut = once(connection.getClient(), "connectionCheckedOut");
      const slow = records.findOne({ key: "baseline" });
      await checkedOut;
      await expect(records.findOne({ key: "baseline" })).rejects.toMatchObject({
        name: "MongoWaitQueueTimeoutError",
      });
      await slow;
      expect(await records.findOne({ key: "baseline" })).toMatchObject({
        key: "baseline",
      });
    } finally {
      await fixture.connection
        .db!.admin()
        .command({ configureFailPoint: "failCommand", mode: "off" });
      await database.close();
    }
  });

  it("starts the actual Express entrypoint only after connecting to the owned replica set", async () => {
    const reservation = createServer();
    reservation.listen(0, "127.0.0.1");
    await once(reservation, "listening");
    const address = reservation.address();
    if (!address || typeof address === "string")
      throw new Error("No owned HTTP port");
    await new Promise<void>((resolve) => reservation.close(() => resolve()));
    const name = `aradun_development_${fixture.target.runId}`;
    const child = spawn(
      process.execPath,
      ["--import", "tsx", "src/server.ts"],
      {
        cwd: "backend",
        windowsHide: true,
        stdio: ["ignore", "ignore", "pipe"],
        env: {
          ...process.env,
          APP_ENV: "development",
          APP_URL: "http://127.0.0.1:3000",
          ALLOWED_ORIGINS: "http://127.0.0.1:3000",
          PORT: String(address.port),
          MONGODB_URI: fixture.target.uri.replace(
            fixture.connection.name,
            name,
          ),
          MONGODB_DB_NAME: name,
          EMAIL_PROVIDER: "sink",
          ANALYTICS_ENABLED: "false",
        },
      },
    );
    const exited = once(child, "exit");
    let diagnostic = "";
    child.stderr?.on("data", (data: Buffer) => {
      diagnostic = (diagnostic + data.toString()).slice(-4000);
    });
    try {
      let response: Response | undefined;
      for (let attempt = 0; attempt < 60; attempt++) {
        if (child.exitCode !== null)
          throw new Error(`Owned API startup failed: ${diagnostic}`);
        try {
          response = await fetch(`http://127.0.0.1:${address.port}`, {
            signal: AbortSignal.timeout(500),
          });
          break;
        } catch {
          await delay(100);
        }
      }
      expect(response?.status).toBe(200);
      expect(await response?.json()).toEqual({
        application: "ARADUN API",
        stage: "foundation",
      });
    } finally {
      child.kill();
      await exited;
    }
  });

  it("refuses production reset before any destructive call, then resets only marked owned data", async () => {
    const drop = vi.spyOn(fixture.connection, "dropDatabase");
    try {
      vi.stubEnv("NODE_ENV", "production");
      await expect(
        resetTestDatabase(fixture.connection, fixture.target),
      ).rejects.toThrow("NODE_ENV=test");
      vi.unstubAllEnvs();
      await expect(
        resetTestDatabase(fixture.connection, {
          ...fixture.target,
          uri: "mongodb://127.0.0.1:27017/aradun_production",
        }),
      ).rejects.toThrow();
      expect(drop).not.toHaveBeenCalled();
      await fixture.connection.collection("__test_owner").deleteMany({});
      await expect(
        resetTestDatabase(fixture.connection, fixture.target),
      ).rejects.toThrow("ownership marker");
      expect(drop).not.toHaveBeenCalled();
      const { markTestDatabase } = await import("./support/test-target.js");
      await markTestDatabase(fixture.connection, fixture.target);
      await resetTestDatabase(fixture.connection, fixture.target);
      expect(drop).toHaveBeenCalledTimes(1);
      expect(
        await fixture.connection
          .collection("synthetic_records")
          .countDocuments(),
      ).toBe(0);
    } finally {
      vi.unstubAllEnvs();
      drop.mockRestore();
    }
  });
});
