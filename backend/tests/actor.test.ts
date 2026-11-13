import { beforeAll, afterAll, it, expect } from "vitest";
import {
  startAccessFixture,
  deniedSessionKinds,
} from "./support/access-fixture.js";
import { staffUserModel } from "../src/modules/identity/models/staff-user.model.js";
let fixture: Awaited<ReturnType<typeof startAccessFixture>>;
beforeAll(async () => {
  fixture = await startAccessFixture();
});
afterAll(async () => {
  await fixture?.close();
});
for (const kind of deniedSessionKinds)
  it(`actor read rejects ${kind} independently of the shell`, async () => {
    const actor = await fixture.denied(kind),
      response = await fixture.request("/actor", { cookie: actor.cookie });
    expect(response.status).toBe(actor.expected);
    expect(response.headers.get("cache-control")).toBe("no-store");
  });
it("returns only safe actor fields and authorizes Content separately for each role", async () => {
  for (const role of ["admin", "sales", "editor"] as const) {
    const actor = await fixture.identity(role),
      response = await fixture.request("/actor?area=staff", {
        cookie: actor.cookie,
      }),
      body = await response.json();
    expect(response.status).toBe(200);
    expect(Object.keys(body).sort()).toEqual(["areas", "displayName", "roles"]);
    expect(body.roles).toEqual([role]);
    expect(JSON.stringify(body)).not.toContain(actor.email);
    expect(JSON.stringify(body)).not.toContain(actor.sid);
    const content = await fixture.request("/actor?area=content", {
      cookie: actor.cookie,
    });
    expect(content.status).toBe(role === "sales" ? 403 : 200);
  }
});
it("rechecks current roles/version and rejects area/role injection", async () => {
  const actor = await fixture.identity();
  expect(
    (await fixture.request("/actor?area=content", { cookie: actor.cookie }))
      .status,
  ).toBe(200);
  await staffUserModel(fixture.connection).updateOne(
    { _id: actor.staff._id },
    { $set: { roles: ["sales"] } },
  );
  expect(
    (await fixture.request("/actor?area=content", { cookie: actor.cookie }))
      .status,
  ).toBe(403);
  expect(
    (await (await fixture.request("/actor", { cookie: actor.cookie })).json())
      .roles,
  ).toEqual(["sales"]);
  expect(
    (
      await fixture.request("/actor?area=content&roles=admin", {
        cookie: actor.cookie,
      })
    ).status,
  ).toBe(400);
  expect(
    (await fixture.request("/actor?area=finance", { cookie: actor.cookie }))
      .status,
  ).toBe(400);
  await staffUserModel(fixture.connection).updateOne(
    { _id: actor.staff._id },
    { $inc: { accessVersion: 1 } },
  );
  expect(
    (await fixture.request("/actor", { cookie: actor.cookie })).status,
  ).toBe(401);
});
