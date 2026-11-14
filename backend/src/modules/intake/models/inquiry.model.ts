import {
  Schema,
  type Connection,
  type InferSchemaType,
  type Model,
} from "mongoose";
import { randomBytes } from "node:crypto";
import {
  consentContextSchema,
  offerSelectionSchema,
  offerSnapshotSchema,
} from "../../../server/db/value-schemas.server.js";
import {
  submittedIdentitySchema,
  projectContextSchema,
  consultationSchema,
  attributionSchema,
} from "../validation/input.schema.js";

const options = { _id: false, strict: "throw" as const };
const short = (max: number) => ({ type: String, maxlength: max });
const amount = {
  type: Number,
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
  validate: (value: number | null | undefined) =>
    value == null || Number.isSafeInteger(value),
};
const identity = new Schema(
  {
    name: { ...short(120), required: true },
    email: { ...short(254), required: true },
    emailNormalized: { ...short(254), required: true },
    company: short(160),
    website: short(2048),
    phone: short(40),
  },
  options,
);
const selection = new Schema(
  {
    serviceIds: { type: [String], default: [] },
    solutionIds: { type: [String], default: [] },
    packageIds: { type: [String], default: [] },
    customRequested: { type: Boolean, default: false },
  },
  options,
);
const price = new Schema(
  {
    model: {
      type: String,
      required: true,
      enum: ["one-time", "monthly", "setup-plus-monthly", "custom"],
    },
    currency: { type: String, enum: ["USD"], default: "USD", required: true },
    startingAmountMinor: amount,
    setupAmountMinor: amount,
    recurringAmountMinor: amount,
    billingUnit: short(100),
    indicative: { type: Boolean, default: true, required: true },
    sourceLabel: { ...short(1000), required: true },
    unitConfirmed: { type: Boolean, default: false, required: true },
  },
  options,
);
const offer = new Schema(
  {
    offerId: { ...short(100), required: true },
    name: { ...short(200), required: true },
    kind: { type: String, enum: ["service", "solution"], required: true },
    packageId: short(100),
    tier: short(100),
    availability: {
      type: String,
      enum: ["available", "specialist-led", "coming-soon"],
      required: true,
    },
    priceTerms: { type: price, required: true },
    scopeVersion: short(100),
  },
  options,
);
const snapshot = new Schema(
  {
    catalogVersion: { ...short(100), required: true },
    capturedAt: { type: Date, required: true },
    offers: { type: [offer], default: [], required: true },
  },
  options,
);
const project = new Schema(
  {
    budgetText: short(200),
    timelineText: short(300),
    additionalDetails: short(5000),
  },
  options,
);
const consultation = new Schema(
  {
    mode: {
      type: String,
      enum: ["manual-request"],
      default: "manual-request",
      required: true,
    },
    preferredTimeText: { ...short(500), required: true },
    timezone: { ...short(100), required: true },
    state: {
      type: String,
      enum: ["requested", "pending-confirmation", "confirmed", "cancelled"],
      default: "requested",
      required: true,
    },
    confirmedStartAt: Date,
    confirmedBy: Schema.Types.ObjectId,
  },
  options,
);
const attribution = new Schema(
  {
    landingPath: short(512),
    sourcePath: short(512),
    referrerHost: short(253),
    utmSource: short(200),
    utmMedium: short(200),
    utmCampaign: short(200),
    utmTerm: short(200),
    utmContent: short(200),
    sourceLabel: { ...short(200), default: "Unknown", required: true },
    capturedAt: { type: Date, default: Date.now, required: true },
  },
  options,
);
const consent = new Schema(
  {
    privacyNoticeVersion: short(100),
    privacyAcknowledgedAt: Date,
    marketingOptIn: { type: Boolean, default: false, required: true },
    marketingNoticeVersion: short(100),
    marketingOptInAt: Date,
    locale: { type: String, enum: ["en"], default: "en", required: true },
  },
  options,
);
const objectId = Schema.Types.ObjectId;
const schema = new Schema(
  {
    reference: {
      type: String,
      required: true,
      maxlength: 100,
      default: () =>
        `ARQ-${new Date().getUTCFullYear()}-${randomBytes(12).toString("hex")}`,
    },
    submissionKeyHash: {
      type: String,
      required: true,
      match: /^[a-f0-9]{64}$/,
    },
    payloadHash: { type: String, required: true, match: /^[a-f0-9]{64}$/ },
    type: {
      type: String,
      enum: ["quote", "contact", "consultation"],
      required: true,
    },
    submittedIdentity: { type: identity, required: true },
    contactId: objectId,
    opportunityId: objectId,
    subject: short(200),
    message: short(10000),
    selection: { type: selection, default: undefined },
    offerSnapshot: { type: snapshot, default: undefined },
    requestedOffersOnly: { type: Boolean, default: false },
    projectContext: { type: project, default: undefined },
    consultation: { type: consultation, default: undefined },
    attribution: { type: attribution, required: true, default: () => ({}) },
    consent: { type: consent, required: true },
    handlingStatus: {
      type: String,
      enum: ["received", "in-review", "closed"],
      default: "received",
      required: true,
    },
    classifications: {
      type: [String],
      enum: ["spam", "duplicate", "no-response"],
      default: [],
      required: true,
    },
    duplicateOfInquiryId: objectId,
    assignedTo: objectId,
    assignedAt: Date,
    assignedBy: objectId,
    linkedAt: Date,
    linkedBy: objectId,
    closedAt: Date,
    closedBy: objectId,
    redactedAt: Date,
    redactionReason: short(500),
    archivedAt: Date,
    archivedBy: objectId,
    schemaVersion: {
      type: Number,
      default: 1,
      required: true,
      min: 1,
      validate: Number.isSafeInteger,
    },
    revision: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
      validate: Number.isSafeInteger,
    },
  },
  {
    collection: "inquiries",
    strict: "throw",
    timestamps: true,
    versionKey: "revision",
    optimisticConcurrency: true,
    autoIndex: false,
    autoCreate: false,
  },
);

const immutable = [
  "_id",
  "reference",
  "submissionKeyHash",
  "payloadHash",
  "type",
  "submittedIdentity",
  "subject",
  "message",
  "selection",
  "offerSnapshot",
  "requestedOffersOnly",
  "projectContext",
  "consultation.preferredTimeText",
  "consultation.timezone",
  "consultation.mode",
  "attribution",
  "consent",
  "createdAt",
  "duplicateOfInquiryId",
];
schema.pre("validate", async function () {
  const plain = (value: unknown) =>
    value === undefined ? undefined : JSON.parse(JSON.stringify(value));
  const validate = (
    path: string,
    validator: { safeParse: (value: unknown) => { success: boolean } },
    value: unknown,
  ) => {
    if (!validator.safeParse(plain(value)).success)
      this.invalidate(path, "Invalid inquiry contract");
  };
  if (this.submittedIdentity) {
    this.submittedIdentity.emailNormalized =
      this.submittedIdentity.email?.trim().toLowerCase() ?? "";
    validate(
      "submittedIdentity",
      submittedIdentitySchema,
      this.submittedIdentity,
    );
  }
  validate("consent", consentContextSchema, this.consent);
  validate("attribution", attributionSchema, this.attribution);
  if (this.type === "quote") {
    if (!this.message?.trim())
      this.invalidate("message", "Quote brief required");
    validate("selection", offerSelectionSchema, this.selection);
    validate("offerSnapshot", offerSnapshotSchema, this.offerSnapshot);
    if (
      !this.selection ||
      (!this.selection.serviceIds.length &&
        !this.selection.solutionIds.length &&
        !this.selection.packageIds.length &&
        !this.selection.customRequested)
    )
      this.invalidate("selection", "Offer or custom choice required");
    if (this.requestedOffersOnly && this.offerSnapshot?.offers.length !== 0)
      this.invalidate(
        "offerSnapshot",
        "Request-only inquiries cannot assert commercial terms",
      );
    if (this.selection && this.offerSnapshot && !this.requestedOffersOnly) {
      const selected = [
        ...this.selection.serviceIds,
        ...this.selection.solutionIds,
      ];
      const offers = this.offerSnapshot.offers;
      if (
        new Set(offers.map((offer) => offer.offerId)).size !== offers.length ||
        selected.some((id) => !offers.some((offer) => offer.offerId === id)) ||
        this.selection.packageIds.some(
          (id) => !offers.some((offer) => offer.packageId === id),
        ) ||
        offers.some(
          (offer) =>
            !selected.includes(offer.offerId) &&
            (!offer.packageId ||
              !this.selection!.packageIds.includes(offer.packageId)),
        )
      )
        this.invalidate(
          "offerSnapshot",
          "Snapshot must match canonical selection",
        );
    }
  } else if (
    this.selection ||
    this.offerSnapshot ||
    this.projectContext ||
    this.requestedOffersOnly
  )
    this.invalidate("selection", "Quote fields are not allowed for this type");
  if (this.projectContext)
    validate("projectContext", projectContextSchema, this.projectContext);
  if (
    this.type === "contact" &&
    (!this.subject?.trim() || !this.message?.trim())
  )
    this.invalidate("subject", "Contact subject/message required");
  if (this.type === "consultation") {
    if (!this.subject?.trim())
      this.invalidate("subject", "Consultation topic required");
    validate("consultation", consultationSchema, this.consultation);
  } else if (this.consultation)
    this.invalidate(
      "consultation",
      "Consultation fields require consultation type",
    );
  if (new Set(this.classifications).size !== this.classifications.length)
    this.invalidate("classifications", "Classifications must be unique");
  if (
    this.classifications.includes("duplicate") &&
    (!this.duplicateOfInquiryId || this.duplicateOfInquiryId.equals(this._id))
  )
    this.invalidate(
      "duplicateOfInquiryId",
      "Reviewed non-self duplicate link required",
    );
  if (
    this.duplicateOfInquiryId &&
    !this.duplicateOfInquiryId.equals(this._id)
  ) {
    const visited = new Set([this._id.toString()]);
    let target = this.duplicateOfInquiryId;
    let complete = false;
    const model = this.constructor as Model<InferSchemaType<typeof schema>>;
    for (let step = 0; step < 64; step++) {
      if (visited.has(target.toString())) {
        this.invalidate("duplicateOfInquiryId", "Duplicate link cycle");
        complete = true;
        break;
      }
      visited.add(target.toString());
      const ancestor = await model
        .findById(target)
        .select({ duplicateOfInquiryId: 1 })
        .session(this.$session() ?? null)
        .maxTimeMS(2000)
        .lean();
      if (!ancestor) {
        this.invalidate("duplicateOfInquiryId", "Duplicate target must exist");
        complete = true;
        break;
      }
      if (!ancestor.duplicateOfInquiryId) {
        complete = true;
        break;
      }
      target = ancestor.duplicateOfInquiryId;
    }
    if (!complete)
      this.invalidate(
        "duplicateOfInquiryId",
        "Duplicate chain exceeds safe validation bound",
      );
  }
  for (const [target, at, by] of [
    [this.assignedTo, this.assignedAt, this.assignedBy],
    [this.contactId, this.linkedAt, this.linkedBy],
  ] as const)
    if (Boolean(target) !== Boolean(at && by) || (!target && (at || by)))
      this.invalidate(
        "assignedAt",
        "Link/assignment requires trusted metadata",
      );
  if (this.handlingStatus === "closed" && !(this.closedAt && this.closedBy))
    this.invalidate("closedAt", "Closure metadata required");
  if (Boolean(this.redactedAt) !== Boolean(this.redactionReason))
    this.invalidate(
      "redactionReason",
      "Redaction metadata must accompany action",
    );
  if (Boolean(this.archivedAt) !== Boolean(this.archivedBy))
    this.invalidate("archivedBy", "Archive metadata required");
});
schema.pre("save", function (options) {
  if (options.validateBeforeSave === false || options.validateModifiedOnly)
    throw new Error("Inquiry requires full document validation");
  if (!this.isNew && immutable.some((path) => this.isModified(path)))
    throw new Error("Submitted inquiry values are immutable");
});
schema.index({ reference: 1 }, { unique: true });
schema.index({ submissionKeyHash: 1 }, { unique: true });
schema.index({ assignedTo: 1, handlingStatus: 1, createdAt: -1, _id: -1 });
schema.index({ contactId: 1, createdAt: -1, _id: -1 });
schema.index({ opportunityId: 1, createdAt: -1 });
schema.index({ type: 1, createdAt: -1, _id: -1 });
for (const operation of [
  "updateOne",
  "updateMany",
  "findOneAndUpdate",
  "replaceOne",
  "findOneAndReplace",
  "findOneAndDelete",
  "deleteMany",
] as const)
  schema.pre(operation, function () {
    throw new Error(
      "Use validated optimistic Inquiry document writes; bulk/query mutation is not exposed",
    );
  });
schema.pre("deleteOne", { document: true, query: true }, function () {
  throw new Error(
    "Inquiry hard deletion requires a separately authorized privacy operation",
  );
});
schema.pre("insertMany", function () {
  throw new Error("Use validated optimistic Inquiry document writes");
});
schema.pre("bulkWrite", function () {
  throw new Error("Use validated optimistic Inquiry document writes");
});
export function inquiryModel(
  connection: Connection,
): Model<InferSchemaType<typeof schema>> {
  if (connection.models.Inquiry && connection.models.Inquiry.schema !== schema)
    throw new Error("Incompatible Inquiry registration");
  return (
    (connection.models.Inquiry as
      Model<InferSchemaType<typeof schema>> | undefined) ??
    connection.model<InferSchemaType<typeof schema>>(
      "Inquiry",
      schema,
      "inquiries",
    )
  );
}
