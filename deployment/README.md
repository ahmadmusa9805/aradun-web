# Public-site deployment preparation

## Current scope - 2026-11-14

Owner restores public inquiry submission and automatic email now; only staff/dashboard work remains postponed. Historical manual-only wording below is superseded for that subject. Backend template and offline checker now require fixed-inbox intake, Resend delivery, job/limiter keys and privacy notice version while staff authentication remains off. Actual reviewed production credentials/target are still required; templates deliberately contain no working secrets. The existing long-running Express runtime processes the durable outbox every five seconds with bounded batches and overlap/lease safeguards. Development/staging redirects all mail to configured inbox; production sends acknowledgements to submitters. No provider provisioning, deployment or publication performed.


2026-11-13. Provider-neutral preparation for the existing Next.js/Express Node 24 architecture. **Nothing deployed or purchased.** Owner account/staff work, live forms and transactional mail are explicitly deferred. This does not waive the retained Phase 1 requirements or approve an email-only production release; the owner reviews the public site and launch limitations before separate publication approval.

## Prepared configuration

- [Frontend template](frontend.env.example): actual site origin, trusted API origin and canonical domain; analytics off; no secrets.
- [Backend template](backend.env.example): matching website/CORS origin, isolated production replica-set database, bounded pool/timeouts and private limiter key. Authentication/intake/mail/outbox remain disabled for this deferred-feature candidate. No operational/bootstrap flags.
- Copy templates only into ignored/private files, for example `.env.frontend.production` and `.env.backend.production` in this directory, or the selected host's private environment store. Replace placeholders privately; never copy the development database URI/credentials into production configuration or publish them as NEXT_PUBLIC values. The current Atlas development database is not a selected production target.
- Validate offline from the repository root:

```sh
npm run deploy:check -- --frontend deployment/.env.frontend.production --backend deployment/.env.backend.production
```

The checker prints only booleans/missing prerequisite names and catalog draft counts. It never connects to MongoDB, sends email, creates accounts or deploys. `configurationReady` covers configuration syntax/alignment only; it does not establish DNS ownership, provider readiness, capacity, security approval or recovery. Placeholder templates intentionally fail. `publicationAuthorized`/`releaseReady` remain false: the command never authorizes publication. Optional `npm run deploy:check -- --self-test` runs synthetic safety checks offline.

## Supported runtime shape

Use a host supporting long-running Node 24 processes and the existing workspace start scripts. One possible provider-neutral shape is a managed HTTPS reverse proxy in front of Next on loopback port 3000 and Express on loopback port 4000 on the same host. Ports must match reviewed actual deployment settings. Current scripts bind loopback; do not expose those ports directly or assume container/serverless compatibility. No provider, region, compute size or paid tier is selected by this example.

The selected host supplies frontend/backend variables to their own processes, including at frontend build time where applicable. Do not load both private files into a single public/frontend environment. In the build environment use the approved Node/npm families and root lockfile; deployment preparation does not run installations or infrastructure commands here. Existing commands are `npm ci`, `npm run build`, `npm run start --workspace @aradun/frontend` and `npm run start --workspace @aradun/backend`. Build requires development tool dependencies; backend production runs compiled dist, not tsx. Do not package local .env files, logs, .tools, test evidence or owner data. Build and test each environment with its actual reviewed settings rather than promoting a development bundle.

Shared MongoDB-backed rate limiting is now constructed whenever its validated key is configured, including hosted tiers; it is no longer silently omitted solely because APP_ENV is not development. Missing indexes still fail closed. Existing conservative limits are retained, not approved production capacity/SLO sizing. Review load and limits before release.

## Required before any public release

1. Owner reviews [every public route/function/theme](../docs/public-review.md), confirms current offers/indicative prices/units/copy/operator/policy/asset rights and records publication approval. All 57 services and five solutions are still draft in the source-managed catalog. No fictional Work/Insights records are required to fill empty states.
2. Hosted release support is implemented but inactive. After explicit content/commercial approval, record publicationApproval (releaseId, approvedAt, approvedBy, contentApprovalReference, commercialApprovalReference), mark reviewed services/solutions published, and record every service availability with its accountable approval. Set the same PUBLIC_RELEASE_ID in both reviewed environment configurations and rebuild for that environment. Missing/draft/mismatched approval blocks hosted pages/catalog; production robots/sitemap require a live matching API release. Staging remains noindex. The present build is **a local review candidate, not a deployable public release**. Do not remove these guards or set APP_ENV=development on a production host as a workaround.
3. Select actual frontend/backend origins, production database/region, TLS, DNS/redirect ownership, secure network access, trusted proxy behavior and runtime restart/health/readiness. No wildcard CORS, disabled TLS or operational arming in runtime settings. Do not copy development accounts/sessions or reuse development/test database targets.
4. Verify staging isolation, production-like build/HTTP smoke, selected runtime security headers, bounded load, real mobile/keyboard/screen-reader and reduced-motion checks. Local unthrottled metrics are proxies, not field CWV. Analytics/search-console requirements and provider/security/consent decisions remain in their documented gates; tracking is not activated here.
5. Record actual monitoring/error response and recovery/rollback procedure, ownership and tested restoration. Do not assume backup capability from an Atlas tier, invent retention/RPO/RTO, change provider plans or spend without authorization.
6. Explicitly review the current manual-email client journey: the site can help copy a brief and open an email application, but it does not save that request or send it automatically. Website intake, automatic acknowledgements, owner recipient and private inquiry handling remain deferred—not mislabeled implemented/live full Phase 1 intake. Later activation needs its own recorded scope and prerequisites.
7. Obtain separate production publication authorization. Then perform the reviewed deployment, verify real routes/assets/SEO/mailto/CORS/TLS and rollback triggers. No host/DNS/provider action has been performed in this batch.

Owner login/MFA/dashboard work is not a prerequisite for reviewing the public website now. Do not resume it automatically. Keep the 13 approved sources unchanged.

## Release support verification (2026-11-14)

See [release-support evidence](../docs/verification/public-release-support.md). The source catalog remains unchanged/draft. Robots and sitemap run per request, without persistent caching; release withdrawal or dependency failure closes discovery. A future approved complete catalog contributes 70 canonical catalog paths; combined with 13 core paths and six actual FAQ entries this yields 89 indexable URLs. Search/receipt, private routes, conditional pages and uncreated Work/Insights details are excluded. No fabricated modification dates. Frontend/backend must be rebuilt with reviewed real settings; this code checkpoint is not a hosted smoke test or release authorization.
