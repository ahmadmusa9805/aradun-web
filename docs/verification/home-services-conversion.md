# M09-01/M09-02 local Home and Services conversion checkpoint

2026-11-12. Owner **Approve and next.** accepts the verified public-first resumption checkpoint and authorizes its named Home/Services work. A repeated approval during implementation continues the same checkpoint, not an additional task. Local implementation verified; owner acceptance pending. No dashboard/MFA/credential, provider, email or environment work.

## Delivered and source coverage

- Home retains T-HOME order: hero, eight-category directory, five solutions, approach, five delivery stages, indicative starting prices, six FAQs, closing invitation. Planned work/testimonial/article slots remain gracefully omitted because genuine permitted records are unavailable. No manufactured proof, publications or unsupported company claims.
- Home adds a quiet manual-consultation route, clear solution-scope qualification, process-to-quote link, four engagement-model explanations within the existing pricing region, and links to all six detailed help guides.
- Services retains T-OV-S's six regions. Eight category cards now expose three representative source services each, supplied by Express from canonical membership records. A complete eight-category needs guide replaces the arbitrary first-five-category list. Individual/combined/ongoing/solution engagements are explained, and four buyer FAQs link to relevant help, including indicative-price qualification.
- Shared server-rendered engagement component explains one-time, monthly, setup-plus-monthly and custom models without invented billing amounts, deliverables or support terms. No added dependency/client component/animation/image request. CSS uses existing theme tokens and responsive two-column layout.
- Services failure UI now gives a useful Contact route without backend implementation details or false submission success. Pricing, paths, 57 unique service identities, 58 memberships, eight categories and five solutions unchanged.

Source references: 01 canonical scope/prices, 03 T-HOME/T-OV-S, 04 three-theme responsive/commercial presentation, 07 M09-01/M09-02 local slices, 08 execution standards, 09 factual copy, 10 QA. Existing public-first dependency disposition applies; M08 publication, About/full M09-01, full per-service M09-02 acceptance and asset/release gates are not closed by this checkpoint.

## Actual verification

- Build/catalog validation PASS. Focused catalog/source content tests: **23 PASS / 2 files**; category API tests: **3 PASS / 1 file** after correcting a stale source assertion to expand internal service IDs into their existing approved public names. Comparison remains against immutable source text; no business copy/source changed to make tests pass. Added representative-membership assertions.
- `npm run test:browser -- tests/browser/home-services.spec.ts tests/browser/public-inventory.spec.ts`: **10/10 PASS** desktop/mobile. Checks visible Home section order, eight/five category/solution counts, five stages, four engagement models, six help links, all 24 representative routes, eight needs links, quote navigation, three themes, automated accessibility, reduced-motion setting, enlarged text and no horizontal overflow.
- Public inventory remains 91 source entries/85 fixed addresses plus the existing six help instances. All **451 linked targets**, 202 query targets and 159 fragment targets checked on both viewports; unknown/unpublished and conditional routes remain gated.
- Final typecheck, lint/import boundaries, format and immutable source/register checks PASS; all 13 source hashes unchanged. Public-secret scan with private backend settings loaded: 80 artifacts PASS. Human screen-reader/device/400% zoom and final asset reviews remain part of the grouped pre-release evidence; automated scans do not substitute for them. No Lighthouse/field performance claim.

## Files and preview

New frontend/src/modules/catalog/components/engagement-models.tsx and tests/browser/home-services.spec.ts. Updated backend/src/modules/catalog/catalog.routes.ts; frontend/src/modules/catalog/catalog-api.server.ts and templates/services-overview.tsx; frontend/src/modules/content/templates/home.tsx; public Services page; frontend/src/styles/public.css; backend/tests/catalog-api.test.ts. Progress/decisions/traceability, its exact-evidence verifier and this report updated. No approved-source, lockfile, dependency, auth or ignored .env changes.

Run existing `npm run frontend` / `npm run backend`, then review http://127.0.0.1:3000/ and http://127.0.0.1:3000/services. Check category/service links, engagement explanations and quote/help destinations at narrow and wide widths. Publication, service-readiness, actual intake and release gates retained.

Next proposed public checkpoint: **M09-06 local Solutions/Pricing conversion completion**—reuse the existing five solutions/15 approved tier positions and pricing templates to improve comparison, explain billing/custom-context and verify contextual inquiry/help paths. Preserve canonical amounts/units and avoid implied guaranteed inclusions. No dashboard, authentication or provider work. Requires next approval; not started automatically.
