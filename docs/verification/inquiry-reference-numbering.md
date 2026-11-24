# Per-inquiry reference numbering

2026-11-15 (Asia/Dhaka). Owner explicitly resolved the prior M06 intake/notification reference decision: every inquiry receives a new number. Implementation complete for owner review; not full-platform acceptance.

## Behavior

- Global sequence within each isolated database, starting001. aradun-wa-001 for Web+Automation, aradun-wadcsmgv-002 for all categories; aradun-003 when no service is selected. At1000 the display grows; no date-based reset. Examples illustrate the format, not actual allocated customer records.
- Owner code order: Web w, Automation a, Marketing d, Cloud c, Security s, Mobile m, Design g, Video v. Canonical primary categories avoid treating a cross-listed service as two requested services. Solutions/packages resolve via validated canonical ownership. Client input cannot choose the reference or counter.
- New implemented inquirySequences collection has a fixed unique _id. Explicit initialization inserts zero only if absent; it never resets an existing counter. Allocation uses the existing replica-set transaction/session, alongside inquiry and durable outbox. Failed enqueue rolls back the counter; concurrent requests serialize. Same-key retry preserves reference without consuming another number. Counter must be backed up/restored consistently with inquiries/outbox; never independently reset it.
- Existing references remain unchanged. Frontend and backend accept legacy ARQ and new short references. Receipt HMAC, expiry, environment isolation and privacy remain. Sequential reference alone never permits access; no new public lookup route.
- Confirmation, follow-up mail link, stored inquiry and both email events use the same reference. No feature beyond this clarification was started.

## Actual verification

- Vitest: inquiry-reference, public-intake, resend-intake, database and mongo: **36 tests/5 files PASS**. Includes six concurrent separate requests from the same person, concurrent same-key retry, rollback on outbox failure, shared sequence registration, primary-category deduplication, solution/package mapping,1000 rollover and old/new signed receipt/tamper checks. Initial two index-registry expectation failures corrected to include the implemented collection; final suite passes.
- Playwright: inquiry-email-handoff/public-website focused receipt, Contact/Quote/Consultation and lost-response tests: **10 desktop/mobile cases PASS**, with disposable native MongoDB and fake email provider.
- Both application builds, lint, type checks and boundaries PASS (166 sources/11 fixtures); public secret scan PASS (89 artifacts).
- Actual local GET /api/intake/status returned200, available true, emailDeliveryEnabled true. No live inquiry or external email sent by these tests. New counter initialized by the intake service when needed, without rewriting historical inquiries.
- Approved source hashes verified unchanged. No source-document, dependency, hosting, production, staff/dashboard or unrelated user changes.

## Files

New backend modules/intake/models/inquiry-sequence.model.ts and server/reference.server.ts; new frontend modules/intake/reference.ts; new backend/tests/inquiry-reference.test.ts. Updated backend intake submission/receipt services, db/model-registry.server.ts, tests/public-intake.test.ts and database.test.ts; frontend inquiry-form.tsx and confirmation.tsx; browser inquiry-email-handoff.spec.ts and public-website.spec.ts; AGENTS/PROGRESS/DECISIONS, traceability/public-review and this report.

## Review and next action

On your next Contact/Quote/Consultation submission, check that confirmation and both emails share the new short reference. Retrying a failed response should retain it. Existing submissions retain their old references. Genuine client assets, the remaining page-by-page content/visual review and separate publication approval from the prior batch remain open; this numbering change does not close those items. Stop for owner review, no automatic next task.
