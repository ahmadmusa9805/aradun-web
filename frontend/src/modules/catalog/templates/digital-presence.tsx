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
  presenceDeliveryTerms,
  presenceSituations,
  presenceServiceNeeds,
  presenceProcess,
  presenceFaqs,
} from "./digital-presence-copy";
export function DigitalPresenceTemplate({
  solution,
}: {
  solution: SolutionDetail;
}) {
  const quote = `/get-a-quote?solutionId=${solution.id}`;
  const examples =
    frontendEnv.appEnv === "development"
      ? conceptProjects.filter((p) => p.categoryId === "CAT-01").slice(0, 3)
      : [];
  return (
    <div className="digital-presence">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        current={solution.name}
      />
      <section className="catalog-hero" aria-labelledby="solution-title">
        <p className="catalog-eyebrow">Website · Brand · Customer inquiries</p>
        <h1 id="solution-title">{solution.name}</h1>
        <p className="presence-promise">
          Build a professional online presence for your business.
        </p>
        <p className="lead">
          Bring your website, selected branding and customer inquiry experience
          together in one clear solution—whether you are starting a business or
          improving an existing site.
        </p>
        <PricePresentation price={solution.prices[0]!.price} />
        <p>Domain, hosting and other third-party costs may be separate.</p>
        <div className="ui-actions">
          <ButtonLink href="#packages">Compare Options</ButtonLink>
          <ButtonLink href={quote} variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Is Digital Presence right for your business?</h2>
        <p>
          For startups, small businesses, professional service providers and
          growing companies that need a connected digital starting point.
        </p>
        <dl className="presence-situations">
          {presenceSituations.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">Services we can combine</h2>
        <p>
          A new website and a redesign are different starting points. Design,
          branding and landing-page work can complement either one; not every
          service is included in every package.
        </p>
        <dl className="presence-services">
          {solution.candidates.map((service) => (
            <div key={service.id}>
              <dt>
                <Link href={service.href}>{service.name}</Link>
              </dt>
              <dd>
                {presenceServiceNeeds[service.id] ??
                  "Discuss this service when it supports your website or brand goals."}
              </dd>
            </div>
          ))}
        </dl>
        <p>
          Your selected scope identifies the exact deliverables. A tailored
          proposal can combine the work you need without assuming a full bundle.
        </p>
      </section>
      <section
        className="catalog-section"
        id="packages"
        aria-labelledby="packages-title"
      >
        <h2 id="packages-title">Compare your Digital Presence options</h2>
        <p>
          Compare the included page allowances, design work, revision rounds and
          bug-fix support. Your proposal records the selected package, content,
          platform and any additions before work begins.
        </p>
        <SolutionPriceCards solution={solution} />
        <div className="presence-custom">
          <h3>Need something smaller or different?</h3>
          <p>
            Ask about a focused improvement, landing page or tailored
            combination. Custom work can cost less or more than these starting
            options, depending on scope.
          </p>
          <Link href={quote}>Discuss a tailored project →</Link>
        </div>
      </section>
      <section
        className="catalog-section presence-terms"
        aria-labelledby="delivery-terms-title"
      >
        <h2 id="delivery-terms-title">
          What to expect in your Digital Presence project
        </h2>
        <p>
          Standard packages include responsive implementation, testing of the
          agreed features, defined reviews and final handoff. Smaller custom
          improvements include only their agreed deliverables.
        </p>
        <dl className="presence-situations">
          {presenceDeliveryTerms.map(([title, text]) => (
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
          <h2 id="examples-title">Explore Digital Presence directions</h2>
          <p>
            Concept website studies showing different businesses and visitor
            journeys.
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
          {presenceProcess.map(([title, text], index) => (
            <li key={title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p>
          Timing depends on content readiness, selected scope and review stages.
          Ongoing maintenance is arranged separately unless included.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your Digital Presence questions, answered</h2>
        {presenceFaqs.map(([question, answer]) => (
          <details className="catalog-faq" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <section className="catalog-section" aria-labelledby="related-title">
        <h2 id="related-title">Other ways we can help</h2>
        <ul className="catalog-links">
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
        <h2 id="next-title">Build your next digital starting point.</h2>
        <p>
          Share your business, current website if you have one, and what you
          want customers to do next.
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
