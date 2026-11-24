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
  businessAutomationPlatforms,
  businessAutomationTerms,
  businessAutomationSituations,
  businessAutomationServiceNeeds,
  businessAutomationProcess,
  businessAutomationFaqs,
} from "./business-automation-copy";
export function BusinessAutomationTemplate({
  solution,
}: {
  solution: SolutionDetail;
}) {
  const quote = `/get-a-quote?solutionId=${solution.id}`;
  const examples =
    frontendEnv.appEnv === "development"
      ? conceptProjects.filter((p) => p.categoryId === "CAT-03").slice(0, 3)
      : [];
  return (
    <div className="digital-presence business-automation">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
        ]}
        current={solution.name}
      />
      <section className="catalog-hero" aria-labelledby="solution-title">
        <p className="catalog-eyebrow">CRM · Workflows · Connected systems</p>
        <h1 id="solution-title">{solution.name}</h1>
        <p className="presence-promise">
          Save time. Reduce manual work. Keep your business connected.
        </p>
        <p className="lead">
          Connect your CRM, business applications and everyday workflows to
          organize customer information and improve follow-up. Start with one
          selected process or plan a connected system.
        </p>
        <PricePresentation price={solution.prices[0]!.price} />
        <p>
          Software subscriptions and usage-based provider costs may be separate.
        </p>
        <div className="ui-actions">
          <ButtonLink href="#packages">Compare Options</ButtonLink>
          <ButtonLink href={quote} variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">What would you like to automate?</h2>
        <p>
          For service businesses, sales teams and growing companies whose tools
          and daily processes need to work together.
        </p>
        <dl className="presence-situations">
          {businessAutomationSituations.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">Automation services we can combine</h2>
        <p>
          CRM configuration, workflows, customer follow-ups and integrations can
          work together. These links describe possible components, not an
          automatic bundle of everything in each package.
        </p>
        <dl className="presence-services">
          {solution.candidates.map((service) => (
            <div key={service.id}>
              <dt>
                <Link href={service.href}>{service.name}</Link>
              </dt>
              <dd>
                {businessAutomationServiceNeeds[service.id] ??
                  "Discuss this service when it supports the selected business process."}
              </dd>
            </div>
          ))}
        </dl>
        <p>
          Your selected scope identifies the exact deliverables. A tailored
          proposal can combine the work you need without assuming a full bundle.
        </p>
      </section>
      <p>
        Booking reminders and application connections can be discussed within a
        defined workflow. An <Link href="/services/ai-chatbot">AI Chatbot</Link>{" "}
        is an optional separately scoped component, not included automatically.
      </p>
      <section className="catalog-section" aria-labelledby="workflow-title">
        <h2 id="workflow-title">A clearer lead-management journey</h2>
        <p>
          Illustrative workflow: steps depend on connected systems, permissions
          and the rules you approve.
        </p>
        <ol className="presence-process">
          <li>Website inquiry received</li>
          <li>Validated contact added to CRM</li>
          <li>Lead assigned by agreed rules</li>
          <li>Approved follow-up action triggered</li>
          <li>Team notified for human review</li>
        </ol>
      </section>
      <section
        className="catalog-section"
        id="packages"
        aria-labelledby="packages-title"
      >
        <h2 id="packages-title">Compare your Business Automation options</h2>
        <p>
          Compare implementation directions, then agree quantities, workflow
          complexity, revisions and support. Your proposal identifies exactly
          what will be configured and tested.
        </p>
        <SolutionPriceCards solution={solution} />
        <div className="presence-custom">
          <h3>Need something smaller or different?</h3>
          <p>
            Ask about one workflow, a CRM improvement or a booking connection.
            Custom work can cost less or more than these starting options,
            depending on scope.
          </p>
          <Link href={quote}>Discuss a tailored project →</Link>
        </div>
      </section>
      <section
        className="catalog-section presence-terms"
        aria-labelledby="delivery-terms-title"
      >
        <h2 id="delivery-terms-title">
          Software costs & ongoing responsibilities
        </h2>
        <p>
          Separate implementation from subscriptions, usage and ongoing
          operation. Agree responsibilities and delivery terms before connecting
          systems.
        </p>
        <dl className="presence-situations">
          {businessAutomationTerms.map(([title, text]) => (
            <div key={title}>
              <dt>{title}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="platforms-title">
        <h2 id="platforms-title">Tools &amp; integration options</h2>
        <p>
          Examples to review against your requirements—not a guarantee that
          every feature is supported on every subscription. Provider access,
          limits, fees and data handling are checked before selection.
        </p>
        <dl className="presence-situations">
          {businessAutomationPlatforms.map(([title, text]) => (
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
          <h2 id="examples-title">Explore automation directions</h2>
          <p>
            Independent interface studies showing lead review, follow-up and
            operational handoffs—not claims of live client integrations.
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
          {businessAutomationProcess.map(([title, text], index) => (
            <li key={title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p>
          Timing depends on access, provider compatibility, selected scope and
          reviews. Maintenance and ongoing monitoring are separate unless
          included.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your automation questions, answered</h2>
        {businessAutomationFaqs.map(([question, answer]) => (
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
            <Link href="/solutions/business-growth">Business Growth</Link>
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
        <h2 id="next-title">Connect the next step in your business.</h2>
        <p>
          Tell us which task repeats, the tools you use and where work gets
          delayed. We can discuss a useful starting point.
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
