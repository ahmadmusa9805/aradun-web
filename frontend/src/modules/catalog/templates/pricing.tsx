import Link from "next/link";
import type { PricingDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button, ButtonLink } from "@/components/ui/button";
import { Choice } from "@/components/forms/field";
import { SolutionPriceCards } from "../components/solution-price-cards";
import { EngagementModels } from "../components/engagement-models";
import { publicFaqs } from "@/modules/content/data/public-copy";
const pricingQuestions = [
  {
    question: "Are starting prices a final quote?",
    answer: publicFaqs.find((faq) => faq.id === "starting-prices")!.answer,
    help: "starting-prices",
  },
  {
    question: "Are third-party costs included?",
    answer:
      "Confirm any domain, hosting, licence or usage charges in your proposal. A displayed starting price does not confirm that external fees are included.",
    help: "starting-prices",
  },
  {
    question: "How are deposits and milestone payments agreed?",
    answer:
      "Confirm the initial payment, any milestone payments and final handoff arrangements in your written proposal. Payment arrangements depend on the agreed engagement.",
    help: "starting-prices",
  },
  {
    question: "Is ongoing maintenance included?",
    answer: publicFaqs.find((faq) => faq.id === "maintenance")!.answer,
    help: "maintenance",
  },
  {
    question: "Can I request a custom quote without choosing a package?",
    answer:
      "Yes. Select the services you want to discuss or describe your business need. We review scope and dependencies before preparing a quote.",
    help: "not-sure",
  },
  {
    question: "What if my requirements change?",
    answer:
      "Discuss how a change affects deliverables, timing, responsibilities and fees before agreeing to the revised work.",
    help: "timelines",
  },
];

export function PricingTemplate({ data }: { data: PricingDetail }) {
  return (
    <>
      <Breadcrumbs
        parents={[{ label: "Home", href: "/" }]}
        current="Pricing & Packages"
      />
      <section className="catalog-hero" aria-labelledby="pricing-title">
        <h1 id="pricing-title">Understand your options before you start.</h1>
        <p className="lead">
          Explore indicative starting prices and engagement models. Your final
          quote reflects the work, responsibilities and costs agreed for your
          project.
        </p>
        <div className="ui-actions">
          <ButtonLink href="#solution-prices">Solution prices</ButtonLink>
          <ButtonLink href="#service-prices" variant="secondary">
            Service prices
          </ButtonLink>
          <ButtonLink href="/get-a-quote" variant="quiet">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section className="catalog-section" aria-labelledby="models-title">
        <h2 id="models-title">How engagements are priced</h2>
        <EngagementModels />
      </section>
      <section
        id="solution-prices"
        className="catalog-section"
        aria-labelledby="solution-prices-title"
      >
        <h2 id="solution-prices-title">Find a solution around your needs</h2>
        <p>
          All amounts below are indicative USD starting points. Compare the same
          solution's options; the names alone do not confirm inclusions, billing
          units or ongoing costs.
        </p>
        <nav className="ui-actions" aria-label="Jump to solution prices">
          {data.solutions.map((solution) => (
            <a key={solution.id} href={`#solution-${solution.id}`}>
              {solution.name}
            </a>
          ))}
        </nav>
        {data.solutions.map((solution) => (
          <div
            className="catalog-section"
            id={`solution-${solution.id}`}
            key={solution.id}
          >
            <h3>
              <Link href={solution.href} prefetch={false}>
                {solution.name}
              </Link>
            </h3>
            <SolutionPriceCards solution={solution} nested />
          </div>
        ))}
      </section>
      <section
        id="service-prices"
        className="catalog-section"
        aria-labelledby="service-prices-title"
      >
        <h2 id="service-prices-title">Looking for a specific service?</h2>
        <p>
          Browse all eight categories. Cross-listed services use the same offer;
          selecting services below does not calculate a binding total.
        </p>
        {data.groups.map((group) => (
          <details className="catalog-faq" key={group.id}>
            <summary>{group.name}</summary>
            <ul className="catalog-links">
              {group.services.map((service) => (
                <li key={service.id}>
                  <Link href={service.href} prefetch={false}>
                    {service.name}
                  </Link>
                  <p>
                    {service.priceLabel} USD — indicative; scope and billing
                    units require confirmation.
                  </p>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </section>
      <section className="catalog-section" aria-labelledby="custom-title">
        <h2 id="custom-title">Build a scope around your needs</h2>
        <p>
          Select the services you want to discuss, or describe your needs. We’ll
          review overlap, dependencies and scope before preparing a quote.
        </p>
        <form action="/get-a-quote" method="get">
          <p>
            Choose any relevant services, or continue with an unsure/custom
            request. Your choices stay editable on the quote form.
          </p>
          <details className="catalog-faq">
            <summary>Choose services to discuss</summary>
            <fieldset>
              <legend>Services for your quote request</legend>
              {data.services.map((service) => (
                <Choice
                  key={service.id}
                  id={`quote-${service.id}`}
                  name="serviceId"
                  value={service.id}
                  label={service.name}
                />
              ))}
            </fieldset>
          </details>
          <Choice
            id="custom-request"
            name="customRequested"
            value="true"
            label="Include custom or unsure requirements"
          />
          <Button type="submit">Request a Custom Quote</Button>
        </form>
      </section>
      <section className="catalog-section" aria-labelledby="cost-title">
        <h2 id="cost-title">What affects your quote?</h2>
        <p>
          Starting prices are indicative. Final scope, fees and any ongoing or
          third-party costs are confirmed in your proposal.
        </p>
        <p>
          The monthly scope, billing terms and any usage limits are agreed
          before work begins.
        </p>
        <p>
          Quantities, exclusions, revisions, client inputs, technology,
          setup/recurring costs and support remain package decisions.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Pricing FAQs</h2>
        {pricingQuestions.map((faq) => (
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
        <h2 id="next-title">Get a quote for your requirements</h2>
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
