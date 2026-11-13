# M00-02 - Express authentication and session decision review

## Current proof result - 2026-11-10

Owner approved bounded candidate installation/evaluation only. [Actual report](../../verification/m00-02-auth-compatibility.md): stable 1.7.19 library/adapter pinned as test-only dependencies; 190 regression/characterization tests pass. Candidate is **not adopted and not suitable as-is**: session token-at-rest/source mapping, deliberate-idle and rememberMe=false absolute lifetime fail the approved fit; freshness/real recovery/operational evidence remains open. No application authentication, owner env/database change or source/security exception. Earlier recommendation/proof-pending wording below is historical. Full M00-02 remains open; next proposed alternative architecture review is documentation only and requires approval.


2026-11-10 (Asia/Dhaka). **Review prepared; recommended candidate is not selected. No authentication installation or implementation authorized by this checkpoint.**

## Authorization and approved baseline

Owner **Approve and next.** accepts the verified M02-04 local foundation only, retaining production/UI/owner-environment activation limitations, and authorizes this previously proposed documentation review. Full M00-02 remains open. M00-03 staff policy and its planning acceptance remain unchanged.

Authority: sources 01 business/security requirements; 05 sections 7.9/7.13 and A5-01; 06 Express ownership; 07 M00-02/M03-01..05 dependencies and AC; 08 identity/session execution rules; 10 authentication/recovery QA; approved staff policy and owner amendments. No changes to any source document.

Already approved: custom Next.js login UI; Express verifies email/password through maintained libraries and owns all identity APIs/MongoDB access; no public registration; active StaffUser subject/provider mapping authorizes access, never email matching alone. npm/Node/MongoDB architecture stays settled. Production MFA for every staff member, phishing-resistant factors preferred, supported TOTP fallback only with explicit selection, 30-minute deliberate-activity idle, 8-hour absolute and 5-minute fresh-auth policy remain mandatory. Offboarding/accessVersion and last-Admin/recovery safeguards remain mandatory. No paid identity service or account is required for this local evaluation.

## Recommendation in plain language

Evaluate **Better Auth running inside the existing Express backend** first. This is a library in ARADUN's own server, not an external login subscription. The custom Next.js screens call Express over the configured API boundary. Keep one server-side session authority. Do not add NextAuth as an independent session authority in the frontend.

This is a candidate recommendation, **not a claim of source compatibility or security readiness**. Resolve the session-storage/schema and exact policy gaps below in a bounded disposable-fixture proof before selecting it or starting M03-01. Do not weaken requirements, add a second session master or improvise cryptography to make a library fit.

## Alternatives and primary evidence

| Candidate | Documented capability | Assessment for ARADUN |
| --- | --- | --- |
| Better Auth in Express | Official [Express integration](https://better-auth.com/docs/integrations/express), [email/password](https://better-auth.com/docs/authentication/email-password), [MongoDB adapter](https://better-auth.com/docs/adapters/mongo), [2FA](https://better-auth.com/docs/plugins/2fa) and [passkey plugin](https://better-auth.com/docs/plugins/passkey) | Preferred candidate for proof: combines identity/security workflows; still needs policy/schema verification. No production selection yet |
| Passport Local + maintained password/session/MFA/recovery components | [Passport password strategy](https://www.passportjs.org/concepts/authentication/password/) delegates verification to application code; [express-session](https://expressjs.com/en/resources/middleware/session/) provides session middleware/store integration | Familiar email/password approach, but more integration responsibility across provisioning, factor recovery, hashing storage and lifecycle. Not a complete equivalent MFA/recovery solution by itself; fallback architecture review only, no components selected |
| NextAuth/Auth.js Credentials in frontend | [Credentials documentation](https://authjs.dev/getting-started/authentication/credentials) describes application-owned credential verification | An independent frontend session would require a reviewed single-authority reconciliation. Not recommended alongside an Express session master; no Next route auth/database implementation proposed |

These are engineering judgments from primary documentation, not installed compatibility tests or security audits. No hosted provider/cost research, pricing calculations or account action performed.

## Candidate contract and evidence gaps

### Ownership, identity and credential handling

[Better Auth email/password documentation](https://better-auth.com/docs/authentication/email-password) describes credential-account password hashing using scrypt, password reset hooks and disabling signup. Recommend its maintained default hashing rather than introducing bcrypt solely because it was used in an earlier project. No migration exists. Actual parameter/algorithm review and denial tests are required at the pinned patch; neither bcrypt nor scrypt is a newly approved package choice here.

Recommend private provisioning only; disable and test public signup, user self-deletion, arbitrary email linking and unsafe account-management routes. Never infer ARADUN roles from library user metadata or email/domain. StaffUser keeps its source schema and provider/subject mapping, roles/status/accessVersion and indexes. A verified library identity must resolve an explicitly provisioned active StaffUser. Local email/password identity does not require an external OIDC issuer; its adapter identity namespace must be fixed and server-owned.

### MongoDB and session schema - must resolve before adoption

The [MongoDB adapter](https://better-auth.com/docs/adapters/mongo) currently documents a separate `@better-auth/mongo-adapter` package and driver client for replica-set transactions; older import examples may differ. The [library database schema](https://better-auth.com/docs/concepts/database) defines user/session/account/verification records, with a session token and optional IP/user-agent fields. This is not automatically the conditional StaffSession contract in source 05 section 7.13, which requires tokenHash and no stored raw cookie token.

Proof must inspect the exact pinned schema, token-at-rest behavior, recovery-secret handling, collection/index initialization and optional identity metadata. Do not assume a library-owned schema silently exempts token/privacy rules; do not assert a confirmed raw-token vulnerability from field naming alone. If the adapter cannot satisfy source contracts without custom security internals, report the incompatibility and return for an explicit source/architecture decision or alternative. No raw-token exception is proposed for automatic approval.

Business models stay Mongoose-owned. A library's official driver adapter would be confined to Express identity records, with an explicit approved mapping and preferably the existing backend connection/client where type/lifecycle compatibility is verified. It must not add Prisma/SQL or a second database, export secret records to Next, auto-apply production indexes or duplicate StaffSession as a second session master. Pool/driver/transaction compatibility and schema/index ownership remain unproven until the fixture test. Retryable adapter hooks must never contain mail/external side effects; actual delivery remains disabled and later integrations need durable handoff.

### Session policy and single authority

[Session documentation](https://better-auth.com/docs/concepts/session-management) describes rolling expiry by default, refresh disabling, freshness settings and cookie-cache behavior. Recommend cache disabled for immediate revocation and refresh disabled for an absolute expiry candidate. These switches alone do not prove the approved policy.

Prove server-enforced 8-hour absolute expiry, 30-minute idle based only on eligible deliberate activity, no extension by polling/SSR/session reads, 5-minute active reauthentication for sensitive actions and valid factor assurance. Do not derive assurance from a user-level boolean or infer new authentication from a refreshed token. Any required activity/assurance metadata must remain within one explicitly reviewed session-policy model, not an ad hoc second credential system. If supported extension points cannot achieve it, stop adoption. Test logout/rotation, stolen/stale cookies, accessVersion/current status checks and no private shared cache. Idle-expiry warnings/input handling remain their owning UI tasks.

### MFA and recovery

[2FA documentation](https://better-auth.com/docs/plugins/2fa) covers TOTP, backup codes and enrollment; its default second-factor enforcement does not cover every non-credential sign-in method. The [passkey plugin](https://better-auth.com/docs/plugins/passkey) documents WebAuthn integration. A passwordless passkey path is not automatically proof that ARADUN's selected factor/assurance policy is met.

Recommend evaluating password plus library-supported TOTP and single-use backup codes as the narrow initial candidate; **this TOTP selection still needs owner approval after proof**, and does not erase the preferred phishing-resistant option. Do not enable trusted-device skips, email/SMS-only MFA, passwordless/social/magic-link/anonymous alternate paths or an MFA-disabled staff bypass. Prove enrollment gate, invalid/replayed factors/codes, recent authentication before factor changes, lost factor and sole-Admin/all-factor recovery with independent safeguards. Verify secret encryption/protection and one-time recovery persistence at the pinned implementation, not from marketing claims.

No actual first Admin identity, recovery custodian, email sender or reset delivery is supplied here. Use synthetic `.invalid` identities and test-only reset capture in the proof; real reset delivery remains gated. Password-reset email alone cannot silently remove MFA or authorize account recovery. Actual recovery readiness remains M03-04/M13 evidence; no backdoor reset endpoint.

### HTTP, UI and configuration

Recommend the existing loopback development origins/ports, consistent hostname spelling, host-only HttpOnly cookies, appropriate SameSite and production Secure/HTTPS. Keep exact trusted origins and library CSRF checks; never disable them to fix CORS. The [Express guide](https://better-auth.com/docs/integrations/express) requires handler placement before body parsing and documents Express 5 wildcard syntax: integrate narrowly rather than replacing public JSON or machine-job guards. Authenticated library routes need their own bounded parser/rate controls; generic body middleware must not consume streams first.

Frontend stays a custom accessible login UI, later consuming safe session/user DTOs through Express. Prefer a client-only library helper where useful, not a Next server auth instance. SSR forwards only intended cookies to the fixed API origin. No secrets/session/Mongo objects in frontend assets, URLs, localStorage or logs. Existing appearance/theme/focus and noindex rules apply.

Candidate backend variables: library secret, fixed auth base URL/trusted origins, conditional encryption keys and selected adapter marker. Names and required bounds must come from the pinned supported library; no placeholders can arm auth, no actual values generated now. Reuse MONGODB_URI, not a new provider database. Existing limiter secret/index readiness remains outstanding; this documentation review does not activate the owner's catalog or database.

## Decisions requiring approval versus later gates

| Decision | Current state / next action |
| --- | --- |
| Better Auth as candidate for a bounded compatibility proof | Recommended, not selected or installed |
| Library-managed schema versus source StaffSession/tokenHash requirement | Unresolved mapping/security gate; no silent schema or raw-token exception |
| Exact idle/absolute/fresh-auth assurance enforcement | Unproven; must pass fixture evidence before adoption |
| TOTP fallback selection and phishing-resistant path | Candidate only; all-staff production MFA remains mandatory |
| Stable supported library/adapter patches and native driver compatibility | Select and verify during explicitly authorized proof/setup; no beta/latest install blindly |
| Actual initial Admin, custodian, production mail/TLS/domain/proxy/secret handling | Later operational gates; no facts invented or accounts created |
| Full M00-02 or M03 completion | Not accepted by this review |

## Next proposed checkpoint: M00-02 authentication compatibility proof only

Next approval would authorize this **candidate evaluation and bounded test-only installation**, not final library adoption or a security exception:

- Select documented compatible stable Better Auth/official Mongo adapter patches with Node 24 and current backend, review dependency/security metadata, pin through npm Workspaces and one root lockfile. Install only what the proof needs; no passkey/optional integrations unless specifically needed to evaluate the approved policy. No unrelated upgrades or global installs.
- Create an isolated test harness under `backend/tests/support/` and `backend/tests/auth-compatibility.test.ts`; use owned marked disposable native replica-set fixtures, synthetic credentials/recipients, ephemeral secrets and no real outbound email. Application auth routes, StaffUser implementation and frontend login remain absent.
- Inspect/hash-at-rest schema evidence without printing any tokens, password hashes, recovery seeds/codes or credentials; test signup denial, session/assurance/expiry/revocation semantics, reset-code replay and adapter startup/index behavior. Record pass/fail and supported extension options. Fixture identity records are library integration tests, not deployment models or permission to change source schemas.
- Update only needed test dependency manifests/root lockfile, fixture tests and M00-02 decision/verification records. Run applicable regressions/boundaries/secret checks. Do not change owner `.env`, create staff accounts, apply owner indexes or activate providers.
- Acceptance: evidence-backed compatibility matrix, explicit pass/fail for security/schema gates and either a justified adoption proposal or a concrete incompatibility report. A failed fit is not accepted as successful authentication implementation; no workaround that weakens requirements.

After a successful proof and owner selection, the concrete **future M03-01** plan is: selected Express identity adapter/config; source StaffUser model/indexes/provisioned subject mapping; custom STA-001 login/logout/safe local return within task scope; one session master and current local access checks; real integration/forged/stale/session tests. Exact prerequisites M00-02/M00-03/M02-03/M02-05/M02-04 must be satisfied with recorded scope, and any actual schema/security exceptions resolved. M03-02 record authorization, M03-03 factor/security UI, M03-04 provisioning/recovery and M03-05 adversarial integration remain their own tasks. No automatic start.

## Review evidence and files

Documentation/source/code/manifests inspected; official documentation above consulted on 2026-11-10. An initially guessed `/docs/adapters/mongodb` returned 404; canonical `/docs/adapters/mongo` used instead. Current docs are not proof of a specific installed patch; version-specific APIs and security support must be rechecked during proof. No library execution/installation or new auth tests this turn. M02-04's prior 182 tests/48 browser checks remain historical verified evidence, not new authentication evidence.

Created this packet. Updated PROGRESS.md, DECISIONS.md, docs/architecture/provider-selection.md, docs/architecture/environment.md, docs/verification/m02-04.md, docs/traceability.md and docs/verification/verify-m00-01.py for scope/acceptance consistency. Existing untracked files preserved; no staging/commit/reset or source edits. Suggested logical commit: `docs: review Express auth candidate and accept local abuse foundation` (not created). Source/register consistency verification is recorded at handoff. Stop for owner decision.

Final verification: `python -X utf8 docs/verification/verify-m00-01.py` PASS. All 13 source filenames/versions/byte lengths/SHA-256 hashes unchanged; 236 requirement contracts, 215 page entries, 87 tasks, inherited decisions and source phase qualifications reconcile; management links resolve. No application tests rerun for this documentation-only change and no authentication compatibility pass claimed. Full M00-02 remains open.
