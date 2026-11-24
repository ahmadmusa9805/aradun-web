import { it, expect, vi } from "vitest";
import { connectWithRetry } from "../src/server/db/startup-retry.server.js";
it("recovers from a transient startup outage and caps retry intervals", async () => {
  let attempts = 0;
  const delays: number[] = [];
  const connection = { ready: true };
  const value = await connectWithRetry(
    async () => {
      if (++attempts <= 8) throw new Error("SAMPLE network outage");
      return connection;
    },
    {
      signal: new AbortController().signal,
      wait: async (ms) => {
        delays.push(ms);
      },
    },
  );
  expect(value).toBe(connection);
  expect(delays).toEqual([1000, 2000, 4000, 8000, 16000, 30000, 30000, 30000]);
});
it("stops retrying on shutdown instead of leaving a background loop", async () => {
  const control = new AbortController();
  const connect = vi.fn(async () => {
    throw new Error("SAMPLE offline");
  });
  await expect(
    connectWithRetry(connect, {
      signal: control.signal,
      wait: async () => {
        control.abort();
      },
    }),
  ).rejects.toThrow();
  expect(connect).toHaveBeenCalledTimes(1);
});
it("does not continue startup if shutdown arrives during a successful connection", async () => {
  const control = new AbortController();
  await expect(
    connectWithRetry(
      async () => {
        control.abort();
        return { ready: true };
      },
      { signal: control.signal },
    ),
  ).rejects.toThrow();
});
