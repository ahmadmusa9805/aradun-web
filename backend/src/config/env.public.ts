import type { BackendEnv } from "./env.server.js";

export function publicSettings(config: BackendEnv) {
  return Object.freeze({
    appEnv: config.appEnv,
    appUrl: config.appUrl,
    analyticsEnabled: config.analyticsEnabled,
  });
}
