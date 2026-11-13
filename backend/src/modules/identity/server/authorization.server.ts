import type { Connection } from "mongoose";
import { ServiceError } from "../../../server/errors.js";
import { requirePermission, type Operation } from "../policies/roles.js";
import { createIdentityStore } from "./session-store.server.js";

// Accept only the ID produced by the configured express-session middleware.
// Never accept a request body's actor, roles, assurance or accessVersion.
export function createStaffAuthorization(
  connection: Connection,
  clock = () => new Date(),
) {
  const transport = createIdentityStore(connection, clock);
  return async function authorize(sessionId: string, operation: Operation) {
    let current;
    try {
      current = await transport.read(sessionId);
    } catch {
      throw new ServiceError("unavailable");
    }
    if (!current) throw new ServiceError("unauthenticated");
    const { row, actor } = current,
      now = clock().getTime();
    if (
      row.assurance !== "mfa" ||
      !row.mfaVerifiedAt ||
      row.authenticatedAt.getTime() > now ||
      row.mfaVerifiedAt < row.authenticatedAt ||
      row.mfaVerifiedAt.getTime() > now
    )
      throw new ServiceError("forbidden");
    requirePermission(actor.roles, operation);
    if (
      (operation === "staff.manage" || operation === "account.security") &&
      (now - row.authenticatedAt.getTime() > 300000 ||
        now - row.mfaVerifiedAt.getTime() > 300000)
    )
      throw new ServiceError("forbidden");
    return Object.freeze({
      id: actor._id,
      roles: Object.freeze([...actor.roles]),
      accessVersion: actor.accessVersion,
    });
  };
}
