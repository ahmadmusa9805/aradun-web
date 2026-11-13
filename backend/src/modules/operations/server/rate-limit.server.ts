import { createHmac } from "node:crypto";
import { isIP } from "node:net";
import type { Connection } from "mongoose";
import { rateLimitBucketModel } from "../models/rate-limit-bucket.model.js";
import { ServiceError } from "../../../server/errors.js";
export const LOCAL_LIMITS = Object.freeze({
  intake: { count: 10, windowMs: 600000 },
  "catalog-read": { count: 120, windowMs: 60000 },
});
export type LimitScope = keyof typeof LOCAL_LIMITS | "identity-login";
export type Admission = { allowed: boolean; retryAfter: number };
export type Limiter = {
  admit: (scope: LimitScope, peer: string) => Promise<Admission>;
};
export function validateLimitSecret(value: string | undefined): string {
  if (
    !value ||
    !/^[A-Za-z0-9_-]+$/.test(value) ||
    Buffer.from(value, "base64url").length < 32 ||
    Buffer.from(value, "base64url").toString("base64url") !== value
  )
    throw new Error("Invalid RATE_LIMIT_HASH_SECRET");
  return value;
}
export function normalizePeer(peer: string) {
  if (!isIP(peer)) throw new ServiceError("unavailable");
  if (isIP(peer) === 4) return peer;
  const canonical = new URL(`http://[${peer}]/`).hostname
    .slice(1, -1)
    .toLowerCase();
  const mapped = /^::ffff:([a-f0-9]+):([a-f0-9]+)$/.exec(canonical);
  if (mapped) {
    const high = parseInt(mapped[1]!, 16),
      low = parseInt(mapped[2]!, 16);
    return `${high >>> 8}.${high & 255}.${low >>> 8}.${low & 255}`;
  }
  return canonical;
}
/** Atomic admission; no user filters, raw identity storage or memory fallback. */
export function createSharedLimiter(
  connection: Connection,
  secret: string,
  now = () => new Date(),
  identityPolicy?: { count: number; windowMs: number },
): Limiter {
  validateLimitSecret(secret);
  const model = rateLimitBucketModel(connection);
  let verified: Promise<void> | undefined;
  function verifyIndexes() {
    return (verified ??= (async () => {
      const indexes = await model.collection
        .listIndexes({ maxTimeMS: 2000 })
        .toArray();
      const unique = indexes.some(
        (index) =>
          JSON.stringify(index.key) ===
            JSON.stringify({ scope: 1, subjectHash: 1, windowStart: 1 }) &&
          index.unique === true &&
          !index.partialFilterExpression &&
          !index.sparse &&
          !index.collation &&
          !index.hidden,
      );
      const ttl = indexes.some(
        (index) =>
          JSON.stringify(index.key) === JSON.stringify({ expiresAt: 1 }) &&
          index.expireAfterSeconds === 0 &&
          !index.partialFilterExpression &&
          !index.hidden,
      );
      if (!unique || !ttl) throw new Error("Reviewed limiter indexes required");
    })().catch((error) => {
      verified = undefined;
      throw error;
    }));
  }
  return {
    async admit(scope, peer) {
      if (scope !== "identity-login" && !Object.hasOwn(LOCAL_LIMITS, scope))
        throw new ServiceError("unavailable");
      const policy =
        scope === "identity-login" ? identityPolicy : LOCAL_LIMITS[scope];
      if (!policy) throw new ServiceError("unavailable");
      const stamp = now().getTime(),
        start = Math.floor(stamp / policy.windowMs) * policy.windowMs,
        end = start + policy.windowMs;
      const subjectHash = createHmac("sha256", Buffer.from(secret, "base64url"))
        .update(JSON.stringify(["v1", scope, normalizePeer(peer)]))
        .digest("hex");
      const key = { scope, subjectHash, windowStart: new Date(start) };
      try {
        if (connection.readyState !== 1) throw new Error("Store unavailable");
        await verifyIndexes();
        for (let attempt = 0; attempt < 3; attempt++) {
          const admitted = await model.findOneAndUpdate(
            { ...key, requestCount: { $lt: policy.count } },
            { $inc: { requestCount: 1 } },
            { returnDocument: "after", maxTimeMS: 2000, runValidators: true },
          );
          if (admitted) return { allowed: true, retryAfter: 0 };
          const existing = await model
            .findOne(key)
            .select({ requestCount: 1 })
            .maxTimeMS(2000);
          if (existing) {
            if (existing.requestCount >= policy.count)
              return {
                allowed: false,
                retryAfter: Math.max(1, Math.ceil((end - stamp) / 1000)),
              };
            continue;
          }
          try {
            const document = new model({
              ...key,
              requestCount: 1,
              expiresAt: new Date(end + 3600000),
            });
            await document.validate();
            await model.collection.insertOne(document.toObject(), {
              maxTimeMS: 2000,
            });
            return { allowed: true, retryAfter: 0 };
          } catch (error) {
            if (!(
              error &&
              typeof error === "object" &&
              "code" in error &&
              error.code === 11000
            ))
              throw error;
          }
        }
        throw new Error("Admission contention exhausted");
      } catch {
        throw new ServiceError("unavailable");
      }
    },
  };
}
