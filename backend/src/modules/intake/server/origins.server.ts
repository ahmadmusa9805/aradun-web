/** Public, unauthenticated local intake only. Never relax hosted or staff origins. */
export function publicIntakeOrigins(config: {
  appEnv: string;
  appUrl: string;
  allowedOrigins: readonly string[];
}) {
  const result = [...config.allowedOrigins];
  if (config.appEnv !== "development") return result;
  const local = new URL(config.appUrl);
  if (
    local.protocol !== "http:" ||
    !["127.0.0.1", "localhost"].includes(local.hostname)
  )
    return result;
  for (const host of ["127.0.0.1", "localhost"]) {
    local.hostname = host;
    if (!result.includes(local.origin)) result.push(local.origin);
  }
  return result;
}
