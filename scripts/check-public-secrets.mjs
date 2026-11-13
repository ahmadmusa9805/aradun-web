import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";

// Inspect public build artifacts, never print discovered values.
const sentinel = "ARADUN_PRIVATE_SENTINEL_";
const privateKeys = [
  "MONGODB_URI",
  "DB_OPERATIONS_URI",
  "AUTH_SECRET",
  "AUTH_SESSION_SECRET",
  "AUTH_FACTOR_SEALING_KEY",
  "EMAIL_API_KEY",
  "RESEND_API_KEY",
  "RATE_LIMIT_HASH_SECRET",
  "JOB_TRIGGER_SECRET",
];
const secrets = privateKeys
  .map((key) => process.env[key])
  .filter((value) => value && value.length >= 8);
function leaked(text) {
  return (
    text.includes(sentinel) || secrets.some((value) => text.includes(value))
  );
}
if (process.argv.includes("--self-test")) {
  assert.equal(leaked("safe public settings"), false);
  assert.equal(leaked(`deliberate negative fixture ${sentinel}test`), true);
  console.log(
    "PASS: public leak detector rejects synthetic secret and accepts safe content",
  );
} else {
  async function files(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    return (
      await Promise.all(
        entries.map((entry) =>
          entry.isDirectory()
            ? files(path.join(directory, entry.name))
            : [path.join(directory, entry.name)],
        ),
      )
    ).flat();
  }
  const staticFiles = await files("frontend/.next/static");
  const renderedFiles = (await files("frontend/.next/server/app")).filter(
    (file) => /\.(html|rsc)$/.test(file),
  );
  const publicAssets = await files("frontend/public");
  const publicFiles = [...staticFiles, ...renderedFiles, ...publicAssets];
  assert.ok(publicFiles.length > 0, "No public build artifacts found");
  const failures = [];
  for (const file of publicFiles)
    if (leaked(await readFile(file, "utf8"))) failures.push(file);
  if (failures.length)
    throw new Error(
      `Private value found in public artifacts: ${failures.join(", ")}`,
    );
  console.log(
    `PASS: ${publicFiles.length} public artifacts scanned; no configured private values or synthetic sentinels`,
  );
}
