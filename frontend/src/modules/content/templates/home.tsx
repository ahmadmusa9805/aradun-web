import { CategoryIcon } from "@/components/ui/category-icon";
import { WorldView } from "../components/world-view";
import { DemoProjects } from "../components/demo-projects";
import { DemoFeedback } from "../components/demo-feedback";
import { DemoPartners } from "../components/demo-partners";
import { frontendEnv } from "@/config/env.server";
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
const homeCategoryOrder = [0, 2, 3, 1, 4, 5, 6, 7] as const;

export function Home({ solutions = [] }: { solutions?: SolutionDetail[] }) {
  const showDemos = frontendEnv.appEnv === "development";
  return (
    <main id="main-content" tabIndex={-1} className="public-home">
      <div className="container-marketing">
        <section
          id="home-hero"
          className="home-hero"
          aria-labelledby="home-title"
        >
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
            <p className="home-support reference-description">
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
          </div>
          <WorldView />
        </section>
        <PublicSection title="Expertise for your next move" id="expertise">
          <p className="section-intro reference-description">
            Explore eight areas of technology and digital work. Start with a
            specific need or see how the pieces connect.
          </p>
          <div className="public-grid">
            {homeCategoryOrder.map((categoryIndex, index) => {
              const item = serviceCategories[categoryIndex]!;
              return (
                <article className="public-card" key={item.href}>
                  <span className="expertise-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <CategoryIcon index={categoryIndex} />
                  <h3>
                    <Link
                      prefetch={false}
                      href={item.href}
                      aria-describedby={`expertise-description-${index}`}
                    >
                      {item.label}
                    </Link>
                  </h3>
                  <span className="expertise-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                  <p
                    className="reference-description"
                    id={`expertise-description-${index}`}
                  >
                    {categoryDescriptions[categoryIndex]}
                  </p>
                </article>
              );
            })}
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
        <PublicSection
          title="Selected work and case studies"
          id="selected-work"
        >
          {showDemos ? (
            <>
              <DemoPartners />
              <DemoProjects />
            </>
          ) : (
            <div className="home-evidence-layout">
              <div>
                <p className="public-eyebrow">
                  The challenge. The thinking. The outcome.
                </p>
                <p className="section-intro">
                  Explore the context behind a project, the contribution made
                  and the outcome. Client work, internal products and concept
                  work are identified separately.
                </p>
                <Link
                  prefetch={false}
                  href="/our-work"
                  className="editorial-text-link"
                >
                  Explore our work &rarr;
                </Link>
              </div>
              <div className="home-evidence-empty">
                <span className="public-eyebrow">Project stories</span>
                <h3>Good work deserves context.</h3>
                <p>There are no published case studies to show yet.</p>
                <p>Have a project in mind? Tell us what you want to achieve.</p>
                <Link prefetch={false} href="/contact">
                  Discuss your project &rarr;
                </Link>
              </div>
            </div>
          )}
        </PublicSection>
        <PublicSection title="Why work with ARADUN" id="approach">
          <p className="section-intro">
            A clear approach to complex digital work.
          </p>
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
        <PublicSection title="How we work" id="process">
          <p className="section-intro">
            From your first idea to delivery and handoff.
          </p>
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
          title="Starting prices and engagement options"
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
        <PublicSection title="Client feedback" id="client-feedback">
          {showDemos ? (
            <DemoFeedback />
          ) : (
            <div className="feedback-empty">
              <p className="public-eyebrow">
                Working relationships, in their own words.
              </p>
              <h3>Real experiences. Shared with permission.</h3>
              <p>No client testimonials are published here yet.</p>
              <p>Feedback will appear here when it is available to share.</p>
              <Link prefetch={false} href="/contact">
                Start a conversation &rarr;
              </Link>
            </div>
          )}
        </PublicSection>
        <PublicSection title="Insights and resources" id="insights">
          <p className="section-intro">
            Practical guidance for your next digital decision. No articles are
            published yet; these help guides are available now.
          </p>
          <div className="home-resource-grid">
            {publicFaqs
              .filter((faq) =>
                ["not-sure", "starting-prices", "timelines"].includes(faq.id),
              )
              .map((faq) => (
                <article className="home-resource-card" key={faq.id}>
                  <p className="public-eyebrow">Help guide</p>
                  <h3>
                    <Link prefetch={false} href={`/faq/${faq.id}`}>
                      {faq.question}
                    </Link>
                  </h3>
                  <p>{faq.answer}</p>
                  <Link prefetch={false} href={`/faq/${faq.id}`}>
                    Read the guide &rarr;
                  </Link>
                </article>
              ))}
          </div>
          <Link
            prefetch={false}
            href="/insights"
            className="editorial-text-link"
          >
            Explore insights &rarr;
          </Link>
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
        <ProjectInvitation id="next-step" />
        <p className="public-preview">
          Development preview / Content and launch readiness await review.
        </p>
      </div>
    </main>
  );
}
