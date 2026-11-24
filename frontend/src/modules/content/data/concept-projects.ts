import { projectStudyBriefs } from "./project-study-briefs";
/** Actual interface concepts, never represented as commissioned client work. */
const originalProjects = [
  {
    slug: "studio-website-concept",
    title: "Studio website concept",
    category: "Web & Software",
    categoryId: "CAT-01",
    description:
      "A service-led website concept with clear navigation and a focused project inquiry journey.",
    href: "/get-a-quote?serviceId=SVC-001",
    kind: "website",
    problem:
      "Make a broad service offering easy to understand without overwhelming a first-time visitor.",
    scope:
      "Information hierarchy, service discovery, responsive interface and inquiry entry points.",
    approach:
      "Prioritize the main message, reusable section patterns and a short path from service discovery to a project brief.",
  },
  {
    slug: "follow-up-workflow-concept",
    title: "Follow-up workflow concept",
    category: "AI Automation & CRM",
    categoryId: "CAT-03",
    description:
      "A workflow concept that connects inquiry capture, qualification and the next follow-up task.",
    href: "/get-a-quote?categoryId=CAT-03",
    kind: "workflow",
    problem:
      "Make the handoff between an incoming inquiry and a clear next action visible.",
    scope:
      "Workflow mapping and a three-stage interface concept, without claiming a deployed client integration.",
    approach:
      "Separate capture, human review and follow-up so responsibility and the next action remain clear.",
  },
  {
    slug: "campaign-landing-page-concept",
    title: "Campaign landing page concept",
    category: "Digital Marketing",
    categoryId: "CAT-04",
    description:
      "A focused campaign page concept built around one message and one purposeful call to action.",
    href: "/get-a-quote?categoryId=CAT-04",
    kind: "campaign",
    problem:
      "Give a campaign visitor a clear message and an obvious next step.",
    scope:
      "Landing-page hierarchy, visual direction and a focused inquiry call to action.",
    approach:
      "Keep the value proposition, supporting information and call to action consistent across the page.",
  },
] as const;

const collections = [
  {
    id: "CAT-01",
    name: "Web & Software",
    kind: "website",
    titles: [
      "Commerce storefront",
      "Professional services website",
      "Appointment discovery platform",
    ],
    scope:
      "Responsive page layouts, service discovery and a focused inquiry flow.",
  },
  {
    id: "CAT-03",
    name: "AI Automation & CRM",
    kind: "workflow",
    titles: [
      "Inquiry qualification workspace",
      "Client follow-up pipeline",
      "Operations workflow board",
    ],
    scope:
      "Workflow mapping, clear handoffs and a human review step before follow-up.",
  },
  {
    id: "CAT-04",
    name: "Digital Marketing",
    kind: "campaign",
    titles: [
      "Campaign landing page",
      "Content planning workspace",
      "Lead generation campaign",
    ],
    scope:
      "Message hierarchy, campaign structure and a focused conversion path.",
  },
  {
    id: "CAT-02",
    name: "Mobile App Development",
    kind: "mobile",
    titles: [
      "Customer service mobile app",
      "Appointment companion app",
      "Field team mobile workspace",
    ],
    scope:
      "Mobile navigation, task hierarchy and accessible touch interactions.",
  },
  {
    id: "CAT-05",
    name: "Cloud & DevOps",
    kind: "cloud",
    titles: [
      "Release visibility workspace",
      "Cloud operations overview",
      "Service status workspace",
    ],
    scope:
      "Operational information hierarchy, deployment visibility and service ownership.",
  },
  {
    id: "CAT-06",
    name: "Cybersecurity",
    kind: "security",
    titles: [
      "Security review workspace",
      "Access review overview",
      "Incident response planner",
    ],
    scope:
      "Risk visibility, review responsibilities and a structured response checklist.",
  },
  {
    id: "CAT-07",
    name: "Design & Branding",
    kind: "design",
    titles: [
      "Brand direction studio",
      "Product design library",
      "Creative portfolio website",
    ],
    scope:
      "Visual hierarchy, brand expression and reusable interface patterns.",
  },
  {
    id: "CAT-08",
    name: "Video & Production",
    kind: "video",
    titles: [
      "Video production portfolio",
      "Content review workspace",
      "Campaign storyboard library",
    ],
    scope:
      "Visual storytelling, production organization and clear review actions.",
  },
] as const;
const generated = collections.flatMap((collection) =>
  collection.titles.map((title, index) => ({
    slug: title.toLowerCase().replaceAll(" ", "-") + "-study",
    title,
    category: collection.name,
    categoryId: collection.id,
    kind: collection.kind,
    description: `${collection.name} design study exploring a clear, purposeful experience for ${title.toLowerCase()}.`,
    href: `/get-a-quote?categoryId=${collection.id}`,
    problem: `Make the key information and next action clear in a ${title.toLowerCase()}, with a focused layout that also works on smaller screens.`,
    scope: collection.scope,
    approach:
      "Start with the main user task, group supporting information and keep the primary action visible. Review the layout at desktop and mobile widths.",
    variant: index,
  })),
);
/** Three independent studies per category. Existing concept URLs stay valid. */
export const conceptProjects = generated
  .map((project, index) => {
    const original =
      index === 0
        ? originalProjects[0]
        : index === 3
          ? originalProjects[1]
          : index === 6
            ? originalProjects[2]
            : undefined;
    return {
      ...project,
      ...(original ?? {}),
      ...projectStudyBriefs[index],
      study: projectStudyBriefs[index]!,
      cover: `/images/projects/study-${index + 1}-v3.png`,
    };
  })
  .sort((a, b) => a.variant - b.variant);
