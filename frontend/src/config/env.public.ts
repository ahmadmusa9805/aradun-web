type Environment = Record<string, string | undefined>;
const allowedPublicKeys = new Set([
  "NEXT_PUBLIC_API_BASE_URL",
  "NEXT_PUBLIC_GA_MEASUREMENT_ID",
]);

export function loadFrontendEnv(input: Environment) {
  for (const key of Object.keys(input)) {
    if (key.startsWith("NEXT_PUBLIC_") && !allowedPublicKeys.has(key))
      throw new Error(`Unsupported public environment key: ${key}`);
  }
  const appEnv = input.APP_ENV ?? "development";
  if (!["development", "staging", "production"].includes(appEnv))
    throw new Error("Invalid configuration: APP_ENV");
  function origin(value: string | undefined, name: string) {
    try {
      const url = new URL(value ?? "");
      if (
        !["http:", "https:"].includes(url.protocol) ||
        url.username ||
        url.password ||
        url.pathname !== "/" ||
        url.search ||
        url.hash ||
        (appEnv !== "development" && url.protocol !== "https:")
      )
        throw new Error();
      return url.origin;
    } catch {
      throw new Error(`Invalid or missing configuration: ${name}`);
    }
  }
  const appUrl = origin(
    input.APP_URL ??
      (appEnv === "development" ? "http://127.0.0.1:3000" : undefined),
    "APP_URL",
  );
  const apiBaseUrl = origin(
    input.API_BASE_URL ??
      (appEnv === "development" ? "http://127.0.0.1:4000" : undefined),
    "API_BASE_URL",
  );
  const canonicalSiteUrl = input.CANONICAL_SITE_URL
    ? origin(input.CANONICAL_SITE_URL, "CANONICAL_SITE_URL")
    : undefined;
  if (appEnv !== "development" && !canonicalSiteUrl)
    throw new Error("Missing configuration: CANONICAL_SITE_URL");
  if (
    appEnv === "staging" &&
    (appUrl === canonicalSiteUrl ||
      apiBaseUrl === canonicalSiteUrl ||
      !/(^|[.-])(staging|preview)([.-]|$)/.test(new URL(apiBaseUrl).hostname))
  )
    throw new Error("Staging API/origin must be isolated from production");
  if (input.ANALYTICS_ENABLED && input.ANALYTICS_ENABLED !== "false")
    throw new Error("Analytics activation is not implemented");
  if (input.NEXT_PUBLIC_GA_MEASUREMENT_ID)
    throw new Error("Analytics activation is not implemented");
  if (
    input.NEXT_PUBLIC_API_BASE_URL &&
    input.NEXT_PUBLIC_API_BASE_URL !== apiBaseUrl
  )
    throw new Error("Public API target must match the trusted API origin");
  return Object.freeze({
    appEnv,
    appUrl,
    apiBaseUrl,
    canonicalSiteUrl,
    analyticsEnabled: false as const,
    indexingEnabled: appEnv === "production",
  });
}

export function publicSettings(config: ReturnType<typeof loadFrontendEnv>) {
  return Object.freeze({
    appEnv: config.appEnv,
    appUrl: config.appUrl,
    analyticsEnabled: config.analyticsEnabled,
    indexingEnabled: config.indexingEnabled,
  });
}
