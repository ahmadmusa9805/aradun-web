# Public inquiry and presentation correction

2026-11-15, Asia/Dhaka. Owner-directed correction across M06 inquiry/notifications, M04 shared presentation, M09-07 Work and M12 motion/QA. No new dashboard, deployment or future-phase work. Partial request completion pending reference-number decision; owner acceptance not inferred.

## Implemented behavior

1. Explicit development recipient mode sends client acknowledgement to the validated form address and admin alert to fixed ahmadmusa@aradun.com. Sandbox remains default; staging rejects recipient override. Confirmed zero queued outbox events before changing only EMAIL_DELIVERY_MODE and CONTACT_NOTIFICATION_EMAIL in ignored backend/.env. Restarted the identified repository backend to load it. No production configuration or account/provider change.
2. Client email greets submitted name, confirms receipt and describes the next step. Quote explains proposal review; consultation explains agreeing a time. No delivery-time promise or false appointment/payment confirmation. Admin details remain private; client email does not include internal links or private message content. Plain text prevents HTML injection; newlines in names normalized.
3. Compact centered Contact/Quote; email alternative after form instead of before it. Contact first field visible within desktop/mobile initial viewport. Submit-button color changes are atomic to prevent transient contrast failure as availability changes.
4. Canonical category data retained separately from navigation presentation order. Home/menu now consistently Software, Automation, Marketing, Mobile, Cloud, Security, Design, Video. Existing category descriptions/icons retain canonical associations.
5. Top strip adds Building tomorrow together; Appearance legend stays accessible but visually hidden. Footer uses existing theme-aware logo. Search form centered. Shared development banners removed; publication/noindex/security gates unchanged.
6. Work follows source03 PUB-006/T-WORK: hero, browse controls, project collection, invitation. Category GET filters, reset/all links and truthful no-match state. Three original screenshots of locally authored interface concepts, with detail links. Source03 PUB-007/T-CASE detail: introduction, problem, contribution, approach, delivered work, evidence, related/next action. Unknown/unpublished routes retain existing behavior. Concept examples remain development-only, without measured client outcomes.
7. Company strip now ten colorful original placeholder marks, not unrelated real brands claimed as clients. Feedback moves with pause/play, focus/hover/offscreen pause and reduced-motion static fallback. Globe uses a gentle bounded turn in place, with pause, focus/hover/offscreen pause and static reduced-motion fallback; existing pointer tilt/image fallback retained. No heavy animation dependency.

## Remaining requests / decisions

- Owner clarification pending: one new sequence number for each inquiry, or one permanent number per client? Reference service letters recorded from request: Web w; Automation a; Marketing d; Cloud c; Security s; Mobile m; Design g; Video v. Historical ARQ references/signatures remain unchanged. No speculative counter/schema or public tracking endpoint added before resolving semantics; predictable references must never grant access to private records.
- Genuine company names/logos and permission, genuine feedback and project evidence remain owner inputs. Ten placeholder marks and fictional review examples are disclosed, not relabelled as genuine. No unrelated European/US company endorsement is invented.
- Section review in this correction covers shared templates, Home regions and the Work/detail blueprints above. All85 fixed routes render, but that is not a claim of a fresh manual content audit of every section of every source page. Source03 remains authoritative; substantive owner content/visual review and publication gates remain.
- Actual receipt of a newly routed client email is not independently verified in a real mailbox this turn. Injected transport proves distinct addresses and personalized bodies; no arbitrary clients were emailed during verification. Owner can test with their own second address.

## Actual checks

- `npm exec -- vitest run backend/tests/env.test.ts backend/tests/resend-intake.test.ts backend/tests/public-intake.test.ts backend/tests/intake-origins.test.ts`:42 tests/4 files PASS, disposable MongoDB and fake transport. Distinct admin/client recipients, personalized acknowledgement, sandbox redirect, staging denial, intake/idempotency/failures covered.
- Frontend and backend builds PASS. Lint/import boundaries PASS (163 sources/11 fixtures), type checks PASS, secret scan PASS (89 artifacts at run time).
- Selected62 desktop/mobile browser cases: initial54 PASS/8 failures. Fixed canonical-order double-sorting, actual first-field placement, enlarged-text overflow and outdated Work-empty selector. Affected48 rerun46 PASS/2 failures exposed transient submit-button contrast. Fixed foreground/background transition; final2/2 comprehensive page-accessibility rerun PASS. All62 distinct cases pass across final affected reruns.
- Coverage includes85 fixed public routes200 and unknown content404 on desktop/mobile; form storage/receipt/failure/retry flows with fixtures; all theme transitions, source Home ordering, project images/filter/detail/reset, reduced motion, axe and320px/200% text without horizontal overflow.
- Actual local screenshots inspected for Contact desktop/mobile and Work. Project previews captured from original interface concepts, not copied client websites. Ignored .tools contains temporary screenshots/scripts/logs, not versioned evidence or credentials.

## Changed-file scope for this correction

Backend: config/env.server.ts; notifications/server/inquiry-mail.server.ts, outbox.service.server.ts, resend.server.ts; tests/env.test.ts and resend-intake.test.ts; .env.example; ignored .env (only the two routing settings).

Frontend: components/layout/public-navigation.ts, site-header.tsx, site-footer.tsx; components/theme/appearance-selector.tsx; content/templates/home.tsx, public-page.tsx; content/components/demo-projects.tsx, demo-feedback.tsx, demo-partners.tsx, world-view.tsx, new feedback-carousel.tsx; new content/data/concept-projects.ts; catalog/templates/catalog-frame.tsx and service.tsx; intake/components/inquiry-form.tsx; app/(public)/contact/page.tsx, get-a-quote/page.tsx, our-work/page.tsx, our-work/[slug]/page.tsx; styles/editorial.css; new public/images/projects/website-concept.png, workflow-concept.png, campaign-concept.png and README.md.

Browser tests: new public-polish.spec.ts; demo-content.spec.ts and public-website.spec.ts. Records: AGENTS.md, PROGRESS.md, DECISIONS.md, traceability/public-review and this report. Unrelated existing changes preserved; no source changes, install, staging, commit or destructive Git action.

## Review

Use the running http://localhost:3000 preview. Test Contact with your own second address: admin notification to ahmadmusa@aradun.com, friendly acknowledgement to your entered address. Check spam folders if necessary. Review Contact/Quote, menu category order, footer, all Work filters/details, and pause controls on Home. Standard commands remain npm run frontend / npm run backend with approved Node24 active; don't start duplicates.

Next required owner input is the reference numbering semantics. No new roadmap task or publication begins automatically.
