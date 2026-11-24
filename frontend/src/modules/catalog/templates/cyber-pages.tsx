import Link from "next/link";
import Image from "next/image";
import type { CategoryDetail, ServiceDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import { PricePresentation } from "../components/price-presentation";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";
import {
  cyberCopy,
  cyberProcess,
  cyberDeliverables,
  cyberResponsibilities,
  cyberFaqs,
} from "./cyber-copy";

function CyberProcess() {
  return (
    <section className="catalog-section" aria-labelledby="cyber-process-title">
      <h2 id="cyber-process-title">How engagements work</h2>
      <ol className="cyber-process">
        {cyberProcess.map(([title, text], index) => (
          <li key={title}>
            <span aria-hidden="true">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
function CyberResponsibilities() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="cyber-responsibilities-title"
    >
      <h2 id="cyber-responsibilities-title">
        Scope, coverage &amp; responsibilities
      </h2>
      <dl className="cyber-responsibilities">
        {cyberResponsibilities.map(([title, text]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
function CyberDeliverables() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="cyber-deliverables-title"
    >
      <h2 id="cyber-deliverables-title">
        Clear findings. Practical next steps.
      </h2>
      <p>
        Depending on the selected service and agreed scope, your engagement may
        provide:
      </p>
      <dl className="cyber-deliverables">
        {cyberDeliverables.map(([title, text]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
export function CyberCategoryTemplate({
  category,
}: {
  category: CategoryDetail;
}) {
  const quote = `/get-a-quote?categoryId=${category.id}`;
  const examples =
    frontendEnv.appEnv === "development"
      ? conceptProjects.filter((p) => p.categoryId === category.id).slice(0, 2)
      : [];
  return (
    <div className="cyber-category">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">
          Assessment · Selected controls · Readiness
        </p>
        <h1 id="category-title">{category.name}</h1>
        <p className="cyber-promise">
          Understand your risks. Plan practical security improvements.
        </p>
        <p className="lead">
          We help you review selected application and cloud controls, strengthen
          agreed configurations and prepare clearer security practices through
          carefully defined engagements.
        </p>
        <div className="ui-actions">
          <ButtonLink href="#category-services">Explore Services</ButtonLink>
          <ButtonLink href={quote} variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section
        className="catalog-section"
        id="category-services"
        aria-labelledby="services-title"
      >
        <h2 id="services-title">Explore our cybersecurity services</h2>
        <p>
          Choose the concern you want to address, then review the service
          boundaries. Assessment, remediation, training and recurring support
          are different engagements.
        </p>
        <ul className="catalog-grid">
          {category.services.map((service) => {
            const copy = cyberCopy[service.id]!;
            const first = service.price.label
              .split(/\s*\/\s*(?=\$)/)[0]!
              .replace(/\+$/, "")
              .trim();
            return (
              <li
                className="catalog-card cyber-card"
                key={service.id}
                data-service-id={service.id}
              >
                <h3>
                  <Link href={service.href} prefetch={false}>
                    {service.name}
                  </Link>
                </h3>
                <p>{copy.summary}</p>
                <h4>What we can do</h4>
                <ul className="cyber-work-list" role="list">
                  {copy.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4>Tools &amp; Reference Guidance</h4>
                <ul className="cyber-reference-list">
                  {copy.references.map((reference) => (
                    <li key={reference}>{reference}</li>
                  ))}
                </ul>
                <Availability value={service.availability} />
                <p className="cyber-starting-price">
                  <strong>
                    {service.price.model === "custom"
                      ? first
                      : `Starting at ${first}${service.price.model === "monthly" ? "/month" : ""}`}
                  </strong>{" "}
                  USD
                </p>
                <div className="ui-actions">
                  <Link href={service.href} prefetch={false}>
                    View details →
                  </Link>
                  <Link
                    href={`${quote}&serviceId=${service.id}`}
                    prefetch={false}
                    aria-label={`Get a quote for ${service.name}`}
                  >
                    Get a Quote →
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="cyber-price-note">
          Indicative starting prices. Written scope, authorized targets,
          suitable delivery capability and billing terms are confirmed before
          work. Guidance references are not certifications or affiliations; no
          protection, compliance or response-time guarantee is implied.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">What security challenge are you facing?</h2>
        <p>
          For business owners, technical teams and risk stakeholders: describe
          the system and concern before choosing a testing or support scope.
        </p>
        <dl className="cyber-fit">
          {category.services.map((service) => (
            <div key={service.id}>
              <dt>{cyberCopy[service.id]?.need}</dt>
              <dd>
                <Link href={service.href}>{service.name} →</Link>
              </dd>
            </div>
          ))}
        </dl>
        <p>
          Not every concern requires penetration testing. We can discuss whether
          a focused review, approved configuration change, training or a
          specialist engagement is appropriate.
        </p>
        <Link href={quote}>Discuss a suitable security scope →</Link>
      </section>
      <CyberDeliverables />
      {examples.length > 0 && (
        <section className="catalog-section" aria-labelledby="cyber-work-title">
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="cyber-work-title">
            Explore security-review interface concepts
          </h2>
          <p>
            Visual studies of findings and access-review workflows—not evidence
            of real security testing, client outcomes or certification.
          </p>
          <div className="cyber-work-grid">
            {examples.map((project) => (
              <article key={project.slug}>
                <Link href={`/our-work/${project.slug}`}>
                  <Image
                    src={project.cover}
                    width={800}
                    height={520}
                    sizes="(min-width:768px) 45vw, 92vw"
                    alt={`Concept security-review interface: ${project.title}`}
                  />
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <Link href="/our-work?category=CAT-06">
            View more security interface studies →
          </Link>
        </section>
      )}
      <CyberProcess />
      <CyberResponsibilities />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your security questions, answered</h2>
        {cyberFaqs.map(([question, answer]) => (
          <details className="catalog-faq" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Let's clarify your security priorities.</h2>
        <p>
          Share the concern, the systems involved and what you need to
          understand or improve. Please keep credentials and sensitive evidence
          out of your inquiry.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <h3>Related business solutions</h3>
        <ul className="catalog-links">
          {category.relatedSolutions.map((solution) => (
            <li key={solution.href}>
              <Link href={solution.href}>{solution.name} →</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export function CyberServiceTemplate({ service }: { service: ServiceDetail }) {
  const copy = cyberCopy[service.id]!;
  const quote = `/get-a-quote?categoryId=CAT-06&serviceId=${service.id}`;
  return (
    <div className="cyber-service" data-service-variant={service.variant}>
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
          <ButtonLink href={quote}>Discuss the scope</ButtonLink>
          <ButtonLink href="#commercial-options" variant="secondary">
            Explore pricing options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#scope-title">Types of work</a>
        <a href="#references-title">Reference guidance</a>
        <a href="#commercial-options">Pricing &amp; scope</a>
        <a href="#cyber-responsibilities-title">Responsibilities</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Start with the concern and the boundaries</h2>
        <p>{copy.detail}</p>
        <dl className="cyber-fit">
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
          These are scope topics to discuss, not permission to begin testing or
          a promise that every item belongs in every option.
        </p>
        <ul className="cyber-detail-work" role="list">
          {copy.work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>Possible service deliverables</h3>
        <ul>
          {service.candidates.split(";").map((item) => (
            <li key={item}>{item.trim()}</li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="references-title">
        <h2 id="references-title">Tools &amp; reference guidance</h2>
        <ul className="cyber-reference-list">
          {copy.references.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
        <p>
          The engagement identifies the applicable guidance, versions and
          methods. References do not imply complete framework coverage,
          certification, accreditation or a provider partnership.
        </p>
      </section>
      <section
        className="catalog-section"
        id="commercial-options"
        aria-labelledby="commercial-title"
      >
        <h2 id="commercial-title">Pricing options &amp; scope</h2>
        <p>
          Compare the existing indicative options. The proposal confirms
          targets, methods, depth, deliverables, billing terms and exclusions.
        </p>
        <ol
          className="catalog-grid cyber-package-grid"
          aria-label="Indicative pricing options"
        >
          {service.prices.map((position, index) => (
            <li className="catalog-card" key={position.packageId}>
              <h3>
                {position.tierLabel ??
                  (service.variant === "custom"
                    ? "Custom scope"
                    : `Managed option ${index + 1}`)}
              </h3>
              <PricePresentation price={position.price} />
              <h4>
                {service.variant === "custom"
                  ? "Defined after scope and capability review"
                  : index === 0
                    ? "A focused scope to discuss"
                    : "A broader scope to review"}
              </h4>
              <ul>
                <li>Authorized systems, activities and exclusions</li>
                <li>Deliverables, evidence handling and verification</li>
                <li>Reporting, remediation and follow-up responsibilities</li>
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
      <CyberDeliverables />
      <section className="catalog-section" aria-labelledby="inputs-title">
        <h2 id="inputs-title">What to prepare</h2>
        <ul>
          {copy.inputs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Begin with the concern and a non-sensitive description. Passwords,
          private keys, vulnerability evidence and personal records should not
          be submitted through the inquiry form.
        </p>
      </section>
      <CyberProcess />
      <CyberResponsibilities />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before we get started</h2>
        {[
          ...service.faqs.map((faq) => [faq.question, faq.answer]),
          cyberFaqs[0],
          cyberFaqs[5],
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
        <h2 id="next-title">Tell us what you need to understand or improve.</h2>
        <p>
          We can discuss the appropriate review or support scope before any
          access or testing is arranged.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <p>
          <Link href={service.parent.href}>
            Explore all Cybersecurity services →
          </Link>
        </p>
      </section>
    </div>
  );
}
