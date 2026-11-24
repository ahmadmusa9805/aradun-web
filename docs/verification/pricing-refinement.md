# Pricing directory refinement — 2026-11-25

Status: implemented/verified; owner visual acceptance pending. M09-06 / PUB-004 checkpoint only.

Owner authorized attached Pricing review. Preserved all five solution groups with existing shared package terms and all eight service dropdowns. Core order Software/Automation/Marketing then Mobile/Cloud/Security/Design/Video. Directory uses approved service IDs, names, routes and API source price labels; displays first monetary entry as From amount and confirmed per-month units only. Custom has no USD suffix or zero. Other deliverable units are not invented. Full source tier labels remain on individual service pages. Monthly Video Editing period remains unresolved; its name is not treated as billing evidence.

Added reused concise service summaries, specific fee/design/filming notices, search/empty result, separate detail links and selection controls, visible selection count/summary/removal and editable GET quote handoff. Cross-listed SVC-009 remains one service and one selected parameter; search retains selections. No computed price total. Replaced duplicate flat selection form with integrated directory. Added six practical cost factors and budget-sensitive guidance, clearer two-path hero and concise FAQ answers. No new provider, framework or dependency; client state is limited to directory search/selection. Data access and pricing source remain backend-owned.

## Offer approval boundaries

Attachment's per-project/campaign/session/workshop/asset/video/episode units and fixed solution minimums are proposed where absent from sources. They were not silently approved by a UX instruction. Existing SOL-001 approved entitlements retained; other exact solution/channel/resource/support allowances remain pending. No new optional services, billing assumptions, package renames or false production readiness. Advanced setup, subscriptions, API/voice/messaging, ad budgets and provider costs remain separately scoped.

## Files

- frontend/src/modules/catalog/components/pricing-directory.tsx (new focused client component)
- frontend/src/modules/catalog/templates/pricing.tsx (server prepares safe directory DTOs and reuses category copy)
- frontend/src/styles/editorial.css (Pricing-scoped rows, search, selection and factors)
- PROGRESS.md, DECISIONS.md, docs/traceability.md and this report

## Actual verification

Focused formatting, ESLint, frontend TypeScript and production build passed. Fixed summary-type and exact-optional-property typing issues before passing checks. Browser at1440/768/390/320: eight groups,58 entries,57 unique IDs, core order, multiple independent open categories and no horizontal overflow. Confirmed Website Maintenance /month preserved and Monthly Video Editing not assigned /month. Search matches both Mobile UI/UX memberships; selection synchronizes, deduplicates and survives filtering/no-results. Two selections plus customRequested reached the quote URL correctly; no actual form submission/database write/email performed. Targeted WCAG2A/AA/2.1AA axe returned zero violations on Pricing across all three themes. Desktop expanded directory screenshot visually reviewed. Existing shared solution price/term rendering unchanged. No source/backend catalog data changes, installation, production configuration, commit or push.

## Review

Open http://localhost:3000/pricing. Try category comparisons, search, selection/removal and quote handoff; inspect narrow screens and all themes. Human visual/accessibility acceptance, ambiguous billing units and remaining package commercial terms stay open. No release or full M09-06 acceptance claimed. No next task started.
