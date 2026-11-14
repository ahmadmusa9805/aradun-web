# Contact, blue branding and development showcase

2026-11-14. Owner-requested public correction within M06 intake and M04/M09/M12 presentation, not full milestone acceptance. Source documents preserved. Owner visual acceptance pending.

## Changes

- Reproduced Contact status rejection: 127.0.0.1 accepted, localhost rejected. Public intake now accepts both names at the configured development HTTP port. Staff APIs, other ports and hosted origins retain restrictions. No private environment changes.
- Terracotta retains original warm lockup; Slate original slate lockup; Vivid uses original supplied blue emblem and original black wordmark, without recolouring/redrawing. Theme CSS versioned for cache invalidation.
- Three concept-project previews on Home/Our Work, with canonical quote links and no fabricated detail routes. Three fictional feedback cards with synthetic portraits, explicit SAMPLE/DEMO labels, no ratings/review schema.
- Six demo company wordmarks: pause/play, hover/focus/offscreen pause, static reduced-motion fallback and keyboard scrolling. Duplicate decorative track hidden from assistive technology.
- Demos render only for APP_ENV=development. Honest empty states remain otherwise. All eleven Home regions retained.

## Actual verification

- `npm exec -- vitest run backend/tests/intake-origins.test.ts backend/tests/public-intake.test.ts backend/tests/resend-intake.test.ts backend/tests/env.test.ts`: 4 files /40 tests PASS. Disposable DB/fake mail. Includes same-port aliases, other-port/hosted exclusions and staff denial.
- `npm run build --workspace @aradun/frontend`, `npm run lint`, `npm run typecheck`: PASS. Import boundaries161 source files/11 fixtures.
- Focused Playwright appearance/home-reference/home-interaction/inquiry-email-handoff/demo-content: initial36/38 PASS; two demo expectations incorrectly used /quote. Corrected to canonical /get-a-quote; all four affected demo tests PASS. Desktop/mobile, all theme transitions, real navigation, portraits, disclosures, motion pause/reduced motion and axe checks of new sections.
- `npm run check:secrets`: PASS,90 public artifacts.
- Actual localhost:3000 Contact submitted one labelled SAMPLE to configured owner inbox. Redirect/receipt reference verified. Atlas readback: saved inquiry and two sent/provider-accepted outbox events (acknowledgement/inbox alert). Inbox arrival not independently confirmed. Sample retained for evidence; no client data deleted or third-party client addresses used.
- Visually inspected actual local Vivid logo/project/feedback screenshots under ignored .tools. Portrait crops distinct and loaded. Corrected tiny warm-edge crop and oversized blue emblem. Owner visual review remains pending.
- Final post-crop build PASS; demo-content/home-reference rerun8/8 PASS. All13 approved source hashes match the frozen baseline.

## Changed files for this correction

Backend: src/app.ts; new modules/intake/server/origins.server.ts and tests/intake-origins.test.ts.

Frontend: components/layout/brand-lockup.tsx; app/layout.tsx; public/appearance.css; styles/editorial.css; modules/content/templates/home.tsx; app/(public)/our-work/page.tsx; new modules/content/components/demo-projects.tsx, demo-feedback.tsx, demo-partners.tsx; public/brand/aradun-vivid-symbol.png; public/images/demo/demo-portraits-v1.png and README.md.

Tests: browser/demo-content.spec.ts (new), home-reference.spec.ts and home-interaction.spec.ts. Records: AGENTS.md, PROGRESS.md, DECISIONS.md, docs/traceability.md, docs/public-review.md and this report. Ignored local scripts/screenshots are temporary verification artifacts. Unrelated existing changes preserved; no staging/commit/reset.

## Review

Open http://localhost:3000 or http://127.0.0.1:3000. Check Contact, both blue themes, three projects/feedback cards, company strip and mobile. Standard root commands remain npm run frontend / npm run backend with approved Node24 active; avoid duplicate servers.

Next public step: consolidated owner visual/content review and genuine permitted projects, feedback and company logos. No automatic roadmap task, dashboard work or deployment/configuration starts.
