import { beforeEach, expect, it, vi } from "vitest";
const state = vi.hoisted(() => ({
  config: {
    appEnv: "production",
    indexingEnabled: true,
    canonicalSiteUrl: "https://www.example.invalid",
    appUrl: "https://www.example.invalid",
    publicReleaseId: "SAMPLE-release",
  },
  read: vi.fn(),
}));
vi.mock("server-only", () => ({}));
vi.mock("@/config/env.server", () => ({ frontendEnv: state.config }));
vi.mock("@/modules/discovery/publication.server", () => ({
  getPublicRelease: state.read,
}));
vi.mock("next/navigation", () => ({
  notFound: () => {
    throw Error("SAMPLE notFound");
  },
}));
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import PublicLayout from "@/app/(public)/layout";
import { publicMetadata } from "@/modules/discovery/metadata.server";
const release = {
  releaseId: "SAMPLE-release",
  catalogPaths: [
    ...Array.from({ length: 65 }, (_, i) => `/services/sample-${i}`),
    ...Array.from({ length: 5 }, (_, i) => `/solutions/sample-${i}`),
  ],
};
beforeEach(() => {
  state.config.appEnv = "production";
  state.config.indexingEnabled = true;
  state.read.mockReset();
  state.read.mockResolvedValue(release);
});
it("allows only approved hosted rendering and excludes utilities/private paths from active discovery", async () => {
  await expect(
    PublicLayout({ children: "SAMPLE public content" }),
  ).resolves.toBeTruthy();
  expect(await robots()).toMatchObject({
    rules: {
      allow: "/",
      disallow: ["/staff/", "/dashboard/", "/api/", "/search", "/thank-you"],
    },
    sitemap: "https://www.example.invalid/sitemap.xml",
  });
  const urls = await sitemap();
  expect(urls).toHaveLength(89);
  expect(
    urls.every((item) => item.url.startsWith("https://www.example.invalid/")),
  ).toBe(true);
  expect(
    urls.some((item) =>
      /staff|dashboard|thank-you|search|cookies/.test(item.url),
    ),
  ).toBe(false);
  expect(urls.every((item) => item.lastModified === undefined)).toBe(true);
  expect(publicMetadata("SAMPLE", "SAMPLE", "/contact").robots).toEqual({
    index: true,
    follow: true,
  });
  expect(publicMetadata("SAMPLE", "SAMPLE", "/thank-you").robots).toEqual({
    index: false,
    follow: false,
  });
});
it("withdraws hosted rendering and all discovery when the approved publication is unavailable", async () => {
  state.read.mockResolvedValue(null);
  await expect(PublicLayout({ children: "SAMPLE" })).rejects.toThrow(
    "SAMPLE notFound",
  );
  expect(await sitemap()).toEqual([]);
  expect(await robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
});
it("keeps approved staging and development noindex without enabling tracking or future routes", async () => {
  state.config.appEnv = "staging";
  state.config.indexingEnabled = false;
  await expect(PublicLayout({ children: "SAMPLE" })).resolves.toBeTruthy();
  expect(await sitemap()).toEqual([]);
  expect(await robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
  expect(publicMetadata("SAMPLE", "SAMPLE", "/contact").robots).toEqual({
    index: false,
    follow: false,
  });
  state.config.appEnv = "development";
  state.read.mockClear();
  await expect(PublicLayout({ children: "SAMPLE" })).resolves.toBeTruthy();
  expect(state.read).not.toHaveBeenCalled();
});
