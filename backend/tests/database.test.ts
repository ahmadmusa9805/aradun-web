import { afterAll, beforeAll, expect, it, vi } from "vitest";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { once } from "node:events";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { assertTestTarget, resetTestDatabase } from "./support/test-target.js";
import { registeredModels } from "../src/server/db/model-registry.server.js";
import {
  applyIndexPlan,
  checkIndexes,
  expectedIndexes,
} from "../src/server/db/index-plan.server.js";

let fixture: Awaited<ReturnType<typeof startMongoFixture>>;
beforeAll(async () => {
  fixture = await startMongoFixture();
});
afterAll(async () => {
  await fixture?.close();
});

it("registers only implemented models without automatically creating collections/indexes", async () => {
  expect(
    registeredModels(fixture.connection).map((entry) => entry.name),
  ).toEqual([
    "AuditEvent",
    "Inquiry",
    "InquirySequence",
    "OutboxEvent",
    "RateLimitBucket",
    "StaffUser",
    "StaffSession",
    "AuthCredential",
    "IdentityFactor",
    "IdentityChallenge",
    "IdentityRecoveryPack",
    "IdentitySecurityEvent",
    "IdentityLifecycleControl",
  ]);
  const model = registeredModels(fixture.connection)[0].model;
  expect(model.schema.options.autoIndex).toBe(false);
  expect(model.schema.options.autoCreate).toBe(false);
  expect(
    await fixture.connection
      .db!.listCollections({ name: "auditEvents" })
      .toArray(),
  ).toHaveLength(0);
  expect(expectedIndexes(fixture.connection)[0]!.indexes).toHaveLength(5);
});

it("checks read-only, applies the reviewed additive plan, and verifies repeatability", async () => {
  const before = await checkIndexes(fixture.connection);
  expect(before.results[0]!.missing).toHaveLength(5);
  expect(
    await fixture.connection
      .db!.listCollections({ name: "auditEvents" })
      .toArray(),
  ).toHaveLength(0);
  await expect(
    applyIndexPlan(fixture.connection, "unreviewed"),
  ).rejects.toThrow("plan changed");
  const verified = await applyIndexPlan(fixture.connection, before.fingerprint);
  expect(verified.results).toEqual([
    {
      collection: "auditEvents",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "inquiries",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "inquirySequences",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "outboxEvents",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "rateLimitBuckets",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "staffUsers",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "staffSessions",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "authCredentials",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "identityFactors",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "identityChallenges",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "identityRecoveryPacks",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "identitySecurityEvents",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
    {
      collection: "identityLifecycleControl",
      missingCollection: false,
      missing: [],
      drift: [],
      extra: [],
    },
  ]);
  expect(
    await applyIndexPlan(fixture.connection, verified.fingerprint),
  ).toEqual(verified);
  expect(await checkIndexes(fixture.connection)).toEqual(verified);
});

it("preflights duplicate data before unique index creation and refuses drift/extra indexes without deleting anything", async () => {
  const collection = fixture.connection.collection("auditEvents");
  await collection.dropIndex("eventKey_1"); // Test-only deliberate damage on verified owned fixture.
  await collection.insertMany([
    { eventKey: "SAMPLE_DUPLICATE" },
    { eventKey: "SAMPLE_DUPLICATE" },
  ]);
  const duplicates = await checkIndexes(fixture.connection);
  await expect(
    applyIndexPlan(fixture.connection, duplicates.fingerprint),
  ).rejects.toThrow("preflight failed");
  expect(await collection.countDocuments()).toBe(2);
  await collection.deleteMany({ eventKey: "SAMPLE_DUPLICATE" });
  await collection.createIndex({ eventKey: 1 }, { name: "eventKey_1" });
  await collection.createIndex(
    { schemaVersion: 1 },
    { name: "SAMPLE_EXTRA_INDEX" },
  );
  const drift = await checkIndexes(fixture.connection);
  expect(drift.results[0]!.drift).toEqual(["eventKey_1"]);
  expect(drift.results[0]!.extra).toEqual(["SAMPLE_EXTRA_INDEX"]);
  await expect(
    applyIndexPlan(fixture.connection, drift.fingerprint),
  ).rejects.toThrow("reviewed repair");
  expect(
    (await collection.listIndexes().toArray()).some(
      (index) => index.name === "SAMPLE_EXTRA_INDEX",
    ),
  ).toBe(true);
});

it("proves populated-value partial uniqueness and TTL metadata without future application models", async () => {
  const collection = fixture.connection.collection("synthetic_index_semantics");
  await collection.createIndex(
    { optionalKey: 1 },
    {
      unique: true,
      partialFilterExpression: { optionalKey: { $type: "string" } },
    },
  );
  await collection.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
  await collection.insertMany([
    { label: "SAMPLE_A" },
    { label: "SAMPLE_B" },
    { optionalKey: null },
  ]);
  await collection.insertOne({ optionalKey: "SAMPLE_POPULATED" });
  await expect(
    collection.insertOne({ optionalKey: "SAMPLE_POPULATED" }),
  ).rejects.toMatchObject({ code: 11000 });
  const indexes = await collection.listIndexes().toArray();
  expect(indexes.find((index) => index.name === "optionalKey_1")).toMatchObject(
    {
      unique: true,
      partialFilterExpression: { optionalKey: { $type: "string" } },
    },
  );
  expect(
    indexes.find((index) => index.name === "expiresAt_1")?.expireAfterSeconds,
  ).toBe(0);
  // No assertion that asynchronous TTL cleanup is an authorization/expiry clock.
});

it("rehearses repeat-safe synthetic fixture/migration dry-run, bounded backfill, verification and rollback", async () => {
  assertTestTarget(fixture.target);
  const collection = fixture.connection.collection(
    "synthetic_migration_rehearsal",
  );
  async function seed() {
    assertTestTarget(fixture.target);
    await collection.updateOne(
      { fixtureKey: "SAMPLE_M02_05" },
      {
        $setOnInsert: {
          fixtureKey: "SAMPLE_M02_05",
          schemaVersion: 1,
          display: "SAMPLE/DEMO only",
        },
      },
      { upsert: true },
    );
  }
  await seed();
  await seed();
  expect(await collection.countDocuments()).toBe(1);
  const filter = { fixtureKey: "SAMPLE_M02_05", schemaVersion: 1 };
  const dryRun = await collection.countDocuments(filter);
  expect(dryRun).toBe(1);
  expect((await collection.findOne(filter))?.schemaVersion).toBe(1); // Dry-run did not mutate.
  const backup = await collection.findOne(filter); // In-memory synthetic rehearsal snapshot only.
  expect(backup?.display).toBe("SAMPLE/DEMO only");
  async function apply() {
    assertTestTarget(fixture.target);
    const batch = await collection.find(filter).limit(25).toArray();
    for (const row of batch)
      await collection.updateOne(
        { _id: row._id, schemaVersion: 1 },
        { $set: { schemaVersion: 2, migrationMarker: "SAMPLE_EXPAND" } },
      );
    return batch.length;
  }
  expect(await apply()).toBe(1);
  expect(await apply()).toBe(0);
  expect(
    await collection.countDocuments({
      fixtureKey: "SAMPLE_M02_05",
      schemaVersion: 2,
    }),
  ).toBe(1);
  // External deployment ledger is procedural; do not create an app migration collection.
  await collection.updateOne(
    { fixtureKey: "SAMPLE_M02_05", schemaVersion: 2 },
    {
      $set: { schemaVersion: backup!.schemaVersion },
      $unset: { migrationMarker: "" },
    },
  );
  expect((await collection.findOne(filter))?.migrationMarker).toBeUndefined();
});

it("refuses production/unknown fixture reset before any destructive operation", async () => {
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
  } finally {
    vi.unstubAllEnvs();
    drop.mockRestore();
  }
});

it("refuses hosted CLI apply before network access and sanitizes operational credentials", async () => {
  let connections = 0;
  const canary = createServer((socket) => {
    connections++;
    socket.destroy();
  });
  canary.listen(0, "127.0.0.1");
  await once(canary, "listening");
  const address = canary.address();
  if (!address || typeof address === "string")
    throw new Error("No owned canary port");
  const secret = "SAMPLE_PRIVATE_OPERATOR_TOKEN";
  try {
    const child = spawn(
      process.execPath,
      [
        "--import",
        "tsx",
        "scripts/db/indexes.ts",
        "--apply",
        "not-read-evidence.json",
      ],
      {
        cwd: "backend",
        windowsHide: true,
        stdio: ["ignore", "ignore", "pipe"],
        env: {
          ...process.env,
          NODE_ENV: "production",
          APP_ENV: "production",
          APP_URL: "https://www.example.invalid",
          ALLOWED_ORIGINS: "https://www.example.invalid",
          PORT: "4000",
          MONGODB_DB_NAME: "aradun_production",
          DB_OPERATIONS_URI: `mongodb://operator:${secret}@127.0.0.1:${address.port}/aradun_production?tls=true`,
        },
      },
    );
    let output = "";
    child.stderr.on("data", (data: Buffer) => {
      output += data.toString();
    });
    const [code] = await once(child, "exit");
    expect(code).toBe(1);
    expect(connections).toBe(0);
    expect(output).toContain("Database operation refused or failed");
    expect(output).not.toContain(secret);
    expect(output).not.toContain("mongodb://");
  } finally {
    await new Promise<void>((resolve) => canary.close(() => resolve()));
  }
});
