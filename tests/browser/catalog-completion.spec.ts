import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("all eight categories retain 58 memberships, useful summaries and valid service/category quote context", async ({
  page,
  request,
}) => {
  test.setTimeout(120000);
  const index = await (
    await request.get("http://127.0.0.1:4100/api/catalog/categories")
  ).json();
  let memberships = 0;
  const unique = new Set<string>();
  for (const item of index.categories) {
    const { category } = await (
      await request.get(
        `http://127.0.0.1:4100/api/catalog/categories/${item.slug}`,
      )
    ).json();
    expect((await page.goto(item.href))?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveText(category.name);
    await expect(
      page.locator("#category-services [data-service-id]"),
    ).toHaveCount(category.services.length);
    for (const service of category.services) {
      memberships++;
      unique.add(service.id);
      const card = page.locator(`[data-service-id="${service.id}"]`);
      await expect(card).toContainText(service.summary);
      await expect(card).toContainText(service.price.label);
      const quote = card.locator('a[href^="/get-a-quote"]');
      const href = await quote.getAttribute("href");
      expect(href).toBe(
        `/get-a-quote?serviceId=${service.id}&categoryId=${category.id}`,
      );
      const response = await request.get(href!);
      expect(response.status()).toBe(200);
      expect(await response.text()).not.toContain(
        "Some incoming choices are unavailable",
      );
    }
    expect(
      (await new AxeBuilder({ page }).include("main").analyze()).violations,
    ).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  expect(memberships).toBe(58);
  expect(unique.size).toBe(57);
  const design = index.categories.find(
    (item: { id: string }) => item.id === "CAT-07",
  );
  await page.goto(design.href);
  await page
    .locator('[data-service-id="SVC-009"] a[href^="/get-a-quote"]')
    .click();
  await expect(
    page.getByRole("checkbox", {
      name: "Mobile App UI/UX Design",
      exact: true,
    }),
  ).toBeChecked();
  await page
    .getByRole("checkbox", { name: `Show only ${design.name}`, exact: true })
    .uncheck();
  await expect(
    page.locator(".service-choices").getByRole("checkbox"),
  ).toHaveCount(57);
});
