import type { Router } from "express";
import type { Connection } from "mongoose";
import { createIdentityStore } from "./session-store.server.js";
import { requirePermission } from "../policies/roles.js";
import { ServiceError } from "../../../server/errors.js";

/** Owner-authorized local read-only account view. Never promotes primary assurance to MFA. */
export function mountLocalPasswordReadRoutes(
  router: Router,
  connection: Connection,
  clock: () => Date,
) {
  if (
    process.env.NODE_ENV === "production" ||
    !/^aradun_(?:development(?:_[a-z0-9]+)*|test_[a-f0-9]{32})$/.test(
      connection.name,
    )
  )
    throw new Error("Password-only account view is local development only");
  // Local describes the application runtime, not the database host. The
  // validated development-only flag also supports an isolated Atlas database.
  const store = createIdentityStore(connection, clock);
  for (const path of ["/actor", "/account", "/security/status"]) {
    router.get(path, (request, response, next) => {
      void (async () => {
        if (
          path === "/actor" &&
          (Object.keys(request.query).some((key) => key !== "area") ||
            (request.query.area && request.query.area !== "staff"))
        )
          throw new ServiceError("forbidden");
        const current = await store.read(request.sessionID);
        if (!current) throw new ServiceError("unauthenticated");
        requirePermission(current.actor.roles, "account.read");
        if (path === "/actor")
          response.json({
            displayName: current.actor.displayName,
            roles: current.actor.roles,
            areas: ["staff"],
          });
        else if (path === "/security/status")
          response.json({
            factorEnabled: false,
            requiresMfa: false,
            paused: true,
          });
        else
          response.json({
            displayName: current.actor.displayName,
            email: current.actor.email,
            preferredTimezone: current.actor.preferredTimezone,
            localPasswordOnly: true,
          });
      })().catch(next);
    });
  }
}
