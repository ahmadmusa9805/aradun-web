export const growthMeta =
  "Coordinate search, advertising, social media and content around clear business goals with ARADUN. Compare Business Growth options, measurement and separate advertising costs.";
export const growthPackages = [
  {
    title: "Focused business growth",
    fit: "For a small business starting with a clearly defined marketing priority.",
    scope: [
      "Review goals, audience and current marketing",
      "Agree the selected focus and monthly activity plan",
      "Execute and optimize the scoped work",
      "Review available performance tracking",
      "Define reporting and review/update arrangements",
    ],
    boundary:
      "Ad spend, complex setup, premium tools, extensive content and additional channels are separate. Channel count, quantities and reporting cadence are agreed before starting.",
  },
  {
    title: "Coordinated business growth",
    fit: "For growing businesses needing selected marketing activities to work together.",
    scope: [
      "Plan strategy, audience research and monthly priorities",
      "Coordinate selected campaign or content activities",
      "Execute and optimize the agreed workload",
      "Review conversion measurement and improvement opportunities",
      "Define combined reporting and strategy reviews",
      "Agree content, creative and revision allowances",
    ],
    boundary:
      "Ad spend, large creative campaigns, video production, extensive copywriting and extra channels require separate scope. Channel count, quantities and meeting cadence are agreed before starting.",
  },
  {
    title: "Growth around a broader operation",
    fit: "For multiple locations, larger campaigns, advanced measurement or coordinated marketing teams.",
    scope: [
      "Review channel, audience and location requirements",
      "Define content, campaigns and measurement needs",
      "Agree account ownership and approval responsibilities",
      "Plan reporting, budgets and ongoing delivery terms",
    ],
    boundary:
      "Custom scope does not imply unlimited channels, production, advertising spend or guaranteed outcomes.",
  },
];
export const growthSituations = [
  [
    "Customers cannot easily find us online.",
    "Review search visibility, website content and local-search opportunities.",
  ],
  [
    "We want to start online advertising.",
    "Plan selected campaigns around approved budgets, offers and measurement.",
  ],
  [
    "Our social activity is inconsistent.",
    "Agree a content schedule, materials and publishing approvals.",
  ],
  [
    "We have visits but few inquiries.",
    "Review important journeys and the quality of conversion measurement.",
  ],
  [
    "Our marketing lacks a clear direction.",
    "Prioritize activities and coordinate selected channels around business goals.",
  ],
];
export const growthServiceNeeds: Record<string, string> = {
  "SVC-018": "Improve search visibility through scoped SEO work.",
  "SVC-019": "Plan and manage agreed Google advertising campaigns.",
  "SVC-020": "Organize social content and publishing around your audience.",
  "SVC-022": "Create selected content supporting your marketing priorities.",
  "SVC-025": "Review conversion journeys and measurement.",
};
export const growthProcess = [
  [
    "Understand your business",
    "Review goals, customers, existing marketing and the available budget.",
  ],
  [
    "Choose priorities",
    "Select channels, activities and measurable objectives.",
  ],
  [
    "Prepare the plan",
    "Agree campaigns, content, access, approvals and responsibilities.",
  ],
  [
    "Execute & improve",
    "Deliver scoped work and make evidence-based adjustments.",
  ],
  ["Report & plan ahead", "Share findings and agree next-period priorities."],
];
export const growthTerms = [
  [
    "Management fee and advertising budget",
    "Your package fee covers agreed marketing work. Google/Meta ad spend is separate, approved by you and paid to the relevant platform. Additional setup and taxes are identified separately.",
  ],
  [
    "Content and production costs",
    "Premium software, additional design/video, new landing pages, extensive copywriting, photography and advanced tracking implementation are separate unless included.",
  ],
  [
    "Onboarding and minimum term",
    "Before you commit, the proposal identifies any setup fee, minimum term, start date and dependencies. No setup-fee waiver or minimum-term promise is inferred from the monthly price.",
  ],
  [
    "Renewal and cancellation",
    "The proposal specifies billing dates, renewal, cancellation notice, work already approved and account handoff. Terms are agreed before the engagement begins.",
  ],
  [
    "Reporting and approvals",
    "Agree report dates, review cadence, campaign counts, content quantities, platforms, revisions and who approves changes or spending. A review does not authorize an unapproved budget increase.",
  ],
  [
    "Ownership and access",
    "Use client-controlled advertising/analytics accounts where practical. Document creative rights, licenses, account access and handoff; keep credentials out of inquiry forms.",
  ],
  [
    "Privacy and measurement",
    "Tracking, analytics, cookies and customer lists require agreed privacy/consent handling. Use eligible recipients, approved claims and stopping/opt-out controls; no unsolicited campaigns are activated by this page.",
  ],
  [
    "Results and ongoing work",
    "Review measurable activity and evidence without guaranteed rankings, leads, revenue or return. Platform changes, market conditions, offer quality and available data influence results.",
  ],
];
export const growthFaqs = [
  [
    "Is advertising spend included?",
    "No. Advertising spend is separate from the management fee and follows the budget you approve.",
  ],
  [
    "Can you use our existing website and accounts?",
    "We review access, compatibility, account condition and measurement before confirming the scope.",
  ],
  [
    "Can you guarantee leads, sales or rankings?",
    "No. We agree measurable work and review evidence; specific business outcomes cannot be guaranteed.",
  ],
  [
    "Are design and video production included?",
    "Only where explicitly scoped. Additional creative work and third-party costs are identified separately.",
  ],
  [
    "Can I request one-time marketing work?",
    "Yes. Ask about a focused audit, campaign setup, consulting or tracking improvement rather than assuming you need a monthly plan.",
  ],
  [
    "How do monthly contracts work?",
    "Your proposal confirms billing, workload, approvals, reporting dates, renewal, cancellation and any minimum term or setup fee before you commit.",
  ],
];
export const growthMeasurements = [
  [
    "Search visibility",
    "Relevant search impressions, organic visits and agreed page improvements.",
  ],
  [
    "Advertising",
    "Approved spend, clicks, conversion evidence and cost per measured inquiry where tracking is reliable.",
  ],
  [
    "Social and content",
    "Agreed publishing activity, reach, engagement and relevant site visits.",
  ],
  [
    "Inquiries and quality",
    "Tracked inquiries and available client feedback on relevance, without assuming every inquiry becomes a sale.",
  ],
];

export const growthServiceGroups = [
  [
    "Search visibility",
    [
      ["SEO Services", "/services/seo-services"],
      [
        "Local SEO / Google Business Profile",
        "/services/local-seo-google-business-profile",
      ],
    ],
  ],
  [
    "Paid advertising",
    [
      ["Google Ads Management", "/services/google-ads-management"],
      ["Meta Ads Management", "/services/meta-ads-management"],
    ],
  ],
  [
    "Content & engagement",
    [
      ["Social Media Management", "/services/social-media-management"],
      ["Content Marketing", "/services/content-marketing"],
      ["Email Marketing", "/services/email-marketing"],
    ],
  ],
  [
    "Conversion & measurement",
    [
      [
        "Conversion Rate Optimization & Analytics",
        "/services/conversion-rate-optimization-analytics",
      ],
    ],
  ],
  [
    "Creative support",
    [
      ["Graphic Design", "/services/graphic-design"],
      ["Promotional / Ad Video", "/services/promotional-ad-video"],
    ],
  ],
] as const;
