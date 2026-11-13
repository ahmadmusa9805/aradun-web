# M00-02 infrastructure and technology decision review

## Current owner amendment: Resend integration - 2026-11-12

Owner selects Resend for transactional application email and supplies its four backend-only configuration variables. Prior deferral applies historically; Zoho remains the existing human inbox. Local adapter/outbox binding and nonproduction fixed-inbox isolation implemented; credentials format validated without disclosure. Existing owner configuration remains disabled; no provider/account/spend/live send or production activation. [Current implementation and exact operational gates](../verification/resend-integration.md). No hosted region, retention/recovery, real staff identity or release approval invented.

## Automated email deferred by owner - 2026-11-12

Owner will manage sender arrangements and provide details later. Do not configure Zoho mailbox SMTP for automated form mail or select a replacement now. Zoho Mail remains the existing inbox only; [usage policy](https://www.zoho.com/mail/help/usage-policy.html) excludes automated/transactional mail. No delivery activation, account, cost or credential change. Direct public mailto assistance remains available.

## Existing business email: Zoho Mail - 2026-11-12

Owner confirms the existing aradun.com mailboxes are hosted by Zoho Mail. No new account/provider or spending selected. This does not select Zoho ZeptoMail or establish SMTP access, account region, plan limits, credentials or actual application delivery. Verify those details for the next authorized email-integration task; preserve disabled application mail until then.

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


## Local notification/job checkpoint - 2026-11-10

**PROPOSED; owner approval pending.** The current owner command accepts verified M06-01 and authorizes this documentation checkpoint only. It does not select a provider or authorize worker code. [Review packet and exact next approval](../verification/m00-02-local-notifications.md).

Recommended local execution contract:

- Preserve `EMAIL_PROVIDER=disabled`; normal application processes perform no external SMTP/API/mail calls and do not consume/mark delivery work as sent while disabled. Existing `sink` configuration text is not proof of an implemented sink adapter.
- Implement the source OutboxEvent/worker under M06-02 with a deterministic transport double only in `NODE_ENV=test`, `APP_ENV=development` and verified owned disposable MongoDB fixtures. Synthetic `.invalid` recipients only; simulated outcomes are test evidence, never real delivery/provider fallback evidence.
- Keep work in the existing Express backend and MongoDB; no queue service, daemon, Redis, Docker, dependency or paid platform is proposed.
- A manual local HTTP client exercises a backend-only authenticated job trigger. Proposed `POST /internal/jobs/outbox/run` accepts no user recipients/filters/templates; configured bearer secret checked before database/worker access. Keep browser Origin/CORS restrictions intact; machine authentication is a narrow separate handler, not a general POST exception.
- Proposed local engineering limits: five events/batch; one in-flight attempt per invocation; stop-claim budget 10 seconds; adapter timeout 5 seconds; lease 30 seconds; five attempts including the initial attempt; transient delays 1/5/30/120 seconds. The budget limits new claims, not a fictitious hard cancellation guarantee. Fencing/uncertain-outcome handling remain mandatory. These are test defaults, not production SLA/capacity or retention choices.
- No actual backend secret/environment file, network sender or scheduler is configured by this checkpoint. Implementation tests may use ephemeral in-memory synthetic tokens; real deployments need separate credential custody/rotation and scheduler integration approval.

**Proposed scoped dependency disposition:** if the owner approves this packet and explicitly proposed M06-02 plan, the accepted local contract satisfies only the local/test portion of M06-02's M00-02 prerequisite. Full M00-02 and real email/scheduler integration remain open. This does not amend source files or waive provider capability/fallback, privacy, security, monitoring or release evidence. Until that approval M06-02 remains gated.

No external provider research, price calculation, account, purchase, actual recipient/mailbox or scheduling commitment is introduced. Existing owner directions below still govern their subjects; older commercial candidates are historical, unselected proposals.


## Current owner direction — 2026-11-07

The owner approves local continuation and MongoDB URI portability, not external providers or spending. Stop cost/provider shopping. Earlier capability/cost recommendations below are historical proposals, not selections. No hosted identity service is selected: use custom login with Express-owned email/password authentication and maintained libraries, selected before M03. Hosting, staging, mail, monitoring and recovery selections remain due before their affected integration/deployment gates. See [current decision amendment](../../DECISIONS.md#current-owner-amendment-and-m01-02-authorization--2026-11-07).

## Current review — 2026-11-07

**Provider selection proposal prepared; owner selections and live capability/fallback evidence pending.** M00-03 is now owner-accepted by the latest **Approve and next.**, following its final planning assessment and the explicit M00-02 review proposal. M01-01/M01-03 and the local technology baseline remain accepted. No provider account, purchase, installation, credential or deployment is authorized by this review. Scenario A remains preferred, not automatically selected.

The source 07 task requires A5-01/08 and D-020 outcomes before affected installation and a tested fallback for each essential external dependency. This review supplies current public evidence and a concrete candidate; it does not turn public documentation or M01-03 provider doubles into account/sandbox proof. M01-02's source dependency is not waived.

Installed/verified local pins carried forward, not upgraded in this review: Node 24.22.2/npm 11.19.1, Next 16.4.5, React 19.3.1, Express 5.3.0, TypeScript 6.0.3, Tailwind 4.3.4, backend test Mongoose 9.12.0/Zod 4.6.7 and native test MongoDB 8.0.34. [M01-03 evidence](../verification/m01-03.md) records actual peer/install/build/test results. No provider SDK is installed/pinned before its selection and affected capability review.

### Recommended candidate and alternatives

| Area | Proposed cost-conscious choice, not adopted | Evidence and capability gate |
| --- | --- | --- |
| Identity | WorkOS hosted AuthKit with official Node SDK sessions in Express; invite-only, local active StaffUser checks; hosted TOTP within approved factor policy | [Pricing](https://workos.com/pricing) lists AuthKit free up to 1 million users. [Hosted MFA](https://workos.com/docs/authkit/mfa) is TOTP; Required excludes SSO users. Do not enable an SSO bypass; prove enforced MFA and real recovery before selection is final |
| Session policy | Preserve approved 30-minute idle / 8-hour absolute / 5-minute fresh-auth policy without custom credential cryptography | [Session settings](https://workos.com/docs/authkit/sessions) expose maximum lifetime/inactivity; inactivity follows refresh activity, not necessarily deliberate user activity. [Reauthentication](https://workos.com/docs/authkit/reauthentication) exposes auth_time/max_age; active authentication updates auth_time, refresh does not. Exact settings, polling behavior and Express enforcement need sandbox proof |
| Identity fallback | Auth0 with a separately verified MFA/session/recovery-capable tier if WorkOS fails the policy/capability gate | [Auth0 pricing](https://auth0.com/pricing) and [MFA entitlements](https://support.auth0.com/center/s/article/Entitlements-for-Enterprise-MFA-Feature) are tier-dependent. Earlier $35 examples are not a verified quote for ARADUN's policy. No second adapter or custom passwords/MFA are installed |
| Transactional mail | Resend Free if measured volume fits; Resend Pro on approved need | [Current pricing](https://resend.com/pricing) lists 3,000/month and 100/day free, or $20/month for 50,000 with no daily limit. Count acknowledgement plus staff-recipient messages, not just inquiries. Verify sender domain, approved recipients, privacy and delay alarms before real sends |
| Mail alternative | Postmark Basic after explicit approval if required | [Current pricing](https://postmarkapp.com/pricing) lists $15/month at the 10,000-email selector; Developer is only 100/month. No automatic failover after an uncertain send; reconcile provider outcome first |
| Frontend/backend host | Two separate paid Render Node web services; initially price 512 MB each, increase on measured memory need | [Pricing](https://render.com/pricing) lists $7/month per 512 MB service and $25 per 2 GB service. Next requires a server for the approved dynamic paths; do not substitute a static-only/free production design. [Free services](https://render.com/docs/free) spin down when idle, so they are not the proposed live availability baseline |
| Production MongoDB | Atlas Flex only if owner-approved workload/recovery/privacy needs fit; otherwise Dedicated with actual backup/PIT quote | [Pricing](https://www.mongodb.com/pricing) lists $0.011/hour starting Flex and up to $30/month. [Limitations](https://www.mongodb.com/docs/atlas/reference/flex-limitations/) include no PIT/continuous backup or private endpoints; managed patch versions are not a user-pinned local executable. No production tier is selected |
| Backups/recovery | Choose DB/media/config/suppression recovery as one plan; no numeric RPO/RTO selected | [Flex backups](https://www.mongodb.com/docs/atlas/backup/cloud-backup/flex-cluster-backup/) start after 24 hours, retain eight daily snapshots and cannot provide on-demand/finer-grained policy. Singapore snapshots are described as stored in Asia, not proven Singapore-only residency. Use Dedicated if the approved requirements need capabilities Flex lacks; measure actual restore |
| Uptime/error/logging | UptimeRobot Free candidate plus redacted host logs and a separately verified Sentry Developer/error-tracking entitlement | [Official UptimeRobot help](https://help.uptimerobot.com/en/articles/11604710-who-should-use-uptimerobot-s-free-plan) permits commercial use with 5-minute checks. Sentry's [official legacy-plan notice](https://www.sentry.help/en/articles/16738709-changes-to-legacy-developer-plans-september-2026) confirms that legacy Developer remains free; it does not establish this new account's quotas. Main pricing fetch failed; do not invent limits or treat the error-alert gate as passed |
| Jobs | One Render cron triggering bounded authenticated work in Express; Mongo lease/outbox remains authoritative | [Cron documentation](https://render.com/docs/cronjobs) specifies a $1/month minimum, UTC schedules, delayed overlapping scheduled runs and cancellation on manual retrigger. Host scheduling is not sufficient fencing; leases/retries/unknown-send reconciliation stay in Express. No workflow platform/Redis/worker service added |
| Region | Singapore candidate; Frankfurt/US alternatives depend on real customers, jurisdiction and transfer requirements | [Render regions](https://render.com/docs/regions) includes Singapore/Frankfurt; Atlas Flex supports only selected provider regions. Actual provider/account availability, mail/auth/telemetry processing and backup locations require owner review; no residency/compliance inference from a host region |
| Staging | Protected, isolated hosted staging on demand; persistent only if actual workflow/availability needs it | Separate app/DB/auth/mail/job resources and access control are mandatory when hosted staging is used. Provider protection entitlements and actual cost need verification. Cloud staging cannot use the developer's loopback database. Local native Mongo/CI fixtures are separate, not proof of hosted isolation |

WorkOS Express integration must use the [official Node SDK](https://github.com/workos/workos-node) and its [session implementation](https://raw.githubusercontent.com/workos/workos-node/main/src/user-management/session.ts); do not assume a Next-only SDK is the backend adapter. The guessed /docs/authkit/express URL was unavailable. SDK-controlled cookie sealing/validation is not permission for custom encryption or a duplicate managed session database. Callback/origin/cookie transport, immediate local revocation and last-Admin/all-factor recovery still require real evidence.

WorkOS documented settings make it a plausible candidate, not a proven policy match. Especially verify that background requests/token refresh do not defeat deliberate-activity idle expiry, that 8-hour expiry is absolute, and that sensitive mutations require active authentication within 300 seconds. Hosted MFA's SSO exception must not bypass the all-staff requirement. Factor-loss/sole-Admin recovery remains a blocking capability test, not a promise that a provider dashboard reset satisfies policy. If enforcing this requires an extra local session store or policy change, return for explicit architecture/security approval rather than silently adding one.

### Current cost arithmetic and exclusions

USD public planning snapshot, checked 2026-11-07; no account-specific quote or spending approval. At an illustrative 730-hour month, Flex's $0.011/hour starting price is $8.03. A lower-volume base of two $7 web services + Flex $8.03–30 + one $1-minimum cron is **$23.03–45/month**, or **$276.36–540/year** using 12 times monthly. This is a component subtotal, not a complete approved operating budget.

If both app services need 2 GB and mail needs the cited $20 tier, the corresponding subtotal is **$79.03–101/month**. Actual cron runtime can exceed its minimum. Staging, monitoring entitlements/overages, backup additions, domains, bandwidth/build usage, seats, taxes/FX, support and account eligibility are extra/unverified. Paid auth fallback or Dedicated/PIT changes the subtotal and requires a new quote. No free-tier/512 MB/recovery assumption may override mandatory security, privacy, availability or performance. Published limits must be checked again at actual installation/procurement.

### Essential-dependency fallback evidence register

| Dependency | Proposed safe fallback / required rehearsal | Current evidence |
| --- | --- | --- |
| Auth/session | Deny private access when required identity/session assurance cannot be established; keep independent public functionality available where its own dependencies work. Rehearse outage, expiry, stale role/revocation, MFA/freshness and recovery with the selected SDK/tenant | Public docs only; no account, adapter or outage/recovery test. **Not tested** |
| Email | Persist required outbox state with intake; show saved-with-email-delay truthfully; reconcile accepted/failed/unknown outcome before authorized retry/alternate provider | Resend [idempotency documentation](https://resend.com/changelog/idempotency-keys) gives a 24-hour window; it does not guarantee exactly-once across long retries/providers. Existing local double is not real delivery/fallback proof. **Not tested** |
| Host/app | Recreate exact app/config release on an approved isolated target and exercise public/private health/error behavior | Local builds/browser tests exist; no hosted failover/protected staging rehearsal. **Not tested** |
| Production DB/backups | Stop uncommitted writes safely; restore compatible DB/media/config into an isolated target, apply suppression and reconcile outbox before access/sends | M01-03 proves local transactions/index/reset safety, not Atlas restore or production fallback. **Not tested** |
| Scheduler | Use a controlled authenticated manual trigger with the same lease/idempotency controls; rehearse cancellation/overlap, stale lease, delayed send and outage alarms | Host behavior documented; business job/outbox/trigger not implemented. **Not tested** |
| Monitoring | Verify independent uptime/error/queue-age alerts reach the real custodian; exercise monitor/notification failure and approved operational cover | Public eligibility only; actual recipients, quotas, delivery and cover unknown. **Not tested** |

No fallback rehearsal is fabricated to close the task. No live failure injection is authorized against a provider or production. Actual test credentials/custodians and account access must be supplied through approved private mechanisms at the affected gate, never in these records. Documented fail-closed behavior and a test plan are not completed fallback evidence.

### Decisions requested and acceptance status

1. Approve/revise WorkOS and Resend as **candidates for controlled capability evaluation**, with the exact security/volume conditions above. This is not final provider selection, account-creation authority or a security-policy exception.
2. Approve/revise the [core environment contract proposal](environment.md#current-environment-contract-review--2026-11-07), including same-origin transport-only proxy preference and strict feature-conditional configuration. No env file/code is created in M00-02.
3. Provide a real spending ceiling, region/data-location constraints and recovery expectations before hosted choices are locked. Choose the host/DB/monitoring/staging profile only after its actual capability/cost envelope is accepted. No guessed RPO/RTO, operating jurisdiction or billing permission is inferred.

**M00-02 remains incomplete:** approved local baseline is implemented; current public research/recommendations are refreshed; provider/environment selections and essential external fallback tests remain unapproved/unperformed. Source acceptance is not met in full and M01-02/M01-04 dependencies remain. Next checkpoint is owner review of these candidate/contracts and authorization for precisely bounded capability evidence, not automatic service signup or application development.

## Earlier review snapshot — 2026-11-04

The following sections preserve earlier candidate/scenario arithmetic and delivery-time status. The current review above supersedes their setup/status/security-policy statements and current price assumptions where different. They do not override M00-03 acceptance, implemented local test tooling or pending provider selection.

Reviewed: 2026-11-04 (Asia/Dhaka). **Local development baseline owner-approved; M00-02 overall acceptance pending.** M00-01 remains owner-accepted. The owner approves npm Workspaces/one root package-lock.json, Node 24 LTS, Next 16, React 19, Express 5, TypeScript 6, MongoDB 8, Mongoose 9 and Tailwind 4 families, native local replica-set MongoDB with isolated development/test databases, separate frontend/backend apps, and no paid subscription prerequisite for local development. Supported compatible patches are selected and verified during authorized implementation, not treated as already installed/tested. Scenario A is the owner's preferred launch candidate only, not a provider choice, risk/retention approval or spending authorization. No installation, initialization, accounts, purchases, application code, M00-03 or M01 is authorized by this review.

Canonical companion: [environment.md](environment.md). See [decisions](../../DECISIONS.md), [progress](../../PROGRESS.md), and [review evidence](../verification/m00-02.md). This revision replaces the earlier single managed-profile recommendation: Auth0 Essentials, Dedicated Atlas, paid monitoring and permanent paid staging are **not prerequisites for local development**. It does not weaken required production controls.

## Source review and approved npm decision

All 13 source files were read and their declared versions/hashes checked against the accepted baseline. Subject authority remains source 01 for business scope; 02 routes; 03 sections; 04 design; 05 data/security; 06 structure; 07 tasks/dependencies; 08 execution; 09 content; 10 QA; 11 deployment; 12 operations; 13 growth. New source R11/R12/R13 recommendations remain qualified. Sources are unchanged.

The owner explicitly approves npm, npm Workspaces for frontend/backend, and a single root package-lock.json in the attached request **ARADUN — M00-02 Final Infrastructure and Technology Decision Review**, section 2. Source 06 section 3.1 says pnpm is recommended, not mandated; source 08 section 5.1 explicitly permits npm before initialization. Source 07's pnpm-lock.yaml file example and source command templates therefore map to package-lock.json/npm in the execution plan; **there is no mandatory-source conflict**. No source edit is needed. No manifest or lockfile is created now.

At authorized M01 setup, root npm Workspaces will coordinate frontend/ and backend/ with separate application manifests and one root lockfile. Install/CI use the root dependency graph; no nested package-lock.json, pnpm-lock.yaml or yarn.lock. Use npm ci for reproducible installs once an actual accepted lockfile exists. Avoid peer-dependency bypass flags and unreviewed forced upgrades. [Official npm Workspaces](https://docs.npmjs.com/cli/v11/using-npm/workspaces/).

Already approved architecture is unchanged: Next.js App Router/TypeScript frontend, separate Express/TypeScript backend, MongoDB/Mongoose accessed only by Express, local replica-set MongoDB development, Tailwind/selective shadcn/ui, Zod, Inter and the three light themes. One repository, no microservices, no speculative future modules. Provider-generated identities do not replace local StaffUser authorization. Mongoose models, transactions, outbox and source catalog ownership are unchanged.

## Owner-approved local baseline

Approval evidence: the current owner message **ARADUN — Approve Local Development Baseline and Continue M00**, Approved decisions 1-7 and Production planning; recorded 2026-11-04 (Asia/Dhaka). No message identifier is invented.

| Outcome | Approved scope | Limit |
| --- | --- | --- |
| Package management | npm Workspaces for frontend/backend and one root package-lock.json | No manifest/lockfile created; no competing manager |
| Runtime | Node.js 24 LTS family with compatible npm | Exact supported patch/npm pairing verified at authorized setup |
| Frontend/backend families | Next.js 16 App Router, React 19, Express 5, TypeScript 6 | Separate apps and Express-owned APIs/database; compatible supported patch intersection required |
| Data/styling families | MongoDB 8, Mongoose 9, Tailwind CSS 4 | No new schemas or theme changes; selected tools/plugins must be compatible |
| Development database | Native local MongoDB, replica-set support, isolated development/test databases | Actual supported OS/installer, paths, credentials and transaction proof at setup; no initialization now |
| Local funding | No required paid hosting or production subscriptions | Required future security/privacy/testing/recovery controls unchanged |
| Scenario preference | Scenario A preferred for later launch evaluation | No vendor/tier/region/budget, daily-loss tolerance or reduced availability approved |

The families above do not need approval again. Supported patch selection and peer/security verification within them are implementation duties under the next explicitly authorized task; a family/architecture change still needs an owner decision. Earlier exact numbers below are dated researched candidates, not mandatory frozen pins. This approval closes only the local-baseline portion of M00-02; provider and tested-fallback gates remain open.

## Local development first: no paid subscription required

The owner-approved local baseline requires **$0 incremental recurring provider subscriptions**, excluding existing computer, Internet, electricity and optional software. Node/npm, both apps, local MongoDB, lint/tests and Git need no purchased production hosting. Public registry access is not a provider account or paid subscription. Managed auth/email accounts are needed only for their authorized real-integration tests; free sandbox capability should be evaluated before any payment.

Use local synthetic data, controlled email sinks/doubles, real local MongoDB transactions, and local logs. A test double may verify an auth policy function but never supplies a production staff bypass or proves provider MFA/recovery. Local foundational work is not authority to call M01 complete: M01-02 has an explicit M00-02 dependency, and M01-04 still requires actual CI/protected-preview/monitoring evidence when reached. Paid production infrastructure is not substituted for those checks.

## Technology compatibility proposal

The owner approves the technology families, not permanent exact pins. The patch examples below are the prior researched candidates, **not an installed or runtime-certified combination**. During authorized implementation select current supported patches within the approved families and verify advisories/engines/peers before installation; record actual versions and results without seeking repeated approval for routine compatible patch selection. Newest is not the selection rule. Local audit still found Node 22.14.0/npm 10.9.2; nothing upgraded here.

| Component | Approved family / dated patch candidate | Compatibility evidence and timing |
| --- | --- | --- |
| Node.js | Approved 24 LTS; candidate 24.22.2 | [Official LTS release](https://nodejs.org/en/blog/release/v24.22.2); [download lists 24 and newer 26 LTS](https://nodejs.org/en/download). Prefer mature 24 line for this baseline, not 26 solely because newer. Before M01. |
| npm | Approved npm approach; candidate 11.19.1 with Node 24.22.2 | [Node's tagged bundled npm manifest](https://raw.githubusercontent.com/nodejs/node/v24.22.2/deps/npm/package.json) records this version. npm Workspaces/root package-lock.json are **owner-approved**; verify the actual supported npm/Node patch pairing at setup; this is a candidate, not an installed pin. |
| Next.js | Approved 16 family; candidate 16.4.5, App Router | [Published metadata](https://registry.npmjs.org/next/latest) requires Node >=20.9 and allows React 19; [installation](https://nextjs.org/docs/app/getting-started/installation) requires TS >=5.1 and separate linting. Match eslint-config-next 16.4.5 after package confirmation. |
| React / React DOM | Approved 19 family; candidate 19.3.1 / 19.3.1 | [React metadata](https://registry.npmjs.org/react/latest), [matching DOM tagged manifest](https://raw.githubusercontent.com/facebook/react/v19.3.1/packages/react-dom/package.json); DOM peer React ^19.3.1 intersects Next's React 19 range. No canary dependency. |
| Express | Approved 5 family; candidate 5.3.0 | [Published metadata](https://registry.npmjs.org/express/latest), Node >=18. Later SDK/middleware must explicitly work with Express 5. |
| TypeScript | Approved 6 family; candidate 6.0.3 in both apps | [Stable release](https://github.com/microsoft/TypeScript/releases/tag/v6.0.3) and [typescript-eslint range >=4.8.4 <6.1](https://typescript-eslint.io/users/dependency-versions/). Do not use installed global 7.0.2 for this toolchain. Strict types and import boundaries remain required. |
| MongoDB Community | Approved 8 family; candidate 8.0.34; separate supported mongosh/Database Tools patches at setup | Official [download list](https://www.mongodb.com/try/download/community) previously returned 8.0.34; refresh timed out in this review, so reconfirm checksum/patch before install. [Versioned Windows support](https://www.mongodb.com/docs/v8.0/tutorial/install-mongodb-on-windows/) is Windows 11/Server 2022 x64; mongosh is separate and WSL is explicitly unsupported. Use local single-member replica set, not standalone. |
| Mongoose | Approved 9 family; candidate 9.11.4 | [Current compatibility table](https://mongoosejs.com/docs/compatibility.html) covers MongoDB 8.x; [9.x Node requirement](https://mongoosejs.com/docs/migrating_to_9.html) >=20.19 fits 24. No redundant direct driver. Hosted Flex auto-upgrades: recheck driver/server compatibility later. |
| Tailwind / PostCSS plugin | Approved 4 family; candidate 4.3.4 / @tailwindcss/postcss 4.3.4 | [Published Tailwind metadata](https://registry.npmjs.org/tailwindcss/latest) and [tagged plugin manifest](https://raw.githubusercontent.com/tailwindlabs/tailwindcss/v4.3.4/packages/@tailwindcss-postcss/package.json). Choose compatible PostCSS 8 patch during peer resolution; Next metadata lists 8.5.23 as a candidate. No v3-config copy. |
| shadcn/ui tooling | shadcn CLI 4.23.0, only when a real primitive is needed | [Signed release](https://github.com/shadcn-ui/ui/releases/tag/shadcn@4.23.0); [CLI manifest](https://raw.githubusercontent.com/shadcn-ui/ui/main/packages/shadcn/package.json) requires Node >=20.18.1; [Next guide](https://ui.shadcn.com/docs/installation/next) supports npm. It generates selected source components, not a requirement to install every primitive or overwrite approved theme tokens. |
| Other tooling | ESLint supported peer intersection, Prettier 3.x, Node types 24.x, Express types 5.x, React types 19.x; Zod maintained 4.x | Pin exact compatible patches at the authorized task; check Next config/parser support. The ESLint project range alone does not prove every plugin's compatibility. No globals as project dependencies. |
| Testing | Vitest stable 5.x, Testing Library, Playwright/axe candidates | [Vitest requirements](https://vitest.dev/guide/) Node >=22.12 and Vite >=6.4 fit 24. Exact patches/browsers adopted at M01-03. Real transaction/index tests and negative authorization cases remain required. |

No clean npm install, build, lint, typecheck, Mongo transaction, browser or shadcn generation was run. That evidence belongs to authorized M01/M02/M04 tasks, not to public metadata research. Optional motion/editor/upload/provider SDKs are pinned only at first justified use.

## Three launch scenarios

Every scenario retains HTTPS, explicit trusted origins, backend validation/authorization, no public staff signup, safe provider sessions, approved MFA/recovery policy when selected, private draft/PII controls, real transactions, durable outbox/retries, redacted errors, incident alerts, protected isolated staging, backup/restore proof and explicit launch approval. No scenario removes a confirmed Phase 1 page/capability. Recovery numbers are **unapproved source R11 candidates**, not existing approved SLAs.

| Dimension | A — Cost-conscious secure launch candidate | B — Balanced professional candidate | C — Higher-reliability managed candidate |
| --- | --- | --- | --- |
| Auth/session | WorkOS AuthKit free user-management tier; official Node SDK handles sealed HttpOnly sessions in Express; hosted TOTP and invite-only flow subject to proof | [Auth0 Essentials](https://auth0.com/pricing) $35 displayed starting configuration with stable Express OIDC session library; Clerk Pro ~$25 alternative after cookie/SSR proof | Auth0 baseline plus separately quoted support if needed; exact authentication provider need not change from A just for a higher invoice |
| Email | Resend Free: 3,000/month, 100/day; approved low-volume envelope and queue-age alarms required | Postmark Basic $15/10,000 monthly; Resend Pro $20 alternative | Resend Pro $20/50,000 or selected paid Postmark tier; reviewed failover/reconciliation procedure |
| Next frontend | Paid Render 512 MB service, $7, only if build/runtime/asset workload passes memory/performance tests | Paid Render 2 GB service, $25 | Two 2 GB frontend instances, $50; multi-instance cache/invalidations tested |
| Express backend | Separate paid Render 512 MB service, $7 | Paid Render 512 MB $7, increase to $25 on measured need | Two 2 GB backend instances, $50; shared Mongo limiter/outbox and session validation, not instance memory |
| Database/backups | Atlas Flex, $8.03 base to $30/month; daily snapshots/8 retained; no PIT. Restore/delete-suppression proof required | Atlas Dedicated M10-class base $58.40 at 730 h plus quoted backup/PIT costs | Larger Dedicated/multi-zone-capable configuration estimated $150-250; PIT plus protected regional snapshot copies; actual support/tier quote required |
| Logs/errors/uptime | Redacted host logs + Sentry Developer candidate and UptimeRobot Free commercial monitoring; current error quota/eligibility gate remains | One error tracker plus independent uptime; $0-40 allowance, no overlapping paid log stacks | Better Stack paid responder $34 candidate with tested alert coverage; add error collection only if chosen plan needs it |
| Jobs | One $1-minimum Render cron making authenticated bounded POST into Express; leased durable outbox | Same; cost grows only with measured schedule/runtime | Same durable design; stronger heartbeat/escalation/coverage, not a new workflow platform |
| Staging | Production-like local/CI tests plus protected isolated cloud staging on demand; $0-14 monthly allowance for small app services; synthetic M0/local DB, no live snapshots | Persistent isolated apps/DB/identity/mail/trigger; $23-45 estimate | Sized isolated staging + restore/failover rehearsal, $50-100 estimate |
| Region | Singapore candidate only if actual app/Flex regions and data/backup locations satisfy owner/privacy approval | Same-region apps/Dedicated DB; US East or Frankfurt alternatives based on customers | Selected primary plus approved backup-copy region; regional recovery rehearsed; not automatic active-active |
| Recovery posture | Source budget candidate: RPO <=24 h under healthy daily snapshots; RTO <=1 business day under declared cover, subject to actual measured snapshot age/restore | Source recommended candidate: RPO <=1 h, RTO <=4 h including detection under agreed coverage; requires configured paid capability and tests | Aim at least B, improved resilience/coverage; no invented tighter RPO/RTO or 24/7 SLA without evidence/operator/support contract |
| Main limits | Burst mail cap, smallest RAM, no PIT/private endpoints, no contracted free-auth SLA, solo coverage | Higher fixed base; single app instances and primary region remain risks | Higher spend, cache/session coordination, operational/support contracts; extra instances do not prove AZ independence or disaster availability |
| Upgrade path | Raise app RAM; paid email; Flex -> Dedicated/PIT; paid alerts as measured need or approved risk requires | Add replicas, protected snapshot copies and coverage before selling reliability promises | Quote cross-region recovery/support and load-driven scaling; no speculative microservices/tenancy |

Scenario A is owner-preferred for planning; A/B/C remain **conditional configurations**, not provider selection or deployment certification. If A cannot meet the owner's approved risk/traffic/recovery policy, it is not viable: choose B or revise the concrete configuration. Do not call unmet controls acceptable just because a tier is inexpensive.

## Verified price inputs and estimate limits

Public USD snapshot 2026-11-04; no checkout/account quote. Each provider bill may add tax, FX/card charges, bandwidth, builds, storage, support, extra seats or country-specific terms. Annual figures below are 12 times the monthly planning range, not annual contract pricing. Domains, exceptional traffic, paid on-call contracts and dedicated/private networking are not included; quote separately if required.

- [WorkOS pricing](https://workos.com/pricing): AuthKit user management including MFA is free up to 1 million users. Enterprise SSO connections are a separate $125/connection/month; custom domain is $99/month. A uses neither paid add-on. [Hosted MFA](https://workos.com/docs/authkit/mfa) supports TOTP; its required-MFA setting does not apply to SSO users, so disable unapproved SSO paths or verify equivalent upstream assurance.
- [WorkOS official Node SDK](https://github.com/workos/workos-node) and [Express example](https://workos.com/blog/how-to-add-enterprise-sso-express-js-api) demonstrate SDK-sealed sessions/HttpOnly cookie handling. The article's enterprise SSO product is **not** selected or assumed free. Use hosted basic AuthKit, [invite-only](https://workos.com/docs/authkit/invite-only-signup), verified issuer/subject and local active StaffUser checks. Session refresh/races, logout/revocation, MFA recovery/backup codes and SDK support must pass M03 checks. If secure recovery or the mandatory policy cannot be met, choose the paid/library fallback before protected production access.
- [Resend pricing](https://resend.com/pricing) confirms Free limits and $20 Pro/50,000; [idempotency keys](https://resend.com/docs/dashboard/emails/idempotency-keys) last 24 hours. Two receipts per inquiry already use two sends, more staff recipients reduce headroom. A proposes <=25 inquiries/day and <=500/month initially (50/day and 1,000/month base sends); these are capacity assumptions for approval, not business scope reductions or approved rate limits. Bounded queue delay and spike handling must be accepted; upgrade before a campaign/burst exceeds the envelope.
- [Postmark pricing](https://postmarkapp.com/pricing) lists $15 Basic/10,000 and 100/month developer testing. Native send-idempotency equivalence to Resend was not established; timed-out sends need provider correlation before ambiguous retry. No automatic dual-provider sending.
- [Render's comparison](https://render.com/articles/render-vs-railway) lists $7/512 MB and $25/2 GB compute. [Workspace docs](https://render.com/docs/team-members) separate the free workspace from paid services; eligibility/protection/second-operator requirements need confirmation, so A/B reserve $0-25 workspace allowance. [Scaling](https://render.com/docs/scaling) supports manual replicas; autoscaling requires Pro or higher. [Cron](https://render.com/docs/cronjobs) minimum is $1/month per trigger, runtime extra. Never confuse free workspace with a sleeping free production service.
- [MongoDB pricing](https://www.mongodb.com/pricing) lists Flex $0.011/hour with up-to-$30 cap and Dedicated starting $0.08/hour. 730-hour bases are $8.03 and $58.40; actual region/tier differs. [Flex backups](https://www.mongodb.com/docs/atlas/backup/cloud-backup/flex-cluster-backup/) start after 24 h and retain eight daily snapshots. [Flex limitations](https://www.mongodb.com/docs/atlas/reference/flex-limitations/) exclude PIT/private endpoints and prevent manually pinning server upgrades. Do not launch before initial recoverable backup and restore evidence. Snapshot storage location must be approved, not assumed identical to database country.
- [UptimeRobot official help](https://help.uptimerobot.com/en/articles/11604710-who-should-use-uptimerobot-s-free-plan) confirms commercial free use, 50 monitors and five-minute checks. This is different from Better Stack's personal-project free tier. [UptimeRobot prices](https://uptimerobot.com/pricing/) display Solo $13 monthly/$12 annual-equivalent; five-minute probes may be sufficient for A only under the approved detection/cover profile. Use an independent alert recipient, no shared accounts.
- Sentry Developer is a $0 candidate; current quotas/retention must be confirmed before launch because its main pricing page did not render here. [Official help](https://www.sentry.help/en/articles/13965033-how-is-my-plan-changing-august-27-2025) confirms paid Team $29 and Business $89 starting bases for the described plans; it is not proof of every current free entitlement. A needs an eligible free error service or a reviewed redacted error-log/alert solution; if neither meets requirements, reprice paid tracking rather than dropping error visibility. [Better Stack pricing](https://betterstack.com/pricing) shows $34 monthly responder as a C candidate; verify included error/uptime/heartbeat features, avoid unnecessary replay/AI/log subscriptions.

### Complete cost arithmetic

All figures are monthly USD. E = allowance/estimate, not verified list price. Zero values depend on approved quotas/eligibility. The high endpoint includes monthly staging allocation and workspace reserve, not just compute. Auth0's $35 input is the displayed starting B2C selector, not a quote for ARADUN's staff/B2B classification; reprice the correct plan and MFA factors before selection. A small frontend memory failure adds $18/month for a $7 -> $25 upgrade; source performance requirements are not waived to preserve a low headline price.

| Cost item | A | B | C |
| --- | --- | --- | --- |
| App compute | 14 | 32 | 100 |
| Database compute | 8.03-30 | 58.40 | 150-250 E |
| Authentication | 0 | 35 | 35 |
| Transactional email | 0 | 15 | 20 |
| Job trigger minimum | 1 | 1 | 1 |
| Workspace/security plan | 0-25 E | 0-25 E | 25 E |
| Backup/export/storage | 0-5 E; Flex snapshots included | 5-15 E | 20-50 E |
| Errors and independent uptime | 0, eligibility/proof required | 0-40 E | 34 E |
| Staging | 0-14 E; isolated/on demand | 23-45 E | 50-100 E |
| Human mailbox | 0-10 E; existing approved inbox or separately quoted | 5-10 E | 5-10 E |
| **Monthly planning total** | **23.03-99.00** | **174.40-276.40** | **440.00-625.00** |
| **Annual planning total (12x)** | **276.36-1,188.00** | **2,092.80-3,316.80** | **5,280.00-7,500.00** |

The lowest A endpoint is an arithmetic floor, not a launch quote: requires existing working mailbox, qualifying free tools/workspace, tiny workload, on-demand staging and included snapshot capabilities. If error tracking needs paid Team, add $29; a RAM upgrade adds $18; Resend Pro adds $20; dedicated egress/support/extra copies are additional quotes. C is not a contracted availability tier: 24/7 external support/operator cost is unquoted and **excluded**, and must be added before promising coverage. Recommend a provisional A working allowance of $50-100/month for later review, not a spending approval or hard multi-vendor cap.

## Are the previously proposed costs necessary?

| Earlier cost | Necessary to start local M01 work? | Necessary at initial launch? |
| --- | --- | --- |
| Auth0 Essentials | No | No particular vendor is mandated. WorkOS free hosted auth with TOTP/library sessions may meet the same controls, subject to proof; Auth0 remains a mature paid fallback. Auth.js with managed OIDC is another option only with library-maintained sessions and upstream MFA/recovery proof, not custom passwords/crypto. |
| Atlas Dedicated | No; local Community replica set is approved | Only if the selected recovery/network/load profile needs its capabilities. Flex can meet a separately approved daily-backup profile; cannot satisfy one-hour PIT expectations. Free M0 alone is not the proposed live-data backup solution. |
| Two paid Render services | No | Paid always-on capacity is needed on this managed candidate, not this exact vendor/count of invoices. Two apps may run as separate processes on one suitable maintained VPS/host (source 11 section 3), but patching, ingress, process/memory isolation, backup and restore costs/risks remain. A $10-25 VPS is only an unquoted compute alternative; not recommended solely to save $4 at the expense of solo operational work. Static-only Next export is not a drop-in replacement for approved dynamic/auth/publication behavior. |
| Paid monitoring | No | Observable failures and actionable alerts are mandatory, a paid subscription is not. Commercial free uptime + eligible error tracking may suffice; prove delivery/coverage and quota alarms. |
| Paid permanent staging | No | Isolated protected production-like verification is mandatory; an always-on duplicate fleet is not inherently required. On-demand staging is valid only when the actual M01-04/M13 preview, auth, DB, provider and access tests can run. Production credentials/data are never substituted. |

[Render Free documentation](https://render.com/docs/free) advises against production; [Vercel Hobby](https://vercel.com/docs/plans/hobby) is non-commercial. Neither is proposed as an ARADUN live hosting shortcut. Vercel Pro frontend plus separate Express hosting remains an alternative if full commercial/network/usage cost is better. Self-hosting paid SaaS replacements adds labour and attack surface, not automatically lower total cost.

## Timing, dependency gates and approvals

| Group | Exact decision / evidence | Disposition |
| --- | --- | --- |
| **A — approved local baseline** | npm Workspaces/root package-lock.json; Node 24 LTS and approved core families; native MongoDB replica-set approach and isolated dev/test; separate apps; no paid subscriptions for local development | Owner-approved. Verify supported patches/peer intersection and actual local paths/config during the authorized setup task. No installation permission is implied now. |
| **B — before relevant feature** | One auth provider/SDK and A5-01, exact MFA/recovery/session/permission policy D-009/013 in M00-03 before M03; transactional sender before M06; job auth/cadence/retry before M06; editor/FAQ/uploads before M08; real provider sandbox/fallback evidence before dependent completion | Candidates open; no account required for initial framework/types/tool setup. M00-03 policy work is not executed here. |
| **C — before hosted preview/staging/production** | Commercial host/DB tiers, region and backup storage location; allowed origins/cookies/egress; preview protection and credential ownership; monitoring/alerts; paid budget; approved RPO/RTO/retention and measured recovery | Stage-gated decisions, not purchases now. Choices needed by M01-04 must be resolved then; remaining production capacity decisions before deployment lock/M13/M14. |

Source 07 explicitly makes M01-01 depend on accepted M00-01; M01 milestone also needs relevant M00-02 selections. M01-02 explicitly depends on M00-02 and M01-04 on M01-02/03. **Do not silently remove those dependencies or mark all of M01 unblocked.** The owner has now approved the local prerequisite subset. M01-01 can be separately authorized without closing unrelated provider/production gates or starting M00-03; no execution is authorized by this approval message. Closing the full M00-02 task still needs the actual outcomes/fallback evidence below, or an explicit scoped execution/dependency disposition from the owner; this document alone does not supply either approval. An unselected paid provider is not a reason to demand a purchase for local TypeScript setup.

### Exact M00-02 acceptance and current blockers

Source [M00-02](../sources/07-development-roadmap.md#m00-02): **A5-01/08 and D-020 outcomes are recorded before affected installation; current versions, terms and capabilities are verified at implementation; no purchase inferred.** Verification: **Review provider capability checklist against source 06 sections 15-16/20; identify a tested fallback for each essential external dependency.** Dependencies: M00-01, now accepted.

Current: package-manager structure, runtime/core families, native replica-set dev/test approach and separate apps/no-paid-local baseline are owner-approved. Scenario A is preferred only. Provider/policy dispositions remain open; compatible supported patch selection and actual setup checks occur during authorized implementation. No sandbox, installation or live fallback tests have run. M00-02 stays **planning prepared; owner decisions pending**, not owner-accepted. No M00-03/M01 has begun.

M01-01 eligibility: accepted M00-01 plus the now-approved local baseline satisfy its planning prerequisites independently of full M00-02 and M00-03 closure. Only explicit task execution authorization is still missing; do not ask for the same family/baseline approval again. Select and verify supported patches within the approved families as part of that authorized task. Existing missing Git repository/MongoDB installation are expected setup work, not something to initialize during this review. Before M01-02/04 completion, honour their source dependencies and resolve the selected environment/preview/provider gates. No paid launch scenario must be purchased now. All eventual live profiles require restore/notification/access/security evidence before launch.

## Revision record

2026-11-04 final review: npm replaces proposed pnpm by explicit owner approval; no mandatory-source conflict. Earlier ~$175-280 managed profile is retained as **scenario B**, not the minimum development/launch budget. Scenario A and C added; WorkOS/free commercial uptime are new proposals, not selected vendors. Earlier WSL fallback wording is corrected: versioned MongoDB 8.0 documentation explicitly does not support WSL. Provisional one-hour/four-hour recovery targets remain unapproved source recommendations; budget daily recovery needs its own approval. All business scope, phases, source files and M00-01 acceptance are preserved.

## Local approval checkpoint and next task

M00-02 remains partially approved, not accepted in full: A5-01 auth/adapter outcomes, A5-08/D-020 provider/region/budget/credential-owner/host-limits/backup choices and real essential-dependency fallback evidence are incomplete. Exact source AC and test limitations above remain unchanged. Planning a fallback is not testing it.

For continuing M00, recommend the next approval be **M00-03 — Resolve workflow, policy and conditional-interface gates**, documentation/decision review only, using the [prepared checklist](decisions/m00-03-checklist.md). It depends on M00-01 only, so incomplete M00-02 does not block its decision work. Preparing this checklist is authorized here; M00-03 execution/acceptance is not started or inferred. M01-01 is an independently eligible alternative after explicit authorization, with M01-02/M01-04 and feature/release gates still intact.

2026-11-04 owner follow-up: the eight technology families and local DB/dev-test approach are approved, superseding this record's earlier proposed-family labels. Exact prior patch candidates are evidence snapshots only. Scenario A preference is recorded without selecting any provider or approving spending/recovery compromises. No source files or prior M00-01 acceptance are changed.
