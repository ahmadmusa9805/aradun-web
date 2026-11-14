# Homepage reference, section and motion correction

2026-11-14. Owner explicitly requests original logo, no header descriptor, less height, compact neutral-icon categories matching supplied screenshot, full homepage audit and source-defined motion. Scoped public correction to M04-03/M09-01/M12-01/02. Implementation verified; visual acceptance pending. Dashboard/deployment/production configuration untouched.

## Authoritative homepage audit

Source03 T-HOME and source04 T-HOME specify **11 main regions**, excluding shared header/footer. Source09 section4 explicitly permits regions4,8,9 absent until genuine content exists; requirements remain tracked.

| Order | Approved region | Current state |
| --- | --- | --- |
|1|Hero/value proposition|Rendered; two primary journey links, headline and lead visible without JS|
|2|Eight service categories|Rendered in compact source order, neutral icons, one category link each; descriptive text retained via accessible description|
|3|Five business solutions|Rendered; existing canonical solution links/copy|
|4|Selected work/case studies|Intentionally absent until genuine approved projects exist; no invented examples|
|5|Why work with ARADUN|Rendered as approach/principles|
|6|How we work|Rendered as five-stage process|
|7|Starting prices/engagement options|Rendered with existing source prices/four models|
|8|Client feedback|Intentionally absent until genuine permitted quotations exist|
|9|Insights/resources|Intentionally absent until genuine authored/published articles exist|
|10|FAQ|Six answers and detailed help links rendered|
|11|Final project invitation|Rendered; quote/consultation/contact paths retained|

Eight rendered main regions plus three evidence-dependent regions account for all11. Header/footer are shared shell, not replacement sections. No fictional client/logo strip, testimonial or article added. Last screenshot is visual reference, not instructions to override canonical business/data requirements or publish generated-image copy.

## Presentation

- Imported original2172x724 Terracotta/Slate Blue transparent PNG lockups from Downloads/aradun, byte-identical copies in frontend/public/brand. Fixed display geometry removes transparent outer space without editing image bytes or redrawing logo. No descriptor below header logo. Both blue themes use provided Slate lockup; no unapproved Vivid logo invented. Same-origin Next image optimization serves bounded640px quality75 derivative; selected CSS URL alone loads, no three-image download. Optimized endpoint HTTP200 tested.
- Header main row reduced to about72px at desktop. Search uses an accessible icon link. Main hero no longer has development notice/extra supporting paragraphs above primary choices; noninteractive support remains accessible, consultation remains available in existing navigation/final CTA. Development notice moved to page end.
- Homepage expertise uses compact four-by-two desktop ruled rows, neutral line icons, category label and small arrow; no coloured icons or tall descriptive card boxes. Mobile stacks with normal reading order and44px link targets. Source descriptions remain connected through aria-describedby. Reduced section spacing checked in actual local preview.
- Existing prices, canonical routes, forms/email, Inter and three light-theme behaviour retained. This does not claim exact supplied raster hero reproduction; existing CSS illustrative art is kept.

## Motion mapping (source04 section7)

| Area | CSS effect | Timing | Fallback |
| --- | --- | --- | --- |
|Menus/mobile disclosure|Opacity0.9 to1 and6px settle|220ms|Instant/static reduced motion; native no-JS disclosure|
|Action feedback|Background/border|180ms|Immediate reduced motion; focus not animated|
|Category arrow|2px horizontal emphasis|180ms desktop fine pointer|Static touch/reduced|
|Hero artwork|One-shot24px settle, parent only|650ms desktop fine pointer|Static mobile/coarse/reduced; text/actions never hidden|
|Approach/process headings only|16px settle on entry, progressive CSS view timeline|480ms nominal token, scroll-driven where supported|Static unsupported/reduced; always-visible text|
|FAQ answer|Bounded opacity0.9 to1|180ms|Instant reduced|

No letter splitting, scroll hijacking, pinned content, infinite loops, whole-grid cascade, delayed CTA or theme-triggered timeline restart. CSS is the sole property owner; no Motion/GSAP dependency required for these simple effects. Full M12 task/final visual acceptance is not inferred.

## Actual checks

- **42/42 Playwright PASS**: home-reference, home-services, navigation, appearance and public-quality, desktop/mobile. Checks actual logo role, no descriptor below, optimized logo HTTP200, compact desktop geometry, neutral icons, motion/reduced fallback, all-six theme transitions, saved first paint/blocked storage,320px/200% text, native no-JS, keyboard/menu dismissal, all-home-section source order, pricing models/FAQ and local performance. No live mail/data mutations.
- Frontend build PASS incl.TypeScript; root workspace/test typecheck PASS; lint/import boundaries PASS (156 files/11 fixtures).84-artifact secret scan PASS. Final narrow expertise spacing change visually checked in actual dev rendering; no unrelated full-suite rerun.
- Actual fixture screenshots visually inspected under ignored .tools/home-reference: desktop, category closeup and mobile. Final live desktop screenshot captured after cache repair. Original logos verified byte-identical and all13 source hashes unchanged.
- Local unthrottled median LCP: desktop Home72ms/service72ms/quote68ms; mobile64/68/60ms. CLS0. Transfer233-238KB; scripts unchanged147-153KB; font49KB. These are lab regression proxies, not field CWV or certified aesthetics.
- Actual port3000 initially500: a persistent generated Turbopack dev cache retained a missing-new-stylesheet error even after restart. Verified repository frontend process identity, stopped only its process tree; first restart reproduced cache error. Preserved generated frontend/.next/dev under ignored .tools/turbopack-dev-backup timestamp after checking absolute workspace boundaries; restarted frontend with approved portable launcher. Final fresh browser: **HTTP200, one original lockup, eight category links, zero client/console errors**. Backend untouched. Existing stale browser tab logged a hydration warning during restart; fresh context has none. Hard refresh old tabs.

## Changed files

New: frontend/src/components/layout/brand-lockup.tsx; frontend/src/styles/motion.css; original PNGs and provenance README under frontend/public/brand; tests/browser/home-reference.spec.ts. Updated: site-header.tsx, home.tsx, editorial.css, appearance.css and globals.css. Management: AGENTS.md, PROGRESS.md, DECISIONS.md, docs/traceability.md, docs/public-review.md and this report. Ignored generated dev-cache backup/screenshots only. No dependencies/lockfile, private env, source docs, production settings, backend/database/mail operations, staff/dashboard work or commits.

Next step: owner visual review at http://127.0.0.1:3000; provide genuine permitted work/testimonials/articles when available to populate their evidence-gated regions. Further redesign or publication requires appropriate owner instruction. Do not mark full-platform acceptance or all visual gates closed.
