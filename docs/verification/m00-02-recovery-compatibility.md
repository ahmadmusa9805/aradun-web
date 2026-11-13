# M00-02 - Isolated recovery orchestration proof

## Owner acceptance and local adoption - 2026-11-11

Owner **Approve and next.** accepts the verified local proof and approves the proposed local composition/A5-01/M00-02 scoped prerequisite disposition for M03-01 development only. Full M00-02, actual custody/all-material-loss, provider/delivery/privacy/production and release gates remain open. No real account/env/index activation or later-task authorization. Earlier pending statements are historical; [M03-01 evidence](m03-01.md) records implementation separately.


2026-11-11 (Asia/Dhaka). **Proof implemented and verified; owner acceptance pending. No application authentication or production recovery activation.**

## Authorization and subject amendment

After the [recovery contract](../architecture/decisions/m00-02-recovery-adoption.md) was presented, the owner asked what it meant, received an explanation of local Express-managed recovery using maintained libraries without removing MFA/bypasses/spend/launch, then replied **Approve and next.** This informed approval resolves the named amendment and scoped proof. The earlier bare-command restriction preceded the explanation; approval is determined by its clear subject, not a magic phrase.

DECISIONS records the narrow amendment: permit local recovery orchestration/auth-security fixture records instead of requiring one provider to supply a complete workflow/schema. Retain source StaffUser/StaffSession, maintained security primitives, mandatory MFA, session rules and actual custody/recovery/release gates. Candidate proof bounds approved: 32 random bytes, 15-minute reset, ten single-use 90-day codes. Source files remain immutable. This is not full M00-02/M03 acceptance or production recovery-policy activation.

Sources 05 sections 7.9/7.13, 07 M00-02/M03, 08 transaction/security execution rules and 10 QA-AUTH-01..04 apply with that recorded subject amendment. No new dependencies/accounts/provider/spend, owner env/database/index apply or application route/model added.

## Implemented fixture behavior

- Reuses actual Passport-Local Mongoose password APIs, maintained Node random/hash APIs, Iron sealing, otplib verification and the validated single-session fixture. No custom cryptographic algorithms. All code remains under backend/tests and checks owned marked disposable native replica-set identity before setup.
- POST-only local reset harness with exact synthetic Origin, bounded body from existing credential harness, generic known/unknown acknowledgement and private in-memory challenge capture. No email, URL bearer code, raw secret in DB/logs or general application recovery endpoint.
- Challenges bind subject/purpose/hash/expiry/consumption; raw 32-byte values exist only in private test memory. Recovery fixture schemas/indexes are explicit owned-test setup, no production-compatible provider schema claim or source model registration.
- Password hashing through library setPassword occurs before the replayable transaction. The DB-only transaction atomically consumes the challenge, CAS-updates prepared library credential fields, increments fixture accessVersion, revokes subject sessions, invalidates remaining reset challenges and records a restricted fixture audit. No external call/parallel session operation in callback.
- Reset never grants a login session or removes/enables MFA. User must subsequently authenticate with password and the required factor. Wrong purpose/subject/expired/consumed evidence fails safely. Concurrent reset has one winner; replay after a lost response cannot apply another credential/version mutation.
- Injected post-write failure rolls back challenge, credential/version, revocation and audit together. Successful retry then works. Fixture accessVersion ledger proves atomic state, not real StaffUser lifecycle enforcement.
- Pack issuance requires matching subject and fresh MFA/password-session timestamps. Ten 32-byte codes are returned privately once; only hashes stored. New packVersion replaces the old pack. Password plus same-subject unused code is needed to start factor recovery; code consumption is transactional and races have one winner.
- Successful code use revokes old sessions and disables the old factor, creating only a 5-minute restricted replacement challenge. It creates no business session. A sealed pending replacement seed must be independently verified with the OTP library; subject/purpose/expiry/one-use checks and a five-attempt fixture bound apply.
- Replacement completion consumes the grant, updates verified factor/time step, increments fixture access version, revokes remaining sessions, expires the old pack and audits atomically. It still does not issue a business session: normal password plus a subsequent valid factor login is required. Unused old-pack codes, grant/code replays and wrong identities cannot bypass MFA.

The recovery challenge/pack/access/audit collections are **test security records**, not adopted application models. Existing credential helper now exposes its controlled clock to the recovery fixture; no application source change. The proof covers TOTP loss with retained password/recovery material, not recovery after losing every secret and custody capability.

## Actual test evidence

| Scenario | Observed result |
| --- | --- |
| Unowned DB and membership-safe acknowledgement | Unowned target refused before setup; known/unknown POST request status/text equal; stored challenge contains no raw captured value |
| Subject/purpose/15-minute expiry | Wrong purpose/subject denied; expired challenge denied while retained record remains |
| Password reset + MFA/session invariants | Old password/session denied; fixture accessVersion increments; existing factor remains enabled; new password creates primary only, protected fixture denies it |
| Rollback/failure recovery | Injected failure after transaction writes rolls everything back; old credential/session remain valid; subsequent legitimate retry succeeds |
| Concurrency/lost-response retry | Two reset callers yield exactly one success, one version increment and one reset audit; replay rejected |
| Packs and rotation | Primary-only issuance denied; fresh MFA allows ten hashed-only codes; old version invalidated |
| Recovery-code race | Exactly one restricted grant; old session denied; factor disabled; no active business session created; replay denied |
| Verified replacement and grant replay | Wrong subject/malformed factor denied; valid factor completes once; remaining old codes invalidated; new normal MFA login works |
| Expired pack/grant | Logical expiry denies while stored pack remains, independent of cleanup |
| Wrong password/subject | Cannot consume another subject's pack or revoke their current session |
| Bounded replacement attempts / URL safety | Five wrong codes prevent the next valid code; GET reset-code route absent; no business session granted |

These 11 tests are actual owned MongoDB transactions and local HTTP/library integration. Assertions use statuses/counts/booleans, not secret snapshots. Generic response-text equality is not a timing-equivalence guarantee. No real recipient, human identity/custody verification, security audit, attack-surface exhaustiveness or deployment availability claim.

## Commands and results

- `./scripts/npm.cmd test -- --project backend backend/tests/recovery-compatibility.test.ts`: first targeted run **9 PASS**; two additional denial tests subsequently included in final full run.
- `./scripts/npm.cmd test`: final **218 tests / 25 files PASS**.
- `./scripts/npm.cmd run typecheck`: frontend/backend/test strict types PASS.
- `./scripts/npm.cmd run lint`: ESLint/boundaries PASS; 67 app source files / 11 boundary fixtures.
- `./scripts/npm.cmd run format:check`: PASS.
- `./scripts/npm.cmd run build`: catalog integrity and frontend/backend production builds PASS.
- `./scripts/npm.cmd run check:secrets`: PASS; 33 public artifacts, no configured private values/synthetic sentinels.
- Root-lockfile check: one root package-lock.json outside ignored tool/dependency trees; no manifests/lockfile changed this task.
- `python -X utf8 docs/verification/verify-m00-01.py`: PASS. All 13 source versions/byte lengths/SHA-256 hashes unchanged; 236 requirements, 215 page entries, 87 tasks, inherited decisions and qualified phases reconcile; management links resolve.

No browser rerun: application UI/routes unchanged. Prior browser/human evidence remains historical/deferred; actual auth UX, keyboard/screen-reader and deployment cookie/CSRF/origin/rate/key policy evidence belongs to authorized application tasks and pre-release gates. npm emitted an update notice; approved npm/runtime families were preserved, no global update performed.

## Files

Created: `backend/tests/support/recovery-proof.ts`, `backend/tests/recovery-compatibility.test.ts`, this report.

Modified: `backend/tests/support/credential-mfa-proof.ts` (expose controlled clock); PROGRESS.md; DECISIONS.md; docs/traceability.md; docs/verification/verify-m00-01.py; docs/architecture/decisions/m00-02-recovery-adoption.md; docs/architecture/provider-selection.md; docs/architecture/environment.md.

No application sources, approved sources, dependencies/lockfile, real env/account/provider/owner data changed. Existing untracked files preserved; no Git stage/commit/reset. Suggested logical commit: `test(identity): prove transactional local recovery orchestration` (not created).

Reproduce from root with approved Node: `./scripts/npm.cmd test -- --project backend backend/tests/recovery-compatibility.test.ts`. Owned native fixtures/listeners are created and cleaned; application MongoDB env configuration and unowned targets are refused. No backend/.env loaded or actual email sent.

## Remaining adoption and operational limits

- No application StaffUser/record authorization, actual accessVersion binding, provisioning/bootstrap, last-Admin safeguard or lifecycle UI implemented. A fixture access ledger does not satisfy M03-02/04.
- No complete loss-of-all-authenticators-and-recovery-material solution proven. Actual owner identity, independent custody arrangement, verified destinations and rehearsed sole-Admin runbook remain due before activation. No backdoor/direct DB reset proposed.
- No real auth mail/sender/durable secret-delivery path selected or tested. Private capture does not prove delivery. Existing inquiry outbox payload/kinds unchanged.
- No production recovery privacy/retention, MFA device availability, proxy/CSRF/cookie/secret/key rotation, auth rate thresholds or end-to-end performance claim. Operational limits and full M00-02/staging/release acceptance remain open.
- The approved amendment/evaluation parameters do not imply production spending, provider choice, schema activation, MFA waiver or general security gate acceptance.

## Next proposed roadmap task: M03-01 local implementation only

A next **Approve and next.** would accept this verified recovery proof, **adopt the tested local component composition for M03-01 development only**, and record a scoped local A5-01/M00-02 prerequisite disposition for that task. Full M00-02 remains open; no production activation or recovery-readiness waiver. Exact other prerequisites M00-03, M02-03, M02-05 and M02-04 have accepted planning/local foundation evidence with recorded limits. Public-form/production slices of M02-04 remain retained gates, not claimed finished.

Proposed scope: source StaffUser and conditional StaffSession models/indexes; Express local credential identity adapter using verified immutable subject mapping; one library-owned cookie/session transport with hashed-only source-shaped persistence and approved expiry/revocation checks; minimal custom `/staff/login` (STA-001), login/logout and safe local-return handling. Fixed server-owned local provider namespace; email can locate credential input but never grant/link StaffUser access. Promote only currently needed pinned credential/session packages to runtime dependencies; preserve npm Workspaces/root lockfile. Use synthetic owned fixtures for verification; no real staff creation or owner env/index apply.

Expected files: backend/src/modules/identity/models/server/integrations, minimal identity route/config/app wiring and implemented-model registry; frontend auth/staff login and safe API DTOs; relevant manifests/root lockfile if runtime dependency promotion needed; tests, docs/verification/m03-01.md and management/traceability records. Follow nested frontend instructions before changes.

Acceptance evidence: actual local credential/session integration, no access by email/forged subject alone, inactive/unprovisioned/stale identities denied, source-shaped expiry/revocation, one session master, logout and safe-local-return denial tests, relevant UI/HTTP/a11y regressions and source/secret checks. Password success cannot grant MFA-required business access. MFA/recovery UI and flows stay M03-03, operation/record authorization M03-02, actual bootstrap/lifecycle/custody M03-04, adversarial/staging evidence M03-05. Do not scaffold those future tasks or dashboards in M03-01.

Only propose this limited local implementation if the owner adopts the stated composition/disposition; unresolved real identities/custody/mail/production facts continue to gate affected activation and release. Do not mark full M00-02 accepted or start M03-01 automatically. Stop for owner review.
