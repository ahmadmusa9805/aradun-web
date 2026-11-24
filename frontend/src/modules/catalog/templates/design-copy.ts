import { mobileCopy } from "./mobile-copy";
export const designMeta =
  "Explore website and mobile UI/UX, SaaS dashboards, branding, graphics, landing-page design, UX audits and monthly design support with ARADUN.";
export const designCopy: typeof mobileCopy = {
  "SVC-043": {
    summary:
      "Turn your website goals into clear pages, useful journeys and responsive layouts before development begins.",
    need: "Design or refresh a business website",
    work: [
      "Website wireframes",
      "Responsive layouts",
      "E-commerce interfaces",
      "Navigation design",
      "Page templates",
      "Interactive prototypes",
      "Component patterns",
      "Design accessibility",
      "Developer handoff",
    ],
    tools: ["Figma", "Prototyping tools", "Design specifications"],
    detail:
      "Map the main visitor tasks and content priorities, then develop the agreed page designs and interaction states. A redesign can improve hierarchy and consistency while respecting your existing brand.",
    inputs: [
      "Site goals and audience",
      "Page priorities and supplied content",
      "Brand assets and development constraints",
    ],
    boundary:
      "Website design does not automatically include coding, hosting or deployment. Agree page counts, responsive states, prototype depth, revisions and handoff formats.",
  },
  "SVC-044": {
    summary:
      "Make complex product tasks easier to understand with purposeful dashboards, clear navigation and reusable interface patterns.",
    need: "Design a SaaS product, CRM or admin dashboard",
    work: [
      "Admin dashboards",
      "SaaS interfaces",
      "CRM dashboards",
      "User-flow mapping",
      "Data-table layouts",
      "Form states",
      "Component libraries",
      "Role-based journeys",
      "Prototype handoff",
    ],
    tools: ["Figma", "Prototyping tools", "Component specifications"],
    detail:
      "Plan around the tasks people perform, the information they need and the states they encounter. Dashboard design can cover tables, forms, permissions-aware views and reusable patterns without promising a functioning application.",
    inputs: [
      "Product roles and key tasks",
      "Data examples with sensitive information removed",
      "Priority screens and technical constraints",
    ],
    boundary:
      "Interface design is separate from application development, database work and authorization implementation. Scope defines screens, states, components and review rounds.",
  },
  "SVC-045": {
    summary:
      "Create a recognizable visual foundation with a logo and identity direction suited to your audience and business.",
    need: "Create or refresh your logo and visual identity",
    work: [
      "Logo concepts",
      "Logo variations",
      "Logo refresh",
      "Color palettes",
      "Typography selection",
      "Brand guidelines",
      "Social profile assets",
      "Identity applications",
      "Export preparation",
    ],
    tools: ["Illustrator", "Figma", "Photoshop"],
    detail:
      "Begin with your positioning, audience and visual references. Explore the agreed concepts, refine the selected direction and prepare the approved identity assets for their intended uses.",
    inputs: [
      "Business name and audience",
      "Existing marks and brand references",
      "Intended applications and asset requirements",
    ],
    boundary:
      "An entry-level logo scope is not a complete identity system. Agree concept counts, revisions, file formats, ownership terms and any font or stock licenses. Trademark clearance is separate.",
  },
  "SVC-046": {
    summary:
      "Communicate your message with consistent marketing graphics shaped around the channel, audience and action you want to support.",
    need: "Create marketing graphics or a business presentation",
    work: [
      "Social media graphics",
      "Ad creatives",
      "Website banners",
      "Flyers",
      "Brochures",
      "YouTube thumbnails",
      "Business cards",
      "Presentation layouts",
      "Company profiles",
    ],
    tools: ["Photoshop", "Illustrator", "Canva"],
    detail:
      "Start with the message, dimensions and intended channel. A focused graphic, a coordinated campaign set or a presentation layout can be scoped around your supplied content and existing brand.",
    inputs: [
      "Approved copy and brand assets",
      "Sizes, channels and intended use",
      "Print specifications or editable-format needs",
    ],
    boundary:
      "The starting scope is limited, not an unlimited set of assets. Presentation layouts can be discussed within Graphic Design; no separate pitch-deck offer or price is introduced. Print production, stock and copywriting are separate unless included.",
  },
  "SVC-047": {
    summary:
      "Give one offer a clear visual story with a focused landing-page layout and a purposeful path to inquiry or action.",
    need: "Design a campaign or sales landing page",
    work: [
      "Campaign page layouts",
      "Sales page design",
      "Hero sections",
      "CTA design",
      "Offer hierarchy",
      "Form layouts",
      "Responsive layouts",
      "Interaction states",
      "Design handoff",
    ],
    tools: ["Figma", "Prototyping tools", "Design specifications"],
    detail:
      "Organize the audience, offer and action into a coherent page. Explore sections, trust content and form states using approved claims and supplied material, with responsive design considered from the start.",
    inputs: [
      "Offer, audience and primary action",
      "Approved copy and genuine proof assets",
      "Campaign context and implementation needs",
    ],
    boundary:
      "Landing-page design is separate from coding, ad buying, tracking setup and deployment. Scope defines sections, responsive states, revisions and file delivery; conversion results are not guaranteed.",
  },
  "SVC-048": {
    summary:
      "Understand where people may struggle in your product and prioritize practical improvements to the agreed user journeys.",
    need: "Find usability issues in an existing experience",
    work: [
      "Usability review",
      "Navigation review",
      "Journey analysis",
      "Form review",
      "Content hierarchy",
      "Mobile experience review",
      "Accessibility observations",
      "Issue prioritization",
      "Improvement recommendations",
    ],
    tools: ["Heuristic review", "Figma", "Client-provided analytics"],
    detail:
      "Review the selected flows against the intended user tasks and available evidence. Present observations with context, priorities and recommended next steps so your team can decide what to improve.",
    inputs: [
      "Target journeys and user goals",
      "Access to an agreed review environment",
      "Existing research or privacy-safe analytics",
    ],
    boundary:
      "A UX audit does not automatically include user recruitment, implementation or a formal accessibility compliance assessment. Agree coverage, evidence, reporting depth and follow-up.",
  },
  "SVC-049": {
    summary:
      "Keep recurring creative tasks organized with a defined monthly scope, clear priorities and an agreed review workflow.",
    need: "Get ongoing design help",
    work: [
      "Recurring graphics",
      "Website design updates",
      "Campaign asset updates",
      "Presentation updates",
      "Brand consistency checks",
      "Design adaptations",
      "Asset resizing",
      "Component refinements",
      "Design handoff",
    ],
    tools: ["Tools selected for scope", "Figma", "Adobe tools", "Canva"],
    detail:
      "Build a manageable queue around the design work your business needs regularly. Agree priorities, approval responsibilities, delivery formats and what happens when a request exceeds the monthly scope.",
    inputs: [
      "Expected request types and cadence",
      "Brand assets and approval owner",
      "Priority list and source-file requirements",
    ],
    boundary:
      "Monthly support is not unlimited design or an automatic on-call service. Confirm capacity, quantities or time, turnaround, revisions, billing and out-of-scope work in the proposal.",
  },
};
export const designCardCopy: typeof mobileCopy = {
  ...designCopy,
  "SVC-009": mobileCopy["SVC-009"]!,
};
export const designProcess = [
  [
    "Understand your brief",
    "Review your audience, goals, brand and the work you need.",
  ],
  [
    "Plan the direction",
    "Agree content, priorities, formats and the visual direction.",
  ],
  [
    "Create initial designs",
    "Develop the agreed concepts, layouts or prototypes.",
  ],
  [
    "Review & refine",
    "Collect consolidated feedback and complete the agreed revisions.",
  ],
  [
    "Deliver & hand over",
    "Provide approved files, exports and guidance as defined in your scope.",
  ],
];
export const designResponsibilities = [
  [
    "Design and implementation",
    "UI/UX deliverables describe an experience; coding, hosting and deployment are separate unless explicitly combined.",
  ],
  [
    "Files and ownership",
    "Agree editable source files, export formats, usage rights and handover terms before work begins.",
  ],
  [
    "Review and revisions",
    "Confirm concept or screen counts, revision rounds, approval milestones and how additional requests are handled.",
  ],
  [
    "Content and licensing",
    "Supply content and assets you have permission to use. Identify font, stock, template and other third-party licenses and costs.",
  ],
  [
    "Practical delivery",
    "Define responsive states, accessibility considerations and developer needs. A design review is not a certification or a guarantee of business results.",
  ],
];
export const designFaqs = [
  [
    "Does UI/UX design include development?",
    "Design covers the agreed layouts, flows, prototypes and handoff. Coding and deployment are separate unless expressly included in a combined scope.",
  ],
  [
    "Will I receive editable files?",
    "Your proposal identifies the editable files, formats, exports and usage rights included in delivery.",
  ],
  [
    "How many revisions are included?",
    "Revision rounds and feedback stages are agreed before work begins. Additional directions or expanded scope are discussed separately.",
  ],
  [
    "Can you follow my existing brand?",
    "Share your logo, brand guidelines and approved assets so we can plan a consistent direction.",
  ],
  [
    "Are stock images, fonts and licenses included?",
    "Third-party assets and license costs are identified in the agreed scope; they are not automatically included.",
  ],
  [
    "Can I request one small task?",
    "You can ask about a focused graphic, banner, presentation update or other defined design task.",
  ],
  [
    "Is Mobile App UI/UX Design a separate offer here?",
    "Both categories link to the same service page and pricing. Design does not include building or publishing an app.",
  ],
  [
    "Can you help with a presentation or pitch deck?",
    "Presentation layouts and company-profile graphics can be discussed under Graphic Design. Share the audience, supplied content, slide count and editable-format requirements.",
  ],
];
