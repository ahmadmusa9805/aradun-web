import { frontendEnv } from "@/config/env.server";
import {
  editorialGuides,
  editorialGuideImage,
} from "@/modules/content/data/editorial-guides";
import Image from "next/image";
import { publicMetadata } from "@/modules/discovery/metadata.server";
import {
  PublicPage,
  PublicSection,
} from "@/modules/content/templates/public-page";
import Link from "next/link";
import {
  ReadingRoute,
  readingMetadata,
} from "@/modules/content/reading-route.server";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide =
    frontendEnv.appEnv === "development"
      ? editorialGuides.find((item) => item.slug === slug)
      : undefined;
  return guide
    ? publicMetadata(guide.title, guide.summary, `/insights/${slug}`)
    : readingMetadata("insights", slug);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const guide =
    frontendEnv.appEnv === "development"
      ? editorialGuides.find((item) => item.slug === slug)
      : undefined;
  if (!guide) return <ReadingRoute kind="insights" slug={slug} />;
  return (
    <PublicPage title={guide.title} intro={guide.summary}>
      <p className="public-eyebrow">ARADUN / {guide.topic}</p>
      <Image
        className="article-cover article-cover-large"
        src={editorialGuideImage(guide.topic)}
        width={1100}
        height={720}
        sizes="(min-width:768px) 75vw, 92vw"
        alt={`Editorial photograph for ${guide.topic} planning guide`}
      />
      <PublicSection title="Key takeaway and contents">
        <p className="article-takeaway">{guide.takeaway}</p>
        <nav aria-label="Article contents">
          <ol>
            {guide.sections.map(([heading], index) => (
              <li key={heading}>
                <a href={`#article-part-${index + 1}`}>{heading}</a>
              </li>
            ))}
          </ol>
        </nav>
      </PublicSection>
      <PublicSection title="The guide">
        <div className="article-reading">
          {guide.sections.map(([heading, body], index) => (
            <section id={`article-part-${index + 1}`} key={heading}>
              <h3>{heading}</h3>
              <p>{body}</p>
            </section>
          ))}
        </div>
      </PublicSection>
      <PublicSection title="Your planning checklist">
        <ul className="article-checklist">
          {guide.checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Use these points to prepare your brief and identify the questions you
          want to discuss.
        </p>
      </PublicSection>
      <PublicSection title="Related reading and services">
        <p>
          <Link href={guide.href}>Explore {guide.topic}</Link>
        </p>
        <ul>
          {editorialGuides
            .filter((item) => item.slug !== slug)
            .slice(0, 3)
            .map((item) => (
              <li key={item.slug}>
                <Link href={`/insights/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
        </ul>
        <p>
          <Link href="/insights">View all articles &rarr;</Link>
        </p>
      </PublicSection>
      <PublicSection title="Put your plan into practice">
        <p>
          Tell us about your goals, the work you have already done and the
          questions you would like to clarify.
        </p>
        <Link className="ui-button ui-button-primary" href="/get-a-quote">
          Start your project brief
        </Link>
      </PublicSection>
    </PublicPage>
  );
}
