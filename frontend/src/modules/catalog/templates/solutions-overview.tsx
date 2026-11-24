import Link from "next/link";
import type { SolutionDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
const coreIds = ["SOL-001", "SOL-002", "SOL-003"];
const otherIds = ["SOL-004", "SOL-005"];
const copy: Record<
  string,
  { description: string; types: string; fit: string }
> = {
  "SOL-001": {
    description:
      "Build or improve your website, brand presentation and customer inquiry experience.",
    types: "Websites · Branding · Landing pages",
    fit: "New businesses and companies improving their websites",
  },
  "SOL-002": {
    description:
      "Connect your CRM and business tools to reduce repetitive work and improve customer follow-up.",
    types: "CRM · Workflows · Integrations",
    fit: "Teams handling repetitive tasks and customer workflows",
  },
  "SOL-003": {
    description:
      "Improve marketing through selected channels, coordinated activities and measurable priorities.",
    types: "SEO · Advertising · Social media",
    fit: "Businesses improving customer acquisition and marketing",
  },
  "SOL-004": {
    description:
      "Prepare hosting, deploy applications and improve selected infrastructure and operating processes.",
    types: "Cloud setup · Deployment · CI/CD",
    fit: "Startups and technical teams improving infrastructure",
  },
  "SOL-005": {
    description:
      "Bring selected technology, automation, design and marketing services together through one coordinated plan.",
    types: "Connected projects · Phased delivery · Ongoing service planning",
    fit: "Businesses with several connected digital needs",
  },
};
export const solutionQuestions = [
  {
    question: "Does a solution include every related service?",
    answer:
      "No. Only the services and deliverables identified in your selected package or custom proposal are included.",
  },
  {
    question: "Can you work with existing systems?",
    answer:
      "We review access, compatibility and condition to understand what can be reused or improved.",
  },
  {
    question: "Can I request a smaller custom project?",
    answer:
      "You can discuss an individual service or tailored project. Custom pricing does not automatically mean a larger or more expensive engagement.",
  },
  {
    question: "Are starting prices final?",
    answer:
      "They are indicative entry points. Your proposal confirms selected deliverables, final fees, billing terms and separate costs.",
  },
  {
    question: "What if I do not know which solution I need?",
    answer:
      "Tell us your main business goal and current situation. We can help identify a suitable starting point.",
  },
];
const process = [
  [
    "Share your goals",
    "Tell us about your business, challenges and what you want to achieve.",
  ],
  [
    "Choose an approach",
    "Review requirements and identify suitable services or solutions.",
  ],
  [
    "Review your proposal",
    "Understand deliverables, costs, responsibilities and project stages.",
  ],
  [
    "Start the agreed work",
    "Approve the scope before delivery, with defined review and handoff points.",
  ],
];
function SolutionCards({
  solutions,
  ids,
}: {
  solutions: SolutionDetail[];
  ids: string[];
}) {
  return (
    <ul className="catalog-grid solutions-card-grid">
      {ids.flatMap((id) => {
        const solution = solutions.find((item) => item.id === id);
        if (!solution) return [];
        const detail = copy[id]!;
        return [
          <li
            className="catalog-card solutions-overview-card"
            key={id}
            data-solution-id={id}
          >
            <h3>
              <Link href={solution.href}>{solution.name}</Link>
            </h3>
            <p>{detail.description}</p>
            <p className="solutions-types">{detail.types}</p>
            <p className="solutions-best">
              <strong>Best for: </strong>
              {detail.fit}
            </p>
            <p className="solutions-starting-price">
              <strong>
                {id === "SOL-005"
                  ? "Custom project pricing"
                  : solution.prices[0]!.price.label}
              </strong>
              {id !== "SOL-005" && <span> USD</span>}
            </p>
            <Link className="solutions-card-action" href={solution.href}>
              {id === "SOL-005"
                ? "Explore engagement options"
                : `Explore ${solution.name}`}{" "}
              →
            </Link>
          </li>,
        ];
      })}
    </ul>
  );
}
export function SolutionsOverview({
  solutions,
}: {
  solutions: SolutionDetail[];
}) {
  return (
    <div className="solutions-overview">
      <Breadcrumbs
        parents={[{ label: "Home", href: "/" }]}
        current="Solutions"
      />
      <section className="catalog-hero" aria-labelledby="solutions-title">
        <p className="catalog-eyebrow">Our solutions</p>
        <h1 id="solutions-title">Digital solutions for your business goals.</h1>
        <p className="lead">
          From building your online presence to automating operations and
          improving marketing, bring the right services together around what you
          want to achieve.
        </p>
        <p>
          Start with a focused project, ongoing support or a custom combination
          suited to your needs and budget.
        </p>
        <div className="ui-actions">
          <ButtonLink href="#solutions">Explore Solutions</ButtonLink>
          <ButtonLink href="/get-a-quote" variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section
        className="catalog-section solutions-core"
        id="solutions"
        aria-labelledby="core-solutions-title"
      >
        <p className="catalog-eyebrow">Build · Automate · Grow</p>
        <h2 id="core-solutions-title">Core solutions</h2>
        <p>
          Three starting points for your online presence, everyday operations
          and marketing.
        </p>
        <SolutionCards solutions={solutions} ids={coreIds} />
      </section>
      <section
        className="catalog-section"
        aria-labelledby="other-solutions-title"
      >
        <h2 id="other-solutions-title">More ways we can help</h2>
        <p>
          Support your application infrastructure or coordinate several
          connected business needs.
        </p>
        <SolutionCards solutions={solutions} ids={otherIds} />
        <p className="solutions-price-note">
          Prices are indicative USD starting points. Each solution page explains
          its options; your proposal confirms selected deliverables, final fees
          and any separate third-party or ongoing costs.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="selection-title">
        <h2 id="selection-title">A service or a solution?</h2>
        <div className="solutions-choice-grid">
          <div>
            <h3>Choose a service</h3>
            <p>
              You know the specific work you need, such as website development,
              CRM setup or SEO.
            </p>
            <Link href="/services">Explore services →</Link>
          </div>
          <div>
            <h3>Choose a solution</h3>
            <p>
              You have a business goal that may need several connected services.
              Compare the five directions above.
            </p>
            <Link href="#solutions">Compare solutions →</Link>
          </div>
        </div>
      </section>
      <section className="catalog-section" aria-labelledby="approach-title">
        <h2 id="approach-title">How we work</h2>
        <ol className="solutions-process">
          {process.map(([title, text], index) => (
            <li key={title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <Link href="/pricing">Explore pricing &amp; packages →</Link>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before choosing a solution</h2>
        {solutionQuestions.map((faq) => (
          <details className="catalog-faq" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
        <p>
          <Link href="/faq">View all FAQs →</Link>
        </p>
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">
          Let's find the right solution for your business.
        </h2>
        <p>
          Whether you are starting with one project or planning wider
          improvements, tell us what you want to achieve.
        </p>
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
