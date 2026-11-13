import { createHash } from "node:crypto";
import { Types, type Connection, type ClientSession } from "mongoose";
import { z } from "zod";
import { parseInput } from "../../../server/validation.js";
import { ServiceError } from "../../../server/errors.js";
import { runTransaction } from "../../../server/db/transaction.server.js";
import { checkIndexes } from "../../../server/db/index-plan.server.js";
import {
  createAuditService,
  type AuditPrincipal,
} from "../../operations/server/audit.js";
import { auditPolicies } from "../../operations/audit-policy.js";
import { assertOwnedNotificationFixture } from "../../notifications/server/local-test-guard.server.js";
import { staffUserModel, LOCAL_PROVIDER } from "../models/staff-user.model.js";
import { staffSessionModel } from "../models/staff-session.model.js";
import { authCredentialModel } from "../models/auth-credential.model.js";
import { lifecycleControlModel } from "../models/lifecycle-control.model.js";
import {
  identityFactorModel,
  identityChallengeModel,
  identityRecoveryPackModel,
} from "../models/security-state.model.js";
import { createStaffAuthorization } from "./authorization.server.js";
import { assertAtlasOwnerConnection } from "./atlas-owner-target.server.js";
const oid = z
  .string()
  .regex(/^[a-f\d]{24}$/i)
  .transform((value) => value.toLowerCase());
const roles = z
  .array(z.enum(["admin", "sales", "editor"]))
  .min(1)
  .max(3)
  .refine((value) => new Set(value).size === value.length);
const command = {
  commandId: z.uuid(),
  approvalReference: z.string().regex(/^[A-Za-z0-9:_-]{1,100}$/),
};
const identity = {
  email: z
    .email()
    .max(254)
    .transform((value) => value.trim().toLowerCase()),
  displayName: z.string().trim().min(1).max(120),
  password: z.string().min(15).max(128),
};
const target = {
  ...command,
  targetId: oid,
  expectedRevision: z.number().int().nonnegative(),
  replacementId: oid.optional(),
};
export const bootstrapInput = z.strictObject({
  ...command,
  ...identity,
  confirmedOwnerEmail: z
    .email()
    .max(254)
    .transform((value) => value.trim().toLowerCase()),
});
export const provisionInput = z.strictObject({
  ...command,
  ...identity,
  roles,
});
export const rolesInput = z.strictObject({ ...target, roles });
export const statusInput = z.strictObject({
  ...target,
  status: z.enum(["active", "suspended", "deactivated"]),
});
export const revokeInput = z.strictObject({
  ...command,
  targetId: oid,
  expectedRevision: z.number().int().nonnegative(),
});
type Command =
  | z.infer<typeof bootstrapInput>
  | z.infer<typeof provisionInput>
  | z.infer<typeof rolesInput>
  | z.infer<typeof statusInput>
  | z.infer<typeof revokeInput>;

export async function createStaffLifecycle(
  connection: Connection,
  options: {
    environment: string;
    bootstrapArmed?: boolean;
    atlasOwnerBootstrapOnly?: boolean;
  },
  clock = () => new Date(),
) {
  // General lifecycle stays local. The exact Atlas exception exposes bootstrap only.
  if (options.atlasOwnerBootstrapOnly) {
    assertAtlasOwnerConnection(
      connection,
      options.environment,
      options.bootstrapArmed === true,
    );
  } else if (
    options.environment !== "development" ||
    connection.readyState !== 1 ||
    !["127.0.0.1", "localhost", "::1"].includes(connection.host)
  )
    throw new ServiceError("forbidden");
  if (/^aradun_test_[a-f0-9]{32}$/.test(connection.name))
    await assertOwnedNotificationFixture(connection, "development");
  else if (!/^aradun_development(?:_[a-z0-9]+)*$/.test(connection.name))
    throw new ServiceError("forbidden");
  const required = [
    "staffUsers",
    "staffSessions",
    "authCredentials",
    "auditEvents",
    "identityLifecycleControl",
    "identityFactors",
    "identityChallenges",
    "identityRecoveryPacks",
  ];
  const collections = await connection
    .db!.listCollections({}, { nameOnly: true })
    .toArray();
  if (required.some((name) => !collections.some((row) => row.name === name)))
    throw new ServiceError("unavailable");
  const readiness = await checkIndexes(connection);
  if (
    readiness.results.some(
      (row) =>
        required.includes(row.collection) &&
        (row.missing.length || row.drift.length || row.extra.length),
    )
  )
    throw new ServiceError("unavailable");
  const staff = staffUserModel(connection),
    credentials = authCredentialModel(connection),
    sessions = staffSessionModel(connection),
    controls = lifecycleControlModel(connection),
    factors = identityFactorModel(connection),
    challenges = identityChallengeModel(connection),
    packs = identityRecoveryPackModel(connection),
    authorize = createStaffAuthorization(connection, clock);
  const digest = (value: string) =>
    createHash("sha256").update(value).digest("hex");
  async function transaction<T>(work: (session: ClientSession) => Promise<T>) {
    try {
      return await runTransaction(connection, work);
    } catch (error) {
      if (error instanceof ServiceError) throw error;
      throw new ServiceError(
        error &&
          typeof error === "object" &&
          "code" in error &&
          error.code === 11000
          ? "conflict"
          : "unavailable",
      );
    }
  }
  async function lock(session: ClientSession) {
    await controls.updateOne(
      { _id: "staff-access" },
      { $inc: { revision: 1 } },
      { upsert: true, session, maxTimeMS: 2000 },
    );
  }
  async function audit(
    principal: AuditPrincipal,
    action: keyof typeof auditPolicies,
    id: Types.ObjectId,
    fields: string[],
    input: Command,
    session: ClientSession,
  ) {
    const service = createAuditService(connection, async (request) => {
      if (
        request.operation !== "append" ||
        request.action !== action ||
        request.targetType !== "staffUser" ||
        request.targetId !== String(id)
      )
        throw new ServiceError("forbidden");
      return principal; // Trusted actor was checked and fenced at transaction entry.
    });
    return service.append(
      {
        eventKey: `staff:${input.commandId}`,
        action,
        targetType: "staffUser",
        targetId: String(id),
        outcome: "success",
        changedFields: fields,
      },
      session,
    );
  }
  async function prepare(email: string, password: string) {
    const credential = new credentials({ email });
    await credential.setPassword(password); // Maintained-library hashing, outside replayable transaction.
    if (!credential.hash || !credential.salt)
      throw new ServiceError("unavailable");
    return {
      _id: credential._id,
      email,
      hash: credential.hash,
      salt: credential.salt,
    };
  }
  async function bootstrap(input: unknown) {
    const value = parseInput(bootstrapInput, input);
    if (
      options.atlasOwnerBootstrapOnly &&
      (value.email !== "ahmadmusa@aradun.com" ||
        value.displayName !== "Ahmad Musa Abdullah" ||
        !value.approvalReference.startsWith("owner-terminal:"))
    )
      throw new ServiceError("forbidden");
    if (!options.bootstrapArmed || value.email !== value.confirmedOwnerEmail)
      throw new ServiceError("forbidden");
    const credential = await prepare(value.email, value.password),
      id = new Types.ObjectId();
    return transaction(async (session) => {
      await lock(session);
      const control = await controls
        .findById("staff-access")
        .session(session)
        .maxTimeMS(2000);
      if (
        control?.bootstrapCompletedAt ||
        (await staff.exists({}).session(session).maxTimeMS(2000)) ||
        (await credentials.exists({}).session(session).maxTimeMS(2000))
      )
        throw new ServiceError("conflict");
      await credentials.create([credential], { session });
      await staff.create(
        [
          {
            _id: id,
            provider: LOCAL_PROVIDER,
            providerSubject: String(credential._id),
            email: value.email,
            emailNormalized: value.email,
            displayName: value.displayName,
            roles: ["admin"],
            status: "active",
            activatedAt: clock(),
            mfaPolicy: "required",
          },
        ],
        { session },
      );
      await controls.updateOne(
        { _id: "staff-access" },
        {
          $set: {
            bootstrapCompletedAt: clock(),
            bootstrapStaffUserId: id,
            bootstrapApprovalHash: digest(value.approvalReference),
          },
        },
        { session, maxTimeMS: 2000 },
      );
      const evidence = await audit(
        { kind: "system", jobKey: "local-owner-bootstrap" },
        "staff-bootstrap",
        id,
        ["provider", "providerSubject", "roles", "status", "activatedAt"],
        value,
        session,
      );
      return {
        staffUserId: String(id),
        status: "active",
        requiresMfaEnrollment: true,
        auditId: evidence.id,
      };
    });
  }
  async function activeAdmin(sid: string, session: ClientSession) {
    const actor = await authorize(sid, "staff.manage");
    // Real write fence: concurrent security revocation must conflict/recheck.
    const fenced = await staff.updateOne(
      {
        _id: actor.id,
        provider: LOCAL_PROVIDER,
        status: "active",
        roles: "admin",
        accessVersion: actor.accessVersion,
        archivedAt: { $exists: false },
      },
      { $inc: { revision: 1 } },
      { session, maxTimeMS: 2000 },
    );
    if (fenced.modifiedCount !== 1) throw new ServiceError("unauthenticated");
    return actor;
  }
  async function provision(sid: string, input: unknown) {
    if (options.atlasOwnerBootstrapOnly) throw new ServiceError("forbidden");
    const value = parseInput(provisionInput, input);
    await authorize(sid, "staff.manage"); // Refuse unauthorized expensive password preparation.
    const credential = await prepare(value.email, value.password),
      id = new Types.ObjectId();
    return transaction(async (session) => {
      await lock(session);
      const actor = await activeAdmin(sid, session);
      await credentials.create([credential], { session });
      await staff.create(
        [
          {
            _id: id,
            provider: LOCAL_PROVIDER,
            providerSubject: String(credential._id),
            email: value.email,
            emailNormalized: value.email,
            displayName: value.displayName,
            roles: value.roles,
            status: "invited",
            provisionedBy: actor.id,
            mfaPolicy: "required",
          },
        ],
        { session },
      );
      const evidence = await audit(
        {
          kind: "staff",
          staffUserId: String(actor.id),
          active: true,
          roles: actor.roles,
        },
        "staff-provision",
        id,
        ["provider", "providerSubject", "roles", "status", "provisionedBy"],
        value,
        session,
      );
      return {
        staffUserId: String(id),
        status: "invited",
        auditId: evidence.id,
      };
    });
  }
  async function invalidate(id: Types.ObjectId, session: ClientSession) {
    await sessions.updateMany(
      { staffUserId: id, revokedAt: { $exists: false } },
      { $set: { revokedAt: clock() }, $inc: { revision: 1 } },
      { session, maxTimeMS: 2000 },
    );
    await challenges.updateMany(
      { staffUserId: id, consumedAt: { $exists: false } },
      { $set: { consumedAt: clock() } },
      { session, maxTimeMS: 2000 },
    );
    await packs.updateOne(
      { staffUserId: id },
      { $set: { expiresAt: clock() } },
      { session, maxTimeMS: 2000 },
    );
    await factors.updateOne(
      { staffUserId: id },
      {
        $unset: { pendingSealed: "", pendingExpiresAt: "" },
        $inc: { revision: 1 },
      },
      { session, maxTimeMS: 2000 },
    );
  }
  async function replacement(
    id: string | undefined,
    targetId: Types.ObjectId,
    session: ClientSession,
  ) {
    if (!id || new Types.ObjectId(id).equals(targetId))
      throw new ServiceError("conflict");
    const candidate = await staff
      .findOne({
        _id: new Types.ObjectId(id),
        provider: LOCAL_PROVIDER,
        status: "active",
        roles: "admin",
        mfaPolicy: "required",
        archivedAt: { $exists: false },
      })
      .session(session)
      .maxTimeMS(2000);
    if (!candidate?.providerSubject) throw new ServiceError("conflict");
    if (
      !(await credentials
        .exists({
          _id: new Types.ObjectId(candidate.providerSubject),
          email: candidate.emailNormalized,
        })
        .session(session)
        .maxTimeMS(2000))
    )
      throw new ServiceError("conflict");
    const factor = await factors
      .exists({
        staffUserId: candidate._id,
        enabled: true,
        replacementPending: false,
        sealed: { $type: "string" },
      })
      .session(session)
      .maxTimeMS(2000);
    const pack = await packs
      .exists({
        staffUserId: candidate._id,
        accessVersion: candidate.accessVersion,
        expiresAt: { $gt: clock() },
        codes: { $elemMatch: { consumedAt: { $exists: false } } },
      })
      .session(session)
      .maxTimeMS(2000);
    if (!factor || !pack) throw new ServiceError("conflict");
  }
  async function change(
    sid: string,
    input: unknown,
    kind: "roles" | "status" | "revoke",
  ) {
    if (options.atlasOwnerBootstrapOnly) throw new ServiceError("forbidden");
    const parsed =
      kind === "roles"
        ? { kind: "roles" as const, value: parseInput(rolesInput, input) }
        : kind === "status"
          ? { kind: "status" as const, value: parseInput(statusInput, input) }
          : { kind: "revoke" as const, value: parseInput(revokeInput, input) };
    const value = parsed.value;
    await authorize(sid, "staff.manage");
    return transaction(async (session) => {
      await lock(session);
      const actor = await activeAdmin(sid, session);
      const effectiveRevision =
        value.expectedRevision + (String(actor.id) === value.targetId ? 1 : 0);
      const row = await staff
        .findOne({
          _id: new Types.ObjectId(value.targetId),
          provider: LOCAL_PROVIDER,
          archivedAt: { $exists: false },
        })
        .session(session)
        .maxTimeMS(2000);
      if (!row) throw new ServiceError("not_found");
      if (row.revision !== effectiveRevision)
        throw new ServiceError("conflict");
      if (row.status === "deactivated" && kind !== "revoke")
        throw new ServiceError("conflict");
      const nextRoles =
        parsed.kind === "roles" ? parsed.value.roles : row.roles;
      const nextStatus =
        parsed.kind === "status" ? parsed.value.status : row.status;
      if (
        row.status === "active" &&
        row.roles.includes("admin") &&
        (nextStatus !== "active" || !nextRoles.includes("admin"))
      )
        await replacement(
          parsed.kind !== "revoke" ? parsed.value.replacementId : undefined,
          row._id,
          session,
        );
      if (kind === "status") {
        const allowed =
          row.status === "invited"
            ? ["active", "deactivated"]
            : row.status === "active"
              ? ["suspended", "deactivated"]
              : row.status === "suspended"
                ? ["active", "deactivated"]
                : [];
        if (!allowed.includes(nextStatus)) throw new ServiceError("conflict");
        if (
          nextStatus === "active" &&
          (!row.providerSubject ||
            !(await credentials
              .exists({
                _id: new Types.ObjectId(row.providerSubject),
                email: row.emailNormalized,
              })
              .session(session)
              .maxTimeMS(2000)))
        )
          throw new ServiceError("conflict");
      }
      const fields =
        kind === "roles"
          ? ["roles", "accessVersion"]
          : kind === "revoke"
            ? ["accessVersion"]
            : [
                "status",
                "accessVersion",
                ...(nextStatus === "active" ? ["activatedAt"] : []),
                ...(nextStatus === "deactivated"
                  ? ["deactivatedAt", "deactivatedBy"]
                  : []),
              ];
      const changed = await staff.updateOne(
        { _id: row._id, revision: effectiveRevision },
        {
          $set: {
            ...(kind === "roles" ? { roles: nextRoles } : {}),
            ...(kind === "status" ? { status: nextStatus } : {}),
            ...(kind === "status" && nextStatus === "active"
              ? { activatedAt: clock() }
              : {}),
            ...(kind === "status" && nextStatus === "deactivated"
              ? { deactivatedAt: clock(), deactivatedBy: actor.id }
              : {}),
          },
          $inc: { accessVersion: 1, revision: 1 },
        },
        { session, runValidators: true, maxTimeMS: 2000 },
      );
      if (changed.modifiedCount !== 1) throw new ServiceError("conflict");
      await invalidate(row._id, session);
      // Intake is the only implemented assignment owner. Do not fabricate future counts.
      const assignedInquiries = await connection
        .collection("inquiries")
        .countDocuments({ assignedTo: row._id }, { session, maxTimeMS: 2000 });
      const action =
        kind === "roles"
          ? "role-change"
          : kind === "status"
            ? "staff-status"
            : "staff-revoke";
      const evidence = await audit(
        {
          kind: "staff",
          staffUserId: String(actor.id),
          active: true,
          roles: actor.roles,
        },
        action,
        row._id,
        fields,
        value,
        session,
      );
      return {
        staffUserId: String(row._id),
        status: nextStatus,
        revision: effectiveRevision + 1,
        accessVersion: row.accessVersion + 1,
        reassignment: {
          assignedInquiries,
          contactsOpportunitiesTasks:
            "not-implemented; review before those modules activate",
        },
        auditId: evidence.id,
      };
    });
  }
  async function inspect(sid: string, input: unknown) {
    if (options.atlasOwnerBootstrapOnly) throw new ServiceError("forbidden");
    const value = parseInput(z.strictObject({ targetId: oid }), input);
    await authorize(sid, "staff.manage");
    const row = await staff
      .findOne({
        _id: new Types.ObjectId(value.targetId),
        provider: LOCAL_PROVIDER,
        archivedAt: { $exists: false },
      })
      .select({ roles: 1, status: 1, revision: 1, accessVersion: 1 })
      .maxTimeMS(2000)
      .lean();
    if (!row) throw new ServiceError("not_found");
    return {
      staffUserId: String(row._id),
      roles: row.roles,
      status: row.status,
      revision: row.revision,
      accessVersion: row.accessVersion,
    };
  }
  return Object.freeze({
    inspect,
    bootstrap,
    provision,
    setRoles: (sid: string, input: unknown) => change(sid, input, "roles"),
    setStatus: (sid: string, input: unknown) => change(sid, input, "status"),
    revoke: (sid: string, input: unknown) => change(sid, input, "revoke"),
  });
}
