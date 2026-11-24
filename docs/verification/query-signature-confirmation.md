# Query format, branded signature, clear confirmation and independent imagery

2026-11-15 Asia/Dhaka. Owner-directed M06 inquiry/notification correction plus M09 public imagery/copy refinements. Implementation complete for review; no automatic owner acceptance or new roadmap task.

## Changes

-Future references: aradunq-{codes}-{sequence}, e.g. aradunq-wIa-001. Owner codes/order: Web w, Mobile m, Video v, Design g, AI uppercase I, Automation/CRM a, Marketing d, DevOps c, Cybersecurity s. AI IDs014–016 derive I; remaining canonical CAT-03 services derive a. Multiple codes deduplicated; no service selection uses aradunq-001. Examples illustrate shape, not actual customer allocations.
-Same transaction-safe counter and retry semantics; no reset/migration. Historical aradun-/ARQ values and signed receipts remain readable. Existing client IDs not created; no public record-lookup endpoint.
-HTML and plain-text client acknowledgement signature: original blue symbol with ARADUN wordmark text, Best regards, bold ARADUN Team, descriptor, hello mailto, WhatsApp link and website, italic tagline. Email's visible address and mailto both hello@aradun.com. Fixed local PNG embedded as CID attachment, not a broken undeployed remote URL. User-provided name escaped in HTML; existing subject/recipient/idempotency controls preserved. Admin recipient policy unchanged.
-Website: Your inquiry and next steps; Thank you. We've received your request. Explains saved message, review and reply, with a friendly way to add information. Removed delivery-unconfirmed and do-not-resubmit wording from saved state without claiming email delivery. Disabled mail and missing/expired receipt retain accurate recovery messages. Consultation time still agreed separately.
-Projects: original screenshots regenerated with independent palettes; purple workflow, separate dark-green campaign composition and distinct mobile/design/video screens. Public ARADUN themes/fonts unchanged. Eight new original SVG editorial illustrations replace all reused project covers on Home, Insights and detail.
-Brand inspiration is positive, without client-affiliation claim. Preview stories remain clearly fictional; no random company or internet portrait turned into an invented endorsement. Genuine client replacements remain owner inputs.

## Actual checks

-Vitest inquiry-reference/email-signature/public-intake/resend-intake:22 tests/4 files PASS. AI/automation distinction, combined codes, legacy/new signed receipts, transaction/retry/rollback, personalization, escaped HTML, contact links, attachment CID/PNG and distinct recipients covered. Fake transport/disposable databases only.
-Playwright inquiry-email-handoff/public-website/demo-content/showcase-expansion:32 desktop/mobile cases PASS. New references, friendly saved/missing confirmations, no false direct-visit conversion, consultation, retry, accessibility, distinct article asset paths and existing gallery controls/counts covered.
-Both builds, lint, types and boundaries PASS (168 sources/11 fixtures); public secret scan134 artifacts PASS. Compiled backend signature module imported successfully with its asset path. Actual signature/article/campaign previews inspected from ignored .tools. No live email or inquiry sent.
-All13 approved source hashes unchanged. No install, provider/account/spend, deployment settings, staff/dashboard or unrelated design changes.

## File scope

Backend: intake/server/reference.server.ts; notifications/server/resend.server.ts; new notifications/server/email-signature.server.ts; new assets/aradun-signature-symbol.png (unchanged copy of supplied original blue symbol) and asset README; inquiry-reference/public-intake/resend-intake tests and new email-signature.test.ts.

Frontend: intake/reference.ts and templates/confirmation.tsx; app/(public)/thank-you/page.tsx; content/data/editorial-guides.ts; content/components/demo-partners.tsx and demo-feedback.tsx;24 original study PNGs regenerated and eight new images/articles/guide-N.svg plus README. Browser inquiry-email-handoff/public-website/demo-content/home-interaction/showcase-expansion tests; AGENTS/PROGRESS/DECISIONS/traceability/public-review and this report. Existing unrelated dirty files preserved. Temporary generation/preview scripts ignored under .tools.

## Review / limits

Check the next submission's reference and friendly confirmation. Review signature on your own next inquiry email; provider-payload/browser preview tests are not mailbox-delivery or every-email-client rendering evidence. Existing sequence continues; it does not restart at001. Backend assets directory must accompany backend builds in any future packaging task; deployment remains postponed.

Primary implementation reference: [Resend inline images](https://resend.com/docs/dashboard/emails/embed-inline-images) and [Send Email API](https://resend.com/docs/api-reference/emails/send-email). Original guides/images still await owner content/visual acceptance; fabricated genuine client proof remains excluded. Stop for review.
