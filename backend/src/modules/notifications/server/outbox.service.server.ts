import { inquiryEmail, type createResendTransport } from "./resend.server.js";
import { randomUUID } from "node:crypto";
import type { ClientSession, Connection } from "mongoose";
import { outboxEventModel } from "../models/outbox-event.model.js";
import {
  outboxInputSchema,
  eventDedupeKey,
} from "../validation/event.schema.js";
import { parseInput } from "../../../server/validation.js";
import { ServiceError } from "../../../server/errors.js";
import { assertOwnedNotificationFixture } from "./local-test-guard.server.js";

export async function enqueueOutbox(
  connection: Connection,
  input: unknown,
  session: ClientSession,
) {
  if (!session.inTransaction())
    throw new Error("Enqueue requires the caller's active transaction");
  const value = parseInput(outboxInputSchema, input),
    dedupeKey = eventDedupeKey(value),
    model = outboxEventModel(connection);
  const existing = await model.findOne({ dedupeKey }).session(session);
  if (existing) {
    const raw = JSON.parse(JSON.stringify(existing.toObject()));
    const prior = outboxInputSchema.parse({
      kind: raw.kind,
      aggregateType: raw.aggregateType,
      aggregateId: raw.aggregateId,
      recipient: raw.recipient,
      templateKey: raw.templateKey,
      templateVersion: raw.templateVersion,
      payload: raw.payload,
    });
    if (JSON.stringify(prior) !== JSON.stringify(value))
      throw new ServiceError("conflict");
    return existing;
  }
  const event = new model();
  event.set({ ...value, dedupeKey });
  await event.save({ session });
  return event;
}
export type SyntheticOutcome =
  "accepted" | "transient" | "permanent" | "uncertain";
/** This adapter contains no network implementation, recipients or credentials. Test code may spy on send. */
export function syntheticTransport(outcomes: readonly SyntheticOutcome[]) {
  let position = 0;
  return {
    kind: "synthetic" as const,
    async send(_message: {
      to: string;
      subject: string;
      text: string;
      idempotencyKey: string;
    }) {
      void _message;
      return outcomes[position++] ?? "accepted";
    },
  };
}
type Event = Awaited<
  ReturnType<ReturnType<typeof outboxEventModel>["findOne"]>
>;
type Eligibility = (event: NonNullable<Event>) => Promise<
  | { eligible: false }
  | {
      eligible: true;
      email: string;
      inquiryUrl?: string;
      inboxDetails?: string;
      clientName?: string;
    }
>;
export type JobSummary = {
  disabled: boolean;
  simulated: boolean;
  processed: number;
  accepted: number;
  retry: number;
  failed: number;
  suppressed: number;
  uncertain: number;
  stale: number;
  busy?: boolean;
};
export const LOCAL_OUTBOX_LIMITS = Object.freeze({
  batch: 5,
  budgetMs: 10000,
  timeoutMs: 5000,
  leaseMs: 30000,
  maxAttempts: 5,
  retryMs: [1000, 5000, 30000, 120000] as readonly number[],
});
type LocalOptions =
  | { mode: "disabled" }
  | {
      mode: "local-test";
      appEnv: string;
      transport: ReturnType<typeof syntheticTransport>;
      eligible: Eligibility;
      now?: () => Date;
    };
type ResendOptions = {
  mode: "resend";
  appEnv: string;
  transport: ReturnType<typeof createResendTransport>;
  eligible: Eligibility;
  now?: () => Date;
};
export function createLocalOutboxWorker(
  connection: Connection,
  options: LocalOptions,
) {
  return createOutboxWorker(connection, options);
}
export function createResendOutboxWorker(
  connection: Connection,
  options: Omit<ResendOptions, "mode">,
) {
  return createOutboxWorker(connection, { ...options, mode: "resend" });
}
async function createOutboxWorker(
  connection: Connection,
  options: LocalOptions | ResendOptions,
) {
  const summary = (): JobSummary => ({
    disabled: options.mode === "disabled",
    simulated: options.mode === "local-test",
    processed: 0,
    accepted: 0,
    retry: 0,
    failed: 0,
    suppressed: 0,
    uncertain: 0,
    stale: 0,
  });
  if (options.mode === "disabled")
    return {
      run: async () => summary(),
      reconcile: async () => {
        throw new Error("Outbox disabled");
      },
    };
  if (
    (options.mode === "local-test"
      ? options.transport.kind !== "synthetic"
      : options.transport.kind !== "resend") ||
    typeof options.eligible !== "function"
  )
    throw new Error(
      "Explicit synthetic transport and fail-closed eligibility required",
    );
  async function assertTarget() {
    if (options.mode === "disabled") throw new Error("Outbox disabled");
    if (options.mode === "local-test" || process.env.NODE_ENV === "test")
      await assertOwnedNotificationFixture(connection, options.appEnv);
    else if (
      options.mode !== "resend" ||
      connection.readyState !== 1 ||
      !["development", "staging", "production"].includes(options.appEnv) ||
      !new RegExp(`^aradun_${options.appEnv}(?:_[a-z0-9]+)*$`).test(
        connection.name,
      )
    )
      throw new Error("Isolated notification target required");
  }
  await assertTarget();
  const model = outboxEventModel(connection),
    clock = options.now ?? (() => new Date());
  let running = false;
  const fence = (event: NonNullable<Event>) => ({
    _id: event._id,
    status: "processing" as const,
    leaseToken: event.leaseToken ?? "",
    leaseUntil: { $gt: clock() },
  });
  async function finish(
    event: NonNullable<Event>,
    state: "sent" | "retry" | "failed" | "suppressed" | "uncertain",
    code?: string,
    providerId?: string,
  ) {
    const now = clock();
    const set: Record<string, unknown> = {
      status: state,
      deliveryState: state === "sent" ? "accepted" : "unknown",
    };
    if (state === "sent") {
      set.provider = options.mode === "resend" ? "resend" : "synthetic";
      set.providerMessageId =
        options.mode === "resend" ? providerId : `SAMPLE-${event._id}`;
      set.sentAt = now;
    }
    if (state === "retry")
      set.nextAttemptAt = new Date(
        now.getTime() + LOCAL_OUTBOX_LIMITS.retryMs[event.attempts - 1]!,
      );
    if (code) {
      set.lastErrorCode = code;
      set.lastErrorSummary = "Notification attempt requires review.";
    }
    const update: Record<string, unknown> = {
      $set: set,
      $inc: { revision: 1 },
    };
    if (state !== "uncertain") update.$unset = { leaseToken: 1, leaseUntil: 1 };
    return (await model.updateOne(fence(event), update)).modifiedCount === 1;
  }
  return {
    async run() {
      const result = summary();
      if (running) return { ...result, busy: true };
      running = true;
      try {
        await assertTarget();
        const start = Date.now();
        const expired = await model
          .find({ status: "processing", leaseUntil: { $lte: clock() } })
          .sort({ leaseUntil: 1, _id: 1 })
          .limit(LOCAL_OUTBOX_LIMITS.batch);
        for (const event of expired) {
          const recovered = await model.updateOne(
            {
              _id: event._id,
              status: "processing",
              leaseToken: event.leaseToken ?? "",
              leaseUntil: { $lte: clock() },
            },
            {
              $set: {
                status: "uncertain",
                deliveryState: "unknown",
                lastErrorCode: "lease_expired",
                lastErrorSummary:
                  "Acceptance may be unknown; reconcile before retry.",
              },
              $inc: { revision: 1 },
            },
          );
          if (recovered.modifiedCount) {
            result.processed++;
            result.uncertain++;
          }
        }
        while (
          result.processed < LOCAL_OUTBOX_LIMITS.batch &&
          Date.now() - start <
            LOCAL_OUTBOX_LIMITS.budgetMs - LOCAL_OUTBOX_LIMITS.timeoutMs
        ) {
          const now = clock();
          const event = await model.findOneAndUpdate(
            {
              status: { $in: ["pending", "retry"] },
              nextAttemptAt: { $lte: now },
              attempts: { $lt: 5 },
            },
            {
              $set: {
                status: "processing",
                leaseToken: randomUUID(),
                leaseUntil: new Date(now.getTime() + 30000),
                lastAttemptAt: now,
              },
              $inc: { attempts: 1, revision: 1 },
            },
            { sort: { nextAttemptAt: 1, _id: 1 }, returnDocument: "after" },
          );
          if (!event) break;
          result.processed++;
          let outcome: SyntheticOutcome | "suppressed" = "transient";
          let code = "eligibility_unavailable";
          let providerId: string | undefined;
          try {
            let eligibilityTimer: ReturnType<typeof setTimeout> | undefined;
            const policy = await Promise.race([
              options.eligible(event),
              new Promise<never>((_resolve, reject) => {
                eligibilityTimer = setTimeout(
                  () => reject(new Error("Eligibility unavailable")),
                  LOCAL_OUTBOX_LIMITS.timeoutMs,
                );
              }),
            ]).finally(() => clearTimeout(eligibilityTimer));
            if (!policy.eligible) {
              outcome = "suppressed";
              code = "ineligible";
            } else if (
              (options.mode === "local-test" &&
                (!/^SAMPLE[-_]/.test(event.payload.reference) ||
                  !/^[^@\s]+@[^@\s]+\.invalid$/i.test(policy.email))) ||
              (event.recipient.kind === "prospect" &&
                event.recipient.prospectEmail?.toLowerCase() !==
                  policy.email.toLowerCase())
            ) {
              outcome = "permanent";
              code = "unsafe_test_recipient";
            } else {
              let timer: ReturnType<typeof setTimeout> | undefined;
              try {
                const sent = await Promise.race([
                  options.transport.send({
                    to: policy.email,
                    ...(options.mode === "resend"
                      ? inquiryEmail(
                          event.kind,
                          event.payload.reference,
                          event.payload.inquiryType,
                          event.kind === "staff-intake-alert"
                            ? policy.inquiryUrl
                            : undefined,
                          event.kind === "staff-intake-alert"
                            ? policy.inboxDetails
                            : undefined,
                          policy.clientName,
                        )
                      : {
                          subject: `SAMPLE ARADUN reference ${event.payload.reference}`,
                          text: `SAMPLE simulated ${event.payload.inquiryType} notification for ${event.payload.reference}.`,
                        }),
                    idempotencyKey: event.dedupeKey,
                  }),
                  new Promise<"uncertain">((resolve) => {
                    timer = setTimeout(() => resolve("uncertain"), 5000);
                  }),
                ]);
                outcome = typeof sent === "string" ? sent : sent.outcome;
                if (typeof sent !== "string") providerId = sent.id;
              } catch {
                outcome = "uncertain";
              } finally {
                clearTimeout(timer);
              }
              code =
                outcome === "uncertain"
                  ? "acceptance_unknown"
                  : outcome === "transient"
                    ? "temporary_failure"
                    : "permanent_failure";
            }
          } catch {
            /* Eligibility could not be established; no provider send was attempted. */
          }
          const state =
            outcome === "accepted"
              ? "sent"
              : outcome === "suppressed"
                ? "suppressed"
                : outcome === "uncertain"
                  ? "uncertain"
                  : outcome === "transient" && event.attempts < 5
                    ? "retry"
                    : "failed";
          if (
            !(await finish(
              event,
              state,
              state === "sent" ? undefined : code,
              providerId,
            ))
          )
            result.stale++;
          else result[state === "sent" ? "accepted" : state]++;
        }
        return result;
      } finally {
        running = false;
      }
    },
    async reconcile(
      id: string,
      leaseToken: string,
      outcome: "accepted" | "safe-retry" | "permanent",
    ) {
      if (options.mode === "resend")
        throw new Error(
          "Provider reconciliation evidence required; no automatic uncertain resend",
        );
      await assertTarget();
      if (
        !/^[a-fA-F0-9]{24}$/.test(id) ||
        !["accepted", "safe-retry", "permanent"].includes(outcome)
      )
        throw new ServiceError("invalid_input");
      const event = await model.findOne({
        _id: id,
        status: "uncertain",
        leaseToken,
      });
      if (!event) return false;
      const status =
        outcome === "accepted"
          ? "sent"
          : outcome === "safe-retry" && event.attempts < 5
            ? "retry"
            : "failed";
      return (
        (
          await model.updateOne(
            { _id: event._id, status: "uncertain", leaseToken },
            {
              $set: {
                status,
                deliveryState: status === "sent" ? "accepted" : "unknown",
                nextAttemptAt: clock(),
                ...(status === "sent"
                  ? {
                      provider: "synthetic",
                      providerMessageId: `SAMPLE-${id}`,
                      sentAt: clock(),
                    }
                  : {}),
              },
              $unset: { leaseToken: 1, leaseUntil: 1 },
              $inc: { revision: 1 },
            },
          )
        ).modifiedCount === 1
      );
    },
  };
}
