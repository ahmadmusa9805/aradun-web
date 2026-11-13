import { afterEach, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeading } from "@/components/marketing/section-heading";

afterEach(cleanup);
it("marks the current breadcrumb without making it a self-link", () => {
  render(
    <Breadcrumbs
      parents={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
      ]}
      current="Mobile App Development"
    />,
  );
  const navigation = screen.getByRole("navigation", { name: "Breadcrumb" });
  expect(
    within(navigation)
      .getAllByRole("link")
      .map((link) => link.getAttribute("href")),
  ).toEqual(["/", "/services"]);
  expect(
    within(navigation)
      .getByText("Mobile App Development")
      .getAttribute("aria-current"),
  ).toBe("page");
});
it("provides a stable section heading target without inventing a section landmark", () => {
  render(
    <SectionHeading id="services-heading" title="Services">
      <p>Source-approved content belongs here.</p>
    </SectionHeading>,
  );
  expect(screen.getByRole("heading", { level: 2, name: "Services" }).id).toBe(
    "services-heading",
  );
  expect(screen.queryByRole("region")).toBeNull();
});
