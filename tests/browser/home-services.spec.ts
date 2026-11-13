import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("Home preserves approved section order and both entry pages explain engagement choices", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator("main section[id]")
      .evaluateAll((nodes) => nodes.map((node) => node.id)),
  ).toEqual([
    "expertise",
    "solutions",
    "approach",
    "process",
    "starting-prices",
    "questions",
  ]);
  await expect(page.locator("#expertise .public-card")).toHaveCount(8);
  await expect(page.locator("#solutions article")).toHaveCount(5);
  await expect(page.locator(".delivery-steps li")).toHaveCount(5);
  await expect(
    page.locator("#starting-prices .engagement-models dt"),
  ).toHaveCount(4);
  await expect(page.locator('#questions a[href^="/faq/"]')).toHaveCount(6);
  for (const route of ["/", "/services"]) {
    await page.goto(route);
    const main = page.locator("main");
    await expect(main.getByRole("heading", { level: 1 })).toHaveCount(1);
    for (const theme of [
      "Editorial Terracotta",
      "Muted Slate Blue",
      "Vivid Blue",
    ]) {
      await page.getByRole("radio", { name: theme, exact: true }).check();
      expect(
        (await new AxeBuilder({ page }).include("main").analyze()).violations,
      ).toEqual([]);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    await page.locator("main").evaluate((node) => {
      (node as HTMLElement).style.fontSize = "200%";
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
test("Services offers representative canonical routes and category help without hiding categories", async ({
  page,
  request,
}) => {
  await page.goto("/services");
  await expect(page.locator("#categories .catalog-card")).toHaveCount(8);
  const samples = page.locator(".catalog-service-samples a");
  await expect(samples).toHaveCount(24);
  for (const href of new Set(
    await samples.evaluateAll((nodes) =>
      nodes.map((node) => node.getAttribute("href")!),
    ),
  ))
    expect((await request.get(href)).status()).toBe(200);
  await expect(
    page.locator('[aria-labelledby="choosing-title"] li'),
  ).toHaveCount(8);
  await expect(page.locator(".engagement-models dt")).toHaveCount(4);
  await expect(
    page.locator('[aria-labelledby="questions-title"] a[href^="/faq/"]'),
  ).toHaveCount(4);
  await page
    .getByRole("link", { name: "Get a Quote", exact: true })
    .last()
    .click();
  await expect(page).toHaveURL(/\/get-a-quote$/);
});
