# Closed-by-default public release support

2026-11-14. Limited M09-10/M10-02 public release/discovery preparation, authorized by owner **Approve and next.** after the verified local manual-email candidate. Implementation verified; owner acceptance pending. Not full M10-02, dependency closure or production publication.

## Behavior

- Express validates draft versus approved source states. Approved release requires accountable content/commercial references, nonfuture approval, all 57 published services with approved availability and five published solutions. Existing canonical identities/routes/prices remain validated. Drafts cannot carry published records. Actual source-managed catalog is unchanged and draft.
- Matching backend/frontend PUBLIC_RELEASE_ID plus valid approved source is required for hosted public rendering/catalog. ID alone cannot activate publication. Safe publication DTO exposes only release identity and 70 canonical catalog paths, never approval identities/references. Development preview remains available.
- Approved service availability renders qualified available-for-inquiry, specialist-led or coming-soon labels. No default availability assertion.
- Only production can index. Robots/sitemap run per request with a bounded no-store API check; missing/mismatched/withdrawn/malformed approvals and network failures close discovery. No persistent release cache or invented lastModified. Complete approved static/help/catalog sitemap has 89 unique URLs; private/search/receipt, conditional routes and nonexistent Work/Insights details excluded. Robots is not authorization.
- Offline deployment checker now checks matching release identity and source approval; synthetic self-tests do not change real records. Templates contain comment-only ID guidance. Private envs unchanged. Account/staff/MFA/intake/automated mail remain deferred.

## Actual checks

- Focused Vitest command covering backend publication/catalog API/catalog/env and frontend publication/discovery-release/SEO/env: **8 files, 73 tests PASS**. Includes synthetic approved/withdrawn/staging states and loopback Express HTTP projection/denial tests; not a real hosted/staging deployment.
- Browser regression: npm run test:browser -- tests/browser/seo.spec.ts tests/browser/public-inventory.spec.ts tests/browser/service.spec.ts tests/browser/email-brief.spec.ts: **22/22 PASS** desktop/mobile against local fixture API. Covers all 85 fixed public addresses, all 57 services, canonical/schema/noindex, navigation, three-theme accessibility and private manual-email handoff. No real hosted browser deployment or real email sent. Nonblocking terminal NO_COLOR/FORCE_COLOR warnings only.
- Root npm run typecheck PASS, including workspace and test types.
- npm run lint PASS; import boundaries **154 source files / 11 fixtures**.
- npm run build PASS after request-time robots/sitemap fix; both routes confirmed dynamic in Next build output. Catalog check confirms **8 categories / 57 services / 58 memberships / five solutions**. Backend build PASS.
- npm run deploy:check -- --self-test PASS, offline synthetic values only. First sandbox execution failed with known Windows tsx userInfo ENOMEM; permitted unrestricted rerun PASS.
- Focused Prettier check PASS. npm run check:secrets PASS: **81 public artifacts**, no configured private values/sentinels.
- All **13 SHA-256 source hashes match** source-baseline.md. Git diff confirms no source-document or actual catalog-source JSON changes. No dependencies/lockfile changes in this checkpoint.

## Files

Backend: app.ts, config/env.server.ts, catalog/catalog.routes.ts, catalog/validation/input.schema.ts, new catalog/server/publication.server.ts, tests/env.test.ts and new tests/publication.test.ts.

Frontend: config/env.public.ts; public/root layouts; robots.ts and sitemap.ts; catalog/catalog-api.server.ts, category/service templates and new components/availability.tsx; discovery/seo.ts, metadata.server.ts and new publication.ts/publication.server.ts; styles/public.css; env/SEO tests and new publication/discovery-release tests.

Planning/tooling: scripts/check-deployment.mjs; deployment frontend/backend templates and README; PROGRESS.md, DECISIONS.md, docs/traceability.md, docs/public-review.md, prior public-email-launch-candidate acceptance note and this report. Preserve unrelated pre-existing changes. Suggested logical commit: add approval-gated hosted public release and discovery support. No commit made.

## Review and next gate

Run npm run backend and npm run frontend in separate root terminals, then open http://127.0.0.1:3000 and use docs/public-review.md to review pages, themes, mobile navigation and copy/email handoff. Existing MongoDB target must be reachable. No owner setup required for this review.

Next proposed checkpoint: consolidated public content/design/commercial-availability review under M09-10, then production-readiness gap assessment. Actual owner content/operator/policy/pricing/availability/asset approval must be explicit; generic checkpoint approval does not fabricate those facts. Production origins/target, security/monitoring/recovery and human accessibility/device evidence remain before publication. Hosting decisions and publication require their own authorization; no provider purchases or deployment in this checkpoint. Full Phase 1 saved-intake/staff requirements remain deferred, not completed.
