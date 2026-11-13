# Inherited source decisions and unresolved gates

Baseline: 2026-11-04 (Asia/Dhaka). Task: **M00-01 only**. Documentation verified; owner acceptance pending. No application implementation or operational readiness is claimed.

This is the detailed source-decision register indexed by [DECISIONS.md](../../../DECISIONS.md). Tables retain exact source wording and local IDs. They are not newly adopted ADRs. Source-local section references remain source-local. Current scoped supersessions in [source baseline](../../source-baseline.md#historical-supersession-change-log) govern stale passages, especially D-022 palette and old architecture wording. No provider or policy is selected here.

## D source register

Source: [01-master-requirements.md line 3350](../../sources/01-master-requirements.md#L3350). Open details remain for the owner and designated reviewer; deadlines in the focused gate table below take precedence over generic wording.

| Source ID | Issue / evidence | Source recommendation / decision required |
| --- | --- | --- |
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

## O source register

Source: [02-pages-sitemap.md line 1642](../../sources/02-pages-sitemap.md#L1642). Open details remain for the owner and designated reviewer; deadlines in the focused gate table below take precedence over generic wording.

| Source ID | Source issue | Current source treatment |
| --- | --- | --- |
| O-01 | Historical master draft metadata conflicted with owner designation of approval. | Resolved for document authority in the paired v0.2.0/v1.1.0 revision; retain historical draft provenance and substantive unresolved decisions. |
| O-02 | Earlier individual private-route reviews were absent from the original visible chat. | The 23 October owner instruction includes all P1 private pages in planning. Retain B/R/C provenance and review permissions, workflows and conditional interfaces during their section planning; do not claim missing historical approvals. |
| O-03 | Master instructs preserving previous S1 URLs but does not reproduce the complete original list. | All routes here remain proposed exact spellings pending reconciliation. Do not claim `/our-work`, solution slugs or other routes were verified against unavailable S1 text. Do not substitute `/work` or `/legal` silently. |
| O-04 | Exact role/record permissions and client identity provisioning are not finalized. | Listed users define intended responsibility only; D-013 and FR-05-01 must settle enforcement and invitation/public-registration decisions. |
| O-05 | P1 FAQ authoring, staff-admin UI, audit viewer and manual payment location are not all confirmed pages. | C rows remain optional interface allocations. Required public FAQ, access revocation, logging and business tracking must still be satisfied through the approved alternative. |
| O-06 | No approved content-instance list for cases/articles/help/products exists. | Repeatable templates are complete; actual record titles, quantities and content IDs belong to later approved content work. Do not fill gaps with fictional proof. |
| O-07 | Product/industry scope, AMS deployment boundary and full P2/P3 allocations remain conditional. | Preserve source gates and proposed phases. Do not expose future navigation or implement all candidates because they appear in a sitemap. |

## U source register

Source: [03-page-sections.md line 6814](../../sources/03-page-sections.md#L6814). Open details remain for the owner and designated reviewer; deadlines in the focused gate table below take precedence over generic wording.

| Source ID | Unresolved detail | Affected scope | Source treatment |
| --- | --- | --- | --- |
| U-01 | Final verified public copy and evidence inventory | Home, About, work, testimony, service/solution proof and articles | Headings/topic directions are supplied; do not invent business facts. No mandatory count of fabricated work or testimonials. |
| U-02 | Detailed future workflow and feature decisions | P2/P3 and Product Terms | Every route has a high-level blueprint; source proposed/conditional status remains. No claim of earlier individual advanced-page approval. |
| U-03 | Editing live article versus separate unpublished revision behavior | ADM-015/016 and public article visibility | Clearly distinguish draft/save/publish; decide exact editorial behavior before interaction design relies on it. No scheduled publishing assumed. |
| U-04 | Actual contact/mail operational readiness | Contact, all inquiry flows and confirmation notifications | hello@aradun.com is selected but source says not yet operational. Use verified working channels at release; no invented sales/support mailboxes. |
| U-05 | Final content instance titles/quantities and publication scheduling | Case studies, articles, help and products | Templates included in full; no unapproved record count or filler content added. |
| U-06 | Package units, limits and truthful delivery availability | All service and solution price/scope sections | Retain source prices and scope prompts; D-004 governs publication of exact package commitments. |

## U4 source register

Source: [04-design-system-wireframes.md line 8695](../../sources/04-design-system-wireframes.md#L8695). Open details remain for the owner and designated reviewer; deadlines in the focused gate table below take precedence over generic wording.

| Source ID | Remaining detail | Settled direction | Later evidence / owner |
| --- | --- | --- | --- |
| U4-01 | Production logo masters | Folded-A identity; same geometry in terracotta/slate/vivid-blue; charcoal light-surface wordmark | Owner/designer supplies or validates exact vector geometry, export rights, small-size fidelity, transparent edge quality and inverse variant |
| U4-02 | Final header lockup | Spacious original editorial header; no oversized busy logo | Owner/designer chooses compact symbol-plus-wordmark versus original text wordmark after actual header fit; symbol remains available for other brand uses |
| U4-03 | Exact hero media and independent layers | Original matte geometric composition, technology meaning elsewhere, static mobile/reduced fallback | Designer prepares final optimized art/crops; decide whether layers justify GSAP. Raster concept is not an editable layered asset |
| U4-04 | Detailed design provenance | Owner declared Step 4 approved; core direction and all three themes explicit | Token sizes, detailed compositions and motion timings in this consolidation are R4 specifications, not fabricated earlier individual approvals; refine by measured QA without changing approved business scope |
| U4-05 | Theme preference mechanism | Terracotta initial default, explicit visitor choice, same content/layout, logo changes too | Developer selects small safe preference storage compatible with privacy/SSR; blocked-storage behavior and no-flash first paint tested. No sensitive preference profile or extra account required |
| U4-06 | Final performance/payload budgets | Source field goals and aspirational Lighthouse targets; optional motion removable | Owner/developer confirms provisional §13 budgets against real assets, route build and devices; provider/load/recovery D-020 remains |
| U4-07 | Dependency versions and foundational controls | Approved stack; CSS first; Motion and selective GSAP supported | Developer verifies compatible versions, current license/terms and chosen primitives before installation; paid plugins require separate justified approval |
| U4-08 | Article editor/assets/live editing | P1 article workflow and protected preview complete in plan | D-012/U-03 choose editor, minimal image workflow and live-revision semantics; no full media library inferred |
| U4-09 | Publication evidence/copy | All source page slots and exact catalog preserved | Owner/editor verifies actual work, quotes, images, service readiness, package units, contact operations, policies and final copy before publication |
| U4-10 | Accessibility and motion validation | Semantic/control/reduced-motion contracts specified | Developer/designer tests actual product with representative assistive-tech/keyboard/mobile conditions; final tweaks follow evidence |

## A5 source register

Source: [05-database-architecture.md line 934](../../sources/05-database-architecture.md#L934). Open details remain for the owner and designated reviewer; deadlines in the focused gate table below take precedence over generic wording.

| Source ID | Decision | Source recommendation / baseline | Required before |
| --- | --- | --- | --- |
| A5-01 | Provider/library and session details | Provider identity, local staff access; session collection only if required | Auth installation and recovery/MFA implementation |
| A5-02 | Exact permission/publish matrix D-013 | §11 recommended Admin/Sales/Editor; no separate Manager unless needed | Any protected production workflow |
| A5-03 | Identity/merge/conversion D-011 | Reviewed contact links, embedded customer profile, reversible audited correction | CRM mutation implementation |
| A5-04 | Live article edit U-03 | Working draft + current published snapshot, explicit Publish | Article editor implementation |
| A5-05 | FAQ authoring and media D-012 | Source FAQ/help + controlled asset references baseline; conditional schemas ready | Related editor/upload implementation |
| A5-06 | Booking D-003 | Manual request P1; provider-confirmed integrated mode only after selection | Any live slot/booking claim |
| A5-07 | Payment tracker D-007 | External ledger baseline; conditional limited tracker specified | ADM-027 implementation |
| A5-08 | Operational budget/load/provider/region/recovery D-020 | Next.js frontend + Express backend; local MongoDB development, production host unselected; bounded jobs/pools; no numeric recovery/uptime claim | Deployment architecture lock and procurement |
| A5-09 | Retention/privacy/consent D-014 | Data minimization, explicit policy-version context, redaction process | Public analytics/forms and retention TTL enablement |
| A5-10 | Catalog commercial readiness D-002/D-004 | Retain original prices; unknown units/scopes/readiness remain explicit | Public offer publication |
| A5-11 | Specific assignment alerts FR-08-03 | Shared outbox if selected; no new notification center | Enabling assignment emails |
| A5-12 | URL history O-03 | Preserve all supplied S2 exact URLs | Claiming historical URL reconciliation or changing routes |
| A5-13 | Recovery/suppression operational ledger | Minimal restricted restoration-safe deletion record; format/retention pending | Production backup/deletion process |
| A5-14 | Conditional interface selection | Keep all conditional page plans; required capabilities have valid alternate process | Implementing conditional menus/pages |

## ADR source register

Source: [05-database-architecture.md line 907](../../sources/05-database-architecture.md#L907). ADR status cells distinguish Baseline, R5 recommendations and gates; copying a recommendation is not selection.

| ADR | Decision / context | Alternatives / tradeoff | Risk / reconsideration | Source status |
| --- | --- | --- | --- | --- |
| ADR-01 | MongoDB + Mongoose through Express; local development, Atlas optional later | Relational PostgreSQL/Prisma superseded by owner; document modeling suits owned snapshots while independent records use refs | Application must enforce relationships/transactions; reconsider only with explicit stack approval and demonstrated constraint | Baseline |
| ADR-02 | One feature-based Express.js + TypeScript backend on Node, separate from the Next.js frontend | Owner-approved separation in one aradun/ repository; no NestJS or microservices | Coordinate frontend/API compatibility and releases; keep the backend modular and simple | Baseline |
| ADR-03 | Thin actions/handlers; server services and scoped data access | Component-level ad hoc queries are simpler initially but spread policy; generic repository framework is unnecessary | Helpers can be bypassed if conventions weak; enforce server imports/review/tests [T1] | Baseline + R5 boundary details |
| ADR-04 | Catalog/core pages/portfolio in validated source; limited CMS in MongoDB | All-database catalog enables editing but broad editor belongs P2; all-source articles would omit approved CMS | Deployment needed for offer edits; migrate when approved authoring volume requires it | R5, carries C5-02 |
| ADR-05 | Typed inquiries unify three public conversion paths | Separate stores duplicate identity/history/notifications | Type-specific validation must stay clear; split only if distinct retention/workload requires it without breaking CRM linkage | R5 |
| ADR-06 | Customer profile embedded in canonical contact | Separate customer collection duplicates identity at P1 scale; organization account may later justify separation | Several people per purchasing company needs P2 organization/account migration; D-011 correction rules retained | R5 / D-011 gate |
| ADR-07 | Small owned values embedded; independent/growing records referenced | Embed everything causes unbounded histories; normalize everything adds joins | Application referential integrity and merge complexity; reconsider based on actual access patterns | R5 |
| ADR-08 | Original inquiry offer snapshot is immutable in routine operations | Live catalog lookup would rewrite historical context; full price-version service excessive P1 | Snapshot PII/retention must allow controlled redaction; reconsider formal quote versioning in P2 | Baseline + R5 fields |
| ADR-09 | Article working draft plus one public snapshot | Editing live record risks accidental publishing; full revision history is P2 | Doubles bounded current body, no historic restore UI; choose U-03 explicitly before implementation | R5 / U-03 gate |
| ADR-10 | Provider/library identity with local staff authorization | Custom passwords/MFA rejected; Auth.js and managed providers remain options | Vendor cost/recovery/revocation dependence; select provider after D-009/013/020 | Gate |
| ADR-11 | Published-only source index + Mongo text queries initially | Atlas Search/external search useful later; no AI/vector requirement | Simple ranking/merged pagination limits; upgrade for proven scale/relevance need | R5 |
| ADR-12 | Transactional outbox with bounded scheduled worker | Sending before save loses consistency; fire-and-forget loses work; large queue engine unnecessary initially | Duplicate/uncertain external delivery remains possible; use dedupe/leases/reconciliation; managed queue if workload demands | Baseline reliability + R5 mechanism |
| ADR-13 | Shared Mongo limiter as minimal baseline | Process memory fails across instances; managed Redis/WAF can substitute later | Database abuse pressure; ingress protection and threshold tuning required; replace adapter when volume warrants | R5 / thresholds gate |
| ADR-14 | Source-defined roles/settings and fixed pipeline | Editable role/stage/settings builders add unapproved surface | Changes require reviewed deployment; add editors only with approved operational need | Baseline boundary + R5 |
| ADR-15 | Request-time published database reads initially; private data uncached across users | Broad shared caching increases invalidation/withdrawal risk | More read load; introduce measured cache only with precise publication/access invalidation | R5 |
| ADR-16 | Controlled asset references; uploads conditional | Full media library is P2; arbitrary URLs risk SSRF/private leaks | Editor convenience limited; add secure minimal upload if D-012 selects it | Gate with baseline fallback |
| ADR-17 | Manual consultation and external finance baseline | Live booking/payment tracker are candidates; checkout is P2 | Manual operations require owner process; promote only explicit D-003/D-007 decision | Baseline / gates |
| ADR-18 | No P1 tenancy/AMS/AI engine | Empty future collections and organization framework add complexity | Later migration needed; revisit at separately approved product/tenant scope | Baseline |
| ADR-19 | Next.js frontend and Node-capable Express hosting; isolated environments; production MongoDB hosting unselected | Long-running host viable if cost/capability demands; Kubernetes unnecessary | Scheduler/runtime/pool/backup limits depend on vendor; select actual plan and test before release | Gate |
| ADR-20 | Local theme preference without business database | Account/profile storage unnecessary for device choice | First-paint mechanism must preserve caching/privacy; select U4-05 with real render QA | Baseline capability + mechanism gate |

## O12 source register

Source: [12-business-operations.md line 1012](../../sources/12-business-operations.md#L1012). Open details remain for the owner and designated reviewer; deadlines in the focused gate table below take precedence over generic wording.

| Local ID / inherited gate | Missing evidence | R12 recommendation (not adopted) | Owner / needed before |
| --- | --- | --- | --- |
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

## O13 source register

Source: [13-post-launch-growth.md line 734](../../sources/13-post-launch-growth.md#L734). Open details remain for the owner and designated reviewer; deadlines in the focused gate table below take precedence over generic wording.

| Local ID / inherited gate | Decision needed | R13 recommendation (not adopted) | Owner / needed before |
| --- | --- | --- | --- |
| O13-01 / D-019 | First active market, ICP and offer focus | One country, service SMB web/CRM problems; evaluate US first and UK second subject to gates | Founder / targeted acquisition |
| O13-02 / D-001; S9 CR-02/03 | Public positioning/headline/founder facts | Use S9 clear outcome-led direction; verify role and experience claims | Founder / publication |
| O13-03 / D-004/019; O12-03/04 | Package deliverables/units, SVC-057 period and 57 service readiness decisions | Complete canonical offer definitions without altering source prices; qualified specialist arrangements where needed | Founder/delivery / offer claims and sale |
| O13-04 / D-004; O12-02 | Paid-discovery tiers/fees and terms absent | Bespoke reviewed scope only until actual approved schedule supplied | Founder / paid-discovery offer |
| O13-05 / D-018; O12-01/07 | Actual supplier identity, address and eligible payment route | Verify facts and test permitted collection; no assumed foreign entity | Founder/advisers / binding commercial use or outreach where sender details required |
| O13-06 / D-018; S11 mail readiness | Working mailbox, sender authentication and profile access | Verify selected hello address and supplied profiles | Founder/developer / contact publication and sending |
| O13-07 / D-014; O12-11 | Jurisdiction-specific marketing/privacy/retention/transfer rules | Document channel/recipient basis and suppression; conservative tracking default | Founder/qualified reviewer / processing or outreach |
| O13-08 / D-021; O12-14 | Exact analytics events and selected optional tools | Approve §18 dictionary selectively; core saved event first; defer extra pixels/replay | Founder/developer / instrumentation |
| O13-09 / D-010/011; O12-08 | Supported offline intake and attribution-report detail | External intake/reporting until a safe approved capture contract exists | Founder/architect / offline-to-opportunity implementation |
| O13-10 / D-020; O12-12 | Cash budget, founder time and acquisition economics | Minimal incremental spending first; choose explicit ceiling and contribution assumptions | Founder/finance / commitments |
| O13-11 / D-019/023; S9 CR-09/10 | Actual proof, permissions and first editorial topics | Four core articles first; existing honest evidence; no mandatory large demos | Founder/editor / publication |
| O13-12 / D-005; O12-05/10 | Response hours, review cadence, support/renewal terms | Capacity-based internal routine and engagement-specific written terms | Founder / public promises or recurring sale |
| O13-13 / D-003 | Manual versus approved live consultation mode | Keep manual request; no booking claims until resolved | Founder/developer / scheduling integration |
| O13-14 / S12 partnership terms | Referral incentives and partner arrangements | No default commission; review contract/conflicts per real relationship | Founder/adviser / partnership commitment |
| O13-15 / D-006/015/016/017 | Product/localization/new integrations and future scope | Validate demand separately; no P1 route/module additions | Founder / later phase proposal |
| O13-16 / S4 U4-02 and production asset gates | Final logo lockup/vector assets and theme artwork | Preserve selected geometry/three themes; review production exports | Founder/designer / final asset publication |
| O13-17 / S11 R11; S12 R12 | Unapproved operational recommendations and actual readiness | Review their exact decisions; do not call planned backups/mail/provider accounts operational | Founder/maintainer / launch and related commitments |

## Focused execution gate ownership and deadlines

The following is copied from guide section 26, including existing owner/deadline assignments; it records gates without executing M00-02/03. Unresolved gates do not block freezing this documentation baseline.

| Source gate | Baseline / unresolved item | Owner / deadline task | Implementation treatment |
| --- | --- | --- | --- |
| A5-01/02; D-009/013 | Auth provider/session/MFA/recovery and exact role/record/publish permissions | Owner + developer; M00-02/03 before M03 | No custom auth or assumed MFA policy; local access mandatory; source route reconciliation documented. |
| A5-03; D-011 | Reviewed contact linking/merges, transitions and conversion corrections | Owner + developer; before M07 writes | Canonical Contact/embedded customer retained; no automatic email merges or silent history deletion. |
| A5-04; U-03 | Working draft/current published snapshot and editor format | Owner/editor + developer; before M08-01/02 | Retain R5 recommendation, explicitly select it before implementation; no historical revision UI. |
| A5-05; D-012 | FAQ authoring and article asset/upload mode | Owner/editor + developer; before M08 | Source FAQ/help and controlled assets baseline; optional secure upload/editor increments estimated separately. |
| A5-06; D-003 | Manual versus external/integrated scheduling and actual linkage | Owner + developer; before M06-08/09 | Manual P1 baseline. Live booking needs explicit phase promotion; EXP-031 still P2 until separately changed. |
| A5-07; D-007 | External finance ledger versus ADM-027 tracker | Owner; before M11-06 | External operations baseline; no P1 gateway/automated invoicing. |
| A5-08; D-020 | Host/providers/budget/load/region/job limits/backup RPO/RTO | Owner + developer; M00-02 and before deployment lock | Select actual capabilities; no assumed free-plan feature, uptime or cost. |
| A5-09/13; D-014 | Consent/notices/retention/deletion and restore-suppression ledger | Owner with appropriate review; before public capture/analytics and M13-03 | No arbitrary retention or legal claim; archive is not erasure; account for providers/backups. |
| A5-10; D-002/004/005 | Package units/scopes/availability and commercial terms | Owner; before M09 offer publication | Original prices remain; monthly-video ambiguity blocks its final price wording until clarified. |
| A5-11; FR-08-03 | Whether to enable assignment-specific email | Owner; before M07-09 | General staff intake alerts remain mandatory; conditional assignment alert reuses outbox. |
| A5-12; O-03 | Unavailable older S1 exact URL list | Owner; before claiming historic reconciliation/changing routes | Preserve supplied exact S2 routes. Existing source-ID checks do not prove older historic URL parity. |
| A5-14; O-05 | Dedicated conditional policy/admin/FAQ/audit/payment interfaces | Owner; before affected screen/navigation activation | Every entry remains planned. Required capability satisfied through selected baseline or tested screen. |
| U4-01/02/03/06 | Final vector/header/hero layers and actual payload budgets | Owner/designer + developer; M12 | Approved three-theme direction retained; final assets/effect cost verified; GSAP optional if not justified. |
| U-01/04/05/06; D-018/019/023 | Factual copy/evidence, mailbox, content instance list and availability | Owner/content; M09 and M13 | No invented content quantity/results/contact readiness; all service pages remain in implementation scope. |
| Weekly capacity and start date | Not provided | Owner; before dated scheduling | Hours only in this file; external waits and content/legal inputs separate. |

## Content readiness and deployment choices

Content-readiness rows below retain proposed/verified distinctions. CR and R11 choices are local source labels, not new business requirement IDs.

| Source ID | Content | Source readiness status | Required input | Owner | Affected scope |
| --- | --- | --- | --- | --- | --- |
| CR-01 | Brand/descriptor/tagline, catalog names and existing values | A | S1 identity/catalog unchanged; confirm operational usage before launch | Owner | All branding/offers |
| CR-02 | New R9 prose and metadata | D | Approve wording per record/version; no earlier individual approval presumed | Owner/editor | All affected public records |
| CR-03 | Mission/vision/values/founder origin | D/B | Approve statements; verify any linguistic/factual origin wording | Owner | Home/About |
| CR-04 | 57 service availability decisions | B | For each SVC: available/specialist-led/coming-soon and actual delivery arrangement | Owner | Offer publishing and quote selection |
| CR-05 | Service/solution package definitions | B | Deliverables, limits, units, revisions, exclusions, inputs, costs and support; monthly-video unit | Owner | All package comparisons; D-004 |
| CR-06 | Public commercial policies | B/L | Confirm support/warranty/refund/cancellation/IP and payment terms | Owner/legal reviewer | Pricing, offers, FAQs; D-005 |
| CR-07 | Contact readiness | B | Verify hello@aradun.com send/receive; phone publishing permission/handling; current social links | Owner | Contact/footer/notifications |
| CR-08 | People/company/legal identity | B/L | Actual names/roles/bios/photo permissions; entity details; address only if verified | Owner | About/policies/schema |
| CR-09 | Portfolio records | B/V | Actual work, contribution, classification, permission, screenshots, evidence and approved title/slug | Owner/project contributor | Work/cases and proof slots |
| CR-10 | Testimonials | B/V | Original quote/source; permission; attribution; optional avatar rights; real relationship | Owner/editor | Curated proof; no fictional production records |
| CR-11 | Initial article/help instances | D/B/V | Select topics/authors, write complete bodies, verify sources and actual publication dates, approve assets | Editor/owner | Insights/FAQ instances and previews |
| CR-12 | Brand/hero/other assets | V/B | Production vectors, final lockup/hero crops, image rights, accessibility and payload review | Designer/owner | Asset manifest; U4-01–03/06 |
| CR-13 | Privacy/legal/conditional policy selection | B/L | Actual entity/data/vendor/retention/consent practices and reviewed text; decide TRU pages | Owner/qualified reviewer | Public collection and policy release |
| CR-14 | CMS editorial/asset decisions | B | Resolve working draft snapshot/editor and optional FAQ/uploads with exact permissions | Owner/developer/editor | A5-04/05, D-012/013 |
| CR-15 | Consultation wording mode | A/B | Manual request baseline; verify scheduling operations. Live mode only after explicit D-003 decision | Owner | Consultation/confirmation |
| CR-16 | Future content/features | F | Separate approval for industries/products/locales/client portal/general CMS/AMS | Owner | No P1 activation |
| CR-17 | Preview fixtures | D | Label SAMPLE/DEMO/PLACEHOLDER, isolate development data, replace or exclude before release | Developer/editor | All preview-only content |

R11 infrastructure suggestions below remain pending; no tier, provider, cost, job interval or numerical recovery policy is selected.

| Decision / gate | Inherited choice | R11 recommendation (not adopted) | Reason / risk | Due / status |
| --- | --- | --- | --- | --- |
| Hosting — D-020/A5-08 | Managed Node-capable Next direction; no vendor | Recommend paid managed Node, Render first validation; Vercel commercial alternative; VPS third | Runtime portability and restricted egress cost; validate self-hosted Next behavior | M00-02; pending |
| DNS — D-020 | Registrar Namecheap; actual DNS host unknown | Retain verified authoritative DNS; Namecheap BasicDNS if current; Cloudflare alternative | Least change; migrations can break mail/DNSSEC | Before domain changes; pending |
| Canonical origin | S2 proposes root HTTPS | Recommend `https://aradun.com`, www redirect | Consistent routes/canonicals; verify existing history | M10-02/M14-02; pending |
| Mailbox — D-018 | `hello@aradun.com` selected | Evaluate Google Workspace; Microsoft/Namecheap/Zoho alternatives | Real inbox/MFA/recovery; per-user cost and account support | Before M06 live mail/M14; pending |
| Transactional email — FR-11-01/A5-08 | Capability required; vendor open | Evaluate Resend versus Postmark | Durable delivery evidence/idempotency; daily quota/reputation risk | M00-02/M06-02; pending |
| MongoDB production hosting/tier/region — D-020 | Local development; production provider unselected; Atlas optional | If Atlas is selected, Dedicated M10 candidate; Flex only budget/recovery exception | Backup/PIT, latency, pooled connections, transfer costs | M00-02/M02-01; pending |
| Network access — A5-08 | Restricted database access/TLS | Host documented outbound ranges or approved private/static egress | Shared ranges are not private identity; Vercel add-on cost | Before runtime connection; pending |
| Identity — D-009/013/A5-01/02 | Supported provider/library + local staff authorization | Provider-managed MFA/recovery preferred; Auth.js valid alternative after evaluation | One adapter; session/revocation/price and route compatibility | Before M03; pending |
| File storage — D-012/A5-05 | Controlled assets; no full media library | Public versioned files; private store as needed; optional S3-compatible or managed media | Minimize subscriptions; private evidence and recovery still required | M08-05/07; pending |
| Monitoring — FR-14-07/D-020 | Error/uptime required | Host/database + one redacted error service + independent probe | Avoid duplicate platforms; free limits/alert delivery must be tested | M01-04; pending |
| Analytics — FR-10-01/02,D-014/021 | GA4 and Search Console direction | Configure those; additional tools off | Consent, event correctness and script performance | M10; configuration/policy pending |
| Backup retention/RPO/RTO — A5-08/09/13 | Backup + tested recovery required | Recommended profile §16; budget alternative explicitly weaker | Provider capability, data-loss tolerance, operator cover and cost | M00 decision; M13 proof; pending |
| CI/deployment — FR-14-09/NFR-009 | GitHub Actions direction; explicit production approval | Single CI deployment mechanism after release authorization | Prevent bypass/races; validate repo plan capabilities | M01-04; pending details |
| Scheduler — ADR-12/A5-08 | Durable bounded outbox required | One 5-minute POST trigger proposed; narrow Vercel GET exception only if approved | Quotas, overlap, authentication and uncertain acceptance | M06-02; pending |
| Retention/consent — D-014 | Data minimization and controlled lifecycle | Approve class-specific policy and restricted suppression store | Deletion/backup consistency, provider storage and jurisdiction | Before public collection; pending |
| Access cover/alerts — D-020 | Incident owner required | Developer primary, owner business lead, nominated backup | Solo availability limits recovery promise | M13/M14; identities/contact details pending |

R10 QA tool/version selection, device/browser/assistive-technology availability, sampling/severity rules and real MongoDB CI setup require implementation review at M01 and later relevant gates. Test specifications are not test execution. R12 paid-discovery prices are absent; no tiers are reconstructed. R13 marketing targets/budgets/outreach/cadences are recommendations, not launched work.

## Recording a future decision

Record existing ID, exact accepted/rejected/revised wording, status, real approval evidence/date, owner, dependent task, affected source/version/paths, validation and rollback implications, and supersedes/superseded-by reference. Significant decisions receive one detailed ADR in this directory and one link from the root index. Do not repurpose ADR-01-20 or FR/page/task IDs. Routine decisions within an authorized task do not require repeated permission; source-changing choices remain gated. No source amendment is authorized by this task.
