import type { Connection } from "mongoose";
/** Read-only ownership check, not a reset utility; never infer safety from URI spelling alone. */
export async function assertOwnedNotificationFixture(
  connection: Connection,
  appEnv: string,
) {
  const id = /^aradun_test_([a-f0-9]{32})$/.exec(connection.name ?? "")?.[1];
  if (
    process.env.NODE_ENV !== "test" ||
    appEnv !== "development" ||
    !id ||
    connection.readyState !== 1 ||
    connection.host !== "127.0.0.1" ||
    connection.port < 1024 ||
    connection.getClient().options.credentials
  )
    throw new Error(
      "Notification test execution requires an owned disposable fixture",
    );
  const hello = await connection
    .db!.admin()
    .command({ hello: 1, maxTimeMS: 1000 });
  const marker = await connection
    .db!.collection<{ _id: string; kind: string }>("__test_owner")
    .findOne({ _id: id, kind: "aradun-disposable-test" }, { maxTimeMS: 1000 });
  if (hello.setName !== `aradun_rs_${id}` || !marker)
    throw new Error("Notification fixture ownership mismatch");
}
