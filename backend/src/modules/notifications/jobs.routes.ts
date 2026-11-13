import { Router, json } from "express";
import { timingSafeEqual, createHash } from "node:crypto";
import type { JobSummary } from "./server/outbox.service.server.js";
import { errorResponse } from "../../server/errors.js";
export type OutboxJob = { run: () => Promise<JobSummary> };
export function outboxJobsRouter(
  config: { mode: "disabled" | "local-test" | "resend"; secret?: string },
  worker?: OutboxJob,
) {
  const router = Router();
  let active = false;
  router.use((_request, response, next) => {
    response.setHeader("Cache-Control", "no-store");
    next();
  });
  router.use((request, response, next) => {
    const authorization = request.get("Authorization") ?? "";
    const received = authorization.startsWith("Bearer ")
      ? authorization.slice(7)
      : "";
    const hash = (value: string) => createHash("sha256").update(value).digest();
    if (
      !config.secret ||
      !received ||
      received.length > 256 ||
      !timingSafeEqual(hash(received), hash(config.secret))
    ) {
      response.status(401).json({ error: "Job authentication required" });
      return;
    }
    if (request.get("Origin")) {
      response.status(403).json({ error: "Machine trigger only" });
      return;
    }
    next();
  });
  router.post("/run", json({ limit: "1kb" }), (request, response, next) => {
    if (
      (request.body &&
        (!Object.getPrototypeOf(request.body) ||
          typeof request.body !== "object" ||
          Array.isArray(request.body) ||
          Object.keys(request.body).length)) ||
      (((request.get("Content-Length") ?? "0") !== "0" ||
        request.get("Transfer-Encoding")) &&
        request.body === undefined)
    ) {
      response.status(400).json({ error: "Job body must be empty" });
      return;
    }
    if (config.mode === "disabled") {
      response.json({ disabled: true, processed: 0 });
      return;
    }
    if (!worker) {
      response.status(503).json({ error: "Job binding unavailable" });
      return;
    }
    if (active) {
      response.status(409).json({ error: "Job already running" });
      return;
    }
    active = true;
    void worker
      .run()
      .then((result) => response.status(result.busy ? 409 : 200).json(result))
      .catch((error) => {
        const result = errorResponse(error);
        response.status(result.status).json(result.body);
      })
      .finally(() => {
        active = false;
      });
    void next;
  });
  router.all("/run", (_request, response) => {
    response.sendStatus(405);
  });
  router.use(
    (
      error: unknown,
      _request: unknown,
      response: { status: (code: number) => { json: (body: unknown) => void } },
      _next: unknown,
    ) => {
      void error;
      void _request;
      void _next;
      response.status(400).json({ error: "Invalid job request" });
    },
  );
  return router;
}
