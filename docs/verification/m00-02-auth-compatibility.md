# M00-02 - Authentication compatibility proof

## Owner review recorded - 2026-11-10

Owner **Approve and next.** accepts this completed report as evidence of failed candidate fit and authorizes the proposed alternative documentation review only. This does not accept the failed source/security gates or select Better Auth. [Alternative review](../architecture/decisions/m00-02-alternative-authentication.md); full M00-02/M03 remain open/unstarted as recorded. Earlier pending-review wording below is historical.


2026-11-10 (Asia/Dhaka). **Proof complete; candidate is NOT suitable as-is. Owner review pending. No authentication library adopted.**

## Authorization and boundaries

Owner **Approve and next.** authorized the [candidate evaluation](../architecture/decisions/m00-02-express-authentication.md), including specifically bounded test-only installation. This is a scoped M00-02 evaluation disposition, not full M00-02 acceptance, a schema/security exception, TOTP adoption or M03-01 authorization. M00-01 and prerequisite local foundation checkpoints are accepted with their recorded limits. Sources 05 sections 7.9/7.13, 07 M00-02/M03-01 and 08/10 identity/session/security evidence remain authoritative.

Only owned marked disposable native MongoDB replica-set fixtures and synthetic `.invalid` users/passwords, ephemeral secrets and in-memory reset capture. No real staff account, SMTP/API mail, public application auth route, production provider, owner `.env`, index apply or source-document change. Existing local catalog secret/index activation remains outstanding.

## Selected versions for evaluation only

- `better-auth` **1.7.19** and `@better-auth/mongo-adapter` **1.7.19**, exact backend devDependencies, MIT per installed metadata. Official [Mongo adapter documentation](https://better-auth.com/docs/adapters/mongo) and npm registry metadata were checked; docs version and registry version matched. No beta chosen.
- npm 11.19.1 / Node 24.22.2 via existing launcher; installed MongoDB driver **7.8.0** deduplicated with Mongoose 9.12.0. Registry peers accept MongoDB 6/7 and current Vitest 5. No separate database or ORM introduced into application architecture.
- Install command: `./scripts/npm.cmd install --workspace @aradun/backend --save-dev --save-exact better-auth@1.7.19 @better-auth/mongo-adapter@1.7.19 --ignore-scripts --no-fund --fetch-retries=0 --fetch-timeout=20000`.
- Actual install: 19 packages added, 376 audited, **0 vulnerabilities reported by installation audit**. No guarantee of future security support or complete security audit. Both selected dependencies remain test-only for reproducibility; no backend/src/frontend imports added. Existing root manifest unmodified; one root lockfile updated, no nested lockfile.
- Initial sandbox registry query stalled and was stopped; escalated read-only metadata/install commands completed. No unrelated install command or force/audit-fix upgrade.

## Evidence-backed compatibility matrix

| Gate | Actual observed evidence | Result |
| --- | --- | --- |
| Node/TypeScript/current Mongo client | Reused owned Mongoose connection's native Db/client, transaction-capable replica set; strict types/build and actual auth operations pass | PASS for isolated candidate harness, not production concurrency/operations |
| Express 5 handler | Isolated random-port Express server mounts library handler; session read and signup/origin denials exercised | PASS fixture integration only; application route absent |
| Public signup / credentials / logout | Public candidate instance disables signup; separate fixture-only provisioning instance creates synthetic users. Wrong password denied; login resolves library ID; logout invalidates old cookie | PASS candidate behavior; not StaffUser authorization/provisioning evidence |
| Session token at rest | Stored session.token equals issued login token; no tokenHash field in observed session record | **FAIL source StaffSession contract as-is**. Do not silently treat library schema as an exception, duplicate session masters or implement custom crypto to hide this |
| Idle policy | With createdAt/updatedAt aged 31 minutes and absolute expiry still future, session read remains accepted | **FAIL as-configured deliberate-idle requirement**; no activity policy extension implemented/proven |
| Absolute lifetime | Normal login with expiresIn 28800 / disableSessionRefresh true yields 8-hour expiry; forced past expiry denies. Public rememberMe=false option yields **24 hours**, despite configured 8-hour maximum | **FAIL overall maximum**. A tested enforceable cap/route policy would be needed before adoption; no undocumented application patch applied |
| Fresh authentication | freshAge 300 configured; not a proof of every sensitive action's active-password/MFA reauthentication semantics | UNPROVEN; do not claim approved 5-minute policy passed |
| Immediate session revocation | Cookie cache disabled; logout and configured password reset revoke old cookies in fixture | PASS tested paths only; real StaffUser accessVersion/role/deactivation binding unimplemented |
| Password hashing | Credential rows contain library-produced hashes, not supplied SAMPLE passwords | PASS non-plaintext characterization only; no independent parameter/cryptographic audit |
| Password reset | Token captured privately in memory; reset succeeds once, replay denied, old session revoked, new password logs in | PASS test hook only; real mail, identity verification and all-factor recovery not supplied |
| TOTP and backup code | Library encrypts stored seed; maintained library decrypt/generate helpers used only in fixture. Enrollment verified; subsequent login has no active session until factor; invalid factor denied; backup code works once and replay denied | PASS tested library paths only. No production TOTP choice, passkey/sole-Admin/all-factor recovery or trusted-device-bypass approval |
| Index readiness | After candidate operations, observed session collection has only MongoDB _id index, no declared application session indexes | GAP: explicit source/library index reconciliation and reviewed application needed; no owner database change |
| Origin/CSRF | Library test-environment relaxation initially admitted foreign-origin login; explicit disableOriginCheck=false and disableCSRFCheck=false then correctly denied it | Harness corrected; test-env defaults are not production evidence. Exact CORS/cookie/proxy/body/limiter integration still belongs to future selected adapter |

Green characterization tests intentionally assert observed incompatibilities as boolean facts, without printing secrets. **190 passing tests do not mean Better Auth meets ARADUN's authentication requirements.** The proof's successful deliverable is this incompatibility report. No custom session-storage transformation, credential primitive, MFA bypass, new StaffUser/session schema or requirement amendment was implemented.

The scoped no-raw-token and one-master requirement remains an adoption gate; any proposed library-owned schema interpretation must be explicitly reviewed against source 05, not inferred by this test. Idle enforcement might be possible through supported extension points, but this experiment neither implements nor certifies that possibility. Likewise, constraining rememberMe could help only after adversarial endpoint verification; do not approve from configuration naming alone.

## Actual commands and checks

- Registry metadata: `npm view better-auth@1.7.19 version engines peerDependencies dependencies --json`, corresponding adapter query, with bounded fetch settings; npm ls MongoDB. No engine error during strict-engine installation.
- `./scripts/npm.cmd test`: final full run **190 tests / 22 files PASS**, including eight new compatibility tests.
- `./scripts/npm.cmd run typecheck`: frontend/backend/test strict types PASS.
- `./scripts/npm.cmd run lint`: ESLint/boundaries PASS, 67 application source files / 11 boundary fixtures.
- `./scripts/npm.cmd run format:check`: PASS.
- `./scripts/npm.cmd run build`: PASS frontend/backend/catalog builds.
- `./scripts/npm.cmd run check:secrets`: PASS; 33 public artifacts, no configured private values or synthetic sentinels.
- `python -X utf8 docs/verification/verify-m00-01.py`: PASS: 13 source versions/byte lengths/SHA-256 hashes unchanged; 236 requirements, 215 pages, 87 tasks and qualified future scope reconcile; management links resolve.

Early harness expectations were corrected from observed evidence: session index assumption disproved; native ObjectId reference query fixed; rememberMe public option corrected; test-environment origin/CSRF relaxation explicitly disabled. Final reruns, not initial failures, substantiate the tested outcomes. Assertions on secret material use booleans only; no credential snapshots or private values in logs/artifacts.

No browser run this checkpoint: no application UI/routes changed. Prior 48 browser results remain historical; grouped human evidence remains due before M13/release. No auth UX/accessibility or performance/SLA pass claimed. Full M00-02 external fallback/security/operational evidence remains open.

## Files

Created:

- `backend/tests/support/auth-proof.ts`
- `backend/tests/auth-compatibility.test.ts`
- `docs/verification/m00-02-auth-compatibility.md`

Modified:

- `backend/package.json` (two pinned devDependencies), root `package-lock.json`
- `PROGRESS.md`, `DECISIONS.md`, `docs/traceability.md`, `docs/verification/verify-m00-01.py`
- `docs/architecture/decisions/m00-02-express-authentication.md`, `docs/architecture/provider-selection.md`, `docs/architecture/environment.md`

No application source, approved source document, real env/secret, lockfile topology or owner DB modifications. Existing untracked files preserved; no stage/commit/reset. Suggested logical commit: `test(identity): characterize auth candidate compatibility gates` (not created).

## Review and next proposed checkpoint

Reproduce from root with approved Node: `./scripts/npm.cmd test -- --project backend backend/tests/auth-compatibility.test.ts`. It starts/cleans its owned native replica set and never reads the owner's backend/.env. Refuses application MongoDB env configuration and unowned targets. Do not enable this test provisioning instance in an application.

**Recommendation: do not adopt this candidate configuration or start M03-01.** Retain approved session/token/MFA/recovery contracts. Next proposed **M00-02 alternative authentication/session architecture review**, documentation only: compare a maintained Express-owned component stack or supported candidate configuration that can demonstrate hashed-at-rest opaque session storage, deliberate idle/absolute/freshness and library-supported MFA/recovery without custom cryptographic primitives or a second authority. Use current primary evidence, name exact compatibility gaps and a minimal subsequent proof plan. Expected edits: one decision packet plus provider/environment/progress/verification records; no additional installs, application auth code, schema exception, owner environment or database activation. Do not reopen npm/Mongo/hosting/spending choices.

Next **Approve and next.** accepts the completed compatibility report as evidence of a failed candidate fit and authorizes that alternative review only; it does not accept failed security gates or select Better Auth. A real architecture/schema/security exception requires its own explicit owner decision; none requested implicitly here. Stop for review.

Final fixture rerun after the TypeScript node:events import correction: eight tests PASS; strict types, lint/boundaries and format checks PASS. Only the root package-lock.json exists outside ignored tooling/dependency trees. Candidate incompatibilities remain explicitly unresolved; no full M00-02/M03 acceptance.
