import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { readFile } from "node:fs/promises";

test("backend outage is a recoverable failure, never an empty catalog", async ({
  page,
  request,
}) => {
  await request.post("http://127.0.0.1:4100/__fixture/unavailable");
  try {
    await page.goto("/services");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Services temporarily unavailable",
    );
    await expect(
      page.getByRole("region", { name: "Something went wrong" }),
    ).toBeVisible();
    await expect(page.getByText("No results", { exact: true })).toHaveCount(0);
  } finally {
    await request.post("http://127.0.0.1:4100/__fixture/restore");
  }
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Find the right services for your business.",
  );
});

test("services and all eight category pages preserve source identities, sections and membership", async ({
  page,
}, info) => {
  await page.goto("/services");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Find the right services for your business.",
  );
  await expect(page.getByRole("main").locator(":scope > section")).toHaveCount(
    6,
  );
  const source = await readFile("docs/catalog-register.md", "utf8");
  const rows = [
    ...source.matchAll(
      /^\| CAT-0[1-8] \| ([^|]+) \| `([^`]+)` \| ([^|]+) \|/gm,
    ),
  ];
  expect(rows).toHaveLength(8);
  for (const row of rows) {
    const response = await page.goto(row[2]!);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      row[1]!.trim(),
    );
    const ids = row[3]!.trim().split(", ");
    expect(
      await page
        .locator("[data-service-id]")
        .evaluateAll((nodes) =>
          nodes.map((node) => node.getAttribute("data-service-id")),
        ),
    ).toEqual(ids);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, nofollow",
    );
    await expect(page.getByRole("main").locator(".catalog-faq")).toHaveCount(4);
    await expect(
      page
        .getByRole("main")
        .getByRole("link", { name: "Get a Quote", exact: true })
        .first(),
    ).toHaveAttribute("href", new RegExp("categoryId=CAT-0[1-8]"));
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  expect((await page.goto("/services/not-a-category"))?.status()).toBe(404);
  expect((await page.goto("/services/not-a-service"))?.status()).toBe(404);
  await page.goto("/services/design-branding");
  await page.screenshot({
    path: `.tools/m05-03/${info.project.name}.png`,
    fullPage: true,
  });
});

test("catalog keyboard, themes, 200% text and axe", async ({ page }) => {
  for (const path of [
    "/services",
    "/services/web-software-development",
    "/services/design-branding",
  ]) {
    await page.goto(path);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await expect(page.getByRole("main")).toBeFocused();
    for (const theme of [
      "Editorial Terracotta",
      "Muted Slate Blue",
      "Vivid Blue",
    ]) {
      await page.getByRole("radio", { name: theme, exact: true }).check();
      expect(
        (
          await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
            .analyze()
        ).violations,
      ).toEqual([]);
    }
    await page.setViewportSize({ width: 320, height: 700 });
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "200%";
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
