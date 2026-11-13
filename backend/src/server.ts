import { createInquiryMailWorker } from "./modules/notifications/server/inquiry-mail.server.js";
import { createSubmissionService } from "./modules/intake/server/submission.service.server.js";
import { createIdentityRouter } from "./modules/identity/identity.routes.js";
import { createSharedLimiter } from "./modules/operations/server/rate-limit.server.js";
import { createApp } from "@/app.js";
import { loadBackendEnv } from "./config/env.server.js";
import { createDatabase } from "./server/db/connection.server.js";
import { logOperationalFailure } from "./modules/operations/server/logging.js";
import { randomUUID } from "node:crypto";

async function main() {
  if (!process.env.MONGODB_URI) {
    if (process.env.NODE_ENV !== "production")
      console.error(
        "Backend cannot start: MONGODB_URI is missing. Copy backend/.env.example to backend/.env, set your MongoDB replica-set URI, and restart npm run backend.",
      );
    throw new Error("Missing database configuration");
  }
  const config = loadBackendEnv(process.env, ["database"]);
  const database = createDatabase(config.database!);
  try {
    await database.connect();
  } catch {
    await database.close();
    throw new Error("Database startup failed");
  }
  const limiter =
    config.rateLimitSecret && config.appEnv === "development"
      ? createSharedLimiter(await database.connect(), config.rateLimitSecret)
      : undefined;
  const identity = config.identity
    ? await createIdentityRouter(await database.connect(), {
        ...config.identity,
        rateSecret: config.rateLimitSecret!,
        origins: config.allowedOrigins,
      })
    : undefined;
  const intake = config.intake
    ? await createSubmissionService(await database.connect(), {
        secret: config.rateLimitSecret!,
        staffRecipientIds: config.intake.staffRecipientIds,
        policy: {
          privacyAcknowledgementRequired: true,
          privacyNoticeVersion: config.intake.privacyNoticeVersion,
        },
      })
    : undefined;
  const outbox =
    config.outbox.mode === "resend" && config.email && config.intake
      ? await createInquiryMailWorker(
          await database.connect(),
          config.email,
          config.appEnv,
          config.intake.staffRecipientIds,
          config.appUrl,
        )
      : undefined;
  const app = createApp(config, {
    ...(outbox ? { outbox } : {}),
    ...(intake ? { intake } : {}),
    ...(limiter ? { limiter } : {}),
    ...(identity ? { identity } : {}),
  });
  const server = app.listen(config.port, "127.0.0.1", () => {
    console.info(`ARADUN API listening at http://127.0.0.1:${config.port}`);
  });
  let stopping = false;
  async function shutdown(failed = false) {
    if (stopping) return;
    stopping = true;
    const deadline = setTimeout(() => process.exit(1), 10_000);
    deadline.unref();
    server.close(async () => {
      try {
        await database.close();
        process.exitCode = failed ? 1 : 0;
      } catch {
        process.exitCode = 1;
      } finally {
        clearTimeout(deadline);
      }
    });
  }
  server.on("error", () => {
    logOperationalFailure({
      code: "operation_failed",
      correlationId: randomUUID(),
    });
    void shutdown(true);
  });
  for (const signal of ["SIGINT", "SIGTERM"] as const)
    process.on(signal, () => {
      void shutdown();
    });
}

main().catch(() => {
  logOperationalFailure({
    code: "dependency_unavailable",
    correlationId: randomUUID(),
  });
  process.exitCode = 1;
});
