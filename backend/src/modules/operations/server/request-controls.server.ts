import { json, type RequestHandler, type ErrorRequestHandler } from "express";
import type { Limiter, LimitScope } from "./rate-limit.server.js";
import { errorResponse, ServiceError } from "../../../server/errors.js";
export function limitRequests(
  limiter: Limiter | undefined,
  scope: LimitScope,
): RequestHandler {
  return (request, response, next) => {
    void (async () => {
      if (!limiter) throw new ServiceError("unavailable");
      const result = await limiter.admit(
        scope,
        request.socket.remoteAddress ?? "",
      );
      if (!result.allowed) {
        response.setHeader("Retry-After", String(result.retryAfter));
        const error = errorResponse(new ServiceError("rate_limited"));
        response.setHeader("Cache-Control", "no-store");
        response.status(error.status).json(error.body);
        return;
      }
      next();
    })().catch(() => {
      const error = errorResponse(new ServiceError("unavailable"));
      response.setHeader("Retry-After", "5");
      response.setHeader("Cache-Control", "no-store");
      response.status(error.status).json(error.body);
    });
  };
}
/** Reusable guard for an authorized future public JSON mutation; mounts no route. */
export function publicJsonGuards(origins: readonly string[]): RequestHandler[] {
  const boundary: RequestHandler = (request, response, next) => {
    if (
      request.method !== "POST" ||
      !origins.includes(request.get("Origin") ?? "")
    ) {
      response
        .status(403)
        .json(errorResponse(new ServiceError("forbidden")).body);
      return;
    }
    if (
      !request.is("application/json") ||
      (request.get("Content-Encoding") ?? "identity").toLowerCase() !==
        "identity"
    ) {
      response
        .status(415)
        .json(errorResponse(new ServiceError("unsupported_media")).body);
      return;
    }
    next();
  };
  const object: RequestHandler = (request, response, next) => {
    if (
      !request.body ||
      typeof request.body !== "object" ||
      Array.isArray(request.body)
    ) {
      response
        .status(400)
        .json(errorResponse(new ServiceError("invalid_input")).body);
      return;
    }
    next();
  };
  return [
    boundary,
    json({ limit: "32kb", inflate: false, strict: true }),
    object,
  ];
}
export const requestGuardErrors: ErrorRequestHandler = (
  error,
  _request,
  response,
  _next,
) => {
  void _next;
  const tooLarge =
    error &&
    typeof error === "object" &&
    "status" in error &&
    error.status === 413;
  const result = errorResponse(
    new ServiceError(tooLarge ? "payload_too_large" : "invalid_input"),
  );
  response.setHeader("Cache-Control", "no-store");
  response.status(result.status).json(result.body);
};
