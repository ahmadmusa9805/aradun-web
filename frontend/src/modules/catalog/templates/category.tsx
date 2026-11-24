import type { CategoryDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { PricePresentation } from "../components/price-presentation";
import Link from "next/link";
import { Availability } from "../components/availability";
import { CategoryIcon } from "@/components/ui/category-icon";
import { WebCategoryTemplate } from "./web-category";

export function CategoryTemplate({ category }: { category: CategoryDetail }) {
  if (category.id === "CAT-01")
    return <WebCategoryTemplate category={category} />;
  const quote = `/get-a-quote?categoryId=${encodeURIComponent(category.id)}`;
  return (
    <>
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">
          <CategoryIcon index={Number(category.id.slice(-2)) - 1} />
          {category.headline}
        </p>
        <h1 id="category-title">{category.name}</h1>
        <p className="lead">{category.intro}</p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="#category-services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </section>
      <section
        id="category-services"
        className="catalog-section"
        aria-labelledby="services-title"
      >
        <h2 id="services-title">Services in this category</h2>
        <ul className="catalog-grid">
          {category.services.map((service) => (
            <li
              key={service.id}
              className="catalog-card"
              data-service-id={service.id}
            >
              <h3>
                <Link href={service.href} prefetch={false}>
                  {service.name}
                </Link>
              </h3>
              {service.summary && <p>{service.summary}</p>}
              <Availability value={service.availability} />
              <PricePresentation price={service.price} />
              <Link
                prefetch={false}
                href={`/get-a-quote?serviceId=${encodeURIComponent(service.id)}&categoryId=${encodeURIComponent(category.id)}`}
                aria-label={`Discuss this service: ${service.name}`}
              >
                Discuss this service
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Which service fits your need?</h2>
        <ul className="catalog-links">
          {category.guide.split(";").map((part) => {
            const service = category.services.find((item) =>
              part.includes(item.name),
            );
            return (
              <li key={part}>
                {service ? (
                  <Link prefetch={false} href={service.href}>
                    {part.trim()}
                  </Link>
                ) : (
                  part.trim()
                )}
              </li>
            );
          })}
        </ul>
        <dl className="catalog-fit">
          <div>
            <dt>Who this is for</dt>
            <dd>{category.audience}</dd>
          </div>
          <div>
            <dt>Your starting point</dt>
            <dd>{category.problem}</dd>
          </div>
        </dl>
      </section>
      {/* Source region 4: genuine relevant-work evidence is omitted until permitted assets exist. */}
      <section className="catalog-section" aria-labelledby="process-title">
        <h2 id="process-title">How engagements work</h2>
        <ol className="catalog-process">
          {category.process
            .replace(/\.$/, "")
            .split(";")
            .map((step) => (
              <li key={step}>{step.trim()}</li>
            ))}
        </ol>
        <p>
          Share your goal, existing setup, constraints and available materials.
          Sensitive access is exchanged only through an agreed secure process.
        </p>
        <p className="section-link">
          <Link prefetch={false} href="/pricing">
            Compare pricing and engagement models
          </Link>{" "}
          or{" "}
          <Link prefetch={false} href="/faq/not-sure">
            get help choosing a starting point
          </Link>
          .
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Category FAQs</h2>
        {category.faqs.map((faq) => (
          <details className="catalog-faq" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
        <p className="section-link">
          <Link prefetch={false} href="/faq/services">
            Combining services
          </Link>{" "}
          ·{" "}
          <Link prefetch={false} href="/faq/starting-prices">
            Understanding starting prices
          </Link>
        </p>
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Discuss your {category.name} requirements</h2>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <ul className="catalog-links">
          {category.relatedSolutions.map((solution) => (
            <li key={solution.href}>
              <Link prefetch={false} href={solution.href}>
                {solution.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
