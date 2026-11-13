import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("submission outage has a direct email alternative and explicit recheck preserves input and focus", async ({
  page,
}) => {
  let reads = 0;
  await page.route("**/api/intake/status", (route) =>
    route.fulfill({
      json: { available: ++reads > 1, emailDeliveryEnabled: false },
    }),
  );
  await page.goto("/contact");
  const alternative = page.getByRole("complementary", {
    name: "Other ways to contact ARADUN",
  });
  await expect(
    alternative.getByRole("link", { name: "hello@aradun.com" }),
  ).toHaveAttribute("href", "mailto:hello@aradun.com");
  await page
    .getByLabel("Name", { exact: true })
    .fill("SAMPLE retained inquiry");
  await page
    .getByLabel("Project brief / Message")
    .fill("SAMPLE unsent message");
  const retry = alternative.getByRole("button", {
    name: "Check online submission again",
  });
  await retry.click();
  await expect(
    page.getByText("Online submission is available.", { exact: false }),
  ).toBeVisible();
  await expect(retry).toBeFocused();
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue(
    "SAMPLE retained inquiry",
  );
  await expect(page.getByLabel("Project brief / Message")).toHaveValue(
    "SAMPLE unsent message",
  );
  expect(
    (await new AxeBuilder({ page }).withTags(["wcag2aa", "wcag22aa"]).analyze())
      .violations,
  ).toEqual([]);
});
test("direct email assistance remains visible without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto(`${baseURL}/get-a-quote`);
    await expect(
      page.locator("noscript").getByRole("link", { name: "hello@aradun.com" }),
    ).toHaveAttribute("href", "mailto:hello@aradun.com");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Continue", exact: true }),
    ).toBeDisabled();
    await expect(page.locator("form.intake-form")).toHaveAttribute(
      "method",
      "post",
    );
  } finally {
    await context.close();
  }
});
test("public links avoid speculative route requests and quote DTOs exclude unused solution content", async ({
  page,
  request,
}) => {
  const speculative: string[] = [];
  page.on("request", (req) => {
    if (new URL(req.url()).searchParams.has("_rsc"))
      speculative.push(req.url());
  });
  await page.goto("/");
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "Privacy Policy", exact: true })
    .hover();
  await page.waitForTimeout(300);
  expect(speculative).toEqual([]);
  const response = await request.get("/get-a-quote");
  expect(await response.text()).not.toContain("candidateServiceIds");
});
test("production-build local payload and initial paint samples", async ({
  page,
}, info) => {
  test.setTimeout(90000);
  await page.addInitScript(() => {
    const sample = { lcp: 0, cls: 0 };
    (
      window as unknown as Window & { __publicQuality: typeof sample }
    ).__publicQuality = sample;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) sample.lcp = entry.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const shift = entry as PerformanceEntry & {
          value: number;
          hadRecentInput: boolean;
        };
        if (!shift.hadRecentInput) sample.cls += shift.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
  });
  const client = await page.context().newCDPSession(page);
  await client.send("Network.enable");
  await client.send("Network.setCacheDisabled", { cacheDisabled: true });
  let bytes = 0,
    fontBytes = 0,
    scriptBytes = 0;
  const resources = new Map<string, string>();
  client.on("Network.responseReceived", (event) =>
    resources.set(event.requestId, event.type),
  );
  client.on("Network.loadingFinished", (event) => {
    const type = resources.get(event.requestId);
    if (!type) return;
    bytes += event.encodedDataLength;
    if (type === "Font") fontBytes += event.encodedDataLength;
    if (type === "Script") scriptBytes += event.encodedDataLength;
  });
  const report = [];
  for (const path of [
    "/",
    "/services/business-website-development",
    "/get-a-quote",
  ]) {
    const samples: {
      lcp: number;
      cls: number;
      transferBytes: number;
      fontBytes: number;
      scriptBytes: number;
    }[] = [];
    for (let run = 0; run < 3; run++) {
      bytes = fontBytes = scriptBytes = 0;
      resources.clear();
      await page.goto(path, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(150);
      const metrics = await page.evaluate(
        () =>
          (
            window as unknown as Window & {
              __publicQuality: { lcp: number; cls: number };
            }
          ).__publicQuality,
      );
      samples.push({
        ...metrics,
        transferBytes: bytes,
        fontBytes,
        scriptBytes,
      });
      expect(bytes, path).toBeLessThanOrEqual(1024 * 1024);
      expect(fontBytes, path).toBeLessThanOrEqual(150 * 1024);
    }
    const median = (key: keyof (typeof samples)[number]) =>
      samples.map((item) => item[key]).sort((a, b) => a - b)[1]!;
    report.push({
      path,
      median: {
        lcpMs: median("lcp"),
        cls: median("cls"),
        transferBytes: median("transferBytes"),
        fontBytes: median("fontBytes"),
        scriptBytes: median("scriptBytes"),
      },
      samples,
    });
  }
  await info.attach("public-local-performance", {
    body: JSON.stringify(
      {
        project: info.project.name,
        configuration:
          "Local loopback production build, cache disabled; three samples per route; no CPU/network throttle. Not field CWV or Lighthouse.",
        report,
      },
      null,
      2,
    ),
    contentType: "application/json",
  });
  console.log(
    `PUBLIC_QUALITY ${JSON.stringify({ project: info.project.name, report: report.map(({ path, median }) => ({ path, ...median })) })}`,
  );
});
