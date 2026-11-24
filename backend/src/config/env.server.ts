import { resendConfigSchema } from "../modules/notifications/server/resend.server.js";
import { validateLimitSecret } from "../modules/operations/server/rate-limit.server.js";
import { ConnectionString } from "mongodb-connection-string-url";
import { z } from "zod";
import type { DatabaseConfig } from "../server/db/connection.server.js";

type Environment = Record<string, string | undefined>;
export type RequiredFeature = "database" | "authentication" | "notifications";
const tierSchema = z.enum(["development", "staging", "production"]);
const portSchema = z.coerce.number().int().min(1024).max(65535);

function fail(name: string): never {
  throw new Error(`Invalid or missing configuration: ${name}`);
}

function origin(value: string | undefined, name: string, hosted: boolean) {
  try {
    const url = new URL(value ?? "");
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash ||
      (hosted && url.protocol !== "https:")
    )
      return fail(name);
    return url.origin;
  } catch {
    return fail(name);
  }
}

export function loadBackendEnv(
  input: Environment,
  required: readonly RequiredFeature[] = [],
) {
  const hostedRuntime = input.NODE_ENV === "production";
  const tier = tierSchema.safeParse(
    input.APP_ENV ?? (hostedRuntime ? undefined : "development"),
  );
  if (!tier.success) fail("APP_ENV");
  if (hostedRuntime && tier.data === "development") fail("APP_ENV");
  const hosted = tier.data !== "development";
  const publicReleaseId = input.PUBLIC_RELEASE_ID;
  if (
    publicReleaseId !== undefined &&
    !/^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/.test(publicReleaseId)
  )
    fail("PUBLIC_RELEASE_ID");
  const appUrl = origin(
    input.APP_URL ?? (hosted ? undefined : "http://127.0.0.1:3000"),
    "APP_URL",
    hosted,
  );
  const port = portSchema.safeParse(
    input.PORT ?? (hosted ? undefined : "4000"),
  );
  if (!port.success) fail("PORT");
  const allowed = input.ALLOWED_ORIGINS ?? (hosted ? undefined : appUrl);
  if (!allowed) fail("ALLOWED_ORIGINS");
  const allowedOrigins = allowed
    .split(",")
    .map((value) => origin(value.trim(), "ALLOWED_ORIGINS", hosted));
  if (!allowedOrigins.includes(appUrl)) fail("ALLOWED_ORIGINS");
  if (input.ANALYTICS_ENABLED && input.ANALYTICS_ENABLED !== "false")
    fail("ANALYTICS_ENABLED (not implemented)");
  const authProvider = input.AUTH_PROVIDER ?? "disabled";
  if (!["disabled", "aradun-local"].includes(authProvider))
    fail("AUTH_PROVIDER");
  let identity:
    | {
        secret: string;
        localPasswordOnly?: boolean;
        loginPolicy: { count: number; windowMs: number };
        security?: { sealingKey: string };
      }
    | undefined;
  if (authProvider === "aradun-local") {
    if (tier.data !== "development")
      fail("AUTH_PROVIDER (local disposition only)");
    const secret = input.AUTH_SESSION_SECRET;
    if (
      !secret ||
      !/^[A-Za-z0-9_-]+$/.test(secret) ||
      Buffer.from(secret, "base64url").length < 32 ||
      Buffer.from(secret, "base64url").toString("base64url") !== secret
    )
      fail("AUTH_SESSION_SECRET");
    const count = z.coerce
      .number()
      .int()
      .min(1)
      .max(100)
      .safeParse(input.AUTH_LOGIN_LIMIT);
    const seconds = z.coerce
      .number()
      .int()
      .min(60)
      .max(3600)
      .safeParse(input.AUTH_LOGIN_WINDOW_SECONDS);
    if (!count.success || !seconds.success || !input.RATE_LIMIT_HASH_SECRET)
      fail("AUTH_LOGIN_LIMIT/AUTH_LOGIN_WINDOW_SECONDS/RATE_LIMIT_HASH_SECRET");
    identity = {
      secret,
      loginPolicy: { count: count.data, windowMs: seconds.data * 1000 },
    };
  }
  if (
    input.AUTH_SECURITY_ENABLED &&
    !["true", "false"].includes(input.AUTH_SECURITY_ENABLED)
  )
    fail("AUTH_SECURITY_ENABLED");
  if (input.AUTH_SECURITY_ENABLED === "true") {
    const key = input.AUTH_FACTOR_SEALING_KEY;
    if (
      !identity ||
      !key ||
      !/^[A-Za-z0-9_-]+$/.test(key) ||
      Buffer.from(key, "base64url").length < 32 ||
      Buffer.from(key, "base64url").toString("base64url") !== key ||
      key === identity.secret ||
      key === input.RATE_LIMIT_HASH_SECRET
    )
      fail("AUTH_FACTOR_SEALING_KEY (separate private key required)");
    identity.security = { sealingKey: key };
  }
  if (
    input.AUTH_LOCAL_PASSWORD_ONLY &&
    !["true", "false"].includes(input.AUTH_LOCAL_PASSWORD_ONLY)
  )
    fail("AUTH_LOCAL_PASSWORD_ONLY");
  if (input.AUTH_LOCAL_PASSWORD_ONLY === "true") {
    if (tier.data !== "development" || hostedRuntime || !identity)
      fail("AUTH_LOCAL_PASSWORD_ONLY (configured local development only)");
    identity.localPasswordOnly = true;
  }
  if (required.includes("authentication") && !identity)
    fail("authentication (disabled)");
  const outboxMode = input.OUTBOX_MODE ?? "disabled";
  if (!["disabled", "local-test", "resend"].includes(outboxMode))
    fail("OUTBOX_MODE");
  const jobSecret = input.JOB_TRIGGER_SECRET;
  if (
    jobSecret &&
    (jobSecret.length < 32 || jobSecret.length > 256 || /\s/.test(jobSecret))
  )
    fail("JOB_TRIGGER_SECRET");
  if (
    outboxMode === "local-test" &&
    (input.NODE_ENV !== "test" ||
      tier.data !== "development" ||
      !jobSecret ||
      (input.EMAIL_PROVIDER ?? "disabled") !== "disabled")
  )
    fail("OUTBOX_MODE (owned synthetic test execution only)");
  if (
    required.includes("notifications") &&
    !["local-test", "resend"].includes(outboxMode)
  )
    fail("notifications (live adapter implementation pending)");

  let database: DatabaseConfig | undefined;
  if (input.MONGODB_URI) {
    try {
      const uri = new ConnectionString(input.MONGODB_URI);
      const name =
        input.MONGODB_DB_NAME ??
        (decodeURIComponent(uri.pathname.slice(1)) || `aradun_${tier.data}`);
      if (!new RegExp(`^aradun_${tier.data}(?:_[a-z0-9]+)*$`).test(name))
        fail("MONGODB_DB_NAME");
      if (
        uri.pathname !== "/" &&
        decodeURIComponent(uri.pathname.slice(1)) !== name
      )
        fail("MONGODB_DB_NAME");
      if (!uri.hosts.length || uri.hash) fail("MONGODB_URI");
      for (const [key, value] of uri.searchParams) {
        const option = key.toLowerCase();
        if (
          hosted &&
          ((["tls", "ssl"].includes(option) && value === "false") ||
            ([
              "tlsinsecure",
              "tlsallowinvalidcertificates",
              "tlsallowinvalidhostnames",
            ].includes(option) &&
              value !== "false"))
        )
          fail("MONGODB_URI TLS");
      }
      if (
        hosted &&
        !uri.isSRV &&
        uri.searchParams.get("tls") !== "true" &&
        uri.searchParams.get("ssl") !== "true"
      )
        fail("MONGODB_URI TLS");
      const pool = z.coerce
        .number()
        .int()
        .min(1)
        .max(20)
        .safeParse(input.DB_MAX_POOL_SIZE ?? "5");
      const selection = z.coerce
        .number()
        .int()
        .min(100)
        .max(30_000)
        .safeParse(input.DB_SERVER_SELECTION_TIMEOUT_MS ?? "5000");
      const queue = z.coerce
        .number()
        .int()
        .min(100)
        .max(10_000)
        .safeParse(input.DB_WAIT_QUEUE_TIMEOUT_MS ?? "2000");
      if (!pool.success || !selection.success || !queue.success)
        fail("database pool/timeouts");
      database = Object.freeze({
        uri: input.MONGODB_URI,
        name,
        maxPoolSize: pool.data,
        serverSelectionTimeoutMS: selection.data,
        waitQueueTimeoutMS: queue.data,
      });
    } catch {
      fail("MONGODB_URI/MONGODB_DB_NAME");
    }
  } else if (required.includes("database") || input.MONGODB_DB_NAME)
    fail("MONGODB_URI");

  const provider = input.EMAIL_PROVIDER ?? "disabled";
  if (!["disabled", "sink", "resend"].includes(provider))
    fail("EMAIL_PROVIDER");
  let email: ReturnType<typeof resendConfigSchema.parse> | undefined;
  const emailDeliveryMode = input.EMAIL_DELIVERY_MODE ?? "sandbox";
  if (!["sandbox", "recipients"].includes(emailDeliveryMode))
    fail("EMAIL_DELIVERY_MODE");
  if (tier.data === "staging" && emailDeliveryMode === "recipients")
    fail("EMAIL_DELIVERY_MODE (staging must use sandbox)");
  if (provider === "resend") {
    const parsed = resendConfigSchema.safeParse({
      apiKey: input.RESEND_API_KEY,
      from: input.EMAIL_FROM,
      replyTo: input.EMAIL_REPLY_TO,
      notificationEmail: input.CONTACT_NOTIFICATION_EMAIL,
      sandbox: tier.data !== "production" && emailDeliveryMode !== "recipients",
    });
    if (!parsed.success)
      fail(
        "Resend settings (RESEND_API_KEY/EMAIL_FROM/EMAIL_REPLY_TO/CONTACT_NOTIFICATION_EMAIL)",
      );
    email = parsed.data;
  }
  if (outboxMode === "resend" && (!email || !jobSecret))
    fail("OUTBOX_MODE (Resend and authenticated job trigger required)");
  if (
    tier.data !== "production" &&
    input.EMAIL_SANDBOX_RECIPIENT &&
    !/^[^@\s]+@[^@\s]+\.invalid$/.test(input.EMAIL_SANDBOX_RECIPIENT)
  )
    fail("EMAIL_SANDBOX_RECIPIENT");
  const rateLimitSecret = input.RATE_LIMIT_HASH_SECRET
    ? validateLimitSecret(input.RATE_LIMIT_HASH_SECRET)
    : undefined;
  if (
    input.PUBLIC_INTAKE_ENABLED &&
    !["true", "false"].includes(input.PUBLIC_INTAKE_ENABLED)
  )
    fail("PUBLIC_INTAKE_ENABLED");
  if (
    input.INTAKE_NOTIFICATION_MODE &&
    !["staff", "inbox"].includes(input.INTAKE_NOTIFICATION_MODE)
  )
    fail("INTAKE_NOTIFICATION_MODE");
  const intake =
    input.PUBLIC_INTAKE_ENABLED === "true"
      ? {
          fixedInbox: input.INTAKE_NOTIFICATION_MODE === "inbox",
          privacyNoticeVersion: input.PRIVACY_NOTICE_VERSION ?? "",
          staffRecipientIds: (input.INTAKE_STAFF_RECIPIENT_IDS ?? "")
            .split(",")
            .map((value) => value.trim())
            .filter(Boolean),
        }
      : undefined;
  if (
    intake &&
    (!rateLimitSecret ||
      !z
        .array(z.string().regex(/^[a-f0-9]{24}$/))
        .min(intake.fixedInbox ? 0 : 1)
        .max(intake.fixedInbox ? 0 : 10)
        .safeParse(intake.staffRecipientIds).success ||
      !/^[A-Za-z0-9._-]{1,100}$/.test(intake.privacyNoticeVersion))
  )
    fail(
      "PUBLIC_INTAKE_ENABLED/PRIVACY_NOTICE_VERSION (local disposition only)",
    );
  if (
    outboxMode === "resend" &&
    (!intake || (!intake.fixedInbox && intake.staffRecipientIds.length !== 1))
  )
    fail("Resend requires active intake and one reviewed staff recipient");
  if (intake?.fixedInbox && (!email || outboxMode !== "resend"))
    fail("Inbox intake requires configured Resend delivery");
  return Object.freeze({
    publicReleaseId,
    email,
    intake,
    identity,
    appEnv: tier.data,
    appUrl,
    port: port.data,
    allowedOrigins: Object.freeze(allowedOrigins),
    database,
    outbox: Object.freeze({
      mode: outboxMode as "disabled" | "local-test" | "resend",
      ...(jobSecret ? { secret: jobSecret } : {}),
    }),
    rateLimitSecret,
    analyticsEnabled: false as const,
  });
}
export type BackendEnv = ReturnType<typeof loadBackendEnv>;
