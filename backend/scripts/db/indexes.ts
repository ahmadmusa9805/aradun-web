import { createConnection } from "mongoose";
import { readFile } from "node:fs/promises";
import { z } from "zod";
import { loadBackendEnv } from "../../src/config/env.server.js";
import {
  applyIndexPlan,
  checkIndexes,
  expectedIndexes,
} from "../../src/server/db/index-plan.server.js";

async function main() {
  const [mode = "--check", evidencePath, ...extra] = process.argv.slice(2);
  if (
    !["--plan", "--check", "--apply"].includes(mode) ||
    extra.length ||
    (mode !== "--apply" && evidencePath)
  )
    throw new Error("Invalid operational command");
  if (mode === "--plan") {
    const connection = createConnection();
    console.log(JSON.stringify(expectedIndexes(connection), null, 2));
    await connection.close();
    return;
  }
  // Explicit separate operational URI; never fall back to application credentials.
  if (!process.env.DB_OPERATIONS_URI)
    throw new Error("Separate operational configuration required");
  const config = loadBackendEnv(
    { ...process.env, MONGODB_URI: process.env.DB_OPERATIONS_URI },
    ["database"],
  );
  let evidence:
    | {
        database: string;
        fingerprint: string;
        reviewed: true;
        backupReference: string;
        recoveryVerified: true;
      }
    | undefined;
  if (mode === "--apply") {
    // Hosted staging/production changes require a later separately authorized release procedure.
    if (config.appEnv !== "development" || !evidencePath)
      throw new Error("Apply is restricted to reviewed development changes");
    evidence = z
      .strictObject({
        database: z.string(),
        fingerprint: z.string().regex(/^[a-f0-9]{64}$/),
        reviewed: z.literal(true),
        backupReference: z.string().min(1).max(500),
        recoveryVerified: z.literal(true),
      })
      .parse(JSON.parse(await readFile(evidencePath, "utf8")));
    if (evidence.database !== config.database!.name)
      throw new Error("Wrong approved database");
  }
  const connection = createConnection();
  connection.on("error", () => {
    /* No raw driver errors in tooling output. */
  });
  try {
    await connection.openUri(config.database!.uri, {
      dbName: config.database!.name,
      maxPoolSize: 1,
      minPoolSize: 0,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 3000,
      socketTimeoutMS: 10000,
      waitQueueTimeoutMS: 2000,
      autoIndex: false,
      autoCreate: false,
      bufferCommands: false,
    });
    const result = evidence
      ? await applyIndexPlan(connection, evidence.fingerprint)
      : await checkIndexes(connection);
    console.log(JSON.stringify(result, null, 2));
    if (
      result.results.some(
        (entry) =>
          entry.missingCollection ||
          entry.missing.length ||
          entry.drift.length ||
          entry.extra.length,
      )
    )
      process.exitCode = 1;
  } finally {
    await connection.close();
  }
}
main().catch(() => {
  console.error(
    "Database operation refused or failed; review target, privileges, evidence and index plan",
  );
  process.exitCode = 1;
});
