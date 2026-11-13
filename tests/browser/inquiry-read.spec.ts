import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { generate } from "otplib";

async function authenticate(page: Page, passwordOnly = false) {
  const api = "http://127.0.0.1:4100";
  const created = await page.request.post(`${api}/__fixture/identity`, {
    data: { passwordOnly },
  });
  expect(created.status()).toBe(200);
  const user = await created.json();
  const headers = {
    Origin: "http://127.0.0.1:3100",
    "X-ARADUN-Request": "identity",
  };
  const login = await page.request.post(`${api}/api/identity/login`, {
    headers,
    data: { email: user.email, password: user.password },
  });
  expect(login.status()).toBe(200);
  if (!passwordOnly) {
    const setup = await page.request.post(
      `${api}/api/identity/security/enroll`,
      { headers, data: {} },
    );
    expect(setup.status()).toBe(200);
    const { secret } = await setup.json();
    const remaining = 30000 - (Date.now() % 30000);
    if (remaining < 3000) await page.waitForTimeout(remaining + 50);
    const verified = await page.request.post(
      `${api}/api/identity/security/verify`,
      {
        headers,
        data: { token: await generate({ secret }), enrollment: true },
      },
    );
    expect(verified.status()).toBe(200);
  }
  const seed = await page.request.post(`${api}/__fixture/inquiries`);
  expect(seed.status()).toBe(200);
  return seed.json() as Promise<{ id: string; reference: string }>;
}

test("owner reads an escaped inquiry, safe reply link and all-theme mobile layout, then loses data on revocation", async ({
  page,
}) => {
  const record = await authenticate(page);
  await page.goto("/dashboard/leads");
  await page.getByRole("link", { name: record.reference, exact: true }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: "Inquiry details" }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "PRIVATE SAMPLE <script>window.syntheticLeak = true</script>",
      { exact: false },
    ),
  ).toBeVisible();
  expect(await page.evaluate(() => "syntheticLeak" in window)).toBe(false);
  await expect(
    page.getByRole("link", { name: "Open email reply" }),
  ).toHaveAttribute(
    "href",
    `mailto:client%40example.invalid?subject=${encodeURIComponent(`Re: ${record.reference}`)}`,
  );
  await expect(
    page.getByRole("button", { name: "Copy email address" }),
  ).toBeVisible();
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw Error("SAMPLE clipboard denied");
        },
      },
    }),
  );
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(
    page.getByText("Could not copy. Select and copy the email address above."),
  ).toBeVisible();
  for (const theme of [
    "Editorial Terracotta",
    "Muted Slate Blue",
    "Vivid Blue",
  ]) {
    await page.getByRole("radio", { name: theme }).check();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
  }
  await page.setViewportSize({ width: 320, height: 740 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  const logout = await page.request.post(
    "http://127.0.0.1:4100/api/identity/logout",
    {
      headers: {
        Origin: "http://127.0.0.1:3100",
        "X-ARADUN-Request": "identity",
      },
      data: {},
    },
  );
  expect(logout.status()).toBe(204);
  await page.evaluate(() => window.dispatchEvent(new Event("focus")));
  await expect(
    page.getByText(
      "Sign in again and complete verification before continuing.",
    ),
  ).toBeVisible();
  await expect(page.getByText("PRIVATE SAMPLE", { exact: false })).toHaveCount(
    0,
  );
});

test("inquiry list handles outage, empty results, pagination and keyboard retry without stale details", async ({
  page,
}) => {
  const record = await authenticate(page);
  let mode: "outage" | "empty" | "pages" = "outage";
  const item = {
    id: record.id,
    reference: record.reference,
    type: "contact",
    subject: "SAMPLE",
    name: "SAMPLE Client",
    status: "received",
    createdAt: "2026-11-13T00:00:00.000Z",
  };
  await page.route(/\/api\/identity\/inquiries(?:\?.*)?$/, (route) => {
    if (mode === "outage") return route.fulfill({ status: 503, json: {} });
    if (mode === "empty")
      return route.fulfill({ json: { items: [], nextCursor: null } });
    return route.fulfill({
      json: new URL(route.request().url()).searchParams.has("cursor")
        ? { items: [], nextCursor: null }
        : { items: [item], nextCursor: "U0FNUExF" },
    });
  });
  await page.goto("/dashboard/leads");
  const failure = page.getByText(
    "Inquiries are temporarily unavailable. Try again.",
  );
  await expect(failure).toBeFocused();
  mode = "empty";
  await page.getByRole("button", { name: "Try again", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByText("No inquiries are available to your account."),
  ).toBeVisible();
  mode = "pages";
  await page.reload();
  await expect(
    page.getByRole("link", { name: record.reference, exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Next page" }).click();
  await expect(
    page.getByText("No inquiries are available to your account."),
  ).toBeVisible();
  await page.getByRole("button", { name: "Previous page" }).click();
  await expect(
    page.getByRole("link", { name: record.reference, exact: true }),
  ).toBeVisible();
});

test("password-only session cannot read private inquiries; anonymous navigation never embeds private data", async ({
  page,
}) => {
  const record = await authenticate(page, true);
  await page.goto(`/dashboard/leads/${record.id}`);
  await expect(
    page.getByText(
      "Sign in again and complete verification before continuing.",
    ),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open email reply" }),
  ).toHaveCount(0);
  expect(
    (
      await page.request.get(
        `http://127.0.0.1:4100/api/identity/inquiries/${record.id}`,
      )
    ).status(),
  ).toBe(403);
  const html = await (
    await page.request.get(`/dashboard/leads/${record.id}`)
  ).text();
  expect(html).not.toContain("PRIVATE SAMPLE");
});
