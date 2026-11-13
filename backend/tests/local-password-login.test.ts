import { afterAll, beforeAll, expect, it } from "vitest";
import { startAccessFixture } from "./support/access-fixture.js";
import { createStaffAuthorization } from "../src/modules/identity/server/authorization.server.js";
import { staffUserModel } from "../src/modules/identity/models/staff-user.model.js";
import { loadBackendEnv } from "../src/config/env.server.js";
let fixture: Awaited<ReturnType<typeof startAccessFixture>>;
beforeAll(async () => {
  fixture = await startAccessFixture({ localPasswordOnly: true });
});
afterAll(async () => {
  await fixture?.close();
});
it("allows password-only local account viewing without forging MFA or enabling sensitive operations", async () => {
  const user = await fixture.identity("admin", true);
  expect(
    await (await fixture.request("/session", { cookie: user.cookie })).json(),
  ).toMatchObject({ status: "primary", requiresMfa: false });
  expect(
    (await fixture.request("/actor?area=staff", { cookie: user.cookie }))
      .status,
  ).toBe(200);
  expect(
    await (await fixture.request("/account", { cookie: user.cookie })).json(),
  ).toMatchObject({ email: user.email, localPasswordOnly: true });
  expect(
    (await fixture.request("/actor?area=content", { cookie: user.cookie }))
      .status,
  ).toBe(403);
  expect(
    (
      await fixture.request("/security/enroll", {
        cookie: user.cookie,
        body: {},
      })
    ).status,
  ).toBe(404);
  expect(
    (
      await fixture.request("/account", {
        cookie: user.cookie,
        body: { displayName: "forged" },
      })
    ).status,
  ).toBe(404);
  await expect(
    createStaffAuthorization(fixture.connection)(user.sid, "staff.manage"),
  ).rejects.toMatchObject({ code: "forbidden" });
  await staffUserModel(fixture.connection).updateOne(
    { _id: user.staff._id },
    { $set: { status: "suspended" } },
  );
  expect(
    (await fixture.request("/account", { cookie: user.cookie })).status,
  ).toBe(401);
});
it("rejects anonymous reads and refuses the flag outside configured local auth", async () => {
  expect((await fixture.request("/account")).status).toBe(401);
  expect(() => loadBackendEnv({ AUTH_LOCAL_PASSWORD_ONLY: "true" })).toThrow();
  expect(() =>
    loadBackendEnv({ APP_ENV: "production", AUTH_LOCAL_PASSWORD_ONLY: "true" }),
  ).toThrow();
});
