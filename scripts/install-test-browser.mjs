import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const child = spawn(
  process.execPath,
  [
    fileURLToPath(import.meta.resolve("@playwright/test/cli")),
    "install",
    "chromium",
  ],
  {
    stdio: "inherit",
    windowsHide: true,
    env: {
      ...process.env,
      PLAYWRIGHT_BROWSERS_PATH: path.resolve(".tools/playwright-browsers"),
    },
  },
);
child.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
