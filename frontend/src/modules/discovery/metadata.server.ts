import "server-only";
import { frontendEnv } from "@/config/env.server";
import { pageMetadata } from "./seo";
import { indexablePublicPath } from "./publication";
export const siteOrigin = frontendEnv.canonicalSiteUrl ?? frontendEnv.appUrl;
export function publicMetadata(
  title: string,
  description: string,
  path: string,
) {
  return pageMetadata(
    siteOrigin,
    path,
    title,
    description,
    frontendEnv.indexingEnabled && indexablePublicPath(path),
  );
}
