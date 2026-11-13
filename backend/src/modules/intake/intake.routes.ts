import { z } from "zod";
import { Router } from "express";
import {
  publicJsonGuards,
  requestGuardErrors,
  limitRequests,
} from "../operations/server/request-controls.server.js";
import type { Limiter } from "../operations/server/rate-limit.server.js";
import { errorResponse, ServiceError } from "../../server/errors.js";
import type { SubmissionReceipt } from "./server/submission.service.server.js";
export type SubmitInquiry = ((
  input: unknown,
  key: unknown,
) => Promise<SubmissionReceipt>) & {
  readReceipt?: (token: unknown) => {
    reference: string;
    type: string;
    delivery: "queued";
    bookingConfirmed: false;
  };
};
export function createIntakeRouter(
  origins: readonly string[],
  limiter?: Limiter,
  submit?: SubmitInquiry,
  emailDeliveryEnabled = false,
) {
  const router = Router();
  router.use((_request, response, next) => {
    response.setHeader("Cache-Control", "no-store");
    next();
  });
  router.get("/status", (_request, response) => {
    response.json({
      available: Boolean(submit),
      emailDeliveryEnabled: Boolean(submit && emailDeliveryEnabled),
    });
  });
  router.post(
    "/receipt",
    limitRequests(limiter, "intake"),
    ...publicJsonGuards(origins),
    (request, response) => {
      try {
        if (!submit?.readReceipt) throw new ServiceError("unavailable");
        const input = z
          .strictObject({ token: z.string().max(250) })
          .safeParse(request.body);
        if (!input.success) throw new ServiceError("invalid_input");
        response.json({
          ...submit.readReceipt(input.data.token),
          emailDeliveryEnabled: Boolean(emailDeliveryEnabled),
        });
      } catch (error) {
        const result = errorResponse(error);
        response.status(result.status).json(result.body);
      }
    },
  );
  router.post(
    "/",
    limitRequests(limiter, "intake"),
    ...publicJsonGuards(origins),
    async (request, response) => {
      try {
        if (!submit) throw new ServiceError("unavailable");
        const result = await submit(
          request.body,
          request.get("Idempotency-Key"),
        );
        response.status(201).json(result);
      } catch (error) {
        const result = errorResponse(error);
        response.status(result.status).json(result.body);
      }
    },
  );
  router.use(requestGuardErrors);
  return router;
}
