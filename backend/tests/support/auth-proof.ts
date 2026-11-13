import { betterAuth } from "better-auth/minimal";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { twoFactor } from "better-auth/plugins";
import { randomBytes } from "node:crypto";
import type { Connection } from "mongoose";
import { assertOwnedNotificationFixture } from "../../src/modules/notifications/server/local-test-guard.server.js";

/** Candidate-only harness. Never imported by application code or given an application DB. */
export async function authProof(
  connection: Connection,
  options: { signup?: boolean; secret?: string } = {},
) {
  await assertOwnedNotificationFixture(connection, "development");
  const secret = options.secret ?? randomBytes(48).toString("base64url");
  let resetToken: string | undefined;
  const auth = betterAuth({
    appName: "SAMPLE ARADUN compatibility",
    baseURL: "http://127.0.0.1:3999",
    secret,
    database: mongodbAdapter(connection.db!, {
      client: connection.getClient(),
    }),
    telemetry: { enabled: false },
    logger: { disabled: true },
    trustedOrigins: ["http://127.0.0.1:3999"],
    emailAndPassword: {
      enabled: true,
      disableSignUp: !options.signup,
      revokeSessionsOnPasswordReset: true,
      sendResetPassword: async (value) => {
        resetToken = value.token;
      },
    },
    session: {
      expiresIn: 28800,
      disableSessionRefresh: true,
      freshAge: 300,
      cookieCache: { enabled: false },
    },
    advanced: {
      disableOriginCheck: false,
      disableCSRFCheck: false,
      ipAddress: { disableIpTracking: true },
    },
    plugins: [
      twoFactor({
        issuer: "SAMPLE ARADUN",
        backupCodeOptions: { storeBackupCodes: "encrypted" },
      }),
    ],
  });
  return {
    auth,
    secret,
    getResetToken: () => resetToken,
    async request(
      path: string,
      body?: Record<string, unknown>,
      cookie?: string,
    ) {
      return auth.handler(
        new Request(`http://127.0.0.1:3999/api/auth${path}`, {
          method: body ? "POST" : "GET",
          headers: {
            Origin: "http://127.0.0.1:3999",
            ...(body ? { "Content-Type": "application/json" } : {}),
            ...(cookie ? { Cookie: cookie } : {}),
          },
          ...(body ? { body: JSON.stringify(body) } : {}),
        }),
      );
    },
  };
}
export function responseCookies(response: Response) {
  return response.headers
    .getSetCookie()
    .map((value) => value.split(";", 1)[0]!)
    .join("; ");
}
