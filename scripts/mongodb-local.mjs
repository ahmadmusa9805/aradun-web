import { createConnection } from "mongoose";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const directory = path.join(root, ".tools", "mongodb-development");
const data = path.join(directory, "data");
const executable = path.join(
  root,
  ".tools",
  "mongodb-8.0.34",
  "mongodb-win32-x86_64-windows-8.0.34",
  "bin",
  "mongod.exe",
);
const mode = process.argv[2] ?? "--start";
const uri = "mongodb://127.0.0.1:27017/admin?directConnection=true";

async function open() {
  const connection = createConnection();
  connection.on("error", () => {});
  try {
    await connection.openUri(uri, {
      serverSelectionTimeoutMS: 700,
      connectTimeoutMS: 700,
      maxPoolSize: 1,
      autoIndex: false,
      autoCreate: false,
    });
    return connection;
  } catch {
    await connection.close().catch(() => undefined);
    return undefined;
  }
}
async function owned(connection) {
  const options = await connection.db.admin().command({ getCmdLineOpts: 1 });
  if (
    path.resolve(String(options.parsed?.storage?.dbPath)) !== data ||
    options.parsed?.net?.bindIp !== "127.0.0.1" ||
    options.parsed?.net?.port !== 27017 ||
    options.parsed?.replication?.replSet !== "rs0"
  )
    throw new Error(
      "Port 27017 belongs to a different MongoDB; no changes made to it",
    );
}
async function main() {
  if (
    process.platform !== "win32" ||
    !["--start", "--status", "--stop"].includes(mode) ||
    process.argv.length > 3
  )
    throw new Error(
      "Use this Windows workspace launcher with --start, --status or --stop",
    );
  let connection = await open();
  if (!connection && mode !== "--start") {
    console.log("Local development MongoDB is not running");
    process.exitCode = mode === "--status" ? 1 : 0;
    return;
  }
  if (!connection) {
    await mkdir(data, { recursive: true });
    const child = spawn(
      executable,
      [
        "--dbpath",
        data,
        "--bind_ip",
        "127.0.0.1",
        "--port",
        "27017",
        "--replSet",
        "rs0",
        "--logpath",
        path.join(directory, "mongod.log"),
        "--logappend",
        "--setParameter",
        "diagnosticDataCollectionEnabled=false",
      ],
      { detached: true, windowsHide: true, stdio: "ignore" },
    );
    let failed = false;
    child.on("error", () => {
      failed = true;
    });
    child.unref();
    for (let attempt = 0; attempt < 20 && !failed && !connection; attempt++) {
      await delay(250);
      connection = await open();
    }
    if (!connection)
      throw new Error(
        "Local MongoDB did not start; inspect .tools/mongodb-development/mongod.log (nothing was deleted)",
      );
  }
  try {
    await owned(connection);
    if (mode === "--stop") {
      try {
        await connection.db.admin().command({ shutdown: 1, timeoutSecs: 10 });
      } catch {
        /* Expected socket closure during shutdown; verify below. */
      }
      await connection.close().catch(() => undefined);
      for (let attempt = 0; attempt < 20; attempt++) {
        await delay(250);
        const probe = await open();
        if (!probe) {
          console.log(
            "Local development MongoDB stopped; persistent data retained",
          );
          return;
        }
        await probe.close();
      }
      throw new Error("MongoDB shutdown could not be verified");
    }
    let hello = await connection.db.admin().command({ hello: 1 });
    if (!hello.setName && mode === "--start")
      await connection.db.admin().command({
        replSetInitiate: {
          _id: "rs0",
          members: [{ _id: 0, host: "127.0.0.1:27017" }],
        },
      });
    for (let attempt = 0; attempt < 60; attempt++) {
      hello = await connection.db.admin().command({ hello: 1 });
      if (hello.setName === "rs0" && hello.isWritablePrimary) {
        console.log(
          "Local MongoDB rs0 ready on 127.0.0.1:27017; development DB aradun_development; persistent data in .tools/mongodb-development/data",
        );
        return;
      }
      await delay(250);
    }
    throw new Error("Local replica set has not elected a primary");
  } finally {
    await connection.close().catch(() => undefined);
  }
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
