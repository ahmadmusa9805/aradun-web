import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("local password login opens the existing account without MFA", async ({
  page,
  request,
}) => {
  const response = await request.post(
    "http://127.0.0.1:4100/__fixture/identity",
    { data: { passwordOnly: true } },
  );
  const user = await response.json();
  try {
    await page.goto("/staff/login");
    await page.getByLabel("Email address").fill(user.email);
    await page.getByLabel("Password", { exact: true }).fill(user.password);
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await expect(page).toHaveURL(/\/dashboard\/account$/);
    await expect(
      page.getByText(
        "Signed in with your password. Authenticator setup is paused for local development.",
      ),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Set up authenticator" }),
    ).toHaveCount(0);
  } finally {
    await request.post("http://127.0.0.1:4100/__fixture/identity", {
      data: { passwordOnly: false },
    });
  }
});
test("six public help guides have useful client guidance and safe navigation", async ({
  page,
}) => {
  for (const slug of [
    "services",
    "not-sure",
    "starting-prices",
    "timelines",
    "international",
    "maintenance",
  ]) {
    expect((await page.goto(`/faq/${slug}`))?.status()).toBe(200);
    await expect(
      page.locator("main").getByRole("heading", { level: 1 }),
    ).toHaveCount(1);
    await expect(page.locator("main article")).toContainText(
      "How to take the next step",
    );
    expect(
      (await new AxeBuilder({ page }).include("main").analyze()).violations,
    ).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.goto("/search?q=maintenance");
  await expect(page.locator('main a[href="/faq/maintenance"]')).toBeVisible();
  expect((await page.goto("/faq/not-a-real-guide"))?.status()).toBe(404);
});
