# Public launch-readiness checkpoint

2026-11-13. Scope: M09-10 public inventory/publication audit, public portion of M12-04, and existing M06 inquiry-readiness checks. Owner explicitly requests the client-facing launch version first, then review of every page, function and theme before publication. Personal dashboard/CRM/staff development remains deferred. No automatic production release, account creation, database migration or email send.

## Implementation and actual verification

- Removed the database-host loopback restriction from the temporary development-only read-only account view: a locally running application can use an isolated Atlas development database. This repairs a backend startup dependency, not new dashboard functionality. Development database naming, production refusal, validated development-only configuration, session assurance and sensitive-operation MFA checks remain. No changes to credentials, roles, factors or real accounts.
- Public browser verification: **44/44 PASS** in one desktop/mobile run across navigation, complete public inventory, public quality, client journeys and SEO. All 85 fixed public addresses render; 685 exposed linked targets resolve with 260 query and 335 fragment targets. Known unpublished and conditional destinations stay gated.
- Client journeys verified against disposable fixtures: contact, contextual/custom quote, consultation request, preserved choices/input, retry after lost success without duplicate inquiry, truthful receipts, unavailable-service handling and direct email alternatives without JavaScript. These do not prove live Atlas intake or live email activation.
- Inquiry/outbox/Resend integration: **38/38 PASS**, four backend test files, synthetic data and mocked delivery only. Development Atlas target/security regression: **4/4 PASS**, two files; production and production-database rejection retained, ordinary read-only primary sessions do not gain sensitive privileges.
- Public performance samples: three cold-cache samples per route/viewport on the local production build. Median transfer approximately 215–219 KB; scripts 147–152 KB; fonts 49 KB. Local median LCP 52–76 ms, CLS 0–0.085. These are local unthrottled lab proxies, not field Core Web Vitals, Lighthouse scores or production capacity evidence.
- Automated checks cover keyboard navigation, no-JS alternatives, three-theme contrast, narrow/200%-text layouts, metadata, canonical/breadcrumb integrity and guarded indexing. Human screen-reader/actual-device/design/content review remains pending for the owner review checkpoint.
- Root typecheck (both workspaces and tests), lint/import boundaries (144 source files and 11 boundary fixtures), focused Prettier check, catalog integrity and frontend/backend production builds PASS. Independent SHA-256 comparison confirms all 13 approved sources unchanged. Browser checks used the existing public production build; the subsequent changed backend module also compiled successfully.
- Public-secret scan PASS: 80 artifacts, no configured private values or synthetic sentinels detected.

Commands executed: `npm run test:browser -- public-inventory.spec.ts public-quality.spec.ts public-website.spec.ts navigation.spec.ts seo.spec.ts`; `npm exec -- vitest run --project backend backend/tests/local-password-target.test.ts backend/tests/local-password-login.test.ts`; `npm exec -- vitest run --project backend backend/tests/public-intake.test.ts backend/tests/resend.test.ts backend/tests/resend-intake.test.ts backend/tests/outbox.test.ts`; `npm run typecheck`; `npm run lint`; focused `npm exec -- prettier --check` on the two changed TypeScript files; `npm run build`; `npm run check:secrets`. Commands used the approved portable Node/npm wrapper. Read-only Atlas readiness and source hash comparison were separate bounded Node probes; no real provider requests except MongoDB connection/read-only checks.

Changed files: AGENTS.md (owner priority), backend/src/modules/identity/server/local-password-read.server.ts, new backend/tests/local-password-target.test.ts, PROGRESS.md, DECISIONS.md, docs/traceability.md, this verification record and new docs/public-review.md. No dependencies, lockfile, private env, approved source or owner records changed. Suggested task-focused commit: `fix: support Atlas development targets and verify public launch readiness` (not committed; repository has unrelated untracked work).

## Atlas readiness: actual read-only findings

Atlas authentication, ping and replica-set capability succeeded outside the restricted execution sandbox. Configuration and development database naming pass. No secrets printed. Read-only application index/collection inspection found **zero registered application collections present**, with required indexes absent. The existing local database/owner account was not migrated by changing a URI.

Actual intake, email provider and outbox configuration are disabled. No Atlas collections, indexes, accounts, migrations or records were created/changed; no queue or real email executed. Existing reviewed-index startup gates remain enforced: removing the host restriction alone cannot make an empty Atlas database application-ready.

## Remaining work before client launch

| Work | Required next result | Gate |
| --- | --- | --- |
| Atlas application foundation | Review target-specific additive collection/index plan; decide deliberate local-data transfer versus fresh setup; verify target and recovery procedure before execution | Explicit cloud database-operation approval; preserve other databases in the shared cluster |
| Inquiry operation | Prepare reviewed recipient and required records/indexes; verify actual Contact/Quote/Consultation intake and owner response path | No invented recipient/account or silent migration; full inquiry must be readable without requiring a full CRM |
| Mail operation | Enable reviewed Resend/outbox settings and scheduler; verify acknowledgement/notification routing, retries and safe owner access to inquiry details | Actual sends/queue execution explicitly authorized; provider acceptance differs from inbox receipt |
| Hosted public runtime | Implement reviewed release configuration replacing development-only public layout/catalog/intake guards; keep preview closed until approved | This checkpoint does not remove publication gates or enable hosted password-only login |
| Production SEO | On approved publication, enable eligible robots/sitemap/indexability with actual canonical domain; keep receipts, private and unpublished pages excluded | Owner content/design acceptance and separate release authorization |
| Content/design review | Review all public routes, all three themes, offers, operator/policy facts and permitted assets; retain genuine empty Work/Insights until records approved | No fictional proof or mandatory new article/case-study content invented |
| Deployment/recovery | Select actual runtime/domain configuration, TLS/origins, secret management, monitoring and recovery procedure; verify staging/rollback | No purchases/provider provisioning in this checkpoint; no production use of a development database |

The existing development preview returns 404 outside the development application tier, robots disallows all, and sitemap is empty. This is **not yet a deployable public release**. All client-facing launch work is prioritized; deferred internal platform work is not required to be fully developed first, but operational security and receiving/responding to inquiries remain mandatory.

## Owner review

Use [the public review packet](../public-review.md) for every route and client function. `npm run frontend` and `npm run backend` run separately from the root with Node 24 active. The frontend is at http://127.0.0.1:3000. The backend currently needs the Atlas application foundation above; do not interpret a missing-index startup failure as invalid Atlas credentials. Use `./scripts/npm.cmd` in Git Bash or `.\scripts\npm.cmd` in PowerShell if the correct Node version is not active.

This checkpoint is implementation/automated verification evidence, not owner acceptance, full M09/M12 closure or production launch approval. Next proposed execution: target-specific Atlas foundation planning and a minimal inquiry response-path plan, followed by separately approved operations/activation. Do not resume staff-management or full dashboard work.
