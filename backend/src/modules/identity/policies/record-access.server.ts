import { Types } from "mongoose";
import { ServiceError } from "../../../server/errors.js";
import { requirePermission, type Operation } from "./roles.js";

// Actor and record values here are server-loaded, never deserialized client claims.
export type PolicyActor = { id: Types.ObjectId; roles: readonly string[] };
export type SalesResource = "inquiry" | "opportunity" | "contact";
export type ScopedRecord = {
  _id: Types.ObjectId;
  assignedTo?: Types.ObjectId | null;
  ownerId?: Types.ObjectId | null;
  contactId?: Types.ObjectId | null;
};
const ownerField = {
  inquiry: "assignedTo",
  opportunity: "ownerId",
  contact: "ownerId",
} as const;
export function objectId(value: unknown) {
  if (typeof value !== "string" || !/^[a-f\d]{24}$/i.test(value))
    throw new ServiceError("not_found");
  return new Types.ObjectId(value);
}
// Use the identical predicate for list/count/search/read/update. Never spread client
// filters into it: compose validated feature filters with $and instead.
export function salesScope(
  actor: PolicyActor,
  resource: SalesResource,
  operation: "crm.read" | "crm.write" = "crm.read",
) {
  if (!Object.hasOwn(ownerField, resource)) throw new ServiceError("forbidden");
  requirePermission(actor.roles, operation);
  return actor.roles.includes("admin")
    ? {}
    : { [ownerField[resource]]: actor.id };
}
export function scopedRecordFilter(
  actor: PolicyActor,
  resource: SalesResource,
  id: unknown,
  operation: "crm.read" | "crm.write" = "crm.read",
) {
  return {
    $and: [{ _id: objectId(id) }, salesScope(actor, resource, operation)],
  };
}
export function requireRecord(
  actor: PolicyActor,
  resource: SalesResource,
  record: ScopedRecord | null,
  operation: "crm.read" | "crm.write" = "crm.read",
) {
  salesScope(actor, resource, operation);
  const owner = record?.[ownerField[resource]];
  if (!record || (!actor.roles.includes("admin") && !owner?.equals(actor.id)))
    throw new ServiceError("not_found");
}
// An assigned task is insufficient: callers must load its exact target and apply
// this predicate per target before listing/counting/searching/mutating tasks.
export function taskScope(
  actor: PolicyActor,
  kind: SalesResource,
  targetId: unknown,
  target: ScopedRecord | null,
  operation: "crm.read" | "crm.write" = "crm.read",
) {
  const id = objectId(targetId);
  requireRecord(actor, kind, target, operation);
  if (!target!._id.equals(id)) throw new ServiceError("not_found");
  return {
    "target.kind": kind,
    "target.id": id,
    ...(actor.roles.includes("admin") ? {} : { assignedTo: actor.id }),
  };
}
// Linked contact context is a label, never a grant to contact history/other deals.
// The caller supplies the database-loaded assigned inquiry/opportunity, not a body.
export function linkedContactFilter(
  actor: PolicyActor,
  kind: "inquiry" | "opportunity",
  target: ScopedRecord | null,
  contactId: unknown,
) {
  requireRecord(actor, kind, target);
  const id = objectId(contactId);
  if (!target!.contactId?.equals(id)) throw new ServiceError("not_found");
  return { _id: id };
}
export function linkedContactDto(record: {
  _id: Types.ObjectId;
  displayName: string;
}) {
  return { id: String(record._id), displayName: record.displayName };
}
export const linkedContactProjection = { _id: 1, displayName: 1 } as const;
export function ownAccountFilter(
  actor: PolicyActor,
  targetId: unknown,
  operation: Operation = "account.read",
) {
  if (
    !["account.read", "account.update", "account.security"].includes(operation)
  )
    throw new ServiceError("forbidden");
  requirePermission(actor.roles, operation);
  const id = objectId(targetId);
  if (!id.equals(actor.id)) throw new ServiceError("not_found");
  return { _id: actor.id };
}
