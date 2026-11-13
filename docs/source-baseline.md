# ARADUN source baseline

Baseline: 2026-11-04 (Asia/Dhaka). Task: **M00-01 only**. Documentation verified; owner acceptance pending. No application implementation or operational readiness is claimed.

This freezes the current bytes, not a new approval of embedded recommendations. The owner authorized M00-01 in this session. Explicit owner amendments override only their subjects; the master governs business scope and companion sources govern their subjects. Source files remain unchanged.

## Current source register

| Source | Version | Bytes | SHA-256 | Authority / qualification |
| --- | --- | --- | --- | --- |
| [01-master-requirements.md](sources/01-master-requirements.md) | 0.3.0 | 277140 | 49b168ea83d29c588f073d93015f0047c3df85b9c8e6c93c9387af0ec245e53d | Business identity, scope, commercial values, phase qualifications and acceptance |
| [02-pages-sitemap.md](sources/02-pages-sitemap.md) | 1.2.0 | 235721 | faa3fe1f82794612feab4024f27c6d6636349cb6e02ec7411760dd165ddb834c | Exact supplied page IDs, URLs, access and navigation |
| [03-page-sections.md](sources/03-page-sections.md) | 1.0.0 | 567126 | a119700e79245c2a01bf10f8672a630a1969cf6c6b3c9b87bf47175c212a6a84 | Ordered page regions, shared states and conversion contracts |
| [04-design-system-wireframes.md](sources/04-design-system-wireframes.md) | 1.1.0 | 823940 | 2d77b0c192ef260b2726be900b1455fea894a096cd9b205d7d949e7062aaf1dd | Design tokens, three light themes, accessibility and motion |
| [05-database-architecture.md](sources/05-database-architecture.md) | 1.1.0 | 355899 | bd11a1091fe80787413a88de2e6f9b54c19e7e244d2ef7e3c782a50db14d25d6 | Data ownership, schemas, invariants and ADRs/gates |
| [06-project-structure.md](sources/06-project-structure.md) | 1.1.0 | 617843 | f95cde1d641375ad62123468c45c43854811841735d9c9a11a4ae69ef94e1f6a | Repository paths, modules, dependencies and environment contracts |
| [07-development-roadmap.md](sources/07-development-roadmap.md) | 1.1.0 | 613513 | 909f24632c634ed675dde95245e06de33499643673116d0d6e3627d2c835f37e | M00-M14 tasks, dependency graph and acceptance |
| [08-implementation-guide.md](sources/08-implementation-guide.md) | 1.1.0 | 745328 | 3c02de25aab06d3c05b778eeab0f0a2fa713a413e69ee1ccbf779a0fa48a3466 | Execution, evidence, documentation and approval discipline |
| [09-content-assets.md](sources/09-content-assets.md) | 1.1.0 | 688672 | 763ec78f2d6e8d8a59485179782f8975277f98a290430c389e2b47c0eb00f2b3 | Copy/assets/SEO specifications; factual and editorial publication gates |
| [10-testing-qa.md](sources/10-testing-qa.md) | 1.1.0 | 511714 | 2e6a267614a9a5e0472b2a4af59f6f08891207080e5e582718456a88bd3917c6 | QA specifications; no executed application test results |
| [11-deployment-operations.md](sources/11-deployment-operations.md) | 1.1.0 | 182919 | aaa83b69a3a3ac2980f51aa988006d140a3ce0180897f90811f8e6c9ebf738df | Deployment planning; R11 choices/numerical policies remain pending |
| [12-business-operations.md](sources/12-business-operations.md) | 1.1.0 | 170109 | e5f796f8ffb176d4d6f48dc1f760abf47961cce64568e0fa22d8043d771a5c6e | Business operations; R12 policies/terms remain pending |
| [13-post-launch-growth.md](sources/13-post-launch-growth.md) | 1.1.0 | 150893 | 6a2a32204ab09a833162626d3619d2d333ba1f983073b6a6f64f00b935572e8f | Growth planning; R13 budgets/campaigns/targets remain pending |

Embedded version/hash tables often identify pre-25-October amendment inputs. They are historical provenance, not hashes of the current files above. Document 03 remains v1.0.0; master is v0.3.0, sitemap v1.2.0, and documents 04-13 v1.1.0. Do not rewrite historical records to force them to match.

## Reconciled counts and boundaries

| Register | Frozen result |
| --- | --- |
| Requirements | 236 = 207 FR + 8 BR + 15 NFR + 6 EXT; one row per master heading |
| Inventory | 215 = 124 P1 + 62 P2 + 28 P3 + 1 P2/P3 Product Terms |
| P1 | 91 public + 4 staff authentication + 27 dashboard + 2 shared system states; 12 entries retain C provenance |
| Catalog | 8 categories; 57 unique services; 58 memberships; SVC-009 cross-listed once; 5 solutions |
| Roadmap | 15 milestones M00-M14; 87 unique task IDs; dependencies remain task-specific |

Counts are planning entries and reusable templates, not 215 separate layouts or fixed content-instance quantities. P1 is not automatic approval of conditional implementation or publication. Existing original prices are indicative, never a binding public automatic quote. No future scope is promoted.

## Historical supersession change log

| When / evidence limit | Historical wording | Current scoped treatment | Authority |
| --- | --- | --- | --- |
| 2026-10-23 | Reduced 38-page publication subset | Full P1 public/private planning and all 57 service details; 124 planning entries | Master section 17; sitemap section 2; D-019 |
| Prior owner amendment; exact date not independently established | PostgreSQL/Prisma platform direction | MongoDB/Mongoose; technical examples in portfolio do not change platform | Master sections 9 and 14; ADR-01 |
| 2026-10-25 controlled update | Next.js-owned business backend wording | Separate Express/TypeScript backend in backend/; Next.js frontend in frontend/; all DB access through Express | Master section 9; architecture section 2; structure section 2 |
| 2026-10-25 controlled update | Atlas assumed mandatory for development | Locally installed replica-set MongoDB; Atlas optional later; production hosting open | Architecture section 2; guide section 5 |
| Step 4 owner selection; third theme added 2026-10-25 | Old navy/teal and two-theme wording | Editorial Terracotta default, Muted Slate Blue and Vivid Blue; Inter retained | Design sections 1-3; D-022 palette portion |
| Explicit ten-feature P1 amendment; exact original date not inferred | Older deferrals of article/testimonial/FAQ/search/CRM capabilities | Ten promoted P1 features retained within their stated limited slices | Master section 8.2; D-008; guide section 26.1 |
| Scope clarification retained in current roadmap | General CMS publication P2 interpreted to defer article publishing | Article draft/publish P1; general page/service CMS P2 | D-008; roadmap section 17.2 |
| Scope clarification retained in current roadmap | Advanced workflow logs/retries P3 interpreted to defer basic reliability | Basic logging/retries/idempotency with each first feature; advanced console P3 | D-025; roadmap section 17.2 |
| Later owner-declared document completion | Earlier Step N not begun / pending metadata | Later completed planning documents govern their topics; no execution or live readiness implied | Guide sections 1 and 26; source approval records |
| 2026-11-04 M00-01 authorization | Earlier audit permitted editing AGENTS.md only | Project-management and traceability documents now authorized for M00-01 only | Current owner instruction; AGENTS.md current task rule |

This is a record of existing supersessions, not newly adopted business/provider decisions. D-002 price proposals remain unapplied. EXT-001/002/003 possible P1 proposals do not override the later P2 Industries/Products inventory. Historical URL evidence O-03 remains open.

## Register maintenance

Use [traceability](traceability.md), [page inventory](page-inventory.md), [catalog](catalog-register.md), [decisions](../DECISIONS.md), and [progress](../PROGRESS.md). Update only affected evidence rows during authorized future work. A source change needs a separately authorized versioned amendment, a new hash baseline, and affected-register reconciliation; retain this baseline history rather than silently re-freezing it. See [verification](verification/m00-01.md).
