# M00-02 - Source-shaped session adapter proof

## Owner acceptance - 2026-11-10

Owner **Approve and next.** accepts this verified session-only evaluation evidence and authorizes the proposed credential/MFA/recovery documentation review only. No full authentication stack adoption, application model/route activation or acceptance of unproven identity/factor/recovery/security gates. [Current component review](../architecture/decisions/m00-02-credential-mfa-recovery.md). Earlier pending statements below describe delivery-time status; full M00-02 remains open.


2026-11-10 (Asia/Dhaka). **Session-only proof verified; owner acceptance pending. No application authentication stack adopted.**

## Authorization and boundary

Owner **Approve and next.** accepts the [alternative review](../architecture/decisions/m00-02-alternative-authentication.md) and specifically authorizes minimal pinned test dependencies plus the source-shaped Mongoose Store/policy fixture. This is a scoped M00-02 evaluation installation disposition, not full M00-02/M03 acceptance or approval of a custom credential/MFA/recovery implementation. Source 05 section 7.13, 07 M00-02 and 08/10 session/identity evidence remain authoritative.

No application auth route/model/registry, login UI, StaffUser implementation, real staff account, owner env/secret, owner database/index apply, external delivery, provider account or Phase 2/3 changes. Synthetic staff references and assurance timestamps are fixture assertions only; they verify no person's identity or factor. All adapter code is under backend/tests and guarded by owned disposable fixture checks before model creation.

## Versions and install

- Exact backend devDependencies: `express-session` **1.19.0**, `@types/express-session` **1.19.0**. Registry metadata checked with bounded fetch settings; actual Node 24.22.2/npm 11.19.1 and current Express 5.3.0/Mongoose 9.12.0 execute successfully. No Passport, credential, OTP, extra Mongo store or framework installed.
- Command: `./scripts/npm.cmd install --workspace @aradun/backend --save-dev --save-exact express-session@1.19.0 @types/express-session@1.19.0 --ignore-scripts --no-fund --fetch-retries=0 --fetch-timeout=20000`.
- Actual result: **9 packages added, 385 audited, 0 vulnerabilities reported by installation audit**. This is not a security audit/support guarantee. One root package-lock.json only; no unrelated upgrade/global install. Previous Better Auth test dependencies retained for reproducibility, not adopted.
- [Official middleware documentation](https://expressjs.com/en/resources/middleware/session/) supports external Store integration and library regeneration/destruction. Tests use library-generated/signed IDs/cookies. No custom generator, signer, password/OTP/MFA primitive or independent frontend session authority.

## Implemented proof and actual evidence

| Criterion | Actual evidence | Scope/result |
| --- | --- | --- |
| Owned test target | Refuses unconnected/unowned connection before schema/index creation; uses existing marked random-port native MongoDB replica-set fixture | PASS; no owner DB touched |
| Signed cookie and raw-token protection | Library cookie accepted; changed signature denied. SHA-256 digest used for all lookups/storage; no raw ID in serialized source-shaped record | PASS fixture; library handles cookie signing/generation |
| Source schema/indexes | Fixture-only StaffSession fields, applicable inherited timestamps/schemaVersion/revision; unique tokenHash, staffUserId/revokedAt and expiresAt TTL indexes verified (four including _id) | PASS local mapping; no application model registration |
| Idle expiry independent of TTL | Session read works at 29 minutes, fails at 30 while document still exists; poll/touch does not update idle timestamps | PASS local policy |
| Deliberate activity and absolute cap | Explicit fixture activity every 20 minutes advances idle; at 7h59 idle is capped at absolute expiry; 8h denies. Client fixture remember hint does not alter policy | PASS tested API surface; no actual credential remember-me flow exists |
| Rotation/logout | Library regenerate produces a different ID, old cookie denied. Logout marks revoked; stale set from a prior revision denied and touch cannot resurrect record | PASS tested stale-write ordering |
| Two instances and bounded updates | Independent Store instances on same DB share revocation. Concurrent deliberate activity at one clock instant increments revision once; post-revocation activity denied | PASS fixture concurrency; no distributed performance/SLA claim |
| Generic set/touch authority | Generic set never inserts/copies session payload; unknown data/assurance promotion and never-issued ID denied. Touch performs read-only liveness lookup | PASS; only trusted fixture issue operation creates state |
| Failure handling | Injected store read failure produces safe no-store 503, without private diagnostic | PASS tested failure |
| Synthetic assurance/freshness | Primary assertion denied sensitive action; synthetic MFA allowed initially; denied at five-minute boundary | PASS policy check only; **no actual MFA or reauthentication evidence** |

Source hash and session-ID hashing use standard Node APIs; the bridge maps persistence and business policy, rather than inventing security cryptography. The test harness never imports into application code. Cookie metadata is reconstructed transiently, not stored as an arbitrary JSON session blob. No automatic renewal/polling extends permission; each read enforces idle/absolute/revocation. Activity uses live-state/revision fencing, at most one update after a bounded read and a one-minute write cadence; generic set does no business-policy write. Mongo query/update commands use 2-second maxTimeMS and existing connection bounds. Trusted fixture issuance is one validated Mongoose create, not a claimed hard end-to-end wall-clock deadline.

Fixture issuance is explicitly restricted to a random in-memory proof key plus exact synthetic loopback Origin and synthesizes identity/assurance; **it must never be mounted in an application**. HTTP fixture uses HttpOnly/SameSite=Lax host-only cookie; Secure is false solely for loopback HTTP testing. Production HTTPS/cookie/proxy/CSRF/body/rate controls are not verified by this test harness.

The session Store bridge remains proposed for later selected integration. Full current StaffUser status/accessVersion/record authorization, actual identity verification, factor enrollment/replay/recovery, cookie secret rotation and all-factor/sole-Admin recovery are not implemented or proven. A session read at request start cannot certify a later domain mutation after revocation; owning operations must enforce current policy at their protected boundary. TTL is cleanup only. Tests cover stale saves after logout plus concurrent activity updates; they are not an exhaustive interleaving/fault proof or independent security audit.

## Actual checks

From repository root with approved portable launcher:

- `./scripts/npm.cmd test`: **199 tests / 23 files PASS**, final full suite; nine new session proof tests.
- `./scripts/npm.cmd run typecheck`: frontend/backend/test strict types PASS. Initial fixture literal-cookie typing corrected to use the library Cookie constructor.
- `./scripts/npm.cmd run lint`: ESLint/import-boundary checks PASS; 67 application source files / 11 fixtures.
- `./scripts/npm.cmd run format:check`: PASS.
- `./scripts/npm.cmd run build`: catalog integrity and frontend/backend production builds PASS.
- `./scripts/npm.cmd run check:secrets`: PASS, 33 public artifacts; no configured private values or synthetic sentinels.
- `python -X utf8 docs/verification/verify-m00-01.py`: PASS: all 13 source versions/byte lengths/SHA-256 hashes unchanged; 236 requirements, 215 page entries, 87 roadmap tasks and inherited phase qualifications reconcile; management links resolve.

No browser run: no application UI/routes changed. Prior browser results remain historical; no auth UI/accessibility/SEO/responsiveness/performance claim. Grouped human evidence remains due before M13/release. No application feature completion credited from this fixture proof.

## Files

Created:

- `backend/tests/support/session-proof.ts`
- `backend/tests/session-compatibility.test.ts`
- `docs/verification/m00-02-session-compatibility.md`

Modified:

- `backend/package.json` (two pinned devDependencies), root `package-lock.json`
- `PROGRESS.md`, `DECISIONS.md`, `docs/traceability.md`, `docs/verification/verify-m00-01.py`
- `docs/architecture/decisions/m00-02-alternative-authentication.md`, `docs/architecture/provider-selection.md`, `docs/architecture/environment.md`

All approved sources preserved; no backend/src/frontend app code or real env/database changes. Existing untracked files preserved; no Git stage/commit/reset. Suggested logical commit: `test(identity): prove source-shaped session store policy` (not created).

## Reproduction and next proposed task

`./scripts/npm.cmd test -- --project backend backend/tests/session-compatibility.test.ts` starts/cleans owned native MongoDB fixtures and local HTTP listeners. It refuses unowned targets and application MongoDB env configuration; it does not load backend/.env. Test output asserts booleans/statuses rather than exposing raw cookies/IDs/secrets. Ordinary frontend/backend commands unchanged; outstanding owner catalog secret/index activation remains unchanged.

Recommend accepting the **session-only evaluation evidence**, retaining all actual identity/MFA/recovery gates. Next proposed **M00-02 credential and MFA/recovery component contract review**, documentation only: evaluate a maintained Express-owned credential and factor/recovery composition that can use this single source-shaped session transport, preserving no custom password/OTP/MFA primitives and source credential schema ownership. Compare supported library workflows, identify exact provisioning/reset/factor-loss/sole-Admin safeguards, and propose one evidence-backed bounded next implementation/proof plan. Do not claim Passport or OTP primitives alone are a complete solution. Expected edits: one focused decision packet and affected management/provider/environment records; no installs, application code, owner identity/env/database changes or paid service selection.

Next **Approve and next.** accepts this completed session proof only and authorizes that documentation review. It does not select an entire auth stack, permit homemade credential workflows, waive MFA/recovery, close full M00-02 or start M03-01. Source/privacy/business/security gates remain mandatory. Stop for owner review.
