import Link from "next/link";
import type { SolutionDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { PricePresentation } from "../components/price-presentation";

export const solutionQuestions = [
  {
    question: "Does a solution include every related service?",
    answer:
      "The final package identifies included services and deliverables. The solution name and starting price do not establish a complete scope.",
    help: "services",
  },
  {
    question: "Can this work with our existing systems?",
    answer:
      "Existing systems are reviewed for access, compatibility, licensing and condition. Reuse or replacement must be justified and agreed; neither is automatic.",
    help: "not-sure",
  },
  {
    question: "Can we discuss custom work?",
    answer: "Request a quote so we can review your requirements.",
    help: "not-sure",
  },
  {
    question: "Are starting prices a final quote?",
    answer:
      "Starting prices are indicative. Final scope, fees and any ongoing or third-party costs are confirmed in your proposal.",
    help: "starting-prices",
  },
];
export function SolutionsOverview({
  solutions,
}: {
  solutions: SolutionDetail[];
}) {
  return (
    <>
      <Breadcrumbs
        parents={[{ label: "Home", href: "/" }]}
        current="Solutions"
      />
      <section className="catalog-hero" aria-labelledby="solutions-title">
        <h1 id="solutions-title">
          Find a solution around your business goals.
        </h1>
        <p className="lead">
          Explore five ways to connect relevant services around a business need.
          Each engagement starts with a review of your requirements and an
          agreed scope.
        </p>
        <div className="ui-actions">
          <ButtonLink href="#solutions">Explore Solutions</ButtonLink>
          <ButtonLink href="/get-a-quote" variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section
        className="catalog-section"
        id="solutions"
        aria-labelledby="options-title"
      >
        <h2 id="options-title">What would you like to improve?</h2>
        <ul className="catalog-grid">
          {solutions.map((solution) => (
            <li key={solution.id} className="catalog-card">
              <h3>
                <Link href={solution.href} prefetch={false}>
                  {solution.name}
                </Link>
              </h3>
              <p>{solution.summary}</p>
              <PricePresentation price={solution.prices[0]!.price} />
              <Link href={solution.href} prefetch={false}>
                Explore {solution.name}
              </Link>
              <Link prefetch={false} href={`/pricing#solution-${solution.id}`}>
                Compare package options
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="selection-title">
        <h2 id="selection-title">Choose your starting point</h2>
        <p>
          Compare your situation first. Related services are possibilities to
          discuss, not guaranteed package inclusions.
        </p>
        <dl className="solution-selection">
          {solutions.map((solution) => (
            <div key={solution.id}>
              <dt>
                <Link href={solution.href} prefetch={false}>
                  {solution.name}
                </Link>
              </dt>
              <dd>
                <p>
                  <strong>Who this is for:</strong> {solution.audience}
                </p>
                <p>
                  <strong>Your starting point:</strong> {solution.problem}
                </p>
                <div className="ui-actions">
                  <ButtonLink
                    variant="secondary"
                    href={`/get-a-quote?solutionId=${encodeURIComponent(solution.id)}`}
                  >
                    Discuss {solution.name}
                  </ButtonLink>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="approach-title">
        <h2 id="approach-title">From your goals to an agreed scope</h2>
        <p>
          Review the goal, identify suitable services, agree the work and costs,
          then define delivery and review points.
        </p>
        <ButtonLink href="/pricing" variant="secondary">
          Explore Pricing
        </ButtonLink>
        <p className="section-link">
          Not sure which direction fits?{" "}
          <Link prefetch={false} href="/consultation">
            Request a consultation
          </Link>{" "}
          or{" "}
          <Link prefetch={false} href="/faq/not-sure">
            read the selection guide
          </Link>
          .
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before choosing a solution</h2>
        {solutionQuestions.map((faq) => (
          <details key={faq.question} className="catalog-faq">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
            <p>
              <Link prefetch={false} href={`/faq/${faq.help}`}>
                Read the detailed guide
              </Link>
            </p>
          </details>
        ))}
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Let’s identify the right approach</h2>
        <div className="ui-actions">
          <ButtonLink href="/get-a-quote">Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
