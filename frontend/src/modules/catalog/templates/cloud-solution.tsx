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
  cloudSolutionPlatforms,
  cloudSolutionTerms,
  cloudSolutionSituations,
  cloudSolutionGroups,
  cloudSolutionProcess,
  cloudSolutionFaqs,
} from "./cloud-solution-copy";
export function CloudSolutionTemplate({
  solution,
}: {
  solution: SolutionDetail;
}) {
  const quote = `/get-a-quote?solutionId=${solution.id}`;
  const examples =
    frontendEnv.appEnv === "development"
      ? conceptProjects.filter((p) => p.categoryId === "CAT-05").slice(0, 3)
      : [];
  return (
    <div className="digital-presence cloud-solution">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        current={solution.name}
      />
      <section className="catalog-hero" aria-labelledby="solution-title">
        <p className="catalog-eyebrow">Hosting · Releases · Operations</p>
        <h1 id="solution-title">{solution.name}</h1>
        <p className="presence-promise">
          Deploy and improve your technology foundation.
        </p>
        <p className="lead">
          Plan cloud hosting, application deployments, repeatable releases and
          operational visibility around your workload. Start with a focused task
          or discuss a connected technology foundation.
        </p>
        <PricePresentation price={solution.prices[0]!.price} />
        <p>
          Cloud provider charges and ongoing support are separate unless
          included in your proposal.
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
          For startups, technical founders and engineering teams planning a
          launch or improving an existing environment.
        </p>
        <dl className="presence-situations">
          {cloudSolutionSituations.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">Cloud & DevOps services we can combine</h2>
        <p>
          Choose the work supporting your operational goal. Linked services are
          possible components, not automatic inclusions.
        </p>
        <dl className="presence-services cloud-solution-groups">
          {cloudSolutionGroups.map(([title, services]) => (
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
        <h2 id="packages-title">Compare your Cloud & Technology options</h2>
        <p>
          Compare a focused launch direction with a more structured deployment
          foundation. Agree application boundaries, environments, checks and
          support before implementation.
        </p>
        <SolutionPriceCards solution={solution} />
        <div className="presence-custom">
          <h3>Need something smaller or different?</h3>
          <p>
            Ask about a deployment fix, server configuration or pipeline
            improvement. Custom tasks can cost less or more than these starting
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
          Cloud hosting costs & responsibilities
        </h2>
        <p>
          Separate implementation fees from provider usage and ongoing
          operations. Agree access, testing, recovery and response
          responsibilities before work begins.
        </p>
        <dl className="presence-situations">
          {cloudSolutionTerms.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="measurement-title">
        <h2 id="measurement-title">Platforms & technologies</h2>
        <p>
          Examples to evaluate against your requirements—not universal support
          or certification claims. Platform compatibility, permissions, workload
          needs and provider limits must be reviewed before selection.
        </p>
        <dl className="presence-situations">
          {cloudSolutionPlatforms.map(([title, text]) => (
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
          <h2 id="examples-title">Explore operational interface directions</h2>
          <p>
            Independent interface studies showing release and operational
            visibility—not evidence of deployed client infrastructure or
            measured availability.
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
          {cloudSolutionProcess.map(([title, text], index) => (
            <li key={title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p>
          Delivery depends on access, compatibility, workload complexity and
          safe change windows. Ongoing operations are separate unless explicitly
          included.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your Cloud & Technology questions, answered</h2>
        {cloudSolutionFaqs.map(([question, answer]) => (
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
        <h2 id="next-title">Plan the next step for your application.</h2>
        <p>
          Tell us where your application runs, what needs improvement and the
          constraints your team works within.
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
