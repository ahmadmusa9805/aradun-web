# Home pricing clarity and compact AI cards — 2026-11-24

Latest owner reversal: removed the added699 website card, website prop and extra API fetch, restoring five solution cards and their original presentation. Live browser confirms five cards, no website card and Digital Presence899/project unchanged; focused lint/format passed. Earlier implementation notes below are historical for that addition only; billing-copy and AI compactness corrections remain.

Final production frontend build passed after the focused tests.

Owner requests the $699 website entry price on Home, removal of awkward billing-unit wording from individual pricing cards, and smaller AI/CRM cards. Implemented for review, not owner-accepted or deployed.

- Home now fetches Business Website Development through the existing safe catalog API and adds it first in Starting Prices as From $699 USD, linked to that service. Existing five solution prices remain separately labelled Business solution, including Digital Presence at its approved From $899/project. These are distinct offers; no source price was lowered or solution silently renamed. Service/solution fetches run concurrently, with existing fail-closed states preserved.
- Shared PricePresentation removes Billing unit requires confirmation and uses one plain qualification: Indicative pricing. Your proposal confirms the scope, price and billing terms. Underlying unitConfirmed flags/price models/source values remain unchanged; no per-project unit invented. Source-label disclosures/custom-quote handling preserved.
- CAT-03 card padding, text/list gaps and tool-chip sizes tightened; grid cards no longer stretch to match taller neighbours. All nine work items per service remain visible before tools. No service membership or pricing change.

Live browser1440/390 passed: Home website699 points to the correct service, Digital Presence899 remains intact, old billing phrase absent on Business Website detail, seven AI cards retain nine work items each, no overflow, zero targeted AI-category axe violations. First card measures about517px desktop/595px mobile; desktop screenshot visually reviewed. Focused pricing regression tests: two passed, retaining custom/source-label/XSS/separate-offer behaviour and checking no fabricated unit. Focused lint/types passed; build result recorded in PROGRESS. No source documents or backend catalog price data changed; no form submitted, provider/deployment operation or commit/push.

Files: public Home page loader; content/templates/home.tsx; PricePresentation; scoped editorial.css; frontend/tests/prices.test.tsx; PROGRESS/DECISIONS and this evidence. Prior uncommitted CAT-03 work preserved. Review /, /services/business-website-development and /services/ai-automation-crm.
