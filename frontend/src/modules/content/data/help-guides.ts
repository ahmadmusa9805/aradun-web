import { publicFaqs } from "./public-copy";
import { readingSchema, type Reading } from "../reading";

// Source-managed marketing copy: the existing FAQ remains the single short-answer master.
const guidance = {
  services: {
    scope:
      "Use this guide when considering an individual service, several related services or a broader business solution.",
    steps: [
      "Browse the services relevant to your business goal.",
      "Explain which outcomes you need and any existing systems involved.",
      "Discuss the responsibilities, inclusions and dependencies before agreeing on a written scope.",
    ],
    link: "/services",
    label: "Explore services",
  },
  "not-sure": {
    scope:
      "You can start with a business problem instead of a technical specification or selected package.",
    steps: [
      "Describe what you want to improve and who it should help.",
      "Mention your current website, tools or manual workflow where relevant.",
      "Request a consultation to discuss a suitable direction. A request does not confirm a meeting slot.",
    ],
    link: "/consultation",
    label: "Request a consultation",
  },
  "starting-prices": {
    scope:
      "Displayed USD prices help you explore possible starting points. They are not an automatic binding quotation.",
    steps: [
      "Review the relevant service or solution and its stated pricing context.",
      "Share the deliverables, integrations and constraints that affect scope.",
      "Confirm billing units, fees, third-party costs and responsibilities in a proposal before agreeing to proceed.",
    ],
    link: "/pricing",
    label: "Review indicative pricing",
  },
  timelines: {
    scope:
      "Project schedules depend on the agreed work and the inputs and decisions needed to deliver it.",
    steps: [
      "Describe the outcome and any target date when making your inquiry.",
      "Identify content, access, integrations or approvals that the project depends on.",
      "Agree on scope, review stages and a realistic schedule after those dependencies are understood.",
    ],
    link: "/get-a-quote",
    label: "Discuss your project",
  },
  international: {
    scope:
      "ARADUN accepts international business inquiries. Working arrangements are discussed for each engagement.",
    steps: [
      "Share your location or time zone and the context of your project.",
      "Discuss suitable communication times and any contractual requirements.",
      "Confirm the agreed working arrangements and responsibilities in the project scope.",
    ],
    link: "/contact",
    label: "Contact ARADUN",
  },
  maintenance: {
    scope:
      "Ongoing maintenance and support need an agreed scope. An initial project does not automatically include unlimited ongoing assistance.",
    steps: [
      "Describe which website, system or workflow needs ongoing support.",
      "Discuss expected maintenance, responsibilities and any external subscriptions.",
      "Check the written scope for what is included before assuming revisions, support hours or recurring work.",
    ],
    link: "/services",
    label: "Explore support-related services",
  },
} as const;

export function getHelpGuide(slug: string): Reading | null {
  const faq = publicFaqs.find((item) => item.id === slug);
  if (!faq) return null;
  const guide = guidance[faq.id];
  return readingSchema.parse({
    kind: "help",
    slug: faq.id,
    title: faq.question,
    summary: faq.answer,
    sections: [
      {
        title: "When this guidance applies",
        blocks: [{ type: "paragraph", text: guide.scope }],
      },
      {
        title: "How to take the next step",
        blocks: [{ type: "list", items: [...guide.steps] }],
      },
    ],
    related: [
      { title: guide.label, href: guide.link },
      ...publicFaqs
        .filter((item) => item.id !== faq.id)
        .slice(0, 2)
        .map((item) => ({ title: item.question, href: `/faq/${item.id}` })),
    ],
  });
}
