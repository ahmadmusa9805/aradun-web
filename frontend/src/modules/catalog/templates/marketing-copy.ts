/** CAT-04 buyer guidance; existing offers/prices remain authoritative. */
export const marketingMeta =
  "Explore SEO, Google and Meta advertising, social media, content, email marketing and analytics. Find a practical next step for your business with ARADUN.";
export const marketingGroups = [
  { name: "Search visibility", ids: ["SVC-018", "SVC-024"] },
  {
    name: "Paid advertising & campaign management",
    ids: ["SVC-019", "SVC-021"],
  },
  {
    name: "Content & customer engagement",
    ids: ["SVC-020", "SVC-022", "SVC-023"],
  },
  { name: "Strategy, tracking & optimization", ids: ["SVC-025", "SVC-026"] },
] as const;
export const marketingCopy: Record<
  string,
  {
    summary: string;
    need: string;
    tools: string[];
    work: string[];
    detail: string;
    inputs: string[];
    boundary: string;
  }
> = {
  "SVC-018": {
    summary:
      "Make your website easier to find and understand through a clear plan for content, technical priorities and search performance.",
    need: "Improve your website's organic search visibility",
    tools: [
      "Google Search Console",
      "Google Analytics 4",
      "SEO analysis tools",
    ],
    work: [
      "SEO reviews",
      "Keyword research",
      "On-page SEO",
      "Technical SEO reviews",
      "Content planning",
      "Internal-link reviews",
      "E-commerce SEO",
      "Search performance reports",
      "Search-result appearance",
    ],
    detail:
      "Start with the pages, queries and audiences that matter to your business. We review the available evidence, agree priorities and separate content improvements from technical changes that need development support. Search visibility, including emerging AI-search experiences, starts with useful information and accessible content—not promises of a particular position.",
    inputs: [
      "Your website, audience and priority services or products",
      "Search Console/analytics access where available",
      "Existing content and any known technical or migration issues",
    ],
    boundary:
      "SEO is ongoing work, not a guaranteed ranking, inclusion in an AI answer or a fixed traffic increase. Technical implementation, extensive writing and third-party tools are included only where scoped.",
  },
  "SVC-019": {
    summary:
      "Plan and manage Google advertising around your audience, offer and measurable business goals, with a clear separation between management fees and ad spend.",
    need: "Run or improve Google advertising campaigns",
    tools: ["Google Ads", "Google Analytics 4", "Google Merchant Center"],
    work: [
      "Search campaigns",
      "Keyword planning",
      "Ad-group structure",
      "Ad-copy planning",
      "Lead generation campaigns",
      "Shopping campaign review",
      "YouTube campaign planning",
      "Campaign optimization",
      "Performance reporting",
    ],
    detail:
      "Define the offer, audience and conversion goal before deciding the campaign structure. Existing campaigns can be reviewed for targeting, messaging and measurement gaps. Shopping, video and other formats depend on your assets, account eligibility and the agreed scope; every format is not automatically included.",
    inputs: [
      "Your advertising account and access arrangements",
      "The offer, landing pages and intended conversion actions",
      "An advertising budget, target geography and existing campaign data",
    ],
    boundary:
      "The approved source states that setup and advertising spend are separate from management fees. Platform approval, leads, revenue and return on ad spend are not guaranteed.",
  },
  "SVC-020": {
    summary:
      "Build a more consistent social presence with planned content, organized publishing and a voice that fits your business.",
    need: "Keep your social content and publishing organized",
    tools: ["Facebook", "Instagram", "LinkedIn", "Scheduling tools"],
    work: [
      "Profile reviews",
      "Content calendars",
      "Post planning",
      "Caption preparation",
      "Publishing coordination",
      "Page optimization",
      "Community-response planning",
      "Content performance reviews",
      "Brand consistency",
    ],
    detail:
      "Choose the channels your customers use, then agree the content themes, publishing responsibilities and review process. Organic social management is distinct from paid advertising. We identify what your team supplies and what creative work belongs in the engagement.",
    inputs: [
      "Your profiles, audience and brand guidance",
      "Available photography, video and approved business information",
      "Content approval contacts and publishing responsibilities",
    ],
    boundary:
      "Platform count, post quantities, response coverage and creative production must be agreed. No unlimited posting, continuous community monitoring or follower-growth guarantee is implied.",
  },
  "SVC-021": {
    summary:
      "Reach relevant audiences on Facebook and Instagram through advertising campaigns shaped around your offer and the action you want people to take.",
    need: "Reach prospects through Facebook or Instagram advertising",
    tools: ["Meta Ads Manager", "Meta Pixel", "Conversions API"],
    work: [
      "Facebook campaigns",
      "Instagram campaigns",
      "Lead generation campaigns",
      "Audience planning",
      "Ad-creative briefs",
      "Retargeting planning",
      "Conversion-event reviews",
      "Campaign optimization",
      "Performance reporting",
    ],
    detail:
      "Match the audience, message and destination before launching a campaign. Lead forms, website journeys and retargeting are selected according to the account, data permissions and assets available. Pixel and server-side event work is reviewed separately where technical implementation is needed.",
    inputs: [
      "Your business/ad accounts and suitable permissions",
      "Approved offers, creative assets and landing pages",
      "Advertising budget, audience priorities and measurement requirements",
    ],
    boundary:
      "Advertising spend is separate from the approved management price. Additional design/video, event integration and setup need explicit scope. Account approval and campaign outcomes are not guaranteed.",
  },
  "SVC-022": {
    summary:
      "Help customers understand your expertise with useful content planned around their questions and your business priorities.",
    need: "Plan or create useful business content",
    tools: [
      "Google Docs",
      "Your publishing platform",
      "Content research tools",
    ],
    work: [
      "Content strategy",
      "Editorial calendars",
      "Blog planning",
      "Article writing",
      "Website copy",
      "Service-page content",
      "Case-study structure",
      "Content refreshes",
      "Editorial review",
    ],
    detail:
      "Start with the audience, their questions and the information you can support with facts. We organize a content direction and agree the writing or editing work. Genuine business proof and source material come from approved information rather than invented achievements, reviews or statistics.",
    inputs: [
      "Your audience, expertise and business goals",
      "Existing content and approved factual source material",
      "Tone guidance, publishing responsibilities and review contacts",
    ],
    boundary:
      "Article quantities, length, research depth, revisions and publishing are defined in the proposal. Photography, design, translation and specialist review are separate unless included.",
  },
  "SVC-023": {
    summary:
      "Communicate with an appropriate audience through clear email campaigns, useful messages and a reviewable sending plan.",
    need: "Plan an email campaign for your existing audience",
    tools: ["Mailchimp", "Brevo", "Klaviyo", "Your email platform"],
    work: [
      "Newsletter planning",
      "Promotional campaigns",
      "Email templates",
      "Audience segmentation",
      "Campaign copy",
      "Send-plan reviews",
      "Consent & opt-out checks",
      "Campaign reporting",
      "Retention-message planning",
    ],
    detail:
      "Agree who should receive the campaign, what it should communicate and how success will be assessed. Email marketing covers message and campaign work; complex CRM triggers and cross-channel automation can be scoped with AI Automation & CRM. We do not imply the purchase or use of an unsolicited bulk-contact list.",
    inputs: [
      "Your email platform and an appropriately permissioned audience",
      "The offer, message and relevant brand materials",
      "Segmentation needs, consent/opt-out arrangements and approval contacts",
    ],
    boundary:
      "Your proposal confirms the campaign quantities, billing arrangement, setup, platform charges and sending responsibilities. Inbox delivery and sales are not guaranteed.",
  },
  "SVC-024": {
    summary:
      "Make your local business information clearer and more consistent so nearby customers can understand what you offer and how to contact you.",
    need: "Improve how nearby customers discover your business",
    tools: ["Google Business Profile", "Google Maps", "Google Search Console"],
    work: [
      "Business-profile reviews",
      "Profile optimization",
      "Local keyword research",
      "Business-information consistency",
      "Local citation reviews",
      "Location-page reviews",
      "Genuine-review guidance",
      "Local content planning",
      "Local visibility reports",
    ],
    detail:
      "Review your real business details, service areas and local content before recommending improvements. Work may involve a Google Business Profile, location pages and consistency across relevant listings. Every location, address and review must be genuine and permitted.",
    inputs: [
      "Your actual business details, location/service area and website",
      "Business Profile access and verification status if available",
      "Existing listings and any known information inconsistencies",
    ],
    boundary:
      "Profile eligibility, verification and platform decisions remain outside our control. No fake address, fabricated review or guaranteed map position. Listing quantities and implementation tasks are agreed in scope.",
  },
  "SVC-025": {
    summary:
      "Understand the steps people take on your website and identify practical ways to improve measurement and conversion journeys.",
    need: "Understand traffic, inquiries and conversion journeys",
    tools: ["Google Analytics 4", "Google Tag Manager", "Meta Pixel"],
    work: [
      "Analytics reviews",
      "Conversion-event planning",
      "GA4 configuration",
      "Tag-manager reviews",
      "Campaign tracking",
      "Analytics dashboards",
      "Funnel analysis",
      "Landing-page reviews",
      "Experiment planning",
    ],
    detail:
      "Define meaningful actions before choosing tags or dashboards. We review the current setup, agree a measurement plan and assess where visitors encounter friction. Tracking implementation and experiments depend on appropriate access, consent arrangements, reliable data and a clearly defined scope.",
    inputs: [
      "Your website, conversion goals and existing reporting",
      "Analytics/tag-manager access and consent requirements",
      "Known tracking issues and relevant campaign or journey data",
    ],
    boundary:
      "Account permissions, appropriate consent and a clear event plan are agreed before tracking changes. A dashboard or experiment does not guarantee an increase in conversion rate.",
  },
  "SVC-026": {
    summary:
      "Make better-informed marketing decisions with a clear view of your audience, channels, resources and next priorities.",
    need: "Choose a marketing direction and prioritize the next steps",
    tools: [
      "Existing account reports",
      "Analytics tools",
      "Planning documents",
    ],
    work: [
      "Marketing reviews",
      "Audience research",
      "Competitor reviews",
      "Channel strategy",
      "Campaign planning",
      "Lead-generation planning",
      "B2B audience definition",
      "Budget prioritization",
      "Marketing roadmaps",
    ],
    detail:
      "Review your goals, resources and current activity, then turn the findings into practical priorities. B2B audience definition and lead-generation planning can be discussed here; a separately priced prospect-list, outreach or calling service is not silently included. Execution can be scoped under the relevant existing marketing service.",
    inputs: [
      "Your business goals, audience and current marketing activity",
      "Available reports, budget constraints and team capacity",
      "The decisions you want help making and the expected output",
    ],
    boundary:
      "Consulting outputs, meeting duration, research depth and follow-up are agreed in the proposal. Implementation work is included only when explicitly scoped.",
  },
};
export const marketingProcess = [
  [
    "Understand",
    "Discuss your business, customers and the change you want to make.",
  ],
  [
    "Review",
    "Assess relevant channels, existing evidence, resources and measurement.",
  ],
  [
    "Agree a plan",
    "Confirm deliverables, budget, dependencies and approval responsibilities.",
  ],
  [
    "Execute",
    "Deliver the agreed campaigns, content, reviews or technical work.",
  ],
  [
    "Measure & improve",
    "Review available evidence and recommend the next scoped improvements.",
  ],
] as const;
export const marketingBudgets = [
  [
    "Service or management fee",
    "The agreed work ARADUN performs, such as campaign management, content or an audit.",
  ],
  [
    "Advertising spend",
    "Money paid to the advertising platform. It is separate unless expressly included.",
  ],
  [
    "Setup & technical work",
    "Account configuration, tracking changes or integrations where separately required.",
  ],
  [
    "Creative production",
    "Additional graphics, photography, copy or video beyond the agreed deliverables.",
  ],
  [
    "Third-party tools",
    "Subscriptions, platform usage and other external charges identified for the engagement.",
  ],
] as const;
export const marketingFaqs = [
  [
    "Can you guarantee leads, sales or Google rankings?",
    "No. Results depend on your offer, competition, budget, audience behaviour and other factors. We focus on an appropriate plan, agreed execution and useful measurement rather than a promised business outcome.",
  ],
  [
    "Are advertising budgets included in the starting prices?",
    "Advertising spend is normally paid separately to the platform. The proposal distinguishes our work from ad spend, setup and other third-party costs before an engagement is agreed.",
  ],
  [
    "Is graphic design or video production included?",
    "Only where the proposal lists those deliverables. We agree what assets you supply, what we prepare and whether additional creative work needs separate scope.",
  ],
  [
    "How soon should I expect results?",
    "Timing varies with the channel, existing setup and the work involved. We agree a review plan around the available evidence; neither a fixed result date nor an improvement in leads, rankings or sales is guaranteed.",
  ],
  [
    "Can you work with our existing marketing accounts?",
    "We review account condition, suitable permissions and platform compatibility first. You should retain appropriate ownership and control of your business, advertising and analytics accounts.",
  ],
  [
    "Can I request a small task rather than ongoing management?",
    "Yes. Describe the audit, campaign setup, tracking issue or other focused task you need. We can discuss a suitable scope without assuming that you need a broad recurring engagement.",
  ],
] as const;
