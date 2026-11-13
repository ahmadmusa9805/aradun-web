import { spawn } from "node:child_process";
import { once } from "node:events";
import { expect, it } from "vitest";

it("explains missing MongoDB URI in development without logging other credentials", async () => {
  const child = spawn(process.execPath, ["--import", "tsx", "src/server.ts"], {
    cwd: "backend",
    windowsHide: true,
    stdio: ["ignore", "ignore", "pipe"],
    env: {
      ...process.env,
      NODE_ENV: "development",
      APP_ENV: "development",
      MONGODB_URI: "",
      MONGODB_DB_NAME: "",
      AUTH_SECRET: "SAMPLE_PRIVATE_STARTUP_SECRET",
    },
  });
  let output = "";
  child.stderr.on("data", (data: Buffer) => {
    output += data.toString();
  });
  const [code] = await once(child, "exit");
  expect(code).toBe(1);
  expect(output).toContain("MONGODB_URI is missing");
  expect(output).toContain("backend/.env");
  expect(output).not.toContain("SAMPLE_PRIVATE_STARTUP_SECRET");
});
