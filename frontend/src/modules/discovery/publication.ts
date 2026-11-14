import { publicFaqs } from "../content/data/public-copy";

export type PublicRelease = { releaseId: string; catalogPaths: string[] };
export const publicBasePaths = [
  "/",
  "/about",
  "/services",
  "/solutions",
  "/pricing",
  "/our-work",
  "/insights",
  "/faq",
  "/contact",
  "/get-a-quote",
  "/consultation",
  "/privacy",
  "/terms",
];
const helpPaths = publicFaqs.map((item) => `/faq/${item.id}`);
const catalogPath = (path: string) =>
  path.length <= 170 &&
  /^\/(?:services|solutions)\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(path);
export function indexablePublicPath(path: string) {
  return (
    publicBasePaths.includes(path) ||
    helpPaths.includes(path) ||
    catalogPath(path)
  );
}
export function publishedPaths(release: PublicRelease) {
  return [
    ...new Set([...publicBasePaths, ...helpPaths, ...release.catalogPaths]),
  ].sort();
}
export async function readPublicRelease(
  config: {
    appEnv: string;
    publicReleaseId?: string | undefined;
    apiBaseUrl: string;
  },
  fetcher: typeof fetch = fetch,
): Promise<PublicRelease | null> {
  if (config.appEnv === "development" || !config.publicReleaseId) return null;
  try {
    const response = await fetcher(
      `${config.apiBaseUrl}/api/catalog/publication`,
      {
        cache: "no-store",
        signal: AbortSignal.timeout(3000),
        redirect: "error",
      },
    );
    if (!response.ok) return null;
    const value: unknown = await response.json();
    if (!value || typeof value !== "object") return null;
    const row = value as Record<string, unknown>;
    if (
      Object.keys(row).sort().join(",") !== "catalogPaths,releaseId" ||
      row.releaseId !== config.publicReleaseId ||
      !Array.isArray(row.catalogPaths) ||
      row.catalogPaths.length !== 70 ||
      !row.catalogPaths.every(
        (path) => typeof path === "string" && catalogPath(path),
      ) ||
      new Set(row.catalogPaths).size !== 70 ||
      row.catalogPaths.filter((path) => String(path).startsWith("/services/"))
        .length !== 65 ||
      row.catalogPaths.filter((path) => String(path).startsWith("/solutions/"))
        .length !== 5
    )
      return null;
    return {
      releaseId: row.releaseId as string,
      catalogPaths: row.catalogPaths as string[],
    };
  } catch {
    return null;
  }
}
