# M00-02 environment and database plan

## Current owner amendment: Resend integration - 2026-11-12

Owner selects Resend for transactional application email and supplies its four backend-only configuration variables. Prior deferral applies historically; Zoho remains the existing human inbox. Local adapter/outbox binding and nonproduction fixed-inbox isolation implemented; credentials format validated without disclosure. Existing owner configuration remains disabled; no provider/account/spend/live send or production activation. [Current implementation and exact operational gates](../verification/resend-integration.md). No hosted region, retention/recovery, real staff identity or release approval invented.

## M03-03 local security composition adopted - 2026-11-11

Owner approval accepts M03-02 locally and authorizes the tested local TOTP/Iron/recovery composition and canonical in-app security routes. [Current implementation/evidence and retained gates](../verification/m03-03.md). Two pinned packages promoted to runtime, one source-shaped session master retained; security records/hash/sealing/bounds are recorded there. Explicit AUTH_SECURITY_ENABLED=true and a separate strong AUTH_FACTOR_SEALING_KEY required; normal auth/security remains disabled by default. Security POSTs share the existing configured admission budget. No real secret/env/account/database/index apply, hosted activation, provider or spending. Email delivery is disabled; ownership-checked synthetic tests are not staging delivery/custody evidence. Full M00-02 and full M03-03 acceptance remain gated. Earlier statuses below are historical.


## Local composition adopted for M03-01 - 2026-11-11

Owner **Approve and next.** accepts recovery proof and selects the tested local Express-owned credential/session composition with scoped A5-01/M00-02 prerequisite disposition for M03-01 only. [Current evidence](../verification/m03-01.md). Fixed local provider/immutable subject mapping, separate library credentials and source-shaped hashed sessions; no hosted identity or independent NextAuth authority. Local auth requires explicit AUTH_PROVIDER, private session/limiter secrets, explicit attempt policy and reviewed indexes; disabled by default and hosted activation refused. No real account/env/owner DB apply. MFA/recovery/record policy/lifecycle and actual custody/delivery/production gates stay owning tasks; full M00-02 open. Earlier no-adoption/proposed statuses below are provenance, superseded only for this approved local development subject.


## Current informed approval and proof result - 2026-11-11

After requesting and receiving the explanation of this recovery amendment/proof, the owner replied **Approve and next.** That informed approval resolves the explained subject; earlier exact-phrase/bare-command restrictions predate the clarification and are historical. DECISIONS records the narrow amendment and evaluation bounds; no source file changed. [Recovery proof](../verification/m00-02-recovery-compatibility.md) now verified with 218 tests and quality checks; owner acceptance pending. No application stack adoption, real env/account/owner database/dependency change or production recovery-readiness claim. Actual custody/all-material-loss, delivery and real authorization gates remain open. Next proposed approval selects the tested local composition plus scoped A5-01/M00-02 prerequisite disposition and authorizes **M03-01 local implementation only**, per the report. Full M00-02 and release gates remain open; no next task started. Earlier proposed/unapproved wording below is provenance, superseded only for the approved evaluation subject.


## Current recovery/adoption decision - 2026-11-11

[Recovery contract and precise approval](decisions/m00-02-recovery-adoption.md): credential/TOTP evaluation evidence owner-accepted. Local application-managed recovery/auth-security records are proposed as a named narrow amendment, not approved. Explicit approval required before the bounded recovery proof; routine task acceptance does not waive the source/provider/schema gate. No recovery protocol/app/account/env/database or source changes. Full M00-02/M03 remain open; actual custody/identity, delivery, production policy and adoption evidence unresolved. Earlier recommendations/pending statuses below are historical.


## Current component proof - completed 2026-11-11

Owner authorized the scoped credential/TOTP evaluation installation/fixtures. [Actual report](../verification/m00-02-credential-mfa-compatibility.md): 207 tests and quality checks pass; password/TOTP verification, sealed seed storage and same-identity session rotation proven locally. Owner acceptance pending; no application adoption, production factor/storage policy or recovery protocol selected. Password-reset/all-factor/sole-Admin recovery and password-change session revocation remain open. No real env/accounts/owner database change or M03 authorization. Full M00-02 remains open; next proposed recovery/final adoption documentation review requires approval. Earlier proposed statuses below are historical.


## Current credential/MFA/recovery review - 2026-11-10

[Component contract and next proof scope](decisions/m00-02-credential-mfa-recovery.md): session-only proof owner-accepted as evaluation evidence. Proposed Passport/Passport-Local Mongoose, otplib and maintained seed sealing remain unselected/uninstalled; explicit password parameters require evaluation. Supported reset, all-factor/sole-Admin recovery and production identity/factor storage/key custody remain open; no primitive-only recovery claim or architecture/source exception. Next proposed isolated credential/TOTP proof needs approval for minimal test dependencies; no application auth, real env/accounts/database activation or M03 authorization. Full M00-02 remains open. Older pending/proposed statements are historical.


## Current session proof - 2026-11-10

Owner authorized the bounded evaluation install/adapter fixture. [Source-shaped session proof](../verification/m00-02-session-compatibility.md): express-session/types 1.19.0 test-only; 199 tests and quality checks pass. Local hashing/expiry/rotation/revocation policy fit verified with synthetic inputs; owner acceptance pending. No complete authentication stack, actual credentials/MFA/recovery, application model/route, owner env/database/index change or source exception. Full M00-02 remains open. Next proposed credential/MFA/recovery component contract documentation review requires approval; no further install/M03 authorization. Earlier proposed statuses below are historical.


## Current alternative review - 2026-11-10

[Alternative Express/session review](decisions/m00-02-alternative-authentication.md): recommend test-only evaluation of express-session and a source-shaped Mongoose Store bridge with hashed session IDs and explicit idle/absolute/freshness/revocation policy. No stack or password/MFA/recovery component selected. Public docs do not establish fit; source fields/indexes and no custom credential primitives remain mandatory. Prior Better Auth failed-fit report accepted as evidence only. Next proposed session proof requires explicit approval for minimal test dependencies/adapter fixture; no real env/account/database/index changes or M03 authorization. Full M00-02 remains open; earlier candidate recommendations are historical.


## Current proof result - 2026-11-10

Owner approved bounded candidate installation/evaluation only. [Actual report](../verification/m00-02-auth-compatibility.md): stable 1.7.19 library/adapter pinned as test-only dependencies; 190 regression/characterization tests pass. Candidate is **not adopted and not suitable as-is**: session token-at-rest/source mapping, deliberate-idle and rememberMe=false absolute lifetime fail the approved fit; freshness/real recovery/operational evidence remains open. No application authentication, owner env/database change or source/security exception. Earlier recommendation/proof-pending wording below is historical. Full M00-02 remains open; next proposed alternative architecture review is documentation only and requires approval.


## Current authentication review - 2026-11-10

[Express-owned candidate review and evidence](decisions/m00-02-express-authentication.md) recommends Better Auth for bounded fixture proof only; no final library or security/schema exception selected. One session master; custom Next UI and Express identity/Mongo boundary preserved. Source tokenHash/schema mapping, idle/absolute/freshness, MFA/recovery and pinned patch/adapter compatibility remain unresolved until evidence. No frontend independent NextAuth session, hosted account, provider spending or actual secret/env/database change. Full M00-02 remains open. Next proposed proof may install minimal pinned test dependencies only after explicit approval; M03 remains unstarted. Earlier hosted recommendations and proposal statuses are historical, not current selections.


## Current disposition - 2026-11-10

Owner **Approve and next.** approves this local contract and scoped local/test M00-02 prerequisite disposition, authorizing M06-02 only. Local implementation verified; owner acceptance pending. Normal email/outbox remains disabled; fixture-only synthetic transport and authenticated manual trigger implemented. No real provider/scheduler/account/spend/credential or owner-database apply. Full M00-02 and integration/fallback/release gates remain open. Proposal wording below is historical provenance, superseded only for this approved local scope.


## Proposed local notification/job environment contract - 2026-11-10

**Proposal only; no code or env-file changes.** [Full checkpoint](../verification/m00-02-local-notifications.md). Owner approval remains pending.

| Setting / context | Proposed local behavior | Limits |
| --- | --- | --- |
| `EMAIL_PROVIDER` | Keep `disabled` in normal development | No SMTP/API adapter, outbound mail, attempt/lease consumption or simulated sent state |
| `OUTBOX_MODE` | Future setting: `disabled` default; `local-test` only in verified test fixtures | Not implemented; reject production/staging or owner-database test activation; no automatic enablement from an email string |
| `JOB_TRIGGER_SECRET` | Future backend-only required secret when a job handler is enabled | Ephemeral synthetic tests only in initial implementation; no real value created here; no NEXT_PUBLIC, URL/query/log exposure |
| MongoDB | Reuse approved URI/replica-set ownership and existing isolated test fixtures | No install, owner data reset, dev/production index apply or backup choice |
| Test transport | Deterministic accepted/transient/permanent/uncertain outcomes for synthetic `.invalid` recipients | Test-only injection, not a hosted provider, real sink delivery or production failover claim |
| Job invocation | Manually invoke the authenticated bounded Express handler in isolated runtime tests | No system service/startup task/cron account or continuous background loop; no public unauthenticated route |
| Execution bounds | Batch 5, concurrency 1, 10-second stop-claim budget, adapter timeout 5 seconds, lease 30 seconds, max 5 attempts and delays 1/5/30/120 seconds | Proposed test defaults; actual host runtime/aggregate concurrency/retry safety must be qualified before deployment |
| Logging / evidence | Fixed codes/correlation/counts only; private synthetic fixtures kept in existing ignored directories | Never log bearer tokens, full messages, raw provider payloads, recipient email or complete notification bodies |

Do not write actual secrets to examples or the repository. A future implementation must validate flags/required secrets before mounting active execution, refuse non-test transport on the local test path and keep disabled queue work unchanged. Real sender identity, recipient eligibility binding, credentials, provider idempotency/reconciliation, actual scheduler capabilities and fallback evidence remain prerequisites before their live use. Full M00-02 acceptance is not supplied by this plan.


## M02-01 connection contract - 2026-11-08

This supersedes the earlier configuration-only/default-start descriptions below for backend startup. Express now requires a valid backend MONGODB_URI and a reachable replica set before listening. Copy backend/.env.example to backend/.env if needed; do not overwrite an existing real env file. Frontend remains independently runnable. No provider provisioning or data migration is performed.

One connection owner is constructed at backend process startup. Concurrent callers share its opening promise; successful callers reuse the connection, failures clear the promise and close the candidate for a later controlled attempt. No automatic infinite application startup retry: failure exits safely; fix the target and restart. Driver monitoring handles established topology changes. Shutdown refuses new connect calls and closes the pool after HTTP stops; a 10-second process shutdown guard prevents indefinite draining. Builds/importing the app factory do not open a database.

| Setting | Local default / allowed override |
| --- | --- |
| DB_MAX_POOL_SIZE | 5; integer 1-20 |
| DB_SERVER_SELECTION_TIMEOUT_MS | 5000; integer 100-30000 |
| DB_WAIT_QUEUE_TIMEOUT_MS | 2000; integer 100-10000 |
| Fixed driver bounds | minPoolSize 0; maxConnecting 2; connect 3000ms; socket inactivity 10000ms; idle 60000ms |
| Persistence safety | explicit dbName; bufferCommands/autoIndex/autoCreate false; hello requires replica-set identity |

Pool budget is per server, per process: up to P * S * maxPoolSize application sockets plus approximately 2 * P * S driver monitoring sockets, where P counts simultaneously alive processes (including deployment overlap/workers) and S monitored servers. One local backend/single-member set is at most about 5+2 sockets, excluding separate tools/test fixtures. Three simultaneous backend processes/three-member topology can budget up to 45 application + 18 monitoring sockets conservatively. Production topology/read preference/concurrency and capacity evidence remain unselected; these are engineering bounds, not SLA promises. No network request creates a new pool.

runTransaction uses the connected Mongoose instance, primary reads, snapshot read concern and majority writes; 5000ms commit/write-concern limits. The supported driver's convenient transaction API owns transient/ambiguous-commit handling and its approximately 120-second retry window; timeoutMS is not claimed as a working transaction deadline in this installed driver. Socket inactivity/queue/selection bounds do not form an end-to-end business latency SLA. Keep callbacks short, database-only, sequential and session-explicit; propagate errors. Never send email/HTTP or other side effects inside a callback, since it may run again. Future use cases must enforce their own bounded query/business deadlines and use durable outbox records for external work after commit. No business caller exists yet.

Mongoose 9.12.0 is now a runtime dependency. Native MongoDB 8.0.34 integration tests use an owned disposable replica set; enableTestCommands is enabled only on that owned test process for controlled failpoints, never development/production. Atlas/Docker remain URI choices; their actual credentials/network/TLS/availability are not tested or provisioned.

## Implemented M01-02 local contract — 2026-11-07

Owner-approved local continuation supersedes the older proposal-only descriptions below for this configuration slice. Backend `.env` loads through Node 24's native `--env-file-if-exists`; frontend `.env.local` loads through Next. Copy the respective `.env.example` only if customization is needed; default local servers need neither file. Real env files are ignored, examples are tracked. Shell variables override env files. Restart servers after changes; rebuild for build-time frontend settings.

- `APP_ENV`: development (local default), staging or production; separate from NODE_ENV. Hosted backend runtime requires explicit tier, APP_URL, PORT and ALLOWED_ORIGINS. APP_URL is an exact HTTP origin locally/HTTPS when hosted; PORT is 1024?65535. ALLOWED_ORIGINS is a comma-separated exact allowlist containing APP_URL; no wildcards.
- Backend `MONGODB_URI`: standard mongodb:// (native/Docker/multiple hosts) or mongodb+srv:// (Atlas). Optional until M02 connection use; requesting the database feature without it fails safely. Keep credentials backend-only. URI database and optional MONGODB_DB_NAME must agree and use aradun_development, aradun_staging or aradun_production (optional lowercase/number suffixes) for the matching tier. Empty URI database uses the matching default; hosted connections require TLS and reject insecure TLS options. Docker hostname/port must be reachable from the backend; the URI never moves data or configures replica sets.
- Frontend server `API_BASE_URL`: trusted Express origin; defaults to http://127.0.0.1:4000. `CANONICAL_SITE_URL` is required in staging/production. Staging origins cannot equal production canonical origin and the API hostname must contain a staging/preview label. No DB or auth secrets belong in frontend env files. Next's server-only boundary guards the environment reader; public settings use an explicit allowlist.
- `ANALYTICS_ENABLED=false` only until the consent/integration task. Unsupported NEXT_PUBLIC_ keys fail; NEXT_PUBLIC_API_BASE_URL, if supplied, must match the trusted API target. No public analytics ID is active. Nonproduction EMAIL_PROVIDER may only be disabled/sink and EMAIL_SANDBOX_RECIPIENT must use .invalid; no sender is implemented.
- Auth/session, mail, jobs, limiter, storage, monitoring, release and notice-version groups in the original inventory below remain feature-gated. Do not invent credentials or enable adapters from placeholder values. Required authentication/notification features currently refuse startup because implementation/selection is pending.

Origin middleware denies disallowed origins and originless unsafe methods; only existing GET/HEAD preflights are enabled. This is not authentication or a complete future CSRF policy. Development/staging frontend and the API emit noindex. Public build artifacts are checked using `npm run check:secrets`, including synthetic sentinel verification; this is targeted exposure detection, not an exhaustive secret detector.

Isolation tests exercise configuration refusals with synthetic values. No hosted resource identity/credential ownership or live preview access has been verified. Deployment must additionally provision isolated resources/credentials, resource allowlists, recipient sinks and protected previews; URI naming cannot prove that opaque credentials lack production access. M01-04/M13/M14 retain those gates. No real database connection, Docker setup, Atlas/S3 operation, backup or production readiness is claimed.

## Current environment contract review — 2026-11-07

**Proposed core contract; owner approval pending.** M00-03 is now owner-accepted; its staff/publication/CRM policies and factual owner/deadline assignments govern affected work. M01-01/M01-03 are accepted and installed/tested locally. The older no-install/not-started wording below describes its original preparation checkpoint, not current repository state. No environment file, configuration code, credential, provider resource or application change is created by this M00-02 review.

The [current provider review](provider-selection.md#current-review--2026-11-07) supplies dated public capability/cost evidence and untested fallback requirements. Local acceptance does not approve hosted subscriptions, regions, production database tiers, risk targets or unknown retention values.

### Core proposal for M01-02

| Contract | Proposed treatment / existing local value | Verification required in authorized implementation |
| --- | --- | --- |
| Environment identity | Keep framework NODE_ENV separate from APP_ENV development/staging/production; test safety uses its own strict NODE_ENV=test/run-ownership contract | Reject unknown/missing app tier where required; a production build is not proof of production environment |
| APP_URL | Frontend origin; local current service is http://127.0.0.1:3000 | Exact URL/origin parsing; no credentials/query/fragment or request-controlled destination |
| PORT | Backend port; local current service is 4000, loopback | Numeric range validation; do not repurpose frontend port or expose a LAN listener implicitly |
| API_BASE_URL | Trusted server-only Express target, local http://127.0.0.1:4000 | Fixed allowlisted target and timeout/error handling; no arbitrary Host/URL forwarding or SSRF |
| ALLOWED_ORIGINS | Exact first-party origins; local candidate http://127.0.0.1:3000 | Reject wildcard credential origins and unapproved local aliases; CORS is not authentication/CSRF protection |
| Browser/API topology | Prefer one browser origin with transport-only /api proxy/rewrite, Express owning business/auth logic | Test cookie/redirect/raw-body/header forwarding, cache isolation and direct-backend authorization; no duplicate Next business API |
| NEXT_PUBLIC_API_BASE_URL | Only explicit nonsecret public API origin/path if required by selected transport | Public allowlist, no backend secret serialization; omit unnecessary browser configuration |
| CANONICAL_SITE_URL | Owner-approved actual public canonical origin; existing aradun.com proposal is not DNS/deployment proof | Nonproduction noindex; forbid private/staging origin as public canonical; actual root-host choice before release |
| MongoDB settings | Backend-only; validate MONGODB_URI/MONGODB_DB_NAME only when DB-dependent features run | Enforce explicit per-environment target/credentials; no production connection during frontend build; native persistent dev setup belongs to affected M02 work |
| AUTH_PROVIDER and conditional auth settings | Require exactly one selected adapter only when auth is enabled; no fake production login bypass | M00-02/A5-01 selection and real session/MFA/recovery capability proof before auth installation; approved staff matrix and timeouts unchanged |
| EMAIL_PROVIDER / credentials / sender | Controlled local sink initially; real sender/key/recipient overrides only after selection | Reject nonproduction real-customer delivery; account/domain readiness and unknown-send reconciliation before sends |
| JOB_TRIGGER_SECRET / limiter settings | Secrets belong only in backend/scheduler stores when their feature is implemented | Separate per tier, bounded authenticated trigger and leases; no anonymous technical endpoint |
| Analytics/privacy settings | Explicit disabled nonproduction/default-unreviewed tracking; notice versions reflect actual reviewed practices | No PII/private-route analytics or invented consent/retention policy; missing required notice/config blocks affected public activation |
| Public settings projection | Explicit allowlist of safe values/feature state, never serialize raw process.env | Sentinel-secret tests for client bundles/DTOs; frontend build/public settings cannot contain DB/auth/email/job credentials |

This table is the proposed interpretation of the existing source 06 section 15 names, not a new global schema or permission to require unimplemented providers at startup. The full source variable inventory below remains preserved. Required feature configuration must fail closed for that feature; disabled/unimplemented features must not pretend to have succeeded. Test configuration is not a production auth adapter or a permission to weaken controls.

### Resource isolation and credentials

- Local development remains the approved separate frontend/backend architecture with native MongoDB. Actual test evidence is [M01-03](../verification/m01-03.md): official native 8.0.34, owned ephemeral loopback replica sets/databases, strict reset guards and synthetic provider doubles. Those fixtures are not a persistent development DB, hosted fallback or provider recovery proof.
- Hosted staging needs separately identified apps, database, identity application, sender/allowlisted sink, job secret and monitoring labels. A cloud backend cannot connect to the developer's loopback MongoDB. Do not use production exports, production identity credentials, customer recipients or active production schedules in previews. Protection means tested access control as well as noindex; noindex alone is not privacy.
- Production uses its own reviewed resource identifiers, least-privilege application credentials and separately authorized migration/backup credentials. Validate the actual environment-to-resource allowlist, not just a database-name suffix. If resource identity/recipient routing is unknown, fail the affected activation rather than guess.
- ARADUN's owner controls provider/billing/DNS accounts and supplies actual custodians privately. Use ignored application-local files for authorized local secrets and provider secret stores for deployments. No credentials are requested in Markdown/chat, committed in examples or copied into diagnostics. Record rotation/revocation and recovery custody before live use.
- Provider-specific SDK aliases map to the source contracts in one reviewed adapter. Existing SDK session sealing is not custom crypto; no duplicate local managed-session store is preapproved. WorkOS refresh-based idle behavior must be reconciled with deliberate staff activity before a 30-minute-idle claim; provider/sandbox proof remains open.

### Hosting, region, backup and fallback gates

Prefer co-located app/DB regions only after real customer/data-location constraints and backup/provider processing locations are approved. Singapore and Frankfurt are candidates, not selections. Render outbound ranges can be [allowlisted](https://render.com/docs/outbound-ip-addresses) for the selected region; that is not an exclusive private endpoint. Do not use a permissive network shortcut or claim private connectivity on a tier without it.

DB snapshots alone are insufficient: select compatible media/config/release recovery, restricted restore credentials, suppression handling, outbox reconciliation and actual incident ownership. M00-03 approved assigning these facts to owners/deadlines, not numeric RPO/RTO or a weaker reliability policy. Flex's public backup limitations are in the provider review; actual recovery acceptance requires an approved target and measured isolated restore. Region/backup privacy and cost remain owner gates.

Fallback matrix in provider-selection.md is explicitly **not tested** for live dependencies. M01-03 local DB/HTTP/browser tests and notification double do not satisfy real identity/mail/host/monitor/restore capability evidence. No hosted staging, authenticated job or provider SDK is implemented here. Core proposal approval, provider/account selection, operational facts and live test authorization are separate outstanding steps. M01-02 implementation is not started or declared unblocked.

## Original preparation snapshot — 2026-11-04

The original inventory/planning below is retained for provenance; current status/policy/installed-tool statements above govern where later owner decisions or implementation evidence supersede it.

Prepared: 2026-11-04 (Asia/Dhaka). **Local baseline owner-approved; external provider/production contracts remain open.** No environment file, server, MongoDB installation, replica set, credential, account or deployment has been created. This is a planning record under [M00-02](../sources/07-development-roadmap.md#m00-02), paired with [provider/version recommendations](provider-selection.md). M00-01 is owner-accepted; M00-03 and M01 remain not started. The current owner approves npm instead of pnpm, with npm Workspaces for frontend/backend and one root package-lock.json. No source makes pnpm mandatory.

## Local development now; hosted environments later

Approved package-manager structure: npm Workspaces for frontend/ and backend/, one root package-lock.json and no competing/nested lockfiles. Approved runtime family is Node 24 LTS with compatible npm. Earlier Node 24.22.2/npm 11.19.1 is a researched candidate pair; select and verify a supported compatible pair during authorized setup, without re-asking approval for the same families. Package manifests, lockfile, Git and installed tools are not created here. Frozen sources retain historical pnpm recommendations/templates; the explicit owner choice and source 08 section 5.1 allow npm without changing those documents.

The owner approves native local MongoDB with replica-set support and isolated development/test databases, the separate frontend/backend architecture, and Next 16/React 19/Express 5/TypeScript 6/MongoDB 8/Mongoose 9/Tailwind 4 families. Exact compatible patches and local implementation configuration are selected and verified only during an authorized setup task. No installation or initialization is permitted now.

The local foundation needs no paid hosting, Atlas, Auth0, transactional mail subscription, monitoring subscription or always-on paid staging. Use locally installed replica-set MongoDB, synthetic fixtures and provider doubles/sinks. These do not count as tested live-provider behavior or authorize a production auth bypass. Adopt one chosen auth adapter only before the protected feature and real sandbox tests; never implement custom passwords/MFA to avoid fees.

[Provider review](provider-selection.md#timing-dependency-gates-and-approvals) separates A (local prerequisites), B (before feature) and C (before hosted staging/production). Scenario A is owner-preferred for later planning only; no paid scenario configuration, provider, risk tolerance or spending is selected. Protected isolated staging remains required at its milestone, but may run on demand rather than incur a permanent duplicated fleet. M01-02 still explicitly depends on M00-02 and M01-04 on M01-02/03; owner approval of an initial local slice does not automatically complete those gates.

## Approved boundary and proposed topology

Approved: `frontend/` is Next.js App Router/TypeScript; `backend/` is Express/TypeScript and owns all Mongoose, business APIs, session verification, validation, authorization, callbacks and bounded work. Safe DTOs cross HTTP. Local MongoDB development is mandatory; Atlas is an optional later production candidate. No microservices, tenant framework, duplicate Next.js business API or new public page route is introduced.

**Recommend one browser origin** with a transport-only `/api/` proxy/rewrite to Express. Next.js renders pages; its hosting/framework configuration forwards HTTP without implementing business handlers. Express owns even the auth callback/session logic. Proposed public origin is `https://aradun.com`; existing source canonical/root-host decision still needs deployment verification. Backend ingress may have its own service origin but never trusts callers merely because a proxy forwarded them.

This topology is proposed because it avoids broad cross-subdomain cookies and simplifies SSR session forwarding. A later M01/M03 check must prove `Set-Cookie`, redirects, streaming, body/raw-webhook preservation, timeout limits, response headers and cache behavior. SSR forwards only necessary cookies to the fixed trusted backend, never to a request-supplied URL. Preserve secure host-only HttpOnly cookies where the chosen library supports the approved flow. Cookie mutations still need CSRF/origin defenses; CORS is not authorization. Trust forwarded headers only from actual reviewed ingress; direct backend access cannot bypass staff checks, rate limits or origin policy.

Alternative: explicit frontend/API origins with strict credentialed CORS and provider-supported cookie/SSR transport. That requires reviewed origin/callback/cookie/CSRF rules and may alter session configuration. Do not silently choose wildcard CORS, broad cookie domain or browser localStorage tokens. No new proxy service or application implementation is authorized here.

## Environment isolation matrix

| Environment | Proposed resources / data | Mail / identity / jobs | Protection |
| --- | --- | --- | --- |
| Local development | Next port 3000; Express 4000; local MongoDB development replica set on loopback; synthetic data | Provider doubles/sink initially; dedicated development identity app when approved; jobs invoked only by explicit local testing | Secrets in ignored application-local env files when authorized; no production endpoints/recipients |
| Disposable integration CI | Separate real MongoDB replica-set process and unique database/run namespace | Controlled doubles, deterministic clock where useful, no live customer messages | Refuse unknown host/account/env; no privileged secrets for untrusted PRs; cleanup only owned run data |
| Browser preview | Built apps; synthetic database/users; no production snapshots | Controlled mail sink, staging/development identity app, disabled real jobs/analytics | Authentication/access protection AND noindex; access must cover frontend and backend; noindex alone insufficient |
| Staging/UAT | Separate frontend/backend services, database credentials/project, auth app/tenant, mail token/recipient allowlist, storage and scheduler secrets | Real provider sandbox proof only to owner-controlled recipients; independent test trigger | Never connect to production DB/mail even if misconfigured; validate parsed target allowlists; protect routes and logs |
| Production | Reviewed approved artifact and explicit live DB; dedicated credentials | Verified sender/mailbox, approved identity policy, bounded scheduled outbox and named alerts | HTTPS, least privilege, controlled network, redacted logs, backups and explicit release authorization |
| Recovery rehearsal | Isolated restore target with restricted access and independent secrets | Scheduler and external sending disabled initially; reconcile ambiguous sends before resuming | Apply approved deletion/suppression ledger; restore test never overwrites production as a convenience |

`NODE_ENV=production` is a framework/build mode and may also apply to staging. `APP_ENV` controls the actual deployment tier. Do not infer live-data access from a build mode. Each app has its own environment loading/validation; Express does not inherit Next.js env loading. Build/render must not mutate or require a live production database merely to build configuration errors.

## Approved native local MongoDB approach — task authorization before setup

Within the owner-approved MongoDB 8 family, retain the researched **8.0.34 Community** candidate (reconfirm current download/checksum before install; refresh timed out during the final review) from the [official download](https://www.mongodb.com/try/download/community), plus supported `mongosh` and MongoDB Database Tools, with exact tool versions/checksums confirmed at setup. Compass is optional. Check [versioned Windows 8.0 installation requirements](https://www.mongodb.com/docs/v8.0/tutorial/install-mongodb-on-windows/) against the actual OS; no unsupported Windows/WSL configuration is assumed. Mongoose 9.11.4 supports MongoDB 8.x in the [official matrix](https://mongoosejs.com/docs/compatibility.html). Native Windows installation is the first candidate. Versioned MongoDB 8.0 documentation explicitly says WSL is unsupported; do not propose WSL as a supported fallback. If necessary use supported native Windows or a supported Linux system/VM after reviewing local host/network implications. Docker is not a prerequisite. Previous nonprivileged host inventory was x64/build 26200/25H2 with a legacy registry ProductName label; [Microsoft release information](https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information) maps the 26200 family to Windows 11 25H2. Confirm actual edition/build at installer review; no OS change or elevated query is attempted.

At authorized M01/M02 setup, the proposed sequence is:

1. Verify OS/architecture/disk permissions, existing MongoDB services and ports. Preserve any existing data; never convert or overwrite an unknown database blindly.
2. Review the signed installer/tool checksums and configuration. Choose a dedicated data/log location outside the repository and frontend public assets. No directory or service is created now.
3. Configure a single-member **development** replica set with proposed name `rs0`, bind to loopback only, and use a stable member hostname resolvable by the actual Node process. Do not mix native/VM/container hostnames without connection tests; WSL is not the supported MongoDB server fallback.
4. Prefer local authentication with a least-privilege development application user; replica-set internal authentication requires an appropriately protected keyfile/X.509 setup. Keep bootstrap credentials/keyfiles outside Git and expose no LAN listener. Exact paths/account setup are deferred to authorized setup; no real credentials in this document.
5. Verify primary election/replica-set name, connect through Mongoose, and prove transaction commit/abort, unique indexes and failure behavior. A running standalone server or mocked driver does not meet the test contract. Single-member local replication provides transaction semantics, not availability or a backup.
6. Keep development and disposable test data separate. Recommend a separate test process/port (for example 27018) and database per run rather than tests resetting the developer database. Confirm host, port, replica-set name, app environment and explicit test-run marker before any destructive fixture operation; a `_test` suffix alone is insufficient.

Source's nonsecret illustrative target: `mongodb://127.0.0.1:27017/aradun_development?replicaSet=rs0`, with `MONGODB_DB_NAME=aradun_development`. This is not an active connection string and omits authentication deliberately; an authenticated setup needs its own secret-store URI/authSource after creation. It is never copied to frontend env. Changing to Atlas later changes URI/credentials/TLS/network configuration, not approved model/index/relationship ownership. No Atlas account is needed locally.

## Configuration ownership and feature timing

The full proposed R6 variable inventory below is preserved from source 06 section 15. These are **names/contracts, not values, credentials, activated features or already implemented validation**. Chosen SDK-specific aliases map to these contracts in one reviewed adapter; do not configure competing providers. `frontend/.env.local` is for frontend URLs/presentation/public analytics; `backend/.env` owns secrets. Example files will contain names and safe placeholders only when M01 authorizes them. `.gitignore` remains unchanged in this task; protect env/key/data/log files before any secret exists.

Required/conditional status is per feature: core URL/environment settings at M01; DB settings at M02; identity at M03; email/job settings at M06; optional uploads/Calendar only if their existing gate is selected. Missing required configuration must fail closed for that feature, not fabricate successful persistence or a zero dashboard. Never use `NEXT_PUBLIC_` for secrets. A public build-time value requires a rebuilt frontend when changed; an explicit server-derived safe projection is preferable where practical.

| Variable | Purpose | Need / environments | Exposure / secret | Configuration owner |
|---|---|---|---|---|
| `NODE_ENV` | Framework execution mode | Framework-managed D/S/P; production build mode may also be used in preview | Server; no | Runtime, not repurposed as deployment tier |
| `APP_ENV` | Explicit development/staging/production behavior | R D/S/P | Server; no | Local env/deployment project |
| `APP_URL` | Validated actual origin for links/origin policy | R D/S/P | Server; no; safe derived origin allowed | Local/deployment config |
| `CANONICAL_SITE_URL` | Approved public canonical origin | R S/P; production indexing only on P | Public-safe derived value; no | Deployment config; default proposal https://aradun.com |
| `ALLOWED_ORIGINS` | Explicit trusted first-party origins | R public writes in D/S/P | Server; no | Reviewed environment config; no wildcard credential origins |
| `API_BASE_URL` | Trusted Express base URL for Next.js server-side requests | R D/S/P | Frontend server; no credentials in URL | Environment config; never derived from arbitrary request input |
| `NEXT_PUBLIC_API_BASE_URL` | Public API URL only if browser uses a separate origin; relative proxy path otherwise | C D/S/P | Public; never secret | Match selected deployment topology |
| `PORT` | Express listening port | R backend D/S/P | Backend; no | Host environment; local port distinct from Next.js |
| `MONGODB_URI` | Local development replica-set URI; selected deployment URI later | R DB features D/S/P | Backend only; secret | backend/.env or deployment secret store; never frontend |
| `MONGODB_DB_NAME` | Explicit isolated database target | R D/S/P | Server; no | Environment config; distinct synthetic/test/live datasets |
| `MONGODB_MAX_POOL_SIZE` | Deployment-specific pool budget | C override D/S/P after load review | Server; no | Operational configuration; validate positive bounds |
| `AUTH_PROVIDER` | Selected auth adapter key | R auth D/S/P | Server; no | Provider ADR/config |
| `AUTH_SECRET` | Provider/library session/signing secret if required | C selected adapter D/S/P | Backend; secret | Secret store; separate per environment |
| `AUTH_ISSUER_URL` | Trusted identity issuer | C selected provider D/S/P | Server; no | Verified provider config |
| `AUTH_CLIENT_ID` | Identity application identifier | C provider D/S/P | Server by default; public-safe only if provider requires | Provider config |
| `AUTH_CLIENT_SECRET` | Confidential auth client credential | C provider D/S/P | Backend; secret | Secret store |
| `AUTH_WEBHOOK_SECRET` | Verification credential if auth webhook chosen | C D/S/P | Backend; secret | Provider secret store |
| `EMAIL_PROVIDER` | Selected transactional adapter | R notification feature D/S/P | Server; no | Config; local fake/controlled sink permitted |
| `EMAIL_API_KEY` | Selected provider send credential | C live sending S/P and opt-in D | Backend; secret | Secret store; restricted send scope |
| `EMAIL_FROM` | Verified sender identity | R live sending S/P | Server; not secret | Verified domain/provider config |
| `EMAIL_REPLY_TO` | Approved working reply mailbox | C live sending | Server; not secret | Operational config; selected hello@ must be verified |
| `EMAIL_SANDBOX_RECIPIENT` | Nonproduction delivery override | R when S/D uses real provider | Server; private contact | Nonproduction config; prevent real customer sends |
| `EMAIL_WEBHOOK_SECRET` | Signed delivery callback verification | C selected callback S/P | Backend; secret | Provider secret store |
| `JOB_TRIGGER_SECRET` | Authenticate bounded notification worker trigger | R scheduler S/P; local test equivalent | Server; secret | Scheduler/deployment secret store |
| `RATE_LIMIT_HASH_SECRET` | Keyed pseudonymous limiter identifiers | R shared abuse limiter | Backend; secret | Secret store; rotation/migration documented |
| `STORAGE_PROVIDER` | Selected optional asset adapter | C uploads/private hosted assets D/S/P | Server; no | Storage ADR/config |
| `STORAGE_BUCKET` | Environment-specific asset container | C storage D/S/P | Server; no | Deployment config |
| `STORAGE_REGION` | Selected storage region | C provider | Server; no | Region/privacy decision |
| `STORAGE_ENDPOINT` | Approved service endpoint when required | C provider | Server; no | Allowlisted config, never user input |
| `STORAGE_ACCESS_KEY_ID` | Storage identity when static credentials are required | C; prefer supported workload identity | Server; credential identifier | Secret store |
| `STORAGE_SECRET_ACCESS_KEY` | Matching storage credential | C static credential strategy | Backend; secret | Secret store; separate public/private privileges |
| `PUBLIC_ASSET_BASE_URL` | Approved public asset origin | C external public asset hosting | Public-safe derived value; no | Config + image-origin allowlist |
| `MONITORING_DSN` | Selected error ingestion endpoint | C provider S/P | Server default; public DSN separately allowlisted if needed | Monitoring config; DSN semantics provider-specific |
| `MONITORING_AUTH_TOKEN` | Release/source-map upload authorization | C CI only | Secret; never runtime browser | CI secret store |
| `RELEASE_ID` | Source/release correlation | R release S/P | Server; public-safe if intentionally surfaced | CI-generated immutable identifier |
| `LOG_LEVEL` | Bounded structured log verbosity | O D/S/P | Server; no | Config; production never logs raw bodies |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Public GA4 property identifier | C public analytics after consent setup | Browser; not secret | Build config; separate nonproduction property/disabled default |
| `ANALYTICS_ENABLED` | Environment-level analytics switch | R explicit S/P setting | Server with safe boolean projection; no | Production off until policy/config verified; preview off |
| `PRIVACY_NOTICE_VERSION` | Current approved notice reference | R before public intake launch | Public-safe; no | Reviewed configuration/source release |
| `MARKETING_NOTICE_VERSION` | Optional opt-in notice version | C marketing opt-in enabled | Public-safe; no | Reviewed policy configuration |
| `CALENDAR_PROVIDER` | Selected scheduling adapter | C D-003 promotion/P2 | Server; no | Scheduling ADR |
| `CALENDAR_ID` | Authorized calendar identity | C live scheduling | Server; private operational value | Provider config |
| `CALENDAR_CLIENT_ID`, `CALENDAR_CLIENT_SECRET` | OAuth integration identity/credential if selected | C integrated calendar | Server; client secret secret | Provider app + secret store |
| `CALENDAR_REFRESH_TOKEN` | Dedicated account token only if chosen auth model requires it | C live integration | Backend; secret | Secret store; no visitor tokens in source/env |
| `CALENDAR_WEBHOOK_SECRET` | Provider-specific callback verification if supported/required | C integration | Backend; secret | Provider secret store; never assume generic signing support |
| `BOOKING_URL` | Approved external scheduler URL if that mode selected | C external mode | Public-safe; no | Source/deployment config; linkage still decision |

Operational values still requiring selection: exact callback/origin URLs, MongoDB pool/timeouts, session policy, rate thresholds, retry limits, schedule, recipients, alert owners and retention. Do not invent broad arbitrary environment flags for source-owned roles/pipeline or enable conditional screens from an undocumented toggle.

Proposed safe nonproduction settings: `APP_ENV=development` or `staging`; correct per-tier APP_URL/ALLOWED_ORIGINS; `ANALYTICS_ENABLED=false`; fake/controlled EMAIL_PROVIDER; no production URI/key/recipient. At production, analytics stays disabled until D-014/notice/consent validation. Source-controlled operational settings and the selected SDK configuration must make scheduler/sending disabled during recovery, without inventing an unapproved generic configuration framework.

## Credentials, session boundary and account ownership

The owner holds billing/domain/provider recovery ownership; the developer receives narrowly scoped operational access. Confirm actual people, independent recovery channel and backup operator before provisioning. Require MFA for infrastructure administrators; do not equate that recommendation with closing the D-009 staff policy. Use a password manager and provider secret stores; no tokens in chat, screenshots, tracking URLs, source, local diagnostic logs or client bundles.

| Credential class | Recommended separation / lifecycle |
| --- | --- |
| Development, staging and production | Different credentials/applications/projects and exact target allowlists; staging credentials cannot address production |
| DB runtime | Minimal required collections/operations, bounded pools; no cluster admin/index/drop privileges by default |
| Migrations/indexes/backups | Separate time-bounded operational access and reviewed change/restore target; never ordinary runtime credentials |
| Auth/session | Library-generated secret through approved storage; issuer/client/audience/callback allowlists; rotation/sign-out consequences reviewed; no custom encryption implementation |
| Transactional email | Environment-specific sender token and explicit nonproduction recipient override; verified domain; suppression and delivery correlation |
| Scheduler | Independent bearer credential in request headers, not query string; short bounded request; rotate with overlap/rollback procedure |
| Monitoring/source maps | Restricted server/CI upload token; source maps not publicly exposed; ingestion DSN treated according to actual vendor semantics |
| CI/preview | No production credentials for PR code; trusted release path only; no provider account access inferred from GitHub Actions direction |

Rotate on suspected exposure/offboarding and on a documented operational cadence, with overlap and rollback when supported. Numeric rotation intervals and retention remain policy choices, not fabricated universal compliance rules. Validate redaction for authorization/cookie headers, identity tokens, DB URI, form content, email/phone, private drafts and payment notes. Structured logs should retain event name, correlation/release ID, safe error code and bounded operational context, not raw request/response payloads. Audit data and general logs have different owners/retention requirements.

Express always rechecks current local staff authorization; managed identity proves who signed in, not what records they can see. Use the selected provider's maintained server SDK/session flow with secure HttpOnly cookies, issuer/audience validation and protocol-appropriate state/nonce/PKCE controls. OIDC is one candidate flow, not an implicit Auth0 selection; WorkOS session helpers must also be verified at the Express boundary. Session timeouts, MFA factors, recovery workflow, revocation semantics, last-admin protection and role/publish matrix are **M00-03 choices**, not selected environment values. No StaffSession collection or user record is created here.

## Production network, monitoring and resilience

Recommend same-region apps/DB and TLS, least-privilege Atlas network/user controls, and measured per-instance pools. Confirm actual egress ranges from the selected service, including deployment changes; provider-shared IP ranges are not exclusive identity. If private/static egress is required by the chosen threat model, quote it before approval. No permanent all-network allowlist or plaintext hosted database connection. Keep private responses no-store and never shared-cache per-user authorization.

Monitoring must cover public availability, backend readiness without leaking internals, DB connectivity/pool pressure, outbox oldest pending/dead-letter count, trigger heartbeat, bounced/uncertain mail, and backup age/restore failures. Source availability/performance numbers are not verified SLAs. Choose an independent alert route, define coverage and check a real test alert at M01/M13; no live checks were run today.

Recommended scheduler candidate: a five-minute authenticated UTC Render trigger calling Express, with short bounded leased batches. Backoff, concurrency, pending-age threshold and actual request duration require M06 acceptance; the trigger service is not a new worker application. In-memory timers alone lose retry reliability on restart. Worker/provider reconciliation is especially necessary after a restored outbox; never replay every restored delivery blindly.

## Backup and restore profile — recommendation, not achieved SLA

Source 11 section 16 proposes a production profile of **RPO <=1 hour** and **critical intake/staff RTO <=4 hours including detection under agreed operator coverage**. Recommend evaluating that profile with Atlas Dedicated cloud backup/PIT and explicit restore capability; owner must accept cost, data location and realistic coverage. [Atlas cloud backup documentation](https://www.mongodb.com/docs/atlas/backup/cloud-backup/overview/) identifies M10+ support, not an automatic promise that backup/PIT is enabled or included in the headline compute price.

Retain source R11's proposed PIT window 7 days, daily snapshots 14 days and weekly snapshots 4 weeks as an **unapproved policy candidate**. Confirm regional/tier support, charges and D-014/A5-09/13 retention before configuring. Flex is a separate budget profile with daily-backup recovery (source proposal: RPO <=24 hours and RTO <=1 business day), not a substitute that meets the one-hour profile. No new data-loss/uptime commitment is made.

| Recovery item | Required plan / later evidence |
| --- | --- |
| MongoDB | Backup/PIT configured and billed deliberately; monitor recoverable-point lag, not just last job success; restore into an isolated target and measure source RPO/RTO at M13-03 |
| Source/public assets/releases | Reviewed remote Git/artifact plus an independently recoverable export after Git is authorized; Git is not a database backup |
| Private/uploaded assets | Controlled source references initially; if uploads selected, version/backup bytes and manifest separately; DB references alone do not recover files |
| Auth/domain/mail/provider configuration | Record owners, recovery access and supported configuration exports; secrets encrypted separately; provider support dependency remains a residual risk |
| Privacy deletion | Apply approved restricted suppression ledger to restored DB/files/provider copies; retention/format selected under A5-13, not a new collection chosen here |
| Outbox and external effects | Freeze sending during restore, reconcile provider IDs/unknown outcomes, then resume bounded work; no assumed exactly-once external delivery |

A single local development replica set, a snapshot success message, a provider uptime statement, or a staged restore plan is not proof of operational recovery. No export, restore, backup job or production data access was performed. Local synthetic data can be recreated; any valuable developer-authored content needs controlled backup outside Git secrets, not copied live customer datasets.

## Decisions due and later work

- **A / local baseline approved:** npm Workspaces/root package-lock.json, Node 24 LTS and approved core families, native local replica-set MongoDB with isolated dev/test, separate apps and no paid subscription prerequisite. M01-01 planning prerequisites are satisfied; execution authorization is still required. Verify supported patches/peers and local paths/config during authorized setup, not by re-requesting family approval.
- **B / before affected feature:** select auth/SDK and M00-03 policy before M03; email/trigger before M06; uploads/editor before M08. Required real sandbox/fallback evidence is not replaced by doubles.
- **C / before hosted staging/production:** choose tiers/regions/egress, commercial preview protection, credential/alert ownership and budget, and approve recovery/retention capabilities before their owning milestone. Scenario A is preferred only; its providers/tiers and all B/C configurations remain unselected. No earlier $300 ceiling, region or recovery concession is approved.
- **Roadmap guard:** M01-02/M01-04 hard prerequisites remain in force. M01-01 depends on accepted M00-01 and relevant local decisions, now approved, so it may be separately authorized. M01-02 still explicitly depends on M00-02 and M01-04 on M01-02/03; do not bypass those gates or treat this message as execution authorization.
- **Owner + developer/M00-03:** staff MFA/recovery/session/permission policy; commercial/booking/finance/FAQ/editor selections; privacy/retention/deletion policy and actual business readiness. Do not execute those tasks now.
- **M01/M02/M03/M06:** authorized install/configuration, peer/build/lint checks, real MongoDB transaction tests, provider MFA/session/revocation/sandbox proof, trigger/email/fallback tests. None has run.
- **M13/M14:** measured restore/security/release qualification and separately authorized production launch. No procurement/account creation or data operation is implied by planning approval.

No source file is amended. Review [M00-02 preparation evidence](../verification/m00-02.md) before treating these proposals as final task acceptance.

## Cost profile and recovery selection

See the [three-scenario comparison and arithmetic](provider-selection.md#complete-cost-arithmetic). Local provider subscriptions are $0. Scenario A proposes managed Flex daily recovery and quota-limited free auth/email/uptime with on-demand protected staging; B retains the prior managed/PIT profile; C adds replicas, stronger recovery arrangements and quoted support needs. The operator must still approve class retention, snapshot location, tolerated data loss, detection/cover and measured restore results. A is not acceptable if a one-hour recovery point or unsupported private networking is required. Flex backups start after 24 hours; initial backup/restore proof must exist before public launch.

No `.env`/example file, credential, application, infrastructure configuration or database is created by these contracts. The environment-variable inventory above remains exactly the source 06 proposed inventory; SDK aliases will be selected in a reviewed adapter only when its feature is authorized.

## Approval evidence and checklist handoff

The current owner message **ARADUN — Approve Local Development Baseline and Continue M00** approves only the listed local families/approach, not exact historic pins, providers, spending, relaxed privacy/availability/backup targets or execution. Record date: 2026-11-04 (Asia/Dhaka). The [M00-03 checklist](decisions/m00-03-checklist.md) is preparation only. Its policy/provider-related decisions stay open until the owner reviews them; no M00-03 or M01 has started.
