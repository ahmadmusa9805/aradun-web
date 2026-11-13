import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("About and inquiry pages preserve approved region order, contact facts and manual consultation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const expected = {
    "/about": ["purpose", "operator", "working-together"],
    "/contact": ["contact-form", "contact-details", "next-steps"],
    "/consultation": ["what-to-expect", "consultation-request", "preparation"],
  };
  for (const [route, ids] of Object.entries(expected)) {
    await page.goto(route);
    await expect(
      page.locator("main").getByRole("heading", { level: 1 }),
    ).toHaveCount(1);
    expect(
      await page
        .locator("main > section[id]")
        .evaluateAll((nodes) => nodes.map((node) => node.id)),
    ).toEqual(ids);
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
  await expect(page.locator("main")).toContainText(
    "free 15-minute initial screening",
  );
  await expect(page.locator("#consultation-request")).toContainText(
    "does not reserve a slot",
  );
  await expect(page.locator('#preparation a[href="/contact"]')).toBeVisible();
  await expect(
    page.locator('#preparation a[href="/consultation"]'),
  ).toHaveCount(0);
  await expect(
    page.locator('.business-contact a[href="mailto:hello@aradun.com"]'),
  ).toBeVisible();
  await expect(
    page.getByLabel("Preparation notes (optional)", { exact: true }),
  ).not.toHaveAttribute("required");
  await page.goto("/contact");
  for (const name of ["Name", "Email", "Subject", "Project brief / Message"])
    await expect(page.getByLabel(name, { exact: true })).toHaveAttribute(
      "required",
      "",
    );
  await expect(
    page.getByLabel("Company (optional)", { exact: true }),
  ).not.toHaveAttribute("required");
  await expect(page.locator('input[type="tel"]')).toHaveCount(0);
  await expect(page.locator(".business-contact")).toContainText(
    "Dhaka, Bangladesh",
  );
  await page.goto("/about");
  await expect(page.locator("#operator")).toContainText("Ahmad Musa Abdullah");
  await expect(
    page.locator("#working-together .delivery-steps li"),
  ).toHaveCount(5);
});
