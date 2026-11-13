import { defineConfig, devices } from "@playwright/test";
import path from "node:path";

process.env.PLAYWRIGHT_BROWSERS_PATH ??= path.resolve(
  ".tools/playwright-browsers",
);

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: false,
  workers: 1,
  forbidOnly: true,
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "chromium-mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: [
    {
      command: "node --import tsx tests/fixtures/catalog-api.ts",
      env: { NODE_ENV: "test" },
      url: "http://127.0.0.1:4100",
      reuseExistingServer: false,
      timeout: 30000,
    },
    {
      command: "npm run start --workspace @aradun/frontend -- --port 3100",
      url: "http://127.0.0.1:3100",
      reuseExistingServer: false,
      timeout: 60_000,
      env: {
        NEXT_TELEMETRY_DISABLED: "1",
        API_BASE_URL: "http://127.0.0.1:4100",
      },
    },
  ],
});
