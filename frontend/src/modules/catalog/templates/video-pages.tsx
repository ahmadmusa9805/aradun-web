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
  videoCopy,
  videoCardCopy,
  videoProcess,
  videoResponsibilities,
  videoFaqs,
} from "./video-copy";

function VideoProcess() {
  return (
    <section className="catalog-section" aria-labelledby="video-process-title">
      <h2 id="video-process-title">How we work</h2>
      <ol className="video-process">
        {videoProcess.map(([title, text], index) => (
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
function VideoResponsibilities() {
  return (
    <section
      className="catalog-section"
      aria-labelledby="video-responsibilities-title"
    >
      <h2 id="video-responsibilities-title">
        Materials, rights &amp; delivery
      </h2>
      <dl className="video-responsibilities">
        {videoResponsibilities.map(([title, text]) => (
          <div key={title}>
            <dt>{title}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
export function VideoCategoryTemplate({
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
    <div className="video-category">
      <Breadcrumbs
        parents={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        current={category.name}
      />
      <section className="catalog-hero" aria-labelledby="category-title">
        <p className="catalog-eyebrow">Editing · Motion · Production</p>
        <h1 id="category-title">{category.name}</h1>
        <p className="video-promise">
          Create videos that tell your story and support your business goals.
        </p>
        <p className="lead">
          Turn supplied footage and approved content into focused videos for
          social media, YouTube, advertising and business communication—from one
          edit to a planned recurring workload.
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
        <h2 id="services-title">Explore our video services</h2>
        <p>
          Choose the video you need, then explore recognizable formats, editing
          tasks and starting options.
        </p>
        <ul className="catalog-grid">
          {category.services.map((service) => {
            const copy = videoCardCopy[service.id]!;
            const first = service.price.label
              .split(/\s*\/\s*(?=\$)/)[0]!
              .replace(/\+$/, "")
              .trim();
            return (
              <li
                className="catalog-card video-card"
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
                <ul className="video-work-list" role="list">
                  {copy.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4>Tools &amp; Platforms</h4>
                <ul className="video-tool-list">
                  {copy.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <Availability value={service.availability} />
                <p className="video-starting-price">
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
        <p className="video-price-note">
          Indicative starting prices. Your proposal confirms footage and output
          lengths, quantities, revisions, formats and billing terms. Filming,
          scripting, voiceovers and licensed assets are separate unless
          included.
        </p>
      </section>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">What kind of video do you need?</h2>
        <p>
          For businesses, marketers and creators: start with your message,
          audience and channel, even if you are unsure which editing service
          fits.
        </p>
        <dl className="video-fit">
          {category.services.map((service) => (
            <div key={service.id}>
              <dt>{videoCardCopy[service.id]?.need}</dt>
              <dd>
                <Link href={service.href}>{service.name} →</Link>
              </dd>
            </div>
          ))}
        </dl>
        <p>
          Need a product demo or explainer? Supplied walkthroughs can fit
          promotional or YouTube editing; simple animated explanations can fit
          Motion Graphics. Share the brief to confirm scope.
        </p>
        <Link href={quote}>Discuss your video brief →</Link>
      </section>
      {examples.length > 0 && (
        <section className="catalog-section" aria-labelledby="video-work-title">
          <p className="catalog-eyebrow">Independent design studies</p>
          <h2 id="video-work-title">Explore video presentation directions</h2>
          <p>
            Independent design studies for video presentation and review
            interfaces. These still images are not finished video samples or
            commissioned client productions.
          </p>
          <div className="video-work-grid">
            {examples.map((project) => (
              <article key={project.slug}>
                <Link href={`/our-work/${project.slug}`}>
                  <Image
                    src={project.cover}
                    width={800}
                    height={520}
                    sizes="(min-width:768px) 45vw, 92vw"
                    alt={`Interface design study: ${project.title}`}
                  />
                  <h3>{project.title}</h3>
                </Link>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
          <Link href="/our-work?category=CAT-08">
            View more video studies →
          </Link>
        </section>
      )}
      <VideoProcess />
      <VideoResponsibilities />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Your video questions, answered</h2>
        {videoFaqs.map(([question, answer]) => (
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
        <h2 id="next-title">Let's create the right video for your business.</h2>
        <p>
          Tell us whether you need a short social edit, a business presentation
          or recurring content, and the audience you want to reach.
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
export function VideoServiceTemplate({ service }: { service: ServiceDetail }) {
  const copy = videoCopy[service.id]!;
  const quote = `/get-a-quote?categoryId=CAT-08&serviceId=${service.id}`;
  return (
    <div className="video-service" data-service-variant={service.variant}>
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
          <ButtonLink href={quote}>Discuss your video brief</ButtonLink>
          <ButtonLink href="#commercial-options" variant="secondary">
            Explore pricing options
          </ButtonLink>
        </div>
      </section>
      <nav className="catalog-jump-links" aria-label="On this service page">
        <a href="#scope-title">Types of work</a>
        <a href="#tools-title">Tools &amp; Platforms</a>
        <a href="#commercial-options">Pricing &amp; scope</a>
        <a href="#video-responsibilities-title">Responsibilities</a>
        <a href="#faq-title">Questions</a>
      </nav>
      <section className="catalog-section" aria-labelledby="fit-title">
        <h2 id="fit-title">Start with your message and the audience</h2>
        <p>{copy.detail}</p>
        <dl className="video-fit">
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
          confirms the footage, outputs, editing tasks and review stages
          included.
        </p>
        <ul className="video-detail-work" role="list">
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
        <ul className="video-tool-list">
          {copy.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <p>
          We select tools around the supplied material and agreed outputs. Tool
          examples are not endorsements or automatic inclusions; premium assets
          and subscriptions are identified separately.
        </p>
      </section>
      <section
        className="catalog-section"
        id="commercial-options"
        aria-labelledby="commercial-title"
      >
        <h2 id="commercial-title">Pricing options &amp; scope</h2>
        <p>
          Compare indicative options, then agree the editing or production
          scope. Your proposal specifies video counts, source and final lengths,
          formats, revisions, assets and licensing terms.
        </p>
        <ol
          className="catalog-grid video-package-grid"
          aria-label="Indicative pricing options"
        >
          {service.prices.map((position, index) => (
            <li className="catalog-card" key={position.packageId}>
              <h3>{position.tierLabel ?? `Video option ${index + 1}`}</h3>
              <PricePresentation price={position.price} />
              <h4>
                {index === 0
                  ? "A focused starting scope"
                  : "A broader scope to discuss"}
              </h4>
              <ul>
                <li>Video quantities, source footage and final durations</li>
                <li>Review stages and agreed revision rounds</li>
                <li>Exports, project-file terms, rights and licenses</li>
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
      <VideoProcess />
      <VideoResponsibilities />
      <section className="catalog-section" aria-labelledby="faq-title">
        <h2 id="faq-title">Before we get started</h2>
        {[
          ...service.faqs.map((faq) => [faq.question, faq.answer]),
          videoFaqs[1]!,
          videoFaqs[6]!,
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
        <h2 id="next-title">Bring your next video brief into focus.</h2>
        <p>
          Describe your audience, available material and the message you want
          the video to communicate.
        </p>
        <div className="ui-actions">
          <ButtonLink href={quote}>Get a Quote</ButtonLink>
          <ButtonLink href="/consultation" variant="secondary">
            Request a Consultation
          </ButtonLink>
        </div>
        <p>
          <Link href={service.parent.href}>
            Explore all Video Editing &amp; Production services →
          </Link>
        </p>
      </section>
    </div>
  );
}
