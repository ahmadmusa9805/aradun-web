import { afterAll, beforeAll, expect, it } from "vitest";
import { randomBytes } from "node:crypto";
import { startAccessFixture } from "./support/access-fixture.js";
import { inspectIntakeReadiness } from "../scripts/intake/check.js";
import { staffUserModel } from "../src/modules/identity/models/staff-user.model.js";

let fixture: Awaited<ReturnType<typeof startAccessFixture>>;
beforeAll(async () => {
  fixture = await startAccessFixture();
});
afterAll(async () => {
  await fixture?.close();
});
it("reports missing account/recipient without changing collections or storing private values", async () => {
  const report = await inspectIntakeReadiness(fixture.connection, {});
  expect(report.checks).toMatchObject({
    databaseIndexesReady: true,
    ownerReady: false,
    recipientReady: false,
    emailConfigurationValid: false,
  });
  expect(report.configurationPrerequisitesMet).toBe(false);
  expect(await staffUserModel(fixture.connection).countDocuments()).toBe(0);
});
it("distinguishes configuration prerequisites from actual activation or delivery, and refuses suspended recipients", async () => {
  const owner = await fixture.identity();
  const env = {
    AUTH_PROVIDER: "aradun-local",
    AUTH_SESSION_SECRET: randomBytes(48).toString("base64url"),
    AUTH_LOGIN_LIMIT: "5",
    AUTH_LOGIN_WINDOW_SECONDS: "900",
    RATE_LIMIT_HASH_SECRET: randomBytes(48).toString("base64url"),
    JOB_TRIGGER_SECRET: randomBytes(48).toString("base64url"),
    INTAKE_STAFF_RECIPIENT_IDS: String(owner.staff._id),
    PRIVACY_NOTICE_VERSION: "SAMPLE-policy-version",
    RESEND_API_KEY: "re_SYNTHETIC_NOT_A_REAL_KEY",
    EMAIL_FROM: "SAMPLE <sender@example.invalid>",
    EMAIL_REPLY_TO: "reply@example.invalid",
    CONTACT_NOTIFICATION_EMAIL: "owner@example.invalid",
  };
  const report = await inspectIntakeReadiness(
    fixture.connection,
    env,
    owner.email,
  );
  expect(report.configurationPrerequisitesMet).toBe(true);
  expect(report).toMatchObject({
    intakeEnabled: false,
    emailConfiguredEnabled: false,
    activationApproved: false,
    deliveryVerified: false,
  });
  const text = JSON.stringify(report);
  for (const value of [
    owner.email,
    owner.password,
    env.AUTH_SESSION_SECRET,
    env.RESEND_API_KEY,
    env.INTAKE_STAFF_RECIPIENT_IDS,
  ])
    expect(text).not.toContain(value);
  await staffUserModel(fixture.connection).updateOne(
    { _id: owner.staff._id },
    { $set: { status: "suspended" } },
  );
  const denied = await inspectIntakeReadiness(
    fixture.connection,
    env,
    owner.email,
  );
  expect("ownerReady" in denied.checks && denied.checks.ownerReady).toBe(false);
  expect(
    "recipientReady" in denied.checks && denied.checks.recipientReady,
  ).toBe(false);
});
