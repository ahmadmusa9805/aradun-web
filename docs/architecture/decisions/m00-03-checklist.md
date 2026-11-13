# M00-03 decision checklist

Prepared: 2026-11-04 (Asia/Dhaka), under the owner's current M00 continuation instruction. **Current update 2026-11-05: M00-03 is authorized and in progress; [staff policy](m00-03-staff-policy.md) is owner-approved; runtime enforcement and remaining task gates are pending.** This remains the full review agenda, not a selected policy, activated feature, final M00-03 acceptance or application implementation. No choice in this checklist becomes approved because it appears here.

Current checkpoint 2026-11-05: staff-policy documentation is owner-accepted; [CRM policy](m00-03-crm-policy.md) was owner-approved on 2026-11-07. Current checkpoint: [publication/FAQ/media proposal](../../content-publication.md), awaiting owner approval.

Current consolidated checkpoint: [remaining-decision packet](m00-03-remaining-decisions.md) is the owner-review entry point, covering all inherited D/A5/U/U4/O IDs and all 12 conditional P1 pages. Staff/CRM approvals remain; new choices/deadline assignments are proposed only. M01-01 and M01-03 are now owner-accepted. Earlier preparation-time statements below do not override current status.

Approval update 2026-11-07: consolidated baselines/conditional alternatives and responsible-owner/deadline assignments are owner-approved. [Final verification](../../verification/m00-03.md) assesses M00-03 as implementation complete; owner acceptance pending. Earlier preparation/proposal statuses below are historical. Missing factual/provider/runtime evidence remains due before its affected task/action.

## Dependency, scope and acceptance

Task: [M00-03 — Resolve workflow, policy and conditional-interface gates](../../sources/07-development-roadmap.md#m00-03). Its only task dependency is **M00-01**, which is owner-accepted. It does not depend on completing M00-02. Coordination with open provider/host capabilities is still necessary, and dependent feature work cannot bypass those gates.

Requirements: BR-001, BR-002, BR-005, BR-006, BR-008, FR-14-08, NFR-004 and NFR-005. Modules: Identity, Intake, CRM, Content, Operations. Source-designated record locations are this decisions directory and `docs/content-publication.md`; no empty policy files or new requirement IDs are created by this preparation.

Required work: record permission/publishing matrix, CRM corrections, article draft behavior, FAQ/media mode, consent/retention, booking/finance mode and commercial/asset readiness owners. Exact task acceptance: **Each D/A5/U gate is selected, retained with baseline, or assigned a deadline; no conditional UI is silently dropped or enabled; unresolved facts cannot be replaced by examples.** Verification: owner decision review using the inherited register; trace affected tasks and route activation. Close each decision before its dependent task; unrelated authorized work may proceed.

Read with [the detailed inherited registers](source-decisions.md), [DECISIONS.md](../../../DECISIONS.md), source [01 section 14](../../sources/01-master-requirements.md), [05 sections 11/18](../../sources/05-database-architecture.md), [08 section 26](../../sources/08-implementation-guide.md), and source 09 content-readiness/10 QA/11 recovery/12 operations qualifications. M00-02 provider selection and M00-03 business/security policy are related but distinct decisions.

## Checklist for owner review when M00-03 is authorized

The staff-policy subset is now owner-approved in the canonical policy record; other rows and the remaining factual/provider/UI choices are **pending review**, not preselected. Owners are responsibility roles; actual names/coverage must be confirmed. The permitted disposition is selected, retained source baseline with evidence, or explicitly deferred with owner and deadline. Do not convert an unavailable fact into an invented answer.

| Gate group | Questions / evidence to prepare | Retained source boundary, not a new decision | Review owner / latest dependent point |
| --- | --- | --- | --- |
| D-009/013; A5-01/02; NFR-005 | Admin/Sales/Editor record/field visibility, publish rights, invitation/bootstrap/offboarding, session assurance; mandatory MFA/factors, recovery and last-admin safeguards | Provider/library identity plus current local staff authorization; no public signup/custom passwords/MFA. Provider choice remains M00-02; exact matrix and numeric session/recovery policy are open | Owner + developer; before M03 protected workflows; provider capability must support selected policy |
| D-011; A5-03; O12-08/09 | Inquiry/contact/opportunity links, duplicate review, merges, allowed stage transitions/Won evidence, customer conversion/reversal and offline intake | Canonical Contact and history preserved; Won is not Paid; no automatic email-identity merge or duplicate customer store | Owner + developer; before M07 mutations |
| U-03; A5-04; U4-08 | Working draft/current public snapshot, explicit publish/unpublish, private preview, editor format and conflict behavior | P1 article workflow only; broader CMS, revision-history UI and scheduled publishing not promoted | Owner/editor + developer; before M08 article/editor work |
| D-012; A5-05; U4-08 | Source-managed FAQ/help versus optional editor; controlled assets versus minimal upload; editing/publishing permissions and file access | Source FAQ/help and controlled references are baseline; optional FAQ/upload choice cannot introduce full media library or defer file protections | Owner/editor + developer; before related M08 editors/uploads |
| D-014; A5-09; NFR-004 | Actual collected fields/data flows, notice/consent and analytics configuration, jurisdictions, data minimization and class-specific retention/deletion | No public analytics/intake policy guessed from a template; archive is not erasure; no blanket compliance claim | Owner + qualified reviewer/developer; before public capture/analytics and retention enablement |
| A5-13; D-014/020 | Restricted restoration-safe deletion/suppression record, provider copies, backup retention/location, recovery ownership and operational cover | Required recoverability/privacy remain; exact ledger format/retention and numerical RPO/RTO not approved by Scenario A preference | Owner + appropriate reviewer/developer; before production backup/deletion and M13-03 restore qualification |
| D-003; A5-06 | Manual consultation versus external/integrated scheduling, source phase, linkage and confirmation wording | Manual consultation request remains P1 baseline, not an appointment. Live scheduling requires explicit selection/promotion; EXP-031 remains P2 unless changed | Owner + developer; before M06 conditional booking branch or any booked-slot claim |
| D-007; A5-07 | External ledger versus optional staff payment tracker, reconciliation/corrections and finance permission | External finance baseline; optional ADM-027 is not checkout, invoice generation, gateway or recurring billing | Owner/finance + developer; before M11-06/ADM-027 activation |
| A5-11; FR-08-03 | Enable assignment-specific emails? Which events, staff destinations, privacy and suppression? | General intake notifications remain required; assignment emails are conditional and reuse the outbox; no campaign engine | Owner + developer; before M07-09 assignment-email activation |
| O-05; A5-14 | Explicit decision or deadline for every conditional policy/auth/FAQ/access/audit/payment screen; required capability alternative and navigation disposition | All 12 conditional P1 planning entries remain. An optional screen may use a source/provider/manual alternative only with a tested required capability; no silent omission or activation | Owner + developer; before affected screen/menu implementation and final P1 coverage acceptance |
| D-002/004/005; A5-10; U-06; CR-04/05/06 | Preserve original prices; decide package scope/units/revisions/exclusions/availability, SVC-057 billing period and commercial/support terms | No proposed price increases, invented terms/paid-discovery fees or binding automatic quote. Full 57-service planning retained; delivery readiness is separate | Owner + delivery/legal reviewer where needed; before offer publication, sale or binding commitments |
| D-001/018/019/023; U-01/04/05; U4-09; CR register | Final copy/identity facts, working hello mailbox/contact channels, actual work/testimonials/permissions, initial article/help inventory and service readiness owners | Genuine proof only; no arbitrary content quantity, fabricated client/result or assumed mailbox/registration readiness | Owner/editor + contributors; M09 and M13 publication readiness |
| D-010/017/021; NFR-015 | Basic source visibility versus future reports; optional events/tools; integration system-of-record, synchronization and external data use | P1 inquiry source capture and GA4/Search Console direction retained; advanced attribution/integrations remain gated; booking synchronization conditional | Owner + developer/privacy reviewer; before related M06/M10 events or approved integration |
| O-03; A5-12 | Preserve current supplied routes; identify missing older historical URL evidence and any actual migration request | Current master/sitemap parity verified; unseen historical URL parity is not claimed. No replacement /work or /legal paths | Owner + developer; before a route change or historical parity claim |
| U4-01–10; design section 3.2 | Final vectors/header/hero/rights, theme first paint, accessible Vivid Blue small text, actual payload budgets and component QA | Three approved light themes/Inter remain; no token substitution, dark mode, cursor or motion feature inferred | Owner/designer + developer; before affected M04/M12 work and release QA |
| D-020; A5-08 | Assign factual capacity/budget/alert/backup owner and deadline for provider-dependent policy details | Local baseline is approved; provider/tier/region/spending and achieved recovery are open M00-02/later gates. Scenario A preference does not approve weaker mandatory controls | Owner + developer; relevant M01-04/feature/deployment lock and M13/M14; coordinate without selecting providers in this checklist |
| D-006/015/016; O-07; U-02 | Confirm later industries/products/AMS/product-domain/tenancy/AI decisions remain future; assign appropriate future approval owner | No P1 promotion or speculative implementation; commercial products remain separate from internal CRM | Owner; before future promotion/product scope work |

## Conditional P1 inventory to disposition explicitly

- TRU-01/02/03: cookie, accessibility and security/disclosure policies.
- STA-002/003/004: recovery, reset and verification/MFA routes; reconcile provider-owned flows without inventing historical route approval.
- ADM-021/022: FAQ/help list and editor.
- ADM-023/024: staff access administration and detail.
- ADM-025: audit viewer; required audit logging persists independently.
- ADM-027: optional manual payment tracker; external finance baseline persists independently.

Underlying privacy/access revocation/audit/FAQ/recovery capabilities are not optional simply because a dedicated screen is conditional. Record the alternate process and evidence with the affected page/task IDs.

## Settled decisions not to reopen as new approvals

D-008: article publication P1 versus broad CMS P2. D-019: full P1 inventory/all 57 service details supersedes reduced publication subset; readiness remains open. D-022: approved three themes supersede the old palette only. D-025: basic reliability accompanies first feature; advanced workflow console stays future. npm Workspaces/root lockfile, approved local families/native MongoDB and separate apps/no-paid-local baseline are already approved. No repeated family approval is needed.

## Practical review order and future output

If the owner authorizes M00-03, start with a reviewable **staff access, publishing, MFA/recovery and session-policy proposal**, then CRM/editor/FAQ decisions, privacy/recovery and conditional-screen dispositions, then commercial/content/asset readiness owners/deadlines. This is a suggested sequence, not a new task-ID namespace or evidence that the work began. Provider constraints may require recording a bounded policy requirement before its adapter is selected; do not invent an entitlement.

For each actual decision record: existing gate ID; question; exact chosen/retained/deferred disposition; baseline and alternatives; genuine approval/date/evidence; responsible owner and due task; affected requirement/page/task IDs; privacy/security implications; required later tests and update links. Use root DECISIONS.md as index and one canonical detailed record; use docs/content-publication.md only when its real policy is authorized. No duplicate task board or source edits.

## Readiness and recommended next approval

M00-03 is now authorized by the owner's Go next and depends on accepted M00-01. The following was the original preparation-stage recommendation, now fulfilled as authorization only; the staff-policy subset is now approved; other policy decisions remain pending: **Authorize M00-03 documentation-only decision review using this checklist, beginning with the staff access/publishing/MFA/recovery/session proposal; no application code, installation, accounts or production action.** Owner policy acceptance remains distinct from preparing proposals.

M01-01 and M01-03 have since been implemented, verified and owner-accepted. It did not require completing M00-03 or paying for production providers. This does not waive M01-02's M00-02 dependency, M01-04's CI/protected-preview requirements, or feature/release approval gates. The checklist itself grants no task or policy acceptance.
