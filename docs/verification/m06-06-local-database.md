# M06-06 local database foundation

Subsequent owner-approved checkpoint: [private owner prompt and local auth configuration prepared](m06-06-owner-prompt.md). Local account creation remains owner-run; no agent-created account or intake/email activation.

2026-11-12. Owner approves the previously proposed additive local collection/index setup and first-owner procedure preparation. Implementation/actual database verification complete; owner acceptance pending. No account creation or intake/email activation authorized in this checkpoint.

## Actual execution

- Verified native loopback rs0, exact configured aradun_development target and workspace-owned data path. All target collections were absent before apply; no existing application records to migrate or replace.
- Captured the existing reviewed index-plan fingerprint. Cleanly stopped only the workspace mongod, copied its full existing data directory into an ignored cold backup and made a separate restore-check copy. Restarted original rs0 against its original files.
- Started the restored copy as an isolated loopback standalone on a temporary separate port. Verified that the target database's empty namespace baseline matched the original, then cleanly stopped the recovery process. The untouched cold snapshot remains private. This tests recovery readability for this empty development baseline only; it does not establish production data recovery, transactions on the standalone copy, RPO/RTO or future populated-data restoration.
- Rechecked the original fingerprint, then executed the existing backend/scripts/db/indexes.ts `--apply` CLI with an explicit separate local operational URI and genuine backup/recovery evidence. The reviewed applyIndexPlan performs unique preflight, additive collection/index creation and final verification; no drop/sync/reset or schema change.
- **12 collections and 30 application indexes PASS**, no missing/drift/extra entries. MongoDB's default `_id` indexes are additional. Independent existing readiness helper recheck also PASS.
- Counts afterward: **0 staff accounts, 0 inquiries**. No application account/business record created, no bootstrap/audit impersonation, no fixture data seeded into owner database, no email/queue run. MongoDB remains running.

Private evidence is in `.tools/backups/m06-indexes-1794480409030/`: cold-snapshot, separate restore-check files/log, before.json, approval.json and apply-output.json. Operational helper `.tools/m06-db-prepare.ts` contains no credentials. Backup/helper paths are ignored by Git; do not publish or commit their database contents. No cleanup/delete performed.

## Owner setup preparation

[Concrete first-owner procedure](../runbooks/first-owner-local.md) reuses owner-provided Ahmad Musa Abdullah / ahmadmusa@aradun.com, the existing maintained auth/lifecycle CLI and mandatory MFA. Missing auth settings and private owner-password handoff are explicit. No account was authorized or created; no operational arming file was written. The previous readiness report's missing-collection observations are historical after this checkpoint.

## Verification and files

Actual cold-backup recovery check, reviewed CLI apply, independent read-only index/staff check and counts PASS. Source/register consistency PASS with all 13 source hashes unchanged; git ignore checks PASS for the helper/backup evidence; public-secret scan PASS across 80 artifacts with private environment values loaded. No application code/dependency changes, so no application build/browser suite repeat; existing tests are not claimed rerun.

New versioned documentation: this report and docs/runbooks/first-owner-local.md. Updated PROGRESS.md, DECISIONS.md and cross-references in m06-06-local-readiness.md and resend-integration.md. Ignored operational artifacts above; backend/.env contents unchanged by this checkpoint. All approved source documents preserved.

Next proposed **M06-06 secure local owner setup preparation**: validate/prepare missing local auth configuration and a secure owner-run input wrapper that delegates to existing bootstrap; owner supplies the password privately and completes MFA. No autonomous account creation, public signup, new staff-management UI, email, form activation or hosted change. Requires next explicit approval.
