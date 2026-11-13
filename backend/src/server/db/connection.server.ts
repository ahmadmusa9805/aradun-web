import { createConnection, type Connection } from "mongoose";

export type DatabaseConfig = Readonly<{
  uri: string;
  name: string;
  maxPoolSize: number;
  serverSelectionTimeoutMS: number;
  waitQueueTimeoutMS: number;
}>;

/** One owner per Node process; never create this inside a request handler. */
export function createDatabase(config: DatabaseConfig) {
  let connection: Connection | undefined;
  let pending: Promise<Connection> | undefined;
  let closing: Promise<void> | undefined;

  function connect(): Promise<Connection> {
    if (closing) return Promise.reject(new Error("Database is shutting down"));
    if (pending) return pending;
    // Once opened, let the driver's topology monitor recover outages on this pool.
    // Reopening on readyState=0 would replace a client still monitoring its servers.
    if (connection) return Promise.resolve(connection);
    const candidate = connection ?? createConnection();
    connection = candidate;
    // Driver errors can contain credentials; callers receive a safe error instead.
    if (!connection?.listeners("error").includes(ignoreDriverError))
      candidate.on("error", ignoreDriverError);
    pending = (async () => {
      try {
        await candidate.openUri(config.uri, {
          dbName: config.name,
          maxPoolSize: config.maxPoolSize,
          minPoolSize: 0,
          maxConnecting: 2,
          maxIdleTimeMS: 60_000,
          serverSelectionTimeoutMS: config.serverSelectionTimeoutMS,
          connectTimeoutMS: 3_000,
          socketTimeoutMS: 10_000,
          waitQueueTimeoutMS: config.waitQueueTimeoutMS,
          bufferCommands: false,
          autoIndex: false,
          autoCreate: false,
        });
        const hello = await candidate
          .db!.admin()
          .command({ hello: 1, maxTimeMS: 3_000 });
        if (!hello.setName) throw new Error("Replica set required");
        return candidate;
      } catch {
        await candidate.close().catch(() => undefined);
        connection = undefined;
        throw new Error(
          "Database connection unavailable; verify configuration and replica set",
        );
      } finally {
        pending = undefined;
      }
    })();
    return pending;
  }

  function close(): Promise<void> {
    if (closing) return closing;
    closing = (async () => {
      await pending?.catch(() => undefined);
      await connection?.close();
      connection = undefined;
    })();
    return closing;
  }
  return Object.freeze({ connect, close });
}

function ignoreDriverError() {
  /* Rejected operations report failure; never log raw events. */
}
