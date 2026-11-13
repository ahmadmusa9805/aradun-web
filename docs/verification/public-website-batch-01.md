# Public website batch 01

Date: 2026-11-11 (Asia/Dhaka). **Local implementation verified; owner acceptance pending; full task/publication/release gates retained.** This checkpoint is owner-authorized public-first batching, not a new roadmap task ID or complete Phase 1 acceptance. See [recorded authorization and scoped scheduling amendment](../../DECISIONS.md) and [launch checklist/deferred work](../public-launch.md).

## Source/task scope

Sources 01/02/03 govern business facts, canonical routes and ordered page recipes; 04 themes/design; 05/06 data ownership/structure; 07 task AC/dependencies; 08 execution/evidence; 09 genuine content/publication; 10 QA. All 13 hashes must remain unchanged. No source requirement is silently removed.

| Roadmap task | Delivered local slice | Full-task limits retained |
| --- | --- | --- |
| M04-04 | Public/auth shell integration reused from in-progress work; one marketing header/footer per public page | Private shell is not newly owner-accepted; real operations/staging remain open |
| M04-05 | Root/segment not-found, redacted error/global-error, search loading, recoverable form failures | Forced global render-failure and final human evidence remain; no dedicated /404 or /error route |
| M06-03 | Express intake transaction, immutable source Inquiry, idempotency, acknowledgement and staff-alert outbox, signed 15-minute PII-free receipt | Actual provider delivery, operational recipients, approved policy and hosted activation remain gated |
| M06-04 | Contact and manual consultation with source-required fields, optional company/website, timezone and pending-confirmation wording | Actual privacy/contact approval and human review pending |
| M06-05 | Four-step editable Quote; incoming service/solution/package context; no binding total; Custom / Not sure | Selected draft offer snapshots remain blocked pending release/availability/scope approval |
| M06-06 | Safe confirmation receipt; direct visit never claims submission | Staff inquiry views remain deferred; full task not closed |
| M09-01 | T-HOME composition and About; eight categories/five solutions/process/pricing/FAQ/CTAs | Unavailable genuine work/testimonials/articles and unverified people/mission claims omitted rather than invented; content review pending |
| M09-07/08 | Work/Insights honest empty collections; FAQ reading and discovery | No fabricated records, case/article/help detail publication or completed CMS implied |
| M09-09 | Readable noindex Privacy/Terms review pages | Actual legal/privacy policies unapproved; conditional trust pages not activated |
| M10-01 | Bounded local source-preview catalog/FAQ search; stable source order, escaped query and honest outage/empty states | Published-content index, article integration and final production SEO/search acceptance remain pending |

The original source dependencies stay unchanged in the registers. Owner's amendment allows these local composition slices ahead of full CRM/CMS/staging acceptance; it does not waive business, publication, privacy, security or release gates. Previously pending tasks are not silently accepted.

## Implemented behavior

- New homepage replaces the foundation placeholder with source-directed editorial content and a lightweight CSS-only decorative diagram. No new image downloads, animation libraries or application dependency.
- All 85 fixed public addresses render: 15 fixed core routes plus eight categories, 57 service identities and five solutions. Existing templates are reused. Unpublished dynamic content and unknown catalog slugs must return genuine 404s.
- Marketing chrome is isolated from staff/auth layouts. Existing staff shell state invalidation and native drawer focus containment received narrow regression fixes; no new dashboard/staff management feature.
- Express is the only database writer. UUID submission keys and canonical payloads are HMAC-hashed; retries return the original reference and changed payloads conflict. One short transaction commits Inquiry and all queued notification records. No email/provider call inside the transaction, no automatic identity linking, no client money/role/filter trust.
- Receipt is PII-free, signed with a separate domain prefix, expires after 15 minutes and is verified by Express before confirmation display. No receipt token in URLs; tab storage contains only receipt metadata. No conversion event is emitted by page visit.
- Origin/JSON/body limits, shared intake rate limit and no-store errors apply. Server config and reviewed indexes fail closed; active Admin/Sales recipients are required. Email remains disabled; queue success is not a delivered-email claim.
- No owner environment, real credentials/accounts, database/index apply, provider, deployment or paid service changed. npm dependencies restored from the existing lockfile at owner request; no manifest/version/lockfile change.

## Files created/modified

- `AGENTS.md`, `DECISIONS.md`, `PROGRESS.md`, `README.md`, `docs/verification/manual-review.md`, `docs/traceability.md`, `docs/page-inventory.md`, `docs/verification/verify-m00-01.py`; this report and `docs/public-launch.md`.
- New `frontend/src/modules/content/data/public-copy.ts`, templates `home.tsx` and `public-page.tsx`; `frontend/src/styles/public.css`, globals import.
- Public `page.tsx`/`layout.tsx`; new pages under `about`, `faq`, `our-work`, `insights`, `search`, `contact`, `consultation`, `get-a-quote`, `thank-you`, `privacy`, `terms`; `search/loading.tsx` and public `not-found.tsx`.
- Root `not-found.tsx`, `error.tsx`, `global-error.tsx`.
- New intake `components/inquiry-form.tsx`, `templates/confirmation.tsx`.
- New backend intake `server/submission.service.server.ts`, `server/receipt.server.ts`, `intake.routes.ts`; `app.ts`, `server.ts`, `config/env.server.ts`, `.env.example`.
- Narrow pre-existing shell regression fixes: `frontend/src/modules/identity/components/staff-access-boundary.tsx`, `security-panel.tsx`, `frontend/src/components/layout/dashboard-shell.tsx`; formatting `frontend/src/modules/catalog/templates/catalog-frame.tsx`.
- Tests: new `frontend/tests/public-errors.test.tsx`, `backend/tests/public-intake.test.ts`, `tests/browser/public-website.spec.ts`; updated `frontend/tests/page.test.tsx`, `tests/browser/appearance.spec.ts`, `tests/browser/shells.spec.ts`, `tests/fixtures/catalog-api.ts`; explicit string input type in `backend/tests/support/test-target.ts` preserves invalid-environment test coverage with current Node types.
- Pre-existing M04-04 actor/layout/test files remain in the uncommitted workspace; their presence is not a new owner acceptance claim. The repository has no tracked initial baseline; no unrelated work was discarded, staged or committed.

## Verification

- `npm ci --no-audit --no-fund`: 397 packages restored; initial network reset recovered on retry. No dependency pin changes.
- `npm run test`: **306 tests / 36 files PASS** on final backend changes. Includes native MongoDB duplicate/concurrent/lost-response recovery, transaction rollback, invalid input/consent, draft-offer rejection, manual consultation and receipt tamper/expiry tests.
- Final error fallbacks use the installed Next 16 `retry` contract. Two dedicated tests verify retry callback/redaction and complete global-document markup; an actual forced root-render failure remains a full-task gate.
- `npm run build`: PASS for Next/Express; catalog parity 8/57/58/5 PASS.
- `npm run typecheck`, `npm run lint`, `npm run format:check`, `npm run check:secrets`: PASS. Public artifact scan: 80 artifacts; no configured private values/synthetic sentinels. Boundary check: 122 source files, 11 fixtures.
- Browser regression: 84 distinct desktop/mobile cases covered after corrections. Latest full run: 80 passed / 4 failed; after the final homepage grid fix, all six affected desktop/mobile cases PASS (`npm run test:browser -- --grep "320px layout|responsive navigation|main public pages"`), including those four failures. One earlier mobile navigation run timed out; the affected rerun passes. This is a full run plus focused rerun, not a claimed single 84/84 run. Includes 85-address source-driven crawl, all 57 exact service identities/prices/contexts, desktop/mobile/all themes, 200% text, axe, real contact/custom-quote/manual-consultation receipts and lost HTTP success recovery against owned synthetic native MongoDB.
- Earlier browser runs found duplicate theme controls, receipt CORS omission, premature streaming 200 instead of catalog 404, drawer Tab containment and homepage grid overflow. Fixes are verified through affected reruns; failed earlier runs are not counted as passes.
- `python -X utf8 docs/verification/verify-m00-01.py`: PASS. All 13 source versions/byte lengths/SHA-256 hashes unchanged; all 236 requirement contracts, 215 inventory records, 87 tasks/dependencies and original prices reconcile. New local partial evidence is explicitly registered; no deferred/conditional phase promoted.
- Human browser/keyboard/screen-reader evidence remains grouped and pending; automated axe is not a screen-reader review. Real hosting/backup/delivery/recovery and measured release workload are not claimed tested.

## Browser review and next action

Run the existing root `npm run backend` and `npm run frontend` with Node 24; open http://127.0.0.1:3000. Review Home, navigation, categories/services/solutions/pricing, About, FAQ/search and the three forms. Actual owner-configured submissions remain disabled until the explicit notice/recipient/index gates are satisfied. Successful journeys were tested only with SAMPLE fixtures.

Next proposed larger batch: public content/catalog readiness, approved company/legal/contact information, public SEO/canonical/sitemap completion and measured public release qualification. Full exact candidate tasks and gates are listed in [launch checklist](../public-launch.md). Dashboard/staff/CRM work remains deferred. Stop for owner review; no next batch or production release starts automatically.

Suggested logical commit after reviewing the untracked baseline: `feat: add public website and durable inquiry journeys`. No Git staging/commit performed. The workspace contains other prior untracked work; review baseline ownership before committing.
