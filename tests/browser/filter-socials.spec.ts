import { test, expect } from "@playwright/test";
test("Work and Insights filter immediately and reset selection correctly", async ({
  page,
}) => {
  await page.goto("/our-work");
  await page.getByLabel("Service category").selectOption("CAT-03");
  await expect(page).toHaveURL(/category=CAT-03/);
  await expect(page.locator(".demo-project")).toHaveCount(3);
  await page
    .getByRole("link", { name: "View all projects", exact: true })
    .first()
    .click();
  await expect(page.getByLabel("Service category")).toHaveValue("all");
  await expect(page.locator(".demo-project")).toHaveCount(12);
  await page.goto("/insights");
  await page
    .getByLabel("Topic", { exact: true })
    .selectOption("Digital Marketing");
  await expect(page).toHaveURL(/topic=Digital/);
  await expect(page.locator(".article-card")).toHaveCount(1);
  await page
    .getByRole("link", { name: "View all articles", exact: true })
    .first()
    .click();
  await expect(page.getByLabel("Topic", { exact: true })).toHaveValue("all");
  await expect(page.locator(".article-card")).toHaveCount(8);
});
test("Contact and footer expose the owner's approved social and WhatsApp links", async ({
  page,
}) => {
  await page.goto("/contact");
  const links = {
    LinkedIn: "https://www.linkedin.com/company/aradun/",
    Facebook: "https://www.facebook.com/aradunhq/",
    Instagram: "https://www.instagram.com/aradunhq/",
    YouTube: "https://www.youtube.com/@aradunhq",
    X: "https://x.com/aradunhq",
  };
  for (const name of ["ARADUN social profiles", "Footer social profiles"]) {
    const nav = page.getByRole("navigation", { name, exact: true });
    for (const [label, href] of Object.entries(links))
      await expect(
        nav.getByRole("link", { name: label, exact: true }),
      ).toHaveAttribute("href", href);
  }
  await expect(
    page
      .locator(".business-contact")
      .getByRole("link", { name: "Chat on WhatsApp", exact: true }),
  ).toHaveAttribute("href", "https://wa.me/8801302601121");
  await expect(page.getByRole("link", { name: /Call \+1/ })).toHaveAttribute(
    "href",
    "tel:+14045414448",
  );
});
test("filter submit buttons still work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/our-work");
  await page.getByLabel("Service category").selectOption("CAT-02");
  await page.getByRole("button", { name: "Filter projects" }).click();
  await expect(page).toHaveURL(/category=CAT-02/);
  await expect(page.locator(".demo-project")).toHaveCount(3);
  await context.close();
});
