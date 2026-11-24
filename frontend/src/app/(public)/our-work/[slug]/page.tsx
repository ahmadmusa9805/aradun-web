import {
  ReadingRoute,
  readingMetadata,
} from "@/modules/content/reading-route.server";
import { frontendEnv } from "@/config/env.server";
import { conceptProjects } from "@/modules/content/data/concept-projects";
import {
  PublicPage,
  PublicSection,
} from "@/modules/content/templates/public-page";
import Link from "next/link";
import Image from "next/image";
import { publicMetadata } from "@/modules/discovery/metadata.server";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project =
    frontendEnv.appEnv === "development"
      ? conceptProjects.find((item) => item.slug === slug)
      : undefined;
  return project
    ? publicMetadata(project.title, project.description, `/our-work/${slug}`)
    : readingMetadata("work", slug);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project =
    frontendEnv.appEnv === "development"
      ? conceptProjects.find((item) => item.slug === slug)
      : undefined;
  if (!project) return <ReadingRoute kind="work" slug={slug} />;
  return (
    <PublicPage title={project.title} intro={project.description}>
      <p className="public-eyebrow">Concept project / {project.category}</p>
      <PublicSection title="Problem and constraints">
        <p>{project.problem}</p>
        <p>This is an interface exploration, not a client commission.</p>
      </PublicSection>
      <PublicSection title="Scope and contribution">
        <p>{project.scope}</p>
      </PublicSection>
      <PublicSection title="Approach and key decisions">
        <p>{project.approach}</p>
      </PublicSection>
      <PublicSection title="Delivered work">
        <Image
          className="concept-project-image"
          src={project.cover}
          width={800}
          height={520}
          sizes="(min-width:768px) 70vw, 92vw"
          alt={`Interface concept preview: ${project.title}`}
        />
        <p>
          A responsive interface concept showing the intended structure, visual
          hierarchy and next action.
        </p>
      </PublicSection>
      <PublicSection title="Outcomes and evidence">
        <p>
          The concept demonstrates an interface direction. No client launch,
          performance improvement or business outcome is claimed.
        </p>
      </PublicSection>
      <PublicSection title="Related services and next step">
        <Link className="ui-button ui-button-primary" href={project.href}>
          Discuss a similar project
        </Link>
        <p>
          <Link href="/our-work">View all projects &rarr;</Link>
        </p>
      </PublicSection>
    </PublicPage>
  );
}
