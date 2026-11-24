import { spawn } from "node:child_process";

if (Number(process.versions.node.split(".")[0]) !== 24) {
  console.error(
    "Activate Node.js 24, or run scripts/npm.cmd run dev on Windows.",
  );
  process.exit(1);
}
if (!process.env.npm_execpath) {
  console.error("Start both apps with npm run dev.");
  process.exit(1);
}
const children = ["frontend", "backend"].map((workspace) =>
  spawn(process.execPath, [process.env.npm_execpath, "run", workspace], {
    stdio: "inherit",
    env: process.env,
  }),
);
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  process.exitCode = code;
  for (const child of children) {
    if (!child.pid || child.exitCode !== null) continue;
    if (process.platform === "win32") {
      spawn("taskkill.exe", ["/pid", String(child.pid), "/t", "/f"], {
        stdio: "ignore",
        windowsHide: true,
      });
    } else child.kill("SIGTERM");
  }
}
for (const child of children) {
  child.on("error", () => stop(1));
  child.on("exit", (code) => stop(code ?? 1));
}
process.on("SIGINT", () => stop());
process.on("SIGTERM", () => stop());
