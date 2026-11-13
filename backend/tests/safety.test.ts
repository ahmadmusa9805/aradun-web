import { describe, expect, it } from "vitest";
import { assertTestTarget } from "./support/test-target.js";
import { createNotificationDouble } from "./support/provider-double.js";

const runId = "a".repeat(32);
const replicaSet = `aradun_rs_${runId}`;
const target = {
  runId,
  replicaSet,
  port: 27191,
  uri: `mongodb://127.0.0.1:27191/aradun_test_${runId}?replicaSet=${replicaSet}&directConnection=true`,
};

describe("fail-closed test-target validation", () => {
  it("accepts only the exact test environment and explicitly owned target", () => {
    expect(assertTestTarget(target, "test")).toEqual(target);
    expect(() => assertTestTarget(target, "production")).toThrow(
      "NODE_ENV=test",
    );
    expect(() => assertTestTarget(target, "")).toThrow("NODE_ENV=test");
  });
  it.each([
    "mongodb+srv://example.invalid/aradun_test",
    "mongodb://127.0.0.1:27191/aradun_production",
    "mongodb://localhost:27191/aradun_test",
    target.uri.replace("127.0.0.1", "192.0.2.1"),
    target.uri.replace("27191", "27017"),
    target.uri.replace("127.0.0.1", "user:secret@127.0.0.1"),
    `${target.uri}&unknown=true`,
  ])("refuses unsafe URI without opening a connection", (uri) => {
    expect(() => assertTestTarget({ ...target, uri }, "test")).toThrow();
  });
  it("rejects missing markers and unexpected fields rather than trusting a test suffix", () => {
    expect(() => assertTestTarget({ ...target, runId: "" }, "test")).toThrow();
    expect(() =>
      assertTestTarget({ ...target, allowProduction: true }, "test"),
    ).toThrow();
  });
});

it("uses a controlled notification double and refuses real recipients", async () => {
  const double = createNotificationDouble();
  await expect(
    double.send({ to: "fixture@example.invalid", text: "SYNTHETIC fixture" }),
  ).resolves.toEqual({ id: "synthetic-1", accepted: true });
  await expect(
    double.send({ to: "person@example.com", text: "Must not send" }),
  ).rejects.toThrow(".invalid");
  expect(double.deliveries).toHaveLength(1);
});
