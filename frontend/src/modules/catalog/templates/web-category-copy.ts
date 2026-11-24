/** Buyer guidance for CAT-01 only; existing catalog IDs, offers and prices remain authoritative. */
export const webCategoryMetaDescription =
  "Explore business websites, e-commerce, custom web applications, website redesign and maintenance. Find the right starting point for your project with ARADUN.";
export const webServiceGuidance: Record<
  string,
  { summary: string; examples: string; need: string }
> = {
  "SVC-001": {
    summary:
      "Present your business clearly with a responsive website that helps people understand your services and get in touch.",
    examples: "Company websites · Service websites · Professional portfolios",
    need: "Introduce your business and generate inquiries",
  },
  "SVC-002": {
    summary:
      "Bring your products online with a store experience built around browsing, product information and a clear buying journey.",
    examples: "Product catalogues · Online stores · Storefront improvements",
    need: "Sell products through an online store",
  },
  "SVC-003": {
    summary:
      "Turn a specific business process or product idea into a web application shaped around the people who use it.",
    examples: "MVPs · Customer portals · Admin dashboards · API integrations",
    need: "Build a product, portal or business workflow",
  },
  "SVC-004": {
    summary:
      "Improve an existing website's structure, usability and presentation while planning carefully around the content and journeys that already matter.",
    examples:
      "Website refreshes · Navigation improvements · Migration planning",
    need: "Improve or modernize an existing website",
  },
  "SVC-005": {
    summary:
      "Keep an existing website in good shape with clearly agreed recurring upkeep, checks and support responsibilities.",
    examples: "Routine upkeep · Update reviews · Agreed support tasks",
    need: "Arrange ongoing care for an existing website",
  },
};

export const webCapabilities = [
  {
    title: "Campaign & landing pages",
    description: "A focused page for one offer, audience or inquiry goal.",
    serviceId: "SVC-001",
  },
  {
    title: "SaaS & MVP interfaces",
    description:
      "Define the first useful version of a software idea before expanding it.",
    serviceId: "SVC-003",
  },
  {
    title: "Portals & operational tools",
    description:
      "Discuss the roles, records and day-to-day tasks your application needs to support.",
    serviceId: "SVC-003",
  },
  {
    title: "Admin dashboards",
    description:
      "Bring the records, permissions and everyday decisions your team needs into a focused management interface.",
    serviceId: "SVC-003",
  },
  {
    title: "Backend & API integrations",
    description:
      "Connect agreed systems and data flows with clear access and ownership boundaries.",
    serviceId: "SVC-003",
  },
  {
    title: "Booking & request journeys",
    description:
      "Plan the steps from choosing a service to making a request or an agreed booking flow.",
    serviceId: "SVC-003",
  },
  {
    title: "Migration & modernization",
    description:
      "Review the content, URLs, integrations and data that need to be preserved when a site changes.",
    serviceId: "SVC-004",
  },
  {
    title: "Website fixes & optimization",
    description:
      "Start with the issue: a broken journey, slow page or usability problem. We review the existing site before recommending a focused scope.",
    serviceId: "SVC-004",
  },
  {
    title: "Ongoing website care",
    description:
      "Separate recurring support from a one-off improvement, with responsibilities agreed up front.",
    serviceId: "SVC-005",
  },
] as const;

export const webProcess = [
  {
    title: "Review",
    description:
      "Understand your audience, business goal and existing website or tools.",
  },
  {
    title: "Scope",
    description:
      "Agree priorities, deliverables, content responsibilities and the proposed engagement.",
  },
  {
    title: "Design & build",
    description:
      "Develop the agreed experience with clear navigation and reusable foundations.",
  },
  {
    title: "Test",
    description:
      "Review key journeys, responsive layouts, accessibility and relevant technical checks.",
  },
  {
    title: "Handover",
    description:
      "Walk through the delivered work, documentation and agreed next steps for ownership and care.",
  },
] as const;

export const webFaqs = [
  {
    question: "Do I need a business website or a custom web application?",
    answer:
      "Choose a business website when the main goal is to explain your services and receive inquiries. A custom application is a better starting point when people need to sign in, manage records or complete a specific workflow. Tell us what users should be able to do; we can help identify the appropriate service.",
  },
  {
    question: "Can you work with our existing website?",
    answer:
      "Yes, an existing site can be reviewed before recommending redesign, a focused improvement or ongoing care. Share its address, the technology if you know it, and the issues you want to solve. Compatibility, access and the condition of the site determine the proposed scope.",
  },
  {
    question: "Can I request a landing page or a single website fix?",
    answer:
      "You can describe a campaign page, bug, performance issue or broken customer journey without committing to a full rebuild or monthly support plan. We first review the goal and existing setup, then propose a suitable scope under the relevant web service. No fixed repair price or result is assumed before that review.",
  },
  {
    question: "What should I prepare before requesting a quote?",
    answer:
      "Share your business goal, target audience, required pages or features, existing website and any timeline constraints. Brand assets, approved copy and examples help clarify the direction. Content preparation, third-party costs and responsibilities are identified in the proposal. Do not send passwords or sensitive access details in the inquiry form.",
  },
  {
    question: "What is included in the starting prices?",
    answer:
      "Starting prices help you compare the existing service options; they are not automatic quotes or complete package specifications. Your proposal confirms the work, quantities, billing basis, timeline, exclusions and any separate costs. Detailed price positions remain on each service page.",
  },
  {
    question: "What happens after the website is delivered?",
    answer:
      "Handover and agreed ownership information are part of planning the engagement. Ongoing updates, maintenance and support are arranged separately according to the site's needs. Website Maintenance is the starting point for recurring care; a one-off improvement does not automatically create a subscription.",
  },
] as const;
