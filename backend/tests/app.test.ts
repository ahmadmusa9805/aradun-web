import { app } from "@/app.js";
import { afterAll, beforeAll, expect, it } from "vitest";
import type { Server } from "node:http";

let server: Server;
let url: string;
beforeAll(async () => {
  server = await new Promise<Server>((resolve, reject) => {
    const running = app.listen(0, "127.0.0.1", () => resolve(running));
    running.once("error", reject);
  });
  const address = server.address();
  if (!address || typeof address === "string")
    throw new Error("Missing test HTTP port");
  url = `http://127.0.0.1:${address.port}`;
});
afterAll(async () => {
  if (server)
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
});
it("serves the existing Express foundation over HTTP using the backend-local alias", async () => {
  const response = await fetch(url);
  expect(response.status).toBe(200);
  expect(await response.json()).toEqual({
    application: "ARADUN API",
    stage: "foundation",
  });
  expect(response.headers.get("x-powered-by")).toBeNull();
  expect((await fetch(`${url}/not-a-foundation-route`)).status).toBe(404);
});

it("enforces exact origins and exposes safe foundation headers", async () => {
  const response = await fetch(url, {
    headers: { Origin: "http://127.0.0.1:3000" },
  });
  expect(response.headers.get("access-control-allow-origin")).toBe(
    "http://127.0.0.1:3000",
  );
  expect(response.headers.get("x-content-type-options")).toBe("nosniff");
  expect(response.headers.get("x-robots-tag")).toBe("noindex, nofollow");
  expect(
    (await fetch(url, { headers: { Origin: "https://evil.example.invalid" } }))
      .status,
  ).toBe(403);
  expect((await fetch(url, { method: "POST" })).status).toBe(403);
  expect(
    (
      await fetch(url, {
        method: "OPTIONS",
        headers: {
          Origin: "http://127.0.0.1:3000",
          "Access-Control-Request-Method": "GET",
        },
      })
    ).status,
  ).toBe(204);
  expect(
    (
      await fetch(url, {
        method: "OPTIONS",
        headers: {
          Origin: "http://127.0.0.1:3000",
          "Access-Control-Request-Method": "POST",
        },
      })
    ).status,
  ).toBe(403);
});
