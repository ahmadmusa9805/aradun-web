import { randomUUID } from "node:crypto";
import {
  resendConfigSchema,
  createResendTransport,
} from "../../src/modules/notifications/server/resend.server.js";

async function main() {
  const mode = process.argv.slice(2);
  if (mode.length !== 1 || !["--check", "--send-test"].includes(mode[0]!))
    throw new Error("Use --check or --send-test");
  const parsed = resendConfigSchema.safeParse({
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.EMAIL_FROM,
    replyTo: process.env.EMAIL_REPLY_TO,
    notificationEmail: process.env.CONTACT_NOTIFICATION_EMAIL,
    sandbox: true,
  });
  if (!parsed.success)
    throw new Error(
      "Resend settings invalid or incomplete; inspect variable names in backend/.env (no values logged)",
    );
  console.log(
    "Resend configuration format PASS. Sender verification and inbox delivery are not established by this check.",
  );
  if (mode[0] === "--check") return;
  const result = await createResendTransport(parsed.data).send({
    to: parsed.data.notificationEmail,
    subject: "ARADUN transactional email integration test",
    text: "This is a single owner-requested ARADUN Resend integration test. No client data or credentials are included. Please confirm receipt in the configured notification inbox.",
    idempotencyKey: `owner-test-${randomUUID()}`,
  });
  console.log(
    `Resend test outcome: ${result.outcome}. API acceptance does not prove inbox delivery.`,
  );
  if (result.outcome !== "accepted") process.exitCode = 1;
}
main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : "Email check failed");
  process.exitCode = 1;
});
