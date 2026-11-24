/** Proposed qualitative scope for owner review; not approved fixed package entitlements. */
export const webServiceCopy: Record<
  string,
  {
    hero: string;
    audience: string;
    goal: string;
    benefits: string[];
    deliverables: string[];
    inputs: string[];
    options: { focus: string; items: string[] }[];
    aftercare: string;
  }
> = {
  "SVC-001": {
    hero: "Give your business a website that explains what you do, earns attention and makes the next conversation easy.",
    audience:
      "Service businesses, independent professionals and growing companies that need a clear, credible home online.",
    goal: "Help visitors understand your offer, find the information they need and contact you with confidence.",
    benefits: [
      "A clear introduction to your business and services",
      "A responsive experience for desktop and mobile visitors",
      "Purposeful navigation and visible inquiry paths",
    ],
    deliverables: [
      "Page structure and visitor-journey planning",
      "Responsive page implementation with agreed content",
      "Service, company and contact-page presentation",
      "Agreed inquiry forms and clear feedback states",
      "Review of key journeys and handover notes",
    ],
    inputs: [
      "Your audience, services and main business goal",
      "Brand assets, approved copy and permitted images",
      "Required pages, inquiry details and examples you like",
    ],
    options: [
      {
        focus: "A focused business presence",
        items: [
          "Prioritize your core business message and essential pages",
          "Present services, company information and a contact journey",
          "Plan responsive layouts around the content you supply",
          "Define the checks and handover needed for your website",
        ],
      },
      {
        focus: "A broader service-led website",
        items: [
          "Plan a richer page structure for several audiences or services",
          "Discuss more detailed service journeys and reusable page patterns",
          "Identify additional forms or content requirements",
          "Agree expanded review and handover needs in the proposal",
        ],
      },
    ],
    aftercare:
      "We agree how the website will be handed over and who will own its content, domain and supporting services. Recurring upkeep can be discussed separately through Website Maintenance.",
  },
  "SVC-002": {
    hero: "Make your products easier to discover, understand and buy with an online store built around a clear shopping journey.",
    audience:
      "Retailers and product businesses planning a new storefront or a more useful online shopping experience.",
    goal: "Connect product discovery, product information and the agreed purchase flow into one understandable experience.",
    benefits: [
      "Product information organized around how customers shop",
      "Responsive browsing and product-detail journeys",
      "Clear ownership of store content and integration requirements",
    ],
    deliverables: [
      "Store structure and product-category planning",
      "Responsive catalogue and product-page layouts",
      "Agreed cart and purchase-flow implementation",
      "Review of product, order and integration requirements",
      "Key shopping-journey checks and handover documentation",
    ],
    inputs: [
      "Product catalogue, images, variants and required store rules",
      "Your delivery, returns and customer-service requirements",
      "Provider/account requirements for any payments or integrations",
    ],
    options: [
      {
        focus: "A focused online storefront",
        items: [
          "Plan the core product browsing and detail pages",
          "Define the agreed shopping and order journey",
          "Prepare responsive layouts around supplied product information",
          "Review the store's required operating responsibilities",
        ],
      },
      {
        focus: "A more involved commerce experience",
        items: [
          "Discuss a broader catalogue or more complex product journeys",
          "Identify integration, migration or order-flow needs",
          "Plan additional store behaviours and review cases",
          "Define expanded implementation and handover requirements",
        ],
      },
    ],
    aftercare:
      "Payment processing, hosting, delivery tools and other third-party services are scoped separately. Store policies, provider approval and ongoing operations remain explicit responsibilities rather than assumed package inclusions.",
  },
  "SVC-003": {
    hero: "Build software around the way your business needs to work—from a focused MVP to a customer portal or admin dashboard.",
    audience:
      "Founders and teams with a specific workflow, software idea or integration need that a standard website does not solve.",
    goal: "Turn roles, records and everyday tasks into a useful browser-based application with a clear first scope.",
    benefits: [
      "Workflows shaped around actual users and responsibilities",
      "A focused first release with priorities made explicit",
      "Clear boundaries for data, integrations and future improvements",
    ],
    deliverables: [
      "Workflow and user-role specification",
      "Agreed application screens and data requirements",
      "Server-side permissions and validation appropriate to the scope",
      "Agreed APIs and third-party integration work",
      "Acceptance checks, documentation and handover",
    ],
    inputs: [
      "Who will use the application and what each role must do",
      "Examples of current processes, records and pain points",
      "Integration documentation, priorities and constraints",
    ],
    options: [
      {
        focus: "A scope built around your application",
        items: [
          "Map the primary user journey and required roles",
          "Define the first useful set of screens and workflows",
          "Review data ownership and integration dependencies",
          "Agree acceptance criteria and a phased implementation plan",
        ],
      },
    ],
    aftercare:
      "The proposal follows a review of complexity, data, roles and integrations. Discovery may need its own agreed engagement. Later modules, hosting and ongoing support are separate decisions; a custom quote is not an automatic fixed total.",
  },
  "SVC-004": {
    hero: "Make your existing website clearer, easier to use and better suited to where your business is going next.",
    audience:
      "Businesses with an outdated website, confusing navigation or important customer journeys that need improvement.",
    goal: "Improve the experience while planning carefully for the content, URLs and integrations your business already relies on.",
    benefits: [
      "A clearer structure for finding services and information",
      "Updated responsive presentation around your current goals",
      "A considered plan for content continuity and transition",
    ],
    deliverables: [
      "Existing website and key-journey review",
      "Revised information and page structure",
      "Agreed design and implementation changes",
      "Content and URL mapping where changes are needed",
      "Migration, verification and cutover planning as scoped",
    ],
    inputs: [
      "Your current website and the problems you want to solve",
      "Important pages, URLs and existing integrations",
      "Current content access, brand assets and relevant analytics",
    ],
    options: [
      {
        focus: "A focused website improvement",
        items: [
          "Review the existing pages and priority problems",
          "Agree targeted structure and presentation changes",
          "Identify content and URLs that need to remain intact",
          "Verify the revised customer journeys",
        ],
      },
      {
        focus: "A more comprehensive redesign",
        items: [
          "Plan broader page, navigation and visual improvements",
          "Discuss migration or more involved implementation work",
          "Map dependencies and transition requirements",
          "Agree wider review and cutover responsibilities",
        ],
      },
    ],
    aftercare:
      "An existing-site review determines what can be retained and what needs to change. Redirects, migration, integrations and ongoing support are included only where the proposal states them. No ranking, speed score or traffic outcome is guaranteed.",
  },
  "SVC-005": {
    hero: "Keep routine website care organized, with a clear owner, an agreed scope and a practical way to handle ongoing requests.",
    audience:
      "Businesses that already have a website and want recurring upkeep rather than a new build or an open-ended support promise.",
    goal: "Make routine maintenance responsibilities and outstanding issues easier to understand and manage.",
    benefits: [
      "A defined boundary for supported systems and routine work",
      "An agreed process for handling small-change requests",
      "Clear visibility into completed work and items needing separate scope",
    ],
    deliverables: [
      "Supported-system and website-condition review",
      "Agreed routine checks and update work",
      "A defined small-change allowance where included",
      "Maintenance reporting and issue follow-up",
      "Periodic review of coverage and new requirements",
    ],
    inputs: [
      "Your current website technology and known issues",
      "Existing hosting and maintenance arrangements",
      "The routine tasks and changes you need help with",
    ],
    options: [
      {
        focus: "Essential recurring care",
        items: [
          "Identify the supported website environment",
          "Discuss core routine checks and update needs",
          "Agree reporting and issue-escalation responsibilities",
          "Separate new development from maintenance",
        ],
      },
      {
        focus: "Care with agreed small changes",
        items: [
          "Discuss routine care alongside a defined change allowance",
          "Identify how requests are submitted and reviewed",
          "Agree work boundaries and reporting expectations",
          "Confirm what happens when a request exceeds the scope",
        ],
      },
      {
        focus: "A broader recurring support scope",
        items: [
          "Review a more involved website environment",
          "Discuss a wider set of recurring responsibilities",
          "Define request limits and dependencies explicitly",
          "Agree reporting, escalation and periodic coverage review",
        ],
      },
    ],
    aftercare:
      "Monthly options are not unlimited development, emergency coverage or a response-time guarantee. The agreement defines supported systems, work limits, access, reporting and any separate provider costs before recurring work begins.",
  },
};
