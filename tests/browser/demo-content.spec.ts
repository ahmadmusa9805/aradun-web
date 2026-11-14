import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("development examples are disclosed, linked truthfully and accessible", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".demo-project")).toHaveCount(3);
  await expect(page.locator(".demo-feedback-card")).toHaveCount(3);
  await expect(
    page.getByText(/fictional review copy and AI-generated portraits/),
  ).toBeVisible();
  for (const img of await page.locator(".demo-avatar img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        img.evaluate((node) => (node as HTMLImageElement).naturalWidth),
      )
      .toBeGreaterThan(0);
  }
  for (const link of await page.locator(".demo-project > a").all()) {
    expect(await link.getAttribute("href")).toMatch(/^\/get-a-quote\?/);
  }
  await expect(
    page.getByRole("button", { name: "Static logos" }),
  ).toBeDisabled();
  expect(
    await page
      .locator(".demo-partner-track")
      .evaluate((node) => getComputedStyle(node).animationName),
  ).toBe("none");
  expect(
    (
      await new AxeBuilder({ page })
        .include("#selected-work")
        .include("#client-feedback")
        .analyze()
    ).violations,
  ).toEqual([]);
  await page.goto("/our-work");
  await expect(page.locator(".demo-project")).toHaveCount(3);
});

test("company strip has a usable pause control and stops on focus", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.locator(".demo-partners").scrollIntoViewIfNeeded();
  const pause = page.getByRole("button", { name: "Pause logo motion" });
  await expect(pause).toBeVisible();
  await pause.click();
  await expect(
    page.getByRole("button", { name: "Play logo motion" }),
  ).toBeVisible();
  await expect(page.locator(".demo-partner-track--moving")).toHaveCount(0);
  await page.getByRole("button", { name: "Play logo motion" }).click();
  await page.getByRole("region", { name: "Demo company logo strip" }).focus();
  expect(
    await page
      .locator(".demo-partner-track")
      .evaluate((node) => getComputedStyle(node).animationPlayState),
  ).toBe("paused");
});
