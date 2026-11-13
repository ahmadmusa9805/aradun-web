# M00-02 - Recovery and local authentication adoption decision

## Current informed approval and proof result - 2026-11-11

After requesting and receiving the explanation of this recovery amendment/proof, the owner replied **Approve and next.** That informed approval resolves the explained subject; earlier exact-phrase/bare-command restrictions predate the clarification and are historical. DECISIONS records the narrow amendment and evaluation bounds; no source file changed. [Recovery proof](../../verification/m00-02-recovery-compatibility.md) now verified with 218 tests and quality checks; owner acceptance pending. No application stack adoption, real env/account/owner database/dependency change or production recovery-readiness claim. Actual custody/all-material-loss, delivery and real authorization gates remain open. Next proposed approval selects the tested local composition plus scoped A5-01/M00-02 prerequisite disposition and authorizes **M03-01 local implementation only**, per the report. Full M00-02 and release gates remain open; no next task started. Earlier proposed/unapproved wording below is provenance, superseded only for the approved evaluation subject.


2026-11-11 (Asia/Dhaka). **Review complete; explicit security/schema decision required. No recovery implementation or full authentication adoption.**

## Authorization and evidence

Owner **Approve and next.** accepts the [credential/TOTP proof](../../verification/m00-02-credential-mfa-compatibility.md) and authorizes this documentation-only recovery/adoption review. Accepted local evidence: source-shaped session transport and expiry/revocation, library password verification, TOTP verification/replay fencing, sealed seeds and same-identity session rotation. Prior 207 tests are historical regression/fixture evidence, not a completed recovery test.

The retained candidate is custom Next UI plus Express-owned Passport/Passport-Local Mongoose credentials, otplib, maintained sealing and one express-session/Mongoose session authority. No framework/provider change, hosted account, spending, source-file modification, additional package or application code in this task.

## Actual remaining conflict

Source 05 section 7.13 requires selected-library-owned account/recovery/verification records and says not to invent compatible fields in advance. Source 08 forbids custom password/OTP/MFA implementation. Approved staff policy requires supported recovery, including sole-Admin/all-factor loss, without a support-only bypass. The tested credential/OTP primitives do not supply that complete recovery service/schema. A successful password change is not forgotten-password or lost-factor recovery.

We cannot silently turn those requirements into permission for a new application-managed recovery subsystem. **Recommendation: retain the verified component stack for consideration, but require the narrow explicit amendment below before evaluating application-managed recovery orchestration.** No final adoption until its evidence and remaining gates pass. If the amendment is declined, preserve the provider-supported requirement and evaluate a complete supported recovery solution under separate authorization; no provider shopping/account is automatically authorized.

This is a defined architecture/security/schema decision, not another missing session library or a reason to buy hosting. AGENTS workflow step 6 states: “Unresolved business/security/provider/cost/credential/scope gates still require explicit resolution”. Its final handoff rule also requires a recorded owner decision for significant schema/architecture changes.

## Proposed amendment - NOT approved or applied

> For the selected local Express-owned authentication composition, permit ARADUN-authored recovery orchestration and explicitly reviewed authentication-security records, rather than requiring one provider/library to supply the complete recovery workflow and schema. Use maintained library/Node security APIs for random generation, hashing, password changes, OTP verification, sealing and cookie/session security. Do not implement cryptographic algorithms, weaken production MFA or add an administrative authentication bypass. Preserve source StaffUser/StaffSession contracts, current authorization, mandatory recovery verification, and separate release approval. Approve only the isolated proof below at this step; application adoption still requires successful evidence and explicit owner acceptance.

This proposal supersedes only the complete-provider recovery/schema-ownership expectation for this local composition **if explicitly approved later**. It does not supersede no-homemade algorithms, source business/security functionality, the exact session limits, roles, routes, prices/phases or mandatory MFA. No source files would be edited; a future approved subject amendment would be recorded in DECISIONS with precise provenance.

## Concrete proposed recovery contract - pending approval

| Case | Proposed required flow | Never permitted |
| --- | --- | --- |
| Change known password | Fresh password + required MFA, library changePassword, revoke affected sessions/accessVersion, restricted audit and verified notification | Assuming the credential library revokes ARADUN sessions automatically |
| Forgot password, factors retained | Generic request; one-use expiring reset challenge delivered only to verified destination; library password update; preserve MFA; revoke existing sessions; normal MFA login afterward | Automatic login or factor removal based on email/reset link alone |
| One authenticator lost, another remains | Authenticate with remaining approved factor, fresh identity, controlled factor replacement; rotate recovery pack and revoke affected sessions | Trusting a frontend enabled flag, old cookie or knowledge of email |
| TOTP devices lost, retained offline recovery material | Password + single-use offline recovery code; restricted factor-replacement state only; enroll/verify replacement factor before normal business access; consume/rotate material, revoke sessions, notify/audit | Treating a recovery code as permission to disable MFA indefinitely |
| Sole Admin / all authenticators and recovery material lost | Prearranged independently protected custody/identity-verification runbook, explicit owner/custodian facts and rehearsal before activation | Support-only reset, direct unaudited database edit, universal token or permanent emergency login |

The last row is **not solved by generating more codes**. Lost TOTP with a retained recovery pack is a narrower case than losing every recovery capability. If independently verifiable custody/identity evidence is unavailable, deny access and report the recovery limitation; do not invent a way around it. The actual initial Admin, custody arrangement and verified notification destinations remain owner inputs by M03-04/production activation. No second human or existing independent channel is assumed.

## Proposed records and technical bounds

These are reviewable schema responsibilities, **not implemented models or selected-library claims**:

- Library credential record: preserve plugin-owned fields; never add password/seed/recovery secrets to StaffUser. Factor record: subject reference, sealed pending/active factor, key version, verified state, accepted time step, bounded attempts and revision. Production names/DTOs/index plan must be explicitly reconciled before application schema implementation.
- Recovery challenge: subject reference, allowlisted purpose, hash of a high-entropy bearer value, issued/expires/consumed state and revision/version. No raw token, password, seed or unrestricted payload. Consumption and credential/session/access-version changes must commit atomically; a lost response/retry cannot apply a second reset.
- Recovery pack: subject, pack version and per-code hash/expiry/consumed state. Issue raw codes once into a private user-controlled display/download; never log or store them in plaintext. A new pack invalidates the previous version. Concurrent consumption has at most one winner.
- Proposed evaluation/local policy: 32 random bytes per challenge/code via maintained Node API; SHA-256 for high-entropy recovery values (not passwords); reset challenge valid 15 minutes; 10 single-use offline codes with 90-day expiry and explicit renewal. These are candidate policy choices, not quoted universal security standards or already-approved production settings. The proof uses a controlled clock and no real recipient.
- Reject expired/consumed/revoked/wrong-purpose/wrong-subject evidence in application logic, independent of cleanup. No broad TTL/retention rule inferred for audit, inquiries or backups. Production recovery-record retention and private custody need their existing class-specific review.
- Bound invalid attempts; generic membership-safe request responses; no credentials in URLs/logs/public assets/localStorage. If a reset link is later used, validate its fixed origin, suppress referrer leakage and consume through the reviewed flow; do not claim the existing no-token-in-URL policy was amended by this proposal. A private POST-entered code is the proposed proof path.
- Generate/hash using maintained APIs, change passwords through the selected credential library, verify factors through the selected OTP library and seal with the selected maintained sealing library. No implementation of a new crypto protocol. Expensive password hashing occurs outside short DB transactions; only guarded sequential DB operations inside. No email/HTTP inside a transaction.
- Notification delivery remains a separate integration gate. Do not put recovery bearer secrets into the current inquiry OutboxEvent payload, add unapproved event kinds or claim durable auth email delivery. The proof uses private in-memory capture; production auth delivery/secret-handling/durable-handoff needs explicit later review.

OWASP's [forgot-password guidance](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html) supports generic responses, protected single-use expiring reset evidence and careful post-reset session handling. Its [MFA guidance](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html) discusses recovery as a separate attack surface and backup factors/codes. These principles do not certify this proposed composition or replace actual identity/custody evidence. The [credential plugin API](https://github.com/saintedlama/passport-local-mongoose) provides password operations, not all the workflows proposed here. Primary guidance reviewed 2026-11-11.

## Adoption checklist - honest current state

| Gate | State |
| --- | --- |
| Local session/credential/TOTP evaluation evidence | Owner-accepted; retained source/security limits |
| Application-managed recovery/schema amendment and numeric evaluation policy | **Explicit owner decision required** |
| Actual one-use reset, atomic credential/session revocation and recovery-pack evidence | **Unimplemented/unproven** |
| Real StaffUser lifecycle/accessVersion/record authorization | M03 owning tasks; unimplemented |
| Full factor/storage/provider composition and production rate/CSRF/cookie/key policy | Unselected/unverified for deployment |
| Sole-Admin/all-material-loss custody and actual owner facts | Unresolved, must be rehearsed before activation |
| Real mail/recovery recipient readiness and durable delivery | Unresolved, no service selected |
| Full M00-02 / M03 / launch | Not accepted; no launch authorization |

## Exact next action requiring explicit approval

Use **“Approve the local recovery contract amendment and isolated recovery proof.”** if the proposal above matches the intended local architecture. A bare **Approve and next.** will accept this documentation review only; it will not resolve this named security/schema amendment or authorize recovery code. This exception is deliberate because the current workflow requires explicit resolution of security gates.

That explicit approval would authorize **M00-02 isolated recovery orchestration proof only**:

1. Record the precise subject amendment and candidate bounds; preserve all source files. Reuse installed maintained libraries; no new dependency/provider/account/purchase unless separately necessary and approved.
2. Add backend/tests/support/recovery-proof.ts and backend/tests/recovery-compatibility.test.ts plus fixture-only security records in owned marked disposable MongoDB. No app model/route/registry, real identity, owner env/database or outbound mail. Reuse the validated credential/session fixture where appropriate.
3. Prove reset evidence expiry/purpose/subject binding/one-use under concurrent calls; atomic password change plus session revocation; rollback/failure/response-loss behavior; MFA remains mandatory. Implement only the approved POST-code fixture capture, never expose real recovery artifacts.
4. Prove hashed-only packs, rotation/replay denial and restricted replacement-factor flow before any business-session issuance. Do not claim recovery codes alone prove all-material-loss or human identity verification.
5. Keep sole-Admin/custodian facts, production privacy/delivery/key custody and application adoption open; run actual tests/types/lint/build/secrets/source checks and report fit/failure and remaining adoption decisions. No M03-01 automatic continuation.

Expected changes: those two fixture/test files, optional directly affected test support, docs/verification/m00-02-recovery-compatibility.md and decision/provider/environment/progress/traceability records. No application development or real operational recovery. A successful proof still requires owner review and cannot close missing custody/delivery/production facts.

If the amendment is not approved, the alternative is a separately scoped complete-provider recovery review preserving the existing provider-only contract. No such work starts automatically. Do not keep repeating component proofs as though the present policy conflict were merely a test failure.

## Checkpoint verification and files

Documentation-only task. Reviewed AGENTS/current progress/decisions, source model/execution/roadmap/QA, accepted component evidence and primary recovery guidance. No runtime tests rerun or new recovery test pass claimed; 207-test result remains historical. Existing untracked files preserved; no Git stage/commit/reset.

Created this packet; updated PROGRESS.md, DECISIONS.md, docs/architecture/provider-selection.md, docs/architecture/environment.md, docs/verification/m00-02-credential-mfa-compatibility.md, docs/traceability.md and docs/verification/verify-m00-01.py. No app code, manifests/lockfile, env, owner data or approved source changes. Source/register verification recorded at final handoff. Suggested logical commit: `docs: define explicit recovery adoption decision` (not created). Stop for owner decision.

Final verification 2026-11-11: `python -X utf8 docs/verification/verify-m00-01.py` PASS. All 13 source versions/byte lengths/SHA-256 hashes unchanged; 236 requirements, 215 pages, 87 roadmap tasks, inherited decisions, phase qualifications and management links reconcile. No runtime/recovery test pass claimed for documentation-only work; proposal remains unapproved.
