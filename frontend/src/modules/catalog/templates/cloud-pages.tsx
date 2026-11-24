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
  cloudCopy,
  cloudProcess,
  cloudResponsibilities,
  cloudFaqs,
} from "./cloud-copy";

function CloudProcess() {
  return (
    <section className="catalog-section" aria-labelledby="cloud-process-title">
      <h2 id="cloud-process-title">How we work</h2>
      <ol className="cloud-process">
        {cloudProcess.map(([title, text], index) => (
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
function CloudResponsibilities() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="cloud-responsibilities-title"
    >
      <h2 id="cloud-responsibilities-title">
        Cloud costs &amp; ongoing responsibilities
      </h2>
      <dl className="cloud-responsibilities">
        {cloudResponsibilities.map(([title, text]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
export function CloudCategoryTemplate({
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
    <div className="cloud-category">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">
          Infrastructure · Deployment · Operations
        </p>
        <h1 id="category-title">{category.name}</h1>
        <p className="cloud-promise">
          Build a clearer foundation for deploying and operating your
          applications.
        </p>
        <p className="lead">
          We help you set up cloud environments, make releases more repeatable
          and understand the systems supporting your applications—with clear
          decisions about access, costs and ownership.
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
        <h2 id="services-title">Explore our cloud &amp; DevOps services</h2>
        <p>
          Start with the work you need: an environment, a deployment, a delivery
          workflow or better-defined ongoing operation.
        </p>
        <ul className="catalog-grid">
          {category.services.map((service) => {
            const copy = cloudCopy[service.id]!;
            const first = service.price.label
              .split(/\s*\/\s*(?=\$)/)[0]!
              .replace(/\+$/, "")
              .trim();
            return (
              <li
                className="catalog-card cloud-card"
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
                <ul className="cloud-work-list" role="list">
                  {copy.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4>Tools &amp; Platforms</h4>
                <ul className="cloud-tool-list">
                  {copy.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <Availability value={service.availability} />
                <p className="cloud-starting-price">
                  <strong>
                    Starting at {first}
                    {service.price.model === "monthly" ? "/month" : ""}
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
        <p className="cloud-price-note">
          Indicative starting prices. Your proposal confirms the environment,
          work, billing terms and responsibilities. Provider bills and
          third-party usage are separate unless expressly included. Tools are
          examples to evaluate, not automatic package inclusions.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">What do you need help with?</h2>
        <p>
          For technical founders, engineering teams and businesses with existing
          applications: describe the problem first, even if you are unsure which
          service name fits.
        </p>
        <dl className="cloud-fit">
          {category.services.map((service) => (
            <div key={service.id}>
              <dt>{cloudCopy[service.id]?.need}</dt>
              <dd>
                <Link href={service.href}>{service.name} →</Link>
              </dd>
            </div>
          ))}
        </dl>
        <h3>Planning a server or cloud move?</h3>
        <p>
          Tell us where the application runs now, the intended target and the
          data involved. We can review migration requirements under
          infrastructure or deployment and agree a separate scope where needed.
        </p>
        <Link href={quote}>Discuss your environment →</Link>
      </section>
      {examples.length > 0 && (
        <section className="catalog-section" aria-labelledby="cloud-work-title">
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="cloud-work-title">
            Explore operational interface directions
          </h2>
          <p>
            Concept visuals for release and cloud visibility—not evidence of
            deployed client infrastructure or measured availability.
          </p>
          <div className="cloud-work-grid">
            {examples.map((project) => (
              <article key={project.slug}>
                <Link href={`/our-work/${project.slug}`}>
                  <Image
                    src={project.cover}
                    width={800}
                    height={520}
                    sizes="(min-width:768px) 45vw, 92vw"
                    alt={`Concept operations interface: ${project.title}`}
                  />
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <Link href="/our-work?category=CAT-05">
            View more cloud studies →
          </Link>
        </section>
      )}
      <CloudProcess />
      <CloudResponsibilities />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your cloud questions, answered</h2>
        {cloudFaqs.map(([question, answer]) => (
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
        <h2 id="next-title">Let's clarify your infrastructure's next step.</h2>
        <p>
          A first deployment, a delivery bottleneck or an existing environment
          that needs attention—share the context and the result you need.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <h3>Looking for a broader solution?</h3>
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
export function CloudServiceTemplate({ service }: { service: ServiceDetail }) {
  const copy = cloudCopy[service.id]!;
  const quote = `/get-a-quote?categoryId=CAT-05&serviceId=${service.id}`;
  return (
    <div className="cloud-service" data-service-variant={service.variant}>
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
          <ButtonLink href={quote}>Discuss your environment</ButtonLink>
          <ButtonLink href="#commercial-options" variant="secondary">
            Explore pricing options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#scope-title">Types of work</a>
        <a href="#tools-title">Tools &amp; Platforms</a>
        <a href="#commercial-options">Pricing &amp; scope</a>
        <a href="#cloud-responsibilities-title">Responsibilities</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Start with the environment and the goal</h2>
        <p>{copy.detail}</p>
        <dl className="cloud-fit">
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
          Use these work types to identify the help you need. The proposal
          confirms the tasks, targets and verification included.
        </p>
        <ul className="cloud-detail-work" role="list">
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
        <ul className="cloud-tool-list">
          {copy.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <p>
          We assess compatibility, account permissions and your existing setup
          before choosing tools. Examples are not provider endorsements,
          certifications or a commitment to every platform.
        </p>
      </section>
      <section
        className="catalog-section"
        id="commercial-options"
        aria-labelledby="commercial-title"
      >
        <h2 id="commercial-title">Pricing options &amp; scope</h2>
        <p>
          Compare the existing indicative options, then agree the work
          appropriate to your environment. Fixed resource counts, coverage and
          response commitments are not assumed from a starting price.
        </p>
        <ol
          className="catalog-grid cloud-package-grid"
          aria-label="Indicative pricing options"
        >
          {service.prices.map((position, index) => (
            <li className="catalog-card" key={position.packageId}>
              <h3>{position.tierLabel ?? `Managed option ${index + 1}`}</h3>
              <PricePresentation price={position.price} />
              <h4>
                {index === 0
                  ? "A focused starting scope"
                  : "A broader scope to discuss"}
              </h4>
              <ul>
                <li>Systems, resources and access boundaries</li>
                <li>Implementation tasks and verification evidence</li>
                <li>Handover, provider costs and operating responsibilities</li>
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
          Share the environment and the issue first. Credentials, private keys
          and sensitive logs are exchanged only through an agreed secure
          process.
        </p>
      </section>
      <CloudProcess />
      <CloudResponsibilities />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before we get started</h2>
        {[
          ...service.faqs.map((faq) => [faq.question, faq.answer]),
          cloudFaqs[1],
          cloudFaqs[6],
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
        <h2 id="next-title">Tell us what needs to work better.</h2>
        <p>
          Describe the application, current environment and the operational
          problem you want to solve.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <p>
          <Link href={service.parent.href}>
            Explore all Cloud &amp; DevOps services →
          </Link>
        </p>
      </section>
    </div>
  );
}
