import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";
test("all 85 public source addresses have clean self-canonicals, distinct descriptions and sharing metadata", async ({
  request,
}) => {
  test.setTimeout(60000);
  const source = await readFile("docs/sources/02-pages-sitemap.md", "utf8");
  const routes = [
    ...new Set(
      [
        ...source.matchAll(
          /^\| (?:PUB-\d{3}|PUB-S\d{3}|CAT-0[1-8]|SOL-0[1-5]) \| [^|]+ \| `([^`]+)` \| P1 \| A \|/gm,
        ),
      ]
        .map((match) => match[1]!)
        .filter((route) => !route.includes("[")),
    ),
  ];
  expect(routes).toHaveLength(85);
  const descriptions = new Set<string>();
  for (const path of routes) {
    const response = await request.get(`${path}?utm_source=SAMPLE`);
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    expect(canonical, path).not.toBeNull();
    const url = new URL(canonical![1]!);
    expect(url.pathname, path).toBe(path);
    expect(url.search, path).toBe("");
    expect(url.hash, path).toBe("");
    const description = html.match(
      /<meta name="description" content="([^"]+)"/,
    );
    expect(description, path).not.toBeNull();
    descriptions.add(description![1]!);
    expect(html, path).toContain('property="og:url"');
    expect(html, path).toContain('name="twitter:card"');
    expect(html, path).toContain('content="noindex, nofollow"');
  }
  expect(descriptions.size).toBe(85);
});
test("catalog breadcrumb schema follows visible canonical hierarchy and never invents offer or rating markup", async ({
  page,
}) => {
  await page.goto("/services/mobile-app-ui-ux-design");
  const json = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(json).not.toBeNull();
  const data = JSON.parse(json!);
  expect(data["@type"]).toBe("BreadcrumbList");
  const nav = page.getByRole("navigation", { name: "Breadcrumb", exact: true });
  expect(
    data.itemListElement.map((item: { name: string }) => item.name),
  ).toEqual(
    await nav
      .locator("li")
      .evaluateAll((nodes) =>
        nodes.map((node) => node.textContent!.replace(/\s*\/\s*$/, "").trim()),
      ),
  );
  expect(data.itemListElement.at(-1).item).toMatch(
    /\/services\/mobile-app-ui-ux-design$/,
  );
  expect(json).not.toMatch(/AggregateRating|priceCurrency|Offer/);
});
test("robots and sitemap remain closed until a real publication release exists", async ({
  request,
}) => {
  const robots = await request.get("/robots.txt"),
    sitemap = await request.get("/sitemap.xml");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Disallow: /");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("<urlset");
  expect(await sitemap.text()).not.toContain("<loc>");
});
