# ARADUN — Development Roadmap & Implementation Milestones

**Filename:** `07-development-roadmap.md`  
**Version:** 1.1.0 — final Step 7 consolidation  
**Date:** 25 October 2026  
**Approval status:** Owner-declared Step 7 completed and approved; final consolidation authorized. Source conditions, proposed technical details and unresolved implementation gates remain explicit.  
**Owner/approver:** ARADUN project owner  
**Project:** ARADUN — Technology & Digital Solutions · Build. Automate. Grow.  
**Scope:** Development planning only. This document does not begin Step 8, generate full Codex execution prompts, create application code, install dependencies, provision services or authorize production deployment.

**Controlled update 1.1.0 — 25 October 2026:** Owner-authorized documentation-only amendment limited to the requested architecture, local-development database, solo-maintainer engineering rules and three-theme system where relevant. Unrelated requirements and unresolved gates remain unchanged. Earlier source-register versions/fingerprints and historical approval entries identify the pre-update inputs, not hashes of these revised files; current amended sections govern only these four changes. No implementation or Project Sources replacement is claimed.

## Contents

1. Authority, provenance and source verification
2. Scope, invariants and development principles
3. Milestone overview and dependency order
4. Detailed milestones and task register
5. Public, staff and system-page coverage
6. Per-page section and dashboard interaction contracts
7. Models, schemas, data and module sequence
8. UI system, reusable templates, components and motion
9. Conversion, CRM and publication workflow acceptance
10. Integrations and environment readiness
11. Security, privacy and recovery
12. Continuous testing, accessibility and performance
13. Deployment, launch and post-launch readiness
14. Effort, capacity and critical path
15. Risk register
16. Requirement-to-task traceability
17. Open decisions, conflicts and assumptions
18. Phase 2/3 roadmap and compatibility
19. Completion, approval and later Codex handoff
20. Document audit and version record

Appendices preserve future page inventory, inherited decisions, architecture decisions and exact commercial catalog. Source-local references in copied material refer to the source document, not this roadmap.

## 1. Authority, provenance and source verification

S1 governs business scope, names/prices and phase qualifications; S2 governs page IDs/URLs; S3 governs ordered content/UI regions; S4 governs design, accessibility and motion; S5 governs schemas, data integrity and backend behavior; S6 governs structural ownership and paths. A later explicit owner decision supersedes only what it changes. Requirement IDs below are copied from sources. M00–M14 and their task IDs are roadmap identifiers, not invented business requirements.

| Ref | Source | Version/status | SHA-256 |
| --- | --- | --- | --- |
| S1 | 01-master-requirements.md | 0.2.0; Owner-designated planning reference; scoped amendment approved | 0cf55ee4791aa6256f5035de3cc727a26dc048c581d4a55a26cc320b574cd9a6 |
| S2 | 02-pages-sitemap.md | 1.1.0; Step 2 completed; private/conditional provenance retained | 264d8bb070e003baa558742e8709f9de3506d9145a94a696b7d5593a115e9b16 |
| S3 | 03-page-sections.md | 1.0.0; Owner-declared Step 3 approved | a119700e79245c2a01bf10f8672a630a1969cf6c6b3c9b87bf47175c212a6a84 |
| S4 | 04-design-system-wireframes.md | 1.0.0; Owner-declared Step 4 approved; R4 details/gates retained | 198d7025e5d707841350b07d3ff7954e285d4295e0fb4706d3312e2f01bea56d |
| S5 | 05-database-architecture.md | 1.0.0; Owner-declared Step 5 approved; R5 details/gates retained | 6f2a4a98c1c95182809a8597d16a4ce2495b952f952315ad435b528ec6f3dc9f |
| S6 | 06-project-structure.md | 1.0.0; Owner-declared Step 6 approved; R6 details/gates retained | 1122939ab22d03a3748a4ff9d590b00038b31903d329f1ed331159a280470b9b |

All six supplied files were accessible. Their fingerprints match the earlier Chat 7 source review. The supplied Step 6 already cites the exact supplied Step 5 and its schemas; no assumption that Step 5 was missing is carried into this roadmap. Upload prefixes are not changed project filenames. No source file is modified by this deliverable.

### 1.1 Chat 7 decision record

| Reference | Evidence | Treatment |
| --- | --- | --- |
| C7-BRIEF | Step 7 instructions in Pasted text(5).txt | Planning only; complete Phase 1 coverage; staged review; no Step 8 prompts or implementation. |
| C7-PROPOSAL | Visible source review and M00–M14 proposal | Preserve milestone names/order, early complete intake flow, feature-timed models, limited CMS, continuous QA and explicit production gate. |
| C7-FINAL | Owner states Step 7 completed/approved and requests complete downloadable consolidation | Authorizes this complete final file without requiring the earlier intermediate checkpoints to be repeated. |
| R7 | Detailed task breakdown, estimates, verification and coverage in this file | Supplied under final consolidation authorization. Separate historical reviews of every task/estimate are not claimed. Existing provider/commercial/access gates are not thereby resolved. |

A/B/R/C retain source provenance: carried public approval, master-confirmed capability with allocated private route, future proposal, conditional decision. Planning all entries is not an instruction to activate conditional functionality. Historical “Step N has not begun” text in previous files describes earlier stage boundaries and does not undo later owner completion instructions.

## 2. Scope, invariants and development principles

### 2.1 Preserved scope

| Allocation | Pages/templates | Shared states | Planning entries |
| --- | --- | --- | --- |
| P1 public | 91 | 0 | 91 |
| P1 staff authentication | 4 | 0 | 4 |
| P1 dashboard | 27 | 0 | 27 |
| P1 shared system states | 0 | 2 | 2 |
| Phase 1 total | 122 | 2 | 124 |
| Phase 2 additions | 62 | 0 | 62 |
| Phase 3 additions | 28 | 0 | 28 |
| Product Terms PRD-02; P2/P3 timing unresolved | 1 | 0 | 1 |
| All unique inventory entries | 213 | 2 | 215 |

The 91 public entries comprise 85 fixed core/catalog routes, three repeatable content-detail templates and three conditional policy pages. The 122 page/template count is not 122 unique layouts. All 35 source recipes are retained. Actual article/case/help record counts are not fixed by template counts.

- Eight categories, 57 unique services, 58 memberships; SVC-009 Mobile App UI/UX Design is cross-listed once, not duplicated. All 57 service detail pages are in Phase 1. The older 38-page publication subset is not a build-scope limit.
- Five source-named solutions: Digital Presence, Business Automation, Business Growth, Cloud & Technology, Complete Digital Business. English/USD initial presentation; original indicative prices and billing qualifications preserved. D-002 proposed price increases are not applied.
- Quote steps: Service → Project → Contact → Review. Multi-service/solution/tier context is editable; custom/unsure path remains. There is no binding automatic sum or checkout.
- Contact, quote and consultation create typed Inquiry records. Manual consultation request is the P1 baseline. A request is not a confirmed appointment. Approved free 15-minute screening copy does not select a booking provider.
- Pipeline: New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost. Spam/duplicate/no-response are inquiry classifications, not commercial stages. Customer conversion is explicit and reviewed; Won is not Paid.
- Customer profile belongs to Contact; no duplicate leads/customers/quoteRequests collection. Twelve baseline collections; four conditional models only when selected. Catalog/core/portfolio remain source-controlled; limited editable content is database-managed.
- Articles, testimonials, SEO editing, public FAQ/help and search are P1. Broader page/catalog editing and media library remain future. Article working draft/current published snapshot is the retained R5 recommendation with A5-04/U-03 gate.
- Manual follow-up tasks and dashboard due/overdue indicators are P1; campaign sequences and external reminder automation are not.
- Three light themes: Editorial Terracotta default, Muted Slate Blue alternate and Vivid Blue alternate; Inter; approved calm editorial composition. S4 specifically supersedes the old navy/teal palette. Theme never changes catalog data, permissions, entered form values or selection.
- Real evidence only in production. Labeled fixtures can support previews/tests; genuine concept/demo projects remain clearly classified. No mandatory fabricated testimonial, case-study or article count.
- Phase 1 includes external proposal/invoice templates and a verified manual finance procedure. Optional in-app tracker does not imply an invoice engine, payment gateway or online signing.

The twelve conditional P1 page entries are TRU-01–03, STA-002–004, ADM-021–025 and ADM-027. Required capabilities such as safe recovery, public FAQ, access revocation and audit logging remain required even when a dedicated optional screen uses a provider/source/manual alternative.

### 2.2 Engineering principles

Next.js App Router + TypeScript frontend in `aradun/frontend/`; separate Express.js + TypeScript backend in `aradun/backend/`; MongoDB + Mongoose accessed only by Express. One repository, simple feature-based backend modules, no microservices. Local development uses locally installed MongoDB; Atlas is optional later through environment configuration and production database hosting remains unselected. Tailwind/selective shadcn and Zod remain. Keep route adapters thin, server operations authoritative, repositories scoped and DTOs explicit. No microservices, global state framework, generic event bus, speculative tenant fields or future-module scaffolding.

Implement vertical feature slices: contract/model → authorized service → UI → meaningful failure tests → evidence/review. Start with real transaction/access/publication risks. Add feature models as used instead of implementing all schemas before the first usable flow. Create a small import-boundary check; do not build an abstraction framework.

Every task inherits secure input/authorization, relevant accessibility/states, bounded workloads, privacy-conscious logging and meaningful testing. Final hardening verifies the assembled result rather than postponing these duties. Content preparation can interleave after templates stabilize; one developer still has one delivery capacity. No scope reduction is inferred from schedule pressure.

## 3. Milestone overview and dependency order

Milestone order is the review/delivery sequence. Dependencies in §4 are the executable dependency graph; independent work can be interleaved after prerequisites, without implying simultaneous solo development. All phases here are P1 unless a task explicitly says conditional P1/P2 baseline. Required means necessary for full selected Phase 1, not optional merely because it is not critical-path infrastructure.

| ID | Milestone | Dependencies / prerequisite gates | Baseline active hours | Conditional additions |
| --- | --- | --- | --- | --- |
| M00 | Confirm implementation decisions | None | 16–28 | — |
| M01 | Repository, environment and quality foundation | M00-01; relevant M00-02 selections | 20–36 | — |
| M02 | Database and shared server foundation | M01; relevant M00 policy selections | 26–46 | — |
| M03 | Staff identity and authorization | M02; A5-01/02 and D-009/013 resolved | 36–62 | — |
| M04 | Design system and shared shells | M01; M03 for authenticated shell integration | 40–64 | — |
| M05 | Catalog and representative public templates | M04; M00 commercial gates for published values | 42–70 | — |
| M06 | Complete intake and notification flow | M02–M05; mail and privacy decisions | 58–98 | 30–50 |
| M07 | CRM, pipeline, customers and follow-ups | M06 baseline; D-011 decisions | 72–122 | 3–6 |
| M08 | Limited CMS and publication workflows | M03–M05; A5-04/05 and D-012 selections | 48–80 | 20–36 |
| M09 | Complete public website and content population | M05, M06 baseline, M08 baseline; commercial/content approvals | 128–220 | — |
| M10 | Search, SEO and measurement | M08–M09 and saved intake; consent decision | 27–46 | — |
| M11 | Dashboard completion and operational readiness | M07–M08; M10 where search/SEO summaries rely on it | 20–34 | 26–44 |
| M12 | Motion and visual refinement | M09–M11 for final polish; essential interaction already implemented | 28–50 | — |
| M13 | Release qualification | All baseline M01–M12 and every selected conditional task | 42–74 | — |
| M14 | Approved production launch and verification | M13 complete; explicit production authorization | 17–34 | — |

The first complete flow is M06: public input → durable inquiry and outbox → authorized staff view → controlled delivery. This exposes infrastructure and access failures before the full content inventory is multiplied. CRM follows actual saved inquiries; CMS establishes publication truth before full search/SEO. M09 completes every public entry. M11 completes summaries/conditional screens rather than deferring all dashboard work. Decorative polish follows functional acceptance.

## 4. Detailed milestones and task register

### 4.1 Common task contract and Definition of Done

Each task record is read with its milestone inputs, the exact source acceptance criteria in §16, relevant page contract in §§5–6 and model contract in §7. This avoids replacing source requirements with a shorter task description.

Task completion requires: authorized scope and prerequisites; smallest coherent change; source IDs and affected paths recorded; no unrelated edits; positive/negative/edge behavior verified; relevant keyboard/mobile/loading/empty/error/success/denied/conflict states; no secret/private data exposure; bounded queries/assets; actual tests/build results; source decisions updated when necessary; owner review at the milestone gate. Tests are behavior-focused, not a duplicate test for every trivial field/file. No implementation test is claimed run by this planning document.

Task acceptance clauses are local `<task-ID>/AC` criteria, not new FR IDs. Verification lines describe future evidence. Dependencies listed as tasks are hard functional prerequisites; conditional feature activation also requires the named decision. Where a provider or policy gate is still open, the task is planned but not ready to execute. All selected conditional tasks must pass before M13 release qualification closes.

Effort includes implementation, its relevant tests and ordinary local correction/review. Larger tasks are bounded work packages, not giant Codex prompts: use approximately 3–6-hour sessions with checkpoints for contracts/persistence, authorized operation, UI and verification as applicable. Content batches use 3–5 service records per session. Preserve parent task IDs and append child IDs only in later execution planning; no full Step 8 prompts are generated here.

### M00 — Confirm implementation decisions

**Business objective:** Make the approved scope executable without silently choosing providers, policies or conditional features.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** None.

**Required inputs:** S1 §§7–9,14; S2 §12; S4 §15; S5 §18; S6 §22.

**Scope and deliverables:** The following 3 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 16–28 baseline active hours.

**Main risks:** Unresolved access/privacy/provider decisions can invalidate later work.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Owner accepts decision log and immediate implementation prerequisites; deferred gates have an owner and due milestone.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m00-01"></a>

#### M00-01 — Freeze source and coverage registers

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 4–6 active hours.

**Dependencies:** None; authoritative sources available. **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-007, BR-008, EXT-001, EXT-002, EXT-003, NFR-010, NFR-013. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations. **Important Step 6 files/folders:** docs/sources/; docs/architecture/decisions/. **Models/data:** None.

**Work and deliverable:** Record versions, hashes, page/catalog identities and phase qualifications; retain the M00–M14 sequence and source hierarchy.

**Acceptance (M00-01/AC):** All 236 requirement records and 215 inventory entries reconcile; no future feature is relabeled P1; change log identifies actual supersessions.

**Verification/completion evidence:** Compare inventories by ID, hashes and exact URLs; owner reviews unresolved register.

<a id="m00-02"></a>

#### M00-02 — Select compatible provider and environment contracts

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M00-01](#m00-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-11-01, FR-14-01, FR-14-07, NFR-008. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Identity; Notifications; Operations. **Important Step 6 files/folders:** docs/architecture/provider-selection.md; docs/architecture/environment.md. **Models/data:** StaffUser; conditional StaffSession.

**Work and deliverable:** Choose one auth adapter, transactional email, Node-capable host, monitoring and bounded job trigger; record budget, region, credential owners, staging separation, runtime limits and backup capability.

**Acceptance (M00-02/AC):** A5-01/08 and D-020 outcomes are recorded before affected installation; current versions, terms and capabilities are verified at implementation; no purchase inferred.

**Verification/completion evidence:** Review provider capability checklist against S6 §§15–16,20; identify a tested fallback for each essential external dependency.

**Unresolved/conditional gate:** Provider/account/budget decisions; complete independently for each affected adapter.

<a id="m00-03"></a>

#### M00-03 — Resolve workflow, policy and conditional-interface gates

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–12 active hours.

**Dependencies:** [M00-01](#m00-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-001, BR-002, BR-005, BR-006, BR-008, FR-14-08, NFR-004, NFR-005. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Identity; Intake; CRM; Content; Operations. **Important Step 6 files/folders:** docs/architecture/decisions/; docs/content-publication.md. **Models/data:** Source policies only.

**Work and deliverable:** Record permission/publishing matrix, CRM corrections, article draft behavior, FAQ/media mode, consent/retention, booking/finance mode and commercial/asset readiness owners.

**Acceptance (M00-03/AC):** Each D/A5/U gate is selected, retained with baseline, or assigned a deadline; no conditional UI is silently dropped or enabled; unresolved facts cannot be replaced by examples.

**Verification/completion evidence:** Owner decision review using the inherited register; trace affected tasks and route activation.

**Unresolved/conditional gate:** Close each decision before its dependent task; unrelated work may proceed.

### M01 — Repository, environment and quality foundation

**Business objective:** Create a reproducible, isolated workspace for small verified changes.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M00-01; relevant M00-02 selections.

**Required inputs:** S6 §§3–4,15–18,20; S1 §9.

**Scope and deliverables:** The following 4 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 20–36 baseline active hours.

**Main risks:** Version mismatch, leaked preview credentials, overly broad scaffolding.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Clean setup and CI checks reproduce in an isolated environment; owner reviews foundation evidence.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m01-01"></a>

#### M01-01 — Initialize repository and application conventions

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 4–8 active hours.

**Dependencies:** [M00-01](#m00-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-09, NFR-010. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared infrastructure. **Important Step 6 files/folders:** package.json; pnpm-lock.yaml; .node-version; tsconfig.json; eslint.config.mjs; README.md. **Models/data:** None.

**Work and deliverable:** Set up one aradun/ repository with frontend/ (Next.js App Router/TypeScript) and backend/ (Express.js/TypeScript), separate application manifests and one chosen package manager; retain Step 6 ownership and naming and install only necessary dependencies.

**Acceptance (M01-01/AC):** Compatible supported versions recorded; strict types/lint/format and server import boundaries operate; separate frontend/backend boundaries and no empty future modules.

**Verification/completion evidence:** Clean-install/build/type/lint checks and a deliberately forbidden import fixture.

<a id="m01-02"></a>

#### M01-02 — Validate environments and protect secrets

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 4–8 active hours.

**Dependencies:** [M01-01](#m01-01), [M00-02](#m00-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-01, FR-14-13, NFR-008. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared infrastructure; Operations. **Important Step 6 files/folders:** backend/src/config//; .env.example; .gitignore; docs/architecture/environment.md. **Models/data:** None.

**Work and deliverable:** Implement S6 server/public environment contracts, origin policy and environment-specific credential separation.

**Acceptance (M01-02/AC):** Missing required feature configuration fails safely; public projection is allowlisted; previews cannot address production data or recipients.

**Verification/completion evidence:** Invalid/missing-env cases, bundle/secret scan, staging misconfiguration negative tests.

<a id="m01-03"></a>

#### M01-03 — Establish behavior-test infrastructure

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M01-01](#m01-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-09, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared infrastructure. **Important Step 6 files/folders:** tests/; vitest.config.ts; playwright.config.ts; docs/testing.md. **Models/data:** Disposable synthetic fixtures only.

**Work and deliverable:** Configure selected unit/component/browser/a11y tools and a real replica-set-capable Mongo test environment with deterministic fixture lifecycle.

**Acceptance (M01-03/AC):** Transaction/index tests run against real Mongo behavior; tests cannot reset live data; controlled provider doubles are distinct from later adapter tests.

**Verification/completion evidence:** Run one meaningful validation, transaction-abort and browser focus example; verify production reset refusal.

<a id="m01-04"></a>

#### M01-04 — Set up CI, protected previews and initial monitoring

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M01-02](#m01-02), [M01-03](#m01-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-07, FR-14-09, NFR-008, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations. **Important Step 6 files/folders:** .github/workflows/ci.yml; docs/runbooks/local-setup.md; docs/runbooks/incident-response.md. **Models/data:** None.

**Work and deliverable:** Automate source validation/lint/types/tests/build; select one preview/deployment mechanism, protect previews and establish redacted error reporting.

**Acceptance (M01-04/AC):** Untrusted contributions receive no privileged secrets; preview is protected/noindex with synthetic data; a deliberate test failure blocks CI; alert reaches the designated test destination.

**Verification/completion evidence:** CI failure/pass runs, unauthenticated preview denial, redaction and test-alert checks.

### M02 — Database and shared server foundation

**Business objective:** Prove persistence, transaction and defensive server contracts before business writes.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M01; relevant M00 policy selections.

**Required inputs:** S5 §§5–7,12–14; S6 §§10,12,19.

**Scope and deliverables:** The following 5 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 26–46 baseline active hours.

**Main risks:** Standalone test Mongo, unbounded pools, missing real indexes or overbroad credentials.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Database invariants and negative cases pass; schema/index strategy reviewed; business models remain feature-timed.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m02-01"></a>

#### M02-01 — Connect local MongoDB and define transaction ownership

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 4–8 active hours.

**Dependencies:** [M01-02](#m01-02), [M01-03](#m01-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-06, NFR-006, NFR-010. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared infrastructure. **Important Step 6 files/folders:** backend/src/server/db/connection.server.ts; backend/src/server/db/transaction.server.ts. **Models/data:** None.

**Work and deliverable:** Implement warm-process connection reuse, explicit DB target, bounded pools/timeouts and transaction session propagation under Node runtime.

**Acceptance (M02-01/AC):** Rejected connection promises recover safely; failed multi-document writes abort; no external API call occurs inside DB transactions.

**Verification/completion evidence:** Real replica-set commit/abort/retry and connection-failure tests; inspect runtime and aggregate pool budget.

<a id="m02-02"></a>

#### M02-02 — Implement shared value contracts and safe transport boundaries

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M02-01](#m02-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-02, NFR-012, NFR-014. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared infrastructure. **Important Step 6 files/folders:** backend/src/server/db/value-schemas.server.ts; backend/src/server/; backend/src/modules/*/validation/. **Models/data:** S5 shared embedded value contracts.

**Work and deliverable:** Implement UTC/timezone, minor-unit money, reference, consent and offer snapshot contracts; safe DTO/error conventions; bounded allowlisted inputs.

**Acceptance (M02-02/AC):** ObjectIds/dates serialize deliberately; currency/period are preserved; arbitrary operators, mass assignment and prototype keys are rejected; response errors disclose no secrets.

**Verification/completion evidence:** Boundary/serialization tests, malformed IDs and payloads, date/money edge cases, redaction checks.

<a id="m02-03"></a>

#### M02-03 — Implement audit persistence and safe operational logging

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M02-02](#m02-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-13, FR-14-07, NFR-008. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations. **Important Step 6 files/folders:** backend/src/modules/operations/models/; backend/src/modules/operations/server/. **Models/data:** AuditEvent.

**Work and deliverable:** Implement S5 §7.10 and restricted append/read operations; correlate safe operational errors separately from business activity.

**Acceptance (M02-03/AC):** Audit follows committed sensitive operations; normal app cannot rewrite history; snapshots omit raw message/credential contents.

**Verification/completion evidence:** Schema/index tests, unauthorized read/update attempts, transaction rollback and PII redaction verification.

<a id="m02-04"></a>

#### M02-04 — Implement shared abuse and request controls

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 4–8 active hours.

**Dependencies:** [M02-02](#m02-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-05, FR-14-08, NFR-008. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations. **Important Step 6 files/folders:** backend/src/modules/operations/models/; backend/src/modules/operations/server/. **Models/data:** RateLimitBucket.

**Work and deliverable:** Implement S5 §7.12 atomic distributed limits, bounded request size, trusted-origin/CSRF strategy and accessible abuse response.

**Acceptance (M02-04/AC):** Concurrent app instances share limits; expiry is checked in logic rather than waiting for TTL; thresholds/retention are approved; legitimate input survives recoverable failure.

**Verification/completion evidence:** Concurrent increment/expiry tests, spoofed origin and oversized requests, accessible retry feedback.

**Unresolved/conditional gate:** D-014 limiter identifier retention and deployment thresholds.

<a id="m02-05"></a>

#### M02-05 — Establish indexes, migration and synthetic-seed procedures

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M02-01](#m02-01), [M02-02](#m02-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-06, FR-14-09, NFR-004, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations; Shared infrastructure. **Important Step 6 files/folders:** backend/scripts/db/; backend/src/server/db/model-registry.server.ts; backend/tests/integration/database.test.ts. **Models/data:** Feature model registry; no new collection.

**Work and deliverable:** Create reviewed index check/apply and migration/fixture procedures; add models only when implemented; separate operational privileges from app credentials.

**Acceptance (M02-05/AC):** Partial/unique/TTL indexes match S5; production automatic index creation/destructive synchronization are disabled; dry-run/backup/verification/rollback are specified.

**Verification/completion evidence:** Duplicate-key tests, populated-value uniqueness, fixture repeatability, production-reset refusal and migration rehearsal on disposable data.

### M03 — Staff identity and authorization

**Business objective:** Protect all staff operations using verified identity and current local access.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M02; A5-01/02 and D-009/013 resolved.

**Required inputs:** S1 §7; S5 §11; S6 §11 and STA/ADM-026 routes.

**Scope and deliverables:** The following 5 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 36–62 baseline active hours.

**Main risks:** Provider cookie outlives revocation; roles leak through linked records; recovery lockout.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Real staging provider flow plus operation-level negative tests pass; owner approves access/recovery evidence.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m03-01"></a>

#### M03-01 — Implement selected identity adapter and StaffUser

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M00-02](#m00-02), [M00-03](#m00-03), [M02-03](#m02-03), [M02-05](#m02-05), [M02-04](#m02-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-01, FR-14-04. **Page IDs:** STA-001.

**Routes:** `/staff/login`

**Modules:** Identity. **Important Step 6 files/folders:** backend/src/modules/identity/models/; backend/src/modules/identity/server/; backend/src/modules/identity/integrations/; frontend/src/app/(auth)/staff/. **Models/data:** StaffUser; StaffSession only if required.

**Work and deliverable:** Implement S5 §7.9 and selected provider mapping/session validation; retain the local-session contract §7.13 only if the chosen adapter needs it.

**Acceptance (M03-01/AC):** Subject and issuer/provider establish identity; email matching never grants staff access; login/logout and safe local return work; only one session master.

**Verification/completion evidence:** Provider callback/session integration, forged/stale identity, logout and safe-redirect tests; local-session expiry/revocation if selected.

**Unresolved/conditional gate:** A5-01 provider/session selection.

<a id="m03-02"></a>

#### M03-02 — Enforce role and record policy in server operations

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M03-01](#m03-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-07, FR-14-03, NFR-005. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Identity; Operations. **Important Step 6 files/folders:** backend/src/modules/identity/policies/; backend/src/modules/identity/server/; backend/src/server/workflows/. **Models/data:** StaffUser; AuditEvent.

**Work and deliverable:** Implement the approved Admin/Sales/Editor policy, current active status/accessVersion and scoped operation helpers; apply independently of layout guards.

**Acceptance (M03-02/AC):** Editor cannot access CRM/finance; Sales cannot infer unrelated linked records; lists/counts/search and mutations use the same policy; My Account cannot grant roles.

**Verification/completion evidence:** Permission matrix and guessed-ID tests across server entry points, actor changes and linked targets.

**Unresolved/conditional gate:** A5-02/D-013 exact visibility and publication rights.

<a id="m03-03"></a>

#### M03-03 — Implement recovery, MFA and account-security behavior

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M03-01](#m03-01), [M03-02](#m03-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-01, FR-14-04, FR-14-10. **Page IDs:** STA-002, STA-003, STA-004, ADM-026.

**Routes:** `/dashboard/account`, `/staff/recover`, `/staff/reset`, `/staff/verify`

**Modules:** Identity. **Important Step 6 files/folders:** frontend/src/app/(auth)/staff/; frontend/src/app/(staff)/dashboard/account/; frontend/src/modules/identity/components/security-panel.tsx. **Models/data:** StaffUser; provider-owned sessions/recovery.

**Work and deliverable:** Use provider-supported recovery/MFA and account operations; reconcile STA routes explicitly if provider-hosted screens differ.

**Acceptance (M03-03/AC):** Chosen MFA requirement works; expired/replayed recovery rejected; fresh auth protects sensitive changes; recovery does not leak account existence; no local homemade OTP/password flow.

**Verification/completion evidence:** Real staging recovery/MFA, timeout/replay, generic acknowledgement and keyboard tests; later visual integration in M04-04.

**Unresolved/conditional gate:** D-009/A5-01 recovery/MFA decision; route framing conditional, secure capability required.

<a id="m03-04"></a>

#### M03-04 — Implement bootstrap, offboarding and safe access lifecycle

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M03-02](#m03-02), [M03-03](#m03-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-07, FR-14-04, NFR-005. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Identity; Operations. **Important Step 6 files/folders:** backend/scripts/; docs/runbooks/access-lifecycle.md; backend/src/modules/identity/server/. **Models/data:** StaffUser; AuditEvent; conditional StaffSession.

**Work and deliverable:** Provide one-time verified owner bootstrap and authorized staff provisioning/deactivation, using provider/admin procedures if dedicated screens are not selected.

**Acceptance (M03-04/AC):** No public staff signup/default password; last active Admin protected; deactivation immediately denies ARADUN access and identifies reassignment needs; actions audited.

**Verification/completion evidence:** Last-admin guard, stale-cookie deactivation, provision/revoke and recovery runbook exercise.

<a id="m03-05"></a>

#### M03-05 — Verify private boundaries and session failures

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M03-02](#m03-02), [M03-03](#m03-03), [M03-04](#m03-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-03, FR-14-04, NFR-005, NFR-008. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Identity; Operations. **Important Step 6 files/folders:** backend/tests/integration/access.test.ts; frontend/tests/e2e/staff.spec.ts; backend/tests/security/. **Models/data:** StaffUser; AuditEvent.

**Work and deliverable:** Build reusable negative access cases and safe denial/session-expiry handling for subsequent feature tests.

**Acceptance (M03-05/AC):** Direct reads/actions fail securely without sidebar assumptions; private responses are not shared-cached; stale-role sessions denied; no marketing analytics on auth/private pages.

**Verification/completion evidence:** Missing/suspended/changed-role contexts, origin/CSRF controls, expired session and sensitive-log tests.

### M04 — Design system and shared shells

**Business objective:** Make public and internal workflows consistent, responsive and accessible before page expansion.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M01; M03 for authenticated shell integration.

**Required inputs:** S3 §§2–3; S4 §§2–9,12–13; S6 §§7–9.

**Scope and deliverables:** The following 5 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 40–64 baseline active hours.

**Main risks:** Duplicated themes, premature global Client Components, inaccessible controls.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Representative public/form/staff screens work in all three themes and keyboard/mobile/reduced-motion modes.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m04-01"></a>

#### M04-01 — Implement semantic tokens, fonts and appearance preference

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–12 active hours.

**Dependencies:** [M01-01](#m01-01), [M01-02](#m01-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-01, NFR-002, NFR-003. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared presentation. **Important Step 6 files/folders:** frontend/src/styles/; frontend/src/components/theme/; frontend/public/fonts/; frontend/src/app/layout.tsx. **Models/data:** No database model.

**Work and deliverable:** Apply exact S4 tokens/Inter, responsive widths and three light themes; implement guarded device preference and CSP-compatible first paint.

**Acceptance (M04-01/AC):** Terracotta default/Muted Slate Blue and Vivid Blue alternates; no wrong-theme flash, hydration concealment or form reset; invalid/blocked storage fails safely; semantic statuses retain meaning.

**Verification/completion evidence:** All-three-theme visual checks, first-paint/hydration/storage-disabled tests and font transfer measurement.

<a id="m04-02"></a>

#### M04-02 — Build accessible controls, forms and feedback primitives

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–16 active hours.

**Dependencies:** [M04-01](#m04-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-01, NFR-002, NFR-014. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared presentation. **Important Step 6 files/folders:** frontend/src/components/ui/; frontend/src/components/forms/; frontend/src/components/feedback/; frontend/src/components/data-display/. **Models/data:** None.

**Work and deliverable:** Implement only needed shadcn/native controls, labels, choices, tables, dialogs, error summaries and pending/conflict states.

**Acceptance (M04-02/AC):** Keyboard/focus/labels work; errors stay contextual; loading/empty/denied/failure are distinct; modal focus returns; destructive actions name their target.

**Verification/completion evidence:** Component interaction/axe checks plus manual keyboard, zoom and screen-reader spot checks.

<a id="m04-03"></a>

#### M04-03 — Build public navigation, footer and marketing primitives

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M04-02](#m04-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-03, FR-01-07, NFR-002. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Catalog; Shared presentation. **Important Step 6 files/folders:** frontend/src/components/layout/; frontend/src/components/marketing/; frontend/src/modules/catalog/components/. **Models/data:** Source navigation DTOs.

**Work and deliverable:** Implement header, eight-category mega menu, five-solution navigation, mobile menu, footer, breadcrumbs and shared marketing regions using supplied route registry.

**Acceptance (M04-03/AC):** Contact visible in desktop/mobile/footer; Get a Quote primary; no public Staff Login or future links; navigation works without hover; menu collapses before crowding.

**Verification/completion evidence:** Exact-link checks, keyboard/Escape/focus return, long-name/mobile/zoom review; data binds to M05-01 when available.

<a id="m04-04"></a>

#### M04-04 — Integrate public, authentication, staff and CMS shells

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–12 active hours.

**Dependencies:** [M03-05](#m03-05), [M04-02](#m04-02), [M04-03](#m04-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-01, FR-09-02, FR-09-07, NFR-002, NFR-005. **Page IDs:** STA-001, STA-002, STA-003, STA-004, ADM-026.

**Routes:** `/dashboard/account`, `/staff/login`, `/staff/recover`, `/staff/reset`, `/staff/verify`

**Modules:** Identity; Content; Shared presentation. **Important Step 6 files/folders:** frontend/src/app/(public)/layout.tsx; frontend/src/app/(auth)/staff/layout.tsx; frontend/src/app/(staff)/dashboard/layout.tsx; frontend/src/app/(staff)/dashboard/content/layout.tsx. **Models/data:** StaffUser safe actor projection.

**Work and deliverable:** Compose S6 ROOT/PUBLIC/AUTH/STAFF/CONTENT shells with one root layout, scoped navigation and compact drawer behavior.

**Acceptance (M04-04/AC):** No private actor data enters public root; auth/account screens use approved styling; roles scope menus and server reads independently; shell does not load GSAP.

**Verification/completion evidence:** Cross-role navigation and direct-route tests; responsive drawer/skip-link/focus checks.

<a id="m04-05"></a>

#### M04-05 — Implement shared error, not-found and async-state contracts

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M04-02](#m04-02), [M04-04](#m04-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** NFR-008, NFR-014. **Page IDs:** SYS-01, SYS-02.

**Routes:** `Affected route; no dedicated /error route`, `Requested nonexistent URL; no dedicated /404 route`

**Modules:** Shared presentation; Operations. **Important Step 6 files/folders:** frontend/src/app/not-found.tsx; frontend/src/app/global-error.tsx; segment error/loading files; frontend/src/components/feedback/. **Models/data:** None.

**Work and deliverable:** Implement SYS-01/02, meaningful segment boundaries and reusable list/detail/submit failure treatment.

**Acceptance (M04-05/AC):** No dedicated /404 or /error business route; global error fallback is complete; errors redact details, preserve safe input/filter state and offer recovery.

**Verification/completion evidence:** Forced render/network/access errors; direct unknown URL; no empty/zero result substituted for failure; accessibility tests.

### M05 — Catalog and representative public templates

**Business objective:** Prove canonical offer data, price semantics and template reuse before populating the full website.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M04; M00 commercial gates for published values.

**Required inputs:** S1 §§4–5; S2 catalog routes; S3 service variations; S5 §8; S6 Catalog.

**Scope and deliverables:** The following 5 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 42–70 baseline active hours.

**Main risks:** Price-unit invention, duplicate SVC-009, slug collisions, 57 hardcoded layouts.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Registry counts/relationships and representative offer templates pass; owner validates commercial interpretation.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m05-01"></a>

#### M05-01 — Build validated catalog and route registries

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–16 active hours.

**Dependencies:** [M00-01](#m00-01), [M02-02](#m02-02), [M04-03](#m04-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-002, BR-005, FR-01-04, FR-04-01, FR-04-02, FR-04-03. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Catalog. **Important Step 6 files/folders:** backend/src/modules/catalog/data/; backend/src/modules/catalog/validation/; backend/src/modules/catalog/server/. **Models/data:** Source Category/Service/Solution/Package contracts; no catalog collection.

**Work and deliverable:** Populate all eight categories, 57 services, 58 memberships and five solutions using exact source IDs/names/slugs; validate references and one flat category/service namespace.

**Acceptance (M05-01/AC):** SVC-009 has one canonical service record; no missing route or conflicting slug; original prices retained; unknown availability blocks publication rather than inventing a fourth public state.

**Verification/completion evidence:** Count/uniqueness/reference validation and source price/route comparison.

<a id="m05-02"></a>

#### M05-02 — Implement price presentation and immutable offer snapshots

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M05-01](#m05-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-002, FR-02-02, FR-02-03, FR-04-02, NFR-012. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Catalog. **Important Step 6 files/folders:** backend/src/modules/catalog/server/offer-snapshot.service.server.ts; frontend/src/modules/catalog/components/. **Models/data:** Source package/price contracts; OfferSnapshot value.

**Work and deliverable:** Render one-time/monthly/setup-plus-monthly/custom values and produce authoritative immutable snapshots for intake; preserve source tier order and currency.

**Acceptance (M05-02/AC):** Browser amounts ignored; unknown unit is not guessed; selected services are deduplicated by ID; combined selection never becomes a binding automatic total.

**Verification/completion evidence:** Tampered price/ID, mixed periods/currencies, source revision and cross-list selection tests.

<a id="m05-03"></a>

#### M05-03 — Build services overview and category template

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M05-01](#m05-01), [M04-03](#m04-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-04, FR-04-01, FR-04-03. **Page IDs:** PUB-002, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Catalog. **Important Step 6 files/folders:** frontend/src/app/(public)/services/; frontend/src/modules/catalog/templates/services-overview.tsx; frontend/src/modules/catalog/templates/category.tsx. **Models/data:** Source catalog; later SeoOverride.

**Work and deliverable:** Implement T-OV-S/T-CATEGORY with exact ordered regions and shared flat slug resolver; bind real category memberships.

**Acceptance (M05-03/AC):** All eight category destinations render their own source content; unknown/disabled slugs fail safely; prices/availability/CTA context remain accurate.

**Verification/completion evidence:** Route resolver tests, representative narrow/wide category visual review and accessible navigation.

<a id="m05-04"></a>

#### M05-04 — Build service-detail template and variations

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–16 active hours.

**Dependencies:** [M05-02](#m05-02), [M05-03](#m05-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-002, FR-01-04, FR-01-06, FR-01-07, NFR-002. **Page IDs:** PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Catalog. **Important Step 6 files/folders:** frontend/src/app/(public)/services/[slug]/page.tsx; frontend/src/modules/catalog/templates/service.tsx. **Models/data:** Source service/package records.

**Work and deliverable:** Implement T-SERVICE variations for project, recurring, custom, assessment and design/media offers; ordered sections consume data rather than separate layouts.

**Acceptance (M05-04/AC):** Fit/scope/process/dependencies/FAQ unique per service; ambiguous package cells remain gated; common template supports long names, exclusions and truthful evidence slots.

**Verification/completion evidence:** Representative variation tests, semantics/metadata baseline, responsive comparison and quote-context tests.

<a id="m05-05"></a>

#### M05-05 — Build solution and pricing templates

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M05-02](#m05-02), [M05-04](#m05-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-05, FR-01-06, FR-01-07, FR-02-03. **Page IDs:** PUB-003, PUB-004, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Catalog. **Important Step 6 files/folders:** frontend/src/app/(public)/solutions/; frontend/src/app/(public)/pricing/; frontend/src/modules/catalog/templates/. **Models/data:** Source solutions/packages.

**Work and deliverable:** Implement T-OV-SOL/T-SOLUTION/T-PRICING; retain exact five solution names and tier prices and editable quote selection context.

**Acceptance (M05-05/AC):** No invented bundle inclusion, automatic discount or checkout; Custom is not zero; source units/exclusions stay visible on mobile.

**Verification/completion evidence:** All five solution records, pricing display/source parity and selected-tier navigation tests.

### M06 — Complete intake and notification flow

**Business objective:** Prove that each visitor conversion survives retries/provider failures and reaches authorized staff.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M02–M05; mail and privacy decisions.

**Required inputs:** S3 conversion recipes; S5 §§7.1,7.11,9.1–9.3; S6 §§12–13.

**Scope and deliverables:** The following 9 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 58–98 baseline active hours; plus 30–50 hours if all conditional branches here are selected.

**Main risks:** Lost submissions, duplicate notifications, email relay abuse, false booking claims.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; All three real staging journeys save once and expose only safe receipts; provider outage/retry evidence accepted.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m06-01"></a>

#### M06-01 — Implement Inquiry model and type-specific contracts

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M02-02](#m02-02), [M02-05](#m02-05), [M05-02](#m05-02), [M00-03](#m00-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-06, FR-02-07, FR-02-13, FR-14-02, FR-14-08. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Intake. **Important Step 6 files/folders:** backend/src/modules/intake/models/inquiry.model.ts; backend/src/modules/intake/validation/. **Models/data:** Inquiry.

**Work and deliverable:** Implement every S5 §7.1 field/index and typed contact/quote/consultation contracts, bounded attribution/consent and immutable submitted snapshots.

**Acceptance (M06-01/AC):** Reference/submission keys unique; input limits enforced; no existing-customer disclosure or automatic email merge; privacy version captured.

**Verification/completion evidence:** Model/index/input edge tests and malicious fields; each required/optional journey field exercised.

<a id="m06-02"></a>

#### M06-02 — Implement OutboxEvent and bounded delivery worker

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–18 active hours.

**Dependencies:** [M02-03](#m02-03), [M02-05](#m02-05), [M00-02](#m00-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-08, FR-02-09, FR-08-01, FR-08-02, FR-08-15, FR-11-01, NFR-006. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Notifications; Operations. **Important Step 6 files/folders:** backend/src/modules/notifications/models/outbox-event.model.ts; backend/src/modules/notifications/server/; backend/src/modules/notifications/jobs.routes.ts. **Models/data:** OutboxEvent; AuditEvent.

**Work and deliverable:** Implement S5 §7.11 enqueue/claim/lease/fencing, bounded backoff, dedupe and uncertain-delivery reconciliation with an authenticated scheduled trigger.

**Acceptance (M06-02/AC):** Concurrent workers cannot claim the same live lease; stale worker cannot overwrite result; retries bounded; no public unauthenticated trigger or assumed exactly-once email.

**Verification/completion evidence:** Lease contention/expiry/fencing tests; temporary/permanent/unknown provider outcomes; scheduler authentication/runtime test.

<a id="m06-03"></a>

#### M06-03 — Implement atomic submission, receipt and retry recovery

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–16 active hours.

**Dependencies:** [M06-01](#m06-01), [M06-02](#m06-02), [M02-04](#m02-04), [M03-02](#m03-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-06, FR-02-07, FR-02-08, FR-02-09, NFR-006, NFR-014. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Intake; Notifications; Operations. **Important Step 6 files/folders:** backend/src/modules/intake/server/; backend/src/server/workflows/; thin actions/handlers. **Models/data:** Inquiry; OutboxEvent; AuditEvent; RateLimitBucket.

**Work and deliverable:** Commit inquiry and required acknowledgement/staff-alert work together; same-key/same-payload retry returns original safe result; transport delegates to use cases.

**Acceptance (M06-03/AC):** Success only after commit; changed payload with same key conflicts; lost response does not create second inquiry; short-lived receipt reveals no PII; direct thank-you visit is not conversion.

**Verification/completion evidence:** Concurrent submissions, rollback, lost HTTP result, tampering, receipt expiry and provider-down integration tests.

<a id="m06-04"></a>

#### M06-04 — Build contact and manual consultation journeys

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–12 active hours.

**Dependencies:** [M06-03](#m06-03), [M04-02](#m04-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-003, FR-01-09, FR-02-04, FR-02-05, NFR-014. **Page IDs:** PUB-012, PUB-014.

**Routes:** `/consultation`, `/contact`

**Modules:** Intake. **Important Step 6 files/folders:** frontend/src/modules/intake/templates/contact.tsx; frontend/src/modules/intake/templates/consultation.tsx; frontend/src/app/(public)/contact/; frontend/src/app/(public)/consultation/. **Models/data:** Inquiry.

**Work and deliverable:** Implement approved required/optional fields, timezone preference, consent notices and accurate pending-confirmation wording; retain selected free 15-minute screening copy where applicable.

**Acceptance (M06-04/AC):** No forced quote/account/phone; errors retain valid input; manual request never says booked; only verified working direct contact channels published.

**Verification/completion evidence:** End-to-end success/invalid/slow/offline/duplicate cases; timezone and keyboard/screen-reader check.

<a id="m06-05"></a>

#### M06-05 — Build the four-step quote journey

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–18 active hours.

**Dependencies:** [M06-03](#m06-03), [M05-04](#m05-04), [M05-05](#m05-05), [M04-02](#m04-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-07, FR-02-01, FR-02-02, FR-02-03, NFR-002, NFR-014. **Page IDs:** PUB-013.

**Routes:** `/get-a-quote`

**Modules:** Intake; Catalog. **Important Step 6 files/folders:** frontend/src/app/(public)/get-a-quote/; frontend/src/modules/intake/components/; frontend/src/modules/intake/templates/. **Models/data:** Inquiry; authoritative offer snapshot.

**Work and deliverable:** Implement Service → Project → Contact → Review with multi-offer/tier selection, Custom/Not sure, Back/Edit, optional budget/timeline and bounded server validation.

**Acceptance (M06-05/AC):** Offer context preserved across entry points and theme switches; required brief/name/email validated; no binding summed price; submit cannot silently drop selected items.

**Verification/completion evidence:** E2E all entry paths/Back/Edit, cross-listed item dedupe, tampered payload, preserved state/focus and failed-submit recovery.

<a id="m06-06"></a>

#### M06-06 — Connect safe emails, confirmation and staff inquiry read

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M06-02](#m06-02), [M06-03](#m06-03), [M03-05](#m03-05), [M04-04](#m04-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-003, FR-02-08, FR-02-09, FR-08-01, FR-08-02, FR-09-03, FR-09-04, FR-11-01. **Page IDs:** PUB-015, ADM-002, ADM-003.

**Routes:** `/dashboard/leads/[leadId]`, `/dashboard/leads`, `/thank-you`

**Modules:** Notifications; Intake; CRM. **Important Step 6 files/folders:** backend/src/modules/notifications/; frontend/src/app/(public)/thank-you/; frontend/src/app/(staff)/dashboard/leads/. **Models/data:** Inquiry; OutboxEvent; StaffUser.

**Work and deliverable:** Use verified sender and fixed staff recipients, escaped templates and protected links; expose minimal receipt and an authorized inquiry list/detail for the first working flow.

**Acceptance (M06-06/AC):** No user-controlled mail relay; saved-with-email-delay distinguished from unsaved failure; alias notification requirements produce one intended message each; staff sees only allowed records.

**Verification/completion evidence:** Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests.

<a id="m06-07"></a>

#### M06-07 — Verify the complete conversion flow

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M06-04](#m06-04), [M06-05](#m06-05), [M06-06](#m06-06). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-05, NFR-006, NFR-009, NFR-014. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Intake; Notifications; CRM. **Important Step 6 files/folders:** backend/tests/integration/intake.test.ts; backend/tests/integration/notifications.test.ts; frontend/tests/e2e/intake.spec.ts. **Models/data:** Inquiry; OutboxEvent; AuditEvent.

**Work and deliverable:** Exercise public-to-staff-to-email flow in production-like staging, including duplicate clicks, dropped responses, abuse controls and provider outage.

**Acceptance (M06-07/AC):** One durable inquiry/reference and correct queued work per submission; all three paths usable on mobile/keyboard; no private state leaks; failure owner/retry procedure documented.

**Verification/completion evidence:** Record browser journeys and DB/outbox assertions with synthetic data; repeat fault scenarios deterministically.

<a id="m06-08"></a>

#### M06-08 — Implement selected live-booking adapter only if promoted

**Phase/status:** Conditional P1 branch; preserve named P2 baseline where stated · **Priority:** Conditional · **Estimate:** 16–26 active hours.

**Dependencies:** [M06-07](#m06-07), [M00-02](#m00-02), [M00-03](#m00-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-14, FR-11-04, NFR-015. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Intake. **Important Step 6 files/folders:** backend/src/modules/intake/integrations/calendar/; backend/src/modules/intake/models/. **Models/data:** BookingRecord.

**Work and deliverable:** Only after D-003 approval, implement provider-confirmed availability/timezone and booking identity contracts against S5 §7.16; retain manual request fallback. Integrate the selected live-availability/booking branch into the existing consultation page with accessible pending/error states.

**Acceptance (M06-08/AC):** No booking success before provider confirmation; slot contention and token failure return truthful recoverable state; external booking mode has explicit CRM linkage.

**Verification/completion evidence:** Controlled provider sandbox/staging tests for slot races, timezone and outage; scope/credential review.

**Unresolved/conditional gate:** D-003/A5-06 explicit P1 promotion; otherwise deferred P2.

<a id="m06-09"></a>

#### M06-09 — Reconcile live booking lifecycle and conditional callbacks

**Phase/status:** Conditional P1 branch; preserve named P2 baseline where stated · **Priority:** Conditional · **Estimate:** 14–24 active hours.

**Dependencies:** [M06-08](#m06-08). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-14, FR-11-04, FR-14-12, NFR-006, NFR-015. **Page IDs:** PUB-014.

**Routes:** `/consultation`

**Modules:** Intake; Operations. **Important Step 6 files/folders:** backend/src/modules/intake/integrations/calendar/; selected callback route; backend/tests/integration/. **Models/data:** BookingRecord; Inquiry; AuditEvent.

**Work and deliverable:** Implement chosen cancel/reschedule/reconciliation and provider-specific signed or otherwise authenticated callbacks where actually required.

**Acceptance (M06-09/AC):** Duplicate/replayed callbacks cannot mutate twice; incomplete outcome reconciles; fallback never misrepresents an appointment; no generic unsupported signing assumption.

**Verification/completion evidence:** Spoof/replay/duplicate/out-of-order callback tests and full booking/cancel/reschedule E2E under selected integration.

**Unresolved/conditional gate:** D-003 promotion and callback selection.

### M07 — CRM, pipeline, customers and follow-ups

**Business objective:** Let staff turn saved inquiries into accountable sales work without duplicating identity or losing history.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M06 baseline; D-011 decisions.

**Required inputs:** S5 §§7.2–7.5,9; S3/S4 ADM-002–011; S6 CRM/workflows.

**Scope and deliverables:** The following 10 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 72–122 baseline active hours; plus 3–6 hours if all conditional branches here are selected.

**Main risks:** Concurrent reviewed links/merges, cross-record access leaks, confusing Won with payment.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Inquiry-to-contact-to-opportunity-to-task-to-customer scenario passes with concurrent and unauthorized negatives.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m07-00"></a>

#### M07-00 — Implement shared business Activity persistence

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M06-07](#m06-07), [M02-03](#m02-03), [M02-05](#m02-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-12, FR-09-08, NFR-005. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** CRM. **Important Step 6 files/folders:** backend/src/modules/crm/models/activity.model.ts; backend/src/modules/crm/server/. **Models/data:** Activity; AuditEvent.

**Work and deliverable:** Implement all S5 §7.5 fields/indexes and explicit-target append/note-correction operations before other CRM mutations write history.

**Acceptance (M07-00/AC):** Business events remain separate from restricted audit; event keys deduplicate; correction preserves provenance and requires target authorization.

**Verification/completion evidence:** Model/index, event dedupe, target scope and correction-audit tests.

<a id="m07-01"></a>

#### M07-01 — Implement canonical contacts and reviewed identity linking

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–16 active hours.

**Dependencies:** [M06-07](#m06-07), [M00-03](#m00-03), [M07-00](#m07-00). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-06, FR-03-01, NFR-005. **Page IDs:** ADM-004, ADM-005.

**Routes:** `/dashboard/contacts/[contactId]`, `/dashboard/contacts`

**Modules:** CRM; Intake. **Important Step 6 files/folders:** backend/src/modules/crm/models/contact.model.ts; backend/src/modules/crm/server/; backend/src/server/workflows/; contacts routes. **Models/data:** Contact; Inquiry; Activity; AuditEvent.

**Work and deliverable:** Implement S5 §7.2 and staff-reviewed existing/new contact linking with safe candidate search; use an explicit coordinator for cross-module transactions.

**Acceptance (M07-01/AC):** Email is a candidate hint, not unique automatic identity; concurrent review of one inquiry creates one link; immutable original submitted identity remains intact.

**Verification/completion evidence:** Two-reviewer races, shared email, unauthorized candidate access and relationship tests; contact list/detail keyboard/mobile review.

**Unresolved/conditional gate:** D-011/A5-03 reviewed identity policy.

<a id="m07-02"></a>

#### M07-02 — Implement inquiry handling and assignment

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M07-01](#m07-01), [M03-04](#m03-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-10, FR-02-11, FR-02-13, FR-09-03, FR-09-04, FR-09-06. **Page IDs:** ADM-002, ADM-003.

**Routes:** `/dashboard/leads/[leadId]`, `/dashboard/leads`

**Modules:** CRM; Intake. **Important Step 6 files/folders:** frontend/src/app/(staff)/dashboard/leads/; backend/src/modules/crm/server/; backend/src/modules/intake/server/. **Models/data:** Inquiry; StaffUser; Activity; AuditEvent.

**Work and deliverable:** Extend first inquiry view with status/classification, eligible assignment/reassignment, source history and safe filters.

**Acceptance (M07-02/AC):** Spam/duplicate/no-response remain classifications rather than pipeline stages; suspended assignees rejected; unassigned/reassignment work remains Admin-visible.

**Verification/completion evidence:** Status/assignment permissions, stale revision, source visibility and suspended-staff tests; list/detail state review.

<a id="m07-03"></a>

#### M07-03 — Implement Opportunity and fixed sales pipeline

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–18 active hours.

**Dependencies:** [M07-01](#m07-01), [M07-02](#m07-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-03-05, NFR-012. **Page IDs:** ADM-006, ADM-007.

**Routes:** `/dashboard/opportunities/[opportunityId]`, `/dashboard/opportunities`

**Modules:** CRM. **Important Step 6 files/folders:** backend/src/modules/crm/models/opportunity.model.ts; backend/src/modules/crm/server/; frontend/src/app/(staff)/dashboard/opportunities/. **Models/data:** Opportunity; Contact; Inquiry; Activity; AuditEvent.

**Work and deliverable:** Implement S5 §7.3, idempotent opportunity creation, fixed stages, owner, estimated value/currency and allowed transition reasons.

**Acceptance (M07-03/AC):** New → Qualified → Discovery → Proposal Sent → Negotiation → Won/Lost retained; explicit keyboard stage controls; stage history appended; no configurable builder or required dragging.

**Verification/completion evidence:** Transition/reopen/stale-write and double-create tests; authorization and monetary labels; pipeline/detail responsive review.

**Unresolved/conditional gate:** D-011 transition exceptions.

<a id="m07-04"></a>

#### M07-04 — Implement manual follow-up tasks and due indicators

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–12 active hours.

**Dependencies:** [M07-01](#m07-01), [M07-03](#m07-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-03-06, NFR-012. **Page IDs:** ADM-008, ADM-009.

**Routes:** `/dashboard/tasks/[taskId]`, `/dashboard/tasks`

**Modules:** CRM. **Important Step 6 files/folders:** backend/src/modules/crm/models/follow-up-task.model.ts; backend/src/modules/crm/server/; frontend/src/app/(staff)/dashboard/tasks/. **Models/data:** FollowUpTask; Activity; AuditEvent.

**Work and deliverable:** Implement S5 §7.4 manual create/assign/update/complete/cancel with one authorized target, due instant/timezone and due/overdue filters.

**Acceptance (M07-04/AC):** Target/assignee permissions enforced; completion/history consistent; due state timezone-correct; no automatic campaign or external reminder sequence introduced.

**Verification/completion evidence:** Due-boundary/timezone, unauthorized target, stale edit and completion tests; form/list/detail keyboard checks.

<a id="m07-05"></a>

#### M07-05 — Implement explicit customer conversion and correction

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M07-03](#m07-03), [M07-04](#m07-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-03-02, FR-03-03, NFR-006. **Page IDs:** ADM-010, ADM-011.

**Routes:** `/dashboard/customers/[customerId]`, `/dashboard/customers`

**Modules:** CRM. **Important Step 6 files/folders:** backend/src/modules/crm/server/; backend/src/server/workflows/; frontend/src/app/(staff)/dashboard/customers/. **Models/data:** Contact.customerProfile; Opportunity; Activity; AuditEvent.

**Work and deliverable:** Convert reviewed Won opportunities into the embedded canonical customer profile with idempotency; implement approved audited correction/reversal policy.

**Acceptance (M07-05/AC):** Two won deals for one contact do not create two customers; reopening a deal does not delete customer/history; conversion does not mark money paid.

**Verification/completion evidence:** Concurrent/repeated conversion, denial, other won engagement and reversal tests; customer list/detail states.

**Unresolved/conditional gate:** D-011/A5-03 conversion correction policy.

<a id="m07-06"></a>

#### M07-06 — Implement Activity, scoped history and private search

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M07-01](#m07-01), [M07-02](#m07-02), [M07-03](#m07-03), [M07-04](#m07-04), [M07-05](#m07-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-02-12, FR-09-05, FR-09-08, NFR-003, NFR-005. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** CRM. **Important Step 6 files/folders:** backend/src/modules/crm/models/activity.model.ts; backend/src/modules/crm/server/; frontend/src/modules/crm/components/. **Models/data:** Activity; owned CRM models.

**Work and deliverable:** Build business timeline UI/read composition on the already implemented S5 §7.5 model and controlled note correction; indexed pagination/search for permitted names/references/status/dates; distinct restricted audit.

**Acceptance (M07-06/AC):** Histories bounded; no unbounded embedded event arrays; count/list/search permission predicates agree; notes remain internal and never imply mailbox sync.

**Verification/completion evidence:** Pagination/tie-break/query-plan tests, malicious filters, note correction/redaction and cross-role disclosure cases.

<a id="m07-07"></a>

#### M07-07 — Implement approved contact merge/correction procedure

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M07-06](#m07-06), [M00-03](#m00-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-03-01, FR-03-03, NFR-004, NFR-005. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** CRM; Operations. **Important Step 6 files/folders:** backend/src/modules/crm/server/; backend/src/server/workflows/; docs/runbooks/. **Models/data:** Contact; Inquiry; Opportunity; FollowUpTask; Activity; AuditEvent.

**Work and deliverable:** Provide Admin-reviewed bounded merge/correction with survivor/affected-link review, reason, history and safe handling of large graphs under S5; no bulk delete UI.

**Acceptance (M07-07/AC):** No silent identity merge or historical submitter rewrite; all linked references remain valid; stale/concurrent edits cannot corrupt links; large graph refuses unsafe one-shot action.

**Verification/completion evidence:** Merge dry-run/reference parity, rollback/concurrent mutation tests and documented supervised recovery.

**Unresolved/conditional gate:** D-011 exact merge/reversal limits.

<a id="m07-08"></a>

#### M07-08 — Verify CRM workflow integrity

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M07-06](#m07-06), [M07-07](#m07-07). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-03-03, FR-03-05, FR-03-06, NFR-005, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** CRM; Intake; Identity. **Important Step 6 files/folders:** backend/tests/integration/crm.test.ts; frontend/tests/e2e/staff.spec.ts. **Models/data:** All CRM models; Inquiry; StaffUser; AuditEvent.

**Work and deliverable:** Exercise multi-inquiry/multi-opportunity contact, qualification, assignments, manual tasks, notes, conversion and correction with realistic synthetic records.

**Acceptance (M07-08/AC):** All operations enforce active actor/target scope and revisions; histories preserved; UI accurately handles denied/loading/empty/failure/success/conflict.

**Verification/completion evidence:** Cross-role E2E and transaction/concurrency tests; compare scoped summary queries to lists.

<a id="m07-09"></a>

#### M07-09 — Enable assignment email only if selected

**Phase/status:** Conditional P1 branch; preserve named P2 baseline where stated · **Priority:** Conditional · **Estimate:** 3–6 active hours.

**Dependencies:** [M07-02](#m07-02), [M06-02](#m06-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-08-03. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** CRM; Notifications. **Important Step 6 files/folders:** backend/src/modules/crm/server/; backend/src/modules/notifications/. **Models/data:** Inquiry; OutboxEvent; AuditEvent.

**Work and deliverable:** Use existing outbox for selected FR-08-03 assignment alerts; define recipients/event meaning and avoid duplicate intake alerts.

**Acceptance (M07-09/AC):** Only an eligible newly assigned staff recipient receives approved minimal context; retries deduplicate; disabled setting preserves in-app assignment functionality.

**Verification/completion evidence:** Assignment/reassignment/no-change/disabled and worker retry tests with controlled inbox.

**Unresolved/conditional gate:** A5-11 assignment alert selection.

### M08 — Limited CMS and publication workflows

**Business objective:** Allow staff to maintain approved content while drafts and private evidence stay private.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M03–M05; A5-04/05 and D-012 selections.

**Required inputs:** S5 §§7.6–7.8,10; S3/S4 CMS recipes; S6 Content.

**Scope and deliverables:** The following 8 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 48–80 baseline active hours; plus 20–36 hours if all conditional branches here are selected.

**Main risks:** Draft leakage, stale public caches, stored XSS, excessive editor scope.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Save/preview/publish/unpublish verified across public route/search contracts; scope remains limited CMS.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m08-01"></a>

#### M08-01 — Implement Article contracts and publication services

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M02-05](#m02-05), [M03-05](#m03-05), [M00-03](#m00-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-04-06, FR-04-10, NFR-011. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Content. **Important Step 6 files/folders:** backend/src/modules/content/models/article.model.ts; backend/src/modules/content/server/; backend/src/modules/content/validation/. **Models/data:** Article; AuditEvent.

**Work and deliverable:** Implement every S5 §7.6 field/index, bounded structured content, workingDraft/current publishedSnapshot and explicit publish/unpublish services.

**Acceptance (M08-01/AC):** Saving draft never changes live content; revision conflict protects edits; published slugs locked except reviewed redirect; renderer rejects backend/scripts/runtime MDX/unapproved HTML.

**Verification/completion evidence:** Schema/index, stored-XSS, permissions, stale publish and unpublish tests.

**Unresolved/conditional gate:** A5-04/U-03 snapshot behavior and editor format approval.

<a id="m08-02"></a>

#### M08-02 — Build article management, editor and private preview

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 12–20 active hours.

**Dependencies:** [M08-01](#m08-01), [M04-04](#m04-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-12, FR-04-06, NFR-002, NFR-011. **Page IDs:** ADM-013, ADM-014, ADM-015, ADM-016.

**Routes:** `/dashboard/content/articles/[articleId]/preview`, `/dashboard/content/articles/[articleId]`, `/dashboard/content/articles/new`, `/dashboard/content/articles`

**Modules:** Content. **Important Step 6 files/folders:** frontend/src/app/(staff)/dashboard/content/articles/; frontend/src/modules/content/components/; frontend/src/modules/content/templates/. **Models/data:** Article; AuditEvent.

**Work and deliverable:** Deliver list/create/edit/protected-preview using approved regions and accessible editor; clearly label save versus publish and warn before discarding unsaved work.

**Acceptance (M08-02/AC):** Preview uses real public rendering with authorization/noindex/private assets; no public preview links; editor can navigate/control all fields by keyboard; clear saved/dirty/conflict state.

**Verification/completion evidence:** Editor component tests, publish/unpublish E2E, unauthorized preview/asset requests, keyboard and narrow-screen review.

<a id="m08-03"></a>

#### M08-03 — Implement testimonial curation and truthful display

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–12 active hours.

**Dependencies:** [M08-01](#m08-01), [M04-02](#m04-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-004, FR-01-11. **Page IDs:** ADM-017, ADM-018.

**Routes:** `/dashboard/content/testimonials/[testimonialId]`, `/dashboard/content/testimonials`

**Modules:** Content. **Important Step 6 files/folders:** backend/src/modules/content/models/testimonial.model.ts; frontend/src/app/(staff)/dashboard/content/testimonials/; frontend/src/modules/content/components/testimonial.tsx. **Models/data:** Testimonial; AuditEvent.

**Work and deliverable:** Implement S5 §7.7 quotation/attribution/private permission evidence and authorized publish/hide; reuse public testimonial component.

**Acceptance (M08-03/AC):** Unverified or fictional testimonials cannot publish; public DTO excludes evidence/private fields; withdrawal removes all eligible displays; no public review submission system.

**Verification/completion evidence:** Permission/projection/publication tests and empty-state UI; source/evidence withdrawal across public slots.

<a id="m08-04"></a>

#### M08-04 — Implement SEO ownership and metadata editor

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M08-01](#m08-01), [M05-01](#m05-01), [M03-02](#m03-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-04-08, NFR-001, NFR-011. **Page IDs:** ADM-019, ADM-020.

**Routes:** `/dashboard/content/seo/[pageId]`, `/dashboard/content/seo`

**Modules:** Content; Discovery. **Important Step 6 files/folders:** backend/src/modules/content/models/seo-override.model.ts; frontend/src/app/(staff)/dashboard/content/seo/; frontend/src/modules/content/components/seo-editor.tsx. **Models/data:** SeoOverride; Article; conditional FaqEntry; AuditEvent.

**Work and deliverable:** Implement S5 §7.8; resolve pageId/contentKey to owning source override or draft/published content metadata; preserve S6 approved route/context strategy.

**Acceptance (M08-04/AC):** Template ID never ambiguously identifies an article instance; Editor cannot index private routes; article SEO draft save is not publication; canonical target allowlisted.

**Verification/completion evidence:** Registered/unknown/reserved keys, cross-owner edits, private-index attempts and metadata/publication tests.

<a id="m08-05"></a>

#### M08-05 — Prepare source FAQ/help and controlled media workflow

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M05-01](#m05-01), [M08-01](#m08-01), [M00-03](#m00-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-004, FR-01-13, NFR-011. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Content. **Important Step 6 files/folders:** backend/src/modules/content/data/; backend/src/modules/content/data/asset-manifest.ts; frontend/public/images/. **Models/data:** Source FAQ/help/asset contracts.

**Work and deliverable:** Maintain short FAQ/help records and safe asset references with rights/alt/dimensions; separate published assets from private evidence/draft media.

**Acceptance (M08-05/AC):** One FAQ source of truth; no duplicate Insights/help body; no arbitrary remote fetch; featured images usable without assuming a general media library.

**Verification/completion evidence:** Reference/slug/image allowlist checks, alt/dimension review and private evidence leak tests.

<a id="m08-06"></a>

#### M08-06 — Implement optional FAQ/help editor

**Phase/status:** Conditional P1 branch; preserve named P2 baseline where stated · **Priority:** Conditional · **Estimate:** 10–18 active hours.

**Dependencies:** [M08-02](#m08-02), [M08-05](#m08-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-13, NFR-011. **Page IDs:** ADM-021, ADM-022.

**Routes:** `/dashboard/content/faqs/[faqId]`, `/dashboard/content/faqs`

**Modules:** Content. **Important Step 6 files/folders:** backend/src/modules/content/models/faq-entry.model.ts; frontend/src/app/(staff)/dashboard/content/faqs/. **Models/data:** FaqEntry; AuditEvent.

**Work and deliverable:** If selected, migrate source FAQ/help into S5 §7.14 with parity verification and one writable master; implement list/editor/publication.

**Acceptance (M08-06/AC):** Short FAQ anchors/help slugs retained; old source master disabled after verified cutover; draft/private/public predicates align; no broad CMS expansion.

**Verification/completion evidence:** Migration parity/rollback, draft/publish/unpublish/search contract and role/keyboard tests.

**Unresolved/conditional gate:** D-012/A5-05 FAQ authoring choice.

<a id="m08-07"></a>

#### M08-07 — Implement optional minimal secure image upload

**Phase/status:** Conditional P1 branch; preserve named P2 baseline where stated · **Priority:** Conditional · **Estimate:** 10–18 active hours.

**Dependencies:** [M08-05](#m08-05), [M03-02](#m03-02), [M00-02](#m00-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-11, NFR-004, NFR-005. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Content; Operations. **Important Step 6 files/folders:** backend/src/modules/content/; selected storage adapter and upload handler. **Models/data:** Asset references only; no media-library collection.

**Work and deliverable:** If selected, add narrow article image upload with size/type/content checks, generated keys, safe served MIME, authorization and scanning/quarantine decision.

**Acceptance (M08-07/AC):** Reject active/unapproved content; private evidence/drafts not public; object access and signed expiry enforced; no public inquiry attachments/general library.

**Verification/completion evidence:** Oversize/MIME-spoof/active-file/unauthorized/quarantine cases; failed upload cleanup and storage backup scope review.

**Unresolved/conditional gate:** D-012 storage/upload/scanning selection.

<a id="m08-08"></a>

#### M08-08 — Verify publication visibility and editorial failure cases

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M08-02](#m08-02), [M08-03](#m08-03), [M08-04](#m08-04), [M08-05](#m08-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. Additional prerequisites when selected: [M08-06](#m08-06), [M08-07](#m08-07).

**Requirements:** NFR-005, NFR-009, NFR-011. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Content; Discovery. **Important Step 6 files/folders:** backend/tests/integration/content.test.ts; frontend/tests/e2e/staff.spec.ts. **Models/data:** Article; Testimonial; SeoOverride; FaqEntry if enabled.

**Work and deliverable:** Verify one eligibility policy for route reads, metadata, related cards and later search/sitemap; register extra tests if optional editor/uploads enabled.

**Acceptance (M08-08/AC):** Draft and withdrawn proof never publicly eligible; stale write fails usefully; no shared draft/staff cache; meaningful missing-content state.

**Verification/completion evidence:** Save-live-edit/unpublish/archive/withdraw tests, DTO checks and no-JS public reading.

### M09 — Complete public website and content population

**Business objective:** Deliver the entire approved public inventory with substantive content and reusable templates.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M05, M06 baseline, M08 baseline; commercial/content approvals.

**Required inputs:** S2 all public P1 routes; S3 all ordered recipes; S4 wireframes; S6 Appendix A/B.

**Scope and deliverables:** The following 10 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 128–220 baseline active hours.

**Main risks:** Content readiness dominates elapsed time; fictional proof, thin cloned pages or unsupported offers.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Every public P1 entry reconciled; all 57 service records reviewed; conditional policy outcomes explicit; no reduced launch subset assumed.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m09-01"></a>

#### M09-01 — Complete homepage and About

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 12–20 active hours.

**Dependencies:** [M05-05](#m05-05), [M06-07](#m06-07), [M08-08](#m08-08). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-001, BR-004, FR-01-02, FR-01-07, FR-01-08. **Page IDs:** PUB-001, PUB-005.

**Routes:** `/`, `/about`

**Modules:** Content; Catalog. **Important Step 6 files/folders:** frontend/src/app/(public)/page.tsx; frontend/src/app/(public)/about/; frontend/src/modules/content/templates/. **Models/data:** Source core copy; published Testimonial/Article; SeoOverride.

**Work and deliverable:** Implement T-HOME exact 11 sections and T-ABOUT with truthful positioning, eight-category discovery, solutions/work/process/content and appropriate CTAs.

**Acceptance (M09-01/AC):** Section order matches S3; missing genuine proof slot omitted gracefully; founder/team claims verified; static composition matches approved calm editorial direction.

**Verification/completion evidence:** Section checklist, evidence audit, link/CTA paths and all-three-theme responsive visual review.

<a id="m09-02"></a>

#### M09-02 — Populate and review Web and Mobile service content

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 14–24 active hours.

**Dependencies:** [M05-04](#m05-04), [M00-03](#m00-03). **Scheduling:** Can interleave with M09-03–06 after shared template approval; separate content records. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-002, BR-005, FR-01-04, FR-04-03. **Page IDs:** PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Catalog; Content. **Important Step 6 files/folders:** backend/src/modules/catalog/data/; frontend/src/modules/catalog/templates/. **Models/data:** Source services/packages.

**Work and deliverable:** Populate every Web/Mobile service and category from the master using distinct fit/scope/process/FAQ; cross-listed Mobile App UI/UX uses its canonical record.

**Acceptance (M09-02/AC):** All IDs/names/prices/units match; no invented deliverables or availability; every assigned service meets S3/S4 blueprint before publication.

**Verification/completion evidence:** Per-record checklist/source diff, rendered long/short-content samples and route/canonical/CTA verification.

<a id="m09-03"></a>

#### M09-03 — Populate and review AI Automation and Digital Marketing content

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 20–34 active hours.

**Dependencies:** [M05-04](#m05-04), [M00-03](#m00-03). **Scheduling:** Independent content records after shared template approval. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-002, BR-005, FR-01-04. **Page IDs:** PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Catalog; Content. **Important Step 6 files/folders:** backend/src/modules/catalog/data/. **Models/data:** Source services/packages.

**Work and deliverable:** Populate all services in these two categories with truthful capability and clear project/recurring/custom charges; distinguish selling AI services from building an ARADUN AI platform.

**Acceptance (M09-03/AC):** Every assigned service has substantive unique content, canonical identity, approved scope/availability and preserved source price.

**Verification/completion evidence:** Source/record checklist; recurring/setup fee cases; rendered service and quote-context review.

<a id="m09-04"></a>

#### M09-04 — Populate and review Cloud and Cybersecurity content

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 20–34 active hours.

**Dependencies:** [M05-04](#m05-04), [M00-03](#m00-03). **Scheduling:** Independent content records after shared template approval. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-001, BR-002, BR-005, FR-01-04. **Page IDs:** PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Catalog; Content. **Important Step 6 files/folders:** backend/src/modules/catalog/data/. **Models/data:** Source services/packages.

**Work and deliverable:** Populate all Cloud/DevOps and Cybersecurity service content, qualification boundaries, client responsibilities and accurate scope.

**Acceptance (M09-04/AC):** No guarantee of security/compliance or unverified certification; every source offer remains planned with correct availability and pricing.

**Verification/completion evidence:** Per-record source/claims review, service variation layout and CTA/FAQ/canonical checks.

<a id="m09-05"></a>

#### M09-05 — Populate and review Design and Video content

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 20–34 active hours.

**Dependencies:** [M05-04](#m05-04), [M00-03](#m00-03). **Scheduling:** Independent content records after shared template approval. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-002, BR-005, FR-01-04. **Page IDs:** PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Catalog; Content. **Important Step 6 files/folders:** backend/src/modules/catalog/data/. **Models/data:** Source services/packages.

**Work and deliverable:** Populate Design/Branding and Video service records including rights/client inputs/revisions only as approved; retain one cross-listed SVC-009.

**Acceptance (M09-05/AC):** All assigned services covered; ambiguous monthly-video period is resolved before offer publication, not guessed; no duplicated page for cross-listing.

**Verification/completion evidence:** Record/source parity, billing-unit/availability gate, long package comparison and canonical tests.

<a id="m09-06"></a>

#### M09-06 — Complete categories, solutions, pricing and related content

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–18 active hours.

**Dependencies:** [M09-02](#m09-02), [M09-03](#m09-03), [M09-04](#m09-04), [M09-05](#m09-05), [M05-05](#m05-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** EXT-004, FR-01-04, FR-01-05, FR-01-06. **Page IDs:** PUB-002, PUB-003, PUB-004, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Catalog; Content. **Important Step 6 files/folders:** backend/src/modules/catalog/data/; frontend/src/modules/catalog/templates/. **Models/data:** Source catalog; published related content.

**Work and deliverable:** Integrate all eight category pages, service directory, five solution pages and pricing; curate simple related references with eligible public content.

**Acceptance (M09-06/AC):** 57 unique services/58 memberships verified end-to-end; all original prices preserved; related links never expose drafts or future pages; selection stays editable.

**Verification/completion evidence:** Whole-catalog crawl, relationship/price parity and all category/solution/pricing comparisons.

<a id="m09-07"></a>

#### M09-07 — Complete work and case-study templates

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M08-08](#m08-08), [M04-03](#m04-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-004, FR-01-10. **Page IDs:** PUB-006, PUB-007.

**Routes:** `/our-work/[slug]`, `/our-work`

**Modules:** Content. **Important Step 6 files/folders:** frontend/src/app/(public)/our-work/; frontend/src/modules/content/templates/work.tsx; frontend/src/modules/content/templates/case-study.tsx. **Models/data:** Source case studies; SeoOverride.

**Work and deliverable:** Implement T-WORK/T-CASE with honest Client Work/Internal Product/Concept–Demo classifications and permitted source-backed proof.

**Acceptance (M09-07/AC):** No fabricated client/outcome; no mandatory made-up portfolio count; substantive published cases follow required regions and CTA context; empty collection is honest.

**Verification/completion evidence:** Rights/classification/content review; gallery/keyboard/narrow layout and unpublished-slug tests.

<a id="m09-08"></a>

#### M09-08 — Complete Insights, article, FAQ and help reading experiences

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M08-08](#m08-08), [M08-05](#m08-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** EXT-004, FR-01-12, FR-01-13, NFR-011. **Page IDs:** PUB-008, PUB-009, PUB-010, PUB-011.

**Routes:** `/faq/[slug]`, `/faq`, `/insights/[slug]`, `/insights`

**Modules:** Content. **Important Step 6 files/folders:** frontend/src/app/(public)/insights/; frontend/src/app/(public)/faq/; frontend/src/modules/content/templates/. **Models/data:** Article; source FAQ/help or selected FaqEntry.

**Work and deliverable:** Integrate T-INSIGHTS/T-ARTICLE/T-FAQ/T-HELP and genuine available records; accessible reading/TOC, related offers and source-correct metadata.

**Acceptance (M09-08/AC):** Only published snapshots/eligible assets visible; no fictional dates/authors; short answers and help articles distinct; missing content safely not-found.

**Verification/completion evidence:** Publication/withdrawal, typography/heading/TOC, pagination and CTA/link verification.

<a id="m09-09"></a>

#### M09-09 — Complete legal/policy pages and conditional trust pages

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M00-03](#m00-03), [M04-03](#m04-03), [M06-07](#m06-07). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-001, BR-006, EXT-006, FR-14-08. **Page IDs:** PUB-017, PUB-018, TRU-01, TRU-02, TRU-03.

**Routes:** `/accessibility`, `/cookies`, `/privacy`, `/security`, `/terms`

**Modules:** Content; Operations. **Important Step 6 files/folders:** backend/src/modules/content/data/; frontend/src/modules/content/templates/policy.tsx; public policy routes. **Models/data:** Source policy records; SeoOverride.

**Work and deliverable:** Implement Privacy/Terms from approved actual practices; decide Cookie Information, Accessibility Statement and Responsible Disclosure activation and accurate contact routes.

**Acceptance (M09-09/AC):** No unsupported compliance claim or invented legal entity; policies readable without sales intrusion; required disclosure information exists even if optional separate page not selected.

**Verification/completion evidence:** Owner/legal-content review as applicable, policy links, heading/reading accessibility, activation/noindex rules and contact tests.

**Unresolved/conditional gate:** D-014/018 and TRU conditional publication choices.

<a id="m09-10"></a>

#### M09-10 — Audit complete public inventory and publication readiness

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M09-01](#m09-01), [M09-06](#m09-06), [M09-07](#m09-07), [M09-08](#m09-08), [M09-09](#m09-09). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-002, BR-004, BR-005, BR-008, NFR-001, NFR-009. **Page IDs:** CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057.

**Routes:** Exact per-page routes in §5; shared route/template families listed in affected paths.

**Modules:** Content; Catalog; Intake. **Important Step 6 files/folders:** frontend/tests/e2e/public.spec.ts; docs/content-publication.md. **Models/data:** All public source records and published projections.

**Work and deliverable:** Reconcile every public page against exact route, S3 ordered regions, S4 design/states, CTA context, evidence and commercial approval.

**Acceptance (M09-10/AC):** All 91 public entries accounted for including conditional decisions; all 57 service pages implemented; no unapproved subset relabeled full Phase 1; unready content blocks its publication gate.

**Verification/completion evidence:** Inventory crawl plus human content/evidence review; report every blocked entry and owner before release.

### M10 — Search, SEO and measurement

**Business objective:** Make approved content discoverable and measure actual conversions without private-data leakage.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M08–M09 and saved intake; consent decision.

**Required inputs:** S5 §10; S6 Discovery/metadata/measurement; S4 §13.

**Scope and deliverables:** The following 4 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 27–46 baseline active hours.

**Main risks:** Stale publication index, indexable private utilities, PII in analytics or false conversion counts.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Search/sitemap/metadata agree with publication; GA4/Search Console configured and verified before claimed active.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m10-01"></a>

#### M10-01 — Implement bounded public search

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–16 active hours.

**Dependencies:** [M09-08](#m09-08), [M09-06](#m09-06), [M08-04](#m08-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-14, NFR-003, NFR-011. **Page IDs:** PUB-016.

**Routes:** `/search`

**Modules:** Discovery; Catalog; Content. **Important Step 6 files/folders:** backend/src/modules/discovery/; frontend/src/app/(public)/search/. **Models/data:** Published source index; Article; selected FaqEntry.

**Work and deliverable:** Merge allowlisted published services/solutions/articles/FAQ results under S5 bounded query/ranking/pagination; no independent search master or AI search.

**Acceptance (M10-01/AC):** No drafts/private evidence/CRM records; query ≤200 characters with bounded tokens/windows; stable ordering; honest counts; query values not leaked into private analytics.

**Verification/completion evidence:** Published/unpublished/malicious query and capped pagination tests; empty/error states, keyboard and indexed query review.

<a id="m10-02"></a>

#### M10-02 — Complete metadata, canonicals, sitemap, robots and schema

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M10-01](#m10-01), [M08-04](#m08-04), [M09-10](#m09-10). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-04-08, NFR-001, NFR-011. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Discovery; Content. **Important Step 6 files/folders:** frontend/src/app/sitemap.ts; frontend/src/app/robots.ts; metadata composition; backend/src/modules/discovery/. **Models/data:** Current published projections; SeoOverride.

**Work and deliverable:** Use one eligible-content policy for rendering/metadata/search/sitemap; exact source URLs and truthful Organization/Service/Article/Breadcrumb data; maintain redirect registry for approved slug change.

**Acceptance (M10-02/AC):** No private/draft/search/confirmation utility indexing; robots never substitutes auth; public unpublish removed immediately; no fabricated rating markup.

**Verification/completion evidence:** Crawl/canonical/index eligibility matrix, structured-data validity and withdrawal tests; controlled staging noindex versus production behavior.

<a id="m10-03"></a>

#### M10-03 — Configure consent-aware GA4 and saved-conversion events

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M06-07](#m06-07), [M09-10](#m09-10), [M00-03](#m00-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-10-01, FR-10-03, FR-11-02, NFR-007. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Discovery; Intake; Operations. **Important Step 6 files/folders:** Public measurement adapter; backend/src/config//; frontend/tests/e2e/. **Models/data:** No analytics collection.

**Work and deliverable:** Track approved CTA/form/saved-inquiry events distinctly; enable GA4 only under approved environment and consent policy; private routes excluded.

**Acceptance (M10-03/AC):** No email/message/record ID/token sent; thank-you visit alone never conversion; retries do not double-count intended success; denied consent prevents restricted tracking.

**Verification/completion evidence:** Network/event payload inspection, consent changes, direct confirmation/retry tests and controlled GA4 debug verification.

<a id="m10-04"></a>

#### M10-04 — Prepare Search Console verification and SEO operational handoff

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 3–6 active hours.

**Dependencies:** [M10-02](#m10-02), [M00-02](#m00-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** EXT-005, FR-10-02, NFR-001. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations; Discovery. **Important Step 6 files/folders:** docs/runbooks/search-console.md; reviewed domain verification configuration. **Models/data:** None.

**Work and deliverable:** Prepare account/domain verification ownership, sitemap submission and indexing-monitoring checklist; final production verification runs with launch.

**Acceptance (M10-04/AC):** Correct canonical property and verification evidence retained; optional Bing/session tooling not silently added; no ranking guarantee.

**Verification/completion evidence:** Check staging generated artifacts; verify actual Search Console property/sitemap after M14-02 and record status.

### M11 — Dashboard completion and operational readiness

**Business objective:** Complete every staff planning entry and the manual business process around the software.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M07–M08; M10 where search/SEO summaries rely on it.

**Required inputs:** S2 ADM inventory; S3/S4 private regions; S5 §11; S6 Operations.

**Scope and deliverables:** The following 6 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 20–34 baseline active hours; plus 26–44 hours if all conditional branches here are selected.

**Main risks:** Misleading metrics, generic settings scope creep, missing conditional decisions.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; All 27 ADM entries resolved and tested in selected mode; external business templates and operational owners ready.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m11-01"></a>

#### M11-01 — Complete dashboard and content overview summaries

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M07-08](#m07-08), [M08-08](#m08-08), [M04-04](#m04-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-02, FR-10-04, NFR-003, NFR-005. **Page IDs:** ADM-001, ADM-012.

**Routes:** `/dashboard/content`, `/dashboard`

**Modules:** CRM; Content; Operations. **Important Step 6 files/folders:** frontend/src/app/(staff)/dashboard/page.tsx; frontend/src/app/(staff)/dashboard/content/page.tsx. **Models/data:** Scoped Inquiry/Opportunity/Contact/FollowUpTask; Article/Testimonial.

**Work and deliverable:** Implement real permitted overview metrics, due/overdue tasks and content workflow summaries; late milestone completes earlier shell rather than deferring all staff UI.

**Acceptance (M11-01/AC):** Counts use list permissions; inquiries/opportunities/customers distinct; estimated value is not revenue; failed query is not zero; no advanced forecasting/attribution dashboard.

**Verification/completion evidence:** Compare metrics with known scoped fixtures and list queries; slow/failure panels, timezone, responsive and keyboard tests.

<a id="m11-02"></a>

#### M11-02 — Reconcile every dashboard route and operational state

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M11-01](#m11-01), [M07-08](#m07-08), [M08-08](#m08-08), [M10-02](#m10-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. Additional prerequisites when selected: [M11-04](#m11-04), [M11-05](#m11-05), [M11-06](#m11-06).

**Requirements:** FR-09-05, FR-09-07, NFR-002, NFR-005, NFR-014. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** CRM; Content; Identity; Operations. **Important Step 6 files/folders:** All approved dashboard routes; frontend/tests/e2e/staff.spec.ts. **Models/data:** All owned P1 models.

**Work and deliverable:** Audit 27 ADM entries against S3 regions, S4 composition, selected permissions and conditional gates; verify shared filters, loading/empty/error/success/conflict states.

**Acceptance (M11-02/AC):** No broken/disabled future navigation; record IDs/templates align with owners; denied reads/actions independently enforced; selected optional screens receive same checks.

**Verification/completion evidence:** Role-by-route/action matrix, desktop/mobile/zoom navigation and state review with realistic synthetic data.

<a id="m11-03"></a>

#### M11-03 — Prepare proposal/invoice templates and external finance procedure

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M00-03](#m00-03), [M07-05](#m07-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-003, BR-006, FR-07-01, FR-07-02, NFR-012. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations. **Important Step 6 files/folders:** docs/operations/proposal-invoice-templates.md; docs/runbooks/. **Models/data:** External ledger/documents; no baseline finance collection.

**Work and deliverable:** Prepare reusable manual commercial templates with verified entity/contact/currency/scope/fees/payment terms and distinguish expected, invoiced and received records.

**Acceptance (M11-03/AC):** FR-07-01 fulfilled outside app; external ledger process fulfills selected D-007 baseline; won status does not imply paid; no online signing/gateway/invoicing suite.

**Verification/completion evidence:** Owner reviews a synthetic complete proposal/invoice/ledger scenario and correction trail; verify real contact/payment operating readiness separately.

<a id="m11-04"></a>

#### M11-04 — Implement optional staff-access administration screens

**Phase/status:** Conditional P1 branch; preserve named P2 baseline where stated · **Priority:** Conditional · **Estimate:** 8–14 active hours.

**Dependencies:** [M03-04](#m03-04), [M11-01](#m11-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-07, FR-14-04, NFR-005. **Page IDs:** ADM-023, ADM-024.

**Routes:** `/dashboard/settings/access/[userId]`, `/dashboard/settings/access`

**Modules:** Identity; Operations. **Important Step 6 files/folders:** frontend/src/app/(staff)/dashboard/settings/access/; frontend/src/modules/identity/components/. **Models/data:** StaffUser; AuditEvent.

**Work and deliverable:** If selected, expose already-approved provision/revoke/role operations through ADM-023/024 with least privilege and fresh auth.

**Acceptance (M11-04/AC):** No new role builder/team department module; last-admin protection and current-access revocation unchanged; UI preserves provider/local ownership.

**Verification/completion evidence:** Admin versus Sales/Editor negatives, fresh-auth/last-admin/stale edit tests and account detail mobile/keyboard review.

**Unresolved/conditional gate:** A5-14/O-05 dedicated access UI selection.

<a id="m11-05"></a>

#### M11-05 — Implement optional restricted audit viewer

**Phase/status:** Conditional P1 branch; preserve named P2 baseline where stated · **Priority:** Conditional · **Estimate:** 6–10 active hours.

**Dependencies:** [M02-03](#m02-03), [M03-02](#m03-02), [M11-01](#m11-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-09-13, NFR-005. **Page IDs:** ADM-025.

**Routes:** `/dashboard/audit`

**Modules:** Operations. **Important Step 6 files/folders:** frontend/src/app/(staff)/dashboard/audit/; frontend/src/modules/operations/components/. **Models/data:** AuditEvent.

**Work and deliverable:** If selected, provide bounded authorized audit filters/details; mandatory logging already operates without this page.

**Acceptance (M11-05/AC):** No arbitrary export/advanced workflow console; restricted redacted fields; role/target filters cannot reveal inaccessible private values.

**Verification/completion evidence:** Audit-access/filter/pagination and redaction tests; honest empty/loading/failure states.

**Unresolved/conditional gate:** A5-14/O-05 audit-viewer selection.

<a id="m11-06"></a>

#### M11-06 — Implement optional manual payment tracker

**Phase/status:** Conditional P1 branch; preserve named P2 baseline where stated · **Priority:** Conditional · **Estimate:** 12–20 active hours.

**Dependencies:** [M11-03](#m11-03), [M03-02](#m03-02), [M02-05](#m02-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-07-02, NFR-005, NFR-012. **Page IDs:** ADM-027.

**Routes:** `/dashboard/payments`

**Modules:** Operations. **Important Step 6 files/folders:** backend/src/modules/operations/models/manual-payment-record.model.ts; frontend/src/app/(staff)/dashboard/payments/. **Models/data:** ManualPaymentRecord; Contact; Opportunity; AuditEvent.

**Work and deliverable:** If selected, implement S5 §7.15 records of external expected/invoiced/received amounts/references with authorized void/replacement corrections.

**Acceptance (M11-06/AC):** No card/bank secrets/checkout; amounts/currency and evidence source explicit; expected and received not summed as revenue; correction retains audit.

**Verification/completion evidence:** External-reference uniqueness, precise money, finance permission, void/replacement and responsive panel tests.

**Unresolved/conditional gate:** D-007/A5-07 tracker selection.

### M12 — Motion and visual refinement

**Business objective:** Finish the approved editorial experience without slowing or blocking business actions.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M09–M11 for final polish; essential interaction already implemented.

**Required inputs:** S4 §§3–7,12–13; S6 §§8–9 Appendix J.

**Scope and deliverables:** The following 4 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 28–50 baseline active hours.

**Main risks:** Payload regression, conflicting transforms, hidden first content, unavailable layered assets.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Measured route payloads, cleanup and reduced-motion/mobile branches accepted; no decorative exception weakens core UX.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m12-01"></a>

#### M12-01 — Finalize production assets and visual consistency

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M09-10](#m09-10), [M11-02](#m11-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-004, NFR-002, NFR-003. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared presentation; Content. **Important Step 6 files/folders:** frontend/public/brand/; frontend/public/images/; frontend/src/styles/; backend/src/modules/content/data/asset-manifest.ts. **Models/data:** Approved asset references.

**Work and deliverable:** Validate folded-A geometry, chosen header lockup, matching theme variants, optimized hero media and exact tokens/spacing/type across representative templates.

**Acceptance (M12-01/AC):** No invented logo redesign; equal image dimensions prevent jumps; rights/alt/contrast clear; headline and CTA remain visible before JS; only selected theme artwork loads eagerly.

**Verification/completion evidence:** Small-size/logo/transparent-edge review; image/font payload and all-three-theme visual comparisons.

**Unresolved/conditional gate:** U4-01/02/03 final asset/header selection.

<a id="m12-02"></a>

#### M12-02 — Apply selective CSS and Motion interactions

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M12-01](#m12-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-01-01, NFR-002, NFR-003. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Shared presentation; Intake; Catalog. **Important Step 6 files/folders:** frontend/src/styles/motion.css; frontend/src/components/motion/; local feature components. **Models/data:** None.

**Work and deliverable:** Apply S4 timings to selected entrances, quote/menu continuity, bento/process feedback; CSS first, small client islands and deliberate feature loading.

**Acceptance (M12-02/AC):** No per-letter required reveal, forced route wait, full-grid cascade or hidden CTA; input/focus not delayed; CSS/Motion/GSAP never share animated property ownership.

**Verification/completion evidence:** Reduced-motion/no-JS/coarse-pointer tests, theme switch mid-quote, interruption/unmount and route bundle inspection.

<a id="m12-03"></a>

#### M12-03 — Deliver justified isolated GSAP effect or approved static fallback

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–12 active hours.

**Dependencies:** [M12-01](#m12-01), [M12-02](#m12-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** NFR-002, NFR-003. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Content; Shared presentation. **Important Step 6 files/folders:** frontend/src/modules/content/components/home-hero-art.tsx; local motion/home-hero.timeline.ts. **Models/data:** None.

**Work and deliverable:** Assess actual hero layers; add only justified coordinated timeline with scoped dynamic import/cleanup, or record static fallback when layers/value do not justify GSAP.

**Acceptance (M12-03/AC):** No GSAP route payload where unused; compact/reduced mode static; no scroll takeover, persistent loop or layout-affecting tween; theme switch does not replay scene.

**Verification/completion evidence:** Route mount/unmount/breakpoint/hidden-tab tests, traces and bundle delta; owner reviews whether effect earns its cost.

**Unresolved/conditional gate:** U4-03/06 actual layers and measured performance; fallback preserves source-approved selective scope.

<a id="m12-04"></a>

#### M12-04 — Verify cross-template accessibility and performance

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M12-02](#m12-02), [M12-03](#m12-03), [M10-01](#m10-01), [M11-02](#m11-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** NFR-002, NFR-003, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** All presentation owners. **Important Step 6 files/folders:** frontend/tests/e2e/accessibility.spec.ts; frontend/tests/e2e/theme-motion.spec.ts; frontend/tests/performance/. **Models/data:** Realistic synthetic datasets.

**Work and deliverable:** Measure production-build public, form and dashboard routes on representative mobile/desktop; inspect fonts/images/scripts/queries and manually review assistive interactions.

**Acceptance (M12-04/AC):** S4 budgets/targets reported honestly; no hidden content, focus loss, horizontal page overflow or uncontrolled query workload; optional motion reduced before weakening goals.

**Verification/completion evidence:** Recorded repeatable Lighthouse runs/traces, payload reports, keyboard/screen-reader/zoom/touch tests and leak checks.

### M13 — Release qualification

**Business objective:** Demonstrate that the complete selected Phase 1 scope is safe, operable and recoverable.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** All baseline M01–M12 and every selected conditional task.

**Required inputs:** S1 §13; S5 §§13–15; S6 §§18–20.

**Scope and deliverables:** The following 5 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 42–74 baseline active hours.

**Main risks:** Late cross-feature defects, untested restore, missing business facts or false readiness claims.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Evidence dossier and owner UAT pass; blockers closed; production approval remains a separate M14 gate.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m13-01"></a>

#### M13-01 — Run full scope regression and owner acceptance

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–18 active hours.

**Dependencies:** [M09-10](#m09-10), [M10-02](#m10-02), [M10-03](#m10-03), [M10-04](#m10-04), [M11-02](#m11-02), [M11-03](#m11-03), [M12-04](#m12-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. Additional prerequisites when selected: [M06-08](#m06-08), [M06-09](#m06-09), [M07-09](#m07-09), [M08-06](#m08-06), [M08-07](#m08-07), [M11-04](#m11-04), [M11-05](#m11-05), [M11-06](#m11-06).

**Requirements:** BR-008, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** All modules. **Important Step 6 files/folders:** tests/; docs/testing.md; release evidence. **Models/data:** All selected P1 models.

**Work and deliverable:** Reconcile every requirement/page/model/template/component to implemented evidence, run critical flows on the built staging release and obtain owner workflow acceptance.

**Acceptance (M13-01/AC):** No unmapped confirmed P1 requirement or unreviewed conditional entry; selected feature tests pass; source names/prices/phases intact; content/fact blockers cannot be called complete.

**Verification/completion evidence:** Coverage matrix, route crawl, cross-role E2E, lint/types/build and owner UAT recording; failures create scoped repair tasks.

<a id="m13-02"></a>

#### M13-02 — Complete security, privacy and dependency review

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 10–18 active hours.

**Dependencies:** [M13-01](#m13-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-01, FR-14-02, FR-14-03, FR-14-05, FR-14-08, FR-14-11, FR-14-12, FR-14-13, NFR-004, NFR-008. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Identity; Operations; all write owners. **Important Step 6 files/folders:** backend/tests/security/; docs/runbooks/privacy-requests.md; docs/runbooks/secret-rotation.md. **Models/data:** All personal-data stores; audit/outbox/limiter.

**Work and deliverable:** Review active attack surfaces, CSRF/origins/cookies, authorization, injection/XSS/SSRF, secrets, headers, rate limits, provider callbacks/uploads if enabled; approve retention/redaction procedures.

**Acceptance (M13-02/AC):** No unresolved launch-blocking exposure; actual notice/consent matches behavior; deletion accounts for snapshots/notes/queued mail/provider copies; dependency findings triaged rather than hidden by forced upgrades.

**Verification/completion evidence:** Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise.

<a id="m13-03"></a>

#### M13-03 — Exercise backup restore and notification reconciliation

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M13-02](#m13-02), [M02-05](#m02-05), [M06-02](#m06-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-06, NFR-004, NFR-006. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations; Notifications. **Important Step 6 files/folders:** docs/runbooks/backup-restore.md; docs/runbooks/notification-recovery.md. **Models/data:** DB/media/source/config recovery; suppression ledger.

**Work and deliverable:** Configure selected backup capability and perform isolated restore with source/schema compatibility, deletion suppression and safe delivery-state reconciliation before sends resume.

**Acceptance (M13-03/AC):** Measured restore meets approved RPO/RTO or blocks launch; restored deleted records are suppressed; old outbox jobs do not resend blindly; media/source/config recoverable.

**Verification/completion evidence:** Timed isolated restore, compare record/index integrity, apply suppression ledger and simulate uncertain-provider delivery recovery.

**Unresolved/conditional gate:** A5-08/13/D-014 approved recovery targets and suppression-ledger format.

<a id="m13-04"></a>

#### M13-04 — Rehearse deployment, rollback and incident operation

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 8–14 active hours.

**Dependencies:** [M13-03](#m13-03), [M01-04](#m01-04). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-14-07, FR-14-09, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations. **Important Step 6 files/folders:** docs/runbooks/release-rollback.md; docs/runbooks/incident-response.md; selected deploy configuration. **Models/data:** Selected environment configuration.

**Work and deliverable:** Rehearse one release mechanism, explicit index/migration sequence, health/smoke checks, previous compatible artifact rollback, scheduler containment and alert routing.

**Acceptance (M13-04/AC):** App rollback not mistaken for data rollback; no production DB mutations hidden in build hooks; alert owner and incident response known; unsafe release can be contained.

**Verification/completion evidence:** Staging deployment/rollback drill, incompatible migration refusal, forced alert/outage and worker-disable/recovery checks.

<a id="m13-05"></a>

#### M13-05 — Close business/content gates and prepare release dossier

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–10 active hours.

**Dependencies:** [M13-04](#m13-04), [M09-10](#m09-10), [M11-03](#m11-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-001, BR-002, BR-003, BR-004, BR-005, BR-006, BR-008, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations; Content; Catalog. **Important Step 6 files/folders:** docs/content-publication.md; release evidence; docs/runbooks/. **Models/data:** Approved factual content/configuration.

**Work and deliverable:** Record final availability/package units/policies, genuine evidence, mailbox operation, domain/canonical choice, provider readiness and owner acceptance; remove unapproved placeholders.

**Acceptance (M13-05/AC):** All required scope and selected conditional interfaces ready; exceptions cannot silently remove P1 scope; exact release commit/config/index status and remaining nonblocking work recorded.

**Verification/completion evidence:** Owner approval checklist with actual evidence, operational contact test and source/catalog/content final diff.

### M14 — Approved production launch and verification

**Business objective:** Release the qualified version and verify actual operation with rollback available.

**Phase/priority:** P1, required delivery milestone; conditional task branches remain gated.

**Dependencies/prerequisites:** M13 complete; explicit production authorization.

**Required inputs:** S6 §20; selected provider runbooks; release dossier.

**Scope and deliverables:** The following 4 task records define this milestone's complete outputs; earlier working outputs are extended rather than duplicated.

**Effort:** 17–34 baseline active hours.

**Main risks:** DNS/mail regressions, environment mismatch, post-release delivery failures or premature field-performance claims.

**Acceptance, Definition of Done and approval checkpoint:** All task AC/verification and common DoD must pass; Owner explicitly approves deployment; live smoke/integration evidence recorded; stabilisation ownership accepted.

**Testing:** Use each task's named verification plus the milestone regression allocation in §12. Dependency evidence and unresolved gates accompany the review.

<a id="m14-01"></a>

#### M14-01 — Confirm production authorization and preflight

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 3–6 active hours.

**Dependencies:** [M13-05](#m13-05). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-008, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations. **Important Step 6 files/folders:** Release dossier; deployment secret/configuration store. **Models/data:** Selected production environment.

**Work and deliverable:** Present exact release, conditional scope, results, migration plan and rollback for explicit owner production approval; validate secrets/origin/index/backup/job configuration.

**Acceptance (M14-01/AC):** No production deployment without approval; staging credentials/recipients never substituted; required configuration checked without exposing secret values.

**Verification/completion evidence:** Signed-off checklist, config/environment comparison and migration/rollback compatibility review.

**Unresolved/conditional gate:** Explicit owner production-deployment approval.

<a id="m14-02"></a>

#### M14-02 — Deploy approved release and verify domain/mail

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 4–8 active hours.

**Dependencies:** [M14-01](#m14-01). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** BR-003, FR-14-01, FR-14-09, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations; Notifications. **Important Step 6 files/folders:** Selected hosting release configuration; docs/runbooks/release-rollback.md. **Models/data:** Production selected stores.

**Work and deliverable:** Deploy exact approved artifact; perform reviewed migration/index steps; configure verified canonical DNS/TLS/redirects while preserving mail records and verified sender authentication.

**Acceptance (M14-02/AC):** No accidental public noindex/staging access settings; HTTPS/canonical correct; hello@ actual send/receive tested; job trigger authenticated; rollback available.

**Verification/completion evidence:** Live config/TLS/DNS/redirect, known public/private smoke and controlled mail tests; immediate containment if critical failures occur.

<a id="m14-03"></a>

#### M14-03 — Verify production journeys, discovery and observability

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 4–8 active hours.

**Dependencies:** [M14-02](#m14-02). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** FR-10-01, FR-10-02, FR-10-03, FR-11-01, FR-14-07, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Intake; CRM; Content; Discovery; Operations. **Important Step 6 files/folders:** Runbooks and release evidence. **Models/data:** Controlled authorized production verification records.

**Work and deliverable:** Verify contact/quote/manual consultation saving and delivery, staff role access, content visibility, search, consent/GA4 and actual Search Console setup; track test records safely.

**Acceptance (M14-03/AC):** Critical journeys work on actual release; alerts reach owner; no PII analytics; verification records clearly identified and handled under approved cleanup policy; integrations claimed active only with evidence.

**Verification/completion evidence:** Production smoke/controlled messages, provider delivery records, Search Console property/sitemap, analytics payload and alert checks.

<a id="m14-04"></a>

#### M14-04 — Complete initial stabilization and maintenance handoff

**Phase/status:** P1 baseline planning task · **Priority:** Required · **Estimate:** 6–12 active hours.

**Dependencies:** [M14-03](#m14-03). **Scheduling:** Ready after dependencies; coordinate shared files. Blocks dependent tasks until its acceptance is met. 

**Requirements:** NFR-003, NFR-004, NFR-008, NFR-009. **Page IDs:** No extra page; shared capability.

**Routes:** Infrastructure/domain operation; no additional page. Feature callers and exact route allocations are in §5.

**Modules:** Operations; all feature owners. **Important Step 6 files/folders:** docs/runbooks/; README.md; maintenance backlog. **Models/data:** Observed production metrics only.

**Work and deliverable:** Review early error/outbox/access/search behavior, triage regressions and establish dependency/content/backup/access maintenance ownership; collect field metrics when sufficient data exists.

**Acceptance (M14-04/AC):** No claim of p75 field success without enough representative traffic; required regressions repaired before closure; future enhancement backlog does not hide incomplete P1.

**Verification/completion evidence:** Initial monitored operating window selected with owner; incident/delivery/backup observations and final handoff checklist.

## 5. Public, staff and system-page coverage

Every P1 ID appears once below with exact supplied URL, structural home, template and task ownership. Tasks share layouts/data and never imply a separate implementation per service. S6 Appendix A is the preserved structural authority. Route groups are not URL segments; 65 category/service entries share `/services/[slug]`; five solution details share `/solutions/[slug]`. SYS entries are framework states, not `/404` or `/error` business pages.

For every row, acceptance is the named task AC **plus** exact S3 ordered regions, S4 presentation/states, source access and activation rules. Public verification includes correct URL/canonical/section/CTA, responsive/keyboard behavior, publication/empty/error handling and no fictional proof; staff verification includes data/operation permission tests and valid empty/loading/error/success/conflict/expired-session states. M09-10 and M11-02 audit the respective entire inventories; M13-01 is the final coverage gate.

### Public entries

| Page ID / name | Exact URL / source phase | Route file / shell | Template | Owner / data | Tasks and verification |
| --- | --- | --- | --- | --- | --- |
| PUB-001 — Home | `/`; P1 / A | `frontend/src/app/(public)/page.tsx`; PUBLIC | T-HOME → `frontend/src/modules/content/templates/home.tsx` | Presentation / Content; Source core/policy data + seoOverrides; published slots as needed | [M09-01](#m09-01); AC + §6 contract |
| PUB-002 — Services | `/services`; P1 / A | `frontend/src/app/(public)/services/page.tsx`; PUBLIC | T-OV-S → `frontend/src/modules/catalog/templates/services-overview.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06); AC + §6 contract |
| PUB-003 — Solutions | `/solutions`; P1 / A | `frontend/src/app/(public)/solutions/page.tsx`; PUBLIC | T-OV-SOL → `frontend/src/modules/catalog/templates/solutions-overview.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-05](#m05-05), [M09-06](#m09-06); AC + §6 contract |
| PUB-004 — Pricing & Packages | `/pricing`; P1 / A | `frontend/src/app/(public)/pricing/page.tsx`; PUBLIC | T-PRICING → `frontend/src/modules/catalog/templates/pricing.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-05](#m05-05), [M09-06](#m09-06); AC + §6 contract |
| PUB-005 — About ARADUN | `/about`; P1 / A | `frontend/src/app/(public)/about/page.tsx`; PUBLIC | T-ABOUT → `frontend/src/modules/content/templates/about.tsx` | Presentation / Content; Source core/policy data + seoOverrides; published slots as needed | [M09-01](#m09-01); AC + §6 contract |
| PUB-006 — Our Work | `/our-work`; P1 / A | `frontend/src/app/(public)/our-work/page.tsx`; PUBLIC | T-WORK → `frontend/src/modules/content/templates/work.tsx` | Content; Source case studies + seoOverrides | [M09-07](#m09-07); AC + §6 contract |
| PUB-007 — Case Study / Project Detail | `/our-work/[slug]`; P1 / A | `frontend/src/app/(public)/our-work/[slug]/page.tsx`; PUBLIC | T-CASE → `frontend/src/modules/content/templates/case-study.tsx` | Content; Source case studies + seoOverrides | [M09-07](#m09-07); AC + §6 contract |
| PUB-008 — Insights & Resources | `/insights`; P1 / A | `frontend/src/app/(public)/insights/page.tsx`; PUBLIC | T-INSIGHTS → `frontend/src/modules/content/templates/insights.tsx` | Content; articles + source taxonomies | [M09-08](#m09-08); AC + §6 contract |
| PUB-009 — Article / Resource Detail | `/insights/[slug]`; P1 / A | `frontend/src/app/(public)/insights/[slug]/page.tsx`; PUBLIC | T-ARTICLE → `frontend/src/modules/content/templates/article.tsx` | Content; articles + source taxonomies | [M09-08](#m09-08); AC + §6 contract |
| PUB-010 — FAQs & Help | `/faq`; P1 / A | `frontend/src/app/(public)/faq/page.tsx`; PUBLIC | T-FAQ → `frontend/src/modules/content/templates/faq.tsx` | Content / Discovery; Source FAQ/help; faqEntries conditional | [M09-08](#m09-08); AC + §6 contract |
| PUB-011 — Detailed Help Article | `/faq/[slug]`; P1 / A | `frontend/src/app/(public)/faq/[slug]/page.tsx`; PUBLIC | T-HELP → `frontend/src/modules/content/templates/help-article.tsx` | Content / Discovery; Source FAQ/help; faqEntries conditional | [M09-08](#m09-08); AC + §6 contract |
| PUB-012 — Contact | `/contact`; P1 / A | `frontend/src/app/(public)/contact/page.tsx`; PUBLIC | T-CONTACT → `frontend/src/modules/intake/templates/contact.tsx` | Intake; inquiries/outboxEvents/rateLimitBuckets/auditEvents | [M06-04](#m06-04); AC + §6 contract |
| PUB-013 — Get a Quote | `/get-a-quote`; P1 / A | `frontend/src/app/(public)/get-a-quote/page.tsx`; PUBLIC | T-QUOTE → `frontend/src/modules/intake/templates/quote.tsx` | Intake; inquiries/outboxEvents/rateLimitBuckets/auditEvents | [M06-05](#m06-05); AC + §6 contract |
| PUB-014 — Consultation | `/consultation`; P1 / A | `frontend/src/app/(public)/consultation/page.tsx`; PUBLIC | T-CONSULT → `frontend/src/modules/intake/templates/consultation.tsx` | Intake; inquiries/outboxEvents/rateLimitBuckets/auditEvents | [M06-04](#m06-04), [M06-09](#m06-09); AC + §6 contract |
| PUB-015 — Inquiry Confirmation | `/thank-you`; P1 / A | `frontend/src/app/(public)/thank-you/page.tsx`; PUBLIC | T-CONFIRM → `frontend/src/modules/intake/templates/confirmation.tsx` | Intake; inquiries/outboxEvents/rateLimitBuckets/auditEvents | [M06-06](#m06-06); AC + §6 contract |
| PUB-016 — Search Results | `/search`; P1 / A | `frontend/src/app/(public)/search/page.tsx`; PUBLIC | T-SEARCH → `frontend/src/modules/discovery/templates/search.tsx` | Discovery; Published source index + articles; conditional faqEntries | [M10-01](#m10-01); AC + §6 contract |
| PUB-017 — Privacy Policy | `/privacy`; P1 / A | `frontend/src/app/(public)/privacy/page.tsx`; PUBLIC | T-POLICY → `frontend/src/modules/content/templates/policy.tsx` | Presentation / Content; Source core/policy data + seoOverrides; published slots as needed | [M09-09](#m09-09); AC + §6 contract |
| PUB-018 — Website Terms | `/terms`; P1 / A | `frontend/src/app/(public)/terms/page.tsx`; PUBLIC | T-POLICY → `frontend/src/modules/content/templates/policy.tsx` | Presentation / Content; Source core/policy data + seoOverrides; published slots as needed | [M09-09](#m09-09); AC + §6 contract |
| CAT-01 — Web & Software Development | `/services/web-software-development`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-CATEGORY → `frontend/src/modules/catalog/templates/category.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10); AC + §6 contract |
| CAT-02 — Mobile App Development | `/services/mobile-app-development`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-CATEGORY → `frontend/src/modules/catalog/templates/category.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10); AC + §6 contract |
| CAT-03 — AI Automation & CRM | `/services/ai-automation-crm`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-CATEGORY → `frontend/src/modules/catalog/templates/category.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10); AC + §6 contract |
| CAT-04 — Digital Marketing | `/services/digital-marketing`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-CATEGORY → `frontend/src/modules/catalog/templates/category.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10); AC + §6 contract |
| CAT-05 — Cloud & DevOps | `/services/cloud-devops`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-CATEGORY → `frontend/src/modules/catalog/templates/category.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10); AC + §6 contract |
| CAT-06 — Cybersecurity | `/services/cybersecurity`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-CATEGORY → `frontend/src/modules/catalog/templates/category.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10); AC + §6 contract |
| CAT-07 — UI/UX, Graphic Design & Branding | `/services/design-branding`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-CATEGORY → `frontend/src/modules/catalog/templates/category.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10); AC + §6 contract |
| CAT-08 — Video Editing & Production | `/services/video-editing-production`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-CATEGORY → `frontend/src/modules/catalog/templates/category.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10); AC + §6 contract |
| PUB-S001 — Business Website Development | `/services/business-website-development`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S002 — E-commerce Website Development | `/services/ecommerce-website-development`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S003 — Custom Web Application | `/services/custom-web-application`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S004 — Website Redesign | `/services/website-redesign`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S005 — Website Maintenance | `/services/website-maintenance`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S006 — Business Mobile App | `/services/business-mobile-app`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S007 — E-commerce Mobile App | `/services/ecommerce-mobile-app`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S008 — Custom Mobile App | `/services/custom-mobile-app`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S009 — Mobile App UI/UX Design | `/services/mobile-app-ui-ux-design`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S010 — Mobile App Maintenance | `/services/mobile-app-maintenance`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10); AC + §6 contract |
| PUB-S011 — Workflow Automation | `/services/workflow-automation`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S012 — CRM Setup & Customization | `/services/crm-setup-customization`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S013 — Lead Follow-up Automation | `/services/lead-follow-up-automation`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S014 — AI Chatbot | `/services/ai-chatbot`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S015 — AI Integrations | `/services/ai-integrations`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S016 — AI Voice Agent | `/services/ai-voice-agent`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S017 — Automation Maintenance | `/services/automation-maintenance`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S018 — SEO Services | `/services/seo-services`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S019 — Google Ads Management | `/services/google-ads-management`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S020 — Social Media Management | `/services/social-media-management`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S021 — Meta Ads Management | `/services/meta-ads-management`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S022 — Content Marketing | `/services/content-marketing`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S023 — Email Marketing | `/services/email-marketing`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S024 — Local SEO / Google Business Profile | `/services/local-seo-google-business-profile`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S025 — Conversion Rate Optimization & Analytics | `/services/conversion-rate-optimization-analytics`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S026 — Digital Marketing Consulting | `/services/digital-marketing-consulting`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10); AC + §6 contract |
| PUB-S027 — Cloud Infrastructure Setup | `/services/cloud-infrastructure-setup`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S028 — Application Deployment | `/services/application-deployment`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S029 — CI/CD Pipeline Setup | `/services/ci-cd-pipeline-setup`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S030 — Docker Containerization | `/services/docker-containerization`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S031 — Infrastructure as Code | `/services/infrastructure-as-code`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S032 — Monitoring & Observability | `/services/monitoring-observability`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S033 — Cloud Security & Backup | `/services/cloud-security-backup`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S034 — Managed Cloud Services | `/services/managed-cloud-services`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S035 — Web Application Security Assessment | `/services/web-application-security-assessment`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S036 — Vulnerability Assessment / Penetration Testing | `/services/vulnerability-assessment-penetration-testing`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S037 — Cloud Security Assessment | `/services/cloud-security-assessment`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S038 — Security Hardening | `/services/security-hardening`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S039 — Identity & Access / Email Security | `/services/identity-access-email-security`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S040 — Security Awareness Training | `/services/security-awareness-training`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S041 — Compliance Readiness | `/services/compliance-readiness`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S042 — Managed Security Services | `/services/managed-security-services`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10); AC + §6 contract |
| PUB-S043 — Website UI/UX Design | `/services/website-ui-ux-design`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S044 — SaaS Dashboard UI/UX | `/services/saas-dashboard-ui-ux`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S045 — Logo & Brand Identity | `/services/logo-brand-identity`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S046 — Graphic Design | `/services/graphic-design`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S047 — Landing Page Design | `/services/landing-page-design`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S048 — UX Audit | `/services/ux-audit`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S049 — Monthly Design Support | `/services/monthly-design-support`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S050 — Short-form Video Editing | `/services/short-form-video-editing`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S051 — YouTube Video Editing | `/services/youtube-video-editing`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S052 — Promotional / Ad Video | `/services/promotional-ad-video`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S053 — Corporate Video Production | `/services/corporate-video-production`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S054 — Motion Graphics | `/services/motion-graphics`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S055 — Podcast Editing | `/services/podcast-editing`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S056 — Captions / Subtitles | `/services/captions-subtitles`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| PUB-S057 — Monthly Video Editing | `/services/monthly-video-editing`; P1 / A | `frontend/src/app/(public)/services/[slug]/page.tsx`; PUBLIC | T-SERVICE → `frontend/src/modules/catalog/templates/service.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10); AC + §6 contract |
| SOL-01 — Digital Presence | `/solutions/digital-presence`; P1 / A | `frontend/src/app/(public)/solutions/[slug]/page.tsx`; PUBLIC | T-SOLUTION → `frontend/src/modules/catalog/templates/solution.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-05](#m05-05), [M09-06](#m09-06); AC + §6 contract |
| SOL-02 — Business Automation | `/solutions/business-automation`; P1 / A | `frontend/src/app/(public)/solutions/[slug]/page.tsx`; PUBLIC | T-SOLUTION → `frontend/src/modules/catalog/templates/solution.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-05](#m05-05), [M09-06](#m09-06); AC + §6 contract |
| SOL-03 — Business Growth | `/solutions/business-growth`; P1 / A | `frontend/src/app/(public)/solutions/[slug]/page.tsx`; PUBLIC | T-SOLUTION → `frontend/src/modules/catalog/templates/solution.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-05](#m05-05), [M09-06](#m09-06); AC + §6 contract |
| SOL-04 — Cloud & Technology | `/solutions/cloud-technology`; P1 / A | `frontend/src/app/(public)/solutions/[slug]/page.tsx`; PUBLIC | T-SOLUTION → `frontend/src/modules/catalog/templates/solution.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-05](#m05-05), [M09-06](#m09-06); AC + §6 contract |
| SOL-05 — Complete Digital Business | `/solutions/complete-digital-business`; P1 / A | `frontend/src/app/(public)/solutions/[slug]/page.tsx`; PUBLIC | T-SOLUTION → `frontend/src/modules/catalog/templates/solution.tsx` | Catalog / Content; Source catalog + seoOverrides; no P1 catalog collection | [M05-05](#m05-05), [M09-06](#m09-06); AC + §6 contract |
| TRU-01 — Cookie Information | `/cookies`; P1 conditional / C | `frontend/src/app/(public)/cookies/page.tsx`; PUBLIC | T-POLICY → `frontend/src/modules/content/templates/policy.tsx` | Presentation / Content; Source core/policy data + seoOverrides; published slots as needed | [M09-09](#m09-09); AC + §6 contract |
| TRU-02 — Accessibility Statement | `/accessibility`; P1 conditional / C | `frontend/src/app/(public)/accessibility/page.tsx`; PUBLIC | T-POLICY → `frontend/src/modules/content/templates/policy.tsx` | Presentation / Content; Source core/policy data + seoOverrides; published slots as needed | [M09-09](#m09-09); AC + §6 contract |
| TRU-03 — Responsible Disclosure | `/security`; P1 conditional / C | `frontend/src/app/(public)/security/page.tsx`; PUBLIC | T-POLICY → `frontend/src/modules/content/templates/policy.tsx` | Presentation / Content; Source core/policy data + seoOverrides; published slots as needed | [M09-09](#m09-09); AC + §6 contract |

### Staff authentication and dashboard entries

| Page ID / name | Exact URL / source phase | Route file / shell | Template | Owner / data | Tasks and verification |
| --- | --- | --- | --- | --- | --- |
| STA-001 — Staff Sign In | `/staff/login`; P1 / B | `frontend/src/app/(auth)/staff/login/page.tsx`; AUTH | T-AUTH → `frontend/src/modules/identity/templates/auth.tsx` | Identity; staffUsers + chosen provider/session adapter | [M03-01](#m03-01), [M04-04](#m04-04); AC + §6 contract |
| STA-002 — Staff Access Recovery | `/staff/recover`; P1 provider/policy conditional / C | `frontend/src/app/(auth)/staff/recover/page.tsx`; AUTH | T-AUTH → `frontend/src/modules/identity/templates/auth.tsx` | Identity; staffUsers + chosen provider/session adapter | [M03-03](#m03-03), [M04-04](#m04-04); AC + §6 contract |
| STA-003 — Staff Recovery Completion | `/staff/reset`; P1 provider/policy conditional / C | `frontend/src/app/(auth)/staff/reset/page.tsx`; AUTH | T-AUTH → `frontend/src/modules/identity/templates/auth.tsx` | Identity; staffUsers + chosen provider/session adapter | [M03-03](#m03-03), [M04-04](#m04-04); AC + §6 contract |
| STA-004 — Staff Verification / MFA | `/staff/verify`; P1 provider/policy conditional / C | `frontend/src/app/(auth)/staff/verify/page.tsx`; AUTH | T-AUTH → `frontend/src/modules/identity/templates/auth.tsx` | Identity; staffUsers + chosen provider/session adapter | [M03-03](#m03-03), [M04-04](#m04-04); AC + §6 contract |
| ADM-001 — Dashboard Overview | `/dashboard`; P1 / B | `frontend/src/app/(staff)/dashboard/page.tsx`; STAFF | T-DASH → `frontend/src/modules/crm/templates/dashboard.tsx` | CRM / Operations; Scoped aggregates over existing CRM records | [M11-01](#m11-01); AC + §6 contract |
| ADM-002 — Leads & Inquiries | `/dashboard/leads`; P1 / B | `frontend/src/app/(staff)/dashboard/leads/page.tsx`; STAFF | T-LIST → `frontend/src/components/templates/record-list.tsx` | Intake / CRM; inquiries + scoped linked activities/contacts/opportunities/tasks | [M06-06](#m06-06), [M07-02](#m07-02); AC + §6 contract |
| ADM-003 — Lead Detail | `/dashboard/leads/[leadId]`; P1 / B | `frontend/src/app/(staff)/dashboard/leads/[leadId]/page.tsx`; STAFF | T-DETAIL → `frontend/src/components/templates/record-detail.tsx` | Intake / CRM; inquiries + scoped linked activities/contacts/opportunities/tasks | [M06-06](#m06-06), [M07-02](#m07-02); AC + §6 contract |
| ADM-004 — Contacts | `/dashboard/contacts`; P1 / B | `frontend/src/app/(staff)/dashboard/contacts/page.tsx`; STAFF | T-LIST → `frontend/src/components/templates/record-list.tsx` | CRM; contacts + linked record queries | [M07-01](#m07-01); AC + §6 contract |
| ADM-005 — Contact Detail | `/dashboard/contacts/[contactId]`; P1 / B | `frontend/src/app/(staff)/dashboard/contacts/[contactId]/page.tsx`; STAFF | T-DETAIL → `frontend/src/components/templates/record-detail.tsx` | CRM; contacts + linked record queries | [M07-01](#m07-01); AC + §6 contract |
| ADM-006 — Sales Pipeline | `/dashboard/opportunities`; P1 / B | `frontend/src/app/(staff)/dashboard/opportunities/page.tsx`; STAFF | T-LIST → `frontend/src/components/templates/record-list.tsx` | CRM; opportunities/activities/tasks/auditEvents | [M07-03](#m07-03); AC + §6 contract |
| ADM-007 — Opportunity Detail | `/dashboard/opportunities/[opportunityId]`; P1 / B | `frontend/src/app/(staff)/dashboard/opportunities/[opportunityId]/page.tsx`; STAFF | T-DETAIL → `frontend/src/components/templates/record-detail.tsx` | CRM; opportunities/activities/tasks/auditEvents | [M07-03](#m07-03); AC + §6 contract |
| ADM-008 — Follow-up Tasks | `/dashboard/tasks`; P1 / B | `frontend/src/app/(staff)/dashboard/tasks/page.tsx`; STAFF | T-LIST → `frontend/src/components/templates/record-list.tsx` | CRM; tasks/activities/auditEvents | [M07-04](#m07-04); AC + §6 contract |
| ADM-009 — Task Detail | `/dashboard/tasks/[taskId]`; P1 / B | `frontend/src/app/(staff)/dashboard/tasks/[taskId]/page.tsx`; STAFF | T-DETAIL → `frontend/src/components/templates/record-detail.tsx` | CRM; tasks/activities/auditEvents | [M07-04](#m07-04); AC + §6 contract |
| ADM-010 — Customers | `/dashboard/customers`; P1 / B | `frontend/src/app/(staff)/dashboard/customers/page.tsx`; STAFF | T-LIST → `frontend/src/components/templates/record-list.tsx` | CRM; contacts + linked record queries | [M07-05](#m07-05); AC + §6 contract |
| ADM-011 — Customer Detail | `/dashboard/customers/[customerId]`; P1 / B | `frontend/src/app/(staff)/dashboard/customers/[customerId]/page.tsx`; STAFF | T-DETAIL → `frontend/src/components/templates/record-detail.tsx` | CRM; contacts + linked record queries | [M07-05](#m07-05); AC + §6 contract |
| ADM-012 — Content Overview | `/dashboard/content`; P1 / B | `frontend/src/app/(staff)/dashboard/content/page.tsx`; STAFF + CONTENT | T-CONTENT → `frontend/src/modules/content/templates/content-overview.tsx` | Content; Permission-scoped counts over articles/testimonials/metadata | [M11-01](#m11-01); AC + §6 contract |
| ADM-013 — Articles & Resources | `/dashboard/content/articles`; P1 / B | `frontend/src/app/(staff)/dashboard/content/articles/page.tsx`; STAFF + CONTENT | T-LIST → `frontend/src/components/templates/record-list.tsx` | Content; articles/auditEvents | [M08-02](#m08-02); AC + §6 contract |
| ADM-014 — Create Article | `/dashboard/content/articles/new`; P1 / B | `frontend/src/app/(staff)/dashboard/content/articles/new/page.tsx`; STAFF + CONTENT | T-EDITOR → `frontend/src/modules/content/templates/article-editor.tsx` | Content; articles/auditEvents | [M08-02](#m08-02); AC + §6 contract |
| ADM-015 — Article Editor | `/dashboard/content/articles/[articleId]`; P1 / B | `frontend/src/app/(staff)/dashboard/content/articles/[articleId]/page.tsx`; STAFF + CONTENT | T-EDITOR → `frontend/src/modules/content/templates/article-editor.tsx` | Content; articles/auditEvents | [M08-02](#m08-02); AC + §6 contract |
| ADM-016 — Article Preview | `/dashboard/content/articles/[articleId]/preview`; P1 / B | `frontend/src/app/(staff)/dashboard/content/articles/[articleId]/preview/page.tsx`; STAFF + CONTENT | T-PREVIEW → `frontend/src/modules/content/templates/private-preview.tsx` | Content; articles/auditEvents | [M08-02](#m08-02); AC + §6 contract |
| ADM-017 — Testimonials & Reviews | `/dashboard/content/testimonials`; P1 / B | `frontend/src/app/(staff)/dashboard/content/testimonials/page.tsx`; STAFF + CONTENT | T-LIST → `frontend/src/components/templates/record-list.tsx` | Content; testimonials/auditEvents | [M08-03](#m08-03); AC + §6 contract |
| ADM-018 — Testimonial Editor | `/dashboard/content/testimonials/[testimonialId]`; P1 / B | `frontend/src/app/(staff)/dashboard/content/testimonials/[testimonialId]/page.tsx`; STAFF + CONTENT | T-TESTIMONIAL → `frontend/src/modules/content/templates/testimonial-editor.tsx` | Content; testimonials/auditEvents | [M08-03](#m08-03); AC + §6 contract |
| ADM-019 — SEO Metadata | `/dashboard/content/seo`; P1 / B | `frontend/src/app/(staff)/dashboard/content/seo/page.tsx`; STAFF + CONTENT | T-LIST → `frontend/src/components/templates/record-list.tsx` | Content / Discovery; seoOverrides or metadata in owning article/FAQ snapshot | [M08-04](#m08-04); AC + §6 contract |
| ADM-020 — SEO Metadata Editor | `/dashboard/content/seo/[pageId]`; P1 / B | `frontend/src/app/(staff)/dashboard/content/seo/[pageId]/page.tsx`; STAFF + CONTENT | T-SEOEDIT → `frontend/src/modules/content/templates/seo-editor.tsx` | Content / Discovery; seoOverrides or metadata in owning article/FAQ snapshot | [M08-04](#m08-04); AC + §6 contract |
| ADM-021 — FAQs & Help Management | `/dashboard/content/faqs`; P1 conditional / C | `frontend/src/app/(staff)/dashboard/content/faqs/page.tsx`; STAFF + CONTENT | T-LIST → `frontend/src/components/templates/record-list.tsx` | Content conditional; faqEntries only if selected | [M08-06](#m08-06); AC + §6 contract |
| ADM-022 — FAQ / Help Editor | `/dashboard/content/faqs/[faqId]`; P1 conditional / C | `frontend/src/app/(staff)/dashboard/content/faqs/[faqId]/page.tsx`; STAFF + CONTENT | T-FAQEDIT → `frontend/src/modules/content/templates/faq-editor.tsx` | Content conditional; faqEntries only if selected | [M08-06](#m08-06); AC + §6 contract |
| ADM-023 — Staff Access Administration | `/dashboard/settings/access`; P1 conditional / C | `frontend/src/app/(staff)/dashboard/settings/access/page.tsx`; STAFF | T-LIST → `frontend/src/components/templates/record-list.tsx` | Identity conditional UI; staffUsers/provider/auditEvents | [M11-04](#m11-04); AC + §6 contract |
| ADM-024 — Staff Access Detail | `/dashboard/settings/access/[userId]`; P1 conditional / C | `frontend/src/app/(staff)/dashboard/settings/access/[userId]/page.tsx`; STAFF | T-ACCESS → `frontend/src/modules/identity/templates/access-detail.tsx` | Identity conditional UI; staffUsers/provider/auditEvents | [M11-04](#m11-04); AC + §6 contract |
| ADM-025 — Audit Log Viewer | `/dashboard/audit`; P1 conditional / C | `frontend/src/app/(staff)/dashboard/audit/page.tsx`; STAFF | T-AUDIT → `frontend/src/modules/operations/templates/audit.tsx` | Operations conditional UI; auditEvents | [M11-05](#m11-05); AC + §6 contract |
| ADM-026 — My Account & Security | `/dashboard/account`; P1 / B | `frontend/src/app/(staff)/dashboard/account/page.tsx`; STAFF | T-ACCOUNT → `frontend/src/modules/identity/templates/account.tsx` | Identity; staffUsers + chosen provider/session adapter | [M03-03](#m03-03), [M04-04](#m04-04); AC + §6 contract |
| ADM-027 — Manual Payment Tracker | `/dashboard/payments`; P1 conditional / C | `frontend/src/app/(staff)/dashboard/payments/page.tsx`; STAFF | T-PAYMENTS → `frontend/src/modules/operations/templates/manual-payments.tsx` | Finance conditional; paymentRecords only if D-007 selected | [M11-06](#m11-06); AC + §6 contract |

### Shared system states

| Page ID / name | Exact URL / source phase | Route file / shell | Template | Owner / data | Tasks and verification |
| --- | --- | --- | --- | --- | --- |
| SYS-01 — Page Not Found | `Requested nonexistent URL; no dedicated /404 route`; P1 / A | `frontend/src/app/not-found.tsx`; SYSTEM | T-STATE → `frontend/src/components/templates/system-state.tsx` | Presentation / Operations; No dedicated collection; redacted monitoring for errors | [M04-05](#m04-05); AC + §6 contract |
| SYS-02 — Recoverable Error | `Affected route; no dedicated /error route`; P1 / A | `frontend/src/app/error.tsx + frontend/src/app/global-error.tsx`; SYSTEM | T-STATE → `frontend/src/components/templates/system-state.tsx` | Presentation / Operations; No dedicated collection; redacted monitoring for errors | [M04-05](#m04-05); AC + §6 contract |

## 6. Per-page section and dashboard interaction contracts

The following compact records carry the exact ordered regions and page-specific content/operations from S6 Appendix B (which preserves S3/S4). They are binding acceptance inputs, not newly invented copy. Each row must be exercised through its §5 tasks. Private data requirements come from §5 models and S5 DTO/schema contracts. User actions below require current actor/record authorization; public actions never grant staff access.

Shared state contract for every applicable page: loading preserves permitted context without flashing inaccessible data; empty is truthful and distinct from failure/no-match; errors are actionable and redacted; denied/expired states expose no private existence; stale edits preserve input and offer explicit recovery; successful mutation confirms actual saved state. Mobile uses the source reading order, stacked record panels and labeled tables/local horizontal scroll where necessary; no important label/cost/action is removed. Keyboard/zoom/touch work without animation. These shared behaviors are tested in feature tasks and again in M11-02/M12-04, not treated as optional decoration.

### Public page content and actions

| Page / tasks | Required ordered regions | Page-specific content / user actions |
| --- | --- | --- |
| PUB-001; [M09-01](#m09-01) | 1. Hero and value proposition → 2. Eight service categories → 3. Five business solutions → 4. Selected work and case studies → 5. Why work with ARADUN → 6. How we work → 7. Starting prices and engagement options → 8. Client feedback → 9. Insights and resources → 10. Frequently asked questions → 11. Final project invitation. | Eight core sections plus three evidence-dependent sections (4, 8, 9): published page may show 8–11. Industry relevance belongs within solution/audience content; technology evidence belongs within capabilities/work, not separate long homepage walls. Preserve all planned sections even when evidence display is deferred. |
| PUB-002; [M05-03](#m05-03), [M09-06](#m09-06) | 1. Hero: Find the right services for your business → 2. Category directory: Explore our expertise → 3. Help choosing: Start with what you want to achieve → 4. Engagement options: Choose the engagement that fits → 5. Buyer questions: Before choosing a service → 6. Closing invitation: Tell us what you need. |  |
| PUB-003; [M05-05](#m05-05), [M09-06](#m09-06) | 1. Hero: Find a solution around your business goals → 2. Five solutions: What would you like to improve? → 3. Selection guide: Choose your starting point → 4. Engagement approach: From your goals to an agreed scope → 5. FAQs: Before choosing a solution → 6. Closing CTA: Let’s identify the right approach. | Selection mapping: professional online presence → SOL-01; repetitive administration → SOL-02; coordinated marketing → SOL-03; deployment/infrastructure improvements → SOL-04; connected needs across business → SOL-05. |
| PUB-004; [M05-05](#m05-05), [M09-06](#m09-06) | 1. Hero: Understand your options before you start → 2. Pricing models: How engagements are priced → 3. Solution pricing: Compare business solutions → 4. Individual services: Need a specific service? → 5. Combined/custom: Build a scope around your needs → 6. Cost/payment expectations: What affects your quote? → 7. Pricing FAQs → 8. Final CTA: Get a quote for your requirements. | Preserve source payment planning guidance: Starter projects 50% deposit/50% before final handoff; Professional 40/30/30 at agreed milestones; Enterprise custom; retainers monthly in advance with cancellation governed by agreement. Retainer source guidance generally 30 days and no unused-hour rollover unless agreed is not a new universal promise. No new refund terms or public checkout. |
| PUB-005; [M09-01](#m09-01) | 1. Introduction: Technology & Digital Solutions for businesses → 2. Purpose and direction → 3. People behind ARADUN → 4. How we work → 5. Evidence of our work → 6. Start a conversation. | No separate founder/team pages. Technology logos describe real use, not partnership. Narrative/public origin wording remains D-001. |
| PUB-006; [M09-07](#m09-07) | 1. Hero: Explore our work → 2. Browse controls → 3. Project collection → 4. Similar project invitation. | Empty collection is honestly explained; no-match filters offer reset. Do not fabricate projects to meet a count. |
| PUB-007; [M09-07](#m09-07) | 1. Project introduction → 2. Problem and constraints → 3. Scope and contribution → 4. Approach and key decisions → 5. Delivered work → 6. Outcomes and evidence → 7. Related services and next step. | Classify Client Work, ARADUN Internal Product or Concept/Demo. Never present concept outcomes as measured client results. |
| PUB-008; [M09-08](#m09-08) | 1. Hero: Practical guidance for your digital decisions → 2. Topic navigation → 3. Article/resource collection → 4. Need practical help?. |  |
| PUB-009; [M09-08](#m09-08) | 1. Article header → 2. Key takeaway and contents → 3. Main article → 4. Practical resource → 5. Related reading and services → 6. Contextual next step. |  |
| PUB-010; [M09-08](#m09-08) | 1. Introduction and search: How can we help? → 2. Question categories → 3. Questions and answers → 4. Still need help?. |  |
| PUB-011; [M09-08](#m09-08) | 1. Question and immediate answer → 2. When this applies → 3. Explanation or steps → 4. Related answers and offers → 5. Further help. |  |
| PUB-012; [M06-04](#m06-04) | 1. Hero: How can we help? → 2. Contact form → 3. Contact details → 4. What happens next. |  |
| PUB-013; [M06-05](#m06-05) | 1. Introduction: Tell us about your project → 2. Progress and form → 3. Contextual guidance → 4. Privacy and assistance. | Step 1: service(s), solution/package or Custom/Not sure. Step 2: required brief description, optional budget/timeline. Step 3: required name/email, optional company/website. Step 4: editable summary, indicative context, applicable privacy acknowledgement and submit. Accept personal/business emails; no account. Preserve selections, edits and safe retries. Optional marketing consent is separate. |
| PUB-014; [M06-04](#m06-04), [M06-09](#m06-09) | 1. Hero: Discuss your goals with ARADUN → 2. What to expect → 3. Request/scheduling area → 4. Preparation and alternatives. | D-003: requested Google Calendar scheduling direction is recorded; documents still use manual P1 requests. Manual preferred time/timezone is pending staff confirmation. Live mode shows provider availability/timezone and confirmed appointment details, with unavailable-slot/loading failure fallback; phase, external-link versus integration, CRM linkage and account capability remain unresolved. Same public route, no invented internal appointment promotion. |
| PUB-015; [M06-06](#m06-06) | 1. Accurate confirmation → 2. What happens next → 3. Useful continuation. | Direct URL visits cannot prove submission or trigger a conversion. Reference alone grants no record access. Notification delay does not require resubmission of an already saved inquiry. |
| PUB-016; [M10-01](#m10-01) | 1. Search controls → 2. Results → 3. Recovery and continuation. |  |
| PUB-017; [M09-09](#m09-09) | 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route. | Body order: responsible business/contact; collected information; purposes; providers/sharing; retention; applicable choices/request process; factual security description; cookies/embeds; updates. Match actual providers and data handling. |
| PUB-018; [M09-09](#m09-09) | 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route. | Body order: operator/scope; acceptable use; content/IP; indicative services/prices; external links; distinction from client agreements; applicable terms; contact/updates. Final wording depends on actual operating entity/policies. |
| CAT-01; [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. | Owners and product teams; Websites and software built around your business needs. Compare business website/e-commerce/custom application and redesign/maintenance; explain content and existing-site inputs. Related solutions: SOL-01, SOL-05. |
| CAT-02; [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. | Founders and product owners; Mobile experiences for your customers and team. Compare business/e-commerce/custom apps and design/development; explain backend and release responsibilities. Related solutions: SOL-05. |
| CAT-03; [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. | Operations and sales leaders; Connect your tools and reduce repetitive work. Compare CRM/workflow/follow-up and chatbot/voice; explain dependencies and human handoff. Related solutions: SOL-02. |
| CAT-04; [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. | Owners and marketers; Connect discovery, engagement, and conversion. Compare organic/paid, management/production; separate ad spend and external costs. Related solutions: SOL-03. |
| CAT-05; [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. | Technical founders and engineers; Improve how your applications are deployed and operated. Compare setup/deployment/ongoing management; clarify ownership, bills and responsibilities. Related solutions: SOL-04. |
| CAT-06; [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. | Technical and risk stakeholders; Understand risks and strengthen your systems. Compare assessment/remediation/ongoing services; explain authorized scope, reporting limits and qualified delivery. Related solutions: SOL-04. |
| CAT-07; [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. | Founders, product owners and marketers; Design clear experiences and consistent brand communication. Compare product design/branding/graphics and design/implementation; explain assets and review. Related solutions: SOL-01, SOL-05. |
| CAT-08; [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) | 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step. | Marketers and creators; Turn your message into effective video content. Compare supplied-footage editing/production, short/long form, motion graphics/captions and recurring work. Related solutions: SOL-03. |
| PUB-S001; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Page structure, content responsibilities, forms, editing and handoff. Distinguishing FAQ: **Who supplies the website content?** Existing indicative USD pricing: **$699+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S045, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S002; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Catalog, checkout, shipping/tax requirements, integrations and store administration. Distinguishing FAQ: **Are payment-provider charges included?** Existing indicative USD pricing: **$999+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S007, PUB-S018, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S003; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Custom**. Specific scope: Users, workflows, roles, integrations, acceptance criteria and discovery. Distinguishing FAQ: **How will you estimate a custom application?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S044, PUB-S015, PUB-S028, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S004; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Existing-site review, content migration, URL continuity and cutover responsibilities. Distinguishing FAQ: **Can existing content and URLs be retained?** Existing indicative USD pricing: **$399+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S048, PUB-S043, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S005; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Covered systems, routine work, request limits and out-of-scope changes. Distinguishing FAQ: **What counts as maintenance versus new development?** Existing indicative USD pricing: **$49 / $99 / $199+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S004, PUB-S032, PUB-S035, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S006; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Business workflows, supported devices, backend dependencies and release responsibilities. Distinguishing FAQ: **Does the app need a separate backend?** Existing indicative USD pricing: **$1,999+ / $4,999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S009, PUB-S003, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S007; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Store integration, catalog, orders, accounts and payment dependencies. Distinguishing FAQ: **Can it connect to our existing store?** Existing indicative USD pricing: **$2,499+ / $5,999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S002, PUB-S009, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S008; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Custom**. Specific scope: Product requirements, device capabilities, integrations and release planning. Distinguishing FAQ: **What information is needed to scope the app?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S009, PUB-S015, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S009; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: User flows, screens, interaction states, prototype and developer handoff. Distinguishing FAQ: **Does the design package include app development?** Existing indicative USD pricing: **$299+ / $899+ (cross-listed under Design)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S006, PUB-S008, PUB-S044, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. Cross-listed in CAT-02 and CAT-07 using this one canonical page; do not create a duplicate UI/UX service route. |
| PUB-S010; [M05-04](#m05-04), [M09-02](#m09-02), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Supported app versions, defects, compatibility work and release assistance. Distinguishing FAQ: **Are new features included?** Existing indicative USD pricing: **$99 / $249 / $499+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S006, PUB-S008, PUB-S032, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S011; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Triggers, actions, connected systems, exceptions and handoff. Distinguishing FAQ: **What happens if an automated step fails?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S012; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Pipelines, fields, migration boundaries, access and user orientation. Distinguishing FAQ: **Can existing customer records be imported?** Existing indicative USD pricing: **$399+ / $1,199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S013; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Follow-up triggers, channels, message approvals, stop conditions and staff handoff. Distinguishing FAQ: **When does automated follow-up stop?** Existing indicative USD pricing: **$349+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S023, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S014; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Approved knowledge, supported tasks, uncertainty, escalation and usage costs. Distinguishing FAQ: **What happens when the chatbot cannot answer?** Existing indicative USD pricing: **$499+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S015, PUB-S011, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S015; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Custom**. Specific scope: Intended AI task, connected systems, data boundaries, evaluation and usage costs. Distinguishing FAQ: **What data will the AI provider receive?** Existing indicative USD pricing: **$799+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S014, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S016; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Custom**. Specific scope: Call purposes, supported interactions, disclosure, escalation and telephony costs. Distinguishing FAQ: **Can calls transfer to a person?** Existing indicative USD pricing: **$799+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S017; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Monitored workflows, failure investigation, dependency changes and update limits. Distinguishing FAQ: **Are new automations included?** Existing indicative USD pricing: **$99 / $249 / $599+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S012, PUB-S015, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S018; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Technical/content priorities, approved implementation scope and reporting. Distinguishing FAQ: **How will progress be measured?** Existing indicative USD pricing: **$299 / $699 per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S024, PUB-S025, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S019; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Account access, campaign scope, tracking, management fee, setup and separate ad spend. Distinguishing FAQ: **How much of the payment goes to advertising?** Existing indicative USD pricing: **$249 / $599 per month (setup and ad spend separate)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S047, PUB-S025, PUB-S052, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S020; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Platforms, content responsibilities, approval and community-management boundaries. Distinguishing FAQ: **Who approves posts before publication?** Existing indicative USD pricing: **$299 / $699 per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S046, PUB-S050, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S021; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Campaign scope, audiences, creative responsibilities, tracking and separate ad spend. Distinguishing FAQ: **Is creative production included?** Existing indicative USD pricing: **$249 / $599 per month (ad spend separate)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S046, PUB-S047, PUB-S052, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S022; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Audience, formats, research, writing, review and distribution boundaries. Distinguishing FAQ: **Which content formats are covered?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S018, PUB-S023, PUB-S020, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S023; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Campaign or workflow scope, subscriber data, templates, testing and platform costs. Distinguishing FAQ: **Do you manage campaigns, automations, or both?** Existing indicative USD pricing: **$249+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S013, PUB-S022, PUB-S012, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S024; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Business/location details, profile work, local content and owner access. Distinguishing FAQ: **Can you help with an existing business profile?** Existing indicative USD pricing: **$199+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S001, PUB-S018, PUB-S022, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S025; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Assessment**. Specific scope: Measurement review, journey friction, hypotheses, recommendations and testing dependencies. Distinguishing FAQ: **Is there enough traffic to run meaningful tests?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S048, PUB-S047, PUB-S019, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S026; [M05-04](#m05-04), [M09-03](#m09-03), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Assessment**. Specific scope: Goals, channel review, priorities, recommendations and engagement format. Distinguishing FAQ: **Does consulting include implementation?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S018, PUB-S019, PUB-S025, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S027; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Environments, access, infrastructure scope, documentation and provider charges. Distinguishing FAQ: **Who owns the cloud account?** Existing indicative USD pricing: **$399+ / $1,299+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S031, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S028; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Application readiness, target environment, configuration, deployment checks and handoff. Distinguishing FAQ: **What access and application files are required?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S029, PUB-S030, PUB-S032, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S029; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Build/test/release stages, permissions, approvals and rollback responsibilities. Distinguishing FAQ: **Which repositories and environments are covered?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S031, PUB-S032, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S030; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Application packaging, configuration, local operation and documentation. Distinguishing FAQ: **Does containerization also include cloud deployment?** Existing indicative USD pricing: **$249+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S029, PUB-S031, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S031; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Managed resources, ownership, state handling and change workflow. Distinguishing FAQ: **Can existing infrastructure be brought under management?** Existing indicative USD pricing: **$399+ / $1,199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S029, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S032; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Logs, metrics, alerts, dashboards and operational ownership. Distinguishing FAQ: **Who responds when an alert fires?** Existing indicative USD pricing: **$249+ / $799+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S033, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S033; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Access, configuration, backup scope, retention decisions and recovery verification. Distinguishing FAQ: **Is restoration testing included in the agreed scope?** Existing indicative USD pricing: **$349+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S032, PUB-S038, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S034; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Managed assets, routine operations, reporting, response arrangements and exclusions. Distinguishing FAQ: **Are cloud-provider bills separate?** Existing indicative USD pricing: **$99 / $299 / $799+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S032, PUB-S037, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S035; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Assessment**. Specific scope: Authorized application boundaries, review approach, findings and remediation options. Distinguishing FAQ: **Does the engagement include fixing findings?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S036, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S036; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Assessment + custom**. Specific scope: Written authorization, targets, testing boundaries, reporting and retest options. Distinguishing FAQ: **What permission is required before testing?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S037; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Assessment**. Specific scope: Accounts/services reviewed, access arrangements, findings and priorities. Distinguishing FAQ: **Which cloud environments are assessed?** Existing indicative USD pricing: **$399+ / $1,299+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S038; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Approved configuration changes, compatibility checks, rollback and handoff. Distinguishing FAQ: **Could changes affect existing applications?** Existing indicative USD pricing: **$249+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S033, PUB-S035, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S039; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Identity/email environment, account controls, policies and rollout boundaries. Distinguishing FAQ: **Which systems and user accounts are included?** Existing indicative USD pricing: **$199+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S040, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S040; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Project**. Specific scope: Audience, topics, delivery format, materials and assessment options. Distinguishing FAQ: **Can training reflect our team’s work?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S039, PUB-S041, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S041; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Assessment + custom**. Specific scope: Selected framework, readiness gaps, evidence preparation and responsibility boundaries. Distinguishing FAQ: **Is this certification or readiness assistance?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S037, PUB-S040, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S042; [M05-04](#m05-04), [M09-04](#m09-04), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Covered systems, monitoring responsibilities, escalation and service-hour boundaries. Distinguishing FAQ: **What response coverage is actually provided?** Existing indicative USD pricing: **$149 / $399 / $999+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S037, PUB-S038, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S043; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Page types, responsive states, prototype and handoff. Distinguishing FAQ: **Does this include a working website?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S001, PUB-S004, PUB-S048, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S044; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Roles, workflows, tables, forms and loading/empty/error states. Distinguishing FAQ: **How are complex user roles represented?** Existing indicative USD pricing: **$499+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S003, PUB-S009, PUB-S048, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S045; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Brief, identity assets, review process, file formats and usage guidance. Distinguishing FAQ: **Which final files will we receive?** Existing indicative USD pricing: **$149+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S046, PUB-S022, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S046; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Asset types, formats, source material, reviews and delivery. Distinguishing FAQ: **Are editable source files included?** Existing indicative USD pricing: **$49+ / $249+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S020, PUB-S021, PUB-S045, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S047; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Campaign goal, content hierarchy, conversion flow and responsive design. Distinguishing FAQ: **Who supplies the copy and implements the page?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S019, PUB-S025, PUB-S022, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S048; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Assessment**. Specific scope: Journeys reviewed, evidence, findings, severity and recommendations. Distinguishing FAQ: **Does the audit include redesign work?** Existing indicative USD pricing: **$199+ / $799+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S044, PUB-S025, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S049; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Request workflow, agreed capacity, priorities, reviews and exclusions. Distinguishing FAQ: **How are simultaneous requests handled?** Existing indicative USD pricing: **$149 / $399 / $899+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S046, PUB-S047, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S050; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Supplied footage, target format, pacing, captions and exports. Distinguishing FAQ: **What footage should we provide?** Existing indicative USD pricing: **$39+ / $199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S020, PUB-S021, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S051; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Source footage, style, audio, graphics and agreed output length. Distinguishing FAQ: **Are thumbnails or publishing included?** Existing indicative USD pricing: **$99+ / $349+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S055, PUB-S054, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S052; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Campaign brief, message, supplied/produced assets, variants and usage rights. Distinguishing FAQ: **Does the quote include filming or only editing?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S021, PUB-S047, PUB-S054, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S053; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Pre-production, filming arrangements, location responsibilities, editing and expenses. Distinguishing FAQ: **Where can production take place?** Existing indicative USD pricing: **$249+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S052, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S054; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Script/storyboard, visual assets, animation scope, reviews and exports. Distinguishing FAQ: **Do we need to supply a storyboard?** Existing indicative USD pricing: **$199+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S052, PUB-S051, PUB-S046, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S055; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Audio/video source, cleanup, episode structure and output formats. Distinguishing FAQ: **Are clips and distribution included?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S050, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S056; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Design/media**. Specific scope: Source language, transcription/translation boundaries, timing, review and format. Distinguishing FAQ: **Is translation included?** Existing indicative USD pricing: **$29+ / $149+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S050, PUB-S051, PUB-S055, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| PUB-S057; [M05-04](#m05-04), [M09-05](#m09-05), [M09-10](#m09-10) | 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements. | Variation: **Ongoing**. Specific scope: Workload, source-footage limits, output formats, priorities and revisions. Distinguishing FAQ: **How many deliverables does the agreed plan cover?** Existing indicative USD pricing: **$199 / $599 / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S050, PUB-S051, PUB-S055, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling. |
| SOL-01; [M05-05](#m05-05), [M09-06](#m09-06) | 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements. | Build a clear, professional digital presence. Audience: new businesses/SMBs. Address missing/outdated websites, unclear messaging, inconsistent presentation and inquiry journeys. Explain potential website design/development, relevant brand assets, content responsibilities and inquiry paths. Process: goals/assets → scope/content → design/build → review → launch/handoff. Evidence: actual website contribution/usability. FAQs: existing branding; who supplies content; hosting and maintenance. Link PUB-S001, PUB-S004, PUB-S043, PUB-S045, PUB-S005. |
| SOL-02; [M05-05](#m05-05), [M09-06](#m09-06) | 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements. | Connect your workflows and reduce repetitive administration. Audience: owners/operations/sales. Address repeated entry, disconnected tools and missed follow-ups. Explain workflow mapping, CRM configuration, integrations, automated steps, exceptions and staff handoff. Process: map → rules/responsibilities → configure/connect → normal/failure tests → orientation/handoff. Evidence: actual workflow with human intervention. FAQs: keep current CRM; failures; subscriptions. Link PUB-S011, PUB-S012, PUB-S013, PUB-S015, PUB-S017. AI is not required for every automation. |
| SOL-03; [M05-05](#m05-05), [M09-06](#m09-06) | 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements. | Build a coordinated approach to digital growth. Audience: owners/marketing leaders. Address fragmented activity, inconsistent content and weak measurement. Explain selected channels, approvals, recurring workload, reporting and campaign responsibilities. Process: objectives/baseline → channel priorities → prepare → operate/measure → review. Evidence: permitted campaign with documented context. FAQs: included channels; separate ad spend; progress review. Link PUB-S018–PUB-S022 and PUB-S025. Do not promise rankings, lead quantities or revenue. |
| SOL-04; [M05-05](#m05-05), [M09-06](#m09-06) | 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements. | Create a clearer foundation for deployment and operations. Audience: technical founders/engineers. Address inconsistent deployments, unclear environments and limited visibility. Explain relevant setup, pipelines, monitoring, backup and documentation with client boundaries. Process: environment review → target scope → changes → verify deployment/recovery → handoff/separate management. Evidence: sanitized genuine implementation artifacts. FAQs: account ownership; provider charges; monitoring/response. Link PUB-S027–PUB-S029, PUB-S032–PUB-S034. |
| SOL-05; [M05-05](#m05-05), [M09-06](#m09-06) | 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements. | Plan connected digital improvements around your business. Audience: organizations with connected needs. Explain priorities, selected workstreams, dependencies, phased delivery, responsibilities and acceptance. Process: priorities → workstreams → scope/milestones → incremental delivery/review → handoff/optional support. All three tiers remain Custom quote; define differences before publication. FAQs: staged delivery; existing tools; whether all services are included. Complete means agreed coordinated scope, not automatic inclusion of all 57 services. Link SOL-01–SOL-04 and relevant constituent services. Do not combine separate examples into a fictional integrated client engagement. |
| TRU-01; [M09-09](#m09-09) | 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route. | Conditional body: actual technologies/providers; purposes/categories; durations; supported controls; changing choices; privacy/contact links. May be incorporated into Privacy by approved choice. |
| TRU-02; [M09-09](#m09-09) | 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route. | Conditional body: accessibility approach; actual evaluated scope; known limitations; alternatives; barrier reporting; review date. No unsupported certification claim. |
| TRU-03; [M09-09](#m09-09) | 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route. | Conditional body: covered systems; actual reporting channel; useful report details; approved research boundaries; handling; disclosure coordination. Do not invent authorization, rewards, deadlines or legal protections. |

### Staff page UI regions, data and actions

| Page / tasks | Required ordered regions | Page-specific content / user actions |
| --- | --- | --- |
| STA-001; [M03-01](#m03-01), [M04-04](#m04-04) | 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion. | Sign In submits provisioned staff credentials/provider identity. Show pending, generic invalid credentials, provider failure and expired-session recovery. Success returns only to a safe permitted local destination; recovery link never offers public staff registration. |
| STA-002; [M03-03](#m03-03), [M04-04](#m04-04) | 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion. | Recovery accepts the supported identifier, returns the same neutral acknowledgement for existing/nonexisting identities, and exposes retry/throttle guidance without account enumeration. Success means instructions requested, not proof of mail delivery. |
| STA-003; [M03-03](#m03-03), [M04-04](#m04-04) | 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion. | Reset form starts only with supported valid reset context. Invalid/expired token state offers restart; confirmation/strength rules follow provider. Save success returns to sign-in; do not echo tokens or log them in analytics. |
| STA-004; [M03-03](#m03-03), [M04-04](#m04-04) | 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion. | Verification shows the supported challenge and available recovery method. Label one-time-code input; allow paste/autofill; expose invalid, expired, limited-retry and recovery states. Production MFA choice remains D-009. |
| ADM-001; [M11-01](#m11-01) | 1. Heading and scope → 2. Operational summary → 3. Inquiries needing review → 4. Pipeline summary → 5. Follow-up priorities → 6. Recent activity and shortcuts. | Operational summary shows authorized inquiries/status and due/overdue counts; inquiry rows reference/type/date/owner; pipeline includes stage and labeled estimated value; task rows title/owner/due/record; activity includes actor/time/action. Clicking a summary uses permitted existing list filters, not new reporting pages. |
| ADM-002; [M06-06](#m06-06), [M07-02](#m07-02) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Table columns: reference, person, inquiry type, selected offer, owner, created date, status. Filters: type, owner, date, status. Primary action opens the selected inquiry; no invented manual lead-create page. Empty collection explains capture sources; no-match offers Reset. |
| ADM-003; [M06-06](#m06-06), [M07-02](#m07-02) | 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback. | Core panel preserves submitted contact, original message, selected offer/price snapshot, optional budget/timeline and source/UTM context. Staff controls assign owner, classify/qualify, add note and follow-up task; linked opportunity/contact and activity follow. Conversion/duplicate decisions are reviewed under D-011. |
| ADM-004; [M07-01](#m07-01) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Contact table: name, email, company text, useful contact detail and linked-record context. Search/open is primary. Company text is not a P2 company entity. No-match/reset differs from no saved contacts. |
| ADM-005; [M07-01](#m07-01) | 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback. | Show contact identity, communication facts, linked inquiries/opportunities/customer classification and history. Permitted updates preserve relationships; suspected duplicate presents reviewed resolution, no silent merge. Company is a text fact until P2. |
| ADM-006; [M07-03](#m07-03) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Region 3 contains the fixed stage summary and operational opportunity table: identity, contact, stage, owner, estimated amount/currency and latest activity. Filters stage/owner. Optional board uses the same source data: desktop stage columns with local scroll; tablet/mobile stage selector and list. Every card offers a keyboard-operable Move to stage action; drag-and-drop is neither required nor sufficient. No configurable pipeline, forecasts or invented stage. Empty stage differs from fetch failure. |
| ADM-007; [M07-03](#m07-03) | 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback. | Show inquiry/contact, scope, stage, owner, estimated amount/currency; related records, stage history, notes and tasks. Stage change exposes exact new stage and records result. Won/Lost remains opportunity state; reviewed customer conversion does not claim payment. Confirmation addresses specific conversion/correction effects. |
| ADM-008; [M07-04](#m07-04) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Task table: title, linked record, owner, due date/timezone, status. Filters due/overdue/completed/owner; in-page Create Task supports title, owner, due and record. Completion updates row and announces result; no automated external reminder campaign. |
| ADM-009; [M07-04](#m07-04) | 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback. | Task detail exposes title/notes, owner, due/timezone, status, linked record and completion context. Save and Mark complete are distinct actions. Incomplete fields, unavailable related record, stale update and successful completion have explicit states. |
| ADM-010; [M07-05](#m07-05) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Customer list shows identity/contact and reviewed conversion context; search/open supports sales follow-up. No invoices, portal credentials or paid badges inferred from classification. Empty explains that reviewed conversion creates customer context. |
| ADM-011; [M07-05](#m07-05) | 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback. | Customer detail shows facts/conversion context and related inquiries, opportunities, notes and tasks. Each relationship respects record permissions. Correcting classification retains history; customer identity alone is not evidence of a sale receipt. |
| ADM-012; [M11-01](#m11-01) | 1. Heading → 2. Permitted modules → 3. Publication summaries → 4. Recent edits. | Module cards: Articles, Testimonials, SEO and FAQs only if its authoring UI is selected. Summaries are real authorized draft/published counts; recent edits show title/type/status/time. No page-builder, catalog editor, media library or sales-data module inferred. |
| ADM-013; [M08-02](#m08-02) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Article table: title, type/topic, publication status, author, modified and publication dates. Search/status/category filters; New Article, Edit and private Preview where a saved record exists. Empty offers first draft without inventing public content. |
| ADM-014; [M08-02](#m08-02) | 1. Identity → 2. Summary and body → 3. Images and assets → 4. Classification and author → 5. SEO metadata → 6. Save and publication. | New Article uses all six editor groups; Save Draft creates a real saved identity before Preview. Title/slug/body/asset alt/classification/SEO are reviewed; draft can be incomplete where policy permits, while publication checks are stricter. Publication permission remains D-013. |
| ADM-015; [M08-02](#m08-02) | 1. Identity → 2. Summary and body → 3. Images and assets → 4. Classification and author → 5. SEO metadata → 6. Save and publication. | Existing Article offers Save Draft or clearly named save behavior, private Preview, authorized Publish and Unpublish. Display current public state and last saved state separately. U-03 must decide whether editing a live item updates it immediately or creates an unpublished revision; no hidden assumption or scheduled publishing. |
| ADM-016; [M08-02](#m08-02) | 1. Private-preview notice → 2. Rendered article → 3. Return/publication controls. | Private Preview renders the actual article template, notice and Return to Editor. Only permitted staff can read it or draft assets. Missing/forbidden draft gives safe return; showing preview never makes it public. Publish appears only with explicit permission. |
| ADM-017; [M08-03](#m08-03) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Testimonial table: attribution, excerpt, engagement context, permission readiness and visibility. In-page create/edit starts private; detail uses ADM-018. Missing permission blocks public publication, not the ability to retain a private pending record when allowed. |
| ADM-018; [M08-03](#m08-03) | 1. Attribution → 2. Quotation → 3. Evidence and permission → 4. Context and preview → 5. Publication actions. | Attribution/quote/source permission/context/preview precede Save, Publish or Hide. Source evidence stays private; preview shows permitted public attribution only. Explain genuine review readiness and any validation issue directly beside publication controls. |
| ADM-019; [M08-04](#m08-04) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | SEO list: page name, route, type, title and index state. Search and type filter; open metadata record. Only approved editable public metadata listed; a private page is not made public by a checkbox. |
| ADM-020; [M08-04](#m08-04) | 1. Page identity → 2. Search metadata → 3. Canonical and index controls → 4. Social metadata and preview → 5. Save controls. | Metadata editor shows stable page/route identity, title/description, restricted canonical/index rules, social fields/illustrative preview and Save. It does not edit page sections or service pricing. Invalid protected-page indexing is rejected, with useful field error. |
| ADM-021; [M08-06](#m08-06) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Conditional FAQ/help list: question/title, type, category, visibility and modified date. Search/filter; permitted in-page create and edit link. Underlying public FAQ/help remains required even if alternative authoring replaces this UI. |
| ADM-022; [M08-06](#m08-06) | 1. Identity and type → 2. Answer/body → 3. Category and related links → 4. Metadata and preview → 5. Publication actions. | Conditional FAQ/help editor distinguishes short FAQ from long help; question, body, category/related links, metadata/preview, save/publish/hide. Avoid duplicating the same article in FAQ and Insights. Public presentation follows matching template. |
| ADM-023; [M11-04](#m11-04) | 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback. | Conditional administrator access list shows staff identity, approved role and account status with search/filter/provisioning only if provider supports it. Provisioning is private, no public signup. If provider console is selected, retain required access lifecycle there. |
| ADM-024; [M11-04](#m11-04) | 1. Staff identity and status → 2. Assigned permissions → 3. Supported access controls → 4. Confirmation and history. | Conditional administrator detail shows target staff identity, role/scope, supported controls and history. Revoke/change confirmation names target and effect, handles last-required-admin safeguards, and reflects authoritative outcome; no arbitrary permissions builder. |
| ADM-025; [M11-05](#m11-05) | 1. Scope explanation → 2. Filters → 3. Events and detail → 4. Pagination and recovery. | Conditional audit viewer filters date, actor, action and record. Event rows show time, actor, action, record and permitted summary; expand safely. Read-only, no delete/edit. Backend logging remains required if this viewer is deferred. |
| ADM-026; [M03-03](#m03-03), [M04-04](#m04-04) | 1. Own profile → 2. Sign-in and MFA → 3. Session and recovery → 4. Actions and feedback. | Own profile and provider-supported security/MFA/session/recovery controls. Save profile, reauthenticate for sensitive changes, Sign Out. No editing own role or seeing other staff private data. Provider unsupported state is honest, not a broken decorative switch. |
| ADM-027; [M11-06](#m11-06) | 1. Scope/status explanation → 2. Filters → 3. Records → 4. Entry/correction form → 5. Reconciliation feedback. | Conditional limited manual finance: expected/invoiced/received statuses, actual amount/currency, linked customer/opportunity, external reference, dates and verification context. In-page entry/correction and history only; prevent duplicate external entries and show unreconciled versus confirmed. No gateway, checkout or full invoice subsystem. |

### System-state recipes

| Page / tasks | Required ordered regions | Page-specific content / user actions |
| --- | --- | --- |
| SYS-01; [M04-05](#m04-05) | 1. Clear state heading → 2. Accurate explanation → 3. Recovery choices. | Suggested heading: We couldn’t find that page. Render at the requested nonexistent URL; preserve true 404 behavior. |
| SYS-02; [M04-05](#m04-05) | 1. Clear state heading → 2. Accurate explanation → 3. Recovery choices. | Explain what could not load/complete, whether action state is known, and safe retry. Render at affected route; no new /error URL. |

Source access rules in S6 Appendix A and D-013 govern every row. Auth routes STA-002–004 require provider reconciliation. ADM-021/022 FAQ editing, ADM-023/024 access UI, ADM-025 audit viewer and ADM-027 tracker stay conditional; their required underlying capabilities still have the source/provider/manual baseline. Do not add generic Settings, standalone task-create/contact-create pages, an unapproved Kanban-only workflow or inactive future menu items.

## 7. Models, schemas, data and module sequence

S5 §§6–7 remain authoritative for exact required/default fields, enums, validations, relationships, references and indexes; S6 §10 assigns implementation homes. This roadmap assigns work and tests without replacing those schemas. Every model task must compare **all** field/index rows, not only examples below. Shared `_id`/timestamps/schemaVersion/revision/archive contracts apply exactly as S5 specifies; immutable snapshots support exceptional authorized privacy redaction rather than preventing erasure.

| Model / collection | Source schema / file | Timing and invariant | Task ownership / tests |
| --- | --- | --- | --- |
| Inquiry / inquiries | S5 §7.1; `backend/src/modules/intake/models/inquiry.model.ts` | Baseline P1; Public create only; scoped handling; immutable snapshots/idempotency | [M06-01](#m06-01), [M06-03](#m06-03); model fields/indexes + negative access/concurrency tests |
| Contact / contacts | S5 §7.2; `backend/src/modules/crm/models/contact.model.ts` | Baseline P1; Canonical reviewed identity; embedded customer profile | [M07-01](#m07-01), [M07-05](#m07-05), [M07-07](#m07-07); model fields/indexes + negative access/concurrency tests |
| Opportunity / opportunities | S5 §7.3; `backend/src/modules/crm/models/opportunity.model.ts` | Baseline P1; Exact fixed stages; owner/revision/link integrity | [M07-03](#m07-03), [M07-05](#m07-05); model fields/indexes + negative access/concurrency tests |
| FollowUpTask / tasks | S5 §7.4; `backend/src/modules/crm/models/follow-up-task.model.ts` | Baseline P1; Manual target/assignee access and due timezone | [M07-04](#m07-04); model fields/indexes + negative access/concurrency tests |
| Activity / activities | S5 §7.5; `backend/src/modules/crm/models/activity.model.ts` | Baseline P1; Business timeline; controlled note correction | [M07-00](#m07-00), [M07-06](#m07-06); model fields/indexes + negative access/concurrency tests |
| Article / articles | S5 §7.6; `backend/src/modules/content/models/article.model.ts` | Baseline P1; Working draft/live snapshot and published-only reads | [M08-01](#m08-01), [M08-02](#m08-02); model fields/indexes + negative access/concurrency tests |
| Testimonial / testimonials | S5 §7.7; `backend/src/modules/content/models/testimonial.model.ts` | Baseline P1; Private evidence; explicit publish/hide | [M08-03](#m08-03); model fields/indexes + negative access/concurrency tests |
| SeoOverride / seoOverrides | S5 §7.8; `backend/src/modules/content/models/seo-override.model.ts` | Baseline P1; Source contentKey only; owned metadata delegation | [M08-04](#m08-04); model fields/indexes + negative access/concurrency tests |
| StaffUser / staffUsers | S5 §7.9; `backend/src/modules/identity/models/staff-user.model.ts` | Baseline P1; Provider mapping; local current status/role/accessVersion | [M03-01](#m03-01), [M03-02](#m03-02), [M03-04](#m03-04); model fields/indexes + negative access/concurrency tests |
| AuditEvent / auditEvents | S5 §7.10; `backend/src/modules/operations/models/audit-event.model.ts` | Baseline P1; Restricted append/read; redacted audit | [M02-03](#m02-03); model fields/indexes + negative access/concurrency tests |
| OutboxEvent / outboxEvents | S5 §7.11; `backend/src/modules/notifications/models/outbox-event.model.ts` | Baseline P1; Unique dedupe; lease/fencing/retry | [M06-02](#m06-02); model fields/indexes + negative access/concurrency tests |
| RateLimitBucket / rateLimitBuckets | S5 §7.12; `backend/src/modules/operations/models/rate-limit-bucket.model.ts` | Baseline P1; Atomic shared counters; explicit expiry plus TTL | [M02-04](#m02-04); model fields/indexes + negative access/concurrency tests |
| StaffSession / staffSessions | S5 §7.13; `backend/src/modules/identity/models/staff-session.model.ts` | Conditional; Only provider-required local session adapter | [M03-01](#m03-01); model fields/indexes + negative access/concurrency tests |
| FaqEntry / faqEntries | S5 §7.14; `backend/src/modules/content/models/faq-entry.model.ts` | Conditional; D-012 source-authoring replacement, no dual master | [M08-06](#m08-06); model fields/indexes + negative access/concurrency tests |
| ManualPaymentRecord / paymentRecords | S5 §7.15; `backend/src/modules/operations/models/manual-payment-record.model.ts` | Conditional; D-007 restricted external finance evidence | [M11-06](#m11-06); model fields/indexes + negative access/concurrency tests |
| BookingRecord / bookingRecords | S5 §7.16; `backend/src/modules/intake/models/booking-record.model.ts` | Conditional; D-003 promotion; P2 baseline otherwise | [M06-08](#m06-08), [M06-09](#m06-09); model fields/indexes + negative access/concurrency tests |

### 7.1 Schema verification manifests

Field names below are extracted from each source schema table for implementation checklist coverage. Compound field labels retain the source wording; embedded value contracts, field constraints, relationship checks and full index definitions remain binding in S5. This inventory deliberately does not create alternative schemas.

**S5 §7.1 — Inquiry / inquiries:** reference; submissionKeyHash; payloadHash; type; submittedIdentity; contactId; opportunityId; subject; message; selection; offerSnapshot; projectContext; consultation; attribution; consent; handlingStatus; classifications; duplicateOfInquiryId; assignedTo; assignedAt / assignedBy; linkedAt / linkedBy; closedAt / closedBy; redactedAt / redactionReason.

Indexes: U reference; U submissionKeyHash; (+assignedTo,+handlingStatus,−createdAt,−_id); (+contactId,−createdAt,−_id); (+opportunityId,−createdAt); (+type,−createdAt,−_id); normalized submitted email candidate index only if staff matching query requires it. Snapshot changes rejected by ordinary update commands. Redaction is a separate audited exceptional operation. Return only reference and safe receipt state to the browser, never existing contact/customer identity.

**S5 §7.2 — Contact / contacts:** displayName; email / emailNormalized; phone; companyName / website; ownerId; originatingInquiryId; identityStatus; mergedIntoContactId; customerProfile; customerProfile.status; customerProfile.confirmedAt / confirmedBy; customerProfile.firstWonOpportunityId; customerProfile.reversedAt / reversedBy / reversalReason; communicationPreference; redactedAt.

Indexes: (+emailNormalized), not unique; (+ownerId,−updatedAt,−_id); (+customerProfile.status,−customerProfile.confirmedAt,−_id); (+mergedIntoContactId) partial if populated. Customer uniqueness comes from one profile per canonical contact, not a unique email assumption. Duplicate-person merges are staff reviewed; no public request can change customer status. Staff-only CRUD and archive; note history lives in activities, not unbounded arrays.

**S5 §7.3 — Opportunity / opportunities:** creationKey; title; contactId; primaryInquiryId; ownerId; stage; stageChangedAt; selection; scopeSnapshot; expectedValue; expectedCloseAt; nextFollowUpAt; outcomeReason; wonAt / lostAt; convertedContactId; convertedAt / convertedBy.

Indexes: U creationKey; (+ownerId,+stage,−updatedAt,−_id); (+contactId,−createdAt,−_id); (+primaryInquiryId); (+stage,+expectedCloseAt) only for approved list query. All transitions are explicit staff commands with expected revision. Require a reason for backwards/reopened transitions as R5 safety default; no automated stage advancement. One source inquiry cannot be linked to conflicting primary opportunities; enforce transaction/compare-and-set on inquiry.opportunityId. Distinct later engagements should have distinct inquiry context; splitting an inquiry into several opportunities is a D-011 reconsideration trigger.

**S5 §7.4 — FollowUpTask / tasks:** creationKey; title; description; target; assignedTo; dueAt; timezone; status; completedAt / completedBy; cancelledAt / cancelledBy / cancellationReason; createdBy.

Indexes: U creationKey; (+assignedTo,+status,+dueAt,+_id); (+target.kind,+target.id,+status,+dueAt). Completion and reopening use revision checks and activity. Reassignment must not grant access by itself; reject assignment unless target visibility is authorized. No automatic task creation after intake/stage change unless separately approved.

**S5 §7.5 — Activity / activities:** eventKey; target; contactId; kind; actor; occurredAt; noteText; transition; relatedTaskId / relatedInquiryId / relatedOpportunityId; editedAt / editedBy / editReason; redactedAt / redactedBy / redactionReason.

Indexes: U eventKey; (+target.kind,+target.id,−occurredAt,−_id); (+contactId,−occurredAt,−_id). Semantic events append-only; note corrections increment revision and use restricted audit. No unlimited previous-note copies or secrets in audit diffs. Note permission details remain D-011/D-013; do not expose private timelines to future clients by default.

**S5 §7.6 — Article / articles:** contentKey; slug; type; workingDraft; publishedSnapshot; publicationState; publishedVersion; firstPublishedAt; lastPublishedAt / publishedBy; unpublishedAt / unpublishedBy; createdBy / lastEditedBy; searchText.

Indexes: U contentKey; U slug; (+publicationState,−firstPublishedAt,−_id); text index searchText (and published title where supported by chosen index definition); (+lastEditedBy,−updatedAt). Draft and live snapshot are bounded, not an unlimited revision array. Publication copies validated draft atomically, updates SEO within that snapshot, then refreshes relevant discovery. No scheduled publishing, public preview token, or generalized visual builder. Published snapshot may remain privately retained after unpublish, but all public readers filter state and archive. Authors/claims/assets must satisfy source truth rules.

**S5 §7.7 — Testimonial / testimonials:** contentKey; quote; attribution; evidence; contactId; caseStudyKey; serviceIds / solutionIds; state; displayOrder; publishedAt / publishedBy; createdBy / updatedBy; isDemo.

Indexes: U contentKey; (+state,+displayOrder,+_id). Private evidence omitted explicitly from DTOs, search and analytics. R5 editing published quotation/attribution first hides it and requires republish, avoiding an unreviewed live change; permission revocation hides it immediately. Full testimonial revision history deferred.

**S5 §7.8 — SeoOverride / seoOverrides:** contentKey; pageId; fields; lastEditedBy; reviewedAt / reviewedBy.

Indexes: U contentKey; (+pageId). Canonical normalization resolves same-origin approved routes. Private/auth/confirmation/search utility routes have enforced indexing policy that overrides editable data. No site-wide noindex toggle in ordinary editor. Removing an override restores safe defaults rather than deleting a page. Inherited revision protects concurrent metadata edits.

**S5 §7.9 — StaffUser / staffUsers:** provider / providerSubject; email / emailNormalized; displayName; roles; status; provisionedBy; activatedAt / deactivatedAt / deactivatedBy; accessVersion; lastSignInAt; preferredTimezone; mfaPolicy; mfaLastVerifiedAt.

Indexes: U (+provider,+providerSubject) partial when both populated; U emailNormalized; (+status,+roles). invited may have no provider subject until activation; enforce activation prerequisites. Never store raw passwords, MFA seeds, recovery codes, access/refresh tokens or API keys in this model. A self-service DTO excludes roles editing and administrative fields. Last active Admin cannot be removed without approved replacement/recovery. Account deactivation blocks new authorization immediately regardless of provider session lifetime.

**S5 §7.10 — AuditEvent / auditEvents:** eventKey; actor; action; targetType / targetId; outcome; occurredAt; correlationId; changedFields; safeSummary; reasonCode; actorIpHash; retentionClass.

Indexes: U eventKey; (+targetType,+targetId,−occurredAt,−_id); (+actor.staffUserId,−occurredAt); (+correlationId); (−occurredAt,−_id). No audit TTL until retention is approved. Successful sensitive business change and audit event commit together. Denied/failed attempts are recorded outside failed business transactions using bounded, redacted logging; if audit persistence fails, alert through independent monitoring. Normal staff cannot edit/delete. Approved erasure/retention job has separately constrained authority and leaves permissible non-PII evidence.

**S5 §7.11 — OutboxEvent / outboxEvents:** dedupeKey; kind; aggregateType / aggregateId; recipient; templateKey / templateVersion; payload; status; attempts; nextAttemptAt; leaseToken / leaseUntil; provider / providerMessageId; lastAttemptAt / sentAt; lastErrorCode / lastErrorSummary; deliveryState; expiresAt.

Indexes: U dedupeKey; (+status,+nextAttemptAt,+_id); (+status,+leaseUntil); (+aggregateType,+aggregateId); optional TTL expiresAt after retention selected. Claim atomically and fence updates with leaseToken. Provider idempotency key should reuse dedupeKey where supported. Timeout after possible provider acceptance produces uncertain state and reconciliation; no promise of exactly-once delivery across providers. Staff retry uses existing event with controlled attempt metadata, not new duplicate event. Before delivery recheck recipient eligibility and source privacy/deletion status; suppress stale assignment alerts. Do not send after database transaction retries until commit completes.

**S5 §7.12 — RateLimitBucket / rateLimitBuckets:** scope; subjectHash; windowStart; requestCount; expiresAt.

Indexes: U (+scope,+subjectHash,+windowStart); TTL (+expiresAt) expiry-at-date. Handle concurrent upsert collisions with retry, not unlimited acceptance. Window boundaries are checked in application even while TTL cleanup lags. Verify forwarded-IP trust at deployment; never trust arbitrary client headers. Provider/platform ingress controls limit requests before database writes to resist bucket exhaustion. Exact thresholds/load policy remain D-020. If limiter unavailable, return an honest retryable response for writes; reads use bounded fallback policy. Accessible challenge only when justified; no silent drop or fake successful submission.

**S5 §7.13 — StaffSession / staffSessions — conditional provider adapter:** tokenHash; staffUserId; accessVersion; authenticatedAt / lastSeenAt; expiresAt / idleExpiresAt; assurance; mfaVerifiedAt; revokedAt / revokedBy.

Indexes: U tokenHash; (+staffUserId,+revokedAt); TTL expiresAt. Session deletion does not replace explicit expiry checks. Secure HttpOnly SameSite cookies, HTTPS-only, session rotation at sign-in/privilege changes; no tokens in URLs or analytics. Provider-owned account/recovery/verification records must follow selected library schema, with hashed single-use expiring recovery secrets where applicable; do not invent compatible fields in advance. Absolute/idle/fresh-auth durations remain unresolved launch configuration.

**S5 §7.14 — FaqEntry / faqEntries — conditional FAQ editor:** contentKey; type; slug; workingDraft; publishedSnapshot; publicationState; displayOrder; publishedVersion; publishedAt / publishedBy; createdBy / lastEditedBy; searchText.

Indexes: U contentKey; U slug partial populated; (+publicationState,+type,+displayOrder,+_id); text searchText. Short FAQ answers render safe structured body, no executable content. Category dictionary is controlled configuration, not a separate P1 collection. SEO editor delegates to this snapshot. Publication and slug controls match articles. No duplicated article/help body published at two canonical URLs.

**S5 §7.15 — ManualPaymentRecord / paymentRecords — conditional D-007:** creationKey; contactId; opportunityId; externalSource / externalReference / entryKey; recordKind; amount; occurredAt; dueAt; externalStatus; evidenceReference; verifiedAt / verifiedBy; state; replacesRecordId / voidReason.

Indexes: U creationKey; U (+externalSource,+externalReference,+entryKey) filtered to active records when correction reuses identity; (+contactId,−occurredAt,−_id); (+opportunityId); (+recordKind,+externalStatus,+dueAt). Amount corrections void old record and create replacement in one transaction with audit. Prevent duplicate source entries. Never store payment card/bank login credentials. External ledger owns invoice math, balance and tax treatment until P2. Mixed currencies and expected/invoiced/received are never silently summed.

**S5 §7.16 — BookingRecord / bookingRecords — conditional D-003 promotion:** commandKey; inquiryId; provider / providerBookingId; status; requestedSlotStart / requestedSlotEnd; confirmedStartAt / confirmedEndAt; timezone; providerRevision / lastProviderEventId; replacementBookingId; lastSyncedAt / lastErrorCode.

Indexes: U commandKey; U (+provider,+providerBookingId) partial populated; (+inquiryId); (+status,+confirmedStartAt). Database writes cannot reserve a provider slot by themselves. Coordinate provider command and reconciliation; do not hold database transaction over network. Confirm only verified success. Provider-specific callback deduplication ledger may be needed if its event model cannot be represented by these fields; select it with D-003, not by assuming last-event ID alone handles every out-of-order event. No payment-required scheduling in P1 without a separate scope decision.

### 7.2 Data integrity and creation order

1. M02 establishes connection/session/value/index/audit/limiter contracts; M03 adds StaffUser and only the required session adapter.
2. M05 validates source-owned category/service/solution/package relationships and server-built offer snapshots. These are not seeded into competing database catalog collections.
3. M06 adds Inquiry and OutboxEvent; durable save and queued notifications share a short transaction. External send happens after commit. Unique key plus payload hash handles retry/conflict.
4. M07-00 creates Activity before CRM mutations append history. Contacts are reviewed links; Opportunity and FollowUpTask add their explicit references; customer remains Contact.customerProfile. Cross-module coordination belongs in `backend/src/server/workflows/`, not circular Intake↔CRM imports.
5. M08 adds Article, Testimonial and SeoOverride. Source FAQ/help stays authoritative unless optional FaqEntry is selected and a parity-checked cutover replaces it. Conditional booking/payment models activate only under their gates.
6. M02-05 procedures gain each feature's explicit indexes and synthetic fixtures as it arrives. M13 verifies all selected registered models, actual index existence, recovery and migration compatibility.

All lists/search/counts enforce scope before pagination. S5 staff defaults remain 25/max100 with bounded indexed/keyset patterns; public search default 20/max50 and capped merged windows. Do not accept browser Mongo operators, arbitrary sorts or unbounded regexes. Revision compare-and-set prevents stale writes. Reference existence/target access is enforced by services; Mongoose alone does not provide relational integrity.

Production index creation is explicit/reviewed with separate privileges; no destructive automatic sync on startup. Optional unique values preserve the exact partial-index conditions. TTL only cleans up; expiry, access and abuse decisions are checked immediately in application logic. Synthetic seeds refuse production by default; no live client PII in tests. Migrations use dry-run/bounded batches/checkpoints/verification and recovery; data rollback is distinct from application rollback.

### 7.3 Module ownership and handoffs

| Module/path | Ownership | Main implementation | Boundary |
| --- | --- | --- | --- |
| Catalog — `frontend/src/modules/catalog` (UI) / `backend/src/modules/catalog` (API owner) | Service/category/solution/pricing templates; comparisons, availability, selected-offer context | M05, M09-02–06 | Source config only; public safe projections; no DB catalog CRUD P1. P2 adapter migration preserves IDs/prices/URLs |
| Content — `frontend/src/modules/content` (UI) / `backend/src/modules/content` (API owner) | Public core/work/Insights/FAQ; CMS article/testimonial/SEO; conditional FAQ editor | M08, M09, M12 | Catalog keys and Identity checks; private evidence separate; broad pages/catalog/media editors P2 |
| Discovery — `frontend/src/modules/discovery` (UI) / `backend/src/modules/discovery` (API owner) | Search result screen and shared search entry | M10 | No search collection or second publication truth; Atlas/external search only for measured need |
| Intake — `frontend/src/modules/intake` (UI) / `backend/src/modules/intake` (API owner) | Quote steps, contact, manual consultation and receipt; staff inquiry projections through authorized interface | M06 | Catalog snapshots, Operations abuse/audit, Notifications enqueue; coordinated CRM links via workflow; no public read/update |
| CRM — `frontend/src/modules/crm` (UI) / `backend/src/modules/crm` (API owner) | Contacts/customer views, pipeline, lead handling, tasks, activity panels and summaries | M07, M11-01/02 | Identity + Operations; Intake through narrow contract/coordinator; company/project/campaign systems later |
| Identity — `frontend/src/modules/identity` (UI) / `backend/src/modules/identity` (API owner) | Staff login/recovery/MFA/account; conditional access UI | M03, M04-04, M11-04 | Provider verifies identity; local status/roles control ARADUN authorization; no public signup, role builder or client identity P1 |
| Notifications — `backend/src/modules/notifications` | Inline delivery-state feedback where approved; no global notification console | M06-02/06/07, M07-09, M13-03 | Operations logs; constrained reads to resolve authorized message context; no campaign engine, optional assignment event uses same infrastructure |
| Operations — `frontend/src/modules/operations` (UI) / `backend/src/modules/operations` (API owner) | Audit viewer conditional, safe summary composition, conditional manual finance panel | M00–M02, M11, M13–M14 | Low-level support does not depend on domain UI; finance scope gate; advanced admin/workflow consoles later |

## 8. UI system, reusable templates, components and motion

### 8.1 Design implementation contract

M04 owns shared tokens, primitives and shells; M05/M08 establish representative templates; M09 populates every public record; feature tasks build dashboard domain panels; M12 measures final composition and motion. Page completion requires S3 ordered sections and S4 template specialization, not simply a matching URL.

Use S4/S6 exact tokens: page `#F7F4EE`, surface `#FFFFFF`, main text `#20201E`, muted `#625E58`, brand Terracotta `#AF432D`, Slate Blue `#3F617B` or Vivid Blue `#0066FF`. One semantic token source; the approved Vivid Blue alternate and no dark mode. Inter, required weights only. Preserve marketing 1280px, reading 720px, commercial/form 960/640px, auth 440px and staff up to 1600px containers. Source breakpoint bands 320–639, 640–767, 768–1199, 1200–1535 and ≥1536 remain; staff drawer may use the S4 1024 threshold. Default Tailwind names must not silently redefine these bands.

Appearance choice remains device-local, safe with unavailable storage, CSP-compatible, and retains focus/scroll/form/quote state. Initial text and CTA are server-readable. Theme variants reserve equal logo/art dimensions. The final header lockup/vector/hero assets remain U4-01/02/03 and require actual visual verification.

### 8.2 All reusable template bindings

| Recipe | Step 6 location | Page IDs | Task owners |
| --- | --- | --- | --- |
| T-HOME | `frontend/src/modules/content/templates/home.tsx` | PUB-001 | [M09-01](#m09-01) |
| T-OV-S | `frontend/src/modules/catalog/templates/services-overview.tsx` | PUB-002 | [M05-03](#m05-03), [M09-06](#m09-06) |
| T-CATEGORY | `frontend/src/modules/catalog/templates/category.tsx` | CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08 | [M05-03](#m05-03), [M09-06](#m09-06), [M09-10](#m09-10) |
| T-SERVICE | `frontend/src/modules/catalog/templates/service.tsx` | PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057 | [M05-04](#m05-04), [M09-02](#m09-02), [M09-03](#m09-03), [M09-04](#m09-04), [M09-05](#m09-05), [M09-10](#m09-10) |
| T-OV-SOL | `frontend/src/modules/catalog/templates/solutions-overview.tsx` | PUB-003 | [M05-05](#m05-05), [M09-06](#m09-06) |
| T-SOLUTION | `frontend/src/modules/catalog/templates/solution.tsx` | SOL-01, SOL-02, SOL-03, SOL-04, SOL-05 | [M05-05](#m05-05), [M09-06](#m09-06) |
| T-PRICING | `frontend/src/modules/catalog/templates/pricing.tsx` | PUB-004 | [M05-05](#m05-05), [M09-06](#m09-06) |
| T-ABOUT | `frontend/src/modules/content/templates/about.tsx` | PUB-005 | [M09-01](#m09-01) |
| T-WORK | `frontend/src/modules/content/templates/work.tsx` | PUB-006 | [M09-07](#m09-07) |
| T-CASE | `frontend/src/modules/content/templates/case-study.tsx` | PUB-007 | [M09-07](#m09-07) |
| T-INSIGHTS | `frontend/src/modules/content/templates/insights.tsx` | PUB-008 | [M09-08](#m09-08) |
| T-ARTICLE | `frontend/src/modules/content/templates/article.tsx` | PUB-009 | [M09-08](#m09-08) |
| T-FAQ | `frontend/src/modules/content/templates/faq.tsx` | PUB-010 | [M09-08](#m09-08) |
| T-HELP | `frontend/src/modules/content/templates/help-article.tsx` | PUB-011 | [M09-08](#m09-08) |
| T-CONTACT | `frontend/src/modules/intake/templates/contact.tsx` | PUB-012 | [M06-04](#m06-04) |
| T-QUOTE | `frontend/src/modules/intake/templates/quote.tsx` | PUB-013 | [M06-05](#m06-05) |
| T-CONSULT | `frontend/src/modules/intake/templates/consultation.tsx` | PUB-014 | [M06-04](#m06-04), [M06-09](#m06-09) |
| T-CONFIRM | `frontend/src/modules/intake/templates/confirmation.tsx` | PUB-015 | [M06-06](#m06-06) |
| T-SEARCH | `frontend/src/modules/discovery/templates/search.tsx` | PUB-016 | [M10-01](#m10-01) |
| T-POLICY | `frontend/src/modules/content/templates/policy.tsx` | PUB-017, PUB-018, TRU-01, TRU-02, TRU-03 | [M09-09](#m09-09) |
| T-STATE | `frontend/src/components/templates/system-state.tsx` | SYS-01, SYS-02 | [M04-05](#m04-05) |
| T-AUTH | `frontend/src/modules/identity/templates/auth.tsx` | STA-001, STA-002, STA-003, STA-004 | [M03-01](#m03-01), [M03-03](#m03-03), [M04-04](#m04-04) |
| T-DASH | `frontend/src/modules/crm/templates/dashboard.tsx` | ADM-001 | [M11-01](#m11-01) |
| T-LIST | `frontend/src/components/templates/record-list.tsx` | ADM-002, ADM-004, ADM-006, ADM-008, ADM-010, ADM-013, ADM-017, ADM-019, ADM-021, ADM-023 | [M06-06](#m06-06), [M07-01](#m07-01), [M07-02](#m07-02), [M07-03](#m07-03), [M07-04](#m07-04), [M07-05](#m07-05), [M08-02](#m08-02), [M08-03](#m08-03), [M08-04](#m08-04), [M08-06](#m08-06), [M11-04](#m11-04) |
| T-DETAIL | `frontend/src/components/templates/record-detail.tsx` | ADM-003, ADM-005, ADM-007, ADM-009, ADM-011 | [M06-06](#m06-06), [M07-01](#m07-01), [M07-02](#m07-02), [M07-03](#m07-03), [M07-04](#m07-04), [M07-05](#m07-05) |
| T-CONTENT | `frontend/src/modules/content/templates/content-overview.tsx` | ADM-012 | [M11-01](#m11-01) |
| T-EDITOR | `frontend/src/modules/content/templates/article-editor.tsx` | ADM-014, ADM-015 | [M08-02](#m08-02) |
| T-PREVIEW | `frontend/src/modules/content/templates/private-preview.tsx` | ADM-016 | [M08-02](#m08-02) |
| T-TESTIMONIAL | `frontend/src/modules/content/templates/testimonial-editor.tsx` | ADM-018 | [M08-03](#m08-03) |
| T-SEOEDIT | `frontend/src/modules/content/templates/seo-editor.tsx` | ADM-020 | [M08-04](#m08-04) |
| T-FAQEDIT | `frontend/src/modules/content/templates/faq-editor.tsx` | ADM-022 | [M08-06](#m08-06) |
| T-ACCESS | `frontend/src/modules/identity/templates/access-detail.tsx` | ADM-024 | [M11-04](#m11-04) |
| T-AUDIT | `frontend/src/modules/operations/templates/audit.tsx` | ADM-025 | [M11-05](#m11-05) |
| T-ACCOUNT | `frontend/src/modules/identity/templates/account.tsx` | ADM-026 | [M03-03](#m03-03), [M04-04](#m04-04) |
| T-PAYMENTS | `frontend/src/modules/operations/templates/manual-payments.tsx` | ADM-027 | [M11-06](#m11-06) |

### 8.3 Complete component allocation

| Component | Step 6 file | Scope / task | Acceptance authority |
| --- | --- | --- | --- |
| CMP-01 SiteHeader | `frontend/src/components/layout/site-header.tsx` | P1 as used; [M04-03](#m04-03) | Collapse before crowding; skip link; current page; visible Contact; no public Staff Login; Custom shell + accessible navigation primitive; CSS state feedback |
| CMP-02 ServicesMenu | `frontend/src/modules/catalog/components/services-menu.tsx` | P1 as used; [M04-03](#m04-03) | Click/keyboard reachable; links remain links; Escape/return focus; do not expose 57 top-level items; Selective NavigationMenu/Popover; CSS or Motion opacity |
| CMP-03 SolutionsMenu | `frontend/src/modules/catalog/components/solutions-menu.tsx` | P1 as used; [M04-03](#m04-03) | Full names wrap; no hover-only trigger; Same primitive family as CMP-02 |
| CMP-04 MobileNavigation | `frontend/src/components/layout/mobile-navigation.tsx` | P1 as used; [M04-03](#m04-03) | Modal focus containment if drawer; scrollable inside viewport; restore focus; close on navigation; Sheet/Dialog + Accordion; optional Motion 220ms |
| CMP-05 SiteFooter | `frontend/src/components/layout/site-footer.tsx` | P1 as used; [M04-03](#m04-03) | Stack groups; labels remain visible; no invented destinations or inactive future links; Custom; static |
| CMP-06 Breadcrumbs | `frontend/src/components/layout/breadcrumbs.tsx` | P1 as used; [M04-03](#m04-03) | Named nav; current item text; wrap, don't truncate meaningful parent names; Custom semantic list; static |
| CMP-07 ButtonLink | `frontend/src/components/ui/button.tsx` | P1 as used; [M04-02](#m04-02) | Anchor for navigation; button for action; no nested controls; visible pending label; shadcn Button styling; CSS 180ms |
| CMP-08 ContainerSection | `frontend/src/components/layout/container-section.tsx` | P1 as used; [M04-01](#m04-01) | Semantic section only with meaning; logical heading order; mobile gutters; Custom; no automatic animation wrapper |
| CMP-09 SectionHeading | `frontend/src/components/marketing/section-heading.tsx` | P1 as used; [M04-03](#m04-03) | Meaning before typography; link wraps below on mobile; Custom; selective content entrance |
| CMP-10 AppearanceSelector | `frontend/src/components/theme/appearance-selector.tsx` | P1 as used; [M04-01](#m04-01) | Named values, keyboard selection, persistent focus; swatch not only label; Popover + RadioGroup; instant/CSS 120ms |
| CMP-11 PublicSearch | `frontend/src/modules/discovery/components/public-search.tsx` | P1 as used; [M10-01](#m10-01) | Standard submit fallback; no assumption of autocomplete; accessible results status; Input/Button; CSS only |
| CMP-12 EditorialHero | `frontend/src/components/marketing/editorial-hero.tsx` | P1 as used; [M09-01](#m09-01) | Text/CTA before art; meaningful content rendered initially; art alt empty if decorative; Custom; Motion text optional; independent GSAP art only if justified |
| CMP-13 CategoryDirectory | `frontend/src/modules/catalog/components/category-directory.tsx` | P1 as used; [M05-03](#m05-03) | 4→2→1 columns; full names; hover supplements focus; Custom; CSS underline/border |
| CMP-14 ServiceCard | `frontend/src/modules/catalog/components/service-card.tsx` | P1 as used; [M05-04](#m05-04) | Never separate price from period; actual status not color alone; Custom; CSS hover ≤2px optional |
| CMP-15 SolutionCard | `frontend/src/modules/catalog/components/solution-card.tsx` | P1 as used; [M05-05](#m05-05) | 3+2 desktop or list; no unsupported inclusions; equal discovery; Custom; CSS |
| CMP-16 BentoGroup | `frontend/src/components/marketing/bento-group.tsx` | P1 as used; [M12-02](#m12-02) | DOM order consistent; no hover-dependent disclosure; all units stack; Custom composition of existing cards; CSS/Motion selected children |
| CMP-17 PriceComparison | `frontend/src/modules/catalog/components/price-comparison.tsx` | P1 as used; [M05-05](#m05-05) | Stacked labeled cards or scrollable table with header relationships; no invented checkmarks; Custom table/cards; static |
| CMP-18 AvailabilityBadge | `frontend/src/modules/catalog/components/availability-badge.tsx` | P1 as used; [M05-01](#m05-01) | Actual owner-approved status; no purchase action for unavailable service; Badge; CSS state only |
| CMP-19 EvidenceBlock | `frontend/src/components/marketing/evidence-block.tsx` | P1 as used; [M09-07](#m09-07) | Visible classification; no fabricated count; gracefully omit absent evidence; Custom; selected image reveal optional |
| CMP-20 ProjectCardGallery | `frontend/src/modules/content/components/project-card-gallery.tsx` | P1 as used; [M09-07](#m09-07) | Captions always visible; aspect reserved; optional gallery controls keyboard accessible; Custom; CSS or Motion ≤1.02 image scale |
| CMP-21 Testimonial | `frontend/src/modules/content/components/testimonial.tsx` | P1 as used; [M08-03](#m08-03) | Permission recorded privately; sample label in previews; no auto-rotation; Custom blockquote; static |
| CMP-22 IndustryCard | `frontend/src/modules/industry/components/industry-card.tsx` | Future only; do not create P1; Deferred; do not create P1 | No false expertise; long names wrap; no P1 industry route promotion; Custom; CSS |
| CMP-23 ProcessTimeline | `frontend/src/components/marketing/process-timeline.tsx` | P1 as used; [M09-01](#m09-01) | Semantic ordered list; desktop horizontal only if readable; mobile vertical; Custom; optional one-time line reveal |
| CMP-24 FAQAccordion | `frontend/src/modules/content/components/faq-accordion.tsx` | P1 as used; [M09-08](#m09-08) | Expanded state, keyboard, content reachable; no forced one-open rule; Accordion; CSS height transition only measured safe or instant |
| CMP-25 ArticleCard | `frontend/src/modules/content/components/article-card.tsx` | P1 as used; [M09-08](#m09-08) | Heading/link hierarchy; no placeholder dates; published content only; Custom; CSS |
| CMP-26 ConversionCTA | `frontend/src/components/marketing/conversion-cta.tsx` | P1 as used; [M04-03](#m04-03) | One dominant action; skip on legal/auth/error/confirmation; Custom; optional subtle entrance |
| CMP-27 ReadingBodyTOC | `frontend/src/components/marketing/reading-body-toc.tsx` | P1 as used; [M09-08](#m09-08) | 720px measure; anchor focus/offset; tables locally scroll; no prose clipping; Custom typography; static |
| CMP-28 CollectionControls | `frontend/src/components/data-display/collection-controls.tsx` | P1 as used; [M04-02](#m04-02) | URL/query context retained where appropriate; no results ≠ error; labels not placeholder-only; Select/Input/Button; CSS |
| CMP-29 FieldGroup | `frontend/src/components/forms/field-group.tsx` | P1 as used; [M04-02](#m04-02) | Label association, autocomplete when appropriate, error description, preserve input; Label/Input/Textarea; CSS focus only |
| CMP-30 ChoiceControl | `frontend/src/components/forms/choice-control.tsx` | P1 as used; [M04-02](#m04-02) | Native first when sufficient; correct keyboard and selected semantics; no disabled mystery values; Native or Select/RadioGroup/Checkbox; CSS |
| CMP-31 FormProgress | `frontend/src/modules/intake/components/form-progress.tsx` | P1 as used; [M06-05](#m06-05) | Current step announced; back never submits; progress not color-only; Custom semantic step list; optional Motion ≤180ms |
| CMP-32 QuoteSelection | `frontend/src/modules/intake/components/quote-selection.tsx` | P1 as used; [M06-05](#m06-05) | Service identity preserved; remove/edit reachable; no binding automatic total; Custom composition; CSS |
| CMP-33 ReviewSummary | `frontend/src/modules/intake/components/review-summary.tsx` | P1 as used; [M06-05](#m06-05) | No mandatory re-entry; clear acknowledgement; protect PII; Custom; static |
| CMP-34 ConsultationRequest | `frontend/src/modules/intake/components/consultation-request.tsx` | P1 as used; [M06-04](#m06-04) | Accurate timezone and request-versus-booked distinction; accessible provider fallback; Custom form; provider UI only when approved |
| CMP-35 FormFeedback | `frontend/src/components/forms/form-feedback.tsx` | P1 as used; [M04-02](#m04-02) | Focus summary on failed submit; status announcement on success; no duplicate retry after save; Alert + inline status; CSS spinner optional |
| CMP-36 LoadingEmptyError | `frontend/src/components/feedback/loading-empty-error.tsx` | P1 as used; [M04-05](#m04-05) | No infinite shimmer; error not shown as empty; preserve filters/entered data; Skeleton/Alert; reduced motion static |
| CMP-37 DashboardShell | `frontend/src/components/layout/dashboard-shell.tsx` | P1 as used; [M04-04](#m04-04) | Role-scoped navigation, skip links, drawer on compact; no public data leakage; Custom + Sheet; menu transition only |
| CMP-38 PageToolbar | `frontend/src/components/data-display/page-toolbar.tsx` | P1 as used; [M04-02](#m04-02) | Wrap; secondary actions grouped; no sticky action covering fields; Custom/Button/DropdownMenu; CSS |
| CMP-39 DataTable | `frontend/src/components/data-display/data-table.tsx` | P1 as used; [M04-02](#m04-02) | Sort announced only if implemented; mobile summary or labeled local horizontal scroll; no invented bulk/export tools; Semantic table + selective table primitive; no row entrance cascade |
| CMP-40 StatusBadge | `frontend/src/components/data-display/status-badge.tsx` | P1 as used; [M04-02](#m04-02) | Never status by color alone; Won ≠ Paid; draft ≠ published; Badge; static |
| CMP-41 PipelineView | `frontend/src/modules/crm/components/pipeline-view.tsx` | P1 as used; [M07-03](#m07-03) | Table baseline; board optional view of same data; keyboard Move to stage action; dragging never sole method; Custom; Motion only optional small relocation |
| CMP-42 RecordPanel | `frontend/src/modules/crm/components/record-panel.tsx` | P1 as used; [M07-01](#m07-01) | Safe missing values; source order; sensitive sections permission-limited; Custom/Card/Tabs only when useful; static |
| CMP-43 ActivityTimeline | `frontend/src/modules/crm/components/activity-timeline.tsx` | P1 as used; [M07-06](#m07-06) | Real history; timezone clear; private notes distinct from external communication; Custom semantic list; static |
| CMP-44 TaskEditor | `frontend/src/modules/crm/components/task-editor.tsx` | P1 as used; [M07-04](#m07-04) | Visible date format/timezone, validation, completion feedback; Form/Dialog as needed; essential feedback only |
| CMP-45 ContentEditor | `frontend/src/modules/content/components/content-editor.tsx` | P1 as used; [M08-02](#m08-02) | Label editor toolbar; heading structure; keyboard workflow; clear unsaved/saved state; Accessible editor choice unresolved; reuse form primitives |
| CMP-46 SEOEditor | `frontend/src/modules/content/components/seo-editor.tsx` | P1 as used; [M08-04](#m08-04) | Preview illustrative, not Google guarantee; no publicizing private routes; Custom form; static |
| CMP-47 DialogDrawer | `frontend/src/components/feedback/dialog-drawer.tsx` | P1 as used; [M04-02](#m04-02) | Focus trapping when modal, Escape where safe, return focus, scroll constraints, unsaved-change handling; Dialog/Sheet/AlertDialog; CSS/Motion 180–220ms |
| CMP-48 Notification | `frontend/src/components/feedback/notification.tsx` | P1 as used; [M04-02](#m04-02) | Polite status; errors persistent and contextual; no critical message only in disappearing toast; Alert/Toast primitive; CSS fade optional |
| CMP-49 PrivatePreview | `frontend/src/modules/content/components/private-preview.tsx` | P1 as used; [M08-02](#m08-02) | Noindex + actual authorization; no leak via draft assets; keyboard return; Reuse reading template; static |
| CMP-50 SecurityPanel | `frontend/src/modules/identity/components/security-panel.tsx` | P1 as used; [M03-03](#m03-03) | Paste/password managers allowed; provider-supported recovery; no self-granted role; Provider + custom framing; no cinematic motion |
| CMP-51 ManualFinancePanel | `frontend/src/modules/operations/components/manual-finance-panel.tsx` | Conditional D-007; [M11-06](#m11-06) | Expected/invoiced/received separate; permission restricted; correction confirms target; Custom table/form; no checkout animation |

### 8.4 Motion execution and performance gates

| Area | Owner/task | Approved effect | Reduced/mobile and verification |
| --- | --- | --- | --- |
| Focus/hover/status/forms | CSS; M04-02, M12-02 | Immediate focus; color/border/underline; small nonessential response | No motion dependency; coarse pointer does not rely on hover; reduced motion removes movement. |
| Menu/dialog/quote steps | CSS or Motion, one owner; M04-03, M06-05, M12-02 | Local entrance/exit with correct focus; quote transition ≤180ms | Focus not delayed; input preserved; compact transitions shorter; reduced motion instant. |
| Selected headline/section entrances | Motion; M12-02 | Optional small transform/opacity; meaningful text initially readable | No required per-letter reveal; readable no-JS/static fallback; no blanket animate-every-section. |
| Bento/process timeline | CSS/Motion; M12-02 | Selected one-time emphasis; semantic DOM order and process list | Stacked mobile; no hover-hidden facts or scroll takeover. |
| Layered hero/selected complex sequence | Isolated GSAP; M12-03 | Only if actual independent layers and benefit justify it; dynamic import/scoped cleanup | Static compact/reduced version; clean route/unmount/breakpoint/hidden-tab handling; zero GSAP payload elsewhere. |
| Tables/auth/legal/reading | Static/CSS essentials | No cinematic row cascades or marketing timelines | No decorative blocking of operational actions; auth/private routes do not import global GSAP. |

Retain S4 timing/distance tokens: fast 180ms, UI 220ms, enter 480ms, feature 650ms; stagger 70ms with ≤6 items and total delay ≤350ms; content movement 16px, hero ≤24px, optional desktop parallax ≤12px; theme color change 0–120ms and instant reduced motion. Each effect declares target/property/owner/trigger/cleanup/static fallback. Never let CSS, Motion and GSAP concurrently animate the same transform/opacity.

Performance review occurs before enabling the GSAP effect, after final asset integration and during release qualification. If it exceeds reviewed budget, remove/simplify the decorative effect and preserve functional motion/accessibility. Do not install an additional animation engine, custom cursor, persistent particles, WebGL or scroll-smoothing framework.

## 9. Conversion, CRM and publication workflow acceptance

### 9.1 Three paths, one durable intake

| Journey | Required fields / context | Saved outcome | E2E acceptance |
| --- | --- | --- | --- |
| PUB-013 Quote | Offer/solution/tier or Custom/Not sure; brief; name; email; applicable notice acknowledgement. Optional budget/timeline/company/website. | Inquiry.type=quote, server offer snapshot, reference, source/consent, outbox work. | Back/Edit/theme change preserve data; forged price ignored; same key returns same safe receipt; duplicate email is not automatic merge. |
| PUB-012 Contact | Name/email/subject/message; only useful optional context. | Inquiry.type=contact; common staff inbox/notification. | No forced quote/booking/phone/login; field/network error retains valid input; no email relay. |
| PUB-014 Consultation | Name/email/topic, preferred time and IANA timezone in manual mode. | Inquiry.type=consultation; pending staff confirmation. | Acknowledgement never claims booked; live slot/confirmation only if D-003 promoted and provider actually confirms. |

M06-03 commit precedes success. Submission-key hash + canonical payload hash distinguish repeat from conflicting edit. A lost HTTP response recovers the original result. Receipt/reference cannot enumerate private records. Outbox processing is at least once with dedupe/leases/reconciliation; no false exactly-once provider guarantee. Customer confirmation and staff notification aliases reuse one send path each. Consent acknowledgement and optional marketing choice are separate; private form bodies are not automatically stored in localStorage.

### 9.2 CRM workflow

Staff reviews inquiry identity → links or creates Contact → qualifies/creates Opportunity → assigns manual follow-ups and records activities → explicitly selects Won/Lost → explicitly confirms eligible customer conversion. Multiple inquiries and opportunities can share one contact/customer. Reopening a deal never deletes identity/history or changes payment state. Admin-reviewed correction/merge validates the affected graph, keeps original snapshots/history and rejects unsafe concurrent changes. Changes produce business Activity and required restricted AuditEvent atomically where specified.

Each list/detail includes only permitted records and safe counts, bounded pagination, empty/no-match/failure distinctions, timezone and currency labels. Due/overdue reminders are dashboard indicators. External communications are manually recorded activities, not a synced mailbox or campaign engine. M07-08 verifies the whole chain with denied, repeated and concurrent commands.

### 9.3 CMS, SEO and visibility

Authorized edit → save working draft → protected real-template preview → explicit approved publication → current public snapshot. Publish checks body/author/assets/slug/SEO/relationships. Unpublish/withdrawal removes public eligibility from route, metadata, related cards, search and sitemap. No general revision-history UI, scheduled publishing, runtime MDX or broad page builder.

SeoOverride owns registered source-page metadata. Article/conditional FAQ metadata stays with its own draft/public snapshot. S6 `[pageId]` plus validated contentKey context cannot become arbitrary URL editing; article editing can use the existing article editor. Private/indexing policies cannot be relaxed by an Editor. Source/core caching must not freeze dynamic publication/SEO; use S5 request-time current-state baseline unless a separately reviewed invalidation design is implemented.

FAQ/help and portfolio are maintained source records by baseline; conditional FAQ database authoring replaces, rather than duplicates, that master. Testimonials expose only allowed quote/attribution; private evidence remains protected. All production facts and media permissions pass M09/M13 content gates.

## 10. Integrations and environment readiness

Provider names in earlier sources are alternatives, not selected/connected accounts. No integration is claimed active by this planning document. Verify current SDK/version/license/cost/account capability when its task executes; exact patch/runtime compatibility is an implementation gate. One committed lockfile; no competing auth SDKs, Motion packages or deployment mechanisms.

| Integration / tasks | Prerequisites and credentials | Development / production configuration | Failure handling, tests and security |
| --- | --- | --- | --- |
| Identity — M00-02, M03 | Selected auth app, subject/issuer mapping, D-009/013; provider-required signing/client secrets | Separate local/staging/production auth applications and callbacks; optional local StaffSession only when required | Deny unverifiable identity; revoke local access independently; controlled doubles plus real staging callback/MFA/recovery tests; never custom crypto. |
| Transactional mail — M06-02/06, M14 | Verified sender/reply mailbox, restricted send API key; staff destinations; optional callback secret | Development sink; controlled staging recipients; isolated production sender/jobs | Commit before send; bounded outbox retry/uncertain outcome reconciliation; fixed recipients/escaped templates; delivery test and optional signed callback tests. |
| Bounded job trigger — M06-02, M13-04 | Selected scheduler supports authenticated method, runtime and frequency; JOB_TRIGGER_SECRET | Distinct schedules/secrets/data per environment; no preview production worker | Authenticate, cap batch/time/attempts; leases/fencing; monitor stuck/failed jobs. Prefer POST; incompatible host GET behavior needs explicit documented exception or another scheduler. |
| Scheduling — M06-08/09 only if promoted | D-003 mode/account capability/CRM linkage; actual selected calendar OAuth/booking credentials | Dedicated test calendar; least-privilege production access; explicit timezone/cancel/reschedule contract | Manual request fallback; verified slot outcomes; replay/duplicate/race tests; signed/provider-specific authenticated callbacks only when actually supported. |
| Media/storage — M08-05; optional M08-07 | Controlled assets baseline; storage/scanning/rights/backup policy and scoped credentials if uploads selected | Separate containers/keys/public and private assets; no raw private data in public folder | Upload failure preserves editorial content; object cleanup/quarantine; size/type/content/SSRF tests; private grants and expiration. |
| GA4 — M10-03, M14-03 | Correct property/public measurement ID and actual consent/notice choices | Disabled/isolated debug setup outside production; no private-route tracking | Failure never blocks reading/forms; payload inspection excludes PII; saved inquiry event distinct from thank-you page visit. |
| Search Console — M10-04, M14-03 | Domain/property ownership and reviewed verification artifact | Prepare during staging; verify actual canonical production property/sitemap at launch | No per-request app dependency; report actual verification/indexing status; no search ranking promise. |
| Monitoring/uptime — M01-04, M13-04, M14 | Chosen telemetry/uptime provider, alert owner, DSN/token scope | Release IDs and separate environments; private source-map upload token only CI | Redact logs/events; alert test independent of app uptime; telemetry failure cannot lose inquiry; no raw bodies/tokens in reports. |
| MongoDB/hosting/DNS — M00-02, M02, M13–14 | Next.js frontend host plus Node-compatible Express host, MongoDB replica-set capability, least-privilege credentials, domain access, approved budget/region/RPO/RTO | Isolated dev/staging/production DB and secrets; controlled origin/network access | Bounded pools/timeouts; backup restore; no build-time production mutation; preserve mail DNS; previous compatible artifact/worker containment. |

Environment names/exposure/required timing are inherited from S6 §15. M01-02 maintains the full inventory and selected SDK-specific adaptation in `.env.example` and documentation with **no real values**. Groups: APP_ENV/origin/canonical/allowed origins; DB target/pool/URI; selected auth; email sender/recipient sandbox/provider; job secret and limiter hash secret; optional storage/calendar; monitoring/release/log; analytics enable/public ID; approved notice versions. No secret uses NEXT_PUBLIC_. Public build-time changes require a new compatible build where applicable. Operational migration/backup privileges are separate from runtime.

## 11. Security, privacy and recovery

Security begins at the first relevant feature. M13 consolidates evidence; it does not postpone controls. These ownership assignments supplement exact S5/S6 controls.

| Control | First implementation | Continuous verification / release evidence |
| --- | --- | --- |
| Secrets, origins, safe environment separation | M01-02/04 | Client bundles/source maps/logs scanned; no privileged secrets to untrusted previews; rotate under runbook. |
| Validation, NoSQL injection/mass assignment, safe DTO/errors | M02-02; every mutation | Bounded allowlists; reject arbitrary operators; never serialize raw models/private fields; no secret/provider diagnostics. |
| Shared limits and spam | M02-04 before public writes | Concurrent counters, explicit expiry, sane request size; accessible recovery; no memory-only limiter across instances. |
| Identity/authorization/session/CSRF | M03; all feature operations | Current actor/record scope in reads/writes/counts/search/files/preview; stale status/role denied; trusted origin/cookies/fresh auth as selected. |
| Audit versus business timeline | M02-03; M07-00 | Restricted append/read audit; business event history separate; redacted corrections and transactional consistency. |
| Stored XSS, safe editorial rendering/URLs | M08-01/05 | Structured content and URL/asset allowlists; no executable MDX/unreviewed HTML; private draft assets protected. |
| Uploads/webhooks when introduced | M08-07 / M06-09 and selected auth/mail callbacks | Security applies immediately even when general feature catalog phase is later; replay/spoof/content negatives required. |
| Privacy/consent/retention/redaction | M00-03; M06 intake; M10 analytics | Actual notice versions; marketing separate; minimal collection; explicit retention/deletion workflow includes notes/snapshots/provider copies/outbox/backups. |
| HTTPS/security headers/CSP | M01 environment; M04 theme bootstrap; final M13/M14 | Approved script/font/provider origins, no globally weakened CSP for appearance; secure cookies; framing/MIME/referrer policy verified. |
| Backups/restore/suppression | M02 procedures; M13-03 exercise | Approved RPO/RTO measured; source/config/media included; restored deleted data suppressed; uncertain outbox jobs reconciled before sending resumes. |

No invented legal jurisdiction, retention duration, uptime/RPO/RTO number, certification or blanket compliance claim is approved here. D-014/A5-13 remain explicit. Archive is not erasure. Restoration-safe deletion/suppression ledger must be restricted and defined before production deletion/backup processes operate. Public forms do not solicit cards, government IDs, health records, passwords or customer secrets.

## 12. Continuous testing, accessibility and performance

### 12.1 Milestone verification allocation

| Milestone group | Required tests / evidence |
| --- | --- |
| M00–M01 | Source/phase/source-ID validation; environment failure cases; restricted imports; clean install/types/lint/build; test DB and CI isolation; protected preview. |
| M02 | Real model/index/transaction behavior, aborted cross-document write, connection failure/timeouts, safe serialization, duplicate uniqueness/TTL logic and limiter races. |
| M03 | Provider staging callback/session/MFA/recovery; role/record denial, deactivation, last-admin guard, guessed IDs, safe redirects and CSRF/origin. |
| M04–M05 | Keyboard/focus/dialog/navigation, all three themes/blocked storage, responsive shared components, exact catalog/price/route parity, shared slug resolver and selected-context propagation. |
| M06 | Each public form success/invalid/slow/offline/duplicate/lost-response case; one durable result; provider outage; lease fencing/retry/delivery and no relay/private receipt leakage. |
| M07 | Concurrent reviewed linking/opportunity creation, fixed stages, due timezone, scoped queries/counts, conversion/merge/reversal and retained business history. |
| M08 | Draft/public separation, protected preview/private assets, publish/unpublish/withdraw, safe editorial rendering, metadata ownership and optional media/FAQ migration. |
| M09–M10 | All page IDs/routes/content regions; genuine proof/commercial units; published-only search/metadata/sitemap, noindex policy, truthful schema and consent-aware saved events. |
| M11 | Complete staff page/action/role/state matrix, metrics match lists, no estimated-revenue confusion, conditional screen outcomes and manual business template scenario. |
| M12 | All-three-theme visual review; mobile/touch/reduced/no-JS; repeated routes/breakpoints/hidden-tab cleanup; measured payloads/performance/accessibility. |
| M13–M14 | Full regression and UAT; security/privacy/dependencies; isolated backup restore and suppression; deploy/rollback drill; controlled production journeys and actual integration verification. |

Use Vitest/Testing Library/Playwright/axe as retained S6 recommendations after compatibility validation. Unit tests isolate pure rules; integrations use disposable real Mongo with transactions/indexes; browser tests use controlled identity/mail. Mock auth alone cannot prove the real provider. Do not add fragile tests that mirror trivial code or treat snapshot approval as accessibility evidence.

### 12.2 Accessibility acceptance

Follow WCAG 2.2 AA-oriented source requirements: semantic landmarks/headings, persistent labels/instructions, meaningful alternatives, keyboard navigation, visible unobscured focus, understandable errors/status, appropriately sized/spaced controls, no color/hover/drag-only action and no forced motion. Test text resize 200%, page zoom/reflow 400%, text spacing, screen-reader announcements, forced colors and coarse-pointer use. Review 320, 375/390, 768, 1024, 1280, 1440 and wide desktop with long content and realistic tables. All three themes and all critical states must pass; an automated score is not conformance.

### 12.3 Performance targets and measurement

| Measure | Source target / interpretation | Gate |
| --- | --- | --- |
| LCP / INP / CLS | p75 LCP ≤2.5s; INP ≤200ms; CLS ≤0.1 | Representative production-build lab proxies before launch; field verification only when enough real representative data exists. |
| Lighthouse | Performance 90+; Accessibility 95+ aspirational | Record device/network/CPU/configuration and repeatable results, not cherry-picked best run; manual accessibility remains required. |
| Hero/font transfer | Provisional hero ≤250KB compact/≤450KB large; fonts ≤150KB initial | M12 actual optimized assets; U4-06 final budgets retained rather than claimed measured now. |
| Motion JavaScript | Provisional ≤60KB compressed incremental motion on using routes; zero GSAP on unused routes | Inspect route bundles; lazy import must actually isolate code; remove optional effect if unjustified. |
| Initial marketing transfer | Provisional ≤1MB compressed before lazy below-fold media/optional third-party work | Account for framework/fonts/images/scripts; report actual measurement and agreed remediation. |
| Database/dashboard | Bounded pagination/joins/filters, pool budget, timeouts, responsive inputs and honest async states | Realistic synthetic volume and query plans; no all-record browser loading or unbounded histories. |

Maintain an exception register for measured misses with cause/owner/remediation. A diagnostic score miss does not silently rewrite requirements or establish failure of a specific field metric; owner review uses the full evidence. No unresolved launch-blocking usability/security defect can be excused by a high score.

## 13. Deployment, launch and post-launch readiness

Existing task IDs and order remain. M01 establishes frontend/backend boundaries; M02 uses local MongoDB replica-set configuration; M03 verifies Express authentication; M04 covers all three themes and saved preferences; M13/M14 verify both artifacts, API compatibility and separately selected production hosting. Existing effort figures remain unmodified estimates and need reassessment for this architecture change; no new schedule is silently approved.

### 13.1 Completion levels

| Level | Meaning |
| --- | --- |
| Development foundation | M01–M04 contracts/shells proven; not feature complete or launchable. |
| Functional milestone | An approved small flow works with tests and known limitations; M06 is first complete intake flow, not a reduced launch. |
| Feature-complete P1 | All confirmed P1 requirements and full public/staff inventory implemented, with explicit decisions/baselines for conditional entries; M09/M11/M13 coverage verified. |
| Production-ready P1 | Feature complete plus real business/content/provider/security/privacy/accessibility/performance/recovery evidence and M13 release dossier. |
| Production release | Explicit owner deployment approval and M14 verified exact release. |
| Post-launch improvement | Measured refinements that do not hide unfinished required scope; future-phase features remain separately approved. |

### 13.2 Launch acceptance checklist

- [ ] Every confirmed P1 requirement has implementation and test evidence; every conditional page/feature has a recorded decision and valid baseline or tested selected implementation. No unresolved gate is marked complete merely because a route exists.
- [ ] All 57 services/eight categories/five solutions preserve exact identities/URLs and approved prices, units, scopes and availability. Actual published pages are substantive. A reduced first release requires explicit scope amendment; this file does not authorize one.
- [ ] Three intake paths save reliably; references/receipts safe; source/notice snapshots correct; duplicate/lost-response/provider-failure cases verified; staff receives actual controlled notifications.
- [ ] Contact linking, pipeline, notes/history, manual tasks, conversion and correction enforce role/record/revision rules. Customer classification and money remain distinct.
- [ ] Article draft/preview/publish/unpublish, testimonials and SEO ownership work; public routes/search/sitemap/cards do not expose drafts or withdrawn proof; FAQ/help authoring baseline works.
- [ ] Staff sign-in/recovery/MFA/account/provisioning/revocation and last-admin recovery are tested with the selected real provider. No public staff signup or private data caching leakage.
- [ ] All three themes, responsive navigation, forms, dashboards, keyboard/screen-reader/zoom and reduced motion are reviewed. Actual performance/payload measurements and any accepted nonblocking limitations are recorded.
- [ ] Verified legal/business contact facts, operating hello@aradun.com, approved policies/consent/retention, source image/quotation rights and truthful demo labels; unapproved placeholders absent.
- [ ] External proposal/invoice templates and selected manual finance process are operational; no unsupported payment/provider promise.
- [ ] Next.js/Express/Node/MongoDB/host compatibility, origin/TLS/DNS/canonical redirects and mail authentication/receiving are verified; existing mail records preserved.
- [ ] Environment separation and required production secrets, indexes, bounded pools/jobs, scoped credentials, selected storage/media backup and dependency review complete.
- [ ] Monitoring/alert delivery and incident owner tested. Backup restore demonstrates approved recovery targets, deletion suppression and safe outbox reconciliation.
- [ ] Exact source release/build/configuration/migration manifest reviewed; rollback to previous compatible artifact and scheduler containment rehearsed; data rollback plan separate.
- [ ] GA4 consent/event payload and saved-conversion semantics verified; Search Console property/canonical sitemap prepared and confirmed at launch; private/staging/utility indexing exclusions correct.
- [ ] Owner UAT and explicit production approval recorded before deployment; controlled live smoke verifies public/private paths, email, jobs, search/publication and observability.

### 13.3 Release and rollback sequence

Freeze reviewed release → validate environment and index/migration compatibility → verify recovery point and rollback artifact → obtain production authorization → apply explicit safe data/index steps and deploy the exact artifact → run controlled smoke tests → monitor → accept or contain/rollback. Do not mutate production DB in arbitrary application startup/build hooks. If a critical access/intake/publication regression appears, stop affected traffic/sends as appropriate, retain evidence, restore the compatible release and reconcile data/provider outcomes rather than blindly resubmitting jobs.

Post-launch M14-04 covers the first owner-agreed monitored operating window; its hours are active observation/triage, not an uptime guarantee or unlimited support. Ongoing maintenance covers regular dependency review, backup verification, access review, delivery failures, content/offer freshness, SEO errors and field-performance trends. Interval/owner is chosen operationally; no automation is created by this document.

## 14. Effort, capacity and critical path

### 14.1 Estimation basis

R7 estimates are planning ranges for one experienced full-stack developer using focused assisted implementation. They include coding/configuration, meaningful feature tests, source/content integration and ordinary local revision/review. They are not a fixed-price quote, a guarantee, or a count of Codex execution time. No application repository has been built/benchmarked for velocity here; re-estimate using actual completed M01–M06 work.

Full scope includes 57 service records, reusable public templates and a secure CRM/limited CMS. The older 160–250-hour narrower-MVP estimate is not reused. Reuse saves layout work but does not remove commercial content review or backend reliability work.

| Effort category | Active hours | Interpretation |
| --- | --- | --- |
| Engineering, technical planning/integration and built-in QA | 546–938 | Baseline excluding the four explicit service-content population batches; includes template work and release checks. |
| Service content population and validation | 74–126 | M09-02–05: adapt approved information into distinct records and validate; requires owner-supplied facts/package decisions. |
| Baseline active delivery total | 620–1064 | Exact sum of baseline tasks; includes both rows above, not extra hours on top. |
| Risk/rework allowance | 124–320 | 20% of low baseline to 30% of high baseline; unknown provider/editor/content integration and cross-feature correction beyond ordinary task revision. |
| Baseline planning envelope | 744–1384 | Baseline plus explicit risk allowance; calendar conversion requires actual sustainable weekly capacity. |
| All listed conditional branches, if selected | 79–136 | Incremental raw task totals, not assumed scope; select actual subset and add appropriate contingency. |
| External waits and owner/specialist input | Not converted to hours/dates here | Provider/domain approvals, legal review, original proof/copy/asset creation and owner decisions can extend elapsed duration independently of developer hours. |

About one quarter of baseline task effort should be reserved within the estimates for tests, local correction and review; M13 adds assembled-system qualification rather than duplicating each feature's original test authoring. The risk allowance is additional; it must not be counted again as a second generic testing buffer. Original long-form copy production, creating new portfolio projects, legal drafting, extensive custom illustration, paid provider cost and unlimited operational support are not silently included. If the primary developer must also produce these inputs, add explicit content/design/operations work after quantities and approval needs are known; do not reduce the approved software scope.

Calendar duration is intentionally undated: sustainable weekly engineering/content hours are unknown. After the owner supplies capacity, calculate active workload divided by productive weekly hours, then add external waits and review windows. Do not assume a 40-hour week, use the user's employment hours as ARADUN capacity, or convert task independence into fictitious parallel developer throughput.

### 14.2 Critical path and scheduling rules

The principal technical chain is M00 immediate decisions → M01 environment/tests → M02 database/security contracts → M03 access plus M04 shared UI → M05 authoritative offers → M06 durable intake → M07 CRM → M11 complete operations → M13 qualification → M14 authorized release. A second required path is M04/M05 → M08 publication → M09 complete content → M10 discovery/measurement → M12 measured polish → M13. Both must finish; this is a dependency analysis, not a probabilistic dated CPM promise.

Owner-approved commercial content, permission/MFA policies, working mailbox/provider capability and recovery/privacy decisions can become the actual critical path. M00 assigns decision deadlines. Prepare factual copy/assets and policies while technical foundations progress; populate separate service records after shared template approval. M08 can interleave with M07 once shared access/UI contracts are stable. Do not start UI that depends on an unselected editor/session contract merely to appear busy.

Conditional task selection changes estimates and may add a longer path. M06-08/09 preserve P2 baseline until explicit promotion; a selected live scheduler requires real reconciliation/security before launch. Unknown credentials or failed provider trials require decision/re-estimation, not invented capabilities. Run the first M06 end-to-end slice before committing to a launch date.

## 15. Risk register

| Risk | Description | Likelihood | Impact | Mitigation | Owner | Milestone |
| --- | --- | --- | --- | --- | --- | --- |
| R7-01 | Provider/MFA decision remains open | Medium | High | Select supported auth/recovery and exact roles before M03; test actual adapter and local revocation. | Owner + developer | M00/M03 |
| R7-02 | Conditional UI silently treated as mandatory or omitted | High | High | Track all 12 C page entries; choose tested implementation or documented baseline; preserve required capability. | Owner + developer | M00/M11/M13 |
| R7-03 | Content/package/availability not ready for 57 services | High | High | Prepare owner facts early; batch unique content; gate unapproved units/claims; never shrink scope without approval. | Owner/content lead | M05/M09/M13 |
| R7-04 | Duplicate/lost inquiry or mail after provider failure | Medium | High | Atomic inquiry+outbox; unique key/hash; lease/fencing and uncertain-delivery reconciliation. | Developer | M06/M13 |
| R7-05 | Contact merge/customer conversion corrupts relationships | Medium | High | Reviewed identity, revisions, short transactions, bounded merge and explicit correction; concurrency tests. | Developer + owner | M07 |
| R7-06 | Role leak through search/counts/linked records | Medium | High | One scoped policy for each operation; negative cross-role/guessed-ID tests and immediate accessVersion checks. | Developer | M03/M07/M08/M11 |
| R7-07 | Draft or withdrawn proof remains publicly visible | Medium | High | Single eligibility predicate; current-state reads; publication-aware search/sitemap; test withdrawal everywhere. | Developer/editor | M08/M10 |
| R7-08 | Motion/theme/artwork harms mobile usability or payload | Medium | Medium–High | Static fallback, isolated imports, preserved form state, measurable budgets; remove decorative cost first. | Developer/designer | M04/M12 |
| R7-09 | Host scheduler/runtime/pool incompatible with workload | Medium | High | Validate chosen plan early; bounded jobs/DB connections; authenticated trigger and preview isolation tests. | Developer | M00/M01/M06 |
| R7-10 | Backup exists but restore/data suppression fails | Medium | High | Isolated restore timed against approved targets; recover source/media/config; suppress deleted data and reconcile outbox. | Developer/owner | M13 |
| R7-11 | Solo workload and optimistic estimates | High | High | No parallel capacity assumption; small sessions, milestone evidence, explicit buffer and re-estimate after M06. | Owner/developer | All |
| R7-12 | Dependency/editor upgrades add complexity or vulnerabilities | Medium | Medium–High | Pin supported compatibility set, one lockfile, narrow editor, deliberate upgrade/security triage and rollback. | Developer | M01/M08/M13 |
| R7-13 | Working hello@ or domain/email authentication absent | Medium | High | Verify receiving/sending and provider identity before live notifications; preserve existing DNS. | Owner/developer | M06/M14 |
| R7-14 | Privacy/retention/asset rights not factual | Medium | High | Actual practice review, minimal data, explicit approval/versioned notices, source evidence and retention/suppression process. | Owner with relevant specialist | M00/M08/M13 |
| R7-15 | Production deployment damages data or mail DNS | Low–Medium | High | Reviewed exact release, isolated preflight, explicit safe migration/index step, tested rollback, preserved DNS and controlled smoke. | Developer/owner | M13/M14 |
| R7-16 | Historical URL uncertainty causes silent route change | Medium | Medium | Retain supplied exact routes; O-03 stays open; reconcile older source before claiming historical parity or migrating URL. | Owner/developer | M00/M05/M10 |
| R7-17 | AI/AMS/portal or broad CMS scope creeps into launch | Medium | High | Future inventory retained separately; no empty systems; owner change control and re-estimate for promotion. | Owner/developer | All |
| R7-18 | Analytics reports inflated conversions or exposes private text | Medium | High | Saved outcome only; idempotent event semantics; no private pages/PII; inspect network under every consent state. | Developer | M10/M14 |

## 16. Requirement-to-task traceability

All 207 FR records and all 29 BR/NFR/EXT records are preserved below. Source phase/qualification and source approval language remain authoritative. A task mapping to a future feature means only the explicitly stated P1 slice, conditional branch or exclusion review; it does not promote the entire feature. Source “P1” priority counts are not blanket implementation approvals.

The matrix links requirement → exact source phase → owning module/workflow/pages → milestone/task → acceptance → verification. Page associations are available bidirectionally in §§4–6; infrastructure requirements have workflow/module rather than an invented page. The acceptance text is copied from S1. Task verification and task AC add implementation evidence, never weaken that source acceptance. All NFR controls also apply across tasks where relevant even if the matrix names only their principal owners.

### FR-01 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-01-01 — Responsive website (desktop/tablet/mobile) | P1. P1 baseline/ongoing within source qualification | Shared presentation; Shared presentation; Intake; Catalog; Adapt all public interfaces across desktop, tablet and mobile. | [M04-01](#m04-01), [M04-02](#m04-02), [M12-02](#m12-02); P1 baseline/ongoing within source qualification | At agreed mobile/tablet/desktop widths, text and controls remain usable, menus work, and content does not overflow except intentional scroll regions. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | All-three-theme visual checks, first-paint/hydration/storage-disabled tests and font transfer measurement.; Component interaction/axe checks plus manual keyboard, zoom and screen-reader spot checks.; Reduced-motion/no-JS/coarse-pointer tests, theme switch mid-quote, interruption/unmount and route bundle inspection. |
| FR-01-02 — Professional homepage | P1. P1 baseline/ongoing within source qualification | Content; Catalog; PUB-001, PUB-005 | [M09-01](#m09-01); P1 baseline/ongoing within source qualification | Approved company messaging, eight categories, solutions and CTA destinations are represented; unpublished proof is not exposed; final sections await Step 3. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Section checklist, evidence audit, link/CTA paths and all-three-theme responsive visual review. |
| FR-01-03 — Mega menu and dropdown navigation | P1. P1 baseline/ongoing within source qualification | Catalog; Shared presentation; Provide accessible grouped navigation to approved destinations. | [M04-03](#m04-03); P1 baseline/ongoing within source qualification | Navigation is keyboard-operable, has visible focus and mobile equivalents; exact mega-menu styling remains a design decision, not a new scope obligation. [Source status: Confirmed grouped navigation; mega-menu presentation detail proposed.] | Exact-link checks, keyboard/Escape/focus return, long-name/mobile/zoom review; data binds to M05-01 when available. |
| FR-01-04 — Service categories and individual pages | P1. P1 baseline/ongoing within source qualification | Catalog; Catalog; Content; Pages in linked task records and §§5–6 | [M05-01](#m05-01), [M05-03](#m05-03), [M05-04](#m05-04), [M09-02](#m09-02), [M09-03](#m09-03), [M09-04](#m09-04), [M09-05](#m09-05), [M09-06](#m09-06); P1 baseline/ongoing within source qualification | Displayed names/prices/availability match CAT; cross-listed services share identity; only approved substantive detail pages are published. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Named task verification is binding; evidence in M05-01, M05-03, M05-04, M09-02, M09-03, M09-04, M09-05, M09-06 and M13-01 coverage audit. |
| FR-01-05 — Solutions and service bundles | P1. P1 baseline/ongoing within source qualification | Catalog; Catalog; Content; Pages in linked task records and §§5–6 | [M05-05](#m05-05), [M09-06](#m09-06); P1 baseline/ongoing within source qualification | All five approved names/prices are preserved; package inclusions are explicit before publication; selections reach the unified quote flow. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | All five solution records, pricing display/source parity and selected-tier navigation tests.; Whole-catalog crawl, relationship/price parity and all category/solution/pricing comparisons. |
| FR-01-06 — Service package and pricing comparison | P1. P1 baseline/ongoing within source qualification | Catalog; Catalog; Content; Pages in linked task records and §§5–6 | [M05-04](#m05-04), [M05-05](#m05-05), [M09-06](#m09-06); P1 baseline/ongoing within source qualification | Starting prices are clearly indicative; recurring charges and excluded third-party costs are distinguished; missing scope is resolved before publication. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Representative variation tests, semantics/metadata baseline, responsive comparison and quote-context tests.; All five solution records, pricing display/source parity and selected-tier navigation tests.; Whole-catalog crawl, relationship/price parity and all category/solution/pricing comparisons. |
| FR-01-07 — Dynamic call-to-action buttons | P1. P1 baseline/ongoing within source qualification | Catalog; Shared presentation; Catalog; Intake; Catalog; Content; Catalog; Pages in linked task records and §§5–6 | [M04-03](#m04-03), [M05-04](#m05-04), [M05-05](#m05-05), [M06-05](#m06-05), [M09-01](#m09-01); P1 baseline/ongoing within source qualification | Context is preserved and server-validated; all actions have meaningful labels and working destinations; primary CTA policy is consistent. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Exact-link checks, keyboard/Escape/focus return, long-name/mobile/zoom review; data binds to M05-01 when available.; Representative variation tests, semantics/metadata baseline, responsive comparison and quote-context tests.; All five solution records, pricing display/source parity and selected-tier navigation tests.; E2E all entry paths/Back/Edit, cross-listed item dedupe, tampered payload, preserved state/focus and failed-submit recovery.; Section checklist, evidence audit, link/CTA paths and all-three-theme responsive visual review. |
| FR-01-08 — About, team, mission and company information | P1. P1 baseline/ongoing within source qualification | Content; Catalog; PUB-001, PUB-005 | [M09-01](#m09-01); P1 baseline/ongoing within source qualification | Only approved real identities/locations are public; unavailable team/statistics sections stay unpublished; proposed mission wording is approved before use. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Section checklist, evidence audit, link/CTA paths and all-three-theme responsive visual review. |
| FR-01-09 — Contact page and inquiry form | P1. P1 baseline/ongoing within source qualification | Intake; PUB-012, PUB-014 | [M06-04](#m06-04); P1 baseline/ongoing within source qualification | Form behavior meets FR-02-04; contact details match the approved record and working mailbox; no parallel lead database is created. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | End-to-end success/invalid/slow/offline/duplicate cases; timezone and keyboard/screen-reader check. |
| FR-01-10 — Portfolio and case studies | P1. P1 baseline/ongoing within source qualification | Content; PUB-006, PUB-007 | [M09-07](#m09-07); P1 baseline/ongoing within source qualification | Client/internal/concept type is visible; permission and claims checked; screenshots exclude private data; no invented results or clients. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Rights/classification/content review; gallery/keyboard/narrow layout and unpublished-slug tests. |
| FR-01-11 — Testimonials and client reviews | P1. P1 baseline/ongoing within source qualification | Content; ADM-017, ADM-018 | [M08-03](#m08-03); P1 baseline/ongoing within source qualification | Staff can manage publication; attribution/permission is recorded; no fabricated proof; empty sections can stay unpublished; public review submission is not required. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Permission/projection/publication tests and empty-state UI; source/evidence withdrawal across public slots. |
| FR-01-12 — Blog, articles and resource center | P1. P1 baseline/ongoing within source qualification | Content; ADM-013, ADM-014, ADM-015, ADM-016, PUB-008, PUB-009, PUB-010, PUB-011 | [M08-02](#m08-02), [M09-08](#m09-08); P1 baseline/ongoing within source qualification | Published entries have usable detail views and metadata; drafts are not public; navigation and related links work; resource assets follow file controls when used. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Editor component tests, publish/unpublish E2E, unauthorized preview/asset requests, keyboard and narrow-screen review.; Publication/withdrawal, typography/heading/TOC, pagination and CTA/link verification. |
| FR-01-13 — FAQ and knowledge base | P1. P1 baseline/ongoing within source qualification | Content; ADM-021, ADM-022, PUB-008, PUB-009, PUB-010, PUB-011 | [M08-05](#m08-05), [M08-06](#m08-06), [M09-08](#m09-08); P1 baseline/ongoing within source qualification | Published answers can be browsed/searched; no draft/private content leaks; authoring method is approved; support ticketing is not required for this feature. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Reference/slug/image allowlist checks, alt/dimension review and private evidence leak tests.; Migration parity/rollback, draft/publish/unpublish/search contract and role/keyboard tests.; Publication/withdrawal, typography/heading/TOC, pagination and CTA/link verification. |
| FR-01-14 — Website search | P1. P1 baseline/ongoing within source qualification | Discovery; Catalog; Content; PUB-016 | [M10-01](#m10-01); P1 baseline/ongoing within source qualification | All four required types are searchable; drafts/private records are excluded; empty/error states exist; result relevance and agreed response budget are checked on representative data. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Published/unpublished/malicious query and capped pagination tests; empty/error states, keyboard and indexed query review. |
| FR-01-15 — Multi-language website | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Offer genuine translated public experiences in approved languages. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only reviewed translations publish; navigation and metadata are consistent; fallback behavior and language-specific indexing are defined before launch. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-01-16 — Multi-currency pricing display | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Show approved alternate currency estimates while preserving monetary meaning. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Source currency, conversion date/rate and indicative status are clear; authoritative quotes retain the agreed currency; no exchange-rate guarantee is implied. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-01-17 — Personalized website content | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Vary selected content using approved context and privacy rules. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Default content remains usable; variation rules are documented; consent respected; personalization does not reveal private data or fabricate familiarity. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-01-18 — AI-powered website search | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Add semantic or AI-assisted retrieval over approved public content. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only authorized published sources are used; responses link to sources and handle uncertainty; ordinary search remains available; quality/cost gates pass. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-02 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-02-01 — Unified multi-step quote request | P1. P1 baseline/ongoing within source qualification | Intake; Catalog; PUB-013 | [M06-05](#m06-05); P1 baseline/ongoing within source qualification | No visitor login required; selected context persists; required fields validated server-side; successful save yields a reference; failure allows correction without duplicate inquiries. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | E2E all entry paths/Back/Edit, cross-listed item dedupe, tampered payload, preserved state/focus and failed-submit recovery. |
| FR-02-02 — Multi-service selection | P1. P1 baseline/ongoing within source qualification | Catalog; Intake; Catalog; PUB-013 | [M05-02](#m05-02), [M06-05](#m06-05); P1 baseline/ongoing within source qualification | Selections remain unique and editable; cross-listing does not duplicate the same service; valid custom/unsure path exists; totals are not presented as a binding quote. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Tampered price/ID, mixed periods/currencies, source revision and cross-list selection tests.; E2E all entry paths/Back/Edit, cross-listed item dedupe, tampered payload, preserved state/focus and failed-submit recovery. |
| FR-02-03 — Package selection with starting prices | P1. P1 baseline/ongoing within source qualification | Catalog; Intake; Catalog; PUB-003, PUB-004, PUB-013, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05 | [M05-02](#m05-02), [M05-05](#m05-05), [M06-05](#m06-05); P1 baseline/ongoing within source qualification | Server resolves valid IDs and availability; tampered amounts are ignored/rejected; stored snapshot preserves price/currency/period and timestamp after future catalog changes. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Tampered price/ID, mixed periods/currencies, source revision and cross-list selection tests.; All five solution records, pricing display/source parity and selected-tier navigation tests.; E2E all entry paths/Back/Edit, cross-listed item dedupe, tampered payload, preserved state/focus and failed-submit recovery. |
| FR-02-04 — General contact form | P1. P1 baseline/ongoing within source qualification | Intake; PUB-012, PUB-014 | [M06-04](#m06-04); P1 baseline/ongoing within source qualification | Valid submissions enter the common lead store with contact inquiry type; optional phone/company are not required by default; errors are accessible; spam controls apply. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | End-to-end success/invalid/slow/offline/duplicate cases; timezone and keyboard/screen-reader check. |
| FR-02-05 — Consultation request form | P1. P1 baseline/ongoing within source qualification | Intake; PUB-012, PUB-014 | [M06-04](#m06-04); P1 baseline/ongoing within source qualification | Request is stored as consultation type and acknowledged as pending confirmation; no unavailable slot is represented as booked; time-zone context is captured when time preferences are collected. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | End-to-end success/invalid/slow/offline/duplicate cases; timezone and keyboard/screen-reader check. |
| FR-02-06 — Lead database | P1. P1 baseline/ongoing within source qualification | Shared infrastructure; Intake; Intake; Notifications; Operations; CRM; Intake; ADM-004, ADM-005 | [M02-01](#m02-01), [M06-01](#m06-01), [M06-03](#m06-03), [M07-01](#m07-01); P1 baseline/ongoing within source qualification | Validated records survive restart; IDs are unique; only authorized staff access private data; failed notification does not erase a saved inquiry; data errors are monitored. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Real replica-set commit/abort/retry and connection-failure tests; inspect runtime and aggregate pool budget.; Model/index/input edge tests and malicious fields; each required/optional journey field exercised.; Concurrent submissions, rollback, lost HTTP result, tampering, receipt expiry and provider-down integration tests.; Two-reviewer races, shared email, unauthorized candidate access and relationship tests; contact list/detail keyboard/mobile review. |
| FR-02-07 — Automatic lead reference number | P1. P1 baseline/ongoing within source qualification | Intake; Intake; Notifications; Operations; Assign a unique internal identifier and human-readable inquiry reference. | [M06-01](#m06-01), [M06-03](#m06-03); P1 baseline/ongoing within source qualification | Concurrent submissions cannot share a reference; retries do not create unwanted duplicates; reference alone never grants private record access. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Model/index/input edge tests and malicious fields; each required/optional journey field exercised.; Concurrent submissions, rollback, lost HTTP result, tampering, receipt expiry and provider-down integration tests. |
| FR-02-08 — Customer confirmation email | P1. P1 baseline/ongoing within source qualification | Notifications; Operations; Intake; Notifications; Operations; Notifications; Intake; CRM; ADM-002, ADM-003, PUB-015 | [M06-02](#m06-02), [M06-03](#m06-03), [M06-06](#m06-06); P1 baseline/ongoing within source qualification | No success email precedes durable save; repeated delivery attempts are controlled; private staff notes are excluded; failure is retried/visible without asking the visitor to resubmit. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Lease contention/expiry/fencing tests; temporary/permanent/unknown provider outcomes; scheduler authentication/runtime test.; Concurrent submissions, rollback, lost HTTP result, tampering, receipt expiry and provider-down integration tests.; Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests. |
| FR-02-09 — Internal lead notification | P1. P1 baseline/ongoing within source qualification | Notifications; Operations; Intake; Notifications; Operations; Notifications; Intake; CRM; ADM-002, ADM-003, PUB-015 | [M06-02](#m06-02), [M06-03](#m06-03), [M06-06](#m06-06); P1 baseline/ongoing within source qualification | Notification points to a protected record; recipients follow approved settings; delivery failure is visible and retried; unnecessary personal data is excluded. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Lease contention/expiry/fencing tests; temporary/permanent/unknown provider outcomes; scheduler authentication/runtime test.; Concurrent submissions, rollback, lost HTTP result, tampering, receipt expiry and provider-down integration tests.; Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests. |
| FR-02-10 — Lead status management | P1. P1 baseline/ongoing within source qualification | CRM; Intake; ADM-002, ADM-003 | [M07-02](#m07-02); P1 baseline/ongoing within source qualification | Stage history follows FR-03-05; spam/duplicate/no-response are separate tags; exact inquiry-to-opportunity status relationship is approved before implementation. [Source status: Confirmed status tracking; inquiry/opportunity mapping requires D-011 resolution.] | Status/assignment permissions, stale revision, source visibility and suspended-staff tests; list/detail state review. |
| FR-02-11 — Lead assignment | P1. P1 baseline/ongoing within source qualification | CRM; Intake; ADM-002, ADM-003 | [M07-02](#m07-02); P1 baseline/ongoing within source qualification | Only eligible users can be assigned; assignment change is audited; unassigned records remain visible to permitted staff; access does not expand unintentionally. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Status/assignment permissions, stale revision, source visibility and suspended-staff tests; list/detail state review. |
| FR-02-12 — Lead notes and activity history | P1. P1 baseline/ongoing within source qualification | CRM; Maintain internal notes and chronological sales activity. | [M07-06](#m07-06), [M07-00](#m07-00); P1 baseline/ongoing within source qualification | Author/time and relevant changes are retained; internal notes stay private; note-edit/delete policy is approved; sensitive information is minimized. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Pagination/tie-break/query-plan tests, malicious filters, note correction/redaction and cross-role disclosure cases.; Model/index, event dedupe, target scope and correction-audit tests. |
| FR-02-13 — Lead source tracking | P1. P1 baseline/ongoing within source qualification | Intake; CRM; Intake; ADM-002, ADM-003 | [M06-01](#m06-01), [M07-02](#m07-02); P1 baseline/ongoing within source qualification | Known fields are validated and bounded; Unknown is supported; personal data is excluded from analytics; direct/blocked-referrer submissions still work. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Model/index/input edge tests and malicious fields; each required/optional journey field exercised.; Status/assignment permissions, stale revision, source visibility and suspended-staff tests; list/detail state review. |
| FR-02-14 — Calendar appointment booking | P2 baseline; P1 proposed, pending D-003. P2 baseline; conditional P1 only after D-003 | Intake; Intake; Operations; PUB-014 | [M06-08](#m06-08), [M06-09](#m06-09); P2 baseline; conditional P1 only after D-003 | Selected scheduling mode and phase are approved; timezone, cancellation/rescheduling and duplicate-event handling work; only confirmed provider bookings are labeled booked; CRM linkage is verified if promised. [Source status: Decision required — S1/S2 P2; S3 proposes P1; Google Calendar booking scope/phase unresolved (D-003).] | Controlled provider sandbox/staging tests for slot races, timezone and outage; scope/credential review.; Spoof/replay/duplicate/out-of-order callback tests and full booking/cancel/reschedule E2E under selected integration. |
| FR-02-15 — Automated follow-up sequences | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Run approved follow-up sequences with consent and stop conditions. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Enrollment, opt-out, reply/won/lost stopping, send limits and delivery history are tested; this is not the P1 manual task feature. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-02-16 — Proposal generation | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Generate a reviewable proposal from approved inquiry scope and templates. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Client, scope, exclusions, fees and milestones are editable; staff reviews before sending; revisions are identifiable; no auto-binding quote is created. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-02-17 — Proposal approval and e-signature | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Support client review and an approved electronic-signature process. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Signer identity/process, document version and evidence are preserved; declined/expired documents are handled; provider/legal suitability is verified before use. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-02-18 — AI lead qualification | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Suggest lead qualification using approved criteria. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Output is advisory, explains relevant factors and permits correction; no unapproved rejection or external communication occurs; evaluation and privacy gates pass. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-02-19 — AI sales assistant | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Assist staff with summaries and sales-response drafts. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Access follows staff permissions; drafts are labeled; source facts can be checked; no autonomous commitments/sending without approved action rules. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-02-20 — Lead scoring and sales forecasting | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Score leads and forecast sales using defined data and assumptions. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Inputs, methodology and data period are visible; forecasts are not reported as booked revenue; sparse-data limitations and manual overrides are supported. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-03 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-03-01 — Contacts database | P1. P1 baseline/ongoing within source qualification | CRM; Intake; CRM; Operations; ADM-004, ADM-005 | [M07-01](#m07-01), [M07-07](#m07-07); P1 baseline/ongoing within source qualification | New inquiries can link to an existing contact; duplicate matching is reviewed, not an unsafe automatic merge; authorized corrections preserve relationships/history. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Two-reviewer races, shared email, unauthorized candidate access and relationship tests; contact list/detail keyboard/mobile review.; Merge dry-run/reference parity, rollback/concurrent mutation tests and documented supervised recovery. |
| FR-03-02 — Basic customer profile | P1. P1 baseline/ongoing within source qualification | CRM; ADM-010, ADM-011 | [M07-05](#m07-05); P1 baseline/ongoing within source qualification | Only approved fields are collected; profile links to relevant records; customer flag is distinct from payment state; no client login is implied. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Concurrent/repeated conversion, denial, other won engagement and reversal tests; customer list/detail states. |
| FR-03-03 — Lead-to-customer conversion | P1. P1 baseline/ongoing within source qualification | CRM; CRM; Operations; CRM; Intake; Identity; ADM-010, ADM-011 | [M07-05](#m07-05), [M07-07](#m07-07), [M07-08](#m07-08); P1 baseline/ongoing within source qualification | One customer identity is retained; original inquiry and opportunity history remain; repeated conversion does not duplicate records; payment remains independent; correction rules are defined. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Concurrent/repeated conversion, denial, other won engagement and reversal tests; customer list/detail states.; Merge dry-run/reference parity, rollback/concurrent mutation tests and documented supervised recovery.; Cross-role E2E and transaction/concurrency tests; compare scoped summary queries to lists. |
| FR-03-04 — Company/organization records | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Link contacts and deals to business organizations. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Company identity and contact links are editable with access checks; merging preserves linked history; internal staff organizations and client companies are not confused. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-03-05 — Sales opportunity pipeline | P1. P1 baseline/ongoing within source qualification | CRM; CRM; Intake; Identity; ADM-006, ADM-007 | [M07-03](#m07-03), [M07-08](#m07-08); P1 baseline/ongoing within source qualification | New/Qualified/Discovery/Proposal Sent/Negotiation/Won/Lost are supported; owner, estimated value and stage history persist; drag-and-drop is optional; a stage change does not imply payment. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Transition/reopen/stale-write and double-create tests; authorization and monetary labels; pipeline/detail responsive review.; Cross-role E2E and transaction/concurrency tests; compare scoped summary queries to lists. |
| FR-03-06 — Follow-up tasks and reminders | P1. P1 baseline/ongoing within source qualification | CRM; CRM; Intake; Identity; ADM-008, ADM-009 | [M07-04](#m07-04), [M07-08](#m07-08); P1 baseline/ongoing within source qualification | Owner, due date, status and notes are stored; due/overdue tasks are highlighted; completion is recorded; timezone display is clear; no external campaigns are required. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Due-boundary/timezone, unauthorized target, stale edit and completion tests; form/list/detail keyboard checks.; Cross-role E2E and transaction/concurrency tests; compare scoped summary queries to lists. |
| FR-03-07 — Communication timeline | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Aggregate authorized communication and activity events into a timeline. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Events preserve source/time and access scope; duplicates are controlled; internal-only items are distinguished; unrelated inbox content is not imported indiscriminately. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-03-08 — Customer tags and segmentation | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Tag and segment contacts using documented criteria. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Tags can be managed without duplicating contacts; filter results respect access; segment use for marketing follows consent and opt-out rules. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-03-09 — Email integration | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Connect approved business email to permitted CRM workflows. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Account consent and least-privilege scopes are used; matching/review rules avoid unrelated mail capture; disconnect/revocation and sync errors are handled. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-03-10 — Deal and revenue forecasting | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Forecast future deal/revenue outcomes using pipeline data. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Reuse FR-02-20 forecasting foundations; methodology/time horizon are visible; actual payments remain distinct; forecasts can be compared with later outcomes. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-03-11 — Customer lifetime value tracking | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Calculate customer lifetime value using a defined revenue/cost model. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Formula, currency, time basis and included costs are stated; source records reconcile; missing costs are disclosed rather than represented as profit. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-03-12 — AI CRM assistant | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Offer AI help within authorized CRM records. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Reuse AI controls and sales-assistant capability; record permissions apply to every retrieval; uncertain conclusions are flagged; no autonomous record changes by default. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-03-13 — Customer health scoring | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Estimate customer health from approved signals. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Signals and weighting are visible; score can be corrected; sparse/missing data is shown; no unsupported claim about customer intent is made. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-03-14 — Multiple customizable pipelines | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Support several configurable pipelines when justified. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Stage definitions, permissions and mappings are versioned; moving records preserves history; reporting distinguishes pipelines; default P1 pipeline remains intact. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-04 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-04-01 — Centralized service catalog | P1. P1 baseline/ongoing within source qualification | Catalog; CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-002 | [M05-01](#m05-01), [M05-03](#m05-03); P1 baseline/ongoing within source qualification | Exactly 57 unique services and 58 category memberships are preserved; IDs/slugs are unique; cross-listing resolves to the same service; changes are controlled. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Count/uniqueness/reference validation and source price/route comparison.; Route resolver tests, representative narrow/wide category visual review and accessible navigation. |
| FR-04-02 — Centralized pricing/package data | P1. P1 baseline/ongoing within source qualification | Catalog; Centralize package prices, currency, billing model and scope references. | [M05-01](#m05-01), [M05-02](#m05-02); P1 baseline/ongoing within source qualification | All displays resolve the same approved values; prices use precise money representation; invalid currencies/periods are rejected; unresolved package scope blocks misleading publication. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Count/uniqueness/reference validation and source price/route comparison.; Tampered price/ID, mixed periods/currencies, source revision and cross-list selection tests. |
| FR-04-03 — Service availability management | P1. P1 baseline/ongoing within source qualification | Catalog; Catalog; Content; Pages in linked task records and §§5–6 | [M05-01](#m05-01), [M05-03](#m05-03), [M09-02](#m09-02); P1 baseline/ongoing within source qualification | Each service has an approved state; public actions reflect availability; coming-soon cannot imply confirmed immediate delivery; P1 management may use maintained catalog data rather than an admin editor. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Count/uniqueness/reference validation and source price/route comparison.; Route resolver tests, representative narrow/wide category visual review and accessible navigation.; Per-record checklist/source diff, rendered long/short-content samples and route/canonical/CTA verification. |
| FR-04-04 — Admin service editor | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide staff editing of service details, packages and availability. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only permitted users edit; validation preserves IDs/slug uniqueness and price history; publication checks require scope/availability approval; all changes are audited. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-04-05 — Dynamic page management | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage approved public page content through the dashboard. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only supported content fields/templates are editable; changes have preview and publication controls; arbitrary code execution is not allowed; routes stay consistent. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-04-06 — Blog/article management | P1. P1 baseline/ongoing within source qualification | Content; ADM-013, ADM-014, ADM-015, ADM-016 | [M08-01](#m08-01), [M08-02](#m08-02); P1 baseline/ongoing within source qualification | Title, slug, excerpt, body, featured-image reference and tags are manageable; draft content stays private; publish/unpublish works; slug and content are validated; image method is approved before launch. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Schema/index, stored-XSS, permissions, stale publish and unpublish tests.; Editor component tests, publish/unpublish E2E, unauthorized preview/asset requests, keyboard and narrow-screen review. |
| FR-04-07 — Media library | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage reusable media assets and their metadata. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | File type/size/access checks apply; alt text and usage references are supported; deletion does not silently break content; private files are not exposed as public media. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-04-08 — SEO metadata editor | P1. P1 baseline/ongoing within source qualification | Content; Discovery; Discovery; Content; ADM-019, ADM-020 | [M08-04](#m08-04), [M10-02](#m10-02); P1 baseline/ongoing within source qualification | Title/description/canonical/indexing/social fields validate; default canonicals are sensible; private routes cannot be made public/indexable; changes are audited; accidental site-wide noindex is guarded. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Registered/unknown/reserved keys, cross-owner edits, private-index attempts and metadata/publication tests.; Crawl/canonical/index eligibility matrix, structured-data validity and withdrawal tests; controlled staging noindex versus production behavior. |
| FR-04-09 — Reusable content blocks | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Compose approved reusable content patterns. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only allowed blocks are available; required content and accessibility fields validate; changes identify affected pages; this does not require a visual page builder. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-04-10 — Draft and publish workflow | P2. P1 article slice in FR-04-06; broader workflow deferred P2 | Content; Extend draft/preview/publish controls to broader content types. | [M08-01](#m08-01); P1 article slice in FR-04-06; broader workflow deferred P2 | P1 article workflow remains covered by FR-04-06; later supported types have explicit publication states; previews require appropriate access; unpublished content is excluded from search/sitemap. [Source status: Proposed P2 for general content only; article draft/publish is explicitly confirmed P1 under FR-04-06 (D-008).] | Schema/index, stored-XSS, permissions, stale publish and unpublish tests. |
| FR-04-11 — Content version history | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Retain content revision history and controlled restoration. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Version author/time and content are retained; restore is permission-checked and creates an auditable revision; published/unpublished effects are explicit. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-04-12 — Scheduled publishing | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Publish approved content at a future time. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Timezone is clear; cancelled/rescheduled jobs do not publish stale versions; retries do not duplicate publication; failed jobs are visible. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-04-13 — Multi-language content management | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage translation variants of content. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Variants retain their source relationship; translation review state is visible; incomplete translations do not publish silently; slugs/metadata/language links validate. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-04-14 — AI-assisted content drafting | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Generate editable content drafts with AI assistance. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | No automatic publication; factual claims and references require review; generated proof/credentials are forbidden; provider/data/cost controls apply. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-04-15 — Visual page builder | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Offer constrained visual editing of approved page components. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only approved components/styles are allowed; responsive/accessibility constraints validate; preview/version/rollback work; arbitrary script injection is blocked. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-05 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-05-01 — Client registration and login | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide secure customer account access when the portal launches. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Invitation versus public registration is approved; identity recovery and revocation work; each account is explicitly linked to permitted client records; unauthorized access is denied. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-02 — Client dashboard | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Summarize a client's authorized projects, documents and next actions. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only that client's records appear; empty/error states work; internal notes and unrelated financial data are excluded; summaries link to permitted detail views. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-03 — Project status tracking | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Show approved project progress to clients. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Client-visible states match project records; internal-only details remain hidden; stale/missing updates are identified; access is checked on every request. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-04 — View proposals and contracts | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Let clients access their authorized proposal/contract versions. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Correct version and status are visible; private documents use access-controlled delivery; other clients cannot access guessed identifiers; download activity is recorded as appropriate. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-05 — View invoices and payments | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Display invoices, balances and verified payment history. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Amounts/currency/status reconcile with finance records; pending transactions are not shown as paid; only authorized invoices are available. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-06 — Upload/download project files | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Exchange project files through controlled uploads/downloads. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Permissions, file restrictions and scanning policy apply; private links are time-limited where supported; storage quotas and upload failures are handled; downloads enforce client/project access. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-07 — Submit project requirements | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Capture project intake answers and updates. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Required fields follow approved project scope; submissions retain author/time/version; changes notify responsible staff; credentials are not collected in ordinary text fields. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-08 — Approve designs and deliverables | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Record client approval or rejection of a specific deliverable version. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Approver identity/time/version and comments are stored; superseded versions cannot silently inherit approval; rejection retains feedback; staff cannot impersonate approval. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-09 — Request project changes | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Capture requested scope changes and their disposition. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Request is linked to project/scope; staff can estimate and seek approval; no automatic inclusion or fee commitment; status/history remain visible to authorized users. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-10 — Message project manager | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide project-linked client/staff communication. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Sender/time and project linkage are stored; participants are permission-checked; internal notes stay separate; notification failures are handled. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-11 — Submit support tickets | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Allow clients to open and track support tickets. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Ticket owner/status/history are recorded; visibility is client-scoped; response policies match the agreed support plan; attachments follow FILES controls. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-12 — Client notifications | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Notify clients about approved project, document and support events. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Recipients and channels follow preferences and permissions; duplicates are controlled; sensitive details are minimized; delivery/failure history is visible. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-13 — Subscription management | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Let clients manage eligible subscription settings. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Changes follow provider/state rules and contract terms; effective date and consequences are clear; no cross-client changes; pending actions reconcile with billing. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-05-14 — AI client support assistant | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Assist clients using authorized support knowledge and records. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only client-permitted context is retrieved; uncertainty/escalation exists; no unauthorized disclosure, refund, contract or account change; evaluation gates pass. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-06 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-06-01 — Project creation from accepted proposal | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Create a project from an accepted proposal with staff control. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Accepted proposal/version and client are linked; repeated conversion cannot create accidental duplicates; agreement/deposit readiness is visible; scope is preserved. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-02 — Project dashboard | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide a staff overview of active delivery projects. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only authorized projects appear; stage/owner/milestones are accurate; filters and empty states work; client views remain separately scoped. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-03 — Task and subtask management | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage project tasks/subtasks and status. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Tasks have project, owner, status and due context; nesting is bounded; updates retain history; deleting a parent has an explicit safe policy. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-04 — Team assignment | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Assign staff or contractors to project responsibilities. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only eligible people are assigned; project permissions follow least privilege; removal revokes future access; unrelated client/finance data stays inaccessible. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-05 — Project milestones | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Track agreed milestones and completion evidence. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Milestone dates/status/deliverables are linked to the agreed scope; acceptance evidence is recorded; completion does not automatically mark an invoice paid. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-06 — Kanban board | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Display project tasks as an accessible Kanban board. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Column/status mapping is consistent; keyboard alternatives work; concurrent changes are handled; permissions match task editing; not required for P1 sales pipeline. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-07 — Project files and documentation | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Organize project documentation and files. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Files have project and visibility classification; versions/links remain understandable; access follows staff/client permissions; secrets use an approved secure channel. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-08 — Deadline and progress tracking | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Track deadlines, overdue work and progress indicators. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Dates use clear timezones; progress calculation is documented; overdue status updates correctly; no false completion from task counts alone where milestones remain open. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-09 — Client review and approval | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage review requests and version-specific client acceptance. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Request identifies deliverable/version/approver; approval/rejection is timestamped; notifications are reliable; later revisions require appropriate renewed approval. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-10 — Time tracking | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Record time against authorized project work. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Entries have person/date/duration/project; corrections are audited; totals reconcile; client visibility and billable rules are approved before exposure. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-11 — Project profitability tracking | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Compare project revenue and costs with defined calculations. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Recognized/invoiced/collected revenue basis is explicit; time and expenses reconcile; missing cost inputs are disclosed; currency handling is consistent. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-12 — Resource and capacity planning | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Plan staff availability and delivery capacity. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Capacity assumptions and time periods are explicit; assignments do not silently override availability; reports respect access and approved working calendars. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-13 — Gantt chart | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Visualize dated work and dependencies on a timeline. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Dependency/date changes remain consistent with tasks; impossible/cyclic dependencies are detected; accessible non-chart representation exists. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-14 — Automated project creation | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Create projects from approved events without manual duplication. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Trigger conditions include agreement/deposit policy; operation is idempotent; failures are visible; created scope reflects the accepted version; manual override exists. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-06-15 — AI project progress summaries | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Draft project summaries from authorized delivery records. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Summary cites relevant milestones/tasks and distinguishes missing data; staff reviews before external sharing; no invented completion or dates. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-07 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-07-01 — Proposal and invoice templates | P1. P1 baseline/ongoing within source qualification | Operations; Maintain reusable proposal and invoice templates for business operations. | [M11-03](#m11-03); P1 baseline/ongoing within source qualification | Templates contain verified entity/contact data, currency, scope/fees and applicable payment terms; template availability does not imply an online document system. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Owner reviews a synthetic complete proposal/invoice/ledger scenario and correction trail; verify real contact/payment operating readiness separately. |
| FR-07-02 — Manual payment tracking | P1 proposed; implementation location pending D-007. P1 qualified/proposed; named gate retained | Operations; ADM-027 | [M11-03](#m11-03), [M11-06](#m11-06); P1 qualified/proposed; named gate retained | Amount/date/currency/reference and invoice link are retained; corrections are traceable; Won is not payment evidence; external ledger versus P1 dashboard implementation must be decided. [Source status: Decision required — S2 proposes P1; external manual process versus dashboard feature unresolved (D-007).] | Owner reviews a synthetic complete proposal/invoice/ledger scenario and correction trail; verify real contact/payment operating readiness separately.; External-reference uniqueness, precise money, finance permission, void/replacement and responsive panel tests. |
| FR-07-03 — Client billing profiles | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Maintain client billing information separately from ordinary contacts. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only needed fields are stored; authorized updates are audited; billing identity can differ from project contact; jurisdiction-specific fields are configured only when required. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-04 — Automated invoice generation | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Generate invoices from approved commercial records. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Invoice reference/version, client, currency, line items, totals and due terms are validated; draft/issued/cancelled states are tracked; retries do not issue duplicates. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-05 — Online payment gateway | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Collect payments through an approved eligible provider. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Provider eligibility/account readiness confirmed; signed callbacks reconcile amount/currency/invoice; retries are idempotent; browser redirects alone cannot mark paid; card data is not stored unnecessarily. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-06 — Deposit and milestone payments | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Represent deposits and staged payments against agreements. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Schedule matches agreement totals; partial/overdue payments are represented; milestone completion and receipt are separate events; manual P1 commercial schedules remain possible outside this module. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-07 — Recurring subscriptions | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage recurring billing for approved subscriptions/retainers. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Billing interval, start/end, cancellation and provider state are explicit; duplicate charges are prevented; failed payments are handled; self-service management may remain P3. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-08 — Payment reminders | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Send approved billing reminders. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only eligible outstanding balances trigger reminders; disputed/cancelled/paid invoices follow explicit suppression rules; send history and stop conditions are recorded. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-09 — Contract and SOW management | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Store and manage agreements, SOWs and their versions. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Status/version/parties and access are recorded; templates are reviewed for actual jurisdiction; signature evidence is preserved; amendments do not overwrite signed originals. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-10 — Refund and cancellation management | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Track refund/cancellation requests and approved outcomes. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Authority, amount/currency, original payment and provider result are recorded; retries cannot duplicate refunds; reporting reconciles adjustments; policies are reviewed before use. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-11 — Financial reporting | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Produce defined finance summaries from reliable records. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Periods/currencies and cash-versus-accrual basis are clear; totals reconcile to source records; exports are access-controlled; this is not assumed statutory accounting compliance. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-12 — Multi-currency invoicing | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Issue invoices in approved currencies. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Invoice currency is immutable after issue except controlled correction; conversion basis is explicit; amounts use precise representation; provider settlement differences are reconciled. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-13 — Expense tracking | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Record business/project expenses and supporting evidence. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Amount/currency/date/category/project where relevant are stored; corrections audited; receipt access controlled; recurring estimates are distinguished from paid expenses. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-07-14 — Revenue and profit forecasting | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Forecast future revenue/profit using defined scenarios. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Assumptions/time horizon and missing costs are explicit; actuals remain separate; forecasts reconcile to pipeline/billing inputs; no guaranteed outcome is implied. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-08 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-08-01 — New lead email notification | P1. P1 baseline/ongoing within source qualification | Notifications; Operations; Notifications; Intake; CRM; ADM-002, ADM-003, PUB-015 | [M06-02](#m06-02), [M06-06](#m06-06); P1 baseline/ongoing within source qualification | Same capability as FR-02-09; one authoritative event/notification path is used; retries do not multiply alerts; delivery status is visible. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Lease contention/expiry/fencing tests; temporary/permanent/unknown provider outcomes; scheduler authentication/runtime test.; Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests. |
| FR-08-02 — Customer quote confirmation | P1. P1 baseline/ongoing within source qualification | Notifications; Operations; Notifications; Intake; CRM; ADM-002, ADM-003, PUB-015 | [M06-02](#m06-02), [M06-06](#m06-06); P1 baseline/ongoing within source qualification | Same capability as FR-02-08; send after save only; no second independent confirmation workflow is built. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Lease contention/expiry/fencing tests; temporary/permanent/unknown provider outcomes; scheduler authentication/runtime test.; Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests. |
| FR-08-03 — Lead assignment notifications | P1. P1 qualified/proposed; named gate retained | CRM; Notifications; Notify a staff member of an approved lead assignment. | [M07-09](#m07-09); P1 qualified/proposed; named gate retained | Recipient is the current eligible owner; assignment and event are traceable; repeat events are deduplicated; channel choice is approved; sensitive data is minimized. [Source status: Proposed P1 specific assignment notification; general staff alerts are confirmed.] | Assignment/reassignment/no-change/disabled and worker retry tests with controlled inbox. |
| FR-08-04 — Event-based workflow triggers | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Trigger approved workflows from recorded domain events. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Event definitions and versioned workflow rules are explicit; replay/idempotency and failure behavior are tested; disabled workflows do not execute. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-05 — Automated lead follow-up | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Apply approved follow-up workflows to eligible leads. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Reuse FR-02-15/FR-08-06; eligibility/consent/stop rules are enforced; manual override and history exist; no duplicate campaign engine. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-06 — Email and SMS sequences | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Execute controlled email/SMS sequences. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Channel eligibility, opt-out, frequency limits and reply/closure stopping are enforced; sends and failures are logged; provider callbacks verified. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-07 — Scheduled tasks and reminders | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Run approved scheduled tasks and external reminders. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Timezone, cancellation, retry and duplication rules are tested; permissions apply; manual P1 tasks remain usable without this scheduler. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-08 — CRM pipeline automation | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Apply approved stage-related CRM actions. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Rules cannot bypass required authorization; stage loops/duplicate actions are prevented; rule history and manual correction are available. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-09 — Invoice and payment automation | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Automate approved invoice and payment-related actions. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Actions use reconciled finance events; retries are idempotent; refunded/disputed/partial states handled; no payment inferred from browser success. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-10 — Project onboarding automation | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Automate agreed project onboarding steps. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Prerequisites are verified; template/version and created records are linked; duplicate events do not create duplicate onboarding; failures are recoverable. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-11 — Webhook management | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage approved inbound/outbound webhook integrations. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Signatures or approved authentication checked; payloads validated; secrets protected; replay/deduplication, retries and failure visibility apply when introduced. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-12 — Visual workflow builder | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide a graphical editor for approved workflow components. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only authorized components/actions are available; invalid/cyclic definitions rejected; preview/version/activation controls exist; runtime remains auditable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-13 — Conditional branching workflows | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Support conditional workflow branches with explicit limits. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Conditions are deterministic and testable; missing data has defined behavior; execution limits prevent loops; unauthorized data cannot be queried. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-14 — AI-driven automation | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Use AI within approved, bounded workflow steps. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | High-impact/external actions require approved safeguards; model outputs are validated; cost/time limits and fallback exist; decisions are traceable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-08-15 — Workflow execution logs and retries | P3 advanced console; basic reliability from P1 onward. P1 reliability slice; advanced console deferred P3 | Notifications; Operations; Provide an advanced workflow execution history and replay console. | [M06-02](#m06-02); P1 reliability slice; advanced console deferred P3 | Execution/step outcomes and safe retry controls are visible; replay does not repeat completed irreversible actions; secrets/PII minimized. Basic logs/retries are required from each feature's first release, not postponed to P3. [Source status: Conditional P3 advanced console; basic logging/retries required with every first-release workflow/integration (D-025).] | Lease contention/expiry/fencing tests; temporary/permanent/unknown provider outcomes; scheduler authentication/runtime test. |

### FR-09 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-09-01 — Secure staff login/logout | P1. P1 baseline/ongoing within source qualification | Identity; Identity; Content; Shared presentation; ADM-026, STA-001, STA-002, STA-003, STA-004 | [M03-01](#m03-01), [M03-03](#m03-03), [M04-04](#m04-04); P1 baseline/ongoing within source qualification | No public staff signup; valid sessions required; logout/revocation work; failed sign-in is controlled; server routes enforce access independently of UI. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Provider callback/session integration, forged/stale identity, logout and safe-redirect tests; local-session expiry/revocation if selected.; Real staging recovery/MFA, timeout/replay, generic acknowledgement and keyboard tests; later visual integration in M04-04.; Cross-role navigation and direct-route tests; responsive drawer/skip-link/focus checks. |
| FR-09-02 — Admin dashboard overview | P1. P1 baseline/ongoing within source qualification | Identity; Content; Shared presentation; CRM; Content; Operations; ADM-001, ADM-012, ADM-026, STA-001, STA-002, STA-003, STA-004 | [M04-04](#m04-04), [M11-01](#m11-01); P1 baseline/ongoing within source qualification | Authorized lead/status summaries and due tasks match source data; links reach protected detail views; draft CMS actions are available to permitted roles; no future module is falsely shown as working. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Cross-role navigation and direct-route tests; responsive drawer/skip-link/focus checks.; Compare metrics with known scoped fixtures and list queries; slow/failure panels, timezone, responsive and keyboard tests. |
| FR-09-03 — Lead management table | P1. P1 baseline/ongoing within source qualification | Notifications; Intake; CRM; CRM; Intake; ADM-002, ADM-003, PUB-015 | [M06-06](#m06-06), [M07-02](#m07-02); P1 baseline/ongoing within source qualification | Rows show approved fields/status/owner/date/reference; results respect permissions; pagination is stable; empty/loading/error states exist. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests.; Status/assignment permissions, stale revision, source visibility and suspended-staff tests; list/detail state review. |
| FR-09-04 — Lead detail pages | P1. P1 baseline/ongoing within source qualification | Notifications; Intake; CRM; CRM; Intake; ADM-002, ADM-003, PUB-015 | [M06-06](#m06-06), [M07-02](#m07-02); P1 baseline/ongoing within source qualification | Record links and snapshot remain accurate; private notes protected; missing optional data handled; unauthorized identifiers cannot retrieve data. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests.; Status/assignment permissions, stale revision, source visibility and suspended-staff tests; list/detail state review. |
| FR-09-05 — Search and filtering | P1. P1 baseline/ongoing within source qualification | CRM; CRM; Content; Identity; Operations; Search/filter authorized staff records. | [M07-06](#m07-06), [M11-02](#m11-02); P1 baseline/ongoing within source qualification | Search covers approved fields; filters combine predictably; results/pagination are access-scoped; input and query size are bounded. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Pagination/tie-break/query-plan tests, malicious filters, note correction/redaction and cross-role disclosure cases.; Role-by-route/action matrix, desktop/mobile/zoom navigation and state review with realistic synthetic data. |
| FR-09-06 — Lead status and assignment | P1. P1 baseline/ongoing within source qualification | CRM; Intake; ADM-002, ADM-003 | [M07-02](#m07-02); P1 baseline/ongoing within source qualification | Reuse FR-02-10/11 and FR-03-05; server permissions and activity history apply; UI prevents unsupported changes but is not the sole security control. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Status/assignment permissions, stale revision, source visibility and suspended-staff tests; list/detail state review. |
| FR-09-07 — Basic user roles and permissions | P1. P1 baseline/ongoing within source qualification | Identity; Operations; Identity; Content; Shared presentation; CRM; Content; Identity; Operations; ADM-023, ADM-024, ADM-026, STA-001, STA-002, STA-003, STA-004 | [M03-02](#m03-02), [M03-04](#m03-04), [M04-04](#m04-04), [M11-02](#m11-02), [M11-04](#m11-04); P1 baseline/ongoing within source qualification | Permission matrix is approved; backend denies forbidden reads/mutations; account provisioning/revocation works; least privilege applies; no advanced permission builder needed. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Permission matrix and guessed-ID tests across server entry points, actor changes and linked targets.; Last-admin guard, stale-cookie deactivation, provision/revoke and recovery runbook exercise.; Cross-role navigation and direct-route tests; responsive drawer/skip-link/focus checks.; Role-by-route/action matrix, desktop/mobile/zoom navigation and state review with realistic synthetic data.; Admin versus Sales/Editor negatives, fresh-auth/last-admin/stale edit tests and account detail mobile/keyboard review. |
| FR-09-08 — Internal activity history | P1. P1 baseline/ongoing within source qualification | CRM; Show authorized operational history to staff. | [M07-06](#m07-06), [M07-00](#m07-00); P1 baseline/ongoing within source qualification | Reuse record activities and audit sources; author/time/action are visible; internal details are not public; access matches the underlying record. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Pagination/tie-break/query-plan tests, malicious filters, note correction/redaction and cross-role disclosure cases.; Model/index, event dedupe, target scope and correction-audit tests. |
| FR-09-09 — Team management | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage team invitations, membership and working roles. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Invite lifecycle and revocation work; only permitted admins grant roles; departing staff lose access; minimum P1 staff provisioning remains required before this broader team module. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-09-10 — Department management | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Group staff into departments when operationally needed. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Membership and manager roles are explicit; department membership alone does not bypass record permissions; inactive departments do not strand work. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-09-11 — Staff performance dashboard | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Summarize staff performance using agreed measures. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Definitions/time periods are visible; access is appropriate; missing data is disclosed; counts reconcile with records and do not claim unmeasured productivity. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-09-12 — Global admin notifications | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide a centralized staff notification center. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Notifications are recipient-scoped with read state and links; duplicate events controlled; email failure does not erase in-app events; preferences supported where approved. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-09-13 — Audit logs | P1. P1 baseline/ongoing within source qualification | Operations; ADM-025 | [M02-03](#m02-03), [M11-05](#m11-05); P1 baseline/ongoing within source qualification | Actor/time/action/target/outcome are stored where applicable; ordinary staff cannot alter audit records; secrets excluded; retention/access policy defined; failed authorized actions are diagnosable. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Schema/index tests, unauthorized read/update attempts, transaction rollback and PII redaction verification.; Audit-access/filter/pagination and redaction tests; honest empty/loading/failure states. |
| FR-09-14 — Advanced permission builder | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Allow authorized administrators to configure advanced permission sets. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Privilege escalation and self-granting risks are controlled; permission changes audited; effective access is inspectable; regression tests cover sensitive operations. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-09-15 — Customizable dashboard widgets | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Let staff personalize permitted dashboard views. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Widgets use existing authorized data; preferences cannot expose restricted records; defaults and reset work; layout remains accessible/responsive. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-09-16 — Multi-organization management | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Manage multiple organizations when a SaaS/business need is approved. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Organization selection and membership are explicit; every relevant record/action is isolated; platform support access is governed; billing and identity boundaries are approved. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-10 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-10-01 — Google Analytics 4 | P1. P1 baseline/ongoing within source qualification | Discovery; Intake; Operations; Intake; CRM; Content; Discovery; Operations; Collect approved website analytics through GA4. | [M10-03](#m10-03), [M14-03](#m14-03); P1 baseline/ongoing within source qualification | Production events follow consent configuration; no inquiry text/email/phone is sent; test/internal traffic policy is defined; duplicate initialization is prevented. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Network/event payload inspection, consent changes, direct confirmation/retry tests and controlled GA4 debug verification.; Production smoke/controlled messages, provider delivery records, Search Console property/sitemap, analytics payload and alert checks. |
| FR-10-02 — Google Search Console | P1. P1 baseline/ongoing within source qualification | Operations; Discovery; Intake; CRM; Content; Discovery; Operations; Verify ownership and monitor search/indexing through Search Console. | [M10-04](#m10-04), [M14-03](#m14-03); P1 baseline/ongoing within source qualification | Authorized property setup and sitemap submission are documented; production indexing settings are checked; access is limited to appropriate maintainers. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Check staging generated artifacts; verify actual Search Console property/sitemap after M14-02 and record status.; Production smoke/controlled messages, provider delivery records, Search Console property/sitemap, analytics payload and alert checks. |
| FR-10-03 — Quote conversion tracking | P1. P1 baseline/ongoing within source qualification | Discovery; Intake; Operations; Intake; CRM; Content; Discovery; Operations; Track quote success only after durable backend acceptance. | [M10-03](#m10-03), [M14-03](#m14-03); P1 baseline/ongoing within source qualification | Failed/blocked submissions do not count; idempotent retries do not inflate counts; no PII is transmitted; source context is preserved separately in CRM. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Network/event payload inspection, consent changes, direct confirmation/retry tests and controlled GA4 debug verification.; Production smoke/controlled messages, provider delivery records, Search Console property/sitemap, analytics payload and alert checks. |
| FR-10-04 — Lead count and status summary | P1. P1 baseline/ongoing within source qualification | CRM; Content; Operations; ADM-001, ADM-012 | [M11-01](#m11-01); P1 baseline/ongoing within source qualification | Definitions distinguish inquiries, opportunities and customers; counts reconcile with filtered records; permissions/date ranges apply; duplicate tags are handled explicitly. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Compare metrics with known scoped fixtures and list queries; slow/failure panels, timezone, responsive and keyboard tests. |
| FR-10-05 — Lead source attribution | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Aggregate lead-source capture into attribution reports. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | P1 capture remains FR-02-13; report model/time window and Unknown are explicit; contacts/deals are not double-counted; no unsupported multi-touch certainty. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-10-06 — Sales funnel reporting | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Report movement and conversion through the sales funnel. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Stage history supports period calculations; denominator and exclusions are stated; reopened/lost deals handled consistently; access-scoped totals reconcile. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-10-07 — Revenue reporting | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Report invoiced, collected, outstanding and adjusted revenue separately. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Monetary basis/currency/period are clear; refunds and partial payments reconcile; estimated opportunity values never silently become actual revenue. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-10-08 — Service popularity analytics | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Report approved service engagement and inquiry demand. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Metrics distinguish views/selections/leads; multi-service inquiries use a documented counting rule; no misleading summed unique-lead counts. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-10-09 — Customer acquisition cost | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Calculate acquisition cost from defined spend and customer counts. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Spend source, attribution window and customer definition are explicit; missing spend is disclosed; no division by zero; figures reconcile to the chosen period. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-10-10 — Team performance reports | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Report team activity and outcomes using agreed measures. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Metrics/time windows and reassignment handling are defined; permissions protect employee/customer data; totals reconcile with tasks and pipeline. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-10-11 — Custom report builder | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Allow authorized users to compose reports from approved fields. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Field/row permissions apply; expensive queries are bounded; report definitions can be saved; exports preserve access and currency/time definitions. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-10-12 — AI business insights | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Suggest business observations from reliable reports. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Observations link to data/time range; uncertainty and sample limits shown; no invented causes; staff controls external sharing. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-10-13 — Predictive analytics | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Model future outcomes from adequate historical data. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Training/evaluation scope and performance are documented; insufficient data produces a limitation rather than false certainty; human decisions and monitoring remain. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-11 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-11-01 — Transactional email provider | P1. P1 baseline/ongoing within source qualification | Identity; Notifications; Operations; Notifications; Operations; Notifications; Intake; CRM; Intake; CRM; Content; Discovery; Operations; ADM-002, ADM-003, PUB-015 | [M00-02](#m00-02), [M06-02](#m06-02), [M06-06](#m06-06), [M14-03](#m14-03); P1 baseline/ongoing within source qualification | Domain/sender verified; credentials server-only; retry and bounce/failure handling defined; templates tested; provider selection and cost approved. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Review provider capability checklist against S6 §§15–16,20; identify a tested fallback for each essential external dependency.; Lease contention/expiry/fencing tests; temporary/permanent/unknown provider outcomes; scheduler authentication/runtime test.; Real staging delivery to controlled recipients, escaped content, delayed mail, guessed reference and staff access tests.; Production smoke/controlled messages, provider delivery records, Search Console property/sitemap, analytics payload and alert checks. |
| FR-11-02 — Analytics integrations | P1. P1 baseline/ongoing within source qualification | Discovery; Intake; Operations; Connect the approved analytics services with privacy controls. | [M10-03](#m10-03); P1 baseline/ongoing within source qualification | One controlled integration path serves FR-10-01/02/03; consent and PII restrictions apply; secrets and private dashboard data are not exposed. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Network/event payload inspection, consent changes, direct confirmation/retry tests and controlled GA4 debug verification. |
| FR-11-03 — GoHighLevel CRM | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Synchronize approved CRM data with GoHighLevel when justified. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Source of truth, field mapping and direction are approved; external IDs prevent duplicates; conflicts/retries/deletion/consent are handled; no second uncontrolled CRM master. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-04 — Google Calendar | P2 baseline; P1 proposed, pending D-003. P2 baseline; conditional P1 only after D-003 | Intake; Intake; Operations; PUB-014 | [M06-08](#m06-08), [M06-09](#m06-09); P2 baseline; conditional P1 only after D-003 | External-link versus synchronized booking is selected; permissions and provider capability verified; timezone/cancellation/rescheduling/retry behavior defined; calendar alone is not assumed to create a CRM lead. [Source status: Decision required — baseline P2; P1 external or integrated booking remains under review (D-003).] | Controlled provider sandbox/staging tests for slot races, timezone and outage; scope/credential review.; Spoof/replay/duplicate/out-of-order callback tests and full booking/cancel/reschedule E2E under selected integration. |
| FR-11-05 — ClickSend SMS | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Connect approved SMS sending through ClickSend. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Recipient consent/opt-out and spend limits apply; provider credentials protected; delivery callbacks verified; duplicate sends controlled; eligibility verified before use. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-06 — Payment providers | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Integrate payment provider adapters only after eligibility and selection. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Use FR-07-05 controls; provider account/currency/country support verified; signature and idempotency checks apply; secrets isolated; no provider assumed available. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-07 — Google Drive / cloud storage | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Connect approved cloud-file storage or Google Drive workflows. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Access, ownership, retention and permission mapping approved; shared links do not bypass client access; transfer failures/revocation handled; public/private assets separated. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-08 — Slack / Microsoft Teams | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Send selected operational notifications to Slack or Teams. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Channels/recipients are approved; sensitive payloads minimized; protected links used; retries controlled; no unrestricted cross-channel posting. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-09 — Zapier / Make / n8n | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Expose approved automation integration points for Zapier, Make or n8n. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Credential scopes and data mappings approved; webhook security/replay controls apply; failures visible; external tools cannot bypass internal authorization. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-10 — Accounting software | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Exchange approved finance records with accounting software. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Master system and mappings approved; references/currency/totals reconcile; duplicate exports prevented; corrections and tax fields follow actual setup. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-11 — WhatsApp Business Platform | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Integrate the approved WhatsApp Business Platform use case. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Provider/account eligibility and messaging rules verified at selection; consent/opt-out and templates respected; secrets/callbacks secure; records linked correctly. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-12 — GitHub integration | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Connect GitHub to business/project workflows beyond basic source control. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Repository permissions and selected data scope are explicit; private code/secrets not exposed to clients; access revocation works; ordinary Git/CI remains P1 engineering infrastructure. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-13 — Public developer API | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide a versioned external API for approved consumers. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Authentication/scopes, rate limits, pagination, versioning and audit are defined; tenant/record permissions enforced; no public access to private data. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-11-14 — Integration marketplace | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Offer a governed catalog of integration extensions. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Publisher/permission review, installation/revocation, version compatibility and data access are controlled; marketplace need and operating model approved first. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-12 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-12-01 — Website AI chatbot | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide a public AI assistant over approved website knowledge. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Only approved content used; uncertainty and human contact fallback present; no fabricated quote/availability/credentials; abuse/cost/privacy controls tested. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-02 — AI FAQ assistant | P2. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Answer questions from approved published FAQs/help content. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Answers reference current approved knowledge; unknown questions escalate; private drafts/records excluded; no unsupported legal/security assurances. [Source status: Proposed catalog requirement; detailed scope and phase require approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-03 — AI lead qualification | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Reuse AI-assisted lead qualification. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Same capability as FR-02-18; no separate scoring store or autonomous rejection is introduced; access and evaluation gates apply. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-04 — AI quote scope assistant | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Suggest scope questions and possible service matches. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Suggestions use approved catalog facts; no binding price/timeline; staff reviews; user-provided content cannot override authorization or tool boundaries. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-05 — AI proposal drafting | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Draft proposal text from approved scope and templates. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Draft references the correct inquiry/version; fees/terms require verification; no invented deliverables or automatic sending/signing; human approval logged. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-06 — AI customer support | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Assist customer support with permitted knowledge and context. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Access follows ticket/client permissions; escalation exists; no autonomous refunds/account changes unless separately approved; evidence and uncertain claims are reviewable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-07 — AI content generation | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Reuse AI content drafting within the editorial workflow. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Same capability as FR-04-14; drafts require human fact/claim review and explicit publication; no automated fictional proof. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-08 — AI workflow suggestions | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Suggest workflow improvements based on authorized process information. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Suggestions are non-executing until approved; prerequisites/risks visible; no unauthorized connector setup or external action; costs and uncertainty stated. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-09 — AI CRM insights | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Generate advisory CRM observations from permitted data. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Reuse FR-03-12 and FR-10-12 controls; sources/time ranges visible; private record scope enforced; conclusions remain correctable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-10 — AI project management assistant | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Assist with project questions and summaries. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Reuse FR-06-15; cite task/milestone data; no invented progress or autonomous deadline commitments; client sharing requires review. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-12-11 — AI voice agent | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide voice assistance only for a defined approved use case. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Identity/disclosure, consent and recording rules are verified; escalation and interruption work; no unauthorized commitments; call costs and transcripts/access are controlled. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-13 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-13-01 — Agency dashboard | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Provide a specialized agency operations dashboard in a separate module/product. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Product/tenant scope approved; metrics derive from agency records; agency access isolation enforced; no dependency that couples public ARADUN marketing to policy operations. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-02 — Customer and household records | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Maintain agency customers and household relationships where relevant. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Identity/relationship rules and sensitive-data policy approved; household membership does not automatically grant disclosure rights; corrections preserve history. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-03 — Policy records and renewal dates | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Track policy records, statuses and renewal dates. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Required fields and status definitions approved by domain owners; date corrections audited; no statement that records bind coverage or replace carrier confirmation. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-04 — Carrier/company directory | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Maintain carrier/company reference information. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Entries have controlled identity/status; no assumed appointment/partnership claims; duplicate/retired entries handled without losing policy links. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-05 — Quote and policy workflow tracking | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Track authorized quote-to-policy workflow events. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Workflow states and permissions domain-approved; external confirmation distinguished from internal status; quote/policy history retained; no automated binding without explicit capability/authorization. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-06 — Renewal reminders | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Generate approved renewal tasks/reminders. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Dates and lead times configurable within approved rules; cancellation/renewed policies suppressed; consent/channel rules apply; duplicates and failures controlled. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-07 — Commission tracking | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Record expected and received commissions with reconciliation. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Source policy/statement/amount/period/currency tracked; adjustments audited; expected versus received distinguished; formulas and access reviewed by domain owner. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-08 — Document management | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Store agency documents with strict classification and access. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Agency/customer/policy linkage is correct; encrypted storage/access/retention policy approved; private files never publicly indexed; audit and download controls tested. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-09 — Agent assignment | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Assign agency work to eligible agents. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Agent eligibility and organization membership verified; access scope follows policy; reassignment history retained; licensing/authority assumptions are not fabricated. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-10 — Claims/service request tracking | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Track claims/service requests and referrals as authorized. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Request type/status/owner/history recorded; carrier decisions remain distinct; sensitive data minimized; communication scope follows approved agency policies. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-11 — Carrier integration adapters | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Connect permitted carrier systems through isolated adapters. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Carrier access/contracts verified; mapping and reconciliation tested; callbacks secured; retries controlled; no invented universal carrier API or unauthorized scraping. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-12 — Compliance and audit controls | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Apply agency-specific audit and compliance controls. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Applicable requirements determined by qualified review; access/retention/audit behavior tested; no blanket compliance certification claim; agency boundaries enforced, with tenant isolation where applicable. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-13-13 — Agency-specific reporting | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Report agency-specific operational metrics. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Definitions/domain scope approved; reports reconcile with policies/requests; role/organization filters apply where applicable; exports controlled; no unsupported compliance conclusions. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### FR-14 requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| FR-14-01 — HTTPS and secure configuration | P1. P1 baseline/ongoing within source qualification | Identity; Notifications; Operations; Shared infrastructure; Operations; Identity; Operations; all write owners; Operations; Notifications; Deploy with HTTPS, secure environment configuration and appropriate headers. | [M00-02](#m00-02), [M01-02](#m01-02), [M13-02](#m13-02), [M14-02](#m14-02); P1 baseline/ongoing within source qualification | No production mixed content; secrets excluded from client bundles/logs; header policy verified against integrations; staging isolated; domain/redirect behavior tested. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Review provider capability checklist against S6 §§15–16,20; identify a tested fallback for each essential external dependency.; Invalid/missing-env cases, bundle/secret scan, staging misconfiguration negative tests.; Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise.; Live config/TLS/DNS/redirect, known public/private smoke and controlled mail tests; immediate containment if critical failures occur. |
| FR-14-02 — Server-side input validation | P1. P1 baseline/ongoing within source qualification | Shared infrastructure; Intake; Identity; Operations; all write owners; Validate all untrusted input on the server. | [M02-02](#m02-02), [M06-01](#m06-01), [M13-02](#m13-02); P1 baseline/ongoing within source qualification | Types/lengths/allowed values and ownership checked; structured errors returned safely; unsafe queries/content blocked; client-only validation never substitutes for server checks. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Boundary/serialization tests, malformed IDs and payloads, date/money edge cases, redaction checks.; Model/index/input edge tests and malicious fields; each required/optional journey field exercised.; Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise. |
| FR-14-03 — Role-based authorization | P1. P1 baseline/ongoing within source qualification | Identity; Operations; Identity; Operations; all write owners; Authorize every protected read and mutation on the server. | [M03-02](#m03-02), [M03-05](#m03-05), [M13-02](#m13-02); P1 baseline/ongoing within source qualification | Permission matrix enforced across endpoints/actions/files/search; direct requests and guessed IDs denied; negative access tests cover sensitive operations. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Permission matrix and guessed-ID tests across server entry points, actor changes and linked targets.; Missing/suspended/changed-role contexts, origin/CSRF controls, expired session and sensitive-log tests.; Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise. |
| FR-14-04 — Secure staff authentication | P1. P1 baseline/ongoing within source qualification | Identity; Identity; Operations; ADM-023, ADM-024, ADM-026, STA-001, STA-002, STA-003, STA-004 | [M03-01](#m03-01), [M03-03](#m03-03), [M03-04](#m03-04), [M03-05](#m03-05), [M11-04](#m11-04); P1 baseline/ongoing within source qualification | Selected provider meets approved session/recovery/revocation needs; cookies/session handling secure; no unsafe custom password handling; failed attempts monitored; MFA decision resolved. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Named task verification is binding; evidence in M03-01, M03-03, M03-04, M03-05, M11-04 and M13-01 coverage audit. |
| FR-14-05 — Rate limiting and spam protection | P1. P1 baseline/ongoing within source qualification | Operations; Intake; Notifications; CRM; Identity; Operations; all write owners; Control abusive form/API traffic without blocking ordinary users unnecessarily. | [M02-04](#m02-04), [M06-07](#m06-07), [M13-02](#m13-02); P1 baseline/ongoing within source qualification | Server-enforced limits and spam checks applied; accessible fallback exists if challenges used; legitimate retries handled; no fake success that loses genuine inquiries. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Concurrent increment/expiry tests, spoofed origin and oversized requests, accessible retry feedback.; Record browser journeys and DB/outbox assertions with synthetic data; repeat fault scenarios deterministically.; Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise. |
| FR-14-06 — Database backups | P1. P1 baseline/ongoing within source qualification | Operations; Shared infrastructure; Operations; Notifications; Back up essential data and verify restoration. | [M02-05](#m02-05), [M13-03](#m13-03); P1 baseline/ongoing within source qualification | Backup schedule/retention/access and recovery targets approved; restoration demonstrated; backups include relevant database/content and file strategy; secrets/data protected. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Duplicate-key tests, populated-value uniqueness, fixture repeatability, production-reset refusal and migration rehearsal on disposable data.; Timed isolated restore, compare record/index integrity, apply suppression ledger and simulate uncertain-provider delivery recovery. |
| FR-14-07 — Error logging and monitoring | P1. P1 baseline/ongoing within source qualification | Identity; Notifications; Operations; Operations; Intake; CRM; Content; Discovery; Operations; Monitor errors and important operational failures. | [M00-02](#m00-02), [M01-04](#m01-04), [M02-03](#m02-03), [M13-04](#m13-04), [M14-03](#m14-03); P1 baseline/ongoing within source qualification | Alerts reach responsible maintainers; logs have useful correlation without secrets/excess PII; errors do not expose internals publicly; retention and access defined. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Named task verification is binding; evidence in M00-02, M01-04, M02-03, M13-04, M14-03 and M13-01 coverage audit. |
| FR-14-08 — Privacy and consent handling | P1. P1 baseline/ongoing within source qualification | Identity; Intake; CRM; Content; Operations; Operations; Intake; Content; Operations; Identity; Operations; all write owners; PUB-017, PUB-018, TRU-01, TRU-02, TRU-03 | [M00-03](#m00-03), [M02-04](#m02-04), [M06-01](#m06-01), [M09-09](#m09-09), [M13-02](#m13-02); P1 baseline/ongoing within source qualification | Privacy acknowledgement separated from optional marketing consent; retention/deletion/contact process defined; analytics/embeds follow selected consent rules; actual providers reflected in notices. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Owner decision review using the inherited register; trace affected tasks and route activation.; Concurrent increment/expiry tests, spoofed origin and oversized requests, accessible retry feedback.; Model/index/input edge tests and malicious fields; each required/optional journey field exercised.; Owner/legal-content review as applicable, policy links, heading/reading accessibility, activation/noindex rules and contact tests.; Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise. |
| FR-14-09 — Automated deployment and testing | P1. P1 baseline/ongoing within source qualification | Shared infrastructure; Operations; Operations; Shared infrastructure; Operations; Notifications; Automate relevant checks and controlled deployment. | [M01-01](#m01-01), [M01-03](#m01-03), [M01-04](#m01-04), [M02-05](#m02-05), [M13-04](#m13-04), [M14-02](#m14-02); P1 baseline/ongoing within source qualification | Lint/type/build and risk-appropriate tests run; secrets isolated; staging/production separated; release and rollback steps documented; checks cover critical lead/auth/payment paths when present. [Source status: Confirmed concept; detailed acceptance criteria proposed for review.] | Named task verification is binding; evidence in M01-01, M01-03, M01-04, M02-05, M13-04, M14-02 and M13-01 coverage audit. |
| FR-14-10 — Multi-factor authentication for staff | P1. P1 baseline/ongoing within source qualification | Identity; ADM-026, STA-002, STA-003, STA-004 | [M03-03](#m03-03); P1 baseline/ongoing within source qualification | Mandatory versus available policy resolved; enrollment/recovery and revocation tested; privileged access cannot silently bypass chosen policy; provider suitability confirmed. [Source status: Decision required — S2 P1 mandatory wording conflicts with S1 if-available wording (D-009).] | Real staging recovery/MFA, timeout/replay, generic acknowledgement and keyboard tests; later visual integration in M04-04. |
| FR-14-11 — File upload security | P2 baseline; P1 prerequisite if uploads introduced. P1 only if uploads selected; general scope P2 | Content; Operations; Identity; Operations; all write owners; Validate, isolate and authorize uploaded files whenever introduced. | [M08-07](#m08-07), [M13-02](#m13-02); P1 only if uploads selected; general scope P2 | Size/type/content checks and storage permissions apply; scanning policy is defined; private files cannot execute as public code; downloads enforce authorization; P1 uploads require this control immediately if selected. [Source status: Required when uploads begin; baseline P2, but P1 if the selected article-image workflow includes uploads (D-012).] | Oversize/MIME-spoof/active-file/unauthorized/quarantine cases; failed upload cleanup and storage backup scope review.; Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise. |
| FR-14-12 — Webhook signature verification | P2 baseline; accompanies first webhook. Required with first callback; general integration scope P2 | Intake; Operations; Identity; Operations; all write owners; PUB-014 | [M06-09](#m06-09), [M13-02](#m13-02); Required with first callback; general integration scope P2 | Provider signature/authentication and replay policy verified; invalid events rejected; raw-body handling where required tested; idempotency and secret rotation supported from first webhook release. [Source status: Required from first webhook introduction; baseline P2, earlier if an approved P1 integration needs it.] | Spoof/replay/duplicate/out-of-order callback tests and full booking/cancel/reschedule E2E under selected integration.; Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise. |
| FR-14-13 — API key management | P2 integration management; P1 secret protection. P1 secret protection; advanced key administration P2 | Shared infrastructure; Operations; Identity; Operations; all write owners; Manage scoped credentials and integration keys securely. | [M01-02](#m01-02), [M13-02](#m13-02); P1 secret protection; advanced key administration P2 | Keys stay server-side in approved secret storage; least privilege and rotation/revocation documented; usage auditable; never exposed in public responses or logs. [Source status: Advanced integration-key management proposed P2; secure server-side credential handling is already required P1.] | Invalid/missing-env cases, bundle/secret scan, staging misconfiguration negative tests.; Negative security tests, client bundle/log inspection, dependency scan and synthetic privacy-request/rotation exercise. |
| FR-14-14 — Advanced security audit dashboard | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Aggregate advanced security posture and audit signals. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Metrics and alert sources are defined; access tightly restricted; sensitive logs protected; investigation history retained; dashboard does not replace launch security controls. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |
| FR-14-15 — Multi-tenant data isolation | P3. Deferred; no P1 implementation | Future owner from S5 §16 / S6 §21; Enforce data isolation between organizations if multi-tenancy is approved. | Deferred to source phase; future roadmap §18. M00-01/M13-01 verify exclusion only. | Isolation covers queries, mutations, files, cache, search, jobs, exports and integrations; negative tests pass; platform support access is controlled/audited; no tenancy assumed at P1. [Source status: Conditional future candidate; phase and detail proposed for owner approval.] | No P1 implementation test. At future approval, define feature acceptance/security tests against this retained source criterion. |

### BR requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| BR-001 — Truthful business identity and messaging | P1 and ongoing. P1 baseline/ongoing within source qualification | Identity; Intake; CRM; Content; Operations; Content; Catalog; Catalog; Content; Content; Operations; Operations; Content; Catalog; Pages in linked task records and §§5–6 | [M00-03](#m00-03), [M09-01](#m09-01), [M09-04](#m09-04), [M09-09](#m09-09), [M13-05](#m13-05); P1 baseline/ongoing within source qualification | Name/descriptor/tagline are consistent; public facts are owner-approved; unsupported credentials and results are absent; proposed mission/story wording is reviewed before publication. [Source status: Confirmed truthfulness principle, proposed consolidated wording; S1 §§1/9/10, S3, S7.] | Owner decision review using the inherited register; trace affected tasks and route activation.; Section checklist, evidence audit, link/CTA paths and all-three-theme responsive visual review.; Per-record source/claims review, service variation layout and CTA/FAQ/canonical checks.; Owner/legal-content review as applicable, policy links, heading/reading accessibility, activation/noindex rules and contact tests.; Owner approval checklist with actual evidence, operational contact test and source/catalog/content final diff. |
| BR-002 — Catalog and commercial consistency | P1 and ongoing. P1 baseline/ongoing within source qualification | Identity; Intake; CRM; Content; Operations; Catalog; Catalog; Content; Content; Catalog; Intake; Operations; Content; Catalog; Pages in linked task records and §§5–6 | [M00-03](#m00-03), [M05-01](#m05-01), [M05-02](#m05-02), [M05-04](#m05-04), [M09-02](#m09-02), [M09-03](#m09-03), [M09-04](#m09-04), [M09-05](#m09-05), [M09-10](#m09-10), [M13-05](#m13-05); P1 baseline/ongoing within source qualification | 57 unique service identities and five solutions are maintained; source prices remain until approved changes; scope/billing units are defined before publishing offers; browser-submitted prices never override server values. [Source status: Confirmed concept; S1 §§4–5/12; detailed package scope unresolved.] | Named task verification is binding; evidence in M00-03, M05-01, M05-02, M05-04, M09-02, M09-03, M09-04, M09-05, M09-10, M13-05 and M13-01 coverage audit. |
| BR-003 — Operational contact readiness | P1 launch gate. P1 baseline/ongoing within source qualification | Intake; Notifications; Intake; CRM; Operations; Operations; Content; Catalog; Operations; Notifications; ADM-002, ADM-003, PUB-012, PUB-014, PUB-015 | [M06-04](#m06-04), [M06-06](#m06-06), [M11-03](#m11-03), [M13-05](#m13-05), [M14-02](#m14-02); P1 baseline/ongoing within source qualification | hello@aradun.com is configured and tested for sending/receiving before live use; staff notification destination is selected; published phone/social links are checked; additional uncreated addresses are not advertised. [Source status: Email address explicitly confirmed; setup pending; S7, S1 §13.] | Named task verification is binding; evidence in M06-04, M06-06, M11-03, M13-05, M14-02 and M13-01 coverage audit. |
| BR-004 — Evidence and placeholder governance | P1 and every release. P1 baseline/ongoing within source qualification | Content; Content; Catalog; Content; Catalog; Intake; Shared presentation; Content; Operations; Content; Catalog; Pages in linked task records and §§5–6 | [M08-03](#m08-03), [M08-05](#m08-05), [M09-01](#m09-01), [M09-07](#m09-07), [M09-10](#m09-10), [M12-01](#m12-01), [M13-05](#m13-05); P1 baseline/ongoing within source qualification | Client/internal/concept labels are accurate; testimonial permissions and measurable claims are reviewed; sample content is centralized and unmistakably labeled in previews; launch check replaces/removes unapproved placeholders; genuine labeled demos may remain public. [Source status: Confirmed principle; S1, S5, S7 project instructions.] | Named task verification is binding; evidence in M08-03, M08-05, M09-01, M09-07, M09-10, M12-01, M13-05 and M13-01 coverage audit. |
| BR-005 — Delivery capability and service availability | P1 and ongoing. P1 baseline/ongoing within source qualification | Identity; Intake; CRM; Content; Operations; Catalog; Catalog; Content; Content; Catalog; Intake; Operations; Content; Catalog; Pages in linked task records and §§5–6 | [M00-03](#m00-03), [M05-01](#m05-01), [M09-02](#m09-02), [M09-03](#m09-03), [M09-04](#m09-04), [M09-05](#m09-05), [M09-10](#m09-10), [M13-05](#m13-05); P1 baseline/ongoing within source qualification | Each launch offer has approved availability and an accountable delivery approach; cybersecurity authorization is required; unavailable capabilities are not presented as immediate services; broader catalog identity remains intact. [Source status: Confirmed principle; service-by-service readiness unresolved; S1 §§4/13.] | Named task verification is binding; evidence in M00-03, M05-01, M09-02, M09-03, M09-04, M09-05, M09-10, M13-05 and M13-01 coverage audit. |
| BR-006 — Commercial and delivery controls | P1 manual operations; P2 system support. P1 baseline/ongoing within source qualification | Identity; Intake; CRM; Content; Operations; Content; Operations; Operations; Operations; Content; Catalog; PUB-017, PUB-018, TRU-01, TRU-02, TRU-03 | [M00-03](#m00-03), [M09-09](#m09-09), [M11-03](#m11-03), [M13-05](#m13-05); P1 baseline/ongoing within source qualification | Proposals/agreements state deliverables, exclusions, revisions, timing, fees, third-party costs and support; project changes require recorded agreement; payment and acceptance evidence are distinguished; actual legal/tax review precedes use of jurisdiction-specific terms. [Source status: Confirmed operational direction; policy details unresolved; S1 §11, S4.] | Owner decision review using the inherited register; trace affected tasks and route activation.; Owner/legal-content review as applicable, policy links, heading/reading accessibility, activation/noindex rules and contact tests.; Owner reviews a synthetic complete proposal/invoice/ledger scenario and correction trail; verify real contact/payment operating readiness separately.; Owner approval checklist with actual evidence, operational contact test and source/catalog/content final diff. |
| BR-007 — Product and internal-platform separation | P1 planning boundary; P2/P3 only after product approval. P1 baseline/ongoing within source qualification | Operations; Treat owned commercial products as separately validated offerings from ARADUN's internal CRM/CMS. | [M00-01](#m00-01); P1 baseline/ongoing within source qualification | Each product has stated owner, audience, readiness, scope, phase and business model before development; AMS remains a separate domain; no source example is portrayed as an existing product without verification. [Source status: Owner-stated dual business intent; proposed boundary; S1 §7, S6, S7.] | Compare inventories by ID, hashes and exact URLs; owner reviews unresolved register. |
| BR-008 — Planning and implementation governance | All phases. P1 baseline/ongoing within source qualification | Operations; Identity; Intake; CRM; Content; Operations; Content; Catalog; Intake; All modules; Operations; Content; Catalog; Pages in linked task records and §§5–6 | [M00-01](#m00-01), [M00-03](#m00-03), [M09-10](#m09-10), [M13-01](#m13-01), [M13-05](#m13-05), [M14-01](#m14-01); P1 baseline/ongoing within source qualification | Each task states scope/dependencies/affected modules/behavior/acceptance/security/accessibility/performance/tests/out-of-scope items; existing conventions are inspected; changes/results/assumptions are reported; significant architecture changes require approval; this draft alone authorizes no implementation. [Source status: Confirmed process; S7 project instructions.] | Named task verification is binding; evidence in M00-01, M00-03, M09-10, M13-01, M13-05, M14-01 and M13-01 coverage audit. |

### NFR requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| NFR-001 — Search visibility and indexing | P1 and ongoing. P1 baseline/ongoing within source qualification | Content; Discovery; Content; Catalog; Intake; Discovery; Content; Operations; Discovery; Pages in linked task records and §§5–6 | [M08-04](#m08-04), [M09-10](#m09-10), [M10-02](#m10-02), [M10-04](#m10-04); P1 baseline/ongoing within source qualification | Appropriate SSR/SSG, metadata, canonical URLs, sitemap and robots are configured; truthful Organization/Service/BreadcrumbList/Article structured data used where appropriate; private routes require authorization and are noindexed; unpublished content excluded; redirects preserve approved changes; production indexing and previews tested; thin placeholder pages not published. [Source status: Confirmed concept; S1 §10; S6 clarifications.] | Registered/unknown/reserved keys, cross-owner edits, private-index attempts and metadata/publication tests.; Inventory crawl plus human content/evidence review; report every blocked entry and owner before release.; Crawl/canonical/index eligibility matrix, structured-data validity and withdrawal tests; controlled staging noindex versus production behavior.; Check staging generated artifacts; verify actual Search Console property/sitemap after M14-02 and record status. |
| NFR-002 — Accessibility and usable interaction states | P1 and each introduced feature. P1 baseline/ongoing within source qualification | Shared presentation; Catalog; Shared presentation; Identity; Content; Shared presentation; Catalog; Intake; Catalog; Content; CRM; Content; Identity; Operations; Shared presentation; Content; Shared presentation; Intake; Catalog; Content; Shared presentation; All presentation owners; Pages in linked task records and §§5–6 | [M04-01](#m04-01), [M04-02](#m04-02), [M04-03](#m04-03), [M04-04](#m04-04), [M05-04](#m05-04), [M06-05](#m06-05), [M08-02](#m08-02), [M11-02](#m11-02), [M12-01](#m12-01), [M12-02](#m12-02), [M12-03](#m12-03), [M12-04](#m12-04); P1 baseline/ongoing within source qualification | Semantic structure, keyboard navigation, focus, labels, contrast, status announcements and reduced-motion behavior are checked; loading/empty/error/success states exist; responsive controls are usable; automated checks are supplemented with manual critical-flow review; no unsupported accessibility certification claim. [Source status: Confirmed principle; S1 §9, S6; detailed test matrix proposed.] | Named task verification is binding; evidence in M04-01, M04-02, M04-03, M04-04, M05-04, M06-05, M08-02, M11-02, M12-01, M12-02, M12-03, M12-04 and M13-01 coverage audit. |
| NFR-003 — Performance and bounded workload | P1 and ongoing. P1 baseline/ongoing within source qualification | Shared presentation; CRM; Discovery; Catalog; Content; CRM; Content; Operations; Shared presentation; Content; Shared presentation; Intake; Catalog; Content; Shared presentation; All presentation owners; Operations; all feature owners; ADM-001, ADM-012, PUB-016 | [M04-01](#m04-01), [M07-06](#m07-06), [M10-01](#m10-01), [M11-01](#m11-01), [M12-01](#m12-01), [M12-02](#m12-02), [M12-03](#m12-03), [M12-04](#m12-04), [M14-04](#m14-04); P1 baseline/ongoing within source qualification | Target p75 field Core Web Vitals of LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 as in S1; pre-launch lab checks are a proxy, not claimed field results; images/fonts/JS/cache strategy reviewed; queries/pagination/uploads bounded; API/search load and response targets approved before capacity signoff. [Source status: Existing CWV targets confirmed; scale budgets unresolved; S1 §10, S6.] | Named task verification is binding; evidence in M04-01, M07-06, M10-01, M11-01, M12-01, M12-02, M12-03, M12-04, M14-04 and M13-01 coverage audit. |
| NFR-004 — Data lifecycle, backups and recovery | P1 and each new data domain. P1 baseline/ongoing within source qualification | Identity; Intake; CRM; Content; Operations; Operations; Shared infrastructure; CRM; Operations; Content; Operations; Identity; Operations; all write owners; Operations; Notifications; Operations; all feature owners; Define retention, correction, deletion, restoration and operational ownership. | [M00-03](#m00-03), [M02-05](#m02-05), [M07-07](#m07-07), [M08-07](#m08-07), [M13-02](#m13-02), [M13-03](#m13-03), [M14-04](#m14-04); P1 baseline/ongoing within source qualification | Retention/deletion rules and backup coverage approved; restore test completed; recovery point/time targets explicitly chosen; audit needs and legitimate retention constraints addressed; stale copies and third-party data considered; no invented uptime/recovery guarantee. [Source status: Confirmed backup/privacy direction; detailed policy proposed; S1 §§6/12/13.] | Named task verification is binding; evidence in M00-03, M02-05, M07-07, M08-07, M13-02, M13-03, M14-04 and M13-01 coverage audit. |
| NFR-005 — Authorization and data isolation | P1 staff boundaries; P2 client boundaries; P3 tenant boundaries if approved. P1 baseline/ongoing within source qualification | Identity; Intake; CRM; Content; Operations; Identity; Operations; Identity; Content; Shared presentation; CRM; Intake; CRM; CRM; Operations; CRM; Intake; Identity; Content; Operations; Content; Discovery; CRM; Content; Operations; CRM; Content; Identity; Operations; Operations; ADM-001, ADM-004, ADM-005, ADM-012, ADM-023, ADM-024, ADM-025, ADM-026, ADM-027, STA-001, STA-002, STA-003, STA-004 | [M00-03](#m00-03), [M03-02](#m03-02), [M03-04](#m03-04), [M03-05](#m03-05), [M04-04](#m04-04), [M07-01](#m07-01), [M07-06](#m07-06), [M07-07](#m07-07), [M07-08](#m07-08), [M08-07](#m08-07), [M08-08](#m08-08), [M11-01](#m11-01), [M11-02](#m11-02), [M11-04](#m11-04), [M11-05](#m11-05), [M11-06](#m11-06), [M07-00](#m07-00); P1 baseline/ongoing within source qualification | Backend checks cover reads/mutations/search/files/exports/jobs; negative access tests pass; internal notes remain private; offboarding revokes access; future tenant isolation includes caches and integrations; UI hiding alone is insufficient. [Source status: Confirmed principle; exact roles proposed; S1 §12, S2.] | Named task verification is binding; evidence in M00-03, M03-02, M03-04, M03-05, M04-04, M07-01, M07-06, M07-07, M07-08, M08-07, M08-08, M11-01, M11-02, M11-04, M11-05, M11-06, M07-00 and M13-01 coverage audit. |
| NFR-006 — Reliable events, retries and duplicate prevention | P1 notifications; every later integration when introduced. P1 baseline/ongoing within source qualification | Shared infrastructure; Notifications; Operations; Intake; Notifications; Operations; Intake; Notifications; CRM; Intake; Operations; CRM; Operations; Notifications; ADM-010, ADM-011, PUB-014 | [M02-01](#m02-01), [M06-02](#m06-02), [M06-03](#m06-03), [M06-07](#m06-07), [M06-09](#m06-09), [M07-05](#m07-05), [M13-03](#m13-03); P1 baseline/ongoing within source qualification | Unique IDs/references and idempotency rules are tested; inquiry save/notification scheduling is failure-safe; retry/backoff/dead-letter or equivalent failure handling defined; manual recovery is possible; webhooks and financial actions deduplicated; advanced P3 workflow UI is not a prerequisite for basic reliability. [Source status: Confirmed principle; implementation choice later; S1 §§6/12, S2 automation clarification.] | Named task verification is binding; evidence in M02-01, M06-02, M06-03, M06-07, M06-09, M07-05, M13-03 and M13-01 coverage audit. |
| NFR-007 — Privacy-conscious analytics and consent | P1 and ongoing. P1 baseline/ongoing within source qualification | Discovery; Intake; Operations; Separate service inquiry handling from optional marketing and behavioral tracking. | [M10-03](#m10-03); P1 baseline/ongoing within source qualification | No names/emails/phones/message bodies sent to analytics; URLs/UTMs are handled to avoid PII leakage; required consent behavior is determined for actual jurisdictions/tools; public notices match reality; sensitive forms/private pages are excluded from any later session recording by default. [Source status: Confirmed PII/consent principle; legal implementation unresolved; S1 §§6/10, S6.] | Network/event payload inspection, consent changes, direct confirmation/retry tests and controlled GA4 debug verification. |
| NFR-008 — Production security and observability | P1 and ongoing. P1 baseline/ongoing within source qualification | Identity; Notifications; Operations; Shared infrastructure; Operations; Operations; Identity; Operations; Shared presentation; Operations; Identity; Operations; all write owners; Operations; all feature owners; SYS-01, SYS-02 | [M00-02](#m00-02), [M01-02](#m01-02), [M01-04](#m01-04), [M02-03](#m02-03), [M02-04](#m02-04), [M03-05](#m03-05), [M04-05](#m04-05), [M13-02](#m13-02), [M14-04](#m14-04); P1 baseline/ongoing within source qualification | HTTPS and appropriate header policy checked; secrets separated by environment; logs redact sensitive values; errors have correlation; uptime/error alerts route to a responsible person; dependency/security update process and incident response steps documented; WAF/provider tooling only added when justified. [Source status: Confirmed principles; tools/targets unselected; S1 §12/13, S6.] | Named task verification is binding; evidence in M00-02, M01-02, M01-04, M02-03, M02-04, M03-05, M04-05, M13-02, M14-04 and M13-01 coverage audit. |
| NFR-009 — Verification, release and rollback | P1 and all releases. P1 baseline/ongoing within source qualification | Shared infrastructure; Operations; Operations; Shared infrastructure; Intake; Notifications; CRM; CRM; Intake; Identity; Content; Discovery; Content; Catalog; Intake; All presentation owners; All modules; Operations; Content; Catalog; Operations; Notifications; Intake; CRM; Content; Discovery; Operations; Operations; all feature owners; Pages in linked task records and §§5–6 | [M01-03](#m01-03), [M01-04](#m01-04), [M02-05](#m02-05), [M06-07](#m06-07), [M07-08](#m07-08), [M08-08](#m08-08), [M09-10](#m09-10), [M12-04](#m12-04), [M13-01](#m13-01), [M13-04](#m13-04), [M13-05](#m13-05), [M14-01](#m14-01), [M14-02](#m14-02), [M14-03](#m14-03), [M14-04](#m14-04); P1 baseline/ongoing within source qualification | Lint/type/build pass; critical validation/auth/inquiry/idempotency paths have meaningful tests; key user flows and responsive/accessibility checks pass; future billing/isolation tests accompany those modules; staging and production are separate; rollback/data-change plan exists; release result is documented. [Source status: Confirmed principle; exact tools/test cases later; S1 §12/13, S6.] | Named task verification is binding; evidence in M01-03, M01-04, M02-05, M06-07, M07-08, M08-08, M09-10, M12-04, M13-01, M13-04, M13-05, M14-01, M14-02, M14-03, M14-04 and M13-01 coverage audit. |
| NFR-010 — Maintainable modular monolith | P1 and ongoing. P1 baseline/ongoing within source qualification | Operations; Shared infrastructure; Keep one understandable application with explicit domain boundaries and limited dependencies. | [M00-01](#m00-01), [M01-01](#m01-01), [M02-01](#m02-01); P1 baseline/ongoing within source qualification | UI/business/persistence/integration responsibilities separated; runtime validation and clear types/names used; errors handled consistently; unnecessary abstraction/services avoided; architectural decisions and setup documented; the separate Express backend is approved; no microservices or speculative layers. [Source status: Confirmed constraint; S1 §12, S3, S7.] | Compare inventories by ID, hashes and exact URLs; owner reviews unresolved register.; Clean-install/build/type/lint checks and a deliberately forbidden import fixture.; Real replica-set commit/abort/retry and connection-failure tests; inspect runtime and aggregate pool budget. |
| NFR-011 — Search and publication visibility | P1 and broader CMS later. P1 baseline/ongoing within source qualification | Content; Content; Discovery; Discovery; Catalog; Content; Discovery; Content; ADM-013, ADM-014, ADM-015, ADM-016, ADM-019, ADM-020, ADM-021, ADM-022, PUB-008, PUB-009, PUB-010, PUB-011, PUB-016 | [M08-01](#m08-01), [M08-02](#m08-02), [M08-04](#m08-04), [M08-05](#m08-05), [M08-06](#m08-06), [M08-08](#m08-08), [M09-08](#m09-08), [M10-01](#m10-01), [M10-02](#m10-02); P1 baseline/ongoing within source qualification | Publication changes update discovery surfaces according to defined invalidation behavior; private content never enters public indexes; invalid/deleted links receive defined responses; title/slug changes preserve approved redirect policy. [Source status: Proposed explicit acceptance clarification of confirmed search/CMS; S1 amendment, S2, R.] | Named task verification is binding; evidence in M08-01, M08-02, M08-04, M08-05, M08-06, M08-08, M09-08, M10-01, M10-02 and M13-01 coverage audit. |
| NFR-012 — Monetary and temporal integrity | P1 money/date fields and every later module. P1 baseline/ongoing within source qualification | Shared infrastructure; Catalog; CRM; Operations; ADM-006, ADM-007, ADM-008, ADM-009, ADM-027 | [M02-02](#m02-02), [M05-02](#m05-02), [M07-03](#m07-03), [M07-04](#m07-04), [M11-03](#m11-03), [M11-06](#m11-06); P1 baseline/ongoing within source qualification | Money uses integer minor units or appropriate precise decimals; currency/period retained; quoted snapshots immutable; dates stored consistently and displayed clearly; daylight-saving/timezone behavior verified for booking; no floating-point rounding surprises in finance. [Source status: Confirmed architectural direction plus proposed clarification; S1 §12, S6.] | Named task verification is binding; evidence in M02-02, M05-02, M07-03, M07-04, M11-03, M11-06 and M13-01 coverage audit. |
| NFR-013 — AI evaluation and bounded action | P2 limited assistants; P3 advanced features, all proposed. P2/P3 AI; P1 exclusion/governance only | Operations; Introduce AI only with defined tasks, approved data access, evaluations and human oversight. | [M00-01](#m00-01); P2/P3 AI; P1 exclusion/governance only | Data/retention/provider policy approved; source permissions enforced; untrusted content cannot override tool permissions; outputs evaluated on representative cases; unsupported claims/uncertainty handled; cost/rate limits and fallback exist; external commitments and high-impact changes require approved human control. [Source status: Proposed supporting safeguards for retained AI features; S1 future architecture, S2, R.] | Compare inventories by ID, hashes and exact URLs; owner reviews unresolved register. |
| NFR-014 — Accessible error recovery and confirmation | P1 and ongoing. P1 baseline/ongoing within source qualification | Shared infrastructure; Shared presentation; Shared presentation; Operations; Intake; Notifications; Operations; Intake; Intake; Catalog; Intake; Notifications; CRM; CRM; Content; Identity; Operations; PUB-012, PUB-013, PUB-014, SYS-01, SYS-02 | [M02-02](#m02-02), [M04-02](#m04-02), [M04-05](#m04-05), [M06-03](#m06-03), [M06-04](#m06-04), [M06-05](#m06-05), [M06-07](#m06-07), [M11-02](#m11-02); P1 baseline/ongoing within source qualification | Field errors are associated with controls; safe entered data retained appropriately; submission state is clear; success only after save; retry safe; missing pages show useful navigation; no stack traces/credentials/private details in responses. [Source status: Confirmed engineering principle with S6 clarification; S7, R.] | Named task verification is binding; evidence in M02-02, M04-02, M04-05, M06-03, M06-04, M06-05, M06-07, M11-02 and M13-01 coverage audit. |
| NFR-015 — Integration ownership and reconciliation | P2 integrations; P1 if synchronized booking is approved. P1 baseline/ongoing within source qualification | Intake; Intake; Operations; PUB-014 | [M06-08](#m06-08), [M06-09](#m06-09); P1 baseline/ongoing within source qualification | Mapping/direction/identity/conflict/deletion/consent rules documented; test sync handles duplicates, retries and provider outages; disconnect/revoke works; reconciliation failures are visible; no external system bypasses ARADUN access controls. [Source status: Proposed explicit integration boundary; S1 §7/12, S3, R.] | Controlled provider sandbox/staging tests for slot races, timezone and outage; scope/credential review.; Spoof/replay/duplicate/out-of-order callback tests and full booking/cancel/reschedule E2E under selected integration. |

### EXT requirement coverage

| Requirement | Source phase / treatment | Module and page/workflow | Milestone / task | Source acceptance criteria and status | Verification |
| --- | --- | --- | --- | --- | --- |
| EXT-001 — Industries content capability | Proposed P1 directory/selected substantive content or P2 expansion; owner decision required. P2 public inventory baseline; no P1 promotion in this roadmap | Operations; Present industry-specific problems and relevant ARADUN capabilities without changing the service catalog. | [M00-01](#m00-01); P2 public inventory baseline; no P1 promotion in this roadmap | Approved industry list retained; no unsupported specialization/client claims; pages provide distinct useful content; service links are valid; thin placeholders not published; navigation/routes decided in Step 2. [Source status: Owner-proposed addition; phase/publication scope unresolved; S6/S7.] | Compare inventories by ID, hashes and exact URLs; owner reviews unresolved register. |
| EXT-002 — Products catalog and readiness | Proposed P1 structure only if useful truthful content exists; actual products independently phased. P2 public inventory baseline; no P1 promotion in this roadmap | Operations; Present ARADUN-owned products with accurate lifecycle status and approved detail content. | [M00-01](#m00-01); P2 public inventory baseline; no P1 promotion in this roadmap | Product identity/ownership/status and available actions approved; screenshots reflect actual state or clearly labeled concepts; pricing/integrations/security claims verified; no fake products to fill cards; no implied portal/subscription implementation. [Source status: Owner intent; proposed website capability; S6/S7.] | Compare inventories by ID, hashes and exact URLs; owner reviews unresolved register. |
| EXT-003 — Product demo and information inquiries | Follows approved product publication; P1/P2 decision required. P2 public inventory baseline; no P1 promotion in this roadmap | Operations; Capture inquiries tied to an approved product through the existing lead system. | [M00-01](#m00-01); P2 public inventory baseline; no P1 promotion in this roadmap | Product and inquiry type retained; form/acknowledgement accurately reflects demo availability; no duplicate CRM module; PII and notification controls reused; successful submission distinguished from completed demo/booking. [Source status: Proposed addition; S6, R.] | Compare inventories by ID, hashes and exact URLs; owner reviews unresolved register. |
| EXT-004 — Related content and featured selections | Proposed P1 simple maintained references; broader CMS editing follows its approved phase. Preserve source conditional scope | Catalog; Content; Content; Pages in linked task records and §§5–6 | [M09-06](#m09-06), [M09-08](#m09-08); Preserve source conditional scope | Links only expose approved published content; unpublished targets disappear gracefully; featured selections are intentional; no duplicate source records; layout decisions deferred. [Source status: Existing related-content direction strengthened by S6; proposed details.] | Whole-catalog crawl, relationship/price parity and all category/solution/pricing comparisons.; Publication/withdrawal, typography/heading/TOC, pagination and CTA/link verification. |
| EXT-005 — Supplemental analytics and webmaster tools | Proposed optional P1 setup/P2 expansion; not a mandatory new platform. Preserve source conditional scope | Operations; Discovery; Consider Bing Webmaster Tools and additional CTA/product engagement events beyond core GA4/Search Console. | [M10-04](#m10-04); Preserve source conditional scope | Each event has an explicit meaning and data policy; clicks/submissions/bookings are distinct; no PII; dashboards do not claim bookings from link clicks; session recording remains separately approved and excluded from sensitive forms/private pages by default. [Source status: Proposed; S6, R.] | Check staging generated artifacts; verify actual Search Console property/sitemap after M14-02 and record status. |
| EXT-006 — Public trust and product policy extensions | P1 actual privacy/cookie needs; P2/P3 product-specific policies as introduced. Preserve source conditional scope | Content; Operations; PUB-017, PUB-018, TRU-01, TRU-02, TRU-03 | [M09-09](#m09-09); Preserve source conditional scope | Policies reflect actual entity/providers/data practices; applicability reviewed; website terms and client agreements distinguished; no copied false compliance claims; final routes belong to Step 2. [Source status: Confirmed accurate-policy principle; extra documents proposed; S1 §11, S6.] | Owner/legal-content review as applicable, policy links, heading/reading accessibility, activation/noindex rules and contact tests. |

### 16.1 Later approved design requirements without invented FR IDs

| Source decision/contract | Tasks | Acceptance/verification |
| --- | --- | --- |
| C4-01/02; DS-THEME-01; three light themes | M04-01, M12-01/04 | Default/alternate/source colors and no form/focus/scroll loss; blocked storage/no-flash/contrast in all three themes. |
| C4-03/05; folded-A logo and header weight | M12-01 | Same geometry/theme dimensions; actual vector/header fit; U4-01/02 retained. |
| C4-06/07; CSS/Motion/selective GSAP | M12-02/03/04 | Isolated ownership/loading, static mobile/reduced fallback, cleanup/performance evidence. |
| S3 35 recipes, S4 page wireframes and CMP-01–51 | M04–M12; exact allocations §§5–8 | Ordered regions and page-specific content retained; CMP-22 remains future, CMP-51 conditional. |
| C7-PROPOSAL milestone order and early intake proof | M00–M14 | M06 complete reliable flow precedes broad rollout; QA integrated, final launch explicit approval. |

## 17. Open decisions, conflicts and assumptions

### 17.1 Active gates and deadlines

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

### 17.2 Settled supersessions and source tensions

- D-008: article draft/publish is P1 under the explicit amendment; general page/service CMS publication remains P2. FR-04-10 mapping preserves only that article slice.
- D-019: full Phase 1 planning includes every service/public/staff entry; the former reduced subset is superseded.
- D-022 palette portion: S4 C4-01/02 supersedes old navy/teal with Terracotta/Slate Blue/Vivid Blue; no change to eight categories, five solutions, primary CTA, supplied URLs or stack.
- D-025: basic reliability/logging/retries accompany first feature implementation; advanced workflow console remains P3.
- EXT-001/002/003 source wording contains possible P1 promotion, while the later full page inventory retains Industries/Products in P2. This roadmap keeps P2 baseline, with explicit owner promotion required; no hidden P1 pages added.
- Source S5/S6 detailed technical defaults and local R7 estimates do not fabricate earlier individual approvals. The owner's final instruction authorizes the complete planning consolidation, not missing business facts, provider accounts or live deployment.
- S6's SEO pageId/contentKey refinement is retained as the structural realization of S5 ownership; it is not permission for a template ID to ambiguously edit any content instance.

Inherited D-001–025, O-01–07, U-01–06, U4-01–10 and A5-01–14 remain in Appendix B. Closing a gate records actual decision/evidence/date and updates the affected authoritative document plus downstream traceability. Routine filename refinement may preserve architecture; significant schema/permission/provider/route/phase changes require explicit review.

### 17.3 Working assumptions and limits

One primary developer, one repository/release, English/USD, moderate initial workloads requiring bounded operations, source-owned catalog and limited custom CMS. No launch traffic number or provider tier is assumed. Exact session/retention/timeouts/thresholds/job schedules need selected policy. Original content/evidence and legal approvals are owner inputs; fixture data cannot fill those factual gaps. The current file provides complete planning coverage, not measured production readiness.

## 18. Phase 2/3 roadmap and compatibility

Future allocations retain the 62 P2 additions, 28 P3 additions and one Product Terms cross-phase entry. These are high-level candidates with their source status, not approved detailed implementation tasks or a commitment to build every candidate. Existing pages may gain future features without being counted twice. No future navigation, collection or empty module is created now.

| Future stream | Phase / prerequisites | Use Phase 1 foundation | Later approval/security boundary |
| --- | --- | --- | --- |
| Broader catalog/CMS/media and public Industries/Products | P2; actual content/authoring/product readiness | Stable IDs/URLs, source contracts and publication predicate; reviewed one-master migration | No automatic broad CMS or fake product; migrate with parity/rollback and asset rights/access. |
| Advanced CRM/companies/communication/reporting | P2; reliable contact/opportunity history and actual demand | Canonical identities, activities and explicit source attribution | Organization/person migration, verified mailbox scopes/consent, scoped reports; no duplicate CRM master. |
| Proposals/contracts/billing/payment automation | P2; manual business process validated, payment eligibility selected | Opportunity/customer links and precise money; external templates | Immutable approved versions/signing, idempotent payment callbacks, finance permission and reconciliation; no autonomous binding sends. |
| Client portal and project delivery | P2; verified client identity/access and signed delivery workflow | Staff identity separation, canonical customer links, safe file policy | Own-client grants, contractor permissions, project tasks distinct from sales follow-ups; no email-only account linking. |
| External integrations and basic workflows | P2; provider/system-of-record decisions | Outbox/retry/audit and narrow provider ports | Explicit sync direction/conflicts/deletion/disconnect, eligibility and bounded workflow execution; no duplicate campaigns. |
| Limited public AI chatbot/FAQ assistant | P2 conditional; grounded published knowledge and evaluation | Publication-aware content and safe intake handoff | NFR-013 authorization/evaluation/cost limits; no unsupported commitments or private context leakage. |
| Advanced AI, forecasting, workflow builder and subscription/tenant systems | P3 conditional; sound data history and justified product demand | Explicit modules/repositories/event semantics | Evaluate accuracy/cost, human approval, tenant isolation across every query/job/cache/file and consent; no premature tenantId everywhere. |
| Insurance AMS | P3 conditional with D-015/016 boundary retained | General engineering practices only, not copying service CRM identity into policyholder system | Separate product/domain approval, agency access, carrier truth and specialized data controls; SaaS tenancy a separate decision. |
| Product Terms PRD-02 | P2/P3 timing tied to actual product release | Verified legal/public-policy rendering | Select product-specific terms before publishing; counted once, not silently moved into P1. |

Dependency order for future work: validate product/business need → approve scope and phase → define domain/data/access migration → approve provider/contracts → implement/test narrow workflows → controlled release. Stable catalog/content IDs, snapshots, source versions and explicit repository/provider boundaries are sufficient extension points for P1; a generic platform framework is not required.

## 19. Completion, approval and later Codex handoff

### 19.1 Milestone evidence and approval

For each milestone, collect exact task IDs/source references, changed files, accepted decisions, verification commands/results when implementation actually occurs, screenshots/interaction notes where helpful, unresolved risks and rollback implications. Mark tasks planned → ready → implementing → review → accepted; conditional branches remain pending/not-selected with their capability baseline recorded. “Not selected” does not delete the source entry or substitute for an owner decision.

Owner milestone review approves the delivered behavior against this plan. Production deployment always requires its separate explicit gate. No automation, message to clients, purchase or public deployment is authorized by generating this document.

### 19.2 Step 8 handoff requirements — not Step 8 execution

Later, after the owner starts Step 8, each small implementation prompt must name the task/parent, exact source requirements/pages, dependency evidence, affected existing modules/files, expected behavior, acceptance and negative tests, security/accessibility/performance/privacy requirements, exclusions and completion report. Inspect the actual repository first and preserve its conventions/unrelated work. Split large work packages at concrete checkpoints; no giant build-everything prompt. Do not turn a planning example into approved business content or interpret a task path as an existing file.

This file deliberately contains no application code, setup commands or full Codex prompts. Step 8 and implementation remain unstarted.

## 20. Document audit and version record

**1.1.0 · 25 October 2026 — Controlled amendment:** Applied only affected portions of the four owner-requested changes and their direct cross-references; all unrelated content retained.


The following are document-level checks, not claims that application tests or integrations have passed.

| Check | Result / limit |
| --- | --- |
| All source files accessible and unchanged | Six verified SHA-256 fingerprints; S6 references the exact supplied S5; no source mutation. |
| Requirement inventory | 207 FR + 8 BR + 15 NFR + 6 EXT = 236 source records preserved with source phases/status and acceptance. |
| P1 assignment | Every requirement with P1 scope plus ongoing business/nonfunctional controls has named tasks; conditional/split-phase requirements explicitly qualified. |
| Page coverage | 124 P1 entries: 91 public, 4 staff authentication, 27 dashboard, 2 states; exact IDs/URLs mapped to tasks and source region contracts. |
| Future coverage | 91 non-P1 entries preserved: 62 P2 + 28 P3 + one cross-phase Product Terms; no activated routes. |
| Schemas/modules | 12 baseline + 4 conditional models; all 16 schema sections/field manifests retained; eight baseline business modules accounted for. |
| Design coverage | 35 recipes, 51 component contracts including future CMP-22 and conditional CMP-51; theme/motion/accessibility/performance assigned. |
| Tasks/estimates | 15 milestones; 87 stable task IDs (79 baseline, 8 conditional). Baseline 620–1064 hours; conditional increments 79–136 hours before contingency. |
| Dependency verification | All referenced task IDs exist; graph acyclic; Activity persistence precedes CRM history writes; release waits for every selected conditional branch. |
| Scope integrity | No new FR IDs, source price changes, unapproved service duplication, future modules or silent reduced launch. |
| Approval evidence | Owner final instruction authorizes completed consolidation; R7 detailed estimates/tasks not described as earlier separately reviewed; named gates remain. |
| Runtime readiness | No application implementation/build/tests/provider connections/deployment performed. Production acceptance remains future work. |

| Version | Date | Change | Approval interpretation |
| --- | --- | --- | --- |
| 1.0.0 | 24 October 2026 | Complete M00–M14 task, page/model/component, dependency, estimate, risk and requirement consolidation against six exact sources. | Owner-declared Step 7 completed/approved; final file authorized; no Step 8 or deployment authorization. |

## Appendix A. Complete future page inventory — no P1 implementation

| Page ID / name | Exact supplied URL | Phase / status | Access / future owner | Retained data direction |
| --- | --- | --- | --- | --- |
| IND-00 — Industries | `/industries` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-01 — Insurance & Financial Services | `/industries/insurance-financial-services` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-02 — Healthcare & Medical | `/industries/healthcare-medical` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-03 — Education | `/industries/education` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-04 — Real Estate | `/industries/real-estate` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-05 — Construction & Home Services | `/industries/construction-home-services` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-06 — E-commerce & Retail | `/industries/ecommerce-retail` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-07 — Marketplaces | `/industries/marketplaces` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-08 — Restaurants & Hospitality | `/industries/restaurants-hospitality` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-09 — Professional Services | `/industries/professional-services` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| IND-10 — Startups & SaaS | `/industries/startups-saas` | P2 proposed; P1 only by explicit promotion / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| PRD-00 — Products | `/products` | P2 proposed; P1 only by explicit publication approval / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| PRD-01 — Product Detail | `/products/[slug]` | P2 proposed; P1 only by explicit publication approval / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |
| EXP-001 — Companies | `/dashboard/companies` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-002 — Company Detail | `/dashboard/companies/[companyId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-003 — Projects | `/dashboard/projects` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-004 — Project Detail | `/dashboard/projects/[projectId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-005 — Proposals | `/dashboard/proposals` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-006 — Proposal Detail / Editor | `/dashboard/proposals/[proposalId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-007 — Contracts & SOWs | `/dashboard/contracts` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-008 — Contract Detail | `/dashboard/contracts/[contractId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-009 — Invoices | `/dashboard/invoices` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-010 — Invoice Detail | `/dashboard/invoices/[invoiceId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-011 — Billing Profiles | `/dashboard/billing-profiles` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-012 — Recurring Billing | `/dashboard/subscriptions` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-013 — Subscription Detail | `/dashboard/subscriptions/[subscriptionId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-014 — Support Tickets | `/dashboard/support` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-015 — Support Ticket Detail | `/dashboard/support/[ticketId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-016 — Service Catalog Editor | `/dashboard/content/services` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-017 — Service / Package Editor | `/dashboard/content/services/[serviceId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-018 — Solution / Package Management | `/dashboard/content/solutions` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-019 — Website Page Management | `/dashboard/content/pages` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-020 — Website Page Editor | `/dashboard/content/pages/[pageId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-021 — Media Library | `/dashboard/content/media` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-022 — Team Management | `/dashboard/team` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-023 — Team Member Detail | `/dashboard/team/[memberId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-024 — Departments | `/dashboard/departments` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-025 — Staff Notifications | `/dashboard/notifications` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-026 — Reports | `/dashboard/reports` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-027 — Automation Rules | `/dashboard/automations` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-028 — Automation Rule Detail | `/dashboard/automations/[automationId]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-029 — Integrations | `/dashboard/integrations` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-030 — Integration Detail | `/dashboard/integrations/[integrationKey]` | P2 proposed / R | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| EXP-031 — Appointments | `/dashboard/appointments` | P2 baseline; P1 only if D-003 explicitly resolved / C | Private staff; server-authorized role and record scope; Future staff expansion | §16 corresponding CRM/CMS/delivery/finance/integration domains; P2 source qualifications; reused stable IDs; exact per-feature map in Appendix C |
| CLI-A01 — Client Sign In | `/client/login` | P2 conditional / C | Authentication gateway; no client business data; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-A02 — Client Access Recovery | `/client/recover` | P2 conditional / C | Authentication gateway; no client business data; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-A03 — Client Recovery Completion | `/client/reset` | P2 conditional / C | Authentication gateway; no client business data; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-A04 — Client Account Activation | `/client/activate` | P2 conditional / C | Authentication gateway; no client business data; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-001 — Client Overview | `/portal` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-002 — My Projects | `/portal/projects` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-003 — Project Workspace | `/portal/projects/[projectId]` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-004 — My Proposals | `/portal/proposals` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-005 — Proposal Review | `/portal/proposals/[proposalId]` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-006 — My Contracts | `/portal/contracts` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-007 — Contract Review | `/portal/contracts/[contractId]` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-008 — My Invoices | `/portal/invoices` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-009 — Invoice & Payment Detail | `/portal/invoices/[invoiceId]` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-010 — Support | `/portal/support` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-011 — New Support Ticket | `/portal/support/new` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-012 — Support Ticket Detail | `/portal/support/[ticketId]` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-013 — Client Notifications | `/portal/notifications` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-014 — Client Account & Billing Details | `/portal/account` | P2 proposed / R | Private client; own permitted client/project records only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| ADV-001 — Advanced Reports & Forecasts | `/dashboard/reports/advanced` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-002 — Custom Report Builder | `/dashboard/reports/custom` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-003 — Expenses | `/dashboard/expenses` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-004 — Capacity Planning | `/dashboard/capacity` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-005 — Workflow Execution History | `/dashboard/automations/executions` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-006 — Permission Builder | `/dashboard/settings/permissions` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-007 — Organizations | `/dashboard/organizations` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-008 — Organization Detail | `/dashboard/organizations/[organizationId]` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-009 — Security Audit Dashboard | `/dashboard/security` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-010 — Developer API Access | `/dashboard/integrations/api-access` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| ADV-011 — Integration Marketplace | `/dashboard/integrations/marketplace` | P3 conditional / C | Private staff; additional feature and role gates; Future Platform | §16 reporting/permission/org/API/automation domains; P3 conditional; data isolation and bounded reports; no P1 implementation |
| CLI-015 — My Subscriptions | `/portal/subscriptions` | P3 conditional / C | Private client; own permitted subscriptions only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| CLI-016 — Subscription Management | `/portal/subscriptions/[subscriptionId]` | P3 conditional / C | Private client; own permitted subscriptions only; Future Portal | §16 client grants + scoped project/document/billing/support records; P2/P3 source allocation; client own-record authorization; no P1 portal |
| AMS-001 — Agency Overview | `/ams` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-002 — Agency Customers & Households | `/ams/customers` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-003 — Agency Customer Detail | `/ams/customers/[customerId]` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-004 — Policies & Renewals | `/ams/policies` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-005 — Policy Detail | `/ams/policies/[policyId]` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-006 — Carriers / Companies | `/ams/carriers` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-007 — Quote & Policy Workflows | `/ams/workflows` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-008 — Agency Workflow Detail | `/ams/workflows/[workflowId]` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-009 — Commissions | `/ams/commissions` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-010 — Agency Documents | `/ams/documents` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-011 — Claims & Service Requests | `/ams/service-requests` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-012 — Agency Service Request Detail | `/ams/service-requests/[requestId]` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-013 — Agency Integrations | `/ams/integrations` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-014 — Agency Audit & Compliance Controls | `/ams/audit` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| AMS-015 — Agency Reports | `/ams/reports` | P3 conditional; separate AMS-GATE / C | Private agency; agency and record authorization; tenant isolation only if selected; Future AMS | §16 agency domain collections; P3 conditional product scope; agency isolation and carrier truth |
| PRD-02 — Product Terms | `/products/[slug]/terms` | P2/P3 follows approved product release / C | Public; Future public content | Source content then approved industryContent/products; §16 source phase/readiness; product inquiry uses common intake; no product build implied |

## Appendix B. Inherited decision registers

Source text is preserved below for continuity. Source-local references and earlier completion language remain historical; C7-FINAL changes only Step 7 completion authorization. Current supersessions and execution deadlines are stated in §17. Old palette wording is superseded only by S4 C4-01/02. A planning gate is not silently resolved by copying it here.

### O — source consolidation

| ID | Issue | Source treatment |
| --- | --- | --- |
| O-01 | Historical master draft metadata conflicted with owner designation of approval. | Resolved for document authority in the paired v0.2.0/v1.1.0 revision; retain historical draft provenance and substantive unresolved decisions. |
| O-02 | Earlier individual private-route reviews were absent from the original visible chat. | The 23 October owner instruction includes all P1 private pages in planning. Retain B/R/C provenance and review permissions, workflows and conditional interfaces during their section planning; do not claim missing historical approvals. |
| O-03 | Master instructs preserving previous S1 URLs but does not reproduce the complete original list. | All routes here remain proposed exact spellings pending reconciliation. Do not claim `/our-work`, solution slugs or other routes were verified against unavailable S1 text. Do not substitute `/work` or `/legal` silently. |
| O-04 | Exact role/record permissions and client identity provisioning are not finalized. | Listed users define intended responsibility only; D-013 and FR-05-01 must settle enforcement and invitation/public-registration decisions. |
| O-05 | P1 FAQ authoring, staff-admin UI, audit viewer and manual payment location are not all confirmed pages. | C rows remain optional interface allocations. Required public FAQ, access revocation, logging and business tracking must still be satisfied through the approved alternative. |
| O-06 | No approved content-instance list for cases/articles/help/products exists. | Repeatable templates are complete; actual record titles, quantities and content IDs belong to later approved content work. Do not fill gaps with fictional proof. |
| O-07 | Product/industry scope, AMS deployment boundary and full P2/P3 allocations remain conditional. | Preserve source gates and proposed phases. Do not expose future navigation or implement all candidates because they appear in a sitemap. |

### D — business/phase decisions

| ID | Issue | Source treatment |
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

### U — section/content decisions

| ID | Remaining detail | Settled now | Required later / owner |
| --- | --- | --- | --- |
| U-01 | Final verified public copy and evidence inventory | Home, About, work, testimony, service/solution proof and articles | Headings/topic directions are supplied; do not invent business facts. No mandatory count of fabricated work or testimonials. |
| U-02 | Detailed future workflow and feature decisions | P2/P3 and Product Terms | Every route has a high-level blueprint; source proposed/conditional status remains. No claim of earlier individual advanced-page approval. |
| U-03 | Editing live article versus separate unpublished revision behavior | ADM-015/016 and public article visibility | Clearly distinguish draft/save/publish; decide exact editorial behavior before interaction design relies on it. No scheduled publishing assumed. |
| U-04 | Actual contact/mail operational readiness | Contact, all inquiry flows and confirmation notifications | hello@aradun.com is selected but source says not yet operational. Use verified working channels at release; no invented sales/support mailboxes. |
| U-05 | Final content instance titles/quantities and publication scheduling | Case studies, articles, help and products | Templates included in full; no unapproved record count or filler content added. |
| U-06 | Package units, limits and truthful delivery availability | All service and solution price/scope sections | Retain source prices and scope prompts; D-004 governs publication of exact package commitments. |

### U4 — visual implementation decisions

| ID | Remaining detail | Settled now | Required later / owner |
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

### A5 — architecture implementation gates

| ID | Decision | Current recommendation / valid baseline | Required before |
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

## Appendix C. Preserved architecture decisions

| ADR | Decision | Alternatives / tradeoff | Risk / reconsideration trigger | Source status |
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

## Appendix D. Exact commercial catalog and policy reference

The following S1 commercial/catalog text is carried without changing prices or promoting missing package facts. Source-local sections and source IDs remain source-local. Appendix tables are validation inputs for M05/M09, not a new pricing decision. The full master remains authoritative for other business requirements. Current S4 visual decisions supersede old palette references elsewhere; this commercial section is unaffected.

### Source 3. Business model, commercial policy, and operations

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

### Source 4. Services and existing pricing

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

### Source 5. Business solutions and packages

| ID | Solution | Starter | Professional | Enterprise |
|---|---|---|---|---|
| SOL-001 | Digital Presence | From $899/project | From $2,499/project | Custom |
| SOL-002 | Business Automation | From $699/project | From $2,499/project | Custom |
| SOL-003 | Business Growth | From $399/month | From $999/month | Custom |
| SOL-004 | Cloud & Technology | From $499/project | From $1,999/project | Custom |
| SOL-005 | Complete Digital Business | Custom | Custom | Custom |

Names/prices are confirmed concepts from S1 §5. Exact included services, quantities, exclusions, revisions, timelines, setup fees, recurring costs, and upgrade/maintenance rules are not fully specified in the supplied sources. Do not infer a bundle's contractual scope from its name. Each solution must have one maintained package definition and enter the unified quote flow. Existing canonical solution URLs in S1 remain reference constraints; final page inventory belongs to Step 2.

---

End of Step 7. The next stage is Step 8 only when explicitly initiated by the owner. No application implementation or production deployment has been performed.
