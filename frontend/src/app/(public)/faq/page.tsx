import { publicMetadata } from "@/modules/discovery/metadata.server";
import Link from "next/link";
import { publicFaqs } from "@/modules/content/data/public-copy";
import {
  PublicPage,
  PublicSection,
} from "@/modules/content/templates/public-page";
export const metadata = publicMetadata(
  "FAQs & Help",
  "Answers about services, indicative pricing, scope, delivery and separately agreed support.",
  "/faq",
);
export default function FaqPage() {
  const groups = [...new Set(publicFaqs.map((faq) => faq.group))];
  return (
    <PublicPage
      title="How can we help?"
      intro="Start with common questions about services, pricing and working together."
    >
      <form action="/search" className="public-search" role="search">
        <label htmlFor="faq-search">
          Search services, solutions and answers
        </label>
        <div>
          <input id="faq-search" name="q" type="search" maxLength={120} />
          <button className="ui-button ui-button-primary">Search</button>
        </div>
      </form>
      <nav className="ui-actions" aria-label="Question categories">
        {groups.map((group, index) => (
          <a key={group} href={`#group-${index}`}>
            {group}
          </a>
        ))}
      </nav>
      <div className="faq-category-grid">
        {groups.map((group, index) => (
          <PublicSection key={group} title={group} id={`group-${index}`}>
            {publicFaqs
              .filter((faq) => faq.group === group)
              .map((faq) => (
                <details className="catalog-faq" id={faq.id} key={faq.id}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                  <p>
                    <Link prefetch={false} href={`/faq/${faq.id}`}>
                      Read the detailed guide
                    </Link>
                  </p>
                </details>
              ))}
          </PublicSection>
        ))}
      </div>
      <PublicSection title="Still need help?">
        <p>
          Share your question and the context that will help us understand it.
        </p>
        <div className="ui-actions">
          <Link
            prefetch={false}
            className="ui-button ui-button-primary"
            href="/contact"
          >
            Contact Us
          </Link>
          <Link prefetch={false} href="/get-a-quote">
            Get a Quote
          </Link>
          <Link prefetch={false} href="/consultation">
            Request a Consultation
          </Link>
        </div>
      </PublicSection>
    </PublicPage>
  );
}
