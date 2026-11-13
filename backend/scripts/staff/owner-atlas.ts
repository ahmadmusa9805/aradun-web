import { z } from "zod";
import { loadBackendEnv } from "../../src/config/env.server.js";
import { createDatabase } from "../../src/server/db/connection.server.js";
import { checkIndexes } from "../../src/server/db/index-plan.server.js";
import { assertAtlasOwnerUri } from "../../src/modules/identity/server/atlas-owner-target.server.js";
import {
  bootstrapInput,
  createStaffLifecycle,
} from "../../src/modules/identity/server/lifecycle.service.server.js";
import { lifecycleControlModel } from "../../src/modules/identity/models/lifecycle-control.model.js";

async function main() {
  const [mode = "--check", ...extra] = process.argv.slice(2);
  if (
    extra.length ||
    !["--check", "--bootstrap"].includes(mode) ||
    process.env.NODE_ENV === "test" ||
    (mode === "--bootstrap" &&
      process.env.ARADUN_ATLAS_OWNER_SETUP !== "confirmed")
  )
    throw Error();
  const config = loadBackendEnv(process.env, ["database"]);
  assertAtlasOwnerUri(
    config.database!.uri,
    config.database!.name,
    config.appEnv,
  );
  const database = createDatabase(config.database!);
  try {
    const connection = await database.connect();
    const plan = await checkIndexes(connection);
    if (
      plan.results.some(
        (row) =>
          row.missingCollection ||
          row.missing.length ||
          row.drift.length ||
          row.extra.length,
      )
    )
      throw Error();
    const service = await createStaffLifecycle(connection, {
      environment: config.appEnv,
      bootstrapArmed: true,
      atlasOwnerBootstrapOnly: true,
    });
    const staff = await connection
      .collection("staffUsers")
      .countDocuments({}, { maxTimeMS: 2000 });
    const credentials = await connection
      .collection("authCredentials")
      .countDocuments({}, { maxTimeMS: 2000 });
    const control = await lifecycleControlModel(connection)
      .findById("staff-access")
      .select("bootstrapCompletedAt")
      .maxTimeMS(2000)
      .lean();
    const ownerAlreadyPresent =
      staff !== 0 || credentials !== 0 || !!control?.bootstrapCompletedAt;
    if (mode === "--check") {
      console.log(
        JSON.stringify({
          target: "aradun_development",
          indexesReady: true,
          ownerAlreadyPresent,
          bootstrapReady: !ownerAlreadyPresent,
          accountCreated: false,
        }),
      );
      return;
    }
    if (ownerAlreadyPresent) throw Error();
    let text = "";
    for await (const chunk of process.stdin) {
      if (Buffer.byteLength(text) + Buffer.byteLength(chunk) > 16384)
        throw Error();
      text += String(chunk);
    }
    const input = z
      .strictObject({
        database: z.literal("aradun_development"),
        input: bootstrapInput,
      })
      .parse(JSON.parse(text));
    if (
      input.input.email !== "ahmadmusa@aradun.com" ||
      input.input.confirmedOwnerEmail !== "ahmadmusa@aradun.com" ||
      input.input.displayName !== "Ahmad Musa Abdullah" ||
      !input.input.approvalReference.startsWith("owner-terminal:")
    )
      throw Error();
    const receipt = await service.bootstrap(input.input);
    console.log(
      JSON.stringify({
        staffUserId: receipt.staffUserId,
        auditId: receipt.auditId,
        requiresMfaEnrollment: receipt.requiresMfaEnrollment,
      }),
    );
  } finally {
    await database.close();
  }
}
main().catch(() => {
  console.error(
    "Atlas owner setup refused or failed. Check target, indexes, password and existing owner state. No private input or driver error is logged; never reset records to retry.",
  );
  process.exitCode = 1;
});
