# Homepage design, motion and functionality status audit

2026-11-14. Owner-authorized public refinements and outage repair only. Public portions of M09-01/M12-01/02/04; owner visual acceptance pending. No dashboard, production configuration or deployment work.

## Document comparison

Owner-attached Downloads/04-design-system-wireframes.md is **v1.0.0**, while approved docs/sources/04-design-system-wireframes.md is **v1.1.0**. Attachment describes two themes; current approved source includes three and Vivid contrast qualifications. Treated attachment as visual/design reference, not an instruction to replace approved source or adopt sample claims. Compared typography/reference, logo, section structure, grids/bento and motion. Source03/source09 preserve11 homepage main regions; header/footer are separate shared shell. Optional bento is presentation inside existing regions, not an extra section.

## Followed, partial and optional

| Area | Status and actual limits |
| --- | --- |
| Architecture/data boundaries | Existing Next App Router/TypeScript, Express-owned APIs/Mongo, npm root lockfile unchanged; no framework/provider/dependency added |
| Business catalog |8 categories/57 unique services/58 memberships/5 solutions, canonical routes/IDs/prices preserved. Home display priority changed only as explicitly requested |
| Header/brand | Original supplied Terracotta lockup unchanged in all3 themes; descriptor below logo removed; compact native accessible menus/search/quote retained. No invented logo geometry |
| Typography/light themes | Inter, charcoal hierarchy, contrast-safe controls and3 light choices retained; canvas softened to near-neutral gradients. Focus/input/persistence/reduced motion tested. Final visual approval pending |
| Category/grid direction | Compact ruled4x2 desktop,2x4 tablet, ordered narrow stack. Neutral icons. Requested homepage order Software, Automation, Marketing, Mobile, Cloud, Security, Design, Media. Source navigation IDs/order otherwise unchanged |
| Modern solution/bento | One optional source-permitted3+2 solution arrangement, normal mobile stack; five labels/summaries/links visible, DOM order unchanged. Not additional functionality or promised package content |
| Banner | Block geometry replaced with neutral generated transparent globe, responsive Next Image and reserved layout. Generated illustration is not business evidence. Art not recoloured per theme |
| Motion implemented | Source04 tokens:180ms action/arrow feedback,220ms menus, one650ms desktop art settle, two selected heading entrances via progressive CSS view timeline,180ms FAQ fade. Native no-JS/static/reduced/coarse fallbacks; no delayed essential text/CTA |
| Complex cinematic effects | GSAP timelines, decorative parallax and complex Motion choreography not implemented; optional/conditional and unjustified for this single image. No infinite/background loop, cursor or scroll hijack introduced. Not falsely marked required effects complete |
| Client operations | Existing saved Contact/Quote/Consultation/reference/idempotency and automatic email/outbox preserved. No new real form/email send in this visual task. Real Express/Atlas connectivity restored; fixtures alone not claimed as live proof |
| Visual/human acceptance | Screenshots inspected and automated contrast/responsiveness checked; owner aesthetic/content decisions and human device/screen-reader review remain open. No unsupported100percent compliance/design-fidelity claim |

## All11 homepage regions

1.Hero/value proposition: rendered.
2.Eight service categories: rendered, priority amendment above.
3.Five business solutions: rendered.
4.Selected Work/case studies: absent until genuine approved examples.
5.Why work with ARADUN: rendered as approach/principles.
6.How we work: rendered as five-step process.
7.Starting prices/engagement options: rendered.
8.Client Feedback: absent until genuine permitted quotes.
9.Insights/resources: absent until genuine authored/published articles.
10.FAQ: six questions rendered.
11.Final project invitation: rendered.

Source09 section4 explicitly permits4/8/9 absent without genuine content. None of the existing rendered regions removed in this task. No extra mandatory homepage sections found in compared source03/04/09. Other page templates have their own section plans; animation/bento components do not create additional sections. Full11-region source audit also in home-reference-correction.md.

## Actual service/solution outage and recovery

Initial read-only HTTP: Express4000 unavailable; frontend3000 returned200 layout but could not supply catalog content. Atlas DNS resolved3 nodes, certificate-verified TLS timed out at all3. Did not blame credentials, change URI/IP rules/TLS or use fake local/catalog fallback. Asked owner about VPN/IP; owner confirms VPN off/current IP allowed. Subsequent existing-target development DB connection/ping PASS. Stopped/restarted only agent-owned failed backend watcher; Express4000 listening.

**70/70 actual API detail reads PASS**, names matched source-managed catalog:8 categories,57 services,5 solutions, concurrency3 within existing120/min limiter. Actual browser /services,/solutions,/services/business-website-development,/solutions/digital-presence allHTTP200 with correct rendered H1s. This is live recovery evidence, not merely frontend status/fixture success. Keep both dev servers running and configured Atlas reachable. No new account/collection/index/data/credential or provider operation.

## Tests and visuals

- Initial six-file desktop/mobile run44/46 PASS. Both failures were old solutions.spec selectors expecting inputname serviceIds rather than current serviceId; current form already supported canonical singular and legacy query compatibility. Corrected test selectors/getAll only; no application contract relaxed.
- Affected solutions/home-reference rerun8/8 PASS, including all5 solutions/pricing tiers, source routes, selection preservation and all-theme narrow accessibility. Final additional fixed-logo/globe-loaded assertions in home-reference4/4 PASS. All46 distinct selected cases have successful coverage across runs; no single all-green46 run claimed.
- All57 service routes passed fixture browser checks; actual70 API verification and four representative actual browser pages above. Globe naturalWidth positive; original logo remains Terracotta across allthemes; desired home service order asserted; reduced motion and menus checked.
- Frontend build incl.TypeScript PASS, root workspace/test typecheck PASS, lint/boundaries PASS156 source files/11 fixtures, public-secret scan PASS86 artifacts. No package/lockfile changes. All13 approved-source hashes preserved.
- Actual live screenshots inspected at ignored .tools/world-home/live-desktop.png and solutions.png. Neutral globe replaces cheap flat geometry; gentler canvas and source3+2 grid visible. Same asset in allthemes. Generated1254x1254 PNG copied into workspace from built-in output; no external API key/account or paid provider selected. Next optimizer serves responsive variants.
- Unthrottled local proxy median LCP desktop Home96ms/service88ms, mobile Home68ms/service64ms; CLS0. Home transfer about296KB desktop/373KB mobile, scripts153KB; earlier local same-run quote transfer237KB. Not field performance or hosted capacity.

## Files

Application: frontend/src/modules/content/templates/home.tsx; styles/editorial.css; public/appearance.css. Assets: public/images/home/world-globe-v1.png and README; brand README amendment. Tests: home-reference.spec.ts, solutions.spec.ts. Management: AGENTS.md, PROGRESS.md, DECISIONS.md, docs/traceability.md, docs/public-review.md and this report. Existing unrelated work preserved. Backend only started/restarted, no backend code/private env edits. No commit/staging or deployment. Suggested focused commit: refine world-view homepage and verify catalog recovery.

Review at http://127.0.0.1:3000 with both npm run frontend and npm run backend running. Owner visual acceptance and genuine content for3 evidence regions remain separate; do not automatically start another task or deployment.
