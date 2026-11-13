# M09-07/M09-08 local reading checkpoint

2026-11-12 (Asia/Dhaka). Implementation/local verification complete; local checkpoint owner-accepted by the subsequent 2026-11-12 command; full source task gates retained. This is the explicitly authorized read-only template/contract checkpoint, not full roadmap-task acceptance.

## Delivered scope

- PUB-007 `/our-work/[slug]`, PUB-009 `/insights/[slug]`, PUB-011 `/faq/[slug]`: server-rendered detail routes with clean canonical/sharing metadata, existing local-preview/noindex restrictions, one main heading, structured sections, keyboard contents links, related reading/services and quote/consultation/contact invitations.
- Express owns `GET /api/content/:kind/:slug`. Strict bounded projection accepts current published snapshots only, checks exact kind/slug and archive state, and never returns draft/evidence fields. Required work classification and article author/date; safe internal links and escaped paragraphs, lists, headings, quotations and code text. No executable HTML/MDX, arbitrary image URLs or new dependencies.
- Missing/draft/withdrawn/archived/malformed records return true 404. Reader exceptions return generic 503 with no-store; frontend distinguishes temporary unavailability from absence. Request-local React memoization and no-store fetch avoid cross-request publication caches. Shared existing read-rate budget remains fail-closed.
- Application reader deliberately has **no records**. The injected contract is not a CMS implementation or a connected Article database adapter. Existing Work/Insights collections stay honestly empty; short FAQ answers remain distinct. No production sample records, fabricated clients/authors/dates/outcomes or additional authoring master.

## Acceptance disposition and remaining work

| Gate | Evidence / disposition |
| --- | --- |
| Local three-route reader contract | Implemented and verified with explicitly SAMPLE synthetic fixture records only |
| Draft privacy and withdrawal | Unit/API and fresh desktop/mobile navigation checks; no stale public body after withdrawal |
| Reading accessibility/security | Semantic text and TOC, keyboard activation, narrow overflow, reduced-motion setting and automated scans across all three light themes; human reader review deferred |
| Genuine case/article/help publication | Pending supplied approved records, rights/classification/content-region review and authoritative M08 publication integration |
| Galleries/images and full source regions | Not implemented or claimed complete; require eligible source-backed assets/manifest and genuine substantive content. Current projection rejects images rather than fetching arbitrary media |
| Collections/search/pagination/sitemap | Existing catalog/FAQ discovery preserved; long-form integration remains pending. No live/publication acceptance inferred from empty lists |
| Full M09-07 / M09-08 | Still partial. Original M08-08/M08-05 dependencies and M04-03 retained; owner public-first amendment authorizes this local checkpoint only |
| Publication/release/email | Remain separate gates; automated email still owner-deferred |

## Actual verification

- `npm run test -- backend/tests/public-content.test.ts frontend/tests/reading.test.tsx`: **9 tests / 2 files PASS**.
- `npm run test:browser -- tests/browser/public-reading.spec.ts tests/browser/public-inventory.spec.ts`: **8 PASS** across desktop and mobile. Reconciles all 91 public entries, 85 fixed addresses, 445 linked targets (202 query, 159 fragment). New reader checks cover all three templates, escaped payloads, classification/author, contents, automated accessibility and withdrawal-to-404, plus explicit failure state.
- Final focused recheck after cache-header/block-bound/theme refinements: 9 unit/API/component tests PASS again; 2 desktop/mobile reader browser cases PASS again with keyboard TOC activation, reduced-motion setting and automated scans in all three light themes. These are reruns, not additional distinct cases.
- Final build/catalog validation, typecheck (including browser tests), lint/import boundaries, format:check, check:secrets (27 artifacts) and immutable source/register verification PASS. All 13 source hashes unchanged. Browser NO_COLOR/FORCE_COLOR warnings are cosmetic; no test failures.
- Only ignored build/test outputs generated. No dependency/package-lock/env/owner database/account/provider/source changes. No browser fixture published in the application.

## Files in this checkpoint

Application: backend/src/app.ts; new backend/src/modules/content/public-content.ts; frontend/src/styles/public.css; new frontend/src/modules/content/reading.ts, reading-api.server.ts, reading-route.server.tsx, templates/reading-page.tsx; three new canonical `[slug]/page.tsx` files under our-work, insights and faq.

Verification: new backend/tests/public-content.test.ts, frontend/tests/reading.test.tsx, tests/browser/public-reading.spec.ts; extended tests/fixtures/catalog-api.ts; this report. Management: PROGRESS.md, DECISIONS.md, docs/traceability.md, docs/verification/verify-m00-01.py, local acceptance note in docs/verification/public-inventory.md. Original docs/content-publication.md and all approved sources preserved.

## Manual preview and next proposal

From root, use two terminals: `npm run frontend` and `npm run backend` with approved Node 24 active (portable PowerShell fallback: `./scripts/npm.cmd run frontend` / `./scripts/npm.cmd run backend`). Open http://localhost:3000. Work/Insights remain genuinely empty; unknown detail slugs return 404. Synthetic populated readers are visible only during the isolated Playwright fixture, not in ordinary development. Grouped human review remains before release.

Next proposed **M09-08/M10-01 local source-help and discovery checkpoint**: reuse the six existing source-reviewed FAQ subjects to prepare distinct source-managed help pages and connect eligible local help discovery/related links using one authoring master. Preserve short answers, canonical paths and draft/publication qualification; no fake portfolio/articles, dashboards, email or publication activation. Verify content/TOC links, absence/withdrawal, bounded search and desktop/mobile accessibility. Requires next explicit approval after this completed checkpoint is presented; no further task started.

Suggested scoped commit: `feat: add safe public reading route contracts and templates`. No staging or commit performed.
