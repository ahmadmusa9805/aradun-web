/** CAT-03 content only. Illustrative scope, not activated integrations or fixed package terms. */
export const automationMeta =
  "Explore CRM setup, workflow automation, lead follow-up, AI chatbots, voice agents and integrations. Find a practical next step for your business with ARADUN.";
export const automationGroups = [
  { name: "CRM & sales automation", ids: ["SVC-012", "SVC-013"] },
  { name: "Business & workflow automation", ids: ["SVC-011"] },
  { name: "AI agents & assistants", ids: ["SVC-014", "SVC-016", "SVC-015"] },
  { name: "Managed services", ids: ["SVC-017"] },
] as const;
export const automationCopy: Record<
  string,
  {
    summary: string;
    need: string;
    tools: string[];
    work: string[];
    detail: string;
    inputs: string[];
  }
> = {
  "SVC-011": {
    summary:
      "Connect your business apps and reduce repetitive data entry, handoffs and notifications with workflows built around clear rules.",
    need: "Connect apps and reduce repetitive manual tasks",
    tools: ["Zapier", "Make", "n8n", "Airtable", "Google Sheets"],
    work: [
      "Data-entry automation",
      "Customer onboarding",
      "Invoice workflows",
      "Reporting & alerts",
      "App connections",
      "API & webhook workflows",
      "Data synchronization",
      "Internal notifications",
      "Approval handoffs",
    ],
    detail:
      "Map what starts a process, the information it needs and what should happen when something goes wrong. Workflow automation can connect compatible tools without AI, with review steps where a person needs to decide. API connections and invoice workflows are scoped integrations, not payment processing or an accounting-system guarantee.",
    inputs: [
      "The current steps and the apps involved",
      "Sample records without sensitive customer information",
      "Trigger rules, exceptions and the person responsible for each handoff",
    ],
  },
  "SVC-012": {
    summary:
      "Organize contacts, pipelines and customer processes in a CRM configured around how your team works.",
    need: "Set up or improve how your CRM organizes customer work",
    tools: ["GoHighLevel", "HubSpot", "Zoho CRM", "Airtable"],
    work: [
      "CRM setup",
      "Sales pipelines",
      "Contact management",
      "Custom fields",
      "CRM dashboards",
      "Task configuration",
      "Record imports",
      "Data cleanup",
      "Access & ownership rules",
    ],
    detail:
      "Start with the records, stages and responsibilities your team needs. Existing CRM cleanup, import mapping and migration requirements can be reviewed under a scoped CRM engagement; transfer volumes, historical records, attachments and connected workflows are assessed before work is agreed.",
    inputs: [
      "Your CRM, account plan and current sales process",
      "Required fields, pipeline stages and team roles",
      "Import sources, data ownership and records that need preservation",
    ],
  },
  "SVC-013": {
    summary:
      "Capture inquiries, route them to the right person and organize approved follow-ups so the next action is easier to see.",
    need: "Capture leads and organize timely follow-up",
    tools: ["GoHighLevel", "HubSpot", "Zapier", "Make"],
    work: [
      "Website-form capture",
      "Supported ad-lead connections",
      "Lead routing",
      "Follow-up sequences",
      "Email notifications",
      "SMS & WhatsApp workflows",
      "Appointment reminders",
      "Calendar handoffs",
      "Consent & opt-out handling",
    ],
    detail:
      "Separate lead capture, assignment and follow-up so the journey stays understandable. Scheduling reminders and selected messaging channels can be reviewed as part of the workflow. Outreach requires appropriate permission, channel eligibility and approved content; campaign strategy and creative production are separate marketing work.",
    inputs: [
      "Lead sources and routing responsibilities",
      "Approved follow-up content, consent records and opt-out rules",
      "Calendars, message channels and the accounts you already own",
    ],
  },
  "SVC-014": {
    summary:
      "Help customers find useful answers and reach your team through AI conversations grounded in approved business information.",
    need: "Help customers find answers through an AI assistant",
    tools: [
      "OpenAI APIs",
      "n8n",
      "WhatsApp Business Platform",
      "Supported messaging APIs",
    ],
    work: [
      "Website AI chatbots",
      "WhatsApp AI assistants",
      "Facebook & Instagram chatbots",
      "Knowledge-base assistants",
      "FAQ conversations",
      "Inquiry qualification",
      "Appointment-request handoff",
      "Human-agent escalation",
      "Conversation testing",
    ],
    detail:
      "Define what the assistant can answer, which approved information it may use and when it should hand off. Knowledge-base retrieval, website chat and eligible messaging channels are discussed around your data and access requirements. The assistant is not a guarantee of perfect answers or a replacement for necessary human review.",
    inputs: [
      "Approved business information and answer boundaries",
      "The intended website or eligible messaging channel",
      "Escalation contacts, data handling and representative test questions",
    ],
  },
  "SVC-015": {
    summary:
      "Add AI to defined business tasks such as document handling, information extraction and staff-assisted decision workflows.",
    need: "Use AI within an existing application or business process",
    tools: ["OpenAI APIs", "n8n", "Make", "Custom APIs"],
    work: [
      "AI email assistants",
      "Document processing",
      "Information extraction",
      "Lead qualification support",
      "Draft preparation",
      "Knowledge retrieval",
      "Custom task agents",
      "AI-enabled API connections",
      "Review & evaluation flows",
    ],
    detail:
      "Choose a bounded task, define the information it may access and agree how outputs are checked. Custom agents, document extraction and lead qualification support are scoped around permissions and evaluation. Sensitive or consequential actions need appropriate safeguards and human approval rather than an assumption of unrestricted autonomy.",
    inputs: [
      "A specific task and examples of acceptable output",
      "Permitted data sources and integration documentation",
      "Quality checks, approval requirements and usage expectations",
    ],
  },
  "SVC-016": {
    summary:
      "Support defined phone inquiries and call handoffs with a voice assistant designed around your business information and escalation rules.",
    need: "Handle a defined phone-inquiry journey with AI",
    tools: ["Twilio", "Voice AI APIs", "CRM APIs", "Calendar APIs"],
    work: [
      "AI receptionist flows",
      "Inbound inquiry handling",
      "Common-question responses",
      "Call routing",
      "Appointment-request assistance",
      "CRM call notes",
      "Human call transfer",
      "Authorized callback flows",
      "Voice-flow testing",
    ],
    detail:
      "Map the conversation, permitted questions and transfer route before selecting a voice provider. Phone availability, languages, recording, consent, retention and any outbound use require an explicit review. A requested appointment remains a request unless a functioning scheduling integration confirms it; no unrestricted cold-calling service is implied.",
    inputs: [
      "Call scenarios, supported hours and escalation contacts",
      "Your phone/provider setup and account permissions",
      "Approved scripts, consent requirements and recording policy if relevant",
    ],
  },
  "SVC-017": {
    summary:
      "Keep agreed CRM, integration and automation work organized through health checks, troubleshooting and a defined support scope.",
    need: "Maintain an existing CRM or automation setup",
    tools: ["Your existing CRM", "n8n", "Zapier", "Make"],
    work: [
      "Workflow health reviews",
      "CRM administration",
      "Integration troubleshooting",
      "Failure investigation",
      "Credential-expiry checks",
      "Approved configuration updates",
      "AI-output review",
      "Documentation upkeep",
      "Scoped improvement requests",
    ],
    detail:
      "Identify the systems covered, the checks required and how issues are escalated. Maintenance is not unlimited new implementation, a guaranteed response time or continuous monitoring unless those responsibilities are explicitly included. New channels, major migrations and new workflows need separate scope.",
    inputs: [
      "An inventory of existing workflows, accounts and owners",
      "Known failures and available run history",
      "Required support boundaries and change priorities",
    ],
  },
};
export const automationProcess = [
  [
    "Understand",
    "Review your goals, current systems and the task you want to improve.",
  ],
  ["Plan", "Map triggers, data, permissions, exceptions and human handoffs."],
  [
    "Agree scope",
    "Confirm the work, dependencies, costs and responsibilities.",
  ],
  ["Build & test", "Check normal journeys, failed steps and review scenarios."],
  [
    "Handover",
    "Provide agreed operating notes and discuss optional ongoing care.",
  ],
] as const;
export const automationFaqs = [
  [
    "Do I need AI to automate a business task?",
    "No. Clear rules, connected apps and well-defined handoffs solve many routine tasks without AI. We consider AI where it adds practical value and its output can be checked.",
  ],
  [
    "Can you work with my existing CRM and software?",
    "We first review your existing accounts, API access, plan limits and the workflow you need. The tools shown are examples to evaluate, not a promise that every feature works on every account or subscription.",
  ],
  [
    "Can I request migration, reminders or a messaging workflow?",
    "Yes. Describe the specific task and current setup. CRM imports and cleanup can be discussed with CRM Setup & Customization; reminders and approved follow-up channels with Lead Follow-up Automation; app and API connections with Workflow Automation or AI Integrations where AI is needed.",
  ],
  [
    "Are subscriptions, calls and AI usage included?",
    "Third-party subscriptions, AI usage, phone numbers, calls and messaging charges are separate unless the proposal explicitly includes them. We identify the relevant accounts and usage assumptions before agreeing implementation.",
  ],
  [
    "Can an assistant answer everything or replace my team?",
    "No. We agree its permitted information, answer boundaries and escalation route. Exceptions, uncertain answers and sensitive actions may require human review. AI output should be tested against representative examples.",
  ],
  [
    "What if an automation fails or an app changes?",
    "The project scope can address failure handling, useful alerts and operating notes. Ongoing review and troubleshooting can be arranged under Automation Maintenance. Provider/API changes and expanded requirements may need additional work.",
  ],
  [
    "Do you offer a small task as well as a larger solution?",
    "Tell us what you want to achieve, even if it is one workflow or a specific issue. We assess the work before recommending a scope; a starting price is not a fixed quote or an obligation to buy a broad package.",
  ],
] as const;
export const popularAutomations = [
  {
    title: "Website inquiry → CRM",
    text: "Capture the agreed fields and give the right person a clear next action.",
    id: "SVC-013",
  },
  {
    title: "CRM imports & cleanup",
    text: "Review source records, field mapping and duplicate handling before moving data.",
    id: "SVC-012",
  },
  {
    title: "Appointments & reminders",
    text: "Connect eligible calendars and approved confirmation or reminder journeys.",
    id: "SVC-013",
  },
  {
    title: "Email, SMS & WhatsApp",
    text: "Plan permission-based notifications and follow-up across selected channels.",
    id: "SVC-013",
  },
  {
    title: "Apps, APIs & webhooks",
    text: "Connect compatible systems and define what happens when a step fails.",
    id: "SVC-011",
  },
  {
    title: "Customer onboarding",
    text: "Coordinate forms, tasks, internal alerts and human approval steps.",
    id: "SVC-011",
  },
  {
    title: "AI document assistance",
    text: "Extract or summarize agreed information with review before consequential use.",
    id: "SVC-015",
  },
  {
    title: "Customer questions & calls",
    text: "Help people find approved answers and hand off when a person is needed.",
    id: "SVC-014",
  },
] as const;
