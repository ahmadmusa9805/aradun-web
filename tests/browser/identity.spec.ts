import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("staff sign-in is noindex, responsive and accessible in all three themes", async ({
  page,
}) => {
  await page.goto("/staff/login");
  await expect(
    page.getByRole("heading", { name: "Sign in", exact: true }),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  await expect(page.locator("form")).toHaveAttribute("method", "post");
  for (const name of [
    "Editorial Terracotta",
    "Muted Slate Blue",
    "Vivid Blue",
  ]) {
    await page.getByRole("radio", { name, exact: true }).check();
    const audit = await new AxeBuilder({ page }).include("main").analyze();
    expect(audit.violations).toEqual([]);
  }
  await page.setViewportSize({ width: 320, height: 740 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(page.getByLabel("Password", { exact: true })).toHaveAttribute(
    "autocomplete",
    "current-password",
  );
});
test("real Express/Mongo staff password verification stays primary and logout revokes the cookie", async ({
  page,
  request,
}) => {
  const setup = await request.post("http://127.0.0.1:4100/__fixture/identity");
  expect(setup.status()).toBe(200);
  const identity = await setup.json();
  await page.goto("/staff/login?returnTo=https%3A%2F%2Fexample.invalid");
  await page.getByLabel("Email address").fill(identity.email);
  await page.getByLabel("Password", { exact: true }).fill(identity.password);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Password verified" }),
  ).toBeVisible();
  await expect(
    page.getByText(/additional verification is required/i),
  ).toBeVisible();
  expect(new URL(page.url()).hostname).toBe("127.0.0.1");
  expect(
    (await page.context().cookies()).some(
      (cookie) => cookie.name === "aradun.staff.local" && cookie.httpOnly,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Sign out" }).click();
  await expect(
    page.getByRole("button", { name: "Sign in", exact: true }),
  ).toBeVisible();
});
test("unavailable sign-in preserves email, clears password and focuses recovery feedback", async ({
  page,
}) => {
  await page.route("**/api/identity/session", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ status: "anonymous" }),
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3100",
        "Access-Control-Allow-Credentials": "true",
      },
    }),
  );
  await page.route("**/api/identity/login", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: "{}",
      headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3100",
        "Access-Control-Allow-Credentials": "true",
      },
    }),
  );
  await page.goto("/staff/login");
  await page.getByLabel("Email address").fill("sample@example.invalid");
  await page.getByLabel("Password", { exact: true }).fill("SAMPLE-not-real");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.locator("main").getByRole("alert")).toBeFocused();
  await expect(page.getByLabel("Email address")).toHaveValue(
    "sample@example.invalid",
  );
  await expect(page.getByLabel("Password", { exact: true })).toHaveValue("");
});
