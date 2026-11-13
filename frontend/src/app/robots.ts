import type { MetadataRoute } from "next";
/** No public publication release is approved yet. Robots is never an access control. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
