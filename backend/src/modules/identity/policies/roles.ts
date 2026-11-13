import { z } from "zod";
import { ServiceError } from "../../../server/errors.js";

export type StaffRole = "admin" | "sales" | "editor";
export type Operation =
  | "crm.read"
  | "crm.write"
  | "crm.assign"
  | "crm.correct"
  | "content.draft"
  | "content.preview"
  | "content.seo"
  | "content.publish"
  | "content.indexing"
  | "staff.manage"
  | "audit.read"
  | "account.read"
  | "account.update"
  | "account.security";
const grants: Record<StaffRole, readonly Operation[]> = {
  admin: [
    "crm.read",
    "crm.write",
    "crm.assign",
    "crm.correct",
    "content.draft",
    "content.preview",
    "content.seo",
    "content.publish",
    "content.indexing",
    "staff.manage",
    "audit.read",
    "account.read",
    "account.update",
    "account.security",
  ],
  sales: [
    "crm.read",
    "crm.write",
    "account.read",
    "account.update",
    "account.security",
  ],
  editor: [
    "content.draft",
    "content.preview",
    "content.seo",
    "account.read",
    "account.update",
    "account.security",
  ],
};
export function requirePermission(
  roles: readonly string[],
  operation: Operation,
) {
  if (
    !roles.some(
      (role) =>
        Object.hasOwn(grants, role) &&
        grants[role as StaffRole].includes(operation),
    )
  )
    throw new ServiceError("forbidden");
}
// No role/status/provider fields are accepted, even for an Admin's own account.
export const ownAccountInput = z
  .strictObject({
    displayName: z.string().trim().min(1).max(120).optional(),
    preferredTimezone: z
      .string()
      .max(100)
      .refine((value) => {
        try {
          new Intl.DateTimeFormat("en", { timeZone: value });
          return true;
        } catch {
          return false;
        }
      })
      .optional(),
  })
  .refine((value) => Object.keys(value).length > 0);
