import type { Connection } from "mongoose";
import { z } from "zod";
import { createStaffAuthorization } from "./authorization.server.js";
import { staffUserModel } from "../models/staff-user.model.js";
import { requirePermission } from "../policies/roles.js";
import { ServiceError } from "../../../server/errors.js";
export function createActorRead(
  connection: Connection,
  clock = () => new Date(),
) {
  const authorize = createStaffAuthorization(connection, clock),
    staff = staffUserModel(connection);
  const safe = z.strictObject({
    displayName: z.string().min(1).max(120),
    roles: z
      .array(z.enum(["admin", "sales", "editor"]))
      .min(1)
      .max(3),
  });
  return async (sessionId: string, area: "staff" | "content") => {
    const operation = area === "content" ? "content.preview" : "account.read",
      principal = await authorize(sessionId, operation);
    const row = await staff
      .findOne({
        _id: principal.id,
        status: "active",
        accessVersion: principal.accessVersion,
        archivedAt: { $exists: false },
      })
      .select({ displayName: 1, roles: 1 })
      .maxTimeMS(2000)
      .lean();
    if (!row) throw new ServiceError("unauthenticated");
    requirePermission(row.roles, operation);
    const parsed = safe.safeParse({
      displayName: row.displayName,
      roles: row.roles,
    });
    if (!parsed.success) throw new ServiceError("unavailable");
    return {
      ...parsed.data,
      areas: [
        "staff",
        ...(row.roles.some((role) => role === "admin" || role === "editor")
          ? ["content"]
          : []),
      ],
    };
  };
}
