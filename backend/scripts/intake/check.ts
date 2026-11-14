import { outboxEventModel } from "../../src/modules/notifications/models/outbox-event.model.js";
import { pathToFileURL } from "node:url";
import { Types, type Connection } from "mongoose";
import { loadBackendEnv } from "../../src/config/env.server.js";
import { createDatabase } from "../../src/server/db/connection.server.js";
import { checkIndexes } from "../../src/server/db/index-plan.server.js";
import {
  staffUserModel,
  LOCAL_PROVIDER,
} from "../../src/modules/identity/models/staff-user.model.js";
import { authCredentialModel } from "../../src/modules/identity/models/auth-credential.model.js";
import { resendConfigSchema } from "../../src/modules/notifications/server/resend.server.js";

/** Read-only prerequisite report, not activation authorization or proof of delivery. */
export async function inspectIntakeReadiness(
  connection: Connection,
  input: Record<string, string | undefined>,
  ownerEmail = "ahmadmusa@aradun.com",
) {
  const config = loadBackendEnv(input);
  if (config.appEnv !== "development") throw Error();
  const plan = await checkIndexes(connection);
  const databaseIndexesReady = !plan.results.some(
    (row) =>
      row.missingCollection ||
      row.missing.length ||
      row.drift.length ||
      row.extra.length,
  );
  if (config.intake?.fixedInbox) {
    const checks = {
      databaseIndexesReady,
      limiterKeyConfigured: !!config.rateLimitSecret,
      jobSecretConfigured: !!config.outbox.secret,
      privacyNoticeVersionConfigured: !!config.intake.privacyNoticeVersion,
      emailConfigurationValid:
        !!config.email && config.outbox.mode === "resend",
    };
    const deliveryQueue: Record<string, number> = {};
    for (const status of ["pending", "retry", "failed", "uncertain"] as const)
      deliveryQueue[status] = await outboxEventModel(connection)
        .countDocuments({ status })
        .maxTimeMS(2000);
    return {
      deliveryQueue,
      checks,
      missing: Object.entries(checks)
        .filter(([, ready]) => !ready)
        .map(([name]) => name),
      configurationPrerequisitesMet: Object.values(checks).every(Boolean),
      staffAccountRequired: false,
      intakeEnabled: true,
      emailConfiguredEnabled: !!config.email,
      activationApproved: false,
      deliveryVerified: false,
    };
  }
  const staff = staffUserModel(connection);
  const filter = {
    provider: LOCAL_PROVIDER,
    status: "active" as const,
    archivedAt: { $exists: false },
    roles: { $in: ["admin" as const, "sales" as const] },
  };
  const owner = await staff
    .findOne({ ...filter, emailNormalized: ownerEmail })
    .select("providerSubject")
    .maxTimeMS(2000)
    .lean();
  const ownerReady = !!(
    owner &&
    typeof owner.providerSubject === "string" &&
    /^[a-f0-9]{24}$/.test(owner.providerSubject) &&
    (await authCredentialModel(connection)
      .exists({
        _id: new Types.ObjectId(owner.providerSubject),
        email: ownerEmail,
      })
      .maxTimeMS(2000))
  );
  const ids = (input.INTAKE_STAFF_RECIPIENT_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  const validIds = ids.length === 1 && /^[a-f0-9]{24}$/.test(ids[0]!);
  const recipientReady =
    validIds &&
    !!(await staff
      .exists({ ...filter, _id: new Types.ObjectId(ids[0]) })
      .maxTimeMS(2000));
  const emailConfigurationValid = resendConfigSchema.safeParse({
    apiKey: input.RESEND_API_KEY,
    from: input.EMAIL_FROM,
    replyTo: input.EMAIL_REPLY_TO,
    notificationEmail: input.CONTACT_NOTIFICATION_EMAIL,
    sandbox: true,
  }).success;
  const checks = {
    databaseIndexesReady,
    ownerReady,
    recipientReady,
    identityConfigured: !!config.identity,
    limiterKeyConfigured: !!config.rateLimitSecret,
    jobSecretConfigured: !!config.outbox.secret,
    privacyNoticeVersionConfigured: /^[A-Za-z0-9._-]{1,100}$/.test(
      input.PRIVACY_NOTICE_VERSION ?? "",
    ),
    emailConfigurationValid,
  };
  return {
    checks,
    missing: Object.entries(checks)
      .filter(([, ready]) => !ready)
      .map(([name]) => name),
    configurationPrerequisitesMet: Object.values(checks).every(Boolean),
    intakeEnabled: !!config.intake,
    emailConfiguredEnabled: !!config.email && config.outbox.mode === "resend",
    activationApproved: false,
    deliveryVerified: false,
  };
}

async function main() {
  if (process.argv.slice(2).length) throw Error();
  const config = loadBackendEnv(process.env, ["database"]);
  if (config.appEnv !== "development") throw Error();
  const database = createDatabase(config.database!);
  try {
    const result = await inspectIntakeReadiness(
      await database.connect(),
      process.env,
    );
    console.log(JSON.stringify(result, null, 2));
    if (!result.configurationPrerequisitesMet) process.exitCode = 1;
  } finally {
    await database.close();
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  main().catch(() => {
    console.error(
      "Inquiry readiness check could not complete; check configuration and database connectivity. No credentials or raw errors logged; nothing activated.",
    );
    process.exitCode = 1;
  });
