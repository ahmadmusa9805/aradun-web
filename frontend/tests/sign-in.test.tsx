import { afterEach, it, expect, vi } from "vitest";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { SignInForm } from "@/modules/identity/sign-in-form";
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
it("preserves safe email, clears password and focuses accessible generic failure", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 503 }));
  render(<SignInForm apiBaseUrl="http://127.0.0.1:4000" />);
  fireEvent.change(screen.getByLabelText("Email address"), {
    target: { value: "sample@example.invalid" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "SAMPLE-not-real" },
  });
  fireEvent.submit(
    screen.getByRole("button", { name: "Sign in" }).closest("form")!,
  );
  await waitFor(() =>
    expect(screen.getByRole("alert").textContent).toContain(
      "temporarily unavailable",
    ),
  );
  expect(
    (screen.getByLabelText("Email address") as HTMLInputElement).value,
  ).toBe("sample@example.invalid");
  expect((screen.getByLabelText("Password") as HTMLInputElement).value).toBe(
    "",
  );
  expect(document.activeElement).toBe(screen.getByRole("alert"));
  expect(
    screen.getByRole("button", { name: "Sign in" }).closest("form")?.method,
  ).toBe("post");
});
it("reports primary verification truthfully and waits for confirmed logout", async () => {
  const fetchMock = vi
    .fn()
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ status: "anonymous" }),
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        status: "primary",
        requiresMfa: true,
        displayName: "SAMPLE Staff",
      }),
    })
    .mockResolvedValueOnce({ ok: true, status: 204 });
  vi.stubGlobal("fetch", fetchMock);
  render(<SignInForm apiBaseUrl="http://127.0.0.1:4000" />);
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
  fireEvent.change(screen.getByLabelText("Email address"), {
    target: { value: "sample@example.invalid" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "SAMPLE-not-real" },
  });
  fireEvent.submit(
    screen.getByRole("button", { name: "Sign in" }).closest("form")!,
  );
  await screen.findByRole("heading", { name: "Password verified" });
  expect(screen.getByText(/additional verification is required/i)).toBeTruthy();
  fireEvent.click(screen.getByRole("button", { name: "Sign out" }));
  await screen.findByRole("button", { name: "Sign in" });
});
