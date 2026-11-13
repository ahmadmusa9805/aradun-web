import { afterEach, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { TextField, Choice } from "@/components/forms/field";
import { ErrorSummary } from "@/components/forms/error-summary";
import { Button, ButtonLink } from "@/components/ui/button";
import { Feedback } from "@/components/feedback/feedback";

afterEach(cleanup);
it("associates labels, hints and contextual errors without losing entered input", () => {
  const view = render(
    <TextField
      id="email"
      label="Email"
      hint="Address"
      defaultValue="synthetic@example.invalid"
    />,
  );
  const input = screen.getByLabelText("Email") as HTMLInputElement;
  view.rerender(
    <TextField
      id="email"
      label="Email"
      hint="Address"
      error="Check address"
      defaultValue="synthetic@example.invalid"
    />,
  );
  expect(input.value).toBe("synthetic@example.invalid");
  expect(input.getAttribute("aria-describedby")).toBe("email-hint email-error");
  expect(input.getAttribute("aria-invalid")).toBe("true");
});
it("focuses failed-submit summaries again and links to their control", () => {
  const errors = [{ fieldId: "email", message: "Check email" }];
  const view = render(
    <>
      <TextField id="email" label="Email" />
      <ErrorSummary errors={errors} submission={1} />
    </>,
  );
  expect(document.activeElement).toBe(screen.getByRole("region"));
  fireEvent.click(screen.getByRole("link"));
  expect(document.activeElement).toBe(screen.getByLabelText("Email"));
  view.rerender(
    <>
      <TextField id="email" label="Email" />
      <ErrorSummary errors={errors} submission={2} />
    </>,
  );
  expect(document.activeElement).toBe(screen.getByRole("region"));
});
it("keeps actions distinct from navigation and pending commands disabled", () => {
  render(
    <>
      <Button>Action</Button>
      <Button pending pendingLabel="Saving…">
        Save
      </Button>
      <ButtonLink href="/services">Services</ButtonLink>
      <Choice id="choice" label="Choice" />
    </>,
  );
  expect(
    screen.getByRole("button", { name: "Action" }).getAttribute("type"),
  ).toBe("button");
  expect(
    (screen.getByRole("button", { name: "Saving…" }) as HTMLButtonElement)
      .disabled,
  ).toBe(true);
  expect(screen.getByRole("link").getAttribute("href")).toBe("/services");
  fireEvent.click(screen.getByLabelText("Choice"));
  expect((screen.getByRole("checkbox") as HTMLInputElement).checked).toBe(true);
});
it("keeps denied, empty, conflict and failure states separate and persistent", () => {
  render(
    <>
      {(["denied", "empty", "conflict", "failure"] as const).map((state) => (
        <Feedback key={state} state={state} />
      ))}
    </>,
  );
  expect(screen.getAllByRole("region")).toHaveLength(4);
  expect(screen.getByRole("region", { name: "No results" })).toBeTruthy();
  expect(screen.getAllByRole("alert")).toHaveLength(2);
});
