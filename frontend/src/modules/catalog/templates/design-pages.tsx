import Link from "next/link";
import Image from "next/image";
import type { CategoryDetail, ServiceDetail } from "../catalog-api.server";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ButtonLink } from "@/components/ui/button";
import { Availability } from "../components/availability";
import { PricePresentation } from "../components/price-presentation";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";
import {
  designCopy,
  designCardCopy,
  designProcess,
  designResponsibilities,
  designFaqs,
} from "./design-copy";

function DesignProcess() {
  return (
    <section className="catalog-section" aria-labelledby="design-process-title">
      <h2 id="design-process-title">How we work</h2>
      <ol className="design-process">
        {designProcess.map(([title, text], index) => (
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
function DesignResponsibilities() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="design-responsibilities-title"
    >
      <h2 id="design-responsibilities-title">
        Design deliverables &amp; ownership
      </h2>
      <dl className="design-responsibilities">
        {designResponsibilities.map(([title, text]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
export function DesignCategoryTemplate({
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
    <div className="design-category">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">
          UI/UX Design · Graphic Design · Branding
        </p>
        <h1 id="category-title">{category.name}</h1>
        <p className="design-promise">
          Create better digital experiences and build a brand people recognize.
        </p>
        <p className="lead">
          From websites and mobile interfaces to logos and marketing graphics,
          we design clear experiences and consistent visuals around your
          audience and goals.
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
        <h2 id="services-title">Explore our design services</h2>
        <p>
          Choose the experience or visual asset you need, then explore the work
          types, tools and starting options.
        </p>
        <ul className="catalog-grid">
          {category.services.map((service) => {
            const copy = designCardCopy[service.id]!;
            const first = service.price.label
              .split(/\s*\/\s*(?=\$)/)[0]!
              .replace(/\+$/, "")
              .trim();
            return (
              <li
                className="catalog-card design-card"
                key={service.id}
                data-service-id={service.id}
              >
                <h3>
                  <Link href={service.href} prefetch={false}>
                    {service.name}
                  </Link>
                </h3>
                <p>{copy.summary}</p>
                <h4>What we can do</h4>
                <ul className="design-work-list" role="list">
                  {copy.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4>Tools &amp; Platforms</h4>
                <ul className="design-tool-list">
                  {copy.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <Availability value={service.availability} />
                <p className="design-starting-price">
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
                    href={`${quote}&serviceId=${service.id}`}
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
        <p className="design-price-note">
          Indicative starting prices. Your proposal confirms the deliverables,
          quantities, revisions, file formats and billing terms. Tools are
          selected for the scope; third-party licenses are identified
          separately.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">What would you like to design?</h2>
        <p>
          For founders, product owners and marketing teams: start with what you
          are creating, even if you are unsure which design service fits.
        </p>
        <dl className="design-fit">
          {category.services.map((service) => (
            <div key={service.id}>
              <dt>{designCardCopy[service.id]?.need}</dt>
              <dd>
                <Link href={service.href}>{service.name} →</Link>
              </dd>
            </div>
          ))}
        </dl>
        <p>
          Not sure where to start? Tell us what you want to create and we can
          discuss a suitable design scope.
        </p>
        <Link href={quote}>Discuss your design brief →</Link>
      </section>
      {examples.length > 0 && (
        <section
          className="catalog-section"
          aria-labelledby="design-work-title"
        >
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="design-work-title">Explore selected design directions</h2>
          <p>
            Independent concept previews showing different interface and visual
            directions.
          </p>
          <div className="design-work-grid">
            {examples.map((project) => (
              <article key={project.slug}>
                <Link href={`/our-work/${project.slug}`}>
                  <Image
                    src={project.cover}
                    width={800}
                    height={520}
                    sizes="(min-width:768px) 45vw, 92vw"
                    alt={`Design study: ${project.title}`}
                  />
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <Link href="/our-work?category=CAT-07">
            View more design studies →
          </Link>
        </section>
      )}
      <DesignProcess />
      <DesignResponsibilities />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your design questions, answered</h2>
        {designFaqs.map(([question, answer]) => (
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
        <h2 id="next-title">Let's discuss your design project.</h2>
        <p>
          Share the experience, identity or visual material you want to create,
          and the audience it needs to reach.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <h3>Looking for a broader solution?</h3>
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
export function DesignServiceTemplate({ service }: { service: ServiceDetail }) {
  const copy = designCopy[service.id]!;
  const quote = `/get-a-quote?categoryId=CAT-07&serviceId=${service.id}`;
  return (
    <div className="design-service" data-service-variant={service.variant}>
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.parent.name, href: service.parent.href },
        ]}
        current={service.name}
      />
      <section className="catalog-hero" aria-labelledby="service-title">
        <p className="catalog-eyebrow">{service.parent.name}</p>
        <h1 id="service-title">{service.name}</h1>
        <p className="lead">{copy.summary}</p>
        <Availability value={service.availability} />
        <div className="ui-actions">
          <ButtonLink href={quote}>Discuss your design brief</ButtonLink>
          <ButtonLink href="#commercial-options" variant="secondary">
            Explore pricing options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#scope-title">Types of work</a>
        <a href="#tools-title">Tools &amp; Platforms</a>
        <a href="#commercial-options">Pricing &amp; scope</a>
        <a href="#design-responsibilities-title">Responsibilities</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Start with your audience and the goal</h2>
        <p>{copy.detail}</p>
        <dl className="design-fit">
          <div>
            <dt>Your starting point</dt>
            <dd>{copy.need}</dd>
          </div>
          <div>
            <dt>Intended benefit</dt>
            <dd>{service.benefit}</dd>
          </div>
        </dl>
      </section>
      <section className="catalog-section" aria-labelledby="scope-title">
        <h2 id="scope-title">What your engagement can cover</h2>
        <p>
          Use these work types to identify the help you need. The proposal
          confirms the outputs, design states and review stages included.
        </p>
        <ul className="design-detail-work" role="list">
          {copy.work.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>Possible deliverables</h3>
        <ul>
          {service.candidates.split(";").map((item) => (
            <li key={item}>{item.trim()}</li>
          ))}
        </ul>
      </section>
      <section className="catalog-section" aria-labelledby="tools-title">
        <h2 id="tools-title">Tools &amp; Platforms</h2>
        <ul className="design-tool-list">
          {copy.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <p>
          We agree the tools and delivery formats around your team and handoff
          needs. Software subscriptions and third-party assets are not
          automatically included.
        </p>
      </section>
      <section
        className="catalog-section"
        id="commercial-options"
        aria-labelledby="commercial-title"
      >
        <h2 id="commercial-title">Pricing options &amp; scope</h2>
        <p>
          Compare indicative options, then agree the right creative scope. Your
          proposal specifies concepts, screens or assets, revisions, file
          formats, editable sources and licensing terms.
        </p>
        <ol
          className="catalog-grid design-package-grid"
          aria-label="Indicative pricing options"
        >
          {service.prices.map((position, index) => (
            <li className="catalog-card" key={position.packageId}>
              <h3>{position.tierLabel ?? `Design option ${index + 1}`}</h3>
              <PricePresentation price={position.price} />
              <h4>
                {index === 0
                  ? "A focused starting scope"
                  : "A broader scope to discuss"}
              </h4>
              <ul>
                <li>Concepts, screens or asset quantities</li>
                <li>Review stages and agreed revision rounds</li>
                <li>
                  Editable files, exports, rights and third-party licenses
                </li>
              </ul>
              <ButtonLink
                href={`${quote}&packageId=${position.packageId}`}
                variant="secondary"
              >
                Discuss this option
              </ButtonLink>
            </li>
          ))}
        </ol>
        <p>{copy.boundary}</p>
      </section>
      <section className="catalog-section" aria-labelledby="inputs-title">
        <h2 id="inputs-title">What to prepare</h2>
        <ul>
          {copy.inputs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Share your goals and approved content first. Use assets you have
          permission to share and keep confidential records out of the inquiry
          form.
        </p>
      </section>
      <DesignProcess />
      <DesignResponsibilities />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before we get started</h2>
        {[
          ...service.faqs.map((faq) => [faq.question, faq.answer]),
          designFaqs[1]!,
          designFaqs[6]!,
        ].map(([question, answer]) => (
          <details className="catalog-faq" key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
      <section className="catalog-section" aria-labelledby="related-title">
        <h2 id="related-title">Related services &amp; solutions</h2>
        <ul className="catalog-links">
          {service.related.map((item) => (
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
        <h2 id="next-title">Bring your next design brief into focus.</h2>
        <p>
          Describe your audience, the material you need and the result you want
          the design to support.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <p>
          <Link href={service.parent.href}>
            Explore all Design &amp; Branding services →
          </Link>
        </p>
      </section>
    </div>
  );
}
