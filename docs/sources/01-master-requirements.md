# ARADUN — Master Business and Functional Requirements

**Filename:** `01-master-requirements.md`  
**Version:** 0.3.0 — full phase page-inventory amendment  
**Date:** 25 October 2026  
**Status:** OWNER-DESIGNATED PLANNING REFERENCE — scoped amendment approved; unresolved details retained  
**Owner and approver:** ARADUN project owner  
**Planning stage:** Step 1 — Master Business and Functional Requirements

**Controlled update 0.3.0 — 25 October 2026:** Owner-authorized documentation-only amendment limited to the requested architecture, local-development database, solo-maintainer engineering rules and three-theme system where relevant. Unrelated requirements and unresolved gates remain unchanged. Earlier source-register versions/fingerprints and historical approval entries identify the pre-update inputs, not hashes of these revised files; current amended sections govern only these four changes. No implementation or Project Sources replacement is claimed.

This document preserves the consolidated requirements baseline and records the owner's subsequent designation of it as an authoritative Project Source. Version 0.2.0 updates phase page counts and the complete planning inventory in coordination with `02-pages-sitemap.md` v1.1.0. The original v0.1.0 draft and its approval history remain recorded; this revision does not convert unresolved recommendations into confirmed requirements.

**Owner clarification — 23 October 2026 (Asia/Dhaka):** Plan the entire Phase 1 public website and private dashboard, including all 57 services and every reusable detail-page template. Do not reduce scope to the former first-publication subset. Implementation may be divided into manageable steps. The owner also requests equivalent complete inventories for Phases 2 and 3 and coordinated updates to both source documents. This is a scoped planning decision; existing conditional functionality, commercial facts and implementation approvals remain explicit. Step 3 has begun, and the homepage section proposal is accepted for now; remaining section groups still require review. This update does not create the final Step 3 deliverable.

Section 17 governs the current full-page planning scope. Existing requirement IDs, catalog identities, prices, open decisions and phase qualifications remain authoritative except for the explicitly superseded first-publication subset wording.

## Contents

1. Document authority and approval rules
2. Business identity, positioning, and markets
3. Business model, commercial policy, and operations
4. Services and existing pricing
5. Business solutions and packages
6. Sales, trust, content, and customer journeys
7. Roles and access boundaries
8. Three-phase scope and constraints
9. Technology and architectural constraints
10. Requirement format and dependency conventions
11. Complete functional requirement inventory
12. Additional business and quality requirements
13. Phase summaries and launch acceptance
14. Open decisions and conflict register
15. Source coverage and approval register
16. Change log
17. Full phase page inventory and owner amendment

## 1. Document authority and approval rules

### 1.1 Source register

| Code | Exact source | Authority and use |
|---|---|---|
| S1 | ARADUN_PROJECT_MASTER_CONTEXT_UPDATED(2).md | Existing high-level approvals, full service prices, solution prices, workflows, architecture, and final 21 October Phase 1 amendment. |
| S2 | ARADUN_Complete_Agency_Functionality_Catalog_UPDATED(2).docx | Complete 207-row feature checklist across 14 areas. General priorities are proposals unless supported by an explicit approval; final amendment explicitly approves ten P1 selections. |
| S3 | ARADUN_Sales_Trust_Pricing_Technology_Recommendations(2).docx | Recommendations, including three price increases and launch booking; not automatic approval. |
| S4 | Pasted markdown.md | Supporting legal, communications, and finance business-readiness outline; not proof of registration or account setup. |
| S5 | Pasted markdown (2).md | Portfolio evidence, project classifications, and candidate project ideas; not proof that examples are built. |
| S6 | Pasted text.txt | Supplemental website, industry, product, content, conversion, quality, and launch ideas; contains conflicts and historical completion claims that do not override S1. |
| S7 | Current owner messages in this conversation | Explicit instructions, broader services-and-products vision, supplied domain/contact/social details, and request for this review draft. |
| R | Recommendations developed in this consolidation | Proposed clarifications and acceptance criteria; not previously approved decisions. |

The local supplied copies were read. This draft does not rely on the unnamed “Pasted markdown (4)” or similar references embedded inside S6; those references are not available evidence. No external account ownership, mailbox operation, trademark status, language derivation, legal compliance, or provider eligibility was independently verified for this document.

### 1.2 Precedence

1. A clear, explicit owner decision supersedes the specific earlier decision it changes.
2. Explicit amendments supersede conflicting earlier passages within the same source. In particular, the final S1/S2 amendment governs the ten promoted Phase 1 features.
3. S1 supplies the existing approved baseline; S2 supplies coverage and proposed future priorities; S3–S6 contribute topic-specific recommendations.
4. A later upload alone does not approve its recommendations or replace previous requirements. Conflicts remain visible in Section 14.
5. Approval of a business concept is distinct from approval of implementation details, public claims, or a completed implementation.

### 1.3 Status vocabulary

- **Confirmed concept:** explicitly approved in S1/S2 amendments or directly stated by the owner. Detailed criteria in this draft still require review.
- **Owner-supplied fact:** supplied by the owner, without independent operational verification.
- **Proposed:** recommendation or catalog idea awaiting acceptance.
- **Decision required:** conflicting scope, phase, policy, or fact prevents a final choice.
- **Conditional future:** retained for completeness; no commitment to build unless later justified and approved.

Do not interpret P1 as approval by itself. Phase indicates intended release placement; status indicates authorization. Do not silently remove, rename, merge away, or reprioritize approved services, prices, or functionality. Every scope change needs a dated decision and affected requirement IDs.

## 2. Business identity, positioning, and markets

### 2.1 Brand foundation

| Item | Baseline | Status |
|---|---|---|
| Brand | ARADUN | Confirmed |
| Descriptor | Technology & Digital Solutions | Confirmed |
| Primary tagline | Build. Automate. Grow. | Confirmed |
| Business | International B2B technology and digital services | Confirmed |
| Broader strategic direction | Professional services plus ARADUN-owned software, SaaS, industry platforms, and other digital products | Owner-stated intent; individual products and investment unapproved |
| Supporting theme | Technology Without Boundaries. | Owner-provided direction; final public wording for review |
| Website language/currency | English and USD initially | Confirmed |
| Operating location | Dhaka, Bangladesh | Owner-supplied city; not a verified registered-office address |
| Primary domain | aradun.com | Owner states ownership; launch DNS/hosting checks pending |

**Proposed identity statement:** ARADUN is a technology and digital solutions company serving businesses globally through professional services and the development of its own software and digital products. Product language must reflect actual readiness; it must not imply released products exist.

**Proposed mission:** Help businesses solve practical problems through thoughtful design, reliable software, automation, secure infrastructure, and digital growth services.

**Proposed vision:** Build a global technology company whose services and products help businesses across industries and markets operate effectively and grow.

**Proposed positioning:** ARADUN combines design, software engineering, AI and automation, cloud and DevOps, cybersecurity, and digital marketing to support businesses from initial planning through delivery, ongoing improvement, and growth.

**Value proposition for review:** A coordinated technology partner that connects a client's website, software, operations, infrastructure, and growth activities around defined business outcomes, with clear scope and maintainable delivery.

These are positioning commitments to substantiate, not demonstrated competitive superiority. Actual differentiators must be supported by delivery capability, relevant work, transparent process, or verified client evidence. Do not claim “leading,” “#1,” worldwide offices, guaranteed results, or large client counts without evidence.

### 2.2 Brand story and personality

The owner describes ARADUN as inspired by Arabic أَرَضُونَ and the idea of lands or earths, representing a broad cross-border vision. This is recorded as the founder's intended inspiration, not a verified literal translation or pronunciation. Verify linguistic wording before publishing it as fact.

Proposed values: Innovation, Quality, Security, Clarity, Partnership, and Growth. Proposed personality: modern, professional, technical, creative, clear, security-conscious, and global in ambition. Voice: clear, confident, helpful, and technically credible. Use plain business language and explain outcomes before technical details.

### 2.3 Target customers and markets

Confirmed near-term go-to-market focus: small and medium-sized service businesses needing websites, lead capture, CRM/workflow automation, and related digital solutions. This is an internal acquisition priority, not a restriction on the full catalog.

Broader intended customers: startups, SMBs, growing companies, and established organizations seeking software, digital transformation, automation, infrastructure, security, or digital growth. Proposed buyer roles include founders, owners, operations leads, marketing leaders, and technical decision-makers; validate priority personas during review.

| Target industry from owner | Typical problem-to-service fit; examples are not claims of delivered work |
|---|---|
| Insurance & Financial Services | Lead management, business workflows, portals, secure systems, future specialized products |
| Healthcare & Medical | Scheduling/workflow improvements, public websites, portals subject to applicable data controls |
| Education | Learning/business platforms, websites, communication workflows |
| Real Estate | Property experiences, CRM, lead follow-up, digital acquisition |
| Construction & Home Services | Service websites, inquiries, scheduling workflows, marketing |
| E-commerce & Retail | Commerce experiences, integrations, customer operations, growth |
| Marketplaces | Multi-party applications, workflow design, integrations |
| Restaurants & Hospitality | Websites, booking/order experiences, communications, growth |
| Professional Services | Websites, CRM, document/workflow automation, lead generation |
| Startups & SaaS | MVPs, product design, software, cloud, maintenance |

S6 additionally proposes Logistics & Transportation, Manufacturing, and Technology Companies. Retain them as candidates for approval, without replacing the owner's industry list. Other suitable industries remain possible. Industry pages require substantive content and truthful capability statements; listing a sector is not evidence of specialization or regulatory certification.

The owner identifies the USA, Canada, UK, Australia, European markets, Middle East, and Bangladesh as potential markets. Serve globally while privately prioritizing regions based on opportunity, relationships, delivery capability, and commercial potential. Exact first markets, budgets, languages beyond English, buyer segments, and time-zone service coverage remain open.

### 2.4 Contact and social identity

| Channel | Selected or supplied value | Readiness |
|---|---|---|
| Website | https://aradun.com/ | Domain owner-confirmed; live-site readiness not verified |
| Primary public email | hello@aradun.com | Explicitly selected; mailbox not yet created/activated according to owner. May be used in planned content; test before public launch. |
| Additional email | helloaradun@gmail.com | Owner supplied; public fallback use not selected |
| Phone | 01302601121 / +880 1302-601121 | Owner supplied; publishing and call handling to confirm |
| Location | Dhaka, Bangladesh | City only |
| LinkedIn | https://www.linkedin.com/company/aradun/ | Owner supplied |
| Facebook | https://www.facebook.com/aradunhq/ | Owner supplied |
| YouTube | https://www.youtube.com/@aradunhq | Owner supplied |
| X | https://x.com/aradunhq | Owner supplied |
| Instagram | https://www.instagram.com/aradunhq/ | Owner supplied |
| GitHub | Not supplied | Do not invent a URL |

Use ARADUN for the brand and Aradun as the supplied social display name where appropriate. Preferred @aradun and fallback @aradunhq/@wearearadun are naming preferences, not availability claims. Existing supplied profiles mostly use @aradunhq; preserving them is recommended. `sales@` and `support@` are unapproved suggestions, not active mailboxes. Legal registration, street address, ownership structure, credentials, partnerships, payment accounts, and certifications remain unconfirmed.

## 3. Business model, commercial policy, and operations

### 3.1 Revenue streams

| Revenue stream | Baseline |
|---|---|
| Project services | Defined deliverables and agreed project fees; indicative starting prices lead to tailored quotes. |
| Recurring services | Maintenance, managed services, marketing, design, and video retainers as listed in the catalog. |
| Setup plus monthly | Separate setup/implementation charge and recurring operation/support where actually applicable. |
| Custom engagements | Discovery and tailored scope for complex work. |
| Owned products | Strategic intent: subscriptions, licenses, or one-time digital-product sales; select per validated product, not automatically. |

Products, SaaS, business software, and industry platforms overlap. They are not automatically four separate systems. ARADUN's internal CRM/CMS/operations platform is separate in purpose from software sold to customers. Internal features do not automatically become a commercial SaaS. Future AMS scope remains a separate domain/product decision. An AMS may be scoped for a single agency; multi-organization tenancy is a dependency only if that product scope is explicitly selected, not a mandatory feature of every AMS.

### 3.2 Package and quote rules

- Preserve the 57 unique services, canonical service identity, cross-listing, prices, and five solutions below.
- Display USD starting prices as indicative “From” amounts; no binding automatic quote or public checkout in Phase 1.
- Define deliverables, units/limits, revision rounds, assumptions, exclusions, timeline conditions, and support before publishing a package as purchasable scope. These details are incomplete in the sources and must not be invented.
- Four pricing models: one-time, monthly, setup plus monthly, and custom. Clarify ambiguous units before publication, including Monthly Video Editing and any packages lacking an explicit period.
- Separate hosting, licenses, advertising spend, API usage, third-party subscriptions, taxes where applicable, and travel/production costs where relevant to the approved scope.
- Solutions reference constituent services. Avoid double-charging overlapping deliverables; quoting remains staff-reviewed rather than blindly adding every public starting price.
- The server resolves valid service/package IDs, prices, and availability. Store an immutable inquiry/quote snapshot; never trust amounts submitted by the browser.
- Service availability values: available, specialist-led, coming-soon. Owner must confirm each service's current delivery readiness before publication.
- Cybersecurity work requires authorization and qualified capability; do not promise guaranteed security or a 24/7 SOC that does not exist.

### 3.3 Operational workflows

Sales pipeline: **New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost**. Spam, duplicate, and no-response are secondary classifications, not replacements for commercial stages. Phase 1's default pipeline is fixed; configurable multiple pipelines are a future proposal.

Delivery: **Lead → Qualification → Discovery → Proposal → Written agreement/SOW → Initial payment → Kickoff → Delivery → Review → Acceptance → Final payment → Handoff → Optional maintenance**.

Project states from S1: **Pending Agreement → Pending Deposit → Ready → In Progress → Client Review → Completed → Closed**. These describe business operations before the project-management module exists.

Payment states from S1: **Draft → Issued → Partially Paid → Paid / Overdue / Cancelled**. The final model may distinguish overdue as a derived condition; do not silently change the business meaning.

Won does not mean paid. Customer conversion preserves inquiry and opportunity history and avoids duplicate contacts. A client can have more than one inquiry/opportunity; the precise linking, merge, and correction rules require review.

### 3.4 Existing payment scheduling guidance

| Engagement | Existing guidance |
|---|---|
| Starter project | 50% deposit, 50% before final handoff |
| Professional project | 40% / 30% / 30% by agreed milestones |
| Enterprise | Custom milestones |
| Retainer | Monthly in advance; generally 30-day cancellation notice subject to signed terms; unused hours do not roll over unless agreed |

These are existing planning policies, not jurisdiction-specific legal advice or finalized customer contracts. Phase 1 uses proposal/agreement/invoice-based collection; payment providers and eligibility are unconfirmed. Manual financial operations can occur outside the platform. Whether Phase 1 includes a staff payment tracker is unresolved.

### 3.5 Delivery, support, and readiness

Proposals should identify goals, scope, deliverables, exclusions, dependencies, timelines, milestones, revisions, fees, payment schedule, third-party costs, support, expiration, and signatures. Agreements may include MSA, SOW, NDA, DPA where applicable, change orders, maintenance terms, and contractor terms. Determine applicable legal/tax obligations from the actual operating entity and jurisdictions before use.

Define onboarding information, secure credential exchange, communication owner, change control, QA, client UAT, acceptance, documentation, handoff, and maintenance escalation. Support hours, response targets, warranty periods, revision limits, refunds, cancellation rules, and IP/license terms remain decisions for approval. Do not promise unlimited revisions or round-the-clock support.

Business readiness includes appropriate registration/ownership decisions, working business communication, contracts, permitted payment collection, receipts, reconciliation, and records. These do not automatically require building accounting or legal-management software. The separate business-roadmap numbering in S4/S6 does not supersede the platform's eight planning stages.

## 4. Services and existing pricing

The following source-preserved catalog has **58 category entries representing 57 unique services**. Mobile App UI/UX Design is one service cross-listed in Mobile and Design. Stable `SVC-###` identifiers below are proposed documentation IDs, not approved URLs or database schemas. They distinguish catalog entries from functional requirement IDs.

Prices are existing indicative public display values from S1. Proposed increases are isolated in the decision register and are not applied here. Two-price entries represent **Starter / Professional**, as stated in S1. Three-price recurring entries preserve the source order; exact tier names and limits still need confirmation. Unless explicitly monthly, amounts must be assigned a confirmed billing unit during package review. Package scope, revision count, delivery estimate, and individual availability remain unresolved for every service unless separately approved.


### A. Web & Software Development (5)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-001 | Business Website Development | $699+ / $1,499+ |
| SVC-002 | E-commerce Website Development | $999+ / $2,499+ |
| SVC-003 | Custom Web Application | Custom quote |
| SVC-004 | Website Redesign | $399+ / $999+ |
| SVC-005 | Website Maintenance | $49 / $99 / $199+ per month |

### B. Mobile App Development (5)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-006 | Business Mobile App | $1,999+ / $4,999+ |
| SVC-007 | E-commerce Mobile App | $2,499+ / $5,999+ |
| SVC-008 | Custom Mobile App | Custom quote |
| SVC-009 | Mobile App UI/UX Design | $299+ / $899+ (cross-listed under Design) |
| SVC-010 | Mobile App Maintenance | $99 / $249 / $499+ per month |

### C. AI Automation & CRM (7)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-011 | Workflow Automation | $299+ / $899+ |
| SVC-012 | CRM Setup & Customization | $399+ / $1,199+ |
| SVC-013 | Lead Follow-up Automation | $349+ / $999+ |
| SVC-014 | AI Chatbot | $499+ / $1,499+ |
| SVC-015 | AI Integrations | $799+ / $2,499+ |
| SVC-016 | AI Voice Agent | $799+ / $2,499+ |
| SVC-017 | Automation Maintenance | $99 / $249 / $599+ per month |

### D. Digital Marketing (9)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-018 | SEO Services | $299 / $699 per month |
| SVC-019 | Google Ads Management | $249 / $599 per month (setup and ad spend separate) |
| SVC-020 | Social Media Management | $299 / $699 per month |
| SVC-021 | Meta Ads Management | $249 / $599 per month (ad spend separate) |
| SVC-022 | Content Marketing | $199+ / $599+ |
| SVC-023 | Email Marketing | $249+ / $699+ |
| SVC-024 | Local SEO / Google Business Profile | $199+ / $499+ |
| SVC-025 | Conversion Rate Optimization & Analytics | $299+ / $899+ |
| SVC-026 | Digital Marketing Consulting | $149+ / $499+ |

### E. Cloud & DevOps (8)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-027 | Cloud Infrastructure Setup | $399+ / $1,299+ |
| SVC-028 | Application Deployment | $199+ / $599+ |
| SVC-029 | CI/CD Pipeline Setup | $299+ / $899+ |
| SVC-030 | Docker Containerization | $249+ / $699+ |
| SVC-031 | Infrastructure as Code | $399+ / $1,199+ |
| SVC-032 | Monitoring & Observability | $249+ / $799+ |
| SVC-033 | Cloud Security & Backup | $349+ / $999+ |
| SVC-034 | Managed Cloud Services | $99 / $299 / $799+ per month |

### F. Cybersecurity (8)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-035 | Web Application Security Assessment | $299+ / $899+ |
| SVC-036 | Vulnerability Assessment / Penetration Testing | Custom quote |
| SVC-037 | Cloud Security Assessment | $399+ / $1,299+ |
| SVC-038 | Security Hardening | $249+ / $999+ |
| SVC-039 | Identity & Access / Email Security | $199+ / $699+ |
| SVC-040 | Security Awareness Training | $199+ / $599+ |
| SVC-041 | Compliance Readiness | Custom quote |
| SVC-042 | Managed Security Services | $149 / $399 / $999+ per month |

### G. UI/UX, Graphic Design & Branding (8 category entries)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-043 | Website UI/UX Design | $299+ / $899+ |
| SVC-009 | Mobile App UI/UX Design | $299+ / $899+ (same service as Mobile category) |
| SVC-044 | SaaS Dashboard UI/UX | $499+ / $1,499+ |
| SVC-045 | Logo & Brand Identity | $149+ / $599+ |
| SVC-046 | Graphic Design | $49+ / $249+ |
| SVC-047 | Landing Page Design | $199+ / $599+ |
| SVC-048 | UX Audit | $199+ / $799+ |
| SVC-049 | Monthly Design Support | $149 / $399 / $899+ per month |

### H. Video Editing & Production (8)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-050 | Short-form Video Editing | $39+ / $199+ |
| SVC-051 | YouTube Video Editing | $99+ / $349+ |
| SVC-052 | Promotional / Ad Video | $149+ / $499+ |
| SVC-053 | Corporate Video Production | $249+ / $899+ |
| SVC-054 | Motion Graphics | $199+ / $699+ |
| SVC-055 | Podcast Editing | $149+ / $499+ |
| SVC-056 | Captions / Subtitles | $29+ / $149+ |
| SVC-057 | Monthly Video Editing | $199 / $599 / $1,499+ |

## 5. Business solutions and packages

| ID | Solution | Starter | Professional | Enterprise |
|---|---|---|---|---|
| SOL-001 | Digital Presence | From $899/project | From $2,499/project | Custom |
| SOL-002 | Business Automation | From $699/project | From $2,499/project | Custom |
| SOL-003 | Business Growth | From $399/month | From $999/month | Custom |
| SOL-004 | Cloud & Technology | From $499/project | From $1,999/project | Custom |
| SOL-005 | Complete Digital Business | Custom | Custom | Custom |

Names/prices are confirmed concepts from S1 §5. Exact included services, quantities, exclusions, revisions, timelines, setup fees, recurring costs, and upgrade/maintenance rules are not fully specified in the supplied sources. Do not infer a bundle's contractual scope from its name. Each solution must have one maintained package definition and enter the unified quote flow. Existing canonical solution URLs in S1 remain reference constraints; final page inventory belongs to Step 2.

## 6. Sales, trust, content, and customer journeys

### 6.1 Main journeys

1. Service-led: discover ARADUN → browse category/service → inspect package → request quote → confirmation → staff review.
2. Problem-led: inspect solution → understand proposed outcome and bundle → request quote → discovery where useful.
3. Undecided: contact or custom quote → staff clarification → suitable next step.
4. Product-led (proposed): view an accurately described product → request demo or information → CRM record linked to product; no claim of immediate product availability.

Preserve **Get a Quote** as the current primary CTA. **Book a Consultation** and **Contact Us** provide additional entry points. S3/S6 alternatives do not force a meeting for every prospect or remove the quote route. Exact placements, wording, and page sections belong to later content planning.

The quote form's approved four steps are **Service → Project → Contact → Review**. Preserve selected service/package from the initiating CTA, allow multi-service/solution/custom needs, brief project description, contact details, optional budget/timeline, privacy acknowledgement, and separate marketing opt-in. Do not require visitor registration. General contact forms stay short. Accept valid personal emails as well as business emails unless a future justified policy is approved.

### 6.2 Trust and evidence

Publish authentic company/founder information, clear delivery process, scope, prices, revisions/support policies, and security/privacy information. Portfolio categories distinguish **Client Work**, **ARADUN Internal Product**, and **Concept/Demo**. Use permitted screenshots, truthful descriptions, and measured outcomes only when supported. No fabricated clients, reviews, results, offices, credentials, awards, partnerships, or statistics.

SAMPLE/DEMO/PLACEHOLDER content is permitted in planning and development previews when unmistakably labeled and centrally replaceable. Production must remove unapproved placeholders; honestly labeled public demo projects are permitted. Technology logos indicate genuine technology usage only, not certification, client relationships, or partnership.

Initial portfolio candidates include a business website, CRM/automation demonstration, cloud implementation, and potential AMS demonstration. They are ideas, not completed projects. Earlier targets of three projects, later four–six projects, and six–ten articles are recommendations, not launch gates. Keep S1's approximately two quality articles/month as a planning target subject to capacity, not a contractual promise.

### 6.3 Acquisition and measurement

S1's acquisition approach: targeted compliant outreach, referrals, LinkedIn, useful content/SEO, and conversion improvement based on real leads. Paid marketing and partnerships require readiness and budget decisions. No outreach is authorized by this document itself.

Track qualified leads, proposal rate, win rate, sales cycle, quote conversion, average project value, cash collected versus invoiced, gross margin, recurring revenue, acquisition cost where inputs exist, organic clicks, and site quality. Advanced metrics need later modules or external records; their business relevance does not imply all reports are Phase 1 software.

S1's first-90-day illustrative targets (not forecasts): 10–20 qualified sales conversations, 5–10 proposals, 2–5 paying clients, 4–6 useful articles, and 2–3 genuine case studies/demos. Reconfirm targets after launch capacity and market selection.

## 7. Roles and access boundaries

| Role | Proposed responsibility | Boundary |
|---|---|---|
| Visitor/prospect | Browse, search, inquire, request consultation | Public actions do not require login; no private record access |
| Admin/owner | Manage approved settings, staff access, catalog/content and sales records | Administrative actions checked server-side and audited |
| Sales/staff | Work authorized leads/opportunities/customers and tasks | Assignment and record visibility policy to approve |
| Manager | Review team pipeline and reports where needed | Separate role only if operationally justified |
| Content editor | Draft/edit approved content and SEO | Proposed permission set; no automatic sales/finance access |
| Client (future) | View own projects, documents, invoices and approvals | Explicit account-to-client access; no access to other clients |
| Project team/contractor (future) | Work assigned delivery tasks/files | Minimum project access; no default commercial-data access |
| Finance operator (future) | Manage permitted billing and reconciliation | Distinct finance permission where needed |
| Organization admin (conditional future) | Manage one organization | Cannot cross tenant boundaries |
| Platform/SaaS administrator (conditional future) | Manage platform-level operations | Exceptional access governed and audited |

Final permissions matrix is unresolved. Client roles start when the portal is approved; no public staff registration. Internal collaboration and customer communication visibility must be distinguished.

## 8. Three-phase scope and constraints

### 8.1 Proposed structure

| Phase | Intent | Approval interpretation |
|---|---|---|
| P1 — Initial launch | Public site, catalog, solutions, lead capture, protected dashboard, essential CRM, approved limited CMS, notifications, SEO and operational quality | Preserve explicit existing scope and amendments. New details still need approval. |
| P2 — Expansion | Portal, project management, billing, broader CMS/CRM, integrations and workflow automation; limited public AI assistance if justified | Existing future concepts; detailed three-phase allocation is proposed. |
| P3 — Advanced | Specialized AMS, advanced AI, multi-organization/SaaS capabilities, sophisticated automation and analytics | Conditional future candidates, not a commitment to build all. |

S1 grouped much future work into P2, while S2 used P2/P3. This draft uses S2's more granular future placement and the owner's requested three-phase structure as a proposal. Phase conflicts remain in Section 14.

### 8.2 Explicitly approved Phase 1 amendment

The ten promoted features are testimonials/client reviews; blog/articles/resource center; FAQ/knowledge base; blog/article management; SEO metadata editor; lead source tracking; website search; manual follow-up tasks/reminders; sales opportunity pipeline; lead-to-customer conversion.

Boundaries: article draft/publish/unpublish is P1; full page builder/general CMS is not. Search covers published services, solutions, articles, and FAQs. Tasks are manually created with dashboard due/overdue indicators; external reminder campaigns remain later. Pipeline stage, owner, activity and estimated value are P1; configurable pipelines and drag-and-drop are not required. Customer conversion is staff-confirmed, preserves history, avoids duplicates, and does not imply payment. Testimonials require genuine permission; public review submission/verification is not required.

### 8.3 Explicit exclusions from P1 implementation

No customer login/portal, public checkout, payment gateway, full project-management suite, online proposal signing, full CMS/page builder, advanced CRM sequences, AMS, multi-tenant SaaS, or advanced AI platform. Live Calendar booking remains an open phase decision, with manual consultation requests as the existing baseline. Business proposals, agreements, deposits, and delivery can operate manually before those software modules exist.

Broader services/solutions/pricing editing, company records, media library, and integrations do not become P1 simply because limited CMS/CRM is approved. Reliability/security for any feature that is implemented is required in that feature's phase.

## 9. Technology and architectural constraints

### 9.1 Confirmed stack and principles

- Next.js App Router and TypeScript.
- Tailwind CSS and selective shadcn/ui.
- MongoDB + Mongoose through the Express backend; locally installed MongoDB for development, Atlas optional later through configuration. Production database hosting remains unselected; this supersedes PostgreSQL/Prisma for this platform.
- One `aradun/` repository with `frontend/` (Next.js App Router + TypeScript) and `backend/` (Express.js + TypeScript). The backend uses simple feature-based modules; all database access goes through it. No microservices or unnecessary architectural patterns.
- Separate UI, business logic, persistence, and integrations. Keep naming and module boundaries understandable for one developer.
- Server-side validation and authorization, least privilege, secure secrets, audited mutations, and practical tests.
- Centralized catalog, server-authoritative pricing, UTC timestamps, precise monetary representation, unique IDs/references, safe data changes and rollback.
- Use the Node.js runtime for Mongoose-backed operations as noted in S3; exact runtime/hosting compatibility is checked during architecture/implementation.
- No database schemas, folder tree, or complete API contract is finalized here.

Use the minimum necessary files, dependencies, abstractions and boilerplate. Keep feature responsibilities clear, names descriptive, code readable and manually reviewable, and documentation concise, accurate and nonduplicative. Reuse components/functions only for real repeated behavior. Do not create speculative features, empty modules, generic frameworks or pass-through layers. Preserve input validation, backend authorization, secret protection, appropriate errors and meaningful tests; reducing code size never overrides security, correctness or maintainability.

### 9.2 Supporting technologies and decisions

| Need | Existing direction | Selection status |
|---|---|---|
| Runtime validation | Zod in S1 | Confirmed direction; detailed schemas later |
| Form state | React Hook Form in S3 | Optional recommendation |
| Authentication | Auth.js or managed provider | Provider unselected; MFA/access needs must be met |
| Email | Transactional provider; S3 names Resend/Postmark as examples | Provider and domain setup unselected |
| Search | Simple indexed search or Atlas Search | Select smallest adequate solution later |
| CMS | Protected custom article/SEO/testimonial management initially | Broad headless CMS alternatives unselected |
| Calendar | Google Calendar requested; external booking versus integrated scheduling unresolved | Phase, account capability and synchronization unselected |
| Storage | Object storage/managed media when files require it | Provider and initial image workflow unresolved |
| Background processing | Reliable outbox/retry for notifications; durable worker/queue as needed | No heavyweight workflow engine required at launch |
| Analytics | GA4 and Search Console | Confirmed direction; consent configuration to determine |
| Monitoring | Error/uptime monitoring; Sentry or similar suggested | Provider unselected |
| Hosting | Next.js frontend hosting plus Node-capable Express hosting and selected MongoDB connectivity | Provider/region/budget unselected |
| CI/CD | GitHub Actions, isolated staging/production and verification gates | Confirmed direction; implementation later |

Specific vendor availability, costs, free-plan features, legal eligibility, and technical limits have not been verified in this consolidation. Verify when selecting them. No payment provider eligibility is assumed.

### 9.3 Existing visual constraints retained for later design review

Historical pre-Step-4 palette only; the current approved three-light-theme system is S4 §3 (Editorial Terracotta default, Muted Slate Blue and Vivid Blue alternates). This paragraph does not authorize the superseded colors. S1 baseline: Navy `#10243B`, Brand Teal `#147D83`, Bright Teal `#20A39E`, Warm Accent `#E6A44C`, Light `#F4F7FA`, White `#FFFFFF`, Body `#334155`, Border `#DCE4EB`; Inter typography. S6's royal-blue palette and possible Manrope font are alternatives awaiting approval. Accessibility contrast and component use must be tested in Step 4; colors alone do not establish conformance.

Existing constraints include mobile-first design, restrained motion, visible focus, keyboard support, WCAG 2.2 AA-oriented implementation, 4px-based spacing, approximately 1200–1280px content width and 680–760px reading width. Final tokens, responsive layouts, homepage sections, navigation placement and wireframes are explicitly deferred to their later planning stages.

## 10. Requirement format and dependency conventions

Every functional record includes a unique `FR-<area>-<number>` ID, name, explanation, business purpose, practical example, role, phase, dependencies, acceptance criteria, source, and approval status. Area numbers 01–14 match S2's 14 tables; row numbers preserve every original entry. Repeated source features reference the same capability rather than specifying separate implementations.

Additional `BR`, `NFR`, and `EXT` IDs cover business rules, quality requirements, and supplemental ideas. Service/solution IDs identify offerings, not additional software modules. An explicit dependency on a later-phase record means either its necessary subset must exist earlier or the dependent feature cannot launch; such exceptions are stated rather than silently pulling whole modules forward.

Shared dependency codes:

| Code | Meaning |
|---|---|
| BASE | Approved stack, configured environments and production readiness |
| AUTH | Secure staff authentication and server-side authorization (FR-09-01, FR-09-07, FR-14-03/04) |
| DATA | Validated persistence, identity, access and safe changes (FR-02-06, FR-14-02) |
| CAT | Central service/package/availability definitions (FR-04-01/02/03) |
| MAIL | Configured transactional email and reliable delivery handling (FR-11-01, NFR-006) |
| CONTENT | Approved public content and publishing visibility rules |
| CLIENT | Client identity/access module (FR-05-01) |
| PROJECT | Project records and access (FR-06-01/02) |
| FINANCE | Approved financial records, commercial policies and permitted collection |
| FILES | Secure file storage/access (FR-14-11); required whenever uploads exist |
| CONSENT | Privacy, permissions, consent/opt-out rules appropriate to the action |
| INTEGRATION | Provider credentials/permissions, adapters, verified callbacks and reliable retries |
| AI-GATE | Approved provider/data policy, evaluation, human oversight and cost limits (NFR-013) |
| AMS-GATE | Approved separate AMS product/domain scope and specialist requirements |
| TENANT | Explicit organization model and tested isolation (FR-14-15) |

A “confirmed concept” does not approve every acceptance detail below. Examples are illustrative, not claims of actual clients, products, transactions, or measured results. Future acceptance criteria establish reviewable intent; vendor-specific specifications follow later.

## 11. Complete functional requirement inventory


### 11.1 Public website and marketing

#### FR-01-01 — Responsive website (desktop/tablet/mobile)

- **Explanation:** Adapt all public interfaces across desktop, tablet and mobile.
- **Business purpose:** Make browsing and inquiries usable on common devices.
- **Example:** A visitor completes a quote on a small phone.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** BASE; NFR-002.
- **Acceptance criteria:** At agreed mobile/tablet/desktop widths, text and controls remain usable, menus work, and content does not overflow except intentional scroll regions.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-02 — Professional homepage

- **Explanation:** Explain the company, offers, evidence and next actions on the homepage.
- **Business purpose:** Help new prospects understand and act.
- **Example:** A founder finds the relevant service and quote action.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CONTENT; CAT.
- **Acceptance criteria:** Approved company messaging, eight categories, solutions and CTA destinations are represented; unpublished proof is not exposed; final sections await Step 3.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-03 — Mega menu and dropdown navigation

- **Explanation:** Provide accessible grouped navigation to approved destinations.
- **Business purpose:** Reduce effort finding services and solutions.
- **Example:** A keyboard user opens the Services dropdown.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CONTENT; NFR-002.
- **Acceptance criteria:** Navigation is keyboard-operable, has visible focus and mobile equivalents; exact mega-menu styling remains a design decision, not a new scope obligation.
- **Approval status:** Confirmed grouped navigation; mega-menu presentation detail proposed.
- **Source:** S2 area 1, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-04 — Service categories and individual pages

- **Explanation:** Present categories and substantive individual service content from the common catalog.
- **Business purpose:** Explain each offer and support search discovery.
- **Example:** A buyer opens Business Website Development.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CAT; NFR-001.
- **Acceptance criteria:** Displayed names/prices/availability match CAT; cross-listed services share identity; only approved substantive detail pages are published.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-05 — Solutions and service bundles

- **Explanation:** Explain the five problem-focused solutions and their packages.
- **Business purpose:** Offer coordinated outcomes across services.
- **Example:** A prospect requests Digital Presence Professional.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CAT; FR-02-01.
- **Acceptance criteria:** All five approved names/prices are preserved; package inclusions are explicit before publication; selections reach the unified quote flow.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-06 — Service package and pricing comparison

- **Explanation:** Show meaningful package differences, billing units and exclusions.
- **Business purpose:** Help buyers assess fit without misleading totals.
- **Example:** A buyer compares website Starter and Professional.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CAT; BR-002.
- **Acceptance criteria:** Starting prices are clearly indicative; recurring charges and excluded third-party costs are distinguished; missing scope is resolved before publication.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-07 — Dynamic call-to-action buttons

- **Explanation:** Use contextual actions that pass approved service/solution/package context.
- **Business purpose:** Reduce friction between browsing and inquiry.
- **Example:** Select Package preselects the chosen package.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CAT; FR-02-01.
- **Acceptance criteria:** Context is preserved and server-validated; all actions have meaningful labels and working destinations; primary CTA policy is consistent.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-08 — About, team, mission and company information

- **Explanation:** Publish truthful company identity, mission, team and contact information.
- **Business purpose:** Make the business accountable and understandable.
- **Example:** A buyer checks who delivers the work.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CONTENT; BR-001.
- **Acceptance criteria:** Only approved real identities/locations are public; unavailable team/statistics sections stay unpublished; proposed mission wording is approved before use.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-09 — Contact page and inquiry form

- **Explanation:** Provide a public contact entry point connected to the shared inquiry system.
- **Business purpose:** Receive general questions without account creation.
- **Example:** A visitor asks about an integration.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** FR-02-04; BR-003.
- **Acceptance criteria:** Form behavior meets FR-02-04; contact details match the approved record and working mailbox; no parallel lead database is created.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-10 — Portfolio and case studies

- **Explanation:** Present permitted work with problem, contribution, visuals and supported outcomes.
- **Business purpose:** Demonstrate capability honestly.
- **Example:** A clearly labeled CRM demo shows its workflow.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CONTENT; BR-004.
- **Acceptance criteria:** Client/internal/concept type is visible; permission and claims checked; screenshots exclude private data; no invented results or clients.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-11 — Testimonials and client reviews

- **Explanation:** Display and manually curate authentic permitted testimonials/reviews.
- **Business purpose:** Provide credible social proof.
- **Example:** An approved client quote is published by staff.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** AUTH; CONTENT; BR-004.
- **Acceptance criteria:** Staff can manage publication; attribution/permission is recorded; no fabricated proof; empty sections can stay unpublished; public review submission is not required.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-12 — Blog, articles and resource center

- **Explanation:** Publish substantive articles and resources with appropriate discovery/filtering.
- **Business purpose:** Educate prospects and support qualified organic traffic.
- **Example:** A visitor reads a CRM automation guide.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** FR-04-06; FR-04-08.
- **Acceptance criteria:** Published entries have usable detail views and metadata; drafts are not public; navigation and related links work; resource assets follow file controls when used.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-13 — FAQ and knowledge base

- **Explanation:** Provide browsable and searchable FAQs/help articles.
- **Business purpose:** Resolve common purchase and service questions.
- **Example:** A visitor searches revision policies.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CONTENT; FR-01-14; D-012.
- **Acceptance criteria:** Published answers can be browsed/searched; no draft/private content leaks; authoring method is approved; support ticketing is not required for this feature.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-14 — Website search

- **Explanation:** Search published services, solutions, articles and FAQs.
- **Business purpose:** Help visitors find useful content quickly.
- **Example:** Searching maintenance returns relevant public entries.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P1.
- **Dependencies:** CAT; CONTENT; NFR-003.
- **Acceptance criteria:** All four required types are searchable; drafts/private records are excluded; empty/error states exist; result relevance and agreed response budget are checked on representative data.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 1, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-15 — Multi-language website

- **Explanation:** Offer genuine translated public experiences in approved languages.
- **Business purpose:** Expand reach when translation and support are viable.
- **Example:** A user selects an approved language.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P3.
- **Dependencies:** CONTENT; FR-04-13.
- **Acceptance criteria:** Only reviewed translations publish; navigation and metadata are consistent; fallback behavior and language-specific indexing are defined before launch.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 1, row 15; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-16 — Multi-currency pricing display

- **Explanation:** Show approved alternate currency estimates while preserving monetary meaning.
- **Business purpose:** Help international buyers understand prices.
- **Example:** A visitor sees an approximate local-currency starting price.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P3.
- **Dependencies:** CAT; FINANCE.
- **Acceptance criteria:** Source currency, conversion date/rate and indicative status are clear; authoritative quotes retain the agreed currency; no exchange-rate guarantee is implied.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 1, row 16; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-17 — Personalized website content

- **Explanation:** Vary selected content using approved context and privacy rules.
- **Business purpose:** Improve relevance when evidence supports it.
- **Example:** A visitor sees a relevant industry example.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P3.
- **Dependencies:** CONSENT; CONTENT; FR-10-01.
- **Acceptance criteria:** Default content remains usable; variation rules are documented; consent respected; personalization does not reveal private data or fabricate familiarity.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 1, row 17; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-01-18 — AI-powered website search

- **Explanation:** Add semantic or AI-assisted retrieval over approved public content.
- **Business purpose:** Improve discovery beyond exact keywords.
- **Example:** A visitor asks for help reducing manual follow-ups.
- **User role:** Visitor; owner/content editor for publication
- **Phase:** P3.
- **Dependencies:** FR-01-14; AI-GATE.
- **Acceptance criteria:** Only authorized published sources are used; responses link to sources and handle uncertainty; ordinary search remains available; quality/cost gates pass.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 1, row 18; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.2 Lead generation and sales

#### FR-02-01 — Unified multi-step quote request

- **Explanation:** Collect quote needs through Service, Project, Contact and Review steps.
- **Business purpose:** Capture enough scope for a useful sales response.
- **Example:** A visitor requests a website and reviews details before sending.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** CAT; DATA; FR-02-07; NFR-006.
- **Acceptance criteria:** No visitor login required; selected context persists; required fields validated server-side; successful save yields a reference; failure allows correction without duplicate inquiries.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-02 — Multi-service selection

- **Explanation:** Allow several service/solution selections and custom needs within one inquiry.
- **Business purpose:** Support combined projects without repeated forms.
- **Example:** A buyer selects a website plus workflow automation.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** CAT; FR-02-01.
- **Acceptance criteria:** Selections remain unique and editable; cross-listing does not duplicate the same service; valid custom/unsure path exists; totals are not presented as a binding quote.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-03 — Package selection with starting prices

- **Explanation:** Capture selected packages and indicative prices with authoritative snapshots.
- **Business purpose:** Preserve what the prospect saw.
- **Example:** A visitor selects a $699+ website package.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** CAT; FR-02-06.
- **Acceptance criteria:** Server resolves valid IDs and availability; tampered amounts are ignored/rejected; stored snapshot preserves price/currency/period and timestamp after future catalog changes.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-04 — General contact form

- **Explanation:** Collect name, valid email, subject/help topic and message with optional context.
- **Business purpose:** Provide a low-friction general inquiry route.
- **Example:** A founder asks a partnership question.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** DATA; FR-14-05.
- **Acceptance criteria:** Valid submissions enter the common lead store with contact inquiry type; optional phone/company are not required by default; errors are accessible; spam controls apply.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-05 — Consultation request form

- **Explanation:** Capture a meeting topic and contact details for staff confirmation.
- **Business purpose:** Offer discovery before live scheduling is implemented.
- **Example:** A prospect requests a preferred meeting time.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** DATA; MAIL.
- **Acceptance criteria:** Request is stored as consultation type and acknowledged as pending confirmation; no unavailable slot is represented as booked; time-zone context is captured when time preferences are collected.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-06 — Lead database

- **Explanation:** Persist inquiries and their links to contacts/opportunities reliably.
- **Business purpose:** Prevent lost prospects and enable follow-through.
- **Example:** Staff opens an inquiry after refreshing the dashboard.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** BASE; FR-14-02; FR-14-03.
- **Acceptance criteria:** Validated records survive restart; IDs are unique; only authorized staff access private data; failed notification does not erase a saved inquiry; data errors are monitored.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-07 — Automatic lead reference number

- **Explanation:** Assign a unique internal identifier and human-readable inquiry reference.
- **Business purpose:** Make inquiries easy to locate and discuss.
- **Example:** Confirmation shows ARQ-2026-000123.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** FR-02-06; NFR-006.
- **Acceptance criteria:** Concurrent submissions cannot share a reference; retries do not create unwanted duplicates; reference alone never grants private record access.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-08 — Customer confirmation email

- **Explanation:** Send an acknowledgement after a successful inquiry save.
- **Business purpose:** Reassure prospects their message was received.
- **Example:** A visitor receives a reference and next-step explanation.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** FR-02-06; MAIL.
- **Acceptance criteria:** No success email precedes durable save; repeated delivery attempts are controlled; private staff notes are excluded; failure is retried/visible without asking the visitor to resubmit.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-09 — Internal lead notification

- **Explanation:** Notify authorized staff when a genuine inquiry is saved.
- **Business purpose:** Enable timely lead review.
- **Example:** The assigned inbox receives a new inquiry alert.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** FR-02-06; MAIL; AUTH.
- **Acceptance criteria:** Notification points to a protected record; recipients follow approved settings; delivery failure is visible and retried; unnecessary personal data is excluded.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-10 — Lead status management

- **Explanation:** Track inquiry handling and commercial progress without contradictory statuses.
- **Business purpose:** Make lead processing clear.
- **Example:** Staff marks a duplicate inquiry while retaining the sales opportunity.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** FR-02-06; FR-03-05; D-011.
- **Acceptance criteria:** Stage history follows FR-03-05; spam/duplicate/no-response are separate tags; exact inquiry-to-opportunity status relationship is approved before implementation.
- **Approval status:** Confirmed status tracking; inquiry/opportunity mapping requires D-011 resolution.
- **Source:** S2 area 2, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-11 — Lead assignment

- **Explanation:** Assign a lead to an authorized staff owner.
- **Business purpose:** Give each opportunity an accountable handler.
- **Example:** Admin assigns an inquiry to sales staff.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** AUTH; FR-02-06.
- **Acceptance criteria:** Only eligible users can be assigned; assignment change is audited; unassigned records remain visible to permitted staff; access does not expand unintentionally.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-12 — Lead notes and activity history

- **Explanation:** Maintain internal notes and chronological sales activity.
- **Business purpose:** Preserve context across handoffs.
- **Example:** A staff member records discovery-call notes.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** AUTH; FR-02-06; FR-09-13.
- **Acceptance criteria:** Author/time and relevant changes are retained; internal notes stay private; note-edit/delete policy is approved; sensitive information is minimized.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-13 — Lead source tracking

- **Explanation:** Capture campaign, landing-page and referrer data where available and permitted.
- **Business purpose:** Understand where individual inquiries originated.
- **Example:** An inquiry retains LinkedIn UTM parameters.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P1.
- **Dependencies:** FR-02-06; CONSENT.
- **Acceptance criteria:** Known fields are validated and bounded; Unknown is supported; personal data is excluded from analytics; direct/blocked-referrer submissions still work.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 2, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-14 — Calendar appointment booking

- **Explanation:** Allow prospects to reserve real calendar availability.
- **Business purpose:** Reduce scheduling effort.
- **Example:** A visitor selects an available discovery slot.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P2 baseline; P1 proposed, pending D-003.
- **Dependencies:** FR-11-04; FR-02-05; D-003.
- **Acceptance criteria:** Selected scheduling mode and phase are approved; timezone, cancellation/rescheduling and duplicate-event handling work; only confirmed provider bookings are labeled booked; CRM linkage is verified if promised.
- **Approval status:** Decision required — S1/S2 P2; S3 proposes P1; Google Calendar booking scope/phase unresolved (D-003).
- **Source:** S2 area 2, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-15 — Automated follow-up sequences

- **Explanation:** Run approved follow-up sequences with consent and stop conditions.
- **Business purpose:** Maintain consistent outreach without manual repetition.
- **Example:** A nonresponsive lead receives an approved follow-up.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P2.
- **Dependencies:** FR-08-06; CONSENT; MAIL.
- **Acceptance criteria:** Enrollment, opt-out, reply/won/lost stopping, send limits and delivery history are tested; this is not the P1 manual task feature.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 2, row 15; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-16 — Proposal generation

- **Explanation:** Generate a reviewable proposal from approved inquiry scope and templates.
- **Business purpose:** Reduce sales preparation time.
- **Example:** Staff drafts a proposal for a redesign.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P2.
- **Dependencies:** FR-07-01; FR-02-06.
- **Acceptance criteria:** Client, scope, exclusions, fees and milestones are editable; staff reviews before sending; revisions are identifiable; no auto-binding quote is created.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 2, row 16; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-17 — Proposal approval and e-signature

- **Explanation:** Support client review and an approved electronic-signature process.
- **Business purpose:** Record acceptance of the correct agreement version.
- **Example:** A client signs the final SOW.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P2.
- **Dependencies:** FR-07-09; INTEGRATION; CONSENT.
- **Acceptance criteria:** Signer identity/process, document version and evidence are preserved; declined/expired documents are handled; provider/legal suitability is verified before use.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 2, row 17; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-18 — AI lead qualification

- **Explanation:** Suggest lead qualification using approved criteria.
- **Business purpose:** Help staff prioritize prospects.
- **Example:** AI flags missing scope information for review.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P3.
- **Dependencies:** FR-03-01; AI-GATE.
- **Acceptance criteria:** Output is advisory, explains relevant factors and permits correction; no unapproved rejection or external communication occurs; evaluation and privacy gates pass.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 2, row 18; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-19 — AI sales assistant

- **Explanation:** Assist staff with summaries and sales-response drafts.
- **Business purpose:** Reduce administrative sales work.
- **Example:** Staff reviews a discovery summary before using it.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P3.
- **Dependencies:** FR-03-07; AI-GATE.
- **Acceptance criteria:** Access follows staff permissions; drafts are labeled; source facts can be checked; no autonomous commitments/sending without approved action rules.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 2, row 19; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-02-20 — Lead scoring and sales forecasting

- **Explanation:** Score leads and forecast sales using defined data and assumptions.
- **Business purpose:** Support planning as sufficient data accumulates.
- **Example:** Manager reviews probability-weighted opportunities.
- **User role:** Visitor/prospect; authorized sales staff/admin
- **Phase:** P3.
- **Dependencies:** FR-03-05; FR-10-06.
- **Acceptance criteria:** Inputs, methodology and data period are visible; forecasts are not reported as booked revenue; sparse-data limitations and manual overrides are supported.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 2, row 20; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.3 CRM and customer records

#### FR-03-01 — Contacts database

- **Explanation:** Maintain a shared contact identity linked to inquiries and opportunities.
- **Business purpose:** Prevent fragmented customer information.
- **Example:** A returning prospect submits a second inquiry.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P1.
- **Dependencies:** DATA; AUTH; D-011.
- **Acceptance criteria:** New inquiries can link to an existing contact; duplicate matching is reviewed, not an unsafe automatic merge; authorized corrections preserve relationships/history.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 3, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-02 — Basic customer profile

- **Explanation:** Show essential customer contact details and linked business history.
- **Business purpose:** Give staff a usable customer overview.
- **Example:** Sales views a customer's prior won opportunity.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P1.
- **Dependencies:** FR-03-01; AUTH.
- **Acceptance criteria:** Only approved fields are collected; profile links to relevant records; customer flag is distinct from payment state; no client login is implied.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 3, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-03 — Lead-to-customer conversion

- **Explanation:** Let staff mark or create the linked customer profile when an opportunity is won.
- **Business purpose:** Transition sales records into ongoing relationships.
- **Example:** Staff confirms conversion after marking a deal Won.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P1.
- **Dependencies:** FR-03-01; FR-03-02; FR-03-05.
- **Acceptance criteria:** One customer identity is retained; original inquiry and opportunity history remain; repeated conversion does not duplicate records; payment remains independent; correction rules are defined.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 3, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-04 — Company/organization records

- **Explanation:** Link contacts and deals to business organizations.
- **Business purpose:** Represent B2B relationships beyond one person.
- **Example:** Two client contacts belong to the same company.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P2.
- **Dependencies:** FR-03-01; AUTH.
- **Acceptance criteria:** Company identity and contact links are editable with access checks; merging preserves linked history; internal staff organizations and client companies are not confused.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 3, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-05 — Sales opportunity pipeline

- **Explanation:** Track opportunities through the approved fixed sales pipeline.
- **Business purpose:** Make sales progress and responsibility visible.
- **Example:** A qualified inquiry advances to Discovery.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P1.
- **Dependencies:** FR-03-01; FR-02-06; AUTH.
- **Acceptance criteria:** New/Qualified/Discovery/Proposal Sent/Negotiation/Won/Lost are supported; owner, estimated value and stage history persist; drag-and-drop is optional; a stage change does not imply payment.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 3, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-06 — Follow-up tasks and reminders

- **Explanation:** Allow manual tasks linked to leads, opportunities or customers with dashboard reminders.
- **Business purpose:** Prevent missed follow-ups.
- **Example:** Staff sets a call task due tomorrow.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P1.
- **Dependencies:** FR-03-01; FR-03-05; AUTH.
- **Acceptance criteria:** Owner, due date, status and notes are stored; due/overdue tasks are highlighted; completion is recorded; timezone display is clear; no external campaigns are required.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 3, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-07 — Communication timeline

- **Explanation:** Aggregate authorized communication and activity events into a timeline.
- **Business purpose:** Improve handoffs and customer context.
- **Example:** Staff sees permitted email and meeting events together.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P2.
- **Dependencies:** FR-03-01; FR-03-09; INTEGRATION.
- **Acceptance criteria:** Events preserve source/time and access scope; duplicates are controlled; internal-only items are distinguished; unrelated inbox content is not imported indiscriminately.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 3, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-08 — Customer tags and segmentation

- **Explanation:** Tag and segment contacts using documented criteria.
- **Business purpose:** Support relevant sales/service handling.
- **Example:** Staff filters customers interested in maintenance.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P2.
- **Dependencies:** FR-03-01; CONSENT.
- **Acceptance criteria:** Tags can be managed without duplicating contacts; filter results respect access; segment use for marketing follows consent and opt-out rules.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 3, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-09 — Email integration

- **Explanation:** Connect approved business email to permitted CRM workflows.
- **Business purpose:** Reduce manual correspondence logging.
- **Example:** Staff links a project email to a contact.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P2.
- **Dependencies:** FR-03-01; INTEGRATION; CONSENT.
- **Acceptance criteria:** Account consent and least-privilege scopes are used; matching/review rules avoid unrelated mail capture; disconnect/revocation and sync errors are handled.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 3, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-10 — Deal and revenue forecasting

- **Explanation:** Forecast future deal/revenue outcomes using pipeline data.
- **Business purpose:** Support sales planning.
- **Example:** Manager views expected value for a period.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P3.
- **Dependencies:** FR-02-20; FR-10-07.
- **Acceptance criteria:** Reuse FR-02-20 forecasting foundations; methodology/time horizon are visible; actual payments remain distinct; forecasts can be compared with later outcomes.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 3, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-11 — Customer lifetime value tracking

- **Explanation:** Calculate customer lifetime value using a defined revenue/cost model.
- **Business purpose:** Understand long-term account economics.
- **Example:** Staff compares collected revenue by customer.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P3.
- **Dependencies:** FR-03-02; FR-10-07; FR-07-13.
- **Acceptance criteria:** Formula, currency, time basis and included costs are stated; source records reconcile; missing costs are disclosed rather than represented as profit.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 3, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-12 — AI CRM assistant

- **Explanation:** Offer AI help within authorized CRM records.
- **Business purpose:** Reduce search and summarization effort.
- **Example:** Staff asks for a summary of one account.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P3.
- **Dependencies:** FR-02-19; AI-GATE.
- **Acceptance criteria:** Reuse AI controls and sales-assistant capability; record permissions apply to every retrieval; uncertain conclusions are flagged; no autonomous record changes by default.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 3, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-13 — Customer health scoring

- **Explanation:** Estimate customer health from approved signals.
- **Business purpose:** Identify accounts needing attention.
- **Example:** A manager reviews an inactive recurring client.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P3.
- **Dependencies:** FR-03-07; FR-05-11; FR-10-07.
- **Acceptance criteria:** Signals and weighting are visible; score can be corrected; sparse/missing data is shown; no unsupported claim about customer intent is made.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 3, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-03-14 — Multiple customizable pipelines

- **Explanation:** Support several configurable pipelines when justified.
- **Business purpose:** Handle distinct sales processes without duplicate CRMs.
- **Example:** Product sales use an approved separate pipeline.
- **User role:** Authorized sales staff/admin; manager where approved
- **Phase:** P3.
- **Dependencies:** FR-03-05; AUTH.
- **Acceptance criteria:** Stage definitions, permissions and mappings are versioned; moving records preserves history; reporting distinguishes pipelines; default P1 pipeline remains intact.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 3, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.4 CMS and catalog management

#### FR-04-01 — Centralized service catalog

- **Explanation:** Maintain one authoritative service definition per unique offering.
- **Business purpose:** Prevent conflicting names and duplicated offers.
- **Example:** Mobile App UI/UX appears in two categories with one identity.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P1.
- **Dependencies:** BASE; BR-002.
- **Acceptance criteria:** Exactly 57 unique services and 58 category memberships are preserved; IDs/slugs are unique; cross-listing resolves to the same service; changes are controlled.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 4, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-02 — Centralized pricing/package data

- **Explanation:** Centralize package prices, currency, billing model and scope references.
- **Business purpose:** Keep public pages and inquiries consistent.
- **Example:** A price update changes future displays but not old inquiry snapshots.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P1.
- **Dependencies:** FR-04-01; BR-002.
- **Acceptance criteria:** All displays resolve the same approved values; prices use precise money representation; invalid currencies/periods are rejected; unresolved package scope blocks misleading publication.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 4, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-03 — Service availability management

- **Explanation:** Represent available, specialist-led and coming-soon service states.
- **Business purpose:** Avoid selling unavailable capability.
- **Example:** A specialist-led security service explains its delivery condition.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P1.
- **Dependencies:** FR-04-01; BR-005.
- **Acceptance criteria:** Each service has an approved state; public actions reflect availability; coming-soon cannot imply confirmed immediate delivery; P1 management may use maintained catalog data rather than an admin editor.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 4, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-04 — Admin service editor

- **Explanation:** Provide staff editing of service details, packages and availability.
- **Business purpose:** Reduce developer dependence as catalog operations grow.
- **Example:** Admin edits approved maintenance package copy.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P2.
- **Dependencies:** FR-04-01; FR-04-02; AUTH.
- **Acceptance criteria:** Only permitted users edit; validation preserves IDs/slug uniqueness and price history; publication checks require scope/availability approval; all changes are audited.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 4, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-05 — Dynamic page management

- **Explanation:** Manage approved public page content through the dashboard.
- **Business purpose:** Enable controlled updates without code edits.
- **Example:** An editor revises About content.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P2.
- **Dependencies:** AUTH; FR-04-10.
- **Acceptance criteria:** Only supported content fields/templates are editable; changes have preview and publication controls; arbitrary code execution is not allowed; routes stay consistent.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 4, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-06 — Blog/article management

- **Explanation:** Create/edit articles with drafts, publishing and unpublishing.
- **Business purpose:** Support ongoing content marketing at launch.
- **Example:** An editor drafts an automation guide and publishes it.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P1.
- **Dependencies:** AUTH; DATA; D-012.
- **Acceptance criteria:** Title, slug, excerpt, body, featured-image reference and tags are manageable; draft content stays private; publish/unpublish works; slug and content are validated; image method is approved before launch.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 4, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-07 — Media library

- **Explanation:** Manage reusable media assets and their metadata.
- **Business purpose:** Keep growing content assets organized.
- **Example:** Editor selects an existing case-study image.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P2.
- **Dependencies:** FILES; AUTH.
- **Acceptance criteria:** File type/size/access checks apply; alt text and usage references are supported; deletion does not silently break content; private files are not exposed as public media.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 4, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-08 — SEO metadata editor

- **Explanation:** Edit page/article SEO and social metadata with safe defaults.
- **Business purpose:** Keep discovery information accurate without code changes.
- **Example:** Editor updates a service page description.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P1.
- **Dependencies:** AUTH; CONTENT; NFR-001.
- **Acceptance criteria:** Title/description/canonical/indexing/social fields validate; default canonicals are sensible; private routes cannot be made public/indexable; changes are audited; accidental site-wide noindex is guarded.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 4, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-09 — Reusable content blocks

- **Explanation:** Compose approved reusable content patterns.
- **Business purpose:** Maintain consistency while reducing repetitive editing.
- **Example:** An editor reuses an approved CTA block.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P2.
- **Dependencies:** FR-04-05; AUTH.
- **Acceptance criteria:** Only allowed blocks are available; required content and accessibility fields validate; changes identify affected pages; this does not require a visual page builder.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 4, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-10 — Draft and publish workflow

- **Explanation:** Extend draft/preview/publish controls to broader content types.
- **Business purpose:** Prevent incomplete content going public.
- **Example:** A revised solution description is reviewed before publication.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P2.
- **Dependencies:** FR-04-05; AUTH.
- **Acceptance criteria:** P1 article workflow remains covered by FR-04-06; later supported types have explicit publication states; previews require appropriate access; unpublished content is excluded from search/sitemap.
- **Approval status:** Proposed P2 for general content only; article draft/publish is explicitly confirmed P1 under FR-04-06 (D-008).
- **Source:** S2 area 4, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-11 — Content version history

- **Explanation:** Retain content revision history and controlled restoration.
- **Business purpose:** Recover mistakes and support editorial accountability.
- **Example:** Admin restores a previous article revision.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P2.
- **Dependencies:** FR-04-06; FR-04-10.
- **Acceptance criteria:** Version author/time and content are retained; restore is permission-checked and creates an auditable revision; published/unpublished effects are explicit.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 4, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-12 — Scheduled publishing

- **Explanation:** Publish approved content at a future time.
- **Business purpose:** Coordinate campaigns without manual timing.
- **Example:** An article goes live at an approved date.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P3.
- **Dependencies:** FR-04-10; NFR-006.
- **Acceptance criteria:** Timezone is clear; cancelled/rescheduled jobs do not publish stale versions; retries do not duplicate publication; failed jobs are visible.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 4, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-13 — Multi-language content management

- **Explanation:** Manage translation variants of content.
- **Business purpose:** Keep multilingual content consistent.
- **Example:** An editor updates an approved translated service page.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P3.
- **Dependencies:** FR-04-10; FR-01-15.
- **Acceptance criteria:** Variants retain their source relationship; translation review state is visible; incomplete translations do not publish silently; slugs/metadata/language links validate.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 4, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-14 — AI-assisted content drafting

- **Explanation:** Generate editable content drafts with AI assistance.
- **Business purpose:** Accelerate drafting while preserving editorial responsibility.
- **Example:** Editor reviews an AI-generated FAQ draft.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P3.
- **Dependencies:** FR-04-06; AI-GATE.
- **Acceptance criteria:** No automatic publication; factual claims and references require review; generated proof/credentials are forbidden; provider/data/cost controls apply.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 4, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-04-15 — Visual page builder

- **Explanation:** Offer constrained visual editing of approved page components.
- **Business purpose:** Support advanced editorial flexibility if justified.
- **Example:** Editor rearranges permitted content blocks.
- **User role:** Authorized content editor/admin; developer for maintained P1 catalog
- **Phase:** P3.
- **Dependencies:** FR-04-09; FR-04-11.
- **Acceptance criteria:** Only approved components/styles are allowed; responsive/accessibility constraints validate; preview/version/rollback work; arbitrary script injection is blocked.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 4, row 15; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.5 Client portal

#### FR-05-01 — Client registration and login

- **Explanation:** Provide secure customer account access when the portal launches.
- **Business purpose:** Protect private client services.
- **Example:** An invited client signs in to their workspace.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** AUTH; FR-03-02; NFR-005.
- **Acceptance criteria:** Invitation versus public registration is approved; identity recovery and revocation work; each account is explicitly linked to permitted client records; unauthorized access is denied.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-02 — Client dashboard

- **Explanation:** Summarize a client's authorized projects, documents and next actions.
- **Business purpose:** Give clients one place to follow engagements.
- **Example:** Client sees a pending design approval.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; PROJECT.
- **Acceptance criteria:** Only that client's records appear; empty/error states work; internal notes and unrelated financial data are excluded; summaries link to permitted detail views.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-03 — Project status tracking

- **Explanation:** Show approved project progress to clients.
- **Business purpose:** Reduce routine status questions.
- **Example:** Client sees the current milestone and next review.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; FR-06-08.
- **Acceptance criteria:** Client-visible states match project records; internal-only details remain hidden; stale/missing updates are identified; access is checked on every request.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-04 — View proposals and contracts

- **Explanation:** Let clients access their authorized proposal/contract versions.
- **Business purpose:** Make agreements easy to find.
- **Example:** Client opens the signed SOW.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; FR-07-09; FILES.
- **Acceptance criteria:** Correct version and status are visible; private documents use access-controlled delivery; other clients cannot access guessed identifiers; download activity is recorded as appropriate.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-05 — View invoices and payments

- **Explanation:** Display invoices, balances and verified payment history.
- **Business purpose:** Clarify billing obligations.
- **Example:** Client sees a partially paid invoice.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; FR-07-04; FR-07-05.
- **Acceptance criteria:** Amounts/currency/status reconcile with finance records; pending transactions are not shown as paid; only authorized invoices are available.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-06 — Upload/download project files

- **Explanation:** Exchange project files through controlled uploads/downloads.
- **Business purpose:** Support delivery without unsafe public file links.
- **Example:** Client uploads approved brand assets.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; PROJECT; FILES.
- **Acceptance criteria:** Permissions, file restrictions and scanning policy apply; private links are time-limited where supported; storage quotas and upload failures are handled; downloads enforce client/project access.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-07 — Submit project requirements

- **Explanation:** Capture project intake answers and updates.
- **Business purpose:** Obtain necessary delivery information consistently.
- **Example:** Client provides content and integration requirements.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; PROJECT; CONSENT.
- **Acceptance criteria:** Required fields follow approved project scope; submissions retain author/time/version; changes notify responsible staff; credentials are not collected in ordinary text fields.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-08 — Approve designs and deliverables

- **Explanation:** Record client approval or rejection of a specific deliverable version.
- **Business purpose:** Avoid ambiguous acceptance.
- **Example:** Client approves design version 3.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; FR-06-09.
- **Acceptance criteria:** Approver identity/time/version and comments are stored; superseded versions cannot silently inherit approval; rejection retains feedback; staff cannot impersonate approval.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-09 — Request project changes

- **Explanation:** Capture requested scope changes and their disposition.
- **Business purpose:** Keep revisions separate from unpriced new work.
- **Example:** Client requests an additional feature.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; PROJECT; BR-006.
- **Acceptance criteria:** Request is linked to project/scope; staff can estimate and seek approval; no automatic inclusion or fee commitment; status/history remain visible to authorized users.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-10 — Message project manager

- **Explanation:** Provide project-linked client/staff communication.
- **Business purpose:** Keep delivery discussions in context.
- **Example:** Client asks their project manager a question.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; PROJECT; MAIL.
- **Acceptance criteria:** Sender/time and project linkage are stored; participants are permission-checked; internal notes stay separate; notification failures are handled.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-11 — Submit support tickets

- **Explanation:** Allow clients to open and track support tickets.
- **Business purpose:** Organize post-delivery assistance.
- **Example:** Client reports a maintenance issue.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; FR-03-02; BR-006.
- **Acceptance criteria:** Ticket owner/status/history are recorded; visibility is client-scoped; response policies match the agreed support plan; attachments follow FILES controls.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-12 — Client notifications

- **Explanation:** Notify clients about approved project, document and support events.
- **Business purpose:** Prompt required actions.
- **Example:** Client receives an approval-request notification.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P2.
- **Dependencies:** CLIENT; MAIL; NFR-006.
- **Acceptance criteria:** Recipients and channels follow preferences and permissions; duplicates are controlled; sensitive details are minimized; delivery/failure history is visible.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 5, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-13 — Subscription management

- **Explanation:** Let clients manage eligible subscription settings.
- **Business purpose:** Support recurring product/service relationships.
- **Example:** Client requests cancellation under agreed terms.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P3.
- **Dependencies:** CLIENT; FR-07-07.
- **Acceptance criteria:** Changes follow provider/state rules and contract terms; effective date and consequences are clear; no cross-client changes; pending actions reconcile with billing.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 5, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-05-14 — AI client support assistant

- **Explanation:** Assist clients using authorized support knowledge and records.
- **Business purpose:** Resolve routine questions while enabling human help.
- **Example:** Client asks about a documented product feature.
- **User role:** Authorized client; assigned staff/admin
- **Phase:** P3.
- **Dependencies:** CLIENT; FR-05-11; AI-GATE.
- **Acceptance criteria:** Only client-permitted context is retrieved; uncertainty/escalation exists; no unauthorized disclosure, refund, contract or account change; evaluation gates pass.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 5, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.6 Project management and delivery

#### FR-06-01 — Project creation from accepted proposal

- **Explanation:** Create a project from an accepted proposal with staff control.
- **Business purpose:** Carry agreed scope into delivery.
- **Example:** Staff converts a signed engagement into a project.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** FR-02-16; FR-07-09; FR-03-02.
- **Acceptance criteria:** Accepted proposal/version and client are linked; repeated conversion cannot create accidental duplicates; agreement/deposit readiness is visible; scope is preserved.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-02 — Project dashboard

- **Explanation:** Provide a staff overview of active delivery projects.
- **Business purpose:** Coordinate work and spot problems.
- **Example:** Manager views projects awaiting client review.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** FR-06-01; AUTH.
- **Acceptance criteria:** Only authorized projects appear; stage/owner/milestones are accurate; filters and empty states work; client views remain separately scoped.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-03 — Task and subtask management

- **Explanation:** Manage project tasks/subtasks and status.
- **Business purpose:** Break approved delivery into accountable work.
- **Example:** Developer completes a tested feature task.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** PROJECT; AUTH.
- **Acceptance criteria:** Tasks have project, owner, status and due context; nesting is bounded; updates retain history; deleting a parent has an explicit safe policy.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-04 — Team assignment

- **Explanation:** Assign staff or contractors to project responsibilities.
- **Business purpose:** Clarify delivery ownership.
- **Example:** Admin grants a designer access to one project.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** PROJECT; FR-09-09.
- **Acceptance criteria:** Only eligible people are assigned; project permissions follow least privilege; removal revokes future access; unrelated client/finance data stays inaccessible.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-05 — Project milestones

- **Explanation:** Track agreed milestones and completion evidence.
- **Business purpose:** Align progress with scope and commercial checkpoints.
- **Example:** A design milestone is ready for client review.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** PROJECT; FR-07-06.
- **Acceptance criteria:** Milestone dates/status/deliverables are linked to the agreed scope; acceptance evidence is recorded; completion does not automatically mark an invoice paid.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-06 — Kanban board

- **Explanation:** Display project tasks as an accessible Kanban board.
- **Business purpose:** Help teams manage work in progress.
- **Example:** Staff moves an authorized task to Review.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** FR-06-03; NFR-002.
- **Acceptance criteria:** Column/status mapping is consistent; keyboard alternatives work; concurrent changes are handled; permissions match task editing; not required for P1 sales pipeline.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-07 — Project files and documentation

- **Explanation:** Organize project documentation and files.
- **Business purpose:** Preserve delivery knowledge and handoff materials.
- **Example:** Staff attaches a deployment guide.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** PROJECT; FILES.
- **Acceptance criteria:** Files have project and visibility classification; versions/links remain understandable; access follows staff/client permissions; secrets use an approved secure channel.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-08 — Deadline and progress tracking

- **Explanation:** Track deadlines, overdue work and progress indicators.
- **Business purpose:** Identify delivery risk early.
- **Example:** Manager sees an overdue milestone.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** FR-06-03; FR-06-05.
- **Acceptance criteria:** Dates use clear timezones; progress calculation is documented; overdue status updates correctly; no false completion from task counts alone where milestones remain open.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-09 — Client review and approval

- **Explanation:** Manage review requests and version-specific client acceptance.
- **Business purpose:** Make delivery decisions auditable.
- **Example:** Staff requests approval of a homepage design.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** PROJECT; FR-05-08; FILES.
- **Acceptance criteria:** Request identifies deliverable/version/approver; approval/rejection is timestamped; notifications are reliable; later revisions require appropriate renewed approval.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-10 — Time tracking

- **Explanation:** Record time against authorized project work.
- **Business purpose:** Understand effort and support agreed billing.
- **Example:** Developer logs two hours against a task.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P2.
- **Dependencies:** PROJECT; AUTH.
- **Acceptance criteria:** Entries have person/date/duration/project; corrections are audited; totals reconcile; client visibility and billable rules are approved before exposure.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 6, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-11 — Project profitability tracking

- **Explanation:** Compare project revenue and costs with defined calculations.
- **Business purpose:** Understand delivery economics.
- **Example:** Owner reviews margin after a project closes.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P3.
- **Dependencies:** FR-06-10; FR-07-13; FR-10-07.
- **Acceptance criteria:** Recognized/invoiced/collected revenue basis is explicit; time and expenses reconcile; missing cost inputs are disclosed; currency handling is consistent.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 6, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-12 — Resource and capacity planning

- **Explanation:** Plan staff availability and delivery capacity.
- **Business purpose:** Avoid overcommitment.
- **Example:** Manager checks available hours before a new project.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P3.
- **Dependencies:** FR-06-04; FR-06-10.
- **Acceptance criteria:** Capacity assumptions and time periods are explicit; assignments do not silently override availability; reports respect access and approved working calendars.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 6, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-13 — Gantt chart

- **Explanation:** Visualize dated work and dependencies on a timeline.
- **Business purpose:** Coordinate complex projects when needed.
- **Example:** Manager checks a release dependent on design approval.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P3.
- **Dependencies:** FR-06-03; FR-06-05.
- **Acceptance criteria:** Dependency/date changes remain consistent with tasks; impossible/cyclic dependencies are detected; accessible non-chart representation exists.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 6, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-14 — Automated project creation

- **Explanation:** Create projects from approved events without manual duplication.
- **Business purpose:** Reduce repeatable onboarding effort.
- **Example:** An accepted engagement triggers a reviewed project template.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P3.
- **Dependencies:** FR-06-01; FR-08-10.
- **Acceptance criteria:** Trigger conditions include agreement/deposit policy; operation is idempotent; failures are visible; created scope reflects the accepted version; manual override exists.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 6, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-06-15 — AI project progress summaries

- **Explanation:** Draft project summaries from authorized delivery records.
- **Business purpose:** Reduce reporting effort.
- **Example:** Manager reviews a weekly progress draft.
- **User role:** Assigned project team/contractor; manager/admin; client for approvals
- **Phase:** P3.
- **Dependencies:** PROJECT; AI-GATE.
- **Acceptance criteria:** Summary cites relevant milestones/tasks and distinguishes missing data; staff reviews before external sharing; no invented completion or dates.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 6, row 15; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.7 Finance, billing and contracts

#### FR-07-01 — Proposal and invoice templates

- **Explanation:** Maintain reusable proposal and invoice templates for business operations.
- **Business purpose:** Create consistent commercial documents before automation.
- **Example:** Staff prepares an external invoice from an approved template.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P1.
- **Dependencies:** BR-006; FINANCE.
- **Acceptance criteria:** Templates contain verified entity/contact data, currency, scope/fees and applicable payment terms; template availability does not imply an online document system.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 7, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-02 — Manual payment tracking

- **Explanation:** Record payments manually in an approved process.
- **Business purpose:** Know what has actually been collected.
- **Example:** Owner records an invoice payment after reconciliation.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P1 proposed; implementation location pending D-007.
- **Dependencies:** FINANCE; D-007.
- **Acceptance criteria:** Amount/date/currency/reference and invoice link are retained; corrections are traceable; Won is not payment evidence; external ledger versus P1 dashboard implementation must be decided.
- **Approval status:** Decision required — S2 proposes P1; external manual process versus dashboard feature unresolved (D-007).
- **Source:** S2 area 7, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-03 — Client billing profiles

- **Explanation:** Maintain client billing information separately from ordinary contacts.
- **Business purpose:** Support accurate invoices.
- **Example:** Client provides an approved billing entity and address.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P2.
- **Dependencies:** FR-03-02; CONSENT; AUTH.
- **Acceptance criteria:** Only needed fields are stored; authorized updates are audited; billing identity can differ from project contact; jurisdiction-specific fields are configured only when required.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 7, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-04 — Automated invoice generation

- **Explanation:** Generate invoices from approved commercial records.
- **Business purpose:** Reduce billing errors and effort.
- **Example:** Staff issues a milestone invoice.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P2.
- **Dependencies:** FR-07-01; FR-07-03.
- **Acceptance criteria:** Invoice reference/version, client, currency, line items, totals and due terms are validated; draft/issued/cancelled states are tracked; retries do not issue duplicates.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 7, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-05 — Online payment gateway

- **Explanation:** Collect payments through an approved eligible provider.
- **Business purpose:** Enable convenient verified online collection.
- **Example:** Client pays an issued invoice.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P2.
- **Dependencies:** FR-07-04; FR-11-06; FR-14-12.
- **Acceptance criteria:** Provider eligibility/account readiness confirmed; signed callbacks reconcile amount/currency/invoice; retries are idempotent; browser redirects alone cannot mark paid; card data is not stored unnecessarily.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 7, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-06 — Deposit and milestone payments

- **Explanation:** Represent deposits and staged payments against agreements.
- **Business purpose:** Align collection with delivery milestones.
- **Example:** Professional project uses agreed 40/30/30 checkpoints.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P2.
- **Dependencies:** FR-07-04; FR-07-09.
- **Acceptance criteria:** Schedule matches agreement totals; partial/overdue payments are represented; milestone completion and receipt are separate events; manual P1 commercial schedules remain possible outside this module.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 7, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-07 — Recurring subscriptions

- **Explanation:** Manage recurring billing for approved subscriptions/retainers.
- **Business purpose:** Support predictable recurring revenue.
- **Example:** A monthly maintenance invoice is generated.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P2.
- **Dependencies:** FR-07-05; FINANCE.
- **Acceptance criteria:** Billing interval, start/end, cancellation and provider state are explicit; duplicate charges are prevented; failed payments are handled; self-service management may remain P3.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 7, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-08 — Payment reminders

- **Explanation:** Send approved billing reminders.
- **Business purpose:** Reduce overdue balances professionally.
- **Example:** Client receives a reminder for an unpaid invoice.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P2.
- **Dependencies:** FR-07-04; MAIL; CONSENT.
- **Acceptance criteria:** Only eligible outstanding balances trigger reminders; disputed/cancelled/paid invoices follow explicit suppression rules; send history and stop conditions are recorded.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 7, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-09 — Contract and SOW management

- **Explanation:** Store and manage agreements, SOWs and their versions.
- **Business purpose:** Keep legal scope and acceptance connected to delivery.
- **Example:** Staff retrieves the signed SOW for a change request.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P2.
- **Dependencies:** FILES; FINANCE; AUTH.
- **Acceptance criteria:** Status/version/parties and access are recorded; templates are reviewed for actual jurisdiction; signature evidence is preserved; amendments do not overwrite signed originals.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 7, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-10 — Refund and cancellation management

- **Explanation:** Track refund/cancellation requests and approved outcomes.
- **Business purpose:** Apply agreed policies consistently.
- **Example:** Staff approves a partial refund with a reason.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P2.
- **Dependencies:** FR-07-05; FR-07-09.
- **Acceptance criteria:** Authority, amount/currency, original payment and provider result are recorded; retries cannot duplicate refunds; reporting reconciles adjustments; policies are reviewed before use.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 7, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-11 — Financial reporting

- **Explanation:** Produce defined finance summaries from reliable records.
- **Business purpose:** Support financial oversight.
- **Example:** Owner reviews collected cash and outstanding invoices.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P3.
- **Dependencies:** FR-07-04; FR-07-05; FR-07-13.
- **Acceptance criteria:** Periods/currencies and cash-versus-accrual basis are clear; totals reconcile to source records; exports are access-controlled; this is not assumed statutory accounting compliance.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 7, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-12 — Multi-currency invoicing

- **Explanation:** Issue invoices in approved currencies.
- **Business purpose:** Support international contracts when necessary.
- **Example:** A client receives an agreed non-USD invoice.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P3.
- **Dependencies:** FR-07-04; FR-07-05.
- **Acceptance criteria:** Invoice currency is immutable after issue except controlled correction; conversion basis is explicit; amounts use precise representation; provider settlement differences are reconciled.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 7, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-13 — Expense tracking

- **Explanation:** Record business/project expenses and supporting evidence.
- **Business purpose:** Understand costs and profitability.
- **Example:** Owner records a project-specific hosting charge.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P3.
- **Dependencies:** FINANCE; FILES.
- **Acceptance criteria:** Amount/currency/date/category/project where relevant are stored; corrections audited; receipt access controlled; recurring estimates are distinguished from paid expenses.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 7, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-07-14 — Revenue and profit forecasting

- **Explanation:** Forecast future revenue/profit using defined scenarios.
- **Business purpose:** Support planning without confusing estimates and actuals.
- **Example:** Owner models a retainer growth scenario.
- **User role:** Owner/authorized finance staff; client for authorized billing actions
- **Phase:** P3.
- **Dependencies:** FR-03-10; FR-07-11.
- **Acceptance criteria:** Assumptions/time horizon and missing costs are explicit; actuals remain separate; forecasts reconcile to pipeline/billing inputs; no guaranteed outcome is implied.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 7, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.8 Automation

#### FR-08-01 — New lead email notification

- **Explanation:** Reuse new-inquiry staff notification as a launch event.
- **Business purpose:** Prompt timely sales handling without duplicate automation.
- **Example:** Saving a lead queues one staff alert.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P1.
- **Dependencies:** FR-02-09; MAIL.
- **Acceptance criteria:** Same capability as FR-02-09; one authoritative event/notification path is used; retries do not multiply alerts; delivery status is visible.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 8, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-02 — Customer quote confirmation

- **Explanation:** Reuse the inquiry acknowledgement for quote submissions.
- **Business purpose:** Confirm receipt consistently.
- **Example:** The quote requester receives their reference.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P1.
- **Dependencies:** FR-02-08; MAIL.
- **Acceptance criteria:** Same capability as FR-02-08; send after save only; no second independent confirmation workflow is built.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 8, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-03 — Lead assignment notifications

- **Explanation:** Notify a staff member of an approved lead assignment.
- **Business purpose:** Make ownership changes actionable.
- **Example:** New lead owner receives a protected-record link.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P1.
- **Dependencies:** FR-02-11; MAIL; AUTH.
- **Acceptance criteria:** Recipient is the current eligible owner; assignment and event are traceable; repeat events are deduplicated; channel choice is approved; sensitive data is minimized.
- **Approval status:** Proposed P1 specific assignment notification; general staff alerts are confirmed.
- **Source:** S2 area 8, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-04 — Event-based workflow triggers

- **Explanation:** Trigger approved workflows from recorded domain events.
- **Business purpose:** Automate repeatable business actions.
- **Example:** A qualified opportunity enters a configured follow-up flow.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P2.
- **Dependencies:** DATA; INTEGRATION; NFR-006.
- **Acceptance criteria:** Event definitions and versioned workflow rules are explicit; replay/idempotency and failure behavior are tested; disabled workflows do not execute.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 8, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-05 — Automated lead follow-up

- **Explanation:** Apply approved follow-up workflows to eligible leads.
- **Business purpose:** Reduce missed sales follow-through.
- **Example:** A workflow schedules a permitted next contact.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P2.
- **Dependencies:** FR-02-15; FR-08-04.
- **Acceptance criteria:** Reuse FR-02-15/FR-08-06; eligibility/consent/stop rules are enforced; manual override and history exist; no duplicate campaign engine.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 8, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-06 — Email and SMS sequences

- **Explanation:** Execute controlled email/SMS sequences.
- **Business purpose:** Coordinate multi-step outreach.
- **Example:** A consented prospect receives a scheduled follow-up.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P2.
- **Dependencies:** MAIL; FR-11-05; CONSENT.
- **Acceptance criteria:** Channel eligibility, opt-out, frequency limits and reply/closure stopping are enforced; sends and failures are logged; provider callbacks verified.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 8, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-07 — Scheduled tasks and reminders

- **Explanation:** Run approved scheduled tasks and external reminders.
- **Business purpose:** Automate timed work beyond P1 dashboard reminders.
- **Example:** A scheduled rule reminds an owner of a task.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P2.
- **Dependencies:** FR-03-06; FR-08-04; NFR-006.
- **Acceptance criteria:** Timezone, cancellation, retry and duplication rules are tested; permissions apply; manual P1 tasks remain usable without this scheduler.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 8, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-08 — CRM pipeline automation

- **Explanation:** Apply approved stage-related CRM actions.
- **Business purpose:** Reduce repetitive pipeline administration.
- **Example:** A stage change creates an agreed follow-up task.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P2.
- **Dependencies:** FR-03-05; FR-08-04.
- **Acceptance criteria:** Rules cannot bypass required authorization; stage loops/duplicate actions are prevented; rule history and manual correction are available.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 8, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-09 — Invoice and payment automation

- **Explanation:** Automate approved invoice and payment-related actions.
- **Business purpose:** Keep finance and operations synchronized.
- **Example:** Verified payment closes a scheduled billing reminder.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P2.
- **Dependencies:** FR-07-04; FR-07-05; FR-08-04.
- **Acceptance criteria:** Actions use reconciled finance events; retries are idempotent; refunded/disputed/partial states handled; no payment inferred from browser success.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 8, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-10 — Project onboarding automation

- **Explanation:** Automate agreed project onboarding steps.
- **Business purpose:** Reduce repeated setup after sale.
- **Example:** Agreement and required deposit trigger an onboarding checklist.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P2.
- **Dependencies:** FR-06-01; FR-07-06; FR-08-04.
- **Acceptance criteria:** Prerequisites are verified; template/version and created records are linked; duplicate events do not create duplicate onboarding; failures are recoverable.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 8, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-11 — Webhook management

- **Explanation:** Manage approved inbound/outbound webhook integrations.
- **Business purpose:** Connect external systems reliably.
- **Example:** A verified provider callback updates a record.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P2.
- **Dependencies:** FR-14-12; FR-14-13; INTEGRATION.
- **Acceptance criteria:** Signatures or approved authentication checked; payloads validated; secrets protected; replay/deduplication, retries and failure visibility apply when introduced.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 8, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-12 — Visual workflow builder

- **Explanation:** Provide a graphical editor for approved workflow components.
- **Business purpose:** Support advanced configuration without code changes.
- **Example:** Admin connects permitted trigger and action blocks.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P3.
- **Dependencies:** FR-08-04; FR-08-13.
- **Acceptance criteria:** Only authorized components/actions are available; invalid/cyclic definitions rejected; preview/version/activation controls exist; runtime remains auditable.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 8, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-13 — Conditional branching workflows

- **Explanation:** Support conditional workflow branches with explicit limits.
- **Business purpose:** Handle more complex business rules.
- **Example:** A workflow routes an inquiry by approved service criteria.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P3.
- **Dependencies:** FR-08-04; AUTH.
- **Acceptance criteria:** Conditions are deterministic and testable; missing data has defined behavior; execution limits prevent loops; unauthorized data cannot be queried.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 8, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-14 — AI-driven automation

- **Explanation:** Use AI within approved, bounded workflow steps.
- **Business purpose:** Assist complex decisions while retaining oversight.
- **Example:** AI proposes an inquiry classification before review.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P3.
- **Dependencies:** FR-08-04; AI-GATE.
- **Acceptance criteria:** High-impact/external actions require approved safeguards; model outputs are validated; cost/time limits and fallback exist; decisions are traceable.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 8, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-08-15 — Workflow execution logs and retries

- **Explanation:** Provide an advanced workflow execution history and replay console.
- **Business purpose:** Diagnose sophisticated automation.
- **Example:** Admin inspects a failed workflow step and retries safely.
- **User role:** Authorized admin/staff; system execution under approved permissions
- **Phase:** P3 advanced console; basic reliability from P1 onward.
- **Dependencies:** FR-08-04; NFR-006.
- **Acceptance criteria:** Execution/step outcomes and safe retry controls are visible; replay does not repeat completed irreversible actions; secrets/PII minimized. Basic logs/retries are required from each feature's first release, not postponed to P3.
- **Approval status:** Conditional P3 advanced console; basic logging/retries required with every first-release workflow/integration (D-025).
- **Source:** S2 area 8, row 15; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.9 Staff dashboard and team management

#### FR-09-01 — Secure staff login/logout

- **Explanation:** Provide secure staff sign-in, sign-out and session handling.
- **Business purpose:** Restrict business records to authorized users.
- **Example:** Staff signs out and loses access to protected records.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** FR-14-04; BASE.
- **Acceptance criteria:** No public staff signup; valid sessions required; logout/revocation work; failed sign-in is controlled; server routes enforce access independently of UI.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-02 — Admin dashboard overview

- **Explanation:** Summarize launch operations and next actions.
- **Business purpose:** Help staff prioritize daily work.
- **Example:** Owner sees new leads, pipeline counts and overdue tasks.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** FR-02-06; FR-03-05; FR-03-06; AUTH.
- **Acceptance criteria:** Authorized lead/status summaries and due tasks match source data; links reach protected detail views; draft CMS actions are available to permitted roles; no future module is falsely shown as working.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-03 — Lead management table

- **Explanation:** List inquiries with useful columns and bounded pagination.
- **Business purpose:** Make lead handling efficient as volume grows.
- **Example:** Staff filters the latest unassigned inquiries.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** FR-02-06; AUTH.
- **Acceptance criteria:** Rows show approved fields/status/owner/date/reference; results respect permissions; pagination is stable; empty/loading/error states exist.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-04 — Lead detail pages

- **Explanation:** Show an inquiry's scope, contact, source and activity.
- **Business purpose:** Give staff enough context for follow-up.
- **Example:** Staff opens a service quote with its price snapshot.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** FR-02-06; FR-02-12; AUTH.
- **Acceptance criteria:** Record links and snapshot remain accurate; private notes protected; missing optional data handled; unauthorized identifiers cannot retrieve data.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-05 — Search and filtering

- **Explanation:** Search/filter authorized staff records.
- **Business purpose:** Reduce time finding relevant leads.
- **Example:** Staff searches a reference and filters New leads.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** FR-09-03; FR-14-02.
- **Acceptance criteria:** Search covers approved fields; filters combine predictably; results/pagination are access-scoped; input and query size are bounded.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-06 — Lead status and assignment

- **Explanation:** Expose status and assignment controls in the dashboard.
- **Business purpose:** Make sales updates accessible.
- **Example:** Staff changes an authorized opportunity owner.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** FR-02-10; FR-02-11; AUTH.
- **Acceptance criteria:** Reuse FR-02-10/11 and FR-03-05; server permissions and activity history apply; UI prevents unsupported changes but is not the sole security control.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-07 — Basic user roles and permissions

- **Explanation:** Apply a small, explicit role/permission model.
- **Business purpose:** Protect client data and administrative functions.
- **Example:** A content editor cannot open private sales records.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** FR-14-03; D-013.
- **Acceptance criteria:** Permission matrix is approved; backend denies forbidden reads/mutations; account provisioning/revocation works; least privilege applies; no advanced permission builder needed.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-08 — Internal activity history

- **Explanation:** Show authorized operational history to staff.
- **Business purpose:** Support handoffs and accountability.
- **Example:** Staff sees when a lead was assigned.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** FR-02-12; FR-09-13.
- **Acceptance criteria:** Reuse record activities and audit sources; author/time/action are visible; internal details are not public; access matches the underlying record.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-09 — Team management

- **Explanation:** Manage team invitations, membership and working roles.
- **Business purpose:** Support a growing delivery team.
- **Example:** Admin invites a contractor with limited access.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P2.
- **Dependencies:** AUTH; FR-09-07.
- **Acceptance criteria:** Invite lifecycle and revocation work; only permitted admins grant roles; departing staff lose access; minimum P1 staff provisioning remains required before this broader team module.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 9, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-10 — Department management

- **Explanation:** Group staff into departments when operationally needed.
- **Business purpose:** Organize responsibility without unnecessary launch complexity.
- **Example:** Admin groups sales and delivery staff.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P2.
- **Dependencies:** FR-09-09; AUTH.
- **Acceptance criteria:** Membership and manager roles are explicit; department membership alone does not bypass record permissions; inactive departments do not strand work.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 9, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-11 — Staff performance dashboard

- **Explanation:** Summarize staff performance using agreed measures.
- **Business purpose:** Help manage workload and sales operations.
- **Example:** Manager compares assigned and completed follow-ups.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P2.
- **Dependencies:** FR-03-06; FR-10-10.
- **Acceptance criteria:** Definitions/time periods are visible; access is appropriate; missing data is disclosed; counts reconcile with records and do not claim unmeasured productivity.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 9, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-12 — Global admin notifications

- **Explanation:** Provide a centralized staff notification center.
- **Business purpose:** Bring relevant events into one place.
- **Example:** Staff sees assignment and approval alerts.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P2.
- **Dependencies:** AUTH; NFR-006.
- **Acceptance criteria:** Notifications are recipient-scoped with read state and links; duplicate events controlled; email failure does not erase in-app events; preferences supported where approved.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 9, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-13 — Audit logs

- **Explanation:** Record security-relevant and material business changes.
- **Business purpose:** Support accountability and incident investigation.
- **Example:** Admin reviews a permission change.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P1.
- **Dependencies:** AUTH; DATA; NFR-004.
- **Acceptance criteria:** Actor/time/action/target/outcome are stored where applicable; ordinary staff cannot alter audit records; secrets excluded; retention/access policy defined; failed authorized actions are diagnosable.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 9, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-14 — Advanced permission builder

- **Explanation:** Allow authorized administrators to configure advanced permission sets.
- **Business purpose:** Support complex organizations later.
- **Example:** Admin creates a restricted project-review role.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P3.
- **Dependencies:** FR-09-07; FR-09-13.
- **Acceptance criteria:** Privilege escalation and self-granting risks are controlled; permission changes audited; effective access is inspectable; regression tests cover sensitive operations.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 9, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-15 — Customizable dashboard widgets

- **Explanation:** Let staff personalize permitted dashboard views.
- **Business purpose:** Improve usefulness for varied roles.
- **Example:** Manager selects an approved sales summary widget.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P3.
- **Dependencies:** FR-09-02; AUTH.
- **Acceptance criteria:** Widgets use existing authorized data; preferences cannot expose restricted records; defaults and reset work; layout remains accessible/responsive.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 9, row 15; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-09-16 — Multi-organization management

- **Explanation:** Manage multiple organizations when a SaaS/business need is approved.
- **Business purpose:** Support separate organizational workspaces.
- **Example:** An organization admin manages only their own members.
- **User role:** Authorized staff/admin/manager according to approved role
- **Phase:** P3.
- **Dependencies:** TENANT; FR-09-09; D-016.
- **Acceptance criteria:** Organization selection and membership are explicit; every relevant record/action is isolated; platform support access is governed; billing and identity boundaries are approved.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 9, row 16; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.10 Analytics and reporting

#### FR-10-01 — Google Analytics 4

- **Explanation:** Collect approved website analytics through GA4.
- **Business purpose:** Understand traffic and conversion behavior.
- **Example:** Owner reviews aggregate service-page engagement.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P1.
- **Dependencies:** CONSENT; FR-11-02; NFR-007.
- **Acceptance criteria:** Production events follow consent configuration; no inquiry text/email/phone is sent; test/internal traffic policy is defined; duplicate initialization is prevented.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 10, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-02 — Google Search Console

- **Explanation:** Verify ownership and monitor search/indexing through Search Console.
- **Business purpose:** Identify discovery and indexing issues.
- **Example:** Owner reviews a sitemap and indexed service pages.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P1.
- **Dependencies:** NFR-001; BASE.
- **Acceptance criteria:** Authorized property setup and sitemap submission are documented; production indexing settings are checked; access is limited to appropriate maintainers.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 10, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-03 — Quote conversion tracking

- **Explanation:** Track quote success only after durable backend acceptance.
- **Business purpose:** Measure real lead submissions.
- **Example:** One accepted quote produces one conversion event.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P1.
- **Dependencies:** FR-02-01; FR-10-01; NFR-006.
- **Acceptance criteria:** Failed/blocked submissions do not count; idempotent retries do not inflate counts; no PII is transmitted; source context is preserved separately in CRM.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 10, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-04 — Lead count and status summary

- **Explanation:** Show basic inquiry/status counts in the staff dashboard.
- **Business purpose:** Provide launch-level operational visibility.
- **Example:** Owner sees New and Won counts for a period.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P1.
- **Dependencies:** FR-09-02; FR-03-05.
- **Acceptance criteria:** Definitions distinguish inquiries, opportunities and customers; counts reconcile with filtered records; permissions/date ranges apply; duplicate tags are handled explicitly.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 10, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-05 — Lead source attribution

- **Explanation:** Aggregate lead-source capture into attribution reports.
- **Business purpose:** Identify productive acquisition channels.
- **Example:** Manager compares valid leads by source.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P2.
- **Dependencies:** FR-02-13; FR-10-04.
- **Acceptance criteria:** P1 capture remains FR-02-13; report model/time window and Unknown are explicit; contacts/deals are not double-counted; no unsupported multi-touch certainty.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 10, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-06 — Sales funnel reporting

- **Explanation:** Report movement and conversion through the sales funnel.
- **Business purpose:** Identify sales bottlenecks.
- **Example:** Manager reviews Qualified-to-Proposal conversion.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P2.
- **Dependencies:** FR-03-05; FR-09-13.
- **Acceptance criteria:** Stage history supports period calculations; denominator and exclusions are stated; reopened/lost deals handled consistently; access-scoped totals reconcile.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 10, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-07 — Revenue reporting

- **Explanation:** Report invoiced, collected, outstanding and adjusted revenue separately.
- **Business purpose:** Understand commercial outcomes accurately.
- **Example:** Owner compares won deal value with cash collected.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P2.
- **Dependencies:** FR-07-04; FR-07-05; FINANCE.
- **Acceptance criteria:** Monetary basis/currency/period are clear; refunds and partial payments reconcile; estimated opportunity values never silently become actual revenue.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 10, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-08 — Service popularity analytics

- **Explanation:** Report approved service engagement and inquiry demand.
- **Business purpose:** Guide offer and content priorities.
- **Example:** Owner compares service views with qualified inquiries.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P2.
- **Dependencies:** CAT; FR-02-02; FR-10-01.
- **Acceptance criteria:** Metrics distinguish views/selections/leads; multi-service inquiries use a documented counting rule; no misleading summed unique-lead counts.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 10, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-09 — Customer acquisition cost

- **Explanation:** Calculate acquisition cost from defined spend and customer counts.
- **Business purpose:** Assess marketing efficiency.
- **Example:** Owner reviews campaign cost per acquired customer.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P2.
- **Dependencies:** FR-10-05; FR-03-03; FINANCE.
- **Acceptance criteria:** Spend source, attribution window and customer definition are explicit; missing spend is disclosed; no division by zero; figures reconcile to the chosen period.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 10, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-10 — Team performance reports

- **Explanation:** Report team activity and outcomes using agreed measures.
- **Business purpose:** Support team management.
- **Example:** Manager reviews follow-up completion by owner.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P2.
- **Dependencies:** FR-03-06; FR-09-09.
- **Acceptance criteria:** Metrics/time windows and reassignment handling are defined; permissions protect employee/customer data; totals reconcile with tasks and pipeline.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 10, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-11 — Custom report builder

- **Explanation:** Allow authorized users to compose reports from approved fields.
- **Business purpose:** Support advanced analysis without ad hoc exports.
- **Example:** Owner selects grouped sales metrics.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P3.
- **Dependencies:** FR-10-06; FR-10-07; AUTH.
- **Acceptance criteria:** Field/row permissions apply; expensive queries are bounded; report definitions can be saved; exports preserve access and currency/time definitions.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 10, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-12 — AI business insights

- **Explanation:** Suggest business observations from reliable reports.
- **Business purpose:** Help identify patterns for human review.
- **Example:** AI notes a supported change in service demand.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P3.
- **Dependencies:** FR-10-06; FR-10-08; AI-GATE.
- **Acceptance criteria:** Observations link to data/time range; uncertainty and sample limits shown; no invented causes; staff controls external sharing.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 10, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-10-13 — Predictive analytics

- **Explanation:** Model future outcomes from adequate historical data.
- **Business purpose:** Support advanced planning when evidence permits.
- **Example:** Owner reviews a validated lead-conversion forecast.
- **User role:** Owner/authorized manager or analyst; developer for setup
- **Phase:** P3.
- **Dependencies:** FR-10-06; AI-GATE.
- **Acceptance criteria:** Training/evaluation scope and performance are documented; insufficient data produces a limitation rather than false certainty; human decisions and monitoring remain.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 10, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.11 External integrations

#### FR-11-01 — Transactional email provider

- **Explanation:** Integrate a selected transactional email service.
- **Business purpose:** Deliver acknowledgements and staff alerts reliably.
- **Example:** A saved quote queues confirmation email.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P1.
- **Dependencies:** BASE; BR-003; NFR-006.
- **Acceptance criteria:** Domain/sender verified; credentials server-only; retry and bounce/failure handling defined; templates tested; provider selection and cost approved.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 11, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-02 — Analytics integrations

- **Explanation:** Connect the approved analytics services with privacy controls.
- **Business purpose:** Measure the public website consistently.
- **Example:** Approved GA4 events run in production.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P1.
- **Dependencies:** CONSENT; NFR-007.
- **Acceptance criteria:** One controlled integration path serves FR-10-01/02/03; consent and PII restrictions apply; secrets and private dashboard data are not exposed.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 11, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-03 — GoHighLevel CRM

- **Explanation:** Synchronize approved CRM data with GoHighLevel when justified.
- **Business purpose:** Connect ARADUN operations with external sales workflows.
- **Example:** A qualified lead syncs to an approved GHL account.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2.
- **Dependencies:** FR-03-01; INTEGRATION; D-017.
- **Acceptance criteria:** Source of truth, field mapping and direction are approved; external IDs prevent duplicates; conflicts/retries/deletion/consent are handled; no second uncontrolled CRM master.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 11, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-04 — Google Calendar

- **Explanation:** Connect consultation scheduling with an approved Google Calendar account.
- **Business purpose:** Keep meetings and leads coordinated.
- **Example:** Confirmed appointment is linked to a CRM contact.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2 baseline; P1 proposed, pending D-003.
- **Dependencies:** FR-02-05; INTEGRATION; D-003.
- **Acceptance criteria:** External-link versus synchronized booking is selected; permissions and provider capability verified; timezone/cancellation/rescheduling/retry behavior defined; calendar alone is not assumed to create a CRM lead.
- **Approval status:** Decision required — baseline P2; P1 external or integrated booking remains under review (D-003).
- **Source:** S2 area 11, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-05 — ClickSend SMS

- **Explanation:** Connect approved SMS sending through ClickSend.
- **Business purpose:** Support permitted communication workflows.
- **Example:** A consented reminder is sent by an approved workflow.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2.
- **Dependencies:** CONSENT; INTEGRATION; FR-08-06.
- **Acceptance criteria:** Recipient consent/opt-out and spend limits apply; provider credentials protected; delivery callbacks verified; duplicate sends controlled; eligibility verified before use.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 11, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-06 — Payment providers

- **Explanation:** Integrate payment provider adapters only after eligibility and selection.
- **Business purpose:** Support reliable invoice collection.
- **Example:** A verified payment event updates its invoice.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2.
- **Dependencies:** FINANCE; FR-14-12; FR-14-13.
- **Acceptance criteria:** Use FR-07-05 controls; provider account/currency/country support verified; signature and idempotency checks apply; secrets isolated; no provider assumed available.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 11, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-07 — Google Drive / cloud storage

- **Explanation:** Connect approved cloud-file storage or Google Drive workflows.
- **Business purpose:** Support secure asset/document handling.
- **Example:** An authorized project document is stored externally.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2.
- **Dependencies:** FILES; INTEGRATION.
- **Acceptance criteria:** Access, ownership, retention and permission mapping approved; shared links do not bypass client access; transfer failures/revocation handled; public/private assets separated.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 11, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-08 — Slack / Microsoft Teams

- **Explanation:** Send selected operational notifications to Slack or Teams.
- **Business purpose:** Support team communication when needed.
- **Example:** A permitted channel receives a new lead alert.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2.
- **Dependencies:** INTEGRATION; AUTH; CONSENT.
- **Acceptance criteria:** Channels/recipients are approved; sensitive payloads minimized; protected links used; retries controlled; no unrestricted cross-channel posting.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 11, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-09 — Zapier / Make / n8n

- **Explanation:** Expose approved automation integration points for Zapier, Make or n8n.
- **Business purpose:** Connect tools without duplicating core business logic.
- **Example:** A validated event triggers an approved external action.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2.
- **Dependencies:** FR-08-11; INTEGRATION.
- **Acceptance criteria:** Credential scopes and data mappings approved; webhook security/replay controls apply; failures visible; external tools cannot bypass internal authorization.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 11, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-10 — Accounting software

- **Explanation:** Exchange approved finance records with accounting software.
- **Business purpose:** Reduce duplicate entry and support reconciliation.
- **Example:** Issued invoices sync to the selected accounting system.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2.
- **Dependencies:** FINANCE; FR-07-04; INTEGRATION.
- **Acceptance criteria:** Master system and mappings approved; references/currency/totals reconcile; duplicate exports prevented; corrections and tax fields follow actual setup.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 11, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-11 — WhatsApp Business Platform

- **Explanation:** Integrate the approved WhatsApp Business Platform use case.
- **Business purpose:** Support eligible customer communications.
- **Example:** A consented customer receives an approved update.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P2.
- **Dependencies:** CONSENT; INTEGRATION.
- **Acceptance criteria:** Provider/account eligibility and messaging rules verified at selection; consent/opt-out and templates respected; secrets/callbacks secure; records linked correctly.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 11, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-12 — GitHub integration

- **Explanation:** Connect GitHub to business/project workflows beyond basic source control.
- **Business purpose:** Link delivery activity when commercially useful.
- **Example:** A project displays approved repository milestone status.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P3.
- **Dependencies:** PROJECT; INTEGRATION.
- **Acceptance criteria:** Repository permissions and selected data scope are explicit; private code/secrets not exposed to clients; access revocation works; ordinary Git/CI remains P1 engineering infrastructure.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 11, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-13 — Public developer API

- **Explanation:** Provide a versioned external API for approved consumers.
- **Business purpose:** Enable controlled platform extensibility.
- **Example:** An authorized integration retrieves permitted records.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P3.
- **Dependencies:** FR-14-13; AUTH; NFR-005.
- **Acceptance criteria:** Authentication/scopes, rate limits, pagination, versioning and audit are defined; tenant/record permissions enforced; no public access to private data.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 11, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-11-14 — Integration marketplace

- **Explanation:** Offer a governed catalog of integration extensions.
- **Business purpose:** Support advanced ecosystem growth if justified.
- **Example:** Admin enables a reviewed integration.
- **User role:** Authorized admin/integration maintainer; affected users under consent/access rules
- **Phase:** P3.
- **Dependencies:** FR-11-13; TENANT; D-016.
- **Acceptance criteria:** Publisher/permission review, installation/revocation, version compatibility and data access are controlled; marketplace need and operating model approved first.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 11, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.12 AI capabilities

#### FR-12-01 — Website AI chatbot

- **Explanation:** Provide a public AI assistant over approved website knowledge.
- **Business purpose:** Help visitors find relevant services.
- **Example:** Visitor asks which offer addresses manual lead follow-up.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P2.
- **Dependencies:** CONTENT; AI-GATE.
- **Acceptance criteria:** Only approved content used; uncertainty and human contact fallback present; no fabricated quote/availability/credentials; abuse/cost/privacy controls tested.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 12, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-02 — AI FAQ assistant

- **Explanation:** Answer questions from approved published FAQs/help content.
- **Business purpose:** Reduce repetitive basic questions.
- **Example:** Visitor asks about the published revision process.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P2.
- **Dependencies:** FR-01-13; AI-GATE.
- **Acceptance criteria:** Answers reference current approved knowledge; unknown questions escalate; private drafts/records excluded; no unsupported legal/security assurances.
- **Approval status:** Proposed catalog requirement; detailed scope and phase require approval.
- **Source:** S2 area 12, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-03 — AI lead qualification

- **Explanation:** Reuse AI-assisted lead qualification.
- **Business purpose:** Keep qualification logic consistent across modules.
- **Example:** Staff reviews an AI qualification suggestion.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** FR-02-18; AI-GATE.
- **Acceptance criteria:** Same capability as FR-02-18; no separate scoring store or autonomous rejection is introduced; access and evaluation gates apply.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-04 — AI quote scope assistant

- **Explanation:** Suggest scope questions and possible service matches.
- **Business purpose:** Help staff clarify incomplete requests.
- **Example:** AI proposes questions for an integration project.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** CAT; FR-02-01; AI-GATE.
- **Acceptance criteria:** Suggestions use approved catalog facts; no binding price/timeline; staff reviews; user-provided content cannot override authorization or tool boundaries.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-05 — AI proposal drafting

- **Explanation:** Draft proposal text from approved scope and templates.
- **Business purpose:** Reduce repetitive proposal writing.
- **Example:** Staff reviews a draft SOW outline.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** FR-02-16; AI-GATE.
- **Acceptance criteria:** Draft references the correct inquiry/version; fees/terms require verification; no invented deliverables or automatic sending/signing; human approval logged.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-06 — AI customer support

- **Explanation:** Assist customer support with permitted knowledge and context.
- **Business purpose:** Improve routine response speed.
- **Example:** Support staff reviews a ticket reply draft.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** FR-05-11; AI-GATE.
- **Acceptance criteria:** Access follows ticket/client permissions; escalation exists; no autonomous refunds/account changes unless separately approved; evidence and uncertain claims are reviewable.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-07 — AI content generation

- **Explanation:** Reuse AI content drafting within the editorial workflow.
- **Business purpose:** Maintain one controlled generation process.
- **Example:** Editor requests an article outline.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** FR-04-14; AI-GATE.
- **Acceptance criteria:** Same capability as FR-04-14; drafts require human fact/claim review and explicit publication; no automated fictional proof.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-08 — AI workflow suggestions

- **Explanation:** Suggest workflow improvements based on authorized process information.
- **Business purpose:** Help identify useful automation.
- **Example:** AI proposes a manual-review step for inquiries.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** FR-08-04; AI-GATE.
- **Acceptance criteria:** Suggestions are non-executing until approved; prerequisites/risks visible; no unauthorized connector setup or external action; costs and uncertainty stated.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-09 — AI CRM insights

- **Explanation:** Generate advisory CRM observations from permitted data.
- **Business purpose:** Help staff understand accounts and sales activity.
- **Example:** Staff reviews a summary of follow-up gaps.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** FR-03-12; AI-GATE.
- **Acceptance criteria:** Reuse FR-03-12 and FR-10-12 controls; sources/time ranges visible; private record scope enforced; conclusions remain correctable.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-10 — AI project management assistant

- **Explanation:** Assist with project questions and summaries.
- **Business purpose:** Reduce delivery administration.
- **Example:** Manager asks which milestones need attention.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** FR-06-15; AI-GATE.
- **Acceptance criteria:** Reuse FR-06-15; cite task/milestone data; no invented progress or autonomous deadline commitments; client sharing requires review.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-12-11 — AI voice agent

- **Explanation:** Provide voice assistance only for a defined approved use case.
- **Business purpose:** Support advanced communication where appropriate.
- **Example:** An approved voice assistant handles a limited inquiry scenario.
- **User role:** Permitted visitor/client/staff depending on assistant; owner/admin oversight
- **Phase:** P3.
- **Dependencies:** INTEGRATION; CONSENT; AI-GATE.
- **Acceptance criteria:** Identity/disclosure, consent and recording rules are verified; escalation and interruption work; no unauthorized commitments; call costs and transcripts/access are controlled.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 12, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.13 Future AMS

#### FR-13-01 — Agency dashboard

- **Explanation:** Provide a specialized agency operations dashboard in a separate module/product.
- **Business purpose:** Support future agency-domain workflows.
- **Example:** An agency views permitted renewals and work queues.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** AMS-GATE; Agency access boundaries (TENANT only if multi-organization scope approved).
- **Acceptance criteria:** Product/tenant scope approved; metrics derive from agency records; agency access isolation enforced; no dependency that couples public ARADUN marketing to policy operations.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-02 — Customer and household records

- **Explanation:** Maintain agency customers and household relationships where relevant.
- **Business purpose:** Represent specialized client relationships.
- **Example:** An authorized agent links household members.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** AMS-GATE; Agency access boundaries (TENANT only if multi-organization scope approved); CONSENT.
- **Acceptance criteria:** Identity/relationship rules and sensitive-data policy approved; household membership does not automatically grant disclosure rights; corrections preserve history.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-03 — Policy records and renewal dates

- **Explanation:** Track policy records, statuses and renewal dates.
- **Business purpose:** Support agency servicing and renewal work.
- **Example:** Agent sees an upcoming policy renewal.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** AMS-GATE; FR-13-02.
- **Acceptance criteria:** Required fields and status definitions approved by domain owners; date corrections audited; no statement that records bind coverage or replace carrier confirmation.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-04 — Carrier/company directory

- **Explanation:** Maintain carrier/company reference information.
- **Business purpose:** Keep agency partners and record links organized.
- **Example:** Agent selects the relevant carrier.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** AMS-GATE; AUTH.
- **Acceptance criteria:** Entries have controlled identity/status; no assumed appointment/partnership claims; duplicate/retired entries handled without losing policy links.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-05 — Quote and policy workflow tracking

- **Explanation:** Track authorized quote-to-policy workflow events.
- **Business purpose:** Organize agency activity without unsupported carrier authority.
- **Example:** Agent records a quote awaiting carrier response.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FR-13-03; FR-13-04; AMS-GATE.
- **Acceptance criteria:** Workflow states and permissions domain-approved; external confirmation distinguished from internal status; quote/policy history retained; no automated binding without explicit capability/authorization.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-06 — Renewal reminders

- **Explanation:** Generate approved renewal tasks/reminders.
- **Business purpose:** Reduce missed servicing opportunities.
- **Example:** Agent receives an upcoming-renewal task.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FR-13-03; FR-08-07.
- **Acceptance criteria:** Dates and lead times configurable within approved rules; cancellation/renewed policies suppressed; consent/channel rules apply; duplicates and failures controlled.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-07 — Commission tracking

- **Explanation:** Record expected and received commissions with reconciliation.
- **Business purpose:** Support agency revenue oversight.
- **Example:** Agency compares carrier statement with received commission.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FR-13-03; FINANCE; AMS-GATE.
- **Acceptance criteria:** Source policy/statement/amount/period/currency tracked; adjustments audited; expected versus received distinguished; formulas and access reviewed by domain owner.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-08 — Document management

- **Explanation:** Store agency documents with strict classification and access.
- **Business purpose:** Protect sensitive servicing records.
- **Example:** Agent accesses a permitted policy document.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FILES; Agency access boundaries (TENANT only if multi-organization scope approved); AMS-GATE.
- **Acceptance criteria:** Agency/customer/policy linkage is correct; encrypted storage/access/retention policy approved; private files never publicly indexed; audit and download controls tested.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-09 — Agent assignment

- **Explanation:** Assign agency work to eligible agents.
- **Business purpose:** Clarify servicing responsibility.
- **Example:** Manager assigns a renewal to an authorized agent.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FR-13-02; AUTH; Agency access boundaries (TENANT only if multi-organization scope approved).
- **Acceptance criteria:** Agent eligibility and organization membership verified; access scope follows policy; reassignment history retained; licensing/authority assumptions are not fabricated.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-10 — Claims/service request tracking

- **Explanation:** Track claims/service requests and referrals as authorized.
- **Business purpose:** Organize client servicing without promising carrier outcomes.
- **Example:** Agent logs a client's service request.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FR-13-03; AMS-GATE.
- **Acceptance criteria:** Request type/status/owner/history recorded; carrier decisions remain distinct; sensitive data minimized; communication scope follows approved agency policies.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-11 — Carrier integration adapters

- **Explanation:** Connect permitted carrier systems through isolated adapters.
- **Business purpose:** Reduce manual exchange when authorized APIs exist.
- **Example:** An approved adapter retrieves authorized status data.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FR-13-04; INTEGRATION; AMS-GATE.
- **Acceptance criteria:** Carrier access/contracts verified; mapping and reconciliation tested; callbacks secured; retries controlled; no invented universal carrier API or unauthorized scraping.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-12 — Compliance and audit controls

- **Explanation:** Apply agency-specific audit and compliance controls.
- **Business purpose:** Support accountable domain operations.
- **Example:** An authorized reviewer inspects policy-change history.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FR-09-13; Agency access boundaries (TENANT only if multi-organization scope approved); AMS-GATE.
- **Acceptance criteria:** Applicable requirements determined by qualified review; access/retention/audit behavior tested; no blanket compliance certification claim; agency boundaries enforced, with tenant isolation where applicable.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-13-13 — Agency-specific reporting

- **Explanation:** Report agency-specific operational metrics.
- **Business purpose:** Help agency managers oversee workload and renewals.
- **Example:** Manager views renewals by assigned agent.
- **User role:** Authorized agency staff/agent/manager; organization admin as approved
- **Phase:** P3.
- **Dependencies:** FR-13-03; FR-13-09; FR-13-12.
- **Acceptance criteria:** Definitions/domain scope approved; reports reconcile with policies/requests; role/organization filters apply where applicable; exports controlled; no unsupported compliance conclusions.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 13, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

### 11.14 Security and infrastructure

#### FR-14-01 — HTTPS and secure configuration

- **Explanation:** Deploy with HTTPS, secure environment configuration and appropriate headers.
- **Business purpose:** Protect traffic and reduce configuration exposure.
- **Example:** Public forms and staff sessions use HTTPS.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** BASE; NFR-008.
- **Acceptance criteria:** No production mixed content; secrets excluded from client bundles/logs; header policy verified against integrations; staging isolated; domain/redirect behavior tested.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 1; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-02 — Server-side input validation

- **Explanation:** Validate all untrusted input on the server.
- **Business purpose:** Protect data integrity and application behavior.
- **Example:** A manipulated package ID is rejected.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** BASE; FR-04-01.
- **Acceptance criteria:** Types/lengths/allowed values and ownership checked; structured errors returned safely; unsafe queries/content blocked; client-only validation never substitutes for server checks.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 2; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-03 — Role-based authorization

- **Explanation:** Authorize every protected read and mutation on the server.
- **Business purpose:** Prevent unauthorized data access or changes.
- **Example:** A sales user cannot grant admin rights through an API call.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** AUTH; NFR-005.
- **Acceptance criteria:** Permission matrix enforced across endpoints/actions/files/search; direct requests and guessed IDs denied; negative access tests cover sensitive operations.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 3; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-04 — Secure staff authentication

- **Explanation:** Use secure staff identity/session controls and recovery.
- **Business purpose:** Protect operational accounts.
- **Example:** Admin revokes a departed staff session.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** BASE; FR-09-01; D-009.
- **Acceptance criteria:** Selected provider meets approved session/recovery/revocation needs; cookies/session handling secure; no unsafe custom password handling; failed attempts monitored; MFA decision resolved.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 4; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-05 — Rate limiting and spam protection

- **Explanation:** Control abusive form/API traffic without blocking ordinary users unnecessarily.
- **Business purpose:** Keep lead capture and staff access available.
- **Example:** Repeated spam submissions are throttled.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** FR-14-02; NFR-006.
- **Acceptance criteria:** Server-enforced limits and spam checks applied; accessible fallback exists if challenges used; legitimate retries handled; no fake success that loses genuine inquiries.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 5; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-06 — Database backups

- **Explanation:** Back up essential data and verify restoration.
- **Business purpose:** Recover from mistakes or failures.
- **Example:** Admin restores a test backup into an isolated environment.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** DATA; NFR-004; D-020.
- **Acceptance criteria:** Backup schedule/retention/access and recovery targets approved; restoration demonstrated; backups include relevant database/content and file strategy; secrets/data protected.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 6; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-07 — Error logging and monitoring

- **Explanation:** Monitor errors and important operational failures.
- **Business purpose:** Detect broken lead capture or integrations.
- **Example:** An email-delivery failure produces a useful alert.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** BASE; CONSENT; NFR-008.
- **Acceptance criteria:** Alerts reach responsible maintainers; logs have useful correlation without secrets/excess PII; errors do not expose internals publicly; retention and access defined.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 7; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-08 — Privacy and consent handling

- **Explanation:** Apply privacy notices, data minimization and appropriate consent handling.
- **Business purpose:** Respect user choices and limit data exposure.
- **Example:** Visitor submits an inquiry without marketing opt-in.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** CONSENT; BR-003; D-014.
- **Acceptance criteria:** Privacy acknowledgement separated from optional marketing consent; retention/deletion/contact process defined; analytics/embeds follow selected consent rules; actual providers reflected in notices.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 8; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-09 — Automated deployment and testing

- **Explanation:** Automate relevant checks and controlled deployment.
- **Business purpose:** Reduce regressions and unsafe releases.
- **Example:** A failing type-check prevents deployment.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** BASE; NFR-009.
- **Acceptance criteria:** Lint/type/build and risk-appropriate tests run; secrets isolated; staging/production separated; release and rollback steps documented; checks cover critical lead/auth/payment paths when present.
- **Approval status:** Confirmed concept; detailed acceptance criteria proposed for review.
- **Source:** S2 area 14, row 9; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-10 — Multi-factor authentication for staff

- **Explanation:** Require or support staff MFA according to the approved launch policy.
- **Business purpose:** Reduce account takeover risk.
- **Example:** Admin signs in with a second factor.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P1.
- **Dependencies:** FR-14-04; D-009.
- **Acceptance criteria:** Mandatory versus available policy resolved; enrollment/recovery and revocation tested; privileged access cannot silently bypass chosen policy; provider suitability confirmed.
- **Approval status:** Decision required — S2 P1 mandatory wording conflicts with S1 if-available wording (D-009).
- **Source:** S2 area 14, row 10; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-11 — File upload security

- **Explanation:** Validate, isolate and authorize uploaded files whenever introduced.
- **Business purpose:** Prevent malicious or unintended file access.
- **Example:** An invalid attachment is rejected.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P2 baseline; P1 prerequisite if uploads introduced.
- **Dependencies:** Approved storage; AUTH; D-012.
- **Acceptance criteria:** Size/type/content checks and storage permissions apply; scanning policy is defined; private files cannot execute as public code; downloads enforce authorization; P1 uploads require this control immediately if selected.
- **Approval status:** Required when uploads begin; baseline P2, but P1 if the selected article-image workflow includes uploads (D-012).
- **Source:** S2 area 14, row 11; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-12 — Webhook signature verification

- **Explanation:** Verify webhook authenticity before accepting provider events.
- **Business purpose:** Prevent forged integration actions.
- **Example:** A forged payment callback is rejected.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P2 baseline; accompanies first webhook.
- **Dependencies:** INTEGRATION; NFR-006.
- **Acceptance criteria:** Provider signature/authentication and replay policy verified; invalid events rejected; raw-body handling where required tested; idempotency and secret rotation supported from first webhook release.
- **Approval status:** Required from first webhook introduction; baseline P2, earlier if an approved P1 integration needs it.
- **Source:** S2 area 14, row 12; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-13 — API key management

- **Explanation:** Manage scoped credentials and integration keys securely.
- **Business purpose:** Limit impact of leaked or obsolete access.
- **Example:** Admin rotates an external API credential.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P2 integration management; P1 secret protection.
- **Dependencies:** BASE; AUTH.
- **Acceptance criteria:** Keys stay server-side in approved secret storage; least privilege and rotation/revocation documented; usage auditable; never exposed in public responses or logs.
- **Approval status:** Advanced integration-key management proposed P2; secure server-side credential handling is already required P1.
- **Source:** S2 area 14, row 13; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-14 — Advanced security audit dashboard

- **Explanation:** Aggregate advanced security posture and audit signals.
- **Business purpose:** Support larger-platform oversight.
- **Example:** Admin reviews suspicious access patterns.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P3.
- **Dependencies:** FR-09-13; FR-14-07.
- **Acceptance criteria:** Metrics and alert sources are defined; access tightly restricted; sensitive logs protected; investigation history retained; dashboard does not replace launch security controls.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 14, row 14; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

#### FR-14-15 — Multi-tenant data isolation

- **Explanation:** Enforce data isolation between organizations if multi-tenancy is approved.
- **Business purpose:** Prevent cross-organization disclosure.
- **Example:** Tenant A cannot retrieve tenant B's files or records.
- **User role:** Developer/operator; authorized administrator; all users as protected subjects
- **Phase:** P3.
- **Dependencies:** Approved organization model; NFR-005; D-016.
- **Acceptance criteria:** Isolation covers queries, mutations, files, cache, search, jobs, exports and integrations; negative tests pass; platform support access is controlled/audited; no tenancy assumed at P1.
- **Approval status:** Conditional future candidate; phase and detail proposed for owner approval.
- **Source:** S2 area 14, row 15; S1 baseline/amendment where confirmed. Clarifications and criteria: R; conflicts: Section 14.

## 12. Additional business and quality requirements

The records in this section consolidate cross-cutting obligations from S1/S3/S7 and useful additions from S4–S6. Numeric targets already present in S1 are retained; new implementation and policy details require review.

### BR-001 — Truthful business identity and messaging

- **Explanation:** Present the approved brand and accurate company information, with claims matched to evidence.
- **Purpose:** Build trust without misleading buyers.
- **Example:** “Dhaka, Bangladesh” is used as the supplied city; worldwide offices are not claimed.
- **Role:** Owner, content editor, visitor.
- **Phase:** P1 and ongoing.
- **Dependencies:** Section 2; verified public facts; D-001, D-018.
- **Acceptance criteria:** Name/descriptor/tagline are consistent; public facts are owner-approved; unsupported credentials and results are absent; proposed mission/story wording is reviewed before publication.
- **Status/source:** Confirmed truthfulness principle, proposed consolidated wording; S1 §§1/9/10, S3, S7.

### BR-002 — Catalog and commercial consistency

- **Explanation:** Keep approved services, solution prices, package definitions, availability and quote snapshots consistent.
- **Purpose:** Prevent conflicting offers or misleading commercial commitments.
- **Example:** An old inquiry retains its original price after the public package changes.
- **Role:** Owner, sales, editor, visitor.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-04-01/02/03; D-002, D-004.
- **Acceptance criteria:** 57 unique service identities and five solutions are maintained; source prices remain until approved changes; scope/billing units are defined before publishing offers; browser-submitted prices never override server values.
- **Status/source:** Confirmed concept; S1 §§4–5/12; detailed package scope unresolved.

### BR-003 — Operational contact readiness

- **Explanation:** Maintain approved public contact details and working response channels.
- **Purpose:** Ensure inquiries actually reach ARADUN.
- **Example:** The owner activates hello@aradun.com before launch and tests replies.
- **Role:** Owner, sales, visitor.
- **Phase:** P1 launch gate.
- **Dependencies:** Domain/email setup; FR-11-01; D-018.
- **Acceptance criteria:** hello@aradun.com is configured and tested for sending/receiving before live use; staff notification destination is selected; published phone/social links are checked; additional uncreated addresses are not advertised.
- **Status/source:** Email address explicitly confirmed; setup pending; S7, S1 §13.

### BR-004 — Evidence and placeholder governance

- **Explanation:** Classify proof and prevent fictional material from appearing genuine.
- **Purpose:** Preserve credibility and avoid false claims.
- **Example:** An internal dashboard concept is labeled Concept/Demo instead of client work.
- **Role:** Owner, editor, developer.
- **Phase:** P1 and every release.
- **Dependencies:** FR-01-10/11; approved asset/permission records.
- **Acceptance criteria:** Client/internal/concept labels are accurate; testimonial permissions and measurable claims are reviewed; sample content is centralized and unmistakably labeled in previews; launch check replaces/removes unapproved placeholders; genuine labeled demos may remain public.
- **Status/source:** Confirmed principle; S1, S5, S7 project instructions.

### BR-005 — Delivery capability and service availability

- **Explanation:** Match marketed offers to actual in-house or qualified specialist capability.
- **Purpose:** Avoid accepting work ARADUN cannot responsibly deliver.
- **Example:** A security assessment is specialist-led until suitable delivery resources are confirmed.
- **Role:** Owner, sales, delivery specialists.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-04-03; D-004, D-019.
- **Acceptance criteria:** Each launch offer has approved availability and an accountable delivery approach; cybersecurity authorization is required; unavailable capabilities are not presented as immediate services; broader catalog identity remains intact.
- **Status/source:** Confirmed principle; service-by-service readiness unresolved; S1 §§4/13.

### BR-006 — Commercial and delivery controls

- **Explanation:** Use agreed scope, payment milestones, revision/support terms and acceptance before handoff.
- **Purpose:** Reduce disputes and unpriced scope expansion.
- **Example:** An additional integration becomes a reviewed change request rather than an assumed included revision.
- **Role:** Owner, sales, delivery, client.
- **Phase:** P1 manual operations; P2 system support.
- **Dependencies:** Section 3; approved templates/policies; D-005, D-007, D-018.
- **Acceptance criteria:** Proposals/agreements state deliverables, exclusions, revisions, timing, fees, third-party costs and support; project changes require recorded agreement; payment and acceptance evidence are distinguished; actual legal/tax review precedes use of jurisdiction-specific terms.
- **Status/source:** Confirmed operational direction; policy details unresolved; S1 §11, S4.

### BR-007 — Product and internal-platform separation

- **Explanation:** Treat owned commercial products as separately validated offerings from ARADUN's internal CRM/CMS.
- **Purpose:** Avoid accidental expansion into a SaaS platform before business validation.
- **Example:** Internal contact management does not automatically enable public subscriptions or tenant workspaces.
- **Role:** Owner, product lead, developer.
- **Phase:** P1 planning boundary; P2/P3 only after product approval.
- **Dependencies:** D-015, D-016; EXT-002; AMS-GATE where relevant.
- **Acceptance criteria:** Each product has stated owner, audience, readiness, scope, phase and business model before development; AMS remains a separate domain; no source example is portrayed as an existing product without verification.
- **Status/source:** Owner-stated dual business intent; proposed boundary; S1 §7, S6, S7.

### BR-008 — Planning and implementation governance

- **Explanation:** Approve manageable planning sections and later coding tasks incrementally.
- **Purpose:** Keep the project coherent and maintainable by one developer.
- **Example:** A coding task references approved requirement IDs and passes its acceptance checks before the next task.
- **Role:** Owner, analyst, developer.
- **Phase:** All phases.
- **Dependencies:** Section 1; approval register.
- **Acceptance criteria:** Each task states scope/dependencies/affected modules/behavior/acceptance/security/accessibility/performance/tests/out-of-scope items; existing conventions are inspected; changes/results/assumptions are reported; significant architecture changes require approval; this draft alone authorizes no implementation.
- **Status/source:** Confirmed process; S7 project instructions.

### NFR-001 — Search visibility and indexing

- **Explanation:** Make approved public content discoverable while keeping private and draft data out of search engines.
- **Purpose:** Support sustainable organic discovery without privacy leakage.
- **Example:** A published service is in the sitemap; a draft article and staff dashboard are not.
- **Role:** Developer, editor, owner.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-04-08; CONTENT; FR-10-02.
- **Acceptance criteria:** Appropriate SSR/SSG, metadata, canonical URLs, sitemap and robots are configured; truthful Organization/Service/BreadcrumbList/Article structured data used where appropriate; private routes require authorization and are noindexed; unpublished content excluded; redirects preserve approved changes; production indexing and previews tested; thin placeholder pages not published.
- **Status/source:** Confirmed concept; S1 §10; S6 clarifications.

### NFR-002 — Accessibility and usable interaction states

- **Explanation:** Apply WCAG 2.2 AA-oriented design and implementation to public and protected interfaces.
- **Purpose:** Enable effective use across abilities and devices.
- **Example:** A keyboard user can complete the quote form and understand validation errors.
- **Role:** All users, designer, developer.
- **Phase:** P1 and each introduced feature.
- **Dependencies:** Approved design system; FR-01-01.
- **Acceptance criteria:** Semantic structure, keyboard navigation, focus, labels, contrast, status announcements and reduced-motion behavior are checked; loading/empty/error/success states exist; responsive controls are usable; automated checks are supplemented with manual critical-flow review; no unsupported accessibility certification claim.
- **Status/source:** Confirmed principle; S1 §9, S6; detailed test matrix proposed.

### NFR-003 — Performance and bounded workload

- **Explanation:** Keep public pages and business operations responsive at an agreed operating scale.
- **Purpose:** Support conversion and predictable operation.
- **Example:** A service page uses optimized imagery without a heavy animation delaying the main content.
- **Role:** Visitor, staff, developer.
- **Phase:** P1 and ongoing.
- **Dependencies:** BASE; D-020.
- **Acceptance criteria:** Target p75 field Core Web Vitals of LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 as in S1; pre-launch lab checks are a proxy, not claimed field results; images/fonts/JS/cache strategy reviewed; queries/pagination/uploads bounded; API/search load and response targets approved before capacity signoff.
- **Status/source:** Existing CWV targets confirmed; scale budgets unresolved; S1 §10, S6.

### NFR-004 — Data lifecycle, backups and recovery

- **Explanation:** Define retention, correction, deletion, restoration and operational ownership.
- **Purpose:** Limit unnecessary data and recover from failure.
- **Example:** A restore exercise recovers sample inquiries into an isolated environment.
- **Role:** Owner, authorized administrator.
- **Phase:** P1 and each new data domain.
- **Dependencies:** FR-14-06/08; D-014, D-020.
- **Acceptance criteria:** Retention/deletion rules and backup coverage approved; restore test completed; recovery point/time targets explicitly chosen; audit needs and legitimate retention constraints addressed; stale copies and third-party data considered; no invented uptime/recovery guarantee.
- **Status/source:** Confirmed backup/privacy direction; detailed policy proposed; S1 §§6/12/13.

### NFR-005 — Authorization and data isolation

- **Explanation:** Enforce least privilege across every data-access channel.
- **Purpose:** Prevent unauthorized disclosure or modification.
- **Example:** Changing an invoice ID cannot reveal another client's invoice.
- **Role:** Staff/client/organization users as introduced; developer.
- **Phase:** P1 staff boundaries; P2 client boundaries; P3 tenant boundaries if approved.
- **Dependencies:** FR-14-03; approved permission matrix.
- **Acceptance criteria:** Backend checks cover reads/mutations/search/files/exports/jobs; negative access tests pass; internal notes remain private; offboarding revokes access; future tenant isolation includes caches and integrations; UI hiding alone is insufficient.
- **Status/source:** Confirmed principle; exact roles proposed; S1 §12, S2.

### NFR-006 — Reliable events, retries and duplicate prevention

- **Explanation:** Persist important state before acknowledging success and safely retry dependent actions.
- **Purpose:** Avoid lost leads, duplicated messages, or repeated charges.
- **Example:** An email outage leaves the inquiry saved and its notification pending retry.
- **Role:** Visitor, staff, developer/operator.
- **Phase:** P1 notifications; every later integration when introduced.
- **Dependencies:** DATA; MAIL; monitoring; provider controls as applicable.
- **Acceptance criteria:** Unique IDs/references and idempotency rules are tested; inquiry save/notification scheduling is failure-safe; retry/backoff/dead-letter or equivalent failure handling defined; manual recovery is possible; webhooks and financial actions deduplicated; advanced P3 workflow UI is not a prerequisite for basic reliability.
- **Status/source:** Confirmed principle; implementation choice later; S1 §§6/12, S2 automation clarification.

### NFR-007 — Privacy-conscious analytics and consent

- **Explanation:** Separate service inquiry handling from optional marketing and behavioral tracking.
- **Purpose:** Respect choices and avoid exposing prospect information.
- **Example:** A contact submission succeeds without marketing subscription.
- **Role:** Visitor, owner, developer.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-14-08; selected analytics/booking tools; D-014.
- **Acceptance criteria:** No names/emails/phones/message bodies sent to analytics; URLs/UTMs are handled to avoid PII leakage; required consent behavior is determined for actual jurisdictions/tools; public notices match reality; sensitive forms/private pages are excluded from any later session recording by default.
- **Status/source:** Confirmed PII/consent principle; legal implementation unresolved; S1 §§6/10, S6.

### NFR-008 — Production security and observability

- **Explanation:** Configure safe hosting, secrets, logging, dependency maintenance and availability monitoring.
- **Purpose:** Detect failures and reduce preventable exposure.
- **Example:** A production form error alerts the maintainer without exposing the visitor's message.
- **Role:** Developer/operator, owner.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-14-01/05/07; BASE.
- **Acceptance criteria:** HTTPS and appropriate header policy checked; secrets separated by environment; logs redact sensitive values; errors have correlation; uptime/error alerts route to a responsible person; dependency/security update process and incident response steps documented; WAF/provider tooling only added when justified.
- **Status/source:** Confirmed principles; tools/targets unselected; S1 §12/13, S6.

### NFR-009 — Verification, release and rollback

- **Explanation:** Use risk-appropriate automated and manual checks before releasing changes.
- **Purpose:** Protect critical operations while keeping maintenance practical.
- **Example:** A release with broken inquiry persistence fails its gate.
- **Role:** Developer, owner/reviewer.
- **Phase:** P1 and all releases.
- **Dependencies:** FR-14-09; agreed acceptance criteria.
- **Acceptance criteria:** Lint/type/build pass; critical validation/auth/inquiry/idempotency paths have meaningful tests; key user flows and responsive/accessibility checks pass; future billing/isolation tests accompany those modules; staging and production are separate; rollback/data-change plan exists; release result is documented.
- **Status/source:** Confirmed principle; exact tools/test cases later; S1 §12/13, S6.

### NFR-010 — Maintainable modular monolith

- **Explanation:** Keep one understandable application with explicit domain boundaries and limited dependencies.
- **Purpose:** Make long-term operation feasible for one developer.
- **Example:** Inquiry business logic is reusable from the form handler without living inside a React component.
- **Role:** Developer, owner.
- **Phase:** P1 and ongoing.
- **Dependencies:** Section 9; BR-008.
- **Acceptance criteria:** UI/business/persistence/integration responsibilities separated; runtime validation and clear types/names used; errors handled consistently; unnecessary abstraction/services avoided; architectural decisions and setup documented; the separate Express backend is approved; no microservices or speculative layers.
- **Status/source:** Confirmed constraint; S1 §12, S3, S7.

### NFR-011 — Search and publication visibility

- **Explanation:** Keep public search, sitemap, cached content and page visibility consistent.
- **Purpose:** Prevent draft/private leakage and stale publication states.
- **Example:** Unpublishing an article removes it from public results and invalidates its cached public presentation.
- **Role:** Editor, developer, visitor.
- **Phase:** P1 and broader CMS later.
- **Dependencies:** FR-01-14; FR-04-06/08; NFR-001.
- **Acceptance criteria:** Publication changes update discovery surfaces according to defined invalidation behavior; private content never enters public indexes; invalid/deleted links receive defined responses; title/slug changes preserve approved redirect policy.
- **Status/source:** Proposed explicit acceptance clarification of confirmed search/CMS; S1 amendment, S2, R.

### NFR-012 — Monetary and temporal integrity

- **Explanation:** Use precise amounts, explicit currencies/periods, UTC storage and clear display timezones.
- **Purpose:** Avoid financial errors and scheduling ambiguity.
- **Example:** An invoice total remains exact, and a consultation displays the client's selected timezone.
- **Role:** Sales, finance, clients, developer.
- **Phase:** P1 money/date fields and every later module.
- **Dependencies:** CAT; DATA; FINANCE when introduced.
- **Acceptance criteria:** Money uses integer minor units or appropriate precise decimals; currency/period retained; quoted snapshots immutable; dates stored consistently and displayed clearly; daylight-saving/timezone behavior verified for booking; no floating-point rounding surprises in finance.
- **Status/source:** Confirmed architectural direction plus proposed clarification; S1 §12, S6.

### NFR-013 — AI evaluation and bounded action

- **Explanation:** Introduce AI only with defined tasks, approved data access, evaluations and human oversight.
- **Purpose:** Reduce fabricated claims, unauthorized actions and uncontrolled costs.
- **Example:** An AI proposal remains a staff-reviewed draft before it can reach a client.
- **Role:** Owner, staff, client/visitor where applicable, developer.
- **Phase:** P2 limited assistants; P3 advanced features, all proposed.
- **Dependencies:** CONSENT; AUTH; selected provider and use case.
- **Acceptance criteria:** Data/retention/provider policy approved; source permissions enforced; untrusted content cannot override tool permissions; outputs evaluated on representative cases; unsupported claims/uncertainty handled; cost/rate limits and fallback exist; external commitments and high-impact changes require approved human control.
- **Status/source:** Proposed supporting safeguards for retained AI features; S1 future architecture, S2, R.

### NFR-014 — Accessible error recovery and confirmation

- **Explanation:** Provide actionable failure, empty and success states without exposing internals.
- **Purpose:** Prevent abandonment and duplicate submissions.
- **Example:** A validation error preserves entered quote details and identifies the field to fix.
- **Role:** Visitor, staff, client as introduced.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-02-01/04/05; NFR-002/006.
- **Acceptance criteria:** Field errors are associated with controls; safe entered data retained appropriately; submission state is clear; success only after save; retry safe; missing pages show useful navigation; no stack traces/credentials/private details in responses.
- **Status/source:** Confirmed engineering principle with S6 clarification; S7, R.

### NFR-015 — Integration ownership and reconciliation

- **Explanation:** Define which system owns each record/field before synchronizing platforms.
- **Purpose:** Prevent duplicate contacts and conflicting updates.
- **Example:** An external CRM event maps to an existing ARADUN contact using an approved external ID.
- **Role:** Owner, integration maintainer, staff.
- **Phase:** P2 integrations; P1 if synchronized booking is approved.
- **Dependencies:** INTEGRATION; D-017; NFR-006.
- **Acceptance criteria:** Mapping/direction/identity/conflict/deletion/consent rules documented; test sync handles duplicates, retries and provider outages; disconnect/revoke works; reconciliation failures are visible; no external system bypasses ARADUN access controls.
- **Status/source:** Proposed explicit integration boundary; S1 §7/12, S3, R.

### EXT-001 — Industries content capability

- **Explanation:** Present industry-specific problems and relevant ARADUN capabilities without changing the service catalog.
- **Purpose:** Help prospects recognize relevance and support targeted content.
- **Example:** A real-estate page links relevant CRM, website and automation services.
- **Role:** Visitor, editor, owner.
- **Phase:** Proposed P1 directory/selected substantive content or P2 expansion; owner decision required.
- **Dependencies:** CAT; CONTENT; BR-005; D-006.
- **Acceptance criteria:** Approved industry list retained; no unsupported specialization/client claims; pages provide distinct useful content; service links are valid; thin placeholders not published; navigation/routes decided in Step 2.
- **Status/source:** Owner-proposed addition; phase/publication scope unresolved; S6/S7.

### EXT-002 — Products catalog and readiness

- **Explanation:** Present ARADUN-owned products with accurate lifecycle status and approved detail content.
- **Purpose:** Support the services-and-products business model honestly.
- **Example:** A concept product is explicitly labeled rather than advertised as a released SaaS.
- **Role:** Visitor, owner, editor.
- **Phase:** Proposed P1 structure only if useful truthful content exists; actual products independently phased.
- **Dependencies:** BR-007; D-006, D-015.
- **Acceptance criteria:** Product identity/ownership/status and available actions approved; screenshots reflect actual state or clearly labeled concepts; pricing/integrations/security claims verified; no fake products to fill cards; no implied portal/subscription implementation.
- **Status/source:** Owner intent; proposed website capability; S6/S7.

### EXT-003 — Product demo and information inquiries

- **Explanation:** Capture inquiries tied to an approved product through the existing lead system.
- **Purpose:** Measure product interest and arrange meaningful next steps.
- **Example:** A prospect requests information about a product under development.
- **Role:** Visitor, sales.
- **Phase:** Follows approved product publication; P1/P2 decision required.
- **Dependencies:** EXT-002; FR-02-04/06; NFR-006.
- **Acceptance criteria:** Product and inquiry type retained; form/acknowledgement accurately reflects demo availability; no duplicate CRM module; PII and notification controls reused; successful submission distinguished from completed demo/booking.
- **Status/source:** Proposed addition; S6, R.

### EXT-004 — Related content and featured selections

- **Explanation:** Connect relevant services, solutions, industries, products, articles and work using maintained references.
- **Purpose:** Help visitors progress from learning to proof to action.
- **Example:** An automation article links to an approved service and related demo.
- **Role:** Visitor, editor.
- **Phase:** Proposed P1 simple maintained references; broader CMS editing follows its approved phase.
- **Dependencies:** CONTENT; CAT; FR-04-06; NFR-011.
- **Acceptance criteria:** Links only expose approved published content; unpublished targets disappear gracefully; featured selections are intentional; no duplicate source records; layout decisions deferred.
- **Status/source:** Existing related-content direction strengthened by S6; proposed details.

### EXT-005 — Supplemental analytics and webmaster tools

- **Explanation:** Consider Bing Webmaster Tools and additional CTA/product engagement events beyond core GA4/Search Console.
- **Purpose:** Broaden measurement where useful without overloading launch.
- **Example:** An email-link click is recorded as engagement, not a qualified lead.
- **Role:** Owner, analyst/developer.
- **Phase:** Proposed optional P1 setup/P2 expansion; not a mandatory new platform.
- **Dependencies:** FR-10-01; NFR-007; D-021.
- **Acceptance criteria:** Each event has an explicit meaning and data policy; clicks/submissions/bookings are distinct; no PII; dashboards do not claim bookings from link clicks; session recording remains separately approved and excluded from sensitive forms/private pages by default.
- **Status/source:** Proposed; S6, R.

### EXT-006 — Public trust and product policy extensions

- **Explanation:** Review cookie information, accessibility statement, responsible disclosure and product-specific policies as relevant.
- **Purpose:** Keep trust information aligned with actual operations and products.
- **Example:** A later SaaS has terms matching its subscriptions rather than copying the corporate website terms.
- **Role:** Owner, qualified legal/privacy reviewer, editor.
- **Phase:** P1 actual privacy/cookie needs; P2/P3 product-specific policies as introduced.
- **Dependencies:** FR-14-08; BR-006/007; D-014, D-018.
- **Acceptance criteria:** Policies reflect actual entity/providers/data practices; applicability reviewed; website terms and client agreements distinguished; no copied false compliance claims; final routes belong to Step 2.
- **Status/source:** Confirmed accurate-policy principle; extra documents proposed; S1 §11, S6.

## 13. Phase summaries and launch acceptance

### 13.1 Source-row phase distribution

| Source priority | Source rows | Interpretation |
|---|---:|---|
| P1 | 67 | Mix of confirmed launch concepts and proposed details; inspect each status. |
| P2 | 76 | Proposed future allocation; not blanket approval. |
| P3 | 64 | Proposed future allocation; not blanket approval. |
| Total | 207 | All source rows retained. |

Counts are S2 source-row priorities reproduced for traceability, not a count of separate implementations and not blanket phase approval. Aliases/overlap records share implementations. Live booking, manual payment tracking, mandatory MFA, industries/products and several future placements remain unresolved.

### 13.2 Launch scope summary

The retained launch baseline consists of public marketing/catalog/solutions and all 57 service-detail pages in the Phase 1 planning/build scope; quote/contact/manual consultation capture; MongoDB persistence and references; staff authentication/dashboard; contacts, pipeline, customers and manual follow-up tasks; limited article/SEO/testimonial management; published article/resource/FAQ/search experiences; email confirmations/staff alerts; source capture; GA4/Search Console; security, accessibility, performance, monitoring, backups and manual business operations.

Existing approved public page concepts include Home, Services directory/eight categories/all 57 service details, Solutions directory/five details, Our Work/case-study details, About, Insights/articles, Contact, Get a Quote, Privacy and Terms. The P1 amendment adds FAQ/knowledge-base, search and staff CMS/CRM capabilities; whether a feature needs a separate page is a Step 2 decision. Preserve the existing flat service slug resolver constraint and disjoint category/service slugs until any URL change is approved. Staff dashboard remains protected and outside normal public navigation.

Historical acquisition focus only — not a limit on Phase 1 page planning or implementation. S1's suggested initial service focus: Business Website Development, Website Redesign, Website Maintenance, CRM Setup & Customization, Workflow Automation, Lead Follow-up Automation, Application Deployment, Docker Containerization, basic/technical SEO, and Website UI/UX Design. These priorities do not certify availability or create new unique services outside the 57-service catalog. The owner now directs planning of the complete Phase 1 inventory, including all service pages, staff pages and reusable content-detail templates; see Section 17.

### 13.3 Proposed release gates

| Gate | Required evidence before initial public launch |
|---|---|
| Scope approval | P1 requirements and material unresolved launch decisions approved; no unapproved future modules included. |
| Business readiness | Accurate public identity/contact information; working hello@aradun.com; approved delivery availability; suitable agreement/invoice/payment process. |
| Catalog | All published names/prices/availability match approved source; package scopes and charge disclosures complete; no misleading coming-soon offers. |
| Content integrity | Real proof permitted; demos labeled; unapproved placeholders removed; published pages substantive. |
| Lead flow | Quote/contact/consultation save successfully; references unique; tampered fields rejected; retries safe; confirmation and staff email handling tested. |
| CRM | Contacts/history preserved; pipeline updates audited; manual tasks due/overdue work; Won-to-customer conversion does not duplicate contacts or imply payment. |
| CMS/search | Authorized article draft/publish/unpublish and SEO edits work; testimonials curated; public search excludes private/unpublished data; FAQ authoring method approved. |
| Staff access | Roles and account provisioning/revocation tested; direct unauthorized reads/mutations denied; MFA decision implemented. |
| Quality | Critical flows pass on agreed browsers/devices; accessibility checks pass; performance measured against approved targets; errors recover gracefully. |
| Operations | HTTPS/DNS/environment setup verified; email SPF/DKIM/DMARC configured as appropriate; alerts work; backup restore exercise succeeds; incident/rollback owner known. |
| Discovery/privacy | Production canonical/sitemap/robots and truthful schema checked; no accidental public noindex; private/staging protection works; analytics excludes PII and respects selected consent behavior. |
| Handoff | Setup, secrets locations (not values), maintenance tasks, deployment/rollback and outstanding limitations documented. |

A live booking success gate applies only if booking is approved for launch; otherwise the manual consultation-request path must work and must not imply a confirmed appointment. Product demo checks apply only to published approved products/actions.

### 13.4 Roadmap and effort boundary

Continue the owner's eight-stage process: (1) Master Requirements; (2) Page Inventory/Navigation/Sitemap; (3) Page Sections/Content; (4) UI/UX Design System/Wireframes; (5) Database/System Architecture; (6) Project Structure/Initialization; (7) Development Roadmap/Codex Tasks; (8) Implementation Guide/Security/Testing/Deployment. Review manageable sections with explicit approval. Later implementation remains incremental.

S1's older 160–250-hour estimate (approximately 8–13 weeks at 20 productive hours/week) was for a narrower MVP and excluded comprehensive 57-service content and advanced integrations. It is not validated for the amended P1 CRM/CMS/search scope. Re-estimate after scope approval; do not turn it into a delivery promise.

## 14. Open decisions and conflict register

| ID | Issue and current evidence | Recommendation / decision required |
|---|---|---|
| D-001 | Mission/vision/positioning, supporting theme and founder-origin wording are proposed refinements. | Approve final public wording and substantiate differentiators. Keep brand/descriptor/tagline unchanged. Verify literal Arabic wording before factual publication. |
| D-002 | S3 proposes three price increases; S1 retains original prices. | Decide the price table below; retain originals meanwhile. |
| D-003 | S1/S2 place Calendar booking in P2; S3 recommends P1; owner requests Google Calendar but asks to confirm phases. | Choose manual request, external booking page, or integrated booking; decide P1/P2; verify account capability and CRM linkage. Existing P1 baseline is manual request. |
| D-004 | Service and solution prices are known, but full package scope/units/availability are not. | Approve per-offer deliverables, revisions, limits, timing, exclusions and recurring/setup charges. Clarify monthly-video billing period. Confirm available/specialist-led/coming-soon for each launch offer. |
| D-005 | Support/revision/warranty/refund/cancellation and exact commercial terms incomplete. | Approve policies within actual capacity and legal context; preserve existing payment schedule guidance until changed. |
| D-006 | Industries/Products and optional Careers/Technologies pages proposed, not in approved original navigation. | Decide capability scope and phase now; route/navigation/detail design later. Avoid empty product/industry pages. Careers only with a real recruitment need; technology information can live in relevant content. |
| D-007 | S2 lists P1 manual payment tracking; S1 has manual invoicing without payment portal. | Choose external ledger versus limited staff tracker; either must distinguish expected, invoiced and received money. No gateway/public checkout in P1. |
| D-008 | S2 lists general draft/publish as P2 but explicitly approves article draft/publish in P1. | Resolve by scope: article workflow P1; broader page/service content workflows P2. No new approval needed to retain the explicit article amendment. |
| D-009 | S2 marks staff MFA P1; S1 says if available. | Recommend mandatory production staff MFA; confirm provider/recovery policy. Keep conflict visible until selected. |
| D-010 | P1 source capture versus P2 attribution reports. | Keep inquiry-level UTM/referrer/landing data in P1; decide whether launch needs any aggregate source report beyond source visibility/basic summaries. |
| D-011 | Inquiry/contact/opportunity/customer linking, duplicate merges and conversion corrections incomplete. | Recommend one contact with multiple inquiries/opportunities; staff-reviewed merges and reversible classification changes with history. Approve exact behavior. |
| D-012 | P1 articles need featured images; FAQs/help authoring unspecified; full media library is P2. | Choose controlled asset references versus a minimal upload path. If uploads start P1, file security starts P1 too. Choose FAQ/help authoring permissions/workflow without assuming full CMS. |
| D-013 | Exact roles, data visibility and publishing rights incomplete. | Approve minimal Admin/Sales/Editor permissions and manager need; define staff provisioning/offboarding and assignment visibility. |
| D-014 | Actual jurisdictions, tracking/embeds, retention, consent and deletion processes unknown. | Review actual data practices and applicable obligations; choose cookie/consent implementation and retention rules before launch. No blanket compliance claim. |
| D-015 | S6 describes an initial existing Insurance AMS; current confirmed plan is future AMS. | Confirm actual product inventory/readiness. Keep AMS as future separate module/product until specifically approved; product marketing does not authorize building it. |
| D-016 | S1 groups AMS/advanced systems under P2; S2 and proposed structure place many in P3. | Approve the three-phase matrix requirement by requirement. Multi-organization/SaaS, marketplace, advanced AI and AMS remain conditional. |
| D-017 | GHL/external CRM and other integrations can duplicate ARADUN data. | Select system of record and sync direction per integration; approve vendors/credentials/access before implementation. |
| D-018 | Business entity/legal setup, street address, payment eligibility and mail readiness not fully established. | Record verified facts and actual account readiness. hello@aradun.com is selected but not operational yet. Do not publish uncreated sales/support inboxes or unverified offices. |
| D-019 | Priority countries, industries and delivery resources remain to confirm; the owner has selected full Phase 1 page planning rather than a reduced service subset. | Plan all 57 service detail pages in P1 (23 October amendment). Acquisition priority and verified delivery readiness remain separate decisions; additional S6 industries remain candidates. |
| D-020 | Operating budget, providers, load, recovery targets, uptime ownership and implementation timeline unresolved. | Select cost/scale/recovery expectations before architecture signoff; re-estimate expanded scope. |
| D-021 | Additional analytics events, Bing tools and session/behavior tooling proposed. | Retain core GA4/Search Console; approve optional events/tools separately with explicit meaning/privacy controls. |
| D-022 | S6 proposes six categories, new primary CTA, /work and /legal routes, blue palette, and broad headless CMS. | Preserve eight categories, five solutions, Get a Quote, existing URLs, navy/teal+Inter and approved stack. Review alternatives explicitly in the relevant stage. |
| D-023 | Portfolio/article quantity suggestions conflict and may add launch burden. | Use real readiness and quality to set targets; do not mandate building an AMS or several large demos just to launch. |
| D-024 | S6 omits solution/pricing/CRM details, calls testimonials later and claims Stage 10 complete. | Treat as supplemental reference; omissions do not remove requirements; P1 testimonial amendment wins; no current stage completion inferred. |
| D-025 | S2 places advanced workflow logs/retries P3 although S1 requires reliability earlier. | Basic failure logging/retries/idempotency accompany each feature immediately. Only the advanced workflow console is P3. |

### Proposed price changes — not applied

| Service | Existing Starter | Proposed Starter | Existing Professional | Proposed Professional |
|---|---|---|---|---|
| E-commerce Website Development | $999+ | $1,499+ | $2,499+ | $2,999+ |
| Business Mobile App | $1,999+ | $2,999+ | $4,999+ | $6,999+ |
| E-commerce Mobile App | $2,499+ | $3,999+ | $5,999+ | $8,999+ |

### Decisions that are already settled

- MongoDB/Mongoose supersedes PostgreSQL/Prisma for ARADUN's platform; case-study technology examples do not change the stack.
- The ten-feature P1 amendment supersedes conflicting older deferrals.
- Eight service categories, 57 unique services, five solutions and existing indicative prices remain the baseline.
- hello@aradun.com is the selected primary public contact; operational readiness remains pending.
- No fictional business proof may be published as genuine; labeled planning samples and honest public demos are allowed.
- A separate Express.js + TypeScript backend is required in the same repository; microservices are not approved.
- Generating this draft is authorized; coding and final full-scope approval are not implied.

## 15. Source coverage and approval register

### 15.1 Complete catalog traceability

| Source area | Rows | Requirement range | P1 / P2 / P3 source rows |
|---|---:|---|---|
| S2 area 1: Public website and marketing | 18 | FR-01-01–FR-01-18 | 14 / 0 / 4 |
| S2 area 2: Lead generation and sales | 20 | FR-02-01–FR-02-20 | 13 / 4 / 3 |
| S2 area 3: CRM and customer records | 14 | FR-03-01–FR-03-14 | 5 / 4 / 5 |
| S2 area 4: CMS and catalog management | 15 | FR-04-01–FR-04-15 | 5 / 6 / 4 |
| S2 area 5: Client portal | 14 | FR-05-01–FR-05-14 | 0 / 12 / 2 |
| S2 area 6: Project management and delivery | 15 | FR-06-01–FR-06-15 | 0 / 10 / 5 |
| S2 area 7: Finance, billing and contracts | 14 | FR-07-01–FR-07-14 | 2 / 8 / 4 |
| S2 area 8: Automation | 15 | FR-08-01–FR-08-15 | 3 / 8 / 4 |
| S2 area 9: Staff dashboard and team management | 16 | FR-09-01–FR-09-16 | 9 / 4 / 3 |
| S2 area 10: Analytics and reporting | 13 | FR-10-01–FR-10-13 | 4 / 6 / 3 |
| S2 area 11: External integrations | 14 | FR-11-01–FR-11-14 | 2 / 9 / 3 |
| S2 area 12: AI capabilities | 11 | FR-12-01–FR-12-11 | 0 / 2 / 9 |
| S2 area 13: Future AMS | 13 | FR-13-01–FR-13-13 | 0 / 0 / 13 |
| S2 area 14: Security and infrastructure | 15 | FR-14-01–FR-14-15 | 10 / 3 / 2 |

Every S2 table row has one corresponding FR record with the original feature name, source priority, explanation, purpose, example, role, phase, dependencies and acceptance criteria. Aliases below identify shared behavior; they do not remove rows or create duplicate subsystems.

| Overlapping source entries | Shared capability rule |
|---|---|
| FR-01-09 and FR-02-04 | One contact form/inquiry implementation. |
| FR-02-08 and FR-08-02 | One customer acknowledgement path. |
| FR-02-09 and FR-08-01 | One new-lead staff alert path. |
| FR-02-10/11 and FR-09-06 | One set of status/assignment operations; dashboard supplies the UI. |
| FR-02-12 and FR-09-08 | Shared operational activity history; security audit log remains governed separately. |
| FR-02-15 and FR-08-05/06 | One sequence engine with shared consent and stop rules. |
| FR-02-18 and FR-12-03 | One AI qualification capability. |
| FR-03-12 and FR-12-09 | Shared authorized AI CRM assistance. |
| FR-04-14 and FR-12-07 | One reviewed AI content-drafting workflow. |
| FR-05-08 and FR-06-09 | Shared deliverable/version approval capability, with client and staff views. |
| FR-06-15 and FR-12-10 | Shared project-assistance foundation. |
| FR-09-01 and FR-14-04 | One staff authentication system; functional and security perspectives. |
| FR-11-04 and FR-02-14 | Calendar adapter plus booking user flow; one booking integration. |
| FR-11-06 and FR-07-05 | Payment adapter plus invoice collection flow; one authoritative payment state. |

Dependency references describe prerequisite capabilities, not a finalized build order. Shared client/staff views and security foundations may reference each other because they form one capability; architecture planning will sequence their common core first. No circular runtime or independent duplicate subsystem is required.

### 15.2 Other source coverage

| Source material | Consolidated location |
|---|---|
| S1 identity/contact truthfulness, global English/USD direction | Sections 1–2; BR-001/003/004 |
| S1 57 services/58 memberships, five solutions and prices | Sections 4–5; CAT requirements; D-002/004 |
| S1 quote/lead/email/security baseline and P1 amendment | FR areas 01–04/08–10/14; Section 8; launch gates |
| S1 sales/delivery/payment workflows and policies | Section 3; FR areas 03/06/07; BR-006 |
| S1 architecture, quality, launch strategy/KPIs | Sections 6/9/13; NFR requirements |
| S1 high-level navigation, design, route constraints | Section 9.3 and 13.2; detailed later-stage planning preserved rather than rewritten |
| S2 full original feature inventory | All FR records and table coverage above |
| S3 prices/forms/trust/CTA/tools/booking recommendations | Sections 3/6/9/14; D-002/003/022 |
| S4 legal/communications/finance readiness | Section 3.5; BR-003/006; D-018 |
| S5 portfolio proof and candidate projects | Section 6.2; BR-004; D-023 |
| S6 industries/products/content/confirmation/analytics/legal/quality | EXT requirements; NFR requirements; D-006/015/021/022/024 |
| Owner's current strategic/contact details | Section 2; BR-003/007; source authority S7 |

### 15.3 Historical approval state at v0.1.0

| Item | Status at version 0.1.0 |
|---|---|
| Ten prior high-level business/website tasks | Recorded as approved in S1; preserve their explicit decisions |
| Ten-feature Phase 1 amendment | Explicitly approved in S1/S2 |
| Core stack and modular monolith direction | Confirmed; separate Next.js frontend/Express backend, local MongoDB development; Atlas optional later |
| Public email selection | Explicitly confirmed by owner; activation pending |
| Revised mission/vision, new additions and conflict resolutions | Draft for review; no blanket approval inferred |
| All detailed FR/BR/NFR/EXT acceptance criteria | Proposed for review even where the underlying concept is confirmed |
| Full three-phase mapping | Pending owner approval |
| Complete Step 1 master requirements | At v0.1.0: NOT YET APPROVED; current owner-designated authority and scoped amendment are recorded below and in Section 17 |
| Later page/sitemap/design/schema/code planning | Not approved by this file; proceed only through the agreed checkpoints |

Suggested review order: authority/decisions → business identity and customers → services by category → solutions → commercial and delivery policy → roles and phases → functional areas one at a time → cross-cutting quality → final consistency/approval. Resolve D-002/003/004/006/007/009/011/012/013/014/018/020 where they affect launch before treating P1 as implementation-ready.

For each subsequent section approval, record: date, section/requirement IDs, decision, conditions, unresolved issues and approver. A final baseline should explicitly state which future candidates remain conditional rather than marking every catalog idea as a committed build.


### 15.4 Current approval amendment — 23 October 2026

| Item | Current recorded decision |
|---|---|
| Document authority | Owner designates both source documents as authoritative; draft provenance remains historical. |
| Full Phase 1 coverage | Plan the complete public/private inventory, all 57 services and all detail-page templates. No 38-page scope cap. |
| Phase 2/3 inventory | Include all existing future page allocations, with their proposed/conditional status and cross-phase Product Terms timing retained. |
| Delivery order | Complete Phase 1 planning first; later implementation proceeds through approved manageable tasks. |
| Step 3 progress | Homepage section proposal accepted for now; remaining content groups and the final Step 3 file are not yet approved. |
| Remaining decisions | D-001–D-025 retain their substantive unresolved portions; this amendment does not approve invented scope, providers, policies or phase promotions. |

## 16. Change log

**0.3.0 · 25 October 2026 — Controlled amendment:** Applied only affected portions of the four owner-requested changes and their direct cross-references; all unrelated content retained.


| Version | Date | Change | Approval |
|---|---|---|---|
| 0.1.0 | 2026-10-21 | First consolidated review draft from six supplied files and current owner instructions. Preserved service/solution pricing and P1 amendment; added full feature records, business/quality rules, source mapping and unresolved-decision register; recorded selected but pending primary mailbox. | File creation requested; full requirements approval pending |
| 0.2.0 | 2026-10-23 | Added complete P1/P2/P3 page inventory and counting convention; superseded reduced P1 page scope; reconciled current owner authority with historical draft metadata; preserved all 207 FR records and unresolved decisions. | Owner requested coordinated source-file update; scoped planning amendment only |

## 17. Full phase page inventory and owner amendment

**Owner clarification — 23 October 2026 (Asia/Dhaka):** Plan the entire Phase 1 public website and private dashboard, including all 57 services and every reusable detail-page template. Do not reduce scope to the former first-publication subset. Implementation may be divided into manageable steps. The owner also requests equivalent complete inventories for Phases 2 and 3 and coordinated updates to both source documents. This is a scoped planning decision; existing conditional functionality, commercial facts and implementation approvals remain explicit. Step 3 has begun, and the homepage section proposal is accepted for now; remaining section groups still require review. This update does not create the final Step 3 deliverable.

| Phase allocation | Pages / reusable templates | Shared system states counted here | Total planning items |
|---|---:|---:|---:|
| Phase 1 — full website, staff access and dashboard | 122 | 2 | 124 |
| Phase 2 — additional expansion pages | 62 | 0 | 62 |
| Phase 3 — additional advanced/AMS pages | 28 | 0 | 28 |
| P2/P3 timing unresolved — Product Terms (PRD-02), counted once | 1 | 0 | 1 |
| **All unique inventory entries** | **213** | **2** | **215** |

- Counts mean distinct page designs/route templates. Each record-detail template counts once, including case studies, articles, help articles, leads, customers and projects. Actual content/record instances do not add new planning templates.
- Phase 2 and Phase 3 totals are additional pages, not cumulative totals. Existing pages may gain later features without becoming new pages. Shared 404/error states are counted once in Phase 1 and reused later.
- Phase 1 includes all 57 unique service detail pages. The former 38-page first-publication recommendation is superseded as a planning/build-scope limit; it is not a separate phase or an extra 38 pages.
- Phase 1's 122 pages/templates comprise 91 public entries, 4 staff authentication entries and 27 dashboard entries. The 91 public entries are 85 fixed core/catalog routes, 3 content-detail templates and 3 conditional policy pages.
- Twelve Phase 1 entries retain source status C: TRU-01–TRU-03, STA-002–STA-004, ADM-021–ADM-025 and ADM-027. Include them in planning; settle their named policy/provider/interface decisions during the appropriate review. The 124-item count includes these candidates and does not silently approve every unresolved implementation choice.
- Phase 2 comprises 13 public entries (11 industry pages plus Products and Product Detail), 31 staff expansion pages, 4 client authentication pages and 14 client portal pages. EXP-031 Appointments remains P2 baseline while D-003 is unresolved; the existing public Consultation page remains P1.
- Phase 3 comprises 11 advanced staff pages, 2 client subscription pages and 15 conditional AMS pages. AMS retains its separate product/domain approval requirement.
- Product Terms (PRD-02) is one additional public template whose source phase is P2/P3 according to product release. It is listed separately to avoid inventing a phase or double-counting it.
- A/B/R/C are retained source approval-provenance codes, not a reason to omit a page from planning. A = carried public approval; B = confirmed capability with a later allocated private route; R = future/proposed allocation; C = conditional decision.
- Plan the full Phase 1 scope first and implement it in manageable approved tasks after the required planning stages. This amendment authorizes document updates, not implementation or automatic public publication. User-stated readiness does not justify inventing package facts, evidence or credentials.

### 17.1 Phase 1 — 124 planning items

| Page ID | Page name | URL / route pattern | Source phase / qualification | Status |
|---|---|---|---|---|
| PUB-001 | Home | `/` | P1 | A |
| PUB-002 | Services | `/services` | P1 | A |
| PUB-003 | Solutions | `/solutions` | P1 | A |
| PUB-004 | Pricing & Packages | `/pricing` | P1 | A |
| PUB-005 | About ARADUN | `/about` | P1 | A |
| PUB-006 | Our Work | `/our-work` | P1 | A |
| PUB-007 | Case Study / Project Detail | `/our-work/[slug]` | P1 | A |
| PUB-008 | Insights & Resources | `/insights` | P1 | A |
| PUB-009 | Article / Resource Detail | `/insights/[slug]` | P1 | A |
| PUB-010 | FAQs & Help | `/faq` | P1 | A |
| PUB-011 | Detailed Help Article | `/faq/[slug]` | P1 | A |
| PUB-012 | Contact | `/contact` | P1 | A |
| PUB-013 | Get a Quote | `/get-a-quote` | P1 | A |
| PUB-014 | Consultation | `/consultation` | P1 | A |
| PUB-015 | Inquiry Confirmation | `/thank-you` | P1 | A |
| PUB-016 | Search Results | `/search` | P1 | A |
| PUB-017 | Privacy Policy | `/privacy` | P1 | A |
| PUB-018 | Website Terms | `/terms` | P1 | A |
| CAT-01 | Web & Software Development | `/services/web-software-development` | P1 | A |
| CAT-02 | Mobile App Development | `/services/mobile-app-development` | P1 | A |
| CAT-03 | AI Automation & CRM | `/services/ai-automation-crm` | P1 | A |
| CAT-04 | Digital Marketing | `/services/digital-marketing` | P1 | A |
| CAT-05 | Cloud & DevOps | `/services/cloud-devops` | P1 | A |
| CAT-06 | Cybersecurity | `/services/cybersecurity` | P1 | A |
| CAT-07 | UI/UX, Graphic Design & Branding | `/services/design-branding` | P1 | A |
| CAT-08 | Video Editing & Production | `/services/video-editing-production` | P1 | A |
| PUB-S001 | Business Website Development | `/services/business-website-development` | P1 | A |
| PUB-S002 | E-commerce Website Development | `/services/ecommerce-website-development` | P1 | A |
| PUB-S003 | Custom Web Application | `/services/custom-web-application` | P1 | A |
| PUB-S004 | Website Redesign | `/services/website-redesign` | P1 | A |
| PUB-S005 | Website Maintenance | `/services/website-maintenance` | P1 | A |
| PUB-S006 | Business Mobile App | `/services/business-mobile-app` | P1 | A |
| PUB-S007 | E-commerce Mobile App | `/services/ecommerce-mobile-app` | P1 | A |
| PUB-S008 | Custom Mobile App | `/services/custom-mobile-app` | P1 | A |
| PUB-S009 | Mobile App UI/UX Design | `/services/mobile-app-ui-ux-design` | P1 | A |
| PUB-S010 | Mobile App Maintenance | `/services/mobile-app-maintenance` | P1 | A |
| PUB-S011 | Workflow Automation | `/services/workflow-automation` | P1 | A |
| PUB-S012 | CRM Setup & Customization | `/services/crm-setup-customization` | P1 | A |
| PUB-S013 | Lead Follow-up Automation | `/services/lead-follow-up-automation` | P1 | A |
| PUB-S014 | AI Chatbot | `/services/ai-chatbot` | P1 | A |
| PUB-S015 | AI Integrations | `/services/ai-integrations` | P1 | A |
| PUB-S016 | AI Voice Agent | `/services/ai-voice-agent` | P1 | A |
| PUB-S017 | Automation Maintenance | `/services/automation-maintenance` | P1 | A |
| PUB-S018 | SEO Services | `/services/seo-services` | P1 | A |
| PUB-S019 | Google Ads Management | `/services/google-ads-management` | P1 | A |
| PUB-S020 | Social Media Management | `/services/social-media-management` | P1 | A |
| PUB-S021 | Meta Ads Management | `/services/meta-ads-management` | P1 | A |
| PUB-S022 | Content Marketing | `/services/content-marketing` | P1 | A |
| PUB-S023 | Email Marketing | `/services/email-marketing` | P1 | A |
| PUB-S024 | Local SEO / Google Business Profile | `/services/local-seo-google-business-profile` | P1 | A |
| PUB-S025 | Conversion Rate Optimization & Analytics | `/services/conversion-rate-optimization-analytics` | P1 | A |
| PUB-S026 | Digital Marketing Consulting | `/services/digital-marketing-consulting` | P1 | A |
| PUB-S027 | Cloud Infrastructure Setup | `/services/cloud-infrastructure-setup` | P1 | A |
| PUB-S028 | Application Deployment | `/services/application-deployment` | P1 | A |
| PUB-S029 | CI/CD Pipeline Setup | `/services/ci-cd-pipeline-setup` | P1 | A |
| PUB-S030 | Docker Containerization | `/services/docker-containerization` | P1 | A |
| PUB-S031 | Infrastructure as Code | `/services/infrastructure-as-code` | P1 | A |
| PUB-S032 | Monitoring & Observability | `/services/monitoring-observability` | P1 | A |
| PUB-S033 | Cloud Security & Backup | `/services/cloud-security-backup` | P1 | A |
| PUB-S034 | Managed Cloud Services | `/services/managed-cloud-services` | P1 | A |
| PUB-S035 | Web Application Security Assessment | `/services/web-application-security-assessment` | P1 | A |
| PUB-S036 | Vulnerability Assessment / Penetration Testing | `/services/vulnerability-assessment-penetration-testing` | P1 | A |
| PUB-S037 | Cloud Security Assessment | `/services/cloud-security-assessment` | P1 | A |
| PUB-S038 | Security Hardening | `/services/security-hardening` | P1 | A |
| PUB-S039 | Identity & Access / Email Security | `/services/identity-access-email-security` | P1 | A |
| PUB-S040 | Security Awareness Training | `/services/security-awareness-training` | P1 | A |
| PUB-S041 | Compliance Readiness | `/services/compliance-readiness` | P1 | A |
| PUB-S042 | Managed Security Services | `/services/managed-security-services` | P1 | A |
| PUB-S043 | Website UI/UX Design | `/services/website-ui-ux-design` | P1 | A |
| PUB-S044 | SaaS Dashboard UI/UX | `/services/saas-dashboard-ui-ux` | P1 | A |
| PUB-S045 | Logo & Brand Identity | `/services/logo-brand-identity` | P1 | A |
| PUB-S046 | Graphic Design | `/services/graphic-design` | P1 | A |
| PUB-S047 | Landing Page Design | `/services/landing-page-design` | P1 | A |
| PUB-S048 | UX Audit | `/services/ux-audit` | P1 | A |
| PUB-S049 | Monthly Design Support | `/services/monthly-design-support` | P1 | A |
| PUB-S050 | Short-form Video Editing | `/services/short-form-video-editing` | P1 | A |
| PUB-S051 | YouTube Video Editing | `/services/youtube-video-editing` | P1 | A |
| PUB-S052 | Promotional / Ad Video | `/services/promotional-ad-video` | P1 | A |
| PUB-S053 | Corporate Video Production | `/services/corporate-video-production` | P1 | A |
| PUB-S054 | Motion Graphics | `/services/motion-graphics` | P1 | A |
| PUB-S055 | Podcast Editing | `/services/podcast-editing` | P1 | A |
| PUB-S056 | Captions / Subtitles | `/services/captions-subtitles` | P1 | A |
| PUB-S057 | Monthly Video Editing | `/services/monthly-video-editing` | P1 | A |
| SOL-01 | Digital Presence | `/solutions/digital-presence` | P1 | A |
| SOL-02 | Business Automation | `/solutions/business-automation` | P1 | A |
| SOL-03 | Business Growth | `/solutions/business-growth` | P1 | A |
| SOL-04 | Cloud & Technology | `/solutions/cloud-technology` | P1 | A |
| SOL-05 | Complete Digital Business | `/solutions/complete-digital-business` | P1 | A |
| TRU-01 | Cookie Information | `/cookies` | P1 conditional | C |
| TRU-02 | Accessibility Statement | `/accessibility` | P1 conditional | C |
| TRU-03 | Responsible Disclosure | `/security` | P1 conditional | C |
| SYS-01 | Page Not Found | `Requested nonexistent URL; no dedicated /404 route` | P1 | A |
| SYS-02 | Recoverable Error | `Affected route; no dedicated /error route` | P1 | A |
| STA-001 | Staff Sign In | `/staff/login` | P1 | B |
| STA-002 | Staff Access Recovery | `/staff/recover` | P1 provider/policy conditional | C |
| STA-003 | Staff Recovery Completion | `/staff/reset` | P1 provider/policy conditional | C |
| STA-004 | Staff Verification / MFA | `/staff/verify` | P1 provider/policy conditional | C |
| ADM-001 | Dashboard Overview | `/dashboard` | P1 | B |
| ADM-002 | Leads & Inquiries | `/dashboard/leads` | P1 | B |
| ADM-003 | Lead Detail | `/dashboard/leads/[leadId]` | P1 | B |
| ADM-004 | Contacts | `/dashboard/contacts` | P1 | B |
| ADM-005 | Contact Detail | `/dashboard/contacts/[contactId]` | P1 | B |
| ADM-006 | Sales Pipeline | `/dashboard/opportunities` | P1 | B |
| ADM-007 | Opportunity Detail | `/dashboard/opportunities/[opportunityId]` | P1 | B |
| ADM-008 | Follow-up Tasks | `/dashboard/tasks` | P1 | B |
| ADM-009 | Task Detail | `/dashboard/tasks/[taskId]` | P1 | B |
| ADM-010 | Customers | `/dashboard/customers` | P1 | B |
| ADM-011 | Customer Detail | `/dashboard/customers/[customerId]` | P1 | B |
| ADM-012 | Content Overview | `/dashboard/content` | P1 | B |
| ADM-013 | Articles & Resources | `/dashboard/content/articles` | P1 | B |
| ADM-014 | Create Article | `/dashboard/content/articles/new` | P1 | B |
| ADM-015 | Article Editor | `/dashboard/content/articles/[articleId]` | P1 | B |
| ADM-016 | Article Preview | `/dashboard/content/articles/[articleId]/preview` | P1 | B |
| ADM-017 | Testimonials & Reviews | `/dashboard/content/testimonials` | P1 | B |
| ADM-018 | Testimonial Editor | `/dashboard/content/testimonials/[testimonialId]` | P1 | B |
| ADM-019 | SEO Metadata | `/dashboard/content/seo` | P1 | B |
| ADM-020 | SEO Metadata Editor | `/dashboard/content/seo/[pageId]` | P1 | B |
| ADM-021 | FAQs & Help Management | `/dashboard/content/faqs` | P1 conditional | C |
| ADM-022 | FAQ / Help Editor | `/dashboard/content/faqs/[faqId]` | P1 conditional | C |
| ADM-023 | Staff Access Administration | `/dashboard/settings/access` | P1 conditional | C |
| ADM-024 | Staff Access Detail | `/dashboard/settings/access/[userId]` | P1 conditional | C |
| ADM-025 | Audit Log Viewer | `/dashboard/audit` | P1 conditional | C |
| ADM-026 | My Account & Security | `/dashboard/account` | P1 | B |
| ADM-027 | Manual Payment Tracker | `/dashboard/payments` | P1 conditional | C |

### 17.2 Phase 2 — 62 additional pages/templates

| Page ID | Page name | URL / route pattern | Source phase / qualification | Status |
|---|---|---|---|---|
| IND-00 | Industries | `/industries` | P2 proposed; P1 only by explicit promotion | C |
| IND-01 | Insurance & Financial Services | `/industries/insurance-financial-services` | P2 proposed; P1 only by explicit promotion | C |
| IND-02 | Healthcare & Medical | `/industries/healthcare-medical` | P2 proposed; P1 only by explicit promotion | C |
| IND-03 | Education | `/industries/education` | P2 proposed; P1 only by explicit promotion | C |
| IND-04 | Real Estate | `/industries/real-estate` | P2 proposed; P1 only by explicit promotion | C |
| IND-05 | Construction & Home Services | `/industries/construction-home-services` | P2 proposed; P1 only by explicit promotion | C |
| IND-06 | E-commerce & Retail | `/industries/ecommerce-retail` | P2 proposed; P1 only by explicit promotion | C |
| IND-07 | Marketplaces | `/industries/marketplaces` | P2 proposed; P1 only by explicit promotion | C |
| IND-08 | Restaurants & Hospitality | `/industries/restaurants-hospitality` | P2 proposed; P1 only by explicit promotion | C |
| IND-09 | Professional Services | `/industries/professional-services` | P2 proposed; P1 only by explicit promotion | C |
| IND-10 | Startups & SaaS | `/industries/startups-saas` | P2 proposed; P1 only by explicit promotion | C |
| PRD-00 | Products | `/products` | P2 proposed; P1 only by explicit publication approval | C |
| PRD-01 | Product Detail | `/products/[slug]` | P2 proposed; P1 only by explicit publication approval | C |
| EXP-001 | Companies | `/dashboard/companies` | P2 proposed | R |
| EXP-002 | Company Detail | `/dashboard/companies/[companyId]` | P2 proposed | R |
| EXP-003 | Projects | `/dashboard/projects` | P2 proposed | R |
| EXP-004 | Project Detail | `/dashboard/projects/[projectId]` | P2 proposed | R |
| EXP-005 | Proposals | `/dashboard/proposals` | P2 proposed | R |
| EXP-006 | Proposal Detail / Editor | `/dashboard/proposals/[proposalId]` | P2 proposed | R |
| EXP-007 | Contracts & SOWs | `/dashboard/contracts` | P2 proposed | R |
| EXP-008 | Contract Detail | `/dashboard/contracts/[contractId]` | P2 proposed | R |
| EXP-009 | Invoices | `/dashboard/invoices` | P2 proposed | R |
| EXP-010 | Invoice Detail | `/dashboard/invoices/[invoiceId]` | P2 proposed | R |
| EXP-011 | Billing Profiles | `/dashboard/billing-profiles` | P2 proposed | R |
| EXP-012 | Recurring Billing | `/dashboard/subscriptions` | P2 proposed | R |
| EXP-013 | Subscription Detail | `/dashboard/subscriptions/[subscriptionId]` | P2 proposed | R |
| EXP-014 | Support Tickets | `/dashboard/support` | P2 proposed | R |
| EXP-015 | Support Ticket Detail | `/dashboard/support/[ticketId]` | P2 proposed | R |
| EXP-016 | Service Catalog Editor | `/dashboard/content/services` | P2 proposed | R |
| EXP-017 | Service / Package Editor | `/dashboard/content/services/[serviceId]` | P2 proposed | R |
| EXP-018 | Solution / Package Management | `/dashboard/content/solutions` | P2 proposed | R |
| EXP-019 | Website Page Management | `/dashboard/content/pages` | P2 proposed | R |
| EXP-020 | Website Page Editor | `/dashboard/content/pages/[pageId]` | P2 proposed | R |
| EXP-021 | Media Library | `/dashboard/content/media` | P2 proposed | R |
| EXP-022 | Team Management | `/dashboard/team` | P2 proposed | R |
| EXP-023 | Team Member Detail | `/dashboard/team/[memberId]` | P2 proposed | R |
| EXP-024 | Departments | `/dashboard/departments` | P2 proposed | R |
| EXP-025 | Staff Notifications | `/dashboard/notifications` | P2 proposed | R |
| EXP-026 | Reports | `/dashboard/reports` | P2 proposed | R |
| EXP-027 | Automation Rules | `/dashboard/automations` | P2 proposed | R |
| EXP-028 | Automation Rule Detail | `/dashboard/automations/[automationId]` | P2 proposed | R |
| EXP-029 | Integrations | `/dashboard/integrations` | P2 proposed | R |
| EXP-030 | Integration Detail | `/dashboard/integrations/[integrationKey]` | P2 proposed | R |
| EXP-031 | Appointments | `/dashboard/appointments` | P2 baseline; P1 only if D-003 explicitly resolved | C |
| CLI-A01 | Client Sign In | `/client/login` | P2 conditional | C |
| CLI-A02 | Client Access Recovery | `/client/recover` | P2 conditional | C |
| CLI-A03 | Client Recovery Completion | `/client/reset` | P2 conditional | C |
| CLI-A04 | Client Account Activation | `/client/activate` | P2 conditional | C |
| CLI-001 | Client Overview | `/portal` | P2 proposed | R |
| CLI-002 | My Projects | `/portal/projects` | P2 proposed | R |
| CLI-003 | Project Workspace | `/portal/projects/[projectId]` | P2 proposed | R |
| CLI-004 | My Proposals | `/portal/proposals` | P2 proposed | R |
| CLI-005 | Proposal Review | `/portal/proposals/[proposalId]` | P2 proposed | R |
| CLI-006 | My Contracts | `/portal/contracts` | P2 proposed | R |
| CLI-007 | Contract Review | `/portal/contracts/[contractId]` | P2 proposed | R |
| CLI-008 | My Invoices | `/portal/invoices` | P2 proposed | R |
| CLI-009 | Invoice & Payment Detail | `/portal/invoices/[invoiceId]` | P2 proposed | R |
| CLI-010 | Support | `/portal/support` | P2 proposed | R |
| CLI-011 | New Support Ticket | `/portal/support/new` | P2 proposed | R |
| CLI-012 | Support Ticket Detail | `/portal/support/[ticketId]` | P2 proposed | R |
| CLI-013 | Client Notifications | `/portal/notifications` | P2 proposed | R |
| CLI-014 | Client Account & Billing Details | `/portal/account` | P2 proposed | R |

### 17.3 Phase 3 — 28 additional pages/templates

| Page ID | Page name | URL / route pattern | Source phase / qualification | Status |
|---|---|---|---|---|
| ADV-001 | Advanced Reports & Forecasts | `/dashboard/reports/advanced` | P3 conditional | C |
| ADV-002 | Custom Report Builder | `/dashboard/reports/custom` | P3 conditional | C |
| ADV-003 | Expenses | `/dashboard/expenses` | P3 conditional | C |
| ADV-004 | Capacity Planning | `/dashboard/capacity` | P3 conditional | C |
| ADV-005 | Workflow Execution History | `/dashboard/automations/executions` | P3 conditional | C |
| ADV-006 | Permission Builder | `/dashboard/settings/permissions` | P3 conditional | C |
| ADV-007 | Organizations | `/dashboard/organizations` | P3 conditional | C |
| ADV-008 | Organization Detail | `/dashboard/organizations/[organizationId]` | P3 conditional | C |
| ADV-009 | Security Audit Dashboard | `/dashboard/security` | P3 conditional | C |
| ADV-010 | Developer API Access | `/dashboard/integrations/api-access` | P3 conditional | C |
| ADV-011 | Integration Marketplace | `/dashboard/integrations/marketplace` | P3 conditional | C |
| CLI-015 | My Subscriptions | `/portal/subscriptions` | P3 conditional | C |
| CLI-016 | Subscription Management | `/portal/subscriptions/[subscriptionId]` | P3 conditional | C |
| AMS-001 | Agency Overview | `/ams` | P3 conditional; separate AMS-GATE | C |
| AMS-002 | Agency Customers & Households | `/ams/customers` | P3 conditional; separate AMS-GATE | C |
| AMS-003 | Agency Customer Detail | `/ams/customers/[customerId]` | P3 conditional; separate AMS-GATE | C |
| AMS-004 | Policies & Renewals | `/ams/policies` | P3 conditional; separate AMS-GATE | C |
| AMS-005 | Policy Detail | `/ams/policies/[policyId]` | P3 conditional; separate AMS-GATE | C |
| AMS-006 | Carriers / Companies | `/ams/carriers` | P3 conditional; separate AMS-GATE | C |
| AMS-007 | Quote & Policy Workflows | `/ams/workflows` | P3 conditional; separate AMS-GATE | C |
| AMS-008 | Agency Workflow Detail | `/ams/workflows/[workflowId]` | P3 conditional; separate AMS-GATE | C |
| AMS-009 | Commissions | `/ams/commissions` | P3 conditional; separate AMS-GATE | C |
| AMS-010 | Agency Documents | `/ams/documents` | P3 conditional; separate AMS-GATE | C |
| AMS-011 | Claims & Service Requests | `/ams/service-requests` | P3 conditional; separate AMS-GATE | C |
| AMS-012 | Agency Service Request Detail | `/ams/service-requests/[requestId]` | P3 conditional; separate AMS-GATE | C |
| AMS-013 | Agency Integrations | `/ams/integrations` | P3 conditional; separate AMS-GATE | C |
| AMS-014 | Agency Audit & Compliance Controls | `/ams/audit` | P3 conditional; separate AMS-GATE | C |
| AMS-015 | Agency Reports | `/ams/reports` | P3 conditional; separate AMS-GATE | C |

### 17.4 Cross-phase — one Product Terms template

| Page ID | Page name | URL / route pattern | Source phase / qualification | Status |
|---|---|---|---|---|
| PRD-02 | Product Terms | `/products/[slug]/terms` | P2/P3 follows approved product release | C |

The page IDs, names and routes in this appendix mirror `02-pages-sitemap.md` v1.1.0. That companion document retains navigation, hierarchy, access, primary actions and per-page requirement references. The 207 FR records are feature records, not page counts. This appendix introduces no new routes, services or future-feature implementations.

**End of master requirements.** The file records planning authority and explicit open decisions, not proof that any business account, product, integration or software module has been implemented.

