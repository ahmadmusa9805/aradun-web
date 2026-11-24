import Link from "next/link";
import type { ServiceDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import { PricePresentation } from "../components/price-presentation";
import { mobileCopy, mobileFaqs } from "./mobile-copy";
import { MobileProcess, MobileConsiderations } from "./mobile-category";

export function MobileServiceTemplate({ service }: { service: ServiceDetail }) {
  const copy = mobileCopy[service.id]!;
  const quote = `/get-a-quote?categoryId=CAT-02&serviceId=${service.id}`;
  return (
    <div className="mobile-service" data-service-variant={service.variant}>
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
          <ButtonLink href={quote}>Discuss your app</ButtonLink>
          <ButtonLink href="#commercial-options" variant="secondary">
            Explore pricing options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#scope-title">Types of work</a>
        <a href="#tools-title">Technologies</a>
        <a href="#commercial-options">Pricing &amp; scope</a>
        <a href="#mobile-considerations-title">Platforms &amp; ownership</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Start with the experience people need</h2>
        <p>{copy.detail}</p>
        <dl className="mobile-fit">
          <div>
            <dt>Your starting point</dt>
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
          Choose the work that matters to your app. The proposal confirms which
          requirements and deliverables are included.
        </p>
        <ul className="mobile-detail-work" role="list">
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
        <h2 id="tools-title">Technologies &amp; Platforms</h2>
        <ul className="mobile-tool-list">
          {copy.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <p>
          We assess technology against the required platforms, existing code,
          device needs and account access. Examples do not imply that every
          technology or platform is included in a package.
        </p>
      </section>
      <section
        className="catalog-section"
        id="commercial-options"
        aria-labelledby="commercial-title"
      >
        <h2 id="commercial-title">Pricing options &amp; scope</h2>
        <p>
          Compare the existing indicative options. Your proposal confirms
          screens or tasks, platform coverage, backend responsibilities,
          testing, revisions and handover.
        </p>
        <ol
          className="catalog-grid mobile-package-grid"
          aria-label="Indicative pricing options"
        >
          {service.prices.map((position, index) => (
            <li className="catalog-card" key={position.packageId}>
              <h3>
                {position.tierLabel ??
                  (service.variant === "custom"
                    ? "Custom scope"
                    : `Maintenance option ${index + 1}`)}
              </h3>
              <PricePresentation price={position.price} />
              <h4>
                {service.variant === "custom"
                  ? "Defined around your requirements"
                  : index === 0
                    ? "A focused starting scope"
                    : "A broader scope to discuss"}
              </h4>
              <ul>
                <li>Required tasks, platforms and supported versions</li>
                <li>
                  {service.id === "SVC-009"
                    ? "Design outputs, prototype depth and handoff formats"
                    : "Features, backend/API dependencies and test scenarios"}
                </li>
                <li>
                  {service.id === "SVC-010"
                    ? "Recurring checks, change limits and escalation responsibilities"
                    : "Review stages, handover and any included release assistance"}
                </li>
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
          Start with your goal and a non-sensitive example. Signing keys,
          passwords and private account credentials are exchanged only through
          an agreed secure process.
        </p>
      </section>
      <MobileProcess
        mode={
          service.id === "SVC-009"
            ? "design"
            : service.id === "SVC-010"
              ? "maintenance"
              : "delivery"
        }
      />
      <MobileConsiderations />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before we get started</h2>
        {[
          ...service.faqs.map((faq) => [faq.question, faq.answer]),
          mobileFaqs[4],
          mobileFaqs[5],
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
        <h2 id="next-title">Let's find the right next step for your app.</h2>
        <p>
          Tell us what users need to do, what you already have and where you
          need help.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <p>
          <Link href="/services/mobile-app-development">
            Explore all Mobile App services →
          </Link>
        </p>
      </section>
    </div>
  );
}
