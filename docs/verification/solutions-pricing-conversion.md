# M09-06 local Solutions/Pricing conversion

2026-11-12. Owner accepts the verified Home/Services checkpoint and authorizes its named Solutions/Pricing follow-up. Local implementation verified; owner acceptance pending. No dashboard, MFA, provider, email, database or environment work.

## Delivered

- Solutions retains six approved regions and all five source options. Compact responsive selection rows distinguish audience and starting problem, include contextual solution quote links and explain that related services are not guaranteed inclusions. Each card links directly to its pricing group; unsure visitors have consultation/help paths.
- Pricing retains eight approved regions and all **15 unchanged solution tier positions**. Five jump links/anchors make comparisons easier. Reuses the shared four-model explanation, preserves USD/period/unit qualifications and explains that selections do not calculate a binding total.
- Six pricing-specific FAQs cover indicative quotes, third-party costs, agreed payments, separately scoped maintenance, custom/unsure needs and requirement changes. Existing short-answer copy reused where applicable; help links point to implemented local guides. No invented deposit percentage, billing unit, guaranteed deliverable or payment-policy activation.
- All 57 unique selectable services remain in the existing native GET quote-selection form. Fixed an existing GET handoff mismatch: Pricing used serviceIds while Quote read serviceId, silently dropping selections. Pricing now emits canonical repeated serviceId parameters; Quote also accepts validated legacy serviceIds, deduplicates and allowlists them under the same 57-service bound. Selected services and solution/package context stay editable on the quote page. Package links now have distinct accessible names that include their visible labels and solution identity.
- Customer-facing unavailable states on Solutions/Pricing provide Contact links instead of backend troubleshooting language. Server-rendered content/CSS only; no added dependency/client bundle, new pricing authority, tracking, provider calls or published-proof claims.

Source coverage: 01 approved identities/prices; 03 T-OV-SOL/T-PRICING; 04 responsive/theme rules; 07 M09-06 local slice and original dependencies; 08 execution; 09 qualified commercial copy; 10 QA. Existing public-first scheduling amendment applies. Full M09-06/commercial publication/actual intake and release gates remain; no full milestone acceptance.

## Verification

- Catalog/source/API checks: **26 tests / 3 files PASS**. Build/catalog, typecheck, lint/import boundaries, format and private-value scan PASS (80 public artifacts).
- Initial 14-case desktop/mobile run: 10 PASS; four new cases found one accessible-label issue plus a selector matching hidden header navigation. Corrected label-in-name and scoped selector. First affected-case rerun: two PASS, two then exposed the real selection-handoff mismatch. Corrected canonical/legacy handling and checked choices by accessible label. Final affected desktop/mobile pricing cases: **2/2 PASS**, covering canonical and legacy selection retention and all three themes. All 14 distinct browser cases covered successfully across runs; no single all-green 14-case run claimed.
- Checks exercise all five comparison anchors, 15 unique contextual package links and valid quote pages, 57 unique service choices, selected-service retention, six pricing FAQs, all three themes, responsive overflow, reduced-motion setting, existing exact tier/price samples and public inventory.
- Inventory: 91 source planning entries, 85 fixed addresses plus six existing help instances; **456 distinct linked targets**, 202 query and 164 fragment targets, checked on desktop/mobile. Unknown/unpublished and conditional destinations remain gated.
- Human/device/screen-reader and final commercial/asset/release reviews remain grouped. No actual inquiry or mail sent and no dashboard/account changes. Source/register consistency PASS; all 13 approved source hashes unchanged.

## Files / preview / next

Updated catalog/templates/solutions-overview.tsx and pricing.tsx; catalog/components/solution-price-cards.tsx; frontend/styles/catalog.css; public Solutions/Pricing page failure states and Get-a-Quote query normalization. New tests/browser/solutions-pricing.spec.ts. PROGRESS.md, DECISIONS.md, traceability and this report updated. Approved source documents and lockfile untouched.

Review http://127.0.0.1:3000/solutions and http://127.0.0.1:3000/pricing using the existing frontend/backend commands. Compare a solution, follow its pricing anchor, select a package or services and check the editable quote context. This does not activate actual intake.

Next proposed public checkpoint: **M09-01/M06-04 local About, Contact and manual-consultation client-facing completion**—finish approved company-positioning/contact guidance and responsive public inquiry-page presentation, reuse existing email/form modules, preserve honest manual booking and current activation gates. No new provider, account, dashboard, automatic sending or production operation. Requires next approval; not started automatically.
