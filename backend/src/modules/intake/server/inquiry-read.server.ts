import type { Router } from "express";
import { Types, type Connection } from "mongoose";
import { z } from "zod";
import { createStaffAuthorization } from "../../identity/server/authorization.server.js";
import { ServiceError } from "../../../server/errors.js";
import { inquiryModel } from "../models/inquiry.model.js";

const id = z.string().regex(/^[a-f0-9]{24}$/);
const query = z.strictObject({
  limit: z
    .string()
    .regex(/^[1-9][0-9]?$/)
    .transform(Number)
    .pipe(z.number().max(50))
    .optional(),
  cursor: z
    .string()
    .regex(/^[A-Za-z0-9_-]{1,128}$/)
    .optional(),
});

/** Mounted behind the existing opaque session middleware; never a public receipt lookup. */
export function mountInquiryReadRoutes(
  router: Router,
  connection: Connection,
  clock: () => Date,
) {
  const authorize = createStaffAuthorization(connection, clock);
  const model = inquiryModel(connection);
  router.get("/inquiries", (request, response, next) => {
    void (async () => {
      const actor = await authorize(request.sessionID, "crm.read");
      const parsed = query.safeParse(request.query);
      if (!parsed.success) throw new ServiceError("invalid_input");
      const { limit = 20, cursor } = parsed.data;
      let after;
      if (cursor) {
        const text = Buffer.from(cursor, "base64url").toString("utf8");
        const [date, objectId] = text.split("|");
        if (
          !date ||
          !id.safeParse(objectId).success ||
          text !== `${date}|${objectId}` ||
          !Number.isFinite(Date.parse(date)) ||
          new Date(date).toISOString() !== date ||
          Buffer.from(text).toString("base64url") !== cursor
        )
          throw new ServiceError("invalid_input");
        after = {
          $or: [
            { createdAt: { $lt: new Date(date) } },
            {
              createdAt: new Date(date),
              _id: { $lt: new Types.ObjectId(objectId) },
            },
          ],
        };
      }
      const admin = actor.roles.includes("admin");
      const rows = await model
        .find({
          archivedAt: { $exists: false },
          redactedAt: { $exists: false },
          ...(admin
            ? { type: { $in: ["contact", "quote", "consultation"] } }
            : {
                assignedTo: actor.id,
                handlingStatus: { $in: ["received", "in-review", "closed"] },
              }),
          ...after,
        })
        .select(
          "reference type subject handlingStatus createdAt submittedIdentity.name",
        )
        .sort({ createdAt: -1, _id: -1 })
        .limit(limit + 1)
        .maxTimeMS(2000)
        .allowDiskUse(false)
        .hint(
          admin
            ? { type: 1, createdAt: -1, _id: -1 }
            : { assignedTo: 1, handlingStatus: 1, createdAt: -1, _id: -1 },
        )
        .lean();
      const items = rows.slice(0, limit).map((row) => ({
        id: String(row._id),
        reference: row.reference,
        type: row.type,
        subject: row.subject ?? "",
        name: row.submittedIdentity.name,
        status: row.handlingStatus,
        createdAt: row.createdAt.toISOString(),
      }));
      const last = items.at(-1);
      response.json({
        items,
        nextCursor:
          rows.length > limit && last
            ? Buffer.from(`${last.createdAt}|${last.id}`).toString("base64url")
            : null,
      });
    })().catch(next);
  });
  router.get("/inquiries/:id", (request, response, next) => {
    void (async () => {
      const actor = await authorize(request.sessionID, "crm.read");
      if (
        Object.keys(request.query).length ||
        !id.safeParse(request.params.id).success
      )
        throw new ServiceError("invalid_input");
      const row = await model
        .findOne({
          _id: new Types.ObjectId(String(request.params.id)),
          archivedAt: { $exists: false },
          redactedAt: { $exists: false },
          ...(!actor.roles.includes("admin") ? { assignedTo: actor.id } : {}),
        })
        .select(
          "reference type subject message handlingStatus createdAt submittedIdentity projectContext consultation offerSnapshot selection.customRequested",
        )
        .maxTimeMS(2000)
        .lean();
      if (!row) throw new ServiceError("not_found");
      response.json({
        id: String(row._id),
        reference: row.reference,
        type: row.type,
        subject: row.subject ?? "",
        status: row.handlingStatus,
        createdAt: row.createdAt.toISOString(),
        name: row.submittedIdentity.name,
        email: row.submittedIdentity.email,
        company: row.submittedIdentity.company ?? "",
        message: row.message ?? "",
        budget: row.projectContext?.budgetText ?? "",
        timeline: row.projectContext?.timelineText ?? "",
        details: row.projectContext?.additionalDetails ?? "",
        preferredTime: row.consultation?.preferredTimeText ?? "",
        timezone: row.consultation?.timezone ?? "",
        consultationState: row.consultation?.state ?? "",
        customRequested: row.selection?.customRequested ?? false,
        catalogVersion: row.offerSnapshot?.catalogVersion ?? "",
        capturedAt: row.offerSnapshot?.capturedAt.toISOString() ?? "",
        offers: (row.offerSnapshot?.offers ?? []).map((offer) => ({
          id: offer.offerId,
          name: offer.name,
          packageId: offer.packageId ?? "",
          priceLabel: offer.priceTerms.sourceLabel,
        })),
      });
    })().catch(next);
  });
}
