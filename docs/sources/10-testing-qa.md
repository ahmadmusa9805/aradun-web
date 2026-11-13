# ARADUN — Testing, QA & Acceptance Criteria

**Filename:** `10-testing-qa.md`  
**Version:** 1.1.0 — final Step 10 consolidation  
**Date:** 25 October 2026  
**Owner/approver:** ARADUN project owner  
**Approval status:** The owner declares Step 10 planning completed and authorizes this final document. Existing source requirements retain their approval qualifications. New QA procedures, severity rules and sampling choices are R10 recommendations for implementation review; they do not resolve open business, provider, permission or publication decisions.  
**Execution status:** Specification only. No application, database, browser, security, performance, deployment or recovery tests were executed for this deliverable. The final audit concerns document consistency only.  
**Boundary:** No application code, production change or Step 11 work is included.

**Controlled update 1.1.0 — 25 October 2026:** Owner-authorized documentation-only amendment limited to the requested architecture, local-development database, solo-maintainer engineering rules and three-theme system where relevant. Unrelated requirements and unresolved gates remain unchanged. Earlier source-register versions/fingerprints and historical approval entries identify the pre-update inputs, not hashes of these revised files; current amended sections govern only these four changes. No implementation or Project Sources replacement is claimed.

## Contents

- [1. Authority, scope and reading instructions](#1-authority-scope-and-reading-instructions)
- [2. Risk-based QA strategy](#2-risk-based-qa-strategy)
- [3. Environments, fixtures and safe execution](#3-environments-fixtures-and-safe-execution)
- [4. Complete page coverage rules](#4-complete-page-coverage-rules)
- [5. Detailed business, reliability and backend cases](#5-detailed-business-reliability-and-backend-cases)
- [6. Authentication, authorization, security and privacy](#6-authentication-authorization-security-and-privacy)
- [7. UI, accessibility, motion and performance](#7-ui-accessibility-motion-and-performance)
- [8. SEO, content and assets](#8-seo-content-and-assets)
- [9. Automation, execution frequency and defect control](#9-automation-execution-frequency-and-defect-control)
- [10. Deployment, recovery and go/no-go](#10-deployment-recovery-and-gono-go)
- [11. Codex handoff and reusable prompts](#11-codex-handoff-and-reusable-prompts)
- [12. Unresolved decisions and source tensions](#12-unresolved-decisions-and-source-tensions)
- [13. Governance and conditional-operation test cases](#13-governance-and-conditional-operation-test-cases)
- [14. Roadmap milestone acceptance and exact task register](#14-roadmap-milestone-acceptance-and-exact-task-register)
- [15. Complete Phase 1 page, CTA and region coverage](#15-complete-phase-1-page-cta-and-region-coverage)
- [16. Complete model and shared-contract verification register](#16-complete-model-and-shared-contract-verification-register)
- [17. Complete requirement traceability matrix](#17-complete-requirement-traceability-matrix)
- [18. Exact catalog and package QA oracle](#18-exact-catalog-and-package-qa-oracle)
- [19. Source fingerprints, final consistency audit and version record](#19-source-fingerprints-final-consistency-audit-and-version-record)

## 1. Authority, scope and reading instructions

Read S1–S9 under the declared filenames in the source register below. All nine supplied files were available. S9 declares Step 9 approved and is therefore included, while its draft copy, asset rights and publication gates remain pending where documented. No unseen earlier Chat 10 decisions are asserted. This file implements the current generation brief and the supplied sources.

| Reference | Authority in this specification |
|---|---|
| S1 — `01-master-requirements.md` v0.2.0 | Business rules, commercial values, 207 functional and 29 business/quality/extension requirements; phase qualifications |
| S2 — `02-pages-sitemap.md` v1.1.0 | Exact page IDs, URLs, access, navigation and 124 Phase 1 planning items |
| S3 — `03-page-sections.md` v1.0.0 | Ordered sections, CTAs, template variations and dashboard UI regions |
| S4 — `04-design-system-wireframes.md` v1.0.0 | Editorial themes, tokens, responsive behavior, motion, accessibility and performance targets |
| S5 — `05-database-architecture.md` v1.0.0 | Models, field contracts, indexes, ownership, transactions, publication and security |
| S6 — `06-project-structure.md` v1.0.0 | Module/file boundaries, route realization, proposed scripts and test locations |
| S7 — `07-development-roadmap.md` v1.0.0 | M00–M14, all 87 task IDs, dependencies, task acceptance and requirement allocation |
| S8 — `08-implementation-guide.md` v1.0.0 | Codex workflow, command safeguards, evidence, implementation/release approvals |
| S9 — `09-content-assets.md` v1.0.0 | Complete public content/SEO/asset register, readiness gates and CMS content mapping |

Later approval supersedes only the decision it explicitly changes. Old statements such as “Step 3 pending” retain historical provenance; S3 supplies the completed section contract. Preserve S1 acceptance wording in the traceability matrix alongside later scoped refinements, rather than silently editing S1. S2 supplied URLs govern; unavailable earlier historical URL lists remain O-03, not a reason to guess alternatives. Source A/B/R/C labels describe provenance, not test outcomes.

Read this document in three layers: the common test procedures; the exact page/model/task registers; and the requirement traceability matrix. Acceptance is their conjunction. A successful shared-template test does not prove every service's content correct, and a route crawl does not prove authorization or business behavior.

### 1.1 Immutable scope facts

| Subject | Preserved baseline / acceptance consequence |
|---|---|
| Platform | Next.js App Router + TypeScript frontend in `aradun/frontend/`; separate Express.js + TypeScript backend in `aradun/backend/`; MongoDB + Mongoose accessed only by Express. One repository, simple feature-based backend modules, no microservices. Local development uses locally installed MongoDB; Atlas is optional later through environment configuration and production database hosting remains unselected. Tailwind CSS + selective shadcn/ui remain. |
| Phase 1 inventory | 122 pages/templates: 91 public, 4 staff authentication, 27 dashboard; plus SYS-01/SYS-02 = 124 planning items |
| Catalog | Eight categories; 57 unique services; 58 memberships because SVC-009 Mobile App UI/UX Design is cross-listed; one canonical record/URL |
| Solutions | Digital Presence; Business Automation; Business Growth; Cloud & Technology; Complete Digital Business |
| Packages | All 15 solution tier positions are Starter/Professional/Enterprise. Two-price service entries retain Starter/Professional; three-price recurring rows retain source ordinal until labels are confirmed |
| Quote | Four-step inquiry; editable unique offer selection; server-created immutable snapshot; no public binding automatic sum, checkout or automatic discount |
| Consultation | Free 15-minute initial screening; manual request with timezone and pending confirmation. Live booking is conditional on D-003 promotion |
| Pipeline | New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost. Spam/duplicate/no-response are inquiry classifications |
| Customer | Explicit conversion after Won; one customer profile embedded in canonical Contact; Won is not Paid; no client account |
| CMS | Articles, testimonials, SEO overrides in MongoDB; catalog/core pages/portfolio source-managed; public FAQ/help required, its editor conditional |
| Themes | Editorial Terracotta default, Muted Slate Blue alternate and Vivid Blue alternate; all light, equal functionality; local browser preference |
| Future boundary | Client portal, project delivery platform, broad CMS/catalog editor/media library, automated campaigns, gateways/billing suite, advanced AI, AMS and multi-organization features remain in their source future phases |

Twelve P1 entries have source C status: TRU-01–TRU-03, STA-002–STA-004, ADM-021–ADM-025 and ADM-027. Plan and assess each. A valid documented baseline can satisfy an underlying capability without its optional screen. A skipped undecided screen is **Blocked**, never silently Passed or removed from the inventory.

## 2. Risk-based QA strategy

Prioritize irreversible or hidden errors: unauthorized disclosure, lost/duplicated inquiries, corrupted relationships, publishing private content, false commercial commitments, and unsafe recovery. Build tests with each feature; M13 consolidates release evidence rather than introducing security at the end.

| QA priority | Risk and scope | Minimum evidence |
|---|---|---|
| Q0 — critical | Authorization/session failures; private publication; durable intake/idempotency; customer/link integrity; secret exposure; recovery and provider reconciliation | Positive, negative, boundary and concurrent/failure tests at server/database boundaries; critical E2E; manual review where automation cannot prove outcome |
| Q1 — high | All required pages, catalog/pricing, CRM/tasks/CMS, search/SEO, usable forms, accessibility, themes and normal operations | Data-driven unit/integration/component coverage as appropriate; route/content sweep; representative manual review; no missing required behavior |
| Q2 — normal | Nonessential visual polish, approved optional decorative effects, minor copy/layout differences | Focused visual/manual checks and meaningful regression where shared behavior is affected |

Q0/Q1/Q2 are QA priorities, not Phase 1/2/3. An optional feature can create Q0 risk if enabled. Do not use percentages of code coverage as a substitute for the required scenarios. R10 proposes no arbitrary coverage percentage or load/latency SLA.

### 2.1 Test levels and responsibility

| Level | Purpose | Execution/ownership |
|---|---|---|
| Source/contract validation | Exact IDs, URLs, memberships, commercial labels, references, section plans and phase exclusions | Developer/Codex automates deterministic checks; owner approves facts/changes |
| Unit/service | Pure validation, permission policy, transitions, money, DTO redaction, retry calculations | Developer/Codex; narrow deterministic tests |
| Component | Labels, focus, menus/dialogs, quote navigation, dirty/conflict/success states | Developer/Codex; Testing Library if selected plus browser tests where layout matters |
| API/transport | Express API inputs, session/origin controls, response shape/status, safe errors | Developer/Codex through actual entry points; direct service tests alone are insufficient |
| Database/integration | Indexes, real transactions, revisions, races, linked integrity, publication and leases | Developer/Codex against isolated real replica-set-capable MongoDB |
| Provider integration | Real selected auth/email sandbox behavior, revocation/recovery, accepted/failed/unknown delivery; optional upload/booking callbacks | Developer plus account owner; separate from deterministic provider doubles |
| End-to-end | Public intake to authorized processing; CMS to public discovery; denied access | Built application, isolated users/data; one complete path plus failure variants |
| Manual | Keyboard/screen reader, touch/zoom, visual composition, content truth, provider console evidence, recovery/UAT | Developer performs technical review; owner accepts business outcomes; specialist review if justified |
| Release/operations | CI enforcement, environment isolation, backup restore, rollback, alerts and controlled live smoke | Developer prepares evidence; owner authorizes exact production release |

Codex may prepare and execute authorized checks, but cannot invent owner acceptance, asset rights, legal approval, real provider results, or human assistive-technology evidence. The solo developer can perform multiple roles; record reviewer identity and limitations honestly.

### 2.2 Tools: required capability versus recommendation

| Status | Tool/capability | Treatment |
|---|---|---|
| Approved architecture | Next.js, TypeScript, Tailwind/shadcn, MongoDB/Mongoose | Test the selected compatible versions; exact versions remain implementation decisions |
| Required verification contracts | Lint, typecheck, content validation, meaningful tests, production build, actual index checks, manual critical-flow review | Required capability; script implementations are not presumed to exist |
| Retained S6–S8 recommendations | Vitest, Testing Library, Playwright, axe | Select compatible versions at M01; record adoption; do not call them installed/approved vendors merely because listed |
| Existing diagnostic direction | Lighthouse, browser network/performance tools, MongoDB query plans | Preserve targets and measurement conditions; no score implies complete conformance |
| R10 optional tooling | Dependency/secret scanner; authenticated security scanner or bounded load generator if useful | Use one suitable tool per need; approve scope/target; record actual command/version; no new paid platform required |

Mock-only persistence cannot prove transactions/unique indexes. Mock auth cannot prove provider callbacks, session invalidation or MFA. Avoid broad snapshots, internal-function call counts and tests that merely repeat declarations. Use small fixtures demonstrating behavior and failure recovery.

## 3. Environments, fixtures and safe execution

Install MongoDB locally and configure a local replica set (a single-member development replica set is sufficient for transaction testing; not a production availability design). A standalone server cannot exercise the approved multi-document transactions. Backend-only environment configuration uses `MONGODB_URI` (nonsecret local example: `mongodb://127.0.0.1:27017/aradun_development?replicaSet=rs0`) and the matching `MONGODB_DB_NAME`; verify the actual configured replica-set name. Bind development MongoDB to loopback and keep test databases isolated. Atlas requires no development account; moving to Atlas later changes URI/credentials/TLS/network configuration, not approved collections, fields, validation, indexes or relationships. Production provider, region, network and recovery choices remain open.

Verify backend HTTP contracts independently and end-to-end through Next.js: missing/expired sessions, record denials, CSRF, exact CORS origins/credentials, body limits, backend failure/timeouts, secret leakage and private-cache isolation. Both applications must pass lint/type/build checks; persistence tests use actual replica-set transactions. No test implementation is generated here.

### 3.1 Environment contract

| Environment | Data and integrations | Safeguards |
|---|---|---|
| Local/unit | Synthetic fixtures; fake clock/randomness/provider ports where meaningful | No production connection or mail; no private content in committed fixtures |
| Integration CI | Local/CI disposable replica set (Atlas is not required); real indexes/transactions | Unique run namespace; explicit test-target allowlist; refuse unknown/live targets; cleanup only owned run data |
| Browser CI/preview | Production build; synthetic accounts/records; controlled recipients/provider adapters | Protected/noindex preview, no production secrets; no shared personal browser session; storage state isolated per role |
| Staging/UAT | Production-like config with separate DB, auth app, mail, jobs, media and analytics | Real sandbox adapter checks; owner business review; no automatic real prospect messages |
| Production smoke | Exact approved artifact; minimal identified verification records | Explicit release/smoke authorization, designated recipients, auditable cleanup; no destructive resets, fuzzing or unbounded load |
| Recovery rehearsal | Isolated restore target, copied permitted recovery artifacts | Scheduler/sending initially disabled; apply suppression; reconcile provider outcomes before any resumption |

Guard destructive test setup by parsed database/host/account/environment allowlists and an explicit test-run marker; a name ending in “test” alone is inadequate. Tests must refuse missing safety configuration. Keep app credentials separate from index/migration/backup credentials. Do not embed production exports in fixtures. Use non-deliverable synthetic addresses for doubles; real sandbox delivery uses owner-controlled allowlisted destinations.

### 3.2 Minimum fixture inventory

| Fixture group | Required variation / oracle |
|---|---|
| Catalog | Exact eight categories/57 service IDs/58 memberships/five solutions; source prices; one cross-listed SVC-009; valid package associations; unknown units; custom/unsure; approved availability variants |
| Staff | Admin, Sales A/B, Editor; active/deactivated; stale role; unprovisioned provider identity; expired/revoked session; actual D-013 permissions once selected |
| CRM | Unassigned/assigned inquiries; one contact with multiple inquiries/deals; shared-email distinct contacts; active/reversed customer; merged record; unrelated records; archived/missing targets |
| Tasks | Open/completed/cancelled, due now, overdue, future, missing optional data, ineligible assignee, IANA zones and DST boundaries |
| Content | Incomplete draft; published snapshot plus different working draft; unpublished/archived item; conflicting/reserved slug; private/withdrawn evidence; source and DB SEO owners; genuine evidence-shaped synthetic fixtures never production proof |
| Reliability | Same submission key/same and changed payloads; lost HTTP response; aborted transaction; outbox pending/retry/expired lease/permanent failure/unknown acceptance; concurrent workers |
| Boundaries | Empty/max/over-limit strings and arrays; invalid enums/types/ObjectIds; safe integers/overflow; malformed URL/origin/operator; long names/copy; Unicode/personal emails |
| Volume | Enough records to cross every page/cursor boundary, repeated sort timestamps, archived/forbidden matches, many history events; larger representative volume agreed under D-020 |
| Time | UTC persisted instants; Asia/Dhaka display; America/New_York DST gap/overlap; expiry just before/at/after cutoff |
| UI/network | All three themes, blocked/corrupt storage, reduced motion, slow/offline/recovered network, failed image, failed DB, session expiry while editing |

Freeze time only in deterministic tests; also verify real clock/expiry behavior in integration. Seed reproducibly, record fixture version, run concurrency with barriers rather than lucky timing, and always reconcile persistent counts after requests finish. Parallel browser workers get independent contexts/accounts where mutations would conflict. Shared race tests deliberately share only their target and keys.

## 4. Complete page coverage rules

The page register later in this document reproduces all 124 S2 Phase 1 IDs and exact URLs. Each has `QA-PAGE-<page-ID>`, an ordered-region recipe, CTA/access data and real S7 task ownership. These are parameterized case instances, not 124 custom test implementations or new application routes.

### 4.1 Universal page procedure — QA-PAGE-BASE

1. Resolve the row's exact URL. For dynamic records use real seeded IDs/slugs, not literal brackets. Test a published/permitted instance, missing instance, invalid identifier, archived/unpublished instance and inaccessible instance as applicable. Catalog category/service slug resolution must distinguish both families on `/services/[slug]`.
2. Check the mapped ordered regions against S3 and exact presentation against S4; retain evidence-dependent slots in the plan while hiding unavailable genuine proof according to approved rules. Check record-specific copy/assets from S9; a correct shared template cannot justify generic duplicated service copy.
3. Follow its primary/secondary CTA and navigation links. Verify destination, current allowed selection context, Back/Edit behavior, correct canonical identity and absence of future/disabled links. Check source header/footer, breadcrumbs, title and one meaningful H1.
4. Apply common states below. Test every mutation's pending/saved/invalid/rejected/conflict outcome where present; state labels must reflect actual persistence.
5. Run content/route validation on every entry. Review all unique templates at representative desktop/mobile widths and all three themes; inspect each of 57 service records for content, price, availability, related links and layout anomalies. Do not infer complete content review from sampling.
6. For private rows invoke the actual server read/mutation directly as unauthenticated, allowed and denied actors. Verify linked context, counts/search and assets under the same policy. UI hiding and noindex are insufficient.
7. For conditional rows record selected/declined/blocked decision. If selected, execute the full recipe. If declined, test absence of public navigation/unauthorized endpoint and verify the documented underlying baseline. Provider-hosted replacement paths require explicit route reconciliation; never silently delete the planned STA entry.

### 4.2 Shared state matrix

| State | Trigger | Acceptance |
|---|---|---|
| Loading | Delay data/submission | Stable geometry, accessible pending status, no old user's data flash; prevent accidental duplicate command without trapping focus |
| Empty | Successful query with zero eligible data | Truthful explanation/action; no fictional rows, testimonials or zero inferred from failed query |
| No match | Apply valid filter with zero matches | Retain query/filter; offer reset; distinguish from no records |
| Validation | Missing/invalid input | Summary and associated field error; move focus appropriately; preserve safe inputs; server enforces same business contract |
| Error | DB/provider/network failure | Redacted message/correlation; actionable safe retry; no false success or silent empty result |
| Denied/expired | Revoke role/session or request other record | No private existence/detail disclosure; safe login/recovery; unsaved sensitive data not persisted insecurely |
| Conflict | Two edits with same revision | One valid update; loser gets explicit conflict and recoverable local input; no silent overwrite |
| Success | Confirm commit or verified provider state | Accurate persistent status/reference and next action; toast is supplementary, not sole essential evidence |
| Missing | Unknown route/content | Useful accessible not-found; no private leak; SYS-01 without invented `/404` route |
| Recoverable/global error | Trigger appropriate boundary | SYS-02 at affected route; complete global fallback, safe retry/navigation; no invented `/error` business route |

### 4.3 Coverage sampling and browser matrix

S6/S8 widths: 320, 375/390, 768, 1024, 1280, 1440 and wide desktop. S4 bands change at 640, 768, 1200 and 1536 CSS pixels; staff drawer below 1024. R10 additionally recommends boundary checks immediately below/at each breakpoint and a 1920px wide example. These are test samples, not new design breakpoints.

R10 browser recommendation: Chromium for each critical CI workflow; Firefox and WebKit for release/regression critical flows; at least one actual mobile Safari and Android Chrome check for touch/viewport/keyboard when devices are available. Record exact installed versions; emulation does not prove actual device behavior. Tool/device unavailability is a verification gap, not Pass. Test all template families in all three themes; use risk-based combinations instead of every possible Cartesian product. Intake/auth/publish flows require both compact and desktop acceptance.

## 5. Detailed business, reliability and backend cases

All cases below start **Not run**. Types: U unit/service; C component; I integration/database; API actual transport; E end-to-end; M manual; SEC security; A accessibility; PERF performance; DOC document/operational review. Use approved fixtures, exact source contracts and case IDs in evidence. Companion task cases later retain every S7 acceptance clause and verification instruction.

### 5.1 Catalog, packages and commercial integrity

| Case / priority / type | Procedure and variants | Required outcome |
|---|---|---|
| QA-CAT-01 / Q1 / U,E,DOC | Validate all category/service/solution rows against Appendix commercial oracle; crawl all corresponding routes; verify IDs, slugs, membership, name and price | 8 categories, 57 unique services, 58 memberships, 5 solutions; 65 category/service URLs resolve through one shared slug family; no collisions or renamed offers |
| QA-CAT-02 / Q0 / U,C,I,E | Select SVC-009 from Mobile then Design; remove/re-add; navigate Back/Edit; submit repeated IDs directly | One canonical service, one selected item and one snapshot entry; no duplicated billable scope; relationships remain to both categories |
| QA-CAT-03 / Q0 / U,I,E | Test two-price Starter/Professional rows, three-position recurring rows, 15 solution tier positions, Custom, setup-plus-monthly, unknown unit and forged currency/amount/tier | Preserve source labels and units; no invented third recurring tier name; Custom has no numeric zero price; invalid package-owner relation rejected; browser amounts never authoritative |
| QA-CAT-04 / Q0 / U,I | Build snapshot from catalog release A; change active catalog to B; inspect old inquiry and ordinary update attempts; test integer boundaries and unsupported currency | Immutable submitted offer identity/price/period/version/time remains A; server money uses safe minor units; overflow/fractional minor units rejected; authorized privacy redaction remains separate |
| QA-CAT-05 / Q1 / C,E,DOC | Review single/multiple service and solution combinations, overlapping scope, one-time plus monthly amounts and custom brief | Selection is a nonbinding inquiry. No blind automatic combined total or discount; no mixed-period sum; overlap reviewed in proposal. Tests do not introduce an unapproved pricing engine |
| QA-CAT-06 / Q1 / U,E,DOC | For every SVC verify available/specialist-led/coming-soon and actual delivery owner; exercise related CTA; leave factual availability unresolved in draft fixture | Only approved states/claims publish; coming-soon does not promise immediate work; unknown facts gate publication without deleting required page plans |
| QA-CAT-07 / Q1 / DOC,E | Compare each package's fit, deliverables, limits, inputs, exclusions, timing, revisions, third-party fees, support and approval record to S9 CR-05/06 | All 15 solution positions and every service price position accounted for; missing scope/billing unit blocks misleading publication; no unlimited/support/tax/discovery-fee invention |
| QA-CAT-08 / Q1 / DOC | Walk a synthetic external proposal/invoice/payment reconciliation using approved templates | Verified entity/currency/terms; distinguish expected/invoiced/received. Preserve 50/50 Starter, 40/30/30 Professional and custom Enterprise guidance with signed-term qualifications; no gateway or automated invoice suite |

No approved automatic pricing calculator exists to test in Phase 1. Calculation QA covers exact money representation, snapshot construction, approved conditional manual ledger amounts and any explicitly selected informational aggregation; it must never invent price addition, taxation, discounts or overlap algorithms. SVC-057 Monthly Video Editing retains ambiguous source billing-unit wording until D-004 is resolved.

### 5.2 Quote, contact, consultation and notifications

| Case / priority / type | Procedure and variants | Required outcome |
|---|---|---|
| QA-IN-01 / Q0 / C,API,E | Quote step 1 select service(s)/solution/package or Custom/Not sure; step 2 required brief, optional budget/timeline; step 3 name/email, optional company/website; step 4 editable review/privacy/submit. Exercise direct CTA context, personal email, Back/Edit and theme change | No login required; all selected IDs preserved and server validated; invalid step focuses useful error; no forced optional fields; one saved inquiry/reference |
| QA-IN-02 / Q0 / API,E | Submit Contact with name/email/subject/message; omit optional phone/company; test malformed/over-limit fields and forged inquiry type | Same Inquiry store with contact type; type-specific requirements enforced; safe errors/input retention; no separate contact-lead database |
| QA-IN-03 / Q0 / API,E,M | Request free 15-minute initial screening with topic, preferred time and IANA zone; test missing/invalid zone, DST ambiguity and mobile input | Manual consultation request stored; acknowledgement says request/pending confirmation, not booked; no fabricated slot or paid-discovery terms |
| QA-IN-04 / Q0 / I,API,E | Same key/same payload sequentially and concurrently; same key/changed validated payload; two genuinely different submissions with same email/message | One inquiry/reference/intended outbox set for a retry; changed payload conflicts; distinct legitimate requests not merged by email/content similarity |
| QA-IN-05 / Q0 / I,API,E | Abort transaction after inquiry insert/before outbox completion; commit then drop response; restart process; retry same key | All-or-nothing durable records; no success/email before commit; lost response recovers original safe receipt; no second inquiry |
| QA-IN-06 / Q0 / API,E,SEC | Load `/thank-you` directly; alter/expire/replay receipt; guess human reference; refresh valid confirmation | No private read/existing-customer disclosure; valid receipt minimal and short-lived; direct visit is not saved conversion; no sensitive URL/log data |
| QA-IN-07 / Q1 / U,I,E | Supply allowed UTM/referrer/landing hints, absent/blocked referrer, huge/malicious URL/query data | Bounded sanitized attribution retained with Unknown fallback; tokens/fragments/unapproved parameters removed; valid inquiry not blocked by absent attribution; no PII analytics |
| QA-IN-08 / Q0 / I,API,E | Email provider fails after commit; transient/permanent/unknown outcomes; retry; inject arbitrary recipients/headers/HTML | Inquiry remains saved; one authoritative acknowledgement and staff alert path across FR-02/FR-08 aliases; recipients/templates controlled; failure/reconciliation visible; no relay or private notes in email |
| QA-IN-09 / Q0 / I,SEC | Two workers claim same event; kill claimant; expire lease; old worker returns late; exhaust approved retries | Atomic lease/fencing, bounded attempts/backoff, terminal/unknown state visible; old worker cannot overwrite new result; no external send inside transaction; no exactly-once email claim |
| QA-IN-10 / Q0 / API,E,A | Rapid repeated clicks, slow/offline DB, timeout, rate limit and recovery; retry valid retained input | Accessible pending/errors; no fake success; safe retry/idempotency; actual committed result distinct from unsaved failure; no permanent focus trap |
| QA-IN-11 / Q1 / I,M | Verify real sandbox acknowledgement/staff alert, sender authentication and controlled deliverability; inspect provider identifiers/bounce/failure evidence | Acceptance by provider distinguished from mailbox delivery; working notification destination and owner; hello@aradun.com send/receive verified before public use |
| QA-BOOK-01 / Q0 / I,API,E | **Only if D-003 promotes live mode:** race same slot, OAuth/token failure, external link without verified callback, cancel/reschedule, duplicate/out-of-order/forged callback | Only provider-confirmed reservations labeled booked; CRM linkage and reconciliation verified; authenticated provider-specific callbacks/replay controls; manual truthful fallback; EXP-031 not silently promoted |

### 5.3 CRM, pipeline, conversion, customers and manual tasks

| Case / priority / type | Procedure and variants | Required outcome |
|---|---|---|
| QA-CRM-01 / Q0 / I,API,E | Review new inquiry; link existing/create contact; two reviewers act concurrently; distinct people share email; public submitter changes name/email | One reviewed link for same inquiry; no automatic merge/public overwrite; original submitted identity remains; contact email not unique |
| QA-CRM-02 / Q0 / I,API,E | Assign/reassign/unassign inquiry; attempt inactive/ineligible assignee, stale revision and forbidden reassignment; deactivate owner | Current record/actor policy enforced; activity/audit; unassigned/orphaned work visible to Admin; conditional assignment email only if selected |
| QA-CRM-03 / Q0 / U,I,E | Create opportunity idempotently; exercise each fixed stage and approved edges; backward/reopen with/without reason; classify inquiry spam/duplicate/no-response | Exact seven stages retained; owner/value/history persisted; unsupported transitions rejected; classifications do not replace stage; Won/Lost explicit, not payment |
| QA-CRM-04 / Q0 / I,API,E | Convert non-Won (deny), Won (explicit confirmation), retry and concurrent conversions; two won opportunities share canonical Contact | One embedded customer profile and same Contact ObjectId; retained inquiry/deal history and conversion provenance; no invoice/payment/project/client-login side effects |
| QA-CRM-05 / Q0 / I,API,M | Reopen won deal; request Admin reversal with other active engagements; race correction; archive original inquiry | No automatic customer deletion; approved correction policy checks other obligations and records reason/history; no silent loss of customer identity |
| QA-CRM-06 / Q0 / I,API,M | Admin merge preview with affected graph; invalid survivor/cycle, conflicting profiles, concurrent edits and graph beyond approved bound | No automatic/bulk destructive merge; references resolve; original submitter/history preserved; unsafe one-shot operation refused; resumable procedure only if explicitly selected |
| QA-CRM-07 / Q1 / C,I,E | Create manual task for permitted inquiry/contact/opportunity; complete/cancel/reopen/reassign; stale revision; target inaccessible; target archived | Target and assignee permissions checked independently; actual due/status/history stored; no automatic campaign, stage-triggered task or external reminder sequence |
| QA-CRM-08 / Q1 / U,I,C | Due instants before/at/after current time; UTC vs Asia/Dhaka/New York; DST gap/overlap; completed task with old due date | Correct due/overdue predicates and explicit timezone; completed/cancelled not falsely overdue; no silent local-to-UTC ambiguity |
| QA-CRM-09 / Q0 / I,API,E | Add/edit/redact note under approved policy; paginate activities; attempt audit modification; linked record outside actor scope | Business Activity and restricted AuditEvent separated; actor/time/event identity retained; no permission leak or unbounded history; corrections preserve provenance |
| QA-CRM-10 / Q0 / I,API,E | Filter/sort/search lists, counts, customer detail and next follow-up across Sales A/B; ties across page boundaries; failed DB | Authorization before pagination/counts; stable cursor order; customerId resolves canonical Contact with active profile; inquiry/opportunity/customer counts distinct; failure not zero; estimated value not revenue |

### 5.4 CMS, publishing, portfolio, metadata and search

| Case / priority / type | Procedure and variants | Required outcome |
|---|---|---|
| QA-CMS-01 / Q0 / I,E | Under selected A5-04 policy create incomplete draft; publish complete version A; edit/save version B; inspect public page then private preview | Draft B save never alters live A; preview uses real template under auth/noindex/private caching; public sees only eligible published snapshot |
| QA-CMS-02 / Q0 / I,API,E | Concurrent draft/publish/unpublish; stale revision; reserved/duplicate slug; archive/restore; approved slug rename | Stale writer conflicts safely; unique slug enforced by DB; archived first unpublished; restore not auto-publish; rename requires reviewed redirects/links/canonical/sitemap migration |
| QA-CMS-03 / Q0 / I,API,E,SEC | Publish then unpublish/withdraw evidence; immediately query URL/search/sitemap/cards/metadata and warm server paths | All fresh public reads share authoritative publication predicate; drafts/withdrawn content ineligible even with stale downstream index; no public shared staff/draft cache |
| QA-CMS-04 / Q0 / U,I,SEC,E | Submit scripts, unsafe link protocols, iframe/HTML/runtime MDX, over-limit body/tags, fake assets and private references | Approved structured blocks only; safe escaped render; exact S5 limits; no executable payload; complete publish validation beyond permissive draft save |
| QA-CMS-05 / Q0 / I,E,DOC | Test testimonial private/published/hidden, absent/revoked permission, isDemo and private proof fields | Only genuine reviewed proof publishes; evidence never public; withdrawal removes all displays; no public review-submission platform introduced |
| QA-CMS-06 / Q1 / DOC,E | Source-manage portfolio/case study; review Client Work/Internal Product/Concept-Demo classification, permissions, contribution, screenshots/results; empty/no-match | Correct exact work routes and seven-region case recipe; truthful public demos allowed; fake client/results forbidden; no invented required project count or P1 portfolio dashboard editor |
| QA-CMS-07 / Q0 / I,API,E | Edit source-backed SEO, article instance metadata, remove override; attempt template-ID ambiguity, external canonical and private noindex override | Source page → SeoOverride; article → own draft/live metadata; optional FAQ → own snapshot; no dual master; default fallback; restricted indexing/canonical review; draft SEO save not publish |
| QA-CMS-08 / Q1 / U,E,DOC | Source FAQ short anchors/help slug/detail/search; broken relation; optional editor selected migration | Required FAQ/help works without editor; no duplicated article body/canonical; one writable source; conditional FAQ cutover verified before source master disabled |
| QA-CMS-09 / Q0 / I,SEC,E | Controlled asset missing/private/pending rights; if uploads selected test forged MIME, active content, oversize, unauthorized ID, expired URL, remote URL/SSRF and failure cleanup | Controlled references baseline; private draft/evidence never public; pending rights block publish; actual upload limits/scanner chosen first; no public intake attachment or full media manager |
| QA-SEARCH-01 / Q1 / U,I,API,E | Search services, solutions, published articles/resources and FAQ/help; whitespace, Unicode, no query/results, >200 chars, type filter, ties and bounded pagination | All four required types; deterministic order; R5 default 20/max50 and capped window retained subject to selected defaults; no fabricated exact count; recoverable error/no-match |
| QA-SEARCH-02 / Q0 / I,API,SEC | Query exact secret marker in draft/withdrawn/CRM/private evidence; forge filters/operators/cursor; repeat after unpublish | No public leaks or unbounded regex/query; publication rechecked; private staff search separately scoped and absent from GA4 |

### 5.5 Backend contract and data-integrity procedures

Apply `QA-DB-<model-name>` to every model in the model register. This is one parameterized contract suite per model, expanded with meaningful shared invariants rather than a separate fragile test for every field. Source S5 §§6–7 is the exact field/default/index oracle. The register preserves complete field/index manifests for coverage; do not substitute this summary for full S5 validation details.

| Case / priority / type | Procedure | Acceptance |
|---|---|---|
| QA-DB-01 / Q0 / U,I | For each required/optional/conditional field: valid minimum/maximum, omission/null, wrong type, over-limit, invalid enum; for conditional fields test trigger on/off; verify server-generated/default values | Requiredness/defaults/constraints match S5; optional absence not fabricated; nested schemas validated; Zod transport and Mongoose persistence both enforce applicable invariants |
| QA-DB-02 / Q0 / I | Inspect real indexes; insert duplicate unique keys concurrently; multiple absent optional keys; same prospect email; wrong reference/missing/archived/forbidden target | Exact compound/partial/unique/TTL definitions verified; unique is DB constraint, not validation flag; Contact email allowed duplicates; application enforces references and scope |
| QA-DB-03 / Q0 / I | Fail each multi-record transaction boundary; two writers use same revision; retry transient failure; check resulting histories/outbox/links | No partial invariant; revision compare-and-set; supported sequential transaction operations; no external send inside DB retry; losing writer gets typed conflict |
| QA-DB-04 / Q1 / I,API,PERF | All allowlisted filters/sorts combined; first/last/empty/cursor-tie/deep-page requests; access counts; malicious cursor/query; representative query explain | Bounded projection/join/pagination; default25/max100 staff retained as R5 defaults unless reviewed change; no unbounded skip/history/N+1; queries use expected indexes or justified bounded scans |
| QA-DB-05 / Q0 / I,SEC | Expired session/rate bucket before TTL cleanup; simultaneous limiter increments; failed/recovered connection/pool saturation/timeouts | Expiry enforced in logic, not delayed TTL; shared counters; bounded pools/timeouts; honest error, safe retry, no per-request connection leak |
| QA-DB-06 / Q0 / U,I,API | Read raw model into DTO through supported transport; invalid ObjectId; missing target; validation/denied/not-found/conflict/rate/dependency/unexpected failures | Safe explicit serialization of IDs/dates; minimum fields; typed errors; safe HTTP semantics where applicable; no stack/query/PII/token exposure |
| QA-DB-07 / Q0 / I,DOC | Controlled migration dry run, duplicates before index build, interruption/restart, old/new app compatibility; inspect build/start hooks | Explicit reviewed bounded/idempotent migration; no destructive startup sync/index drop; compatible rollback; schemaVersion handled; no production mutation during build |
| QA-API-01 / Q0 / API,SEC | Invoke each selected Express API endpoint directly; missing/altered session, role, origin, command key/revision, IDs, unknown fields and wrong method/content shape | Authorization and validation repeated at actual entry; no state-changing GET baseline; first-party API and callback/scheduler contracts distinct; business logic centralized |

For concurrency tests record number of contenders, keys/revisions, per-request outcome, final record counts and audit/activity/outbox state. Success is invariant preservation, not simply “one request returned 200.” Multi-document rollback tests need a real replica set; memory-only schema tests are insufficient.

## 6. Authentication, authorization, security and privacy

D-013/A5-02 defines the final permission matrix; S5's Admin/Sales/Editor table is a recommendation until selected. Before that choice, policy-dependent cases are Blocked. Test each permitted and denied operation, not just each role's landing page. No P1 tenant model or future client portal is introduced to satisfy “cross-user access.”

| Case / priority / type | Procedure and variants | Required outcome |
|---|---|---|
| QA-AUTH-01 / Q0 / API,I,E,M | Real selected provider login/logout; wrong issuer/subject/unprovisioned identity; forged email; local/remote redirect; expired/revoked session | Verified provider identity plus active local StaffUser; email alone never grants access; safe local return; logout/revocation work; no public staff signup |
| QA-AUTH-02 / Q0 / I,E,SEC | Admin, Sales A/B, Editor and anonymous against every sensitive read/write/list/count/search/preview/file/job; guessed IDs and linked unrelated children | Approved operation and record/field scope enforced server-side; possession of parent/task does not grant all history; Editor denied CRM/finance; no cross-user inference |
| QA-AUTH-03 / Q0 / I,E | Change role/deactivate while browser holds session; expire mid-edit; own-account privilege injection; last-Admin removal; provisioning duplicate subject | Immediate local denial via active status/accessVersion; no self-promotion; last-admin safeguard; one identity master; auditable offboarding/reassignment |
| QA-AUTH-04 / Q0 / API,E,M | Selected MFA enrollment/challenge/recovery; invalid/expired/replayed recovery; sensitive operation without fresh auth; generic unknown-account response | Chosen policy enforced including privileged access; no homemade password/OTP; safe recovery and rate limits; exact provider-route reconciliation recorded |
| QA-SEC-01 / Q0 / API,I | NoSQL operator objects, unexpected keys, prototype keys, user filters/sorts/aggregation fragments; update bypass attempts | Strict allowlists; no raw body spread into DB filters/updates; full cross-field validation; no unauthorized write/read |
| QA-SEC-02 / Q0 / U,I,E | Stored/reflected script markers in names/notes/content/query; javascript/data URLs; malicious metadata/asset references | Safe escaping/rendering/protocol allowlist; no runtime execution; CSP appropriate to actual selected integrations without global weakening for theme bootstrap |
| QA-SEC-03 / Q0 / API,E | Cross-origin cookie-auth mutation, missing/invalid CSRF protection where applicable, forged proxy/origin, safe/unsafe methods | Framework/provider protections verified; cookie-auth handlers receive additional protection when needed; no reliance on SameSite alone; no state-changing GET baseline |
| QA-SEC-04 / Q0 / API,I,E | Concurrent multi-instance rate/spam attempts, proxy-client identification, legitimate retries, challenge accessibility if enabled | Approved shared thresholds enforced, bounded payload/time; identifier retention chosen; recoverable real-user flow; no silent discarded inquiry called success |
| QA-SEC-05 / Q0 / DOC,SEC | Inspect client bundles/public env/source maps/logs/error/analytics and preview CI permissions; rotation/revocation drill under selected runbook | No secret under NEXT_PUBLIC_ or exposed client data; separated environment/scoped keys; untrusted PR gets no privileged secrets; safe diagnostic evidence |
| QA-SEC-06 / Q0 / SEC,DOC | Verify HTTPS/mixed content, cookies, trusted origins, redirect/canonical host, framing/MIME/referrer/CSP policy and selected MongoDB access | Selected headers compatible with features; least privilege and TLS; no arbitrary Host canonical/open redirect; no public private cache or telemetry |
| QA-SEC-07 / Q0 / I,SEC | Audit sensitive mutation success/failure, unauthorized attempt, note correction; attempt normal-role audit update/delete | Actor/action/time/target/outcome/correlation recorded as appropriate; successful state-change audit coordinated with commit; failure diagnostics survive rollback via safe operational channel; no secret/full-message audit payload |
| QA-SEC-08 / Q0 / DOC,SEC | Run actual selected dependency/secret tooling on pinned lockfile/build; triage exposure, severity, exploitability, fix and retest | No unresolved launch-blocking exposure; no blind force-upgrade or unsupported “zero vulnerabilities” claim; scanner coverage/limitations recorded |
| QA-SEC-09 / Q0 / API,I | If any webhook exists, test provider-auth/signature raw-body rules, timestamp/replay, duplicate/out-of-order event and key rotation | Security begins at first callback even if broad integration UI is future; no forged mutation; dedupe and reconciliation; selected provider protocol, not invented generic signature |
| QA-PRIV-01 / Q0 / API,E,DOC | Required notice acknowledgement where selected, unchecked optional marketing permission, outdated notice, consent withdrawal, blocked analytics | Notice version/context accurate; marketing separate; actual data practices match policy; tracking/embeds honor chosen consent; no invented jurisdiction or retention number |
| QA-PRIV-02 / Q0 / I,DOC | Synthetic verified correction/erasure request spanning inquiry snapshots, contacts, opportunities, notes, outbox, evidence, provider copies and backup process | Archive not mistaken for erasure; permitted history/obligations preserved; queued ineligible mail suppressed; restricted deletion ledger/restoration procedure; no excessive PII evidence |
| QA-PRIV-03 / Q0 / E,SEC | Capture all analytics payloads/URLs on public form success/failure, auth/private search, preview and receipt routes | No names/emails/phones/bodies/private IDs/tokens; sanitized UTMs; no private-route tracking; analytics failure cannot block intake |

Test security only against the authorized environment. Use bounded representative payloads, not uncontrolled attacks against production or providers. Scanner output supplements architectural/manual review; it cannot prove all authorization paths correct.

## 7. UI, accessibility, motion and performance

**Vivid Blue contrast finding — 25 October 2026:** Approved token values are retained. White on `#0066FF` is 4.83:1; white on hover `#0057DB` is 6.20:1 and active `#0047B3` is 8.23:1 (normal-text pass). `#0066FF` normal text on page `#F7F4EE` is **4.40:1**, on subtle surface `#EFEAE2` **4.04:1**, and on brand-soft/selection `#EAF1FF` **4.26:1**: these fail 4.5:1, although each exceeds 3:1 for qualifying large text/non-text indicators. Do not use those failing combinations for normal-size links or selected labels. Necessary correction remains an explicit component-use decision: recommend existing charcoal text plus underline/blue indicator, or owner-approved use of existing `#0057DB` for those text roles (5.65:1, 5.18:1, 5.47:1 respectively). No token value is changed and this recommendation is not silently adopted. Charcoal on `#EAF1FF` is 14.40:1; inverse link `#BFD7FF` on charcoal is 11.17:1. Test real component backgrounds, focus gaps, states and opacity before release; underlining alone does not fix insufficient text/background contrast.

### 7.1 Visual and motion cases

| Case / priority / type | Procedure | Acceptance |
|---|---|---|
| QA-UI-01 / Q1 / C,E,M | Compare all unique templates/components to S4 token manifest in all three themes; long labels/content, empty and error states | Neutral page #F7F4EE, text #20201E; brand #AF432D / #3F617B / #0066FF; actual complete S4 tokens, type/spacing/radius; neutral service icons; no blue glow/blur or new redesign |
| QA-UI-02 / Q0 / C,E,M | No stored theme, existing saved terracotta/slate-blue preferences, new vivid-blue, invalid/blocked storage; refresh/navigation; change Appearance mid-quote, open dialog/filter and slow/failed alternate image | Terracotta default, Muted Slate Blue and Vivid Blue equal function; no reload/flash/hydration mismatch, focus/input/step/filter/price reset; equal asset dimensions; current valid asset remains if alternate fails; no backend preference write |
| QA-UI-03 / Q1 / E,A,M | All source widths and breakpoint boundaries, 200% text resize, 400% zoom, text spacing, coarse pointer/mobile keyboard | No page-level horizontal overflow or clipped important labels/prices; meaningful local table scroll labeled; compact navigation preserves Contact; source reading order; tap targets project default ≥44×44 where specified |
| QA-MOTION-01 / Q1 / C,E,M | CSS controls, Motion entrance/exit/quote steps; rapid interruption, repeated navigation, JS failure and reduced-motion change | Immediate focus/validation/business actions; content readable before JS; no hidden CTA or forced wait; reduced transform/layout movement disabled; nonessential fades explicitly bounded |
| QA-MOTION-02 / Q1 / E,PERF,M | If GSAP justified: mount/unmount/re-enter, breakpoint/reduced-motion changes, hidden tab, offscreen, theme switch and asset failure | Isolated owner; cleanup listeners/timers/observers/timeline; compact/reduced static; no scroll hijack or scene replay on theme change; zero GSAP payload on unused routes. Approved static fallback is acceptable |
| QA-MOTION-03 / Q1 / DOC,PERF | Inspect owner/property map and route bundles for CSS/Motion/GSAP | One writer per transform/opacity; no global GSAP; no excessive blur/layout animation/per-frame React updates; source duration/distance/stagger/parallax limits preserved |

S4 motion targets: focus/urgent feedback 0ms; fast 180ms; UI 220ms (180ms compact); selected entrance 480ms (300ms compact); feature 650ms, disabled L3 compact; stagger 70ms, ≤6 items and total delay ≤350ms; distance16px, hero art≤24px, compact8px/reduced0; hover −2px/scale≤1.02; parallax≤12px desktop only; theme0–120ms color, immediate reduced. These are retained R4 design specifications, not new measured outcomes.

### 7.2 Accessibility acceptance matrix

| Case / type | Required manual/automated checks | Acceptance / evidence |
|---|---|---|
| QA-A11Y-01 / A,E,M | Landmarks/skip link, one H1 and logical headings; accessible names; informative/decorative alt; captions/transcripts for relevant media; no essential text only in art | Meaning preserved without image/motion/color; heading/landmark review and screen-reader reading order recorded |
| QA-A11Y-02 / A,E,M | Keyboard-only menu/Appearance/quote/FAQ/dialog/table/pipeline/editor; Escape; focus return; route changes; sticky overlays | No trap or obscured focus; visible immediate focus; no hover/drag/swipe-only operation; collapsed content not focusable |
| QA-A11Y-03 / A,C,E,M | Labels/help/required text, validation summary, per-field errors, pending/success/conflict announcements; password-manager/paste behavior with selected auth | Accessible error association; preserved safe input; understandable status without duplicate announcements; no cognitive puzzle as sole auth mechanism |
| QA-A11Y-04 / A,M | All three themes × normal/hover/focus/selected/error/disabled/context backgrounds; forced colors; 200%/400% zoom and text-spacing overrides | Normal text≥4.5:1, qualifying large text≥3:1, necessary non-text indicators≥3:1; actual rendered pairings checked; color not sole meaning |
| QA-A11Y-05 / A,E,M | Axe if selected on representative templates and interactive states; screen reader on quote, login, CRM task and article editor; mobile touch | Resolve blocking defects; document tool/version/AT/browser/action/outcome; automated clean result never labeled WCAG certification |

Use WCAG 2.2 AA-oriented source goals. The project 44px target recommendation is not a claim that every narrow exception fails AA; assess S4's documented exceptions and actual applicable criteria. R10 recommends NVDA with a supported Windows browser and VoiceOver/Safari if available; record substitutes or missing coverage. Manual evidence must be actually performed, not generated from a screenshot.

### 7.3 Performance targets: preserve provenance

| Measure | Source target/status | Verification and release treatment |
|---|---|---|
| LCP | ≤2.5 seconds, p75 field | Prelaunch production-build lab proxy; postlaunch representative field cohorts when enough data exists |
| INP | ≤200ms, p75 field | Exercise real interaction paths; do not equate Lighthouse TBT or smoke latency to field INP |
| CLS | ≤0.1, p75 field | Lab shift inspection plus later field data; inspect images/fonts/theme/dynamic content |
| Lighthouse Performance | 90+ aspirational source target | Repeated mobile/desktop production-build runs; retain failures and variation; no guarantee |
| Lighthouse Accessibility | 95+ diagnostic source target | Automated score plus mandatory manual review; no score excuses a blocking barrier |
| Hero transfer | ≤250KB compact / ≤450KB large, provisional S4 | Validate actual optimized variants; U4-06/D-020 final budget gate |
| Initial fonts | ≤150KB, provisional S4 | Actual transfer/subsetting/style variants; font fallback and layout shift |
| Incremental motion | ≤60KB compressed on routes using motion, provisional S4 | Actual bundle delta; zero GSAP where unused |
| Initial marketing transfer | ≤1MB before lazy below-fold/optional third-party work, provisional S4 | Count framework/scripts/styles/fonts/images under documented measurement conditions |
| API/search/DB latency, volume, concurrency, RPO/RTO | No approved numeric thresholds supplied | D-020/A5-08 decision before capacity/recovery signoff; do not invent 100ms, 1s, throughput or availability promises |

`QA-PERF-01` (Q1, PERF): Measure Home, service, pricing, quote, article, search, staff list and editor in actual production build. Record commit/build, browser/tool versions, viewport, CPU/network profile, cache condition, sample count and all results. R10 recommends three repeat runs per chosen condition with median and range; this is a sampling recommendation, not a replacement field metric. Inspect critical image priority, responsive sizes, reserved dimensions, optimized format, lazy below-fold media, fonts, client hydration and third-party cost. Theme switching must not eagerly download all large heroes.

`QA-PERF-02` (Q1, PERF,I): Use agreed representative synthetic volume and bounded request concurrency; explain major list/search/history queries; record rows examined/returned, index use, query duration, pool utilization, timeouts and failure recovery. Test tie-boundary pagination and permission filters. Agree dataset/load/latency budgets before capacity Pass. Do not blindly require an index for a tiny bounded source scan or add one per field.

`QA-PERF-03` (Q1, PERF,E): Slow network/CPU, provider/DB outage, image failure and analytics unavailable. Public static reading stays useful; dynamic failures are truthful; critical intake fails safely if persistence unavailable; optional backend/scripts/motion cannot block input. Remove decorative cost before proposing weaker goals. Record measured exceptions with owner and remediation; no fabricated field pass.

## 8. SEO, content and assets

| Case / priority / type | Procedure | Acceptance |
|---|---|---|
| QA-SEO-01 / Q1 / U,E,DOC | Crawl each eligible page and real dynamic instance; inspect rendered title/description/H1/canonical/OG and clean query variants | Unique accurate instance metadata, same-origin reviewed canonical, exact paths; no arbitrary Host origin, literal bracket SEO or all services canonicalized to category |
| QA-SEO-02 / Q0 / I,E,SEC | Compare XML sitemap/robots/noindex with authoritative publication, conditional flags, auth/preview/search/confirmation/quote routes | `/get-a-quote`, `/thank-you`, `/search`, auth/dashboard/private preview excluded/noindex; drafts/withdrawn missing; required public pages not accidentally globally noindex; robots not access control |
| QA-SEO-03 / Q1 / U,E,DOC | Parse structured data and compare visible factual content; Organization/Service/Article/BreadcrumbList as appropriate | Real names/authors/dates; no invented office/ratings/certification; schema valid for actual use. Verify current search-engine eligibility during implementation before claiming rich-result support |
| QA-SEO-04 / Q1 / E,DOC | Crawl header/footer/breadcrumbs/related links; approved redirect chain/old slug, missing/removed/unknown case; query filters/pagination | Correct destinations/status/canonical behavior, no loops/future links; useful 404; preserve approved redirect registry; no fake soft-404 for missing content |
| QA-CONTENT-01 / Q1 / DOC,E | Every service's distinct fit/scope/dependencies/process/FAQ; every solution/tier; company facts; article/help/case evidence; S9 CR-01–17 | Approved truthful substantive content; draft prose not automatically approved; no made-up author/date/result or mandatory fictional count; all source pages remain in build scope |
| QA-CONTENT-02 / Q0 / U,DOC,E | Scan production seed/source/bundles/CMS publication for SAMPLE/DEMO/PLACEHOLDER markers and structured readiness flags; manually inspect claims | Unapproved placeholder claims excluded; genuine concept portfolio remains explicitly labeled; plain text scanning alone insufficient; no arbitrary deletion of useful honest demos |
| QA-ASSET-01 / Q1 / DOC,E | Each S9 asset key: actual file, creator/license/permission, allowed use/attribution/expiry, private rights evidence, dimensions/crop, responsive output, alt/captions | Rights status verified before publication; private proof not bundled; no technology-logo partnership implication; broken asset does not hide meaning; final production vectors inspected |
| QA-INTL-01 / Q1 / DOC,E | English/USD copy, dates/timezones, long names/non-ASCII input, international contact forms and country-neutral examples | Explicit billing unit/currency; no inferred exchange conversion/tax/local offices/24-hour support; no unapproved country/industry/language routes or hreflang; future locale readiness is content separation only |
| QA-MEASURE-01 / Q0 / E,M | GA4 absent/allowed/denied consent; start/click/failed save/saved inquiry/retry/direct thank-you; Search Console actual canonical property | One controlled integration; only saved event counted as defined, no PII; request distinct from booking; real property verification/sitemap evidence; no ranking guarantee |

S9 title45–65 and description120–160 characters are editorial aids, not hard acceptance limits. S5 storage safety title≤200/description≤500 remains authoritative. Alt≤500 and empty only for decorative images. Preserve descriptive meaningful long service names. International publication starts English/USD; localization/multi-currency remain future scope.

Portfolio/case management in P1 means validated source records and reviewed deployment, not an invented CMS page. Initial articles/help/case instances require owner selection and real readiness; the fixed template count does not specify a mandatory number of content instances. The S9 asset register describes required assets, not proof files already exist.

## 9. Automation, execution frequency and defect control

### 9.1 Practical execution cadence

| Trigger | Required verification |
|---|---|
| During a small implementation checkpoint | Relevant unit/component/contract tests; targeted integration when persistence/auth changes; no full browser suite for a harmless isolated text correction |
| Coherent task review | Applicable task case + source AC, lint/type/content checks, relevant integration/E2E/a11y, production build as appropriate; actual evidence |
| Pull request / candidate merge | Required CI lint/type/format/source/unit/build; affected real-DB integration and critical browser checks; security findings reviewed; untrusted PR secrets blocked |
| Shared auth, publication, intake or theme change | Broaden to affected cross-module flows, denied access/current visibility/state preservation; all relevant role/theme combinations |
| Milestone | Milestone command bundle, all task acceptance, relevant manual review and regression; owner review; no inherited unresolved critical blocker |
| Release candidate | Full selected P1 regression, all route/content instances, real-provider staging, security/privacy/a11y/performance, restore/rollback and UAT evidence |
| Deployment | Controlled actual-release smoke and alert/job/mail verification; no production destructive suite |
| Postlaunch/maintenance | Rerun affected regression after code/content/provider/security change; monitored operating window and recurring intervals owner-selected under M14-04 |

R10 optional: schedule nightly full browser/integration suites only if runtime/flakiness justifies them; no automation is created here. CI independent jobs may parallelize with isolated data. Browser retries can collect diagnostics but cannot turn a flaky critical failure into an unqualified Pass. Fix or quarantine with owner/expiry and replacement evidence; a quarantined critical case is a release gap.

### 9.2 Commands and bundles

Commands below are **conditional instructions**, copied from S6/S8 contracts. First inspect selected package manager, lockfile, `package.json`, environment and scripts. They assume pnpm was chosen and these scripts exist. If npm was chosen, document equivalent invocations once. Missing scripts are Not run/Blocked; never invent output. Setup within M01 may implement its authorized scripts. Mutation commands are never hidden in verification bundles.

| Bundle | Mandatory commands when corresponding checks exist and apply | Separate evidence |
|---|---|---|
| V-DOC | No application command required for a documentation-only task | Source IDs/hashes/decisions and owner review; use read-only diff/registry checks |
| V-BASE | `pnpm run lint`; `pnpm run typecheck`; `pnpm run format:check`; `pnpm run validate:content`; `pnpm run test`; `pnpm run build` | Read actual scripts; during foundation creation absent later-feature checks are recorded with due task, not fabricated |
| V-DATA | V-BASE + `pnpm run test:integration`; `pnpm run db:indexes:check` | Real isolated Mongo target/index/race/rollback evidence; affected transport/security checks |
| V-UI | V-BASE + `pnpm run test:components`; `pnpm run test:e2e`; `pnpm run test:a11y` | All-three-theme responsive/keyboard/screen-reader review; targeted specs under scripts' documented filter syntax |
| V-FLOW | V-DATA + V-UI | Actual provider sandbox checks where relevant; full permitted/denied critical paths |
| V-PERF | V-UI + `pnpm run analyze` | Actual selected Lighthouse/load/query-plan commands, versions and raw results; do not presume `test:performance` exists |
| V-RELEASE | Union V-FLOW + V-PERF, once per release candidate unless changes require rerun | Selected dependency/secret/security tooling; UAT; restore/rollback/config/notification evidence; `pnpm run check` only if its actual aggregate coverage is verified |
| V-LIVE | Approved read-only deployed checks plus controlled smoke procedure | No generic local `pnpm` command proves deployment; record host/URL/release/job/mail/provider results; actual provider commands depend on selection |

Apply only meaningful checks at task level; union requirements at milestone level. The task register identifies bundle and exact feature procedure. A task's pure documentary/provider decision portion uses V-DOC; it does not require a nonexistent app. Never run `db:indexes:apply`, `db:migrate`, `db:seed:dev` or `staff:bootstrap` as verification; they are separately reviewed operations with target/backup/input/recovery safeguards. No invented `test:security` command. Security tooling is selected and its actual invocation recorded before execution. Build must not send mail, provision staff or mutate production data.

### 9.3 Stable naming and case template

Keep S6 paths: colocated `.test.ts(x)` for validation/services/components; `backend/tests/integration/{intake,crm,content,access,notifications,database}.test.ts`; browser `.spec.ts` under `frontend/tests/e2e/`; focused `backend/tests/security/` and `frontend/tests/performance/`. No extra testing service or repository required.

IDs in this document are QA identifiers, not new requirements or roadmap tasks: `QA-PAGE-PUB-S009`, `QA-IN-04`, `QA-DB-Inquiry`, `QA-T-M06-03`, `QA-R-FR-02-07`. Test names describe observable behavior, e.g. `[QA-IN-04][FR-02-07][M06-03] same-key parallel retries return one saved reference`. A single test may satisfy multiple contracts; report that mapping rather than duplicating tests.

```text
Case ID / title:
Requirement IDs / page IDs / roadmap task:
Priority / type / source section / selected gate:
Preconditions: approved policy, build, environment, role, fixture version
Inputs: minimal synthetic fixture and relevant boundary/negative variants
Steps: action at actual interface, fault/concurrency injection, read-back
Expected: exact visible result AND persisted/audit/outbox/privacy invariant
Actual result: Not run until executed
Evidence: command, timestamp, commit/build, seed, report/trace/screenshot
Status: Not run | Blocked | Passed | Failed | Not applicable—approved
Defect/decision ID, owner, retest and regression scope:
```

Concrete execution example: QA-IN-04 starts with zero matching records in an isolated replica set. Submit two concurrent valid quote commands with the same high-entropy key and canonical payload. Both must resolve to the same safe reference, with exactly one Inquiry and one intended acknowledgement/staff-alert event set. Change the brief and reuse the key; expect conflict and unchanged saved data. Repeat after dropping a committed HTTP response. Capture request outcomes, counts, unique-index evidence and payload-redacted diagnostics. **Expected only; not executed in this document.**

### 9.4 Defect workflow and release severity

| Severity | Meaning / examples | Required treatment |
|---|---|---|
| S0 critical | Unauthorized private access, exposed credentials, corrupt/lost data, uncontrolled mail/payment effect | Stop affected release/workflow; contain; preserve redacted evidence; fix and prove regression before approval |
| S1 major | Broken intake/auth/publish/conversion, false commercial commitment, critical accessibility barrier, failed recovery gate | Blocks milestone/release for required scope; no waiver hiding unfinished P1 |
| S2 moderate | Usable workaround, noncritical incorrect filter/display/content; impact bounded | Owner-reviewed disposition with evidence, owner and deadline; may still block affected acceptance |
| S3 minor | Cosmetic/wording issue without scope, security, meaning or accessibility impact | Prioritized backlog or fix; explicit recorded acceptance if shipping |

Severity is impact; priority is urgency. Report includes unique defect ID, summary, requirement/case/task, environment/build, reproducible steps, expected/actual result, occurrence, redacted evidence, severity/priority, owner and related decisions. Workflow: New → Triaged → In progress → Ready for retest → Verified → Closed; reopen when reproducible. “Cannot reproduce” is not Verified; keep diagnostic context. Retest original case and adjacent shared behavior. Do not close based solely on code inspection or a developer saying fixed.

### 9.5 Execution reporting

For each run record scope/version, selected conditional features, timestamp, commit/config/fixture fingerprints, commands and exit codes, test totals, Passed/Failed/Blocked/Not run/approved N/A, browser/viewport/theme/AT, defect links and evidence paths. Include denominator: active required cases versus deferred or unselected cases. No skipped test counted as passed. A document-audit Pass means only the document matches checked source structure.

Use the existing S8 root `PROGRESS.md`, `DECISIONS.md` and one traceability register; R10 recommends detailed reports under a small `docs/qa/` directory if the repository has no existing convention. Preserve S6 `docs/architecture/decisions/` for detailed ADRs. Keep private traces/screenshots restricted and synthetic; never commit secrets/private customer content. An evidence link must identify an actual artifact, not an expected future filename presented as created.

## 10. Deployment, recovery and go/no-go

### 10.1 Release qualification checklist

- [ ] All confirmed P1 requirements and full page/template scope implemented; every selected conditional task accepted; every unselected candidate has a recorded decision and tested baseline.
- [ ] All 57 services/eight categories/five solutions/15 solution tier positions reconciled; prices, units, availability and substantive content approved; SVC-009 canonical/deduplicated; SVC-057 ambiguity resolved before final offer publication.
- [ ] Quote/contact/manual consultation durable save, reference, retry and notification failures verified; real sender/recipient/mailbox readiness proven.
- [ ] Staff provider/session/MFA policy, roles/records, offboarding, provisioning and last-admin recovery verified; no secret/private cache/analytics leak.
- [ ] CRM linking, stages, tasks, notes, customer conversion/correction, scoped search/counts accepted; Won independent from Paid.
- [ ] CMS draft/preview/publish/unpublish/withdrawal and metadata ownership accepted; portfolio/FAQ source-management workflow operational; optional upload/callback controls applied from introduction.
- [ ] All three themes and all unique templates reviewed across required states and widths; manual keyboard/screen-reader/zoom/touch complete; critical barriers resolved.
- [ ] Production-build performance/payload/query evidence recorded against approved targets and provisional-budget decisions; lab versus field clearly distinguished.
- [ ] S9 readiness CR-01–17 reviewed; actual company/legal/contact facts, policy text, copy, permissions and asset licensing complete; unapproved placeholders excluded; no fake compliance claim.
- [ ] Source/lockfile/build/configuration/index/migration manifest frozen; dependencies and security findings triaged; no unresolved S0/S1 or equivalent launch-blocking risk.
- [ ] Preview/test/production isolation, TLS/canonical/redirect/mail DNS, least-privilege credentials, pools/timeouts/jobs and monitoring ready; production not accidentally noindex and previews not indexable.
- [ ] Actual backup restore, suppression and outbox reconciliation meets approved RPO/RTO; media/config/source recovery covered; compatible application rollback rehearsed separately from data rollback.
- [ ] External proposal/invoice templates and chosen payment-record process ready; no unapproved billing software.
- [ ] GA4 consent/saved-event semantics and actual Search Console property/sitemap evidence prepared; controlled production checks planned.
- [ ] Owner UAT and explicit authorization name exact release, environment, migration actions, smoke records/recipients and rollback decision owner.

### 10.2 Recovery and rollback procedures

`QA-REC-01` (Q0, I,M,DOC; M13-03): Select the documented recovery point and compatible app/catalog/schema/media/config set. Restore into isolated target with schedulers/sends off. Verify indexes/references/customer links/private publication/active staff policy. Apply restricted deletion/suppression ledger before exposure. Reconcile outbox terminal and unknown provider outcomes so restored jobs do not resend blindly. Measure recovery point and elapsed restore time against owner-approved RPO/RTO; test media and access too. Record counts, gaps, evidence and approval. Backup enabled without demonstrated restore is not Pass.

`QA-REC-02` (Q0, I,M,DOC; M13-04): Rehearse deploy/rollback using compatible artifacts and schema transition. Confirm previous app can read current data or execute the reviewed alternative recovery plan. Fail a health/intake/private-boundary check; pause affected traffic/workers as appropriate, retain evidence, roll back compatible app, reconcile committed data/provider outcomes and rerun smoke. Never confuse app rollback with database restore, run destructive migration automatically, or recreate production records to make tests pass.

`QA-OPS-01` (Q0, M,DOC; M01-04/M13-04/M14): Trigger a safe synthetic app/database/outbox alert in the authorized test environment; show designated maintainer receives actionable redacted evidence even if app DB is impaired. Test job authentication/batch limits/lease recovery and escalation owner. Monitoring provider success is distinct from delivered alert. No invented uptime/support guarantee.

### 10.3 Go/no-go decision

**Go** only when required acceptance has real evidence, release scope is intact, decisions are closed for enabled behavior, recovery/rollback/monitoring work, no S0/S1 or launch-blocking privacy/security/accessibility/commercial defect remains, and owner authorizes production. Lower-severity accepted defects require impact, workaround, owner, due date and explicit acceptance; cannot waive a required missing feature or unresolved factual publication gate by renaming it polish.

**No-go** for any untested critical path, unresolved permission/provider gate for enabled feature, non-isolated production test target, false success/data corruption/private disclosure, unsupported public offer, failed restore against selected target, unsafe rollback, or missing production authorization. Record exact blocker and next action. Lack of prelaunch field traffic is an expected measurement limitation, not fabricated p75 failure/success; use source-approved lab proxies and postlaunch verification.

### 10.4 Post-deployment smoke — QA-REL-01

1. Verify exact deployed commit/artifact/config, canonical host/HTTPS/redirects, selected public metadata/robots/sitemap, working assets and all three themes. Check Home, all navigation destinations, representative category/service/solution/pricing/article/help/work/policy, missing route and conditional activation.
2. Use authorized controlled data to submit quote, contact and manual consultation; verify saved reference, staff record and actual intended notification, with no double-counted saved conversion. Never send live smoke mail to real prospects without authorization.
3. Sign in with designated authorized staff, inspect permitted inquiry, create/complete a controlled task and exercise an approved conversion scenario if included in the release test plan. Check separate denied actor, logout and revoked access. Do not mutate unrelated business records.
4. Verify agreed controlled draft/preview/publication visibility scenario and immediate withdrawal; test search/publication parity. Do not publish fictional testimonial/client proof just to smoke test.
5. Verify jobs, error telemetry and alert delivery; actual mail send/receive, sender authentication and Search Console/analytics configuration. Record actual provider status.
6. Clean up only identified verification data according to approved archival/redaction policy; retain required audit and reconciliation evidence. Monitor agreed stabilization window. Failures trigger containment/rollback criteria, not blind resubmission.

M14-04 postlaunch regression covers production-only failures, real device behavior, delivery reconciliation, access changes, content freshness and field performance once enough representative samples exist. Frequency and ownership remain operational decisions. Future features do not become obligations through this handoff.

## 11. Codex handoff and reusable prompts

For each authorized task: read S1 requirement, S7 task/dependencies, S5/S6 affected contracts, S3/S4/S9 UI/content as applicable, S8 workflow and this file's cases. Inspect existing repository and tests before changing. State scope, relevant gates, affected modules, acceptance and checks. Implement necessary behavior tests with functionality; run meaningful checks; fix within approved scope; report actual results and update progress/traceability. Do not mark Blocked/Not run as Verified. Request approval for significant architecture/phase/schema/permission/provider/route changes. Stop after the authorized task/review; do not automatically start unrelated tasks.

### 11.1 Test execution prompt

```text
Work only on approved roadmap task <exact Mxx-xx> for ARADUN.
Read its S7 acceptance/dependencies, applicable source requirements and File 10
task/page/model/scenario mappings. Inspect existing code, package scripts and test
environment safeguards. Report unresolved gates before dependent implementation.
Identify the smallest meaningful positive, negative, boundary and concurrency tests.
Implement the necessary tests alongside the authorized functionality; retain exact
routes, schemas, catalog, phases and ownership. Use isolated synthetic data.
Run the applicable File 10 command bundle and actual documented test filters.
Fix failures within this task. Report commands/results, evidence, changed files,
remaining gaps and source IDs. Update existing PROGRESS and traceability accurately.
Do not invent a pass, resolve a business decision silently, deploy, or begin next task.
```

### 11.2 Milestone acceptance prompt

```text
Review milestone <exact M00–M14> against File 7's unchanged task IDs/AC and File 10.
Check prerequisite decisions, all baseline/selected conditional tasks, exact page
and requirement mappings, test reports and manual evidence. Run the milestone's
applicable commands after checking script/environment safety. Identify missing,
stale or mock-only evidence and verify denied/failure cases, not only happy paths.
Return acceptance matrix: Passed/Failed/Blocked/Not run/approved N/A with evidence,
defects, owner decisions and go/no-go recommendation. Update progress, then stop
for the owner milestone review. No automatic next milestone or production action.
```

### 11.3 Regression prompt

```text
Assess changes since <actual reviewed commit> for approved task <Mxx-xx>.
Map changed contracts to File 10 cases and affected source pages/modules.
Prioritize auth/record scope, intake/idempotency, money/snapshots, CRM conversion,
publication/discovery and all-three-theme input preservation. Run targeted checks first;
broaden only for shared impact, failures or unresolved risk. Use real isolated Mongo
for database invariants and distinguish provider doubles from real adapter evidence.
Report original-case retest plus adjacent regression, flaky/blocked/skipped cases,
actual commands/exit codes and remaining limitations. Stop within authorized scope.
```

### 11.4 Release verification prompt

```text
Prepare a production-readiness review for exact release <commit/build/environment>.
Use File 10 release checklist and M13/M14; do not deploy merely because checks pass.
Reconcile all required P1 and selected conditional scope, commercial/content gates,
real test/UAT/provider evidence, security/privacy/a11y/performance, restore/suppression,
outbox reconciliation, compatible rollback and monitoring. Record any missing target
or permission as a blocker. Separate lab evidence from unavailable field results.
Produce concrete release dossier, residual defects and controlled smoke/cleanup plan.
Seek owner production authorization as the final release step if not already given.
After authorized deployment, execute only the approved smoke plan and report the
actual release result. Do not begin Step 11 or add future-phase features.
```

### 11.5 Completion report format

```text
Task/milestone and source requirement/page IDs:
Changed behavior and files:
Selected source decisions / assumptions / unresolved gates:
Cases executed + actual commands, versions, environment and exit codes:
Passed / Failed / Blocked / Not run / approved N/A, with evidence:
Manual/provider/performance/recovery evidence and limits:
Defects and retest/regression results:
Progress/traceability updates:
Review/approval needed and stopping point:
```

## 12. Unresolved decisions and source tensions

This document completes testing coverage without silently choosing open business facts or vendors. The inherited gate register below is retained from S8; full original D/O/U/U4/A5 records remain in their authoritative sources. Each gate must have an owner, selected baseline/decision and evidence before its dependent task can pass.

| Source gate | Current baseline / unresolved item | Owner / deadline task | Implementation treatment |
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

Additional R10 decisions: adopt compatible test tools and real-DB CI setup at M01; select test-browser/device/AT availability; define actual capacity/latency/limiter/pool and recovery targets under D-020; select concrete security/performance tooling; approve any conditional activation and release exceptions. No new numeric SLA, paid tool, production permission or automated recurring job is approved here.

Source tensions handled explicitly:

- S1's older D-022 navy/teal reference is superseded only for palette by S4's three editorial light themes. S4 governs current visual acceptance; no new dark mode.
- Historical 38-page first-publication subset is superseded by full 124-item P1 planning. Readiness controls cannot silently reduce required build scope. Any staged publication amendment needs owner approval; evidence-dependent slots may already be omitted under S3/S9 rules.
- FR-04-10 general publication is P2, but article draft/publish is P1 via FR-04-06. Do not add broad page/service CMS.
- FR-08-15 advanced workflow console is P3, but safe notification logs/retries/idempotency start in P1. No console required to prove reliability.
- FR-14-11/12 general upload/webhook phase does not defer protections when a selected P1 feature introduces one.
- FR-10-05 attribution reports remain P2; inquiry source capture is P1 FR-02-13. Basic source visibility is not a new reporting suite.
- Calendar remains P2 baseline/D-003 conditional promotion despite public P1 consultation. A link click does not confirm a booking or CRM lead.
- Staff MFA policy and exact roles remain D-009/D-013 even though capability appears P1; test the selected policy, not an assumed one.
- S1 EXT industry/product wording allows proposals, while later inventory retains their pages P2. Preserve later inventory baseline; no new Phase 1 pages.
- S7 maps NFR-015 to a broadly labeled P1 row, but its own source phase and owning M06-08/09 tasks are conditional booking. QA follows that qualification; it does not require general P1 synchronization.
- S9 includes draft prose/metadata and asset specifications. Step 9 document approval is not individual factual/rights approval. Proposed price increases remain unapplied; package units/scope/availability and SVC-057 period remain gates.
- S2's historical route evidence gap O-03 persists. Exact supplied URL reconciliation can pass; unseen older URL parity cannot be claimed.

The final registers preserve all source requirements, including future-only records for exclusion review. Future-only rows must not be interpreted as Phase 1 implementation tasks or test passes.


## 13. Governance and conditional-operation test cases

| Case / priority / type | Procedure | Acceptance |
|---|---|---|
| QA-SCOPE-01 / Q1 / DOC,U | Reconcile all 236 source requirement IDs, all 215 all-phase page IDs, the selected 124 P1 entries, 87 task IDs and commercial registry. Review D/O/U/U4/A5 decisions and actual feature flags/routes/collections. | No missing confirmed P1 contract, invented roadmap ID, accidental future activation or silent source supersession. Future acceptance remains deferred; conditional branches have recorded decisions. |
| QA-ENV-01 / Q0 / I,SEC,DOC | Inspect configured runtime/DB/auth/mail/jobs/media/analytics identities; omit required settings; attempt unknown/live test target; inspect public config projection. | Safe fail-closed setup, isolated targets/recipients, compatible Node/Mongoose runtime, no secret leak. Production credentials never substituted to unblock tests. |
| QA-ARCH-01 / Q1 / U,DOC | Inspect imports, module ownership and selected runtime versions; exercise restricted-import checks; inspect route/action thinness and DTO boundaries. | UI/business/persistence/provider separation and server-only boundary; one repository with a Next.js frontend and feature-based Express backend; no microservices/unapproved dependency, no speculative future models; actual version decision evidence. |
| QA-CI-01 / Q0 / I,DOC | Deliberately fail a harmless test/type/content check on a test branch; inspect required status behavior, preview protection and untrusted contribution secret policy. | CI rejects failure and permits corrected result; failures cannot be masked by retries or ignored exits; protected synthetic preview, no live data/messages. |
| QA-NAV-01 / Q1 / E,A,M | Exact S2 desktop/mobile/footer/staff menus; keyboard/Escape/focus; breadcrumbs; active state and deep links; role change; long labels at collapse threshold. | Contact visible; Get a Quote primary; Search/Appearance usable; no public Staff Login link or future/broken controls; backend access independent of menu. Source navigation oracle in §15. |
| QA-ASSIGN-01 / Q0 / I,API | Only if M07-09 selected: assign A, then B, retry/duplicate event, deactivate recipient before delivery; disable option. | Approved current eligible recipient/minimal context; stale event reconciled/suppressed according to selected policy; no duplicate alert; disabled option retains working manual assignment. |
| QA-FIN-01 / Q0 / I,API,E | Only if ADM-027 selected: create expected/invoiced/received records; duplicate external identity; partial receipts; void/replace amount; race corrections; invalid currency/cycle/unauthorized actor. | Exact S5 ManualPaymentRecord contract, distinct record kinds, safe minor units, audited atomic corrections and unique active external identity; no blended revenue or invoice/tax engine; no card/bank secrets. |
| QA-POLICY-01 / Q1 / DOC,E | Compare actual entity/contact/vendor/data/consent/retention practices with Privacy/Terms and selected TRU pages; check readable contents/dates/report channel. | Truthful reviewed policies, no invented jurisdiction/certification/bounty/response guarantee; optional separate page decision does not eliminate required disclosure. |
| QA-UAT-01 / Q0 / M,DOC | Owner acts as prospect, sales operator and editor using synthetic workflows; reviews full selected scope, content, actual technical reports, residual defects and recovery/release dossier. | Owner records explicit accept/reject per milestone/release with evidence. Review invitation or generated document is not actual UAT/production authorization. |

All initial statuses remain Not run; policy-dependent variants remain Blocked until their gate closes. These R10 QA IDs do not change S7 task identifiers.

## 14. Roadmap milestone acceptance and exact task register

All 15 milestones and 87 task IDs below come from S7 §4. No new roadmap task identifier is introduced. `QA-T-<task-ID>` is the local test/acceptance case for that existing task. Source AC and completion evidence are retained verbatim apart from converting source-local Markdown links to plain identifiers. Source section references inside retained text refer to **S7**, not this file.

For every task: prerequisite decisions and dependencies must be satisfied; execute its listed scenario cases plus all associated page/model cases and source AC. Common blocking defects: S0/S1, unresolved required gate, missing mandatory evidence, failed required behavior or a source-scope change without approval. A milestone passes only when all baseline and selected conditional task cases pass, required manual/provider evidence exists, and its source owner checkpoint is accepted. Unselected conditional tasks require an approved N/A with tested baseline; they are never counted as executed tests.

### M00 — Confirm implementation decisions

**Source prerequisite:** None.

**Mandatory milestone verification:** V-DOC (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Owner accepts decision log and immediate implementation prerequisites; deferred gates have an owner and due milestone.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M00-01 — Freeze source and coverage registers


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M00-01; BR-007, BR-008, EXT-001, EXT-002, EXT-003, NFR-010, NFR-013 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | All 236 requirement records and 215 inventory entries reconcile; no future feature is relabeled P1; change log identifies actual supersessions. |
| Procedure / completion evidence from S7 | Compare inventories by ID, hashes and exact URLs; owner reviews unresolved register. |
| Concrete scenario cases | QA-SCOPE-01; QA-CAT-01 |
| Verification command bundle | V-DOC; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M00-02 — Select compatible provider and environment contracts


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M00-02; FR-11-01, FR-14-01, FR-14-07, NFR-008 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | A5-01/08 and D-020 outcomes are recorded before affected installation; current versions, terms and capabilities are verified at implementation; no purchase inferred. |
| Procedure / completion evidence from S7 | Review provider capability checklist against S6 §§15–16,20; identify a tested fallback for each essential external dependency. |
| Concrete scenario cases | QA-ENV-01; QA-OPS-01 |
| Verification command bundle | V-DOC; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | Provider/account/budget decisions; complete independently for each affected adapter. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M00-03 — Resolve workflow, policy and conditional-interface gates


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M00-03; BR-001, BR-002, BR-005, BR-006, BR-008, FR-14-08, NFR-004, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Each D/A5/U gate is selected, retained with baseline, or assigned a deadline; no conditional UI is silently dropped or enabled; unresolved facts cannot be replaced by examples. |
| Procedure / completion evidence from S7 | Owner decision review using the inherited register; trace affected tasks and route activation. |
| Concrete scenario cases | QA-SCOPE-01; QA-PRIV-01; QA-CAT-07 |
| Verification command bundle | V-DOC; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | Close each decision before its dependent task; unrelated work may proceed. |
| Verification status | Not run; dependent work Blocked pending named gate |



### M01 — Repository, environment and quality foundation

**Source prerequisite:** M00-01; relevant M00-02 selections.

**Mandatory milestone verification:** V-BASE (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Clean setup and CI checks reproduce in an isolated environment; owner reviews foundation evidence.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M01-01 — Initialize repository and application conventions


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M01-01; FR-14-09, NFR-010 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Compatible supported versions recorded; strict types/lint/format and server import boundaries operate; separate frontend/backend boundaries and no empty future modules. |
| Procedure / completion evidence from S7 | Clean-install/build/type/lint checks and a deliberately forbidden import fixture. |
| Concrete scenario cases | QA-ARCH-01 |
| Verification command bundle | V-BASE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M01-02 — Validate environments and protect secrets


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M01-02; FR-14-01, FR-14-13, NFR-008 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Missing required feature configuration fails safely; public projection is allowlisted; previews cannot address production data or recipients. |
| Procedure / completion evidence from S7 | Invalid/missing-env cases, bundle/secret scan, staging misconfiguration negative tests. |
| Concrete scenario cases | QA-ENV-01; QA-SEC-05 |
| Verification command bundle | V-BASE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M01-03 — Establish behavior-test infrastructure


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M01-03; FR-14-09, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Transaction/index tests run against real Mongo behavior; tests cannot reset live data; controlled provider doubles are distinct from later adapter tests. |
| Procedure / completion evidence from S7 | Run one meaningful validation, transaction-abort and browser focus example; verify production reset refusal. |
| Concrete scenario cases | QA-ENV-01; QA-DB-02; QA-DB-03 |
| Verification command bundle | V-DATA; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M01-04 — Set up CI, protected previews and initial monitoring


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M01-04; FR-14-07, FR-14-09, NFR-008, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Untrusted contributions receive no privileged secrets; preview is protected/noindex with synthetic data; a deliberate test failure blocks CI; alert reaches the designated test destination. |
| Procedure / completion evidence from S7 | CI failure/pass runs, unauthenticated preview denial, redaction and test-alert checks. |
| Concrete scenario cases | QA-CI-01; QA-ENV-01; QA-OPS-01 |
| Verification command bundle | V-BASE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M02 — Database and shared server foundation

**Source prerequisite:** M01; relevant M00 policy selections.

**Mandatory milestone verification:** V-DATA (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Database invariants and negative cases pass; schema/index strategy reviewed; business models remain feature-timed.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M02-01 — Connect local MongoDB and define transaction ownership


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M02-01; FR-02-06, NFR-006, NFR-010 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Rejected connection promises recover safely; failed multi-document writes abort; no external API call occurs inside DB transactions. |
| Procedure / completion evidence from S7 | Real replica-set commit/abort/retry and connection-failure tests; inspect runtime and aggregate pool budget. |
| Concrete scenario cases | QA-DB-03; QA-DB-05 |
| Verification command bundle | V-DATA; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M02-02 — Implement shared value contracts and safe transport boundaries


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M02-02; FR-14-02, NFR-012, NFR-014 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | ObjectIds/dates serialize deliberately; currency/period are preserved; arbitrary operators, mass assignment and prototype keys are rejected; response errors disclose no secrets. |
| Procedure / completion evidence from S7 | Boundary/serialization tests, malformed IDs and payloads, date/money edge cases, redaction checks. |
| Concrete scenario cases | QA-DB-01; QA-DB-06; QA-SEC-01; QA-CAT-04 |
| Verification command bundle | V-DATA; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M02-03 — Implement audit persistence and safe operational logging


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M02-03; FR-09-13, FR-14-07, NFR-008 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Audit follows committed sensitive operations; normal app cannot rewrite history; snapshots omit raw message/credential contents. |
| Procedure / completion evidence from S7 | Schema/index tests, unauthorized read/update attempts, transaction rollback and PII redaction verification. |
| Concrete scenario cases | QA-SEC-07 |
| Verification command bundle | V-DATA; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M02-04 — Implement shared abuse and request controls


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M02-04; FR-14-05, FR-14-08, NFR-008 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Concurrent app instances share limits; expiry is checked in logic rather than waiting for TTL; thresholds/retention are approved; legitimate input survives recoverable failure. |
| Procedure / completion evidence from S7 | Concurrent increment/expiry tests, spoofed origin and oversized requests, accessible retry feedback. |
| Concrete scenario cases | QA-SEC-04; QA-DB-05 |
| Verification command bundle | V-DATA; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-014 limiter identifier retention and deployment thresholds. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M02-05 — Establish indexes, migration and synthetic-seed procedures


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M02-05; FR-14-06, FR-14-09, NFR-004, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Partial/unique/TTL indexes match S5; production automatic index creation/destructive synchronization are disabled; dry-run/backup/verification/rollback are specified. |
| Procedure / completion evidence from S7 | Duplicate-key tests, populated-value uniqueness, fixture repeatability, production-reset refusal and migration rehearsal on disposable data. |
| Concrete scenario cases | QA-DB-02; QA-DB-07 |
| Verification command bundle | V-DATA; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M03 — Staff identity and authorization

**Source prerequisite:** M02; A5-01/02 and D-009/013 resolved.

**Mandatory milestone verification:** V-FLOW (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Real staging provider flow plus operation-level negative tests pass; owner approves access/recovery evidence.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M03-01 — Implement selected identity adapter and StaffUser


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M03-01; FR-09-01, FR-14-04 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Subject and issuer/provider establish identity; email matching never grants staff access; login/logout and safe local return work; only one session master. |
| Procedure / completion evidence from S7 | Provider callback/session integration, forged/stale identity, logout and safe-redirect tests; local-session expiry/revocation if selected. |
| Concrete scenario cases | QA-AUTH-01; QA-DB-02 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | A5-01 provider/session selection. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M03-02 — Enforce role and record policy in server operations


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M03-02; FR-09-07, FR-14-03, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Editor cannot access CRM/finance; Sales cannot infer unrelated linked records; lists/counts/search and mutations use the same policy; My Account cannot grant roles. |
| Procedure / completion evidence from S7 | Permission matrix and guessed-ID tests across server entry points, actor changes and linked targets. |
| Concrete scenario cases | QA-AUTH-02; QA-API-01 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | A5-02/D-013 exact visibility and publication rights. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M03-03 — Implement recovery, MFA and account-security behavior


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M03-03; FR-09-01, FR-14-04, FR-14-10 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Chosen MFA requirement works; expired/replayed recovery rejected; fresh auth protects sensitive changes; recovery does not leak account existence; no local homemade OTP/password flow. |
| Procedure / completion evidence from S7 | Real staging recovery/MFA, timeout/replay, generic acknowledgement and keyboard tests; later visual integration in M04-04. |
| Concrete scenario cases | QA-AUTH-04 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-009/A5-01 recovery/MFA decision; route framing conditional, secure capability required. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M03-04 — Implement bootstrap, offboarding and safe access lifecycle


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M03-04; FR-09-07, FR-14-04, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No public staff signup/default password; last active Admin protected; deactivation immediately denies ARADUN access and identifies reassignment needs; actions audited. |
| Procedure / completion evidence from S7 | Last-admin guard, stale-cookie deactivation, provision/revoke and recovery runbook exercise. |
| Concrete scenario cases | QA-AUTH-03 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M03-05 — Verify private boundaries and session failures


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M03-05; FR-14-03, FR-14-04, NFR-005, NFR-008 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Direct reads/actions fail securely without sidebar assumptions; private responses are not shared-cached; stale-role sessions denied; no marketing analytics on auth/private pages. |
| Procedure / completion evidence from S7 | Missing/suspended/changed-role contexts, origin/CSRF controls, expired session and sensitive-log tests. |
| Concrete scenario cases | QA-AUTH-01; QA-AUTH-02; QA-AUTH-03; QA-SEC-03 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M04 — Design system and shared shells

**Source prerequisite:** M01; M03 for authenticated shell integration.

**Mandatory milestone verification:** V-UI (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Representative public/form/staff screens work in all three themes and keyboard/mobile/reduced-motion modes.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M04-01 — Implement semantic tokens, fonts and appearance preference


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M04-01; FR-01-01, NFR-002, NFR-003 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Terracotta default/Muted Slate Blue and Vivid Blue alternates; no wrong-theme flash, hydration concealment or form reset; invalid/blocked storage fails safely; semantic statuses retain meaning. |
| Procedure / completion evidence from S7 | All-three-theme visual checks, first-paint/hydration/storage-disabled tests and font transfer measurement. |
| Concrete scenario cases | QA-UI-01; QA-UI-02 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M04-02 — Build accessible controls, forms and feedback primitives


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M04-02; FR-01-01, NFR-002, NFR-014 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Keyboard/focus/labels work; errors stay contextual; loading/empty/denied/failure are distinct; modal focus returns; destructive actions name their target. |
| Procedure / completion evidence from S7 | Component interaction/axe checks plus manual keyboard, zoom and screen-reader spot checks. |
| Concrete scenario cases | QA-A11Y-01; QA-A11Y-02; QA-A11Y-03; QA-A11Y-04 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M04-03 — Build public navigation, footer and marketing primitives


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M04-03; FR-01-03, FR-01-07, NFR-002 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Contact visible in desktop/mobile/footer; Get a Quote primary; no public Staff Login or future links; navigation works without hover; menu collapses before crowding. |
| Procedure / completion evidence from S7 | Exact-link checks, keyboard/Escape/focus return, long-name/mobile/zoom review; data binds to M05-01 when available. |
| Concrete scenario cases | QA-NAV-01; QA-A11Y-02; QA-UI-03 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M04-04 — Integrate public, authentication, staff and CMS shells


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M04-04; FR-09-01, FR-09-02, FR-09-07, NFR-002, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No private actor data enters public root; auth/account screens use approved styling; roles scope menus and server reads independently; shell does not load GSAP. |
| Procedure / completion evidence from S7 | Cross-role navigation and direct-route tests; responsive drawer/skip-link/focus checks. |
| Concrete scenario cases | QA-AUTH-02; QA-UI-01; QA-MOTION-03 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M04-05 — Implement shared error, not-found and async-state contracts


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M04-05; NFR-008, NFR-014 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No dedicated /404 or /error business route; global error fallback is complete; errors redact details, preserve safe input/filter state and offer recovery. |
| Procedure / completion evidence from S7 | Forced render/network/access errors; direct unknown URL; no empty/zero result substituted for failure; accessibility tests. |
| Concrete scenario cases | QA-PAGE-BASE; QA-IN-10; QA-DB-06 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M05 — Catalog and representative public templates

**Source prerequisite:** M04; M00 commercial gates for published values.

**Mandatory milestone verification:** V-UI (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Registry counts/relationships and representative offer templates pass; owner validates commercial interpretation.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M05-01 — Build validated catalog and route registries


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M05-01; BR-002, BR-005, FR-01-04, FR-04-01, FR-04-02, FR-04-03 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | SVC-009 has one canonical service record; no missing route or conflicting slug; original prices retained; unknown availability blocks publication rather than inventing a fourth public state. |
| Procedure / completion evidence from S7 | Count/uniqueness/reference validation and source price/route comparison. |
| Concrete scenario cases | QA-CAT-01; QA-CAT-02; QA-CAT-06 |
| Verification command bundle | V-BASE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M05-02 — Implement price presentation and immutable offer snapshots


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M05-02; BR-002, FR-02-02, FR-02-03, FR-04-02, NFR-012 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Browser amounts ignored; unknown unit is not guessed; selected services are deduplicated by ID; combined selection never becomes a binding automatic total. |
| Procedure / completion evidence from S7 | Tampered price/ID, mixed periods/currencies, source revision and cross-list selection tests. |
| Concrete scenario cases | QA-CAT-03; QA-CAT-04; QA-CAT-05 |
| Verification command bundle | V-DATA; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M05-03 — Build services overview and category template


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M05-03; FR-01-04, FR-04-01, FR-04-03 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | All eight category destinations render their own source content; unknown/disabled slugs fail safely; prices/availability/CTA context remain accurate. |
| Procedure / completion evidence from S7 | Route resolver tests, representative narrow/wide category visual review and accessible navigation. |
| Concrete scenario cases | QA-PAGE-BASE; QA-CAT-01; QA-CAT-06 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M05-04 — Build service-detail template and variations


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M05-04; BR-002, FR-01-04, FR-01-06, FR-01-07, NFR-002 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Fit/scope/process/dependencies/FAQ unique per service; ambiguous package cells remain gated; common template supports long names, exclusions and truthful evidence slots. |
| Procedure / completion evidence from S7 | Representative variation tests, semantics/metadata baseline, responsive comparison and quote-context tests. |
| Concrete scenario cases | QA-PAGE-BASE; QA-CAT-03; QA-CAT-07; QA-CONTENT-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M05-05 — Build solution and pricing templates


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M05-05; FR-01-05, FR-01-06, FR-01-07, FR-02-03 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No invented bundle inclusion, automatic discount or checkout; Custom is not zero; source units/exclusions stay visible on mobile. |
| Procedure / completion evidence from S7 | All five solution records, pricing display/source parity and selected-tier navigation tests. |
| Concrete scenario cases | QA-CAT-03; QA-CAT-05; QA-CAT-07; QA-PAGE-BASE |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M06 — Complete intake and notification flow

**Source prerequisite:** M02–M05; mail and privacy decisions.

**Mandatory milestone verification:** V-FLOW (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; All three real staging journeys save once and expose only safe receipts; provider outage/retry evidence accepted.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M06-01 — Implement Inquiry model and type-specific contracts


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-01; FR-02-06, FR-02-07, FR-02-13, FR-14-02, FR-14-08 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Reference/submission keys unique; input limits enforced; no existing-customer disclosure or automatic email merge; privacy version captured. |
| Procedure / completion evidence from S7 | Model/index/input edge tests and malicious fields; each required/optional journey field exercised. |
| Concrete scenario cases | QA-DB-Inquiry; QA-IN-01; QA-IN-02; QA-IN-03; QA-IN-07 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M06-02 — Implement OutboxEvent and bounded delivery worker


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-02; FR-02-08, FR-02-09, FR-08-01, FR-08-02, FR-08-15, FR-11-01, NFR-006 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Concurrent workers cannot claim the same live lease; stale worker cannot overwrite result; retries bounded; no public unauthenticated trigger or assumed exactly-once email. |
| Procedure / completion evidence from S7 | Lease contention/expiry/fencing tests; temporary/permanent/unknown provider outcomes; scheduler authentication/runtime test. |
| Concrete scenario cases | QA-DB-OutboxEvent; QA-IN-08; QA-IN-09 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M06-03 — Implement atomic submission, receipt and retry recovery


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-03; FR-02-06, FR-02-07, FR-02-08, FR-02-09, NFR-006, NFR-014 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Success only after commit; changed payload with same key conflicts; lost response does not create second inquiry; short-lived receipt reveals no PII; direct thank-you visit is not conversion. |
| Procedure / completion evidence from S7 | Concurrent submissions, rollback, lost HTTP result, tampering, receipt expiry and provider-down integration tests. |
| Concrete scenario cases | QA-IN-04; QA-IN-05; QA-IN-06 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M06-04 — Build contact and manual consultation journeys


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-04; BR-003, FR-01-09, FR-02-04, FR-02-05, NFR-014 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No forced quote/account/phone; errors retain valid input; manual request never says booked; only verified working direct contact channels published. |
| Procedure / completion evidence from S7 | End-to-end success/invalid/slow/offline/duplicate cases; timezone and keyboard/screen-reader check. |
| Concrete scenario cases | QA-IN-02; QA-IN-03; QA-IN-10 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M06-05 — Build the four-step quote journey


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-05; FR-01-07, FR-02-01, FR-02-02, FR-02-03, NFR-002, NFR-014 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Offer context preserved across entry points and theme switches; required brief/name/email validated; no binding summed price; submit cannot silently drop selected items. |
| Procedure / completion evidence from S7 | E2E all entry paths/Back/Edit, cross-listed item dedupe, tampered payload, preserved state/focus and failed-submit recovery. |
| Concrete scenario cases | QA-IN-01; QA-CAT-02; QA-UI-02 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M06-06 — Connect safe emails, confirmation and staff inquiry read


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-06; BR-003, FR-02-08, FR-02-09, FR-08-01, FR-08-02, FR-09-03, FR-09-04, FR-11-01 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No user-controlled mail relay; saved-with-email-delay distinguished from unsaved failure; alias notification requirements produce one intended message each; staff sees only allowed records. |
| Procedure / completion evidence from S7 | Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests. |
| Concrete scenario cases | QA-IN-06; QA-IN-08; QA-IN-11; QA-AUTH-02 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M06-07 — Verify the complete conversion flow


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-07; FR-14-05, NFR-006, NFR-009, NFR-014 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | One durable inquiry/reference and correct queued work per submission; all three paths usable on mobile/keyboard; no private state leaks; failure owner/retry procedure documented. |
| Procedure / completion evidence from S7 | Record browser journeys and DB/outbox assertions with synthetic data; repeat fault scenarios deterministically. |
| Concrete scenario cases | QA-IN-01; QA-IN-02; QA-IN-03; QA-IN-04; QA-IN-05; QA-IN-09; QA-IN-10 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M06-08 — Implement selected live-booking adapter only if promoted


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-08; FR-02-14, FR-11-04, NFR-015 |
| Source phase/status | Conditional P1 branch; preserve named P2 baseline where stated |
| Source task acceptance | No booking success before provider confirmation; slot contention and token failure return truthful recoverable state; external booking mode has explicit CRM linkage. |
| Procedure / completion evidence from S7 | Controlled provider sandbox/staging tests for slot races, timezone and outage; scope/credential review. |
| Concrete scenario cases | QA-BOOK-01 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-003/A5-06 explicit P1 promotion; otherwise deferred P2. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M06-09 — Reconcile live booking lifecycle and conditional callbacks


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M06-09; FR-02-14, FR-11-04, FR-14-12, NFR-006, NFR-015 |
| Source phase/status | Conditional P1 branch; preserve named P2 baseline where stated |
| Source task acceptance | Duplicate/replayed callbacks cannot mutate twice; incomplete outcome reconciles; fallback never misrepresents an appointment; no generic unsupported signing assumption. |
| Procedure / completion evidence from S7 | Spoof/replay/duplicate/out-of-order callback tests and full booking/cancel/reschedule E2E under selected integration. |
| Concrete scenario cases | QA-BOOK-01; QA-SEC-09 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-003 promotion and callback selection. |
| Verification status | Not run; dependent work Blocked pending named gate |



### M07 — CRM, pipeline, customers and follow-ups

**Source prerequisite:** M06 baseline; D-011 decisions.

**Mandatory milestone verification:** V-FLOW (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Inquiry-to-contact-to-opportunity-to-task-to-customer scenario passes with concurrent and unauthorized negatives.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M07-00 — Implement shared business Activity persistence


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-00; FR-02-12, FR-09-08, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Business events remain separate from restricted audit; event keys deduplicate; correction preserves provenance and requires target authorization. |
| Procedure / completion evidence from S7 | Model/index, event dedupe, target scope and correction-audit tests. |
| Concrete scenario cases | QA-DB-Activity; QA-CRM-09 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M07-01 — Implement canonical contacts and reviewed identity linking


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-01; FR-02-06, FR-03-01, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Email is a candidate hint, not unique automatic identity; concurrent review of one inquiry creates one link; immutable original submitted identity remains intact. |
| Procedure / completion evidence from S7 | Two-reviewer races, shared email, unauthorized candidate access and relationship tests; contact list/detail keyboard/mobile review. |
| Concrete scenario cases | QA-DB-Contact; QA-CRM-01 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-011/A5-03 reviewed identity policy. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M07-02 — Implement inquiry handling and assignment


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-02; FR-02-10, FR-02-11, FR-02-13, FR-09-03, FR-09-04, FR-09-06 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Spam/duplicate/no-response remain classifications rather than pipeline stages; suspended assignees rejected; unassigned/reassignment work remains Admin-visible. |
| Procedure / completion evidence from S7 | Status/assignment permissions, stale revision, source visibility and suspended-staff tests; list/detail state review. |
| Concrete scenario cases | QA-CRM-02; QA-AUTH-02 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M07-03 — Implement Opportunity and fixed sales pipeline


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-03; FR-03-05, NFR-012 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | New → Qualified → Discovery → Proposal Sent → Negotiation → Won/Lost retained; explicit keyboard stage controls; stage history appended; no configurable builder or required dragging. |
| Procedure / completion evidence from S7 | Transition/reopen/stale-write and double-create tests; authorization and monetary labels; pipeline/detail responsive review. |
| Concrete scenario cases | QA-DB-Opportunity; QA-CRM-03 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-011 transition exceptions. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M07-04 — Implement manual follow-up tasks and due indicators


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-04; FR-03-06, NFR-012 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Target/assignee permissions enforced; completion/history consistent; due state timezone-correct; no automatic campaign or external reminder sequence introduced. |
| Procedure / completion evidence from S7 | Due-boundary/timezone, unauthorized target, stale edit and completion tests; form/list/detail keyboard checks. |
| Concrete scenario cases | QA-DB-FollowUpTask; QA-CRM-07; QA-CRM-08 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M07-05 — Implement explicit customer conversion and correction


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-05; FR-03-02, FR-03-03, NFR-006 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Two won deals for one contact do not create two customers; reopening a deal does not delete customer/history; conversion does not mark money paid. |
| Procedure / completion evidence from S7 | Concurrent/repeated conversion, denial, other won engagement and reversal tests; customer list/detail states. |
| Concrete scenario cases | QA-CRM-04; QA-CRM-05 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-011/A5-03 conversion correction policy. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M07-06 — Implement Activity, scoped history and private search


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-06; FR-02-12, FR-09-05, FR-09-08, NFR-003, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Histories bounded; no unbounded embedded event arrays; count/list/search permission predicates agree; notes remain internal and never imply mailbox sync. |
| Procedure / completion evidence from S7 | Pagination/tie-break/query-plan tests, malicious filters, note correction/redaction and cross-role disclosure cases. |
| Concrete scenario cases | QA-CRM-09; QA-CRM-10 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M07-07 — Implement approved contact merge/correction procedure


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-07; FR-03-01, FR-03-03, NFR-004, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No silent identity merge or historical submitter rewrite; all linked references remain valid; stale/concurrent edits cannot corrupt links; large graph refuses unsafe one-shot action. |
| Procedure / completion evidence from S7 | Merge dry-run/reference parity, rollback/concurrent mutation tests and documented supervised recovery. |
| Concrete scenario cases | QA-CRM-06 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-011 exact merge/reversal limits. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M07-08 — Verify CRM workflow integrity


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-08; FR-03-03, FR-03-05, FR-03-06, NFR-005, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | All operations enforce active actor/target scope and revisions; histories preserved; UI accurately handles denied/loading/empty/failure/success/conflict. |
| Procedure / completion evidence from S7 | Cross-role E2E and transaction/concurrency tests; compare scoped summary queries to lists. |
| Concrete scenario cases | QA-CRM-01; QA-CRM-02; QA-CRM-03; QA-CRM-04; QA-CRM-05; QA-CRM-06; QA-CRM-07; QA-CRM-08; QA-CRM-09; QA-CRM-10 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M07-09 — Enable assignment email only if selected


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M07-09; FR-08-03 |
| Source phase/status | Conditional P1 branch; preserve named P2 baseline where stated |
| Source task acceptance | Only an eligible newly assigned staff recipient receives approved minimal context; retries deduplicate; disabled setting preserves in-app assignment functionality. |
| Procedure / completion evidence from S7 | Assignment/reassignment/no-change/disabled and worker retry tests with controlled inbox. |
| Concrete scenario cases | QA-ASSIGN-01; QA-IN-08; QA-IN-09 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | A5-11 assignment alert selection. |
| Verification status | Not run; dependent work Blocked pending named gate |



### M08 — Limited CMS and publication workflows

**Source prerequisite:** M03–M05; A5-04/05 and D-012 selections.

**Mandatory milestone verification:** V-FLOW (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Save/preview/publish/unpublish verified across public route/search contracts; scope remains limited CMS.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M08-01 — Implement Article contracts and publication services


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M08-01; FR-04-06, FR-04-10, NFR-011 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Saving draft never changes live content; revision conflict protects edits; published slugs locked except reviewed redirect; renderer rejects backend/scripts/runtime MDX/unapproved HTML. |
| Procedure / completion evidence from S7 | Schema/index, stored-XSS, permissions, stale publish and unpublish tests. |
| Concrete scenario cases | QA-DB-Article; QA-CMS-01; QA-CMS-02; QA-CMS-04 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | A5-04/U-03 snapshot behavior and editor format approval. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M08-02 — Build article management, editor and private preview


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M08-02; FR-01-12, FR-04-06, NFR-002, NFR-011 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Preview uses real public rendering with authorization/noindex/private assets; no public preview links; editor can navigate/control all fields by keyboard; clear saved/dirty/conflict state. |
| Procedure / completion evidence from S7 | Editor component tests, publish/unpublish E2E, unauthorized preview/asset requests, keyboard and narrow-screen review. |
| Concrete scenario cases | QA-CMS-01; QA-CMS-02; QA-A11Y-03; QA-AUTH-02 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M08-03 — Implement testimonial curation and truthful display


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M08-03; BR-004, FR-01-11 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Unverified or fictional testimonials cannot publish; public DTO excludes evidence/private fields; withdrawal removes all eligible displays; no public review submission system. |
| Procedure / completion evidence from S7 | Permission/projection/publication tests and empty-state UI; source/evidence withdrawal across public slots. |
| Concrete scenario cases | QA-DB-Testimonial; QA-CMS-05 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M08-04 — Implement SEO ownership and metadata editor


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M08-04; FR-04-08, NFR-001, NFR-011 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Template ID never ambiguously identifies an article instance; Editor cannot index private routes; article SEO draft save is not publication; canonical target allowlisted. |
| Procedure / completion evidence from S7 | Registered/unknown/reserved keys, cross-owner edits, private-index attempts and metadata/publication tests. |
| Concrete scenario cases | QA-DB-SeoOverride; QA-CMS-07; QA-SEO-01; QA-SEO-02 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M08-05 — Prepare source FAQ/help and controlled media workflow


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M08-05; BR-004, FR-01-13, NFR-011 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | One FAQ source of truth; no duplicate Insights/help body; no arbitrary remote fetch; featured images usable without assuming a general media library. |
| Procedure / completion evidence from S7 | Reference/slug/image allowlist checks, alt/dimension review and private evidence leak tests. |
| Concrete scenario cases | QA-CMS-08; QA-CMS-09; QA-ASSET-01 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M08-06 — Implement optional FAQ/help editor


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M08-06; FR-01-13, NFR-011 |
| Source phase/status | Conditional P1 branch; preserve named P2 baseline where stated |
| Source task acceptance | Short FAQ anchors/help slugs retained; old source master disabled after verified cutover; draft/private/public predicates align; no broad CMS expansion. |
| Procedure / completion evidence from S7 | Migration parity/rollback, draft/publish/unpublish/search contract and role/keyboard tests. |
| Concrete scenario cases | QA-DB-FaqEntry; QA-CMS-08; QA-CMS-03 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-012/A5-05 FAQ authoring choice. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M08-07 — Implement optional minimal secure image upload


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M08-07; FR-14-11, NFR-004, NFR-005 |
| Source phase/status | Conditional P1 branch; preserve named P2 baseline where stated |
| Source task acceptance | Reject active/unapproved content; private evidence/drafts not public; object access and signed expiry enforced; no public inquiry attachments/general library. |
| Procedure / completion evidence from S7 | Oversize/MIME-spoof/active-file/unauthorized/quarantine cases; failed upload cleanup and storage backup scope review. |
| Concrete scenario cases | QA-CMS-09; QA-SEC-02 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-012 storage/upload/scanning selection. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M08-08 — Verify publication visibility and editorial failure cases


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M08-08; NFR-005, NFR-009, NFR-011 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Draft and withdrawn proof never publicly eligible; stale write fails usefully; no shared draft/staff cache; meaningful missing-content state. |
| Procedure / completion evidence from S7 | Save-live-edit/unpublish/archive/withdraw tests, DTO checks and no-JS public reading. |
| Concrete scenario cases | QA-CMS-01; QA-CMS-02; QA-CMS-03; QA-CMS-04; QA-CMS-05; QA-CMS-07 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M09 — Complete public website and content population

**Source prerequisite:** M05, M06 baseline, M08 baseline; commercial/content approvals.

**Mandatory milestone verification:** V-UI (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Every public P1 entry reconciled; all 57 service records reviewed; conditional policy outcomes explicit; no reduced launch subset assumed.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M09-01 — Complete homepage and About


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-01; BR-001, BR-004, FR-01-02, FR-01-07, FR-01-08 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Section order matches S3; missing genuine proof slot omitted gracefully; founder/team claims verified; static composition matches approved calm editorial direction. |
| Procedure / completion evidence from S7 | Section checklist, evidence audit, link/CTA paths and all-three-theme responsive visual review. |
| Concrete scenario cases | QA-PAGE-PUB-001; QA-PAGE-PUB-005; QA-CONTENT-01; QA-CONTENT-02 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M09-02 — Populate and review Web and Mobile service content


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-02; BR-002, BR-005, FR-01-04, FR-04-03 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | All IDs/names/prices/units match; no invented deliverables or availability; every assigned service meets S3/S4 blueprint before publication. |
| Procedure / completion evidence from S7 | Per-record checklist/source diff, rendered long/short-content samples and route/canonical/CTA verification. |
| Concrete scenario cases | QA-CAT-01; QA-CAT-07; QA-CONTENT-01; QA-ASSET-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M09-03 — Populate and review AI Automation and Digital Marketing content


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-03; BR-002, BR-005, FR-01-04 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Every assigned service has substantive unique content, canonical identity, approved scope/availability and preserved source price. |
| Procedure / completion evidence from S7 | Source/record checklist; recurring/setup fee cases; rendered service and quote-context review. |
| Concrete scenario cases | QA-CAT-01; QA-CAT-07; QA-CONTENT-01; QA-ASSET-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M09-04 — Populate and review Cloud and Cybersecurity content


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-04; BR-001, BR-002, BR-005, FR-01-04 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No guarantee of security/compliance or unverified certification; every source offer remains planned with correct availability and pricing. |
| Procedure / completion evidence from S7 | Per-record source/claims review, service variation layout and CTA/FAQ/canonical checks. |
| Concrete scenario cases | QA-CAT-01; QA-CAT-06; QA-CAT-07; QA-CONTENT-01; QA-ASSET-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M09-05 — Populate and review Design and Video content


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-05; BR-002, BR-005, FR-01-04 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | All assigned services covered; ambiguous monthly-video period is resolved before offer publication, not guessed; no duplicated page for cross-listing. |
| Procedure / completion evidence from S7 | Record/source parity, billing-unit/availability gate, long package comparison and canonical tests. |
| Concrete scenario cases | QA-CAT-01; QA-CAT-02; QA-CAT-07; QA-CONTENT-01; QA-ASSET-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M09-06 — Complete categories, solutions, pricing and related content


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-06; EXT-004, FR-01-04, FR-01-05, FR-01-06 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | 57 unique services/58 memberships verified end-to-end; all original prices preserved; related links never expose drafts or future pages; selection stays editable. |
| Procedure / completion evidence from S7 | Whole-catalog crawl, relationship/price parity and all category/solution/pricing comparisons. |
| Concrete scenario cases | QA-CAT-01; QA-CAT-03; QA-CAT-07; QA-SEO-04 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M09-07 — Complete work and case-study templates


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-07; BR-004, FR-01-10 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No fabricated client/outcome; no mandatory made-up portfolio count; substantive published cases follow required regions and CTA context; empty collection is honest. |
| Procedure / completion evidence from S7 | Rights/classification/content review; gallery/keyboard/narrow layout and unpublished-slug tests. |
| Concrete scenario cases | QA-CMS-06; QA-CONTENT-02; QA-ASSET-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M09-08 — Complete Insights, article, FAQ and help reading experiences


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-08; EXT-004, FR-01-12, FR-01-13, NFR-011 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Only published snapshots/eligible assets visible; no fictional dates/authors; short answers and help articles distinct; missing content safely not-found. |
| Procedure / completion evidence from S7 | Publication/withdrawal, typography/heading/TOC, pagination and CTA/link verification. |
| Concrete scenario cases | QA-CMS-03; QA-CMS-08; QA-SEO-01; QA-CONTENT-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M09-09 — Complete legal/policy pages and conditional trust pages


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-09; BR-001, BR-006, EXT-006, FR-14-08 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No unsupported compliance claim or invented legal entity; policies readable without sales intrusion; required disclosure information exists even if optional separate page not selected. |
| Procedure / completion evidence from S7 | Owner/legal-content review as applicable, policy links, heading/reading accessibility, activation/noindex rules and contact tests. |
| Concrete scenario cases | QA-POLICY-01; QA-PRIV-01; QA-CONTENT-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-014/018 and TRU conditional publication choices. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M09-10 — Audit complete public inventory and publication readiness


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M09-10; BR-002, BR-004, BR-005, BR-008, NFR-001, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | All 91 public entries accounted for including conditional decisions; all 57 service pages implemented; no unapproved subset relabeled full Phase 1; unready content blocks its publication gate. |
| Procedure / completion evidence from S7 | Inventory crawl plus human content/evidence review; report every blocked entry and owner before release. |
| Concrete scenario cases | QA-PAGE-BASE; QA-CAT-01; QA-CONTENT-01; QA-CONTENT-02; QA-ASSET-01 |
| Verification command bundle | V-UI; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M10 — Search, SEO and measurement

**Source prerequisite:** M08–M09 and saved intake; consent decision.

**Mandatory milestone verification:** V-FLOW (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Search/sitemap/metadata agree with publication; GA4/Search Console configured and verified before claimed active.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M10-01 — Implement bounded public search


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M10-01; FR-01-14, NFR-003, NFR-011 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No drafts/private evidence/CRM records; query ≤200 characters with bounded tokens/windows; stable ordering; honest counts; query values not leaked into private analytics. |
| Procedure / completion evidence from S7 | Published/unpublished/malicious query and capped pagination tests; empty/error states, keyboard and indexed query review. |
| Concrete scenario cases | QA-SEARCH-01; QA-SEARCH-02; QA-DB-04 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M10-02 — Complete metadata, canonicals, sitemap, robots and schema


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M10-02; FR-04-08, NFR-001, NFR-011 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No private/draft/search/confirmation utility indexing; robots never substitutes auth; public unpublish removed immediately; no fabricated rating markup. |
| Procedure / completion evidence from S7 | Crawl/canonical/index eligibility matrix, structured-data validity and withdrawal tests; controlled staging noindex versus production behavior. |
| Concrete scenario cases | QA-SEO-01; QA-SEO-02; QA-SEO-03; QA-SEO-04; QA-INTL-01 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M10-03 — Configure consent-aware GA4 and saved-conversion events


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M10-03; FR-10-01, FR-10-03, FR-11-02, NFR-007 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No email/message/record ID/token sent; thank-you visit alone never conversion; retries do not double-count intended success; denied consent prevents restricted tracking. |
| Procedure / completion evidence from S7 | Network/event payload inspection, consent changes, direct confirmation/retry tests and controlled GA4 debug verification. |
| Concrete scenario cases | QA-MEASURE-01; QA-PRIV-01; QA-PRIV-03 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M10-04 — Prepare Search Console verification and SEO operational handoff


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M10-04; EXT-005, FR-10-02, NFR-001 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Correct canonical property and verification evidence retained; optional Bing/session tooling not silently added; no ranking guarantee. |
| Procedure / completion evidence from S7 | Check staging generated artifacts; verify actual Search Console property/sitemap after M14-02 and record status. |
| Concrete scenario cases | QA-MEASURE-01 |
| Verification command bundle | V-DOC; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M11 — Dashboard completion and operational readiness

**Source prerequisite:** M07–M08; M10 where search/SEO summaries rely on it.

**Mandatory milestone verification:** V-FLOW (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; All 27 ADM entries resolved and tested in selected mode; external business templates and operational owners ready.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M11-01 — Complete dashboard and content overview summaries


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M11-01; FR-09-02, FR-10-04, NFR-003, NFR-005 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Counts use list permissions; inquiries/opportunities/customers distinct; estimated value is not revenue; failed query is not zero; no advanced forecasting/attribution dashboard. |
| Procedure / completion evidence from S7 | Compare metrics with known scoped fixtures and list queries; slow/failure panels, timezone, responsive and keyboard tests. |
| Concrete scenario cases | QA-CRM-10; QA-CMS-03; QA-AUTH-02 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M11-02 — Reconcile every dashboard route and operational state


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M11-02; FR-09-05, FR-09-07, NFR-002, NFR-005, NFR-014 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No broken/disabled future navigation; record IDs/templates align with owners; denied reads/actions independently enforced; selected optional screens receive same checks. |
| Procedure / completion evidence from S7 | Role-by-route/action matrix, desktop/mobile/zoom navigation and state review with realistic synthetic data. |
| Concrete scenario cases | QA-PAGE-BASE; QA-AUTH-02; QA-A11Y-02; QA-A11Y-03 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M11-03 — Prepare proposal/invoice templates and external finance procedure


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M11-03; BR-003, BR-006, FR-07-01, FR-07-02, NFR-012 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | FR-07-01 fulfilled outside app; external ledger process fulfills selected D-007 baseline; won status does not imply paid; no online signing/gateway/invoicing suite. |
| Procedure / completion evidence from S7 | Owner reviews a synthetic complete proposal/invoice/ledger scenario and correction trail; verify real contact/payment operating readiness separately. |
| Concrete scenario cases | QA-CAT-08 |
| Verification command bundle | V-DOC; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M11-04 — Implement optional staff-access administration screens


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M11-04; FR-09-07, FR-14-04, NFR-005 |
| Source phase/status | Conditional P1 branch; preserve named P2 baseline where stated |
| Source task acceptance | No new role builder/team department module; last-admin protection and current-access revocation unchanged; UI preserves provider/local ownership. |
| Procedure / completion evidence from S7 | Admin versus Sales/Editor negatives, fresh-auth/last-admin/stale edit tests and account detail mobile/keyboard review. |
| Concrete scenario cases | QA-AUTH-03; QA-AUTH-04 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | A5-14/O-05 dedicated access UI selection. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M11-05 — Implement optional restricted audit viewer


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M11-05; FR-09-13, NFR-005 |
| Source phase/status | Conditional P1 branch; preserve named P2 baseline where stated |
| Source task acceptance | No arbitrary export/advanced workflow console; restricted redacted fields; role/target filters cannot reveal inaccessible private values. |
| Procedure / completion evidence from S7 | Audit-access/filter/pagination and redaction tests; honest empty/loading/failure states. |
| Concrete scenario cases | QA-SEC-07; QA-AUTH-02; QA-DB-04 |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | A5-14/O-05 audit-viewer selection. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M11-06 — Implement optional manual payment tracker


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M11-06; FR-07-02, NFR-005, NFR-012 |
| Source phase/status | Conditional P1 branch; preserve named P2 baseline where stated |
| Source task acceptance | No card/bank secrets/checkout; amounts/currency and evidence source explicit; expected and received not summed as revenue; correction retains audit. |
| Procedure / completion evidence from S7 | External-reference uniqueness, precise money, finance permission, void/replacement and responsive panel tests. |
| Concrete scenario cases | QA-FIN-01; QA-DB-ManualPaymentRecord |
| Verification command bundle | V-FLOW; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | D-007/A5-07 tracker selection. |
| Verification status | Not run; dependent work Blocked pending named gate |



### M12 — Motion and visual refinement

**Source prerequisite:** M09–M11 for final polish; essential interaction already implemented.

**Mandatory milestone verification:** V-PERF (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Measured route payloads, cleanup and reduced-motion/mobile branches accepted; no decorative exception weakens core UX.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M12-01 — Finalize production assets and visual consistency


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M12-01; BR-004, NFR-002, NFR-003 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No invented logo redesign; equal image dimensions prevent jumps; rights/alt/contrast clear; headline and CTA remain visible before JS; only selected theme artwork loads eagerly. |
| Procedure / completion evidence from S7 | Small-size/logo/transparent-edge review; image/font payload and all-three-theme visual comparisons. |
| Concrete scenario cases | QA-UI-01; QA-UI-02; QA-ASSET-01; QA-PERF-01 |
| Verification command bundle | V-PERF; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | U4-01/02/03 final asset/header selection. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M12-02 — Apply selective CSS and Motion interactions


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M12-02; FR-01-01, NFR-002, NFR-003 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No per-letter required reveal, forced route wait, full-grid cascade or hidden CTA; input/focus not delayed; CSS/Motion/GSAP never share animated property ownership. |
| Procedure / completion evidence from S7 | Reduced-motion/no-JS/coarse-pointer tests, theme switch mid-quote, interruption/unmount and route bundle inspection. |
| Concrete scenario cases | QA-MOTION-01; QA-MOTION-03; QA-UI-02 |
| Verification command bundle | V-PERF; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M12-03 — Deliver justified isolated GSAP effect or approved static fallback


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M12-03; NFR-002, NFR-003 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No GSAP route payload where unused; compact/reduced mode static; no scroll takeover, persistent loop or layout-affecting tween; theme switch does not replay scene. |
| Procedure / completion evidence from S7 | Route mount/unmount/breakpoint/hidden-tab tests, traces and bundle delta; owner reviews whether effect earns its cost. |
| Concrete scenario cases | QA-MOTION-02; QA-MOTION-03 |
| Verification command bundle | V-PERF; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | U4-03/06 actual layers and measured performance; fallback preserves source-approved selective scope. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M12-04 — Verify cross-template accessibility and performance


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M12-04; NFR-002, NFR-003, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | S4 budgets/targets reported honestly; no hidden content, focus loss, horizontal page overflow or uncontrolled query workload; optional motion reduced before weakening goals. |
| Procedure / completion evidence from S7 | Recorded repeatable Lighthouse runs/traces, payload reports, keyboard/screen-reader/zoom/touch tests and leak checks. |
| Concrete scenario cases | QA-A11Y-01; QA-A11Y-02; QA-A11Y-03; QA-A11Y-04; QA-A11Y-05; QA-PERF-01; QA-PERF-02; QA-PERF-03 |
| Verification command bundle | V-PERF; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M13 — Release qualification

**Source prerequisite:** All baseline M01–M12 and every selected conditional task.

**Mandatory milestone verification:** V-RELEASE (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Evidence dossier and owner UAT pass; blockers closed; production approval remains a separate M14 gate.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M13-01 — Run full scope regression and owner acceptance


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M13-01; BR-008, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No unmapped confirmed P1 requirement or unreviewed conditional entry; selected feature tests pass; source names/prices/phases intact; content/fact blockers cannot be called complete. |
| Procedure / completion evidence from S7 | Coverage matrix, route crawl, cross-role E2E, lint/types/build and owner UAT recording; failures create scoped repair tasks. |
| Concrete scenario cases | QA-SCOPE-01; QA-PAGE-BASE; QA-UAT-01 |
| Verification command bundle | V-RELEASE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M13-02 — Complete security, privacy and dependency review


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M13-02; FR-14-01, FR-14-02, FR-14-03, FR-14-05, FR-14-08, FR-14-11, FR-14-12, FR-14-13, NFR-004, NFR-008 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No unresolved launch-blocking exposure; actual notice/consent matches behavior; deletion accounts for snapshots/notes/queued mail/provider copies; dependency findings triaged rather than hidden by forced upgrades. |
| Procedure / completion evidence from S7 | Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise. |
| Concrete scenario cases | QA-AUTH-02; QA-SEC-01; QA-SEC-02; QA-SEC-03; QA-SEC-04; QA-SEC-05; QA-SEC-06; QA-SEC-07; QA-SEC-08; QA-SEC-09; QA-PRIV-01; QA-PRIV-02; QA-PRIV-03 |
| Verification command bundle | V-RELEASE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M13-03 — Exercise backup restore and notification reconciliation


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M13-03; FR-14-06, NFR-004, NFR-006 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Measured restore meets approved RPO/RTO or blocks launch; restored deleted records are suppressed; old outbox jobs do not resend blindly; media/source/config recoverable. |
| Procedure / completion evidence from S7 | Timed isolated restore, compare record/index integrity, apply suppression ledger and simulate uncertain-provider delivery recovery. |
| Concrete scenario cases | QA-REC-01 |
| Verification command bundle | V-DATA + recovery rehearsal; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | A5-08/13/D-014 approved recovery targets and suppression-ledger format. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M13-04 — Rehearse deployment, rollback and incident operation


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M13-04; FR-14-07, FR-14-09, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | App rollback not mistaken for data rollback; no production DB mutations hidden in build hooks; alert owner and incident response known; unsafe release can be contained. |
| Procedure / completion evidence from S7 | Staging deployment/rollback drill, incompatible migration refusal, forced alert/outage and worker-disable/recovery checks. |
| Concrete scenario cases | QA-REC-02; QA-OPS-01 |
| Verification command bundle | V-RELEASE + rollback rehearsal; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M13-05 — Close business/content gates and prepare release dossier


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M13-05; BR-001, BR-002, BR-003, BR-004, BR-005, BR-006, BR-008, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | All required scope and selected conditional interfaces ready; exceptions cannot silently remove P1 scope; exact release commit/config/index status and remaining nonblocking work recorded. |
| Procedure / completion evidence from S7 | Owner approval checklist with actual evidence, operational contact test and source/catalog/content final diff. |
| Concrete scenario cases | QA-UAT-01; QA-CONTENT-01; QA-ASSET-01; QA-CAT-07 |
| Verification command bundle | V-DOC + release evidence review; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



### M14 — Approved production launch and verification

**Source prerequisite:** M13 complete; explicit production authorization.

**Mandatory milestone verification:** V-LIVE (exact commands in §9.2); the more specific task overrides below also apply. Review S7 dependency links before execution, rather than assuming numbering alone defines readiness.

**Source acceptance and owner approval:** All task AC/verification and common DoD must pass; Owner explicitly approves deployment; live smoke/integration evidence recorded; stabilisation ownership accepted.

**Completion evidence:** all task evidence below, actual command reports, requirement/page/model dispositions, unresolved/accepted defects and owner review record. **Blocking rule:** common rule above plus each task’s named gate. **Current status:** Not run; gate-dependent work Blocked until selected.

#### M14-01 — Confirm production authorization and preflight


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M14-01; BR-008, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No production deployment without approval; staging credentials/recipients never substituted; required configuration checked without exposing secret values. |
| Procedure / completion evidence from S7 | Signed-off checklist, config/environment comparison and migration/rollback compatibility review. |
| Concrete scenario cases | QA-ENV-01; QA-UAT-01 |
| Verification command bundle | V-DOC + V-LIVE preflight; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | Explicit owner production-deployment approval. |
| Verification status | Not run; dependent work Blocked pending named gate |



#### M14-02 — Deploy approved release and verify domain/mail


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M14-02; BR-003, FR-14-01, FR-14-09, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No accidental public noindex/staging access settings; HTTPS/canonical correct; hello@ actual send/receive tested; job trigger authenticated; rollback available. |
| Procedure / completion evidence from S7 | Live config/TLS/DNS/redirect, known public/private smoke and controlled mail tests; immediate containment if critical failures occur. |
| Concrete scenario cases | QA-REL-01; QA-IN-11; QA-SEC-06 |
| Verification command bundle | V-LIVE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M14-03 — Verify production journeys, discovery and observability


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M14-03; FR-10-01, FR-10-02, FR-10-03, FR-11-01, FR-14-07, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | Critical journeys work on actual release; alerts reach owner; no PII analytics; verification records clearly identified and handled under approved cleanup policy; integrations claimed active only with evidence. |
| Procedure / completion evidence from S7 | Production smoke/controlled messages, provider delivery records, Search Console property/sitemap, analytics payload and alert checks. |
| Concrete scenario cases | QA-REL-01; QA-OPS-01; QA-MEASURE-01 |
| Verification command bundle | V-LIVE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



#### M14-04 — Complete initial stabilization and maintenance handoff


| Contract | Required acceptance / verification |
|---|---|
| QA case / requirements | QA-T-M14-04; NFR-003, NFR-004, NFR-008, NFR-009 |
| Source phase/status | P1 baseline planning task |
| Source task acceptance | No claim of p75 field success without enough representative traffic; required regressions repaired before closure; future enhancement backlog does not hide incomplete P1. |
| Procedure / completion evidence from S7 | Initial monitored operating window selected with owner; incident/delivery/backup observations and final handoff checklist. |
| Concrete scenario cases | QA-REL-01; QA-PERF-01; QA-OPS-01 |
| Verification command bundle | V-LIVE; run relevant documented test filters, plus required manual/provider procedure |
| Gate / additional blocker | No additional local gate stated; all source prerequisites, common blockers and inherited policy gates still apply. |
| Verification status | Not run |



## 15. Complete Phase 1 page, CTA and region coverage

**124/124 source entries.** Exact URLs, source phase/status and page names below are from S2 §2.1. Access, CTA and section order are from S3 §4; module/template/task allocation is from S7 §§5–6. Each `QA-PAGE-<ID>` applies QA-PAGE-BASE and its linked scenario/task cases. All are **Not run**; source C rows are **Blocked pending activation decision**, or approved N/A only after that decision and baseline verification. Public pages use E/DOC/A testing (Q1, Q0 for intake/privacy); private pages use E/API/I/SEC/A (Q0 for authorization).

Recipe labels `REG-01` etc. are local section-checklist labels, not new source page/template/requirement IDs. Shared recipe reuse does not remove each page’s own content review.

| Recipe | Exact ordered source sections/UI regions |
|---|---|
| REG-01 | 1. Hero and value proposition → 2. Eight service categories → 3. Five business solutions → 4. Selected work and case studies → 5. Why work with ARADUN → 6. How we work → 7. Starting prices and engagement options → 8. Client feedback → 9. Insights and resources → 10. Frequently asked questions → 11. Final project invitation. |
| REG-02 | 1. Hero: Find the right services for your business → 2. Category directory: Explore our expertise → 3. Help choosing: Start with what you want to achieve → 4. Engagement options: Choose the engagement that fits → 5. Buyer questions: Before choosing a service → 6. Closing invitation: Tell us what you need. |
| REG-03 | 1. Hero: Find a solution around your business goals → 2. Five solutions: What would you like to improve? → 3. Selection guide: Choose your starting point → 4. Engagement approach: From your goals to an agreed scope → 5. FAQs: Before choosing a solution → 6. Closing CTA: Let’s identify the right approach. |
| REG-04 | 1. Hero: Understand your options before you start → 2. Pricing models: How engagements are priced → 3. Solution pricing: Compare business solutions → 4. Individual services: Need a specific service? → 5. Combined/custom: Build a scope around your needs → 6. Cost/payment expectations: What affects your quote? → 7. Pricing FAQs → 8. Final CTA: Get a quote for your requirements. |
| REG-05 | 1. Introduction: Technology & Digital Solutions for businesses → 2. Purpose and direction → 3. People behind ARADUN → 4. How we work → 5. Evidence of our work → 6. Start a conversation. |
| REG-06 | 1. Hero: Explore our work → 2. Browse controls → 3. Project collection → 4. Similar project invitation. |
| REG-07 | 1. Project introduction → 2. Problem and constraints → 3. Scope and contribution → 4. Approach and key decisions → 5. Delivered work → 6. Outcomes and evidence → 7. Related services and next step. |
| REG-08 | 1. Hero: Practical guidance for your digital decisions → 2. Topic navigation → 3. Article/resource collection → 4. Need practical help?. |
| REG-09 | 1. Article header → 2. Key takeaway and contents → 3. Main article → 4. Practical resource → 5. Related reading and services → 6. Contextual next step. |
| REG-10 | 1. Introduction and search: How can we help? → 2. Question categories → 3. Questions and answers → 4. Still need help?. |
| REG-11 | 1. Question and immediate answer → 2. When this applies → 3. Explanation or steps → 4. Related answers and offers → 5. Further help. |
| REG-12 | 1. Hero: How can we help? → 2. Contact form → 3. Contact details → 4. What happens next. |
| REG-13 | 1. Introduction: Tell us about your project → 2. Progress and form → 3. Contextual guidance → 4. Privacy and assistance. |
| REG-14 | 1. Hero: Discuss your goals with ARADUN → 2. What to expect → 3. Request/scheduling area → 4. Preparation and alternatives. |
| REG-15 | 1. Accurate confirmation → 2. What happens next → 3. Useful continuation. |
| REG-16 | 1. Search controls → 2. Results → 3. Recovery and continuation. |
| REG-17 | 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route. |
| REG-18 | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. |
| REG-19 | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. |
| REG-20 | 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements. |
| REG-21 | 1. Clear state heading → 2. Accurate explanation → 3. Recovery choices. |
| REG-22 | 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion. |
| REG-23 | 1. Heading and scope → 2. Operational summary → 3. Inquiries needing review → 4. Pipeline summary → 5. Follow-up priorities → 6. Recent activity and shortcuts. |
| REG-24 | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. |
| REG-25 | 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback. |
| REG-26 | 1. Heading → 2. Permitted modules → 3. Publication summaries → 4. Recent edits. |
| REG-27 | 1. Identity → 2. Summary and body → 3. Images and assets → 4. Classification and author → 5. SEO metadata → 6. Save and publication. |
| REG-28 | 1. Private-preview notice → 2. Rendered article → 3. Return/publication controls. |
| REG-29 | 1. Attribution → 2. Quotation → 3. Evidence and permission → 4. Context and preview → 5. Publication actions. |
| REG-30 | 1. Page identity → 2. Search metadata → 3. Canonical and index controls → 4. Social metadata and preview → 5. Save controls. |
| REG-31 | 1. Identity and type → 2. Answer/body → 3. Category and related links → 4. Metadata and preview → 5. Publication actions. |
| REG-32 | 1. Staff identity and status → 2. Assigned permissions → 3. Supported access controls → 4. Confirmation and history. |
| REG-33 | 1. Scope explanation → 2. Filters → 3. Events and detail → 4. Pagination and recovery. |
| REG-34 | 1. Own profile → 2. Sign-in and MFA → 3. Session and recovery → 4. Actions and feedback. |
| REG-35 | 1. Scope/status explanation → 2. Filters → 3. Records → 4. Entry/correction form → 5. Reconciliation feedback. |


### 15.1 Exact route and action matrix


| Page ID / name | Exact URL / route pattern | Phase / source status | Access | Source template / recipe | Primary / secondary action | S7 tasks | Test case ID |
|---|---|---|---|---|---|---|---|
| PUB-001 — Home | `/` | P1 / A | Public | T-HOME; REG-01 | Get a Quote. / Explore Services in hero; consultation and Contact in final invitation. | M09-01 | QA-PAGE-PUB-001 |
| PUB-002 — Services | `/services` | P1 / A | Public | T-OV-S; REG-02 | Choose a category. / Consultation for help selecting. | M05-03, M09-06 | QA-PAGE-PUB-002 |
| PUB-003 — Solutions | `/solutions` | P1 / A | Public | T-OV-SOL; REG-03 | Explore a solution. / Consultation. | M05-05, M09-06 | QA-PAGE-PUB-003 |
| PUB-004 — Pricing & Packages | `/pricing` | P1 / A | Public | T-PRICING; REG-04 | Compare an offer; Get a Quote. / View authoritative offer; Consultation. | M05-05, M09-06 | QA-PAGE-PUB-004 |
| PUB-005 — About ARADUN | `/about` | P1 / A | Public | T-ABOUT; REG-05 | Get a Quote. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M09-01 | QA-PAGE-PUB-005 |
| PUB-006 — Our Work | `/our-work` | P1 / A | Public | T-WORK; REG-06 | View a project. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M09-07 | QA-PAGE-PUB-006 |
| PUB-007 — Case Study / Project Detail | `/our-work/[slug]` | P1 / A | Public | T-CASE; REG-07 | Get a Quote for a similar need. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M09-07 | QA-PAGE-PUB-007 |
| PUB-008 — Insights & Resources | `/insights` | P1 / A | Public | T-INSIGHTS; REG-08 | Read an article or resource. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M09-08 | QA-PAGE-PUB-008 |
| PUB-009 — Article / Resource Detail | `/insights/[slug]` | P1 / A | Public | T-ARTICLE; REG-09 | Explore a relevant offer. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M09-08 | QA-PAGE-PUB-009 |
| PUB-010 — FAQs & Help | `/faq` | P1 / A | Public | T-FAQ; REG-10 | Find an answer. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M09-08 | QA-PAGE-PUB-010 |
| PUB-011 — Detailed Help Article | `/faq/[slug]` | P1 / A | Public | T-HELP; REG-11 | Contact ARADUN if unresolved. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M09-08 | QA-PAGE-PUB-011 |
| PUB-012 — Contact | `/contact` | P1 / A | Public | T-CONTACT; REG-12 | Send an inquiry. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M06-04 | QA-PAGE-PUB-012 |
| PUB-013 — Get a Quote | `/get-a-quote` | P1 / A | Public | T-QUOTE; REG-13 | Submit quote request. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M06-05 | QA-PAGE-PUB-013 |
| PUB-014 — Consultation | `/consultation` | P1 / A | Public | T-CONSULT; REG-14 | Request a consultation. / Relevant offer/detail or Contact for clarification; Consultation where it supports this task. | M06-04, M06-09 | QA-PAGE-PUB-014 |
| PUB-015 — Inquiry Confirmation | `/thank-you` | P1 / A | Public | T-CONFIRM; REG-15 | Review next steps; return to relevant content. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M06-06 | QA-PAGE-PUB-015 |
| PUB-016 — Search Results | `/search` | P1 / A | Public | T-SEARCH; REG-16 | Open result or refine query. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M10-01 | QA-PAGE-PUB-016 |
| PUB-017 — Privacy Policy | `/privacy` | P1 / A | Public | T-POLICY; REG-17 | Read policy; contact approved channel. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M09-09 | QA-PAGE-PUB-017 |
| PUB-018 — Website Terms | `/terms` | P1 / A | Public | T-POLICY; REG-17 | Read terms; request clarification. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M09-09 | QA-PAGE-PUB-018 |
| CAT-01 — Web & Software Development | `/services/web-software-development` | P1 / A | Public | T-CATEGORY; REG-18 | Choose a service; Get a Quote. / View a specific service; Consultation for guidance. | M05-03, M09-06, M09-10 | QA-PAGE-CAT-01 |
| CAT-02 — Mobile App Development | `/services/mobile-app-development` | P1 / A | Public | T-CATEGORY; REG-18 | Choose a service; Get a Quote. / View a specific service; Consultation for guidance. | M05-03, M09-06, M09-10 | QA-PAGE-CAT-02 |
| CAT-03 — AI Automation & CRM | `/services/ai-automation-crm` | P1 / A | Public | T-CATEGORY; REG-18 | Choose a service; Get a Quote. / View a specific service; Consultation for guidance. | M05-03, M09-06, M09-10 | QA-PAGE-CAT-03 |
| CAT-04 — Digital Marketing | `/services/digital-marketing` | P1 / A | Public | T-CATEGORY; REG-18 | Choose a service; Get a Quote. / View a specific service; Consultation for guidance. | M05-03, M09-06, M09-10 | QA-PAGE-CAT-04 |
| CAT-05 — Cloud & DevOps | `/services/cloud-devops` | P1 / A | Public | T-CATEGORY; REG-18 | Choose a service; Get a Quote. / View a specific service; Consultation for guidance. | M05-03, M09-06, M09-10 | QA-PAGE-CAT-05 |
| CAT-06 — Cybersecurity | `/services/cybersecurity` | P1 / A | Public | T-CATEGORY; REG-18 | Choose a service; Get a Quote. / View a specific service; Consultation for guidance. | M05-03, M09-06, M09-10 | QA-PAGE-CAT-06 |
| CAT-07 — UI/UX, Graphic Design & Branding | `/services/design-branding` | P1 / A | Public | T-CATEGORY; REG-18 | Choose a service; Get a Quote. / View a specific service; Consultation for guidance. | M05-03, M09-06, M09-10 | QA-PAGE-CAT-07 |
| CAT-08 — Video Editing & Production | `/services/video-editing-production` | P1 / A | Public | T-CATEGORY; REG-18 | Choose a service; Get a Quote. / View a specific service; Consultation for guidance. | M05-03, M09-06, M09-10 | QA-PAGE-CAT-08 |
| PUB-S001 — Business Website Development | `/services/business-website-development` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S001 |
| PUB-S002 — E-commerce Website Development | `/services/ecommerce-website-development` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S002 |
| PUB-S003 — Custom Web Application | `/services/custom-web-application` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S003 |
| PUB-S004 — Website Redesign | `/services/website-redesign` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S004 |
| PUB-S005 — Website Maintenance | `/services/website-maintenance` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S005 |
| PUB-S006 — Business Mobile App | `/services/business-mobile-app` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S006 |
| PUB-S007 — E-commerce Mobile App | `/services/ecommerce-mobile-app` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S007 |
| PUB-S008 — Custom Mobile App | `/services/custom-mobile-app` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S008 |
| PUB-S009 — Mobile App UI/UX Design | `/services/mobile-app-ui-ux-design` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S009 |
| PUB-S010 — Mobile App Maintenance | `/services/mobile-app-maintenance` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-02, M09-10 | QA-PAGE-PUB-S010 |
| PUB-S011 — Workflow Automation | `/services/workflow-automation` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S011 |
| PUB-S012 — CRM Setup & Customization | `/services/crm-setup-customization` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S012 |
| PUB-S013 — Lead Follow-up Automation | `/services/lead-follow-up-automation` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S013 |
| PUB-S014 — AI Chatbot | `/services/ai-chatbot` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S014 |
| PUB-S015 — AI Integrations | `/services/ai-integrations` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S015 |
| PUB-S016 — AI Voice Agent | `/services/ai-voice-agent` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S016 |
| PUB-S017 — Automation Maintenance | `/services/automation-maintenance` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S017 |
| PUB-S018 — SEO Services | `/services/seo-services` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S018 |
| PUB-S019 — Google Ads Management | `/services/google-ads-management` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S019 |
| PUB-S020 — Social Media Management | `/services/social-media-management` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S020 |
| PUB-S021 — Meta Ads Management | `/services/meta-ads-management` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S021 |
| PUB-S022 — Content Marketing | `/services/content-marketing` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S022 |
| PUB-S023 — Email Marketing | `/services/email-marketing` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S023 |
| PUB-S024 — Local SEO / Google Business Profile | `/services/local-seo-google-business-profile` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S024 |
| PUB-S025 — Conversion Rate Optimization & Analytics | `/services/conversion-rate-optimization-analytics` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S025 |
| PUB-S026 — Digital Marketing Consulting | `/services/digital-marketing-consulting` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-03, M09-10 | QA-PAGE-PUB-S026 |
| PUB-S027 — Cloud Infrastructure Setup | `/services/cloud-infrastructure-setup` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S027 |
| PUB-S028 — Application Deployment | `/services/application-deployment` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S028 |
| PUB-S029 — CI/CD Pipeline Setup | `/services/ci-cd-pipeline-setup` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S029 |
| PUB-S030 — Docker Containerization | `/services/docker-containerization` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S030 |
| PUB-S031 — Infrastructure as Code | `/services/infrastructure-as-code` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S031 |
| PUB-S032 — Monitoring & Observability | `/services/monitoring-observability` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S032 |
| PUB-S033 — Cloud Security & Backup | `/services/cloud-security-backup` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S033 |
| PUB-S034 — Managed Cloud Services | `/services/managed-cloud-services` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S034 |
| PUB-S035 — Web Application Security Assessment | `/services/web-application-security-assessment` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S035 |
| PUB-S036 — Vulnerability Assessment / Penetration Testing | `/services/vulnerability-assessment-penetration-testing` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S036 |
| PUB-S037 — Cloud Security Assessment | `/services/cloud-security-assessment` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S037 |
| PUB-S038 — Security Hardening | `/services/security-hardening` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S038 |
| PUB-S039 — Identity & Access / Email Security | `/services/identity-access-email-security` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S039 |
| PUB-S040 — Security Awareness Training | `/services/security-awareness-training` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S040 |
| PUB-S041 — Compliance Readiness | `/services/compliance-readiness` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S041 |
| PUB-S042 — Managed Security Services | `/services/managed-security-services` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-04, M09-10 | QA-PAGE-PUB-S042 |
| PUB-S043 — Website UI/UX Design | `/services/website-ui-ux-design` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S043 |
| PUB-S044 — SaaS Dashboard UI/UX | `/services/saas-dashboard-ui-ux` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S044 |
| PUB-S045 — Logo & Brand Identity | `/services/logo-brand-identity` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S045 |
| PUB-S046 — Graphic Design | `/services/graphic-design` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S046 |
| PUB-S047 — Landing Page Design | `/services/landing-page-design` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S047 |
| PUB-S048 — UX Audit | `/services/ux-audit` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S048 |
| PUB-S049 — Monthly Design Support | `/services/monthly-design-support` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S049 |
| PUB-S050 — Short-form Video Editing | `/services/short-form-video-editing` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S050 |
| PUB-S051 — YouTube Video Editing | `/services/youtube-video-editing` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S051 |
| PUB-S052 — Promotional / Ad Video | `/services/promotional-ad-video` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S052 |
| PUB-S053 — Corporate Video Production | `/services/corporate-video-production` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S053 |
| PUB-S054 — Motion Graphics | `/services/motion-graphics` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S054 |
| PUB-S055 — Podcast Editing | `/services/podcast-editing` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S055 |
| PUB-S056 — Captions / Subtitles | `/services/captions-subtitles` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S056 |
| PUB-S057 — Monthly Video Editing | `/services/monthly-video-editing` | P1 / A | Public | T-SERVICE; REG-19 | Get a Quote with service/package context; availability-appropriate inquiry if coming soon. / Consultation; parent category and relevant solution. | M05-04, M09-05, M09-10 | QA-PAGE-PUB-S057 |
| SOL-01 — Digital Presence | `/solutions/digital-presence` | P1 / A | Public | T-SOLUTION; REG-20 | Get a Quote with solution/package context. / Consultation; related individual service or neighboring solution. | M05-05, M09-06 | QA-PAGE-SOL-01 |
| SOL-02 — Business Automation | `/solutions/business-automation` | P1 / A | Public | T-SOLUTION; REG-20 | Get a Quote with solution/package context. / Consultation; related individual service or neighboring solution. | M05-05, M09-06 | QA-PAGE-SOL-02 |
| SOL-03 — Business Growth | `/solutions/business-growth` | P1 / A | Public | T-SOLUTION; REG-20 | Get a Quote with solution/package context. / Consultation; related individual service or neighboring solution. | M05-05, M09-06 | QA-PAGE-SOL-03 |
| SOL-04 — Cloud & Technology | `/solutions/cloud-technology` | P1 / A | Public | T-SOLUTION; REG-20 | Get a Quote with solution/package context. / Consultation; related individual service or neighboring solution. | M05-05, M09-06 | QA-PAGE-SOL-04 |
| SOL-05 — Complete Digital Business | `/solutions/complete-digital-business` | P1 / A | Public | T-SOLUTION; REG-20 | Get a Quote with solution/package context. / Consultation; related individual service or neighboring solution. | M05-05, M09-06 | QA-PAGE-SOL-05 |
| TRU-01 — Cookie Information | `/cookies` | P1 conditional / C | Public | T-POLICY; REG-17 | Review or manage supported choices. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M09-09 | QA-PAGE-TRU-01 |
| TRU-02 — Accessibility Statement | `/accessibility` | P1 conditional / C | Public | T-POLICY; REG-17 | Report an accessibility issue. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M09-09 | QA-PAGE-TRU-02 |
| TRU-03 — Responsible Disclosure | `/security` | P1 conditional / C | Public | T-POLICY; REG-17 | Submit a report through the approved channel. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M09-09 | QA-PAGE-TRU-03 |
| SYS-01 — Page Not Found | `Requested nonexistent URL; no dedicated /404 route` | P1 / A | Public | T-STATE; REG-21 | Search; choose a service; return Home. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M04-05 | QA-PAGE-SYS-01 |
| SYS-02 — Recoverable Error | `Affected route; no dedicated /error route` | P1 / A | Public | T-STATE; REG-21 | Retry or contact ARADUN. / Relevant policy/help or safe navigation recovery; avoid competing sales prompts. | M04-05 | QA-PAGE-SYS-02 |
| STA-001 — Staff Sign In | `/staff/login` | P1 / B | Authentication gateway; no business data | T-AUTH; REG-22 | Sign in. / Supported recovery/help or return to Sign In, according to this authentication task. | M03-01, M04-04 | QA-PAGE-STA-001 |
| STA-002 — Staff Access Recovery | `/staff/recover` | P1 provider/policy conditional / C | Authentication gateway; no business data | T-AUTH; REG-22 | Request recovery. / Supported recovery/help or return to Sign In, according to this authentication task. | M03-03, M04-04 | QA-PAGE-STA-002 |
| STA-003 — Staff Recovery Completion | `/staff/reset` | P1 provider/policy conditional / C | Authentication gateway; no business data | T-AUTH; REG-22 | Restore access. / Supported recovery/help or return to Sign In, according to this authentication task. | M03-03, M04-04 | QA-PAGE-STA-003 |
| STA-004 — Staff Verification / MFA | `/staff/verify` | P1 provider/policy conditional / C | Authentication gateway; no business data | T-AUTH; REG-22 | Verify identity. / Supported recovery/help or return to Sign In, according to this authentication task. | M03-03, M04-04 | QA-PAGE-STA-004 |
| ADM-001 — Dashboard Overview | `/dashboard` | P1 / B | Private staff; server-authorized role and record scope | T-DASH; REG-23 | Open priority work. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M11-01 | QA-PAGE-ADM-001 |
| ADM-002 — Leads & Inquiries | `/dashboard/leads` | P1 / B | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Open an inquiry. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M06-06, M07-02 | QA-PAGE-ADM-002 |
| ADM-003 — Lead Detail | `/dashboard/leads/[leadId]` | P1 / B | Private staff; server-authorized role and record scope | T-DETAIL; REG-25 | Qualify; assign; update status; add note or task. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M06-06, M07-02 | QA-PAGE-ADM-003 |
| ADM-004 — Contacts | `/dashboard/contacts` | P1 / B | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Find or open a contact. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M07-01 | QA-PAGE-ADM-004 |
| ADM-005 — Contact Detail | `/dashboard/contacts/[contactId]` | P1 / B | Private staff; server-authorized role and record scope | T-DETAIL; REG-25 | Review linked inquiries and opportunities. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M07-01 | QA-PAGE-ADM-005 |
| ADM-006 — Sales Pipeline | `/dashboard/opportunities` | P1 / B | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Open or update an opportunity. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M07-03 | QA-PAGE-ADM-006 |
| ADM-007 — Opportunity Detail | `/dashboard/opportunities/[opportunityId]` | P1 / B | Private staff; server-authorized role and record scope | T-DETAIL; REG-25 | Update stage; create task; confirm customer conversion. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M07-03 | QA-PAGE-ADM-007 |
| ADM-008 — Follow-up Tasks | `/dashboard/tasks` | P1 / B | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Create, assign or complete a task. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M07-04 | QA-PAGE-ADM-008 |
| ADM-009 — Task Detail | `/dashboard/tasks/[taskId]` | P1 / B | Private staff; server-authorized role and record scope | T-DETAIL; REG-25 | Edit or complete task. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M07-04 | QA-PAGE-ADM-009 |
| ADM-010 — Customers | `/dashboard/customers` | P1 / B | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Open customer. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M07-05 | QA-PAGE-ADM-010 |
| ADM-011 — Customer Detail | `/dashboard/customers/[customerId]` | P1 / B | Private staff; server-authorized role and record scope | T-DETAIL; REG-25 | Review history; create follow-up. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M07-05 | QA-PAGE-ADM-011 |
| ADM-012 — Content Overview | `/dashboard/content` | P1 / B | Private staff; server-authorized role and record scope | T-CONTENT; REG-26 | Open an allowed content tool. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M11-01 | QA-PAGE-ADM-012 |
| ADM-013 — Articles & Resources | `/dashboard/content/articles` | P1 / B | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Create or edit article. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-02 | QA-PAGE-ADM-013 |
| ADM-014 — Create Article | `/dashboard/content/articles/new` | P1 / B | Private staff; server-authorized role and record scope | T-EDITOR; REG-27 | Save draft. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-02 | QA-PAGE-ADM-014 |
| ADM-015 — Article Editor | `/dashboard/content/articles/[articleId]` | P1 / B | Private staff; server-authorized role and record scope | T-EDITOR; REG-27 | Save draft; publish; unpublish. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-02 | QA-PAGE-ADM-015 |
| ADM-016 — Article Preview | `/dashboard/content/articles/[articleId]/preview` | P1 / B | Private staff; server-authorized role and record scope | T-PREVIEW; REG-28 | Return to editor. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-02 | QA-PAGE-ADM-016 |
| ADM-017 — Testimonials & Reviews | `/dashboard/content/testimonials` | P1 / B | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Create or edit permitted testimony. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-03 | QA-PAGE-ADM-017 |
| ADM-018 — Testimonial Editor | `/dashboard/content/testimonials/[testimonialId]` | P1 / B | Private staff; server-authorized role and record scope | T-TESTIMONIAL; REG-29 | Save; publish or hide. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-03 | QA-PAGE-ADM-018 |
| ADM-019 — SEO Metadata | `/dashboard/content/seo` | P1 / B | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Choose page metadata. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-04 | QA-PAGE-ADM-019 |
| ADM-020 — SEO Metadata Editor | `/dashboard/content/seo/[pageId]` | P1 / B | Private staff; server-authorized role and record scope | T-SEOEDIT; REG-30 | Save validated metadata. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-04 | QA-PAGE-ADM-020 |
| ADM-021 — FAQs & Help Management | `/dashboard/content/faqs` | P1 conditional / C | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Create or edit answer. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-06 | QA-PAGE-ADM-021 |
| ADM-022 — FAQ / Help Editor | `/dashboard/content/faqs/[faqId]` | P1 conditional / C | Private staff; server-authorized role and record scope | T-FAQEDIT; REG-31 | Save; publish or hide answer. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M08-06 | QA-PAGE-ADM-022 |
| ADM-023 — Staff Access Administration | `/dashboard/settings/access` | P1 conditional / C | Private staff; server-authorized role and record scope | T-LIST; REG-24 | Provision or revoke staff access. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M11-04 | QA-PAGE-ADM-023 |
| ADM-024 — Staff Access Detail | `/dashboard/settings/access/[userId]` | P1 conditional / C | Private staff; server-authorized role and record scope | T-ACCESS; REG-32 | Change permitted role; revoke access. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M11-04 | QA-PAGE-ADM-024 |
| ADM-025 — Audit Log Viewer | `/dashboard/audit` | P1 conditional / C | Private staff; server-authorized role and record scope | T-AUDIT; REG-33 | Filter audit events. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M11-05 | QA-PAGE-ADM-025 |
| ADM-026 — My Account & Security | `/dashboard/account` | P1 / B | Private staff; server-authorized role and record scope | T-ACCOUNT; REG-34 | Manage own supported security settings; sign out. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M03-03, M04-04 | QA-PAGE-ADM-026 |
| ADM-027 — Manual Payment Tracker | `/dashboard/payments` | P1 conditional / C | Private staff; server-authorized role and record scope | T-PAYMENTS; REG-35 | Record verified payment or correction. / Return to parent/work queue; open only authorized linked records; cancel edits where relevant. | M11-06 | QA-PAGE-ADM-027 |


### 15.2 Page-specific content and interaction checks

These retained S7/S3 notes specialize the common recipe. Blank source notes do not mean no testing: recipe, global state/access checks, S9 record population and task AC remain mandatory. The service commercial oracle below supplies every service’s own name/price; S9 §7 supplies distinct service copy and assets.


| Page | Additional exact source content / operation constraint |
|---|---|
| PUB-001 | Eight core sections plus three evidence-dependent sections (4, 8, 9): published page may show 8–11. Industry relevance belongs within solution/audience content; technology evidence belongs within capabilities/work, not separate long homepage walls. Preserve all planned sections even when evidence display is deferred. |
| PUB-003 | Selection mapping: professional online presence → SOL-01; repetitive administration → SOL-02; coordinated marketing → SOL-03; deployment/infrastructure improvements → SOL-04; connected needs across business → SOL-05. |
| PUB-004 | Preserve source payment planning guidance: Starter projects 50% deposit/50% before final handoff; Professional 40/30/30 at agreed milestones; Enterprise custom; retainers monthly in advance with cancellation governed by agreement. Retainer source guidance generally 30 days and no unused-hour rollover unless agreed is not a new universal promise. No new refund terms or public checkout. |
| PUB-005 | No separate founder/team pages. Technology logos describe real use, not partnership. Narrative/public origin wording remains D-001. |
| PUB-006 | Empty collection is honestly explained; no-match filters offer reset. Do not fabricate projects to meet a count. |
| PUB-007 | Classify Client Work, ARADUN Internal Product or Concept/Demo. Never present concept outcomes as measured client results. |
| PUB-013 | Step 1: service(s), solution/package or Custom/Not sure. Step 2: required brief description, optional budget/timeline. Step 3: required name/email, optional company/website. Step 4: editable summary, indicative context, applicable privacy acknowledgement and submit. Accept personal/business emails; no account. Preserve selections, edits and safe retries. Optional marketing consent is separate. |
| PUB-014 | D-003: requested Google Calendar scheduling direction is recorded; documents still use manual P1 requests. Manual preferred time/timezone is pending staff confirmation. Live mode shows provider availability/timezone and confirmed appointment details, with unavailable-slot/loading failure fallback; phase, external-link versus integration, CRM linkage and account capability remain unresolved. Same public route, no invented internal appointment promotion. |
| PUB-015 | Direct URL visits cannot prove submission or trigger a conversion. Reference alone grants no record access. Notification delay does not require resubmission of an already saved inquiry. |
| PUB-017 | Body order: responsible business/contact; collected information; purposes; providers/sharing; retention; applicable choices/request process; factual security description; cookies/embeds; updates. Match actual providers and data handling. |
| PUB-018 | Body order: operator/scope; acceptable use; content/IP; indicative services/prices; external links; distinction from client agreements; applicable terms; contact/updates. Final wording depends on actual operating entity/policies. |
| CAT-01 | Owners and product teams; Websites and software built around your business needs. Compare business website/e-commerce/custom application and redesign/maintenance; explain content and existing-site inputs. Related solutions: SOL-01, SOL-05. |
| CAT-02 | Founders and product owners; Mobile experiences for your customers and team. Compare business/e-commerce/custom apps and design/development; explain backend and release responsibilities. Related solutions: SOL-05. |
| CAT-03 | Operations and sales leaders; Connect your tools and reduce repetitive work. Compare CRM/workflow/follow-up and chatbot/voice; explain dependencies and human handoff. Related solutions: SOL-02. |
| CAT-04 | Owners and marketers; Connect discovery, engagement, and conversion. Compare organic/paid, management/production; separate ad spend and external costs. Related solutions: SOL-03. |
| CAT-05 | Technical founders and engineers; Improve how your applications are deployed and operated. Compare setup/deployment/ongoing management; clarify ownership, bills and responsibilities. Related solutions: SOL-04. |
| CAT-06 | Technical and risk stakeholders; Understand risks and strengthen your systems. Compare assessment/remediation/ongoing services; explain authorized scope, reporting limits and qualified delivery. Related solutions: SOL-04. |
| CAT-07 | Founders, product owners and marketers; Design clear experiences and consistent brand communication. Compare product design/branding/graphics and design/implementation; explain assets and review. Related solutions: SOL-01, SOL-05. |
| CAT-08 | Marketers and creators; Turn your message into effective video content. Compare supplied-footage editing/production, short/long form, motion graphics/captions and recurring work. Related solutions: SOL-03. |
| PUB-S001 | Variation: **Project**. Specific scope: Page structure, content responsibilities, forms, editing and handoff. Distinguishing FAQ: **Who supplies the website content?** Existing indicative USD pricing: **$699+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S045, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S002 | Variation: **Project**. Specific scope: Catalog, checkout, shipping/tax requirements, integrations and store administration. Distinguishing FAQ: **Are payment-provider charges included?** Existing indicative USD pricing: **$999+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S007, PUB-S018, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S003 | Variation: **Custom**. Specific scope: Users, workflows, roles, integrations, acceptance criteria and discovery. Distinguishing FAQ: **How will you estimate a custom application?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S044, PUB-S015, PUB-S028, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S004 | Variation: **Project**. Specific scope: Existing-site review, content migration, URL continuity and cutover responsibilities. Distinguishing FAQ: **Can existing content and URLs be retained?** Existing indicative USD pricing: **$399+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S048, PUB-S043, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S005 | Variation: **Ongoing**. Specific scope: Covered systems, routine work, request limits and out-of-scope changes. Distinguishing FAQ: **What counts as maintenance versus new development?** Existing indicative USD pricing: **$49 / $99 / $199+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S004, PUB-S032, PUB-S035, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S006 | Variation: **Project**. Specific scope: Business workflows, supported devices, backend dependencies and release responsibilities. Distinguishing FAQ: **Does the app need a separate backend?** Existing indicative USD pricing: **$1,999+ / $4,999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S009, PUB-S003, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S007 | Variation: **Project**. Specific scope: Store integration, catalog, orders, accounts and payment dependencies. Distinguishing FAQ: **Can it connect to our existing store?** Existing indicative USD pricing: **$2,499+ / $5,999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S002, PUB-S009, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S008 | Variation: **Custom**. Specific scope: Product requirements, device capabilities, integrations and release planning. Distinguishing FAQ: **What information is needed to scope the app?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S009, PUB-S015, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S009 | Variation: **Design/media**. Specific scope: User flows, screens, interaction states, prototype and developer handoff. Distinguishing FAQ: **Does the design package include app development?** Existing indicative USD pricing: **$299+ / $899+ (cross-listed under Design)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S006, PUB-S008, PUB-S044, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. Cross-listed in CAT-02 and CAT-07 using this one canonical page; do not create a duplicate UI/UX service route. |
| PUB-S010 | Variation: **Ongoing**. Specific scope: Supported app versions, defects, compatibility work and release assistance. Distinguishing FAQ: **Are new features included?** Existing indicative USD pricing: **$99 / $249 / $499+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S006, PUB-S008, PUB-S032, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S011 | Variation: **Project**. Specific scope: Triggers, actions, connected systems, exceptions and handoff. Distinguishing FAQ: **What happens if an automated step fails?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S012 | Variation: **Project**. Specific scope: Pipelines, fields, migration boundaries, access and user orientation. Distinguishing FAQ: **Can existing customer records be imported?** Existing indicative USD pricing: **$399+ / $1,199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S013 | Variation: **Project**. Specific scope: Follow-up triggers, channels, message approvals, stop conditions and staff handoff. Distinguishing FAQ: **When does automated follow-up stop?** Existing indicative USD pricing: **$349+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S023, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S014 | Variation: **Project**. Specific scope: Approved knowledge, supported tasks, uncertainty, escalation and usage costs. Distinguishing FAQ: **What happens when the chatbot cannot answer?** Existing indicative USD pricing: **$499+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S015, PUB-S011, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S015 | Variation: **Custom**. Specific scope: Intended AI task, connected systems, data boundaries, evaluation and usage costs. Distinguishing FAQ: **What data will the AI provider receive?** Existing indicative USD pricing: **$799+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S014, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S016 | Variation: **Custom**. Specific scope: Call purposes, supported interactions, disclosure, escalation and telephony costs. Distinguishing FAQ: **Can calls transfer to a person?** Existing indicative USD pricing: **$799+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S017 | Variation: **Ongoing**. Specific scope: Monitored workflows, failure investigation, dependency changes and update limits. Distinguishing FAQ: **Are new automations included?** Existing indicative USD pricing: **$99 / $249 / $599+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S012, PUB-S015, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S018 | Variation: **Ongoing**. Specific scope: Technical/content priorities, approved implementation scope and reporting. Distinguishing FAQ: **How will progress be measured?** Existing indicative USD pricing: **$299 / $699 per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S024, PUB-S025, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S019 | Variation: **Ongoing**. Specific scope: Account access, campaign scope, tracking, management fee, setup and separate ad spend. Distinguishing FAQ: **How much of the payment goes to advertising?** Existing indicative USD pricing: **$249 / $599 per month (setup and ad spend separate)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S047, PUB-S025, PUB-S052, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S020 | Variation: **Ongoing**. Specific scope: Platforms, content responsibilities, approval and community-management boundaries. Distinguishing FAQ: **Who approves posts before publication?** Existing indicative USD pricing: **$299 / $699 per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S046, PUB-S050, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S021 | Variation: **Ongoing**. Specific scope: Campaign scope, audiences, creative responsibilities, tracking and separate ad spend. Distinguishing FAQ: **Is creative production included?** Existing indicative USD pricing: **$249 / $599 per month (ad spend separate)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S046, PUB-S047, PUB-S052, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S022 | Variation: **Project**. Specific scope: Audience, formats, research, writing, review and distribution boundaries. Distinguishing FAQ: **Which content formats are covered?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S018, PUB-S023, PUB-S020, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S023 | Variation: **Project**. Specific scope: Campaign or workflow scope, subscriber data, templates, testing and platform costs. Distinguishing FAQ: **Do you manage campaigns, automations, or both?** Existing indicative USD pricing: **$249+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S013, PUB-S022, PUB-S012, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S024 | Variation: **Project**. Specific scope: Business/location details, profile work, local content and owner access. Distinguishing FAQ: **Can you help with an existing business profile?** Existing indicative USD pricing: **$199+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S001, PUB-S018, PUB-S022, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S025 | Variation: **Assessment**. Specific scope: Measurement review, journey friction, hypotheses, recommendations and testing dependencies. Distinguishing FAQ: **Is there enough traffic to run meaningful tests?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S048, PUB-S047, PUB-S019, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S026 | Variation: **Assessment**. Specific scope: Goals, channel review, priorities, recommendations and engagement format. Distinguishing FAQ: **Does consulting include implementation?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S018, PUB-S019, PUB-S025, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S027 | Variation: **Project**. Specific scope: Environments, access, infrastructure scope, documentation and provider charges. Distinguishing FAQ: **Who owns the cloud account?** Existing indicative USD pricing: **$399+ / $1,299+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S031, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S028 | Variation: **Project**. Specific scope: Application readiness, target environment, configuration, deployment checks and handoff. Distinguishing FAQ: **What access and application files are required?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S029, PUB-S030, PUB-S032, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S029 | Variation: **Project**. Specific scope: Build/test/release stages, permissions, approvals and rollback responsibilities. Distinguishing FAQ: **Which repositories and environments are covered?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S031, PUB-S032, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S030 | Variation: **Project**. Specific scope: Application packaging, configuration, local operation and documentation. Distinguishing FAQ: **Does containerization also include cloud deployment?** Existing indicative USD pricing: **$249+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S029, PUB-S031, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S031 | Variation: **Project**. Specific scope: Managed resources, ownership, state handling and change workflow. Distinguishing FAQ: **Can existing infrastructure be brought under management?** Existing indicative USD pricing: **$399+ / $1,199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S029, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S032 | Variation: **Project**. Specific scope: Logs, metrics, alerts, dashboards and operational ownership. Distinguishing FAQ: **Who responds when an alert fires?** Existing indicative USD pricing: **$249+ / $799+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S033, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S033 | Variation: **Project**. Specific scope: Access, configuration, backup scope, retention decisions and recovery verification. Distinguishing FAQ: **Is restoration testing included in the agreed scope?** Existing indicative USD pricing: **$349+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S032, PUB-S038, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S034 | Variation: **Ongoing**. Specific scope: Managed assets, routine operations, reporting, response arrangements and exclusions. Distinguishing FAQ: **Are cloud-provider bills separate?** Existing indicative USD pricing: **$99 / $299 / $799+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S032, PUB-S037, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S035 | Variation: **Assessment**. Specific scope: Authorized application boundaries, review approach, findings and remediation options. Distinguishing FAQ: **Does the engagement include fixing findings?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S036, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S036 | Variation: **Assessment + custom**. Specific scope: Written authorization, targets, testing boundaries, reporting and retest options. Distinguishing FAQ: **What permission is required before testing?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S037 | Variation: **Assessment**. Specific scope: Accounts/services reviewed, access arrangements, findings and priorities. Distinguishing FAQ: **Which cloud environments are assessed?** Existing indicative USD pricing: **$399+ / $1,299+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S038 | Variation: **Project**. Specific scope: Approved configuration changes, compatibility checks, rollback and handoff. Distinguishing FAQ: **Could changes affect existing applications?** Existing indicative USD pricing: **$249+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S033, PUB-S035, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S039 | Variation: **Project**. Specific scope: Identity/email environment, account controls, policies and rollout boundaries. Distinguishing FAQ: **Which systems and user accounts are included?** Existing indicative USD pricing: **$199+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S040, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S040 | Variation: **Project**. Specific scope: Audience, topics, delivery format, materials and assessment options. Distinguishing FAQ: **Can training reflect our team’s work?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S039, PUB-S041, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S041 | Variation: **Assessment + custom**. Specific scope: Selected framework, readiness gaps, evidence preparation and responsibility boundaries. Distinguishing FAQ: **Is this certification or readiness assistance?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S037, PUB-S040, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S042 | Variation: **Ongoing**. Specific scope: Covered systems, monitoring responsibilities, escalation and service-hour boundaries. Distinguishing FAQ: **What response coverage is actually provided?** Existing indicative USD pricing: **$149 / $399 / $999+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S037, PUB-S038, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S043 | Variation: **Design/media**. Specific scope: Page types, responsive states, prototype and handoff. Distinguishing FAQ: **Does this include a working website?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S001, PUB-S004, PUB-S048, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S044 | Variation: **Design/media**. Specific scope: Roles, workflows, tables, forms and loading/empty/error states. Distinguishing FAQ: **How are complex user roles represented?** Existing indicative USD pricing: **$499+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S003, PUB-S009, PUB-S048, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S045 | Variation: **Design/media**. Specific scope: Brief, identity assets, review process, file formats and usage guidance. Distinguishing FAQ: **Which final files will we receive?** Existing indicative USD pricing: **$149+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S046, PUB-S022, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S046 | Variation: **Design/media**. Specific scope: Asset types, formats, source material, reviews and delivery. Distinguishing FAQ: **Are editable source files included?** Existing indicative USD pricing: **$49+ / $249+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S020, PUB-S021, PUB-S045, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S047 | Variation: **Design/media**. Specific scope: Campaign goal, content hierarchy, conversion flow and responsive design. Distinguishing FAQ: **Who supplies the copy and implements the page?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S019, PUB-S025, PUB-S022, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S048 | Variation: **Assessment**. Specific scope: Journeys reviewed, evidence, findings, severity and recommendations. Distinguishing FAQ: **Does the audit include redesign work?** Existing indicative USD pricing: **$199+ / $799+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S044, PUB-S025, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S049 | Variation: **Ongoing**. Specific scope: Request workflow, agreed capacity, priorities, reviews and exclusions. Distinguishing FAQ: **How are simultaneous requests handled?** Existing indicative USD pricing: **$149 / $399 / $899+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S046, PUB-S047, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S050 | Variation: **Design/media**. Specific scope: Supplied footage, target format, pacing, captions and exports. Distinguishing FAQ: **What footage should we provide?** Existing indicative USD pricing: **$39+ / $199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S020, PUB-S021, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S051 | Variation: **Design/media**. Specific scope: Source footage, style, audio, graphics and agreed output length. Distinguishing FAQ: **Are thumbnails or publishing included?** Existing indicative USD pricing: **$99+ / $349+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S055, PUB-S054, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S052 | Variation: **Design/media**. Specific scope: Campaign brief, message, supplied/produced assets, variants and usage rights. Distinguishing FAQ: **Does the quote include filming or only editing?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S021, PUB-S047, PUB-S054, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S053 | Variation: **Design/media**. Specific scope: Pre-production, filming arrangements, location responsibilities, editing and expenses. Distinguishing FAQ: **Where can production take place?** Existing indicative USD pricing: **$249+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S052, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S054 | Variation: **Design/media**. Specific scope: Script/storyboard, visual assets, animation scope, reviews and exports. Distinguishing FAQ: **Do we need to supply a storyboard?** Existing indicative USD pricing: **$199+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S052, PUB-S051, PUB-S046, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S055 | Variation: **Design/media**. Specific scope: Audio/video source, cleanup, episode structure and output formats. Distinguishing FAQ: **Are clips and distribution included?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S050, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S056 | Variation: **Design/media**. Specific scope: Source language, transcription/translation boundaries, timing, review and format. Distinguishing FAQ: **Is translation included?** Existing indicative USD pricing: **$29+ / $149+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S050, PUB-S051, PUB-S055, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S057 | Variation: **Ongoing**. Specific scope: Workload, source-footage limits, output formats, priorities and revisions. Distinguishing FAQ: **How many deliverables does the agreed plan cover?** Existing indicative USD pricing: **$199 / $599 / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S050, PUB-S051, PUB-S055, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| SOL-01 | Build a clear, professional digital presence. Audience: new businesses/SMBs. Address missing/outdated websites, unclear messaging, inconsistent presentation and inquiry journeys. Explain potential website design/development, relevant brand assets, content responsibilities and inquiry paths. Process: goals/assets → scope/content → design/build → review → launch/handoff. Evidence: actual website contribution/usability. FAQs: existing branding; who supplies content; hosting and maintenance. Link PUB-S001, PUB-S004, PUB-S043, PUB-S045, PUB-S005. |
| SOL-02 | Connect your workflows and reduce repetitive administration. Audience: owners/operations/sales. Address repeated entry, disconnected tools and missed follow-ups. Explain workflow mapping, CRM configuration, integrations, automated steps, exceptions and staff handoff. Process: map → rules/responsibilities → configure/connect → normal/failure tests → orientation/handoff. Evidence: actual workflow with human intervention. FAQs: keep current CRM; failures; subscriptions. Link PUB-S011, PUB-S012, PUB-S013, PUB-S015, PUB-S017. AI is not required for every automation. |
| SOL-03 | Build a coordinated approach to digital growth. Audience: owners/marketing leaders. Address fragmented activity, inconsistent content and weak measurement. Explain selected channels, approvals, recurring workload, reporting and campaign responsibilities. Process: objectives/baseline → channel priorities → prepare → operate/measure → review. Evidence: permitted campaign with documented context. FAQs: included channels; separate ad spend; progress review. Link PUB-S018–PUB-S022 and PUB-S025. Do not promise rankings, lead quantities or revenue. |
| SOL-04 | Create a clearer foundation for deployment and operations. Audience: technical founders/engineers. Address inconsistent deployments, unclear environments and limited visibility. Explain relevant setup, pipelines, monitoring, backup and documentation with client boundaries. Process: environment review → target scope → changes → verify deployment/recovery → handoff/separate management. Evidence: sanitized genuine implementation artifacts. FAQs: account ownership; provider charges; monitoring/response. Link PUB-S027–PUB-S029, PUB-S032–PUB-S034. |
| SOL-05 | Plan connected digital improvements around your business. Audience: organizations with connected needs. Explain priorities, selected workstreams, dependencies, phased delivery, responsibilities and acceptance. Process: priorities → workstreams → scope/milestones → incremental delivery/review → handoff/optional support. All three tiers remain Custom quote; define differences before publication. FAQs: staged delivery; existing tools; whether all services are included. Complete means agreed coordinated scope, not automatic inclusion of all 57 services. Link SOL-01–SOL-04 and relevant constituent services. Do not combine separate examples into a fictional integrated client engagement. |
| TRU-01 | Conditional body: actual technologies/providers; purposes/categories; durations; supported controls; changing choices; privacy/contact links. May be incorporated into Privacy by approved choice. |
| TRU-02 | Conditional body: accessibility approach; actual evaluated scope; known limitations; alternatives; barrier reporting; review date. No unsupported certification claim. |
| TRU-03 | Conditional body: covered systems; actual reporting channel; useful report details; approved research boundaries; handling; disclosure coordination. Do not invent authorization, rewards, deadlines or legal protections. |
| SYS-01 | Suggested heading: We couldn’t find that page. Render at the requested nonexistent URL; preserve true 404 behavior. |
| SYS-02 | Explain what could not load/complete, whether action state is known, and safe retry. Render at affected route; no new /error URL. |
| STA-001 | Sign In submits provisioned staff credentials/provider identity. Show pending, generic invalid credentials, provider failure and expired-session recovery. Success returns only to a safe permitted local destination; recovery link never offers public staff registration. |
| STA-002 | Recovery accepts the supported identifier, returns the same neutral acknowledgement for existing/nonexisting identities, and exposes retry/throttle guidance without account enumeration. Success means instructions requested, not proof of mail delivery. |
| STA-003 | Reset form starts only with supported valid reset context. Invalid/expired token state offers restart; confirmation/strength rules follow provider. Save success returns to sign-in; do not echo tokens or log them in analytics. |
| STA-004 | Verification shows the supported challenge and available recovery method. Label one-time-code input; allow paste/autofill; expose invalid, expired, limited-retry and recovery states. Production MFA choice remains D-009. |
| ADM-001 | Operational summary shows authorized inquiries/status and due/overdue counts; inquiry rows reference/type/date/owner; pipeline includes stage and labeled estimated value; task rows title/owner/due/record; activity includes actor/time/action. Clicking a summary uses permitted existing list filters, not new reporting pages. |
| ADM-002 | Table columns: reference, person, inquiry type, selected offer, owner, created date, status. Filters: type, owner, date, status. Primary action opens the selected inquiry; no invented manual lead-create page. Empty collection explains capture sources; no-match offers Reset. |
| ADM-003 | Core panel preserves submitted contact, original message, selected offer/price snapshot, optional budget/timeline and source/UTM context. Staff controls assign owner, classify/qualify, add note and follow-up task; linked opportunity/contact and activity follow. Conversion/duplicate decisions are reviewed under D-011. |
| ADM-004 | Contact table: name, email, company text, useful contact detail and linked-record context. Search/open is primary. Company text is not a P2 company entity. No-match/reset differs from no saved contacts. |
| ADM-005 | Show contact identity, communication facts, linked inquiries/opportunities/customer classification and history. Permitted updates preserve relationships; suspected duplicate presents reviewed resolution, no silent merge. Company is a text fact until P2. |
| ADM-006 | Region 3 contains the fixed stage summary and operational opportunity table: identity, contact, stage, owner, estimated amount/currency and latest activity. Filters stage/owner. Optional board uses the same source data: desktop stage columns with local scroll; tablet/mobile stage selector and list. Every card offers a keyboard-operable Move to stage action; drag-and-drop is neither required nor sufficient. No configurable pipeline, forecasts or invented stage. Empty stage differs from fetch failure. |
| ADM-007 | Show inquiry/contact, scope, stage, owner, estimated amount/currency; related records, stage history, notes and tasks. Stage change exposes exact new stage and records result. Won/Lost remains opportunity state; reviewed customer conversion does not claim payment. Confirmation addresses specific conversion/correction effects. |
| ADM-008 | Task table: title, linked record, owner, due date/timezone, status. Filters due/overdue/completed/owner; in-page Create Task supports title, owner, due and record. Completion updates row and announces result; no automated external reminder campaign. |
| ADM-009 | Task detail exposes title/notes, owner, due/timezone, status, linked record and completion context. Save and Mark complete are distinct actions. Incomplete fields, unavailable related record, stale update and successful completion have explicit states. |
| ADM-010 | Customer list shows identity/contact and reviewed conversion context; search/open supports sales follow-up. No invoices, portal credentials or paid badges inferred from classification. Empty explains that reviewed conversion creates customer context. |
| ADM-011 | Customer detail shows facts/conversion context and related inquiries, opportunities, notes and tasks. Each relationship respects record permissions. Correcting classification retains history; customer identity alone is not evidence of a sale receipt. |
| ADM-012 | Module cards: Articles, Testimonials, SEO and FAQs only if its authoring UI is selected. Summaries are real authorized draft/published counts; recent edits show title/type/status/time. No page-builder, catalog editor, media library or sales-data module inferred. |
| ADM-013 | Article table: title, type/topic, publication status, author, modified and publication dates. Search/status/category filters; New Article, Edit and private Preview where a saved record exists. Empty offers first draft without inventing public content. |
| ADM-014 | New Article uses all six editor groups; Save Draft creates a real saved identity before Preview. Title/slug/body/asset alt/classification/SEO are reviewed; draft can be incomplete where policy permits, while publication checks are stricter. Publication permission remains D-013. |
| ADM-015 | Existing Article offers Save Draft or clearly named save behavior, private Preview, authorized Publish and Unpublish. Display current public state and last saved state separately. U-03 must decide whether editing a live item updates it immediately or creates an unpublished revision; no hidden assumption or scheduled publishing. |
| ADM-016 | Private Preview renders the actual article template, notice and Return to Editor. Only permitted staff can read it or draft assets. Missing/forbidden draft gives safe return; showing preview never makes it public. Publish appears only with explicit permission. |
| ADM-017 | Testimonial table: attribution, excerpt, engagement context, permission readiness and visibility. In-page create/edit starts private; detail uses ADM-018. Missing permission blocks public publication, not the ability to retain a private pending record when allowed. |
| ADM-018 | Attribution/quote/source permission/context/preview precede Save, Publish or Hide. Source evidence stays private; preview shows permitted public attribution only. Explain genuine review readiness and any validation issue directly beside publication controls. |
| ADM-019 | SEO list: page name, route, type, title and index state. Search and type filter; open metadata record. Only approved editable public metadata listed; a private page is not made public by a checkbox. |
| ADM-020 | Metadata editor shows stable page/route identity, title/description, restricted canonical/index rules, social fields/illustrative preview and Save. It does not edit page sections or service pricing. Invalid protected-page indexing is rejected, with useful field error. |
| ADM-021 | Conditional FAQ/help list: question/title, type, category, visibility and modified date. Search/filter; permitted in-page create and edit link. Underlying public FAQ/help remains required even if alternative authoring replaces this UI. |
| ADM-022 | Conditional FAQ/help editor distinguishes short FAQ from long help; question, body, category/related links, metadata/preview, save/publish/hide. Avoid duplicating the same article in FAQ and Insights. Public presentation follows matching template. |
| ADM-023 | Conditional administrator access list shows staff identity, approved role and account status with search/filter/provisioning only if provider supports it. Provisioning is private, no public signup. If provider console is selected, retain required access lifecycle there. |
| ADM-024 | Conditional administrator detail shows target staff identity, role/scope, supported controls and history. Revoke/change confirmation names target and effect, handles last-required-admin safeguards, and reflects authoritative outcome; no arbitrary permissions builder. |
| ADM-025 | Conditional audit viewer filters date, actor, action and record. Event rows show time, actor, action, record and permitted summary; expand safely. Read-only, no delete/edit. Backend logging remains required if this viewer is deferred. |
| ADM-026 | Own profile and provider-supported security/MFA/session/recovery controls. Save profile, reauthenticate for sensitive changes, Sign Out. No editing own role or seeing other staff private data. Provider unsupported state is honest, not a broken decorative switch. |
| ADM-027 | Conditional limited manual finance: expected/invoiced/received statuses, actual amount/currency, linked customer/opportunity, external reference, dates and verification context. In-page entry/correction and history only; prevent duplicate external entries and show unreconciled versus confirmed. No gateway, checkout or full invoice subsystem. |


### 15.3 Navigation oracle

Retained from S2 §§5–6. Source-local section references remain references to S2. Phase-disabled/conditional destinations require activation/publication; navigation presence never grants access.


#### Public header


| Order / element | Label | Destination / behavior |
|---|---|---|
| Brand | ARADUN logo | Home `/` |
| 1 | Services | `/services`; accessible category menu |
| 2 | Solutions | `/solutions`; five-solution menu |
| 3 | Pricing | `/pricing` |
| 4 | Our Work | `/our-work` |
| 5 | About | `/about` |
| 6 | Insights | `/insights` |
| 7 | Contact | `/contact`; visible direct desktop link |
| Utility | Search | Accessible search control leading to `/search?q=…` |
| Primary CTA | Get a Quote | `/get-a-quote` |

The visible Contact link carries forward the final refinement in this chat. It remains distinct from Get a Quote: general/client/partnership questions use Contact; project scope and pricing requests use the quote flow. At widths where the full header cannot fit accessibly, switch to the responsive menu rather than remove Contact or shrink targets excessively. Exact breakpoint and presentation belong to Step 4.


#### Mobile and footer


Expose Home, Services, Solutions, Pricing, Our Work, About, Insights, Contact, Consultation, search and Get a Quote. Services/Solutions expand to the same published destinations as desktop. Provide explicit All Services/All Solutions links. Closing, back navigation, Escape where applicable, focus restoration, readable labels and keyboard operation must work; the menu cannot depend on hover. Retain an easy-to-find Contact link and quote action. Do not add staff navigation to the public menu.

### 5.5 Footer

| Group | Destinations |
|---|---|
| Services | Services overview and CAT-01–CAT-08 |
| Solutions | Solutions overview and SOL-01–SOL-05 |
| Company | About, Our Work, Contact Us |
| Resources | Insights & Resources, FAQs & Help |
| Start a Project | Pricing, Get a Quote, Consultation |
| Legal | Privacy Policy, Website Terms; conditional trust policies only when approved and published |
| Contact and social | `hello@aradun.com` after mailbox activation; approved LinkedIn, Facebook, YouTube, X and Instagram links from the master; only verified/publish-approved phone information |

Do not invent GitHub, sales/support mailboxes, street addresses or offices. The master records Dhaka, Bangladesh, and selected but not yet operational `hello@aradun.com`. There is no public Staff Login link. A future Client Portal utility/footer link may appear only after the P2 portal is operational and approved.


#### Staff sidebar


| Group | Destinations |
|---|---|
| Overview | Dashboard Overview ADM-001 |
| Sales | Leads & Inquiries ADM-002; Contacts ADM-004; Sales Pipeline ADM-006; Follow-up Tasks ADM-008; Customers ADM-010 |
| Content | Content Overview ADM-012; Articles & Resources ADM-013; Testimonials & Reviews ADM-017; SEO Metadata ADM-019 |
| Conditional content | FAQs & Help ADM-021 only if dashboard authoring is selected |
| Restricted administration | Staff Access ADM-023 and Audit ADM-025 only when their UI alternatives are selected and authorized |
| Conditional finance | Manual Payment Tracker ADM-027 only if D-007 selects it |
| Account menu | My Account & Security ADM-026; sign-out action |

List/detail/create/preview pages are entered from rows, buttons and contextual links; they do not each become sidebar items. Existing inquiry-level source data appears in record detail; aggregate attribution reports remain P2 unless separately approved. P1 basic dashboard summaries do not become the future reporting suite.


## 16. Complete model and shared-contract verification register

The following exact S5 schema tables are retained as the field-level acceptance oracle. They are declarative specifications, not application code. Every baseline model has `QA-DB-<ModelName>` applying QA-DB-01–07 as relevant, plus its workflow-specific cases. Conditional models activate only under their named source gate. Test required/default/conditional fields, embedded contracts, real index definitions, reference rules and stated invariants; do not add a collection simply to satisfy a test. Source-local § references below point to **S5**.


| Model | Collection / source qualification | S5 section | S7 owning tasks | Case ID | Status |
|---|---|---|---|---|---|
| Inquiry | inquiries | 7.1 | M06-01, M06-03 | QA-DB-Inquiry | Not run |
| Contact | contacts | 7.2 | M07-01, M07-05, M07-07 | QA-DB-Contact | Not run |
| Opportunity | opportunities | 7.3 | M07-03, M07-05 | QA-DB-Opportunity | Not run |
| FollowUpTask | tasks | 7.4 | M07-04 | QA-DB-FollowUpTask | Not run |
| Activity | activities | 7.5 | M07-00, M07-06 | QA-DB-Activity | Not run |
| Article | articles | 7.6 | M08-01, M08-02 | QA-DB-Article | Not run |
| Testimonial | testimonials | 7.7 | M08-03 | QA-DB-Testimonial | Not run |
| SeoOverride | seoOverrides | 7.8 | M08-04 | QA-DB-SeoOverride | Not run |
| StaffUser | staffUsers | 7.9 | M03-01, M03-02, M03-04 | QA-DB-StaffUser | Not run |
| AuditEvent | auditEvents | 7.10 | M02-03 | QA-DB-AuditEvent | Not run |
| OutboxEvent | outboxEvents | 7.11 | M06-02 | QA-DB-OutboxEvent | Not run |
| RateLimitBucket | rateLimitBuckets | 7.12 | M02-04 | QA-DB-RateLimitBucket | Not run |
| StaffSession | staffSessions — conditional provider adapter | 7.13 | M03-01 | QA-DB-StaffSession | Not run; conditional gate applies |
| FaqEntry | faqEntries — conditional FAQ editor | 7.14 | M08-06 | QA-DB-FaqEntry | Not run; conditional gate applies |
| ManualPaymentRecord | paymentRecords — conditional D-007 | 7.15 | M11-06 | QA-DB-ManualPaymentRecord | Not run; conditional gate applies |
| BookingRecord | bookingRecords — conditional D-003 promotion | 7.16 | M06-08, M06-09 | QA-DB-BookingRecord | Not run; conditional gate applies |


### 16.1 Shared fields, values, references and consistency oracle


#### S5 6.1 — Specification notation

Field tables are declarative, not executable Mongoose models. R = required on persistence; O = optional/absent; C = conditionally required as stated. “None” means no default and absence must be accepted unless required; do not substitute fabricated values. Dot paths describe embedded subdocuments. All limits below are R5 defensive defaults, adjustable through measured review without changing business scope.

Mongoose type mapping: String/Boolean map directly; integer fields use Number with safe-integer/range validation; UTC timestamps use Date; IDs use Schema.Types.ObjectId; embedded contracts use explicit sub-schemas and arrays, not unvalidated Mixed. Required embedded objects are validated as subdocuments. No executable schema code is included.

Every baseline model except RateLimitBucket inherits: `_id` ObjectId, server-generated R; `createdAt` UTC Date R server-now; `schemaVersion` integer R default 1. Mutable models also inherit `updatedAt` UTC Date R server-now and `revision` nonnegative integer R default 0, incremented with compare-and-set writes. Append-only audit/activity creation uses event time plus creation time; activities have separate note-edit metadata. Mutable business/content models have optional `archivedAt` UTC Date and `archivedBy` StaffUser reference, absent by default; archive access is explicit. Infrastructure outbox/session/limit records use their own expiry/lifecycle instead of archive. `_id` has MongoDB's unique primary index in every collection.

Server validates object shape with Zod and validates persistence with Mongoose. Unknown write fields rejected; no arbitrary Mixed objects, raw HTML, executable MDX or user-defined query operators. Enable appropriate update validation, and validate complete cross-field invariants in the application; Mongoose update validators alone do not check every invariant. `unique` denotes a database index, not a Mongoose validator; pre-create indexes and handle duplicate-key races (S5 technical reference). ObjectId syntax is not proof of existence or permission.

#### S5 6.2 — Reusable value contracts

| Contract | Fields / requiredness / default | Validation and reason |
|---|---|---|
| Money | amountMinor: integer R; currency: string R, USD P1 default | Nonnegative safe integer; amounts below configured safe maximum; no floating totals. Optional entire object for unknown estimates. USD minor unit is cents. Custom price is null amount, never zero |
| SubmittedIdentity | name R 1–120; email R ≤254; emailNormalized R server-derived; company O ≤160; website O ≤2048; phone O ≤40 | Preserve submitted spelling; normalized email trims and normalizes for candidate matching only; no removal of Gmail dots/plus tags; valid http/https URL; no forced phone/company |
| Attribution | landingPath O ≤512; sourcePath O ≤512; referrerHost O ≤253; utmSource/Medium/Campaign/Term/Content O ≤200 each; sourceLabel R default Unknown; capturedAt R UTC | Strip query tokens, fragments and unapproved parameters; no raw full referrer; bounded untrusted hints; missing attribution never blocks valid intake |
| ConsentContext | privacyNoticeVersion C when acknowledgement required; privacyAcknowledgedAt C; marketingOptIn R default false; marketingNoticeVersion/marketingOptInAt C when true; locale R default en | No preselected marketing opt-in; capture exact notice used; policy/legal applicability stays D-014. Consent is not identity verification |
| RecordTarget | kind R enum inquiry/contact/opportunity; id R ObjectId | Target must exist and be visible to actor. Customer target uses contact identity; tasks may point to one primary target; no arbitrary collection names |
| OfferSelection | serviceIds R unique string array default []; solutionIds R unique string array default []; packageIds R unique string array default []; customRequested R boolean default false | IDs resolved against catalog; max 57 services/5 solutions; packages must belong to selected offer; custom/unsure allowed; selections deduplicated across category memberships |
| OfferSnapshot | catalogVersion R; capturedAt R; offers R bounded array; each entry: offerId/name/kind R, packageId/tier O, availability R, priceTerms R, scopeVersion O | Server copied and immutable; kind service/solution; retains currency/period/setup/monthly/custom basis and source display label, never trusted browser amounts. Max 100 snapshot entries and payload budget |
| PriceTerms | model R one-time/monthly/setup-plus-monthly/custom; currency R USD; startingAmountMinor O; setupAmountMinor O; recurringAmountMinor O; billingUnit O; indicative R true; sourceLabel R; unitConfirmed R false | Model-specific amount requirements apply only when source has confirmed data; missing units block misleading publication. No binding calculated quote. Source label retained exactly |
| SeoFields | title O ≤200; description O ≤500; canonicalPath O ≤512; noindex O boolean; socialTitle O ≤200; socialDescription O ≤500; socialImage O AssetRef | Lengths are storage safety limits, not ranking promises; canonical same-origin registered public URL unless explicitly reviewed; private route indexing cannot be overridden |
| AssetRef | assetKey R ≤300; visibility R public/private; alt R ≤500, may be empty only for decorative images; width/height C positive integers for images; mimeType R allowlist; bytes O nonnegative; rightsStatus R verified/demo/pending | Asset key resolves trusted storage or controlled manifest, never arbitrary fetch URL. Pending rights cannot publish. Private source-proof assets not returned in public DTOs |
| EditorialBody | format R structured; blocks R array ≤1000, serialized body ≤200 KiB | Approved paragraph/heading/list/link/image/quote/code-text blocks only; no executable embeds/scripts; sanitize on rendering. Rich editor library remains unselected |
| ContentSnapshot | title R on publish ≤200; excerpt O ≤1000; body R on publish; image O AssetRef; authorDisplay C on publish, string 1–160; topicKeys R default []; tags R default []; relatedServiceIds/solutionIds R default []; seo O SeoFields; searchText R server-derived | Draft may be incomplete; validate full snapshot before publish; taxonomy keys from controlled source list, tags ≤20 × 60 chars; author and claims must be truthful |
| Evidence | sourceReference O ≤2048; permissionStatus R pending/granted/revoked; permissionAt/by C when granted; verificationNote O ≤2000; asset O private AssetRef | Private provenance only; consent/source must be reviewed, never a fake checkbox. Publishing requires granted permission where applicable |
| Actor | kind R staff/system/anonymous; staffUserId C if staff; jobKey C if system | Derived from trusted session/job identity; clients cannot set actor fields |

All timestamp instants use UTC and timezone-aware display. User scheduling preferences retain IANA timezone and local preference text; do not silently convert ambiguous daylight-saving times. Business IDs such as SVC-009 and page IDs are separate namespaces from database ObjectIds.

#### S5 6.3 — References, indexes, and deletion

Embed small bounded owned values (submitted identity, consent, price snapshot, customer profile, article working/live snapshots). Reference independent or growing records (contacts, staff, inquiries, opportunities, tasks, activity/audit/outbox). Never accumulate unlimited inquiries or history arrays inside a contact. Do not use populate chains in list views; bounded batched joins or scoped aggregation supply summary fields.

Unique optional keys use explicitly filtered indexes on actual populated values, not a blanket unique index on nullable fields. Email is deliberately not unique for prospect contacts: shared mailboxes and uncertain identity require review. Staff identity mapping is unique. Scope references are checked by application services and periodically audited; MongoDB references are not foreign-key enforcement. Reject dangling new references; archive referenced records and preserve safe labels until an approved erasure operation redacts them.

Indexes below are proposed query-backed starting indexes, not permission grants. List queries always apply authorization before pagination/aggregation. Review query plans against representative data; avoid adding indexes for every field. TTL expiry is asynchronous cleanup, not an authorization clock; session and limiter logic explicitly test expiration (S5 technical reference).

#### S5 6.4 — Relationship map and consistency ownership

| Relationship | Cardinality / representation | Integrity owner and deletion behavior |
|---|---|---|
| Category ↔ service | Many-to-many source categoryIds; one primary category | Catalog validator; exactly 58 memberships, no duplicate service record |
| Solution ↔ service | Many-to-many bounded source serviceIds | Catalog owner; only approved constituent mappings; no inferred scope |
| Offering → package | One-to-many source package IDs; each package has one owner | Catalog owner checks offer/package consistency; old inquiries retain snapshots |
| Contact → inquiry | One-to-many; inquiry.contactId optional until reviewed | Intake/CRM link command; no public overwrite; canonical merge checked |
| Contact → opportunity | One-to-many; opportunity.contactId required | CRM service; archived/merged contacts resolved under access rules |
| Opportunity ↔ inquiry | One opportunity to several inquiries; one primary inquiry required | CRM transaction; P1 inquiry has at most one primary opportunity link |
| Contact → customer profile | Zero-or-one embedded profile | Conversion transaction; customer route uses same identity; reversal audited |
| Customer organization → contacts | Deferred P2 company/customer-account model | No P1 company directory or invented multi-contact customer account |
| Record → tasks | One-to-many references by target kind/id | CRM validates target and assignee access; no target grants by implication |
| Staff → assignments/tasks | One-to-many references | Identity + CRM ensure active/eligible user; Admin reassigns orphaned work |
| Record → activities/audit | One-to-many separate paginated collections | Originating service appends events atomically with sensitive mutation |
| Article → taxonomy | Bounded topic keys/tags, source dictionary | Content validation; no new topic route or category CRUD module |
| Content → SEO | Embedded for editable content snapshots; source-page override otherwise | One owning metadata path per contentKey; no duplicate writable copies |
| Staff → roles | Bounded source-defined role keys | Identity checks allowed bundle and current local status; no roles collection |
| Inquiry → outbox | One-to-many deduped delivery events | Intake transaction + notification worker; no orphan send before commit |

Every new ObjectId reference must resolve to a permitted existing target. List/detail DTOs independently filter linked records; possessing a parent link does not grant access to all child history. Source keys resolve against the active versioned registry. Archival preserves references; privacy erasure applies explicit cross-record redaction and provider/backup handling rather than cascading uncontrolled deletes.


### S5 7.1 — Inquiry / inquiries

**Case:** QA-DB-Inquiry. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: Intake with CRM handling commands. Public requests can create a record but cannot list/read it. Staff access is scoped. No separate leads, quoteRequests, contactInquiries or consultationRequests collection.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| reference | String; R generated | Human-readable random reference, e.g. ARQ-year-random; unique index and bounded collision retry; sample format only, not sequential business promise |
| submissionKeyHash | String; R server hash | High-entropy client submission key, bound to public browser flow; stored as hash; U; stable across retries |
| payloadHash | String; R server hash | Hash canonical validated submission; same key plus changed payload is conflict, never overwrite |
| type | String; R | quote / consultation / contact; drives required fields |
| submittedIdentity | SubmittedIdentity; R | Immutable submitted contact snapshot; public values never overwrite reviewed contact identity |
| contactId | ObjectId → contacts; O None | Reviewed identity link; absence allowed at capture so matching does not lose an inquiry |
| opportunityId | ObjectId → opportunities; O None | At most one primary opportunity per inquiry in P1; one opportunity may have several inquiries |
| subject | String ≤200; C | Required contact subject or consultation topic; quote brief handled below |
| message | String ≤10000; C | Required contact message or quote brief; optional consultation preparation |
| selection | OfferSelection; C quote | At least one offer or explicit custom/unsure choice |
| offerSnapshot | OfferSnapshot; C quote | Built server-side for valid selection; immutable historical context |
| projectContext | Embedded; O None | budgetText ≤200, timelineText ≤300, additionalDetails ≤5000; no invented budget bands |
| consultation | Embedded; C consultation | mode R manual-request baseline; preferredTimeText R ≤500; timezone R valid IANA; state R requested/pending-confirmation/confirmed/cancelled default requested; confirmedStartAt/confirmedBy C if staff confirms actual arrangement |
| attribution | Attribution; R default Unknown context | Original allowed campaign/page data, not staff attribution reports |
| consent | ConsentContext; R | Privacy policy evidence and separate optional marketing choice |
| handlingStatus | String; R default received | R5 received/in-review/closed; separate from commercial pipeline; exact semantics D-011 |
| classifications | String array; R [] | Unique subset spam/duplicate/no-response; manual classification does not destroy history |
| duplicateOfInquiryId | ObjectId → inquiries; C if duplicate | Cannot point to itself or form cycles; staff-reviewed link |
| assignedTo | ObjectId → staffUsers; O None | Active eligible staff only; unassigned queue remains visible to Admin |
| assignedAt / assignedBy | UTC Date / StaffUser ref; C when assigned | Trusted ownership-change metadata |
| linkedAt / linkedBy | UTC Date / StaffUser ref; C when contact linked | Explains reviewed identity association |
| closedAt / closedBy | UTC Date / StaffUser ref; C if closed | Reopening records an activity; closure is not Won/Lost |
| redactedAt / redactionReason | UTC Date / String ≤500; O None | Controlled privacy action can remove PII without falsely treating archive as deletion |

Indexes: U reference; U submissionKeyHash; (+assignedTo,+handlingStatus,−createdAt,−_id); (+contactId,−createdAt,−_id); (+opportunityId,−createdAt); (+type,−createdAt,−_id); normalized submitted email candidate index only if staff matching query requires it. Snapshot changes rejected by ordinary update commands. Redaction is a separate audited exceptional operation. Return only reference and safe receipt state to the browser, never existing contact/customer identity.


### S5 7.2 — Contact / contacts

**Case:** QA-DB-Contact. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: CRM. Customer is a role/profile of this shared identity. `/dashboard/customers/[customerId]` resolves the same ObjectId as Contact but requires an active customerProfile. This storage decision preserves both approved page families and avoids duplicated PII. Company text is not the P2 company/organization module.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| displayName | String 1–120; R | Staff-reviewed identity |
| email / emailNormalized | String ≤254; R | Valid email, normalization per §6; matching candidate, not automatic identity proof |
| phone | String ≤40; O None | Only when actually provided/needed |
| companyName / website | String ≤160 / URL ≤2048; O None | Basic context, no organization record implied |
| ownerId | ObjectId → staffUsers; O None | Controls proposed sales access; active eligible owner |
| originatingInquiryId | ObjectId → inquiries; O None | Provenance; original link remains after conversion |
| identityStatus | String; R default active | active / merged / archived; merged records no longer selected for new links |
| mergedIntoContactId | ObjectId → contacts; C if merged | Canonical surviving identity; reject cycles; preserve old identity for authorized history resolution |
| customerProfile | Embedded; O None | Absence means not converted; no extra customer collection |
| customerProfile.status | String; C profile exists | active / reversed; reversal requires recorded reason and checks |
| customerProfile.confirmedAt / confirmedBy | UTC Date / StaffUser ref; C profile exists | Explicit staff conversion decision |
| customerProfile.firstWonOpportunityId | ObjectId → opportunities; C profile exists | Must belong to same contact and be Won at conversion time; history persists on reopening |
| customerProfile.reversedAt / reversedBy / reversalReason | Date / StaffUser ref / String 1–1000; C reversed | Explicit correction, does not silently delete won deals or payment records |
| communicationPreference | String ≤300; O None | Basic volunteered preference only, no segmentation/campaign system |
| redactedAt | UTC Date; O None | Controlled privacy handling |

Indexes: (+emailNormalized), not unique; (+ownerId,−updatedAt,−_id); (+customerProfile.status,−customerProfile.confirmedAt,−_id); (+mergedIntoContactId) partial if populated. Customer uniqueness comes from one profile per canonical contact, not a unique email assumption. Duplicate-person merges are staff reviewed; no public request can change customer status. Staff-only CRUD and archive; note history lives in activities, not unbounded arrays.


### S5 7.3 — Opportunity / opportunities

**Case:** QA-DB-Opportunity. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: CRM. Represents one commercial engagement, not a person or invoice.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| creationKey | String; R server-generated command key | U; retry-safe staff creation |
| title | String 1–200; R | Clear business need |
| contactId | ObjectId → contacts; R | Existing active canonical contact; explicit staff link |
| primaryInquiryId | ObjectId → inquiries; R | Originating inquiry; inquiry and opportunity must resolve same contact |
| ownerId | ObjectId → staffUsers; R | Active eligible salesperson/admin |
| stage | String; R default New | Exact New / Qualified / Discovery / Proposal Sent / Negotiation / Won / Lost |
| stageChangedAt | UTC Date; R now | Current-stage time; full transition history in activities |
| selection | OfferSelection; R | Current intended scope; may be updated without rewriting original inquiry snapshot |
| scopeSnapshot | OfferSnapshot; O None | Captures staff-reviewed offer basis when useful, separate from binding proposal |
| expectedValue | Money; O None | Unknown is absent; estimate is not revenue; USD default |
| expectedCloseAt | UTC Date; O None | Staff estimate, no forecasting engine |
| nextFollowUpAt | Derived Date; not persisted | Earliest open linked task due date, permission-aware; no conflicting second reminder date |
| outcomeReason | String ≤2000; C on Lost; O on Won | R5 require reason when closing Lost; business taxonomy remains free text pending policy |
| wonAt / lostAt | UTC Date; C corresponding terminal stage | Reopening removes current terminal date from current-state fields; historical event retained |
| convertedContactId | ObjectId → contacts; O None | If conversion recorded, equals contactId; redundant ID only for explicit operation receipt, not separate identity |
| convertedAt / convertedBy | UTC Date / StaffUser ref; C when converted | Audited staff-confirmed conversion |

Indexes: U creationKey; (+ownerId,+stage,−updatedAt,−_id); (+contactId,−createdAt,−_id); (+primaryInquiryId); (+stage,+expectedCloseAt) only for approved list query. All transitions are explicit staff commands with expected revision. Require a reason for backwards/reopened transitions as R5 safety default; no automated stage advancement. One source inquiry cannot be linked to conflicting primary opportunities; enforce transaction/compare-and-set on inquiry.opportunityId. Distinct later engagements should have distinct inquiry context; splitting an inquiry into several opportunities is a D-011 reconsideration trigger.


### S5 7.4 — FollowUpTask / tasks

**Case:** QA-DB-FollowUpTask. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: CRM. Manual follow-ups only; not project delivery tasks or automated outbound reminders.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| creationKey | String; R | U; idempotent staff create |
| title | String 1–200; R | Action to take |
| description | String ≤5000; O None | Private task notes; no credential storage |
| target | RecordTarget; R | Inquiry/contact/opportunity; customer uses contact target |
| assignedTo | StaffUser ref; R | Active eligible person with access to target |
| dueAt | UTC Date; R | Instant used for due/overdue; timezone-aware UI |
| timezone | IANA string; R | Staff-selected/display timezone; no server locale assumption |
| status | String; R open | open / completed / cancelled; overdue is derived, not a stored competing status |
| completedAt / completedBy | Date / StaffUser ref; C completed | Trusted completion metadata |
| cancelledAt / cancelledBy / cancellationReason | Date / StaffUser ref / String ≤1000; C cancelled | Explain cancellation |
| createdBy | StaffUser ref; R | Manual creation actor |

Indexes: U creationKey; (+assignedTo,+status,+dueAt,+_id); (+target.kind,+target.id,+status,+dueAt). Completion and reopening use revision checks and activity. Reassignment must not grant access by itself; reject assignment unless target visibility is authorized. No automatic task creation after intake/stage change unless separately approved.


### S5 7.5 — Activity / activities

**Case:** QA-DB-Activity. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: CRM. Business-readable timeline, distinct from restricted audit evidence. Events link to targets; the contact timeline queries linked records without copying all events into each record.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| eventKey | String; R generated | U, stable per domain mutation |
| target | RecordTarget; R | Authorized business record |
| contactId | Contact ref; O None | Optional routing hint; access still based on target, not solely this field; merge maintenance required |
| kind | String; R | note / inquiry-linked / assignment-changed / stage-changed / task-created / task-completed / task-cancelled / customer-converted / conversion-reversed / contact-merged / record-corrected |
| actor | Actor; R | Trusted source |
| occurredAt | UTC Date; R now | Business event time, distinct from insertion time |
| noteText | String 1–10000; C note | Plain text/safe structured note; internal-only |
| transition | Embedded; C state/assignment event | fromValue O ≤100, toValue R ≤100, reason O ≤2000; typed allowed keys only |
| relatedTaskId / relatedInquiryId / relatedOpportunityId | Corresponding refs; O None | Event context when relevant; reference validation |
| editedAt / editedBy / editReason | Date / StaffUser ref / String ≤1000; C edited note | R5 note corrections only by original author or Admin; preserve audit of change; no silent history editing |
| redactedAt / redactedBy / redactionReason | Date / StaffUser ref / String ≤1000; C redacted | Authorized privacy correction; retain non-sensitive event skeleton |

Indexes: U eventKey; (+target.kind,+target.id,−occurredAt,−_id); (+contactId,−occurredAt,−_id). Semantic events append-only; note corrections increment revision and use restricted audit. No unlimited previous-note copies or secrets in audit diffs. Note permission details remain D-011/D-013; do not expose private timelines to future clients by default.


### S5 7.6 — Article / articles

**Case:** QA-DB-Article. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: Content. One model covers blog/article/resource type. Working copy and current public snapshot avoid accidental publication when saving a draft. This is the R5 recommendation for U-03, not a full revision-history feature.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| contentKey | String; R generated | U, stable across title changes; separate from PUB-009 route-template identity |
| slug | String 1–160; R when first saved | Lowercase safe slug, unique in Insights namespace; reserved route names excluded; lock after first publication unless explicit redirect migration |
| type | String; R article | article / resource; no duplicate content in FAQ/Insights |
| workingDraft | ContentSnapshot; R | Can be incomplete; explicit Save Draft, no assumed autosave |
| publishedSnapshot | ContentSnapshot; O None | Read-only to ordinary edit; replaced only by Publish command after validation |
| publicationState | String; R draft | draft / published / unpublished; published requires valid snapshot |
| publishedVersion | Integer; R 0 | Increment on authorized publication; working revision uses inherited revision |
| firstPublishedAt | UTC Date; O until first publication | Stable article date, not rewritten on every save |
| lastPublishedAt / publishedBy | Date / StaffUser ref; C published | Visible editorial accountability |
| unpublishedAt / unpublishedBy | Date / StaffUser ref; C unpublished | Explicit removal from public discovery |
| createdBy / lastEditedBy | StaffUser refs; R | Ownership and editing accountability |
| searchText | String ≤200 KiB; R empty | Derived only from current published snapshot; cleared on unpublish; not draft text |

Indexes: U contentKey; U slug; (+publicationState,−firstPublishedAt,−_id); text index searchText (and published title where supported by chosen index definition); (+lastEditedBy,−updatedAt). Draft and live snapshot are bounded, not an unlimited revision array. Publication copies validated draft atomically, updates SEO within that snapshot, then refreshes relevant discovery. No scheduled publishing, public preview token, or generalized visual builder. Published snapshot may remain privately retained after unpublish, but all public readers filter state and archive. Authors/claims/assets must satisfy source truth rules.


### S5 7.7 — Testimonial / testimonials

**Case:** QA-DB-Testimonial. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: Content. No public review-submission platform. One curated record with public projection and private evidence.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| contentKey | String; R generated | U |
| quote | String 1–3000; R | Genuine quotation meaning preserved |
| attribution | Embedded; R | name R ≤120; role/company O ≤160; avatar O AssetRef; only permitted display details |
| evidence | Evidence; R default pending | Private source/permission; publish requires granted and verified facts |
| contactId | Contact ref; O None | Private engagement relation; no public disclosure |
| caseStudyKey | Source case-study key; O None | Must exist; never claim a client relationship for concept work |
| serviceIds / solutionIds | Unique catalog ID arrays; R [] | Related placement, existing IDs only |
| state | String; R private | private / published / hidden; no false verification claims |
| displayOrder | Integer; R 0 | Stable curated order, tie by _id |
| publishedAt / publishedBy | Date / StaffUser ref; C published | Publication evidence |
| createdBy / updatedBy | StaffUser refs; R | Accountable editing |
| isDemo | Boolean; R false | Demo only in preview/test data; production publication prohibited for fictional testimonials |

Indexes: U contentKey; (+state,+displayOrder,+_id). Private evidence omitted explicitly from DTOs, search and analytics. R5 editing published quotation/attribution first hides it and requires republish, avoiding an unreviewed live change; permission revocation hides it immediately. Full testimonial revision history deferred.


### S5 7.8 — SeoOverride / seoOverrides

**Case:** QA-DB-SeoOverride. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: Content. Used only for registered source-backed content (fixed pages, services, categories, solutions, case studies, source FAQ/help). Article and database FAQ metadata live in their own working/published snapshots and are edited through the same dashboard facade, without a second master.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| contentKey | String 1–180; R | U, stable source entity key; registry maps to correct URL/template |
| pageId | Existing page ID; R | E.g. PUB-S009; content instances also retain instance contentKey; template IDs alone do not identify all articles |
| fields | SeoFields; R | Only explicit overrides persisted; absent fields fall back to approved source defaults |
| lastEditedBy | StaffUser ref; R | Mutation actor |
| reviewedAt / reviewedBy | Date / StaffUser ref; C high-impact indexing/canonical changes | Admin review requirement in recommended permission matrix |

Indexes: U contentKey; (+pageId). Canonical normalization resolves same-origin approved routes. Private/auth/confirmation/search utility routes have enforced indexing policy that overrides editable data. No site-wide noindex toggle in ordinary editor. Removing an override restores safe defaults rather than deleting a page. Inherited revision protects concurrent metadata edits.


### S5 7.9 — StaffUser / staffUsers

**Case:** QA-DB-StaffUser. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: Identity. Authentication provider verifies identity; this record authorizes ARADUN access. No public registration or automatic access based on email domain.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| provider / providerSubject | String ≤80 / String ≤300; R after activation | U compound; subject issued/verified by selected provider, not browser |
| email / emailNormalized | String ≤254; R | Verified onboarding identity; U normalized staff email for one local staff account; account linking requires review |
| displayName | String 1–120; R | Staff UI attribution |
| roles | String array; R | Nonempty unique subset admin/sales/editor; no custom role builder; detailed permissions D-013 |
| status | String; R invited | invited / active / suspended / deactivated; only active may access business data |
| provisionedBy | StaffUser ref; C except initial bootstrap | Initial owner bootstrap is a documented privileged one-time operation |
| activatedAt / deactivatedAt / deactivatedBy | Date / Date / StaffUser ref; C corresponding state | Offboarding evidence |
| accessVersion | Integer; R 0 | Increment on role/status changes; invalidate stale sessions/policy caches |
| lastSignInAt | UTC Date; O None | Operational account history; no broad tracking profile |
| preferredTimezone | IANA string; R UTC until chosen | Staff display preference only |
| mfaPolicy | String; R pending-decision | required / provider-policy / pending-decision; launch must resolve D-009; no bypass enabled by pending value |
| mfaLastVerifiedAt | UTC Date; O None | Optional provider-attested observation, not proof of current session assurance |

Indexes: U (+provider,+providerSubject) partial when both populated; U emailNormalized; (+status,+roles). invited may have no provider subject until activation; enforce activation prerequisites. Never store raw passwords, MFA seeds, recovery codes, access/refresh tokens or API keys in this model. A self-service DTO excludes roles editing and administrative fields. Last active Admin cannot be removed without approved replacement/recovery. Account deactivation blocks new authorization immediately regardless of provider session lifetime.


### S5 7.10 — AuditEvent / auditEvents

**Case:** QA-DB-AuditEvent. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: Operations. No updatedAt, mutable revision or ordinary archive; append-only application interface. This is a security/event record, not the source of CRM state.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| eventKey | String; R | U per audit event for retry deduplication |
| actor | Actor; R | Never accepted from browser |
| action | String ≤120; R allowlist | Explicit operation name (publish, role-change, stage-change, etc.) |
| targetType / targetId | String allowlist / String ≤180; R | Supports ObjectId and stable source keys; no arbitrary collection query |
| outcome | String; R | success / denied / failed |
| occurredAt | UTC Date; R now | Event time |
| correlationId | String ≤100; R generated | Link request, activity, outbox without storing raw request body |
| changedFields | String array; R [] | Allowlisted names ≤50 items; not full document dumps |
| safeSummary | String ≤2000; R | Redacted operation/result; no messages, credentials or unnecessary PII |
| reasonCode | String ≤100; O None | Safe failure/denial/correction classification |
| actorIpHash | String; O None | Only if security policy chooses it; keyed and rotated; no raw IP default |
| retentionClass | String; R security | security / business-change / privacy-action; periods D-014/D-020 |

Indexes: U eventKey; (+targetType,+targetId,−occurredAt,−_id); (+actor.staffUserId,−occurredAt); (+correlationId); (−occurredAt,−_id). No audit TTL until retention is approved. Successful sensitive business change and audit event commit together. Denied/failed attempts are recorded outside failed business transactions using bounded, redacted logging; if audit persistence fails, alert through independent monitoring. Normal staff cannot edit/delete. Approved erasure/retention job has separately constrained authority and leaves permissible non-PII evidence.


### S5 7.11 — OutboxEvent / outboxEvents

**Case:** QA-DB-OutboxEvent. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: Notifications. Durable work accompanies inquiry saves; provider failure never rolls back a successfully saved request.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| dedupeKey | String ≤200; R | U, e.g. inquiry/event-kind/recipient-role/version; no raw email in key |
| kind | String; R | inquiry-acknowledgement / staff-intake-alert; assignment-alert only if selected |
| aggregateType / aggregateId | String enum inquiry/opportunity / ObjectId; R | Source of notification; protected links resolve authorized record |
| recipient | Embedded; R | kind prospect/staff; prospectEmail C prospect; staffUserId C staff; no arbitrary user-supplied recipient lists |
| templateKey / templateVersion | String ≤100 / Integer; R | Controlled transactional template, no executable user template |
| payload | Embedded; R | reference R; inquiryType R; safe public summary O ≤500; locale R en; excludes full message/internal notes |
| status | String; R pending | pending / processing / retry / sent / failed / suppressed / uncertain |
| attempts | Integer; R 0 | Bounded maximum set in operations config |
| nextAttemptAt | UTC Date; R now | Due work selection |
| leaseToken / leaseUntil | String / Date; C processing | Atomic claim; completion must match token; recover expired lease |
| provider / providerMessageId | String ≤80 / String ≤300; O None | Provider evidence, not claimed recipient delivery |
| lastAttemptAt / sentAt | Date; O None | sent means provider acceptance, not inbox receipt |
| lastErrorCode / lastErrorSummary | String ≤100 / String ≤1000; O None | Redacted actionable failure, never credentials/full provider payload |
| deliveryState | String; R unknown | unknown / accepted / delivered / bounced; latter two only with verified evidence |
| expiresAt | UTC Date; O None | Only terminal records after retention approval; never expire pending work |

Indexes: U dedupeKey; (+status,+nextAttemptAt,+_id); (+status,+leaseUntil); (+aggregateType,+aggregateId); optional TTL expiresAt after retention selected. Claim atomically and fence updates with leaseToken. Provider idempotency key should reuse dedupeKey where supported. Timeout after possible provider acceptance produces uncertain state and reconciliation; no promise of exactly-once delivery across providers. Staff retry uses existing event with controlled attempt metadata, not new duplicate event. Before delivery recheck recipient eligibility and source privacy/deletion status; suppress stale assignment alerts. Do not send after database transaction retries until commit completes.


### S5 7.12 — RateLimitBucket / rateLimitBuckets

**Case:** QA-DB-RateLimitBucket. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Owner: Operations. Infrastructure data; no user-facing dashboard module. Only this collection omits general mutable-record fields; `_id`, createdAt and schemaVersion remain.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| scope | String ≤80; R allowlist | intake/contact/quote/consultation/search/recovery/provider callback, as applicable |
| subjectHash | String; R | HMAC of minimal trusted client/network key using rotating server secret; no raw email/IP |
| windowStart | UTC Date; R | Deterministic fixed-window start |
| requestCount | Integer; R 0 before increment | Atomically increment; reject request beyond configured budget |
| expiresAt | UTC Date; R | Window plus bounded cleanup period; limits and retention approved before launch |

Indexes: U (+scope,+subjectHash,+windowStart); TTL (+expiresAt) expiry-at-date. Handle concurrent upsert collisions with retry, not unlimited acceptance. Window boundaries are checked in application even while TTL cleanup lags. Verify forwarded-IP trust at deployment; never trust arbitrary client headers. Provider/platform ingress controls limit requests before database writes to resist bucket exhaustion. Exact thresholds/load policy remain D-020. If limiter unavailable, return an honest retryable response for writes; reads use bounded fallback policy. Accessible challenge only when justified; no silent drop or fake successful submission.


### S5 7.13 — StaffSession / staffSessions — conditional provider adapter

**Case:** QA-DB-StaffSession. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Only select this when authentication architecture needs local opaque sessions. A managed provider may own equivalent state; then do not create this collection. No custom credential implementation is approved.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| tokenHash | String; R | U, hash of high-entropy opaque cookie value; raw token never stored |
| staffUserId | StaffUser ref; R | Current active account |
| accessVersion | Integer; R copied | Must match current staff accessVersion |
| authenticatedAt / lastSeenAt | UTC Date; R | Absolute and inactivity checks; bounded lastSeen updates |
| expiresAt / idleExpiresAt | UTC Date; R | Enforce server-side every request; values from approved session policy |
| assurance | String; R | primary / mfa; only provider-validated assertion |
| mfaVerifiedAt | UTC Date; C assurance mfa | Freshness policy applies to sensitive actions |
| revokedAt / revokedBy | Date / StaffUser ref; O None | Revocation; system logout can have system actor in audit |

Indexes: U tokenHash; (+staffUserId,+revokedAt); TTL expiresAt. Session deletion does not replace explicit expiry checks. Secure HttpOnly SameSite cookies, HTTPS-only, session rotation at sign-in/privilege changes; no tokens in URLs or analytics. Provider-owned account/recovery/verification records must follow selected library schema, with hashed single-use expiring recovery secrets where applicable; do not invent compatible fields in advance. Absolute/idle/fresh-auth durations remain unresolved launch configuration.


### S5 7.14 — FaqEntry / faqEntries — conditional FAQ editor

**Case:** QA-DB-FaqEntry. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


If D-012 selects source authoring, use §8 logical records instead and create no collection. If selected, this collection becomes the sole FAQ/help content master; migrate source keys once.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| contentKey | String; R | U stable source/import key |
| type | String; R | short-faq / help-article |
| slug | String ≤160; C help-article | U partial populated; no additional page for short FAQ, which uses stable anchor |
| workingDraft | Embedded; R | question/title, body, categoryKey, related IDs, SeoFields and AssetRef; same bounds as §6 |
| publishedSnapshot | Same embedded type; O None | Only validated published copy returned publicly |
| publicationState | String; R draft | draft / published / hidden |
| displayOrder | Integer; R 0 | Controlled hub order |
| publishedVersion | Integer; R 0 | Increment only on publish |
| publishedAt / publishedBy | Date / StaffUser ref; C published | Accountability |
| createdBy / lastEditedBy | StaffUser refs; R | Editor identity |
| searchText | String ≤200 KiB; R empty | Derived published content only |

Indexes: U contentKey; U slug partial populated; (+publicationState,+type,+displayOrder,+_id); text searchText. Short FAQ answers render safe structured body, no executable content. Category dictionary is controlled configuration, not a separate P1 collection. SEO editor delegates to this snapshot. Publication and slug controls match articles. No duplicated article/help body published at two canonical URLs.


### S5 7.15 — ManualPaymentRecord / paymentRecords — conditional D-007

**Case:** QA-DB-ManualPaymentRecord. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


Default business recordkeeping remains external. If approved, this is a limited tracker of evidence, not an invoicing engine. Include inherited timestamps/revision; corrections use replacement records and audit, not silent financial edits.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| creationKey | String; R | U idempotency key |
| contactId | Contact ref; R | Customer identity; appropriate finance access |
| opportunityId | Opportunity ref; O None | Context, never infer payment from Won |
| externalSource / externalReference / entryKey | String ≤100 / String ≤200 / String ≤100; R | U compound identifies external record and line/payment; supports several receipts against one invoice |
| recordKind | String; R | expected / invoiced / received; no combined revenue total across kinds |
| amount | Money; R | Nonnegative precise amount; currency mandatory |
| occurredAt | UTC Date; R | Actual record/receipt date |
| dueAt | UTC Date; O None | Applicable external obligation due date |
| externalStatus | String; R | Draft / Issued / Partially Paid / Paid / Overdue / Cancelled; verified external state, not inferred from opportunity |
| evidenceReference | String ≤2048; R | Protected approved reference; no public file share implied |
| verifiedAt / verifiedBy | Date / StaffUser ref; R | Actual review, not automatic reconciliation |
| state | String; R active | active / voided; corrections preserve history |
| replacesRecordId / voidReason | PaymentRecord ref / String ≤1000; C correction/void | Cannot form replacement cycle; no destructive overwrite |

Indexes: U creationKey; U (+externalSource,+externalReference,+entryKey) filtered to active records when correction reuses identity; (+contactId,−occurredAt,−_id); (+opportunityId); (+recordKind,+externalStatus,+dueAt). Amount corrections void old record and create replacement in one transaction with audit. Prevent duplicate source entries. Never store payment card/bank login credentials. External ledger owns invoice math, balance and tax treatment until P2. Mixed currencies and expected/invoiced/received are never silently summed.


### S5 7.16 — BookingRecord / bookingRecords — conditional D-003 promotion

**Case:** QA-DB-BookingRecord. **Evidence required:** real DB field/index/reference/transaction tests under QA-DB-01–07 and owning task cases; selected feature gate and actual outcome. **Status:** Not run.


No collection needed for manual requests. Integrated booking needs this contract plus verified provider callbacks from its first release. External booking link alone must not claim synchronized CRM data.

| Field | Type; required/default | Rules / reason |
|---|---|---|
| commandKey | String; R | U for reservation request retry |
| inquiryId | Inquiry ref; R | Shared consultation request; no second lead store |
| provider / providerBookingId | String ≤80 / String ≤300; C after reservation | U compound partial populated; provider event identity |
| status | String; R pending | pending / confirmed / cancelled / rescheduled / failed / uncertain |
| requestedSlotStart / requestedSlotEnd | UTC Date; R | Actual selected provider slot; end > start; recheck availability |
| confirmedStartAt / confirmedEndAt | UTC Date; C confirmed | Authoritative provider result |
| timezone | IANA string; R | Display and user preference |
| providerRevision / lastProviderEventId | String ≤300; O None | Reconciliation/idempotency; verify provider event order before applying |
| replacementBookingId | BookingRecord ref; O None | Rescheduling chain without overwrite loss |
| lastSyncedAt / lastErrorCode | Date / String ≤100; O None | Operational visibility |

Indexes: U commandKey; U (+provider,+providerBookingId) partial populated; (+inquiryId); (+status,+confirmedStartAt). Database writes cannot reserve a provider slot by themselves. Coordinate provider command and reconciliation; do not hold database transaction over network. Confirm only verified success. Provider-specific callback deduplication ledger may be needed if its event model cannot be represented by these fields; select it with D-003, not by assuming last-event ID alone handles every out-of-order event. No payment-required scheduling in P1 without a separate scope decision.


## 17. Complete requirement traceability matrix

**236/236 records: 207 FR + 8 BR + 15 NFR + 6 EXT.** Requirement text/phase/acceptance comes from S1; owning module/page and actual milestone/task mapping comes from S7 §16. Source statuses such as “proposed criteria” are preserved in the acceptance cell. All source-qualified P1 slices receive test mappings; future-only records remain exclusion checks, not implementation obligations.

`QA-R-<requirement-ID>` is a requirement acceptance contract: execute its exact source criterion for the approved phase slice through the listed `QA-T-*` task cases and their concrete scenarios, page/model cases, with one evidence mapping. It is not a demand to duplicate automated tests. For an excluded future feature, QA-R verifies only that P1 does not activate it; its original future criterion is retained explicitly for later planning. Shared NFR controls apply to every affected workflow, not just the listed principal owner.

Types and priorities below are QA allocation recommendations; phase and source acceptance remain unchanged. Statuses describe future verification, not current implementation. “Not run” is the default; a conditional row cannot pass until its gate is selected or approved N/A and baseline proved.

### FR-01 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-01-01 — Responsive website (desktop/tablet/mobile) | Shared presentation; Intake; Catalog; Adapt all public interfaces across desktop, tablet and mobile. | P1. P1 baseline/ongoing within source qualification | M04, M12 | M04-01, M04-02, M12-02 | QA-R-FR-01-01; QA-T-M04-01; QA-T-M04-02; QA-T-M12-02 | U,E,DOC,A | Q1 | At agreed mobile/tablet/desktop widths, text and controls remain usable, menus work, and content does not overflow except intentional scroll regions. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-02 — Professional homepage | Content; Catalog; PUB-001, PUB-005 | P1. P1 baseline/ongoing within source qualification | M09 | M09-01 | QA-R-FR-01-02; QA-T-M09-01 | U,E,DOC,A | Q1 | Approved company messaging, eight categories, solutions and CTA destinations are represented; unpublished proof is not exposed; final sections await Step 3. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-03 — Mega menu and dropdown navigation | Catalog; Shared presentation; Provide accessible grouped navigation to approved destinations. | P1. P1 baseline/ongoing within source qualification | M04 | M04-03 | QA-R-FR-01-03; QA-T-M04-03 | U,E,DOC,A | Q1 | Navigation is keyboard-operable, has visible focus and mobile equivalents; exact mega-menu styling remains a design decision, not a new scope obligation. [Source status: Confirmed grouped navigation; mega-menu presentation detail proposed.] | Not run; source gates retained |
| FR-01-04 — Service categories and individual pages | Catalog; Content; Pages in S7 task records/§§5–6 and this file §15 | P1. P1 baseline/ongoing within source qualification | M05, M09 | M05-01, M05-03, M05-04, M09-02, M09-03, M09-04, M09-05, M09-06 | QA-R-FR-01-04; QA-T-M05-01; QA-T-M05-03; QA-T-M05-04; QA-T-M09-02; QA-T-M09-03; QA-T-M09-04; QA-T-M09-05; QA-T-M09-06 | U,E,DOC,A | Q1 | Displayed names/prices/availability match CAT; cross-listed services share identity; only approved substantive detail pages are published. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-05 — Solutions and service bundles | Catalog; Content; Pages in S7 task records/§§5–6 and this file §15 | P1. P1 baseline/ongoing within source qualification | M05, M09 | M05-05, M09-06 | QA-R-FR-01-05; QA-T-M05-05; QA-T-M09-06 | U,E,DOC,A | Q1 | All five approved names/prices are preserved; package inclusions are explicit before publication; selections reach the unified quote flow. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-06 — Service package and pricing comparison | Catalog; Content; Pages in S7 task records/§§5–6 and this file §15 | P1. P1 baseline/ongoing within source qualification | M05, M09 | M05-04, M05-05, M09-06 | QA-R-FR-01-06; QA-T-M05-04; QA-T-M05-05; QA-T-M09-06 | U,E,DOC,A | Q1 | Starting prices are clearly indicative; recurring charges and excluded third-party costs are distinguished; missing scope is resolved before publication. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-07 — Dynamic call-to-action buttons | Catalog; Shared presentation; Intake; Content; Pages in S7 task records/§§5–6 and this file §15 | P1. P1 baseline/ongoing within source qualification | M04, M05, M06, M09 | M04-03, M05-04, M05-05, M06-05, M09-01 | QA-R-FR-01-07; QA-T-M04-03; QA-T-M05-04; QA-T-M05-05; QA-T-M06-05; QA-T-M09-01 | U,E,DOC,A | Q1 | Context is preserved and server-validated; all actions have meaningful labels and working destinations; primary CTA policy is consistent. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-08 — About, team, mission and company information | Content; Catalog; PUB-001, PUB-005 | P1. P1 baseline/ongoing within source qualification | M09 | M09-01 | QA-R-FR-01-08; QA-T-M09-01 | U,E,DOC,A | Q1 | Only approved real identities/locations are public; unavailable team/statistics sections stay unpublished; proposed mission wording is approved before use. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-09 — Contact page and inquiry form | Intake; PUB-012, PUB-014 | P1. P1 baseline/ongoing within source qualification | M06 | M06-04 | QA-R-FR-01-09; QA-T-M06-04 | U,E,DOC,A | Q1 | Form behavior meets FR-02-04; contact details match the approved record and working mailbox; no parallel lead database is created. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-10 — Portfolio and case studies | Content; PUB-006, PUB-007 | P1. P1 baseline/ongoing within source qualification | M09 | M09-07 | QA-R-FR-01-10; QA-T-M09-07 | U,E,DOC,A | Q1 | Client/internal/concept type is visible; permission and claims checked; screenshots exclude private data; no invented results or clients. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-11 — Testimonials and client reviews | Content; ADM-017, ADM-018 | P1. P1 baseline/ongoing within source qualification | M08 | M08-03 | QA-R-FR-01-11; QA-T-M08-03 | U,E,DOC,A | Q1 | Staff can manage publication; attribution/permission is recorded; no fabricated proof; empty sections can stay unpublished; public review submission is not required. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-12 — Blog, articles and resource center | Content; ADM-013, ADM-014, ADM-015, ADM-016, PUB-008, PUB-009, PUB-010, PUB-011 | P1. P1 baseline/ongoing within source qualification | M08, M09 | M08-02, M09-08 | QA-R-FR-01-12; QA-T-M08-02; QA-T-M09-08 | U,E,DOC,A | Q1 | Published entries have usable detail views and metadata; drafts are not public; navigation and related links work; resource assets follow file controls when used. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-13 — FAQ and knowledge base | Content; ADM-021, ADM-022, PUB-008, PUB-009, PUB-010, PUB-011 | P1. P1 baseline/ongoing within source qualification | M08, M09 | M08-05, M08-06, M09-08 | QA-R-FR-01-13; QA-T-M08-05; QA-T-M08-06; QA-T-M09-08 | U,E,DOC,A | Q1 | Published answers can be browsed/searched; no draft/private content leaks; authoring method is approved; support ticketing is not required for this feature. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-14 — Website search | Discovery; Catalog; Content; PUB-016 | P1. P1 baseline/ongoing within source qualification | M10 | M10-01 | QA-R-FR-01-14; QA-T-M10-01 | U,E,DOC,A | Q1 | All four required types are searchable; drafts/private records are excluded; empty/error states exist; result relevance and agreed response budget are checked on representative data. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-01-15 — Multi-language website | Future owner from S5 §16 / S6 §21; Offer genuine translated public experiences in approved languages. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-01-15; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only reviewed translations publish; navigation and metadata are consistent; fallback behavior and language-specific indexing are defined before launch. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-01-16 — Multi-currency pricing display | Future owner from S5 §16 / S6 §21; Show approved alternate currency estimates while preserving monetary meaning. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-01-16; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Source currency, conversion date/rate and indicative status are clear; authoritative quotes retain the agreed currency; no exchange-rate guarantee is implied. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-01-17 — Personalized website content | Future owner from S5 §16 / S6 §21; Vary selected content using approved context and privacy rules. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-01-17; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Default content remains usable; variation rules are documented; consent respected; personalization does not reveal private data or fabricate familiarity. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-01-18 — AI-powered website search | Future owner from S5 §16 / S6 §21; Add semantic or AI-assisted retrieval over approved public content. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-01-18; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only authorized published sources are used; responses link to sources and handle uncertainty; ordinary search remains available; quality/cost gates pass. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-02 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-02-01 — Unified multi-step quote request | Intake; Catalog; PUB-013 | P1. P1 baseline/ongoing within source qualification | M06 | M06-05 | QA-R-FR-02-01; QA-T-M06-05 | U,I,API,E,M | Q0 | No visitor login required; selected context persists; required fields validated server-side; successful save yields a reference; failure allows correction without duplicate inquiries. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-02 — Multi-service selection | Catalog; Intake; PUB-013 | P1. P1 baseline/ongoing within source qualification | M05, M06 | M05-02, M06-05 | QA-R-FR-02-02; QA-T-M05-02; QA-T-M06-05 | U,I,API,E,M | Q0 | Selections remain unique and editable; cross-listing does not duplicate the same service; valid custom/unsure path exists; totals are not presented as a binding quote. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-03 — Package selection with starting prices | Catalog; Intake; PUB-003, PUB-004, PUB-013, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05 | P1. P1 baseline/ongoing within source qualification | M05, M06 | M05-02, M05-05, M06-05 | QA-R-FR-02-03; QA-T-M05-02; QA-T-M05-05; QA-T-M06-05 | U,I,API,E,M | Q0 | Server resolves valid IDs and availability; tampered amounts are ignored/rejected; stored snapshot preserves price/currency/period and timestamp after future catalog changes. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-04 — General contact form | Intake; PUB-012, PUB-014 | P1. P1 baseline/ongoing within source qualification | M06 | M06-04 | QA-R-FR-02-04; QA-T-M06-04 | U,I,API,E,M | Q0 | Valid submissions enter the common lead store with contact inquiry type; optional phone/company are not required by default; errors are accessible; spam controls apply. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-05 — Consultation request form | Intake; PUB-012, PUB-014 | P1. P1 baseline/ongoing within source qualification | M06 | M06-04 | QA-R-FR-02-05; QA-T-M06-04 | U,I,API,E,M | Q0 | Request is stored as consultation type and acknowledged as pending confirmation; no unavailable slot is represented as booked; time-zone context is captured when time preferences are collected. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-06 — Lead database | Shared infrastructure; Intake; Notifications; Operations; CRM; ADM-004, ADM-005 | P1. P1 baseline/ongoing within source qualification | M02, M06, M07 | M02-01, M06-01, M06-03, M07-01 | QA-R-FR-02-06; QA-T-M02-01; QA-T-M06-01; QA-T-M06-03; QA-T-M07-01 | U,I,API,E,M | Q0 | Validated records survive restart; IDs are unique; only authorized staff access private data; failed notification does not erase a saved inquiry; data errors are monitored. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-07 — Automatic lead reference number | Intake; Notifications; Operations; Assign a unique internal identifier and human-readable inquiry reference. | P1. P1 baseline/ongoing within source qualification | M06 | M06-01, M06-03 | QA-R-FR-02-07; QA-T-M06-01; QA-T-M06-03 | U,I,API,E,M | Q0 | Concurrent submissions cannot share a reference; retries do not create unwanted duplicates; reference alone never grants private record access. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-08 — Customer confirmation email | Notifications; Operations; Intake; CRM; ADM-002, ADM-003, PUB-015 | P1. P1 baseline/ongoing within source qualification | M06 | M06-02, M06-03, M06-06 | QA-R-FR-02-08; QA-T-M06-02; QA-T-M06-03; QA-T-M06-06 | U,I,API,E,M | Q0 | No success email precedes durable save; repeated delivery attempts are controlled; private staff notes are excluded; failure is retried/visible without asking the visitor to resubmit. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-09 — Internal lead notification | Notifications; Operations; Intake; CRM; ADM-002, ADM-003, PUB-015 | P1. P1 baseline/ongoing within source qualification | M06 | M06-02, M06-03, M06-06 | QA-R-FR-02-09; QA-T-M06-02; QA-T-M06-03; QA-T-M06-06 | U,I,API,E,M | Q0 | Notification points to a protected record; recipients follow approved settings; delivery failure is visible and retried; unnecessary personal data is excluded. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-10 — Lead status management | CRM; Intake; ADM-002, ADM-003 | P1. P1 baseline/ongoing within source qualification | M07 | M07-02 | QA-R-FR-02-10; QA-T-M07-02 | U,I,API,E,M | Q0 | Stage history follows FR-03-05; spam/duplicate/no-response are separate tags; exact inquiry-to-opportunity status relationship is approved before implementation. [Source status: Confirmed status tracking; inquiry/opportunity mapping requires D-011 resolution.] | Not run; source gates retained |
| FR-02-11 — Lead assignment | CRM; Intake; ADM-002, ADM-003 | P1. P1 baseline/ongoing within source qualification | M07 | M07-02 | QA-R-FR-02-11; QA-T-M07-02 | U,I,API,E,M | Q0 | Only eligible users can be assigned; assignment change is audited; unassigned records remain visible to permitted staff; access does not expand unintentionally. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-12 — Lead notes and activity history | CRM; Maintain internal notes and chronological sales activity. | P1. P1 baseline/ongoing within source qualification | M07 | M07-06, M07-00 | QA-R-FR-02-12; QA-T-M07-06; QA-T-M07-00 | U,I,API,E,M | Q0 | Author/time and relevant changes are retained; internal notes stay private; note-edit/delete policy is approved; sensitive information is minimized. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-13 — Lead source tracking | Intake; CRM; ADM-002, ADM-003 | P1. P1 baseline/ongoing within source qualification | M06, M07 | M06-01, M07-02 | QA-R-FR-02-13; QA-T-M06-01; QA-T-M07-02 | U,I,API,E,M | Q0 | Known fields are validated and bounded; Unknown is supported; personal data is excluded from analytics; direct/blocked-referrer submissions still work. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-02-14 — Calendar appointment booking | Intake; Operations; PUB-014 | P2 baseline; P1 proposed, pending D-003. P2 baseline; conditional P1 only after D-003 | M06 | M06-08, M06-09 | QA-R-FR-02-14; QA-T-M06-08; QA-T-M06-09 | I,API,E,SEC,M | Q0 | Selected scheduling mode and phase are approved; timezone, cancellation/rescheduling and duplicate-event handling work; only confirmed provider bookings are labeled booked; CRM linkage is verified if promised. [Source status: Decision required — S1/S2 P2; S3 proposes P1; Google Calendar booking scope/phase unresolved (D-003).] | Blocked until selected/applicable; Not run |
| FR-02-15 — Automated follow-up sequences | Future owner from S5 §16 / S6 §21; Run approved follow-up sequences with consent and stop conditions. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-02-15; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Enrollment, opt-out, reply/won/lost stopping, send limits and delivery history are tested; this is not the P1 manual task feature. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-02-16 — Proposal generation | Future owner from S5 §16 / S6 §21; Generate a reviewable proposal from approved inquiry scope and templates. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-02-16; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Client, scope, exclusions, fees and milestones are editable; staff reviews before sending; revisions are identifiable; no auto-binding quote is created. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-02-17 — Proposal approval and e-signature | Future owner from S5 §16 / S6 §21; Support client review and an approved electronic-signature process. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-02-17; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Signer identity/process, document version and evidence are preserved; declined/expired documents are handled; provider/legal suitability is verified before use. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-02-18 — AI lead qualification | Future owner from S5 §16 / S6 §21; Suggest lead qualification using approved criteria. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-02-18; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Output is advisory, explains relevant factors and permits correction; no unapproved rejection or external communication occurs; evaluation and privacy gates pass. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-02-19 — AI sales assistant | Future owner from S5 §16 / S6 §21; Assist staff with summaries and sales-response drafts. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-02-19; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Access follows staff permissions; drafts are labeled; source facts can be checked; no autonomous commitments/sending without approved action rules. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-02-20 — Lead scoring and sales forecasting | Future owner from S5 §16 / S6 §21; Score leads and forecast sales using defined data and assumptions. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-02-20; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Inputs, methodology and data period are visible; forecasts are not reported as booked revenue; sparse-data limitations and manual overrides are supported. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-03 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-03-01 — Contacts database | CRM; Intake; Operations; ADM-004, ADM-005 | P1. P1 baseline/ongoing within source qualification | M07 | M07-01, M07-07 | QA-R-FR-03-01; QA-T-M07-01; QA-T-M07-07 | U,I,API,E,M | Q0 | New inquiries can link to an existing contact; duplicate matching is reviewed, not an unsafe automatic merge; authorized corrections preserve relationships/history. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-03-02 — Basic customer profile | CRM; ADM-010, ADM-011 | P1. P1 baseline/ongoing within source qualification | M07 | M07-05 | QA-R-FR-03-02; QA-T-M07-05 | U,I,API,E,M | Q0 | Only approved fields are collected; profile links to relevant records; customer flag is distinct from payment state; no client login is implied. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-03-03 — Lead-to-customer conversion | CRM; Operations; Intake; Identity; ADM-010, ADM-011 | P1. P1 baseline/ongoing within source qualification | M07 | M07-05, M07-07, M07-08 | QA-R-FR-03-03; QA-T-M07-05; QA-T-M07-07; QA-T-M07-08 | U,I,API,E,M | Q0 | One customer identity is retained; original inquiry and opportunity history remain; repeated conversion does not duplicate records; payment remains independent; correction rules are defined. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-03-04 — Company/organization records | Future owner from S5 §16 / S6 §21; Link contacts and deals to business organizations. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-04; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Company identity and contact links are editable with access checks; merging preserves linked history; internal staff organizations and client companies are not confused. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-03-05 — Sales opportunity pipeline | CRM; Intake; Identity; ADM-006, ADM-007 | P1. P1 baseline/ongoing within source qualification | M07 | M07-03, M07-08 | QA-R-FR-03-05; QA-T-M07-03; QA-T-M07-08 | U,I,API,E,M | Q0 | New/Qualified/Discovery/Proposal Sent/Negotiation/Won/Lost are supported; owner, estimated value and stage history persist; drag-and-drop is optional; a stage change does not imply payment. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-03-06 — Follow-up tasks and reminders | CRM; Intake; Identity; ADM-008, ADM-009 | P1. P1 baseline/ongoing within source qualification | M07 | M07-04, M07-08 | QA-R-FR-03-06; QA-T-M07-04; QA-T-M07-08 | U,I,API,E,M | Q0 | Owner, due date, status and notes are stored; due/overdue tasks are highlighted; completion is recorded; timezone display is clear; no external campaigns are required. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-03-07 — Communication timeline | Future owner from S5 §16 / S6 §21; Aggregate authorized communication and activity events into a timeline. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Events preserve source/time and access scope; duplicates are controlled; internal-only items are distinguished; unrelated inbox content is not imported indiscriminately. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-03-08 — Customer tags and segmentation | Future owner from S5 §16 / S6 §21; Tag and segment contacts using documented criteria. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Tags can be managed without duplicating contacts; filter results respect access; segment use for marketing follows consent and opt-out rules. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-03-09 — Email integration | Future owner from S5 §16 / S6 §21; Connect approved business email to permitted CRM workflows. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Account consent and least-privilege scopes are used; matching/review rules avoid unrelated mail capture; disconnect/revocation and sync errors are handled. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-03-10 — Deal and revenue forecasting | Future owner from S5 §16 / S6 §21; Forecast future deal/revenue outcomes using pipeline data. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Reuse FR-02-20 forecasting foundations; methodology/time horizon are visible; actual payments remain distinct; forecasts can be compared with later outcomes. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-03-11 — Customer lifetime value tracking | Future owner from S5 §16 / S6 §21; Calculate customer lifetime value using a defined revenue/cost model. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Formula, currency, time basis and included costs are stated; source records reconcile; missing costs are disclosed rather than represented as profit. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-03-12 — AI CRM assistant | Future owner from S5 §16 / S6 §21; Offer AI help within authorized CRM records. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Reuse AI controls and sales-assistant capability; record permissions apply to every retrieval; uncertain conclusions are flagged; no autonomous record changes by default. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-03-13 — Customer health scoring | Future owner from S5 §16 / S6 §21; Estimate customer health from approved signals. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Signals and weighting are visible; score can be corrected; sparse/missing data is shown; no unsupported claim about customer intent is made. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-03-14 — Multiple customizable pipelines | Future owner from S5 §16 / S6 §21; Support several configurable pipelines when justified. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-03-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Stage definitions, permissions and mappings are versioned; moving records preserves history; reporting distinguishes pipelines; default P1 pipeline remains intact. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-04 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-04-01 — Centralized service catalog | Catalog; CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-002 | P1. P1 baseline/ongoing within source qualification | M05 | M05-01, M05-03 | QA-R-FR-04-01; QA-T-M05-01; QA-T-M05-03 | U,E,DOC,A | Q1 | Exactly 57 unique services and 58 category memberships are preserved; IDs/slugs are unique; cross-listing resolves to the same service; changes are controlled. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-04-02 — Centralized pricing/package data | Catalog; Centralize package prices, currency, billing model and scope references. | P1. P1 baseline/ongoing within source qualification | M05 | M05-01, M05-02 | QA-R-FR-04-02; QA-T-M05-01; QA-T-M05-02 | U,E,DOC,A | Q1 | All displays resolve the same approved values; prices use precise money representation; invalid currencies/periods are rejected; unresolved package scope blocks misleading publication. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-04-03 — Service availability management | Catalog; Content; Pages in S7 task records/§§5–6 and this file §15 | P1. P1 baseline/ongoing within source qualification | M05, M09 | M05-01, M05-03, M09-02 | QA-R-FR-04-03; QA-T-M05-01; QA-T-M05-03; QA-T-M09-02 | U,E,DOC,A | Q1 | Each service has an approved state; public actions reflect availability; coming-soon cannot imply confirmed immediate delivery; P1 management may use maintained catalog data rather than an admin editor. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-04-04 — Admin service editor | Future owner from S5 §16 / S6 §21; Provide staff editing of service details, packages and availability. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-04; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only permitted users edit; validation preserves IDs/slug uniqueness and price history; publication checks require scope/availability approval; all changes are audited. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-04-05 — Dynamic page management | Future owner from S5 §16 / S6 §21; Manage approved public page content through the dashboard. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only supported content fields/templates are editable; changes have preview and publication controls; arbitrary code execution is not allowed; routes stay consistent. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-04-06 — Blog/article management | Content; ADM-013, ADM-014, ADM-015, ADM-016 | P1. P1 baseline/ongoing within source qualification | M08 | M08-01, M08-02 | QA-R-FR-04-06; QA-T-M08-01; QA-T-M08-02 | U,I,API,E,M | Q0 | Title, slug, excerpt, body, featured-image reference and tags are manageable; draft content stays private; publish/unpublish works; slug and content are validated; image method is approved before launch. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-04-07 — Media library | Future owner from S5 §16 / S6 §21; Manage reusable media assets and their metadata. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: File type/size/access checks apply; alt text and usage references are supported; deletion does not silently break content; private files are not exposed as public media. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-04-08 — SEO metadata editor | Content; Discovery; ADM-019, ADM-020 | P1. P1 baseline/ongoing within source qualification | M08, M10 | M08-04, M10-02 | QA-R-FR-04-08; QA-T-M08-04; QA-T-M10-02 | U,I,API,E,M | Q0 | Title/description/canonical/indexing/social fields validate; default canonicals are sensible; private routes cannot be made public/indexable; changes are audited; accidental site-wide noindex is guarded. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-04-09 — Reusable content blocks | Future owner from S5 §16 / S6 §21; Compose approved reusable content patterns. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only allowed blocks are available; required content and accessibility fields validate; changes identify affected pages; this does not require a visual page builder. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-04-10 — Draft and publish workflow | Content; Extend draft/preview/publish controls to broader content types. | P2. P1 article slice in FR-04-06; broader workflow deferred P2 | M08 | M08-01 | QA-R-FR-04-10; QA-T-M08-01 | U,I,API,E,M | Q0 | P1 article workflow remains covered by FR-04-06; later supported types have explicit publication states; previews require appropriate access; unpublished content is excluded from search/sitemap. [Source status: Proposed P2 for general content only; article draft/publish is explicitly confirmed P1 under FR-04-06 (D-008).] | Not run; source gates retained |
| FR-04-11 — Content version history | Future owner from S5 §16 / S6 §21; Retain content revision history and controlled restoration. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Version author/time and content are retained; restore is permission-checked and creates an auditable revision; published/unpublished effects are explicit. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-04-12 — Scheduled publishing | Future owner from S5 §16 / S6 §21; Publish approved content at a future time. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Timezone is clear; cancelled/rescheduled jobs do not publish stale versions; retries do not duplicate publication; failed jobs are visible. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-04-13 — Multi-language content management | Future owner from S5 §16 / S6 §21; Manage translation variants of content. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Variants retain their source relationship; translation review state is visible; incomplete translations do not publish silently; slugs/metadata/language links validate. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-04-14 — AI-assisted content drafting | Future owner from S5 §16 / S6 §21; Generate editable content drafts with AI assistance. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: No automatic publication; factual claims and references require review; generated proof/credentials are forbidden; provider/data/cost controls apply. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-04-15 — Visual page builder | Future owner from S5 §16 / S6 §21; Offer constrained visual editing of approved page components. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-04-15; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only approved components/styles are allowed; responsive/accessibility constraints validate; preview/version/rollback work; arbitrary script injection is blocked. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-05 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-05-01 — Client registration and login | Future owner from S5 §16 / S6 §21; Provide secure customer account access when the portal launches. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-01; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Invitation versus public registration is approved; identity recovery and revocation work; each account is explicitly linked to permitted client records; unauthorized access is denied. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-02 — Client dashboard | Future owner from S5 §16 / S6 §21; Summarize a client's authorized projects, documents and next actions. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-02; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only that client's records appear; empty/error states work; internal notes and unrelated financial data are excluded; summaries link to permitted detail views. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-03 — Project status tracking | Future owner from S5 §16 / S6 §21; Show approved project progress to clients. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-03; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Client-visible states match project records; internal-only details remain hidden; stale/missing updates are identified; access is checked on every request. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-04 — View proposals and contracts | Future owner from S5 §16 / S6 §21; Let clients access their authorized proposal/contract versions. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-04; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Correct version and status are visible; private documents use access-controlled delivery; other clients cannot access guessed identifiers; download activity is recorded as appropriate. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-05 — View invoices and payments | Future owner from S5 §16 / S6 §21; Display invoices, balances and verified payment history. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Amounts/currency/status reconcile with finance records; pending transactions are not shown as paid; only authorized invoices are available. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-06 — Upload/download project files | Future owner from S5 §16 / S6 §21; Exchange project files through controlled uploads/downloads. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-06; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Permissions, file restrictions and scanning policy apply; private links are time-limited where supported; storage quotas and upload failures are handled; downloads enforce client/project access. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-07 — Submit project requirements | Future owner from S5 §16 / S6 §21; Capture project intake answers and updates. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Required fields follow approved project scope; submissions retain author/time/version; changes notify responsible staff; credentials are not collected in ordinary text fields. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-08 — Approve designs and deliverables | Future owner from S5 §16 / S6 §21; Record client approval or rejection of a specific deliverable version. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Approver identity/time/version and comments are stored; superseded versions cannot silently inherit approval; rejection retains feedback; staff cannot impersonate approval. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-09 — Request project changes | Future owner from S5 §16 / S6 §21; Capture requested scope changes and their disposition. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Request is linked to project/scope; staff can estimate and seek approval; no automatic inclusion or fee commitment; status/history remain visible to authorized users. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-10 — Message project manager | Future owner from S5 §16 / S6 §21; Provide project-linked client/staff communication. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Sender/time and project linkage are stored; participants are permission-checked; internal notes stay separate; notification failures are handled. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-11 — Submit support tickets | Future owner from S5 §16 / S6 §21; Allow clients to open and track support tickets. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Ticket owner/status/history are recorded; visibility is client-scoped; response policies match the agreed support plan; attachments follow FILES controls. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-12 — Client notifications | Future owner from S5 §16 / S6 §21; Notify clients about approved project, document and support events. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Recipients and channels follow preferences and permissions; duplicates are controlled; sensitive details are minimized; delivery/failure history is visible. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-13 — Subscription management | Future owner from S5 §16 / S6 §21; Let clients manage eligible subscription settings. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Changes follow provider/state rules and contract terms; effective date and consequences are clear; no cross-client changes; pending actions reconcile with billing. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-05-14 — AI client support assistant | Future owner from S5 §16 / S6 §21; Assist clients using authorized support knowledge and records. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-05-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only client-permitted context is retrieved; uncertainty/escalation exists; no unauthorized disclosure, refund, contract or account change; evaluation gates pass. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-06 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-06-01 — Project creation from accepted proposal | Future owner from S5 §16 / S6 §21; Create a project from an accepted proposal with staff control. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-01; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Accepted proposal/version and client are linked; repeated conversion cannot create accidental duplicates; agreement/deposit readiness is visible; scope is preserved. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-02 — Project dashboard | Future owner from S5 §16 / S6 §21; Provide a staff overview of active delivery projects. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-02; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only authorized projects appear; stage/owner/milestones are accurate; filters and empty states work; client views remain separately scoped. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-03 — Task and subtask management | Future owner from S5 §16 / S6 §21; Manage project tasks/subtasks and status. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-03; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Tasks have project, owner, status and due context; nesting is bounded; updates retain history; deleting a parent has an explicit safe policy. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-04 — Team assignment | Future owner from S5 §16 / S6 §21; Assign staff or contractors to project responsibilities. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-04; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only eligible people are assigned; project permissions follow least privilege; removal revokes future access; unrelated client/finance data stays inaccessible. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-05 — Project milestones | Future owner from S5 §16 / S6 §21; Track agreed milestones and completion evidence. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Milestone dates/status/deliverables are linked to the agreed scope; acceptance evidence is recorded; completion does not automatically mark an invoice paid. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-06 — Kanban board | Future owner from S5 §16 / S6 §21; Display project tasks as an accessible Kanban board. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-06; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Column/status mapping is consistent; keyboard alternatives work; concurrent changes are handled; permissions match task editing; not required for P1 sales pipeline. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-07 — Project files and documentation | Future owner from S5 §16 / S6 §21; Organize project documentation and files. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Files have project and visibility classification; versions/links remain understandable; access follows staff/client permissions; secrets use an approved secure channel. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-08 — Deadline and progress tracking | Future owner from S5 §16 / S6 §21; Track deadlines, overdue work and progress indicators. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Dates use clear timezones; progress calculation is documented; overdue status updates correctly; no false completion from task counts alone where milestones remain open. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-09 — Client review and approval | Future owner from S5 §16 / S6 §21; Manage review requests and version-specific client acceptance. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Request identifies deliverable/version/approver; approval/rejection is timestamped; notifications are reliable; later revisions require appropriate renewed approval. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-10 — Time tracking | Future owner from S5 §16 / S6 §21; Record time against authorized project work. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Entries have person/date/duration/project; corrections are audited; totals reconcile; client visibility and billable rules are approved before exposure. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-11 — Project profitability tracking | Future owner from S5 §16 / S6 §21; Compare project revenue and costs with defined calculations. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Recognized/invoiced/collected revenue basis is explicit; time and expenses reconcile; missing cost inputs are disclosed; currency handling is consistent. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-12 — Resource and capacity planning | Future owner from S5 §16 / S6 §21; Plan staff availability and delivery capacity. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Capacity assumptions and time periods are explicit; assignments do not silently override availability; reports respect access and approved working calendars. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-13 — Gantt chart | Future owner from S5 §16 / S6 §21; Visualize dated work and dependencies on a timeline. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Dependency/date changes remain consistent with tasks; impossible/cyclic dependencies are detected; accessible non-chart representation exists. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-14 — Automated project creation | Future owner from S5 §16 / S6 §21; Create projects from approved events without manual duplication. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Trigger conditions include agreement/deposit policy; operation is idempotent; failures are visible; created scope reflects the accepted version; manual override exists. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-06-15 — AI project progress summaries | Future owner from S5 §16 / S6 §21; Draft project summaries from authorized delivery records. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-06-15; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Summary cites relevant milestones/tasks and distinguishes missing data; staff reviews before external sharing; no invented completion or dates. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-07 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-07-01 — Proposal and invoice templates | Operations; Maintain reusable proposal and invoice templates for business operations. | P1. P1 baseline/ongoing within source qualification | M11 | M11-03 | QA-R-FR-07-01; QA-T-M11-03 | DOC,M | Q1 | Templates contain verified entity/contact data, currency, scope/fees and applicable payment terms; template availability does not imply an online document system. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-07-02 — Manual payment tracking | Operations; ADM-027 | P1 proposed; implementation location pending D-007. P1 qualified/proposed; named gate retained | M11 | M11-03, M11-06 | QA-R-FR-07-02; QA-T-M11-03; QA-T-M11-06 | U,E,DOC,A | Q1 | Amount/date/currency/reference and invoice link are retained; corrections are traceable; Won is not payment evidence; external ledger versus P1 dashboard implementation must be decided. [Source status: Decision required — S2 proposes P1; external manual process versus dashboard feature unresolved (D-007).] | Not run; source gates retained |
| FR-07-03 — Client billing profiles | Future owner from S5 §16 / S6 §21; Maintain client billing information separately from ordinary contacts. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-03; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only needed fields are stored; authorized updates are audited; billing identity can differ from project contact; jurisdiction-specific fields are configured only when required. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-04 — Automated invoice generation | Future owner from S5 §16 / S6 §21; Generate invoices from approved commercial records. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-04; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Invoice reference/version, client, currency, line items, totals and due terms are validated; draft/issued/cancelled states are tracked; retries do not issue duplicates. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-05 — Online payment gateway | Future owner from S5 §16 / S6 §21; Collect payments through an approved eligible provider. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Provider eligibility/account readiness confirmed; signed callbacks reconcile amount/currency/invoice; retries are idempotent; browser redirects alone cannot mark paid; card data is not stored unnecessarily. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-06 — Deposit and milestone payments | Future owner from S5 §16 / S6 §21; Represent deposits and staged payments against agreements. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-06; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Schedule matches agreement totals; partial/overdue payments are represented; milestone completion and receipt are separate events; manual P1 commercial schedules remain possible outside this module. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-07 — Recurring subscriptions | Future owner from S5 §16 / S6 §21; Manage recurring billing for approved subscriptions/retainers. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Billing interval, start/end, cancellation and provider state are explicit; duplicate charges are prevented; failed payments are handled; self-service management may remain P3. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-08 — Payment reminders | Future owner from S5 §16 / S6 §21; Send approved billing reminders. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only eligible outstanding balances trigger reminders; disputed/cancelled/paid invoices follow explicit suppression rules; send history and stop conditions are recorded. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-09 — Contract and SOW management | Future owner from S5 §16 / S6 §21; Store and manage agreements, SOWs and their versions. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Status/version/parties and access are recorded; templates are reviewed for actual jurisdiction; signature evidence is preserved; amendments do not overwrite signed originals. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-10 — Refund and cancellation management | Future owner from S5 §16 / S6 §21; Track refund/cancellation requests and approved outcomes. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Authority, amount/currency, original payment and provider result are recorded; retries cannot duplicate refunds; reporting reconciles adjustments; policies are reviewed before use. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-11 — Financial reporting | Future owner from S5 §16 / S6 §21; Produce defined finance summaries from reliable records. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Periods/currencies and cash-versus-accrual basis are clear; totals reconcile to source records; exports are access-controlled; this is not assumed statutory accounting compliance. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-12 — Multi-currency invoicing | Future owner from S5 §16 / S6 §21; Issue invoices in approved currencies. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Invoice currency is immutable after issue except controlled correction; conversion basis is explicit; amounts use precise representation; provider settlement differences are reconciled. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-13 — Expense tracking | Future owner from S5 §16 / S6 §21; Record business/project expenses and supporting evidence. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Amount/currency/date/category/project where relevant are stored; corrections audited; receipt access controlled; recurring estimates are distinguished from paid expenses. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-07-14 — Revenue and profit forecasting | Future owner from S5 §16 / S6 §21; Forecast future revenue/profit using defined scenarios. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-07-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Assumptions/time horizon and missing costs are explicit; actuals remain separate; forecasts reconcile to pipeline/billing inputs; no guaranteed outcome is implied. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-08 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-08-01 — New lead email notification | Notifications; Operations; Intake; CRM; ADM-002, ADM-003, PUB-015 | P1. P1 baseline/ongoing within source qualification | M06 | M06-02, M06-06 | QA-R-FR-08-01; QA-T-M06-02; QA-T-M06-06 | U,I,API,E,M | Q0 | Same capability as FR-02-09; one authoritative event/notification path is used; retries do not multiply alerts; delivery status is visible. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-08-02 — Customer quote confirmation | Notifications; Operations; Intake; CRM; ADM-002, ADM-003, PUB-015 | P1. P1 baseline/ongoing within source qualification | M06 | M06-02, M06-06 | QA-R-FR-08-02; QA-T-M06-02; QA-T-M06-06 | U,I,API,E,M | Q0 | Same capability as FR-02-08; send after save only; no second independent confirmation workflow is built. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-08-03 — Lead assignment notifications | CRM; Notifications; Notify a staff member of an approved lead assignment. | P1. P1 qualified/proposed; named gate retained | M07 | M07-09 | QA-R-FR-08-03; QA-T-M07-09 | I,API,E,SEC,M | Q0 | Recipient is the current eligible owner; assignment and event are traceable; repeat events are deduplicated; channel choice is approved; sensitive data is minimized. [Source status: Proposed P1 specific assignment notification; general staff alerts are confirmed.] | Blocked until selected/applicable; Not run |
| FR-08-04 — Event-based workflow triggers | Future owner from S5 §16 / S6 §21; Trigger approved workflows from recorded domain events. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-04; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Event definitions and versioned workflow rules are explicit; replay/idempotency and failure behavior are tested; disabled workflows do not execute. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-05 — Automated lead follow-up | Future owner from S5 §16 / S6 §21; Apply approved follow-up workflows to eligible leads. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Reuse FR-02-15/FR-08-06; eligibility/consent/stop rules are enforced; manual override and history exist; no duplicate campaign engine. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-06 — Email and SMS sequences | Future owner from S5 §16 / S6 §21; Execute controlled email/SMS sequences. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-06; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Channel eligibility, opt-out, frequency limits and reply/closure stopping are enforced; sends and failures are logged; provider callbacks verified. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-07 — Scheduled tasks and reminders | Future owner from S5 §16 / S6 §21; Run approved scheduled tasks and external reminders. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Timezone, cancellation, retry and duplication rules are tested; permissions apply; manual P1 tasks remain usable without this scheduler. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-08 — CRM pipeline automation | Future owner from S5 §16 / S6 §21; Apply approved stage-related CRM actions. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Rules cannot bypass required authorization; stage loops/duplicate actions are prevented; rule history and manual correction are available. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-09 — Invoice and payment automation | Future owner from S5 §16 / S6 §21; Automate approved invoice and payment-related actions. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Actions use reconciled finance events; retries are idempotent; refunded/disputed/partial states handled; no payment inferred from browser success. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-10 — Project onboarding automation | Future owner from S5 §16 / S6 §21; Automate agreed project onboarding steps. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Prerequisites are verified; template/version and created records are linked; duplicate events do not create duplicate onboarding; failures are recoverable. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-11 — Webhook management | Future owner from S5 §16 / S6 §21; Manage approved inbound/outbound webhook integrations. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Signatures or approved authentication checked; payloads validated; secrets protected; replay/deduplication, retries and failure visibility apply when introduced. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-12 — Visual workflow builder | Future owner from S5 §16 / S6 §21; Provide a graphical editor for approved workflow components. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only authorized components/actions are available; invalid/cyclic definitions rejected; preview/version/activation controls exist; runtime remains auditable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-13 — Conditional branching workflows | Future owner from S5 §16 / S6 §21; Support conditional workflow branches with explicit limits. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Conditions are deterministic and testable; missing data has defined behavior; execution limits prevent loops; unauthorized data cannot be queried. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-14 — AI-driven automation | Future owner from S5 §16 / S6 §21; Use AI within approved, bounded workflow steps. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-08-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: High-impact/external actions require approved safeguards; model outputs are validated; cost/time limits and fallback exist; decisions are traceable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-08-15 — Workflow execution logs and retries | Notifications; Operations; Provide an advanced workflow execution history and replay console. | P3 advanced console; basic reliability from P1 onward. P1 reliability slice; advanced console deferred P3 | M06 | M06-02 | QA-R-FR-08-15; QA-T-M06-02 | U,I,API,E,M | Q0 | Execution/step outcomes and safe retry controls are visible; replay does not repeat completed irreversible actions; secrets/PII minimized. Basic logs/retries are required from each feature's first release, not postponed to P3. [Source status: Conditional P3 advanced console; basic logging/retries required with every first-release workflow/integration (D-025).] | Not run; source gates retained |



### FR-09 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-09-01 — Secure staff login/logout | Identity; Content; Shared presentation; ADM-026, STA-001, STA-002, STA-003, STA-004 | P1. P1 baseline/ongoing within source qualification | M03, M04 | M03-01, M03-03, M04-04 | QA-R-FR-09-01; QA-T-M03-01; QA-T-M03-03; QA-T-M04-04 | U,I,API,E,M | Q0 | No public staff signup; valid sessions required; logout/revocation work; failed sign-in is controlled; server routes enforce access independently of UI. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-02 — Admin dashboard overview | Identity; Content; Shared presentation; CRM; Operations; ADM-001, ADM-012, ADM-026, STA-001, STA-002, STA-003, STA-004 | P1. P1 baseline/ongoing within source qualification | M04, M11 | M04-04, M11-01 | QA-R-FR-09-02; QA-T-M04-04; QA-T-M11-01 | U,I,API,E,M | Q0 | Authorized lead/status summaries and due tasks match source data; links reach protected detail views; draft CMS actions are available to permitted roles; no future module is falsely shown as working. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-03 — Lead management table | Notifications; Intake; CRM; ADM-002, ADM-003, PUB-015 | P1. P1 baseline/ongoing within source qualification | M06, M07 | M06-06, M07-02 | QA-R-FR-09-03; QA-T-M06-06; QA-T-M07-02 | U,I,API,E,M | Q0 | Rows show approved fields/status/owner/date/reference; results respect permissions; pagination is stable; empty/loading/error states exist. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-04 — Lead detail pages | Notifications; Intake; CRM; ADM-002, ADM-003, PUB-015 | P1. P1 baseline/ongoing within source qualification | M06, M07 | M06-06, M07-02 | QA-R-FR-09-04; QA-T-M06-06; QA-T-M07-02 | U,I,API,E,M | Q0 | Record links and snapshot remain accurate; private notes protected; missing optional data handled; unauthorized identifiers cannot retrieve data. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-05 — Search and filtering | CRM; Content; Identity; Operations; Search/filter authorized staff records. | P1. P1 baseline/ongoing within source qualification | M07, M11 | M07-06, M11-02 | QA-R-FR-09-05; QA-T-M07-06; QA-T-M11-02 | U,I,API,E,M | Q0 | Search covers approved fields; filters combine predictably; results/pagination are access-scoped; input and query size are bounded. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-06 — Lead status and assignment | CRM; Intake; ADM-002, ADM-003 | P1. P1 baseline/ongoing within source qualification | M07 | M07-02 | QA-R-FR-09-06; QA-T-M07-02 | U,I,API,E,M | Q0 | Reuse FR-02-10/11 and FR-03-05; server permissions and activity history apply; UI prevents unsupported changes but is not the sole security control. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-07 — Basic user roles and permissions | Identity; Operations; Content; Shared presentation; CRM; ADM-023, ADM-024, ADM-026, STA-001, STA-002, STA-003, STA-004 | P1. P1 baseline/ongoing within source qualification | M03, M04, M11 | M03-02, M03-04, M04-04, M11-02, M11-04 | QA-R-FR-09-07; QA-T-M03-02; QA-T-M03-04; QA-T-M04-04; QA-T-M11-02; QA-T-M11-04 | U,I,API,E,M | Q0 | Permission matrix is approved; backend denies forbidden reads/mutations; account provisioning/revocation works; least privilege applies; no advanced permission builder needed. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-08 — Internal activity history | CRM; Show authorized operational history to staff. | P1. P1 baseline/ongoing within source qualification | M07 | M07-06, M07-00 | QA-R-FR-09-08; QA-T-M07-06; QA-T-M07-00 | U,I,API,E,M | Q0 | Reuse record activities and audit sources; author/time/action are visible; internal details are not public; access matches the underlying record. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-09 — Team management | Future owner from S5 §16 / S6 §21; Manage team invitations, membership and working roles. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-09-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Invite lifecycle and revocation work; only permitted admins grant roles; departing staff lose access; minimum P1 staff provisioning remains required before this broader team module. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-09-10 — Department management | Future owner from S5 §16 / S6 §21; Group staff into departments when operationally needed. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-09-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Membership and manager roles are explicit; department membership alone does not bypass record permissions; inactive departments do not strand work. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-09-11 — Staff performance dashboard | Future owner from S5 §16 / S6 §21; Summarize staff performance using agreed measures. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-09-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Definitions/time periods are visible; access is appropriate; missing data is disclosed; counts reconcile with records and do not claim unmeasured productivity. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-09-12 — Global admin notifications | Future owner from S5 §16 / S6 §21; Provide a centralized staff notification center. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-09-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Notifications are recipient-scoped with read state and links; duplicate events controlled; email failure does not erase in-app events; preferences supported where approved. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-09-13 — Audit logs | Operations; ADM-025 | P1. P1 baseline/ongoing within source qualification | M02, M11 | M02-03, M11-05 | QA-R-FR-09-13; QA-T-M02-03; QA-T-M11-05 | U,I,API,E,M | Q0 | Actor/time/action/target/outcome are stored where applicable; ordinary staff cannot alter audit records; secrets excluded; retention/access policy defined; failed authorized actions are diagnosable. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-09-14 — Advanced permission builder | Future owner from S5 §16 / S6 §21; Allow authorized administrators to configure advanced permission sets. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-09-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Privilege escalation and self-granting risks are controlled; permission changes audited; effective access is inspectable; regression tests cover sensitive operations. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-09-15 — Customizable dashboard widgets | Future owner from S5 §16 / S6 §21; Let staff personalize permitted dashboard views. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-09-15; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Widgets use existing authorized data; preferences cannot expose restricted records; defaults and reset work; layout remains accessible/responsive. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-09-16 — Multi-organization management | Future owner from S5 §16 / S6 §21; Manage multiple organizations when a SaaS/business need is approved. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-09-16; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Organization selection and membership are explicit; every relevant record/action is isolated; platform support access is governed; billing and identity boundaries are approved. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-10 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-10-01 — Google Analytics 4 | Discovery; Intake; Operations; CRM; Content; Collect approved website analytics through GA4. | P1. P1 baseline/ongoing within source qualification | M10, M14 | M10-03, M14-03 | QA-R-FR-10-01; QA-T-M10-03; QA-T-M14-03 | U,E,DOC,A | Q1 | Production events follow consent configuration; no inquiry text/email/phone is sent; test/internal traffic policy is defined; duplicate initialization is prevented. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-10-02 — Google Search Console | Operations; Discovery; Intake; CRM; Content; Verify ownership and monitor search/indexing through Search Console. | P1. P1 baseline/ongoing within source qualification | M10, M14 | M10-04, M14-03 | QA-R-FR-10-02; QA-T-M10-04; QA-T-M14-03 | U,E,DOC,A | Q1 | Authorized property setup and sitemap submission are documented; production indexing settings are checked; access is limited to appropriate maintainers. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-10-03 — Quote conversion tracking | Discovery; Intake; Operations; CRM; Content; Track quote success only after durable backend acceptance. | P1. P1 baseline/ongoing within source qualification | M10, M14 | M10-03, M14-03 | QA-R-FR-10-03; QA-T-M10-03; QA-T-M14-03 | U,E,DOC,A | Q1 | Failed/blocked submissions do not count; idempotent retries do not inflate counts; no PII is transmitted; source context is preserved separately in CRM. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-10-04 — Lead count and status summary | CRM; Content; Operations; ADM-001, ADM-012 | P1. P1 baseline/ongoing within source qualification | M11 | M11-01 | QA-R-FR-10-04; QA-T-M11-01 | U,E,DOC,A | Q1 | Definitions distinguish inquiries, opportunities and customers; counts reconcile with filtered records; permissions/date ranges apply; duplicate tags are handled explicitly. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-10-05 — Lead source attribution | Future owner from S5 §16 / S6 §21; Aggregate lead-source capture into attribution reports. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: P1 capture remains FR-02-13; report model/time window and Unknown are explicit; contacts/deals are not double-counted; no unsupported multi-touch certainty. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-10-06 — Sales funnel reporting | Future owner from S5 §16 / S6 §21; Report movement and conversion through the sales funnel. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-06; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Stage history supports period calculations; denominator and exclusions are stated; reopened/lost deals handled consistently; access-scoped totals reconcile. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-10-07 — Revenue reporting | Future owner from S5 §16 / S6 §21; Report invoiced, collected, outstanding and adjusted revenue separately. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Monetary basis/currency/period are clear; refunds and partial payments reconcile; estimated opportunity values never silently become actual revenue. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-10-08 — Service popularity analytics | Future owner from S5 §16 / S6 §21; Report approved service engagement and inquiry demand. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Metrics distinguish views/selections/leads; multi-service inquiries use a documented counting rule; no misleading summed unique-lead counts. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-10-09 — Customer acquisition cost | Future owner from S5 §16 / S6 §21; Calculate acquisition cost from defined spend and customer counts. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Spend source, attribution window and customer definition are explicit; missing spend is disclosed; no division by zero; figures reconcile to the chosen period. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-10-10 — Team performance reports | Future owner from S5 §16 / S6 §21; Report team activity and outcomes using agreed measures. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Metrics/time windows and reassignment handling are defined; permissions protect employee/customer data; totals reconcile with tasks and pipeline. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-10-11 — Custom report builder | Future owner from S5 §16 / S6 §21; Allow authorized users to compose reports from approved fields. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Field/row permissions apply; expensive queries are bounded; report definitions can be saved; exports preserve access and currency/time definitions. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-10-12 — AI business insights | Future owner from S5 §16 / S6 §21; Suggest business observations from reliable reports. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Observations link to data/time range; uncertainty and sample limits shown; no invented causes; staff controls external sharing. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-10-13 — Predictive analytics | Future owner from S5 §16 / S6 §21; Model future outcomes from adequate historical data. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-10-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Training/evaluation scope and performance are documented; insufficient data produces a limitation rather than false certainty; human decisions and monitoring remain. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-11 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-11-01 — Transactional email provider | Identity; Notifications; Operations; Intake; CRM; Content; Discovery; ADM-002, ADM-003, PUB-015 | P1. P1 baseline/ongoing within source qualification | M00, M06, M14 | M00-02, M06-02, M06-06, M14-03 | QA-R-FR-11-01; QA-T-M00-02; QA-T-M06-02; QA-T-M06-06; QA-T-M14-03 | U,E,DOC,A | Q1 | Domain/sender verified; credentials server-only; retry and bounce/failure handling defined; templates tested; provider selection and cost approved. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-11-02 — Analytics integrations | Discovery; Intake; Operations; Connect the approved analytics services with privacy controls. | P1. P1 baseline/ongoing within source qualification | M10 | M10-03 | QA-R-FR-11-02; QA-T-M10-03 | U,E,DOC,A | Q1 | One controlled integration path serves FR-10-01/02/03; consent and PII restrictions apply; secrets and private dashboard data are not exposed. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-11-03 — GoHighLevel CRM | Future owner from S5 §16 / S6 §21; Synchronize approved CRM data with GoHighLevel when justified. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-03; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Source of truth, field mapping and direction are approved; external IDs prevent duplicates; conflicts/retries/deletion/consent are handled; no second uncontrolled CRM master. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-04 — Google Calendar | Intake; Operations; PUB-014 | P2 baseline; P1 proposed, pending D-003. P2 baseline; conditional P1 only after D-003 | M06 | M06-08, M06-09 | QA-R-FR-11-04; QA-T-M06-08; QA-T-M06-09 | I,API,E,SEC,M | Q0 | External-link versus synchronized booking is selected; permissions and provider capability verified; timezone/cancellation/rescheduling/retry behavior defined; calendar alone is not assumed to create a CRM lead. [Source status: Decision required — baseline P2; P1 external or integrated booking remains under review (D-003).] | Blocked until selected/applicable; Not run |
| FR-11-05 — ClickSend SMS | Future owner from S5 §16 / S6 §21; Connect approved SMS sending through ClickSend. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Recipient consent/opt-out and spend limits apply; provider credentials protected; delivery callbacks verified; duplicate sends controlled; eligibility verified before use. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-06 — Payment providers | Future owner from S5 §16 / S6 §21; Integrate payment provider adapters only after eligibility and selection. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-06; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Use FR-07-05 controls; provider account/currency/country support verified; signature and idempotency checks apply; secrets isolated; no provider assumed available. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-07 — Google Drive / cloud storage | Future owner from S5 §16 / S6 §21; Connect approved cloud-file storage or Google Drive workflows. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Access, ownership, retention and permission mapping approved; shared links do not bypass client access; transfer failures/revocation handled; public/private assets separated. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-08 — Slack / Microsoft Teams | Future owner from S5 §16 / S6 §21; Send selected operational notifications to Slack or Teams. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Channels/recipients are approved; sensitive payloads minimized; protected links used; retries controlled; no unrestricted cross-channel posting. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-09 — Zapier / Make / n8n | Future owner from S5 §16 / S6 §21; Expose approved automation integration points for Zapier, Make or n8n. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Credential scopes and data mappings approved; webhook security/replay controls apply; failures visible; external tools cannot bypass internal authorization. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-10 — Accounting software | Future owner from S5 §16 / S6 §21; Exchange approved finance records with accounting software. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Master system and mappings approved; references/currency/totals reconcile; duplicate exports prevented; corrections and tax fields follow actual setup. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-11 — WhatsApp Business Platform | Future owner from S5 §16 / S6 §21; Integrate the approved WhatsApp Business Platform use case. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Provider/account eligibility and messaging rules verified at selection; consent/opt-out and templates respected; secrets/callbacks secure; records linked correctly. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-12 — GitHub integration | Future owner from S5 §16 / S6 §21; Connect GitHub to business/project workflows beyond basic source control. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Repository permissions and selected data scope are explicit; private code/secrets not exposed to clients; access revocation works; ordinary Git/CI remains P1 engineering infrastructure. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-13 — Public developer API | Future owner from S5 §16 / S6 §21; Provide a versioned external API for approved consumers. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Authentication/scopes, rate limits, pagination, versioning and audit are defined; tenant/record permissions enforced; no public access to private data. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-11-14 — Integration marketplace | Future owner from S5 §16 / S6 §21; Offer a governed catalog of integration extensions. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-11-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Publisher/permission review, installation/revocation, version compatibility and data access are controlled; marketplace need and operating model approved first. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-12 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-12-01 — Website AI chatbot | Future owner from S5 §16 / S6 §21; Provide a public AI assistant over approved website knowledge. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-01; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Only approved content used; uncertainty and human contact fallback present; no fabricated quote/availability/credentials; abuse/cost/privacy controls tested. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-02 — AI FAQ assistant | Future owner from S5 §16 / S6 §21; Answer questions from approved published FAQs/help content. | P2. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-02; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Answers reference current approved knowledge; unknown questions escalate; private drafts/records excluded; no unsupported legal/security assurances. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-03 — AI lead qualification | Future owner from S5 §16 / S6 §21; Reuse AI-assisted lead qualification. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-03; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Same capability as FR-02-18; no separate scoring store or autonomous rejection is introduced; access and evaluation gates apply. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-04 — AI quote scope assistant | Future owner from S5 §16 / S6 §21; Suggest scope questions and possible service matches. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-04; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Suggestions use approved catalog facts; no binding price/timeline; staff reviews; user-provided content cannot override authorization or tool boundaries. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-05 — AI proposal drafting | Future owner from S5 §16 / S6 §21; Draft proposal text from approved scope and templates. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Draft references the correct inquiry/version; fees/terms require verification; no invented deliverables or automatic sending/signing; human approval logged. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-06 — AI customer support | Future owner from S5 §16 / S6 §21; Assist customer support with permitted knowledge and context. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-06; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Access follows ticket/client permissions; escalation exists; no autonomous refunds/account changes unless separately approved; evidence and uncertain claims are reviewable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-07 — AI content generation | Future owner from S5 §16 / S6 §21; Reuse AI content drafting within the editorial workflow. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Same capability as FR-04-14; drafts require human fact/claim review and explicit publication; no automated fictional proof. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-08 — AI workflow suggestions | Future owner from S5 §16 / S6 §21; Suggest workflow improvements based on authorized process information. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Suggestions are non-executing until approved; prerequisites/risks visible; no unauthorized connector setup or external action; costs and uncertainty stated. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-09 — AI CRM insights | Future owner from S5 §16 / S6 §21; Generate advisory CRM observations from permitted data. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Reuse FR-03-12 and FR-10-12 controls; sources/time ranges visible; private record scope enforced; conclusions remain correctable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-10 — AI project management assistant | Future owner from S5 §16 / S6 §21; Assist with project questions and summaries. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Reuse FR-06-15; cite task/milestone data; no invented progress or autonomous deadline commitments; client sharing requires review. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-12-11 — AI voice agent | Future owner from S5 §16 / S6 §21; Provide voice assistance only for a defined approved use case. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-12-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Identity/disclosure, consent and recording rules are verified; escalation and interruption work; no unauthorized commitments; call costs and transcripts/access are controlled. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-13 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-13-01 — Agency dashboard | Future owner from S5 §16 / S6 §21; Provide a specialized agency operations dashboard in a separate module/product. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-01; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Product/tenant scope approved; metrics derive from agency records; agency access isolation enforced; no dependency that couples public ARADUN marketing to policy operations. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-02 — Customer and household records | Future owner from S5 §16 / S6 §21; Maintain agency customers and household relationships where relevant. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-02; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Identity/relationship rules and sensitive-data policy approved; household membership does not automatically grant disclosure rights; corrections preserve history. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-03 — Policy records and renewal dates | Future owner from S5 §16 / S6 §21; Track policy records, statuses and renewal dates. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-03; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Required fields and status definitions approved by domain owners; date corrections audited; no statement that records bind coverage or replace carrier confirmation. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-04 — Carrier/company directory | Future owner from S5 §16 / S6 §21; Maintain carrier/company reference information. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-04; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Entries have controlled identity/status; no assumed appointment/partnership claims; duplicate/retired entries handled without losing policy links. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-05 — Quote and policy workflow tracking | Future owner from S5 §16 / S6 §21; Track authorized quote-to-policy workflow events. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-05; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Workflow states and permissions domain-approved; external confirmation distinguished from internal status; quote/policy history retained; no automated binding without explicit capability/authorization. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-06 — Renewal reminders | Future owner from S5 §16 / S6 §21; Generate approved renewal tasks/reminders. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-06; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Dates and lead times configurable within approved rules; cancellation/renewed policies suppressed; consent/channel rules apply; duplicates and failures controlled. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-07 — Commission tracking | Future owner from S5 §16 / S6 §21; Record expected and received commissions with reconciliation. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-07; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Source policy/statement/amount/period/currency tracked; adjustments audited; expected versus received distinguished; formulas and access reviewed by domain owner. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-08 — Document management | Future owner from S5 §16 / S6 §21; Store agency documents with strict classification and access. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-08; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Agency/customer/policy linkage is correct; encrypted storage/access/retention policy approved; private files never publicly indexed; audit and download controls tested. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-09 — Agent assignment | Future owner from S5 §16 / S6 §21; Assign agency work to eligible agents. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-09; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Agent eligibility and organization membership verified; access scope follows policy; reassignment history retained; licensing/authority assumptions are not fabricated. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-10 — Claims/service request tracking | Future owner from S5 §16 / S6 §21; Track claims/service requests and referrals as authorized. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-10; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Request type/status/owner/history recorded; carrier decisions remain distinct; sensitive data minimized; communication scope follows approved agency policies. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-11 — Carrier integration adapters | Future owner from S5 §16 / S6 §21; Connect permitted carrier systems through isolated adapters. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-11; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Carrier access/contracts verified; mapping and reconciliation tested; callbacks secured; retries controlled; no invented universal carrier API or unauthorized scraping. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-12 — Compliance and audit controls | Future owner from S5 §16 / S6 §21; Apply agency-specific audit and compliance controls. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-12; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Applicable requirements determined by qualified review; access/retention/audit behavior tested; no blanket compliance certification claim; agency boundaries enforced, with tenant isolation where applicable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-13-13 — Agency-specific reporting | Future owner from S5 §16 / S6 §21; Report agency-specific operational metrics. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-13-13; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Definitions/domain scope approved; reports reconcile with policies/requests; role/organization filters apply where applicable; exports controlled; no unsupported compliance conclusions. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### FR-14 coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| FR-14-01 — HTTPS and secure configuration | Identity; Notifications; Operations; Shared infrastructure; all write owners; Deploy with HTTPS, secure environment configuration and appropriate headers. | P1. P1 baseline/ongoing within source qualification | M00, M01, M13, M14 | M00-02, M01-02, M13-02, M14-02 | QA-R-FR-14-01; QA-T-M00-02; QA-T-M01-02; QA-T-M13-02; QA-T-M14-02 | U,I,API,E,M | Q0 | No production mixed content; secrets excluded from client bundles/logs; header policy verified against integrations; staging isolated; domain/redirect behavior tested. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-02 — Server-side input validation | Shared infrastructure; Intake; Identity; Operations; all write owners; Validate all untrusted input on the server. | P1. P1 baseline/ongoing within source qualification | M02, M06, M13 | M02-02, M06-01, M13-02 | QA-R-FR-14-02; QA-T-M02-02; QA-T-M06-01; QA-T-M13-02 | U,I,API,E,M | Q0 | Types/lengths/allowed values and ownership checked; structured errors returned safely; unsafe queries/content blocked; client-only validation never substitutes for server checks. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-03 — Role-based authorization | Identity; Operations; all write owners; Authorize every protected read and mutation on the server. | P1. P1 baseline/ongoing within source qualification | M03, M13 | M03-02, M03-05, M13-02 | QA-R-FR-14-03; QA-T-M03-02; QA-T-M03-05; QA-T-M13-02 | U,I,API,E,M | Q0 | Permission matrix enforced across endpoints/actions/files/search; direct requests and guessed IDs denied; negative access tests cover sensitive operations. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-04 — Secure staff authentication | Identity; Operations; ADM-023, ADM-024, ADM-026, STA-001, STA-002, STA-003, STA-004 | P1. P1 baseline/ongoing within source qualification | M03, M11 | M03-01, M03-03, M03-04, M03-05, M11-04 | QA-R-FR-14-04; QA-T-M03-01; QA-T-M03-03; QA-T-M03-04; QA-T-M03-05; QA-T-M11-04 | U,I,API,E,M | Q0 | Selected provider meets approved session/recovery/revocation needs; cookies/session handling secure; no unsafe custom password handling; failed attempts monitored; MFA decision resolved. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-05 — Rate limiting and spam protection | Operations; Intake; Notifications; CRM; Identity; all write owners; Control abusive form/API traffic without blocking ordinary users unnecessarily. | P1. P1 baseline/ongoing within source qualification | M02, M06, M13 | M02-04, M06-07, M13-02 | QA-R-FR-14-05; QA-T-M02-04; QA-T-M06-07; QA-T-M13-02 | U,I,API,E,M | Q0 | Server-enforced limits and spam checks applied; accessible fallback exists if challenges used; legitimate retries handled; no fake success that loses genuine inquiries. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-06 — Database backups | Operations; Shared infrastructure; Notifications; Back up essential data and verify restoration. | P1. P1 baseline/ongoing within source qualification | M02, M13 | M02-05, M13-03 | QA-R-FR-14-06; QA-T-M02-05; QA-T-M13-03 | U,I,API,E,M | Q0 | Backup schedule/retention/access and recovery targets approved; restoration demonstrated; backups include relevant database/content and file strategy; secrets/data protected. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-07 — Error logging and monitoring | Identity; Notifications; Operations; Intake; CRM; Content; Discovery; Monitor errors and important operational failures. | P1. P1 baseline/ongoing within source qualification | M00, M01, M02, M13, M14 | M00-02, M01-04, M02-03, M13-04, M14-03 | QA-R-FR-14-07; QA-T-M00-02; QA-T-M01-04; QA-T-M02-03; QA-T-M13-04; QA-T-M14-03 | U,I,API,E,M | Q0 | Alerts reach responsible maintainers; logs have useful correlation without secrets/excess PII; errors do not expose internals publicly; retention and access defined. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-08 — Privacy and consent handling | Identity; Intake; CRM; Content; Operations; all write owners; PUB-017, PUB-018, TRU-01, TRU-02, TRU-03 | P1. P1 baseline/ongoing within source qualification | M00, M02, M06, M09, M13 | M00-03, M02-04, M06-01, M09-09, M13-02 | QA-R-FR-14-08; QA-T-M00-03; QA-T-M02-04; QA-T-M06-01; QA-T-M09-09; QA-T-M13-02 | U,I,API,E,M | Q0 | Privacy acknowledgement separated from optional marketing consent; retention/deletion/contact process defined; analytics/embeds follow selected consent rules; actual providers reflected in notices. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-09 — Automated deployment and testing | Shared infrastructure; Operations; Notifications; Automate relevant checks and controlled deployment. | P1. P1 baseline/ongoing within source qualification | M01, M02, M13, M14 | M01-01, M01-03, M01-04, M02-05, M13-04, M14-02 | QA-R-FR-14-09; QA-T-M01-01; QA-T-M01-03; QA-T-M01-04; QA-T-M02-05; QA-T-M13-04; QA-T-M14-02 | U,I,API,E,M | Q0 | Lint/type/build and risk-appropriate tests run; secrets isolated; staging/production separated; release and rollback steps documented; checks cover critical lead/auth/payment paths when present. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Not run; source gates retained |
| FR-14-10 — Multi-factor authentication for staff | Identity; ADM-026, STA-002, STA-003, STA-004 | P1. P1 baseline/ongoing within source qualification | M03 | M03-03 | QA-R-FR-14-10; QA-T-M03-03 | U,I,API,E,M | Q0 | Mandatory versus available policy resolved; enrollment/recovery and revocation tested; privileged access cannot silently bypass chosen policy; provider suitability confirmed. [Source status: Decision required — S2 P1 mandatory wording conflicts with S1 if-available wording (D-009).] | Not run; source gates retained |
| FR-14-11 — File upload security | Content; Operations; Identity; all write owners; Validate, isolate and authorize uploaded files whenever introduced. | P2 baseline; P1 prerequisite if uploads introduced. P1 only if uploads selected; general scope P2 | M08, M13 | M08-07, M13-02 | QA-R-FR-14-11; QA-T-M08-07; QA-T-M13-02 | I,API,E,SEC,M | Q0 | Size/type/content checks and storage permissions apply; scanning policy is defined; private files cannot execute as public code; downloads enforce authorization; P1 uploads require this control immediately if selected. [Source status: Required when uploads begin; baseline P2, but P1 if the selected article-image workflow includes uploads (D-012).] | Blocked until selected/applicable; Not run |
| FR-14-12 — Webhook signature verification | Intake; Operations; Identity; all write owners; PUB-014 | P2 baseline; accompanies first webhook. Required with first callback; general integration scope P2 | M06, M13 | M06-09, M13-02 | QA-R-FR-14-12; QA-T-M06-09; QA-T-M13-02 | I,API,E,SEC,M | Q0 | Provider signature/authentication and replay policy verified; invalid events rejected; raw-body handling where required tested; idempotency and secret rotation supported from first webhook release. [Source status: Required from first webhook introduction; baseline P2, earlier if an approved P1 integration needs it.] | Blocked until selected/applicable; Not run |
| FR-14-13 — API key management | Shared infrastructure; Operations; Identity; all write owners; Manage scoped credentials and integration keys securely. | P2 integration management; P1 secret protection. P1 secret protection; advanced key administration P2 | M01, M13 | M01-02, M13-02 | QA-R-FR-14-13; QA-T-M01-02; QA-T-M13-02 | U,I,API,E,M | Q0 | Keys stay server-side in approved secret storage; least privilege and rotation/revocation documented; usage auditable; never exposed in public responses or logs. [Source status: Advanced integration-key management proposed P2; secure server-side credential handling is already required P1.] | Not run; source gates retained |
| FR-14-14 — Advanced security audit dashboard | Future owner from S5 §16 / S6 §21; Aggregate advanced security posture and audit signals. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-14-14; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Metrics and alert sources are defined; access tightly restricted; sensitive logs protected; investigation history retained; dashboard does not replace launch security controls. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |
| FR-14-15 — Multi-tenant data isolation | Future owner from S5 §16 / S6 §21; Enforce data isolation between organizations if multi-tenancy is approved. | P3. Deferred; no P1 implementation | M00, M13 | M00-01, M13-01 | QA-R-FR-14-15; QA-T-M00-01; QA-T-M13-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Isolation covers queries, mutations, files, cache, search, jobs, exports and integrations; negative tests pass; platform support access is controlled/audited; no tenancy assumed at P1. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | Deferred behavior; P1 exclusion Not run |



### BR coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| BR-001 — Truthful business identity and messaging | Identity; Intake; CRM; Content; Operations; Catalog; Pages in S7 task records/§§5–6 and this file §15 | P1 and ongoing. P1 baseline/ongoing within source qualification | M00, M09, M13 | M00-03, M09-01, M09-04, M09-09, M13-05 | QA-R-BR-001; QA-T-M00-03; QA-T-M09-01; QA-T-M09-04; QA-T-M09-09; QA-T-M13-05 | U,E,DOC,A | Q1 | Name/descriptor/tagline are consistent; public facts are owner-approved; unsupported credentials and results are absent; proposed mission/story wording is reviewed before publication. [Source status: Confirmed truthfulness principle, proposed consolidated wording; S1 §§1/9/10, S3, S7.] | Not run; source gates retained |
| BR-002 — Catalog and commercial consistency | Identity; Intake; CRM; Content; Operations; Catalog; Pages in S7 task records/§§5–6 and this file §15 | P1 and ongoing. P1 baseline/ongoing within source qualification | M00, M05, M09, M13 | M00-03, M05-01, M05-02, M05-04, M09-02, M09-03, M09-04, M09-05, M09-10, M13-05 | QA-R-BR-002; QA-T-M00-03; QA-T-M05-01; QA-T-M05-02; QA-T-M05-04; QA-T-M09-02; QA-T-M09-03; QA-T-M09-04; QA-T-M09-05; QA-T-M09-10; QA-T-M13-05 | U,E,DOC,A | Q1 | 57 unique service identities and five solutions are maintained; source prices remain until approved changes; scope/billing units are defined before publishing offers; browser-submitted prices never override server values. [Source status: Confirmed concept; S1 §§4–5/12; detailed package scope unresolved.] | Not run; source gates retained |
| BR-003 — Operational contact readiness | Intake; Notifications; CRM; Operations; Content; Catalog; ADM-002, ADM-003, PUB-012, PUB-014, PUB-015 | P1 launch gate. P1 baseline/ongoing within source qualification | M06, M11, M13, M14 | M06-04, M06-06, M11-03, M13-05, M14-02 | QA-R-BR-003; QA-T-M06-04; QA-T-M06-06; QA-T-M11-03; QA-T-M13-05; QA-T-M14-02 | U,E,DOC,A | Q1 | hello@aradun.com is configured and tested for sending/receiving before live use; staff notification destination is selected; published phone/social links are checked; additional uncreated addresses are not advertised. [Source status: Email address explicitly confirmed; setup pending; S7, S1 §13.] | Not run; source gates retained |
| BR-004 — Evidence and placeholder governance | Content; Catalog; Intake; Shared presentation; Operations; Pages in S7 task records/§§5–6 and this file §15 | P1 and every release. P1 baseline/ongoing within source qualification | M08, M09, M12, M13 | M08-03, M08-05, M09-01, M09-07, M09-10, M12-01, M13-05 | QA-R-BR-004; QA-T-M08-03; QA-T-M08-05; QA-T-M09-01; QA-T-M09-07; QA-T-M09-10; QA-T-M12-01; QA-T-M13-05 | U,E,DOC,A | Q1 | Client/internal/concept labels are accurate; testimonial permissions and measurable claims are reviewed; sample content is centralized and unmistakably labeled in previews; launch check replaces/removes unapproved placeholders; genuine labeled demos may remain public. [Source status: Confirmed principle; S1, S5, S7 project instructions.] | Not run; source gates retained |
| BR-005 — Delivery capability and service availability | Identity; Intake; CRM; Content; Operations; Catalog; Pages in S7 task records/§§5–6 and this file §15 | P1 and ongoing. P1 baseline/ongoing within source qualification | M00, M05, M09, M13 | M00-03, M05-01, M09-02, M09-03, M09-04, M09-05, M09-10, M13-05 | QA-R-BR-005; QA-T-M00-03; QA-T-M05-01; QA-T-M09-02; QA-T-M09-03; QA-T-M09-04; QA-T-M09-05; QA-T-M09-10; QA-T-M13-05 | U,E,DOC,A | Q1 | Each launch offer has approved availability and an accountable delivery approach; cybersecurity authorization is required; unavailable capabilities are not presented as immediate services; broader catalog identity remains intact. [Source status: Confirmed principle; service-by-service readiness unresolved; S1 §§4/13.] | Not run; source gates retained |
| BR-006 — Commercial and delivery controls | Identity; Intake; CRM; Content; Operations; Catalog; PUB-017, PUB-018, TRU-01, TRU-02, TRU-03 | P1 manual operations; P2 system support. P1 baseline/ongoing within source qualification | M00, M09, M11, M13 | M00-03, M09-09, M11-03, M13-05 | QA-R-BR-006; QA-T-M00-03; QA-T-M09-09; QA-T-M11-03; QA-T-M13-05 | DOC,M | Q1 | Proposals/agreements state deliverables, exclusions, revisions, timing, fees, third-party costs and support; project changes require recorded agreement; payment and acceptance evidence are distinguished; actual legal/tax review precedes use of jurisdiction-specific terms. [Source status: Confirmed operational direction; policy details unresolved; S1 §11, S4.] | Not run; source gates retained |
| BR-007 — Product and internal-platform separation | Operations; Treat owned commercial products as separately validated offerings from ARADUN's internal CRM/CMS. | P1 planning boundary; P2/P3 only after product approval. P1 baseline/ongoing within source qualification | M00 | M00-01 | QA-R-BR-007; QA-T-M00-01 | DOC,M | Q1 | Each product has stated owner, audience, readiness, scope, phase and business model before development; AMS remains a separate domain; no source example is portrayed as an existing product without verification. [Source status: Owner-stated dual business intent; proposed boundary; S1 §7, S6, S7.] | Not run; source gates retained |
| BR-008 — Planning and implementation governance | Operations; Identity; Intake; CRM; Content; Catalog; All modules; Pages in S7 task records/§§5–6 and this file §15 | All phases. P1 baseline/ongoing within source qualification | M00, M09, M13, M14 | M00-01, M00-03, M09-10, M13-01, M13-05, M14-01 | QA-R-BR-008; QA-T-M00-01; QA-T-M00-03; QA-T-M09-10; QA-T-M13-01; QA-T-M13-05; QA-T-M14-01 | DOC,M | Q1 | Each task states scope/dependencies/affected modules/behavior/acceptance/security/accessibility/performance/tests/out-of-scope items; existing conventions are inspected; changes/results/assumptions are reported; significant architecture changes require approval; this draft alone authorizes no implementation. [Source status: Confirmed process; S7 project instructions.] | Not run; source gates retained |



### NFR coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| NFR-001 — Search visibility and indexing | Content; Discovery; Catalog; Intake; Operations; Pages in S7 task records/§§5–6 and this file §15 | P1 and ongoing. P1 baseline/ongoing within source qualification | M08, M09, M10 | M08-04, M09-10, M10-02, M10-04 | QA-R-NFR-001; QA-T-M08-04; QA-T-M09-10; QA-T-M10-02; QA-T-M10-04 | U,E,DOC,A | Q1 | Appropriate SSR/SSG, metadata, canonical URLs, sitemap and robots are configured; truthful Organization/Service/BreadcrumbList/Article structured data used where appropriate; private routes require authorization and are noindexed; unpublished content excluded; redirects preserve approved changes; production indexing and previews tested; thin placeholder pages not published. [Source status: Confirmed concept; S1 §10; S6 clarifications.] | Not run; source gates retained |
| NFR-002 — Accessibility and usable interaction states | Shared presentation; Catalog; Identity; Content; Intake; CRM; Operations; All presentation owners; Pages in S7 task records/§§5–6 and this file §15 | P1 and each introduced feature. P1 baseline/ongoing within source qualification | M04, M05, M06, M08, M11, M12 | M04-01, M04-02, M04-03, M04-04, M05-04, M06-05, M08-02, M11-02, M12-01, M12-02, M12-03, M12-04 | QA-R-NFR-002; QA-T-M04-01; QA-T-M04-02; QA-T-M04-03; QA-T-M04-04; QA-T-M05-04; QA-T-M06-05; QA-T-M08-02; QA-T-M11-02; QA-T-M12-01; QA-T-M12-02; QA-T-M12-03; QA-T-M12-04 | U,E,DOC,A | Q1 | Semantic structure, keyboard navigation, focus, labels, contrast, status announcements and reduced-motion behavior are checked; loading/empty/error/success states exist; responsive controls are usable; automated checks are supplemented with manual critical-flow review; no unsupported accessibility certification claim. [Source status: Confirmed principle; S1 §9, S6; detailed test matrix proposed.] | Not run; source gates retained |
| NFR-003 — Performance and bounded workload | Shared presentation; CRM; Discovery; Catalog; Content; Operations; Intake; All presentation owners; all feature owners; ADM-001, ADM-012, PUB-016 | P1 and ongoing. P1 baseline/ongoing within source qualification | M04, M07, M10, M11, M12, M14 | M04-01, M07-06, M10-01, M11-01, M12-01, M12-02, M12-03, M12-04, M14-04 | QA-R-NFR-003; QA-T-M04-01; QA-T-M07-06; QA-T-M10-01; QA-T-M11-01; QA-T-M12-01; QA-T-M12-02; QA-T-M12-03; QA-T-M12-04; QA-T-M14-04 | U,E,DOC,A | Q1 | Target p75 field Core Web Vitals of LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 as in S1; pre-launch lab checks are a proxy, not claimed field results; images/fonts/JS/cache strategy reviewed; queries/pagination/uploads bounded; API/search load and response targets approved before capacity signoff. [Source status: Existing CWV targets confirmed; scale budgets unresolved; S1 §10, S6.] | Not run; source gates retained |
| NFR-004 — Data lifecycle, backups and recovery | Identity; Intake; CRM; Content; Operations; Shared infrastructure; all write owners; Notifications; all feature owners; Define retention, correction, deletion, restoration and operational ownership. | P1 and each new data domain. P1 baseline/ongoing within source qualification | M00, M02, M07, M08, M13, M14 | M00-03, M02-05, M07-07, M08-07, M13-02, M13-03, M14-04 | QA-R-NFR-004; QA-T-M00-03; QA-T-M02-05; QA-T-M07-07; QA-T-M08-07; QA-T-M13-02; QA-T-M13-03; QA-T-M14-04 | U,I,API,E,M | Q0 | Retention/deletion rules and backup coverage approved; restore test completed; recovery point/time targets explicitly chosen; audit needs and legitimate retention constraints addressed; stale copies and third-party data considered; no invented uptime/recovery guarantee. [Source status: Confirmed backup/privacy direction; detailed policy proposed; S1 §§6/12/13.] | Not run; source gates retained |
| NFR-005 — Authorization and data isolation | Identity; Intake; CRM; Content; Operations; Shared presentation; Discovery; ADM-001, ADM-004, ADM-005, ADM-012, ADM-023, ADM-024, ADM-025, ADM-026, ADM-027, STA-001, STA-002, STA-003, STA-004 | P1 staff boundaries; P2 client boundaries; P3 tenant boundaries if approved. P1 baseline/ongoing within source qualification | M00, M03, M04, M07, M08, M11 | M00-03, M03-02, M03-04, M03-05, M04-04, M07-01, M07-06, M07-07, M07-08, M08-07, M08-08, M11-01, M11-02, M11-04, M11-05, M11-06, M07-00 | QA-R-NFR-005; QA-T-M00-03; QA-T-M03-02; QA-T-M03-04; QA-T-M03-05; QA-T-M04-04; QA-T-M07-01; QA-T-M07-06; QA-T-M07-07; QA-T-M07-08; QA-T-M08-07; QA-T-M08-08; QA-T-M11-01; QA-T-M11-02; QA-T-M11-04; QA-T-M11-05; QA-T-M11-06; QA-T-M07-00 | U,I,API,E,M | Q0 | Backend checks cover reads/mutations/search/files/exports/jobs; negative access tests pass; internal notes remain private; offboarding revokes access; future tenant isolation includes caches and integrations; UI hiding alone is insufficient. [Source status: Confirmed principle; exact roles proposed; S1 §12, S2.] | Not run; source gates retained |
| NFR-006 — Reliable events, retries and duplicate prevention | Shared infrastructure; Notifications; Operations; Intake; CRM; ADM-010, ADM-011, PUB-014 | P1 notifications; every later integration when introduced. P1 baseline/ongoing within source qualification | M02, M06, M07, M13 | M02-01, M06-02, M06-03, M06-07, M06-09, M07-05, M13-03 | QA-R-NFR-006; QA-T-M02-01; QA-T-M06-02; QA-T-M06-03; QA-T-M06-07; QA-T-M06-09; QA-T-M07-05; QA-T-M13-03 | U,I,API,E,M | Q0 | Unique IDs/references and idempotency rules are tested; inquiry save/notification scheduling is failure-safe; retry/backoff/dead-letter or equivalent failure handling defined; manual recovery is possible; webhooks and financial actions deduplicated; advanced P3 workflow UI is not a prerequisite for basic reliability. [Source status: Confirmed principle; implementation choice later; S1 §§6/12, S2 automation clarification.] | Not run; source gates retained |
| NFR-007 — Privacy-conscious analytics and consent | Discovery; Intake; Operations; Separate service inquiry handling from optional marketing and behavioral tracking. | P1 and ongoing. P1 baseline/ongoing within source qualification | M10 | M10-03 | QA-R-NFR-007; QA-T-M10-03 | U,I,API,E,M | Q0 | No names/emails/phones/message bodies sent to analytics; URLs/UTMs are handled to avoid PII leakage; required consent behavior is determined for actual jurisdictions/tools; public notices match reality; sensitive forms/private pages are excluded from any later session recording by default. [Source status: Confirmed PII/consent principle; legal implementation unresolved; S1 §§6/10, S6.] | Not run; source gates retained |
| NFR-008 — Production security and observability | Identity; Notifications; Operations; Shared infrastructure; Shared presentation; all write owners; all feature owners; SYS-01, SYS-02 | P1 and ongoing. P1 baseline/ongoing within source qualification | M00, M01, M02, M03, M04, M13, M14 | M00-02, M01-02, M01-04, M02-03, M02-04, M03-05, M04-05, M13-02, M14-04 | QA-R-NFR-008; QA-T-M00-02; QA-T-M01-02; QA-T-M01-04; QA-T-M02-03; QA-T-M02-04; QA-T-M03-05; QA-T-M04-05; QA-T-M13-02; QA-T-M14-04 | U,I,API,E,M | Q0 | HTTPS and appropriate header policy checked; secrets separated by environment; logs redact sensitive values; errors have correlation; uptime/error alerts route to a responsible person; dependency/security update process and incident response steps documented; WAF/provider tooling only added when justified. [Source status: Confirmed principles; tools/targets unselected; S1 §12/13, S6.] | Not run; source gates retained |
| NFR-009 — Verification, release and rollback | Shared infrastructure; Operations; Intake; Notifications; CRM; Identity; Content; Discovery; Catalog; All presentation owners; All modules; all feature owners; Pages in S7 task records/§§5–6 and this file §15 | P1 and all releases. P1 baseline/ongoing within source qualification | M01, M02, M06, M07, M08, M09, M12, M13, M14 | M01-03, M01-04, M02-05, M06-07, M07-08, M08-08, M09-10, M12-04, M13-01, M13-04, M13-05, M14-01, M14-02, M14-03, M14-04 | QA-R-NFR-009; QA-T-M01-03; QA-T-M01-04; QA-T-M02-05; QA-T-M06-07; QA-T-M07-08; QA-T-M08-08; QA-T-M09-10; QA-T-M12-04; QA-T-M13-01; QA-T-M13-04; QA-T-M13-05; QA-T-M14-01; QA-T-M14-02; QA-T-M14-03; QA-T-M14-04 | U,I,API,E,M | Q0 | Lint/type/build pass; critical validation/auth/inquiry/idempotency paths have meaningful tests; key user flows and responsive/accessibility checks pass; future billing/isolation tests accompany those modules; staging and production are separate; rollback/data-change plan exists; release result is documented. [Source status: Confirmed principle; exact tools/test cases later; S1 §12/13, S6.] | Not run; source gates retained |
| NFR-010 — Maintainable modular monolith | Operations; Shared infrastructure; Keep one understandable application with explicit domain boundaries and limited dependencies. | P1 and ongoing. P1 baseline/ongoing within source qualification | M00, M01, M02 | M00-01, M01-01, M02-01 | QA-R-NFR-010; QA-T-M00-01; QA-T-M01-01; QA-T-M02-01 | U,E,DOC,A | Q1 | UI/business/persistence/integration responsibilities separated; runtime validation and clear types/names used; errors handled consistently; unnecessary abstraction/services avoided; architectural decisions and setup documented; the separate Express backend is approved; no microservices or speculative layers. [Source status: Confirmed constraint; S1 §12, S3, S7.] | Not run; source gates retained |
| NFR-011 — Search and publication visibility | Content; Discovery; Catalog; ADM-013, ADM-014, ADM-015, ADM-016, ADM-019, ADM-020, ADM-021, ADM-022, PUB-008, PUB-009, PUB-010, PUB-011, PUB-016 | P1 and broader CMS later. P1 baseline/ongoing within source qualification | M08, M09, M10 | M08-01, M08-02, M08-04, M08-05, M08-06, M08-08, M09-08, M10-01, M10-02 | QA-R-NFR-011; QA-T-M08-01; QA-T-M08-02; QA-T-M08-04; QA-T-M08-05; QA-T-M08-06; QA-T-M08-08; QA-T-M09-08; QA-T-M10-01; QA-T-M10-02 | U,I,API,E,M | Q0 | Publication changes update discovery surfaces according to defined invalidation behavior; private content never enters public indexes; invalid/deleted links receive defined responses; title/slug changes preserve approved redirect policy. [Source status: Proposed explicit acceptance clarification of confirmed search/CMS; S1 amendment, S2, R.] | Not run; source gates retained |
| NFR-012 — Monetary and temporal integrity | Shared infrastructure; Catalog; CRM; Operations; ADM-006, ADM-007, ADM-008, ADM-009, ADM-027 | P1 money/date fields and every later module. P1 baseline/ongoing within source qualification | M02, M05, M07, M11 | M02-02, M05-02, M07-03, M07-04, M11-03, M11-06 | QA-R-NFR-012; QA-T-M02-02; QA-T-M05-02; QA-T-M07-03; QA-T-M07-04; QA-T-M11-03; QA-T-M11-06 | U,I,API,E,M | Q0 | Money uses integer minor units or appropriate precise decimals; currency/period retained; quoted snapshots immutable; dates stored consistently and displayed clearly; daylight-saving/timezone behavior verified for booking; no floating-point rounding surprises in finance. [Source status: Confirmed architectural direction plus proposed clarification; S1 §12, S6.] | Not run; source gates retained |
| NFR-013 — AI evaluation and bounded action | Operations; Introduce AI only with defined tasks, approved data access, evaluations and human oversight. | P2 limited assistants; P3 advanced features, all proposed. P2/P3 AI; P1 exclusion/governance only | M00 | M00-01 | QA-R-NFR-013; QA-T-M00-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Data/retention/provider policy approved; source permissions enforced; untrusted content cannot override tool permissions; outputs evaluated on representative cases; unsupported claims/uncertainty handled; cost/rate limits and fallback exist; external commitments and high-impact changes require approved human control. [Source status: Proposed supporting safeguards for retained AI features; S1 future architecture, S2, R.] | Deferred behavior; P1 exclusion Not run |
| NFR-014 — Accessible error recovery and confirmation | Shared infrastructure; Shared presentation; Operations; Intake; Notifications; Catalog; CRM; Content; Identity; PUB-012, PUB-013, PUB-014, SYS-01, SYS-02 | P1 and ongoing. P1 baseline/ongoing within source qualification | M02, M04, M06, M11 | M02-02, M04-02, M04-05, M06-03, M06-04, M06-05, M06-07, M11-02 | QA-R-NFR-014; QA-T-M02-02; QA-T-M04-02; QA-T-M04-05; QA-T-M06-03; QA-T-M06-04; QA-T-M06-05; QA-T-M06-07; QA-T-M11-02 | U,I,API,E,M | Q0 | Field errors are associated with controls; safe entered data retained appropriately; submission state is clear; success only after save; retry safe; missing pages show useful navigation; no stack traces/credentials/private details in responses. [Source status: Confirmed engineering principle with S6 clarification; S7, R.] | Not run; source gates retained |
| NFR-015 — Integration ownership and reconciliation | Intake; Operations; PUB-014 | P2 integrations; P1 if synchronized booking is approved. P1 baseline/ongoing within source qualification | M06 | M06-08, M06-09 | QA-R-NFR-015; QA-T-M06-08; QA-T-M06-09 | I,API,E,SEC,M | Q0 | Mapping/direction/identity/conflict/deletion/consent rules documented; test sync handles duplicates, retries and provider outages; disconnect/revoke works; reconciliation failures are visible; no external system bypasses ARADUN access controls. [Source status: Proposed explicit integration boundary; S1 §7/12, S3, R.] P1 execution only if synchronized booking selected; see §12. | Blocked until selected/applicable; Not run |



### EXT coverage


| Requirement ID / title | Page or module | Source phase / scoped treatment | Milestone | Task IDs | Test case ID / execution mapping | Types | QA priority | Source acceptance criteria / qualification | Verification status |
|---|---|---|---|---|---|---|---|---|---|
| EXT-001 — Industries content capability | Operations; Present industry-specific problems and relevant ARADUN capabilities without changing the service catalog. | Proposed P1 directory/selected substantive content or P2 expansion; owner decision required. P2 public inventory baseline; no P1 promotion in this roadmap | M00 | M00-01 | QA-R-EXT-001; QA-T-M00-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Approved industry list retained; no unsupported specialization/client claims; pages provide distinct useful content; service links are valid; thin placeholders not published; navigation/routes decided in Step 2. [Source status: Owner-proposed addition; phase/publication scope unresolved; S6/S7.] | Deferred behavior; P1 exclusion Not run |
| EXT-002 — Products catalog and readiness | Operations; Present ARADUN-owned products with accurate lifecycle status and approved detail content. | Proposed P1 structure only if useful truthful content exists; actual products independently phased. P2 public inventory baseline; no P1 promotion in this roadmap | M00 | M00-01 | QA-R-EXT-002; QA-T-M00-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Product identity/ownership/status and available actions approved; screenshots reflect actual state or clearly labeled concepts; pricing/integrations/security claims verified; no fake products to fill cards; no implied portal/subscription implementation. [Source status: Owner intent; proposed website capability; S6/S7.] | Deferred behavior; P1 exclusion Not run |
| EXT-003 — Product demo and information inquiries | Operations; Capture inquiries tied to an approved product through the existing lead system. | Follows approved product publication; P1/P2 decision required. P2 public inventory baseline; no P1 promotion in this roadmap | M00 | M00-01 | QA-R-EXT-003; QA-T-M00-01 | DOC,U (exclusion only) | Q1 | P1: verify exclusion/phase boundary only. Future source criterion retained: Product and inquiry type retained; form/acknowledgement accurately reflects demo availability; no duplicate CRM module; PII and notification controls reused; successful submission distinguished from completed demo/booking. [Source status: Proposed addition; S6, R.] | Deferred behavior; P1 exclusion Not run |
| EXT-004 — Related content and featured selections | Catalog; Content; Pages in S7 task records/§§5–6 and this file §15 | Proposed P1 simple maintained references; broader CMS editing follows its approved phase. Preserve source conditional scope | M09 | M09-06, M09-08 | QA-R-EXT-004; QA-T-M09-06; QA-T-M09-08 | U,E,DOC,A | Q1 | Links only expose approved published content; unpublished targets disappear gracefully; featured selections are intentional; no duplicate source records; layout decisions deferred. [Source status: Existing related-content direction strengthened by S6; proposed details.] | Not run; source gates retained |
| EXT-005 — Supplemental analytics and webmaster tools | Operations; Discovery; Consider Bing Webmaster Tools and additional CTA/product engagement events beyond core GA4/Search Console. | Proposed optional P1 setup/P2 expansion; not a mandatory new platform. Preserve source conditional scope | M10 | M10-04 | QA-R-EXT-005; QA-T-M10-04 | U,E,DOC,A | Q1 | Each event has an explicit meaning and data policy; clicks/submissions/bookings are distinct; no PII; dashboards do not claim bookings from link clicks; session recording remains separately approved and excluded from sensitive forms/private pages by default. [Source status: Proposed; S6, R.] | Not run; source gates retained |
| EXT-006 — Public trust and product policy extensions | Content; Operations; PUB-017, PUB-018, TRU-01, TRU-02, TRU-03 | P1 actual privacy/cookie needs; P2/P3 product-specific policies as introduced. Preserve source conditional scope | M09 | M09-09 | QA-R-EXT-006; QA-T-M09-09 | U,E,DOC,A | Q1 | Policies reflect actual entity/providers/data practices; applicability reviewed; website terms and client agreements distinguished; no copied false compliance claims; final routes belong to Step 2. [Source status: Confirmed accurate-policy principle; extra documents proposed; S1 §11, S6.] | Not run; source gates retained |


## 18. Exact catalog and package QA oracle

Prices below are copied from S1 §§4–5, not recalculated or newly approved. S1 explanatory qualifications apply: indicative USD, two-price Starter/Professional, three-position recurring labels/units and per-offer scope awaiting confirmation where stated. QA-CAT-01–07 validates every row and related route in §15. Design’s SVC-009 cross-list is intentionally the same service; do not create another record or billable line. Source business ID SOL-001 differs from page ID SOL-01.


The following source-preserved catalog has **58 category entries representing 57 unique services**. Mobile App UI/UX Design is one service cross-listed in Mobile and Design. Stable `SVC-###` identifiers below are proposed documentation IDs, not approved URLs or database schemas. They distinguish catalog entries from functional requirement IDs.

Prices are existing indicative public display values from S1. Proposed increases are isolated in the decision register and are not applied here. Two-price entries represent **Starter / Professional**, as stated in S1. Three-price recurring entries preserve the source order; exact tier names and limits still need confirmation. Unless explicitly monthly, amounts must be assigned a confirmed billing unit during package review. Package scope, revision count, delivery estimate, and individual availability remain unresolved for every service unless separately approved.


### Category A — Web & Software Development (5)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-001 | Business Website Development | $699+ / $1,499+ |
| SVC-002 | E-commerce Website Development | $999+ / $2,499+ |
| SVC-003 | Custom Web Application | Custom quote |
| SVC-004 | Website Redesign | $399+ / $999+ |
| SVC-005 | Website Maintenance | $49 / $99 / $199+ per month |

### Category B — Mobile App Development (5)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-006 | Business Mobile App | $1,999+ / $4,999+ |
| SVC-007 | E-commerce Mobile App | $2,499+ / $5,999+ |
| SVC-008 | Custom Mobile App | Custom quote |
| SVC-009 | Mobile App UI/UX Design | $299+ / $899+ (cross-listed under Design) |
| SVC-010 | Mobile App Maintenance | $99 / $249 / $499+ per month |

### Category C — AI Automation & CRM (7)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-011 | Workflow Automation | $299+ / $899+ |
| SVC-012 | CRM Setup & Customization | $399+ / $1,199+ |
| SVC-013 | Lead Follow-up Automation | $349+ / $999+ |
| SVC-014 | AI Chatbot | $499+ / $1,499+ |
| SVC-015 | AI Integrations | $799+ / $2,499+ |
| SVC-016 | AI Voice Agent | $799+ / $2,499+ |
| SVC-017 | Automation Maintenance | $99 / $249 / $599+ per month |

### Category D — Digital Marketing (9)

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

### Category E — Cloud & DevOps (8)

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

### Category F — Cybersecurity (8)

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

### Category G — UI/UX, Graphic Design & Branding (8 category entries)

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

### Category H — Video Editing & Production (8)

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

### Five solutions and all 15 package tier positions

| ID | Solution | Starter | Professional | Enterprise |
|---|---|---|---|---|
| SOL-001 | Digital Presence | From $899/project | From $2,499/project | Custom |
| SOL-002 | Business Automation | From $699/project | From $2,499/project | Custom |
| SOL-003 | Business Growth | From $399/month | From $999/month | Custom |
| SOL-004 | Cloud & Technology | From $499/project | From $1,999/project | Custom |
| SOL-005 | Complete Digital Business | Custom | Custom | Custom |

Names/prices are confirmed concepts from S1 §5. Exact included services, quantities, exclusions, revisions, timelines, setup fees, recurring costs, and upgrade/maintenance rules are not fully specified in the supplied sources. Do not infer a bundle's contractual scope from its name. Each solution must have one maintained package definition and enter the unified quote flow. Existing canonical solution URLs in S1 remain reference constraints; final page inventory belongs to Step 2.


### 18.1 Category membership/count cross-check


| Category page | Exact source category | Service memberships | Count |
|---|---|---|---|
| CAT-01 | Web & Software Development (5) | SVC-001, SVC-002, SVC-003, SVC-004, SVC-005 | 5 |
| CAT-02 | Mobile App Development (5) | SVC-006, SVC-007, SVC-008, SVC-009, SVC-010 | 5 |
| CAT-03 | AI Automation & CRM (7) | SVC-011, SVC-012, SVC-013, SVC-014, SVC-015, SVC-016, SVC-017 | 7 |
| CAT-04 | Digital Marketing (9) | SVC-018, SVC-019, SVC-020, SVC-021, SVC-022, SVC-023, SVC-024, SVC-025, SVC-026 | 9 |
| CAT-05 | Cloud & DevOps (8) | SVC-027, SVC-028, SVC-029, SVC-030, SVC-031, SVC-032, SVC-033, SVC-034 | 8 |
| CAT-06 | Cybersecurity (8) | SVC-035, SVC-036, SVC-037, SVC-038, SVC-039, SVC-040, SVC-041, SVC-042 | 8 |
| CAT-07 | UI/UX, Graphic Design & Branding (8 category entries) | SVC-043, SVC-009, SVC-044, SVC-045, SVC-046, SVC-047, SVC-048, SVC-049 | 8 |
| CAT-08 | Video Editing & Production (8) | SVC-050, SVC-051, SVC-052, SVC-053, SVC-054, SVC-055, SVC-056, SVC-057 | 8 |


All service and solution cases start Not run. Count parity is a document/catalog invariant, not proof of approved availability, delivery capacity or publishable package scope.


## 19. Source fingerprints, final consistency audit and version record

**1.1.0 · 25 October 2026 — Controlled amendment:** Applied only affected portions of the four owner-requested changes and their direct cross-references; all unrelated content retained.


### 19.1 Reviewed source fingerprints

Fingerprints identify the exact supplied files. Attachment filename aliases do not change their declared document identities. All nine attachment bytes remained unchanged during generation.


| Source | Declared filename | SHA-256 |
|---|---|---|
| S1 | 01-master-requirements.md | `0cf55ee4791aa6256f5035de3cc727a26dc048c581d4a55a26cc320b574cd9a6` |
| S2 | 02-pages-sitemap.md | `264d8bb070e003baa558742e8709f9de3506d9145a94a696b7d5593a115e9b16` |
| S3 | 03-page-sections.md | `a119700e79245c2a01bf10f8672a630a1969cf6c6b3c9b87bf47175c212a6a84` |
| S4 | 04-design-system-wireframes.md | `198d7025e5d707841350b07d3ff7954e285d4295e0fb4706d3312e2f01bea56d` |
| S5 | 05-database-architecture.md | `6f2a4a98c1c95182809a8597d16a4ce2495b952f952315ad435b528ec6f3dc9f` |
| S6 | 06-project-structure.md | `1122939ab22d03a3748a4ff9d590b00038b31903d329f1ed331159a280470b9b` |
| S7 | 07-development-roadmap.md | `df31be46738a1dae2119df89196b4c3031a944d2d0557b1af86b0650e6edeeea` |
| S8 | 08-implementation-guide.md | `b1c55b01f47445b280524d7bcf1aee2aac6ddf61d491f29d542da2647fb6f13b` |
| S9 | 09-content-assets.md | `749db285dd9821d26c8af4682a9101576c7a86c0232396a8dc44bf184e6c8886` |


### 19.2 Final document consistency audit

The following checks concern this Markdown specification only. They do not assert implementation readiness, actual test execution, business approval or release qualification.

| Check | Document result | Evidence / retained limit |
|---|---|---|
| Source availability | PASS — 9 supplied sources | Eight core files plus approved S9; no required file missing; fingerprints above |
| P1 page coverage | PASS — 124/124 IDs and exact routes | 91 public, 4 staff auth, 27 dashboard, 2 framework states; twelve C entries retained; §15 |
| Section/CTA coverage | PASS — all 124 page bindings | 35 unique exact ordered region recipes; per-page primary/secondary actions and specific notes; S3/S7 parity |
| Requirement coverage | PASS — 236/236 IDs | 207 FR, 8 BR, 15 NFR, 6 EXT; source acceptance and phase-qualified mappings in §17 |
| Roadmap coverage | PASS — 15 milestones / 87 tasks | Exact M00–M14 and source task IDs, source AC/evidence, command bundle and scenario mapping; §14 |
| Catalog coverage | PASS — eight categories / 57 unique services / 58 memberships | Exact source commercial rows and supplied URLs; one cross-listed SVC-009; §18 |
| Solutions/packages | PASS — five solutions / 15 solution tier positions | Exact names, Starter/Professional/Enterprise values; custom and source price qualifications retained |
| Data/schema coverage | PASS — 12 baseline + 4 conditional model contracts | All S5 field/index/shared contracts retained; owned collections and real-DB procedures; §16 |
| Business modules | COVERED — specification | Three intake paths, quote selection, notifications, source capture, CRM/pipeline/customers/tasks, CMS/FAQ/work/SEO/search and external finance |
| Security/privacy/auth | COVERED — specification | Server/record permissions, injection/XSS/CSRF/limits/secrets/audit/consent/erasure/provider/backup boundaries |
| Themes/motion/a11y/performance | COVERED — specification | All three editorial light themes, CSS/Motion/optional GSAP, reduced motion, manual+automated accessibility; exact targets/provisional budgets distinguished |
| SEO/content/assets/international | COVERED — specification | Metadata/discovery/redirects, four public search types, evidence/rights, English/USD and no unapproved locales |
| CI/regression/release/Codex | COVERED — specification | Command safety, stable cases, defect/evidence workflow, milestone UAT, recovery/rollback/smoke/go-no-go and reusable prompts |
| Open decisions | PRESERVED | §12 plus gates in task/page/model registers; no invented provider, permission, legal fact, price, threshold or availability |
| Future boundaries | PRESERVED | Future requirements shown for exclusion review only; no P2/P3 app obligation promoted |
| Execution claims | NONE | Application cases remain Not run/Blocked/Deferred; no fabricated tests, measurements or production approval |
| Task boundary | COMPLETE — document only | No application code or source changes; Step 11 not begun |

### 19.3 Change record and future use

| Version | Date | Change / approval boundary |
|---|---|---|
| 1.0.0 | 24 October 2026 | Final Step 10 testing/QA consolidation authorized by owner; source-faithful page/requirement/task/schema/catalog matrices, actionable test procedures and release/Codex handoff. New R10 procedures remain distinct from approved source facts; execution not performed. |

After implementation starts, keep stable IDs and source revisions. Record actual test evidence in the execution register rather than changing this specification’s initial status into a fabricated historical pass. Approved schema/route/phase changes update the owning source plus affected tests and traceability together. Future features receive their own data, permission, integration, billing/tenant/AI and release tests only when separately authorized. No implementation or Step 11 is initiated by this document.

