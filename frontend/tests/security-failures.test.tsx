import { afterEach, it, expect, vi } from "vitest";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { SecurityPanel } from "@/modules/identity/components/security-panel";
import { SignInForm } from "@/modules/identity/sign-in-form";
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
const ok = (body: unknown) => ({
  ok: true,
  status: 200,
  json: async () => body,
});
const account = {
  displayName: "SAMPLE Staff",
  email: "sample@example.invalid",
  preferredTimezone: "UTC",
};
it("shows the local password-only account without MFA controls", async () => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue(ok({ ...account, localPasswordOnly: true })),
  );
  render(<SecurityPanel apiBaseUrl="http://127.0.0.1:4000" mode="account" />);
  await screen.findByText(
    "Signed in with your password. Authenticator setup is paused for local development.",
  );
  expect(screen.queryByRole("button", { name: "Save profile" })).toBeNull();
  expect(screen.queryByRole("heading", { name: "Change password" })).toBeNull();
});
const codes = Array.from({ length: 10 }, (_, i) =>
  ("SAMPLE_" + i).padEnd(43, "x"),
);
it.each([401, 403])(
  "removes account and recovery material on session denial (%i)",
  async (status) => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(ok(account))
      .mockResolvedValueOnce(ok({ codes }))
      .mockResolvedValueOnce({ ok: false, status });
    vi.stubGlobal("fetch", fetchMock);
    render(<SecurityPanel apiBaseUrl="http://127.0.0.1:4000" mode="account" />);
    await screen.findByLabelText("Display name");
    fireEvent.click(
      screen.getByRole("button", { name: "Create replacement recovery pack" }),
    );
    await screen.findByText(codes[0]!);
    fireEvent.click(screen.getByRole("button", { name: "Save profile" }));
    await waitFor(() =>
      expect(screen.getByRole("alert").textContent).toContain("Sign in again"),
    );
    expect(screen.queryByLabelText("Display name")).toBeNull();
    expect(screen.queryByText(codes[0]!)).toBeNull();
    expect(screen.queryByText(/Signed in as/)).toBeNull();
    expect(document.activeElement).toBe(screen.getByRole("alert"));
  },
);
it("network timeout clears sensitive reset fields, keeps useful feedback and never reports completion", async () => {
  const secret = "SAMPLE_PRIVATE_NETWORK_DETAIL",
    fetchMock = vi.fn().mockRejectedValue(new Error(secret));
  vi.stubGlobal("fetch", fetchMock);
  render(<SecurityPanel apiBaseUrl="http://127.0.0.1:4000" mode="reset" />);
  fireEvent.change(screen.getByLabelText("Password reset code"), {
    target: { value: codes[0] },
  });
  fireEvent.change(screen.getByLabelText("New password"), {
    target: { value: "SAMPLE-private-password" },
  });
  fireEvent.submit(
    screen.getByRole("button", { name: "Reset password" }).closest("form")!,
  );
  await waitFor(() =>
    expect(screen.getByRole("alert").textContent).toContain(
      "temporarily unavailable",
    ),
  );
  expect(
    (screen.getByLabelText("Password reset code") as HTMLInputElement).value,
  ).toBe("");
  expect(
    (screen.getByLabelText("New password") as HTMLInputElement).value,
  ).toBe("");
  expect(document.body.textContent).not.toContain(secret);
  expect(screen.queryByText(/Password updated/)).toBeNull();
  const [url, options] = fetchMock.mock.calls[0]!;
  expect(String(url)).not.toContain(codes[0]);
  expect(options.method).toBe("POST");
  expect(options.cache).toBe("no-store");
});
it("preserves safe recovery email and clears password/code after failed factor recovery", async () => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 400 }));
  render(<SecurityPanel apiBaseUrl="http://127.0.0.1:4000" mode="recover" />);
  fireEvent.change(screen.getByLabelText("Account email address"), {
    target: { value: "sample@example.invalid" },
  });
  fireEvent.change(screen.getByLabelText("Account password"), {
    target: { value: "SAMPLE-private-password" },
  });
  fireEvent.change(screen.getByLabelText("Offline recovery code"), {
    target: { value: codes[0] },
  });
  fireEvent.submit(
    screen
      .getByRole("button", { name: "Begin factor replacement" })
      .closest("form")!,
  );
  await screen.findByRole("alert");
  expect(
    (screen.getByLabelText("Account email address") as HTMLInputElement).value,
  ).toBe("sample@example.invalid");
  expect(
    (screen.getByLabelText("Account password") as HTMLInputElement).value,
  ).toBe("");
  expect(
    (screen.getByLabelText("Offline recovery code") as HTMLInputElement).value,
  ).toBe("");
});
it("an ambiguous logout never claims confirmed sign-out", async () => {
  vi.stubGlobal(
    "fetch",
    vi
      .fn()
      .mockResolvedValueOnce(
        ok({
          status: "primary",
          requiresMfa: true,
          displayName: "SAMPLE Staff",
        }),
      )
      .mockRejectedValueOnce(new Error("SAMPLE uncertainty")),
  );
  render(<SignInForm apiBaseUrl="http://127.0.0.1:4000" />);
  await screen.findByRole("heading", { name: "Password verified" });
  fireEvent.click(screen.getByRole("button", { name: "Sign out" }));
  await waitFor(() =>
    expect(screen.getByRole("alert").textContent).toContain(
      "could not be confirmed",
    ),
  );
  expect(screen.getByRole("button", { name: "Sign out" })).toBeTruthy();
  expect(screen.queryByRole("button", { name: "Sign in" })).toBeNull();
});

it("a delayed initial session response cannot restore identity after confirmed logout", async () => {
  let resolveInitial!: (response: unknown) => void;
  const initial = new Promise((resolve) => {
    resolveInitial = resolve;
  });
  const fetchMock = vi
    .fn()
    .mockReturnValueOnce(initial)
    .mockResolvedValueOnce(
      ok({ status: "primary", requiresMfa: true, displayName: "SAMPLE Staff" }),
    )
    .mockResolvedValueOnce({ ok: true, status: 204 });
  vi.stubGlobal("fetch", fetchMock);
  render(<SignInForm apiBaseUrl="http://127.0.0.1:4000" />);
  fireEvent.change(screen.getByLabelText("Email address"), {
    target: { value: "sample@example.invalid" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "SAMPLE-private-password" },
  });
  fireEvent.submit(
    screen.getByRole("button", { name: "Sign in" }).closest("form")!,
  );
  await screen.findByRole("heading", { name: "Password verified" });
  fireEvent.click(screen.getByRole("button", { name: "Sign out" }));
  await screen.findByRole("button", { name: "Sign in" });
  await act(async () => {
    resolveInitial(
      ok({
        status: "mfa",
        requiresMfa: false,
        displayName: "SAMPLE stale identity",
      }),
    );
  });
  expect(screen.queryByText(/SAMPLE stale identity/)).toBeNull();
  expect(screen.getByRole("button", { name: "Sign in" })).toBeTruthy();
});
