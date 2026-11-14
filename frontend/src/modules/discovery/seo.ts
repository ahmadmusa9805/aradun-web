import type { Metadata } from "next";
export function canonicalUrl(origin: string, path: string): string {
  const base = new URL(origin);
  if (
    !["http:", "https:"].includes(base.protocol) ||
    base.username ||
    base.password ||
    base.pathname !== "/" ||
    base.search ||
    base.hash
  )
    throw new Error("Invalid site origin");
  if (
    !/^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*)?$/.test(
      path,
    )
  )
    throw new Error("Expected a clean canonical path");
  return new URL(path, base).href;
}
export function pageMetadata(
  origin: string,
  path: string,
  title: string,
  description: string,
  index = false,
): Metadata {
  const url = canonicalUrl(origin, path),
    fullTitle = path === "/" ? title : `${title} | ARADUN`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: { index, follow: index },
    openGraph: {
      type: "website",
      siteName: "ARADUN",
      locale: "en_US",
      title: fullTitle,
      description,
      url,
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}
export function breadcrumbData(
  origin: string,
  items: readonly { label: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: canonicalUrl(origin, item.href),
    })),
  };
}
export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
