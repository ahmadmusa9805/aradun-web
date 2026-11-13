# Grouped human review queue

Owner scheduling amendment: 2026-11-09 (Asia/Dhaka). The owner requests larger implemented browser reviews instead of reviewing every small task immediately. Keep automated checks per task. Human checks below remain **not run**; implementation acceptance with explicit deferral is not human verification or release approval. Revisit at the next agreed substantial browser checkpoint and close before M13/release acceptance. No security/business/provider gate is waived.

| Task | Human evidence pending | Responsible reviewer | Due / status |
| --- | --- | --- | --- |
| M04-02 | Real keyboard and screen-reader spot checks: label/hint/error announcements, repeated failed-submit focus, native radio/checkbox/select behavior, table headers/caption, dialog description/Cancel/Escape/return focus; zoom/readability | Developer/QA with suitable interactive reader, plus owner browser feedback when available | Next grouped browser review; mandatory before M13; not run. Automated 84-test/six-browser-check evidence retained in m04-02.md |
| M04-03 | Public header/footer appearance, mobile menu and long labels, real keyboard/screen-reader disclosure and Escape behavior, Contact/quote discoverability, reduced motion/themes, touch review | Developer/QA with suitable browser/reader, plus owner larger browser review | Next grouped browser review; mandatory before M13; not run. Automated navigation and screenshots documented in m04-03.md |
| M05-03 | Services overview/eight category page source-copy review, actual-device keyboard/reader/touch, pricing qualification readability and category quote context | Owner/editor + developer/QA | Larger/final implementation review before M13/publication; not run. 129 automated tests/38 browser checks pass; local preview remains noindex and hosted-disabled |
| M05-04 | All source draft service copy, proposed scope/process and commercial qualification review; representative project/monthly/custom/assessment/design-media pages on real devices/readers | Owner/editor + developer/QA | Larger/final review before M13/publication; not run. Local previews remain noindex/hosted-disabled; service-specific automated evidence in m05-04.md |
| M05-05 | Five solution copy/scope qualifications, original tier prices/units, pricing and native selection readability on real devices/readers | Owner/editor + developer/QA | Larger/final review before M13/publication; not run. No package inclusion or production readiness is approved by local preview |

Record actual date, reviewer, browser/device/reader versions, cases/results, issues and fixes here when performed. Automated emulation/axe and assistant screenshot inspection remain separate evidence. Do not fabricate the owner's review, real-device coverage or reader output.

The current local homepage is a working shared-navigation foundation. Most navigation destination pages are not implemented yet; review their real content/CTA destinations alongside M05/M06/M09, not as a claimed completed website now. Production readiness is separately gated.

## Public-first batch checkpoint - 2026-11-11

Owner review pending for the larger [public website batch](public-website-batch-01.md): Home/About wording and section omissions, navigation through categories/services/solutions/pricing, honest Work/Insights empty states, FAQ/search, Contact/Quote/Consultation usability and receipt wording. Review all three themes, actual-device touch/keyboard, 200% text and screen-reader announcements/focus. Automated tests and agent screenshot inspection do not count as owner or assistive-technology review. Privacy/Terms remain review pages; real intake activation and publication require the explicit [launch gates](../public-launch.md). Carry unresolved human evidence into public release qualification; do not reactivate dashboard work merely to close this queue.

2026-11-12 public catalog/quote checkpoint: include checkbox service search, category filtering, retained choices/Back, valid package labels and invalid-context notices in the next grouped touch/keyboard/screen-reader review. [Automated/local evidence](public-catalog-review.md). Human evidence not claimed passed.

2026-11-12 local public quality: real-device/reader review should include direct-mail assistance, recheck focus/input retention and disabled no-JS form controls. Lab measurements and 26 automated browser cases are recorded in [public quality evidence](public-quality.md); human/field evidence remains unperformed.
