import {
  createIntakeRouter,
  type SubmitInquiry,
} from "./modules/intake/intake.routes.js";
import { identityMutationPaths } from "./modules/identity/identity.paths.js";
import type { Limiter } from "./modules/operations/server/rate-limit.server.js";
import { limitRequests } from "./modules/operations/server/request-controls.server.js";
import express, { type Router } from "express";
import {
  createPublicContentRouter,
  type ContentReader,
} from "./modules/content/public-content.js";
import { createCatalogRouter } from "./modules/catalog/catalog.routes.js";
import { loadBackendEnv, type BackendEnv } from "./config/env.server.js";
import {
  outboxJobsRouter,
  type OutboxJob,
} from "./modules/notifications/jobs.routes.js";

export function createApp(
  config: BackendEnv = loadBackendEnv(process.env),
  services: {
    outbox?: OutboxJob;
    limiter?: Limiter;
    identity?: Router;
    intake?: SubmitInquiry;
    content?: ContentReader;
  } = {},
) {
  const app = express();
  app.disable("x-powered-by");
  app.set("trust proxy", false);
  app.use((request, response, next) => {
    response.setHeader("X-Content-Type-Options", "nosniff");
    response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    response.setHeader("X-Robots-Tag", "noindex, nofollow");
    // Apply before Origin/preflight rejection as well as router responses.
    if (
      request.path === "/api/identity" ||
      request.path.startsWith("/api/identity/") ||
      request.path === "/api/intake" ||
      request.path.startsWith("/api/intake/") ||
      request.path === "/api/content" ||
      request.path.startsWith("/api/content/")
    )
      response.setHeader("Cache-Control", "no-store");
    next();
  });
  // Token-only machine endpoint is isolated; general browser Origin/CORS rules below are unchanged.
  app.use(
    "/internal/jobs/outbox",
    outboxJobsRouter(config.outbox, services.outbox),
  );
  app.use((request, response, next) => {
    const requestOrigin = request.get("Origin");
    if (requestOrigin && !config.allowedOrigins.includes(requestOrigin)) {
      response.status(403).json({ error: "Origin not allowed" });
      return;
    }
    if (
      !["GET", "HEAD", "OPTIONS"].includes(request.method) &&
      !requestOrigin
    ) {
      response.status(403).json({ error: "Origin required" });
      return;
    }
    if (requestOrigin) {
      response.setHeader("Access-Control-Allow-Origin", requestOrigin);
      response.setHeader("Access-Control-Allow-Credentials", "true");
      response.vary("Origin");
    }
    if (request.method === "OPTIONS") {
      if (
        !requestOrigin ||
        !(
          request.path === "/api/intake" ||
          request.path === "/api/intake/" ||
          request.path === "/api/intake/receipt" ||
          identityMutationPaths.some(
            (path) => request.path === `/api/identity${path}`,
          )
            ? ["POST"]
            : ["GET", "HEAD"]
        ).includes(request.get("Access-Control-Request-Method") ?? "")
      ) {
        response.sendStatus(403);
        return;
      }
      response.setHeader(
        "Access-Control-Allow-Methods",
        request.path.startsWith("/api/identity/") ||
          request.path.startsWith("/api/intake")
          ? "GET, POST"
          : "GET, HEAD",
      );
      if (
        request.path === "/api/intake" ||
        request.path === "/api/intake/" ||
        request.path === "/api/intake/receipt" ||
        identityMutationPaths.some(
          (path) => request.path === `/api/identity${path}`,
        )
      )
        response.setHeader(
          "Access-Control-Allow-Headers",
          "Content-Type, X-ARADUN-Request, Idempotency-Key",
        );
      response.sendStatus(204);
      return;
    }
    next();
  });
  app.use(
    "/api/identity",
    services.identity ??
      ((_request, response) => {
        response.setHeader("Cache-Control", "no-store");
        response.status(503).json({
          error: {
            code: "unavailable",
            message: "Staff sign-in is temporarily unavailable.",
          },
        });
      }),
  );
  app.use(
    "/api/intake",
    createIntakeRouter(
      config.allowedOrigins,
      services.limiter,
      services.intake,
      Boolean(
        services.outbox && config.outbox.mode === "resend" && config.email,
      ),
    ),
  );
  app.get("/", (_request, response) => {
    response.json({ application: "ARADUN API", stage: "foundation" });
  });
  app.use(
    "/api/catalog",
    limitRequests(services.limiter, "catalog-read"),
    createCatalogRouter(config.appEnv === "development"),
  );
  app.use(
    "/api/content",
    limitRequests(services.limiter, "catalog-read"),
    createPublicContentRouter(services.content),
  );
  return app;
}
export const app = createApp();
