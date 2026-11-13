# M00-02 - Credential/TOTP compatibility proof

## Owner acceptance - 2026-11-11

Owner **Approve and next.** accepts the verified local credential/TOTP proof with all recovery/application/adoption limits retained, and authorizes the proposed recovery/adoption documentation review only. No recovery implementation, production factor choice, security/schema exception or M03 authorization. [Current decision packet](../architecture/decisions/m00-02-recovery-adoption.md). Earlier pending statements describe delivery-time status.


Completed 2026-11-11 (Asia/Dhaka), continuing the authorized 2026-11-10 evaluation. **Local proof verified; owner acceptance pending. Recovery and full authentication adoption remain open.**

## Authorization and scope

Owner **Approve and next.** accepted the [component review](../architecture/decisions/m00-02-credential-mfa-recovery.md) and authorized its isolated credential/TOTP proof and minimal test dependencies. The subsequent “now limit is okay” resumes that same work; it does not authorize another task. Sources 05 sections 7.9/7.13, 07 M00-02, 08 identity/security rules and 10 QA-AUTH-01..04 remain authoritative. Full M00-02 and M03-01 are not accepted/started.

Only owned marked disposable native MongoDB replica sets, synthetic .invalid identities, ephemeral passwords/keys and isolated local HTTP listeners. No application authentication route/model, real staff account, provider/email delivery, owner env/database/index apply, source amendment or Phase 2/3 work.

## Dependencies and implemented fixture

Pinned backend devDependencies: passport 0.7.0, passport-local-mongoose 9.2.1, otplib 13.6.0, @hapi/iron 7.0.1 and @types/passport 1.0.17. Stable registry metadata and current official APIs were inspected during authorized installation; actual Node 24.22.2, Express 5.3.0 and Mongoose 9.12.0 compatibility verified by execution/types. No production dependency adoption.

Actual install command: `./scripts/npm.cmd install --workspace @aradun/backend --save-dev --save-exact passport@0.7.0 passport-local-mongoose@9.2.1 otplib@13.6.0 @hapi/iron@7.0.1 @types/passport@1.0.17 --ignore-scripts --no-fund --fetch-retries=0 --fetch-timeout=20000`. Result: **21 packages added, 406 audited, 0 vulnerabilities reported by install audit**. No support/security-audit guarantee; one root lockfile only.

- Actual plugin register/authenticate/changePassword APIs, with PBKDF2-HMAC-SHA256 600,000 iterations, 32-byte salt and 32-byte derived key. No handmade hashing or bcrypt/Argon2 substitution.
- Passport strategy runs with session:false; the existing source-shaped transport remains the single fixture session authority. Plugin owns credential field creation, including its unique login-field index.
- otplib generates and verifies TOTP. Sealed seed envelopes use Iron seal/unseal with a separate ephemeral key. Factor state lives only in a fixture collection, not a proposed production schema or StaffUser.
- Five-attempt fixture bound and atomic matched-time-step consumption. Initial replay state omits afterTimeStep until a valid step exists; negative values are rejected by the actual library. Tolerance is explicitly zero in this proof, not a selected production usability policy.
- Actual primary password result maps to the synthetic credential subject; protected fixture denies primary-only sessions. Enrollment verification activates the pending factor; a later valid factor rotates the session and promotes only that identity, retaining original authentication/absolute-expiry bounds.
- The existing session helper gained an optional trusted fixture assertion (subject/authentication/absolute expiry), with time-bound validation. Existing session tests continue to pass. This is not a client assertion API or application StaffUser implementation.

## Verification matrix

| Requirement / behavior | Actual result | Limit |
| --- | --- | --- |
| Owned target and private provisioning | Unowned connection and non-SAMPLE/non-.invalid provisioning refused; no public signup route | Fixture only; real bootstrap identity absent |
| Credential persistence | Plugin hash/salt exist, supplied password absent, derived hash has expected length; unique login index verified | No real credential/schema migration |
| Password verification/errors | Correct password works; wrong/unknown identities return identical generic status/text | Timing equivalence is **not** claimed; production abuse/timing policy remains open |
| Cost measurement | Wrong/unknown HTTP probe measured by test and completes within the 10-second fixture ceiling | Not a benchmark/SLA or production concurrency limit; work factor not lowered |
| Enrollment and factor binding | Pending factor cannot grant MFA; enrollment verified by actual library; wrong identity/forged subject/assurance fields denied | No actual user enrollment UI or StaffUser authorization |
| Rotation and expiry | Old primary cookie denied after verified-factor rotation; subject preserved and absolute expiry unchanged; protected fixture accepts MFA only | Integration fixture, not full sensitive-operation policy |
| OTP validity/replay/concurrency | Malformed, expired and replayed factors denied; two concurrent uses of one step yield exactly one acceptance | Fixture CAS is application orchestration, not a library-provided recovery service |
| Seed protection | Stored envelope contains no plaintext seed; wrong key/tampering denied | Production key custody/rotation/backup obligations unresolved |
| Attempts/freshness | Five failed factor attempts block the next valid attempt; primary challenge denied at 5-minute boundary | Fixture limits, not approved production lockout/recovery policy |
| Password change | Library changes password; old password denied, new password works | **Session revocation after password change is not wired/tested** |
| Recovery | Not implemented or claimed | Forgot-password/reset tokens, lost/all factors, sole-Admin/custodian and supported recovery schema/workflow remain mandatory open gates |

Initial failures identified harness/library integration assumptions, not permission to weaken requirements: an already-defined login field prevented plugin-owned unique-index creation; a negative initial replay marker was incompatible with otplib. Corrected to the documented plugin-owned field and omitted initial replay bound, then reran the affected and full tests successfully.

No secret-bearing snapshots/diagnostic output. Tests assert booleans/statuses rather than printing hashes, passwords, cookies, seeds or keys. Error text projection is generic; no claim of constant-time unknown-account handling. Session/factor writes are isolated fixture orchestration, not an independent security audit or production-ready auth system.

## Actual checks

Executed during authorized implementation before the documentation interruption; resumed 2026-11-11 to finish records. No code changed during documentation resumption.

- `./scripts/npm.cmd test`: **207 tests / 24 files PASS** on final full run, including eight new credential/TOTP tests and existing nine session tests.
- Targeted credential/session run: **16 tests PASS** before the final eighth credential test; final full run includes all 17.
- `./scripts/npm.cmd run typecheck`: frontend/backend/test strict types PASS.
- `./scripts/npm.cmd run lint`: ESLint and boundaries PASS; 67 application source files / 11 boundary fixtures.
- `./scripts/npm.cmd run format:check`: PASS.
- `./scripts/npm.cmd run build`: catalog integrity plus frontend/backend production builds PASS.
- `./scripts/npm.cmd run check:secrets`: PASS, 33 public artifacts; no configured private values or synthetic sentinels.
- `python -X utf8 docs/verification/verify-m00-01.py`: PASS on 2026-11-11. All 13 source versions/byte lengths/SHA-256 hashes unchanged; 236 requirements, 215 pages, 87 tasks, inherited decisions and phase qualifications reconcile; management links resolve.

No browser run: application UI/routes unchanged. Earlier browser evidence is historical; grouped human and real auth accessibility/UX review remain due before M13/release. No frontend SEO/responsiveness/performance improvement claimed from test-only work.

## Files

Created: `backend/tests/support/credential-mfa-proof.ts`, `backend/tests/credential-mfa-compatibility.test.ts`, this verification report.

Modified: `backend/tests/support/session-proof.ts`; `backend/package.json`; root `package-lock.json`; PROGRESS.md; DECISIONS.md; docs/traceability.md; docs/verification/verify-m00-01.py; docs/architecture/decisions/m00-02-credential-mfa-recovery.md; docs/architecture/provider-selection.md; docs/architecture/environment.md.

No backend/src/frontend application code, approved source, actual env/secret or owner database changes. Existing untracked repository preserved; no Git staging/commit/reset. Suggested logical commit: `test(identity): verify credential TOTP and session handoff` (not created).

Reproduce with approved Node from root: `./scripts/npm.cmd test -- --project backend backend/tests/credential-mfa-compatibility.test.ts`. The fixture refuses application MongoDB env configuration, starts its owned replica set and local listener, and cleans its owned resources. No backend/.env loaded. Existing run commands and outstanding owner catalog secret/index activation remain unchanged.

## Outcome and next proposed task

This checkpoint meets its scoped goal: reproducible credential/TOTP compatibility evidence and one-session handoff, with recovery limitations explicitly retained. Owner acceptance pending. It does **not** meet full M00-02/M03 acceptance or authorize adoption/production activation. Current StaffUser status/accessVersion/role/record checks, production factor schema, password-change/reset session revocation, production anti-abuse policy, verified mail and supported recovery are not implemented.

Next proposed **M00-02 recovery and final authentication adoption decision review**, documentation only: consolidate the verified session/credential/TOTP evidence; evaluate supported forgotten-password, lost-factor and sole-Admin/all-factor recovery options against the approved source; propose a concrete storage/workflow/custody contract or state precisely which explicit owner architecture/security decision is needed. Preserve no custom credential primitives, no support-only MFA bypass, hashed single-use expiring recovery evidence and session revocation. No new recovery code/protocol, installs/accounts/provider spend, owner env/database or M03 implementation. Expected files: one focused decision packet and affected provider/environment/decision/progress records. Acceptance: a reviewable recommendation and exact remaining approvals, not invented recovery readiness.

Next **Approve and next.** accepts this verified local proof with all open gates retained and authorizes that documentation review only. Do not interpret it as accepting unimplemented recovery or starting M03-01. Stop for owner review.
