import Link from "next/link";
import Image from "next/image";
import { conceptProjects } from "../data/concept-projects";

export function DemoProjects({
  category = "all",
  limit,
}: { category?: string; limit?: number | undefined } = {}) {
  return (
    <div className="demo-projects">
      <p className="demo-disclosure">Independent design studies</p>
      <div className="demo-project-grid">
        {conceptProjects
          .filter(
            (project) => category === "all" || project.categoryId === category,
          )
          .slice(0, limit)
          .map((project) => (
            <article className="demo-project" key={project.slug}>
              <Image
                className="concept-project-image"
                src={project.cover}
                width={800}
                height={520}
                sizes="(min-width:768px) 32vw, 92vw"
                alt={`Interface concept preview: ${project.title}`}
              />
              <p className="public-eyebrow">
                Design study · {project.category}
              </p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link prefetch={false} href={`/our-work/${project.slug}`}>
                View project &rarr;
              </Link>
              <Link prefetch={false} href={project.href}>
                Discuss a similar project &rarr;
              </Link>
            </article>
          ))}
      </div>
      <p className="section-link">
        <Link
          href={limit === 3 ? "/our-work" : "/our-work?view=all"}
          prefetch={false}
        >
          View all projects &rarr;
        </Link>
      </p>
      {!conceptProjects.some(
        (project) => category === "all" || project.categoryId === category,
      ) && (
        <p role="status">
          No projects in this category yet.{" "}
          <Link href="/our-work">View all projects</Link>
        </p>
      )}
    </div>
  );
}
