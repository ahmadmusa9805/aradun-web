import Link from "next/link";
import type { ServiceDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { PricePresentation } from "../components/price-presentation";
import { Availability } from "../components/availability";
import { marketingCopy, marketingFaqs } from "./marketing-copy";
import { MarketingBudget, MarketingProcess } from "./marketing-category";

export function MarketingServiceTemplate({
  service,
}: {
  service: ServiceDetail;
}) {
  const copy = marketingCopy[service.id]!;
  const quote = `/get-a-quote?categoryId=CAT-04&serviceId=${service.id}`;
  return (
    <div className="marketing-service" data-service-variant={service.variant}>
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.parent.name, href: service.parent.href },
        ]}
        current={service.name}
      />
      <section className="catalog-hero" aria-labelledby="service-title">
        <p className="catalog-eyebrow">{service.parent.name}</p>
        <h1 id="service-title">{service.name}</h1>
        <p className="lead">{copy.summary}</p>
        <Availability value={service.availability} />
        <div className="ui-actions">
          <ButtonLink href={quote}>Discuss your requirements</ButtonLink>
          <ButtonLink href="#commercial-options" variant="secondary">
            Compare price options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#scope-title">Types of work</a>
        <a href="#tools-title">Tools &amp; Platforms</a>
        <a href="#commercial-options">Pricing &amp; scope</a>
        <a href="#marketing-budget-title">Budget</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">A clearer starting point for your marketing</h2>
        <p>{copy.detail}</p>
        <dl className="marketing-fit">
          <div>
            <dt>Your goal</dt>
            <dd>{copy.need}</dd>
          </div>
          <div>
            <dt>Intended benefit</dt>
            <dd>{service.benefit}</dd>
          </div>
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">What your engagement can cover</h2>
        <p>
          Use these work types to describe your priorities. Your proposal
          confirms the tasks and deliverables included in your engagement.
        </p>
        <ul className="marketing-detail-work" role="list">
          {copy.work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>Possible deliverables</h3>
        <ul>
          {service.candidates.split(";").map((item) => (
            <li key={item}>{item.trim()}</li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="tools-title">
        <h2 id="tools-title">Tools &amp; Platforms</h2>
        <ul className="marketing-tool-list">
          {copy.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <p>
          We review access, account eligibility and the required work before
          choosing tools. Listing a platform does not imply certification,
          partnership or an included subscription.
        </p>
      </section>
      <section
        className="catalog-section"
        id="commercial-options"
        aria-labelledby="commercial-title"
      >
        <h2 id="commercial-title">Pricing options &amp; scope</h2>
        <p>
          Compare the existing indicative options, then discuss the scope that
          fits your goal. These prices are not automatic quotes or fixed
          promises of campaign results.
        </p>
        <ol
          className="catalog-grid marketing-package-grid"
          aria-label="Indicative pricing options"
        >
          {service.prices.map((position, index) => (
            <li className="catalog-card" key={position.packageId}>
              <h3>{position.tierLabel ?? `Option ${index + 1}`}</h3>
              <PricePresentation price={position.price} />
              <h4>
                {index === 0
                  ? "A focused engagement"
                  : "A broader scope to discuss"}
              </h4>
              <p>
                {index === 0
                  ? "Prioritize a defined set of tasks around your immediate goal."
                  : "Review the additional channels, deliverables or complexity your engagement needs."}
              </p>
              <ul>
                <li>Agreed tasks, quantities and approval responsibilities</li>
                <li>Account access, assets and measurement requirements</li>
                <li>Reporting, billing basis and separate costs</li>
              </ul>
              <ButtonLink
                href={`${quote}&packageId=${position.packageId}`}
                variant="secondary"
              >
                Discuss this option
              </ButtonLink>
            </li>
          ))}
        </ol>
        <p>{copy.boundary}</p>
      </section>
      <section className="catalog-section" aria-labelledby="inputs-title">
        <h2 id="inputs-title">What to prepare</h2>
        <ul>
          {copy.inputs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Start with a goal and a non-sensitive example. Account access and
          sensitive data are shared only through an agreed secure process.
        </p>
      </section>
      <MarketingProcess />
      <MarketingBudget />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before we get started</h2>
        {[
          ...service.faqs.map((faq) => [faq.question, faq.answer]),
          marketingFaqs[1],
          marketingFaqs[4],
        ].map(([question, answer]) => (
          <details className="catalog-faq" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <section className="catalog-section" aria-labelledby="related-title">
        <h2 id="related-title">Related services &amp; solutions</h2>
        <ul className="catalog-links">
          {service.related.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Tell us what you want to improve.</h2>
        <p>
          Share your audience, current activity and the outcome you are working
          toward. We will help identify a practical starting point.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <p>
          <Link href={service.parent.href}>
            Explore all Digital Marketing services →
          </Link>
        </p>
      </section>
    </div>
  );
}
