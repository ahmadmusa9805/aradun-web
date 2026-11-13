import { createHash } from "node:crypto";
import { z } from "zod";

const mailbox = z
  .email()
  .max(254)
  .refine((value) => !/[\r\n]/.test(value));
export const resendConfigSchema = z.strictObject({
  apiKey: z.string().regex(/^re_[A-Za-z0-9_-]{10,200}$/),
  from: z
    .string()
    .max(320)
    .refine((value) => {
      if (/[\r\n]/.test(value)) return false;
      return (
        mailbox.safeParse(value).success ||
        (/^[^<>\r\n]+ <[^<>]+>$/.test(value) &&
          mailbox.safeParse(value.slice(value.indexOf("<") + 1, -1)).success)
      );
    }),
  replyTo: mailbox,
  notificationEmail: mailbox,
  sandbox: z.boolean(),
});
export type ResendConfig = z.infer<typeof resendConfigSchema>;
export type ResendResult = {
  outcome: "accepted" | "transient" | "permanent" | "uncertain";
  id?: string;
};
export function createResendTransport(
  input: ResendConfig,
  fetcher: typeof fetch = fetch,
) {
  if (process.env.NODE_ENV === "test" && fetcher === fetch)
    throw new Error(
      "Tests require an injected email transport; real network delivery refused",
    );
  const config = resendConfigSchema.parse(input);
  return {
    kind: "resend" as const,
    async send(message: {
      to: string;
      subject: string;
      text: string;
      idempotencyKey: string;
    }): Promise<ResendResult> {
      if (
        !mailbox.safeParse(message.to).success ||
        /[\r\n]/.test(message.subject) ||
        message.subject.length > 200 ||
        message.text.length > 12000 ||
        !message.idempotencyKey ||
        message.idempotencyKey.length > 256
      )
        return { outcome: "permanent" };
      // Development/staging never relay a prospect's address. Configuration owns the recipient.
      const body = {
        from: config.from,
        to: [config.sandbox ? config.notificationEmail : message.to],
        reply_to: config.replyTo,
        subject: `${config.sandbox ? "[TEST] " : ""}${message.subject}`,
        text: message.text,
      };
      const key = createHash("sha256")
        .update(message.idempotencyKey)
        .digest("hex");
      try {
        const response = await fetcher("https://api.resend.com/emails", {
          method: "POST",
          redirect: "error",
          headers: {
            Authorization: `Bearer ${config.apiKey}`,
            "Content-Type": "application/json",
            "Idempotency-Key": `aradun-${key}`,
          },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(4500),
        });
        if (response.ok) {
          const value: unknown = await response.json();
          const parsed = z.object({ id: z.uuid() }).safeParse(value);
          return parsed.success
            ? { outcome: "accepted", id: parsed.data.id }
            : { outcome: "uncertain" };
        }
        if (response.status === 429) return { outcome: "transient" };
        if (response.status === 409 || response.status >= 500)
          return { outcome: "uncertain" };
        return { outcome: "permanent" };
      } catch {
        return { outcome: "uncertain" };
      }
    },
  };
}
export function inquiryEmail(
  kind: string,
  reference: string,
  type: string,
  inquiryUrl?: string,
) {
  if (
    !/^[A-Za-z0-9_-]{1,100}$/.test(reference) ||
    !["contact", "quote", "consultation"].includes(type) ||
    !["inquiry-acknowledgement", "staff-intake-alert"].includes(kind)
  )
    throw new Error("Invalid notification template input");
  if (inquiryUrl) {
    const url = new URL(inquiryUrl);
    if (
      kind !== "staff-intake-alert" ||
      /[\r\n]/.test(inquiryUrl) ||
      url.href !== inquiryUrl ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      !/^\/dashboard\/leads\/[a-f0-9]{24}$/.test(url.pathname) ||
      !(
        url.protocol === "https:" ||
        (url.protocol === "http:" &&
          ["127.0.0.1", "localhost", "[::1]"].includes(url.hostname))
      )
    )
      throw new Error("Invalid protected inquiry link");
  }
  return kind === "inquiry-acknowledgement"
    ? {
        subject: `ARADUN received your ${type} request`,
        text: `Thank you for contacting ARADUN. Your ${type} request has been saved.\nReference: ${reference}\n\nWe will review your request and respond. This is not a confirmed booking, binding quote or payment confirmation.\n\nARADUN - Technology & Digital Solutions`,
      }
    : {
        subject: `New ARADUN ${type} inquiry - ${reference}`,
        text: `A new ${type} inquiry has been saved.\nReference: ${reference}\n\n${inquiryUrl ? `Review inquiry (authorized staff sign-in required):\n${inquiryUrl}\n\n` : "Review it using the authorized staff inquiry workflow. "}This notification intentionally excludes the private message and contact details. Forwarding this message does not grant access.`,
      };
}
