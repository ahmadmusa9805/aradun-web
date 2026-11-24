import { completePackages } from "../templates/complete-business-copy";
import { cloudSolutionPackages } from "../templates/cloud-solution-copy";
import { growthPackages } from "../templates/business-growth-copy";
import { businessAutomationPackages } from "../templates/business-automation-copy";
import Link from "next/link";
import { presencePackages } from "../templates/digital-presence-copy";
import { ButtonLink } from "@/components/ui/button";
import type { SolutionDetail } from "../catalog-api.server";
import { PricePresentation } from "./price-presentation";

export function SolutionPriceCards({
  solution,
  nested = false,
}: {
  solution: SolutionDetail;
  nested?: boolean;
}) {
  const packageGuidance =
    solution.id === "SOL-001"
      ? presencePackages
      : solution.id === "SOL-002"
        ? businessAutomationPackages
        : solution.id === "SOL-003"
          ? growthPackages
          : solution.id === "SOL-004"
            ? cloudSolutionPackages
            : solution.id === "SOL-005"
              ? completePackages
              : undefined;
  const termsHref = `${solution.href}#delivery-terms-title`;
  const Heading = nested ? "h4" : "h3";
  return (
    <ul
      className={
        packageGuidance ? "catalog-grid presence-package-grid" : "catalog-grid"
      }
      aria-label={`${solution.name} engagement options`}
    >
      {solution.prices.map((position, index) => (
        <li
          className={
            packageGuidance ? "catalog-card presence-package" : "catalog-card"
          }
          key={position.packageId}
        >
          <Heading>{position.tierLabel}</Heading>
          {solution.id === "SOL-005" ? (
            <div className="price-presentation">
              <p>
                <strong>Custom project pricing</strong>
              </p>
              <p>
                Your proposal separates implementation, recurring work and
                third-party costs.
              </p>
            </div>
          ) : (
            <PricePresentation price={position.price} />
          )}
          {packageGuidance && packageGuidance[index] ? (
            <div className="presence-package-guidance">
              <Heading>{packageGuidance[index]!.title}</Heading>
              <p>{packageGuidance[index]!.fit}</p>
              <p>
                <strong>
                  {solution.id === "SOL-001" && index < 2
                    ? "Included in this package"
                    : "Scope to agree"}
                </strong>
              </p>
              <ul className="presence-inclusions" role="list">
                {packageGuidance[index]!.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{packageGuidance[index]!.boundary}</p>
              <p>
                <Link href={termsHref}>
                  Content, revisions, ownership and support terms →
                </Link>
              </p>
            </div>
          ) : (
            <p>
              Scope, exclusions, quantities and ongoing costs require agreement
              in your proposal.
            </p>
          )}
          <ButtonLink
            aria-label={`Discuss ${position.tierLabel} for ${solution.name}`}
            variant="secondary"
            href={`/get-a-quote?solutionId=${encodeURIComponent(solution.id)}&packageId=${encodeURIComponent(position.packageId)}`}
          >
            Discuss {position.tierLabel}
          </ButtonLink>
        </li>
      ))}
    </ul>
  );
}
