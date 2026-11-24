/** CAT-02 only; original IDs, names, pricing and platform-scope gates preserved. */
export const mobileMeta =
  "Explore business and e-commerce mobile apps, custom development, app UI/UX design and maintenance. Plan the right mobile experience for your business with ARADUN.";
export const mobileCopy: Record<
  string,
  {
    summary: string;
    need: string;
    work: string[];
    tools: string[];
    detail: string;
    inputs: string[];
    boundary: string;
  }
> = {
  "SVC-006": {
    summary:
      "Build a useful mobile experience that helps your customers or employees complete the tasks that matter to your business.",
    need: "Build a business app or a focused first release",
    work: [
      "Business apps",
      "Customer-facing apps",
      "Employee workflows",
      "Booking-request journeys",
      "Mobile MVPs",
      "User-account journeys",
      "Agreed notifications",
      "Backend connections",
      "Responsive app navigation",
    ],
    tools: ["React Native", "Flutter", "iOS & Android APIs"],
    detail:
      "Start with the main task your app should support, then define the smallest useful release. A customer app, employee workflow or booking-request journey may need different screens, roles and backend services. We review those needs before choosing a platform or implementation approach.",
    inputs: [
      "Your users, business goal and essential tasks",
      "Required platforms, existing systems and brand assets",
      "The first-release priorities and any device or access constraints",
    ],
    boundary:
      "The starting price does not automatically include both iOS and Android, an unlimited screen count, a new backend or store submission. Your proposal defines platforms, features, testing and handover.",
  },
  "SVC-007": {
    summary:
      "Bring your products to mobile with a shopping journey shaped around your catalogue, customers and existing commerce systems.",
    need: "Create a mobile shopping experience",
    work: [
      "Product catalogues",
      "Product-detail screens",
      "Search & filters",
      "Shopping-cart journeys",
      "Agreed checkout flows",
      "Customer accounts",
      "Order-status views",
      "Commerce API connections",
      "Shopping-journey testing",
    ],
    tools: ["React Native", "Flutter", "Shopify/WooCommerce APIs"],
    detail:
      "Plan how customers discover products, understand options and complete the agreed purchase journey. Existing product, account and order systems are assessed before integration. A mobile storefront does not automatically include building a replacement commerce backend or selecting a payment provider.",
    inputs: [
      "Your product catalogue and existing store/backend",
      "Customer, order and payment-flow requirements",
      "API access documentation, brand assets and supported regions",
    ],
    boundary:
      "Payment, store-policy and provider requirements are reviewed separately. Checkout features, platform support, catalogue limits and integration scope are confirmed in the proposal; provider approval is not guaranteed.",
  },
  "SVC-008": {
    summary:
      "Turn a specialized product idea or mobile workflow into a clearly scoped application, with the right roles, data and integrations.",
    need: "Build a specialized application or integration-heavy app",
    work: [
      "Custom app workflows",
      "Product MVP planning",
      "Role-based journeys",
      "Marketplace concepts",
      "Subscription journeys",
      "API integrations",
      "Mobile data workflows",
      "Scoped AI assistance",
      "App modernization review",
    ],
    tools: ["React Native", "Flutter", "Native platform APIs", "Custom APIs"],
    detail:
      "Define the user roles, data, device requirements and the problem the application must solve. Marketplace, subscription or AI-assisted workflows need their own feasibility and scope review. Specialized hardware, advanced background behaviour and integrations are not assumed to be standard package features.",
    inputs: [
      "User roles, process examples and expected outcomes",
      "Data/API requirements and any device capabilities involved",
      "Priorities, constraints and representative acceptance scenarios",
    ],
    boundary:
      "A custom quote follows requirements review. Discovery may need a separately agreed scope. No fixed total, complete feature set or universal platform support is implied before that review.",
  },
  "SVC-009": {
    summary:
      "Plan the screens, navigation and interactions of your app before investing in development, with a clear design direction for the build.",
    need: "Design an app before implementation",
    work: [
      "User-journey mapping",
      "App wireframes",
      "Screen layouts",
      "Navigation design",
      "Interactive prototypes",
      "Component patterns",
      "Usability reviews",
      "Accessibility considerations",
      "Developer handoff",
    ],
    tools: ["Figma", "Prototyping tools", "Design specifications"],
    detail:
      "Translate the product's main tasks into understandable mobile journeys, then explore screens and interactions at the agreed level of detail. Wireframes, prototypes and handoff specifications help a development team understand the intended experience. They do not constitute a functioning application.",
    inputs: [
      "Target users and the app's main tasks",
      "Existing brand guidance, content and reference examples",
      "Required flows, screen priorities and developer constraints",
    ],
    boundary:
      "This is a design service. App development, backend work and store submission are separate unless explicitly combined. Screen counts, prototype depth, revisions and handoff formats are agreed in scope.",
  },
  "SVC-010": {
    summary:
      "Keep an existing app's routine upkeep organized through agreed checks, updates and support responsibilities.",
    need: "Maintain or review an app you already have",
    work: [
      "App-condition reviews",
      "Dependency updates",
      "Compatibility reviews",
      "Reproducible bug investigation",
      "Build-error reviews",
      "API-connection checks",
      "Scoped update tasks",
      "Release coordination",
      "Maintenance reporting",
    ],
    tools: [
      "Your existing app stack",
      "Xcode / Android tooling",
      "Build & diagnostic tools",
    ],
    detail:
      "Review the source, dependencies and operating responsibilities before agreeing ongoing care. A crash, login issue, failed build or small update can be assessed without assuming you need a new application. A one-off repair, larger upgrade or additional publishing task is scoped separately from recurring maintenance where needed.",
    inputs: [
      "The existing app, source-code ownership and technology",
      "Reproduction steps, test environment and known issues",
      "Current developer accounts and maintenance arrangements",
    ],
    boundary:
      "Monthly care is not unlimited new development, emergency coverage or a guaranteed response time. Supported versions, checks, change limits and release responsibilities are defined in the agreement.",
  },
};
export const mobileProcess = [
  ["Understand", "Review users, the business goal and the intended platforms."],
  [
    "Plan",
    "Define essential features, integrations and first-release priorities.",
  ],
  ["Design", "Plan screens, navigation and the agreed user journeys."],
  [
    "Develop & test",
    "Build the scoped work and check key flows on supported devices.",
  ],
  [
    "Handover & release",
    "Prepare agreed ownership notes and any included submission assistance.",
  ],
] as const;
export const mobileConsiderations = [
  [
    "Platforms & devices",
    "Agree iOS, Android or a cross-platform approach, supported versions and the devices to be tested. A starting price does not automatically include every platform.",
  ],
  [
    "Backend & integrations",
    "Identify existing APIs and services, required new backend work and who maintains each part. Payment, messaging and AI providers have their own requirements.",
  ],
  [
    "Design versus development",
    "Design files and prototypes are distinct from working app code. The proposal states which outputs belong in the engagement.",
  ],
  [
    "Accounts & publishing",
    "Agree developer-account ownership, signing, testing and submission responsibilities. Store approval remains with Apple or Google; assistance is not a guarantee of acceptance.",
  ],
  [
    "Ongoing costs & care",
    "Developer-account fees, hosting, subscriptions, provider usage and maintenance are separate unless expressly included. New work and recurring care have clear boundaries.",
  ],
] as const;
export const mobileFaqs = [
  [
    "Does Mobile App UI/UX Design include development?",
    "No. Wireframes, screens and prototypes are design deliverables. Working app code, backend services and release tasks are included only when explicitly combined in the proposal.",
  ],
  [
    "Can the app support both Android and iOS?",
    "We review the required platforms and suitable technology with you. The starting price does not automatically include both platforms; supported versions, device testing and platform-specific work are agreed in scope.",
  ],
  [
    "Can we start with an MVP?",
    "Yes. A focused first release can prioritize the smallest useful set of tasks. We identify the essential screens, integrations and acceptance checks before discussing later improvements.",
  ],
  [
    "Can you improve an app someone else developed?",
    "Potentially. We first review source-code access, ownership, dependencies, technical condition and the issue you want to solve. Repairs, upgrades and release assistance are agreed after that review, not assumed to be included in maintenance.",
  ],
  [
    "Who handles App Store or Google Play submission?",
    "Submission assistance can be included where agreed, with account access and responsibilities defined first. Store policies, verification and review decisions remain with the platform, so approval and review timing cannot be guaranteed.",
  ],
  [
    "Who owns the application and developer accounts?",
    "Ownership, source-code delivery and handover terms are confirmed in the agreement. We recommend that you retain control of your own business developer accounts and use appropriate access permissions for delivery work.",
  ],
  [
    "Is ongoing support included?",
    "Only where the proposal states it. Recurring maintenance defines supported systems, work limits and responsibilities. New features or major changes may need separate development scope.",
  ],
] as const;
