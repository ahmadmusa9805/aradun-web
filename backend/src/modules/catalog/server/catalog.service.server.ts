import { catalogRelease } from "../data/catalog-release.js";
import { ServiceError } from "../../../server/errors.js";

/** Internal draft lookups are not public publication decisions. Never expose these records as DTOs. */
export function resolveCatalogRoute(route: unknown) {
  if (
    typeof route !== "string" ||
    route.length > 200 ||
    !/^\/(services|solutions)\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(route)
  )
    return undefined;
  const category = catalogRelease.categories.find(
    (item) => item.route === route,
  );
  if (category) return { kind: "category" as const, record: category };
  const service = catalogRelease.services.find((item) => item.route === route);
  if (service) return { kind: "service" as const, record: service };
  const solution = catalogRelease.solutions.find(
    (item) => item.route === route,
  );
  return solution ? { kind: "solution" as const, record: solution } : undefined;
}

export function catalogNavigation() {
  return {
    categories: [...catalogRelease.categories]
      .sort((a, b) => a.order - b.order)
      .map(({ categoryId, name, route }) => ({
        id: categoryId,
        label: name,
        href: route,
      })),
    solutions: catalogRelease.solutions.map(({ solutionId, name, route }) => ({
      id: solutionId,
      label: name,
      href: route,
    })),
  };
}

/** Gate result is internal. Unknown availability is absence, never a fourth public value. */
export function publicationBlockers(offerId: unknown): readonly string[] {
  const service = catalogRelease.services.find(
    (item) => item.serviceId === offerId,
  );
  const solution = catalogRelease.solutions.find(
    (item) => item.solutionId === offerId,
  );
  if (!service && !solution) return ["unknown-offer"];
  const blockers = [
    "content-approval-pending",
    "commercial-scope-approval-pending",
    "catalog-release-approval-pending",
  ];
  if (service && !service.availability)
    blockers.push("availability-approval-pending");
  if (service?.serviceId === "SVC-057")
    blockers.push("billing-unit-approval-pending");
  if (solution && !solution.serviceIds.length)
    blockers.push("solution-composition-approval-pending");
  return blockers;
}

/** Owning public-page/intake services must call this before presenting an offer as published. */
export function assertOfferPublishable(offerId: unknown): void {
  if (publicationBlockers(offerId).length) throw new ServiceError("not_found");
}
