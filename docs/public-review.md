# Public website review packet

Latest correction2026-11-14: Contact now accepts localhost and127.0.0.1 on the configured development port; actual SAMPLE saved and both notification events provider-accepted. Blue themes use supplied blue artwork. Home/Our Work show three labelled demo projects, Home shows three fictional feedback cards with synthetic portraits and a controlled demo-company strip. These examples are development-only and must be replaced with permitted genuine content before publication. See [verification](verification/contact-demo-showcase.md); visual/content review remains pending. Dashboard/deployment remain postponed.

## Current all-section homepage and local navigation - 2026-11-14

All11 home regions are now visible: Hero, Categories, Solutions, Selected Work, Why ARADUN, How We Work, Pricing, Client Feedback, Insights, FAQ and final invitation. Work/Feedback use honest empty states; Insights points to existing help guides without inventing articles. Original blue logo in blue themes, warm logo in Terracotta; new partial-world art responds gently to desktop mouse and stays static for touch/reduced motion. Image failure has a reserved-layout fallback.

Actual localhost logo/menu clicks and service/solution details now verified. Dev output isolated under .next-local, normal build output remains .next. Existing frontend3000 and detached backend4000 are running; do not start duplicate servers on occupied ports. Backend local logs under ignored .tools/local-preview. [Final checks and limitations](verification/homepage-complete-navigation.md). Deployment remains postponed.


## Current world-view design and restored catalog - 2026-11-14

Home has a neutral world-globe illustration, softer near-neutral gradients, original Terracotta logo unchanged across themes, and requested Software/Automation/Marketing/Mobile-first category order. Five solutions use a source-permitted3+2 arrangement; existing content retained. Services/solutions recovered: all70 live catalog API records verified after Atlas connection returned and backend restarted. Keep npm run backend and npm run frontend active, with Atlas reachable. Hard refresh old tabs. [Implemented/partial/optional design audit](verification/homepage-design-audit.md).


## Homepage reference correction - 2026-11-14

Home now uses the supplied original logo, no descriptor beneath it, a compact header, neutral-icon ruled category rows and documented restrained motion/static reduced-motion behaviour. Actual http://127.0.0.1:3000 now returns200 with zero fresh-browser client errors. If an existing tab retains an old error/style, hard-refresh with Ctrl+Shift+R. There are11 approved main homepage regions; selected work, client feedback and insights are evidence-dependent and may be absent under source09. [Full11-region mapping and checks](verification/home-reference-correction.md).


## Visual refresh to review - 2026-11-14

New editorial header/category menus, full light-theme backgrounds and section/card treatments, service/category hierarchy, CSS architectural hero and structured footer are implemented. Owner visual acceptance is pending. The compiled version passed browser checks. Existing local dev process needs restart after stale CSS/build error: stop frontend terminal with Ctrl+C and rerun npm run frontend (Node24), or .\scripts\npm.cmd run frontend in PowerShell / ./scripts/npm.cmd run frontend in Git Bash. Backend need not be restarted. Deployment remains postponed. [Visual evidence](verification/public-visual-refresh.md).


## Current inquiry behavior - 2026-11-14

Public forms and automatic email are now enabled in development; earlier manual-only/deferred statements below are superseded for intake/email. No owner setup required. Contact, Quote and Consultation save a request and show its reference; acknowledgement and configured-inbox notification run automatically. Development/staging mail goes ONLY to the configured inbox, not arbitrary entered addresses. Production uses the actual submitting client address after deployment review. Dashboard/staff remains postponed. Manual email copy/open-mail stays an optional fallback. [Live verification](verification/public-inquiry-completion.md).


2026-11-14. **Public/client development version complete for consolidated owner review.** Contact, Quote and Consultation save requests and queue automatic acknowledgements/inbox notifications. Dashboard/staff and deployment/production configuration are postponed. This is development-review readiness, not owner or full-platform acceptance.

## Open the website

With Node 24 active, run in two repository-root terminals:

```sh
npm run frontend
npm run backend
```

Open http://127.0.0.1:3000. Atlas development foundation is initialized (12 collections/30 application indexes); no owner setup is needed for browsing or the manual-email handoff. VPN/network access must permit the Atlas TLS connection. Do not reset or migrate data. If startup fails, report the sanitized error; do not disable TLS or reuse the development target for production.

## What to review now

| Area | Present behavior | Owner review |
| --- | --- | --- |
| Home/navigation | Responsive header/footer, keyboard menus and public links | Messaging, business positioning, navigation order |
| Categories/services | Eight categories, 57 unique service pages, 58 memberships | Names, scope, current availability, indicative prices/units |
| Solutions/pricing | Five solutions, package/context links and pricing explanation | Actual offers, overlaps, scope and exclusions |
| About/Contact | Actual operator/contact facts and direct mailbox links | Business/policy wording and contact channels |
| Quote/Contact/Consultation | Submit details, receive saved reference; automatic acknowledgement/inbox email; optional manual fallback | Copy a synthetic brief and inspect selections/timing; no automatic save/send or booking |
| FAQ/search | Searchable source-managed help plus six detailed guides | Practical answers, empty/error states and reading flow |
| Work/Insights | Genuine empty states; no fabricated records | Provide approved genuine content later if desired |
| Privacy/Terms | Existing source-managed copy and operator details | Actual practices/claims before publication |
| Three light themes | Editorial Terracotta default, Muted Slate Blue, Vivid Blue | Colors, focus/contrast, mobile and enlarged text |
| Accessibility/performance | Automated keyboard/theme/narrow-layout checks and local performance samples | Human screen-reader/device/reduced-motion/design review before release |
| SEO | Titles/canonicals/sharing metadata; indexing intentionally blocked | Final domain and eligible indexing after approved publication |
| Deferred internal/automated features | Owner/staff/dashboard/CRM postponed; public save/receipt/mail enabled | Do not run owner setup now; revisit after public review |

Optional manual handoff is explicit: **Copy inquiry brief** copies only entered details and selected public offer names/IDs. **Open email app** contains a static inquiry subject, never private message/email/body or an access token in its URL. Paste the copied brief into your email and send it yourself. Clipboard denial reveals selectable text. The manual handoff itself does not save anything; using the form submit button saves the request and returns its reference. No booking confirmation or binding automatic quote is claimed. Basic direct email links remain usable without JavaScript.

## Deployment preparation

See [provider-neutral templates and release steps](../deployment/README.md). Deployment and production configuration are postponed by owner instruction. The review candidate is not published: catalog publication remains draft, hosted public routes remain gated, and robots/sitemap/indexing remain closed pending owner review and separately authorized publication. Closed-by-default release support is now implemented; no actual approval or PUBLIC_RELEASE_ID has been set. No providers, subscriptions, production database or costs selected. Do not interpret a successful build as public publication approval.

## Complete public source inventory

91 planning entries = 85 fixed routes + three dynamic patterns + three conditional routes. Six FAQ instances add six browsable addresses, so the current fixed/help preview contains 91 addresses; this is not 91 independently approved published source pages. Work and Insights have genuine empty states; do not publish fictional records to fill them.

| ID | Page | Route / preview | Disposition |
| --- | --- | --- | --- |
| PUB-001 | Home | [/](http://127.0.0.1:3000/) | Local preview; owner review pending |
| PUB-002 | Services | [/services](http://127.0.0.1:3000/services) | Local preview; owner review pending |
| PUB-003 | Solutions | [/solutions](http://127.0.0.1:3000/solutions) | Local preview; owner review pending |
| PUB-004 | Pricing & Packages | [/pricing](http://127.0.0.1:3000/pricing) | Local preview; owner review pending |
| PUB-005 | About ARADUN | [/about](http://127.0.0.1:3000/about) | Local preview; owner review pending |
| PUB-006 | Our Work | [/our-work](http://127.0.0.1:3000/our-work) | Local preview; owner review pending |
| PUB-007 | Case Study / Project Detail | `/our-work/[slug]` | Template; no genuine published records |
| PUB-008 | Insights & Resources | [/insights](http://127.0.0.1:3000/insights) | Local preview; owner review pending |
| PUB-009 | Article / Resource Detail | `/insights/[slug]` | Template; no genuine published records |
| PUB-010 | FAQs & Help | [/faq](http://127.0.0.1:3000/faq) | Local preview; owner review pending |
| PUB-011 | Detailed Help Article | `/faq/[slug]` | Six source-managed instances below |
| PUB-012 | Contact | [/contact](http://127.0.0.1:3000/contact) | Local preview; owner review pending |
| PUB-013 | Get a Quote | [/get-a-quote](http://127.0.0.1:3000/get-a-quote) | Local preview; owner review pending |
| PUB-014 | Consultation | [/consultation](http://127.0.0.1:3000/consultation) | Local preview; owner review pending |
| PUB-015 | Inquiry Confirmation | [/thank-you](http://127.0.0.1:3000/thank-you) | Local preview; owner review pending |
| PUB-016 | Search Results | [/search](http://127.0.0.1:3000/search) | Local preview; owner review pending |
| PUB-017 | Privacy Policy | [/privacy](http://127.0.0.1:3000/privacy) | Local preview; owner review pending |
| PUB-018 | Website Terms | [/terms](http://127.0.0.1:3000/terms) | Local preview; owner review pending |
| CAT-01 | Web & Software Development | [/services/web-software-development](http://127.0.0.1:3000/services/web-software-development) | Local preview; owner review pending |
| CAT-02 | Mobile App Development | [/services/mobile-app-development](http://127.0.0.1:3000/services/mobile-app-development) | Local preview; owner review pending |
| CAT-03 | AI Automation & CRM | [/services/ai-automation-crm](http://127.0.0.1:3000/services/ai-automation-crm) | Local preview; owner review pending |
| CAT-04 | Digital Marketing | [/services/digital-marketing](http://127.0.0.1:3000/services/digital-marketing) | Local preview; owner review pending |
| CAT-05 | Cloud & DevOps | [/services/cloud-devops](http://127.0.0.1:3000/services/cloud-devops) | Local preview; owner review pending |
| CAT-06 | Cybersecurity | [/services/cybersecurity](http://127.0.0.1:3000/services/cybersecurity) | Local preview; owner review pending |
| CAT-07 | UI/UX, Graphic Design & Branding | [/services/design-branding](http://127.0.0.1:3000/services/design-branding) | Local preview; owner review pending |
| CAT-08 | Video Editing & Production | [/services/video-editing-production](http://127.0.0.1:3000/services/video-editing-production) | Local preview; owner review pending |
| PUB-S001 | Business Website Development | [/services/business-website-development](http://127.0.0.1:3000/services/business-website-development) | Local preview; owner review pending |
| PUB-S002 | E-commerce Website Development | [/services/ecommerce-website-development](http://127.0.0.1:3000/services/ecommerce-website-development) | Local preview; owner review pending |
| PUB-S003 | Custom Web Application | [/services/custom-web-application](http://127.0.0.1:3000/services/custom-web-application) | Local preview; owner review pending |
| PUB-S004 | Website Redesign | [/services/website-redesign](http://127.0.0.1:3000/services/website-redesign) | Local preview; owner review pending |
| PUB-S005 | Website Maintenance | [/services/website-maintenance](http://127.0.0.1:3000/services/website-maintenance) | Local preview; owner review pending |
| PUB-S006 | Business Mobile App | [/services/business-mobile-app](http://127.0.0.1:3000/services/business-mobile-app) | Local preview; owner review pending |
| PUB-S007 | E-commerce Mobile App | [/services/ecommerce-mobile-app](http://127.0.0.1:3000/services/ecommerce-mobile-app) | Local preview; owner review pending |
| PUB-S008 | Custom Mobile App | [/services/custom-mobile-app](http://127.0.0.1:3000/services/custom-mobile-app) | Local preview; owner review pending |
| PUB-S009 | Mobile App UI/UX Design | [/services/mobile-app-ui-ux-design](http://127.0.0.1:3000/services/mobile-app-ui-ux-design) | Local preview; owner review pending |
| PUB-S010 | Mobile App Maintenance | [/services/mobile-app-maintenance](http://127.0.0.1:3000/services/mobile-app-maintenance) | Local preview; owner review pending |
| PUB-S011 | Workflow Automation | [/services/workflow-automation](http://127.0.0.1:3000/services/workflow-automation) | Local preview; owner review pending |
| PUB-S012 | CRM Setup & Customization | [/services/crm-setup-customization](http://127.0.0.1:3000/services/crm-setup-customization) | Local preview; owner review pending |
| PUB-S013 | Lead Follow-up Automation | [/services/lead-follow-up-automation](http://127.0.0.1:3000/services/lead-follow-up-automation) | Local preview; owner review pending |
| PUB-S014 | AI Chatbot | [/services/ai-chatbot](http://127.0.0.1:3000/services/ai-chatbot) | Local preview; owner review pending |
| PUB-S015 | AI Integrations | [/services/ai-integrations](http://127.0.0.1:3000/services/ai-integrations) | Local preview; owner review pending |
| PUB-S016 | AI Voice Agent | [/services/ai-voice-agent](http://127.0.0.1:3000/services/ai-voice-agent) | Local preview; owner review pending |
| PUB-S017 | Automation Maintenance | [/services/automation-maintenance](http://127.0.0.1:3000/services/automation-maintenance) | Local preview; owner review pending |
| PUB-S018 | SEO Services | [/services/seo-services](http://127.0.0.1:3000/services/seo-services) | Local preview; owner review pending |
| PUB-S019 | Google Ads Management | [/services/google-ads-management](http://127.0.0.1:3000/services/google-ads-management) | Local preview; owner review pending |
| PUB-S020 | Social Media Management | [/services/social-media-management](http://127.0.0.1:3000/services/social-media-management) | Local preview; owner review pending |
| PUB-S021 | Meta Ads Management | [/services/meta-ads-management](http://127.0.0.1:3000/services/meta-ads-management) | Local preview; owner review pending |
| PUB-S022 | Content Marketing | [/services/content-marketing](http://127.0.0.1:3000/services/content-marketing) | Local preview; owner review pending |
| PUB-S023 | Email Marketing | [/services/email-marketing](http://127.0.0.1:3000/services/email-marketing) | Local preview; owner review pending |
| PUB-S024 | Local SEO / Google Business Profile | [/services/local-seo-google-business-profile](http://127.0.0.1:3000/services/local-seo-google-business-profile) | Local preview; owner review pending |
| PUB-S025 | Conversion Rate Optimization & Analytics | [/services/conversion-rate-optimization-analytics](http://127.0.0.1:3000/services/conversion-rate-optimization-analytics) | Local preview; owner review pending |
| PUB-S026 | Digital Marketing Consulting | [/services/digital-marketing-consulting](http://127.0.0.1:3000/services/digital-marketing-consulting) | Local preview; owner review pending |
| PUB-S027 | Cloud Infrastructure Setup | [/services/cloud-infrastructure-setup](http://127.0.0.1:3000/services/cloud-infrastructure-setup) | Local preview; owner review pending |
| PUB-S028 | Application Deployment | [/services/application-deployment](http://127.0.0.1:3000/services/application-deployment) | Local preview; owner review pending |
| PUB-S029 | CI/CD Pipeline Setup | [/services/ci-cd-pipeline-setup](http://127.0.0.1:3000/services/ci-cd-pipeline-setup) | Local preview; owner review pending |
| PUB-S030 | Docker Containerization | [/services/docker-containerization](http://127.0.0.1:3000/services/docker-containerization) | Local preview; owner review pending |
| PUB-S031 | Infrastructure as Code | [/services/infrastructure-as-code](http://127.0.0.1:3000/services/infrastructure-as-code) | Local preview; owner review pending |
| PUB-S032 | Monitoring & Observability | [/services/monitoring-observability](http://127.0.0.1:3000/services/monitoring-observability) | Local preview; owner review pending |
| PUB-S033 | Cloud Security & Backup | [/services/cloud-security-backup](http://127.0.0.1:3000/services/cloud-security-backup) | Local preview; owner review pending |
| PUB-S034 | Managed Cloud Services | [/services/managed-cloud-services](http://127.0.0.1:3000/services/managed-cloud-services) | Local preview; owner review pending |
| PUB-S035 | Web Application Security Assessment | [/services/web-application-security-assessment](http://127.0.0.1:3000/services/web-application-security-assessment) | Local preview; owner review pending |
| PUB-S036 | Vulnerability Assessment / Penetration Testing | [/services/vulnerability-assessment-penetration-testing](http://127.0.0.1:3000/services/vulnerability-assessment-penetration-testing) | Local preview; owner review pending |
| PUB-S037 | Cloud Security Assessment | [/services/cloud-security-assessment](http://127.0.0.1:3000/services/cloud-security-assessment) | Local preview; owner review pending |
| PUB-S038 | Security Hardening | [/services/security-hardening](http://127.0.0.1:3000/services/security-hardening) | Local preview; owner review pending |
| PUB-S039 | Identity & Access / Email Security | [/services/identity-access-email-security](http://127.0.0.1:3000/services/identity-access-email-security) | Local preview; owner review pending |
| PUB-S040 | Security Awareness Training | [/services/security-awareness-training](http://127.0.0.1:3000/services/security-awareness-training) | Local preview; owner review pending |
| PUB-S041 | Compliance Readiness | [/services/compliance-readiness](http://127.0.0.1:3000/services/compliance-readiness) | Local preview; owner review pending |
| PUB-S042 | Managed Security Services | [/services/managed-security-services](http://127.0.0.1:3000/services/managed-security-services) | Local preview; owner review pending |
| PUB-S043 | Website UI/UX Design | [/services/website-ui-ux-design](http://127.0.0.1:3000/services/website-ui-ux-design) | Local preview; owner review pending |
| PUB-S044 | SaaS Dashboard UI/UX | [/services/saas-dashboard-ui-ux](http://127.0.0.1:3000/services/saas-dashboard-ui-ux) | Local preview; owner review pending |
| PUB-S045 | Logo & Brand Identity | [/services/logo-brand-identity](http://127.0.0.1:3000/services/logo-brand-identity) | Local preview; owner review pending |
| PUB-S046 | Graphic Design | [/services/graphic-design](http://127.0.0.1:3000/services/graphic-design) | Local preview; owner review pending |
| PUB-S047 | Landing Page Design | [/services/landing-page-design](http://127.0.0.1:3000/services/landing-page-design) | Local preview; owner review pending |
| PUB-S048 | UX Audit | [/services/ux-audit](http://127.0.0.1:3000/services/ux-audit) | Local preview; owner review pending |
| PUB-S049 | Monthly Design Support | [/services/monthly-design-support](http://127.0.0.1:3000/services/monthly-design-support) | Local preview; owner review pending |
| PUB-S050 | Short-form Video Editing | [/services/short-form-video-editing](http://127.0.0.1:3000/services/short-form-video-editing) | Local preview; owner review pending |
| PUB-S051 | YouTube Video Editing | [/services/youtube-video-editing](http://127.0.0.1:3000/services/youtube-video-editing) | Local preview; owner review pending |
| PUB-S052 | Promotional / Ad Video | [/services/promotional-ad-video](http://127.0.0.1:3000/services/promotional-ad-video) | Local preview; owner review pending |
| PUB-S053 | Corporate Video Production | [/services/corporate-video-production](http://127.0.0.1:3000/services/corporate-video-production) | Local preview; owner review pending |
| PUB-S054 | Motion Graphics | [/services/motion-graphics](http://127.0.0.1:3000/services/motion-graphics) | Local preview; owner review pending |
| PUB-S055 | Podcast Editing | [/services/podcast-editing](http://127.0.0.1:3000/services/podcast-editing) | Local preview; owner review pending |
| PUB-S056 | Captions / Subtitles | [/services/captions-subtitles](http://127.0.0.1:3000/services/captions-subtitles) | Local preview; owner review pending |
| PUB-S057 | Monthly Video Editing | [/services/monthly-video-editing](http://127.0.0.1:3000/services/monthly-video-editing) | Local preview; owner review pending |
| SOL-01 | Digital Presence | [/solutions/digital-presence](http://127.0.0.1:3000/solutions/digital-presence) | Local preview; owner review pending |
| SOL-02 | Business Automation | [/solutions/business-automation](http://127.0.0.1:3000/solutions/business-automation) | Local preview; owner review pending |
| SOL-03 | Business Growth | [/solutions/business-growth](http://127.0.0.1:3000/solutions/business-growth) | Local preview; owner review pending |
| SOL-04 | Cloud & Technology | [/solutions/cloud-technology](http://127.0.0.1:3000/solutions/cloud-technology) | Local preview; owner review pending |
| SOL-05 | Complete Digital Business | [/solutions/complete-digital-business](http://127.0.0.1:3000/solutions/complete-digital-business) | Local preview; owner review pending |
| TRU-01 | Cookie Information | `/cookies` | Conditional; not activated |
| TRU-02 | Accessibility Statement | `/accessibility` | Conditional; not activated |
| TRU-03 | Responsible Disclosure | `/security` | Conditional; not activated |

## Detailed help instances

- [/faq/services](http://127.0.0.1:3000/faq/services)
- [/faq/not-sure](http://127.0.0.1:3000/faq/not-sure)
- [/faq/starting-prices](http://127.0.0.1:3000/faq/starting-prices)
- [/faq/timelines](http://127.0.0.1:3000/faq/timelines)
- [/faq/international](http://127.0.0.1:3000/faq/international)
- [/faq/maintenance](http://127.0.0.1:3000/faq/maintenance)

## Review checklist

- Confirm service/solution descriptions, prices, units and what you currently offer.
- Check navigation, all template variants, mobile layouts and all three colors/themes.
- Confirm operator, contact and policy facts reflect your actual business operations.
- Check Contact, Quote and Consultation with synthetic text using their submit buttons; keep the saved reference and inspect development test emails in your configured inbox.
- Confirm the automatic inbox notification contains enough client information to respond. Dashboard management stays postponed.
- Review real screenshots/assets and permissions; no invented clients, testimonials or certifications.
- Complete human keyboard/screen-reader/device review before release.
- Approve publication separately after remaining runtime/inquiry/deployment gates pass.
