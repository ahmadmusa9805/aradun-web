import Link from "next/link";
import type { CategoryDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import {
  automationCopy,
  automationFaqs,
  automationGroups,
  automationProcess,
  popularAutomations,
} from "./automation-copy";

export function AutomationCategoryTemplate({
  category,
}: {
  category: CategoryDetail;
}) {
  const quote = `/get-a-quote?categoryId=${category.id}`;
  return (
    <div className="automation-category">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">
          Less repetitive work. Clearer customer journeys.
        </p>
        <h1 id="category-title">{category.name}</h1>
        <p className="automation-promise">
          Connect your systems. Automate your work. Serve customers smarter.
        </p>
        <p className="lead">
          Bring your customer data, business tools and AI together. We help you
          organize customer relationships, connect everyday processes and build
          useful assistants—with a clear role for your team.
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
        <h2 id="services-title">
          Explore our AI automation &amp; CRM services
        </h2>
        <p>
          Start with the work you want to improve. Each service below shows the
          tasks we can discuss before the technology options.
        </p>
        <nav className="ui-actions" aria-label="Automation service groups">
          {automationGroups.map((group, index) => (
            <a key={group.name} href={`#automation-group-${index}`}>
              {group.name}
            </a>
          ))}
        </nav>
        {automationGroups.map((group, index) => (
          <section
            className="automation-group"
            key={group.name}
            id={`automation-group-${index}`}
            aria-labelledby={`automation-heading-${index}`}
          >
            <h3 id={`automation-heading-${index}`}>{group.name}</h3>
            <ul className="catalog-grid">
              {group.ids.map((id) => {
                const service = category.services.find(
                  (item) => item.id === id,
                );
                if (!service) return null;
                const copy = automationCopy[id]!;
                const first = service.price.label
                  .split(/\s*\/\s*(?=\$)/)[0]!
                  .replace(/\+$/, "")
                  .trim();
                return (
                  <li
                    className="catalog-card automation-card"
                    data-service-id={id}
                    key={id}
                  >
                    <h4>
                      <Link href={service.href} prefetch={false}>
                        {service.name}
                      </Link>
                    </h4>
                    <p>{copy.summary}</p>
                    <h5>What we can do</h5>
                    <ul className="automation-work-list" role="list">
                      {copy.work.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <h5>Tools &amp; Platforms</h5>
                    <ul className="automation-tool-list">
                      {copy.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                    <Availability value={service.availability} />
                    <p className="automation-starting-price">
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
                        href={`${quote}&serviceId=${id}`}
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
          </section>
        ))}
        <p className="automation-scope-note">
          Starting prices are indicative. The proposal confirms the scope and
          billing basis. Tools are examples to evaluate for your accounts and
          requirements; third-party subscriptions and usage charges are not
          automatically included.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="use-cases-title">
        <h2 id="use-cases-title">Popular automations &amp; use cases</h2>
        <p>
          You do not need to know the service name. Start with the business task
          you want to make easier.
        </p>
        <ul className="automation-use-cases">
          {popularAutomations.map((item) => {
            const service = category.services.find((s) => s.id === item.id);
            return (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {service && <Link href={service.href}>{service.name} →</Link>}
              </li>
            );
          })}
        </ul>
        <Link href={quote}>Discuss a custom automation →</Link>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Not sure which service fits?</h2>
        <p>
          For business owners, sales teams, customer-support teams and
          operations managers: choose the problem first, then compare the
          relevant service.
        </p>
        <dl className="automation-fit">
          {category.services.map((service) => (
            <div key={service.id}>
              <dt>{automationCopy[service.id]?.need}</dt>
              <dd>
                <Link href={service.href}>{service.name} →</Link>
              </dd>
            </div>
          ))}
        </dl>
        <p>
          Notifications and reminders use defined rules; an AI assistant handles
          conversations using approved information. We can help distinguish the
          two before recommending a solution.
        </p>
        <Link href="/consultation">Talk through your requirements →</Link>
      </section>
      <AutomationProcess />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your automation questions, answered</h2>
        {automationFaqs.map(([question, answer]) => (
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
        <h2 id="next-title">Let's make your next workflow work better.</h2>
        <p>
          One repetitive task, a CRM setup or a connected AI journey—tell us
          where you are now and what you want to improve.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <h3>Looking for a connected solution?</h3>
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

export function AutomationProcess() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="automation-process-title"
    >
      <h2 id="automation-process-title">How we work</h2>
      <ol className="automation-process">
        {automationProcess.map(([title, text], index) => (
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
