import Link from "next/link";
import Image from "next/image";
import type { CategorySummary } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { EngagementModels } from "../components/engagement-models";
import { CategoryIcon } from "@/components/ui/category-icon";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";

const coreIds = ["CAT-01", "CAT-03", "CAT-04"];
const otherIds = ["CAT-02", "CAT-05", "CAT-06", "CAT-07", "CAT-08"];
const descriptions: Record<string, string> = {
  "CAT-01":
    "Build a professional business website, online store or custom web application around the people using it.",
  "CAT-03":
    "Connect your business tools, reduce repetitive work and organize customer follow-ups with practical automation.",
  "CAT-04":
    "Improve your online visibility and plan focused search, advertising and social campaigns for the audience you want to reach.",
  "CAT-02":
    "Plan and develop mobile experiences for your customers, business workflows or online store.",
  "CAT-05":
    "Prepare cloud environments, repeatable deployments and clearer operating responsibilities for your applications.",
  "CAT-06":
    "Review selected application and cloud controls, prioritize risks and plan scoped security improvements.",
  "CAT-07":
    "Create clear interfaces, recognizable brand assets and consistent marketing visuals.",
  "CAT-08":
    "Shape supplied footage and approved content into videos for social media, advertising and business communication.",
};
const solutions = [
  [
    "Digital Presence",
    "/solutions/digital-presence",
    "Bring your website, branding and online presence into a connected plan.",
  ],
  [
    "Business Automation",
    "/solutions/business-automation",
    "Connect workflows, CRM and everyday processes around your business needs.",
  ],
  [
    "Business Growth",
    "/solutions/business-growth",
    "Coordinate marketing channels, campaigns and inquiry journeys.",
  ],
];
const faqs = [
  [
    "How do I choose the right service?",
    "Browse a category or tell us what you want to achieve. We can help identify the relevant service or combination before agreeing a scope.",
  ],
  [
    "Can I start with a small project?",
    "You can ask about a focused task, an entry-level scope or a larger project. The appropriate starting point depends on the service and the work involved.",
  ],
  [
    "Can I combine multiple services?",
    "Connected services can be discussed in one proposal, with the deliverables, responsibilities and costs clearly defined.",
  ],
  [
    "Are the displayed prices final?",
    "Starting prices describe an indicative entry scope. Your proposal confirms the deliverables, final price, billing terms and any separate third-party costs.",
  ],
];
function CategoryCards({
  categories,
  ids,
}: {
  categories: CategorySummary[];
  ids: string[];
}) {
  return (
    <ul className="catalog-grid services-category-grid">
      {ids.flatMap((id) => {
        const category = categories.find((item) => item.id === id);
        if (!category) return [];
        return [
          <li
            key={id}
            className="catalog-card services-category-card"
            data-category-id={id}
          >
            <CategoryIcon index={Number(id.slice(-2)) - 1} />
            <h3>
              <Link href={category.href} prefetch={false}>
                {category.name}
              </Link>
            </h3>
            <p>{descriptions[id] ?? category.headline}</p>
            {!!category.representatives?.length && (
              <ul
                className="catalog-service-samples"
                aria-label={`Example services in ${category.name}`}
              >
                {(category.id === "CAT-03"
                  ? [
                      ...category.representatives.slice(0, 2),
                      { name: "AI Chatbot", href: "/services/ai-chatbot" },
                    ]
                  : category.representatives.slice(0, 3)
                ).map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} prefetch={false}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href={category.href}
              prefetch={false}
              className="services-category-link"
            >
              View {category.name} services →
            </Link>
          </li>,
        ];
      })}
    </ul>
  );
}
export function ServicesOverview({
  categories,
}: {
  categories: CategorySummary[];
}) {
  const examples =
    frontendEnv.appEnv === "development"
      ? coreIds.flatMap((id) =>
          conceptProjects
            .filter((project) => project.categoryId === id)
            .slice(0, 1),
        )
      : [];
  return (
    <div className="services-overview">
      <Breadcrumbs
        parents={[{ label: "Home", href: "/" }]}
        current="Services"
      />
      <section className="catalog-hero" aria-labelledby="services-title">
        <p className="catalog-eyebrow">Our services</p>
        <h1 id="services-title">Build. Automate. Grow.</h1>
        <p className="services-promise">
          Technology and digital services for your business.
        </p>
        <p className="lead">
          Build your website or software, automate everyday work and grow your
          online presence. Explore our core expertise and other services to find
          a useful starting point for your goals and budget.
        </p>
        <p>Start with a focused task, a complete project or ongoing support.</p>
        <div className="ui-actions">
          <ButtonLink href="#categories">Explore Services</ButtonLink>
          <ButtonLink href="/get-a-quote" variant="secondary">
            Get a Quote
          </ButtonLink>
        </div>
      </section>
      <section
        id="categories"
        className="catalog-section services-core"
        aria-labelledby="core-title"
      >
        <p className="catalog-eyebrow">Build · Automate · Grow</p>
        <h2 id="core-title">Core services</h2>
        <p>
          Three connected areas of expertise for building your business online,
          improving daily work and reaching your audience.
        </p>
        <CategoryCards categories={categories} ids={coreIds} />
      </section>
      <section
        className="catalog-section services-other"
        aria-labelledby="other-title"
      >
        <h2 id="other-title">Other services</h2>
        <p>
          Bring the right mobile, infrastructure, security, design or video
          expertise into your project.
        </p>
        <CategoryCards categories={categories} ids={otherIds} />
      </section>
      <section className="catalog-section" aria-labelledby="solutions-title">
        <h2 id="solutions-title">Need more than one service?</h2>
        <p>
          A service addresses specific work. A solution connects several
          services around a business goal—for example, a website, CRM workflow
          and marketing journey working together.
        </p>
        <dl className="services-guidance">
          {solutions.map(([name, href, text]) => (
            <div key={name}>
              <dt>
                <Link href={href!}>{name}</Link>
              </dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
        <Link href="/solutions">Explore all solutions →</Link>
      </section>
      <section className="catalog-section" aria-labelledby="engagement-title">
        <h2 id="engagement-title">Choose the engagement that fits</h2>
        <EngagementModels />
        <p>
          Not sure which option fits? Tell us what you need and we can discuss a
          suitable approach.
        </p>
        <p>
          Service pages show indicative pricing. Your proposal confirms the
          deliverables, price and billing terms.
        </p>
        <Link href="/pricing">Explore pricing options →</Link>
      </section>
      <section className="catalog-section" aria-labelledby="expect-title">
        <h2 id="expect-title">What you can expect from ARADUN</h2>
        <dl className="services-guidance">
          <div>
            <dt>Clear project scope</dt>
            <dd>
              Agree the deliverables, responsibilities and costs before work
              begins.
            </dd>
          </div>
          <div>
            <dt>Collaborative communication</dt>
            <dd>
              Plan review stages so you can see progress and provide focused
              feedback.
            </dd>
          </div>
          <div>
            <dt>Organized delivery</dt>
            <dd>
              Define final outputs and handoff information around the work your
              team needs.
            </dd>
          </div>
        </dl>
        <Link href="/our-work">Explore our work →</Link>
      </section>
      {examples.length > 0 && (
        <section className="catalog-section" aria-labelledby="examples-title">
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="examples-title">Explore project directions</h2>
          <p>
            Three concept examples of how an interface or workflow could take
            shape.
          </p>
          <div className="services-projects">
            {examples.map((project) => (
              <article key={project.slug}>
                <Link href={`/our-work/${project.slug}`}>
                  <Image
                    src={project.cover}
                    width={800}
                    height={520}
                    sizes="(min-width:1200px) 30vw, (min-width:640px) 45vw, 92vw"
                    alt={`Design study: ${project.title}`}
                  />
                  <p className="catalog-eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
                <Link href={`/our-work/${project.slug}`}>View project →</Link>
              </article>
            ))}
          </div>
          <Link href="/our-work">View all projects →</Link>
        </section>
      )}
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before choosing a service</h2>
        {faqs.map(([question, answer]) => (
          <details className="catalog-faq" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
        <p>
          <Link href="/faq">View all FAQs →</Link>
        </p>
      </section>
      <section
        className="catalog-section catalog-next"
        aria-labelledby="next-title"
      >
        <h2 id="next-title">Have a project in mind? Let's talk.</h2>
        <p>
          Whether you need one service or a connected digital solution, share
          your business goals and we can discuss a practical starting point.
        </p>
        <div className="ui-actions">
          <ButtonLink href="/get-a-quote">Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
