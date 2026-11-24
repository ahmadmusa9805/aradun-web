import { createReceiptCodec } from "./receipt.server.js";
import {
  initializeInquirySequence,
  nextInquiryReference,
} from "./reference.server.js";
import { staffUserModel } from "../../identity/models/staff-user.model.js";
import { createHmac } from "node:crypto";
import { z } from "zod";
import type { Connection } from "mongoose";
import { inquiryModel } from "../models/inquiry.model.js";
import {
  parseInquiryInput,
  type ConsentPolicy,
} from "../validation/input.schema.js";
import { checkIndexes } from "../../../server/db/index-plan.server.js";
import { ServiceError } from "../../../server/errors.js";
import { enqueueOutbox } from "../../notifications/server/outbox.service.server.js";
import { captureSelectedOffers } from "../../catalog/server/offer-snapshot.service.server.js";
import { captureOfferSnapshot } from "../../../server/db/value-schemas.server.js";
import { catalogRelease } from "../../catalog/data/catalog-release.js";
export type SubmissionReceipt = {
  reference: string;
  type: "contact" | "quote" | "consultation";
  delivery: "queued";
  bookingConfirmed: false;
  receiptToken: string;
};
export type IntakeOptions = {
  secret: string;
  policy: ConsentPolicy;
  capture?: typeof captureSelectedOffers;
  staffRecipientIds: string[];
  fixedInbox?: boolean;
};
function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object")
    return `{${Object.entries(value)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, item]) => `${JSON.stringify(key)}:${canonical(item)}`)
      .join(",")}}`;
  return JSON.stringify(value) ?? "null";
}
export async function createSubmissionService(
  connection: Connection,
  options: IntakeOptions,
) {
  if (
    !options.secret ||
    !options.policy.privacyAcknowledgementRequired ||
    !options.policy.privacyNoticeVersion
  )
    throw new Error("Explicit intake policy and secret required");
  const plan = await checkIndexes(connection);
  if (
    plan.results
      .filter((item) => ["inquiries", "outboxEvents"].includes(item.collection))
      .some(
        (item) =>
          item.missingCollection || item.missing.length || item.drift.length,
      )
  )
    throw new ServiceError("unavailable");
  const recipients = z
    .array(z.string().regex(/^[a-f0-9]{24}$/))
    .min(options.fixedInbox ? 0 : 1)
    .max(options.fixedInbox ? 0 : 10)
    .parse(options.staffRecipientIds);
  const model = inquiryModel(connection);
  await initializeInquirySequence(connection);
  const digest = (value: string) =>
    createHmac("sha256", options.secret).update(value).digest("hex");
  const codec = createReceiptCodec(options.secret);
  const submit = async (
    input: unknown,
    key: unknown,
  ): Promise<SubmissionReceipt> => {
    if (!z.uuid().safeParse(key).success)
      throw new ServiceError("invalid_input");
    const submissionKeyHash = digest(`intake:${String(key)}`),
      payloadHash = digest(canonical(input));
    const prior = async () =>
      model
        .findOne({ submissionKeyHash })
        .select("reference type payloadHash")
        .maxTimeMS(2000)
        .lean();
    const receipt = (record: {
      reference: string;
      type: SubmissionReceipt["type"];
      payloadHash: string;
    }): SubmissionReceipt => {
      if (record.payloadHash !== payloadHash)
        throw new ServiceError("conflict");
      return {
        receiptToken: codec.issue(record.reference, record.type),
        reference: record.reference,
        type: record.type,
        delivery: "queued",
        bookingConfirmed: false,
      };
    };
    const existing = await prior();
    if (existing) return receipt(existing);
    const staff = await staffUserModel(connection)
      .find({
        _id: { $in: recipients },
        status: "active",
        archivedAt: { $exists: false },
        roles: { $in: ["admin", "sales"] },
      })
      .select("_id")
      .limit(10)
      .maxTimeMS(2000)
      .lean();
    if (staff.length !== new Set(recipients).size)
      throw new ServiceError("unavailable");
    const now = new Date().toISOString(),
      parsed = parseInquiryInput(input, options.policy, now);
    let requestedOffersOnly = false;
    let offerSnapshot: ReturnType<typeof captureOfferSnapshot> | undefined;
    if (parsed.type === "quote") {
      const selection = parsed.selection;
      if (
        selection.serviceIds.length +
          selection.solutionIds.length +
          selection.packageIds.length ===
          0 &&
        selection.customRequested
      )
        offerSnapshot = captureOfferSnapshot({
          catalogVersion: catalogRelease.version,
          capturedAt: now,
          offers: [],
        });
      else {
        try {
          offerSnapshot = (options.capture ?? captureSelectedOffers)(
            selection,
            now,
          );
        } catch (error) {
          if (error instanceof ServiceError && error.code === "not_found") {
            if (!options.fixedInbox) throw new ServiceError("unavailable");
            requestedOffersOnly = true;
            // Save requested IDs only; no draft offer, price, availability or package commitment is asserted.
            offerSnapshot = captureOfferSnapshot({
              catalogVersion: catalogRelease.version,
              capturedAt: now,
              offers: [],
            });
          } else throw error;
        }
      }
    }
    // Fresh documents are created on each replay. Use the driver session to avoid
    // Mongoose nested-document reset bookkeeping on aborted strict subdocuments.
    const session = await connection.startSession();
    try {
      return await session.withTransaction(
        async () => {
          const found = await model
            .findOne({ submissionKeyHash })
            .session(session);
          if (found) return receipt(found);
          const document = new model({
            ...parsed,
            reference: await nextInquiryReference(
              connection,
              session,
              parsed.type === "quote" ? parsed.selection : undefined,
            ),
            submissionKeyHash,
            payloadHash,
            ...(offerSnapshot ? { offerSnapshot } : {}),
            requestedOffersOnly,
          });
          await document.save({ session });
          await enqueueOutbox(
            connection,
            {
              kind: "inquiry-acknowledgement",
              aggregateType: "inquiry",
              aggregateId: String(document._id),
              recipient: {
                kind: "prospect",
                prospectEmail: parsed.submittedIdentity.emailNormalized,
              },
              templateKey: "inquiry-acknowledgement",
              templateVersion: 1,
              payload: {
                reference: document.reference,
                inquiryType: parsed.type,
                locale: "en",
              },
            },
            session,
          );
          if (options.fixedInbox)
            await enqueueOutbox(
              connection,
              {
                kind: "staff-intake-alert",
                aggregateType: "inquiry",
                aggregateId: String(document._id),
                recipient: { kind: "inbox" },
                templateKey: "staff-intake-alert",
                templateVersion: 1,
                payload: {
                  reference: document.reference,
                  inquiryType: parsed.type,
                  locale: "en",
                },
              },
              session,
            );
          for (const recipient of staff)
            await enqueueOutbox(
              connection,
              {
                kind: "staff-intake-alert",
                aggregateType: "inquiry",
                aggregateId: String(document._id),
                recipient: {
                  kind: "staff",
                  staffUserId: String(recipient._id),
                },
                templateKey: "staff-intake-alert",
                templateVersion: 1,
                payload: {
                  reference: document.reference,
                  inquiryType: parsed.type,
                  locale: "en",
                },
              },
              session,
            );
          return receipt(document);
        },
        {
          readPreference: "primary",
          readConcern: { level: "snapshot" },
          writeConcern: { w: "majority", wtimeoutMS: 5000 },
          maxCommitTimeMS: 5000,
        },
      );
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "code" in error &&
        error.code === 11000
      ) {
        const found = await prior();
        if (found) return receipt(found);
      }
      throw error;
    } finally {
      await session.endSession();
    }
  };
  return Object.assign(submit, { readReceipt: codec.read });
}
