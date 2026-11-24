export const businessAutomationMeta =
  "Connect CRM, lead follow-ups and business workflows with ARADUN. Compare Business Automation options, integration requirements and ongoing software costs.";
export const businessAutomationPackages = [
  {
    title: "Essential business automation",
    fit: "A focused starting point for organizing leads and improving one selected process.",
    scope: [
      "Review your current lead source and repetitive process",
      "Define a focused CRM configuration and sales-pipeline scope",
      "Plan the selected trigger, actions and supported lead-source connection",
      "Agree notifications or permission-based follow-up and stopping rules",
      "Define duplicate handling, errors and human escalation",
      "Test the agreed workflow and document the handoff",
    ],
    boundary:
      "CRM subscriptions, messaging fees, complex custom APIs, AI agents, large migrations and ongoing maintenance are separate unless explicitly included.",
  },
  {
    title: "Connected business automation",
    fit: "For a growing business needing connected processes and clearer ownership across its systems.",
    scope: [
      "Plan CRM customization and the required pipeline structure",
      "Map connected workflows and supported application integrations",
      "Define lead capture, routing and approved follow-up rules",
      "Review reporting and activity-visibility requirements",
      "Agree exception alerts, stopping rules and human handoff",
      "Test successful actions, failures and duplicates",
      "Define documentation, team walkthrough, revision and correction coverage",
    ],
    boundary:
      "Software and usage fees, advanced custom integrations, AI voice agents, extensive migrations and ongoing monitoring are separate unless explicitly included.",
  },
  {
    title: "Automation around a larger operation",
    fit: "For multiple teams, complex approvals, advanced CRM needs or custom integration requirements.",
    scope: [
      "Review teams, data boundaries and ownership",
      "Map advanced integration and approval requirements",
      "Evaluate whether custom software or AI is appropriate",
      "Agree delivery stages, testing and ongoing responsibilities",
    ],
    boundary:
      "Custom scope does not imply unlimited integrations, guaranteed outcomes or automatic AI/monitoring coverage.",
  },
];
export const businessAutomationSituations = [
  [
    "We lose track of new leads.",
    "Connect selected inquiry sources with CRM records, ownership and notifications.",
  ],
  [
    "We manually update customer records.",
    "Plan selected data transfers with validation and duplicate controls.",
  ],
  [
    "We forget customer follow-ups.",
    "Define approved triggers, stopping rules and situations needing a human response.",
  ],
  [
    "Appointment administration takes too much time.",
    "Review compatible booking, calendar and reminder connections.",
  ],
  [
    "Our applications do not communicate.",
    "Check supported APIs, subscription requirements and the information to exchange.",
  ],
  [
    "We want AI to help with inquiries.",
    "Assess a scoped assistant as an optional component, with human escalation.",
  ],
];
export const businessAutomationServiceNeeds: Record<string, string> = {
  "SVC-011": "Automate a defined repetitive process.",
  "SVC-012": "Organize contacts, fields and sales pipelines.",
  "SVC-013": "Connect lead follow-up with permissions and stopping rules.",
  "SVC-017": "Arrange separately scoped maintenance for existing workflows.",
  "SVC-014": "Explore a defined chatbot task with a human handoff.",
};
export const businessAutomationProcess = [
  [
    "Understand the process",
    "Identify repetitive work, existing tools, data and the intended result.",
  ],
  [
    "Plan the automation",
    "Agree triggers, actions, permissions, complexity limits and responsibilities.",
  ],
  [
    "Configure & connect",
    "Set up the selected CRM features, workflows and compatible integrations.",
  ],
  [
    "Test & refine",
    "Check success, failures, duplicates, stopping rules and manual handoffs.",
  ],
  [
    "Document & deliver",
    "Explain the workflow, access, known limits and who manages it after delivery.",
  ],
];
export const businessAutomationTerms = [
  [
    "Software and usage costs",
    "Project fees cover the agreed implementation. CRM/automation subscriptions, email/SMS/WhatsApp, AI usage and premium APIs may be charged separately.",
  ],
  [
    "Client-owned accounts and access",
    "Use client-controlled provider accounts where practical. Agree least-privilege access, secure credential exchange and who can change connections; never send credentials through the inquiry form.",
  ],
  [
    "Permission-based communication",
    "Messages need an appropriate permission basis, approved content and stopping/opt-out rules. This service does not authorize unsolicited campaigns or automatic outreach without approval.",
  ],
  [
    "Workflow boundaries",
    "The proposal defines triggers, actions, branches, applications, data volume, expected usage and provider limits. One selected process is not an unlimited set of independent workflows.",
  ],
  [
    "Testing and safe handoff",
    "Agree validation, duplicate handling, retries, exception alerts and manual escalation. Use privacy-safe test data and confirm who can pause or disable the automation.",
  ],
  [
    "Revisions and corrections",
    "Define consolidated feedback rounds, acceptance checks and any delivered-work correction period before starting. New integrations, workflow changes and third-party outages are different from implementation defects.",
  ],
  [
    "Monitoring and maintenance",
    "Document what happens when a workflow fails and who responds. Ongoing monitoring, platform changes, maintenance and response coverage require a separate agreement unless explicitly included.",
  ],
  [
    "AI is optional",
    "Rules-based automation often fits without AI. Any AI component requires a defined task, provider/data review, usage costs, human oversight and separate scope; it is not automatically included.",
  ],
];
export const businessAutomationFaqs = [
  [
    "Does business automation require AI?",
    "No. Many useful automations use rules and existing applications. AI is considered only when it fits a specific, approved task.",
  ],
  [
    "Can you work with our existing CRM?",
    "We review its access, APIs, features and subscription before confirming compatibility and scope.",
  ],
  [
    "Are subscriptions and messaging fees included?",
    "They are separate unless explicitly included. Relevant recurring and usage-based costs are identified before implementation.",
  ],
  [
    "Will everything run without human involvement?",
    "Not always. We define approvals, exception alerts, stopping rules and situations requiring a manual response.",
  ],
  [
    "What happens if a workflow fails?",
    "The agreed implementation includes defined error-handling and testing. Ongoing monitoring and response coverage need a support agreement unless included.",
  ],
  [
    "Can I request only one automation?",
    "Yes. A focused CRM improvement, workflow or integration can be discussed as a smaller custom scope.",
  ],
];
export const businessAutomationPlatforms = [
  ["CRM", "GoHighLevel · HubSpot · Zoho CRM"],
  ["Automation", "Zapier · Make · n8n"],
  ["Business applications", "Google Sheets · Airtable · Calendly"],
  [
    "Communication",
    "Email · supported SMS providers · WhatsApp Business integrations",
  ],
];
