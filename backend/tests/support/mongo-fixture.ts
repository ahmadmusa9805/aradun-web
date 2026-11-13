import { createConnection } from "mongoose";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { once } from "node:events";
import { mkdir, readdir, rm } from "node:fs/promises";
import { createServer } from "node:net";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { assertTestTarget, markTestDatabase } from "./test-target.js";

export async function startMongoFixture() {
  if (process.env.NODE_ENV !== "test")
    throw new Error("Mongo fixture requires NODE_ENV=test");
  if (process.env.MONGODB_URI || process.env.MONGODB_DB_NAME)
    throw new Error(
      "Unset application MongoDB configuration before tests; no external database is accepted",
    );
  const runId = randomUUID().replaceAll("-", "");
  const runRoot = path.resolve(".tools/test-runs");
  const directory = path.join(runRoot, runId);
  const archiveRoot = path.resolve(".tools/mongodb-8.0.34");
  const [folder] = await readdir(archiveRoot);
  if (!folder)
    throw new Error("Install the documented native MongoDB test binary first");
  const executable = path.join(archiveRoot, folder, "bin", "mongod.exe");
  const reservation = createServer();
  reservation.listen(0, "127.0.0.1");
  await once(reservation, "listening");
  const address = reservation.address();
  if (!address || typeof address === "string")
    throw new Error("No test port available");
  const port = address.port;
  await new Promise<void>((resolve, reject) =>
    reservation.close((error) => (error ? reject(error) : resolve())),
  );
  const replicaSet = `aradun_rs_${runId}`;
  const target = assertTestTarget({
    runId,
    port,
    replicaSet,
    uri: `mongodb://127.0.0.1:${port}/aradun_test_${runId}?replicaSet=${replicaSet}&directConnection=true`,
  });
  await mkdir(directory, { recursive: true });
  const child = spawn(
    executable,
    [
      "--dbpath",
      directory,
      "--port",
      String(port),
      "--bind_ip",
      "127.0.0.1",
      "--replSet",
      replicaSet,
      "--logpath",
      path.join(directory, "mongod.log"),
      "--setParameter",
      "diagnosticDataCollectionEnabled=false",
      "--setParameter",
      "enableTestCommands=true",
    ],
    { windowsHide: true, stdio: "ignore" },
  );
  let spawnError: Error | undefined;
  child.on("error", (error) => {
    spawnError = error;
  });
  async function stopProcess() {
    if (child.exitCode === null && !spawnError) {
      const exited = once(child, "exit");
      child.kill();
      await exited;
    }
    if (
      path.dirname(directory) !== runRoot ||
      !/^[a-f0-9]{32}$/.test(path.basename(directory))
    )
      throw new Error("Unsafe fixture cleanup path");
    await rm(directory, {
      recursive: true,
      force: true,
      maxRetries: 10,
      retryDelay: 100,
    });
  }
  const bootstrap = createConnection();
  const connection = createConnection();
  try {
    let connected = false;
    for (let attempt = 0; attempt < 40; attempt++) {
      if (spawnError) throw spawnError;
      if (child.exitCode !== null)
        throw new Error(`Owned mongod exited (${child.exitCode})`);
      try {
        await bootstrap.openUri(
          `mongodb://127.0.0.1:${port}/admin?directConnection=true`,
          { serverSelectionTimeoutMS: 500, maxPoolSize: 1 },
        );
        connected = true;
        break;
      } catch {
        await delay(250);
      }
    }
    if (!connected) throw new Error("Owned mongod did not start");
    const options = await bootstrap.db!.admin().command({ getCmdLineOpts: 1 });
    if (
      path.resolve(String(options.parsed?.storage?.dbPath)) !== directory ||
      options.parsed?.replication?.replSet !== replicaSet ||
      options.parsed?.net?.bindIp !== "127.0.0.1" ||
      options.parsed?.net?.port !== port
    ) {
      throw new Error(
        "Refusing initialization of a process not owned by this fixture",
      );
    }
    const version = await bootstrap.db!.admin().command({ buildInfo: 1 });
    if (!String(version.version).startsWith("8.0."))
      throw new Error("Expected native MongoDB 8.0 family");
    await bootstrap.db!.admin().command({
      replSetInitiate: {
        _id: replicaSet,
        members: [{ _id: 0, host: `127.0.0.1:${port}` }],
      },
    });
    let primary = false;
    for (let attempt = 0; attempt < 60; attempt++) {
      const hello = await bootstrap.db!.admin().command({ hello: 1 });
      if (hello.isWritablePrimary && hello.setName === replicaSet) {
        primary = true;
        break;
      }
      await delay(250);
    }
    if (!primary) throw new Error("Owned replica set did not elect a primary");
    await bootstrap.close();
    await connection.openUri(target.uri, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 4,
      autoIndex: false,
    });
    await markTestDatabase(connection, target);
    return {
      connection,
      target,
      version: String(version.version),
      async close() {
        await connection.close();
        await stopProcess();
      },
    };
  } catch (error) {
    await bootstrap.close();
    await connection.close();
    await stopProcess();
    throw error;
  }
}
