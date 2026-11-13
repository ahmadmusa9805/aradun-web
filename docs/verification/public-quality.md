# M12-04 local public quality / M06-04-05 resilience

2026-11-12 (Asia/Dhaka). Local public checkpoint **owner-accepted on 2026-11-12** by **Approve and next.** after its 26 passing focused browser checks and completed quality evidence. Full task/asset/human/release gates retained. Owner defers automated email and authorizes other client-facing work. Existing public-first scheduling amendment permits this bounded check before full asset/dashboard prerequisites; full M12-04, production and human review are not closed.

## Delivered

- Online-submission outages now offer a direct hello@aradun.com mail link. Explicit availability recheck preserves fields and focus; no polling or page reload. Stale responses cannot overwrite the new check.
- Without JavaScript, direct email remains usable. Form fields/buttons stay disabled until handlers mount, preventing an unhandled native submission; POST is the additional fallback rather than exposing entered fields in a GET URL.
- Public discovery links disable speculative prefetch. Quote client props now contain only needed service/solution id/name choices, not unused descriptions/FAQs/candidate mappings. No new dependency, animation or provider integration.
- No mailbox credentials, external messages, owner database/configuration or approved-source changes. Email automation remains disabled; mailto links rely on the visitor sending their own email.

## Files

frontend/src/modules/intake/components/inquiry-form.tsx; frontend/src/app/(public)/get-a-quote/page.tsx; frontend/src/styles/public.css; tests/browser/public-quality.spec.ts. Explicit prefetch flags in content templates home/policy/public-page and public About/Contact/Consultation/FAQ/Insights/Search/not-found pages. Progress, decisions, provider note, traceability and verifier evidence updated only for this scope.

## Verification

- 26 focused desktop/mobile browser cases PASS in one run: public-quality and public-website specs. Includes all 85 fixed public addresses, main-page axe/themes, keyboard/touch choices, real synthetic inquiry journeys, duplicate/lost-response recovery, direct email/no-JS safeguards and retry focus/input retention.
- Build/catalog parity and lint/boundaries PASS; final type/format/public-secret/source-register checks PASS (all 13 approved source hashes unchanged). No new full-platform regression claimed.
- Three cache-disabled samples per route per Chromium desktop/mobile project. Local loopback production build, no CPU/network throttle. This is not Lighthouse, real-device testing, field p75 CWV or an INP measurement.

| Route | Desktop median LCP ms / CLS | Mobile median LCP ms / CLS | Median initial transfer bytes | Font bytes |
| --- | --- | --- | --- | --- |
| Home | 72 / 0 | 56 / 0 | 215697 | 48589 |
| Business Website Development | 80 / 0 | 52 / 0 | 214277 | 48589 |
| Quote | 68 / 0.08474 | 56 / 0 | 218033 desktop / 218032 mobile | 48589 |

All measured samples meet the provisional 1 MiB initial-transfer and 150 KiB font budgets. Initial CLS medians are below 0.1 locally; real workloads/devices and field p75 targets remain release work. Measured script transfer: 147271 bytes Home/service and 152017 bytes Quote. Raw per-run measurements are attached to the Playwright report as public-local-performance JSON; test artifacts are ignored by Git. No speed improvement percentage or Lighthouse score invented.

## Remaining and next work

Owner human/device/screen-reader review, final approved brand/hero assets (U4-01/02/03), complete source-defined performance qualification and release approval remain. No change to prices, publication or conditional scope.

Review /contact or /get-a-quote with online intake unavailable: direct email is available, recheck keeps entries. With JavaScript disabled, online form controls are disabled and the email alternative is visible.

Next proposed client-facing checkpoint: M09-10 local public-inventory audit and remaining public release-readiness packet. Reconcile all 85 fixed routes plus honest unpublished content states, identify only actual content/asset/activation gaps, fix in-scope public navigation/state defects, retain mail deferral and preserve source dependencies. Final publication or deployment requires its separate approval. Do not start automatically.
