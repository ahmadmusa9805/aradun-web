import { expect, it } from "vitest";
import {
  inquiryServiceLetters,
  inquiryReferencePattern,
} from "../src/modules/intake/server/reference.server.js";
import { catalogRelease } from "../src/modules/catalog/data/catalog-release.js";
import { createReceiptCodec } from "../src/modules/intake/server/receipt.server.js";
it("deduplicates primary service categories and uses the owner's stable letter order", () => {
  const serviceIds = catalogRelease.categories.map(
    (category) =>
      catalogRelease.services.find(
        (service) => service.primaryCategoryId === category.categoryId,
      )!.serviceId,
  );
  expect(
    inquiryServiceLetters({
      serviceIds: [...serviceIds.reverse(), ...serviceIds],
      solutionIds: [],
    }),
  ).toBe("wmvgadcs");
  expect(
    inquiryServiceLetters({ serviceIds: ["SVC-014"], solutionIds: [] }),
  ).toBe("I");
  expect(
    inquiryServiceLetters({
      serviceIds: ["SVC-001", "SVC-014", "SVC-011", "SVC-015"],
      solutionIds: [],
    }),
  ).toBe("wIa");
  expect(inquiryServiceLetters()).toBe("");
  expect(
    inquiryServiceLetters({
      serviceIds: [],
      solutionIds: [],
      packageIds: ["SVC-001-P01"],
    }),
  ).toBe("w");
  const solution = catalogRelease.solutions[0]!;
  expect(
    inquiryServiceLetters({
      serviceIds: [],
      solutionIds: [solution.solutionId],
    }),
  ).toBe(
    inquiryServiceLetters({ serviceIds: solution.serviceIds, solutionIds: [] }),
  );
});
it("supports old and short signed receipts but refuses unsigned or tampered references", () => {
  const codec = createReceiptCodec("SAMPLE test signing secret");
  for (const reference of [
    "ARQ-2026-aaaaaaaaaaaaaaaaaaaaaaaa",
    "aradun-001",
    "aradun-wa-002",
    "aradun-wadcsmgv-1000",
    "aradunq-001",
    "aradunq-wIa-002",
    "aradunq-wmvgIadcs-1000",
  ]) {
    expect(inquiryReferencePattern.test(reference)).toBe(true);
    const token = codec.issue(reference, "contact");
    expect(codec.read(token).reference).toBe(reference);
    expect(() => codec.read(reference)).toThrow();
    expect(() =>
      codec.read(token.replace(reference, "aradun-w-999")),
    ).toThrow();
  }
  for (const reference of [
    "aradun-z-001",
    "aradun-w-1",
    "aradun-w-001/secret",
    "aradun-w-001\n",
  ]) {
    expect(inquiryReferencePattern.test(reference)).toBe(false);
  }
});
