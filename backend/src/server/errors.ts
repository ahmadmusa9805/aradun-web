import { randomUUID } from "node:crypto";

const errors = {
  payload_too_large: {
    status: 413,
    message: "The request is too large. Shorten it and try again.",
  },
  unsupported_media: { status: 415, message: "Use uncompressed JSON." },
  invalid_input: { status: 400, message: "Check the submitted information." },
  unauthenticated: { status: 401, message: "Sign in to continue." },
  forbidden: { status: 403, message: "This action is not permitted." },
  not_found: { status: 404, message: "The requested resource was not found." },
  conflict: {
    status: 409,
    message: "The record changed. Refresh and try again.",
  },
  rate_limited: { status: 429, message: "Too many requests. Try again later." },
  unavailable: {
    status: 503,
    message: "The service is temporarily unavailable. Try again later.",
  },
  unexpected: {
    status: 500,
    message: "Something went wrong. Try again later.",
  },
} as const;
export class ServiceError extends Error {
  readonly code: keyof typeof errors;
  constructor(code: keyof typeof errors) {
    super(errors[code].message);
    this.code = code;
  }
}
export function errorResponse(error: unknown) {
  const code =
    error instanceof ServiceError && Object.hasOwn(errors, error.code)
      ? error.code
      : "unexpected";
  return {
    status: errors[code].status,
    body: {
      error: {
        code,
        message: errors[code].message,
        correlationId: randomUUID(),
      },
    },
  };
}
