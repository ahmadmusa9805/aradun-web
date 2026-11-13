# M00-02 - Credential, MFA and recovery component contract review

## Current component proof - completed 2026-11-11

Owner authorized the scoped credential/TOTP evaluation installation/fixtures. [Actual report](../../verification/m00-02-credential-mfa-compatibility.md): 207 tests and quality checks pass; password/TOTP verification, sealed seed storage and same-identity session rotation proven locally. Owner acceptance pending; no application adoption, production factor/storage policy or recovery protocol selected. Password-reset/all-factor/sole-Admin recovery and password-change session revocation remain open. No real env/accounts/owner database change or M03 authorization. Full M00-02 remains open; next proposed recovery/final adoption documentation review requires approval. Earlier proposed statuses below are historical.


2026-11-10 (Asia/Dhaka). **Documentation complete; candidate component proof awaits approval. No complete authentication stack adopted.**

## Authorization and settled decisions

Owner **Approve and next.** accepts the [session-only proof](../../verification/m00-02-session-compatibility.md) and authorizes this credential/MFA/recovery documentation review only. Session acceptance is evidence of local transport/policy fit, not approval of application adoption, real identity/factors or recovery. Full M00-02 remains open; M03 not authorized.

Sources 01 business/security authority, 05 sections 7.9/7.13, 06 Express ownership, 07 M00-02/M03 dependencies, 08 no custom password/OTP/MFA implementation, 10 QA-AUTH-01..04 and the approved staff policy govern this contract. Preserve separate custom Next UI/Express API, npm/Node/Mongoose architecture and the complete Phase 1 scope. No source changes or provider/hosting/spending research.

Approved: no public staff signup; current active StaffUser/provider subject/accessVersion authorization; one session master; production MFA for all staff; preferred phishing-resistant factors, TOTP fallback only if selected; 30-minute deliberate idle, 8-hour absolute and 5-minute fresh authentication. Last-Admin, offboarding, safe recovery and actual owner/custodian evidence remain mandatory.

## Recommendation

Evaluate **Passport + Passport-Local Mongoose for credentials, otplib for TOTP, and a maintained sealing library for factor-secret protection**, using the verified source-shaped Express session transport. This is a concrete local candidate, not a claim of complete workflow/library fit. Keep application authorization in StaffUser and credential secrets in separate library-owned identity records. Do not add an independent NextAuth session or reuse the failed Better Auth session storage.

Use library public APIs for hashing/verification, OTP generation/verification and authenticated sealing; do not implement password/OTP/encryption algorithms. Application adapters still have security responsibility: state transitions, atomic replay protection, authorization, throttling and recovery identity checks are not automatically supplied by these libraries. Existing approval for custom Express-owned login does not silently approve every proposed security schema or recovery process.

## Component comparison and evidence

| Responsibility | Preferred evaluation / alternatives | Proven versus unproven |
| --- | --- | --- |
| Credential verification | [Passport Local](https://www.passportjs.org/packages/passport-local/) verification strategy with [Passport-Local Mongoose](https://github.com/saintedlama/passport-local-mongoose) plugin APIs | Plugin documents credential fields and password operations. No installed compatibility test here. Its repository package metadata currently tests against Mongoose 9; this is a candidate signal, not registry/Node/Windows proof |
| Password storage | Plugin-owned PBKDF2 API with explicit reviewed parameters; Argon2id via [node-argon2](https://github.com/ranisalt/node-argon2) is a separate alternative | Prefer the plugin for the first proof to avoid an additional custom hash integration/schema. Do not use documented weak defaults or install both approaches |
| TOTP | [otplib](https://github.com/yeojz/otplib) public secret/generate/verify APIs | OTP primitives, not a complete enrollment/recovery provider. v13 API differs from older authenticator examples; pin and verify actual stable release |
| TOTP secret protection | [@hapi/iron API](https://raw.githubusercontent.com/hapijs/iron/master/API.md) seal/unseal candidate | Library-managed confidentiality/integrity, not our own cipher. Separate ephemeral key in proof; production key custody/rotation/backup mapping unresolved. Not a replacement for password hashing or session authority |
| Phishing-resistant factor | [SimpleWebAuthn server](https://simplewebauthn.dev/docs/packages/server) | Documents registration/authentication verification; challenge/origin/RP/user-verification/storage/counter responsibilities still apply. Preserve preferred-factor direction; do not install or claim implemented in initial TOTP proof |
| Recovery | Supported password-change API plus separately reviewed full recovery contract | None of the listed primitives alone supplies the approved sole-Admin/all-factor recovery workflow. **Unresolved adoption gate**, not a feature to omit |

Primary documents consulted on 2026-11-10; no package installed or executed this checkpoint. Stable package selection, advisories/support and peer compatibility must be checked during approved proof. A master-branch version is not an installed release. No paid service/account or hosted identity selection.

## Proposed credential contract

- Use private provisioning only. Library identity owns its immutable subject ID and credential fields; StaffUser maps that verified subject under a fixed server-owned provider namespace. Email normalization can locate a credential candidate but never grants roles or links identities automatically.
- Keep the plugin's username/hash/salt and any credential metadata out of StaffUser, safe DTOs, logs and frontend imports. Use library setPassword/authenticate/changePassword APIs, not an algorithm copied from examples. Exact plugin schema/options/index generation must be inspected before accepting it; explicit owner-database indexes remain separately reviewed.
- For the initial evaluation, propose PBKDF2-HMAC-SHA256 **600,000 iterations**, 32-byte salt and 32-byte derived key through documented plugin options. [OWASP password storage guidance](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) gives that PBKDF2 work factor while preferring Argon2id generally. This is a proposal for compatible library composition, not a FIPS claim or proof that PBKDF2 is universally preferable. Benchmark valid/invalid attempts and limit request size/concurrency before adoption; do not lower work to make tests fast.
- Generic identity-safe failures; bounded server abuse controls for known and unknown accounts; no password/token output. Password success alone can establish primary assurance only. No protected staff access before active StaffUser checks and required factor assurance. Password changes/security changes invalidate affected sessions/accessVersion under the owning workflow.

## Proposed factor and session binding contract

- The next proof evaluates password plus TOTP only; selection of TOTP as an allowed production fallback remains an explicit decision after evidence. No email/SMS-only MFA, trusted-device skip, shared account or production bypass. The preferred phishing-resistant path remains open before final factor selection, not silently removed.
- Enroll only after valid primary authentication and required fresh verification. Pending factor material has no authority. Activation requires library verification of the enrolled factor; never accept a frontend boolean or user-level enabled flag as session assurance.
- At login, successful library password check is insufficient for protected access. Promote assurance only after a valid factor challenge bound to that same synthetic identity/login attempt. Rotate the library session ID at the assurance transition. Current active status/accessVersion and source record policy remain separate required checks.
- Verify TOTP using the library and enforce replay prevention atomically against the matched time step. Wrong/expired/replayed codes, concurrent same-code attempts, attempt exhaustion and abandoned enrollment must fail safely. Document the pinned library's tolerance/window behavior; a broader window is not an implicit approval.
- Protect any stored seed using a maintained seal/unseal API and a separate private key; never store plaintext seeds/URIs in StaffUser/logs/fixtures on disk. A proof-only envelope can test this property, but **no production factor/reset schema is selected by this document**. The source requires a reviewed selected-library storage contract; primitive-only libraries do not magically supply it.
- Fresh authentication requires verified password/factor evidence tied to server timestamps, not normal polling, cookie renewal or role metadata. In a future real integration, ensure stale/suspended identities cannot pass while holding an old session; do not claim the session fixture already tested StaffUser lifecycle enforcement.

## Recovery contract - mandatory and still unresolved

| Scenario | Required behavior | Current disposition |
| --- | --- | --- |
| Password change with current password and valid MFA | Supported credential-library operation; fresh authentication; invalidate affected sessions; protected notification/audit | Candidate plugin API exists; full workflow untested |
| Forgot password with another valid approved factor | Verify requester, issue only expiring single-use hashed recovery evidence through an approved supported workflow; reset must not remove MFA or grant access | No recovery library/schema/email delivery selected; **open** |
| Lost one factor, another enrolled factor available | Authenticate remaining approved factor and fresh identity, controlled replacement, old-factor revocation and notification | Required, not proven by TOTP primitive APIs |
| All factors lost / sole Admin | Previously approved supported identity-verification/custody process, independently verified limitations, no support-only reset or permanent backdoor | Actual owner/custodian facts and a supported recovery implementation remain **open before adoption/activation** |
| Recovery code reuse/concurrent requests | Hash-at-rest, expiry and atomic consume; safe generic responses; revoke affected sessions; restricted evidence | No production recovery-code generator/schema invented; future supported recovery contract/proof required |

A password-reset email alone cannot satisfy lost-factor recovery. Do not turn a local administrative database edit into an approved recovery mechanism or invent a second Admin. No security questions, universal reset token, disabled-MFA login or custom cryptographic credential implementation. Real sender identity, recipient eligibility, outbox delivery/reconciliation and all-factor recovery rehearsal remain owning task/operational gates.

**This is a real remaining decision, not a prerequisite to buying hosting.** The proposed components cover credentials and factor verification APIs; they do not yet establish the source-required supported recovery workflow. Full M00-02/A5-01 and M03-01 adoption must remain open until the gap is resolved. If a complete library-supported composition cannot meet the source contract, present the incompatibility and ask for an explicit architecture/security decision; do not reinterpret this review as a waiver.

## Exact next proposed task - M00-02 credential/TOTP integration proof only

Next approval would accept this review and approve the stated components/parameters **for isolated evaluation only**, not production factor selection or a recovery/schema exception:

1. Verify compatible stable `passport`, `passport-local-mongoose`, `otplib`, `@hapi/iron` and only necessary TypeScript declarations. Pin as test-only backend devDependencies through npm Workspaces/root lockfile. Check metadata/advisories and actual Node 24/Mongoose 9 APIs; no unrelated upgrades or other candidate installs.
2. Add `backend/tests/support/credential-mfa-proof.ts` and `backend/tests/credential-mfa-compatibility.test.ts`. Use owned marked disposable native MongoDB fixtures, synthetic `.invalid` identities, ephemeral passwords/sealing keys and isolated HTTP transport. Reuse the session proof where it fits; no application route/model/registry or real StaffUser/account/env/provider change.
3. Inspect actual plugin fields/unique indexes/hash behavior. Verify private fixture provisioning, correct/wrong passwords and generic error projection at the proposed work factor. Measure bounded cost without claiming production throughput or weakening parameters. No public signup or access from email alone.
4. Exercise real library TOTP enrollment/verification, wrong/expired/replayed factors and two concurrent uses of one accepted time step. Use fixture-only CAS/envelope metadata to test required integration properties without claiming an approved production factor schema. Test sealing/tamper denial without printing plaintext seeds/codes/keys.
5. Connect verified library results to one source-shaped test session: primary cannot access protected fixture; verified factor promotes that identity only, rotates session ID and preserves time limits; unverified/forged assurance denied. No homemade algorithms or production MFA bypass.
6. Record password-change capability and all unresolved reset/all-factor/sole-Admin recovery/storage gates explicitly. **Do not implement a new recovery protocol or claim recovery passed**. Test-only successful credential/TOTP evidence is not permission to activate M03 with unresolved required gates.
7. Run actual tests/types/lint/build/boundaries/public-secret/source checks. Produce a matrix with fit/failure/remaining requirements and one concrete next recommendation; stop for review.

Expected changes: the two test/harness files, minimal backend devDependencies/root lockfile, `docs/verification/m00-02-credential-mfa-compatibility.md` and affected decisions/provider/environment/progress/traceability records. No Phase 2/3 work, further session-framework substitution, real mail, accounts, owner database/index apply or M03 start. Acceptance means reliable credential/TOTP compatibility evidence with recovery limitations retained, not that full authentication is finished.

## Checkpoint verification and handoff

Reviewed approved rules/progress/decisions, source/QA/roadmap boundaries, accepted session proof and primary component documentation. No new runtime tests for this documentation-only checkpoint; previous 199 tests remain historical session/regression evidence. Source/register checker run at handoff. Existing untracked files preserved; no Git stage/commit/reset.

Created this packet; updated PROGRESS.md, DECISIONS.md, docs/architecture/provider-selection.md, docs/architecture/environment.md, docs/verification/m00-02-session-compatibility.md, docs/traceability.md and docs/verification/verify-m00-01.py. No app code, manifest/lockfile, env, owner database or approved source modifications. Suggested logical commit: `docs: review credential MFA and recovery component gates` (not created). Stop for owner approval.

Final verification: `python -X utf8 docs/verification/verify-m00-01.py` PASS: 13 source versions/byte lengths/SHA-256 hashes unchanged; all 236 requirements, 215 pages, 87 roadmap tasks, inherited decisions, future qualifications and management links reconcile. No runtime/authentication test pass claimed for this documentation-only checkpoint. Full M00-02 remains open.
