import { setTimeout as sleep } from "node:timers/promises";
/** Retry connection establishment only; never replay a business mutation or weaken DB guards. */
export async function connectWithRetry<T>(
  connect: () => Promise<T>,
  options: {
    signal: AbortSignal;
    onRetry?: (attempt: number, delayMs: number) => void;
    wait?: (delayMs: number, signal: AbortSignal) => Promise<void>;
  },
) {
  let attempt = 0;
  const wait =
    options.wait ??
    (async (delayMs, signal) => {
      await sleep(delayMs, undefined, { signal });
    });
  for (;;) {
    options.signal.throwIfAborted();
    try {
      const result = await connect();
      options.signal.throwIfAborted();
      return result;
    } catch {
      options.signal.throwIfAborted();
      const delayMs = Math.min(30000, 1000 * 2 ** Math.min(attempt, 5));
      attempt++;
      options.onRetry?.(attempt, delayMs);
      await wait(delayMs, options.signal);
    }
  }
}
