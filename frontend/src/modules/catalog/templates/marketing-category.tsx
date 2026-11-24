import Link from "next/link";
import Image from "next/image";
import type { CategoryDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";
import {
  marketingCopy,
  marketingGroups,
  marketingFaqs,
  marketingProcess,
  marketingBudgets,
} from "./marketing-copy";

export function MarketingCategoryTemplate({
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
    <div className="marketing-category">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">Grow your online presence</p>
        <h1 id="category-title">{category.name}</h1>
        <p className="marketing-promise">
          Reach the right audience. Make your message clearer. Understand what
          works.
        </p>
        <p className="lead">
          From search and paid advertising to social media, content and email,
          we help you plan, execute and improve your digital marketing around a
          clear business goal.
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
        <h2 id="services-title">Explore our digital marketing services</h2>
        <p>
          Choose the work you need first. Each service shows recognizable tasks
          before the tools that may support them.
        </p>
        <nav className="ui-actions" aria-label="Marketing service groups">
          {marketingGroups.map((group, index) => (
            <a href={`#marketing-group-${index}`} key={group.name}>
              {group.name}
            </a>
          ))}
        </nav>
        {marketingGroups.map((group, index) => (
          <section
            className="marketing-group"
            id={`marketing-group-${index}`}
            aria-labelledby={`marketing-heading-${index}`}
            key={group.name}
          >
            <h3 id={`marketing-heading-${index}`}>{group.name}</h3>
            <ul className="catalog-grid">
              {group.ids.map((id) => {
                const service = category.services.find((s) => s.id === id);
                if (!service) return null;
                const copy = marketingCopy[id]!;
                const first = service.price.label
                  .split(/\s*\/\s*(?=\$)/)[0]!
                  .replace(/\+$/, "")
                  .trim();
                return (
                  <li
                    className="catalog-card marketing-card"
                    key={id}
                    data-service-id={id}
                  >
                    <h4>
                      <Link href={service.href} prefetch={false}>
                        {service.name}
                      </Link>
                    </h4>
                    <p>{copy.summary}</p>
                    <h5>What we can do</h5>
                    <ul className="marketing-work-list" role="list">
                      {copy.work.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <h5>Tools &amp; Platforms</h5>
                    <ul className="marketing-tool-list">
                      {copy.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                    <Availability value={service.availability} />
                    <p className="marketing-starting-price">
                      <strong>
                        Starting at {first}
                        {service.price.model === "monthly" ? "/month" : ""}
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
        <p className="marketing-price-note">
          Starting prices are indicative. Your proposal confirms the work and
          billing terms. Advertising spend, subscriptions and additional
          creative production are separate unless expressly included. Platform
          examples depend on your accounts, permissions and the agreed scope.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">What would you like to improve?</h2>
        <p>
          For business owners, local service businesses, online stores and
          marketing teams: start with the business goal, then explore the
          relevant service.
        </p>
        <dl className="marketing-fit">
          {category.services.map((service) => (
            <div key={service.id}>
              <dt>{marketingCopy[service.id]?.need}</dt>
              <dd>
                <Link href={service.href}>{service.name} →</Link>
              </dd>
            </div>
          ))}
        </dl>
        <p>
          Need lead generation or campaign management? Google Ads and Meta Ads
          cover scoped advertising campaigns; Email Marketing covers approved
          email campaigns; Consulting helps define the audience, channels and
          plan. CRM follow-up automation is a separate technical engagement.
        </p>
        <div className="ui-actions">
          <Link href={quote}>Discuss your marketing goal →</Link>
          <Link href="/services/ai-automation-crm">
            Explore CRM &amp; automation
          </Link>
        </div>
      </section>
      {examples.length > 0 && (
        <section
          className="catalog-section"
          aria-labelledby="marketing-work-title"
        >
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="marketing-work-title">
            Explore campaign &amp; content directions
          </h2>
          <p>
            Concept visuals showing campaign presentation and content-planning
            approaches—not client performance or advertising results.
          </p>
          <div className="marketing-work-grid">
            {examples.map((project) => (
              <article key={project.slug}>
                <Link href={`/our-work/${project.slug}`}>
                  <Image
                    src={project.cover}
                    width={800}
                    height={520}
                    sizes="(min-width:768px) 45vw, 92vw"
                    alt={`Concept marketing interface: ${project.title}`}
                  />
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <Link href="/our-work?category=CAT-04">
            View more marketing studies →
          </Link>
        </section>
      )}
      <MarketingProcess />
      <MarketingBudget />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your marketing questions, answered</h2>
        {marketingFaqs.map(([question, answer]) => (
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
        <h2 id="next-title">Let's find your next marketing move.</h2>
        <p>
          A focused campaign, clearer content or a better-informed strategy—tell
          us what you want to improve and we will help clarify the next step.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <h3>Looking for a broader business solution?</h3>
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
export function MarketingProcess() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="marketing-process-title"
    >
      <h2 id="marketing-process-title">How we work</h2>
      <ol className="marketing-process">
        {marketingProcess.map(([title, text], index) => (
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
export function MarketingBudget() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="marketing-budget-title"
    >
      <h2 id="marketing-budget-title">How marketing budgets work</h2>
      <p>
        A useful budget separates the work we perform from money spent on
        advertising, tools and additional production.
      </p>
      <dl className="marketing-budget">
        {marketingBudgets.map(([title, text]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
      <p>
        We agree deliverables and cost responsibilities before work begins. No
        campaign is activated or advertising budget spent by submitting an
        inquiry.
      </p>
    </section>
  );
}
