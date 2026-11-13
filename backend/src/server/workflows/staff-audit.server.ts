import type { Connection } from "mongoose";
import { createStaffAuthorization } from "../../modules/identity/server/authorization.server.js";
import { createAuditService } from "../../modules/operations/server/audit.js";
import { ServiceError } from "../errors.js";

// Operational alternative to a viewer; no HTTP route or conditional UI activated.
// Session ID is supplied by the configured server middleware, never a body field.
export function createStaffAuditReader(
  connection: Connection,
  sessionId: () => string,
  clock = () => new Date(),
) {
  const authorize = createStaffAuthorization(connection, clock);
  const service = createAuditService(connection, async (request) => {
    // Audit append stays with the owning authorized transactional operation.
    if (request.operation !== "read") throw new ServiceError("forbidden");
    const actor = await authorize(sessionId(), "audit.read");
    return {
      kind: "staff",
      staffUserId: String(actor.id),
      active: true,
      roles: actor.roles,
    };
  });
  return Object.freeze({ read: service.read });
}
