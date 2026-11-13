# M00-03 CRM identity, pipeline and corrections policy

Date: 2026-11-05 (Asia/Dhaka). **Owner-approved on 2026-11-07; runtime implementation and verification pending.** Exact owner evidence: **confirm and next**. This confirms the preceding CRM proposal, not M00-03 completion or M07 implementation. Checkpoint within M00-03, not a new task, CRM implementation or whole-task acceptance.

Authorization: owner reply **ccepted. Update progress and go next.** accepts the preceding staff-policy documentation checkpoint and authorizes this next M00-03 review. That earlier authorization did not select the CRM proposal. The later confirm and next selects this policy; M01-01 acceptance and M07 code authorization remain unchanged. M00-01, the sole M00-03 prerequisite, is owner-accepted.

## Source and decision boundaries

[Master source 01](../../sources/01-master-requirements.md) D-011, [source 05 sections 9.3–9.6](../../sources/05-database-architecture.md), [source 07 M00-03](../../sources/07-development-roadmap.md#m00-03), [guide 08 section 26](../../sources/08-implementation-guide.md#s8-26), [source 10 QA-CRM-01–09](../../sources/10-testing-qa.md), and [source 12 sections 5/6](../../sources/12-business-operations.md) govern this review. The operating criteria explicitly selected below are owner-approved by the current confirmation; unrelated source 12 recommendations remain qualified. Existing staff permissions are [owner-approved](m00-03-staff-policy.md).

Gates: **D-011 / A5-03**, coordinated with **O12-08 / O12-09**. D-013/A5-02 permissions are already selected; privacy/retention D-014 and finance D-007 remain independent. Owner: project owner, supported by developer. Decision due before M07 identity/mutation/merge work; no invented calendar date or named staff member.

## Retained source invariants

- One canonical Contact may have many inquiries and opportunities. Customer status is an embedded profile on that Contact, not a separate identity/customer collection.
- A submitted inquiry is an identity/offer snapshot, not a verified person. Preserve original submitted identity, offer/price context and audit provenance through corrections and merges, subject to the later controlled privacy-redaction policy.
- Public submissions cannot overwrite existing contacts, reveal customer status, assign ownership or grant staff access. Matching email is a candidate hint, never proof that two people are the same.
- Won is not Paid. A stage change or customer conversion creates no invoice, payment, project, subscription or customer login.
- Business Activity is distinct from restricted AuditEvent. Both use bounded history queries; record/field authorization applies to lists, details, linked context, searches and counts.

## Approved identity and correction rules — selected by owner

| Operation | Approved policy | Permission / required evidence |
| --- | --- | --- |
| Link inquiry to Contact | Staff reviews candidate matches and explicitly selects an existing identity or creates a new one; shared email alone never merges records | Admin or Sales for authorized assigned inquiry; current revisions and reason/context; concurrent retries converge on one link |
| Correct contact details | Correct current reviewed fields, preserving submitted snapshots; significant identity/link correction requires explicit review | Admin; Sales may edit permitted current fields on owned contacts, not rewrite original identity/provenance or expand access |
| Assign/reassign/unassign | Admin controls reassignment; active eligible assignee required; unassigned/orphaned work remains visible to Admin | Current revisions, history/audit; deactivated staff lose access immediately; no automatic round-robin |
| Merge duplicate contacts | Admin chooses survivor after affected-link preview, records reason and confirms identity; reparent controlled references and mark duplicate merged | No cycles, auto/bulk merges or hard-delete shortcut; preserve original event references/snapshots; conflicting active customer/finance links block pending explicit review |
| Unsafe or large merge | Refuse the one-shot merge when its measured safe transaction bound is exceeded; keep both identities intact and report the need for controlled review | Developer records/tests a safe bound before M07-07 writes; no speculative resumable job engine or silent partial merge is selected |
| Correct a mistaken link/merge | Admin reviews affected records and restores correct current relationships only through a validated audited correction; preserve provenance | No blind undo after subsequent activity; no destructive restore of stale snapshots; complex corrections require controlled review before writes |
| Correct/redact a business note | Admin correction with reason and retained event provenance; no mutable audit log or unlimited prior-note/PII copies | Exact privacy erasure/retention treatment remains D-014; Sales note-edit exceptions are not selected by this proposal |

All cross-record mutations must be revision-checked, idempotent where retried, transactional for required invariants, and deny unauthorized linked targets. An assigned task does not grant all contact history. External calls remain outside transaction retries. These are required implementation contracts, not tested behavior at this checkpoint.

## Approved pipeline transition policy

The exact stages remain **New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost**. Inquiry spam/duplicate/no-response classifications do not replace opportunity stages. Every change records actor/time/from/to and useful context; backward/reopened/exception transitions require a reason. An explicit repeated command must not duplicate transition history.

| Current stage | Approved ordinary next stages | Gate/context |
| --- | --- | --- |
| New | Qualified, Lost | Reviewed fit and permitted Contact/inquiry link; Lost requires reason |
| Qualified | Discovery, Proposal Sent, Lost | Direct proposal only when discovery is unnecessary and the reviewed scope is sufficient; record why |
| Discovery | Proposal Sent, Lost | Agreed discovery output/context supports an estimate; no paid-discovery fee/provider inferred |
| Proposal Sent | Negotiation, Won, Lost | Direct Won permits genuine acceptance without inventing a negotiation; require written agreed engagement and authorized acceptance evidence |
| Negotiation | Won, Lost | Explicit outcome and acceptance/decline evidence; Won never implies payment |
| Won | None automatically | Admin may reopen to Negotiation with reason and engagement-impact review; no automatic customer reversal |
| Lost | None automatically | Admin may reopen to New with reason, fresh qualification and preserved prior outcome |

Admin and Sales may execute ordinary transitions only on records allowed by the approved staff matrix. Admin alone may move an active stage backward to an earlier active stage, with reason; all unlisted forward/terminal transitions are rejected. No configurable pipeline builder, time-based transition or automatic stage-change campaign is selected. Terminal reopening and backward moves do not erase the original outcome or its history.

## Approved customer conversion and reversal

1. Marking Won and converting a customer are separate explicit actions. Admin or Sales on an owned authorized opportunity confirms conversion only after the opportunity is Won and its canonical Contact is reviewed.
2. Reload revisions/current authorization in one transaction, create/reactivate the embedded customer profile only under the approved correction rules, link the opportunity and append activity/audit. Retries/concurrent conversions return the same customer identity; two Won opportunities cannot create duplicate profiles.
3. Preserve first conversion provenance. Later successful engagements link to the same identity; no automatic reset of the original conversion date or source.
4. Reopening/Lost changes do not automatically deactivate a customer. Admin-only reversal requires a reason and review of all linked Won engagements/external obligations. Keep the profile active while another engagement still supports customer status. If a mistaken conversion has no remaining supporting engagement/obligation, record inactive/reversed status and provenance rather than deleting history.
5. Reactivation requires an explicit reviewed Won conversion and retained prior reversal provenance. Do not rewrite prior audit evidence or turn reversal into a refund/payment-status change.

## Offline intake and baseline features

Retain the source 12 O12-08 external intake register until an internal offline-capture contract is explicitly approved. Do not silently create an unlinked Opportunity, fabricate a client form submission/consent, introduce an import screen or remove the required Inquiry relationship. Decide any future offline-to-Opportunity contract before its first mutation; this approval does not authorize that interface.

Follow-ups remain manual, authorized and linked to one permitted inquiry/contact/opportunity; due instants are UTC with explicit display timezone. Conditional assignment email is still unselected and uses the shared outbox only if approved later. No mailbox sync, campaign engine, customer portal, organization-account system or future-phase design/scaffolding/testing is introduced.

## Required later verification — not executed now

| Source QA / affected tasks | Required future evidence |
| --- | --- |
| QA-CRM-01/02; M07-01/02 | Distinct people sharing email, concurrent link creation, stale/inactive assignee denials, orphaned-work visibility, linked-field isolation |
| QA-CRM-03; M07-03 | Every selected ordinary/backward/reopen edge, rejected unlisted edges, missing reason/acceptance denial and separate inquiry classifications |
| QA-CRM-04/05; M07-05 | Non-Won denial, explicit/retried/concurrent conversion, same identity across two wins, reversal with other engagements, no payment/portal side effects |
| QA-CRM-06; M07-07 | Survivor/cycle/conflict checks, preserved history, concurrent mutation refusal, bounded transaction abort and no partial graph rewrite |
| QA-CRM-07/08/09; M07-04/06/08 | Target/assignee scoping, timezone/DST due cases, note/audit separation, private search/count consistency |

These are future Phase 1 acceptance cases, not claims of executed tests or permission to start M07. Real replica-set transaction/index evidence is required at implementation.

## Review and approval

**Approval: owner-confirmed on 2026-11-07.** Exact evidence: **confirm and next**. Selected: the identity/correction rules, seven-stage transition table, explicit conversion and Admin-only reversal/merge policy. Runtime enforcement is unimplemented and untested. Safe merge transaction bounds still require measured implementation evidence before M07-07 writes; offline internal capture, conditional assignment email and independent privacy/finance choices are not selected. Business-policy selection does not establish operational readiness, real client evidence, privacy retention policy or legal/financial outcomes.

The staff-policy documentation checkpoint is owner-accepted separately. Whole M00-03 remains in progress; after this CRM decision, article/publication/FAQ/media, privacy/recovery, conditional-mode and commercial/content readiness policy work remains. No approved source document is changed.
