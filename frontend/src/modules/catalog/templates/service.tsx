import Link from "next/link";
import type { ServiceDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { PricePresentation } from "../components/price-presentation";
const guidance: Record<
  ServiceDetail["variant"],
  { title: string; text: string; help: string }
> = {
  project: {
    title: "Before a project begins",
    text: "Confirm the required content, access, responsibilities and review stages before agreeing the delivery scope. Timing depends on these inputs and the work involved.",
    help: "timelines",
  },
  recurring: {
    title: "Before recurring work begins",
    text: "Confirm the recurring scope, billing period, responsibilities and any usage or support boundaries. A monthly starting price does not mean unlimited work.",
    help: "maintenance",
  },
  custom: {
    title: "Before a custom engagement begins",
    text: "Describe your requirements and existing systems first. Deliverables, dependencies and commercial terms need a scoped proposal; no binding total is calculated here.",
    help: "not-sure",
  },
  assessment: {
    title: "Before assessment work begins",
    text: "Confirm written authorization, the permitted targets, access and assessment boundaries before testing begins. An assessment is not a guarantee of security or compliance.",
    help: "services",
  },
  "design-media": {
    title: "Before creative work begins",
    text: "Confirm rights to supplied assets and agree the required formats, outputs, responsibilities and revision scope. Source materials and ongoing support are not automatically included.",
    help: "services",
  },
};

export function ServiceTemplate({ service }: { service: ServiceDetail }) {
  const quote = `/get-a-quote?serviceId=${encodeURIComponent(service.id)}`;
  return (
    <div data-service-variant={service.variant}>
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
        <p className="lead">{service.summary}</p>
        <p>
          <strong>{service.sourcePriceLabel}</strong> USD · Indicative pricing
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="#commercial-options" variant="secondary">
            Explore pricing options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#scope-title">Scope</a>
        <a href="#commercial-options">Pricing options</a>
        <a href="#delivery-title">Delivery</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">When this service makes sense</h2>
        <p>{service.fit}</p>
        <dl className="catalog-fit">
          <div>
            <dt>Your starting point</dt>
            <dd>{service.problem}</dd>
          </div>
          <div>
            <dt>Intended benefit</dt>
            <dd>{service.benefit}</dd>
          </div>
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">What the engagement can cover</h2>
        <p>Potential scope. Your proposal confirms what is included:</p>
        <ul className="catalog-links">
          {service.candidates.split(";").map((candidate) => (
            <li key={candidate}>{candidate.trim()}</li>
          ))}
        </ul>
        <h3>Inputs and dependencies</h3>
        <p>{service.faqs[1]!.answer}</p>
        <p>
          The proposal identifies which candidate deliverables are included,
          their quantities, revisions, exclusions and any separate provider or
          ongoing costs. The starting price alone does not define the package.
        </p>
      </section>
      {/* Evidence region: omit until genuine permitted examples exist. */}
      <section
        id="commercial-options"
        className="catalog-section"
        aria-labelledby="commercial-title"
      >
        <h2 id="commercial-title">Packages and starting prices</h2>
        <p>
          Package scope, billing units and inclusions require confirmation
          before an engagement is agreed.
        </p>
        <ol className="catalog-grid" aria-label="Indicative pricing options">
          {service.prices.map((position) => (
            <li key={position.packageId} className="catalog-card">
              {position.tierLabel && <h3>{position.tierLabel}</h3>}
              <PricePresentation price={position.price} />
              <ButtonLink
                href={`${quote}&packageId=${encodeURIComponent(position.packageId)}`}
                variant="secondary"
              >
                Discuss this option
              </ButtonLink>
            </li>
          ))}
        </ol>
      </section>
      <section className="catalog-section" aria-labelledby="delivery-title">
        <h2 id="delivery-title">How the work progresses</h2>
        <ol className="catalog-process">
          {service.approach.split(";").map((step) => (
            <li key={step}>{step.trim()}</li>
          ))}
        </ol>
        <p>{service.faqs[3]!.answer}</p>
        <h3>{guidance[service.variant].title}</h3>
        <p>{guidance[service.variant].text}</p>
        <p>
          <Link
            prefetch={false}
            href={`/faq/${guidance[service.variant].help}`}
          >
            Read the practical guide
          </Link>
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="related-title">
        <h2 id="related-title">Related services and solutions</h2>
        <p>These are informational relationships, not compulsory bundles.</p>
        <ul className="catalog-links">
          {service.related.map((item) => (
            <li key={item.href}>
              <Link href={item.href} prefetch={false}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Service FAQs</h2>
        {service.faqs.map((faq) => (
          <details key={faq.question} className="catalog-faq">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
        <p className="section-link">
          <Link prefetch={false} href="/faq/starting-prices">
            How indicative prices work
          </Link>{" "}
          ·{" "}
          <Link prefetch={false} href="/contact">
            Ask another question
          </Link>
        </p>
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Discuss your {service.name} requirements</h2>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
