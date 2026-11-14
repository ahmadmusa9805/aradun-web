import Link from "next/link";

const projects = [
  {
    title: "Studio website concept",
    category: "Web & Software",
    description:
      "An illustrative website direction with service discovery and a clear inquiry journey.",
    href: "/get-a-quote?serviceId=SVC-001",
    kind: "website",
  },
  {
    title: "Follow-up workflow concept",
    category: "AI Automation & CRM",
    description:
      "An illustrative workflow connecting an inquiry, a review step and follow-up tasks.",
    href: "/get-a-quote?categoryId=CAT-03",
    kind: "workflow",
  },
  {
    title: "Campaign landing page concept",
    category: "Digital Marketing",
    description:
      "An illustrative campaign page focused on one message and a purposeful call to action.",
    href: "/get-a-quote?categoryId=CAT-04",
    kind: "campaign",
  },
] as const;

export function DemoProjects() {
  return (
    <div className="demo-projects">
      <p className="demo-disclosure">
        SAMPLE / DEMO — illustrative concepts, not delivered client projects or
        verified results.
      </p>
      <div className="demo-project-grid">
        {projects.map((project, index) => (
          <article className="demo-project" key={project.kind}>
            <div
              className={`demo-project-visual demo-project-visual--${project.kind}`}
              role="img"
              aria-label={`Demo interface illustration for ${project.title}`}
            >
              <div className="demo-window-bar">
                <i />
                <i />
                <i />
                <span>DEMO CONCEPT / 0{index + 1}</span>
              </div>
              {project.kind === "website" ? (
                <div className="demo-site-preview">
                  <small>DEMO STUDIO</small>
                  <strong>A clearer digital presence.</strong>
                  <span className="demo-preview-button">
                    Start a conversation
                  </span>
                  <div className="demo-site-shape" />
                </div>
              ) : project.kind === "workflow" ? (
                <div className="demo-workflow-preview">
                  {[
                    "Inquiry received",
                    "Review & qualify",
                    "Follow-up task",
                  ].map((label, i) => (
                    <div key={label}>
                      <span>0{i + 1}</span>
                      {label}
                      <b aria-hidden="true">↓</b>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="demo-campaign-preview">
                  <small>DEMO CAMPAIGN</small>
                  <strong>
                    One idea.
                    <br />A clear next step.
                  </strong>
                  <div className="demo-chart" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              )}
            </div>
            <p className="public-eyebrow">
              Concept / Demo · {project.category}
            </p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link prefetch={false} href={project.href}>
              Discuss a similar project &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
