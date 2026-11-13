import { createHash } from "node:crypto";
import type { Connection, mongo } from "mongoose";
import { registeredModels } from "./model-registry.server.js";
type IndexDescription = mongo.IndexDescription;
type IndexDescriptionInfo = mongo.IndexDescriptionInfo;

function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object")
    return `{${Object.entries(value)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, item]) => `${JSON.stringify(key)}:${canonical(item)}`)
      .join(",")}}`;
  return JSON.stringify(value) ?? "null";
}
function identity(index: IndexDescription) {
  return canonical({
    keys: Object.entries(index.key),
    unique: index.unique ?? false,
    sparse: index.sparse ?? false,
    partial: index.partialFilterExpression ?? null,
    ttl: index.expireAfterSeconds ?? null,
    collation: index.collation ?? null,
    hidden: index.hidden ?? false,
  });
}
export function expectedIndexes(connection: Connection) {
  return registeredModels(connection).map(({ name, model }) => ({
    name,
    collection: model.collection.name,
    indexes: model.schema.indexes().map(([key, options]) => {
      const numericKey: Record<string, 1 | -1> = {};
      for (const [field, direction] of Object.entries(key)) {
        if (direction !== 1 && direction !== -1)
          throw new Error("Index type requires a reviewed operational adapter");
        numericKey[field] = direction;
      }
      const index: IndexDescription = {
        key: numericKey,
        name:
          options.name ??
          Object.entries(key)
            .map(([field, direction]) => `${field}_${direction}`)
            .join("_"),
      };
      for (const option of [
        "unique",
        "sparse",
        "partialFilterExpression",
        "expireAfterSeconds",
        "collation",
        "hidden",
      ] as const)
        if (options[option] !== undefined)
          Object.assign(index, { [option]: options[option] });
      return index;
    }),
  }));
}
export async function checkIndexes(connection: Connection) {
  const results = [];
  for (const entry of expectedIndexes(connection)) {
    let actual: IndexDescriptionInfo[];
    try {
      actual = await connection
        .collection(entry.collection)
        .listIndexes({ maxTimeMS: 2000 })
        .toArray();
    } catch (error) {
      if (!(
        error &&
        typeof error === "object" &&
        "code" in error &&
        error.code === 26
      ))
        throw error;
      actual = [];
    }
    const missing = entry.indexes.filter(
      (index) => !actual.some((found) => found.name === index.name),
    );
    const drift = entry.indexes
      .filter((index) =>
        actual.some(
          (found) =>
            found.name === index.name && identity(found) !== identity(index),
        ),
      )
      .map((index) => index.name!);
    const extra = actual
      .filter(
        (index) =>
          index.name !== "_id_" &&
          !entry.indexes.some((expected) => expected.name === index.name),
      )
      .map((index) => index.name);
    results.push({
      collection: entry.collection,
      missingCollection: actual.length === 0,
      missing,
      drift,
      extra,
    });
  }
  const fingerprint = createHash("sha256")
    .update(canonical({ database: connection.name, results }))
    .digest("hex");
  return { database: connection.name, fingerprint, results };
}

/** Only explicit tooling calls this. No drops, syncIndexes, migrations or automatic repairs. */
export async function applyIndexPlan(
  connection: Connection,
  approvedFingerprint: string,
) {
  const plan = await checkIndexes(connection);
  if (
    plan.fingerprint !== approvedFingerprint ||
    plan.results.some((entry) => entry.drift.length || entry.extra.length)
  )
    throw new Error(
      "Index plan changed or requires a separately reviewed repair",
    );
  // Preflight every unique index before any additive DDL; never expose duplicate values.
  for (const entry of plan.results)
    for (const index of entry.missing) {
      if (!index.unique) continue;
      if (index.sparse || index.collation)
        throw new Error(
          "Unique index options require a reviewed preflight adapter",
        );
      const duplicate = await connection
        .collection(entry.collection)
        .aggregate(
          [
            { $match: index.partialFilterExpression ?? {} },
            {
              $group: {
                _id: Object.fromEntries(
                  Object.keys(index.key).map((field, ordinal) => [
                    `k${ordinal}`,
                    { $ifNull: [`$${field}`, null] },
                  ]),
                ),
                count: { $sum: 1 },
              },
            },
            { $match: { count: { $gt: 1 } } },
            { $limit: 1 },
            { $project: { _id: 0, count: 1 } },
          ],
          { maxTimeMS: 2000, allowDiskUse: false },
        )
        .toArray();
      if (duplicate.length)
        throw new Error(
          "Unique-index preflight failed; duplicate values require reviewed remediation",
        );
    }
  for (const entry of plan.results) {
    if (entry.missingCollection)
      await connection.createCollection(entry.collection);
    if (entry.missing.length)
      await connection
        .collection(entry.collection)
        .createIndexes(entry.missing);
  }
  const verified = await checkIndexes(connection);
  if (
    verified.results.some(
      (entry) =>
        entry.missingCollection ||
        entry.missing.length ||
        entry.drift.length ||
        entry.extra.length,
    )
  )
    throw new Error("Index verification failed");
  return verified;
}
