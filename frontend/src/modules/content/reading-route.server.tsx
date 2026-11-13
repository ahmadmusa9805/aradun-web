import { notFound } from "next/navigation";
import { getReading } from "./reading-api.server";
import { readingPaths, type Reading } from "./reading";
import { ReadingPage } from "./templates/reading-page";
import { PublicPage } from "./templates/public-page";
import { publicMetadata } from "@/modules/discovery/metadata.server";
import { getHelpGuide } from "./data/help-guides";
export async function readingMetadata(kind: Reading["kind"], slug: string) {
  const help = kind === "help" ? getHelpGuide(slug) : null;
  if (help)
    return publicMetadata(help.title, help.summary, `/faq/${help.slug}`);
  const result = await getReading(kind, slug);
  if (result.state === "missing") notFound();
  return publicMetadata(
    result.state === "ready" ? result.data.title : "Reading unavailable",
    result.state === "ready"
      ? result.data.summary
      : "Please try again shortly.",
    `${readingPaths[kind]}/${encodeURIComponent(slug)}`,
  );
}
export async function ReadingRoute({
  kind,
  slug,
}: {
  kind: Reading["kind"];
  slug: string;
}) {
  const help = kind === "help" ? getHelpGuide(slug) : null;
  if (help) return <ReadingPage reading={help} />;
  const result = await getReading(kind, slug);
  if (result.state === "missing") notFound();
  if (result.state === "unavailable")
    return (
      <PublicPage
        title="Reading temporarily unavailable"
        intro="We could not load this page. Please try again shortly or contact ARADUN for help."
      >
        <p>
          <a href="/contact">Contact ARADUN</a>
        </p>
      </PublicPage>
    );
  return <ReadingPage reading={result.data} />;
}
