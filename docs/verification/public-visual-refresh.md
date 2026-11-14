# Public editorial visual correction

2026-11-14. Owner explicitly rejects prior visual quality and requests improvements across public header/navigation, category/service pages, footer and full theme backgrounds. Public portions of M04-03/M12-01/M12-04; not full milestone or owner visual acceptance.

## Source reconciliation

Read current instructions/progress/decisions, source04 reference/theme/component rules, source03 public/menu specifications, source01 theme authority, roadmap visual/quality criteria and installed Next CSS guidance. Preserve authority of all13 sources for their respective business/data/routes/content/security areas. Source04 explicitly kept neutral backgrounds unchanged; latest owner direction supersedes only that constraint with coordinated light-theme surfaces. Actual source documents remain unchanged. Prior test completion proved function, not reference fidelity or visual owner approval.

## Implemented

- Single-row desktop navigation and compact appearance utility, native accessible mobile disclosure and category/solution menus. Eight reusable source-category line icons; no icon library/client framework added.
- Distinct warm Terracotta, cool Slate and Vivid Blue page/subtle/editorial/border/stone/footer surfaces, plus existing accent/selection/button tokens. No dark-mode setting or state/data changes; dark footer is a section treatment only. Original named accents and contrast-safe icon roles retained.
- Stronger editorial headline rhythm, ruled expertise grid, theme-reactive CSS architectural geometry, more consistent cards, process/solution sections and CTA hierarchy. Category/service pages get canonical category icons, stronger heading/price/jump-link treatment. No price/scope/route changes.
- Structured footer with invitation, brand identity, six source-managed navigation groups and legal/location row. Compact desktop grid and mobile stacking. Conversion invitation hidden on policy and confirmation views.
- Preserved all public form submission/confirmation/email behavior, input/focus, no-JS navigation, reduced motion, routes, content and factual empty states. No live mail or real database mutation in this visual task.

## Verification

- Initial focused Playwright **44/44 PASS** across desktop/mobile: all-six theme transitions, first paint/storage failure, keyboard/no-JS,200% text, gutter/layout, self-hosted font, CSP, navigation, all57 services, solutions/pricing and inquiry receipts.
- Owner amendment reflected in test contract: semantic text/status colours remain stable; page colour now intentionally changes. Added checks that page/editorial/selection/footer surfaces differ across all3 themes.
- Final expanded run invoked navigation/public-website/public-quality/home-services/service/solutions-pricing: **46 scheduled tests**. Final persisted test-results/.last-run.json reports status passed and failedTests=[]; process handle unavailable after session interruption, so no claim of retained final console transcript. All85 fixed routes, services, keyboard/theme/contrast, input retention, lost-response retry, quotes/consultation and local performance covered.
- Next frontend build PASS after final edits, including TypeScript. Root types PASS at initial edit checkpoint; lint/boundaries PASS (155 files/11 fixtures) before final narrow markup/colour corrections. Final read-only checks recorded separately when run. No new package/lockfile or private env changes.
- Actual ignored screenshots inspected: home-terracotta/home-blue/menu and final footer/mobile/service under .tools/design-review. Initial screenshot exposed a stale dev build error, not the compiled design; used built local fixture server for correct screenshots. Fixed discovered punctuation encoding, wrapping mobile header and oversized footer. CSS/SVG architecture is illustrative, not the exact supplied raster hero or invented folded-A logo.
- Local unthrottled final desktop samples: median LCP Home76ms/service80ms/quote76ms; CLS0; transfer219-224KB; scripts unchanged147-153KB. Local proxies only, not field performance.

## Current local preview blocker

Final follow-up: lint/import boundaries PASS (155 files/11 fixtures), public secret scan PASS (81 artifacts), all13 source SHA-256 hashes unchanged.

Compiled test version works. Existing user dev server on3000 last returned500 after caching a temporary missing CSS import while the stylesheet was created. Attempted targeted frontend restart was not executed: automatic approval review failed because usage limit was reached, not because it deemed the restart unsafe. No process stopped. Do not bypass that review. Stop existing frontend terminal with Ctrl+C and rerun npm run frontend with Node24 active; existing PowerShell .\scripts\npm.cmd or Git Bash ./scripts/npm.cmd wrapper also works. Backend unchanged. Actual local recovery remains unverified until restart.

## Files

New frontend/src/styles/editorial.css and components/ui/category-icon.tsx. Updated frontend/public/appearance.css, src/app/globals.css, components/layout/site-header.tsx and site-footer.tsx, modules/content/templates/home.tsx, catalog/templates/services-overview.tsx/category.tsx/service.tsx, intake/templates/confirmation.tsx and tests/browser/appearance.spec.ts. Management updates: AGENTS.md, PROGRESS.md, DECISIONS.md, docs/traceability.md, docs/public-review.md and this report. Existing unrelated work preserved.

Owner should inspect Home, both menus, Services/category/service pages, footer and all3 theme treatments, then provide visual feedback. This report does not claim pixel-identical references, universal aesthetic approval, complete production assets or full-platform acceptance. Deployment/configuration/staff work remains postponed. No commit made; proposed focused commit: improve public editorial layouts and full light-theme surfaces.
