import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { generate } from "otplib";
test("a session revoked mid-edit clears protected account and offline codes with focused denial", async ({
  page,
  request,
}) => {
  const result = await request.post("http://127.0.0.1:4100/__fixture/identity");
  expect(result.status()).toBe(200);
  const user = await result.json();
  await page.goto("/staff/login");
  await page.getByLabel("Email address").fill(user.email);
  await page.getByLabel("Password", { exact: true }).fill(user.password);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page
    .getByRole("link", { name: "Continue to authenticator verification" })
    .click();
  await page.getByRole("button", { name: "Set up authenticator" }).click();
  const secret = await page.locator(".security-secret").innerText(),
    remaining = 30000 - (Date.now() % 30000);
  if (remaining < 4000) await page.waitForTimeout(remaining + 100);
  await page
    .getByLabel("Authenticator code", { exact: true })
    .fill(await generate({ secret }));
  await page.getByRole("button", { name: "Verify", exact: true }).click();
  await page.getByRole("link", { name: "Continue to My Account" }).click();
  await page
    .getByRole("button", { name: "Create replacement recovery pack" })
    .click();
  await expect(page.locator(".security-codes li")).toHaveCount(10);
  await page.getByLabel("Display name").fill("SAMPLE pending edit");
  const logout = await page.request.post(
    "http://127.0.0.1:4100/api/identity/logout",
    {
      headers: {
        Origin: "http://127.0.0.1:3100",
        "X-ARADUN-Request": "identity",
      },
      data: {},
    },
  );
  expect(logout.status()).toBe(204);
  const denied = page.waitForResponse(
    (response) =>
      response.url().endsWith("/api/identity/account") &&
      response.request().method() === "POST",
  );
  await page.getByRole("button", { name: "Save profile" }).click();
  const response = await denied;
  expect(response.status()).toBe(401);
  expect(response.headers()["cache-control"]).toBe("no-store");
  await expect(page.locator("main").getByRole("alert")).toBeFocused();
  await expect(page.getByLabel("Display name")).toHaveCount(0);
  await expect(page.locator(".security-codes li")).toHaveCount(0);
  await expect(page.getByText(/Signed in as/)).toHaveCount(0);
  expect(
    (await new AxeBuilder({ page }).include("main").analyze()).violations,
  ).toEqual([]);
});
test("auth/private routes emit no marketing requests or credential URLs", async ({
  page,
  request,
}) => {
  await request.post("http://127.0.0.1:4100/__fixture/identity");
  const urls: string[] = [];
  page.on("request", (request) => urls.push(request.url()));
  const email = "sample-telemetry@example.invalid",
    password = "SAMPLE_PRIVATE_BROWSER_PASSWORD";
  await page.goto("/staff/login");
  await page.getByLabel("Email address").fill(email);
  await page.getByLabel("Password", { exact: true }).fill(password);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    /could not be verified/,
  );
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
  }
  expect(urls.length).toBeGreaterThan(0);
  for (const url of urls) {
    expect(["http://127.0.0.1:3100", "http://127.0.0.1:4100"]).toContain(
      new URL(url).origin,
    );
    expect(decodeURIComponent(url)).not.toContain(email);
    expect(url).not.toContain(password);
    expect(url).not.toMatch(
      /google-analytics|googletagmanager|hotjar|mixpanel|posthog|facebook|segment\.com/i,
    );
  }
});
