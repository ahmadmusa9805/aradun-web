import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";

test("seven source solution/pricing routes, exact tier cells and nonbinding context", async ({
  page,
}, info) => {
  await page.goto("/solutions");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Find a solution around your business goals.",
  );
  await expect(page.getByRole("main").locator(":scope > section")).toHaveCount(
    6,
  );
  const source = await readFile("docs/catalog-register.md", "utf8");
  const rows = [
    ...source.matchAll(
      /^\| (SOL-\d{3}) \| ([^|]+) \| SOL-\d{2} \| `([^`]+)` \| P1 \| ([^|]+) \| ([^|]+) \| ([^|]+) \|/gm,
    ),
  ];
  expect(rows).toHaveLength(5);
  for (const row of rows) {
    expect((await page.goto(row[3]!))?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      row[2]!.trim(),
    );
    await expect(page).toHaveTitle(`${row[2]!.trim()} | ARADUN`);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, nofollow",
    );
    await expect(
      page.getByRole("main").locator(":scope > section"),
    ).toHaveCount(8);
    const cards = page.getByRole("list", {
      name: `${row[2]!.trim()} engagement options`,
    });
    await expect(cards.getByRole("listitem")).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      await expect(
        cards.getByRole("listitem").nth(i).locator("strong"),
      ).toHaveText(row[4 + i]!.trim());
      await expect(
        cards.getByRole("listitem").nth(i).getByRole("link"),
      ).toHaveAttribute(
        "href",
        `/get-a-quote?solutionId=${row[1]}&packageId=${row[1]}-P0${i + 1}`,
      );
    }
  }
  await page.goto("/pricing");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Understand your options before you start.",
  );
  await expect(page.getByRole("main").locator(":scope > section")).toHaveCount(
    8,
  );
  await expect(
    page.getByRole("main").getByRole("link", { name: /^Discuss / }),
  ).toHaveCount(15);
  await expect(page.locator("input[name=serviceIds]")).toHaveCount(57);
  await expect(page.locator('input[value="SVC-009"]')).toHaveCount(1);
  await page
    .locator("details")
    .filter({
      has: page.getByText("Choose services to discuss", { exact: true }),
    })
    .locator("summary")
    .click();
  await page.locator('input[value="SVC-009"]').check();
  await page.locator('input[value="SVC-001"]').check();
  await page
    .getByRole("button", { name: "Request a Custom Quote", exact: true })
    .click();
  await page.waitForURL(/\/get-a-quote\?/);
  expect(new URL(page.url()).searchParams.getAll("serviceIds")).toEqual([
    "SVC-001",
    "SVC-009",
  ]);
  expect((await page.goto("/solutions/not-a-solution"))?.status()).toBe(404);
  await page.goto("/pricing");
  await page.screenshot({
    path: `.tools/m05-05/${info.project.name}.png`,
    fullPage: true,
  });
  await page.goto("/solutions/complete-digital-business");
  await page.screenshot({
    path: `.tools/m05-05/solution-${info.project.name}.png`,
    fullPage: true,
  });
});
test("solution/pricing keyboard, all themes and 200% narrow layout", async ({
  page,
}) => {
  for (const path of [
    "/solutions",
    "/solutions/digital-presence",
    "/solutions/business-growth",
    "/solutions/complete-digital-business",
    "/pricing",
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
