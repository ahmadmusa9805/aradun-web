import Link from "next/link";
import Image from "next/image";
import type { CategoryDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";
import {
  webCapabilities,
  webFaqs,
  webProcess,
  webServiceGuidance,
} from "./web-category-copy";

export function WebCategoryTemplate({
  category,
}: {
  category: CategoryDetail;
}) {
  const quote = `/get-a-quote?categoryId=${category.id}`;
  const studies =
    frontendEnv.appEnv === "development"
      ? conceptProjects
          .filter((project) => project.categoryId === category.id)
          .slice(0, 2)
      : [];
  return (
    <div className="web-category">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">Built around your next business move</p>
        <h1 id="category-title">{category.name}</h1>
        <p className="web-hero-promise">
          Build websites and software that move your business forward.
        </p>
        <p className="lead">
          From professional business websites and online stores to custom web
          applications, we help turn your goals into a digital experience that
          makes sense for your business and the people using it.
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
        <p className="catalog-eyebrow">Choose your starting point</p>
        <h2 id="services-title">Explore our web &amp; software services</h2>
        <p>
          Start with what you want to achieve. Explore the details of each
          service, or tell us about your project if you are still deciding.
        </p>
        <ul className="catalog-grid">
          {category.services.map((service) => {
            const copy = webServiceGuidance[service.id];
            return (
              <li
                className="catalog-card web-service-card"
                key={service.id}
                data-service-id={service.id}
              >
                <h3>
                  <Link href={service.href} prefetch={false}>
                    {service.name}
                  </Link>
                </h3>
                <p>{copy?.summary ?? service.summary}</p>
                {copy && (
                  <p className="web-service-examples">
                    <strong>Common projects</strong>
                    <br />
                    {copy.examples}
                  </p>
                )}
                <Availability value={service.availability} />
                <p className="web-starting-price">
                  <strong>
                    {service.price.model === "custom"
                      ? service.price.label
                      : `From ${service.price.label
                          .split(/\s*\/\s*(?=\$)/)[0]!
                          .replace(/\+$/, "")
                          .trim()}${service.price.model === "monthly" ? "/month" : ""}`}
                  </strong>{" "}
                  USD
                </p>
                <div className="ui-actions">
                  <Link href={service.href} prefetch={false}>
                    View service details →
                  </Link>
                  <Link
                    href={`/get-a-quote?serviceId=${service.id}&categoryId=${category.id}`}
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
        <p className="web-pricing-note">
          Indicative starting prices. Final pricing depends on your project
          scope; each service page explains the available price options and
          billing details.
        </p>
      </section>

      <section className="catalog-section" aria-labelledby="capabilities-title">
        <p className="catalog-eyebrow">Beyond a service name</p>
        <h2 id="capabilities-title">Common projects &amp; capabilities</h2>
        <p>
          Your requirement may be more specific than a service title. These are
          useful starting points to discuss; the proposal defines what your
          project includes.
        </p>
        <ul className="web-capability-grid">
          {webCapabilities.map((capability) => {
            const service = category.services.find(
              (item) => item.id === capability.serviceId,
            );
            return (
              <li key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                {service && (
                  <Link href={service.href} prefetch={false}>
                    Explore {service.name} →
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Not sure which service fits?</h2>
        <p>
          Match your immediate goal to a starting point. We can help you
          separate the essentials from work that can wait.
        </p>
        <dl className="web-service-guide">
          {category.services.map((service) => (
            <div key={service.id}>
              <dt>{webServiceGuidance[service.id]?.need ?? service.name}</dt>
              <dd>
                <Link href={service.href} prefetch={false}>
                  {service.name} →
                </Link>
              </dd>
            </div>
          ))}
        </dl>
        <p>
          A landing page or a focused website fix does not necessarily need a
          full rebuild or an ongoing support plan. Describe the task so we can
          review the best fit.
        </p>
        <Link href={quote}>Tell us what you have in mind →</Link>
      </section>

      {studies.length > 0 && (
        <section className="catalog-section" aria-labelledby="web-work-title">
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="web-work-title">Explore web design directions</h2>
          <p>
            Concept examples showing different approaches to structure, service
            discovery and inquiry journeys.
          </p>
          <div className="web-work-grid">
            {studies.map((study) => (
              <article key={study.slug}>
                <Link href={`/our-work/${study.slug}`}>
                  <Image
                    src={study.cover}
                    width={800}
                    height={520}
                    sizes="(min-width:768px) 45vw, 92vw"
                    alt={`Concept website: ${study.title}`}
                  />
                  <h3>{study.title}</h3>
                </Link>
                <p>{study.description}</p>
              </article>
            ))}
          </div>
          <Link href="/our-work?category=CAT-01">View more web projects →</Link>
        </section>
      )}

      <section className="catalog-section" aria-labelledby="process-title">
        <h2 id="process-title">How we work</h2>
        <p>A clear process, with the business goal guiding each decision.</p>
        <ol className="web-delivery-process">
          {webProcess.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p>
          Have an existing website? Share its address and the main issue. For a
          new project, bring your goals, audience and any content you already
          have.
        </p>
      </section>

      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Web &amp; software questions, answered</h2>
        {webFaqs.map((faq) => (
          <details className="catalog-faq" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <p className="catalog-eyebrow">Let's find your starting point</p>
        <h2 id="next-title">Tell us what you want to build or improve.</h2>
        <p>
          A new website, a better customer journey or a tool that makes work
          easier—start with the goal, and we will help clarify the next step.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <h3>Looking for a connected business solution?</h3>
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
