import { createHmac, timingSafeEqual } from "node:crypto";
import { ServiceError } from "../../../server/errors.js";
/** Bounded, authenticated, PII-free receipt; never an authorization grant or analytics event. */
export function createReceiptCodec(secret: string, clock = () => Date.now()) {
  const mac = (body: string) =>
    createHmac("sha256", secret)
      .update(`public-receipt:${body}`)
      .digest("base64url");
  return {
    issue(reference: string, type: string) {
      const body = `${reference}.${type}.${clock() + 15 * 60 * 1000}`;
      return `${body}.${mac(body)}`;
    },
    read(token: unknown) {
      if (typeof token !== "string" || token.length > 250)
        throw new ServiceError("not_found");
      const parts = token.split(".");
      if (parts.length !== 4) throw new ServiceError("not_found");
      const [reference, type, expiry, signature] = parts;
      const body = `${reference}.${type}.${expiry}`,
        expected = mac(body);
      if (
        !/^ARQ-[0-9]{4}-[a-f0-9]{24}$/.test(reference!) ||
        !["contact", "quote", "consultation"].includes(type!) ||
        !/^[0-9]{13}$/.test(expiry!) ||
        Number(expiry) <= clock() ||
        Number(expiry) > clock() + 15 * 60 * 1000 ||
        !signature ||
        !/^[A-Za-z0-9_-]{43}$/.test(signature) ||
        signature.length !== expected.length ||
        !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
      )
        throw new ServiceError("not_found");
      return {
        reference: reference!,
        type: type!,
        delivery: "queued" as const,
        bookingConfirmed: false as const,
      };
    },
  };
}
