import { ConnectionString } from "mongodb-connection-string-url";
import { z } from "zod";
import { loadBackendEnv } from "../../src/config/env.server.js";
import { createDatabase } from "../../src/server/db/connection.server.js";
import { createStaffLifecycle } from "../../src/modules/identity/server/lifecycle.service.server.js";
import { ServiceError } from "../../src/server/errors.js";
const modes = [
  "--inspect",
  "--bootstrap",
  "--provision",
  "--roles",
  "--status",
  "--revoke",
];
async function main() {
  const [mode = "--help", ...extra] = process.argv.slice(2);
  if (extra.length) throw new ServiceError("invalid_input");
  if (mode === "--help") {
    console.log(
      "Local staff lifecycle: --inspect | --bootstrap | --provision | --roles | --status | --revoke. Disabled unless explicitly armed; private bounded JSON via stdin only. Read docs/runbooks/access-lifecycle.md. No operation performed.",
    );
    return;
  }
  if (
    !modes.includes(mode) ||
    process.env.ENABLE_LOCAL_STAFF_LIFECYCLE !== "true" ||
    process.env.APP_ENV !== "development" ||
    (mode === "--bootstrap" &&
      process.env.ALLOW_LOCAL_STAFF_BOOTSTRAP !== "true") ||
    !process.env.DB_OPERATIONS_URI
  )
    throw new ServiceError("forbidden");
  const uri = new ConnectionString(process.env.DB_OPERATIONS_URI);
  if (
    uri.isSRV ||
    !uri.hosts.every((host) =>
      /^(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/.test(host),
    )
  )
    throw new ServiceError("forbidden");
  const config = loadBackendEnv(
    {
      NODE_ENV: process.env.NODE_ENV,
      APP_ENV: process.env.APP_ENV,
      MONGODB_URI: process.env.DB_OPERATIONS_URI,
      MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
    },
    ["database"],
  );
  let text = "";
  for await (const chunk of process.stdin) {
    if (Buffer.byteLength(text) + Buffer.byteLength(chunk) > 16384)
      throw new ServiceError("invalid_input");
    text += String(chunk);
  }
  const input = z
    .strictObject({
      database: z.string(),
      input: z.unknown(),
      sessionId: z
        .string()
        .regex(/^[A-Za-z0-9_-]{24,256}$/)
        .optional(),
    })
    .parse(JSON.parse(text));
  if (
    input.database !== config.database!.name ||
    (mode === "--bootstrap" ? Boolean(input.sessionId) : !input.sessionId)
  )
    throw new ServiceError("forbidden");
  const database = createDatabase(config.database!);
  try {
    const connection = await database.connect();
    const service = await createStaffLifecycle(connection, {
      environment: config.appEnv,
      bootstrapArmed: mode === "--bootstrap",
    });
    const result =
      mode === "--inspect"
        ? await service.inspect(input.sessionId!, input.input)
        : mode === "--bootstrap"
          ? await service.bootstrap(input.input)
          : mode === "--provision"
            ? await service.provision(input.sessionId!, input.input)
            : mode === "--roles"
              ? await service.setRoles(input.sessionId!, input.input)
              : mode === "--status"
                ? await service.setStatus(input.sessionId!, input.input)
                : await service.revoke(input.sessionId!, input.input);
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await database.close();
  }
}
main().catch((error) => {
  console.error(
    `Staff access operation refused or failed${error instanceof ServiceError ? ` (${error.code})` : ""}. Review authorization, target, readiness and the private runbook; no raw error or input is logged.`,
  );
  process.exitCode = 1;
});
