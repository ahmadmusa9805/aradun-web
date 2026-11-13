# M06-06 local Resend integration

Subsequent approved checkpoint: [local database foundation applied and verified](m06-06-local-database.md). All 12 collections/30 application indexes are now present; earlier missing-index observations below are historical. No staff account exists yet; intake/email remain off.

Latest prerequisite review: [local key/database/staff readiness](m06-06-local-readiness.md). Private keys and technical notice revision now prepared; replica set running, but application collections/indexes and an eligible staff account are absent. Earlier missing-key observations below are historical. No activation or further email performed.

## Owner inbox evidence and activation review - 2026-11-12

Owner screenshot confirms the labeled test arrived in the configured inbox. The controlled one-email delivery checkpoint is accepted; this is owner-observed receipt, not a provider webhook delivery-state update. Activation review found four missing backend settings: RATE_LIMIT_HASH_SECRET, JOB_TRIGGER_SECRET, PRIVACY_NOTICE_VERSION and INTAKE_STAFF_RECIPIENT_IDS. MONGODB_URI is present. EMAIL_PROVIDER remains disabled and intake/outbox remain unset/default disabled. No additional message, queue run, env/database/account change or release action.

Next proposed M06-06 local form-readiness checkpoint: prepare missing private runtime keys, verify the configured local replica set and required indexes read-only, identify an existing eligible staff recipient without creating/changing accounts, and check the current privacy-notice version. Report any genuine business/account/index approval gate before activation. Do not run queued messages or enable production. Application changes, if needed, stay within existing intake/outbox scope. Requires the next explicit approval; not started in this receipt-review checkpoint.

## Controlled live test result - 2026-11-12

Owner **Approve and next.** accepts the verified local implementation checkpoint and authorizes exactly one labeled external test to CONTACT_NOTIFICATION_EMAIL. Executed `npm run email:test --workspace @aradun/backend` once; exit 0, **Resend test outcome: accepted**. Subject: **[TEST] ARADUN transactional email integration test**. API accepted the request; delivery/inbox receipt is not yet verified. No resend, queue execution, backend/.env modification, intake activation, database operation or production release. Credentials and addresses were not printed.

Next: owner checks the configured inbox and spam folder and confirms whether the message arrived. Review the activation prerequisites below afterward; no automatic activation or another task. Prior implementation-only statements below describe the earlier checkpoint.

2026-11-12. Implementation and automated verification complete; owner acceptance and actual delivery/activation evidence pending. Owner supplies Resend credentials and explicitly authorizes completing/testing the integration. This supersedes the earlier email deferral for this subject. Zoho remains the human mailbox host; no Zoho SMTP integration, account purchase or unrelated help/discovery task.

## Implemented

- Express-only Resend HTTPS adapter using native Node fetch; no added dependency. Validates RESEND_API_KEY, EMAIL_FROM, EMAIL_REPLY_TO and CONTACT_NOTIFICATION_EMAIL. Fixed endpoint, redirects refused, bounded timeout, plain-text fixed templates, no user-controlled sender/reply-to/subject/recipient list.
- Reuses the existing durable transactional inquiry/outbox, leases, fencing, bounded attempts, rate-limit retries and authenticated machine job endpoint. New worker binding in server.ts only for explicit `OUTBOX_MODE=resend`. No request-time email or separate alias notification path.
- Revalidates current inquiry/reference/type and recipient eligibility before sending. Staff alert requires the single configured active Admin/Sales staff identity; delivery goes to the fixed notification inbox. Missing/archived inquiry or disabled/unauthorized staff is suppressed. Development/staging redirect every message to CONTACT_NOTIFICATION_EMAIL with a TEST subject prefix; production recipient routing is implemented but hosted intake/release remains gated.
- Provider acceptance ID is retained with `deliveryState=accepted`, never claimed delivered. Ambiguous timeout/network/409/5xx or malformed success becomes uncertain; no automatic resend/reconciliation of uncertain messages. 429 uses the existing bounded retry schedule; permanent rejects fail safely. Provider errors/credentials and private inquiry bodies are excluded from logs/templates. Synthetic fixture ownership protection remains.
- Outbox claim/idempotency protections remain application authority. Adapter hashes the stable event dedupe key for the provider header. Resend documents a **24-hour** idempotency window; this does not establish exactly-once delivery or justify retrying an uncertain message later. [Resend idempotency](https://resend.com/docs/dashboard/emails/idempotency-keys), [send API](https://resend.com/docs/api-reference/emails/send-email), [error contract](https://resend.com/docs/api-reference/errors).

## Actual configuration and verification

- All four owner-provided variables are present and pass local format validation through `npm run email:check --workspace @aradun/backend`. Values never printed; backend/.env left unchanged.
- Current owner configuration has EMAIL_PROVIDER=disabled, OUTBOX_MODE unset/default disabled and PUBLIC_INTAKE_ENABLED unset/default false. Adding credentials alone does not activate delivery. No owner database/account/index operation or actual provider request performed.
- Focused command: `npm run test -- backend/tests/resend.test.ts backend/tests/resend-intake.test.ts backend/tests/outbox.test.ts backend/tests/public-intake.test.ts backend/tests/env.test.ts`: **58 tests / 5 files PASS** after correcting initial test setup to respect immutable outbox records. Actual disposable native replica-set MongoDB, transactions/duplicate requests, worker concurrency, fixed sandbox recipients, acceptance IDs, uncertainty, orphan/staff suppression, injection rejection and mocked HTTP outcomes verified. No real mail in automated tests; default network sender explicitly refused in test mode.
- Build/catalog, typecheck, lint/boundaries and format PASS. Final public-artifact scan with backend/.env loaded checks the actual Resend key without printing it: 80 artifacts PASS. Additional activation assertion verified in a focused 14-test rerun (all PASS; not extra distinct tests). Immutable source/register verification PASS after retaining proposed-source qualifications in traceability; all 13 source hashes unchanged. No frontend behavior changes; existing saved/queued versus failed receipt behavior preserved. Browser/human and real staging delivery remain separate evidence.

## Remaining activation gates and next action

1. **One controlled live test:** owner explicitly authorizes a single labeled test to CONTACT_NOTIFICATION_EMAIL; run `npm run email:test --workspace @aradun/backend`. It uses only the supplied four settings, no DB or full queue, always redirects to the configured notification inbox. API acceptance still requires owner confirmation of inbox receipt. Re-running deliberately creates a separate test message.
2. Verify sender-domain/account permission and actual acceptance/receipt through that test. No new account, plan or spending selection is included.
3. Actual form-to-email activation still requires the existing reviewed intake privacy/version/index configuration, one approved active staff recipient ID, strong JOB_TRIGGER_SECRET, EMAIL_PROVIDER=resend and OUTBOX_MODE=resend. No staff account/ID or secret is invented. Existing hosted intake restriction remains; production release is not authorized here.
4. The protected endpoint `POST /internal/jobs/outbox/run` uses its existing bearer secret and empty body, no browser Origin. Startup does not send or schedule email. Review pending outbox work before manually running it; hosted scheduling/reconciliation/monitoring need their approved operational evidence.
5. Full M06-06 is **partial**: protected staff inquiry reading/link workflow remains deferred with dashboard work, real staging delivery/failure visibility, bounce/delivery evidence and launch/release gates remain. This alert is minimal reference/type information, not the private inquiry body; it must not be mistaken for the finished staff workflow.

Next explicitly proposed checkpoint is **M06-06 controlled one-email Resend test** only, followed by the owner confirming receipt and reviewing activation prerequisites. Source-help/discovery proposal stays queued; no next task started automatically.

## Changed files

New: backend/src/modules/notifications/server/resend.server.ts; inquiry-mail.server.ts; backend/scripts/email/check.ts; backend/tests/resend.test.ts; resend-intake.test.ts; this report.

Updated: backend/src/config/env.server.ts; backend/src/server.ts; backend/src/modules/notifications/server/outbox.service.server.ts; jobs.routes.ts; backend/package.json (check/test scripts only); backend/.env.example; scripts/check-public-secrets.mjs (Resend key detection); PROGRESS.md; DECISIONS.md; docs/architecture/provider-selection.md; environment.md; docs/traceability.md; docs/verification/verify-m00-01.py; local acceptance annotation in public-reading.md. All 13 approved sources and root lockfile preserved. No installs or provider costs.

Suggested commit: `feat: integrate Resend with durable inquiry notifications`. Nothing staged or committed.
