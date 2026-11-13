import { readFile } from "node:fs/promises";
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test.setTimeout(90000);
test("all 85 fixed public addresses render and unknown unpublished content returns 404", async ({
  page,
  request,
}) => {
  const source = await readFile("docs/sources/02-pages-sitemap.md", "utf8");
  const routes = [
    ...new Set(
      [
        ...source.matchAll(
          /^\| (?:PUB-\d{3}|PUB-S\d{3}|CAT-0[1-8]|SOL-0[1-5]) \| [^|]+ \| `([^`]+)` \| P1 \| A \|/gm,
        ),
      ]
        .map((match) => match[1]!)
        .filter((route) => !route.includes("[")),
    ),
  ];
  expect(routes).toHaveLength(85);
  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
    const html = await response.text();
    expect(html, route).toContain('id="main-content"');
    expect(html, route).not.toContain("Internal Server Error");
  }
  for (const route of [
    "/our-work/not-published",
    "/insights/not-published",
    "/faq/not-published",
    "/unknown-page",
  ]) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(404);
  }
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Build.");
  await expect(page.locator("#expertise .public-card")).toHaveCount(8);
  await expect(page.locator("#solutions article")).toHaveCount(5);
});
test("main public pages have one landmark, useful metadata, three-theme contrast and compact layouts", async ({
  page,
}, info) => {
  for (const route of [
    "/",
    "/about",
    "/faq",
    "/our-work",
    "/insights",
    "/contact",
    "/get-a-quote",
    "/consultation",
    "/privacy",
    "/terms",
    "/search",
    "/thank-you",
  ]) {
    await page.goto(route);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    expect(await page.title()).toContain("ARADUN");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      route,
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations, route).toEqual([]);
  }
  await page.goto("/");
  for (const theme of [
    "Editorial Terracotta",
    "Muted Slate Blue",
    "Vivid Blue",
  ]) {
    await page.getByRole("radio", { name: theme, exact: true }).check();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
  }
  await page.screenshot({
    path: info.outputPath("public-home.png"),
    fullPage: true,
  });
  await page.setViewportSize({ width: 320, height: 900 });
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
test("server-rendered catalog search and FAQ answers work without invented records", async ({
  page,
}) => {
  await page.goto("/search?q=website");
  await expect(
    page
      .getByRole("main")
      .getByRole("link", { name: "Business Website Development", exact: true }),
  ).toHaveAttribute("href", "/services/business-website-development");
  await page.goto("/search?q=zzzznomatches");
  await expect(page.getByText(/No matching results/)).toBeVisible();
  await page.goto("/faq");
  await page
    .getByText("Are the displayed prices a final quote?", { exact: true })
    .click();
  await expect(page.getByText(/^No. Prices are indicative/)).toBeVisible();
  await page.goto("/our-work");
  await expect(
    page.getByText("No approved project case studies are published yet."),
  ).toBeVisible();
  await page.goto("/insights");
  await expect(page.getByText("No articles are published yet.")).toBeVisible();
});
test("disabled intake preserves inputs and direct thank-you is not success", async ({
  page,
}) => {
  await page.route("**/api/intake/status", (route) =>
    route.fulfill({ json: { available: false, emailDeliveryEnabled: false } }),
  );
  await page.goto("/contact");
  await page.getByLabel("Name", { exact: true }).fill("SAMPLE Prospect");
  await page
    .getByLabel("Email", { exact: true })
    .fill("sample@example.invalid");
  await page.getByLabel("Subject", { exact: true }).fill("SAMPLE question");
  await page.getByLabel("Project brief / Message").fill("SAMPLE inquiry");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("main").getByRole("alert")).toContainText(
    "no request has been saved",
  );
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue(
    "SAMPLE Prospect",
  );
  await page.goto("/thank-you");
  await expect(
    page.getByRole("heading", {
      name: "No current verified receipt available.",
    }),
  ).toBeVisible();
});
test("quote selection survives Back and successful contact is durably verified without booking/email claims", async ({
  page,
  request,
}) => {
  await page.goto("/get-a-quote?serviceId=SVC-001");
  const select = page.getByRole("checkbox", {
    name: "Business Website Development",
    exact: true,
  });
  await expect(select).toBeChecked();
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page
    .getByLabel("Project brief / Message")
    .fill("SAMPLE retained brief");
  await page.getByRole("button", { name: "Back", exact: true }).click();
  await expect(select).toBeChecked();
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(page.getByLabel("Project brief / Message")).toHaveValue(
    "SAMPLE retained brief",
  );
  expect(
    (await request.post("http://127.0.0.1:4100/__fixture/identity")).status(),
  ).toBe(200);
  expect(
    (await request.post("http://127.0.0.1:4100/__fixture/intake")).status(),
  ).toBe(204);
  await page.goto("/contact");
  await expect(
    page.getByRole("status").filter({ hasText: "You can submit this form" }),
  ).toContainText("Keep your reference");
  await page.getByLabel("Name", { exact: true }).fill("SAMPLE Prospect");
  await page
    .getByLabel("Email", { exact: true })
    .fill("sample@example.invalid");
  await page.getByLabel("Subject", { exact: true }).fill("SAMPLE question");
  await page
    .getByLabel("Project brief / Message")
    .fill("SAMPLE browser inquiry");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page).toHaveURL(/\/thank-you$/);
  await expect(
    page.getByRole("heading", { name: "Request received." }),
  ).toBeVisible();
  await expect(page.getByText(/Your reference:/)).toContainText(
    /ARQ-[0-9]{4}-[a-f0-9]{24}/,
  );
  await expect(
    page.getByText(/Email delivery has not been confirmed/),
  ).toBeVisible();
  expect(
    await page.evaluate(() => sessionStorage.getItem("aradun-inquiry-receipt")),
  ).not.toContain("sample@example.invalid");
});

test("lost HTTP success retries one saved request and preserves the original reference", async ({
  page,
  request,
}) => {
  await request.post("http://127.0.0.1:4100/__fixture/identity");
  expect(
    (await request.post("http://127.0.0.1:4100/__fixture/intake")).status(),
  ).toBe(204);
  const before = await (
    await request.get("http://127.0.0.1:4100/__fixture/intake-count")
  ).json();
  let first = true,
    reference = "";
  const keys: string[] = [];
  await page.route("**/api/intake", async (route) => {
    keys.push(route.request().headers()["idempotency-key"]!);
    if (first) {
      first = false;
      const response = await route.fetch();
      expect(response.status()).toBe(201);
      reference = (await response.json()).reference;
      await route.abort("connectionreset");
    } else await route.continue();
  });
  await page.goto("/contact");
  await expect(
    page.getByRole("status").filter({ hasText: "You can submit this form" }),
  ).toContainText("Keep your reference");
  await page.getByLabel("Name", { exact: true }).fill("SAMPLE Retry");
  await page.getByLabel("Email", { exact: true }).fill("retry@example.invalid");
  await page
    .getByLabel("Subject", { exact: true })
    .fill("SAMPLE lost response");
  await page.getByLabel("Project brief / Message").fill("SAMPLE retry only");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page.getByRole("main").getByRole("alert")).toContainText(
    "result could not be confirmed",
  );
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue(
    "SAMPLE Retry",
  );
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page).toHaveURL(/\/thank-you$/);
  await expect(page.getByText(/Your reference:/)).toContainText(reference);
  expect(keys).toHaveLength(2);
  expect(keys[0]).toBe(keys[1]);
  const after = await (
    await request.get("http://127.0.0.1:4100/__fixture/intake-count")
  ).json();
  expect(after.inquiries - before.inquiries).toBe(1);
  expect(after.events - before.events).toBe(2);
});
test("custom quote and manual consultation finish with truthful verified receipts", async ({
  page,
  request,
}) => {
  await request.post("http://127.0.0.1:4100/__fixture/identity");
  expect(
    (await request.post("http://127.0.0.1:4100/__fixture/intake")).status(),
  ).toBe(204);
  await page.goto("/get-a-quote");
  await expect(
    page.getByRole("status").filter({ hasText: "You can submit this form" }),
  ).toContainText("Keep your reference");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Project brief / Message").fill("SAMPLE custom brief");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.getByLabel("Name", { exact: true }).fill("SAMPLE Quote");
  await page.getByLabel("Email", { exact: true }).fill("quote@example.invalid");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await expect(
    page.getByText("SAMPLE custom brief", { exact: true }),
  ).toBeVisible();
  await page.getByRole("checkbox").check();
  await page
    .getByRole("button", { name: "Submit Quote Request", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Request received." }),
  ).toBeVisible();
  await page.goto("/consultation");
  await page.getByLabel("Name", { exact: true }).fill("SAMPLE Consultation");
  await page
    .getByLabel("Email", { exact: true })
    .fill("meeting@example.invalid");
  await page
    .getByLabel("Meeting topic", { exact: true })
    .fill("SAMPLE workflow discussion");
  await page.getByLabel("Preferred days / times").fill("Weekday afternoon");
  await page.getByLabel("Your IANA time zone").fill("Asia/Dhaka");
  await page.getByRole("checkbox").check();
  await page
    .getByRole("button", { name: "Request Consultation", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Request received." }),
  ).toBeVisible();
  await expect(page.getByText(/No appointment is booked/)).toBeVisible();
});

test("category context and touch-friendly service choices survive filtering and Back", async ({
  page,
}) => {
  await page.goto("/get-a-quote?categoryId=CAT-01");
  await expect(page.getByText("Starting from", { exact: false })).toContainText(
    "Web & Software Development",
  );
  const group = page.getByRole("group", {
    name: "Services (choose any that apply)",
    exact: true,
  });
  await expect(group.getByRole("checkbox")).toHaveCount(5);
  await group
    .getByRole("checkbox", {
      name: "Business Website Development",
      exact: true,
    })
    .check();
  await page.getByLabel("Find a service").fill("redesign");
  await expect(group.getByRole("checkbox")).toHaveCount(1);
  await group
    .getByRole("checkbox", { name: "Website Redesign", exact: true })
    .check();
  await page.getByLabel("Find a service").fill("no-match-SAMPLE");
  await expect(
    page.getByText("No matching services.", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("list", { name: "Selected services" }).getByRole("listitem"),
  ).toHaveCount(2);
  await page.getByLabel("Find a service").fill("");
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page
    .getByLabel("Project brief / Message")
    .fill("SAMPLE category brief");
  await page.getByRole("button", { name: "Back", exact: true }).click();
  await expect(
    group.getByRole("checkbox", {
      name: "Business Website Development",
      exact: true,
    }),
  ).toBeChecked();
  await expect(
    group.getByRole("checkbox", { name: "Website Redesign", exact: true }),
  ).toBeChecked();
  await page
    .getByRole("checkbox", { name: "Show only Web & Software Development" })
    .uncheck();
  await expect(group.getByRole("checkbox")).toHaveCount(57);
  await page
    .getByRole("button", { name: "Remove Website Redesign", exact: true })
    .click();
  await expect(
    group.getByRole("checkbox", { name: "Website Redesign", exact: true }),
  ).not.toBeChecked();
  expect(
    (await new AxeBuilder({ page }).withTags(["wcag2aa", "wcag22aa"]).analyze())
      .violations,
  ).toEqual([]);
});
test("catalog package context shows human wording and rejects mismatched or forged options", async ({
  page,
}) => {
  await page.goto("/get-a-quote?serviceId=SVC-001&packageId=SVC-001-P01");
  await expect(page.getByText(/Requested option:/)).toContainText(
    "Business Website Development",
  );
  await expect(page.getByText(/Requested option:/)).not.toContainText("SVC-");
  await page.getByRole("button", { name: "Remove package selection" }).click();
  await expect(page.getByText(/Requested option:/)).toHaveCount(0);
  for (const query of [
    "serviceId=SVC-001&packageId=SVC-002-P01",
    "serviceId=SVC-001&packageId=SVC-001-P99",
    "serviceId=SVC-999",
  ]) {
    await page.goto(`/get-a-quote?${query}`);
    await expect(
      page.getByText("Some incoming choices are unavailable.", {
        exact: false,
      }),
    ).toBeVisible();
    await expect(page.getByText(/Requested option:/)).toHaveCount(0);
  }
  await page.goto("/get-a-quote?solutionId=SOL-001&packageId=SOL-001-P01");
  await expect(page.getByText(/Requested option:/)).toContainText(
    "Digital Presence",
  );
});
