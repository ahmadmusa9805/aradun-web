import { CollectionFilter } from "@/modules/content/components/collection-filter";
import { publicMetadata } from "@/modules/discovery/metadata.server";
import { frontendEnv } from "@/config/env.server";
import {
  editorialGuides,
  editorialGuideImage,
} from "@/modules/content/data/editorial-guides";
import Image from "next/image";
import Link from "next/link";
import {
  PublicPage,
  PublicSection,
  ProjectInvitation,
} from "@/modules/content/templates/public-page";
export const metadata = publicMetadata(
  "Insights & Resources",
  "Practical planning guides for websites, workflows, design and digital projects.",
  "/insights",
);
export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const topic = typeof params.topic === "string" ? params.topic : "all";
  const guides =
    frontendEnv.appEnv === "development"
      ? editorialGuides.filter(
          (guide) => topic === "all" || guide.topic === topic,
        )
      : [];
  return (
    <PublicPage
      title="Practical guidance for your digital decisions."
      intro="Useful questions, checklists and planning guides for your next project."
    >
      <PublicSection title="Explore by topic">
        <CollectionFilter
          action="/insights"
          name="topic"
          label="Topic"
          selected={topic}
          options={editorialGuides.map((guide) => ({
            value: guide.topic,
            label: guide.topic,
          }))}
          buttonLabel="Filter articles"
          resetLabel="View all articles"
        />
      </PublicSection>
      <PublicSection title="Insights & resources">
        <div className="article-grid">
          {guides.map((guide, index) => (
            <article className="article-card" key={guide.slug}>
              <Image
                className="article-cover"
                src={editorialGuideImage(guide.topic)}
                width={1100}
                height={720}
                sizes="(min-width:768px) 30vw, 92vw"
                alt={`Editorial photograph for ${guide.topic} planning guide`}
              />
              <p className="public-eyebrow">{guide.topic}</p>
              <span className="article-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>
                <Link href={`/insights/${guide.slug}`}>{guide.title}</Link>
              </h3>
              <p>{guide.summary}</p>
              <Link
                className="editorial-text-link"
                href={`/insights/${guide.slug}`}
              >
                Read the guide &rarr;
              </Link>
            </article>
          ))}
        </div>
        {guides.length === 0 && (
          <p role="status">
            No articles match this topic.{" "}
            <Link href="/insights">View all articles</Link>
          </p>
        )}
      </PublicSection>
      <ProjectInvitation />
    </PublicPage>
  );
}
