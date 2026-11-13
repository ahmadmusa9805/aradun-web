import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("solution comparisons preserve contextual inquiry choices and pricing anchors", async ({
  page,
  request,
}) => {
  await page.goto("/solutions");
  await expect(page.locator("#solutions > ul > li")).toHaveCount(5);
  await expect(page.locator(".solution-selection > div")).toHaveCount(5);
  const links = await page
    .locator('#solutions a[href^="/pricing#"]')
    .evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href")!));
  expect(links).toHaveLength(5);
  for (const href of links) {
    await page.goto(href);
    await expect(page.locator(`#${href.split("#")[1]}`)).toBeVisible();
  }
  await expect(page.locator("#solution-prices .catalog-card")).toHaveCount(15);
  const quotes = page.locator('#solution-prices a[href^="/get-a-quote?"]');
  const targets = await quotes.evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute("href")!),
  );
  expect(new Set(targets).size).toBe(15);
  for (const target of targets) {
    const response = await request.get(target);
    expect(response.status()).toBe(200);
    expect(await response.text()).not.toContain(
      "Some incoming choices are unavailable",
    );
  }
  await quotes.first().click();
  await expect(page).toHaveURL(/solutionId=SOL-001&packageId=/);
  await expect(
    page
      .getByRole("main")
      .getByText("Digital Presence", { exact: true })
      .first(),
  ).toBeVisible();
});
test("pricing has distinct FAQs, unique selectable services and accessible responsive comparisons", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/solutions", "/pricing"]) {
    await page.goto(route);
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
  }
  await expect(page.locator(".engagement-models dt")).toHaveCount(4);
  await expect(
    page.locator('[aria-labelledby="faq-title"] details'),
  ).toHaveCount(6);
  await expect(page.locator('input[name="serviceId"]')).toHaveCount(57);
  await page.getByText("Choose services to discuss", { exact: true }).click();
  await page.locator('input[name="serviceId"][value="SVC-001"]').check();
  await page.locator('input[name="serviceId"][value="SVC-009"]').check();
  await page.getByRole("button", { name: "Request a Custom Quote" }).click();
  await expect(page).toHaveURL(/serviceId=SVC-001&serviceId=SVC-009/);
  await expect(
    page.getByRole("checkbox", {
      name: "Business Website Development",
      exact: true,
    }),
  ).toBeChecked();
  await expect(
    page.getByRole("checkbox", {
      name: "Mobile App UI/UX Design",
      exact: true,
    }),
  ).toBeChecked();
  await page.goto("/get-a-quote?serviceIds=SVC-001&serviceIds=SVC-009");
  await expect(
    page.getByRole("checkbox", {
      name: "Business Website Development",
      exact: true,
    }),
  ).toBeChecked();
  await expect(
    page.getByRole("checkbox", {
      name: "Mobile App UI/UX Design",
      exact: true,
    }),
  ).toBeChecked();
});
