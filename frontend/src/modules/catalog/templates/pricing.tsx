import Link from "next/link";
import type { PricingDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { PricingDirectory } from "../components/pricing-directory";
import { webServiceCopy } from "./web-service-copy";
import { automationCopy } from "./automation-copy";
import { marketingCopy } from "./marketing-copy";
import { mobileCopy } from "./mobile-copy";
import { cloudCopy } from "./cloud-copy";
import { cyberCopy } from "./cyber-copy";
import { designCopy } from "./design-copy";
import { videoCopy } from "./video-copy";
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
  const summaries: Record<string, { summary?: string; hero?: string }> = {
    ...webServiceCopy,
    ...automationCopy,
    ...marketingCopy,
    ...mobileCopy,
    ...cloudCopy,
    ...cyberCopy,
    ...designCopy,
    ...videoCopy,
  };
  const order = [
    "CAT-01",
    "CAT-03",
    "CAT-04",
    "CAT-02",
    "CAT-05",
    "CAT-06",
    "CAT-07",
    "CAT-08",
  ];
  const groups = order.flatMap((id) => {
    const group = data.groups.find((item) => item.id === id);
    return group
      ? [
          {
            ...group,
            services: group.services.map((service) => {
              const amount = service.priceLabel.match(/\$[\d,]+(?:\.\d+)?/);
              const monthly = /per month|\/month/i.test(service.priceLabel);
              return {
                ...service,
                summary:
                  summaries[service.id]?.summary ??
                  summaries[service.id]?.hero ??
                  "Explore the work and package options on the service page.",
                startingPrice: amount
                  ? `From ${amount[0]}${monthly ? "/month" : ""}`
                  : "Custom quote",
                note: ["SVC-019", "SVC-021"].includes(service.id)
                  ? "Setup and ad spend separate"
                  : ["SVC-009", "SVC-043", "SVC-044", "SVC-047"].includes(
                        service.id,
                      )
                    ? "Design only; implementation separately scoped"
                    : service.id === "SVC-053"
                      ? "Filming, crew and travel separately scoped"
                      : id === "CAT-05"
                        ? "Cloud provider fees separate"
                        : id === "CAT-03"
                          ? "Software, API and messaging usage may be separate"
                          : undefined,
              };
            }),
          },
        ]
      : [];
  });
  return (
    <div className="pricing-page">
      <Breadcrumbs
        parents={[{ label: "Home", href: "/" }]}
        current="Pricing & Packages"
      />
      <section className="catalog-hero" aria-labelledby="pricing-title">
        <h1 id="pricing-title">
          Find the right starting point for your budget.
        </h1>
        <p className="lead">
          Compare connected solution packages or browse individual service
          starting prices. Choose a focused task, a wider project or a custom
          combination.
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
        <h2 id="service-prices-title">Explore individual service prices</h2>
        <p>
          Browse starting prices and select one service or several. All prices
          are indicative USD entry points. Service pages explain the full
          options; your proposal confirms deliverables, billing units and
          external costs.
        </p>
        <p>
          Monthly units appear where confirmed. Other deliverable units are
          agreed for the selected work. Mobile App UI/UX Design is one shared
          service across two categories.
        </p>
        <PricingDirectory groups={groups} />
      </section>
      <section className="catalog-section" aria-labelledby="cost-title">
        <h2 id="cost-title">What affects your quote?</h2>
        <dl className="pricing-factors">
          {[
            [
              "Size and quantity",
              "Pages, screens, workflows, assets and campaign quantities affect effort.",
            ],
            [
              "Complexity",
              "Custom behavior and difficult integrations require more work.",
            ],
            [
              "Existing systems",
              "Compatible systems may reduce setup; repairs or migrations can add effort.",
            ],
            [
              "Content and materials",
              "Ready-to-use approved content can reduce preparation time.",
            ],
            [
              "Third-party costs",
              "Hosting, subscriptions, ad spend, API usage and licenses may be separate.",
            ],
            [
              "Ongoing support",
              "Maintenance, monitoring, content and future improvements are scoped separately.",
            ],
          ].map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
        <p>
          Your budget matters. Share your priorities and preferred budget; we
          can discuss a smaller first stage or tailored scope.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Pricing FAQs</h2>
        {pricingQuestions.map((faq) => (
          <details key={faq.question} className="catalog-faq">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
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
    </div>
  );
}
