# Web service pricing and detail refinement — 2026-11-24

Owner approves the suggested CAT-01 hero, Admin Dashboards capability and single starting price on category cards; requests richer individual service pages with existing price options and package detail. This checkpoint covers only CAT-01 and SVC-001–005. Owner visual/commercial acceptance pending.

## Implemented

- Hero supporting sentence: Build websites and software that move your business forward. Category H1 unchanged. Admin Dashboards added as a Custom Web Application capability.
- Category cards show one starting position from the existing server-supplied source label, with USD and the approved monthly model where applicable. This is presentation-only: strip secondary slash-separated amounts and represent the source plus as From. Custom stays Custom quote. No new amount, billing unit, calculation authority or price record. Shared indicative-scope note replaces repeated per-card pricing paragraphs; full source price positions remain unchanged elsewhere.
- Individual templates only for the five existing web service IDs: clearer service-specific introduction, audience/goals, benefits, candidate deliverables, preparation lists, pricing/scope comparisons, process, original FAQs, related services and contextual CTAs. Other services retain the previous template. Existing routes, H1s, metadata/canonicals, package IDs and source price labels preserved.
- Business Website $699+/$1,499+; E-commerce $999+/$2,499+; Redesign $399+/$999+ retain both positions. Maintenance retains $49/$99/$199+ monthly (three positions, not artificially reduced to two). Custom retains one Custom quote position. Package links preserve service/category/package identifiers.

## Scope approval boundary

Exact entitlements were marked pending in the existing package registry. Added qualitative, differentiated scope lists explicitly as proposed directions for discussion, not fixed package inclusions. No page/product counts, revision allowance, fixed timing, SLA, provider inclusion, performance promise or unlimited maintenance invented. The owner should approve or revise those scope directions before treating them as commercial package terms. Pricing/registry/source documents not rewritten; release gates retained.

## Verification

Live browser checked all five details at 1440px and390px: one H1, correct 2/2/1/2/3 options, four scope bullets per option, contextual package links and no horizontal overflow. All five mobile service bodies passed targeted WCAG axe scans; category passed scans in all three themes. Category has single price per card, new hero and Admin Dashboards heading. A Mobile-service visit confirms the web template is absent. Mobile price comparison screenshot visually reviewed. Focused ESLint, formatting and frontend TypeScript passed; frontend build result recorded in PROGRESS. No real inquiry/email, backend/schema/price mutation, source-document edit, deployment or next category work.

Files: new web-service.tsx and web-service-copy.ts; service.tsx ID-specific dispatch; web-category.tsx/copy; scoped editorial.css; DECISIONS/PROGRESS and this report. These changes are part of the M09-02 public-content review and do not close the entire roadmap task.
