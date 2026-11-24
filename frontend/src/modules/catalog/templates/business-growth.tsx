import Link from "next/link";
import Image from "next/image";
import type { SolutionDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { PricePresentation } from "../components/price-presentation";
import { SolutionPriceCards } from "../components/solution-price-cards";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";
import {
  growthMeasurements,
  growthTerms,
  growthSituations,
  growthServiceGroups,
  growthProcess,
  growthFaqs,
} from "./business-growth-copy";
export function BusinessGrowthTemplate({
  solution,
}: {
  solution: SolutionDetail;
}) {
  const quote = `/get-a-quote?solutionId=${solution.id}`;
  const examples =
    frontendEnv.appEnv === "development"
      ? conceptProjects.filter((p) => p.categoryId === "CAT-04").slice(0, 3)
      : [];
  return (
    <div className="digital-presence business-growth">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        current={solution.name}
      />
      <section className="catalog-hero" aria-labelledby="solution-title">
        <p className="catalog-eyebrow">Visibility · Campaigns · Measurement</p>
        <h1 id="solution-title">{solution.name}</h1>
        <p className="presence-promise">
          Reach more customers. Improve your marketing. Grow with a clear plan.
        </p>
        <p className="lead">
          Bring search visibility, digital advertising, social media and content
          around your business goals. Prioritize the work, execute the agreed
          plan and review the evidence.
        </p>
        <PricePresentation price={solution.prices[0]!.price} />
        <p>
          Advertising spend and third-party costs are separate from your
          marketing management fee.
        </p>
        <div className="ui-actions">
          <ButtonLink href="#packages">Compare Options</ButtonLink>
          <ButtonLink href={quote} variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">What would you like to improve?</h2>
        <p>
          For small businesses, service providers, startups and marketing teams
          that need clearer priorities and coordinated activity.
        </p>
        <dl className="presence-situations">
          {growthSituations.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">Marketing services we can combine</h2>
        <p>
          Choose the services that support your goals. Each package includes
          only the work agreed in your proposal.
        </p>
        <dl className="presence-services growth-service-groups">
          {growthServiceGroups.map(([title, services]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>
                <ul className="catalog-links">
                  {services.map(([name, href]) => (
                    <li key={href}>
                      <Link href={href}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section
        className="catalog-section"
        id="packages"
        aria-labelledby="packages-title"
      >
        <h2 id="packages-title">Compare your Business Growth options</h2>
        <p>
          Compare a focused marketing direction with a more coordinated
          approach. Agree selected channels, monthly activities, reporting and
          content quantities before starting.
        </p>
        <SolutionPriceCards solution={solution} />
        <div className="presence-custom">
          <h3>Need something smaller or different?</h3>
          <p>
            Ask about a one-time audit, campaign setup, consulting or another
            defined task. Custom work can cost less or more than a monthly
            engagement, depending on scope.
          </p>
          <Link href={quote}>Discuss a tailored project →</Link>
        </div>
      </section>
      <section
        className="catalog-section presence-terms"
        aria-labelledby="delivery-terms-title"
      >
        <h2 id="delivery-terms-title">
          Marketing fees & ongoing responsibilities
        </h2>
        <p>
          Understand the monthly management fee, separate budgets and delivery
          terms before you commit. Custom projects include only the work agreed
          in their proposal.
        </p>
        <dl className="presence-situations">
          {growthTerms.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="measurement-title">
        <h2 id="measurement-title">How we measure progress</h2>
        <p>
          Choose measurements that fit the activity and available data. Reports
          distinguish work completed, observed results and next steps.
        </p>
        <dl className="presence-situations">
          {growthMeasurements.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      {examples.length > 0 && (
        <section className="catalog-section" aria-labelledby="examples-title">
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="examples-title">Explore marketing project directions</h2>
          <p>
            Independent design studies showing campaign, content-planning and
            inquiry directions—not evidence of client campaign results.
          </p>
          <div className="presence-examples">
            {examples.map((project) => (
              <article key={project.slug}>
                <Link href={`/our-work/${project.slug}`}>
                  <Image
                    src={project.cover}
                    alt={`Design study: ${project.title}`}
                    width={800}
                    height={520}
                    sizes="(min-width:1200px) 30vw, (min-width:640px) 45vw, 92vw"
                  />
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
                <Link href={`/our-work/${project.slug}`}>
                  Explore the design approach →
                </Link>
              </article>
            ))}
          </div>
          <Link href="/our-work">View all projects →</Link>
        </section>
      )}
      <section className="catalog-section" aria-labelledby="delivery-title">
        <h2 id="delivery-title">How we approach the work</h2>
        <ol className="presence-process">
          {growthProcess.map(([title, text], index) => (
            <li key={title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p>
          The delivery calendar depends on access, content readiness, approvals
          and selected channels. Changes to scope or budgets require agreement.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your Business Growth questions, answered</h2>
        {growthFaqs.map(([question, answer]) => (
          <details className="catalog-faq" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <section className="catalog-section" aria-labelledby="related-title">
        <h2 id="related-title">Other ways we can help</h2>
        <ul className="catalog-links">
          <li>
            <Link href="/solutions/business-automation">
              Business Automation
            </Link>
          </li>
          {solution.related.map((item) => (
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
        <h2 id="next-title">Give your marketing a clearer next step.</h2>
        <p>
          Tell us your audience, current channels and the marketing priority you
          want to address.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
