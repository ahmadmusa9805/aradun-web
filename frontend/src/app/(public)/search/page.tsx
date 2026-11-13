import { publicMetadata } from "@/modules/discovery/metadata.server";
import Link from "next/link";
import { getPricing } from "@/modules/catalog/catalog-api.server";
import { publicFaqs } from "@/modules/content/data/public-copy";
import {
  PublicPage,
  PublicSection,
} from "@/modules/content/templates/public-page";
export const dynamic = "force-dynamic";
export const metadata = publicMetadata(
  "Search",
  "Find ARADUN services, solutions and frequently asked questions.",
  "/search",
);
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const raw = (await searchParams).q;
  const q = typeof raw === "string" ? raw.trim().slice(0, 120) : "";
  const terms = q.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const result = q ? await getPricing() : null;
  const catalog =
    result?.state === "ready"
      ? [
          ...result.data.services.map((item) => ({
            title: item.name,
            href: item.href,
            detail: "Service",
          })),
          ...result.data.solutions.map((item) => ({
            title: item.name,
            href: item.href,
            detail: item.summary,
          })),
        ]
      : [];
  const entries = [
    ...catalog,
    ...publicFaqs.map((faq) => ({
      title: faq.question,
      href: `/faq/${faq.id}`,
      detail: faq.answer,
    })),
  ];
  const matches = q
    ? entries.filter((item) =>
        terms.every((term) =>
          `${item.title} ${item.detail}`.toLocaleLowerCase().includes(term),
        ),
      )
    : [];
  return (
    <PublicPage
      title="Find your next step."
      intro="Search services, solutions and answers to common questions."
    >
      <form action="/search" className="public-search" role="search">
        <label htmlFor="site-search">Search the website</label>
        <div>
          <input
            type="search"
            id="site-search"
            name="q"
            defaultValue={q}
            maxLength={120}
          />
          <button className="ui-button ui-button-primary">Search</button>
        </div>
      </form>
      <PublicSection
        title={q ? `Results for "${q}"` : "What are you looking for?"}
      >
        {q && result?.state !== "ready" && (
          <p role="status">
            Service and solution search is temporarily unavailable. FAQ results
            remain available.
          </p>
        )}
        {q && matches.length === 0 && result?.state === "ready" && (
          <p>
            No matching results. Try a broader term or browse{" "}
            <Link prefetch={false} href="/services">
              all services
            </Link>
            .
          </p>
        )}
        {q && matches.length === 0 && result?.state !== "ready" && (
          <p>
            No matching FAQ answers. Service and solution results could not be
            checked.
          </p>
        )}
        <ul className="search-results">
          {matches.map((item) => (
            <li key={item.href}>
              <h3>
                <Link prefetch={false} href={item.href}>
                  {item.title}
                </Link>
              </h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>
      </PublicSection>
    </PublicPage>
  );
}
