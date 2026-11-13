import { expect, it, vi } from "vitest";
import { randomUUID } from "node:crypto";
import { startMongoFixture } from "./support/mongo-fixture.js";
import { registeredModels } from "../src/server/db/model-registry.server.js";
import { createStaffLifecycle } from "../src/modules/identity/server/lifecycle.service.server.js";
import * as target from "../src/modules/identity/server/atlas-owner-target.server.js";

it("Atlas bootstrap-only service refuses all other lifecycle operations and another owner identity", async () => {
  const fixture = await startMongoFixture();
  // Substitute only transport identification; every DB operation remains in an owned disposable fixture.
  const guard = vi
    .spyOn(target, "assertAtlasOwnerConnection")
    .mockImplementation(() => {});
  try {
    for (const { model } of registeredModels(fixture.connection)) {
      await model.createCollection();
      await model.createIndexes();
    }
    const service = await createStaffLifecycle(fixture.connection, {
      environment: "development",
      bootstrapArmed: true,
      atlasOwnerBootstrapOnly: true,
    });
    expect(guard).toHaveBeenCalledOnce();
    for (const operation of [
      service.inspect,
      service.provision,
      service.setRoles,
      service.setStatus,
      service.revoke,
    ])
      await expect(operation("SAMPLE-not-a-session", {})).rejects.toMatchObject(
        { code: "forbidden" },
      );
    await expect(
      service.bootstrap({
        commandId: randomUUID(),
        approvalReference: "owner-terminal:SAMPLE",
        email: "sample@example.invalid",
        confirmedOwnerEmail: "sample@example.invalid",
        displayName: "SAMPLE Other",
        password: "SAMPLE-private-fixture-password",
      }),
    ).rejects.toMatchObject({ code: "forbidden" });
    expect(
      await fixture.connection.collection("staffUsers").countDocuments(),
    ).toBe(0);
    expect(
      await fixture.connection.collection("authCredentials").countDocuments(),
    ).toBe(0);
    expect(
      await fixture.connection.collection("auditEvents").countDocuments(),
    ).toBe(0);
  } finally {
    guard.mockRestore();
    await fixture.close();
  }
});
