import type { Connection } from "mongoose";
import { inquiryModel } from "../../intake/models/inquiry.model.js";
import { staffUserModel } from "../../identity/models/staff-user.model.js";
import { createResendOutboxWorker } from "./outbox.service.server.js";
import { createResendTransport, type ResendConfig } from "./resend.server.js";

export async function createInquiryMailWorker(
  connection: Connection,
  config: ResendConfig,
  appEnv: string,
  staffIds: readonly string[],
  appUrl: string,
  fetcher: typeof fetch = fetch,
) {
  const origin = new URL(appUrl);
  if (
    origin.origin !== appUrl ||
    origin.username ||
    origin.password ||
    (origin.protocol !== "https:" &&
      !(
        appEnv === "development" &&
        origin.protocol === "http:" &&
        ["127.0.0.1", "localhost", "[::1]"].includes(origin.hostname)
      ))
  )
    throw new Error("Reviewed website origin required for inquiry links");
  if (staffIds.length !== 1 || !/^[a-f0-9]{24}$/.test(staffIds[0]!))
    throw new Error(
      "One reviewed staff recipient required for fixed inbox delivery",
    );
  return createResendOutboxWorker(connection, {
    appEnv,
    transport: createResendTransport(config, fetcher),
    eligible: async (event) => {
      if (
        event.aggregateType !== "inquiry" ||
        event.templateVersion !== 1 ||
        event.templateKey !== event.kind
      )
        return { eligible: false };
      const inquiry = await inquiryModel(connection)
        .findOne({
          _id: event.aggregateId,
          archivedAt: { $exists: false },
          redactedAt: { $exists: false },
        })
        .select("reference type submittedIdentity.emailNormalized")
        .maxTimeMS(2000)
        .lean();
      if (
        !inquiry ||
        inquiry.reference !== event.payload.reference ||
        inquiry.type !== event.payload.inquiryType
      )
        return { eligible: false };
      if (
        event.kind === "inquiry-acknowledgement" &&
        event.recipient.kind === "prospect" &&
        event.recipient.prospectEmail ===
          inquiry.submittedIdentity.emailNormalized
      )
        return {
          eligible: true,
          email: inquiry.submittedIdentity.emailNormalized,
        };
      if (
        event.kind !== "staff-intake-alert" ||
        event.recipient.kind !== "staff" ||
        String(event.recipient.staffUserId) !== staffIds[0]
      )
        return { eligible: false };
      const staff = await staffUserModel(connection)
        .exists({
          _id: event.recipient.staffUserId,
          status: "active",
          archivedAt: { $exists: false },
          roles: { $in: ["admin", "sales"] },
        })
        .maxTimeMS(2000);
      return staff
        ? {
            eligible: true,
            email: config.notificationEmail,
            inquiryUrl: `${origin.origin}/dashboard/leads/${String(inquiry._id)}`,
          }
        : { eligible: false };
    },
  });
}
