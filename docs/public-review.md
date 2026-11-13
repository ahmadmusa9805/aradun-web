# Public website review packet

2026-11-13. Client-facing launch first; personal dashboard/CRM/staff work deferred. Local preview and automated checks do not mean production publication. Review each page and client function below before launch.

## Start the preview

With Node 24 active, use two terminals at the repository root:

```sh
npm run frontend
npm run backend
```

Open http://127.0.0.1:3000. Atlas connects, but its selected development database still needs reviewed application collections/indexes before the configured backend can start. Do not reset or drop any database. See [actual readiness and remaining work](verification/public-launch-readiness.md).

## Client functions to review

Update 2026-11-13: staff notification links and truthful saved-request/email-off/unconfirmed receipt messaging are [implemented and tested](verification/m06-06-email-handoff.md). Actual sending/queue/intake and Atlas foundation remain off/unprepared; this does not claim live form operation.

Update 2026-11-13: the minimum protected inquiry list/detail and safe manual reply controls are [implemented and fixture-verified](verification/m06-06-inquiry-reader.md). This is the owner response path needed for client inquiries, not full dashboard/CRM work. Actual Atlas setup, authorized owner session and intake/email activation remain outstanding; current password-only self-account mode cannot access private inquiries.

| Function | What to try | Actual status |
| --- | --- | --- |
| Navigation | Desktop/mobile menus, keyboard and footer destinations | Automated PASS |
| Catalog | Eight categories, 57 unique services, 58 memberships | Implemented; local route/identity checks PASS |
| Solutions/pricing | Five solutions, indicative prices, units and scope | Local preview; commercial review pending |
| Search | Search services/help, empty results and unavailable states | Automated PASS |
| FAQ/help | Six detailed guides and related links | Implemented and locally checked |
| Contact | Valid/invalid input, consent, retry, receipt | Disposable-fixture PASS; actual intake disabled |
| Quote | Category/service/package context, editable selections, Back, custom scope | Disposable-fixture PASS; actual intake disabled |
| Consultation | Optional notes, receipt; no false booking confirmation | Disposable-fixture PASS; actual intake disabled |
| Email alternatives | Direct email links including without JavaScript | Implemented; website does not send through mailto |
| Automated email | Acknowledgement, owner alert, retries, receiving full inquiry | Mocked integration PASS; actual operation disabled/incomplete |
| Themes/accessibility | Terracotta, Slate Blue, Vivid Blue; keyboard, mobile and enlarged text | Automated checks PASS; human review pending |
| SEO/privacy | Titles, canonicals, operator/policy wording, indexing | Metadata checked; indexing intentionally closed pending release |

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
- Check Contact, Quote and Consultation first with synthetic review data after explicit activation.
- Confirm full inquiry reaches an authorized owner workflow and you can reply; a reference-only alert is insufficient by itself.
- Review real screenshots/assets and permissions; no invented clients, testimonials or certifications.
- Complete human keyboard/screen-reader/device review before release.
- Approve publication separately after remaining runtime/inquiry/deployment gates pass.
