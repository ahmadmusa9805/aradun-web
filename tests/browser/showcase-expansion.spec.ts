import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Home highlights three studies and Work exposes twelve then all24 with three per category", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".demo-project")).toHaveCount(3);
  await expect(page.locator(".demo-partners")).not.toContainText(
    "DEMO company-logo",
  );
  await expect(page.locator(".demo-partners")).toContainText(
    "Built around your business",
  );
  await page
    .locator(".demo-projects")
    .getByRole("link", { name: /View all projects/ })
    .click();
  await expect(page.locator(".demo-project")).toHaveCount(12);
  await page
    .locator(".demo-projects")
    .getByRole("link", { name: /View all projects/ })
    .click();
  await expect(page.locator(".demo-project")).toHaveCount(24);
  for (const id of [
    "CAT-01",
    "CAT-02",
    "CAT-03",
    "CAT-04",
    "CAT-05",
    "CAT-06",
    "CAT-07",
    "CAT-08",
  ]) {
    await page.getByLabel("Service category").selectOption(id);
    await page.getByRole("button", { name: "Filter projects" }).click();
    await expect(page.locator(".demo-project")).toHaveCount(3);
  }
});

test("eight original guides have images, working topic filtering and six detail regions", async ({
  page,
}) => {
  await page.goto("/insights");
  await expect(page.locator(".article-card")).toHaveCount(8);
  await expect(page.locator(".article-card img")).toHaveCount(8);
  for (const image of await page.locator(".article-card img").all()) {
    expect(
      decodeURIComponent((await image.getAttribute("src")) ?? ""),
    ).toContain("/images/articles/");
  }
  await page
    .getByLabel("Topic", { exact: true })
    .selectOption("Web & Software");
  await page.getByRole("button", { name: "Filter articles" }).click();
  await expect(page.locator(".article-card")).toHaveCount(1);
  await page
    .getByRole("link", {
      name: "What to include in a website brief",
      exact: true,
    })
    .click();
  await expect(page.locator("main h1")).toHaveText(
    "What to include in a website brief",
  );
  await expect(page.locator("main > section")).toHaveCount(5);
  await expect(page.locator(".article-cover-large")).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Article contents" }),
  ).toBeVisible();
  expect(
    (await new AxeBuilder({ page }).include("main").analyze()).violations,
  ).toEqual([]);
});

test("theme logos retain fixed dimensions and footer logo stays inside its column", async ({
  page,
}) => {
  await page.goto("/");
  let bounds: { width: number; height: number } | undefined;
  for (const theme of [
    "Editorial Terracotta",
    "Muted Slate Blue",
    "Vivid Blue",
  ]) {
    await page.getByRole("radio", { name: theme, exact: true }).check();
    const logo = (await page
      .locator(".site-header .brand-lockup")
      .boundingBox())!;
    const size = { width: logo.width, height: logo.height };
    if (bounds) expect(size).toEqual(bounds);
    bounds = size;
    const footer = (await page.locator(".footer-identity").boundingBox())!,
      mark = (await page.locator(".footer-brand").boundingBox())!;
    expect(mark.x + mark.width).toBeLessThanOrEqual(
      footer.x + footer.width + 1,
    );
  }
});
