import { readFile } from "node:fs/promises";
import path from "node:path";
import { build } from "vite";
import react from "@vitejs/plugin-react";
import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

let html: string;
test.beforeAll(async () => {
  const result = await build({
    configFile: false,
    plugins: [react()],
    define: { "process.env.NODE_ENV": '"production"' },
    logLevel: "error",
    build: {
      write: false,
      lib: {
        entry: path.resolve("tests/fixtures/controls.tsx"),
        name: "ControlsFixture",
        formats: ["iife"],
      },
      minify: true,
    },
  });
  const outputs = Array.isArray(result) ? result : [result];
  let js = "",
    css = "";
  for (const output of outputs) {
    if (!("output" in output)) throw new Error("Expected fixture bundle");
    for (const item of output.output) {
      if (item.type === "chunk") js += item.code;
      else if (item.fileName.endsWith(".css")) css += String(item.source);
    }
  }
  const appearance = await readFile("frontend/public/appearance.css", "utf8");
  const global =
    "body{margin:0;padding:16px;background:var(--color-page);color:var(--color-text);font:1rem/1.6 Arial;overflow-wrap:anywhere}main{max-width:640px;margin:auto}*{box-sizing:border-box}:focus-visible{outline:2px solid var(--color-focus);outline-offset:2px}p{margin:8px 0}";
  html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Isolated control tests</title><style>${css}\n${appearance}\n${global}</style></head><body><div id="root"></div><script>${js.replaceAll("</script", "<\\/script")}</script></body></html>`;
});

for (const theme of ["terracotta", "slate-blue", "vivid-blue"]) {
  test(`${theme}: contextual errors, choices, modal focus, zoom and axe`, async ({
    page,
  }) => {
    page.on("pageerror", (error) => {
      throw error;
    });
    await page.route("**/m04-02-fixture", (route) =>
      route.fulfill({ contentType: "text/html", body: html }),
    );
    await page.goto("/m04-02-fixture");
    if (process.env.ARADUN_UI_REVIEW === "1") await page.pause();
    await page.evaluate((theme) => {
      // Fixture only: choose the exact same theme rule without touching application markup.
      for (const sheet of document.styleSheets)
        for (const rule of sheet.cssRules)
          if (
            rule instanceof CSSStyleRule &&
            rule.selectorText.includes(`data-appearance="${theme}"`)
          )
            rule.selectorText = ":root";
    }, theme);
    await page.getByLabel("Brief (optional)").fill("Retained synthetic input");
    await page.getByRole("button", { name: "Check answers" }).click();
    await expect(
      page.getByRole("region", { name: "Please check your answers" }),
    ).toBeFocused();
    await page.getByRole("link", { name: "Enter an email address" }).click();
    await expect(page.getByLabel("Email", { exact: true })).toBeFocused();
    await expect(page.getByLabel("Email", { exact: true })).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    await expect(page.getByLabel("Brief (optional)")).toHaveValue(
      "Retained synthetic input",
    );
    await page.getByLabel("Email reply").focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.getByLabel("Phone reply")).toBeChecked();
    await expect(
      page.getByRole("button", { name: "Saving changes…" }),
    ).toBeDisabled();
    for (const name of [
      "Loading",
      "No results",
      "Access denied",
      "Something went wrong",
      "Changes conflict",
      "Saved",
    ])
      await expect(
        page.getByRole("region", { name, exact: true }),
      ).toBeVisible();
    await page.getByRole("button", { name: "Review removal" }).click();
    const modal = page.getByRole("dialog", { name: "Remove Sample record?" });
    await expect(modal).toBeVisible();
    await expect(modal.getByRole("button", { name: "Cancel" })).toBeFocused();
    await page
      .getByLabel("Email", { exact: true })
      .evaluate((element) => (element as HTMLInputElement).focus());
    await expect(page.getByLabel("Email", { exact: true })).not.toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(
      modal.getByRole("button", { name: "Remove Sample record" }),
    ).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(modal.getByRole("button", { name: "Cancel" })).toBeFocused();
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    await page.keyboard.press("Escape");
    await expect(modal).not.toBeVisible();
    await expect(
      page.getByRole("button", { name: "Review removal" }),
    ).toBeFocused();
    await page.getByRole("button", { name: "Review removal" }).click();
    await modal.getByRole("button", { name: "Cancel" }).click();
    await expect(
      page.getByRole("button", { name: "Review removal" }),
    ).toBeFocused();
    await page.setViewportSize({ width: 320, height: 700 });
    await page.evaluate(() => {
      document.documentElement.style.fontSize = "200%";
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `.tools/m04-02/${theme}-${test.info().project.name}.png`,
      fullPage: true,
    });
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
  });
}
