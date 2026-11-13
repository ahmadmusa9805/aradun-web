import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { generate } from "otplib";
test("MFA setup, verified account, safe profile, one-time pack and logout work through real Express", async ({
  page,
  request,
}) => {
  const fixture = await request.post(
    "http://127.0.0.1:4100/__fixture/identity",
  );
  expect(fixture.status()).toBe(200);
  const user = await fixture.json();
  await page.goto("/staff/login");
  await page.getByLabel("Email address").fill(user.email);
  await page.getByLabel("Password", { exact: true }).fill(user.password);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page
    .getByRole("link", { name: "Continue to authenticator verification" })
    .click();
  await page.getByRole("button", { name: "Set up authenticator" }).click();
  const secret = await page.locator(".security-secret").innerText();
  const remaining = 30000 - (Date.now() % 30000);
  if (remaining < 4000) await page.waitForTimeout(remaining + 100);
  await page
    .getByLabel("Authenticator code", { exact: true })
    .fill(await generate({ secret }));
  await page.getByRole("button", { name: "Verify", exact: true }).click();
  await page.getByRole("link", { name: "Continue to My Account" }).click();
  await expect(
    page.getByText(`Signed in as ${user.email}.`, { exact: false }),
  ).toBeVisible();
  await page
    .getByLabel("Display name", { exact: true })
    .fill("SAMPLE Browser Staff");
  await page.getByRole("button", { name: "Save profile" }).click();
  await expect(page.getByText("Profile saved.", { exact: true })).toBeVisible();
  await page
    .getByRole("button", { name: "Create replacement recovery pack" })
    .click();
  await expect(page.locator(".security-codes li")).toHaveCount(10);
  await page.getByRole("button", { name: "Hide saved codes" }).click();
  await expect(page.locator(".security-codes li")).toHaveCount(0);
  expect(
    await page.evaluate(() =>
      Object.keys(localStorage).filter((key) =>
        /token|secret|password|recovery/i.test(key),
      ),
    ),
  ).toEqual([]);
  await page.getByRole("button", { name: "Sign out", exact: true }).click();
  await expect(page.getByText("Signed out.", { exact: true })).toBeVisible();
  await page.reload();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    /Sign in again/,
  );
});
test("security pages have noindex, keyboard forms, narrow layouts and three-theme accessibility", async ({
  page,
}) => {
  for (const route of [
    "/staff/verify",
    "/staff/recover",
    "/staff/reset",
    "/dashboard/account",
  ]) {
    await page.goto(route);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    await page.setViewportSize({ width: 320, height: 740 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    for (const theme of [
      "Editorial Terracotta",
      "Muted Slate Blue",
      "Vivid Blue",
    ]) {
      await page.getByRole("radio", { name: theme, exact: true }).check();
      expect(
        (await new AxeBuilder({ page }).include("main").analyze()).violations,
      ).toEqual([]);
    }
    for (const form of await page.locator("form").all())
      await expect(form).toHaveAttribute("method", "post");
  }
  await page.goto("/staff/reset");
  await page.getByLabel("Password reset code").focus();
  await page.keyboard.press("Tab");
  await expect(page.getByLabel("New password", { exact: true })).toBeFocused();
});
test("disabled email recovery is truthful and primary sessions cannot show private account data", async ({
  page,
  request,
}) => {
  await request.post("http://127.0.0.1:4100/__fixture/identity");
  await page.goto("/staff/recover");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("unknown@example.invalid");
  await page.getByRole("button", { name: "Request password recovery" }).click();
  await expect(
    page.getByText(/Request acknowledged. Email delivery is disabled/),
  ).toBeVisible();
  await expect(page.getByLabel("Email address", { exact: true })).toHaveValue(
    "unknown@example.invalid",
  );
  await page.goto("/dashboard/account");
  await expect(page.locator("main").getByRole("alert")).toContainText(
    /Sign in again/,
  );
  await expect(page.getByLabel("Display name", { exact: true })).toHaveCount(0);
});
