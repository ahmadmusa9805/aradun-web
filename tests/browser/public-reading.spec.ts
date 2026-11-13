import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
test("reads all three safe templates and removes withdrawn content immediately", async ({
  page,
  request,
}) => {
  await request.post("http://127.0.0.1:4100/__fixture/reading/ready");
  await page.emulateMedia({ reducedMotion: "reduce" });
  try {
    for (const route of ["our-work", "insights", "faq"]) {
      const response = await page.goto(`/${route}/synthetic-reading`);
      expect(response?.status()).toBe(200);
      const main = page.locator("main");
      await expect(main.getByRole("heading", { level: 1 })).toHaveText(
        "SAMPLE reading - test fixture only",
      );
      await expect(main.locator("article script, article img")).toHaveCount(0);
      await expect(main.locator("article")).toContainText(
        "<script>Never execute this synthetic text</script>",
      );
      if (route === "our-work")
        await expect(main).toContainText("Concept/Demo");
      if (route === "insights")
        await expect(main).toContainText("SAMPLE Author");
      const contentsLink = main
        .getByRole("navigation", { name: "On this page" })
        .getByRole("link")
        .first();
      await contentsLink.focus();
      await page.keyboard.press("Enter");
      await expect(page).toHaveURL(/#section-1$/);
      expect(
        (await new AxeBuilder({ page }).include("main").analyze()).violations,
      ).toEqual([]);
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
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
    await request.post("http://127.0.0.1:4100/__fixture/reading/withdrawn");
    for (const route of ["our-work", "insights", "faq"]) {
      expect((await page.goto(`/${route}/synthetic-reading`))?.status()).toBe(
        404,
      );
      await expect(page.locator("main")).not.toContainText("SAMPLE Author");
    }
    await request.post("http://127.0.0.1:4100/__fixture/reading/unavailable");
    await page.goto("/insights/synthetic-reading");
    await expect(
      page.getByRole("heading", { name: "Reading temporarily unavailable" }),
    ).toBeVisible();
    await expect(page.locator("main")).not.toContainText("SAMPLE Author");
  } finally {
    await request.post("http://127.0.0.1:4100/__fixture/reading/ready");
  }
});
