# Digital Presence UI polish — 2026-11-24

Status: implemented/verified, owner visual acceptance pending. M09-06 / SOL-001 presentation correction only.

Owner requested smaller package text, designed lists, equal-height/bottom-aligned discussion buttons, cleaner project previews and compact expectations. Added scoped package grid/card classes, readable 14px body/checkmark inclusions and consistent price/heading spacing. Starter and Professional buttons align at the card bottom in the same row on both solution and Pricing. Terms links stay above actions. Existing narrow-screen stacking retained; no fixed card height or hidden terms.

Project previews retain image/title/one description/detail link; removed the extra challenge paragraph from the overview (detail content preserved). Aligned project actions with consistent image ratio and typography. Expectations now use smaller headings/body and tighter two-column spacing, stacking on mobile. All eight terms remain visible, including rights, support, privacy and exclusions. Approved prices, entitlements, assets, routes, themes and other solutions unchanged.

Files: frontend/src/modules/catalog/components/solution-price-cards.tsx; frontend/src/modules/catalog/templates/digital-presence.tsx; frontend/src/styles/editorial.css; PROGRESS.md; docs/traceability.md; this record.

Checks: focused Prettier/ESLint and frontend build/type-check passed. Live 1440/768/390/320px content/price/package-link/no-overflow checks passed. Three-theme targeted axe returned zero solution violations; Pricing package-region axe and shared text parity passed. Nineteen internal destinations resolved HTTP200; other solution dispatch preserved. Measured Starter/Professional button bottoms within 1px on both pages, with 25px card-bottom inset. Desktop package/project screenshots visually inspected; mobile expectations captured for owner review. No source-document/data changes, installs, deployment, commit or push.

Review /solutions/digital-presence and its /pricing cards. Human visual/accessibility acceptance remains pending. No next task started.
