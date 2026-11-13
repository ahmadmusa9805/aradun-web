import type { MetadataRoute } from "next";
/** All current records remain review/draft. Never fabricate publication or last-modified dates. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
