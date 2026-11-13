import { expect, it, vi } from "vitest";
import { loadBackendEnv } from "../src/config/env.server.js";
import {
  createResendTransport,
  inquiryEmail,
  resendConfigSchema,
} from "../src/modules/notifications/server/resend.server.js";
const config = {
  apiKey: "re_SYNTHETIC_NOT_A_REAL_KEY",
  from: "ARADUN <sender@example.invalid>",
  replyTo: "reply@example.invalid",
  notificationEmail: "owner@example.invalid",
  sandbox: true,
};
const id = "12345678-1234-4234-8234-123456789012";
const message = {
  to: "prospect@example.invalid",
  subject: "Safe subject",
  text: "Safe text",
  idempotencyKey: "inquiry:synthetic:staff:v1",
};
it("uses the fixed HTTPS endpoint, configured sender/reply-to and sandbox inbox with stable idempotency", async () => {
  const fetcher = vi
    .fn<typeof fetch>()
    .mockResolvedValue(new Response(JSON.stringify({ id }), { status: 200 }));
  const transport = createResendTransport(config, fetcher);
  expect(await transport.send(message)).toEqual({ outcome: "accepted", id });
  await transport.send(message);
  expect(fetcher).toHaveBeenCalledTimes(2);
  const [url, options] = fetcher.mock.calls[0]!;
  expect(url).toBe("https://api.resend.com/emails");
  expect(JSON.parse(String(options!.body))).toEqual({
    from: config.from,
    to: [config.notificationEmail],
    reply_to: config.replyTo,
    subject: "[TEST] Safe subject",
    text: "Safe text",
  });
  expect(options!.redirect).toBe("error");
  expect(options!.headers).toEqual(fetcher.mock.calls[1]![1]!.headers);
  expect(JSON.stringify(options!.headers)).not.toContain(
    message.idempotencyKey,
  );
});
it("preserves the intended recipient only in explicit production mode", async () => {
  const fetcher = vi
    .fn<typeof fetch>()
    .mockResolvedValue(new Response(JSON.stringify({ id })));
  await createResendTransport({ ...config, sandbox: false }, fetcher).send(
    message,
  );
  expect(JSON.parse(String(fetcher.mock.calls[0]![1]!.body)).to).toEqual([
    message.to,
  ]);
});
it.each([
  [429, "transient"],
  [400, "permanent"],
  [401, "permanent"],
  [403, "permanent"],
  [422, "permanent"],
  [409, "uncertain"],
  [500, "uncertain"],
  [503, "uncertain"],
])(
  "maps %i safely to %s without exposing provider details",
  async (status, outcome) => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        new Response("PRIVATE PROVIDER ERROR", { status: Number(status) }),
      );
    expect(await createResendTransport(config, fetcher).send(message)).toEqual({
      outcome,
    });
  },
);
it("treats network loss and malformed success as uncertain", async () => {
  const fail = vi
    .fn<typeof fetch>()
    .mockRejectedValue(new Error("PRIVATE API KEY"));
  expect(await createResendTransport(config, fail).send(message)).toEqual({
    outcome: "uncertain",
  });
  const malformed = vi.fn<typeof fetch>().mockResolvedValue(new Response("{}"));
  expect(await createResendTransport(config, malformed).send(message)).toEqual({
    outcome: "uncertain",
  });
});
it("blocks header injection and invalid recipients before network access", async () => {
  const fetcher = vi.fn<typeof fetch>();
  expect(
    await createResendTransport(config, fetcher).send({
      ...message,
      subject: "Hello\r\nBcc: attacker@example.invalid",
    }),
  ).toEqual({ outcome: "permanent" });
  expect(
    await createResendTransport(config, fetcher).send({
      ...message,
      to: "bad\naddress",
    }),
  ).toEqual({ outcome: "permanent" });
  expect(fetcher).not.toHaveBeenCalled();
  expect(
    resendConfigSchema.safeParse({
      ...config,
      from: "Sender\n<sender@example.invalid>",
    }).success,
  ).toBe(false);
});
it("templates cannot inject HTML, arbitrary subjects or booking/payment promises", () => {
  const email = inquiryEmail(
    "inquiry-acknowledgement",
    "ARADUN-001",
    "consultation",
  );
  expect(email.text).toContain("not a confirmed booking");
  expect(() => inquiryEmail("unknown", "ARADUN-001", "contact")).toThrow();
  expect(() =>
    inquiryEmail("staff-intake-alert", "<script>", "contact"),
  ).toThrow();
});
it("only staff templates accept canonical protected inquiry links without credentials, queries or injected lines", () => {
  const link =
    "https://aradun.example.invalid/dashboard/leads/aaaaaaaaaaaaaaaaaaaaaaaa";
  expect(
    inquiryEmail("staff-intake-alert", "SAMPLE-reference", "contact", link)
      .text,
  ).toContain(link);
  expect(() =>
    inquiryEmail(
      "inquiry-acknowledgement",
      "SAMPLE-reference",
      "contact",
      link,
    ),
  ).toThrow();
  for (const unsafe of [
    link + "?token=secret",
    link + "#private",
    link + "\nInjected",
    link.replace("https:", "javascript:"),
    link.replace(
      "aradun.example.invalid",
      "user:password@aradun.example.invalid",
    ),
    link.replace("/dashboard/leads/", "/redirect/"),
  ])
    expect(() =>
      inquiryEmail("staff-intake-alert", "SAMPLE-reference", "contact", unsafe),
    ).toThrow();
});
it("validates Resend settings without arming delivery and rejects incomplete activation", () => {
  const env = {
    EMAIL_PROVIDER: "resend",
    RESEND_API_KEY: config.apiKey,
    EMAIL_FROM: config.from,
    EMAIL_REPLY_TO: config.replyTo,
    CONTACT_NOTIFICATION_EMAIL: config.notificationEmail,
  };
  const parsed = loadBackendEnv(env);
  expect(parsed.email?.sandbox).toBe(true);
  expect(parsed.outbox.mode).toBe("disabled");
  expect(() => loadBackendEnv({ ...env, RESEND_API_KEY: "invalid" })).toThrow();
  expect(() => loadBackendEnv({ ...env, OUTBOX_MODE: "resend" })).toThrow();
  expect(() =>
    loadBackendEnv({
      ...env,
      OUTBOX_MODE: "resend",
      JOB_TRIGGER_SECRET: "x".repeat(40),
    }),
  ).toThrow();
  expect(
    loadBackendEnv({
      ...env,
      OUTBOX_MODE: "resend",
      JOB_TRIGGER_SECRET: "x".repeat(40),
      PUBLIC_INTAKE_ENABLED: "true",
      PRIVACY_NOTICE_VERSION: "SAMPLE-test",
      RATE_LIMIT_HASH_SECRET: Buffer.alloc(48, 7).toString("base64url"),
      INTAKE_STAFF_RECIPIENT_IDS: "123456789012345678901234",
    }).outbox.mode,
  ).toBe("resend");
});
