import { expect, it } from "vitest";
import { loadFrontendEnv, publicSettings } from "@/config/env.public";

const stage = {
  APP_ENV: "staging",
  APP_URL: "https://staging.example.invalid",
  API_BASE_URL: "https://api-staging.example.invalid",
  CANONICAL_SITE_URL: "https://www.example.invalid",
};
it("requires an explicit valid release identity before production indexing is eligible", () => {
  const production = {
    APP_ENV: "production",
    APP_URL: "https://www.example.invalid",
    API_BASE_URL: "https://api.example.invalid",
    CANONICAL_SITE_URL: "https://www.example.invalid",
  };
  expect(loadFrontendEnv(production).indexingEnabled).toBe(false);
  expect(
    loadFrontendEnv({ ...production, PUBLIC_RELEASE_ID: "SAMPLE-release" })
      .indexingEnabled,
  ).toBe(true);
  for (const id of ["", "../invalid", "SAMPLE?token=x"])
    expect(() =>
      loadFrontendEnv({ ...production, PUBLIC_RELEASE_ID: id }),
    ).toThrow();
});
it("defaults local development to noindex and analytics disabled", () => {
  expect(loadFrontendEnv({}).indexingEnabled).toBe(false);
  expect(loadFrontendEnv(stage).analyticsEnabled).toBe(false);
});
it.each([
  { APP_ENV: "staging" },
  { ...stage, API_BASE_URL: "https://api.example.invalid" },
  { ...stage, APP_URL: stage.CANONICAL_SITE_URL },
  { ...stage, API_BASE_URL: "http://api-staging.example.invalid" },
  { NEXT_PUBLIC_AUTH_SECRET: "PRIVATE-SYNTHETIC-SENTINEL" },
  { ANALYTICS_ENABLED: "true" },
  { NEXT_PUBLIC_API_BASE_URL: "https://wrong.example.invalid" },
])("fails closed for unsafe public/preview settings %#", (input) =>
  expect(() => loadFrontendEnv(input)).toThrow(),
);
it("projects only explicit public settings and never backend secrets", () => {
  const value = "PRIVATE-SYNTHETIC-SENTINEL";
  const result = publicSettings(
    loadFrontendEnv({
      MONGODB_URI: value,
      AUTH_SECRET: value,
      EMAIL_API_KEY: value,
      JOB_TRIGGER_SECRET: value,
    }),
  );
  expect(Object.keys(result).sort()).toEqual([
    "analyticsEnabled",
    "appEnv",
    "appUrl",
    "indexingEnabled",
  ]);
  expect(JSON.stringify(result)).not.toContain(value);
});
