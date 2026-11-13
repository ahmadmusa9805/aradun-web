import { expect, it } from "vitest";
import {
  canonicalUrl,
  pageMetadata,
  breadcrumbData,
  jsonLd,
} from "@/modules/discovery/seo";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
it("uses one clean origin and matching canonical/sharing URLs while previews stay noindex", () => {
  const result = pageMetadata(
    "https://aradun.com",
    "/services/business-website-development",
    "Business Website Development",
    "Source-backed description",
  );
  expect(result.alternates?.canonical).toBe(
    "https://aradun.com/services/business-website-development",
  );
  expect(result.openGraph).toMatchObject({
    url: result.alternates?.canonical,
    title: result.title,
  });
  expect(result.twitter).toMatchObject({
    card: "summary",
    description: "Source-backed description",
  });
  expect(result.robots).toEqual({ index: false, follow: false });
});
it.each([
  "//evil.invalid",
  "/services?tracking=1",
  "/services#section",
  "/../staff/login",
  "/services/%2e%2e",
  "https://evil.invalid",
  "/services\\name",
])("rejects untrusted or noncanonical paths %s", (path) => {
  expect(() => canonicalUrl("https://aradun.com", path)).toThrow();
});
it("escapes script-breaking content without changing parsed breadcrumb names", () => {
  const name = "SAMPLE </script><script>alert(1)</script>",
    data = breadcrumbData("https://aradun.com", [
      { label: "Home", href: "/" },
      { label: name, href: "/services" },
    ]),
    serialized = jsonLd(data);
  expect(serialized).not.toContain("<");
  expect(JSON.parse(serialized).itemListElement[1].name).toBe(name);
  expect(data.itemListElement.map((item) => item.position)).toEqual([1, 2]);
});
it("does not expose draft, utility or private routes through discovery files", () => {
  expect(sitemap()).toEqual([]);
  expect(robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
});
