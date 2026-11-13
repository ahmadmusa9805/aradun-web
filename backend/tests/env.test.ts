import { expect, it } from "vitest";
import { loadBackendEnv } from "../src/config/env.server.js";
import { publicSettings } from "../src/config/env.public.js";

const stage = {
  APP_ENV: "staging",
  APP_URL: "https://staging.example.invalid",
  ALLOWED_ORIGINS: "https://staging.example.invalid",
  PORT: "4000",
};
it.each([
  { DB_MAX_POOL_SIZE: "0" },
  { DB_MAX_POOL_SIZE: "21" },
  { DB_SERVER_SELECTION_TIMEOUT_MS: "Infinity" },
  { DB_WAIT_QUEUE_TIMEOUT_MS: "0" },
])("rejects unbounded or invalid DB connection budgets %#", (settings) => {
  expect(() =>
    loadBackendEnv({
      MONGODB_URI: "mongodb://127.0.0.1/aradun_development",
      ...settings,
    }),
  ).toThrow();
});
it("starts the local foundation without activating missing integrations", () => {
  expect(loadBackendEnv({}).port).toBe(4000);
  for (const feature of [
    "database",
    "authentication",
    "notifications",
  ] as const)
    expect(() => loadBackendEnv({}, [feature])).toThrow();
});
it.each([
  "mongodb://127.0.0.1:27017/aradun_development?replicaSet=rs0",
  "mongodb://mongo:27017/aradun_development?replicaSet=rs0",
  "mongodb://mongo1:27017,mongo2:27017/aradun_development?replicaSet=rs0",
  "mongodb+srv://demo:synthetic-password@cluster.example.invalid/aradun_development?retryWrites=true",
])("accepts configured MongoDB URI syntax without connecting: %s", (uri) => {
  expect(
    loadBackendEnv({ MONGODB_URI: uri }, ["database"]).database,
  ).toMatchObject({
    uri,
    name: "aradun_development",
  });
});
it.each([
  { PORT: "not-a-port" },
  { APP_URL: "https://user:private@example.invalid" },
  { ALLOWED_ORIGINS: "*" },
  { NODE_ENV: "production" },
  { ...stage, MONGODB_URI: "mongodb://host/aradun_production?tls=true" },
  { ...stage, MONGODB_URI: "mongodb://host/aradun_staging?tls=false" },
  {
    ...stage,
    MONGODB_URI:
      "mongodb+srv://cluster.example.invalid/aradun_staging?tlsInsecure=true",
  },
  { ...stage, EMAIL_PROVIDER: "live" },
  { ...stage, EMAIL_SANDBOX_RECIPIENT: "real@example.com" },
])("rejects unsafe or incomplete environment configuration %#", (input) =>
  expect(() => loadBackendEnv(input)).toThrow(),
);
it("accepts isolated staging TLS and synthetic recipients", () => {
  expect(
    loadBackendEnv({
      ...stage,
      MONGODB_URI: "mongodb+srv://cluster.example.invalid/aradun_staging",
      EMAIL_PROVIDER: "sink",
      EMAIL_SANDBOX_RECIPIENT: "qa@example.invalid",
    }).appEnv,
  ).toBe("staging");
});
it("never includes URI credentials in validation errors or public projection", () => {
  const secret = "PRIVATE-SYNTHETIC-SENTINEL";
  try {
    loadBackendEnv({
      MONGODB_URI: `mongodb://demo:${secret}@host/aradun_production`,
    });
    throw new Error("Expected refusal");
  } catch (error) {
    expect(String(error)).toContain("MONGODB_URI");
    expect(String(error)).not.toContain(secret);
  }
  const config = loadBackendEnv({
    MONGODB_URI: `mongodb://demo:${secret}@host/aradun_development`,
    AUTH_SECRET: secret,
  });
  expect(Object.keys(publicSettings(config)).sort()).toEqual([
    "analyticsEnabled",
    "appEnv",
    "appUrl",
  ]);
  expect(JSON.stringify(publicSettings(config))).not.toContain(secret);
});
