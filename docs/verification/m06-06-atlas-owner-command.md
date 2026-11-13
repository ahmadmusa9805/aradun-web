# M06-06 Atlas-compatible private owner command

2026-11-13. **Implemented and verified; owner acceptance/private execution pending.** Owner `Approve and next.` accepts verified Atlas initialization and authorizes the named command-preparation checkpoint only. No real owner created, password requested/generated, email sent or intake enabled by the agent.

## Delivered

Added root `npm run staff:setup:atlas`, reusing scripts/setup-owner.ps1 with explicit Atlas mode and a dedicated bounded stdin CLI. Existing local command remains unchanged in target/delegation. Atlas mode uses backend/.env only on deliberate invocation; hidden password/confirmation and literal CREATE OWNER cancellation apply. Process-only arming, fixed target/identity and safe receipt fields; no shared persistent arming or credential copy.

New exact URI/member guards admit only the approved development cluster and database; normal lifecycle stays loopback-only. A new explicitly armed Atlas-bootstrap-only mode reuses maintained hashing, first-owner fence, transaction and immutable audit logic, while denying every other lifecycle operation. Domain and CLI enforce the approved owner identity; current roles/MFA/primary-only inquiry denials unchanged. Staging/production and unrelated cluster/database refused. No dependencies, lockfile, runtime .env or source changes.

## Actual verification

- **22/22 checks PASS / four backend files**: two exact URI/member target guard tests; one real disposable DB scope test that substitutes transport identity only and proves all five non-bootstrap operations and wrong owner identity denied without identity/audit records; ten fake-process PowerShell prompt scenarios across local/Atlas (success, short password, mismatch, cancel, child refusal; no actual DB bootstrap); existing lifecycle/bootstrap race/audit/security regression cases. Test output excludes private stdin and malicious extra child stdout. No real Atlas writes occurred.
- Actual `npm run staff:setup:atlas -- -Check` PASS against Atlas: `indexesReady=true`, `ownerAlreadyPresent=false`, `bootstrapReady=true`, `accountCreated=false`. Only counts/index/control reads; no password prompt and no record/owner creation. This proves the actual URI/member guards accept the initialized target, not actual provisioning or owner custody.
- Root workspace/test typecheck (includes backend/scripts), backend build, lint/import boundaries **149 files / 11 fixtures**, focused formatting and public-secret scan **81 artifacts PASS**. Independent all-13 source hashes unchanged. No frontend changes, so unrelated public browser/build suites not repeated.

Commands used the approved Node/npm wrapper: `npm exec -- vitest run --project backend backend/tests/atlas-owner-target.test.ts backend/tests/atlas-owner-scope.test.ts backend/tests/owner-prompt.test.ts backend/tests/lifecycle.test.ts`; `npm run staff:setup:atlas -- -Check`; `npm run typecheck`; `npm run lint`; `npm run build --workspace @aradun/backend`; focused `npm exec -- prettier --write/--check ...`; `npm run check:secrets`; source hash comparison.

## Files/review

Created backend/scripts/staff/owner-atlas.ts; backend/src/modules/identity/server/atlas-owner-target.server.ts; backend/tests/atlas-owner-target.test.ts and atlas-owner-scope.test.ts; docs/runbooks/first-owner-atlas.md and this report. Updated lifecycle.service.server.ts, scripts/setup-owner.ps1, package.json (script only), tests/fixtures/owner-prompt.ps1, backend/tests/owner-prompt.test.ts; progress/decisions/traceability and preceding initialization acceptance status. Existing operational CLI, .env, source documents and root lockfile preserved. Suggested commit: `feat: prepare target-bound private Atlas owner bootstrap` (not committed; unrelated untracked work preserved).

Owner runs [the private command](../runbooks/first-owner-atlas.md), enters the literal confirmation then password privately, and reports only completion/safe receipt. Agent must not execute bootstrap with invented owner credentials. Future approval to configure a recipient or email does not imply broader staff-management authority.

Next proposed **M06-06/M06-07 controlled client-inquiry activation/readiness checkpoint**, after owner creation is confirmed: verify actual recipient/index/privacy/security prerequisites, prepare reviewed environment settings and controlled synthetic Contact/Quote/Consultation verification with nonproduction delivery to the reviewed owner inbox. Real sends/queue execution must be explicitly included in approval; unresolved gates block activation rather than weakening controls. No actual activation/sends or next task started here. Hosted/publication/production security and full M06 acceptance remain separate.
