import { afterEach, expect, it, vi } from "vitest";
vi.mock("server-only", () => ({}));
vi.mock("@/config/env.server", () => ({
  frontendEnv: { appEnv: "development", apiBaseUrl: "http://127.0.0.1:4000" },
}));
import { getCategories } from "@/modules/catalog/catalog-api.server";
import navigation from "@/modules/catalog/data/navigation.generated.json";
const payload = {
  preview: true,
  categories: navigation.categories.map((item) => ({
    id: item.id,
    name: item.label,
    slug: item.href.split("/").at(-1),
    href: item.href,
    headline: "SAMPLE source catalog",
  })),
};
afterEach(() => vi.unstubAllGlobals());
it("retries a transient catalog read once and returns the validated response", async () => {
  const fetcher = vi
    .fn()
    .mockResolvedValueOnce(new Response("", { status: 503 }))
    .mockResolvedValueOnce(Response.json(payload));
  vi.stubGlobal("fetch", fetcher);
  expect((await getCategories()).state).toBe("ready");
  expect(fetcher).toHaveBeenCalledTimes(2);
});
it("does not retry rate denial or accept an unpublished/mismatched response", async () => {
  const fetcher = vi.fn().mockResolvedValue(new Response("", { status: 429 }));
  vi.stubGlobal("fetch", fetcher);
  expect((await getCategories()).state).toBe("unavailable");
  expect(fetcher).toHaveBeenCalledTimes(1);
  fetcher
    .mockReset()
    .mockResolvedValue(Response.json({ ...payload, preview: false }));
  expect((await getCategories()).state).toBe("unavailable");
  expect(fetcher).toHaveBeenCalledTimes(1);
});
it("bounds connection-error retries instead of looping or serving stale data", async () => {
  const fetcher = vi.fn().mockRejectedValue(new Error("SAMPLE offline"));
  vi.stubGlobal("fetch", fetcher);
  expect((await getCategories()).state).toBe("unavailable");
  expect(fetcher).toHaveBeenCalledTimes(2);
});
