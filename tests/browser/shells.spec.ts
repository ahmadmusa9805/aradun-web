import {
  test,
  expect,
  type Page,
  type APIRequestContext,
} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { generate } from "otplib";
async function signIn(
  page: Page,
  request: APIRequestContext,
  role: "admin" | "sales" | "editor" = "admin",
) {
  const fixture = await request.post(
    "http://127.0.0.1:4100/__fixture/identity",
    { data: { role } },
  );
  expect(fixture.status()).toBe(200);
  const actor = await fixture.json();
  await page.goto("/staff/login");
  await page.getByLabel("Email address").fill(actor.email);
  await page.getByLabel("Password", { exact: true }).fill(actor.password);
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
  await expect(page.locator(".staff-actor")).toContainText("SAMPLE Staff");
  return actor;
}
test("all roles get a current private shell and independently authorized content actor read", async ({
  page,
  request,
}) => {
  for (const [role, label] of [
    ["admin", "Admin"],
    ["sales", "Sales"],
    ["editor", "Editor"],
  ] as const) {
    const actor = await signIn(page, request, role);
    await expect(page.locator(".staff-role")).toHaveText(label);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.locator(".site-header")).toHaveCount(0);
    await expect(page.locator(".site-footer")).toHaveCount(0);
    const content = await page.request.get(
      "http://127.0.0.1:4100/api/identity/actor?area=content",
      { headers: { Origin: "http://127.0.0.1:3100" } },
    );
    expect(content.status()).toBe(role === "sales" ? 403 : 200);
    expect(content.headers()["cache-control"]).toBe("no-store");
    const html = await (
      await page.request.get("http://127.0.0.1:3100/dashboard/account")
    ).text();
    expect(html).not.toContain(actor.email);
    expect(html).not.toContain("SAMPLE Staff");
    await page.getByRole("button", { name: "Sign out", exact: true }).click();
    await expect(page.locator(".staff-actor")).toHaveCount(0);
    await page.goto("/dashboard/account");
    await expect(page.locator("main").getByRole("alert")).toContainText(
      "Sign in again",
    );
    await expect(page.getByLabel("Display name")).toHaveCount(0);
  }
});
test("compact staff drawer traps focus, restores it, preserves input and works across themes and zoom", async ({
  page,
  request,
}, info) => {
  await signIn(page, request);
  await page.setViewportSize({ width: 320, height: 740 });
  const trigger = page.getByRole("button", { name: "Staff menu", exact: true });
  await expect(trigger).toBeVisible();
  await page.getByLabel("Display name").fill("SAMPLE preserved input");
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Staff navigation menu" });
  await expect(dialog).toBeVisible();
  const close = dialog.getByRole("button", { name: "Close staff menu" });
  await expect(close).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("link", { name: "My Account", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  for (const theme of [
    "Editorial Terracotta",
    "Muted Slate Blue",
    "Vivid Blue",
  ]) {
    await page.getByRole("radio", { name: theme, exact: true }).check();
    await expect(page.getByLabel("Display name")).toHaveValue(
      "SAMPLE preserved input",
    );
    expect(
      (await new AxeBuilder({ page }).include(".dashboard-shell").analyze())
        .violations,
    ).toEqual([]);
  }
  await page.evaluate(() => (document.documentElement.style.fontSize = "200%"));
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.evaluate(() => (document.documentElement.style.fontSize = ""));
  await page.screenshot({
    path: info.outputPath("staff-compact.png"),
    fullPage: true,
  });
  await trigger.click();
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(dialog).not.toBeVisible();
  await expect(page.getByRole("main")).toBeFocused();
  await expect(trigger).not.toBeVisible();
  await expect(page.locator(".staff-sidebar")).toBeVisible();
  await page.screenshot({
    path: info.outputPath("staff-desktop.png"),
    fullPage: true,
  });
});
test("public/auth layout ownership is unique and public root never requests a private actor", async ({
  page,
}) => {
  const privateCalls: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("/api/identity/actor"))
      privateCalls.push(request.url());
  });
  for (const route of ["/", "/services", "/solutions", "/pricing"]) {
    await page.goto(route);
    await expect(page.locator(".site-header")).toHaveCount(1);
    await expect(page.locator(".site-footer")).toHaveCount(1);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.locator(".staff-actor")).toHaveCount(0);
  }
  expect(privateCalls).toEqual([]);
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const route of [
    "/staff/login",
    "/staff/recover",
    "/staff/reset",
    "/staff/verify",
  ]) {
    await page.goto(route);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.locator(".site-header")).toHaveCount(0);
    await expect(page.locator(".staff-sidebar")).toHaveCount(0);
    const box = await page.locator(".staff-sign-in-card").boundingBox();
    expect(box!.width).toBeLessThanOrEqual(441);
  }
});
