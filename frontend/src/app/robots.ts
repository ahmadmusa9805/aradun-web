import type { MetadataRoute } from "next";
import { frontendEnv } from "@/config/env.server";
import { getPublicRelease } from "@/modules/discovery/publication.server";
export const dynamic = "force-dynamic";
/** No public publication release is approved yet. Robots is never an access control. */
export default async function robots(): Promise<MetadataRoute.Robots> {
  if (frontendEnv.indexingEnabled && (await getPublicRelease()))
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/staff/", "/dashboard/", "/api/", "/search", "/thank-you"],
      },
      sitemap: `${frontendEnv.canonicalSiteUrl}/sitemap.xml`,
    };
  return { rules: { userAgent: "*", disallow: "/" } };
}
