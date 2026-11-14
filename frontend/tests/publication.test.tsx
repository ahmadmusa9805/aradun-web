import { expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import {
  readPublicRelease,
  publishedPaths,
  indexablePublicPath,
} from "@/modules/discovery/publication";
import { Availability } from "@/modules/catalog/components/availability";
const config = {
  appEnv: "production",
  publicReleaseId: "SAMPLE-release",
  apiBaseUrl: "https://api.example.invalid",
};
const release = {
  releaseId: "SAMPLE-release",
  catalogPaths: [
    ...Array.from({ length: 65 }, (_, i) => `/services/sample-${i}`),
    ...Array.from({ length: 5 }, (_, i) => `/solutions/sample-${i}`),
  ],
};
it("uses only exact approved release DTOs, no redirects/cache and fails closed on errors or withdrawal", async () => {
  const fetcher = vi
    .fn<typeof fetch>()
    .mockResolvedValue(new Response(JSON.stringify(release)));
  expect(await readPublicRelease(config, fetcher)).toEqual(release);
  expect(fetcher.mock.calls[0]?.[1]).toMatchObject({
    cache: "no-store",
    redirect: "error",
  });
  for (const value of [
    { ...release, releaseId: "wrong" },
    {
      ...release,
      catalogPaths: [...release.catalogPaths.slice(1), "/dashboard/account"],
    },
    { ...release, approvalSecret: "PRIVATE" },
    { ...release, catalogPaths: Array(70).fill("/services/same") },
  ]) {
    fetcher.mockResolvedValueOnce(new Response(JSON.stringify(value)));
    expect(await readPublicRelease(config, fetcher)).toBeNull();
  }
  fetcher.mockResolvedValueOnce(new Response(null, { status: 404 }));
  expect(await readPublicRelease(config, fetcher)).toBeNull();
  fetcher.mockRejectedValueOnce(Error("SAMPLE outage"));
  expect(await readPublicRelease(config, fetcher)).toBeNull();
  fetcher.mockClear();
  expect(
    await readPublicRelease({ ...config, appEnv: "development" }, fetcher),
  ).toBeNull();
  expect(fetcher).not.toHaveBeenCalled();
});
it("builds only canonical public discovery addresses without private, receipt, search or invented dynamic records", () => {
  const paths = publishedPaths(release);
  expect(paths).toHaveLength(89);
  for (const path of [
    "/search",
    "/thank-you",
    "/staff/login",
    "/dashboard/leads",
    "/cookies",
    "/our-work/unpublished",
    "/insights/unpublished",
    "/faq/unknown",
  ]) {
    expect(paths).not.toContain(path);
    expect(indexablePublicPath(path)).toBe(false);
  }
  expect(indexablePublicPath("/faq/services")).toBe(true);
  expect(indexablePublicPath("/services/name?secret=x")).toBe(false);
});
it("retains clear reviewed availability and no automatic booking promise", () => {
  expect(renderToStaticMarkup(<Availability value="coming-soon" />)).toContain(
    "Coming soon",
  );
  expect(
    renderToStaticMarkup(<Availability value="specialist-led" />),
  ).toContain("require confirmation");
  expect(renderToStaticMarkup(<Availability />)).toBe("");
});
