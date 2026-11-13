import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, expect, it, vi } from "vitest";
import ErrorPage from "@/app/error";
import GlobalError from "@/app/global-error";
afterEach(cleanup);
it("segment fallback redacts failures and uses the installed Next retry contract", () => {
  const retry = vi.fn();
  render(
    <ErrorPage
      error={new Error("SAMPLE private error detail")}
      retry={retry}
    />,
  );
  expect(screen.getByRole("main").textContent).not.toContain("SAMPLE private");
  fireEvent.click(screen.getByRole("button", { name: "Try again" }));
  expect(retry).toHaveBeenCalledOnce();
});
it("global fallback is a complete safe document without leaked exception text", () => {
  const html = renderToStaticMarkup(
    <GlobalError
      error={new Error("SAMPLE private root error")}
      retry={() => {}}
    />,
  );
  expect(html).toContain('<html lang="en">');
  expect(html).toContain("<body>");
  expect(html).toContain('id="main-content"');
  expect(html).not.toContain("SAMPLE private");
  expect(html).toContain("Try again");
});
