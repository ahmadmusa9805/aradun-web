import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const themes = [
  ["terracotta", "Editorial Terracotta", "#AF432D"],
  ["slate-blue", "Muted Slate Blue", "#3F617B"],
  ["vivid-blue", "Vivid Blue", "#0066FF"],
] as const;

test("all six theme transitions preserve content, input, URL and control focus", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => {
    const input = document.createElement("input");
    input.setAttribute("aria-label", "SAMPLE retained input");
    input.value = "SAMPLE/DEMO retained value";
    document.querySelector("main")!.append(input);
  });
  const originalUrl = page.url();
  const stable = await page.evaluate(() =>
    [
      "--color-text",
      "--color-success",
      "--color-warning",
      "--color-error",
      "--color-info",
    ].map((key) =>
      getComputedStyle(document.documentElement).getPropertyValue(key),
    ),
  );
  for (const from of themes)
    for (const to of themes) {
      if (from === to) continue;
      await page.getByRole("radio", { name: from[1], exact: true }).check();
      const radio = page.getByRole("radio", { name: to[1], exact: true });
      await radio.focus();
      const scroll = await page.evaluate(() => window.scrollY);
      await radio.press("Space");
      await expect(radio).toBeChecked();
      await expect(radio).toBeFocused();
      expect(
        await page.evaluate(() =>
          getComputedStyle(document.documentElement)
            .getPropertyValue("--color-brand")
            .trim()
            .toUpperCase(),
        ),
      ).toBe(to[2]);
      expect(
        await page.evaluate(() => localStorage.getItem("aradun-theme")),
      ).toBe(to[0]);
      expect(page.url()).toBe(originalUrl);
      expect(await page.evaluate(() => window.scrollY)).toBe(scroll);
      await expect(page.getByLabel("SAMPLE retained input")).toHaveValue(
        "SAMPLE/DEMO retained value",
      );
      expect(
        await page.evaluate(() =>
          [
            "--color-text",
            "--color-success",
            "--color-warning",
            "--color-error",
            "--color-info",
          ].map((key) =>
            getComputedStyle(document.documentElement).getPropertyValue(key),
          ),
        ),
      ).toEqual(stable);
    }
  await page
    .getByLabel("SAMPLE retained input")
    .evaluate((element) => element.remove());
  for (const theme of themes) {
    await page.getByRole("radio", { name: theme[1], exact: true }).check();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `.tools/m04-01/${info.project.name}-${theme[0]}.png`,
      fullPage: true,
    });
  }
  await page.reload();
  await expect(
    page.getByRole("radio", { name: "Vivid Blue", exact: true }),
  ).toBeChecked();
  expect(errors).toEqual([]);
});

for (const [value, label, brand] of themes)
  test(`saved ${value} preference applies before first paint while framework hydration is delayed`, async ({
    page,
  }) => {
    await page.addInitScript(
      (value) => localStorage.setItem("aradun-theme", value),
      value,
    );
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    let held = 0;
    await page.route(
      /\/_next\/static\/chunks\/.*\.js(?:\?.*)?$/,
      async (route) => {
        held++;
        await gate;
        await route.continue();
      },
    );
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    try {
      await page.goto("/", { waitUntil: "commit" });
      await expect(
        page.getByRole("radio", { name: label, exact: true }),
      ).toBeChecked();
      await page.waitForFunction(
        () => performance.getEntriesByName("first-contentful-paint").length > 0,
      );
      expect(
        await page.evaluate(() =>
          getComputedStyle(document.documentElement)
            .getPropertyValue("--color-brand")
            .trim()
            .toUpperCase(),
        ),
      ).toBe(brand);
      expect(held).toBeGreaterThan(0);
    } finally {
      release();
    }
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("radio", { name: label, exact: true }),
    ).toBeChecked();
    expect(errors).toEqual([]);
  });

test("invalid preference and blocked storage fail safely; session switching still works", async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem("aradun-theme", "unapproved-dark-theme"),
  );
  await page.goto("/");
  await expect(
    page.getByRole("radio", { name: "Editorial Terracotta", exact: true }),
  ).toBeChecked();
  await page.addInitScript(() => {
    for (const key of ["getItem", "setItem"])
      Object.defineProperty(Storage.prototype, key, {
        value() {
          throw new DOMException("Storage blocked", "SecurityError");
        },
      });
  });
  await page.reload();
  await expect(
    page.getByRole("radio", { name: "Editorial Terracotta", exact: true }),
  ).toBeChecked();
  await page.getByRole("radio", { name: "Vivid Blue", exact: true }).check();
  expect(
    await page.evaluate(() =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-brand")
        .trim()
        .toUpperCase(),
    ),
  ).toBe("#0066FF");
});

test("320px layout tolerates 200% text and native keyboard theme selection", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/");
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  await page
    .getByRole("radio", { name: "Editorial Terracotta", exact: true })
    .focus();
  await page.keyboard.press("ArrowRight");
  await expect(
    page.getByRole("radio", { name: "Muted Slate Blue", exact: true }),
  ).toBeChecked();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("approved compact/tablet/desktop gutters and marketing width remain bounded", async ({
  page,
}) => {
  await page.goto("/");
  for (const [width, gutter] of [
    [320, 16],
    [640, 24],
    [768, 32],
    [1199, 32],
    [1200, 40],
    [1536, 40],
  ]) {
    await page.setViewportSize({ width: width!, height: 900 });
    const box = await page
      .locator(".public-home > .container-marketing")
      .boundingBox();
    expect(box!.width).toBeCloseTo(Math.min(1280, width! - 2 * gutter!), 0);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});

test("one self-hosted variable font transfers within measured subset budget; fallback remains readable", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const fonts = await page.evaluate(() =>
    performance
      .getEntriesByType("resource")
      .filter((entry) => entry.name.endsWith(".woff2"))
      .map((entry) => ({
        name: new URL(entry.name).pathname,
        bytes: (entry as PerformanceResourceTiming).encodedBodySize,
      })),
  );
  expect(fonts).toHaveLength(1);
  expect(fonts[0]!.bytes).toBeGreaterThan(0);
  expect(fonts[0]!.bytes).toBeLessThanOrEqual(50_000);
  console.log("Inter transfer", JSON.stringify(fonts));
  await page.route("**/*.woff2", (route) => route.abort());
  await page.reload();
  await expect(
    page.getByRole("heading", { name: /Build.*Automate.*Grow/ }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("bootstrap works with strict self-only script/style CSP and reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addInitScript(() =>
    localStorage.setItem("aradun-theme", "vivid-blue"),
  );
  await page.route("**/theme-csp-fixture", (route) =>
    route.fulfill({
      contentType: "text/html",
      headers: {
        "Content-Security-Policy":
          "default-src 'none'; script-src 'self'; style-src 'self'; font-src 'self'; base-uri 'none'",
      },
      body: '<!doctype html><html lang="en"><head><link id="appearance-tokens" rel="stylesheet" href="/appearance.css"><script src="/appearance.js"></script><title>SAMPLE CSP fixture</title></head><body><fieldset><legend>Appearance</legend><label><input name="aradun-appearance" type="radio" value="terracotta" checked>Editorial Terracotta</label><label><input name="aradun-appearance" type="radio" value="slate-blue">Muted Slate Blue</label><label><input name="aradun-appearance" type="radio" value="vivid-blue">Vivid Blue</label></fieldset></body></html>',
    }),
  );
  await page.goto("/theme-csp-fixture");
  await expect(page.getByRole("radio", { name: "Vivid Blue" })).toBeChecked();
  await page.getByRole("radio", { name: "Muted Slate Blue" }).check();
  expect(
    await page.evaluate(() =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-brand")
        .trim()
        .toUpperCase(),
    ),
  ).toBe("#3F617B");
});

// Owner amendment: theme backgrounds now change alongside accents; content/state remain stable.
test("light themes coordinate page, section, selection and footer surfaces", async ({
  page,
}) => {
  await page.goto("/");
  const palettes: string[][] = [];
  for (const theme of themes) {
    await page.getByRole("radio", { name: theme[1], exact: true }).check();
    palettes.push(
      await page.evaluate(() => [
        getComputedStyle(document.body).backgroundColor,
        getComputedStyle(document.querySelector(".site-footer")!)
          .backgroundColor,
        getComputedStyle(document.documentElement).getPropertyValue(
          "--color-editorial",
        ),
        getComputedStyle(document.documentElement).getPropertyValue(
          "--color-brand-soft",
        ),
      ]),
    );
  }
  for (let role = 0; role < 4; role++)
    expect(new Set(palettes.map((p) => p[role])).size).toBe(3);
});
