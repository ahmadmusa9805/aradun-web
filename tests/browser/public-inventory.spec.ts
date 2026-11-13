import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";
import { publicFaqs } from "../../frontend/src/modules/content/data/public-copy";
test("all public source entries and linked addresses/fragments are accounted for without exposing future routes", async ({
  page,
  request,
  baseURL,
}, info) => {
  test.setTimeout(120000);
  const source = await readFile("docs/sources/02-pages-sitemap.md", "utf8");
  const rows = [
    ...source.matchAll(
      /^\| ((?:PUB-(?:[0-9]{3}|S[0-9]{3})|CAT-0[1-8]|SOL-0[1-5]|TRU-0[1-3])) \| ([^|]+) \| `([^`]+)` \| (P1(?: conditional)?) \| ([AC]) \|/gm,
    ),
  ];
  expect(rows).toHaveLength(91);
  const fixed = rows.filter((row) => row[4] === "P1" && !row[3]!.includes("[")),
    patterns = rows.filter((row) => row[3]!.includes("[")),
    conditional = rows.filter((row) => row[4] === "P1 conditional");
  expect(fixed).toHaveLength(85);
  expect(patterns).toHaveLength(3);
  expect(conditional).toHaveLength(3);
  const known = new Set([
      ...fixed.map((row) => row[3]!),
      ...publicFaqs.map((faq) => `/faq/${faq.id}`),
    ]),
    documents = new Map<string, { ids: string[]; links: string[] }>(),
    targets = new Set<string>();
  await page.goto("/");
  for (const row of fixed) {
    const path = row[3]!,
      response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    const parsed = await page.evaluate((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return {
        ids: [...doc.querySelectorAll("[id]")].map((node) => node.id),
        links: [...doc.querySelectorAll("a[href]")].map((node) =>
          node.getAttribute("href")!,
        ),
      };
    }, html);
    documents.set(path, parsed);
    for (const href of parsed.links) {
      if (href.startsWith("mailto:")) {
        expect([
          "mailto:hello@aradun.com",
          "mailto:ahmadmusa@aradun.com",
        ]).toContain(href);
        continue;
      }
      const url = new URL(href, `${baseURL}${path}`);
      if (url.origin !== new URL(baseURL!).origin) {
        expect(url.protocol).toBe("https:");
        continue;
      }
      expect(url.pathname, path + " -> " + href).not.toMatch(
        /^\/(dashboard|staff|portal|industries|products|ams)(?:\/|$)/,
      );
      expect(known.has(url.pathname), path + " -> " + href).toBe(true);
      targets.add(url.pathname + url.search + url.hash);
    }
  }
  let queryCount = 0,
    fragmentCount = 0;
  for (const target of targets) {
    const url = new URL(target, baseURL);
    if (url.search) {
      queryCount++;
      const response = await request.get(url.pathname + url.search);
      expect(response.status(), target).toBe(200);
      if (url.pathname === "/get-a-quote")
        expect(await response.text(), target).not.toContain(
          "Some incoming choices are unavailable",
        );
    }
    if (url.hash) {
      fragmentCount++;
      expect(documents.get(url.pathname)!.ids, target).toContain(
        decodeURIComponent(url.hash.slice(1)),
      );
    }
  }
  for (const row of patterns) {
    const response = await request.get(
      row[3]!.replace("[slug]", "not-published"),
    );
    expect(response.status()).toBe(404);
  }
  for (const row of conditional)
    expect((await request.get(row[3]!)).status()).toBe(404);
  const summary = {
    sourcePublicEntries: rows.length,
    fixed: fixed.length,
    unpublishedPatterns: patterns.map((row) => ({ id: row[1], route: row[3] })),
    conditionalNotSelected: conditional.map((row) => ({
      id: row[1],
      route: row[3],
    })),
    distinctLinkedTargets: targets.size,
    queryCount,
    fragmentCount,
  };
  console.log(`PUBLIC_INVENTORY ${JSON.stringify(summary)}`);
  await info.attach("public-link-inventory", {
    body: JSON.stringify(summary, null, 2),
    contentType: "application/json",
  });
});
test("public menus dismiss on outside pointer/focus and Escape preserves useful focus", async ({
  page,
}) => {
  await page.goto("/faq");
  for (const width of [1280, 390]) {
    await page.setViewportSize({ width, height: 900 });
    const mobile = width < 1200,
      nav = page.getByRole("navigation", {
        name: mobile ? "Mobile navigation" : "Main navigation",
        exact: true,
      }),
      outer = page.locator(".mobile-navigation > summary");
    if (mobile) await outer.click();
    const services = nav.locator("summary").filter({ hasText: /^Services$/ });
    await services.click();
    const panel = nav.locator(".category-panel").filter({
      has: page.getByRole("link", { name: "All Services", exact: true }),
    });
    await expect(panel).toBeVisible();
    const input = page.getByLabel("Search services, solutions and answers");
    await input.click();
    await expect(panel).not.toBeVisible();
    await expect(input).toBeFocused();
    if (mobile) await outer.click();
    await services.click();
    await services.press("Escape");
    await expect(services).toBeFocused();
    await expect(panel).not.toBeVisible();
    await services.click();
    await input.focus();
    await expect(panel).not.toBeVisible();
    await expect(input).toBeFocused();
  }
});
test("search distinguishes unavailable catalog from genuine empty results and safely renders the query", async ({
  page,
  request,
}) => {
  await page.goto("/search?q=website");
  await expect(
    page.getByRole("heading", { level: 2, name: 'Results for "website"' }),
  ).toBeVisible();
  await request.post("http://127.0.0.1:4100/__fixture/unavailable");
  try {
    await page.goto("/search?q=SAMPLE-no-matching-faq");
    await expect(
      page.getByText("No matching FAQ answers.", { exact: false }),
    ).toBeVisible();
    await expect(page.getByText(/^No matching results/)).toHaveCount(0);
  } finally {
    await request.post("http://127.0.0.1:4100/__fixture/restore");
  }
  await page.goto(
    "/search?q=" +
      encodeURIComponent("<script>window.SAMPLE_EXECUTED=true</script>"),
  );
  await expect(
    page.getByRole("main").getByRole("heading", { level: 2 }),
  ).toContainText("<script>");
  expect(await page.evaluate(() => "SAMPLE_EXECUTED" in window)).toBe(false);
  await page.goto("/search?q=one&q=two");
  await expect(
    page.getByRole("heading", { level: 2, name: "What are you looking for?" }),
  ).toBeVisible();
});
