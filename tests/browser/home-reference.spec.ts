import { expect, test } from "@playwright/test";

test("reference header uses the supplied lockup and compact neutral-icon expertise rows", async ({
  page,
  request,
}, info) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const brand = page.getByRole("link", { name: "ARADUN home", exact: true });
  await expect(
    brand.getByRole("img", { name: "ARADUN", exact: true }),
  ).toBeVisible();
  await expect(brand).not.toContainText("Technology & Digital Solutions");
  expect(
    (
      await request.get(
        "/_next/image?url=%2Fbrand%2Faradun-terracotta.png&w=640&q=75",
      )
    ).status(),
  ).toBe(200);
  await expect(page.locator("#expertise .public-card")).toHaveCount(8);
  expect(await page.locator("#expertise h3").allTextContents()).toEqual([
    "Web & Software Development",
    "AI Automation & CRM",
    "Digital Marketing",
    "Mobile App Development",
    "Cloud & DevOps",
    "Cybersecurity",
    "UI/UX, Graphic Design & Branding",
    "Video Editing & Production",
  ]);
  await expect(page.locator(".world-globe")).toBeVisible();
  for (const theme of [
    "Editorial Terracotta",
    "Muted Slate Blue",
    "Vivid Blue",
  ]) {
    await page.getByRole("radio", { name: theme, exact: true }).check();
    if (theme === "Vivid Blue") {
      await expect(brand.locator(".brand-vivid-symbol")).toBeVisible();
      expect(
        await brand
          .locator(".brand-vivid-symbol")
          .evaluate((node) => getComputedStyle(node).backgroundImage),
      ).toContain("aradun-vivid-symbol.png");
      continue;
    }
    expect(
      await brand
        .locator(".brand-vivid-symbol")
        .evaluate((node) => getComputedStyle(node).backgroundImage),
    ).toContain(
      theme === "Editorial Terracotta"
        ? "aradun-terracotta.png"
        : "aradun-slate-blue.png",
    );
  }
  await expect
    .poll(() =>
      page
        .locator(".world-globe")
        .evaluate((node) => (node as HTMLImageElement).naturalWidth),
    )
    .toBeGreaterThan(0);
  for (const card of await page.locator("#expertise .public-card").all()) {
    expect(await card.locator("a").count()).toBe(1);
    expect(
      await card
        .locator(".category-icon")
        .evaluate((node) => getComputedStyle(node).color),
    ).toBe(
      await card.locator("h3").evaluate((node) => getComputedStyle(node).color),
    );
  }
  if (!info.project.name.includes("mobile")) {
    expect(
      (await page.locator(".header-top").boundingBox())!.height,
    ).toBeLessThanOrEqual(84);
    expect(
      (await page.locator("#expertise .public-card").first().boundingBox())!
        .height,
    ).toBeLessThanOrEqual(135);
  }
  expect(
    await page
      .locator(".editorial-art")
      .evaluate((node) => getComputedStyle(node).animationName),
  ).toBe("none");
  expect(
    await page
      .locator("#approach > h2")
      .evaluate((node) => getComputedStyle(node).animationName),
  ).toBe("none");
});

test("motion follows documented isolated feedback and static reduced-motion fallback", async ({
  page,
}, info) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  if (info.project.name.includes("mobile"))
    await page.locator(".mobile-navigation > summary").click();
  const nav = page.getByRole("navigation", {
    name: info.project.name.includes("mobile")
      ? "Mobile navigation"
      : "Main navigation",
    exact: true,
  });
  await nav
    .locator("summary")
    .filter({ hasText: /^Services$/ })
    .click();
  const panel = nav.locator(".category-panel").first();
  expect(
    await panel.evaluate((node) => getComputedStyle(node).animationName),
  ).toBe("menu-settle");
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await panel.evaluate((node) => getComputedStyle(node).animationName),
  ).toBe("none");
  await expect(
    panel.getByRole("link", { name: "All Services", exact: true }),
  ).toBeVisible();
});
