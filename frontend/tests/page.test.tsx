import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Home } from "@/modules/content/templates/home";
afterEach(cleanup);
it("renders source ordered discovery and honest CTAs without invented proof", () => {
  render(<Home />);
  const main = screen.getByRole("main");
  expect(main.id).toBe("main-content");
  expect(within(main).getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(
    within(main)
      .getByRole("link", { name: "Explore Services" })
      .getAttribute("href"),
  ).toBe("/services");
  const categories = main.querySelectorAll("#expertise .public-card");
  expect(categories).toHaveLength(8);
  expect(main.querySelectorAll("#solutions article")).toHaveLength(5);
  expect(main.querySelectorAll("#process li")).toHaveLength(5);
  expect(main.querySelectorAll("#questions details")).toHaveLength(6);
  expect(main.textContent).not.toMatch(
    /trusted by|five.star|guaranteed results/i,
  );
});
