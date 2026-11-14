import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("deferred forms hand off contact, selected-service quote and consultation privately without posting", async ({
  page,
}) => {
  const posted: string[] = [];
  page.on("request", (request) => {
    if (
      request.method() === "POST" &&
      new URL(request.url()).pathname.startsWith("/api/intake")
    )
      posted.push(request.url());
  });
  await page.route("**/api/intake/status", (route) =>
    route.fulfill({ json: { available: false, emailDeliveryEnabled: false } }),
  );
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          (window as Window & { copiedBrief?: string }).copiedBrief = text;
        },
      },
    }),
  );
  for (const type of ["contact", "quote", "consultation"] as const) {
    await page.goto(
      type === "quote" ? "/get-a-quote?serviceId=SVC-001" : `/${type}`,
    );
    if (type === "quote") {
      await page.getByRole("button", { name: "Continue", exact: true }).click();
      await page
        .getByLabel("Project brief / Message")
        .fill("SAMPLE PRIVATE brief");
      await page.getByRole("button", { name: "Continue", exact: true }).click();
    }
    await page.getByLabel("Name", { exact: true }).fill("SAMPLE private name");
    await page
      .getByLabel("Email", { exact: true })
      .fill("sample-private@example.invalid");
    if (type !== "quote") {
      await page
        .getByLabel(type === "contact" ? "Subject" : "Meeting topic", {
          exact: true,
        })
        .fill("SAMPLE topic");
      await page
        .getByLabel(
          type === "consultation"
            ? "Preparation notes (optional)"
            : "Project brief / Message",
        )
        .fill("SAMPLE PRIVATE brief");
    }
    if (type === "consultation") {
      await page
        .getByLabel("Preferred days / times")
        .fill("SAMPLE weekday afternoon");
      await page.getByLabel("Your IANA time zone").fill("Asia/Dhaka");
    }
    await page.getByRole("button", { name: "Copy inquiry brief" }).click();
    await expect(
      page.getByText(
        "Brief copied. Paste it into your email. Nothing has been submitted through this website.",
      ),
    ).toBeVisible();
    const brief = await page.evaluate(
      () => (window as Window & { copiedBrief?: string }).copiedBrief,
    );
    expect(brief).toContain("SAMPLE PRIVATE brief");
    expect(brief).toContain("sample-private@example.invalid");
    if (type === "quote")
      expect(brief).toContain("Business Website Development (SVC-001)");
    if (type === "consultation") {
      expect(brief).toContain("SAMPLE weekday afternoon");
      expect(brief).toContain("Asia/Dhaka");
    }
    const link = page.getByRole("link", { name: "Open email app" });
    await expect(link).toHaveAttribute(
      "href",
      `mailto:hello@aradun.com?subject=${encodeURIComponent(`ARADUN ${type} inquiry`)}`,
    );
    expect(
      await page
        .locator("a[href]")
        .evaluateAll((nodes) =>
          nodes.map((node) => node.getAttribute("href")).join(" "),
        ),
    ).not.toContain("sample-private");
    expect(
      await page.evaluate(() =>
        JSON.stringify({ ...sessionStorage, ...localStorage }),
      ),
    ).not.toContain("SAMPLE PRIVATE");
    await expect(
      page.getByRole("heading", { name: "Request received." }),
    ).toHaveCount(0);
  }
  expect(posted).toEqual([]);
});

test("clipboard denial gives selected editable-device fallback with accessible themes and narrow layout", async ({
  page,
}) => {
  await page.route("**/api/intake/status", (route) =>
    route.fulfill({ json: { available: false, emailDeliveryEnabled: false } }),
  );
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw Error("SAMPLE clipboard denial");
        },
      },
    }),
  );
  await page.goto("/contact");
  await page
    .getByLabel("Project brief / Message")
    .fill("SAMPLE PRIVATE " + "longword".repeat(100));
  await page.getByRole("button", { name: "Copy inquiry brief" }).click();
  const fallback = page.getByRole("textbox", { name: "Your email brief" });
  await expect(fallback).toBeFocused();
  await expect(fallback).toHaveValue(/SAMPLE PRIVATE/);
  expect(
    await fallback.evaluate(
      (node: HTMLTextAreaElement) => node.selectionEnd - node.selectionStart,
    ),
  ).toBeGreaterThan(100);
  await page.setViewportSize({ width: 320, height: 760 });
  for (const name of [
    "Editorial Terracotta",
    "Muted Slate Blue",
    "Vivid Blue",
  ]) {
    await page.getByRole("radio", { name }).check();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
