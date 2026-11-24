import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Contact starts with visible fields and inquiry pages remain centered", async ({
  page,
}) => {
  await page.goto("/contact");
  const field = page.getByLabel("Name", { exact: true });
  await expect(field).toBeVisible();
  expect((await field.boundingBox())!.y).toBeLessThan(
    page.viewportSize()!.height - 30,
  );
  const form = (await page.locator(".intake-form").boundingBox())!;
  expect(
    Math.abs(form.x + form.width / 2 - page.viewportSize()!.width / 2),
  ).toBeLessThan(3);
  await expect(page.locator(".public-preview,.catalog-preview")).toHaveCount(0);
  expect(
    (await new AxeBuilder({ page }).include("main").analyze()).violations,
  ).toEqual([]);
  await page.goto("/get-a-quote");
  const quote = (await page.locator(".intake-form").boundingBox())!;
  expect(
    Math.abs(quote.x + quote.width / 2 - page.viewportSize()!.width / 2),
  ).toBeLessThan(3);
});

test("work has filters, no-match recovery, concept images and complete details", async ({
  page,
}) => {
  await page.goto("/our-work");
  await expect(page.locator(".demo-project")).toHaveCount(12);
  await expect(page.locator(".concept-project-image")).toHaveCount(12);
  await page.getByLabel("Service category").selectOption("CAT-03");
  await page.getByRole("button", { name: "Filter projects" }).click();
  await expect(page.locator(".demo-project")).toHaveCount(3);
  await page
    .locator(".demo-project")
    .getByRole("link", { name: "View project", exact: false })
    .first()
    .click();
  await expect(page.locator("main h1")).toHaveText(
    "Follow-up workflow concept",
  );
  await expect(page.locator("main > section")).toHaveCount(6);
  await expect(
    page.getByText(
      "This is an interface exploration, not a client commission.",
    ),
  ).toBeVisible();
  await page.getByRole("link", { name: /View all projects/ }).click();
  await page.goto("/our-work?category=unknown");
  await expect(page.getByRole("status")).toContainText(
    "No projects in this category yet",
  );
  expect(
    (await new AxeBuilder({ page }).include("main").analyze()).violations,
  ).toEqual([]);
});

test("public branding, banners and motion honor the requested controls", async ({
  page,
}, info) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(
    page.getByText("Building tomorrow together", { exact: true }),
  ).toHaveCount(1);
  await expect(page.locator(".footer-brand .brand-lockup")).toBeVisible();
  expect(
    await page
      .locator(".world-globe")
      .evaluate((node) => getComputedStyle(node).animationName),
  ).toBe("none");
  await expect(
    page.getByRole("button", { name: "Static feedback" }),
  ).toBeDisabled();
  await expect(
    page.locator(".demo-partner-track ul:not([aria-hidden]) li"),
  ).toHaveCount(5);
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
  const labels = await nav.locator(".category-panel ul a").allTextContents();
  expect(labels.slice(0, 4).map((label) => label.trim())).toEqual([
    "Web & Software Development",
    "AI Automation & CRM",
    "Digital Marketing",
    "Mobile App Development",
  ]);
  for (const path of ["/pricing", "/services", "/solutions"]) {
    await page.goto(path);
    await expect(page.locator(".public-preview,.catalog-preview")).toHaveCount(
      0,
    );
  }
});
