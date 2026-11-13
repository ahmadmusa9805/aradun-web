import { mountLocalPasswordReadRoutes } from "./server/local-password-read.server.js";
import { mountInquiryReadRoutes } from "../intake/server/inquiry-read.server.js";
import { mountSecurityRoutes } from "./security.routes.js";
import type { SecurityConfig } from "./server/security.service.server.js";
import { Router, json, type ErrorRequestHandler } from "express";
import session from "express-session";
import passport from "passport";
import { Types, type Connection } from "mongoose";
import { z } from "zod";
import { authCredentialModel } from "./models/auth-credential.model.js";
import { staffUserModel, LOCAL_PROVIDER } from "./models/staff-user.model.js";
import { staffSessionModel } from "./models/staff-session.model.js";
import {
  createIdentityStore,
  type IdentitySessionData,
} from "./server/session-store.server.js";
import { createSharedLimiter } from "../operations/server/rate-limit.server.js";
import { limitRequests } from "../operations/server/request-controls.server.js";
import { errorResponse, ServiceError } from "../../server/errors.js";
import { checkIndexes } from "../../server/db/index-plan.server.js";
export type LocalIdentityConfig = {
  localPasswordOnly?: boolean;
  security?: SecurityConfig;
  secret: string;
  rateSecret: string;
  loginPolicy: { count: number; windowMs: number };
  origins: readonly string[];
};
// No unimplemented destination is activated; more routes require their owning task.
export function safeLocalReturn(value: unknown) {
  return value === "/staff/login" ? value : "/staff/login";
}
const input = z.strictObject({
  email: z.email().max(254),
  password: z.string().min(1).max(128),
  returnTo: z.string().max(200).optional(),
});
export function identityModels(connection: Connection) {
  return [
    staffUserModel(connection),
    staffSessionModel(connection),
    authCredentialModel(connection),
  ] as const;
}
export async function createIdentityRouter(
  connection: Connection,
  config: LocalIdentityConfig,
  clock = () => new Date(),
) {
  if (connection.readyState !== 1)
    throw new Error("Identity database unavailable");
  if (
    Buffer.from(config.secret, "base64url").length < 32 ||
    config.origins.length === 0 ||
    config.loginPolicy.count < 1 ||
    config.loginPolicy.windowMs < 60000
  )
    throw new Error("Invalid local identity configuration");
  const readiness = await checkIndexes(connection);
  if (
    readiness.results.some(
      (row) =>
        [
          "staffUsers",
          "staffSessions",
          "authCredentials",
          "rateLimitBuckets",
          ...(config.security
            ? [
                "identityFactors",
                "identityChallenges",
                "identityRecoveryPacks",
                "identitySecurityEvents",
              ]
            : []),
        ].includes(row.collection) &&
        (row.missing.length || row.drift.length || row.extra.length),
    )
  )
    throw new Error("Reviewed identity indexes required");
  const credentials = authCredentialModel(connection),
    staff = staffUserModel(connection),
    transport = createIdentityStore(connection, clock),
    auth = new passport.Passport();
  auth.use(credentials.createStrategy());
  const limiter = createSharedLimiter(
      connection,
      config.rateSecret,
      clock,
      config.loginPolicy,
    ),
    router = Router();
  router.use((_request, response, next) => {
    response.setHeader("Cache-Control", "no-store");
    response.setHeader("X-Robots-Tag", "noindex, nofollow");
    next();
  });
  router.use((request, response, next) => {
    if (
      request.method !== "GET" &&
      (!config.origins.includes(request.get("Origin") ?? "") ||
        request.get("X-ARADUN-Request") !== "identity" ||
        !request.is("application/json"))
    ) {
      const error = errorResponse(new ServiceError("forbidden"));
      response.status(error.status).json(error.body);
      return;
    }
    next();
  });
  router.use(
    session({
      name: "aradun.staff.local",
      secret: config.secret,
      store: transport.store,
      resave: false,
      saveUninitialized: false,
      rolling: false,
      cookie: {
        path: "/api/identity",
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 28800000,
      },
    }),
  );
  router.use(auth.initialize());
  router.get("/session", (request, response, next) => {
    void transport
      .read(request.sessionID)
      .then((current) =>
        response.json(
          current
            ? {
                status: current.row.assurance,
                displayName: current.actor.displayName,
                requiresMfa:
                  !config.localPasswordOnly && current.row.assurance !== "mfa",
              }
            : { status: "anonymous" },
        ),
      )
      .catch(next);
  });
  router.post(
    "/login",
    limitRequests(limiter, "identity-login"),
    json({ limit: "2kb", inflate: false }),
    (request, response, next) => {
      const parsed = input.safeParse(request.body);
      if (!parsed.success) {
        next(new ServiceError("invalid_input"));
        return;
      }
      request.body = {
        email: parsed.data.email.trim().toLowerCase(),
        password: parsed.data.password,
      };
      auth.authenticate(
        "local",
        { session: false },
        (error: unknown, user: { _id: Types.ObjectId } | false) => {
          if (error) {
            next(new ServiceError("unavailable"));
            return;
          }
          if (!user) {
            next(new ServiceError("unauthenticated"));
            return;
          }
          const subject = String(user._id);
          void staff
            .findOne({
              provider: LOCAL_PROVIDER,
              providerSubject: subject,
              status: "active",
              mfaPolicy: "required",
              archivedAt: { $exists: false },
            })
            .maxTimeMS(2000)
            .then((actor) => {
              if (!actor) throw new ServiceError("unauthenticated");
              request.session.regenerate((error) => {
                if (error) {
                  next(new ServiceError("unavailable"));
                  return;
                }
                void transport
                  .issuePrimary(request.sessionID, actor._id, subject)
                  .then((meta) => {
                    (request.session as IdentitySessionData).identity = meta;
                    request.session.save((error) => {
                      if (error) {
                        next(new ServiceError("unavailable"));
                        return;
                      }
                      response.json({
                        status: "primary",
                        requiresMfa: !config.localPasswordOnly,
                        displayName: actor.displayName,
                        returnTo: config.localPasswordOnly
                          ? "/dashboard/account"
                          : safeLocalReturn(parsed.data.returnTo),
                      });
                    });
                  })
                  .catch(next);
              });
            })
            .catch(next);
        },
      )(request, response, next);
    },
  );
  router.post(
    "/logout",
    json({ limit: "1kb", inflate: false }),
    (request, response, next) => {
      if (request.body && Object.keys(request.body).length) {
        next(new ServiceError("invalid_input"));
        return;
      }
      request.session.destroy((error) => {
        if (error) {
          next(new ServiceError("unavailable"));
          return;
        }
        response.clearCookie("aradun.staff.local", {
          path: "/api/identity",
          httpOnly: true,
          sameSite: "lax",
          secure: false,
        });
        response.sendStatus(204);
      });
    },
  );
  if (config.localPasswordOnly)
    mountLocalPasswordReadRoutes(router, connection, clock);
  router.use("/inquiries", limitRequests(limiter, "catalog-read"));
  mountInquiryReadRoutes(router, connection, clock);
  if (config.security && !config.localPasswordOnly)
    await mountSecurityRoutes(
      router,
      connection,
      limiter,
      config.security,
      clock,
    );
  const errors: ErrorRequestHandler = (error, _request, response, _next) => {
    void _next;
    const status =
      error && typeof error === "object" && "status" in error
        ? error.status
        : undefined;
    const known =
      error instanceof ServiceError
        ? error
        : new ServiceError(
            status === 413
              ? "payload_too_large"
              : status === 415
                ? "unsupported_media"
                : status === 400
                  ? "invalid_input"
                  : "unavailable",
          );
    const result = errorResponse(known);
    response.status(result.status).json(result.body);
  };
  router.use(errors);
  return router;
}
