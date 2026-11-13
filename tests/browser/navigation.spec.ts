import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("source destinations, category/solution order and keyboard menu dismissal", async ({
  page,
}, info) => {
  await page.goto("/");
  const header = page.getByRole("banner");
  const mobile = info.project.name.includes("mobile");
  const nav = page.getByRole("navigation", {
    name: mobile ? "Mobile navigation" : "Main navigation",
    exact: true,
  });
  if (mobile) await header.locator(".mobile-navigation > summary").click();
  const services = nav.locator("summary").filter({ hasText: /^Services$/ });
  await services.focus();
  await page.keyboard.press("Enter");
  const source = await readFile("docs/sources/02-pages-sitemap.md", "utf8");
  const categories = [
    ...source.matchAll(/^\| CAT-0[1-8] \| ([^|]+) \| `([^`]+)`/gm),
  ]
    .slice(0, 8)
    .map((match) => ({ label: match[1]!.trim(), href: match[2]! }));
  expect(categories).toHaveLength(8);
  const panel = nav.locator(".category-panel").filter({
    has: page.getByRole("link", { name: "All Services", exact: true }),
  });
  expect(await panel.locator("li a").allTextContents()).toEqual(
    categories.map((item) => item.label),
  );
  for (const item of categories)
    await expect(
      panel.getByRole("link", { name: item.label, exact: true }),
    ).toHaveAttribute("href", item.href);
  await panel.getByRole("link", { name: "All Services", exact: true }).focus();
  await page.keyboard.press("Escape");
  await expect(services).toBeFocused();
  await expect(panel).not.toBeVisible();
  const solutions = nav.locator("summary").filter({ hasText: /^Solutions$/ });
  await solutions.press("Space");
  const solutionPanel = nav.locator(".category-panel").filter({
    has: page.getByRole("link", { name: "All Solutions", exact: true }),
  });
  await expect(solutionPanel.locator("li a")).toHaveCount(5);
  expect(await solutionPanel.locator("li a").allTextContents()).toEqual([
    "Digital Presence",
    "Business Automation",
    "Business Growth",
    "Cloud & Technology",
    "Complete Digital Business",
  ]);
  for (const link of await page.locator("header a, footer a").all()) {
    const href = await link.getAttribute("href");
    expect(source).toContain(`\`${href}\``);
    expect(href).not.toMatch(/dashboard|login|industries|products|portal/);
  }
  await expect(
    nav.getByRole("link", { name: "Contact", exact: true }),
  ).toBeVisible();
  await expect(
    header.getByRole("link", { name: "Get a Quote", exact: true }).first(),
  ).toHaveAttribute("href", "/get-a-quote");
  await expect(
    page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Contact Us", exact: true })
      .first(),
  ).toBeVisible();
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
  await solutions.press("Escape");
  if (mobile) {
    await header.getByRole("button", { name: "Close menu" }).click();
    await expect(header.locator(".mobile-navigation > summary")).toBeFocused();
    await expect(nav).not.toBeVisible();
  }
  await page.screenshot({
    path: `.tools/m04-03/${info.project.name}.png`,
    fullPage: true,
  });
});

test("responsive navigation collapses before crowding and supports 200% text", async ({
  page,
}) => {
  await page.goto("/");
  for (const width of [
    320, 390, 639, 640, 767, 768, 1024, 1199, 1200, 1280, 1440, 1536, 1920,
  ]) {
    await page.setViewportSize({ width, height: 900 });
    const desktop = page.getByRole("navigation", {
      name: "Main navigation",
      exact: true,
    });
    if (width >= 1200) await expect(desktop).toBeVisible();
    else await expect(desktop).not.toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width < 1200)
      await expect(page.locator(".mobile-navigation > summary")).toBeVisible();
  }
  await page.setViewportSize({ width: 320, height: 700 });
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  await page.locator(".mobile-navigation > summary").click();
  await page
    .getByRole("navigation", { name: "Mobile navigation", exact: true })
    .locator("summary")
    .filter({ hasText: /^Services$/ })
    .click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation", exact: true })
      .getByRole("link", {
        name: "UI/UX, Graphic Design & Branding",
        exact: true,
      }),
  ).toBeVisible();
});

test("native navigation remains available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/");
  await page.locator(".mobile-navigation > summary").click();
  const nav = page.getByRole("navigation", {
    name: "Mobile navigation",
    exact: true,
  });
  await nav
    .locator("summary")
    .filter({ hasText: /^Services$/ })
    .click();
  await expect(
    nav.getByRole("link", { name: "All Services", exact: true }),
  ).toBeVisible();
  await expect(
    nav.getByRole("link", { name: "Contact", exact: true }),
  ).toBeVisible();
  await context.close();
});
