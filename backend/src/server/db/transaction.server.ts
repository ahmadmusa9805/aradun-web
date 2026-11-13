import type { ClientSession, Connection } from "mongoose";

/** Use-case owns the boundary. Await sequential DB writes with this session.
 * Callback may replay: no HTTP/provider calls, emails, or other external effects.
 * Do not swallow errors or start nested/parallel transactions on the session.
 */
export function runTransaction<T>(
  connection: Connection,
  work: (session: ClientSession) => Promise<T>,
): Promise<T> {
  return connection.transaction(work, {
    readPreference: "primary",
    readConcern: { level: "snapshot" },
    writeConcern: { w: "majority", wtimeoutMS: 5_000 },
    maxCommitTimeMS: 5_000,
  });
}
