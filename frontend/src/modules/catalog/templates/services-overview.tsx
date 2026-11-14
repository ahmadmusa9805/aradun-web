import Link from "next/link";
import type { CategorySummary } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { EngagementModels } from "../components/engagement-models";
import { CategoryIcon } from "@/components/ui/category-icon";
const needs: Record<string, string> = {
  "CAT-01": "Build or improve a website or software system",
  "CAT-02": "Launch or improve a mobile app",
  "CAT-03": "Connect workflows and reduce repetitive work",
  "CAT-04": "Improve your digital marketing",
  "CAT-05": "Improve deployment and cloud operations",
  "CAT-06": "Assess and improve your digital security",
  "CAT-07": "Clarify your brand and visual communication",
  "CAT-08": "Create or improve video and audio content",
};

export function ServicesOverview({
  categories,
}: {
  categories: CategorySummary[];
}) {
  return (
    <>
      <Breadcrumbs
        parents={[{ label: "Home", href: "/" }]}
        current="Services"
      />
      <section className="catalog-hero" aria-labelledby="services-title">
        <p className="catalog-eyebrow">Our services</p>
        <h1 id="services-title">Find the right services for your business.</h1>
        <p className="lead">
          Explore eight areas of technology and digital work. Choose a category
          to compare services, understand the possible scope and request a
          quote.
        </p>
        <div className="ui-actions">
          <ButtonLink href="#categories">Explore Services</ButtonLink>
          <ButtonLink href="/get-a-quote" variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section
        id="categories"
        className="catalog-section"
        aria-labelledby="category-directory-title"
      >
        <h2 id="category-directory-title">Explore our expertise</h2>
        <ol className="catalog-grid">
          {categories.map((category, index) => (
            <li key={category.id} className="catalog-card">
              <span className="catalog-number">
                {String(index + 1).padStart(2, "0")}
                <CategoryIcon index={index} />
              </span>
              <h3>
                <Link prefetch={false} href={category.href}>
                  {category.name}
                </Link>
              </h3>
              <p>{category.headline}</p>
              {category.representatives?.length ? (
                <ul
                  className="catalog-service-samples"
                  aria-label={`Example services in ${category.name}`}
                >
                  {category.representatives.map((service) => (
                    <li key={service.href}>
                      <Link prefetch={false} href={service.href}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link prefetch={false} href={category.href}>
                Explore {category.name}
              </Link>
            </li>
          ))}
        </ol>
      </section>
      <section className="catalog-section" aria-labelledby="choosing-title">
        <h2 id="choosing-title">Start with what you want to achieve</h2>
        <p>
          Start with what you want to achieve: a clearer online presence, a new
          application, less repetitive work, stronger marketing, or improvements
          to your technology.
        </p>
        <ul className="catalog-links">
          {categories.map((category) => (
            <li key={category.id}>
              <Link prefetch={false} href={category.href}>
                {needs[category.id] ?? category.headline}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="engagement-title">
        <h2 id="engagement-title">Choose the engagement that fits</h2>
        <p>
          Choose an individual service or discuss a combination. One-time,
          monthly, setup-plus-monthly and custom engagements depend on the
          selected offer.
        </p>
        <div className="ui-actions">
          <ButtonLink href="/solutions" variant="secondary">
            Explore Solutions
          </ButtonLink>
          <ButtonLink href="/pricing" variant="quiet">
            Pricing
          </ButtonLink>
        </div>
        <EngagementModels />
      </section>
      <section className="catalog-section" aria-labelledby="questions-title">
        <h2 id="questions-title">Before choosing a service</h2>
        {[
          {
            q: "How do I select a category?",
            a: "Start with a specific service, or explore the capabilities that support your business goal.",
            help: "not-sure",
          },
          {
            q: "Can I combine services?",
            a: "Choose an individual service or discuss a combination.",
            help: "services",
          },
          {
            q: "Are starting prices a final quote?",
            a: "No. Starting prices are indicative USD amounts. Final scope, billing units and third-party costs need confirmation in a proposal.",
            help: "starting-prices",
          },
          {
            q: "What if I am still defining the project?",
            a: "Tell us what you need, even if you are still defining the project.",
            help: "not-sure",
          },
        ].map((item) => (
          <details className="catalog-faq" key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
            <p>
              <Link prefetch={false} href={`/faq/${item.help}`}>
                Read the detailed guide
              </Link>
            </p>
          </details>
        ))}
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Tell us what you need</h2>
        <p>
          Tell us what you need, even if you are still defining the project.
        </p>
        <div className="ui-actions">
          <ButtonLink href="/get-a-quote">Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
