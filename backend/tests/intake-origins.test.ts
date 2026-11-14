import { expect, it } from "vitest";
import { publicIntakeOrigins } from "../src/modules/intake/server/origins.server.js";
import { createApp } from "../src/app.js";
import { loadBackendEnv } from "../src/config/env.server.js";
import { once } from "node:events";
it("allows only same-port http loopback aliases for public development inquiries", () => {
  const c = {
    appEnv: "development",
    appUrl: "http://127.0.0.1:3000",
    allowedOrigins: ["http://127.0.0.1:3000"],
  };
  expect(publicIntakeOrigins(c)).toEqual([
    "http://127.0.0.1:3000",
    "http://localhost:3000",
  ]);
  expect(publicIntakeOrigins(c)).not.toContain("http://localhost:3001");
  expect(c.allowedOrigins).toEqual(["http://127.0.0.1:3000"]);
  expect(publicIntakeOrigins({ ...c, appEnv: "production" })).toEqual(
    c.allowedOrigins,
  );
  expect(publicIntakeOrigins({ ...c, appEnv: "staging" })).toEqual(
    c.allowedOrigins,
  );
  expect(
    publicIntakeOrigins({ ...c, appUrl: "https://example.invalid" }),
  ).toEqual(c.allowedOrigins);
});
it("admits loopback form status/preflight but does not admit that alias to staff APIs", async () => {
  const server = createApp(loadBackendEnv({})).listen(0, "127.0.0.1");
  await once(server, "listening");
  try {
    const address = server.address();
    if (!address || typeof address === "string") throw Error();
    const base = `http://127.0.0.1:${address.port}`;
    expect(
      (
        await fetch(base + "/api/intake/status", {
          headers: { Origin: "http://localhost:3000" },
        })
      ).status,
    ).toBe(200);
    expect(
      (
        await fetch(base + "/api/intake", {
          method: "OPTIONS",
          headers: {
            Origin: "http://localhost:3000",
            "Access-Control-Request-Method": "POST",
          },
        })
      ).status,
    ).toBe(204);
    expect(
      (
        await fetch(base + "/api/identity/session", {
          headers: { Origin: "http://localhost:3000" },
        })
      ).status,
    ).toBe(403);
    expect(
      (
        await fetch(base + "/api/intake/status", {
          headers: { Origin: "http://localhost:3001" },
        })
      ).status,
    ).toBe(403);
  } finally {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
  }
});
