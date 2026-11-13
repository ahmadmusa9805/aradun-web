import Link from "next/link";
import {
  serviceCategories,
  businessSolutions,
} from "@/components/layout/public-navigation";
import {
  categoryDescriptions,
  solutionDescriptions,
  publicFaqs,
  principles,
  deliverySteps,
} from "../data/public-copy";
import { PublicSection, ProjectInvitation } from "./public-page";
import type { SolutionDetail } from "@/modules/catalog/catalog-api.server";
import { PricePresentation } from "@/modules/catalog/components/price-presentation";
import { EngagementModels } from "@/modules/catalog/components/engagement-models";
export function Home({ solutions = [] }: { solutions?: SolutionDetail[] }) {
  return (
    <main id="main-content" tabIndex={-1} className="public-home">
      <div className="container-marketing">
        <p className="public-preview">
          Development preview / Content and launch readiness await review.
        </p>
        <section className="home-hero" aria-labelledby="home-title">
          <div>
            <p className="public-eyebrow">
              ARADUN / Technology &amp; Digital Solutions
            </p>
            <h1 id="home-title">
              Build.
              <br />
              Automate.
              <br />
              <span>Grow.</span>
            </h1>
            <p className="lead">
              Technology and digital services to build, automate, and grow your
              business.
            </p>
            <p className="home-support">
              From websites and software to automation, design, cloud, security,
              and marketing - connect your digital needs around a clear plan.
            </p>
            <div className="ui-actions">
              <Link
                prefetch={false}
                className="ui-button ui-button-primary"
                href="/get-a-quote"
              >
                Get a Quote <span aria-hidden="true">↗</span>
              </Link>
              <Link
                prefetch={false}
                className="ui-button ui-button-secondary"
                href="/services"
              >
                Explore Services
              </Link>
            </div>
            <p className="home-guidance">
              Not sure where to start?{" "}
              <Link prefetch={false} href="/consultation">
                Discuss your goals in a consultation request.
              </Link>
            </p>
          </div>
          <div className="home-diagram" aria-hidden="true">
            <span>A connected approach</span>
            <div className="diagram-orbit">
              <span>
                Business
                <br />
                needs
              </span>
            </div>
            <div className="diagram-steps">
              <span>01 / Build</span>
              <span>02 / Automate</span>
              <span>03 / Grow</span>
            </div>
            <p>Clear scope. Connected capabilities.</p>
          </div>
        </section>
        <PublicSection
          title="Find the expertise your next project needs."
          id="expertise"
        >
          <p className="section-intro">
            Explore eight areas of technology and digital work. Start with a
            specific need or see how the pieces connect.
          </p>
          <div className="public-grid">
            {serviceCategories.map((item, index) => (
              <article className="public-card" key={item.href}>
                <span className="public-eyebrow">0{index + 1} / Expertise</span>
                <h3>
                  <Link prefetch={false} href={item.href}>
                    {item.label}
                  </Link>
                </h3>
                <p>{categoryDescriptions[index]}</p>
                <Link prefetch={false} href={item.href}>
                  Explore category &rarr;
                </Link>
              </article>
            ))}
          </div>
          <p className="section-link">
            <Link prefetch={false} href="/services">
              View All Services &rarr;
            </Link>
          </p>
        </PublicSection>
        <PublicSection title="Start with your business goal." id="solutions">
          <p className="section-intro">
            Explore a coordinated direction for your business. The services and
            responsibilities included are defined in your agreed scope, not by a
            solution name alone.
          </p>
          <div className="solution-list">
            {businessSolutions.map((item, index) => (
              <article key={item.href}>
                <span className="public-eyebrow">0{index + 1}</span>
                <h3>
                  <Link prefetch={false} href={item.href}>
                    {item.label}
                  </Link>
                </h3>
                <p>{solutionDescriptions[index]}</p>
                <Link prefetch={false} href={item.href}>
                  Explore Solution &rarr;
                </Link>
              </article>
            ))}
          </div>
        </PublicSection>
        {/* T-HOME 4/8/9: omit unavailable genuine work, testimonials and published articles; never fabricate proof. */}
        <PublicSection
          title="A clear approach to complex digital work."
          id="approach"
        >
          <div className="public-grid principles">
            {principles.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="section-link">
            <Link prefetch={false} href="/about">
              About ARADUN &rarr;
            </Link>
          </p>
        </PublicSection>
        <PublicSection
          title="From your first idea to delivery and handoff."
          id="process"
        >
          <ol className="delivery-steps">
            {deliverySteps.map(([title, copy]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
          <p className="section-link">
            <Link prefetch={false} href="/get-a-quote">
              Tell us about your project &rarr;
            </Link>
          </p>
        </PublicSection>
        <PublicSection
          title="Starting points for your next investment."
          id="starting-prices"
        >
          <p className="section-intro">
            Choose an individual service or discuss a coordinated solution.
            Prices are indicative USD starting points; scope, billing terms and
            external costs must be agreed.
          </p>
          {solutions.length === 5 ? (
            <div className="public-grid">
              {solutions.map((item) => (
                <article className="public-card" key={item.id}>
                  <h3>
                    <Link prefetch={false} href={item.href}>
                      {item.name}
                    </Link>
                  </h3>
                  <PricePresentation price={item.prices[0]!.price} />
                </article>
              ))}
            </div>
          ) : (
            <p>
              Explore the service and solution pages for current indicative
              price information.
            </p>
          )}
          <p className="section-link">
            <Link prefetch={false} href="/pricing">
              Pricing &amp; Packages &rarr;
            </Link>
          </p>
          <EngagementModels />
        </PublicSection>
        <PublicSection title="Before you start." id="questions">
          {publicFaqs.map((faq) => (
            <details className="catalog-faq" key={faq.id}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
              <p>
                <Link prefetch={false} href={`/faq/${faq.id}`}>
                  Read the detailed guide
                </Link>
              </p>
            </details>
          ))}
          <p className="section-link">
            <Link prefetch={false} href="/faq">
              FAQs &amp; Help &rarr;
            </Link>
          </p>
        </PublicSection>
        <ProjectInvitation />
      </div>
    </main>
  );
}
