import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";

test("all 57 source services resolve with exact identity and noindex metadata", async ({
  page,
}) => {
  const source = await readFile("docs/catalog-register.md", "utf8");
  const rows = [
    ...source.matchAll(
      /^\| (SVC-\d{3}) \| ([^|]+) \| [^|]+ \| PUB-S\d{3} \| `([^`]+)`/gm,
    ),
  ];
  expect(rows).toHaveLength(57);
  for (const row of rows) {
    const response = await page.goto(row[3]!);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      row[2]!.trim(),
    );
    await expect(page).toHaveTitle(`${row[2]!.trim()} | ARADUN`);
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
    ).toHaveAttribute("href", `/get-a-quote?serviceId=${row[1]}`);
  }
});
test("representative variants preserve scope, quote context, keyboard and all-theme accessibility", async ({
  page,
}, info) => {
  for (const slug of [
    "business-website-development",
    "website-maintenance",
    "custom-web-application",
    "web-application-security-assessment",
    "website-ui-ux-design",
    "monthly-video-editing",
  ]) {
    await page.goto(`/services/${slug}`);
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    await expect(page.getByRole("main")).toBeFocused();
    await expect(
      page.getByText(
        "Potential scope. Your proposal confirms what is included:",
        { exact: true },
      ),
    ).toBeVisible();
    await expect(
      page.getByRole("main").locator("[data-service-variant] > section"),
    ).toHaveCount(8);
    const faq = page.getByRole("main").locator(".catalog-faq summary").first();
    await faq.focus();
    await page.keyboard.press("Enter");
    await expect(faq.locator("..")).toHaveAttribute("open", "");
    await expect(
      page
        .getByRole("link", { name: "Discuss this option", exact: true })
        .first(),
    ).toHaveAttribute("href", /serviceId=SVC-\d{3}&packageId=SVC-\d{3}-P01$/);
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
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "";
  });
  await page.setViewportSize({
    width: info.project.name.includes("mobile") ? 390 : 1280,
    height: 900,
  });
  await page.screenshot({
    path: `.tools/m05-04/${info.project.name}.png`,
    fullPage: true,
  });
});
test("cross-listed links share one route and the Mobile canonical breadcrumb", async ({
  page,
}) => {
  for (const category of ["mobile-app-development", "design-branding"]) {
    await page.goto(`/services/${category}`);
    const link = page
      .getByRole("main")
      .getByRole("link", { name: "Mobile App UI/UX Design", exact: true });
    await expect(link).toHaveAttribute(
      "href",
      "/services/mobile-app-ui-ux-design",
    );
    await link.click();
    await expect(
      page
        .getByRole("navigation", { name: "Breadcrumb" })
        .getByRole("link", { name: "Mobile App Development", exact: true }),
    ).toHaveAttribute("href", "/services/mobile-app-development");
  }
});
