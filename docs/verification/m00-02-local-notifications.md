# M00-02 checkpoint - local notification and job execution contract

## Current disposition - 2026-11-10

Owner **Approve and next.** approves this local contract and scoped local/test M00-02 prerequisite disposition, authorizing M06-02 only. Local implementation verified; owner acceptance pending. Normal email/outbox remains disabled; fixture-only synthetic transport and authenticated manual trigger implemented. No real provider/scheduler/account/spend/credential or owner-database apply. Full M00-02 and integration/fallback/release gates remain open. Proposal wording below is historical provenance, superseded only for this approved local scope.


2026-11-10 (Asia/Dhaka). **Documentation prepared; proposed contract and scoped M06-02 authorization await owner approval.** Full M00-02 acceptance is not met.

## Authorization and purpose

Owner **Approve and next.** accepts the completed verified M06-01 and authorizes the previously proposed documentation-only M00-02 checkpoint. It does not itself select the recommendations in this packet or start M06-02.

Reviewed AGENTS/PROGRESS/DECISIONS; source 07 M00-02 and M06-02; source 05 section 7.11 and intake/outbox sequencing; source 06 Express/MongoDB/job ownership; source 08 execution/environment/notification standards; source 10 provider/worker QA and source 11 environment/job deployment gates. Current env implementation permits disabled/sink labels but supplies no actual mail adapter; backend/.env.example keeps EMAIL_PROVIDER=disabled. Existing native MongoDB, package/runtime and separate-application decisions remain settled, not re-requested.

M06-02 explicitly depends on M00-02, whose production/provider/fallback outcomes remain open. This packet proposes a **limited local/test prerequisite disposition** to allow implementation without selecting a real mail service, opening an account, installing software or paying for anything. It does not waive final provider/scheduler/privacy/security/release evidence.

## Proposed local contract

| Area | Choice proposed for owner approval | Qualification |
| --- | --- | --- |
| Actual email | Keep EMAIL_PROVIDER=disabled | No network mail/SMTP/API calls; no external integration/account/SDK or real recipients |
| Worker default | OUTBOX_MODE=disabled; future local-test mode only with NODE_ENV=test, APP_ENV=development and owned marked disposable replica-set DB | Names/settings are proposed, not implemented. Normal dev/staging/production cannot accidentally activate a fixture transport |
| Test transport | Deterministic test double for accepted/transient/permanent/uncertain outcomes; synthetic .invalid recipients only | Never a real provider, inbox receipt, production failover or sender-authentication proof |
| Runtime/architecture | Existing Express process and MongoDB outbox; manual invocation | No separate worker service/Redis/message-broker/cron service/Docker requirement |
| Handler | Proposed POST /internal/jobs/outbox/run, backend-only bearer authentication before body/queue access | No user filters, recipient addresses, arbitrary templates or browser actor grants; retain general browser Origin/CORS rules |
| Credentials | Required backend-only JOB_TRIGGER_SECRET when active; ephemeral in-memory synthetic tokens for initial tests | No actual application env value or provider credential created now; never public prefix, query/path/log exposure |
| Concurrency | One attempt at a time per invocation, one active invocation per process; atomic lease-token fencing between processes | No unverified global capacity/SLA; tests may invoke worker instances concurrently to prove safe claims/fencing |
| Local bounds | Batch 5, stop-claim budget 10 seconds, adapter timeout 5 seconds, lease 30 seconds, maximum 5 attempts including initial | Stop-claim budget is not a hard cancellation promise; in-flight/unknown outcome must remain safe. Production limits require measured host review |
| Retry | Transient delays after attempts 1-4: 1/5/30/120 seconds; no sixth attempt | Fake clocks in tests; do not sleep through tests or resend uncertain acceptance blindly |
| Retention | No TTL/expiry scheduling until approved retention exists | Never expire pending/processing/retry/uncertain work to make tests pass |

Expected state rules retain exactly source 05 values: pending/processing/retry/sent/failed/suppressed/uncertain, with deliveryState unknown/accepted/delivered/bounced. Disabled mode must leave pending events/attempts unchanged. Test-only accepted results may update **synthetic fixture** events with test-double evidence; they never establish real delivered status. Actual sent means provider acceptance, not inbox delivery. Timeout after possible acceptance is uncertain and requires reconciliation; exactly-once external delivery is not promised.

Only inquiry-acknowledgement and staff-intake-alert baseline events. Do not activate unselected assignment alerts, campaigns, reminders or Phase 2 client notifications because a traceability row includes a future qualification. Deduplication keys contain no email/PII; template payload is bounded reference/type/locale and optional safe summary, not full messages/internal notes. No untrusted recipients/headers/subjects/HTML.

Recipient/source eligibility must be rechecked before delivery using a required fail-closed server policy binding. Tests use explicit synthetic decisions; actual active-staff/identity/privacy-erasure integration remains due before real delivery. Never use a permissive default to compensate for unimplemented M03/M07 services. External calls stay outside DB transactions; claim/completion updates must be atomic and fenced, including stale-worker/expired-lease outcomes.

## Exact approval requested and next-task plan

The next **Approve and next.** following this packet would:

1. Accept this documentation checkpoint and approve the proposed local contract above.
2. Record the explicit scoped scheduling disposition: that contract satisfies **only local/test M06-02's M00-02 prerequisite**, while full M00-02, real-provider/live-scheduler/fallback and release acceptance remain open. Source files and exact dependency wording remain unchanged; DECISIONS/PROGRESS record the owner's scoped disposition like the prior M01-02 local-contract amendment.
3. Authorize **M06-02 only**: source OutboxEvent model/indexes, durable enqueue/claim/lease/fencing/retry/uncertain-state services and authenticated bounded trigger; deterministic fixture transport, no real outgoing mail. Update only necessary env guards/examples, implemented-model registry, tests and records; no real owner token/env file, installation, subscription or owner-database apply. Test secrets stay ephemeral.

Expected files: backend/src/modules/notifications/models/outbox-event.model.ts, notifications/server, notifications/jobs.routes.ts, required backend config/app/registry integration, existing native fixture tests and task verification/progress/traceability. No staff authentication flow, public inquiry submission or separate process framework.

M06-02 local verification must prove concurrent claim/expired lease/fencing, immutable dedupe identity, bounded retries, temporary/permanent/unknown outcomes, disabled no-op without false delivery, unsafe-recipient refusal and authenticated runtime requests (missing/wrong credentials denied before work; valid fixture trigger bounded). Do not add/expose a public unauthenticated job route or claim real provider/scheduler tests. No M06-03 automatic continuation; its M02-04/M03-02 and other exact gates remain.

## Still open after this checkpoint

- Actual mail provider, sender/domain/mailbox activation, real recipient ownership, deliverability/idempotency/reconciliation evidence and essential-dependency fallback.
- Actual deployed scheduler/host runtime/network/credential ownership/rotation and measured aggregate limits/monitoring.
- Production identity/MFA/recovery, privacy/retention, hosting/staging/database/recovery and release decisions at their appropriate gates. Existing separate decisions unchanged.
- Actual actor/source deletion/eligibility binding and end-to-end intake/notification/privacy evidence before public use. An isolated test double does not close these gates.

These are not purchases needed for this local checkpoint. No provider/cost research or current vendor capability claims were made. Full M00-02 remains planning prepared/owner decisions pending, not owner-accepted. M06-02 remains not started until the proposed explicit approval above.

## Files changed and verification

Created this packet; updated canonical docs/architecture/provider-selection.md and environment.md with dated proposed contracts, DECISIONS.md/PROGRESS.md with actual review authorization and pending approval, docs/verification/m00-02.md with checkpoint provenance, docs/verification/m06-01.md with actual acceptance, docs/traceability.md with planning-only evidence, and verify-m00-01.py with the exact accepted M06-01 tracker expectation.

Documentation only. No application code, dependency/lockfile, environment/credential, process, database, provider/account or approved source document modified. Existing unrelated/untracked work preserved; no staging/commit/reset. No application tests run or claimed necessary for documentation changes; M06-01's prior 162 tests remain its actual evidence.

Verification: source/register/link consistency and diff checks recorded below after execution. These checks establish documentation consistency, not worker/provider runtime behavior. Checkpoint awaits owner approval; stop here.

Executed: `python -X utf8 docs/verification/verify-m00-01.py` PASS (all 13 hashes unchanged, 236 requirements/215 pages/87 task statuses and management links reconcile); `git diff --check` PASS. No unexecuted application test or dependency fallback is claimed.
