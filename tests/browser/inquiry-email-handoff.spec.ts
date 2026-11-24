import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const enabled of [false, true]) {
  test(`saved receipt stays truthful and avoids resubmission with email capability ${enabled}`, async ({
    page,
    request,
  }) => {
    expect(
      (await request.post("http://127.0.0.1:4100/__fixture/identity")).status(),
    ).toBe(200);
    expect(
      (await request.post("http://127.0.0.1:4100/__fixture/intake")).status(),
    ).toBe(204);
    const before = await (
      await request.get("http://127.0.0.1:4100/__fixture/intake-count")
    ).json();
    await page.route("**/api/intake/status", (route) =>
      route.fulfill({
        json: { available: true, emailDeliveryEnabled: enabled },
      }),
    );
    await page.route("**/api/intake/receipt", async (route) => {
      const response = await route.fetch();
      const body = await response.json();
      await route.fulfill({
        response,
        json: { ...body, emailDeliveryEnabled: enabled },
      });
    });
    await page.goto("/contact");
    await expect(page.locator(".intake-availability")).toContainText(
      enabled
        ? "Email notifications are enabled, but delivery is not guaranteed"
        : "Email notifications are currently off",
    );
    await page.getByLabel("Name", { exact: true }).fill("SAMPLE Mail delay");
    await page
      .getByLabel("Email", { exact: true })
      .fill("synthetic@example.invalid");
    await page
      .getByLabel("Subject", { exact: true })
      .fill("SAMPLE client inquiry");
    await page
      .getByLabel("Project brief / Message")
      .fill("SAMPLE stored request; never actual mail");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page).toHaveURL(/\/thank-you$/);
    await expect(
      page.getByRole("heading", {
        name: "Thank you. We've received your request.",
      }),
    ).toBeVisible();
    await expect(page.getByText(/Your message is safely saved/)).toBeVisible();
    await expect(
      page.getByText(/Want to add something or ask a question/),
    ).toBeVisible();
    const link = page.locator('a[href^="mailto:hello@aradun.com?subject="]');
    await expect(link).toHaveCount(1);
    expect(await link.getAttribute("href")).toMatch(
      /^mailto:hello@aradun\.com\?subject=Inquiry%20follow-up%3A%20aradunq-/,
    );
    const reference = await page.getByText(/Your reference:/).innerText();
    await page.reload();
    await expect(page.getByText(/Your reference:/)).toHaveText(reference);
    const after = await (
      await request.get("http://127.0.0.1:4100/__fixture/intake-count")
    ).json();
    expect(after.inquiries - before.inquiries).toBe(1);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });
}
