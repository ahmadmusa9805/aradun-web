import type { MetadataRoute } from "next";
import { frontendEnv } from "@/config/env.server";
import { getPublicRelease } from "@/modules/discovery/publication.server";
export const dynamic = "force-dynamic";
import { publishedPaths } from "@/modules/discovery/publication";
import { canonicalUrl } from "@/modules/discovery/seo";
/** All current records remain review/draft. Never fabricate publication or last-modified dates. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!frontendEnv.indexingEnabled) return [];
  const release = await getPublicRelease();
  return release
    ? publishedPaths(release).map((path) => ({
        url: canonicalUrl(frontendEnv.canonicalSiteUrl!, path),
      }))
    : [];
}
