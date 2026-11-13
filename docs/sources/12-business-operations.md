# ARADUN — Business Operations, Sales & Client Delivery

**Filename:** `12-business-operations.md`  
**Version:** 1.1.0 — complete specification for owner review  
**Date:** 25 October 2026  
**Owner/approver:** ARADUN project owner  
**Identity:** ARADUN — Technology & Digital Solutions · **Build. Automate. Grow.**  
**Approval status:** Preparation authorized by the supplied Step 12 brief. Inherited requirements retain their source qualifications. New operating procedures, templates, stage-entry recommendations, financial controls and review cadences are **R12 recommendations, pending owner approval**. This document does not approve unresolved package terms, paid-discovery fees, legal terms, provider selection, spending or application implementation.  
**Execution status:** Planning and document consistency review only. No application code, company registration, accounts, client messages, transactions, live-system changes or Step 13 work were performed.

**Controlled update 1.1.0 — 25 October 2026:** Owner-authorized documentation-only amendment limited to the requested architecture, local-development database, solo-maintainer engineering rules and three-theme system where relevant. Unrelated requirements and unresolved gates remain unchanged. Earlier source-register versions/fingerprints and historical approval entries identify the pre-update inputs, not hashes of these revised files; current amended sections govern only these four changes. No implementation or Project Sources replacement is claimed.

## Reading guide

Sections 1–4 establish source authority and the operating model; 5–10 cover acquisition, sales and pricing; 11–17 cover agreements, onboarding, delivery and money; 18–21 cover acceptance, support, retention and application mapping; 22–24 provide twenty SOPs, reusable templates and metrics; 25–30 provide controls, phase boundaries, Codex handoff, traceability, decisions and audit. Appendix A preserves the commercial source text, Appendix B provides source fingerprints, and Appendix C records external verification references.

**Status key:** **Inherited** = source baseline with its original qualifications; **R12** = proposed procedure, not a new approved business rule; **Gate** = decision/evidence needed before the dependent activity; **Manual/external** = operational work outside the ARADUN application; **Conditional P1** = only after the named source gate is resolved. SOP-01–20, T-01–20 and O12-01–15 are local document identifiers, not source requirement IDs or new database objects.

## 1. Source verification and decision authority

### 1.1 Available sources and approval provenance

All eleven supplied files were available locally. Review covered their authority statements, commercial catalog, operational rules, relevant page/section contracts, CRM schemas, implementation boundaries, roadmap mappings, content controls, QA cases and operational gates. Large repeated appendices were cross-checked by source identities and relevant records; no unseen historical conversations are asserted as evidence. Source filenames below are logical project names; Appendix B records the actual supplied filenames and hashes.

| Ref | Source | Version | Approval/status and use |
|---|---|---|---|
| S1 | `01-master-requirements.md` | 0.2.0 | Owner-designated planning reference; scoped full-page amendment approved; unresolved details retained. Governs commercial identity, catalog, prices, requirements and phase qualifications. Supplied filename has `(1)` suffix. |
| S2 | `02-pages-sitemap.md` | 1.1.0 | Complete phase inventory and owner full-scope amendment; conditional entries retain their gates. Governs page IDs and URLs. |
| S3 | `03-page-sections.md` | 1.0.0 | Owner-approved Step 3 consolidation; unresolved conditions retained. Governs form fields, page sections, actions and states. |
| S4 | `04-design-system-wireframes.md` | 1.0.0 | Owner-declared approved Step 4; production asset and technical details remain qualified. Governs three themes, accessibility and interaction. |
| S5 | `05-database-architecture.md` | 1.0.0 | Owner-declared approved Step 5; R5 recommendations and architecture gates remain explicit. Governs models and business invariants. |
| S6 | `06-project-structure.md` | 1.0.0 | Owner-declared approved Step 6; source conditions and R6 details retained. Governs structural ownership and routes. |
| S7 | `07-development-roadmap.md` | 1.0.0 | Owner-declared approved Step 7; M00–M14 tasks retain dependencies and decision gates. |
| S8 | `08-implementation-guide.md` | 1.0.0 | Owner-declared Step 8 completed; final consolidation explicitly remains subject to owner approval before application code generation. Governs incremental execution and evidence. |
| S9 | `09-content-assets.md` | 1.0.0 | Owner-declared approved Step 9; editorial drafts, legal facts, asset rights and publication gates are not automatically approved. |
| S10 | `10-testing-qa.md` | 1.0.0 | Owner-declared planning complete; new R10 QA policies remain recommendations. Test specification, not executed results. |
| S11 | `11-deployment-operations.md` | 1.0.0 | Prepared for owner review; R11 infrastructure choices, budgets and numerical policies pending approval. Reviewed as supporting planning only, not an approved provider/SLA policy. |

S1 controls business requirements; each approved topic source controls its topic. Explicit later amendments supersede only their stated scope. This document supplements operations without overwriting source requirements. A page's inclusion in P1 planning does not independently authorize every conditional feature on it.

### 1.2 Preserved business invariants

| Topic | Inherited rule | Operational consequence |
|---|---|---|
| Business | International B2B services plus longer-term SaaS/digital products | Prioritize delivery of services; do not treat the internal CRM as a launched SaaS. |
| Language/currency | English and USD initially | Clear written English; public starting prices remain USD. Alternative invoice currency needs case-specific review. |
| Catalog | Eight categories; 57 unique services; 58 category memberships | SVC-009 Mobile App UI/UX Design is one service cross-listed in two categories, selected/billed once for the same work. |
| Solutions | Digital Presence; Business Automation; Business Growth; Cloud & Technology; Complete Digital Business | These exact supplied names govern; do not substitute historical names from memory. |
| Packages | Starter / Professional pairs for two-price service entries; Starter / Professional / Enterprise solution structure | Recurring three-price service rows retain source order where tier names are not confirmed. No invented tier limits or Enterprise price. |
| Public prices | Existing indicative starting amounts and Custom values in Appendix A | D-002 proposed price increases are not applied. A displayed price is not a binding quotation. |
| Screening | Free initial 15-minute screening | Manual consultation request is the baseline; a requested time is not a booking. |
| Payments | Starter 50%/50%; Professional 40%/30%/30%; Enterprise custom milestones | Apply through reviewed agreement and external invoicing; Won does not prove payment. |
| Retainers | Monthly in advance; generally 30-day cancellation notice subject to signed terms; unused hours do not roll over unless agreed | Do not invent included hours, renewal mechanics or universal cancellation rights. |
| Exclusions | Advertising spend and cloud infrastructure excluded unless explicitly included; relevant hosting, licenses, API usage, subscriptions, taxes and production/travel costs identified separately | Obtain written cost responsibility and spending authority. |
| Pipeline | New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost | Keep exact seven values; inquiry classifications and delivery states are separate. |
| Conversion | Staff-confirmed after Won; customer profile belongs to Contact | No duplicate Customer collection, automatic conversion, paid flag, project or client login. |
| P1 scope | 91 public + 4 staff-auth + 27 dashboard entries = 122 pages/templates, plus two system states = 124 planning items | All source pages retained; no added finance, delivery or support routes. |
| Architecture | Next.js App Router + TypeScript frontend in `aradun/frontend/`; separate Express.js + TypeScript backend in `aradun/backend/`; MongoDB + Mongoose accessed only by Express. One repository, simple feature-based backend modules, no microservices. Local development uses locally installed MongoDB; Atlas is optional later through environment configuration and production database hosting remains unselected. Tailwind + shadcn/ui remain. | Separate Express backend required; no microservices or unapproved workflow engine. |

### 1.3 Missing operational decisions and limits

The supplied sources do **not** contain approved paid-discovery tier names, fees, durations, credit-against-project rules or refund terms. S9 explicitly avoids inventing paid-discovery prices. Preserve the possibility of separately scoped paid discovery; obtain the missing approved terms or approve a new proposal before selling a standardized tier. The current brief's reference to previously approved tiers is not enough to reconstruct them.

Package quantities, revisions, delivery estimates, solution compositions, support coverage, warranty, IP terms and many billing units remain unresolved (D-004/D-005). The title “Monthly Video Editing” does not resolve SVC-057's source billing-period ambiguity. No current entity, incorporation country, ownership split, bank, processor, employee roster or contractual jurisdiction is established. Read §29 before committing externally.

## 2. Business model and offer operations

**R12 operating recommendation:** Use one accountable founder-led sales and delivery process across the full catalog. Privately prioritize the source's near-term service-business needs—websites, lead capture, CRM/workflow automation—while preserving all eight public categories and verifying delivery capability service by service. Marketing breadth does not imply immediate capacity for every service.

| Engagement | Sales and delivery method | Financial record | Boundary |
|---|---|---|---|
| Individual service | Match a canonical service to a documented client need; confirm availability and deliverables | Separate reviewed quote line(s) and SOW | One service can need custom scope; starting price is not a checkout offer. |
| Fixed-scope package | Use only a complete approved package version; check actual fit and dependencies | Versioned quote with tier, fee and milestones | Do not invent missing limits to make the sale. |
| Combined solution | Confirm intended outcome and approved constituent service IDs; remove overlap | Consolidated SOW with one-time/recurring charges separated | No automatic promise of every service suggested by a solution name. |
| Custom combination | Scope each selected service, shared discovery/design and integration boundaries | Reviewed work breakdown and quote | No blind total of public starting amounts. |
| Project engagement | Baseline scope, milestone reviews, QA, client acceptance and controlled handoff | Project fee and agreed staged invoices | Manual/external delivery records in P1. |
| Recurring maintenance/retainer | Separate service period, included work, request process and exclusions | Period invoice and maintenance report | No implicit unlimited work, rollover or 24/7 coverage. |
| Setup plus monthly | Define setup acceptance separately from recurring activation | Distinct setup fee and recurring lines | State when the recurring obligation starts. |
| Future SaaS/product | Validate customer, readiness, economics, support and legal model first | Future approved product-specific records | No P1 subscription engine, tenancy or payment gateway. |

Maintain an **external offer-readiness worksheet** per offer: source ID/version, exact name, availability, accountable delivery role, proposed deliverables/limits, dependencies, exclusions, revisions, acceptance, pricing unit, support, specialist needs, proof, approval and effective date. It is a business worksheet, not a proposed collection. Publish only approved truthful claims; keep missing package facts gated.

## 3. International operations

### 3.1 Client service and communication

Serve startups, SMBs, growing businesses and suitable established organizations. The source identifies potential markets across the USA, Canada, UK, Australia, Europe, Middle East and Bangladesh; no country priority or office presence is approved. Qualify each engagement by problem, purchasing authority, delivery ability, data obligations, communication overlap and lawful collection route.

Use English for proposals, decisions and delivery records. Confirm client language needs before promising translation. State dates unambiguously, such as `24 October 2026`, and use IANA time zones for meetings and tasks. Record the agreed meeting instant and display both parties' local times; verify daylight-saving changes rather than assuming a constant US offset. Working hours, meeting windows and holiday cover remain O12-05. Do not promise continuous availability to serve all markets.

Use a designated business email, a single client decision-maker and an agreed approval channel. `hello@aradun.com` is the selected public address; actual send/receive readiness must be tested before live use. City may be described as Dhaka, Bangladesh; it is not a verified registered-office address. Do not publish uncreated sales/support inboxes.

### 3.2 Commercial and cross-border checks

Before a binding proposal, record the actual supplier legal identity, client legal/billing identity, signatory authority, service delivery locations, currency, applicable tax review, payment eligibility, cross-border fees, data-access locations and dispute/contract review. A foreign client or USD invoice does not establish a US entity or US bank account.

Keep public USD pricing consistent. If a client requests another invoice currency, finance reviews conversion source/date, rate validity, settlement currency, fees and exchange risk; the agreed invoice states the actual currency. This is external finance practice, not implementation of FR-07-12 in P1. Do not mix currencies in a total without a disclosed conversion basis.

Ask qualified local accounting/legal advisers to determine registration, tax registration, invoicing requirements, export-of-services/foreign-currency records, withholding, VAT/GST/sales-tax treatment, contractor obligations and record retention for the actual facts. No tax rate, exemption, treaty outcome or incorporation recommendation is established here.

### 3.3 Remote work and data boundaries

R12: keep each engagement in a restricted external workspace with agreement/version, requirements, delivery evidence and financial references. Invite named users with minimum permissions; prefer client-owned production accounts and delegated access. Separate preview/test data from live customer data. Share review links securely and remove access at closure or role change.

Map whose personal data is accessed, for what purpose, where it is hosted, and which separate organizations/contractors can see it. Cross-border remote access can matter even without a bulk download. UK ICO guidance explains that making personal data accessible to a separate overseas organization may engage transfer rules when its applicability conditions are met; counsel must assess the actual roles and safeguards [E3, E4]. No blanket GDPR, HIPAA or other compliance claim follows from this plan.

## 4. Founder-led responsibilities and capacity

These are **responsibilities**, not assertions that employees or contractors currently exist. One founder may initially hold sales, client communication, project coordination, development and finance administration where competent. Specialist security testing, unfamiliar cloud work, regulated-data advice, accounting and legal review need qualified capability before being sold or performed.

| Responsibility | Accountable | Initial responsible role | Specialist/contractor trigger and check |
|---|---|---|---|
| Business direction, offer readiness, commitments | Founder | Founder | Founder approves capacity, commercial exceptions and truthful claims. |
| Lead qualification and sales | Founder | Sales role, initially founder if assigned | Delegate after scripts, confidentiality and record visibility are approved. |
| Client communication and approvals | Founder | Named engagement contact/PM | One accountable contact; specialist joins scoped discussions. |
| Project management | Founder | PM role, initially founder | Add coordination help when concurrent commitments exceed measured capacity. |
| UI/UX, graphics and branding | Founder | Qualified design role | Use specialist where portfolio, accessibility or production skill is insufficient. |
| Software and mobile development | Founder | Qualified developer | Confirm mobile delivery technology and capability within the agreed scope; no additional framework commitment inferred. |
| QA | Founder | Delivery reviewer; independent reviewer for high-risk work where available | Solo work needs recorded self-review and client UAT; never claim independent audit without one. |
| Digital marketing | Founder | Qualified marketing role | Verify platform access, campaign skill, permitted claims and client budget. |
| Cloud/DevOps | Founder | Qualified infrastructure role | Production migrations and recovery need proven competence and authorization. |
| Cybersecurity | Founder | Authorized qualified security specialist | Written target/scope authorization and rules of engagement required. |
| Content/video production | Founder | Qualified creator/editor | Check licenses, releases, source material and deliverable formats. |
| Finance/invoicing | Founder | Finance administrator, initially founder | Accountant determines tax/accounting treatment; founder approves discounts/refunds. |
| Support and incidents | Founder | Named maintainer within agreed coverage | Escalate specialist needs; no assumed 24/7 staffing. |

**R12 capacity control:** Before quoting, list delivery effort, coordination, QA, support obligations, planned leave and current work. Estimate usable capacity rather than treating all working hours as billable. A start date is confirmed only after capacity and required client inputs are checked. If overloaded, offer a later start, reduce scope through agreement, use an approved qualified specialist or decline. Do not invent a fixed team size or utilization target.

**R12 routine:** Each working day review new/unassigned leads, due follow-ups, delivery blockers, critical support and payments requiring action. Weekly review pipeline, commitments and work in progress. Monthly review finances, recurring clients, offer profitability and permissions. These are internal proposed cadences, not customer response guarantees. Identify a backup operator only with their actual consent and access authorization.

## 5. Complete customer journey and exact state mapping

### 5.1 Separate state systems

| State system | Exact values/source treatment | Meaning |
|---|---|---|
| Sales Opportunity.stage | New / Qualified / Discovery / Proposal Sent / Negotiation / Won / Lost | Commercial engagement progress, S1 §3.3 and S5 §7.3. |
| Inquiry.handlingStatus | received / in-review / closed | R5 specification under D-011; inquiry handling, not a replacement pipeline. |
| Inquiry.classifications | spam / duplicate / no-response | Secondary classifications; preserve reason/history and reviewed duplicate link. |
| Consultation state | requested / pending-confirmation / confirmed / cancelled | Manual appointment arrangement; only staff-confirmed actual arrangements become confirmed. |
| Customer profile | absent, or active / reversed when present | Explicit reviewed conversion/correction on canonical Contact. |
| Delivery business states | Pending Agreement → Pending Deposit → Ready → In Progress → Client Review → Completed → Closed | External delivery register in P1; not Opportunity.stage or a new project model. |
| Payment business states | Draft → Issued → Partially Paid → Paid / Overdue / Cancelled | External invoice evidence; overdue meaning preserved, not invented accounting automation. |
| Follow-up task | open / completed / cancelled; overdue derived | Staff-created CRM follow-up, not a full delivery task system or automatic reminder sequence. |

The broad journey is Visitor → Lead → Qualified Lead → Consultation → Discovery → Quote/Proposal → Negotiation → Won/Lost → Customer → Onboarding → Delivery → Acceptance → Maintenance/Support → Retention. A meeting or paid discovery is not mandatory for every simple quote. Record why a step is unnecessary; do not invent extra pipeline stages. Allowed skipped/backward/reopened transitions remain governed by D-011 and the approved S5 transition policy.

### 5.2 Stage operating contracts — R12

Each row gives the stage purpose, trigger, owner, inputs, action/communication, records, exit and next step. Documents remain external unless §21 states otherwise. A next action is a **manually created** task where the approved CRM target exists.

| Journey stage; purpose and trigger | Owner; required inputs | Action and communication | CRM update and document evidence | Completion / next step |
|---|---|---|---|---|
| Visitor; help buyer understand fit; arrival on public content | Founder/content; approved offers and proof | Explain scope, starting prices and Quote/Contact/Consultation options | No private prospect record until permitted intake; published source/CMS content | Buyer submits voluntarily → Lead, or leaves |
| Lead; establish accountable response; saved inquiry or direct inbound | Sales; submitted identity, need, source | Review legitimacy, assign owner, acknowledge accurately | Inquiry and original snapshots for website intake; external intake note for other channels until supported capture; T-01 | Relevant request has owner and next action → Qualification |
| Qualified Lead; establish realistic fit; review/contact reply | Sales; goals, authority, timing, capability and budget context | Apply §6 checklist; ask only missing questions | Reviewed Contact link; Opportunity New/Qualified when justified; Activity; qualification form | Fit and next action agreed → Consultation, Discovery or quote; otherwise close/classify or Lost if opportunity exists |
| Consultation; choose useful next step; request accepted | Sales/PM; topic, participant, confirmed time/zone | Conduct free 15-minute screening; recap decisions | Consultation inquiry state if that is the inquiry type; otherwise Activity; T-02 | Agreed clarification/discovery/quote next step; request is not automatically booked |
| Discovery; reduce uncertainty; scope cannot be estimated responsibly | PM/specialist; approved brief, access boundaries; separate agreement/payment if paid | Map needs, risks, dependencies and acceptance; deliver agreed discovery output | Opportunity Discovery; Activity and manual follow-up; T-03 and external discovery SOW | Output reviewed; estimate feasible → Proposal; otherwise further agreed research or Lost |
| Quote/Proposal; define an offer; sufficient scope evidence | Sales/founder; estimated work, package basis and readiness | Review commercial terms, issue controlled version | Opportunity Proposal Sent only after actual issue; external T-04/T-05/T-06 and Activity | Client acknowledges/reviews → Negotiation or explicit decision |
| Negotiation; settle changes; client questions or counterproposal | Founder/sales; client feedback and current version | Assess scope/fee/date impacts; reissue with version control | Negotiation; Activity; revised proposal/change record | Signed/agreed terms → Won; explicit decline → Lost; waiting gets a follow-up task |
| Won/Lost; record decision; evidence received | Founder/sales; agreement/decline evidence | R12 Won criterion: written agreed engagement and authorized acceptance; confirm next obligations | Explicit Won or Lost; Lost reason; external acceptance/decline; payment separately recorded | Won → staff conversion; Lost → respectful closure and permitted later follow-up |
| Customer; recognize relationship; Won and reviewed identity | Authorized staff; canonical Contact and Won opportunity | Confirm conversion once; check duplicate/shared identity | Embedded customerProfile; Activity/AuditEvent; no invoice/project/account auto-created | Existing customer retained or new profile confirmed → Onboarding |
| Onboarding; make work ready; agreed engagement | PM/finance; signed scope, payment evidence, client contacts, inputs | Welcome, access invitations, input checklist and kickoff scheduling | Customer/contact Activity and manual follow-up; external onboarding/finance records | Agreement, required initial payment and critical dependencies satisfied → Ready/Kickoff |
| Delivery; produce scoped outcome; ready/kickoff gate | PM/delivery; baseline scope, milestones, acceptance | Execute tasks externally; review work and report progress | Opportunity normally remains Won; external delivery state In Progress/Client Review; significant CRM notes only | Internal QA complete → client review/Acceptance |
| Acceptance; verify agreed results; review package delivered | Client authorized approver, PM accountable for process | Test agreed criteria, classify defects/revisions, obtain written sign-off | External acceptance form and evidence; customer Activity; no automatic Paid state | Accepted output → final payment/handoff; unresolved failures → correction/review |
| Maintenance/Support; preserve agreed service; signed recurring scope or eligible warranty request | Maintainer/PM; coverage, assets, issue and period | Triage, authorize changes, maintain, report, renew | External service register/report; contact tasks/notes as useful; no ticket suite | Issue closed or period reviewed → Retention/renewal; uncovered work → quote |
| Retention; improve relationship; milestone/period completion | Account owner/founder; feedback and genuine results | Review satisfaction, request permission for proof, discuss relevant needs | Manual task/Activity; new opportunity for a distinct engagement; external permission record | Renew, refer, create qualified new work, or close without forced marketing |

A separately sold paid-discovery engagement may be its own genuine opportunity, with distinct inquiry context and explicit Won/conversion when purchased. The implementation opportunity can remain Discovery. This is an R12 commercial modeling recommendation for D-011 review, not permission to split one inquiry into conflicting primary opportunities or mark a full implementation won just because discovery was paid.

## 6. Lead acquisition, intake and qualification

### 6.1 Channel procedures

| Channel | Intake procedure | Source/consent and record boundary |
|---|---|---|
| Website quote | Preserve Service → Project → Contact → Review; server validates selected IDs and price context | Inquiry.type=quote, immutable offer/identity/source/consent snapshots; no browser price authority |
| Contact form | Capture name, email, subject and message; route support/partnership messages appropriately | Inquiry.type=contact; not every contact message is a sales opportunity |
| Consultation form | Capture name, email, topic, preferred time and IANA timezone | Inquiry.type=consultation; manual request pending confirmation; no live booking assumption |
| Direct email | Save minimal need, received date, sender and source in a restricted external intake register; request missing facts | No automatic mailbox sync or invented staff-create Inquiry route. Use an approved existing capture path only when its contract supports this source truthfully. |
| Social inquiry | Reply through an agreed business channel after actual authorization; move sensitive discussion to a suitable private channel | Record platform and lawful contact context; no scraping, false form consent or automatic integration |
| Referral | Confirm prospect wishes to engage; record referrer only when necessary/appropriate | Do not assume a referrer's introduction is marketing consent from the prospect |
| Outbound | Founder approves target relevance, message and applicable communication requirements before outreach | Manual external prospect/suppression record; no automated campaigns or lead scoring in P1 |

For offline-origin inquiries, S5 defines three inquiry types and no unrestricted import/staff-intake path. Until a verified supported path is approved, maintain external intake evidence and use permissible existing Contact actions without inventing a source Inquiry. An Opportunity requires a valid primaryInquiryId under S5. If necessary, ask the prospect to submit the ordinary form with truthful context; do not impersonate them or fabricate consent. O12-08 records the needed capture decision. No external communication is sent by preparing this document.

### 6.2 Qualification checklist — T-01

- [ ] Identify the problem, desired outcome and why it matters now.
- [ ] Confirm contact details and the person's role; identify the authorized decision-maker and procurement process.
- [ ] Match relevant service/solution IDs; check current available/specialist-led/coming-soon readiness.
- [ ] Ask what exists, what must change, and what must remain compatible.
- [ ] Discuss budget range if volunteered or useful; public form budget remains optional.
- [ ] Identify target date, actual reason, dependencies and delivery feasibility.
- [ ] Check data sensitivity, access rights, platform ownership and necessary specialist/legal review.
- [ ] Confirm client input owner, feedback availability, language, time zone and approval channel.
- [ ] Check whether lawful contracting and collection routes are practical.
- [ ] Record fit, missing facts, risks, owner and agreed next action; no automated numerical score.

R12 outcomes: **proceed**, **clarification needed**, **defer**, **decline**, recorded as notes/worksheet outcomes rather than new CRM stage enum values. If an actual opportunity is declined, select Lost with a reason. Spam and duplicate classifications apply to inquiries; no-response is not automatic disqualification. Do not label a valid personal email as low-quality solely because it is not a company domain.

Review duplicates by identity/context, not just equal email. A new project from an existing customer is legitimate new work. Staff links an existing Contact or creates a reviewed one, preserving submitted snapshots. Admin reviews merges and conflicting profiles under D-011. Keep an owner and one meaningful next action with dueAt/timezone. Follow-up cadence and maximum attempts remain O12-05; respect a decline or communication opt-out and do not silently enroll anyone into marketing.

## 7. Free screening and paid discovery

### 7.1 Fifteen-minute screening — inherited duration, R12 agenda

Before the call, read the inquiry, confirm time zone and participants, check service availability, and prepare the few questions that decide fit. Do not request production passwords or a large unpaid specification as preparation.

| Minutes | Purpose | Suggested question/script |
|---|---|---|
| 0–2 | Set expectations | “We have 15 minutes to understand your needs and agree on a useful next step. Detailed discovery or specialist analysis would be scoped separately.” |
| 2–6 | Understand need | “What problem are you trying to solve, and what would a successful outcome look like?” |
| 6–10 | Identify constraints | “What systems are involved, who approves the work, and are there important dates, access limits or budget expectations?” |
| 10–13 | Check fit | Explain relevant service options and any unknowns; avoid committing to a final fee or deadline without scope. |
| 13–15 | Agree next step | “Based on this discussion, the next step is [clarification / scoped discovery / quotation]. We will document [inputs, owner, next action].” |

Record date, attendees, problem, constraints, evidence, unknowns and next action in a concise Activity and external notes where needed. Send a recap only through the agreed channel when operationally authorized. Record a no-show/cancellation fact and arrange a new request if wanted; no invented fee or automatic Lost transition.

### 7.2 Discovery decision and delivery

Recommend paid discovery when integrations, data migration, unfamiliar systems, multi-stakeholder requirements, security exposure or unclear acceptance prevent a responsible fixed quote. A clear small engagement may proceed directly to a quote. Screening is not a free audit, architecture design or full consulting engagement.

**Gate:** Approved paid-discovery tiers/prices are unavailable in S1–S11. Do not publish or sell invented standardized tiers, promise that fees are credited later, or assume discovery is refundable/nonrefundable. Request the missing approved schedule or obtain approval for a bespoke discovery SOW and fee. No amount is set by this document.

R12 discovery sequence: define questions and output → agree effort/scope/price/ownership and payment terms → confirm required payment → collect least-privilege authorized inputs → interview/map/assess → document options, risks, dependencies and acceptance criteria → review output with the client → obtain discovery acceptance → separately decide whether to propose implementation. Discovery can conclude that implementation is unsuitable; it does not guarantee a later sale.

Use T-03. Typical **proposed** outputs are an approved problem brief, current/future process map, scope boundary, integration/data map, risk register and estimate assumptions. Select only outputs actually purchased. Technical/security investigations require separate authorization appropriate to the action.

## 8. Service catalog delivery operations

Appendix A retains all 57 names and every source price. The category procedures below cover every service through its canonical membership. They are **R12 delivery checklists**, not approved package inclusions, revision counts, guaranteed outcomes or automatic entitlement to every listed output.

### 8.1 Web & Software Development — SVC-001–005

Typical model: scoped project for business/e-commerce websites, redesign and custom applications; separate maintenance agreement for SVC-005. Discovery checks business flows, existing assets/content, integrations, user roles, data migration, search visibility and hosting ownership. Define screens/templates, functional behavior, content responsibilities and measurable acceptance in the SOW. Review requirements → design → working staging flow → QA/UAT → authorized release. Client provides licensed assets, decisions, content and appropriate access. Handoff includes agreed source/repository access, deployment instructions, environment-variable names without secret values, backup responsibilities, known issues and training. Distinguish defects from new features and later content changes. Risks: missing content, hidden integration work, migration loss, unsupported performance/SEO promises and unpriced third-party costs. ARADUN's internal stack does not automatically dictate every client's technology choice.

### 8.2 Mobile App Development — SVC-006–010

Typical model: project for business/e-commerce/custom apps and design; recurring maintenance separately. Confirm the mobile delivery technology in the engagement scope; this operational checklist adds no framework commitment or package inclusion. Discovery checks platforms, backend dependencies, authentication, device capabilities, offline behavior, store ownership and review requirements. Scope supported platforms/devices, screens, API boundaries, release assets and acceptance scenarios. Client supplies developer/store accounts and permitted access, brand/content, required policies and product decisions. Review UX → prototype/build → representative device QA → client UAT → authorized submission. Store acceptance is external and cannot be guaranteed. Handoff includes repository/build/release instructions and ownership of signing credentials through secure access. OS/API/store changes and additional devices are governed by maintenance scope. SVC-009 reused approved design is not billed twice for identical work.

### 8.3 AI Automation & CRM — SVC-011–017

Typical model: scoped workflow/CRM/lead follow-up/chatbot/integration/voice-agent implementation, potentially setup plus agreed ongoing maintenance. Discover source-of-truth systems, trigger/action boundaries, consent, access, failures, human escalation and usage costs. Scope supported workflows, fields, integrations, approved knowledge, action permissions and fallback behavior. Client provides authorized API accounts, business rules, data rights and acceptance examples. Checkpoints: process approval → sandbox proof → safe failure/human handoff tests → restricted pilot → approved activation. Handoff includes workflow map, credentials ownership, recovery/disable instructions, usage monitoring and known limitations. No claim of perfect AI output, automatic legal compliance or unlimited API/voice usage. Voice recording/outreach requirements need jurisdiction review. Selling these services to clients does not promote ARADUN's deferred internal automation features into P1.

### 8.4 Digital Marketing — SVC-018–026

Typical model: scoped audit/consulting/content/CRO project or agreed recurring SEO, advertising and social management. Discover objectives, baseline, audiences, claims restrictions, tracking permissions, budget and account ownership. Define channels, actual output units, approval process, reporting meaning and management scope; do not promise rankings, ROAS, leads or revenue. Client supplies verified account permissions, product facts, creative rights, approved budget and timely reviews. Review strategy → creatives/content/tracking → client approval → authorized publish/spend → report and adjustment. Ad spend remains separate; Google Ads setup is also separate in the source. Use client-owned ad/business accounts and delegated access. Handoff includes campaigns/configuration, approved assets and reporting context; never imply control over platform suspensions or policy review. Privacy/consent and outbound/email obligations require review before activation.

### 8.5 Cloud & DevOps — SVC-027–034

Typical model: scoped setup/deployment/CI/CD/container/IaC/monitoring/security-backup project or managed cloud retainer. Discover workloads, ownership, access, current spend, environments, data location, recovery needs and change windows. Define resources, deployment boundaries, recovery evidence and cost approvals; no default uptime/RPO/RTO commitment. Client approves account access, costs, downtime and operational ownership. Review design/cost estimate → isolated implementation → deployment/restore rehearsal → explicit production change approval. Handoff includes configuration/IaC where purchased, runbooks, asset inventory, monitoring and backup responsibilities. Cloud bills are excluded unless the agreement states otherwise. Risks: destructive changes, surprise spend, unknown production dependencies and untested recovery. S11 is an ARADUN platform plan; it is not automatically a customer's infrastructure SLA.

### 8.6 Cybersecurity — SVC-035–042

Typical model: specifically authorized assessment, hardening, identity/email work, training, readiness advisory or defined managed security scope. Verify qualified capability and owner authorization before quoting intrusive work. Discovery establishes legal asset owner, targets, permitted techniques, exclusions, test windows, data handling, emergency contact and stop conditions. Written rules of engagement govern testing; do not test third-party systems merely because a client uses them. Review scope/authorization → safe evidence collection → prioritized findings → agreed remediation/retest → secure report/handoff. Client approves access and business disruption limits. Reports distinguish observed findings, untested areas and residual risk. Compliance readiness is not certification; managed security is not an implied 24/7 SOC. Stop and escalate unexpected exposure or instability. Sensitive findings remain restricted and are not published as marketing proof without permission.

### 8.7 UI/UX, Graphic Design & Branding — SVC-043–049 plus SVC-009

Typical model: bounded design/audit/brand project or defined monthly design support. Discover audience, brand rights, user flows, accessibility, content, technical constraints and intended media. Scope actual screens, variants, file formats, research depth, licensed assets and revision rounds before quoting. Client supplies content, brand permissions and an authorized approver. Review brief → direction → detailed designs → consolidated feedback → production-ready agreed files. Handoff includes source files/components/style guidance only as contracted, plus license restrictions. Distinguish revision within the agreed brief from a new direction or extra screens. SVC-009 has one canonical identity across Mobile and Design; reuse accepted designs and quote only genuinely additional work. Final logo/vector decisions must follow S4; this document creates no new visual identity.

### 8.8 Video Editing & Production — SVC-050–057

Typical model: per scoped edit/production or defined recurring work after billing-period approval. Discover footage/audio quality, audience, story, platform/aspect ratio, runtime, language, rights, captions and whether filming is actually included. Define input/output units, editing complexity, revisions, source-project delivery and licenses. Client provides lawful footage, releases, music/voice rights and final content approval. Review brief/script → rough cut → consolidated feedback → final quality/caption/audio checks → approved exports. Production travel, shoots, talent and paid assets require explicit cost treatment. Handoff includes agreed export formats and project assets, with licensing constraints. No assumption that stock music, AI voices or production costs are free. SVC-057 billing unit remains gated; recurring tier quantities and turnaround are not invented.

## 9. Packages, solutions and quotation rules

For Starter, Professional and Enterprise engagements, validate actual scope before promising delivery. Starter and Professional source values are starting prices; Enterprise is Custom where stated. A service with two source price positions does not gain an invented third price. Three-price recurring rows retain their exact source order until tier-label approval.

Use the five exact solutions and values in Appendix A. **Digital Presence, Business Automation, Business Growth, Cloud & Technology and Complete Digital Business have no fully approved constituent package scope in these sources.** A solution quote therefore needs an explicit client-specific scope or a newly approved reusable package definition; the name alone creates no inclusions.

R12 quotation procedure:

1. Record inquiry and proposed canonical service/solution/tier IDs and catalog version.
2. Check availability, delivery owner, missing requirements and any need for discovery.
3. Define deliverables, quantities, acceptance criteria, revisions, client inputs, exclusions and dependency-based schedule.
4. Separate one-time, setup, recurring and third-party amounts. Keep uncertain amounts conditional rather than guessing.
5. Check shared work: SVC-009 once; common discovery/design/integrations deduplicated. Explain legitimate incremental work.
6. Estimate effort/cost and review capacity/profitability under §10. Starting prices do not justify accepting loss-making unscoped work.
7. Founder reviews discounts, changed scope and all exceptions. A discount changes a specific quote, not the public catalog.
8. Issue a versioned quote/proposal and define its validity date explicitly; no default validity duration is approved here.
9. Record actual issue in Activity and move to Proposal Sent only when sent. Arrange a manual follow-up.
10. Obtain written agreement to the final version before delivery commitment. Later changes use SOP-12.

Add-ons must name incremental work and price treatment. Maintenance must be separately scoped even when offered alongside a project. Reusing approved assets reduces duplicated work but does not imply a source-approved discount percentage.

## 10. Internal pricing and profitability — R12

Public source prices remain unchanged. Internal estimation evaluates whether a particular scope is viable; it is not a published rate card or a final margin target.

| Model | Estimation and approval rule | Evidence |
|---|---|---|
| Fixed price | Decompose deliverables, implementation, management, QA, revisions and handoff; assess uncertainty before commitment | Work breakdown, assumptions, risk allowance, capacity and founder review |
| Milestone project | Assign each payment to an observable contract milestone; amounts reconcile to total | SOW schedule and invoice/payment ledger |
| Retainer/maintenance | Define period, included work and capacity; evaluate predictable cost and escalation needs | Scope/coverage record, period report and monthly invoice |
| Hourly/time and materials | Use only when separately agreed; approve rate, measurement, reporting, cap and overrun permission | Signed commercial terms and reviewed timesheet; no rate invented here |
| Custom/Enterprise | Use discovery and staged commitment where uncertainty is material | Scope/options, financial review and approved milestones |

Suggested internal formulas, using one reporting currency and a documented conversion basis:

- Estimated direct delivery cost = estimated labor effort × internal cost rate + contractor cost + delivery-specific purchased resources + explicit risk allowance.
- Planned contribution = net service fee − direct delivery cost. Contribution margin = planned contribution ÷ net service fee × 100, only when fee is positive.
- If an owner-approved target margin `m` is used, indicative required fee = direct delivery cost ÷ (1 − m), with `0 ≤ m < 1`. Review overhead, tax, risk and market fit separately; this formula does not set a public price.
- Actual project contribution uses actual effort/cost and the agreed accounting basis. Founder time must not be treated as costless simply because it is not paid as a contractor invoice.

Keep gross-margin, contribution and net-profit definitions distinct. Ask the accountant which costs and recognition basis belong in formal financial reporting. Record estimates, approved fee, actual costs and variance externally; no P1 profit engine is implied.

Discount record: original fee, adjusted fee, reason, remaining scope, margin/capacity impact, approver and validity. No unapproved minimum price, discount ceiling, refund percentage, late fee or interest is set. Refund decisions check agreement, undelivered scope, payment state and applicable advice; founder approval and a traceable credit/refund record are required. Do not disguise a refund as a deleted invoice.

## 11. Proposal and quotation process

Use T-04 short quotation for genuinely simple bounded work; T-05 detailed proposal and T-06 SOW for material complexity. A marketing proposal describes the approach; the final agreement identifies the binding scope and precedence. Neither a website inquiry nor a server offer snapshot is a signed contract.

**Preparation:** Gather the current need and authorized decision-maker; reference qualification/discovery evidence; choose only supported catalog identities; resolve assumptions and exclusions; estimate timeline against capacity/client inputs; confirm staged payments, third-party responsibility and exact acceptance. Record proposed revisions, support and validity as pending until agreed.

**Review:** Founder verifies commercial consistency and authority to deliver. Relevant delivery specialist checks feasibility. Counsel reviews legal clauses for actual jurisdictions. Finance/accountant reviews tax/invoice requirements. For a solo founder, keep separate checklist passes; do not falsely label them independent review.

**Issue/control:** Give each external document an identifier and version, date, preparer, approver, client and related inquiry/opportunity reference. Preserve the issued file and acceptance evidence; mark superseded versions clearly. Record what was actually sent and when. Signer identity/authority and accepted version must be clear. Do not create an in-app e-signature or proposal-generation module in P1.

**Follow-up:** Ask whether scope is clear, who must review it and what decision is needed. Record questions, changes and a mutually appropriate next action. Do not presume silence is acceptance, auto-close no-response leads or promise an unapproved deadline. Use T-07 and SOP-06.

## 12. Contracts and legal operations

This section is a **review checklist**, not a universal legal agreement or a claim of enforceability. Counsel must settle the applicable law, actual parties and clauses before use. Website Terms are distinct from a client services contract. Legal review is a business dependency, not a request to build contract software.

| Document/topic | Required operational decision/evidence | Gate/owner |
|---|---|---|
| MSA | Correct parties, agreement hierarchy, general obligations, fees, confidentiality, liability, termination and disputes | Founder + qualified counsel; no entity/jurisdiction assumed |
| SOW | Deliverables/limits, exclusions, inputs, milestones, fee schedule, acceptance and support | Founder/delivery/client; T-06 is a drafting structure |
| NDA | Purpose, information scope, permitted recipients, exclusions, duration, return/deletion | Counsel decides whether needed before sensitive discovery |
| IP ownership | Client-specific deliverables, pre-existing tools, third-party/open-source assets, license scope, ownership/assignment timing and source-file delivery | Counsel + delivery; no blanket transfer of everything or automatic transfer-on-payment claim |
| Data protection/DPA | Controller/processor roles, documented instructions, categories, security, subprocessors, assistance, incidents, retention/deletion and transfers | Actual data-flow assessment; E3/E4 provide UK-specific review references, not universal applicability |
| Payment terms | Currency, milestones, due dates, fees/tax, receipt verification, disputed amounts and consequences of nonpayment | Counsel/accountant + founder; preserve source staged-payment guidance |
| Changes | Request, impact, approval authority, revised scope/date/fee and version | Written change order; no implicit free expansion |
| Termination/cancellation | Grounds, notice, payment for performed work, access/data handoff and surviving obligations | No invented universal notice, fee or refund terms; retain source retainer qualification |
| Liability/warranty | Appropriate limits/exclusions, covered defects, remedy and period | No numerical cap or warranty period approved in sources |
| Support | Coverage window, channels, included work, incident process, exclusions, renewal and cancellation | D-005/O12-05/10; no 24/7 or response SLA implied |
| Disputes | Named escalation contact, review process, governing law/forum or agreed process | Qualified advice; no guaranteed international enforceability |
| Subcontractors | Client consent if required, competence, confidentiality, IP, data access, deliverables and exit | Founder; authorization before access/work |
| Client-provided assets | Client authority to use content, trademarks, footage, data and credentials; restrictions and missing permissions | Client evidence + founder review; do not publish unlicensed material |

R12 document handling: use restricted storage, version and signer evidence, least-privilege access, a contract obligations checklist and an approved retention schedule. Link a protected reference in a permitted CRM note where useful; do not paste full confidential agreements, passwords or bank login details into notes. Record legal uncertainty as a blocker for the affected engagement, not as proof that the rest of the service catalog is unavailable.

## 13. Client onboarding

Customer conversion follows Won but does not start work automatically. R12 delivery readiness requires the final written agreement, the required verified initial payment, available capacity and critical client inputs. If the founder considers an exception, document the commercial risk and obtain the appropriate approval; do not silently change policy.

### Onboarding checklist — SOP-09 / T-09

- [ ] Confirm canonical Contact, Won opportunity and explicit customer conversion; preserve original inquiry history.
- [ ] Verify client legal/billing name, signatory, delivery approver and backup decision contact as needed; store only necessary information.
- [ ] Confirm executed agreement/SOW version, actual scope, milestones, exclusions and dependencies.
- [ ] Match required initial payment to verified bank/provider evidence and invoice; a screenshot or promise is not settlement evidence.
- [ ] Send a reviewed welcome message with agreed next steps, channels and input checklist.
- [ ] Collect requirements/content/assets, rights, brand decisions and relevant existing system inventory.
- [ ] Request named delegated access through a secure channel; use client-owned accounts where appropriate.
- [ ] Use a secure secrets-sharing method if delegation is impossible; restrict and rotate/revoke access appropriately. Never ordinary email/CRM password storage.
- [ ] Confirm production versus test environment boundaries, sensitive data restrictions, backups and permitted change actions.
- [ ] Agree kickoff, time zones, communication rhythm, feedback consolidation and escalation contact without inventing response guarantees.
- [ ] Baseline acceptance criteria, revision/change rules, handoff and support obligations.
- [ ] Record unresolved inputs with owner/due date; schedule only work that can proceed safely.

External engagement file holds the detailed onboarding checklist and access inventory; CRM holds a concise factual activity and necessary manual follow-up. No project workspace, client login, support ticket or onboarding automation is introduced in P1.

## 14. Project management and service delivery

### 14.1 Lightweight delivery control — R12

Use a restricted external task board or documented work list, a milestone schedule, a decision/change register and a client review record. These are operational tool categories, not selected vendors or new ARADUN modules. Choose one authoritative place for each record; do not keep competing editable versions in email, CRM and the delivery board.

1. **Kickoff:** Confirm the accepted SOW, outcome, approver, responsibilities, working arrangements, dependencies, access boundaries and next milestone. Resolve contradictions before starting affected work.
2. **Baseline:** Break deliverables into small tasks with an owner, dependency, completion evidence and acceptance criterion. Identify critical paths and client inputs. A task is not complete merely because time was spent.
3. **Execute:** Work in bounded increments. Keep production changes separately authorized. Review high-risk work before release; avoid using live customer data for convenience.
4. **Monitor:** Compare actual progress/effort against the baseline. Record blockers, scope pressure and remaining capacity. Notify the client early when a committed milestone is at risk, with options and consequences.
5. **Review:** Perform internal QA before presenting work. Ask the nominated client approver for consolidated feedback against the agreed criteria.
6. **Control change:** Classify feedback as defect, included revision, clarification or new scope. Assess impact before accepting additional work; retain written approval of any changed fee/date/scope.
7. **Deliver:** Provide the exact review version, evidence, known limitations and acceptance instructions. Do not deploy or spend merely because a draft was approved visually.
8. **Close:** Record acceptance, final payment, handoff, access cleanup, outstanding responsibilities and optional maintenance separately.

### 14.2 Delivery-state entry and exit recommendations

| External state | Entry evidence | Exit evidence |
|---|---|---|
| Pending Agreement | Prospect intends to proceed; proposed final scope exists | Authorized acceptance of the final agreement/SOW |
| Pending Deposit | Agreement recorded; required initial invoice issued | Verified required initial payment; any exception formally approved |
| Ready | Agreement/payment prerequisites and critical inputs satisfied; capacity allocated | Kickoff completed and work authorized |
| In Progress | Agreed work begins | Internally reviewed deliverables ready for client assessment |
| Client Review | Specific version and acceptance instructions delivered | Defects/revisions resolved or explicitly accepted within permitted terms |
| Completed | Deliverables accepted; completion evidence recorded | Final money/handoff/closure obligations resolved or documented for later action |
| Closed | Closure checklist and records complete | Reopen only by documented exception or create a distinct new engagement |

These operational criteria are R12; the inherited state names are unchanged. Client delays do not automatically change contractual deadlines or excuse delivery. Record the missing input and impact, then agree a revised plan under signed terms. Do not invent a “Paused” application enum; describe a pause and its authorization in the external register.

## 15. Client communication standards

**R12:** Use a descriptive subject containing the project/reference and purpose, plain English, a clear decision or next action, and dates with time zones when relevant. Address the actual decision-maker without disclosing other clients' information. Check recipients, attachments, permissions and document version before sending. Record material decisions in writing after calls. No communication template in this file authorizes sending it.

| Situation | Required content and action | Evidence/ownership |
|---|---|---|
| Scheduling | Purpose, duration, proposed time in both zones, participants, joining details and confirmation status | Sales/PM records agreed time; a proposal remains pending until confirmed |
| Progress update | Completed outputs, current work, next milestone, blockers, client decisions, scope/cost/date changes | PM; T-11, cadence agreed per engagement |
| Delayed deliverable | What changed, observed cause, affected commitment, mitigation, options and proposed revised date | PM alerts founder/client; date changes require agreement where applicable |
| Feedback request | Exact version, criteria, approver and agreed feedback date; request one consolidated response | PM; record unresolved disagreements, not just positive feedback |
| Scope change | Requested difference, included/not included assessment, impact, options and approval needed | Founder/PM; T-12 and signed change record |
| Incident/escalation | Known impact, affected service, containment, action owner and next agreed update; uncertainty explicit | Maintainer/founder; do not speculate or disclose sensitive findings broadly |
| Dispute | Restate facts and contract references neutrally; separate undisputed work/money; propose a review | Founder; counsel when needed; preserve evidence without retaliatory system changes |
| Closure | Accepted deliverables, handoff links, residual obligations, support boundary and next contact method | PM; T-20; do not label unsettled invoices as paid |

Working hours, response targets, holiday coverage and escalation contacts must be approved and written into the applicable agreement. A proposed weekly status report is not a 24-hour response SLA. If a client requests a guarantee beyond current capacity, price and resource it explicitly or decline that term.

Suggested delay wording: “The [milestone] is affected by [verified issue]. We have completed [facts]. The remaining dependency is [item/owner]. We propose [option/date], with [scope/cost impact]. Please confirm the agreed next step.”

Suggested dispute wording: “Our understanding of the agreed scope is [document/version/section]. Your concern is [neutral summary]. We propose reviewing [evidence] and agreeing [remedy/options]. We will record the outcome and any revised commitments in writing.”

## 16. Payment collection and invoicing

### 16.1 Inherited payment structure

| Engagement | Source planning guidance | Operational checkpoint |
|---|---|---|
| Starter project | 50% deposit; 50% before final handoff | Agreement defines deposit obligation; verify final receipt before contracted final handoff, subject to signed terms |
| Professional project | 40% / 30% / 30% at agreed milestones | Name each triggering deliverable/event and due date in the SOW; do not guess the middle milestone |
| Enterprise | Custom milestones | Agree amounts, conditions and dates individually |
| Retainer | Monthly in advance; generally 30-day cancellation notice subject to signed terms; unused hours do not roll over unless agreed | Confirm period, included work, actual notice terms and renewal authorization |

Advertising budgets and cloud infrastructure costs are excluded unless expressly included. Hosting, licenses, API use, subscriptions, travel/production expenses and applicable taxes must be identified as relevant. No universal tax inclusion/exclusion, surcharge or late-payment penalty is invented.

### 16.2 Collection approaches — evaluation, not provider approval

| Approach | Potential fit | Required verification and trade-off |
|---|---|---|
| Business bank transfer | Individually invoiced international or local services | Actual eligible receiving account, beneficiary identity, accepted currencies, payment references, fees, settlement and required remittance documents; reconciliation may be manual |
| Approved provider-hosted invoice/payment link | Convenient offsite collection after scope agreement | Merchant-country/entity/service eligibility, business verification, settlement account, limits, fees, refunds and disputes; no ARADUN checkout integration required |
| Eligible business receiving-account/payment service | Cross-border invoices where the provider supports the business and transaction | Receiving versus withdrawing versus paying capabilities, permitted service use, actual account approval and required documentation |
| Client procurement or marketplace process | Client has an established purchasing/escrow route | Verify supplier eligibility, contract relationship, fees, release conditions, disputes and record access; do not evade platform terms |

Stripe's official availability page ties use to supported business countries/regions; it does not verify ARADUN's eligibility [E1]. PayPal publishes country coverage, which alone does not establish the particular receiving/withdrawal feature or an approved merchant account [E2]. Do not select either from the client's location alone. This document makes no Bangladesh account-eligibility claim, fee quotation or assertion that an account exists. Obtain current provider/bank confirmation against the actual supplier identity before sending payment instructions.

**R12 recommendation:** Start with one verified lawful offsite collection method and an external invoice/receivables register. Add a second method only when justified. Do not create a foreign entity merely to assume provider access, use another person's account as a workaround, or misrepresent ownership/location. No Phase 1 payment gateway or automatic recurring charging is authorized.

### 16.3 Invoice-to-receipt procedure

1. Check agreement, milestone achievement, billing contact, supplier details, currency and accounting/tax instructions.
2. Create a uniquely identified invoice with issue/due dates, line items, service period/milestone, subtotal, approved adjustments, applicable tax treatment, total and verified payment instructions. T-08 is a structure, not a jurisdiction-valid tax invoice.
3. Preserve the issued version and record issue date. A draft invoice is not an account receivable already collected.
4. Track payment evidence from the actual bank/provider. Distinguish initiated, pending, settled, failed, disputed and refunded events externally; these evidence descriptions do not add Opportunity.stage values.
5. Match amount/currency/reference to the invoice. Record partial receipts and balance. Separate gross client payment, processing fees and net bank settlement so fees are not automatically mistaken for client underpayment.
6. Issue an accurate payment acknowledgement/receipt using verified amounts. Do not issue a Paid confirmation based on a client screenshot alone.
7. For short/late/failed payment, verify facts, contact the client using T-10, record an agreed remedy and update the external ledger. Any pause, late fee or termination must follow reviewed signed terms; do not disable client production systems without authority.
8. For refunds, preserve approval, original payment, amount, currency, reason, credit/refund evidence and reconciliation. Refund to a verified appropriate destination; verify changed bank instructions through an independent trusted channel.

The P1 optional tracker, if D-007 is selected, records **expected / invoiced / received** as separate record kinds. It does not compute accounting revenue, create invoices, collect payments or settle tax. Finance checks multiple receipts, void/replacement corrections and evidence references under S5 §7.15. External ledger owns balances and accounting treatment.

## 17. Accounting and financial administration

**R12 external record set:** invoice register, receipts/bank reconciliation, expenses and contractor bills, refunds/credits, recurring-service schedule, project contribution worksheet, and adviser-approved tax/filing calendar. A spreadsheet or suitable accounting service may support these; no vendor or application module is selected here.

| Record | Minimum information | Control |
|---|---|---|
| Invoice/receivable | Number, supplier/client, agreement, currency, issue/due dates, lines, gross amount, adjustments, verified receipts, outstanding balance | Preserve issued version and audit trail; reconcile rather than overwrite |
| Receipt | Payment/settlement dates, provider/bank reference, invoice allocation, gross amount, fees, net settlement, currency and evidence | Prevent duplicate recording; investigate unidentified or excess funds |
| Expense | Date, payee, purpose/project, amount/currency, approval, bill/receipt and payment status | Separate client pass-through and ARADUN overhead; no unsupported tax deduction claim |
| Contractor cost | Approved scope, supplier identity, deliverable acceptance, invoice, payment and access/exit evidence | Review rights/confidentiality and local classification/tax obligations |
| Recurring service | Client, agreed period, scope, fee/currency, invoice schedule, cancellation terms and current status | Calendar reminders are manual; no implied auto-renewal or card authority |
| Refund/credit | Original transaction/invoice, approved reason, amount/currency, document and settlement evidence | Do not delete historic revenue/receipts to conceal the event |
| Tax/retention | Adviser-confirmed obligations, filing dates, record categories, retention basis and responsible person | No invented rate, deadline or universal retention duration |

Monthly proposed review: reconcile all bank/provider receipts, match invoices and expenses, investigate balances/fees/refunds, review overdue accounts, separate cash collected from invoiced work and recognized revenue, review actual versus estimated project cost, check recurring obligations and confirm upcoming adviser-defined filings. Record missing evidence and an owner for each discrepancy.

Supplier identity, reporting currency, cash/accrual basis, revenue recognition, tax treatment, cross-border withholding and retention periods require a qualified accountant's review. Keep financial access restricted and records recoverable under the selected backup policy. Do not keep card details, banking passwords or identity documents in general CRM notes.

## 18. Quality assurance and client acceptance

### 18.1 Internal verification versus client acceptance

Internal QA checks that a deliverable meets its specification. Client acceptance confirms that the authorized client reviewed the agreed deliverables against contractual business criteria. Neither proves payment. A deployment, download link, successful test suite or lack of reply is not automatically acceptance.

For ARADUN's platform, apply S10's cases and evidence rules exactly, retaining its R10 qualification. For client work, select relevant technical/content/design checks and agree the actual acceptance scope; do not automatically sell every ARADUN platform requirement to every client.

R12 review sequence: freeze the candidate version → check agreed scope/criteria → test important happy/error/permission states → inspect security/accessibility/performance where applicable → review content/rights → record failures → fix/retest → prepare client review package → gather consolidated feedback → classify requests → obtain written sign-off → reconcile final payment → hand off under agreed terms.

| Finding | Handling |
|---|---|
| Defect | Reproducible failure against agreed criteria; log expected/actual behavior, impact and version; correct and retest under agreement |
| Included revision | Change within the accepted brief and agreed revision entitlement; record round/scope and approval |
| New requirement | Changed goal, extra output/integration/channel or expanded criteria; estimate and approve a change order |
| Unclear expectation | Compare proposal/SOW evidence with the client's interpretation; resolve in writing before classifying |
| Third-party limitation | Document dependency, observed impact, available options and contract responsibility; no unsupported guarantee of provider action |

### 18.2 Defect severity and acceptance evidence

S10 defines S0 critical for private exposure, secrets, corruption/loss or uncontrolled effects; S1 major for broken intake/auth/publication/conversion, false commercial commitment, critical accessibility or failed recovery; S2 moderate for bounded issues with usable workarounds; S3 minor for cosmetic/wording issues without material meaning or accessibility impact. S0/S1 block the ARADUN platform release. Lower-severity exceptions need owner, impact, workaround, date and recorded acceptance; never hide missing approved functionality as polish.

Use these as a proposed client-work severity vocabulary only when agreed. Do not treat severity as an unapproved resolution-time SLA. Each QA result records actual version/environment, steps, expected/actual result, redacted evidence, reviewer, outcome and outstanding issue. “Not run” and “Blocked” are not Passed.

Client acceptance record: SOW/version, deliverable/version, criteria and evidence, accepted items, rejected items with reason, approved exceptions, approver identity/date, follow-up responsibilities and any agreed condition. No automatic deemed acceptance is established. Warranty period and covered defects remain D-005; maintenance/new features are distinct.

Handoff checklist covers delivered files/source, account ownership, access transfer, operational instructions, dependency/license inventory, backup/recovery ownership, known issues, training and agreed support. Transfer secrets securely and revoke temporary access. Record completion without deleting required commercial evidence.

## 19. Maintenance and support operations

### 19.1 Coverage by service

All fees and source tier positions remain in Appendix A. These are proposed operating tasks to select into an agreement, not automatic package inclusions.

| Service area | Define before activation | Period evidence and common exclusions |
|---|---|---|
| Website maintenance, SVC-005 | Covered sites/stack, update/backup responsibilities, permitted content changes, access and release method | Changes/checks/results and open risks; redesign, new pages/features and paid licenses only if included |
| Mobile/application maintenance, SVC-010 or separately agreed application scope | Covered releases/platforms, bug/change scope, store/backend responsibility | Versions, fixes and compatibility checks; major redevelopment/new platforms not assumed |
| CRM/automation maintenance, SVC-017 where scope fits | Named workflows/systems, integration ownership, usage monitoring, failure recovery and human escalation | Incidents, retries/fixes and usage observations; new workflows/provider charges not assumed |
| Managed cloud, SVC-034 | Assets/environments, monitoring, backup/restore duties, change approval and coverage | Health/cost/recovery evidence; infrastructure bills and unagreed migrations excluded |
| Managed security, SVC-042 | Authorized assets, qualified operator, monitoring/assessment scope and escalation | Findings/actions/residual risks; no implied SOC, certification or guaranteed protection |
| Marketing retainers, SVC-018–021 and other expressly agreed recurring offers | Channels, output units, approvals, budget, measurement and reporting | Delivered work and observed performance; ad spend and guaranteed results excluded |
| Design/video retainers, SVC-049/SVC-057 | Approved billing period, capacity/output units, revisions, assets and queue rules | Output register and approvals; no invented unlimited requests or carry-over |

### 19.2 Request and incident handling

R12 manual process: receive through an agreed monitored channel → verify requester/service → record time, impact, affected asset and safe reproduction details → check coverage/authorization → classify defect/change/incident/question → assign qualified owner → agree action and relevant update arrangements → make controlled change → verify with requester → record closure/evidence. Use an external support register; CRM may hold a minimal Activity and manual follow-up. No P1 ticket system is assumed.

For suspected security incidents, follow the applicable incident plan: contain within authority, preserve protected evidence, restrict access, assess affected data, involve the responsible client/provider/specialist, and obtain legal guidance on any notification obligations and deadlines. Do not promise a universal notification interval or restore guarantee. S11's proposed RPO/RTO, alert thresholds and schedules are not client SLAs.

For work outside coverage, state the boundary and offer a reviewed quote; do not silently bill or refuse a real contractual obligation. Report maintenance activity using T-15: period, work performed, verification, incidents, remaining risks, usage/cost observations and next decisions. Renewal/cancellation uses the signed terms and source qualifications. Before exit, agree account/data transfer, outstanding obligations, access revocation and retention; never hold unrelated client data or credentials as leverage.

## 20. Customer retention and account growth

R12: after an accepted milestone/project and at agreed recurring reviews, ask whether the original goal was achieved, what remains difficult and whether communication/delivery met expectations. Record feedback honestly, including criticism. Close corrective actions before treating every conversation as an upsell.

For testimonials, ask permission for the exact quotation, name/title/company attribution and publication locations. For case studies, confirm scope of allowed screenshots, client name/logo, metrics, confidential exclusions and review rights. Retain evidence privately; publish only truthful approved material through the S9 workflow. A review request must not pressure the client to provide only positive feedback. Portfolio categories remain Client Work, ARADUN Internal Product and Concept/Demo.

Discuss maintenance when the client needs ongoing ownership and support, not as an unstated compulsory fee. Identify relevant cross-sells from observed needs—for example, an agreed website engagement may reveal a separate lead-handling problem—but qualify and quote that work separately. New engagements use new inquiry context and opportunities while retaining the canonical Contact/customer identity.

Referrals are optional and permission-based. Review dormant customers only under approved communication/retention practices; no automatic reactivation campaign or customer-health score is added. Use manual tasks for agreed renewal discussions and satisfaction follow-up. Cancellation is an operational event to handle professionally, not a reason to erase history or fabricate a positive testimonial.

## 21. CRM and dashboard operational mapping

### 21.1 Record authority and interfaces

S5 defines twelve baseline collections: Inquiry, Contact, Opportunity, FollowUpTask, Activity, Article, Testimonial, SeoOverride, StaffUser, AuditEvent, OutboxEvent and RateLimitBucket. StaffSession, FaqEntry, ManualPaymentRecord and BookingRecord are separately conditional. No business procedure in this file creates an additional collection. Catalog, core pages, portfolio and baseline FAQ/help remain validated source records; article/testimonial/SEO interfaces do not imply a general CMS page builder.

The application is planned, not verified as implemented or live. “P1 supported” below means approved/planned capability with source gates, not a claim that the current dashboard already works. All staff reads, mutations, list counts and linked records require the approved server-side role/record policy. Activity is a business timeline; AuditEvent is restricted accountability evidence, not a place to store complete sensitive documents.

| Business action / responsible role | Required data and CRM record | Pipeline and manual follow-up | Exact interface / module | Notification, audit and execution |
|---|---|---|---|---|
| Receive website inquiry / system then Sales | Typed required fields, identity/consent/attribution snapshots; Inquiry and outbox | No automatic opportunity stage; Sales creates next task after review | PUB-012 `/contact`; PUB-013 `/get-a-quote`; PUB-014 `/consultation`; ADM-002 `/dashboard/leads`, ADM-003 `/dashboard/leads/[leadId]`; Intake/CRM | Durable commit precedes receipt/acknowledgement and staff alert; minimal audit; automatic transactional mail only |
| Assign and classify / authorized Sales/Admin | Inquiry handlingStatus, classifications, assignedTo; Activity | Inquiry handling is separate; manual task for next action | ADM-002/003; Intake/CRM | Audit ownership/classification; assignment email only if separately selected, not presumed |
| Qualify/link identity / Sales | Submitted identity reviewed against Contact candidates; preserve snapshot | Create valid Opportunity when justified; manual clarification task | ADM-004 `/dashboard/contacts`, ADM-005 `/dashboard/contacts/[contactId]`; CRM | Staff decision, concurrency-safe link, Activity/AuditEvent; no auto-merge or public overwrite |
| Conduct consultation / Sales/PM | Consultation state, confirmedStartAt/confirmedBy when applicable; Activity | Qualified/Discovery according to actual deal; manual prep/follow-up | Inquiry detail and Contact/Opportunity detail; Intake/CRM | Human scheduling/recap external; no calendar reservation or BookingRecord without D-003 |
| Record discovery/proposal / Sales/PM | Scope evidence reference, current selection/optional scopeSnapshot, expectedValue | Discovery or Proposal Sent after real action; manual review task | ADM-006 `/dashboard/opportunities`, ADM-007 `/dashboard/opportunities/[opportunityId]`; CRM | Proposal/discovery documents external; stage Activity/AuditEvent; no auto-generated proposals or automatic sends |
| Negotiate/close / authorized Sales/Admin | Stage, reason, agreed document reference, current expected value/currency | Negotiation → explicit Won/Lost; Lost reason; backward/reopen reason | ADM-006/007; CRM | Staff-confirmed transitions with history; no invoice/payment/customer side effect from stage alone |
| Convert Won contact / authorized staff | Canonical Contact.customerProfile; Won opportunity and conversion provenance | Won remains separate from payment; manual onboarding follow-up | ADM-010 `/dashboard/customers`, ADM-011 `/dashboard/customers/[customerId]`; CRM | Explicit transaction, Activity/AuditEvent, retry-safe; customerId is Contact ID; no new Customer model |
| Create/complete follow-up / Sales/PM | FollowUpTask target, assignee, dueAt, timezone, status | Any permitted target; manually created action | ADM-008 `/dashboard/tasks`, ADM-009 `/dashboard/tasks/[taskId]`; CRM | Due/overdue display; completion Activity/audit; no automatic task generation or outbound sequence |
| Merge/correct customer / Admin under D-011 | Survivor, affected links, revision and reason; existing records | Check other won engagements before reversal | Relevant existing detail interfaces/approved maintenance procedure; no new route | Audited reviewed procedure; preserve snapshots/history; reject unsafe bulk operation |
| Onboard/deliver/change/accept / PM | Restricted external agreement/project/evidence; concise Contact Activity where useful | Won normally remains; CRM task only for follow-up, not delivery board | ADM-011 or existing contact/opportunity detail for notes; external delivery tools | Human communications and external version records; no project, contract, ticket or acceptance collections |
| Invoice/reconcile / Finance | External invoice/payment/evidence; conditional ManualPaymentRecord | No pipeline mutation; separate expected/invoiced/received | External finance baseline; ADM-027 `/dashboard/payments` only after D-007; Operations | Human verification; conditional tracker audit/void/replacement; no gateway or payment-success email inferred |
| Publish article / authorized Editor | Article workingDraft/publishedSnapshot and approved content/assets | No sales stage; editorial work external or existing content workflow | ADM-013–016 `/dashboard/content/articles`, `/dashboard/content/articles/new`, `/dashboard/content/articles/[articleId]`, `/dashboard/content/articles/[articleId]/preview`; Content | Explicit publish/unpublish and audit; save is not publish; no automatic customer communication |
| Curate testimonial / authorized Editor | Testimonial genuine text/attribution/private evidence | Retention follow-up can target Contact; publication separate | ADM-017 `/dashboard/content/testimonials`, ADM-018 `/dashboard/content/testimonials/[testimonialId]`; Content | Review permissions; protected proof omitted publicly; audit publish/hide |
| Maintain SEO/FAQ/catalog / Editor or source maintainer | SeoOverride or owning snapshot; validated catalog/source FAQ | No sales stage | ADM-019/020 `/dashboard/content/seo` and `/dashboard/content/seo/[pageId]`; FAQ ADM-021/022 conditional; catalog source review | No competing writable masters; changes reviewed/audited as applicable; broad service editing remains P2 |
| Review operational summaries / Founder | Authorized inquiries, opportunities, tasks and customer counts | Show distinct counts/estimates, not cash revenue | ADM-001 `/dashboard`; ADM-012 `/dashboard/content`; CRM/Content | Same permission filters as lists; unavailable query is not zero; advanced reports external/future |
| Manage staff/audit / Admin | StaffUser, provider access, AuditEvent; existing reassignment work | Reassign open work when offboarding | ADM-023/024 access screens and ADM-025 `/dashboard/audit` conditional; ADM-026 `/dashboard/account` baseline | Capability remains required even if UI is conditional; approve D-013; no public staff signup |

### 21.2 Exact operational safeguards

- S5 Inquiry types remain `quote`, `consultation`, `contact`. A service purchase, invoice, support ticket or imported lead is not an invented fourth type.
- Opportunity has one required canonical contact and primary inquiry. Current selection can change under staff review without rewriting the original offer snapshot. Optional expectedValue is an estimate, never zero by default merely because the value is unknown.
- One contact can have multiple inquiries/opportunities; shared email is a matching hint, not a unique identity proof. Multiple won opportunities converge on one customer profile.
- FollowUpTask targets Inquiry/Contact/Opportunity. Customer follow-up uses Contact. An external project's entire task tree must not be stuffed into this model.
- Manual notes can reference protected external evidence using existing permitted fields; this does not create a document-management integration, mailbox sync or automatic timeline ingestion.
- P1 automatic acknowledgement/staff-alert requirements are aliases where S5/S6 specify, not duplicate mail sends. Saved inquiry plus failed email remains a saved inquiry; retry/reconcile the delivery, not the submission.
- Source capture supports Unknown and bounded allowed attribution. Do not manufacture an original UTM source when learning a referral source later; preserve original capture and note later clarification separately.
- No passwords, payment-card data, banking login details, full security reports or sensitive client datasets in general notes, audit diffs, emails or analytics.

## 22. Operational SOP library

All twenty SOPs are **R12 recommended procedures**, subordinate to inherited rules and signed engagement terms. A record listed below is a business record; it is not automatically a new app model. Owners may be the same founder wearing different responsibilities. Each SOP ends with evidence, not an assumed automated transition.

### SOP-01 — New lead intake

**Purpose:** Prevent lost or unowned inquiries. **Trigger:** Saved website inquiry or received direct inquiry. **Owner:** Sales; founder accountable. **Inputs:** Submitted need, contact details, channel/time, source/consent context and any existing record reference.

**Procedure:** (1) Verify a real saved website record or retain the direct-channel evidence. (2) Review whether it is sales, support, partnership, spam or duplicate. (3) Assign an eligible owner; inspect unassigned work. (4) Check acknowledgement/delivery state without asking a saved submitter to resubmit. (5) Record minimal missing-information questions and a manual next action. Direct-channel capture follows §6.1; never invent a primary Inquiry.

**Records:** Inquiry or restricted external intake record, owner, source evidence, Activity/task when supported. **Complete when:** Request is traceable, owned and has a next step or justified closure. **Exceptions:** Provider outage affects mail, not saved intake; suspicious duplicates are reviewed; sensitive attachments stay outside general notes.

### SOP-02 — Lead qualification

**Purpose:** Establish fit and avoid unsupported promises. **Trigger:** Relevant inquiry ready for review. **Owner:** Sales. **Inputs:** T-01, catalog readiness, client problem and available context.

**Procedure:** (1) Ask only necessary missing questions. (2) Check outcome, authority, capability, timing, budget context, dependencies and risk. (3) Review identity candidates; link/create Contact through the permitted process. (4) Record proceed/clarify/defer/decline reasoning in notes. (5) Create a legitimate Opportunity and select the appropriate approved stage only under the transition policy. (6) Assign next action or record Lost/closure as appropriate.

**Records:** Qualification worksheet, reviewed identity, Opportunity if warranted, Activity and manual task. **Complete when:** Fit decision and next action are documented. **Exceptions:** No automated scoring; low budget or personal email alone is not spam; regulated or specialist work waits for capability/obligation review.

### SOP-03 — Consultation

**Purpose:** Use the free 15-minute screening to decide a useful next step. **Trigger:** Relevant request and mutually confirmed arrangement. **Owner:** Sales/PM. **Inputs:** Inquiry, topic, participant, time/zone and §7 agenda.

**Procedure:** (1) Confirm arrangement manually; distinguish requested from confirmed. (2) Prepare the relevant questions. (3) Run the 15-minute agenda. (4) Explain uncertainty honestly; do not perform or promise a full free audit. (5) Recap decisions and assign clarification/discovery/quote follow-up. (6) Record actual attendance/cancellation and next action.

**Records:** Consultation fields when applicable, T-02 notes, Activity/task, external recap. **Complete when:** Next step and owner are clear. **Exceptions:** No-show is a factual note, not automatic Lost or a fee; live booking requires D-003; additional consulting needs agreed scope.

### SOP-04 — Paid discovery

**Purpose:** Reduce material uncertainty under a paid agreed scope. **Trigger:** Screening/qualification identifies work that cannot responsibly be quoted. **Owner:** PM with relevant specialist. **Inputs:** Discovery brief, approved fee/terms, authorization and required payment evidence.

**Procedure:** (1) Verify an approved tier schedule exists or prepare a bespoke proposal; do not invent missing prices. (2) Define questions, output, effort boundary, dependencies and acceptance. (3) Agree SOW/payment/IP terms. (4) Confirm payment and safe access before paid work. (5) Perform only authorized analysis. (6) Review findings, risks and options; obtain discovery acceptance. (7) Decide separately whether to propose implementation.

**Records:** T-03, external discovery agreement/invoice/output/acceptance; appropriate Opportunity/Activity. **Complete when:** Agreed output is delivered and reviewed. **Exceptions:** Discovery may conclude “do not build”; no automatic fee credit, refund promise or implementation win; separate opportunity modeling requires §5.2 review.

### SOP-05 — Quotation

**Purpose:** Issue a feasible, clear offer. **Trigger:** Enough scope information is available. **Owner:** Sales prepares; founder approves. **Inputs:** Qualification/discovery, catalog version, capacity/cost estimate and contract decisions.

**Procedure:** (1) Choose T-04 or T-05/T-06. (2) Define deliverables, exclusions, acceptance, revisions and client obligations. (3) Check canonical IDs, starting-price interpretation and overlap. (4) Separate setup/project/recurring/third-party costs. (5) Apply approved payment guidance and explicit validity/dates. (6) Obtain commercial/legal review as needed. (7) Issue the controlled version and record Proposal Sent only after actual issue.

**Records:** Approved quote/proposal/SOW, estimate, version/issue evidence, Activity and manual follow-up. **Complete when:** Client has a reviewable accurate offer and known next action. **Exceptions:** Unclear scope returns to discovery; no invented package limits, discount or binding automatic website quote.

### SOP-06 — Proposal follow-up

**Purpose:** Help the buyer reach a clear decision without pressure or duplicate outreach. **Trigger:** Agreed follow-up date or client question. **Owner:** Sales. **Inputs:** Issued version, prior messages, task and communication preferences.

**Procedure:** (1) Check whether the client already replied or opted out. (2) Use T-07 to ask about questions, reviewers and next decision. (3) Record actual reply and scope/price concerns. (4) Route changes to the founder; reissue with version control if needed. (5) Complete the current task and create the next agreed manual action, or record closure.

**Records:** Activity, proposal version and task history; correspondence remains external. **Complete when:** Follow-up outcome and next state are recorded. **Exceptions:** No automatic sequences or invented maximum attempts; no-response is a classification, not a new stage or assumed rejection.

### SOP-07 — Deal closing

**Purpose:** Record a defensible commercial outcome. **Trigger:** Client acceptance, decline or documented closure decision. **Owner:** Founder/authorized Sales. **Inputs:** Final agreement version, approver authority, scope/fee and outcome evidence.

**Procedure:** (1) Verify what was actually agreed or declined. (2) Resolve competing proposal versions. (3) Explicitly select Won or Lost; record required Lost reason and meaningful evidence. (4) Record any pending payment as a separate obligation. (5) For Won, proceed to reviewed customer conversion; for Lost, close obsolete tasks and retain permitted history. (6) Communicate next steps only as authorized.

**Records:** Opportunity stage/history, Activity/AuditEvent, agreement or decline record. **Complete when:** Outcome is explicit and supported. **Exceptions:** Verbal interest is not automatically agreement; reopening needs reason and approved policy; a paid discovery does not win an unaccepted implementation proposal.

### SOP-08 — Customer conversion

**Purpose:** Create or reuse one accurate customer identity. **Trigger:** Won opportunity ready for explicit conversion. **Owner:** Authorized staff; Admin handles corrections. **Inputs:** Canonical Contact, linked Inquiry, Won opportunity, revisions and permissions.

**Procedure:** (1) Confirm identity/link correctness and Won state. (2) Review existing customer profile and other engagements. (3) Execute the explicit conversion command. (4) Verify the same Contact ID and preserved inquiry/opportunity history. (5) Record onboarding next action. Retries must return the existing conversion rather than duplicate identity.

**Records:** Contact.customerProfile, opportunity conversion provenance, Activity/AuditEvent and manual follow-up. **Complete when:** Customer profile is correct and traceable. **Exceptions:** Non-Won conversion denied; reversal checks other obligations; reopening does not delete the customer; no invoice/payment/client login/project is created.

### SOP-09 — Client onboarding

**Purpose:** Establish safe delivery readiness. **Trigger:** Accepted engagement and customer relationship. **Owner:** PM; finance verifies payment. **Inputs:** Agreement, invoice/receipt, client contacts, requirements and §13 checklist.

**Procedure:** (1) Confirm final scope and required initial payment. (2) Send reviewed welcome/input request. (3) Gather assets, access invitations, client approver and working arrangements. (4) Check rights, confidentiality, data restrictions and dependencies. (5) Record blocked inputs and responsible people. (6) Schedule kickoff only when appropriate readiness is established.

**Records:** T-09, external access/input register and payment evidence; minimal customer Activity/task. **Complete when:** Agreement, payment, capacity and critical inputs allow work to begin. **Exceptions:** Never store passwords in email/CRM; exceptions to start-before-payment need specific approval; missing inputs may require a revised schedule.

### SOP-10 — Project kickoff

**Purpose:** Establish shared delivery expectations. **Trigger:** Ready state and agreed kickoff. **Owner:** PM. **Inputs:** Baseline SOW, delivery plan, stakeholder list and onboarding exceptions.

**Procedure:** (1) Confirm goal, deliverables and exclusions. (2) Walk through milestone acceptance and client responsibilities. (3) Confirm communication, approvals, change process and escalation. (4) Review data/access/production-change boundaries. (5) Assign first tasks and dependencies externally. (6) Circulate factual minutes and resolve any disputed interpretation before affected work.

**Records:** T-19 agenda/minutes, external task/milestone plan, decision log and concise Activity. **Complete when:** Owners and first actions are clear and the baseline is understood. **Exceptions:** A new kickoff request is not an approved scope addition; escalate missing approver, payment or critical access.

### SOP-11 — Project delivery

**Purpose:** Produce agreed outcomes with controlled quality and scope. **Trigger:** Authorized work after kickoff. **Owner:** Delivery lead/PM. **Inputs:** SOW, tasks, dependencies, acceptance criteria and authorized environment.

**Procedure:** (1) Execute bounded work items. (2) Record progress, evidence and actual effort/cost where needed. (3) Review security/quality before client exposure. (4) Report milestone status and blockers using T-11. (5) Route additional requests through SOP-12. (6) Deliver a specific reviewed version for SOP-13 acceptance. (7) Keep production actions separately authorized.

**Records:** External work board, versioned deliverables, QA results, status/decision records. **Complete when:** Scoped outputs are ready for acceptance with evidence and known limitations. **Exceptions:** Client delays require documented impact/agreement; no hidden feature cuts to meet a date; specialist changes need proper review.

### SOP-12 — Change request

**Purpose:** Prevent unpaid or unapproved scope expansion. **Trigger:** Requested change to baseline outcome, scope, fee, date or dependency. **Owner:** PM assesses; founder approves commercial terms; client approves commitment.

**Procedure:** (1) Capture the request and baseline reference. (2) Classify defect/included revision/new scope/clarification. (3) Estimate deliverable, schedule, fee, risk and support impact. (4) Offer accept/defer/reject options. (5) Obtain written decision from authorized parties. (6) Update SOW/milestone/invoice plan only after approval and retain original history. (7) Communicate revised work clearly.

**Records:** T-12, estimate, approval and revised version. **Complete when:** Decision and resulting baseline are traceable. **Exceptions:** Urgent containment follows existing incident authority and is documented; it does not create unlimited development authorization. Rejected changes stay out of delivery.

### SOP-13 — QA and acceptance

**Purpose:** Verify scope and obtain explicit client sign-off. **Trigger:** Review candidate ready. **Owner:** Delivery reviewer/PM; client approver accepts. **Inputs:** Version, criteria, QA plan and known issues.

**Procedure:** (1) Run relevant internal checks and record actual outcomes. (2) Fix/retest blocking defects. (3) Deliver review package and agreed review instructions. (4) Classify client feedback against baseline. (5) Correct agreed defects/revisions or obtain a change order. (6) Record accepted items and permitted exceptions with authorized sign-off. (7) Route final payment/handoff separately.

**Records:** QA evidence, defect list, T-13 acceptance and T-14 handoff preparation. **Complete when:** Agreed criteria have evidence and acceptance is recorded. **Exceptions:** Silence is not presumed acceptance; skipped tests are not passed; S0/S1 block ARADUN platform release; warranty remains signed-term dependent.

### SOP-14 — Invoicing

**Purpose:** Request payment accurately at the agreed event. **Trigger:** Agreement deposit, milestone or recurring-period billing event. **Owner:** Finance administrator; founder accountable. **Inputs:** Contract/version, billing identity, milestone evidence, amounts/currency and adviser-approved tax treatment.

**Procedure:** (1) Confirm entitlement and avoid duplicate invoice. (2) Prepare T-08 with unique number, dates, line items and verified instructions. (3) Review totals and contractual allocation. (4) Issue through the agreed channel. (5) Preserve issued version and record outstanding balance externally. (6) If D-007 enabled, add verified invoiced evidence without duplicating accounting authority.

**Records:** Invoice, external register, agreement link and optional tracker record. **Complete when:** Issued invoice is traceable and due terms clear. **Exceptions:** Missing tax/entity facts require review; invoice is not payment; no automatic gateway or invoice engine.

### SOP-15 — Payment follow-up

**Purpose:** Resolve outstanding payment fairly and accurately. **Trigger:** Due/overdue invoice, failed payment or unmatched receipt. **Owner:** Finance; founder handles disputes/refunds. **Inputs:** Invoice, bank/provider evidence, agreement and correspondence.

**Procedure:** (1) Reconcile first; distinguish payment timing, fees, partial funds and actual nonpayment. (2) Send T-10 only with verified balance and instructions. (3) Record client response and agreed remedy. (4) Apply only reviewed contractual consequences. (5) Verify settlement, issue accurate receipt and update balance. (6) Handle refunds/credits through preserved approval and settlement evidence.

**Records:** Reminder, receipts, outstanding balance and manual task. **Complete when:** Payment is reconciled or dispute/remedy has an owner and next action. **Exceptions:** No fabricated late fee, destructive suspension, screenshot-based Paid status or double counting of expected/invoiced/received.

### SOP-16 — Maintenance

**Purpose:** Deliver the agreed recurring service. **Trigger:** Active agreed service period and required payment. **Owner:** Named maintainer. **Inputs:** Covered assets/scope, access, prior report, approved changes and current risks.

**Procedure:** (1) Confirm coverage and due work. (2) Check backups/change authority where relevant. (3) Perform scoped updates/checks safely. (4) Verify results and record evidence. (5) Escalate incidents/out-of-scope requests. (6) Issue T-15 period report. (7) Review renewal/cancellation under actual terms and create a manual next action.

**Records:** Maintenance register, change/verification evidence, report and invoice linkage. **Complete when:** Period obligations and unresolved actions are reported accurately. **Exceptions:** No implied unlimited changes, rollover or 24/7 support; provider/cloud/ad costs stay separately allocated; unresolved SVC-057 terms block a standardized recurring offer.

### SOP-17 — Support

**Purpose:** Resolve requests under known scope and authority. **Trigger:** Client issue/question or relevant alert. **Owner:** Named support/maintenance role. **Inputs:** Requester, asset, impact, reproduction details, service coverage and safe evidence.

**Procedure:** (1) Verify requester and record the issue externally. (2) Assess impact/security and covered versus new work. (3) Contain incidents only within authority and escalate qualified help. (4) Agree action/update arrangements. (5) Implement authorized remedy and test. (6) Confirm outcome, document cause/actions and close or assign remaining work.

**Records:** T-18 external support/incident record; concise CRM Activity/task where useful. **Complete when:** Resolution or accepted workaround and residual responsibilities are recorded. **Exceptions:** Legal notification deadlines require actual assessment; no invented SLA, ticket module or disclosure of sensitive findings in ordinary email.

### SOP-18 — Client feedback

**Purpose:** Learn from actual delivery and collect genuine proof only with permission. **Trigger:** Accepted milestone, project completion or agreed review. **Owner:** Account owner. **Inputs:** Delivered scope, known issues and client contact preference.

**Procedure:** (1) Ask T-16 questions neutrally. (2) Record positive/negative feedback faithfully. (3) Assign corrective actions. (4) Separately ask T-17 permission for a specific testimonial/case study. (5) Verify wording, rights and measurable claims before content publication. (6) Retain private evidence and review withdrawal requests under policy.

**Records:** Feedback, actions, explicit publication permission, Testimonial/source case record if approved. **Complete when:** Feedback and next actions are recorded; proof published only after separate approval. **Exceptions:** No fabricated results, coerced positive reviews or public attribution without consent/authority.

### SOP-19 — Project closure

**Purpose:** Finish obligations and transfer responsibility clearly. **Trigger:** Accepted delivery ready for final handoff/closure. **Owner:** PM; finance verifies funds. **Inputs:** Acceptance, agreement, receipts, handoff assets and open-issue list.

**Procedure:** (1) Confirm final acceptance and contracted final payment. (2) Complete T-14 handoff and ownership checks. (3) Record remaining warranties/support/maintenance separately. (4) Revoke temporary access and address data return/retention under approved policy. (5) Send reviewed T-20 closure message. (6) Archive operational records without falsely treating archive as legal erasure.

**Records:** Acceptance, receipt, handoff/access checklist, closure note and outstanding obligation register. **Complete when:** Closure obligations are satisfied or specifically documented with owners. **Exceptions:** Do not mark money settled when disputed; unpaid or incomplete obligations may keep closure open under agreed terms.

### SOP-20 — Client retention

**Purpose:** Sustain useful, voluntary client relationships. **Trigger:** Planned review, renewal window or observed new need. **Owner:** Account owner/founder. **Inputs:** Customer history, satisfaction, current service terms and communication preferences.

**Procedure:** (1) Review unresolved issues and actual outcomes. (2) Discuss renewal/support needs and relevant improvements. (3) Explain alternatives without implying a mandatory upsell. (4) Qualify genuinely new work with new inquiry context/opportunity. (5) Request referrals only appropriately. (6) Record agreed next action or respectful closure/opt-out.

**Records:** Contact Activity/manual task, renewal decision and new engagement records where justified. **Complete when:** Next relationship step is explicit. **Exceptions:** No automated campaigns, health score or fabricated case study; cancellation/retention follows contract and privacy rules.

## 23. Business templates and document inventory

All structures and text below are **R12 drafts**. Replace bracketed fields with verified facts; do not send unresolved placeholders. The commercial/legal reviewer approves the final contract/SOW and invoice requirements. Documents live externally in P1, except the existing permitted CRM/content records explicitly noted. Store private evidence separately from publicly rendered content.

| ID | Template | Primary owner / review |
|---|---|---|
| T-01 | Lead qualification form | Sales; founder reviews fit/exceptions |
| T-02 | Consultation checklist/notes | Sales/PM |
| T-03 | Discovery questionnaire/output brief | PM/specialist; commercial terms separately approved |
| T-04 | Short quotation | Founder; legal/commercial review as needed |
| T-05 | Detailed proposal | Founder/delivery; legal/commercial review |
| T-06 | Statement of Work | Founder/client/counsel |
| T-07 | Proposal follow-up | Sales |
| T-08 | Invoice/payment acknowledgement | Finance/accountant; actual statutory requirements |
| T-09 | Client onboarding form/welcome | PM; secure access process |
| T-10 | Payment reminder | Finance/founder |
| T-11 | Weekly status report | PM; cadence pending agreement |
| T-12 | Change request | PM/founder/client |
| T-13 | Acceptance form | Authorized client approver/PM |
| T-14 | Handover checklist | Delivery/PM/client |
| T-15 | Maintenance report | Maintainer |
| T-16 | Client feedback request | Account owner |
| T-17 | Testimonial/case-study permission request | Account owner/editor/client |
| T-18 | Support/incident record | Maintainer/founder |
| T-19 | Kickoff agenda/minutes | PM |
| T-20 | Project closure message | PM/finance |

### T-01 — Lead qualification form

**Reference/date/channel:** [inquiry or external intake reference / received date / source]. **Owner:** [name]. **Prospect:** [reviewed name, organization if supplied, email, role]. **Problem/outcome:** [current difficulty / desired outcome]. **Service fit:** [canonical IDs / availability / delivery owner]. **Current systems:** [facts]. **Authority:** [decision-maker / procurement]. **Budget context:** [voluntary range or unknown]. **Timing:** [requested date / reason / constraints]. **Inputs/access/data sensitivity:** [facts and required review]. **Commercial feasibility:** [contract/payment constraints]. **Assessment:** [proceed / clarify / defer / decline, with reason]. **Next action:** [owner/date/timezone]. **Consent/source evidence:** [actual evidence, never assumed].

### T-02 — Consultation checklist and notes

Before: [request / agreed time and zones / attendees / topic / relevant service readiness]. During: [goal / current state / decision authority / date and budget context / constraints / risks]. Close: [agreed next step / owner / needed inputs / fee discussion explicitly not finalized]. After: [actual attendees / notes / recap date / follow-up]. Use the 15-minute agenda in §7.1; no expanded paid-discovery deliverable is implied.

### T-03 — Discovery questionnaire and output brief

1. What business outcome, user group and current process are involved?
2. What exists, who owns it, and what must remain compatible?
3. What integrations/data sources, permissions, sensitive data and locations are involved?
4. What volumes, performance, availability, accessibility and recovery needs are actual requirements?
5. Who supplies content, assets, access, decisions and acceptance?
6. Which outputs/constraints are essential, optional or explicitly excluded?
7. What assumptions need evidence before estimating implementation?
8. What will constitute acceptance of discovery itself?

**Output brief:** [questions answered / evidence / options / risks / dependencies / recommended scope / estimate assumptions / unresolved decisions / next step]. **Commercial attachment:** [approved fee, payment terms, duration, ownership and any credit/refund rule]. Leave those commercial terms uncommitted until approved; no tier amounts are supplied here.

### T-04 — Short quotation

**Quotation:** [ID/version/date/valid-until]. **Supplier/client:** [verified legal/billing identities]. **Need:** [brief]. **Included deliverables:** [specific outputs, units and limits]. **Not included:** [scope and third-party costs]. **Acceptance:** [observable criteria]. **Client inputs:** [items/owners]. **Timing:** [milestones and dependencies]. **Fee/currency:** [reviewed amount; separate setup/recurring/third-party/tax treatment]. **Payment:** [approved schedule and due events]. **Revisions/support:** [agreed terms]. **Agreement reference/acceptance method:** [reviewed contract and authorized acceptance]. **Prepared/approved by:** [names]. A quotation is not accepted merely by viewing it.

### T-05 — Detailed proposal

**Document control:** [ID/version/date/validity/parties]. **Executive understanding:** [problem, business goal and evidence]. **Proposed approach:** [method and why it fits]. **Scope:** [service IDs and deliverable breakdown]. **Acceptance:** [criterion/evidence/approver for each deliverable]. **Dependencies/assumptions:** [client inputs and provider limits]. **Exclusions:** [explicit boundaries]. **Plan:** [milestones, owners, review points and conditional dates]. **Commercials:** [fees/currency, staged payments, recurring work, third-party spend, tax/fee treatment]. **Change/revisions:** [approved procedure and limits]. **Risk and mitigation:** [material facts]. **Handoff/support:** [scope and term]. **Legal documents:** [reviewed MSA/SOW/NDA/DPA as applicable]. **Decision requested:** [authorized acceptance of exact version / questions / next action].

### T-06 — Statement of Work structure

**Parties and parent agreement:** [verified identities/MSA/version]. **Engagement purpose:** [outcome]. **Deliverable register:** [ID / description / quantity / acceptance / evidence / approver]. **Work boundaries:** [included/excluded]. **Client responsibilities:** [input/access/decision owner and needed date]. **Milestones:** [deliverable / review event / payment event / dependencies]. **Charges:** [one-time/setup/recurring, currency, third-party responsibility, adviser-reviewed tax and fees]. **Revisions/changes:** [limits and approval procedure]. **Delivery/acceptance:** [process and agreed review arrangements]. **IP/licenses/confidentiality/data:** [counsel-reviewed clauses or incorporated agreement]. **Warranty/support/termination/disputes:** [reviewed terms]. **Approvals:** [authorized signers, date, version and evidence]. This is a drafting structure, not ready-to-sign universal legal language.

### T-07 — Proposal follow-up

**Subject:** [Project] — proposal [reference/version]

Hello [name],

I’m following up on the proposal for [outcome]. Is there anything you would like clarified about the scope, delivery plan or fees? Please let us know who else needs to review it and a suitable next step. Any requested changes will be documented in an updated proposal before work begins.

Regards, [authorized sender]

### T-08 — Invoice and payment acknowledgement

**Invoice fields:** [unique number / issue date / due date / supplier legal and required tax details / client billing details / contract and milestone / description / quantity or period / currency / unit price / line total / discount or credit / applicable tax treatment / invoice total / prior allocations where appropriate / amount due / verified payment instructions / payment reference / billing contact]. Accountant must verify required local particulars and document numbering.

**Receipt text:** “We have verified receipt of [amount/currency] on [date], allocated to invoice [number]. The remaining verified balance is [amount/currency]. [Relevant next step].” Use only after reconciliation; include provider/bank references in protected records as appropriate, not sensitive credentials in messages.

### T-09 — Onboarding form and welcome

**Form:** [customer/contact/opportunity reference]; [agreement version]; [authorized client approver/billing contact]; [goals and deliverables]; [assets/content and rights]; [systems/accounts and named access invitations]; [data restrictions]; [milestones/dependencies]; [channels/timezones]; [feedback process]; [payment verification reference]; [kickoff readiness]; [open items/owners].

**Welcome text:** “Hello [name], we’re ready to prepare the agreed [engagement]. The next steps are [actual steps]. Please provide [specific inputs] through [approved secure method]. We’ll confirm kickoff once [remaining agreed prerequisites] are complete. Our agreed communication arrangements are [facts]. Please do not email passwords or sensitive account credentials.”

### T-10 — Payment reminder

**Subject:** Invoice [number] — payment follow-up

Hello [name], our records show a remaining balance of [amount/currency] for invoice [number], due [date]. If payment has been initiated, please share its reference so we can reconcile it. If there is a billing question, please let us know. Payment instructions remain [verified existing method/reference]. [Only an already agreed and applicable next step, if needed.] Thank you, [sender].

Verify the ledger before sending; independently confirm any requested beneficiary change. Do not insert an unapproved penalty or threat.

### T-11 — Weekly status report

**Engagement/version/period:** [facts]. **Status and evidence:** [on track/at risk with explanation; an external report label, not a CRM enum]. **Completed:** [deliverables/evidence]. **In progress:** [work]. **Next milestone:** [date/dependencies]. **Client decisions/inputs:** [item/owner/date]. **Risks/issues:** [impact/mitigation]. **Approved changes:** [references]. **Financial checkpoint:** [only relevant verified obligation]. **Next update:** [agreed arrangement]. Weekly cadence is proposed, not a universal contractual promise.

### T-12 — Change request

**Change ID/date/requester:** [facts]. **Baseline:** [SOW/version/criterion]. **Requested difference:** [specific description]. **Classification:** [defect / included revision / new scope / clarification]. **Impact:** [deliverables / effort / price/currency / schedule / dependencies / support/security]. **Options:** [accept/defer/decline and consequences]. **Decision:** [authorized parties/date]. **Effective baseline:** [new version]. **Execution owner and verification:** [facts]. No implementation until required agreement is recorded, except existing authorized incident containment.

### T-13 — Acceptance form

**Client/engagement:** [facts]. **SOW and reviewed version:** [references]. **Deliverables reviewed:** [items]. **Criteria/results/evidence:** [table or list]. **Decision:** [accepted / accepted with specifically permitted exceptions / not accepted]. **Open issues:** [reason/impact/owner/next action]. **Authorized approver:** [name/role/date/evidence]. **Resulting milestone/payment/handoff actions:** [contractual next steps, each separately verified]. This records business acceptance; it does not certify payment or waive rights beyond reviewed agreed terms.

### T-14 — Handover checklist

- [ ] Accepted version and delivered files/source access identified.
- [ ] Account/resource ownership and authorized administrators confirmed.
- [ ] Secure secret transfer completed where needed; temporary access removed.
- [ ] Build/release/use instructions and dependency/license restrictions supplied as contracted.
- [ ] Backup, recovery, monitoring and ongoing cost responsibilities assigned.
- [ ] Training/orientation delivered if included.
- [ ] Known issues, warranty/support boundaries and maintenance choice documented.
- [ ] Client confirms receipt/access; final payment and closure obligations reconciled.
- [ ] Data return/deletion/retention follows actual agreement and approved policy.

### T-15 — Maintenance report

**Client/service/period/scope version:** [facts]. **Covered assets:** [list]. **Work completed:** [action/date/result]. **Verification:** [evidence]. **Incidents:** [impact/action/status]. **Updates/backups/recovery checks:** [what actually occurred, or not performed]. **Usage/cost observations:** [verified data, separated from service fees]. **Excluded/new work:** [quote/change reference]. **Remaining risks:** [owner/next action]. **Renewal/cancellation checkpoint:** [actual terms]. Never claim backups were tested or systems secure without evidence.

### T-16 — Client feedback request

“Hello [name], now that [specific milestone/project] has been reviewed, we would value your feedback. Did the work meet the agreed goal? What worked well, and what should we improve about the deliverables or communication? Please also tell us about any unresolved concern. We’ll record the feedback and agree any necessary next action.”

### T-17 — Testimonial and case-study permission

“Would you be comfortable allowing us to publish [exact quotation / case-study draft] with [proposed attribution] on [specified channels]? Please review the wording and [screenshots/logo/metrics] and tell us what may be used or must be excluded. We will publish only the agreed material.” Record permission source/date, exact content/version, allowed attribution/assets/channels and any restrictions. Participation is optional; no response is not consent.

### T-18 — Support/incident record

**Reference/timezone/time/owner:** [facts]. **Reporter and authorization:** [facts]. **Affected asset/service/coverage:** [facts]. **Impact/severity basis:** [observed facts]. **Reproduction/evidence:** [safe protected reference]. **Containment:** [authorized action/time]. **Investigation:** [facts versus hypotheses]. **Communication:** [recipient/approved content/time/next update]. **Resolution/verification:** [evidence]. **Residual risk and follow-up:** [owner/date]. **Privacy/legal review:** [if relevant, adviser/decision]. **Closure:** [client/operator confirmation]. External record; no ticket schema introduced.

### T-19 — Kickoff agenda and minutes

Agenda: goal and success criteria → scope/exclusions → roles/approver → milestone/dependency plan → inputs/access/data boundaries → communication and consolidated feedback → change/QA/acceptance → payment and handoff checkpoints → immediate actions. Minutes identify actual attendees, agreement version, decisions, unresolved questions and action owner/date/timezone. A kickoff discussion does not silently amend signed scope.

### T-20 — Project closure message

“Hello [name], the agreed [deliverables/version] have been accepted on [date]. Your handoff materials are available through [approved access method]. The remaining responsibilities are [actual items or none], and the agreed support arrangements are [verified terms]. [Accurate payment status, if appropriate.] Thank you for working with ARADUN. Please contact us through [working agreed channel] if you need help within that scope or want to discuss new work.” Use only when facts match; do not claim completion, payment or support coverage prematurely.

## 24. Operational KPIs

**R12 measurement conventions:** State the reporting period, timezone, currency, cohort and exclusions. Count distinct IDs, not email messages or repeated page views. Report zero denominators as N/A, missing data as Unknown/Unavailable, and very small samples with their counts. Exclude test/spam/duplicate inquiries using a documented rule while retaining a raw total. Distinguish people, inquiries, opportunities, contracts and payments. Conversion comparisons should use the same entry cohort and a stated observation cutoff; immature cohorts are not final conversion rates. Reopened opportunities retain their history and are counted consistently.

No target percentage, minimum margin, guaranteed revenue or new dashboard is approved here. S1's illustrative first-90-day targets remain illustrative, not forecasts or obligations. All frequencies below are proposed internal review cadences.

| KPI / purpose | Calculation | Data source | Frequency / owner | P1 availability |
|---|---|---|---|---|
| Leads received / workload | Raw new inquiries and separately valid sales inquiries after declared exclusions; add external-channel count separately without double counting | Inquiry IDs plus external intake register | Weekly / Sales | Basic inquiry counts planned; valid-sales classification reconciliation/manual channels manual |
| Qualified leads / fit | Distinct opportunities first reaching Qualified in a defined period/cohort; show qualifying inquiries separately if needed | Opportunity stage Activity and T-01 | Weekly / Sales | Underlying records planned; qualification/funnel report manual |
| Consultation attendance / engagement | Attended screenings ÷ confirmed screenings scheduled in the same period; report cancelled/no-show separately | Consultation notes and confirmed arrangements | Monthly / Sales | Manual; request count is not attendance |
| Consultation conversion / next-step value | Distinct attended-screening opportunities reaching Proposal Sent by cutoff ÷ eligible attended-screening opportunities | Notes + stage history | Monthly / Sales | Manual; no required funnel module |
| Proposal rate / sales progress | Qualified-opportunity cohort reaching Proposal Sent by cutoff ÷ qualified opportunities in that cohort | Stage history and issued proposals | Monthly / Sales | Manual calculation from permitted evidence |
| Quote conversion / website effectiveness | Unique durably saved quote requests ÷ measured quote-form starts for the same reporting definition | Saved-intake event + consent-aware measurement | Monthly / Founder | P1 saved-conversion tracking planned; form-start denominator only if approved/configured; otherwise unavailable |
| Quote-to-win / offer effectiveness | Proposal-Sent cohort reaching Won by cutoff ÷ distinct opportunities in that cohort | Opportunity history + actual issued proposal references | Monthly / Sales | Manual funnel analysis; label cohort maturity |
| Won/lost and closed-deal win rate / outcomes | Distinct Won and Lost outcomes in period; Won ÷ (Won + Lost) under stated reopened-deal rule | Opportunity history | Weekly/monthly / Founder | Stage records/current counts planned; historic rate manual unless expressly implemented |
| Lead-to-customer conversion / relationship creation | Distinct eligible inquiry-cohort records attributable to first customer conversion ÷ eligible inquiry cohort, with one declared primary acquisition inquiry per new customer | Canonical Contact conversion provenance + originating Inquiry | Monthly / Founder | Conversion data planned; attribution/cohort calculation manual; returning-customer work reported separately |
| Revenue / financial performance | Recognized service revenue less recognized credits under accountant-approved basis; show invoiced and cash-collected totals separately | External accounts, invoices and receipts | Monthly / Finance | External; Opportunity.expectedValue is not revenue |
| Outstanding invoices / collection exposure | Issued collectible invoice amounts − allocated receipts − approved credit notes, per currency, with aging | External invoice/receivable ledger | Weekly / Finance | External; optional tracker is evidence only, not balance engine |
| Average project value / commercial mix | Total agreed net project fees ÷ distinct signed project engagements in same cohort/currency; exclude recurring retainers or report separately | Signed SOW register | Monthly / Founder | External; no P1 Project model |
| Delivery timeliness / reliability | Milestones delivered by agreed due date ÷ milestones due in period; retain original and formally revised dates | External milestone/acceptance register | Monthly / PM | External; do not erase original delay by silently moving dates |
| Customer satisfaction / experience | Proposed simple 1–5 response mean with respondent count, response rate and qualitative feedback; instrument requires approval | T-16 feedback register | After closure/period review / Account owner | Manual; no dashboard or invented public rating |
| Repeat business / retention | Clients with a new distinct signed engagement who had a prior completed engagement ÷ clients signing engagements in period | Canonical customer + external contract register | Quarterly / Founder | Manual; recurring installment is not a new project |
| Maintenance revenue / recurring income | Recognized maintenance service revenue for period, grouped by currency; show contracted recurring fee and cash collection separately | Active agreements + external accounting | Monthly / Finance | External; no recurring billing engine |
| Project contribution / pricing quality | Net service fee − defined direct delivery cost; margin = contribution ÷ fee, with actual/estimate clearly labeled | SOW and effort/expense records | At closure/monthly / Founder | External; bookkeeping definition reviewed under §10 |
| Sales cycle / throughput | Median elapsed time from agreed start event (e.g. first Qualified) to Won for completed cohort; publish event definition | Stage history | Monthly / Sales | Manual; no forecast or probability engine |

Advanced attribution, funnel reports, forecasting, customer lifetime value, health scoring and team-performance analytics retain their source future phases. Do not add tracking of private form content or employee surveillance to obtain these metrics. Optional additional events/tools need D-021 and privacy review. A GA4 figure affected by consent or incomplete instrumentation must be labeled accordingly.

## 25. Operational risks and controls

| Risk / early signal | Preventive control | Response / accountable owner |
|---|---|---|
| Unclear scope; repeated “small extras” | Specific deliverables, limits, acceptance and exclusions; signed version | Classify feedback and issue change request; PM/founder |
| Underpricing; estimate consumes all capacity | Include coordination/QA/contingency, specialist and third-party costs; review actual effort | Re-estimate future offers; negotiate authorized change only when scope warrants it; founder |
| Late/nonpayment; missed milestones | Agreed staged invoices, verified collection method, receipts and clear terms | Reconcile, discuss remedy, apply reviewed terms; Finance/founder |
| Missed deadlines; blocked client inputs | Dependency owners, capacity check and early status reporting | Explain impact/options and agree revised commitment; PM |
| Communication failure; conflicting approvals | Named approver/channel, written recaps and version history | Clarify decision authority and reconcile records; PM |
| Excessive workload; support displaces delivery | Working-capacity review and no unsupported coverage promises | Reschedule, narrow scope by agreement or use approved qualified help; founder |
| Security/data exposure | Least privilege, secure secrets, authorized testing, environment isolation and restricted evidence | Contain, investigate, invoke client/legal incident process; maintainer/founder |
| Incorrect bank instructions or payment fraud | Verified beneficiary, independent verification of changes, protected invoice process | Pause transfer/refund, verify through trusted channel, preserve evidence; Finance |
| Contractor failure or excessive access | Competence check, bounded contract, confidentiality/IP terms, milestone review and minimal access | Replace/replan with client agreement; revoke access and preserve work; founder |
| Surprise third-party costs | Client-owned accounts where practical, stated exclusions, approved spend limits and review | Pause unapproved spend within authority; obtain decision; founder/maintainer |
| International payment blocked/delayed | Verify actual account/service/country/settlement eligibility before agreement | Use another approved lawful method or revise/decline engagement; Finance |
| Legal/tax or data-transfer mismatch | Confirm actual entity/client/data facts with advisers; no generic compliance claim | Stop affected processing/commitment pending review; founder |
| Client dispute; different understanding | Versioned proposal/SOW, evidence-based acceptance, change records | Neutral review, agreed remedy and counsel where appropriate; founder |
| Duplicate/wrong CRM identity | Reviewed matching, canonical Contact, no email-only auto-merge | Admin correction with link/history checks under D-011; Admin |
| Notification failure mistaken for lost inquiry | Durable save and outbox; inspect authorized queue/provider evidence | Reconcile/retry email; never recreate saved inquiry blindly; maintainer |
| Fabricated proof or unlicensed assets | Permission/evidence review, honest demo labels, private rights record | Withhold/remove affected publication and correct source; Editor/founder |
| Owner unavailable; unmanaged obligations | Document runbooks, actual approved backup access and customer expectations | Invoke agreed cover or communicate revised arrangements; founder |
| Stale advice/provider terms | Recheck eligibility and applicable obligations at selection/renewal | Reassess the affected process; do not silently reuse outdated assumptions; founder/adviser |

Risk register entries record likelihood/impact in plain language, owner, control evidence, next review and residual risk. Do not invent insured status, certifications, business-continuity staffing or financial reserves. Risk acceptance cannot authorize unlawful conduct or hide an unmet contractual obligation.

## 26. Phase 1 and future operations boundaries

| Operational need | P1 business method | P1 application support | Conditional/future system |
|---|---|---|---|
| Public service/solution discovery and quote intake | Reviewed source offers and accessible inquiry journeys | Catalog/source content, search, typed Inquiry and confirmation | Broad service/package/page editors P2 |
| CRM qualification/sales | Human review, notes and decisions | Contact, fixed Opportunity pipeline, manual tasks, conversion and scoped summaries | Company directory, advanced CRM/email timeline P2; customizable pipelines/scoring P3 |
| Consultation | Human scheduling and free screening | Manual request/state; preferred time/zone | Live Calendar only after D-003 promotion; P2 baseline otherwise |
| Proposals/contracts/signing | Reviewed external templates and accepted versions | Minimal permitted references/notes | Proposal generation/signing and contract management P2 |
| Invoices, staged/recurring payments | External finance and verified collection | No baseline payment engine; optional tracker only D-007 | Gateway, invoice generation, recurring billing and finance reporting P2 as approved |
| Delivery/acceptance/support | External board/documents, human QA/sign-off and support register | Concise CRM Activity and follow-up where appropriate | Project management, client portal and support-ticket suite P2 |
| Follow-up and retention | Human communication with manual task dates | Due/overdue task visibility | Automated sequences/campaigns/onboarding workflows P2; advanced AI/workflow builder P3 |
| Content/proof/SEO | Truthful evidence and reviewed publication | Articles, testimonials, SEO; source FAQ/help | FAQ editor/upload separately gated; full media/page workflows P2 |
| Access/audit | Named authorized staff and protected operating records | Server-side authorization/audit required | Access screens/audit viewer conditional; advanced permission builder/security dashboard future |
| Management reporting | Basic operational counts plus external worksheets | Approved basic summaries only | Advanced attribution/funnel/revenue reports P2; forecasts/custom advanced reports P3 |
| Products/SaaS/AMS | Research/validation only within approved planning | No internal CRM-to-SaaS promotion | Product, AMS, multi-organization and advanced AI gates retained individually |

External tooling is a manual operational choice, not an automatic software integration. Selecting a spreadsheet, document repository, meeting service or task board does not authorize syncing customer data to it without appropriate privacy/access review. No purchase, account creation or integration is selected by this specification.

## 27. Codex implementation handoff

Use this file as an operational interpretation of approved requirements. **R12 procedures and unresolved decisions are not automatic authorization to code.** Preserve S1–S8 authority, S7 task structure and the owner's implementation approval process. S11 remains supporting pending planning where stated.

### 27.1 Implement only the approved behavior

| Implementation area | Required handoff behavior | Verification reference |
|---|---|---|
| Forms/catalog | Three distinct journeys; four-step quote; approved optional/required fields; canonical selection; immutable server-resolved snapshot; no blind total or checkout | S5 §§8–9, S6 §13; S10 catalog/intake cases |
| Lead capture/notifications | Commit before success; stable retry; protected receipt; acknowledgement and staff alert with controlled recipients; mail failure cannot erase intake | M06-01–07; S10 QA-IN cases |
| CRM/pipeline | Staff-reviewed identity, valid links, exact seven stages, separate classifications, authorization/revision/history | M07-00–03/06–08; QA-CRM-01–03/06/09–10 |
| Customer conversion | Explicit after Won; canonical Contact profile; retry/concurrency-safe; correction preserves obligations/history; no payment/project side effects | M07-05/07/08; QA-CRM-04–06 |
| Follow-up | Manual creation, eligible assignee/target, timezone-aware dueAt, open/completed/cancelled; overdue derived | M07-04/08; QA-CRM-07–08 |
| Dashboard/reporting | Same authorization for counts and records; separate inquiries/opportunities/customers/estimated values; unavailable is not zero | M11-01/02; QA-CRM-10 |
| Content | Source catalog/core/portfolio baseline; explicit article/testimonial publication; permission proof private; no invented general editor | M08 tasks; S9 evidence/publication controls |
| Finance | External templates/process; only if D-007 approved implement S5 ManualPaymentRecord semantics and exact route | M11-03/06; S10 conditional-operation cases |

Before a coding task: cite actual requirement IDs; read relevant source sections; inspect repository and previous decisions; identify affected module/page/model; state enabled conditional choices, acceptance, security/accessibility/performance needs and out-of-scope features; resolve necessary gates; obtain required planning authorization. Do not implement this entire document in one task.

After a task: run appropriate tests, record actual results and not-run items, inspect user-visible states, update existing progress/decision/traceability records, report changed files and remaining gates. Respect all three light themes and S4 accessibility/motion constraints; color must not be the only operational status signal. No logic, data permissions or submissions may change with theme.

### 27.2 Reusable scoped handoff prompt

> Implement only the separately authorized roadmap task [existing Mxx-xx] for [workflow]. Read S1 requirement IDs [actual IDs], S5/S6 contracts, S7 task acceptance, S8 execution rules, S10 relevant cases and Step 12 sections [numbers]. Inspect existing implementation first. Preserve exact stages, routes, canonical identities, manual-task behavior and phase gates. Do not implement R12 recommendations or conditional functionality without a recorded decision. Define scope, affected modules, acceptance and tests before edits. Verify authorization, concurrency/idempotency, safe errors and accessible states relevant to this task. Report changes, executed checks, evidence, limitations and unresolved decisions. Do not build external finance, contracts, delivery, messaging or support systems simply because their manual procedures appear in Step 12.

This prompt is an instruction template for later authorized work; no application task was executed for this document.

## 28. Requirement and milestone traceability

All FR/BR/NFR identifiers below exist in S1; M identifiers exist in S7. R12 procedural detail remains pending even where its underlying concept is inherited. “Manual P1” means the business can perform the work without promoting a future software requirement. No substitute requirement IDs, models, modules or pages are created.

| Source requirement IDs | Phase / workflow | Page/module and database/source record | Roadmap milestone/task | Responsible role / SOP | Approval treatment |
|---|---|---|---|---|---|
| BR-001, BR-003, BR-004, BR-005 | P1 identity/contact/proof/capability | About/contact and relevant public templates; Content/source records, Testimonial | M00-01/03; M09; M13-05 | Founder/Editor; SOP-02/18 | Inherited principles; factual/readiness gates remain |
| BR-002, FR-04-01, FR-04-02, FR-04-03 | P1 catalog/availability/pricing | Source Catalog; service/solution/pricing and PUB-013; no P1 catalog collections | M05; M06-01/05; M13-05 | Founder/Sales; SOP-02/05 | Source values preserved; D-004 scope/unit/readiness pending |
| FR-02-01, FR-02-02, FR-02-03 | P1 quote journey | PUB-013; Intake/Catalog; Inquiry/offerSnapshot | M06-01/03/05/07 | Sales/developer; SOP-01/05 | Inherited; no public binding quote |
| FR-02-04, FR-02-05 | P1 contact/manual consultation | PUB-012/014; Intake; Inquiry | M06-04/07 | Sales; SOP-01/03 | Inherited manual baseline; paid tiers absent |
| FR-02-06, FR-02-07, NFR-006, NFR-014 | P1 durable intake/references | PUB-015, ADM-002/003; Inquiry, OutboxEvent, AuditEvent | M02; M06-01/02/03/06/07 | Maintainer/Sales; SOP-01 | Inherited reliability; source technical gates retained |
| FR-02-08, FR-02-09, FR-08-01, FR-08-02 | P1 transactional notifications | Notifications/Operations; OutboxEvent, Inquiry | M06-02/03/06/07 | Maintainer; SOP-01 | Aliases reuse intended events; no duplicate mail |
| FR-02-10, FR-02-11, FR-02-12, FR-02-13 | P1 handling/ownership/notes/source | ADM-002/003; Intake/CRM; Inquiry, Activity, FollowUpTask | M06-01; M07-00/02/06 | Sales; SOP-01/02/06 | D-011/013 and assignment-email gate retained |
| FR-03-01 | P1 reviewed contact identity | ADM-004/005; Contact and linked records | M07-01/07/08 | Sales/Admin; SOP-02/08 | Confirmed concept; merge/correction detail gated |
| FR-03-05 | P1 fixed pipeline | ADM-006/007; Opportunity, Activity, AuditEvent | M07-03/08 | Sales/founder; SOP-02/04/05/06/07 | Exact source stages; R12 entry evidence proposed |
| FR-03-02, FR-03-03 | P1 customer conversion | ADM-010/011; Contact.customerProfile and Opportunity | M07-05/07/08 | Authorized staff/Admin; SOP-08/09 | Explicit conversion; no separate Customer or money state |
| FR-03-06 | P1 manual tasks | ADM-008/009; FollowUpTask, Activity | M07-04/08 | Sales/account owner; SOP-01–20 where follow-up appropriate | Manual creation; no outbound sequences |
| FR-07-01, BR-006 | Manual P1 quotation/invoicing/contracts/delivery controls | External T-04/05/06/08; permitted CRM Activity references | M11-03; M13-05 | Founder/PM/Finance; SOP-04–07/09–15/19 | Inherited templates/controls; R12 templates/legal terms need review |
| FR-07-02 | P1 location decision | External ledger baseline; conditional ADM-027, ManualPaymentRecord | M00-03; M11-03/06 | Finance; SOP-14/15 | D-007 unresolved; no inferred gateway |
| FR-02-14 | P2 baseline; conditional P1 | PUB-014, Intake/calendar; BookingRecord only if selected | M06-08/09 | Sales/maintainer; SOP-03 | D-003 unresolved; no promotion in this document |
| FR-04-06, FR-04-08, FR-04-10 | P1 scoped CMS/article publication/SEO | ADM-013–016/019–020; Article/SeoOverride or owning snapshot | M08-01/02/04/08 | Editor/founder; SOP-18/20 supporting content | Article P1; general page/service publication/editor not promoted |
| BR-004 | P1 testimonial/case-study truth | ADM-017/018; Testimonial and source case-study records | M08-03; M09; M13-05 | Editor/account owner; SOP-18 | Permission/evidence gates; no fictional proof |
| FR-09-02, FR-10-03, FR-10-04, NFR-007 | P1 basic summaries/conversion measurement | ADM-001, approved public analytics; scoped CRM aggregates | M10; M11-01/02 | Founder; SOP-01/02/07/20 | Basic planned counts; advanced KPI calculations external |
| FR-09-07, FR-09-13, FR-14-03, NFR-005 | P1 access/audit; UI conditional | Identity/Operations; StaffUser, AuditEvent; optional ADM-023–025 | M03; M11-04/05; M13-02 | Admin/founder; all SOPs | D-013 policy; no role builder or unrestricted finance access |
| FR-14-08, NFR-004, NFR-008, NFR-012 | P1 privacy/recovery/secure records/time-money integrity | Existing records and external retention/finance process | M02; M06; M07; M13-02/03/04 | Founder/maintainer/Finance; SOP-09/14–19 | Actual retention/jurisdictions/targets pending; no fabricated compliance |
| NFR-002, NFR-009, BR-008 | P1 accessible workflows/QA/release governance | Relevant public/staff interfaces; no new model | M04; M12; M13-01/04/05; M14 | Founder/QA; SOP-11/13/19 | S4/S8/S10 gates retained; tests not executed here |
| FR-02-16, FR-02-17, FR-07-09 | P2 proposal/signing/contract software | Future modules only; external documents in P1 | No P1 implementation; M00-01/M13-01 boundary review | Founder; SOP-05/07/12 | Future software not promoted by manual SOPs |
| FR-07-03, FR-07-04, FR-07-05, FR-07-06, FR-07-07, FR-07-08, FR-07-10, FR-07-11, FR-07-12 | P2 finance capabilities under source qualifications | Future finance modules; external accounting baseline | No P1 implementation beyond M11-03 and selected M11-06 | Finance; SOP-14/15/16 | No new payment/recurring/multicurrency software |
| FR-03-07, FR-03-09, FR-02-15 | P2 communication integration/follow-up sequences | Future CRM/automation; external messages now | No P1 implementation; boundary review | Sales; SOP-06/20 | Manual notes/tasks do not imply synchronization |
| BR-007 | P1 separation; future product/AMS scope separately gated | Internal CRM/CMS distinct from future products | M00-01; M13-01; S7 future roadmap | Founder/product owner | No SaaS/AMS launch or tenancy inferred |

SOPs 10–13/16–19 rely on BR-006 for manual delivery controls. Detailed project-management, client-portal and support functionality remains in S1's respective future feature families and S2's future page inventory; referencing those business activities does not assign them P1 engineering tasks. External finance/software procurement and legal advice are operational dependencies, not invented S7 milestones.

## 29. Unresolved decisions and approval record

This is a reviewable decision register, not a request to approve everything at once. Complete the document now; approve each policy before its dependent external commitment or implementation. A source-provided number/name stays unchanged while missing terms remain pending.

| Local ID / inherited gate | Decision or missing evidence | R12 recommendation | Owner / needed before |
|---|---|---|---|
| O12-01 / D-018 | Actual supplier entity, ownership, address, signing and banking authority | Verify actual facts with advisers; do not assume US incorporation or prior partnership terms | Founder + counsel/accountant / binding client agreement/invoice |
| O12-02 / D-004 | Paid-discovery tier names, prices, duration, inclusions and fee credit/refund rules absent from sources | Supply approved original terms or approve bespoke discovery case by case; no invented fixed tiers | Founder / paid-discovery offer |
| O12-03 / D-004 | Per-package units, limits, revisions, delivery assumptions and solution composition incomplete | Approve one maintained offer definition per package/version, including SVC-057 period | Founder + delivery owner / finalized offer publication or contract |
| O12-04 / D-004/019 | Actual delivery availability and qualified resources for each service | Complete 57-service readiness worksheet; classify only approved available/specialist-led/coming-soon values | Founder / service availability claims and accepting work |
| O12-05 / D-005/019 | Working hours, response arrangements, follow-up cadence, escalation/backup coverage | Set achievable engagement-specific coverage; agree cadence without default SLA promises | Founder / client communication/support terms |
| O12-06 / D-005/018 | Warranty, revisions, refunds, IP/licenses, termination, liabilities, disputes and contract review | Use counsel-reviewed MSA/SOW plus specific commercial schedules | Founder + counsel / binding terms |
| O12-07 / D-007/018 | Eligible collection method, bank/provider, currency/fee/tax responsibilities; external ledger versus tracker | One verified offsite method and external ledger first; tracker only by explicit decision | Founder/Finance / invoice and collection; tracker code if selected |
| O12-08 / D-011 | Supported staff intake/import for offline sources not specified; paid-discovery opportunity linkage detail | External intake register until capture contract approved; preserve true source/consent and required Inquiry linkage | Founder/architect / offline-to-Opportunity flow or new intake UI |
| O12-09 / D-011/013 | Exact stage edges, Won evidence, contact correction, customer reversal and role visibility | Adopt source safety invariants; review R12 stage criteria and authorized exceptions explicitly | Founder / CRM mutation implementation and operation |
| O12-10 / D-005 | Maintenance coverage, output units, renewals, cancellation mechanics and incident commitments | Separate signed schedule per recurring offer; preserve monthly-in-advance/notice/rollover qualifications | Founder/maintainer / recurring sale |
| O12-11 / D-014/018 | Actual data roles, locations, retention, transfers, privacy notices and outreach obligations | Map real flows and ask advisers for jurisdiction-specific requirements | Founder + advisers / processing/publication/outreach |
| O12-12 / D-020 | Capacity, budgets, internal costing/margin goals, insurance needs and contingency arrangements | Measure real workload/cost first; no final financial target or coverage claim in this file | Founder/Finance / quote exception or material capacity commitment |
| O12-13 / D-003/012/013 | Live Calendar, FAQ editor/upload, staff-access/audit UI selections | Preserve manual/source/provider baselines until each selection is explicit | Founder / conditional implementation |
| O12-14 / D-010/021 | KPI definitions, reporting cutoffs, any optional analytics events/tools | Approve manual KPI worksheet and data definitions first; keep advanced reports deferred | Founder / published/internal performance claims |
| O12-15 / S11 R11; D-009/020 | S11 infrastructure choices, numerical policies, recovery targets and actual operational readiness | Review independently; do not turn R11 plans into active services or client SLAs | Founder/maintainer / deployment and support commitment |

**Approval record to complete later:** decision ID; accepted/rejected/revised proposal; exact effective wording; approving person/date; evidence reference; affected requirement/source sections; implementation/publication consequences; superseded version. Approval of this document's structure does not prove that legal advice was obtained, providers were approved, staff were hired or mail/backup/collection channels were tested.

## 30. Final consistency audit and handoff status

### 30.1 Document audit

| Check | Outcome and evidence |
|---|---|
| Source availability/version/status | Eleven supplied sources available; §1 and Appendix B preserve versions/provenance. S11 remains pending supporting planning. |
| Eight categories / 57 services | All category operations covered in §8; Appendix A copies exact S1 catalog text: 58 memberships, 57 unique service IDs. |
| Shared service identity | SVC-009 retained once as a unique service with two category memberships; no duplicated same-work charge. |
| Five solutions / package structure | Exact names and source prices retained in Appendix A; no inferred composition or new Enterprise/recurring-tier prices. |
| Free consultation | Free 15-minute initial screening retained; requested time is not a booking; D-003 retained. |
| Paid discovery | Source omission explicitly reported; no tier names/prices/credit/refund terms invented. Custom discovery remains gated by agreement. |
| Staged payments / maintenance | Source 50/50, 40/30/30, custom milestones and qualified retainer rules retained; no support guarantee invented. |
| Third-party costs | Advertising/cloud excluded unless expressly agreed; relevant other costs separated. |
| CRM / conversion | Exact seven sales stages; separate inquiry classifications, Contact customer profile, manual tasks and explicit conversion after Won; Won not Paid. |
| Dashboard / data model | Existing routes/models/modules only; conditional features retained; no new customer/project/invoice/support collections. |
| Manual versus software | External contracts/delivery/accounting/support clearly labeled; offline intake gap explicit; future systems not promoted. |
| SOPs / templates / metrics | Twenty SOPs with inputs, steps, records, completion and exceptions; twenty reusable templates; defined KPI calculations and availability. |
| Legal/international matters | Actual entity/payment/tax/data facts remain unresolved; legal structures are review checklists, not universal enforceability claims. |
| Source requirement IDs / roadmap | §28 uses existing IDs and milestones; new local SOP/template/decision IDs clearly distinguished. |
| Source changes / implementation | Supplied source files are not edited; this deliverable is documentation only. No application tests, registrations, accounts, messages or production actions performed. |
| Remaining approval | R12 recommendations and §29 gates pending. Complete specification does not mean operational readiness or approval of all terms. |

### 30.2 Business readiness checklist for later execution

- [ ] Verify legal/supplier identity, authorized signatory and jurisdiction-specific advice.
- [ ] Verify actual mailbox, permitted collection method, invoice process and accounting records.
- [ ] Approve offer availability, package limits/units/fees and missing discovery terms before relevant sales.
- [ ] Approve reviewed contract, payment, acceptance, warranty/support and change terms.
- [ ] Assign actual sales/delivery/finance/support responsibilities and achievable capacity/coverage.
- [ ] Approve CRM permissions/linking/correction rules and offline-origin intake handling.
- [ ] Prepare restricted external records, secure access exchange and client-approved working arrangements.
- [ ] Confirm data/asset rights, privacy/retention/transfer obligations and truthful marketing proof.
- [ ] Rehearse a sample manual journey from intake through quote, agreement, payment, delivery, acceptance and closure using clearly synthetic internal data.
- [ ] For application release, execute S10/S11 checks under authorized scope and retain real evidence; do not treat this document audit as passing software or recovery tests.

**Version history:** 1.0.0, 25 October 2026 (Asia/Dhaka): initial complete Step 12 business operations specification, prepared from the supplied instruction and S1–S11. New procedures/templates are R12 recommendations. No Step 13 work is included.


## Appendix A. Exact source commercial baseline

The following is copied from S1 §§3–5. Only heading depth is adjusted. Source-local references (including S1/S2 and section numbers inside the copied material) refer to the master's own source context, not the reference register in this document. Its proposed documentation-ID and incomplete-package qualifications remain intact. This is a preserved planning baseline, not a claim that every offer is ready to sell.

### 3. Business model, commercial policy, and operations

#### 3.1 Revenue streams

| Revenue stream | Baseline |
|---|---|
| Project services | Defined deliverables and agreed project fees; indicative starting prices lead to tailored quotes. |
| Recurring services | Maintenance, managed services, marketing, design, and video retainers as listed in the catalog. |
| Setup plus monthly | Separate setup/implementation charge and recurring operation/support where actually applicable. |
| Custom engagements | Discovery and tailored scope for complex work. |
| Owned products | Strategic intent: subscriptions, licenses, or one-time digital-product sales; select per validated product, not automatically. |

Products, SaaS, business software, and industry platforms overlap. They are not automatically four separate systems. ARADUN's internal CRM/CMS/operations platform is separate in purpose from software sold to customers. Internal features do not automatically become a commercial SaaS. Future AMS scope remains a separate domain/product decision. An AMS may be scoped for a single agency; multi-organization tenancy is a dependency only if that product scope is explicitly selected, not a mandatory feature of every AMS.

#### 3.2 Package and quote rules

- Preserve the 57 unique services, canonical service identity, cross-listing, prices, and five solutions below.
- Display USD starting prices as indicative “From” amounts; no binding automatic quote or public checkout in Phase 1.
- Define deliverables, units/limits, revision rounds, assumptions, exclusions, timeline conditions, and support before publishing a package as purchasable scope. These details are incomplete in the sources and must not be invented.
- Four pricing models: one-time, monthly, setup plus monthly, and custom. Clarify ambiguous units before publication, including Monthly Video Editing and any packages lacking an explicit period.
- Separate hosting, licenses, advertising spend, API usage, third-party subscriptions, taxes where applicable, and travel/production costs where relevant to the approved scope.
- Solutions reference constituent services. Avoid double-charging overlapping deliverables; quoting remains staff-reviewed rather than blindly adding every public starting price.
- The server resolves valid service/package IDs, prices, and availability. Store an immutable inquiry/quote snapshot; never trust amounts submitted by the browser.
- Service availability values: available, specialist-led, coming-soon. Owner must confirm each service's current delivery readiness before publication.
- Cybersecurity work requires authorization and qualified capability; do not promise guaranteed security or a 24/7 SOC that does not exist.

#### 3.3 Operational workflows

Sales pipeline: **New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost**. Spam, duplicate, and no-response are secondary classifications, not replacements for commercial stages. Phase 1's default pipeline is fixed; configurable multiple pipelines are a future proposal.

Delivery: **Lead → Qualification → Discovery → Proposal → Written agreement/SOW → Initial payment → Kickoff → Delivery → Review → Acceptance → Final payment → Handoff → Optional maintenance**.

Project states from S1: **Pending Agreement → Pending Deposit → Ready → In Progress → Client Review → Completed → Closed**. These describe business operations before the project-management module exists.

Payment states from S1: **Draft → Issued → Partially Paid → Paid / Overdue / Cancelled**. The final model may distinguish overdue as a derived condition; do not silently change the business meaning.

Won does not mean paid. Customer conversion preserves inquiry and opportunity history and avoids duplicate contacts. A client can have more than one inquiry/opportunity; the precise linking, merge, and correction rules require review.

#### 3.4 Existing payment scheduling guidance

| Engagement | Existing guidance |
|---|---|
| Starter project | 50% deposit, 50% before final handoff |
| Professional project | 40% / 30% / 30% by agreed milestones |
| Enterprise | Custom milestones |
| Retainer | Monthly in advance; generally 30-day cancellation notice subject to signed terms; unused hours do not roll over unless agreed |

These are existing planning policies, not jurisdiction-specific legal advice or finalized customer contracts. Phase 1 uses proposal/agreement/invoice-based collection; payment providers and eligibility are unconfirmed. Manual financial operations can occur outside the platform. Whether Phase 1 includes a staff payment tracker is unresolved.

#### 3.5 Delivery, support, and readiness

Proposals should identify goals, scope, deliverables, exclusions, dependencies, timelines, milestones, revisions, fees, payment schedule, third-party costs, support, expiration, and signatures. Agreements may include MSA, SOW, NDA, DPA where applicable, change orders, maintenance terms, and contractor terms. Determine applicable legal/tax obligations from the actual operating entity and jurisdictions before use.

Define onboarding information, secure credential exchange, communication owner, change control, QA, client UAT, acceptance, documentation, handoff, and maintenance escalation. Support hours, response targets, warranty periods, revision limits, refunds, cancellation rules, and IP/license terms remain decisions for approval. Do not promise unlimited revisions or round-the-clock support.

Business readiness includes appropriate registration/ownership decisions, working business communication, contracts, permitted payment collection, receipts, reconciliation, and records. These do not automatically require building accounting or legal-management software. The separate business-roadmap numbering in S4/S6 does not supersede the platform's eight planning stages.

### 4. Services and existing pricing

The following source-preserved catalog has **58 category entries representing 57 unique services**. Mobile App UI/UX Design is one service cross-listed in Mobile and Design. Stable `SVC-###` identifiers below are proposed documentation IDs, not approved URLs or database schemas. They distinguish catalog entries from functional requirement IDs.

Prices are existing indicative public display values from S1. Proposed increases are isolated in the decision register and are not applied here. Two-price entries represent **Starter / Professional**, as stated in S1. Three-price recurring entries preserve the source order; exact tier names and limits still need confirmation. Unless explicitly monthly, amounts must be assigned a confirmed billing unit during package review. Package scope, revision count, delivery estimate, and individual availability remain unresolved for every service unless separately approved.


#### A. Web & Software Development (5)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-001 | Business Website Development | $699+ / $1,499+ |
| SVC-002 | E-commerce Website Development | $999+ / $2,499+ |
| SVC-003 | Custom Web Application | Custom quote |
| SVC-004 | Website Redesign | $399+ / $999+ |
| SVC-005 | Website Maintenance | $49 / $99 / $199+ per month |

#### B. Mobile App Development (5)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-006 | Business Mobile App | $1,999+ / $4,999+ |
| SVC-007 | E-commerce Mobile App | $2,499+ / $5,999+ |
| SVC-008 | Custom Mobile App | Custom quote |
| SVC-009 | Mobile App UI/UX Design | $299+ / $899+ (cross-listed under Design) |
| SVC-010 | Mobile App Maintenance | $99 / $249 / $499+ per month |

#### C. AI Automation & CRM (7)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-011 | Workflow Automation | $299+ / $899+ |
| SVC-012 | CRM Setup & Customization | $399+ / $1,199+ |
| SVC-013 | Lead Follow-up Automation | $349+ / $999+ |
| SVC-014 | AI Chatbot | $499+ / $1,499+ |
| SVC-015 | AI Integrations | $799+ / $2,499+ |
| SVC-016 | AI Voice Agent | $799+ / $2,499+ |
| SVC-017 | Automation Maintenance | $99 / $249 / $599+ per month |

#### D. Digital Marketing (9)

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

#### E. Cloud & DevOps (8)

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

#### F. Cybersecurity (8)

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

#### G. UI/UX, Graphic Design & Branding (8 category entries)

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

#### H. Video Editing & Production (8)

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

### 5. Business solutions and packages

| ID | Solution | Starter | Professional | Enterprise |
|---|---|---|---|---|
| SOL-001 | Digital Presence | From $899/project | From $2,499/project | Custom |
| SOL-002 | Business Automation | From $699/project | From $2,499/project | Custom |
| SOL-003 | Business Growth | From $399/month | From $999/month | Custom |
| SOL-004 | Cloud & Technology | From $499/project | From $1,999/project | Custom |
| SOL-005 | Complete Digital Business | Custom | Custom | Custom |

Names/prices are confirmed concepts from S1 §5. Exact included services, quantities, exclusions, revisions, timelines, setup fees, recurring costs, and upgrade/maintenance rules are not fully specified in the supplied sources. Do not infer a bundle's contractual scope from its name. Each solution must have one maintained package definition and enter the unified quote flow. Existing canonical solution URLs in S1 remain reference constraints; final page inventory belongs to Step 2.


## Appendix B. Supplied-source fingerprints

SHA-256 fingerprints identify the exact supplied files used for this review. Upload filename prefixes are workspace labels, not source version numbers.

| Ref | Supplied filename | SHA-256 |
|---|---|---|
| S1 | `02-01-master-requirements-1-.md` | `0cf55ee4791aa6256f5035de3cc727a26dc048c581d4a55a26cc320b574cd9a6` |
| S2 | `01-02-pages-sitemap.md` | `264d8bb070e003baa558742e8709f9de3506d9145a94a696b7d5593a115e9b16` |
| S3 | `03-03-page-sections.md` | `a119700e79245c2a01bf10f8672a630a1969cf6c6b3c9b87bf47175c212a6a84` |
| S4 | `04-04-design-system-wireframes.md` | `198d7025e5d707841350b07d3ff7954e285d4295e0fb4706d3312e2f01bea56d` |
| S5 | `05-05-database-architecture.md` | `6f2a4a98c1c95182809a8597d16a4ce2495b952f952315ad435b528ec6f3dc9f` |
| S6 | `06-06-project-structure.md` | `1122939ab22d03a3748a4ff9d590b00038b31903d329f1ed331159a280470b9b` |
| S7 | `07-07-development-roadmap.md` | `df31be46738a1dae2119df89196b4c3031a944d2d0557b1af86b0650e6edeeea` |
| S8 | `08-08-implementation-guide.md` | `b1c55b01f47445b280524d7bcf1aee2aac6ddf61d491f29d542da2647fb6f13b` |
| S9 | `09-09-content-assets.md` | `749db285dd9821d26c8af4682a9101576c7a86c0232396a8dc44bf184e6c8886` |
| S10 | `10-10-testing-qa.md` | `cebfba7c535d00e3dbf0eefa8eed084156cf6fe51505cd0a54b70299e62b0536` |
| S11 | `11-11-deployment-operations.md` | `6eb9e9e09808c529048f3a501c45b81c0c57505848e919c42b67242ccde34339` |

## Appendix C. External verification references

Official sources consulted during preparation on 24–25 October 2026 for limited provider-eligibility and data-contract/transfer context. They do not establish ARADUN's legal entity, approved account, fees, tax treatment or compliance. Recheck relevant requirements with the actual provider/adviser at the point of selection or use. No public source changes the supplied commercial catalog.

- **E1 — Stripe, Global availability:** [Official availability page](https://stripe.com/global). Used in §16 only to distinguish supported business-location eligibility from a customer's location; no ARADUN eligibility or country-specific approval inferred.
- **E2 — PayPal, Countries and regions:** [Official country coverage directory](https://www.paypal.com/en/webapps/mpp/country-worldwide). Used as a provider verification starting point, not evidence that every merchant feature is available or an account is approved. Feature/account/settlement verification remains pending.
- **E3 — UK Information Commissioner's Office, A brief guide to international transfers:** [Official guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/a-brief-guide-to-international-transfers/). Supports §3's qualified observation about overseas access and applicability assessment; not advice that UK rules apply to every ARADUN engagement.
- **E4 — UK Information Commissioner's Office, What needs to be included in the contract?:** [Controller–processor contract guidance](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/contracts-and-liabilities-between-controllers-and-processors-multi/what-needs-to-be-included-in-the-contract/). Review reference for §12 where the relevant legal framework applies; counsel must adapt any agreement to actual roles, services and jurisdictions. The ICO page flags this guidance as under review; check the current guidance when preparing an agreement.

**Delivery note:** This document is complete for owner review. Decisions explicitly marked pending remain pending; it does not authorize implementation or external commitments.

**1.1.0 · 25 October 2026 — Controlled amendment:** Applied only affected portions of the four owner-requested changes and their direct cross-references; all unrelated content retained.
