import Link from "next/link";
import type { ServiceDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import { PricePresentation } from "../components/price-presentation";
import { automationCopy, automationFaqs } from "./automation-copy";
import { AutomationProcess } from "./automation-category";

export function AutomationServiceTemplate({
  service,
}: {
  service: ServiceDetail;
}) {
  const copy = automationCopy[service.id]!;
  const quote = `/get-a-quote?categoryId=CAT-03&serviceId=${service.id}`;
  return (
    <div className="automation-service" data-service-variant={service.variant}>
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
            Explore pricing options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#scope-title">Types of work</a>
        <a href="#tools-title">Tools &amp; Platforms</a>
        <a href="#commercial-options">Pricing &amp; scope</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Start with the task, not the technology</h2>
        <p>{copy.detail}</p>
        <dl className="automation-fit">
          <div>
            <dt>A useful starting point</dt>
            <dd>{copy.need}</dd>
          </div>
          <div>
            <dt>Intended benefit</dt>
            <dd>{service.benefit}</dd>
          </div>
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">What we can help you build or improve</h2>
        <p>
          These are the types of work to discuss for this service. Your scope
          may include a focused task or a combination of relevant requirements.
        </p>
        <ul className="automation-detail-work">
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
        <ul className="automation-tool-list">
          {copy.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <p>
          We review compatibility, API permissions, account eligibility and plan
          limits before choosing the tools for your project. These examples do
          not imply certification, a partnership or an already-connected
          account.
        </p>
      </section>
      <section
        className="catalog-section"
        id="commercial-options"
        aria-labelledby="commercial-title"
      >
        <h2 id="commercial-title">Existing price options &amp; scope</h2>
        <p>
          Compare the indicative options, then discuss the work you need. The
          proposal confirms included tasks, complexity, quantities, billing
          basis, handover and any ongoing support.
        </p>
        <ol
          className="catalog-grid automation-package-grid"
          aria-label="Indicative pricing options"
        >
          {service.prices.map((position, index) => (
            <li className="catalog-card" key={position.packageId}>
              <h3>{position.tierLabel ?? `Maintenance option ${index + 1}`}</h3>
              <PricePresentation price={position.price} />
              <p>
                {service.variant === "recurring"
                  ? "Discuss covered systems, routine checks, request limits and escalation responsibilities."
                  : index === 0
                    ? "Start by discussing a focused implementation with clearly defined inputs and outcomes."
                    : "Discuss a broader implementation where more steps, systems or review scenarios need to be scoped."}
              </p>
              <h4>Confirm in your proposal</h4>
              <ul>
                <li>Tasks, connected systems and access boundaries</li>
                <li>Failure cases, testing and any human handoff</li>
                <li>Documentation, usage costs and support responsibilities</li>
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
        <p>
          Subscriptions, AI usage, phone and messaging charges are separate
          unless expressly included. A starting price is not a guarantee of
          unlimited tasks, fixed delivery time or a particular performance
          outcome.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="inputs-title">
        <h2 id="inputs-title">What to bring to the first conversation</h2>
        <ul>
          {copy.inputs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Share the goal and a non-sensitive example first. Credentials and
          sensitive records are exchanged only through an agreed secure process.
        </p>
      </section>
      <AutomationProcess />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Practical questions before we start</h2>
        {[
          ...service.faqs.map((f) => [f.question, f.answer]),
          automationFaqs[3],
          automationFaqs[5],
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
        <h2 id="next-title">Tell us what you want to make easier.</h2>
        <p>
          Describe the current task and the result you need. We will help
          identify a practical next step.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <Link href={service.parent.href}>
          Explore all AI Automation &amp; CRM services →
        </Link>
      </section>
    </div>
  );
}
