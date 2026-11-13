# M00-03 article publication, FAQ and media policy

Prepared: 2026-11-07 (Asia/Dhaka). **Owner-approved on 2026-11-07; runtime implementation and verification pending.** Approval evidence: **Approve and next.**, following the consolidated decision packet and explicit plan to record its recommendations/assignments. This is the next checkpoint within M00-03, not CMS implementation or whole-task acceptance.

The owner's **confirm and next** approves the preceding [CRM policy](architecture/decisions/m00-03-crm-policy.md) and authorizes this policy review. M00-01 is owner-accepted, satisfying M00-03's sole prerequisite. M01-01 acceptance and M00-02 provider gates remain unchanged. No application code, editor dependency, upload service, account or new route is authorized here.

Consolidated review: this policy is approved through and incorporated by reference in the [remaining-decision packet](architecture/decisions/m00-03-remaining-decisions.md). No duplicate publication policy is created; the consolidated packet records the actual selection.

## Sources, gates and existing approvals

[Master 01](sources/01-master-requirements.md) D-012, [database 05 sections 7.6/10](sources/05-database-architecture.md), [roadmap 07 M00-03/M08](sources/07-development-roadmap.md#m00-03), [guide 08 section 26](sources/08-implementation-guide.md#s8-26), [content/assets 09](sources/09-content-assets.md) and [QA 10](sources/10-testing-qa.md) govern the proposal. Source recommendations are distinguished from actual owner approvals.

Gates addressed: **U-03 / A5-04** draft/live behavior, **D-012 / A5-05 / U4-08** editor/media/FAQ choices. **A5-14** records conditional FAQ interface disposition. Decision owner: project owner with developer/content reviewer; due before M08-01/02, M08-05 and the corresponding optional branches. No named editor, content quantity or calendar deadline is invented.

Already approved: Phase 1 article publishing; [Admin-only publish/unpublish and scoped Editor draft access](architecture/decisions/m00-03-staff-policy.md); genuine proof, exact catalog/prices/routes and three light themes. General page/service CMS, historic revision UI, scheduled publication and full media library remain outside current Phase 1 execution. No future-feature design or scaffolding is undertaken.

## Approved article workflow — U-03 / A5-04

| Action | Approved behavior |
| --- | --- |
| Create / Save Draft | Store one workingDraft with stable content identity. Safe incomplete drafts are allowed; explicit save, no assumed autosave. Draft save never changes the public version |
| Edit a published article | Edit only its workingDraft; existing publishedSnapshot stays live until a separate successful Publish |
| Private preview | Render the saved workingDraft with the actual public template, staff authorization, a private notice, noindex and no shared cache. Require a saved identity; no public preview token/link |
| Publish | Admin-only; validate complete content, truthful author/claims, assets/rights, related IDs, taxonomy, slug and SEO. Atomically replace the current publishedSnapshot, increment publishedVersion and record actor/time; firstPublishedAt remains stable |
| Conflict | Reject stale revisions with recoverable conflict feedback; never silently overwrite another edit/publish/unpublish. No unsolicited merge or discarded input |
| Unpublish / archive | Remove eligibility on every fresh public read, search, card, sitemap and metadata path. Archive first unpublishes; restoring never auto-publishes |
| Slug change | Lock published slugs by default. An approved rename requires a reviewed redirect/link/canonical/sitemap migration, not a silent overwrite |

Store only the working copy and current public snapshot, bounded by the source schema; no unbounded revision array. Private staff/draft/evidence DTOs never enter public caches, analytics or search. Published database content uses the source's authoritative current eligibility predicate; a stale discovery index cannot make withdrawn content readable. Content already downloaded to a visitor cannot be retroactively erased; never publish private drafts to begin with.

## Approved editor format — U4-08

Use the source's bounded structured-content contract: explicit allowlisted text/heading/list/link/image/quote/code content types as supported by the final source-conformant schema, safe escaped rendering and controlled asset references. Permit no executable MDX, arbitrary raw HTML, scripts, embedded application components, arbitrary embeds or remote asset fetches. Do not store executable code as a rendering mechanism; code examples are inert text.

Keep content editing distinct from page layout/design: no visual page builder, theme override or editable service-price master. The editor widget/package is an ordinary implementation choice only if it fits this approved contract and remains maintainable; verify compatibility/security/license before any later installation. This proposal selects no package and creates no custom editor framework. Exact fields/limits remain source 05 requirements, not new inferred schema.

## Approved FAQ/help authoring — D-012 / A5-05 / A5-14

**Selected: source-managed validated FAQ/help as the Phase 1 authoring mode.** The developer maintains source records with stable keys/slugs, links/anchors, controlled assets and normal review/deploy verification; the owner reviews factual wording and offer claims. These are content records, not hand-built duplicated page bodies.

- Required PUB-010 `/faq`, PUB-011 help details and public search work fully under this mode. Do not remove public FAQ/help because no dashboard editor is selected.
- Do not create faqEntries or a second writable master for this mode. FAQ/help must not duplicate an Insights article body under a competing canonical.
- Approved conditional disposition: ADM-021/022 FAQ list/editor remain documented but **not selected for Phase 1 execution under this approval**. No menu/page/collection is implemented. These source planning entries are preserved, not deleted.
- Alternative for explicit owner selection: the source's limited FAQ editor/faqEntries become the sole authoring master after a verified one-time stable-key migration; no dual source/database master. That adds the corresponding authorized M08-06 scope and evidence. It does not create a broad CMS.

ADM-021/022 and M08-06 are explicitly not selected by owner approval; their source plans remain conditional and preserved. Required public FAQ/help and the source-authoring alternative remain mandatory and require verification.

## Approved image/media handling — D-012 / A5-05

**Selected: controlled asset references, without a dashboard upload feature.** A reviewed repository/deployment asset workflow supplies approved public media; article drafts select only permitted references. The owner supplies/verifies usage rights and factual context; developer validates delivery/access rules before publication. No production storage/CDN/provider choice is implied.

| Required control | Approved baseline process |
| --- | --- |
| Image truth/rights | Real, permitted media with provenance reviewed; sample/demo content clearly classified only where approved; no invented client proof |
| Public image delivery | Validated reference, meaningful alt where needed, explicit dimensions, optimized formats/sizes and responsive delivery; no arbitrary remote URL fetch or active content execution |
| Private material | Draft-only/private evidence stored separately from public assets; knowing a reference cannot grant public access. Never place confidential material in frontend/public or a publicly downloadable manifest |
| Editing a published asset | Do not replace a live reference's bytes with an unreviewed draft. New media has its own reviewed identity/reference; draft selection alone cannot leak it through the live page |
| Publish validation | Missing, private, unreviewed-rights or invalid assets block publication; validate every rendered reference, not only the featured image |
| Operational fallback | If media is unavailable or rights unconfirmed, keep the affected draft unpublished and request a permitted replacement; never silently bypass required content/assets or fabricate proof |

The controlled asset workflow must support the approved article/image capability. It is not permission to disable required images or publish an unready site. No general media manager, public intake attachments or unsafe automatic URL import is added.

Alternative requiring explicit selection: the source's minimal staff-only secure image upload path, with immediate authorization, type/size/content checks, quarantine/scanning decisions, safe keys/MIME/access, private storage isolation and cleanup. Exact limits/provider/scanner must be approved/verified before upload implementation. Approved baseline leaves M08-07 not selected, preserving its plan and security contract.

## SEO, testimonials and publication safety

Article SEO belongs to that article's draft/public snapshot. Source-backed page overrides retain registered page/content identity and existing ADM-020 ownership. Saving article metadata as draft must not update live SEO. Editors cannot relax protected/private noindex or make canonical/index exceptions reserved for Admin review.

Public testimonials require genuine verified permission and permitted attribution; private proof never enters public output. Revoked evidence immediately makes affected public content ineligible. Case/demo classifications remain truthful; there is no fabricated testimonial/work quota. Actual copy, assets, initial article/help inventory, contact readiness and commercial terms remain factual owner inputs, not settled by choosing this workflow.

## Decision request and task impact

| Gate / affected tasks | Choice requested | Later acceptance evidence, not tests run now |
| --- | --- | --- |
| U-03/A5-04; M08-01/02 | Working draft plus current published snapshot and explicit Admin Publish | QA-CMS-01/02/03: live A unaffected by saved draft B; private preview; stale conflict; immediate unpublish; slug migration safeguards |
| U4-08; M08-01/02 | Bounded structured editor with safe rendering and no executable/raw-content extensions | QA-CMS-04: stored-XSS, unsafe links/content, source limits and publication validation |
| D-012/A5-05/A5-14; M08-05/06 | Source FAQ/help baseline; optional ADM-021/022 not selected, public FAQ/help still required | QA-CMS-08: full FAQ/help/search/anchors; one authoring master; conditional migration only if later selected |
| D-012/A5-05/U4-08; M08-05/07 | Controlled images/references; optional upload path not selected | QA-CMS-09: missing/private/rights-invalid references denied, no draft leak or unsafe fetch; optimized accessible image delivery |
| Existing approved publication permissions; M08-03/04/08 | No new role change; retain truthful evidence and SEO ownership | QA-CMS-05/06/07: revoked evidence hidden, private proof omitted, correct metadata identity/permissions |

**Approval: owner-confirmed on 2026-11-07.** Exact evidence: **Approve and next.**, approving the consolidated packet recommendations. Selected: working draft/public snapshot, bounded structured editor, Admin-only publish, source FAQ/help and controlled assets; optional FAQ editor/uploads not selected. This is policy approval, not runtime enforcement or publication readiness. Remaining facts have approved owners/deadlines in the consolidated register. No source edits, CMS implementation or subsequent roadmap task is authorized by this record.
