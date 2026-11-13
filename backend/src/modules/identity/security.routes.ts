import {
  json,
  type Router,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import type { Connection } from "mongoose";
import { z } from "zod";
import {
  createSecurityService,
  type SecurityConfig,
} from "./server/security.service.server.js";
import {
  createIdentityStore,
  type IdentitySessionData,
} from "./server/session-store.server.js";
import { identityFactorModel } from "./models/security-state.model.js";
import { ServiceError } from "../../server/errors.js";
import { limitRequests } from "../operations/server/request-controls.server.js";
import type { Limiter } from "../operations/server/rate-limit.server.js";
import { createActorRead } from "./server/actor.service.server.js";
const password = z.string().min(15).max(128),
  token = z.string().regex(/^\d{6}$/),
  code = z.string().regex(/^[A-Za-z0-9_-]{43}$/),
  email = z
    .email()
    .max(254)
    .transform((v) => v.trim().toLowerCase());
export async function mountSecurityRoutes(
  router: Router,
  connection: Connection,
  limiter: Limiter,
  config: SecurityConfig,
  clock: () => Date,
) {
  const security = await createSecurityService(connection, config, clock),
    transport = createIdentityStore(connection, clock);
  const readActor = createActorRead(connection, clock);
  router.get("/actor", (request, response, next) => {
    const input = z
      .strictObject({ area: z.enum(["staff", "content"]).default("staff") })
      .safeParse(request.query);
    if (!input.success) {
      next(new ServiceError("invalid_input"));
      return;
    }
    void readActor(request.sessionID, input.data.area)
      .then((actor) => response.json(actor))
      .catch(next);
  });
  const route = <T>(
    path: string,
    schema: z.ZodType<T>,
    handler: (
      request: Request,
      response: Response,
      value: T,
    ) => Promise<unknown>,
  ) => {
    router.post(
      path,
      limitRequests(limiter, "identity-login"),
      json({ limit: "3kb", inflate: false }),
      (request, response, next: NextFunction) => {
        const parsed = schema.safeParse(request.body);
        if (!parsed.success) {
          next(new ServiceError("invalid_input"));
          return;
        }
        void handler(request, response, parsed.data).catch(next);
      },
    );
  };
  router.get("/security/status", (request, response, next) => {
    void (async () => {
      const value = await transport.read(request.sessionID);
      if (!value) throw new ServiceError("unauthenticated");
      const factor = await identityFactorModel(connection)
        .findOne({ staffUserId: value.actor._id })
        .maxTimeMS(2000);
      response.json({
        factorEnabled: Boolean(factor?.enabled),
        replacementPending: Boolean(factor?.replacementPending),
        requiresMfa: value.row.assurance !== "mfa",
      });
    })().catch(next);
  });
  router.get("/account", (request, response, next) => {
    void security
      .account(request.sessionID)
      .then((value) => response.json(value))
      .catch(next);
  });
  route("/account", z.unknown(), async (req, res, input) => {
    await security.updateAccount(req.sessionID, input);
    res.sendStatus(204);
  });
  route("/security/enroll", z.strictObject({}), async (req, res) =>
    res.json(await security.beginEnrollment(req.sessionID)),
  );
  route(
    "/security/verify",
    z.strictObject({ token, enrollment: z.boolean() }),
    async (req, res, input) => {
      const complete = await security.verifyFactor(
        req.sessionID,
        input.token,
        input.enrollment,
      );
      await new Promise<void>((resolve, reject) =>
        req.session.regenerate((error) => (error ? reject(error) : resolve())),
      );
      const meta = await complete(req.sessionID);
      (req.session as IdentitySessionData).identity = meta;
      await new Promise<void>((resolve, reject) =>
        req.session.save((error) => (error ? reject(error) : resolve())),
      );
      res.json({ verified: true, returnTo: "/dashboard/account" });
    },
  );
  route("/security/pack", z.strictObject({}), async (req, res) =>
    res.json(await security.issuePack(req.sessionID)),
  );
  route(
    "/security/password",
    z.strictObject({
      currentPassword: z.string().min(1).max(128),
      newPassword: password,
    }),
    async (req, res, input) => {
      await security.changePassword(
        req.sessionID,
        input.currentPassword,
        input.newPassword,
      );
      res.sendStatus(204);
    },
  );
  route(
    "/recovery/request",
    z.strictObject({ email }),
    async (_req, res, input) =>
      res.json(await security.requestReset(input.email)),
  );
  route(
    "/recovery/reset",
    z.strictObject({ code, newPassword: password }),
    async (_req, res, input) => {
      await security.resetPassword(input.code, input.newPassword);
      res.sendStatus(204);
    },
  );
  route(
    "/recovery/start",
    z.strictObject({ email, password: z.string().min(1).max(128), code }),
    async (_req, res, input) =>
      res.json(
        await security.startReplacement(
          input.email,
          input.password,
          input.code,
        ),
      ),
  );
  route(
    "/recovery/complete",
    z.strictObject({ grant: code, token }),
    async (_req, res, input) => {
      await security.finishReplacement(input.grant, input.token);
      res.sendStatus(204);
    },
  );
}
