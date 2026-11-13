# Public-first resumption and local login simplification

2026-11-12. Owner explicitly requests pausing MFA, ordinary password login into the existing dashboard and resuming public/client website completion. This supersedes the local MFA-enrollment prerequisite only for the restricted development account view; no approved source document changed. It does not authorize dashboard feature expansion, hosted bypass, security/admin mutations or false MFA assurance.

## Delivered

- `AUTH_LOCAL_PASSWORD_ONLY=true` in ignored backend/.env. The validated local development flag allows existing password-authenticated sessions to read only their own account and minimal staff shell. New logins go directly to `/dashboard/account`; existing primary sessions can continue there from sign-in. No account/password/factor/recovery data changed or authenticator code used.
- Backend remains the session authority and rechecks active staff, roles, access version, revocation/expiry. Primary sessions remain primary. Content preview, staff/security mutations, profile edits and MFA endpoints are unavailable under this local account-view mode. The existing strict MFA authorizer is unchanged. Hosted config refuses the flag; sensitive operations still deny primary sessions.
- Account UI is a small read-only identity view with a link back to the public website. Existing MFA setup/security controls are hidden in this mode. Disable the local flag later to restore the existing MFA workflow with its stored data intact. No new dashboard modules.
- Public work resumed: six source-managed client help guides under PUB-011: `/faq/services`, `/faq/not-sure`, `/faq/starting-prices`, `/faq/timelines`, `/faq/international`, `/faq/maintenance`. Each uses the existing FAQ question/answer master, distinct scope/practical guidance, related reading/offers and inquiry CTA. FAQ/search link to them. Existing reading template provides TOC, metadata and accessible sections with minimal client JavaScript.
- Static help is marketing source copy, not a second CMS/database master or claimed published Article snapshot. Existing development-only preview/noindex/publication gates remain. No new prices, binding terms, project evidence, production activation, service account or dependency.

## Actual verification

- 27 focused local-login/security/authorization/frontend checks PASS. 10 reading/content/guide checks PASS. Tests use synthetic accounts in owned disposable MongoDB only.
- Initial browser run found a restrictive public-link validator rejecting conversion links and an inventory allowlist that lacked the new six instances. Corrected both; final rerun **10/10 PASS** on desktop/mobile, including password login, all six help guides and complete exposed public navigation (451 linked targets). No security allowlist weakened to arbitrary URLs: only existing public contact/consultation/quote/pricing routes added.
- Build/catalog PASS; typecheck, lint/import boundaries, formatting and source/register checks PASS; all 13 hashes unchanged. Private-value scan: 80 public artifacts PASS. No real owner session or rate-limit bucket reset, no mail or queue run.

## Changed files and review

Backend: config/env.server.ts; identity/identity.routes.ts; new identity/server/local-password-read.server.ts; content/public-content.ts (safe public links); .env.example; ignored .env flag. Frontend: identity/sign-in-form.tsx; identity/components/security-panel.tsx; new content/data/help-guides.ts; content/reading-route.server.tsx; content/reading.ts; public FAQ/search pages.

Tests: new backend/tests/local-password-login.test.ts and tests/browser/public-first.spec.ts; access-fixture.ts; catalog-api.ts; security-failures.test.tsx; reading.test.tsx; public-inventory.spec.ts. Records: AGENTS.md, PROGRESS.md, DECISIONS.md, traceability and this evidence. All 13 approved source documents preserved; no dependencies/lockfile changes.

Restart `npm run backend` and `npm run frontend`. Open http://127.0.0.1:3000/staff/login with the existing owner email/password, then view `/faq` and its detailed guides on desktop/mobile. Actual owner bootstrap/password success was reported earlier; MFA enrollment/custody is intentionally paused, not claimed complete.

Next proposed public checkpoint: **M09-01/M09-02 client-facing Home/services conversion review**, reusing approved sections, catalog and styles to finish responsive presentation and clear inquiry navigation; no internal account/MFA work. Check applicable accessibility, SEO, theme/layout and public journey regression. Full source milestone/publication/release and actual inquiry-activation gates remain; no unapproved next task started automatically.
