# Public filters, contact links and database recovery — 2026-11-17

Status: implemented and verified locally; owner review pending. This correction batch does not accept an entire roadmap milestone or authorize publication, deployment configuration or dashboard work.

## Delivered

- Work and Insights filters now submit on selection, preserve URL state and reset correctly. Explicit GET submit remains usable without JavaScript. Work retains twelve initial studies, all-projects view and category filtering; Home retains three.
- Contact and Footer share the five social URLs approved in source 01: LinkedIn/Facebook/Instagram/YouTube/X (aradun/aradunhq). Contact also exposes the approved phone and WhatsApp link. External profile ownership/availability was not independently audited.
- Backend initial database connection retries use cancellable exponential delays capped at thirty seconds. Configuration validation and database checks still precede API availability. Frontend catalog reads retry a transient network/502/503/504 failure once; 429, missing records and invalid publication DTOs fail closed. No stale price fallback, environment change or weakened TLS/security control was introduced.
- After the owner switched off the VPN, the running retry loop recovered without another restart. Live API checks returned 57 services, five solutions and intake available. This mitigates transient failures; a genuine database/network outage can still prevent availability.
- Replaced unrelated famous-brand references in the moving strip with five truthful, linked business solutions. Existing pause, keyboard and reduced-motion controls remain. This makes no client relationship claim.
- Project screenshots now use separate fictional study identities rather than ARADUN branding. Twenty-four original study screenshots retain their design-study classification and distinct layouts/palettes.
- Three featured guides received original AI-generated editorial photographs, separate from project imagery; the other five retain original editorial diagrams. No real person or client endorsement is depicted.
- Retained approved indicative Home prices and the one-time/monthly/setup/custom engagement explanations. Clarified the proposal/third-party-cost wording without changing source amounts or billing units.

## Content requiring genuine evidence

No ten-year company history, random-company client relationship, fabricated testimonial or stranger's endorsement/photo was added. Ten existing fictional review examples remain classified as development material. Genuine approved company marks, testimonials and client photos remain necessary before these can become public business proof. Owner visual/content review and separate publication approval remain open.

## Changed implementation files

- Backend: src/server.ts; src/server/db/startup-retry.server.ts; tests/startup-retry.test.ts.
- Frontend: catalog-api.server.ts; collection-filter.tsx; Work/Insights listing pages; business-identity.ts; business-contact.tsx; site-footer.tsx; demo-partners.tsx; Home template; editorial-guides.ts; editorial.css; twenty-four project PNGs and three article PNGs plus provenance records.
- Verification: frontend/tests/catalog-recovery.test.tsx; tests/browser/filter-socials.spec.ts; affected demo-content/showcase-expansion/public-polish browser expectations; this report and linked management records. Pre-existing unrelated changes were preserved.

## Actual verification

- Vitest startup-retry, mongo and catalog-recovery suites: 14 tests passed. A backoff increment defect found during verification was fixed and retested.
- Playwright filter-socials, demo-content, showcase-expansion and public-polish: 22 tests passed across desktop/mobile. Includes immediate filters/reset, no-JavaScript submission, social links, gallery counts, article imagery, carousel accessibility/reduced motion and footer/theme geometry. Earlier encoded image-URL expectations were corrected and affected tests rerun.
- Both workspace builds passed; final frontend build passed after presentation changes. Lint, type checking and import boundaries passed (170 source files, eleven fixtures). Secret check passed for 139 public artifacts.
- All thirteen approved source hashes remain unchanged against the baseline. No dependencies installed, live inquiry/email sent, database reset, provider setting changed or Git commit created.

## Review

With both development servers running, inspect Contact/Footer links, change Work category and Insights topic without clicking Filter, reset each, and compare Home/project/article imagery in all three themes. Confirm business-solution strip wording and genuine proof strategy. The next eligible work is owner review of this public correction batch; further fixes should follow that review. No next roadmap task was automatically started.
