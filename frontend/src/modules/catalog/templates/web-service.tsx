import Link from "next/link";
import type { ServiceDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import { PricePresentation } from "../components/price-presentation";
import { webProcess } from "./web-category-copy";
import { webServiceCopy } from "./web-service-copy";

export function WebServiceTemplate({ service }: { service: ServiceDetail }) {
  const copy = webServiceCopy[service.id]!;
  const quote = `/get-a-quote?serviceId=${encodeURIComponent(service.id)}&categoryId=CAT-01`;
  return (
    <div className="web-service" data-service-variant={service.variant}>
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
        <p className="lead">{copy.hero}</p>
        <Availability value={service.availability} />
        <p>
          <strong>{service.sourcePriceLabel}</strong> USD · Indicative pricing
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Discuss your project</ButtonLink>
          <ButtonLink href="#commercial-options" variant="secondary">
            Compare pricing options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#fit-title">Is this for you?</a>
        <a href="#scope-title">What we can deliver</a>
        <a href="#commercial-options">Pricing &amp; scope</a>
        <a href="#delivery-title">Our process</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Built around your business goal</h2>
        <p>{copy.audience}</p>
        <p>{copy.goal}</p>
        <ul className="web-benefit-list">
          {copy.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">What your engagement can cover</h2>
        <p>
          Use this as a starting point for your brief. Your proposal confirms
          the deliverables that belong in your project.
        </p>
        <ul className="web-deliverable-list">
          {copy.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section
        id="commercial-options"
        className="catalog-section"
        aria-labelledby="commercial-title"
      >
        <p className="catalog-eyebrow">Find the right level of work</p>
        <h2 id="commercial-title">Pricing options &amp; proposed scope</h2>
        <p>
          Compare the existing price options below. The scope lists are proposed
          directions for discussion—not fixed package entitlements. Your
          proposal confirms inclusions, quantities, billing basis and any
          separate costs.
        </p>
        <ol
          className="catalog-grid web-package-grid"
          aria-label="Indicative pricing options"
        >
          {service.prices.map((position, index) => {
            const option = copy.options[index];
            return (
              <li
                className="catalog-card web-package-card"
                key={position.packageId}
              >
                <p className="catalog-eyebrow">
                  {service.prices.length === 1
                    ? "Tailored to your requirements"
                    : `Option ${index + 1}`}
                </p>
                <h3>
                  {position.tierLabel ??
                    (service.variant === "recurring"
                      ? `Maintenance option ${index + 1}`
                      : "Custom scope")}
                </h3>
                <PricePresentation price={position.price} />
                {option && (
                  <>
                    <h4>{option.focus}</h4>
                    <p className="web-scope-caption">Scope to discuss</p>
                    <ul>
                      {option.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                <ButtonLink
                  href={`${quote}&packageId=${encodeURIComponent(position.packageId)}`}
                  variant="secondary"
                >
                  Discuss this option
                </ButtonLink>
              </li>
            );
          })}
        </ol>
        <p>{copy.aftercare}</p>
      </section>
      <section className="catalog-section" aria-labelledby="inputs-title">
        <h2 id="inputs-title">A useful brief starts here</h2>
        <p>
          You do not need a finished technical specification to start a
          conversation. Share what you already know:
        </p>
        <ul className="web-deliverable-list">
          {copy.inputs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Please keep passwords, credentials and sensitive documents out of the
          inquiry form. We agree a secure access process when it is needed.
        </p>
        <Link href={quote}>Tell us about your project →</Link>
      </section>
      <section className="catalog-section" aria-labelledby="delivery-title">
        <h2 id="delivery-title">A clear process from brief to handover</h2>
        <ol className="web-delivery-process">
          {webProcess.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <h3>
          {service.variant === "recurring"
            ? "For recurring maintenance"
            : "For this engagement"}
        </h3>
        <ol className="catalog-process">
          {service.approach.split(";").map((step) => (
            <li key={step}>{step.trim()}</li>
          ))}
        </ol>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before we get started</h2>
        {service.faqs.map((faq) => (
          <details className="catalog-faq" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
        <Link href="/contact">Have a different question? Get in touch →</Link>
      </section>
      <section className="catalog-section" aria-labelledby="related-title">
        <h2 id="related-title">Connected services &amp; solutions</h2>
        <p>
          Explore related work if your project needs a broader scope. These are
          optional next steps, not compulsory bundles.
        </p>
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
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Let's talk about the result you need.</h2>
        <p>
          Share your goal, your current situation and what you want to improve.
          We will help clarify the scope and the most useful next step.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <p>
          <Link href={service.parent.href}>
            Explore all Web &amp; Software services →
          </Link>
        </p>
      </section>
    </div>
  );
}
