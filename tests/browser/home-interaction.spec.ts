import { expect, test } from "@playwright/test";

test("logo and catalog links finish real client navigation without a stuck transition", async ({
  page,
}, info) => {
  await page.goto("/contact");
  await page.getByRole("link", { name: "ARADUN home", exact: true }).click();
  await expect(page.locator("#home-title")).toContainText("Build.");
  const mobile = info.project.name.includes("mobile");
  async function open(label: string) {
    if (mobile) await page.locator(".mobile-navigation > summary").click();
    const nav = page.getByRole("navigation", {
      name: mobile ? "Mobile navigation" : "Main navigation",
      exact: true,
    });
    await nav
      .locator("summary")
      .filter({ hasText: new RegExp(`^${label}$`) })
      .click();
    await nav.getByRole("link", { name: `All ${label}`, exact: true }).click();
  }
  await open("Services");
  await expect(page.locator("main h1")).toHaveText(
    "Find the right services for your business.",
  );
  await page
    .locator("main")
    .getByRole("link", { name: "Web & Software Development", exact: true })
    .first()
    .click();
  await expect(page.locator("main h1")).toHaveText(
    "Web & Software Development",
  );
  await page.locator("main .catalog-card h3 a").first().click();
  await expect(page.locator("main h1")).toHaveText(
    "Business Website Development",
  );
  await page.getByRole("link", { name: "ARADUN home", exact: true }).click();
  await expect(page.locator("#home-title")).toBeVisible();
  await open("Solutions");
  await expect(page.locator("main h1")).toHaveText(
    "Find a solution around your business goals.",
  );
  await page
    .locator("main")
    .getByRole("link", { name: "Digital Presence", exact: true })
    .first()
    .click();
  await expect(page.locator("main h1")).toHaveText("Digital Presence");
});

test("world follows a fine pointer, resets on exit and remains static for reduced motion or touch", async ({
  page,
}, info) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const art = page.locator(".world-interactive");
  const bounds = (await page.locator(".home-world").boundingBox())!;
  await page.mouse.move(
    bounds.x + bounds.width * 0.8,
    bounds.y + bounds.height * 0.4,
  );
  const rotation = () =>
    art.evaluate((node) =>
      (node as HTMLElement).style.getPropertyValue("--world-x"),
    );
  if (info.project.name.includes("mobile")) expect(await rotation()).toBe("");
  else {
    await expect.poll(rotation).not.toBe("");
    await page.mouse.move(0, 0);
    await expect.poll(rotation).toBe("");
    await page.mouse.move(
      bounds.x + bounds.width * 0.8,
      bounds.y + bounds.height * 0.4,
    );
    await expect.poll(rotation).not.toBe("");
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(rotation).toBe("");
  expect(await art.evaluate((node) => getComputedStyle(node).transform)).toBe(
    "none",
  );
});

test("failed world image keeps a decorative fallback and all eleven honest homepage sections", async ({
  page,
}) => {
  await page.route("**/_next/image?*", (route) =>
    route.request().url().includes("world-partial-v2")
      ? route.abort()
      : route.continue(),
  );
  await page.goto("/");
  await expect(page.locator(".world-image-fallback")).toBeVisible();
  await expect(page.locator("main section[id]")).toHaveCount(11);
  await expect(
    page.getByRole("heading", {
      name: "Selected work and case studies",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Client feedback", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Insights and resources", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText(/fictional profiles for layout review/),
  ).toBeVisible();
  await expect(page.locator("#insights .home-resource-card")).toHaveCount(3);
});
