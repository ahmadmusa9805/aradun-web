import { createPublicContentRouter } from "../../backend/src/modules/content/public-content.js";
import { inquiryModel } from "../../backend/src/modules/intake/models/inquiry.model.js";
import { outboxEventModel } from "../../backend/src/modules/notifications/models/outbox-event.model.js";
import { createSubmissionService } from "../../backend/src/modules/intake/server/submission.service.server.js";
import { z } from "zod";
import { randomBytes } from "node:crypto";
import { startMongoFixture } from "../../backend/tests/support/mongo-fixture.js";
import { registeredModels } from "../../backend/src/server/db/model-registry.server.js";
import { createIdentityRouter } from "../../backend/src/modules/identity/identity.routes.js";
import { authCredentialModel } from "../../backend/src/modules/identity/models/auth-credential.model.js";
import {
  staffUserModel,
  LOCAL_PROVIDER,
} from "../../backend/src/modules/identity/models/staff-user.model.js";
import { createApp } from "../../backend/src/app.js";
import { loadBackendEnv } from "../../backend/src/config/env.server.js";
import express from "express";

// Catalog is source-only. Identity browser tests lazily create an owned native fixture.
// No user env-file, existing server or owner database touched.
const fixture = express();
let readingMode = "ready";
fixture.post("/__fixture/reading/:mode", (request, response) => {
  readingMode = request.params.mode;
  response.sendStatus(204);
});
fixture.use(
  "/api/content",
  createPublicContentRouter(async (kind, slug) => {
    if (slug !== "synthetic-reading") return null;
    if (readingMode === "unavailable") throw new Error("Synthetic failure");
    return {
      publicationState:
        readingMode === "withdrawn" ? "unpublished" : "published",
      archived: false,
      publishedSnapshot: {
        kind,
        slug,
        title: "SAMPLE reading - test fixture only",
        summary: "Synthetic reading example. No actual business claim.",
        ...(kind === "work" ? { classification: "Concept/Demo" } : {}),
        ...(kind === "insights"
          ? { author: "SAMPLE Author", publishedAt: "2026-01-01T00:00:00.000Z" }
          : {}),
        sections: [
          {
            title:
              kind === "work" ? "Problem and constraints" : "Immediate answer",
            blocks: [
              {
                type: "paragraph",
                text: "<script>Never execute this synthetic text</script>",
              },
            ],
          },
          {
            title: "Approach and scope",
            blocks: [
              {
                type: "list",
                items: ["First synthetic step", "Second synthetic step"],
              },
              { type: "code-text", text: "<img onerror=alert(1)>" },
            ],
          },
          {
            title: "Outcome and further help",
            blocks: [
              { type: "link", text: "Explore services", href: "/services" },
            ],
          },
        ],
        related: [{ title: "FAQs & Help", href: "/faq" }],
      },
    };
  }),
);
let unavailable = false;
fixture.post("/__fixture/unavailable", (_request, response) => {
  unavailable = true;
  response.sendStatus(204);
});
fixture.post("/__fixture/restore", (_request, response) => {
  unavailable = false;
  response.sendStatus(204);
});
fixture.use((request, response, next) => {
  if (unavailable && request.path.startsWith("/api/catalog")) {
    response.sendStatus(503);
    return;
  }
  next();
});
const config = loadBackendEnv({
  APP_ENV: "development",
  APP_URL: "http://127.0.0.1:3100",
  ALLOWED_ORIGINS: "http://127.0.0.1:3100",
});
const contentLimiter = {
  admit: async () => ({ allowed: true, retryAfter: 0 }),
};
let identityRouter:
  Awaited<ReturnType<typeof createIdentityRouter>> | undefined;
let identityPasswordOnly = false;
let current = createApp(config, { limiter: contentLimiter });
let mongo: Awaited<ReturnType<typeof startMongoFixture>> | undefined;
fixture.post(
  "/__fixture/identity",
  express.json({ limit: "1kb" }),
  (request, response) => {
    void (async () => {
      if (process.env.NODE_ENV !== "test") throw new Error("Test only");
      const { role, passwordOnly } = z
        .strictObject({
          role: z.enum(["admin", "sales", "editor"]).default("admin"),
          passwordOnly: z.boolean().default(false),
        })
        .parse(request.body ?? {});
      if (!mongo) {
        mongo = await startMongoFixture();
        for (const { model } of registeredModels(mongo.connection)) {
          await model.createCollection();
          await model.createIndexes();
        }
      }
      if (!identityRouter || identityPasswordOnly !== passwordOnly) {
        const identity = await createIdentityRouter(mongo.connection, {
          localPasswordOnly: passwordOnly,
          secret: randomBytes(48).toString("base64url"),
          rateSecret: randomBytes(48).toString("base64url"),
          origins: [config.appUrl],
          loginPolicy: { count: 100, windowMs: 60000 },
          security: { sealingKey: randomBytes(48).toString("base64url") },
        });
        identityRouter = identity;
        identityPasswordOnly = passwordOnly;
        current = createApp(config, { limiter: contentLimiter, identity });
      }
      const email = `sample-${randomBytes(6).toString("hex")}@example.invalid`,
        password = `SAMPLE-${randomBytes(24).toString("base64url")}`;
      const credential = await authCredentialModel(mongo.connection).register(
        { email },
        password,
      );
      await staffUserModel(mongo.connection).create({
        provider: LOCAL_PROVIDER,
        providerSubject: String(credential._id),
        email,
        emailNormalized: email,
        displayName: "SAMPLE Staff",
        roles: [role],
        status: "active",
        activatedAt: new Date(),
      });
      return { email, password };
    })()
      .then((value) => {
        response.setHeader("Cache-Control", "no-store");
        response.json(value);
      })
      .catch(() =>
        response.status(503).json({ error: "SAMPLE fixture unavailable" }),
      );
  },
);
fixture.post("/__fixture/intake", async (_request, response) => {
  try {
    if (process.env.NODE_ENV !== "test" || !mongo) throw Error();
    const staff = await staffUserModel(mongo.connection)
      .findOne({ status: "active", roles: "admin" })
      .select("_id")
      .lean();
    if (!staff) throw Error();
    const intake = await createSubmissionService(mongo.connection, {
      secret: randomBytes(48).toString("base64url"),
      policy: {
        privacyAcknowledgementRequired: true,
        privacyNoticeVersion: "SAMPLE-browser-test-only",
      },
      staffRecipientIds: [String(staff._id)],
    });
    current = createApp(config, {
      limiter: contentLimiter,
      intake,
      ...(identityRouter ? { identity: identityRouter } : {}),
    });
    response.sendStatus(204);
  } catch {
    response.sendStatus(503);
  }
});
fixture.get("/__fixture/intake-count", async (_request, response) => {
  if (process.env.NODE_ENV !== "test" || !mongo) {
    response.sendStatus(503);
    return;
  }
  response.json({
    inquiries: await inquiryModel(mongo.connection).countDocuments(),
    events: await outboxEventModel(mongo.connection).countDocuments(),
  });
});
fixture.post("/__fixture/inquiries", (_request, response) => {
  void (async () => {
    if (process.env.NODE_ENV !== "test" || !mongo) throw Error();
    const staff = await staffUserModel(mongo.connection)
      .findOne({ status: "active", roles: "admin" })
      .select("_id")
      .lean();
    if (!staff) throw Error();
    const submit = await createSubmissionService(mongo.connection, {
      secret: randomBytes(32).toString("base64url"),
      staffRecipientIds: [String(staff._id)],
      policy: {
        privacyAcknowledgementRequired: true,
        privacyNoticeVersion: "SAMPLE-browser-test",
      },
    });
    const receipt = await submit(
      {
        type: "contact",
        identity: { name: "SAMPLE Client", email: "client@example.invalid" },
        subject: "SAMPLE client request",
        message:
          "PRIVATE SAMPLE <script>window.syntheticLeak = true</script>\nSecond line",
        consent: { privacyAcknowledged: true, marketingOptIn: false },
      },
      crypto.randomUUID(),
    );
    const row = await inquiryModel(mongo.connection)
      .findOne({ reference: receipt.reference })
      .select("_id reference")
      .lean();
    if (!row) throw Error();
    return { id: String(row._id), reference: row.reference };
  })()
    .then((value) => response.json(value))
    .catch(() => response.sendStatus(503));
});
fixture.use((request, response, next) => current(request, response, next));
const server = fixture.listen(4100, "127.0.0.1");
let stopping = false;
for (const signal of ["SIGINT", "SIGTERM"] as const)
  process.on(signal, () => {
    if (stopping) return;
    stopping = true;
    server.close(() => {
      void mongo?.close().catch(() => {
        process.exitCode = 1;
      });
    });
  });
