import { CompleteBusinessTemplate } from "./complete-business";
import { CloudSolutionTemplate } from "./cloud-solution";
import { BusinessGrowthTemplate } from "./business-growth";
import { BusinessAutomationTemplate } from "./business-automation";
import { DigitalPresenceTemplate } from "./digital-presence";
import Link from "next/link";
import type { SolutionDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { PricePresentation } from "../components/price-presentation";
import { SolutionPriceCards } from "../components/solution-price-cards";

export function SolutionTemplate({ solution }: { solution: SolutionDetail }) {
  if (solution.id === "SOL-005")
    return <CompleteBusinessTemplate solution={solution} />;
  if (solution.id === "SOL-004")
    return <CloudSolutionTemplate solution={solution} />;
  if (solution.id === "SOL-003")
    return <BusinessGrowthTemplate solution={solution} />;
  if (solution.id === "SOL-002")
    return <BusinessAutomationTemplate solution={solution} />;
  if (solution.id === "SOL-001")
    return <DigitalPresenceTemplate solution={solution} />;
  const quote = `/get-a-quote?solutionId=${encodeURIComponent(solution.id)}`;
  return (
    <>
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        current={solution.name}
      />
      <section className="catalog-hero" aria-labelledby="solution-title">
        <h1 id="solution-title">{solution.name}</h1>
        <p className="lead">{solution.summary}</p>
        <PricePresentation price={solution.prices[0]!.price} />
        <ButtonLink href={quote}>Get a Quote</ButtonLink>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Is this the right solution for you?</h2>
        <p>{solution.description}</p>
        <dl className="catalog-fit">
          <div>
            <dt>Who this is for</dt>
            <dd>{solution.audience}</dd>
          </div>
          <div>
            <dt>Your starting point</dt>
            <dd>{solution.problem}</dd>
          </div>
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">How the services work together</h2>
        <p>{solution.categories}</p>
        <p>
          These are informational recommendations, not approved included-service
          lists. Quantities, exclusions, revisions, client inputs, technology,
          setup/recurring costs and support remain package decisions.
        </p>
        <ul className="catalog-links">
          {solution.candidates.map((item) => (
            <li key={item.id}>
              <Link href={item.href} prefetch={false}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="packages-title">
        <h2 id="packages-title">Compare your engagement options</h2>
        <SolutionPriceCards solution={solution} />
      </section>
      <section className="catalog-section" aria-labelledby="delivery-title">
        <h2 id="delivery-title">How we approach the work</h2>
        <ol className="catalog-process">
          {solution.approach.split(";").map((step) => (
            <li key={step}>{step.trim()}</li>
          ))}
        </ol>
        <p>Confirm timelines and any ongoing services separately.</p>
      </section>
      {/* Evidence: omitted until genuine permitted examples are available. */}
      <section className="catalog-section" aria-labelledby="related-title">
        <h2 id="related-title">Other ways we can help</h2>
        <ul className="catalog-links">
          {solution.related.map((item) => (
            <li key={item.href}>
              <Link href={item.href} prefetch={false}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Solution FAQs</h2>
        {solution.faqs.map((faq) => (
          <details className="catalog-faq" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Discuss your {solution.name} requirements</h2>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
