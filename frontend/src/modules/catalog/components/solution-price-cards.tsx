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
  const Heading = nested ? "h4" : "h3";
  return (
    <ul
      className="catalog-grid"
      aria-label={`${solution.name} engagement options`}
    >
      {solution.prices.map((position) => (
        <li className="catalog-card" key={position.packageId}>
          <Heading>{position.tierLabel}</Heading>
          <PricePresentation price={position.price} />
          <p>
            Scope, exclusions, quantities and ongoing costs require agreement in
            your proposal.
          </p>
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
