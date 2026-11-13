import { afterEach, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import {
  PricePresentation,
  PriceComparison,
} from "@/modules/catalog/components/price-presentation";

afterEach(cleanup);
it("renders unknown units with explicit qualification and custom without a zero price", () => {
  render(
    <>
      <PricePresentation
        price={{
          label: "$199",
          sourceLabel: "SAMPLE third-party fees separate",
          currency: "USD",
          model: "unconfirmed",
          unitConfirmed: false,
          indicative: true,
        }}
      />
      <PricePresentation
        price={{
          label: "Custom",
          currency: "USD",
          model: "custom",
          unitConfirmed: false,
          indicative: true,
        }}
      />
    </>,
  );
  expect(screen.getByText("Billing unit requires confirmation.")).toBeTruthy();
  expect(screen.getByText("Custom")).toBeTruthy();
  expect(screen.getByText("SAMPLE third-party fees separate")).toBeTruthy();
  expect(screen.queryByText("$0")).toBeNull();
});
it("keeps offer pricing separate and escapes source text with no computed total", () => {
  render(
    <PriceComparison
      offers={[
        {
          id: "SAMPLE-one",
          label: "Project",
          price: {
            label: "$699/project",
            currency: "USD",
            model: "one-time",
            unitConfirmed: true,
            indicative: true,
          },
        },
        {
          id: "SAMPLE-two",
          label: "Monthly",
          price: {
            label: "<img src=x>",
            currency: "USD",
            model: "monthly",
            unitConfirmed: true,
            indicative: true,
          },
        },
      ]}
    />,
  );
  expect(screen.getAllByRole("listitem")).toHaveLength(2);
  expect(screen.getByText("<img src=x>")).toBeTruthy();
  expect(screen.queryByRole("img")).toBeNull();
  expect(screen.queryByText(/total/i)).toBeNull();
});
