import Link from "next/link";
import Image from "next/image";
import type { SolutionDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { SolutionPriceCards } from "../components/solution-price-cards";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";
import {
  completeCombinations,
  completeTerms,
  completeSituations,
  completeGroups,
  completeProcess,
  completeFaqs,
} from "./complete-business-copy";
export function CompleteBusinessTemplate({
  solution,
}: {
  solution: SolutionDetail;
}) {
  const quote = `/get-a-quote?solutionId=${solution.id}`;
  const examples =
    frontendEnv.appEnv === "development"
      ? conceptProjects
          .filter((p) => ["CAT-01", "CAT-03", "CAT-04"].includes(p.categoryId))
          .slice(0, 3)
      : [];
  return (
    <div className="digital-presence complete-business">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        current={solution.name}
      />
      <section className="catalog-hero" aria-labelledby="solution-title">
        <p className="catalog-eyebrow">Build · Automate · Grow</p>
        <h1 id="solution-title">{solution.name}</h1>
        <p className="presence-promise">
          Bring your technology, automation and growth together.
        </p>
        <p className="lead">
          Identify priorities, connect the right services and deliver
          improvements through a practical plan. Start with a focused project or
          discuss a longer-term partnership around your goals and budget.
        </p>
        <p className="presence-custom-price">
          <strong>Custom project pricing</strong>
        </p>
        <p>
          Phased delivery can be discussed. Implementation, recurring services
          and third-party costs are identified separately.
        </p>
        <div className="ui-actions">
          <ButtonLink href="#packages">Compare Options</ButtonLink>
          <ButtonLink href={quote} variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">When does this solution make sense?</h2>
        <p>
          For startups, service providers and growing businesses with several
          connected digital needs.
        </p>
        <dl className="presence-situations">
          {completeSituations.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">Services we can bring together</h2>
        <p>
          Connect selected business areas around one goal. These categories
          describe possible work, not an automatic all-services bundle.
        </p>
        <dl className="presence-services complete-service-groups">
          {completeGroups.map(([title, services]) => (
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
        <h2 id="packages-title">Choose your engagement direction</h2>
        <p>
          Compare planning, staged implementation and longer-term support
          directions. Each option is custom-priced; your proposal defines the
          actual deliverables and commercial terms.
        </p>
        <SolutionPriceCards solution={solution} />
        <div className="presence-custom">
          <h3>Need something smaller or different?</h3>
          <p>
            Ask about a single service, focused improvement or smaller custom
            project. Custom pricing does not automatically mean an enterprise
            budget.
          </p>
          <Link href={quote}>Discuss a tailored project →</Link>
        </div>
      </section>
      <section
        className="catalog-section presence-terms"
        aria-labelledby="delivery-terms-title"
      >
        <h2 id="delivery-terms-title">
          How your project is priced and delivered
        </h2>
        <p>
          Your proposal separates implementation, recurring services and
          third-party charges. Confirm deliverables and responsibilities before
          committing.
        </p>
        <dl className="presence-situations">
          {completeTerms.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="measurement-title">
        <h2 id="measurement-title">
          What could a connected project look like?
        </h2>
        <p>
          Illustrative combinations only—not fixed packages or claims about
          completed client work. Select only the steps that fit your business.
        </p>
        <dl className="presence-situations">
          {completeCombinations.map(([title, text]) => (
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
          <h2 id="examples-title">Explore project directions</h2>
          <p>
            Independent design studies showing different interface and workflow
            directions, not commissioned client projects.
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
          {completeProcess.map(([title, text], index) => (
            <li key={title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p>
          Each stage begins only after scope and cost approval. Timing depends
          on dependencies, access, materials and review; later work remains
          optional.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">
          Your Complete Digital Business questions, answered
        </h2>
        {completeFaqs.map(([question, answer]) => (
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
        <h2 id="next-title">
          Find the right starting point for your business.
        </h2>
        <p>
          Tell us your goals, existing systems and most important challenge. We
          can discuss a useful sequence of work.
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
