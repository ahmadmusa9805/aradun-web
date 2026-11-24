import Link from "next/link";
import Image from "next/image";
import type { CategoryDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";
import {
  mobileCopy,
  mobileProcess,
  mobileConsiderations,
  mobileFaqs,
} from "./mobile-copy";

export function MobileCategoryTemplate({
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
    <div className="mobile-category">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">Plan the right mobile experience</p>
        <h1 id="category-title">{category.name}</h1>
        <p className="mobile-promise">
          Turn your app idea into something useful—or improve the app you
          already have.
        </p>
        <p className="lead">
          We help businesses plan, design, develop and maintain mobile
          applications around real customer and team needs, with clear decisions
          about platforms, features and ownership.
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
        <h2 id="services-title">Explore our mobile app services</h2>
        <p>
          Choose your starting point—from design and a first useful release to
          commerce, custom workflows or ongoing care.
        </p>
        <ul className="catalog-grid">
          {category.services.map((service) => {
            const copy = mobileCopy[service.id]!;
            const first = service.price.label
              .split(/\s*\/\s*(?=\$)/)[0]!
              .replace(/\+$/, "")
              .trim();
            return (
              <li
                className="catalog-card mobile-card"
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
                <ul className="mobile-work-list" role="list">
                  {copy.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4>Technologies &amp; Platforms</h4>
                <ul className="mobile-tool-list">
                  {copy.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <Availability value={service.availability} />
                <p className="mobile-starting-price">
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
        <p className="mobile-price-note">
          Indicative starting prices. Your proposal defines the platforms,
          features, billing terms and included work. Technology examples are
          evaluated for your project; accounts, subscriptions and usage charges
          are not automatically included.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">What do you want to build or improve?</h2>
        <p>
          For founders, business owners, product teams and existing app owners:
          start with the task you need people to complete.
        </p>
        <dl className="mobile-fit">
          {category.services.map((service) => (
            <div key={service.id}>
              <dt>{mobileCopy[service.id]?.need}</dt>
              <dd>
                <Link href={service.href}>{service.name} →</Link>
              </dd>
            </div>
          ))}
        </dl>
        <h3>Need a smaller fix or help publishing?</h3>
        <p>
          Tell us about the current app, the issue and the access you have. We
          can review a one-off repair, upgrade or submission requirement before
          recommending a separate scope or ongoing care.
        </p>
        <p>
          Not every idea needs an app. If a responsive website would meet the
          need more simply, we can compare that option with you.
        </p>
        <div className="ui-actions">
          <Link href={quote}>Discuss your app requirement →</Link>
          <Link href="/services/web-software-development">
            Compare website development
          </Link>
        </div>
      </section>
      {examples.length > 0 && (
        <section
          className="catalog-section"
          aria-labelledby="mobile-work-title"
        >
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="mobile-work-title">Explore mobile experience directions</h2>
          <p>
            Concept examples showing different mobile journeys, not published
            client applications or measured results.
          </p>
          <div className="mobile-work-grid">
            {examples.map((project) => (
              <article key={project.slug}>
                <Link href={`/our-work/${project.slug}`}>
                  <Image
                    src={project.cover}
                    width={800}
                    height={520}
                    sizes="(min-width:768px) 45vw, 92vw"
                    alt={`Concept app: ${project.title}`}
                  />
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <Link href="/our-work?category=CAT-02">
            View more mobile studies →
          </Link>
        </section>
      )}
      <MobileProcess />
      <MobileConsiderations />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your mobile app questions, answered</h2>
        {mobileFaqs.map(([question, answer]) => (
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
        <h2 id="next-title">Let's talk about your app's next step.</h2>
        <p>
          A new idea, a clearer design or an existing app that needs
          attention—share the goal and we will help identify a practical
          starting point.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <h3>Exploring a broader digital solution?</h3>
        <p>
          Related solutions are starting points for a wider discussion; app
          development is included only when your proposal explicitly states it.
        </p>
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
export function MobileProcess({
  mode = "delivery",
}: {
  mode?: "delivery" | "design" | "maintenance";
}) {
  const process =
    mode === "design"
      ? [
          ["Understand", "Review users, tasks and the design brief."],
          ["Map journeys", "Plan screen structure and navigation."],
          [
            "Design",
            "Develop the agreed visual direction and component patterns.",
          ],
          [
            "Prototype & review",
            "Explore interactions and refine the agreed design work.",
          ],
          [
            "Handover",
            "Prepare design files and implementation notes; app coding is separate.",
          ],
        ]
      : mode === "maintenance"
        ? [
            [
              "Review",
              "Assess the existing app, dependencies and known issues.",
            ],
            [
              "Define coverage",
              "Agree supported versions, routine work and change limits.",
            ],
            [
              "Prepare access",
              "Arrange appropriate access and a safe test process.",
            ],
            [
              "Maintain & verify",
              "Perform agreed updates and check affected journeys.",
            ],
            [
              "Report & review",
              "Record completed work and identify separately scoped needs.",
            ],
          ]
        : mobileProcess;
  return (
    <section className="catalog-section" aria-labelledby="mobile-process-title">
      <h2 id="mobile-process-title">How we build mobile experiences</h2>
      <ol className="mobile-process">
        {process.map(([title, text], index) => (
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
export function MobileConsiderations() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="mobile-considerations-title"
    >
      <h2 id="mobile-considerations-title">
        Platforms, ownership &amp; launch considerations
      </h2>
      <dl className="mobile-considerations">
        {mobileConsiderations.map(([title, text]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
