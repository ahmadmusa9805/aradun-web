import { randomUUID } from "node:crypto";
import type { ClientSession, Connection } from "mongoose";
import { z } from "zod";
import { auditEventModel } from "../models/audit-event.js";
import { parseInput } from "../../../server/validation.js";
import { objectIdSchema } from "../../../server/db/value-schemas.server.js";
import { ServiceError } from "../../../server/errors.js";
import { logOperationalFailure } from "./logging.js";

import { auditPolicies as policies, auditActions } from "../audit-policy.js";

const inputSchema = z
  .strictObject({
    eventKey: z.string().regex(/^[a-zA-Z0-9:_-]{1,180}$/),
    action: z.enum(auditActions),
    targetType: z.enum(["article", "staffUser", "opportunity"]),
    targetId: objectIdSchema,
    outcome: z.enum(["success", "denied", "failed"]),
    correlationId: z.uuid().optional(),
    changedFields: z.array(z.string().max(100)).max(50).default([]),
    reasonCode: z
      .enum([
        "permission_denied",
        "conflict",
        "dependency_unavailable",
        "validation_failed",
      ])
      .optional(),
  })
  .superRefine((value, context) => {
    const policy = policies[value.action];
    if (
      value.targetType !== policy.targetType ||
      !value.changedFields.every((field) =>
        (policy.fields as readonly string[]).includes(field),
      ) ||
      new Set(value.changedFields).size !== value.changedFields.length
    )
      context.addIssue({ code: "custom", message: "Invalid audit operation" });
  });
export type AuditPrincipal =
  | {
      kind: "staff";
      staffUserId: string;
      active: boolean;
      roles: readonly string[];
    }
  | { kind: "system"; jobKey: string };
export type AuditAuthorization = (
  request:
    | { operation: "read" }
    | {
        operation: "append";
        action: string;
        targetType: string;
        targetId: string;
      },
) => Promise<AuditPrincipal | undefined>;

/** Authorizer must verify current backend identity and record scope on every call.
 * No default grants. M03 binds this callback to real sessions; no public route exists.
 */
export function createAuditService(
  connection: Connection,
  authorize: AuditAuthorization,
  log: typeof logOperationalFailure = logOperationalFailure,
) {
  const model = auditEventModel(connection);
  function actor(principal: AuditPrincipal | undefined) {
    if (!principal || (principal.kind === "staff" && !principal.active))
      throw new ServiceError("forbidden");
    if (principal.kind === "staff")
      return {
        kind: "staff" as const,
        staffUserId: objectIdSchema.parse(principal.staffUserId),
      };
    return {
      kind: "system" as const,
      jobKey: z
        .string()
        .regex(/^[a-z0-9_-]{1,100}$/)
        .parse(principal.jobKey),
    };
  }
  async function append(input: unknown, session?: ClientSession) {
    const value = parseInput(inputSchema, input);
    const principal = await authorize({
      operation: "append",
      action: value.action,
      targetType: value.targetType,
      targetId: value.targetId,
    });
    const trustedActor = actor(principal);
    if (
      value.outcome === "success" ? !session?.inTransaction() : Boolean(session)
    )
      throw new ServiceError("invalid_input");
    const correlationId = value.correlationId ?? randomUUID();
    try {
      const existing = await model
        .findOne({ eventKey: value.eventKey })
        .session(session ?? null)
        .maxTimeMS(2000)
        .lean();
      if (existing) {
        const sameActor =
          existing.actor.kind === trustedActor.kind &&
          (trustedActor.kind === "staff"
            ? String(existing.actor.staffUserId) === trustedActor.staffUserId
            : existing.actor.jobKey === trustedActor.jobKey);
        if (
          !sameActor ||
          existing.action !== value.action ||
          existing.targetId !== value.targetId ||
          existing.targetType !== value.targetType ||
          existing.outcome !== value.outcome ||
          JSON.stringify(existing.changedFields) !==
            JSON.stringify(value.changedFields) ||
          (existing.reasonCode ?? undefined) !== value.reasonCode ||
          (value.correlationId &&
            existing.correlationId !== value.correlationId)
        )
          throw new ServiceError("conflict");
        return {
          id: String(existing._id),
          correlationId: existing.correlationId,
        };
      }
      // insertMany validates but avoids tracking hydrated save state during abort.
      const [saved] = await model.insertMany(
        [
          {
            eventKey: value.eventKey,
            action: value.action,
            targetType: value.targetType,
            targetId: value.targetId,
            outcome: value.outcome,
            changedFields: value.changedFields,
            ...(value.reasonCode ? { reasonCode: value.reasonCode } : {}),
            actor: trustedActor,
            correlationId,
            safeSummary: `${policies[value.action].summary}: ${value.outcome}`,
            retentionClass:
              value.outcome === "success"
                ? ("business-change" as const)
                : ("security" as const),
          },
        ],
        session ? { session } : {},
      );
      return { id: String(saved!._id), correlationId };
    } catch (error) {
      if (error instanceof ServiceError) throw error;
      log({ code: "audit_write_failed", correlationId, severity: "error" });
      throw new ServiceError("unavailable");
    }
  }
  async function read(input: unknown) {
    const principal = await authorize({ operation: "read" });
    actor(principal);
    if (principal?.kind !== "staff" || !principal.roles.includes("admin"))
      throw new ServiceError("forbidden");
    const query = parseInput(
      z.strictObject({
        targetType: z.enum(["article", "staffUser", "opportunity"]),
        targetId: objectIdSchema,
        limit: z.number().int().min(1).max(100).default(25),
      }),
      input,
    );
    const records = await model
      .find({ targetType: query.targetType, targetId: query.targetId })
      .select({
        _id: 1,
        action: 1,
        outcome: 1,
        occurredAt: 1,
        correlationId: 1,
        changedFields: 1,
        safeSummary: 1,
        reasonCode: 1,
      })
      .sort({ occurredAt: -1, _id: -1 })
      .limit(query.limit)
      .maxTimeMS(2000)
      .lean();
    return records.map((record) => ({
      id: String(record._id),
      action: record.action as string,
      outcome: record.outcome as string,
      occurredAt: (record.occurredAt as Date).toISOString(),
      correlationId: record.correlationId as string,
      changedFields: record.changedFields as string[],
      safeSummary: record.safeSummary as string,
      ...(record.reasonCode ? { reasonCode: record.reasonCode as string } : {}),
    }));
  }
  return Object.freeze({ append, read });
}
