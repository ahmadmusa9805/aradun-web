# M00-02 - Alternative Express authentication/session review

## Current session proof - 2026-11-10

Owner authorized the bounded evaluation install/adapter fixture. [Source-shaped session proof](../../verification/m00-02-session-compatibility.md): express-session/types 1.19.0 test-only; 199 tests and quality checks pass. Local hashing/expiry/rotation/revocation policy fit verified with synthetic inputs; owner acceptance pending. No complete authentication stack, actual credentials/MFA/recovery, application model/route, owner env/database/index change or source exception. Full M00-02 remains open. Next proposed credential/MFA/recovery component contract documentation review requires approval; no further install/M03 authorization. Earlier proposed statuses below are historical.


2026-11-10 (Asia/Dhaka). **Review prepared; proposed session-adapter proof awaits approval. No alternative stack adopted.**

## Authorization and result

Owner **Approve and next.** accepts the completed Better Auth compatibility report as evidence of a failed candidate fit and authorizes this documentation-only alternative review. It does not accept the failed security gates, select a library, permit a schema exception or authorize M03. [Prior proof](../../verification/m00-02-auth-compatibility.md) remains reproducible; its pinned devDependencies/tests are preserved.

Authority: source 01 business/security scope, 05 sections 7.9/7.13, 06 Express/Mongoose ownership, 07 M00-02/M03 prerequisites/AC, 08 no-custom-password/OTP/MFA standards, 10 QA-AUTH-01..04 and the approved staff policy. All source documents remain unchanged. No account, provider, spending, hosting or database decision is reopened.

**Recommendation:** evaluate `express-session` as the single session transport, with an explicitly reviewed small Mongoose Store adapter implementing the source StaffSession contract. Preserve custom Next.js UI and Express-owned APIs. Evaluate credential and MFA/recovery components separately; session middleware alone is not an authentication system. Do not claim a complete compatible stack from this review.

## Alternatives and primary evidence

| Approach | Documented evidence | Fit / decision |
| --- | --- | --- |
| express-session + source-shaped Mongoose Store | [Official session middleware](https://expressjs.com/en/resources/middleware/session/) documents cookie session IDs, external Store APIs, regenerate/destroy and persistent stores | Preferred narrow session candidate: keep library-generated/signed IDs and map server state to exact source fields. Adapter/policy code and race safety require proof; not a drop-in approved implementation |
| express-session + connect-mongo | [Maintainer repository](https://github.com/jdesboeufs/connect-mongo) documents transformId, TTL and session storage options | ID hashing is feasible through a supported callback, but this does not establish the source tokenHash field, StaffSession indexes or revocation/assurance mapping. A generic serialized session blob is not automatically the source schema. More adaptation than needed if exact fields are mandatory; not selected |
| Passport Local with a maintained credential component | [Passport Local](https://www.passportjs.org/packages/passport-local/) provides a verification callback; [Passport sessions](https://www.passportjs.org/concepts/authentication/sessions/) use application-defined serialization | Candidate orchestrator for later credential review, not password hashing/MFA/recovery by itself. Serialize only stable server-verified identity references; never treat supplied email/roles as access |
| Passport-Local Mongoose, or Argon2 library composition | [Passport-Local Mongoose](https://github.com/saintedlama/passport-local-mongoose) documents a credential plugin; [node-argon2](https://github.com/ranisalt/node-argon2) documents hashing/verification | Credential alternatives to evaluate, not installs/selections. Library-owned identity records must remain separate from StaffUser authorization. Do not invent plugin-compatible fields or claim reset/recovery is included |
| TOTP/WebAuthn components | [otplib maintainer](https://github.com/yeojz/otplib) documents OTP primitives; phishing-resistant factor preference and TOTP approval gate remain from staff policy | A primitive library does not supply enrollment, replay prevention, recovery ownership or a complete security workflow. Not a sufficient replacement for the failed full-stack candidate; no MFA library or TOTP fallback selected |
| Better Auth patched/wrapped storage | Existing installed proof, not another claim based on docs | Not recommended for immediate adoption: changing hidden adapter token behavior or accepting raw-token storage would bypass unresolved requirements. No fork, duplicate session authority or exception proposed |

Evidence reviewed on 2026-11-10 is documentation, not current installed-patch execution or a security audit of these alternatives. Stable compatible patches, support/advisory/peer checks and Windows/Node 24 behavior must be verified during any approved proof. No package version guessed or installed this turn.

## Recommended session design - proposed, not implemented

### One session authority and exact data mapping

Use the library's generation, signing, cookie parsing, regeneration and destruction. Do not write a token generator, signer, password hash algorithm, OTP algorithm or bespoke JWT protocol. A supported Store bridge is persistence/policy integration, not permission to create custom credential cryptography. This explicit bridge evaluation requires approval below; the next command would not silently authorize a whole custom authentication system.

Hash each high-entropy library-issued session ID using the standard Node crypto SHA-256 API before any storage lookup/write. [Node 24 crypto documentation](https://nodejs.org/docs/latest-v24.x/api/crypto.html) supplies the primitive. No raw ID in _id, tokenHash, JSON payload, logs or fixtures on disk. The ID is not a password; password hashing and credential policy remain a different library decision. Cookie signing remains library-owned with an ephemeral secret in tests and private approved secret management later.

Persist source 05 StaffSession fields/indexes, including tokenHash, staffUserId, accessVersion, authenticatedAt, lastSeenAt, expiresAt, idleExpiresAt, assurance, conditional mfaVerifiedAt and optional revocation metadata, plus applicable inherited fields. Do not replace them with connect-mongo's default document shape, add a parallel sessions collection or promote the source conditional model into application registration before final selection/authorized M03 scope.

A Store get reconstructs only necessary transient middleware cookie/session state from the authoritative record. Generic set/touch must not blindly upsert arbitrary JSON or resurrect revoked/expired sessions. First creation is limited to a trusted issuance operation, after verified identity and required assurance. At this proof stage, that operation is an explicitly isolated synthetic assertion; it proves no real credentials or MFA.

Require guarded database writes and current expiry/revocation checks on reads. Bound queries, preserve absolute expiry, and fence racing updates so logout/revocation cannot be overwritten by a stale request or session touch. Source revision/accessVersion checks and denial rules need actual concurrent tests. Never store client-supplied timestamps, actor/roles, assurance or reauthentication claims.

### Time policy and deliberate activity

Server checks both 30-minute idle and 8-hour absolute expiry on every protected access, regardless of cookie TTL or Mongo TTL cleanup. lastSeenAt/idleExpiresAt advance only for allowlisted protected actions representing deliberate activity; no polling, SSR/session/status read, prefetch or static request extends idle time. Browser events/custom headers alone are not trusted proof of activity. Use bounded server-approved write cadence and atomic monotonic update; expiry cannot revive after a race.

Use library cookie maxAge as a bound, not the source of permission. Disable generic automatic touch as an activity signal. Reject/ignore any remember-me option that could exceed the server cap, and prove both browser-session and persistent-cookie cases. Do not provide a bypass to make development convenient. At expiry, deny the business mutation and preserve safe form input only in its owning future UI.

Sensitive role/status/factor/recovery changes require validated active reauthentication and MFA freshness within 5 minutes. A transport timestamp, session regeneration, client claim or ordinary request does not prove it. The session proof can test denial using synthetic trusted timestamps, but actual attestation and supported factor/recovery semantics remain a separate adoption gate.

### Cookie, boundary and identity controls

Host-only HttpOnly cookie; appropriate SameSite; Secure/HTTPS in production; local HTTP allowance restricted to the approved loopback fixture. Exact origins and library-compatible CSRF protections remain required before actual mutation routes. No session tokens in URLs/localStorage/analytics; no independent NextAuth/Next server auth master. Next.js consumes safe DTOs; Express owns all persistence/authorization. Current local catalog secret/index readiness is unchanged.

A valid session still requires current active StaffUser and accessVersion plus record/field policy at each operation. The session adapter must not grant CRM/content rights on its own. Account creation is private provisioning with last-Admin/offboarding/recovery safeguards; no public staff signup. No StaffUser implementation in the next session-only proof.

## Credential and MFA/recovery decision remains open

The source says no custom credential implementation is approved, and no custom password/OTP/MFA implementation. This review does not reinterpret that as permission to assemble an unreviewed full security subsystem. Calling maintained primitives is necessary but does not by itself establish safe enrollment, reset/recovery or schema ownership.

Before M03-01 adoption, require a concrete library/component contract for credential records, password verification/reset, one-use expiring hashed recovery material, factor enrollment/replay/rotation, all-staff assurance, fresh authentication and sole-Admin/all-factor recovery. Verify it with real library integration and authorized operational evidence, not just test assertions. Never add password/MFA secrets to StaffUser or implement custom security questions/emergency bypass. A partial Passport/session demo cannot close these requirements.

The current review finds a promising session integration path, **not a complete proven authentication replacement**. If no maintained component contract meets recovery/security constraints, return a precise unresolved decision; do not manufacture a compatible schema or weaken requirements. Full M00-02 acceptance remains open. Production provider/host spend is not necessary to perform the next local session proof.

## Next proposed checkpoint: M00-02 session adapter proof only

Approval would select `express-session` **for evaluation only** and specifically authorize a test-only source-shaped Mongoose Store bridge and server policy checks:

1. Verify stable supported express-session and matching TypeScript declarations against current Node 24/Express 5. Pin minimal test-only backend devDependencies and one root lockfile through npm; no Passport/Argon2/OTP/MFA/extra store package yet. No unrelated upgrade/global install. Existing Better Auth proof stays for provenance; no automatic dependency removal.
2. Create `backend/tests/support/session-proof.ts` and `backend/tests/session-compatibility.test.ts`, using owned marked disposable native MongoDB replica sets, random loopback HTTP ports, ephemeral library secrets and synthetic staff references/assurance only. Test-only source-shaped model/store; no backend/src model/registry/auth route or real staff identity.
3. Prove signed-cookie tamper denial, library ID rotation, hashed-only storage, exact source fields/indexes, absolute/idle enforcement while TTL lags, no polling extension, remember-me cap, safe store failure and bounded writes. Test two-instance concurrency, stale writes/touches after logout and no session resurrection. Verify that generic set/touch cannot create or promote a session or grant assurance.
4. Treat synthetic primary/MFA/reauth assertions solely as policy-fixture inputs. Test policy denials and freshness boundaries; do not claim actual login, factors or recovery passed. Keep credential/MFA/recovery selection visibly unresolved.
5. Run applicable tests/types/lint/build/boundary/public-secret checks and preserve 13 source hashes. Record supported fit, failed criteria and concrete remaining gates in a verification matrix. No real env, account, service, email, database/index apply or Phase 2/3 work.

Expected files: those two tests/harness files, backend/package.json/root lockfile only as needed, a session proof verification report and affected progress/decision/provider/environment/traceability records. No application development or M03 start. Acceptance is a reproducible session-compatibility assessment with explicit pass/fail and remaining auth gates, not declaration that all staff authentication is solved.

**Next Approve and next.** accepts this documentation review and authorizes only the above evaluation install/test adapter/policy scope. It does not adopt the stack, approve custom password/MFA/recovery workflows, change source schemas, remove MFA or accept failed Better Auth gates. M03-01 remains blocked until actual identity/session/library/security decisions and its exact prerequisites are satisfied.

## Verification and handoff

Documentation/source/current proof inspected; no installs, application code, lockfile/env or database changes this checkpoint. Prior 190 tests are historical characterization results, not tests of this proposed adapter. Source/register verification executed at handoff. Whole M00-02 remains open; owner acceptance of failed-fit evidence is distinct from accepting security gates. Existing untracked files preserved; no Git stage/commit/reset.

Created this packet. Updated PROGRESS.md, DECISIONS.md, docs/architecture/provider-selection.md, docs/architecture/environment.md, docs/verification/m00-02-auth-compatibility.md, docs/traceability.md and docs/verification/verify-m00-01.py. Suggested logical commit: `docs: review source-shaped Express session alternative` (not created). Stop for owner review.

Final check: `python -X utf8 docs/verification/verify-m00-01.py` PASS. All 13 current source filenames/versions/byte lengths/SHA-256 hashes unchanged; 236 requirements, 215 page entries, 87 tasks, inherited decisions and future qualifications reconcile; management links resolve. No runtime tests rerun or alternative compatibility pass claimed for documentation-only work.
