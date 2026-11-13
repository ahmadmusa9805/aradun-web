import { z } from "zod";
import type { Connection } from "mongoose";

export const testTargetSchema = z.strictObject({
  runId: z.string().regex(/^[a-f0-9]{32}$/),
  port: z.number().int().min(1024).max(65535),
  replicaSet: z.string().regex(/^aradun_rs_[a-f0-9]{32}$/),
  uri: z.string(),
});
export type TestTarget = z.infer<typeof testTargetSchema>;

export function assertTestTarget(
  input: unknown,
  environment: string | undefined = process.env.NODE_ENV,
): TestTarget {
  if (environment !== "test")
    throw new Error("Database reset requires NODE_ENV=test");
  const target = testTargetSchema.parse(input);
  const uri = new URL(target.uri);
  const expectedName = `aradun_test_${target.runId}`;
  if (
    uri.protocol !== "mongodb:" ||
    uri.hostname !== "127.0.0.1" ||
    Number(uri.port) !== target.port ||
    uri.username ||
    uri.password ||
    uri.hash ||
    uri.pathname !== `/${expectedName}` ||
    target.replicaSet !== `aradun_rs_${target.runId}` ||
    uri.search !== `?replicaSet=${target.replicaSet}&directConnection=true`
  )
    throw new Error("Refusing database outside the explicit owned test target");
  return target;
}

export async function markTestDatabase(
  connection: Connection,
  target: TestTarget,
) {
  await connection
    .db!.collection<{ _id: string; kind: string }>("__test_owner")
    .insertOne({ _id: target.runId, kind: "aradun-disposable-test" });
}

export async function resetTestDatabase(
  connection: Connection,
  input: unknown,
) {
  const target = assertTestTarget(input);
  if (
    connection.host !== "127.0.0.1" ||
    connection.port !== target.port ||
    connection.name !== `aradun_test_${target.runId}`
  ) {
    throw new Error("Connected database does not match the owned test target");
  }
  const hello = await connection.db!.admin().command({ hello: 1 });
  if (hello.setName !== target.replicaSet)
    throw new Error("Replica set ownership mismatch");
  const marker = await connection
    .db!.collection<{ _id: string; kind: string }>("__test_owner")
    .findOne({ _id: target.runId, kind: "aradun-disposable-test" });
  if (!marker)
    throw new Error("Missing test-run ownership marker; reset refused");
  await connection.dropDatabase();
  await markTestDatabase(connection, target);
}
