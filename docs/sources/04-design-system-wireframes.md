# ARADUN — UI/UX Design System, Wireframes & Premium Motion Design

**Filename:** `04-design-system-wireframes.md`  
**Version:** 1.1.0 — final Step 4 consolidation  
**Date:** 25 October 2026  
**Approval status:** Owner-declared Step 4 completed and approved; final consolidation authorized. Approved direction, source conditions, and unresolved decisions are distinguished below.  
**Owner/approver:** ARADUN project owner  
**Identity:** ARADUN — Technology & Digital Solutions  
**Tagline:** Build. Automate. Grow.  
**Boundary:** Design planning and implementation guidance only. No implementation code, database design, API contract, installation, deployment, or Step 5 work is included.

**Controlled update 1.1.0 — 25 October 2026:** Owner-authorized documentation-only amendment limited to the requested architecture, local-development database, solo-maintainer engineering rules and three-theme system where relevant. Unrelated requirements and unresolved gates remain unchanged. Earlier source-register versions/fingerprints and historical approval entries identify the pre-update inputs, not hashes of these revised files; current amended sections govern only these four changes. No implementation or Project Sources replacement is claimed.

## Contents

1. [Authority, approval and scope](#1-authority-approval-and-scope)
2. [Brand and creative direction](#2-brand-and-creative-direction)
3. [Color and theme system](#3-color-and-theme-system)
4. [Typography](#4-typography)
5. [Layout, responsive behavior and design tokens](#5-layout-responsive-behavior-and-design-tokens)
6. [Reusable component system](#6-reusable-component-system)
7. [Motion system and animation mapping](#7-motion-system-and-animation-mapping)
8. [Global navigation and shared shells](#8-global-navigation-and-shared-shells)
9. [Public, authentication and dashboard template wireframes](#9-public-authentication-and-dashboard-template-wireframes)
10. [Page-by-page wireframe coverage — all phases](#10-page-by-page-wireframe-coverage--all-phases)
11. [Conversion and editorial workflows](#11-conversion-and-editorial-workflows)
12. [Accessibility and inclusive interaction](#12-accessibility-and-inclusive-interaction)
13. [Performance, frontend guidance and verification](#13-performance-frontend-guidance-and-verification)
14. [Requirement traceability and preserved commercial catalog](#14-requirement-traceability-and-preserved-commercial-catalog)
15. [Unresolved decisions and future implementation notes](#15-unresolved-decisions-and-future-implementation-notes)
16. [Final audit and version record](#16-final-audit-and-version-record)
17. [Authoritative technical references](#17-authoritative-technical-references)

## 1. Authority, approval and scope

### 1.1 Source hierarchy

| Ref | Source | Authority |
|---|---|---|
| S-MASTER | `01-master-requirements.md` v0.2.0 | Business identity, catalog, prices, functional requirements, phase qualifications and business/quality requirements. Owner-designated planning reference with scoped amendment approved. |
| S-SITEMAP | `02-pages-sitemap.md` v1.1.0 | Exact supplied page IDs, route spellings, access, navigation, hierarchy and phase allocations. Step 2 final consolidation; conditional allocations remain conditional. |
| S-SECTIONS | `03-page-sections.md` v1.0.0 | Approved ordered section/UI-region recipes, page-specific content, state rules, trust/SEO/conversion requirements. |
| C4-BRIEF | Uploaded `Pasted text(2).txt`, Step 4 instructions | Design-only scope; complete tokens/components/wireframes; CSS, Motion and selective GSAP; responsive, accessibility, performance and maintainability requirements. |
| C4-DECISIONS | Owner decisions in Chat 4, summarized in §1.2 | Supersede only the specifically changed earlier visual decisions. |
| C4-FINAL | Owner's final generation instruction | Declares Step 4 completed/approved and authorizes this full downloadable consolidation. |
| R4 | Detailed design specifications supplied in this consolidation | Makes the approved direction actionable without inventing historical individual approvals, business facts or missing provider/workflow decisions. |

The visible Chat 4 mainly reviewed visual directions, colors, logo recoloring and the original two-theme decision; the 25 October 2026 owner amendment adds Vivid Blue as the third light theme. Detailed typography, tokens, components, motion timings and all page wireframes were not individually walked through in the visible conversation. They are supplied here as **consolidated design specifications under the final generation authorization**, not falsely described as earlier individually approved decisions. Named unresolved business, permission, provider and workflow decisions remain unresolved. This qualification does not leave requested template coverage incomplete.

A/B/R/C in retained source records are provenance: A = carried public inventory; B = confirmed capability with allocated private route; R = future/proposed allocation; C = conditional decision. Final document generation does not erase these codes. Earlier source wording that Step 3 or Step 4 had not begun is historical stage metadata, superseded only by the subsequent completion instructions.

### 1.2 Chat 4 decision register

| ID | Decision / authority | Treatment |
|---|---|---|
| C4-01 | Owner selects the **first Editorial Technology Studio** concept. | Original calm warm off-white surface, dark charcoal typography, strong whitespace, selective asymmetry, restrained dark terracotta and matte geometry govern. |
| C4-02 | Owner wants to retain the muted-blue version and switch themes from the website; 25 October 2026 amendment adds Vivid Blue. | Three light color themes: Editorial Terracotta default; Muted Slate Blue and Vivid Blue alternates. Same content/layout, alternate accents and artwork. This is an explicit P1 visual capability amendment, not a new page. |
| C4-03 | Owner requests logo color to change with theme. | Retain folded-A identity; terracotta/slate/vivid-blue symbol variants, charcoal wordmark, matching dimensions. Final production vector geometry and header lockup still require asset QA. |
| C4-04 | Original composition preferred over later copper/clay, busy or glossy alternatives. | Do not substitute the later full-page mockup's busier treatment, larger logo, plants, broad blue/cyan washes, glow or metallic effects as the approved visual reference. |
| C4-05 | Original header is notably spacious and uses a text wordmark. | Preserve that visual weight. A compact symbol-plus-wordmark may satisfy C4-03 without crowding navigation; final header lockup is an explicit remaining detail, not permission to enlarge the logo. |
| C4-06 | Both Motion for React and GSAP approved selectively. | CSS first for basic states; Motion for component transitions; GSAP only for justified coordinated sequences. Neither must be imported everywhere; never share animation ownership of an element. |
| C4-07 | Performance, comfort, accessibility and solo-developer maintenance are priorities. | Progressive enhancement, reduced motion, readable initial content, reusable templates, limited dependencies and measurable QA. |
| C4-08 | Labeled demo/sample content permitted by project instructions. | Centralize unpublished mock content; visibly label every fictional proof item. No fictional client evidence or credentials in production. |
| C4-09 | Owner approves final Step 4 consolidation. | This version is the final planning handoff; no Step 5 or implementation is authorized by this artifact. |

**Supersession:** The old navy/teal/gold palette in S-MASTER §9.3 and the brand-alternative part of D-022 are superseded by C4-01/02. Inter remains the retained typeface. D-022's eight-category, five-solution, route, CTA and architecture protections remain unchanged. Earlier blue options and suggested new logo shapes were explorations; only the specifically approved Vivid Blue alternate is now added, without changing logo geometry.

### 1.3 Complete scope and counting

| Allocation | Pages / reusable route templates | Shared states | Planning items |
|---|---:|---:|---:|
| Phase 1 | 122 | 2 | 124 |
| Phase 2 additions | 62 | 0 | 62 |
| Phase 3 additions | 28 | 0 | 28 |
| Product Terms — P2/P3 timing unresolved | 1 | 0 | 1 |
| **Total** | **213** | **2** | **215** |

P1 = 91 public entries + 4 staff authentication entries + 27 dashboard entries + 2 shared states. Public entries comprise 85 fixed core/catalog routes, 3 repeatable content-detail templates and 3 conditional policy pages. All 57 unique service pages are planned. Their 58 category memberships include one cross-listed Mobile App UI/UX Design identity, not a duplicate page. The former 38-page first-publication subset is not the build-planning limit.

The 35 source recipes are shared structures, not 35 unrelated visual brands. Each page's complete wireframe is: **shared shell + ordered source recipe + responsive composition in §9 + exact page specialization in §10 + states/access/motion rules**. Future pages receive high-level layouts only. Evidence slots remain in the plan; absent genuine evidence is a reason to omit that public slot, not fabricate content.

## 2. Brand and creative direction

### 2.1 Identity and personality

ARADUN is a global multidisciplinary B2B technology and digital services business. Preserve all eight categories, 57 services, five source-named solutions and the professional-services/owned-products strategic distinction. Do not imply that products are released, that an AMS exists, or that industry expertise is certified without evidence.

Design personality: clear, capable, composed, thoughtful, technically credible and creatively confident. Editorial principles: business meaning before decoration; typography before effects; visible actionable choices; consistent alignment; evidence before unsupported claims; expressive marketing with efficient internal tools. These are design intentions, not claims of market leadership.

The original editorial reference works through a clear headline-to-copy-to-action hierarchy, restrained accent use, uncluttered geometry and well-separated service choices. Its warmth is a visual preference, not a medical claim about eye strain or proof of greater conversion. All three selected themes retain that composition. Avoid describing one palette as guaranteed to attract or retain clients.

### 2.2 Reference fidelity and imagery

- Primary visual reference: `Aradun editorial technology website concept(1).png` — original text-only header, terracotta/stone hero, large charcoal three-line tagline, two CTAs, ruled eight-service grid.
- Alternate reference: `Muted blue Aradun editorial homepage(1).png` — same composition with matte slate-blue accents.
- Vivid Blue reference: `Minimal Blue Editorial Studio Website.png`, inspected for this update. Preserve the same editorial composition, charcoal typography and neutral service icons; controlled blue buttons, logo symbol, links/focus/selection and appropriate geometric hero accents only. Shared neutral backgrounds remain unchanged; no blue background wash, glow, blur or colored shadow. Supplied HEX values are design targets, not pixel samples.
- Generated full-page previews are exploratory; their tiny text, accidental numbering, dates, prices or claims do not override the source documents. The original reference is not proof of a specific font, exact measured HEX value, responsive behavior or working interaction.
- Preserve matte stone/abstract geometric hero language. Technology credibility comes from meaningful service copy and permitted software screens, workflows, annotated technical artifacts and project evidence elsewhere. Do not turn the site into an architecture/lifestyle portfolio.
- Photography: genuine people and work context with permission; natural lighting, neutral backgrounds, clear crops. No implied fictional staff or offices. Avoid stock handshakes and robot illustrations.
- Illustrations: purposeful diagrams with labeled relationships; restrained abstract texture only in selected decorative areas. Accurate information diagrams should be authored as exact graphics later, not trusted to generated image text.
- Project imagery retains Client Work / Internal Product / Concept–Demo classification. Preserve meaningful full-screen content in detail views; crop only nonessential preview edges. Never recolor or distort real client screenshots just to match the theme.
- Icons: one consistent outline family, approximately 1.5–2px optical stroke at 24px. Functional icons have labels or accessible names; decorative icons are ignored by assistive technology. Icon library selection remains a later dependency choice.

### 2.3 Logo system

Retain the supplied folded-A silhouette and ARADUN lettering as the starting identity. Recoloring is approved; replacement monograms explored during Chat 4 are not the selected mark. Existing generated recolor previews are raster concepts, not exact vector masters or trademark clearance.

| Logo use | Specification |
|---|---|
| Default light-surface lockup | Terracotta symbol; charcoal lettering. Keep original proportions and optical alignment. |
| Alternate light-surface lockup | Identical geometry; Muted Slate Blue or Vivid Blue symbol matching the selected primary button color; same charcoal lettering. |
| Dark footer/feature surface | Approved white/ivory single-color variant; never charcoal lettering on charcoal. |
| Small icon / favicon | Symbol-only simplified production export after small-size inspection; retain recognizable silhouette. |
| Header | Target 140–176px lockup width and 28–36px visible height; text-only alternative may be retained if the icon crowds navigation. Exact lockup remains U4-02. |
| Clear space | At least half the symbol cap height around full lockup; do not put navigation or borders inside it. |
| Export acceptance | Same viewBox, crop and dimensions for all three themes; no baked background, halo, edge artifacts or rescaling jump. Check at 16/24/32px symbol sizes and actual header size. |

Do not stretch, rotate, bevel, add glows, change letter spacing arbitrarily or put a decorative logo beside another dominant A. The descriptor and tagline are optional larger-brand applications, not mandatory tiny header text. Use a single meaningful accessible name for a linked logo; avoid reading duplicate symbol/wordmark labels. Terracotta is the default external brand treatment for proposals/socials unless a separate use is approved; website preference does not mutate exported brand files.

## 3. Color and theme system

### 3.1 Semantic colors

Values below are **R4 implementation-ready design targets** derived from the approved direction, not claims of exact pixel sampling from generated images. Use opaque colors for functional text/controls; decorative artwork may have natural tonal variation. Theme changes only affect the theme-dependent roles.

| CSS custom-property name | Terracotta default | Slate-blue alternate | Vivid Blue alternate | Role |
|---|---|---|---|---|
| `--color-page` | `#F7F4EE` | same | same | Main editorial background |
| `--color-surface` | `#FFFFFF` | same | same | Forms, cards, dialogs, dashboard panels |
| `--color-surface-subtle` | `#EFEAE2` | same | same | Quiet section/panel distinction |
| `--color-text` | `#20201E` | same | same | Headings and primary body text |
| `--color-text-muted` | `#625E58` | same | same | Supporting copy and metadata |
| `--color-text-inverse` | `#F7F4EE` | same | same | Text on charcoal surfaces |
| `--color-border-subtle` | `#D8D2C8` | same | same | Decorative dividers; not sufficient alone to identify inputs |
| `--color-border-control` | `#817A70` | same | same | Necessary control outlines on light surfaces |
| `--color-brand` | `#AF432D` | `#3F617B` | `#0066FF` | Primary buttons and accent identity |
| `--color-brand-hover` | `#963823` | `#344F65` | `#0057DB` | Hover on primary controls |
| `--color-brand-active` | `#7B2E1D` | `#293F51` | `#0047B3` | Pressed state |
| `--color-brand-soft` | `#F5E7E1` | `#E7EDF2` | `#EAF1FF` | Selected pale fill; pair with brand text and explicit indicator |
| `--color-on-brand` | `#FFFFFF` | same | `#FFFFFF` | Text/icons on brand fill |
| `--color-focus` | `#AF432D` | `#3F617B` | `#0066FF` | Focus outline on neutral light surfaces |
| `--color-surface-inverse` | `#20201E` | same | same | Occasional final CTA/footer, not a site-wide dark theme |
| `--color-link-inverse` | `#F2C3B6` | `#C4DAEB` | `#BFD7FF` | Links/focus accent within dark surfaces |
| `--color-disabled-bg` | `#E5E0D8` | same | same | Disabled control background |
| `--color-disabled-text` | `#625E58` | same | same | Disabled label, plus actual disabled semantics |
| `--color-selection-bg` | `#F5E7E1` | `#E7EDF2` | `#EAF1FF` | Text/row selection surface, with charcoal text |

| Semantic state | Foreground/icon | Background | Meaning and treatment |
|---|---|---|---|
| Success | `#24613B` | `#EDF7EF` | Saved/completed/verified; text label and suitable icon |
| Warning | `#805300` | `#FFF4D6` | Attention needed; never mistaken for an error or success |
| Error/destructive | `#A12622` | `#FCEDEB` | Specific invalid/failed/destructive state; label and help |
| Information | `#315F7A` | `#EDF4F8` | Neutral explanation; not a promise or a theme-selection indicator |

State colors are stable across themes. Status meaning must not depend on accent hue. Terracotta buttons and error messages need different words/icons/context even though both are warm colors. Highlighting a pipeline stage is not proof of success or payment.

### 3.2 Pairing rules and contrast

Normal text must reach 4.5:1; qualifying large text 3:1. Required non-text control boundaries/state indicators must reach 3:1 against adjacent colors. These are checks on actual pairings, not a palette-wide accessibility certification. See technical references W1–W3. The calculated opaque-pair results appear in §16; translucent overlays, photographs, hover, selected and focus states need implementation checks as well.

Use charcoal/muted text on light surfaces; white on primary brand buttons; inverse text on charcoal. Body links are underlined, including on hover/focus, so color is not the only distinction. Decorative pale borders may remain subtle; form borders use the stronger control token. A two-layer focus treatment uses a 2px surface-colored gap plus a 2px contrasting outline; inverse sections use a light outline. Focus is immediate, never delayed by transition. Do not place low-contrast muted text over artwork or treat a logo exemption as permission for illegible navigation.

**Vivid Blue contrast finding — 25 October 2026:** Approved token values are retained. White on `#0066FF` is 4.83:1; white on hover `#0057DB` is 6.20:1 and active `#0047B3` is 8.23:1 (normal-text pass). `#0066FF` normal text on page `#F7F4EE` is **4.40:1**, on subtle surface `#EFEAE2` **4.04:1**, and on brand-soft/selection `#EAF1FF` **4.26:1**: these fail 4.5:1, although each exceeds 3:1 for qualifying large text/non-text indicators. Do not use those failing combinations for normal-size links or selected labels. Necessary correction remains an explicit component-use decision: recommend existing charcoal text plus underline/blue indicator, or owner-approved use of existing `#0057DB` for those text roles (5.65:1, 5.18:1, 5.47:1 respectively). No token value is changed and this recommendation is not silently adopted. Charcoal on `#EAF1FF` is 14.40:1; inverse link `#BFD7FF` on charcoal is 11.17:1. Test real component backgrounds, focus gaps, states and opacity before release; underlining alone does not fix insufficient text/background contrast.

### 3.3 Theme-switching contract — DS-THEME-01

The owner-approved theme capability is additive to the existing scope, with no new route or change to business data. All three choices are light themes. Default to **Editorial Terracotta** when no valid saved preference exists. **Muted Slate Blue** and **Vivid Blue** are equal-function alternates. A full dark mode and automatic day/night switching are not approved.

| Concern | Required behavior |
|---|---|
| Control | Compact Appearance control in header utilities; on narrow layouts in mobile menu; optional footer duplicate uses same state. Labels Editorial Terracotta, Muted Slate Blue and Vivid Blue, selected checkmark and accessible radio-group semantics. Swatches alone are insufficient. |
| Preference | Remember only the user's theme choice on the current device/browser. Retain existing storage key and saved `terracotta`/`slate-blue` values; the Slate Blue label becomes Muted Slate Blue without changing its stored value. Add `vivid-blue`; unknown values fall back to Terracotta. Do not reset valid existing preferences. Storage unavailable/invalid: use current-session choice and safe default without failing the page. No cross-device account preference or marketing profiling implied. |
| Scope | Apply throughout the public site. Reuse compatible tokens in staff UI; placement/persistence sharing for staff is a consolidated recommendation, not a new settings module. |
| What changes | Accent controls/links/selected states, logo symbol, approved decorative theme artwork. Neutral typography, layout, real project screenshots, semantic statuses and data remain stable. |
| Rendering | Consistent initial theme, no visible wrong-theme flash or hydration mismatch. Keep static content server-rendered. Final storage/initial-render mechanism belongs to later implementation design. |
| Safety | No reload, scroll jump, loss of entered form values, changed pricing, altered quote context or reset of filter/step. Keep keyboard focus on the control and announce the selected theme briefly. |
| Assets | Equal intrinsic dimensions for logo/hero variants; reserve layout. Avoid downloading all large hero assets eagerly. Keep current valid asset visible while an alternate loads; failure must not leave a blank hero. |
| Motion | Instant token update or at most a 120ms color fade; no full-screen wipe or hero timeline restart. Reduced motion uses immediate change. |
| QA | All three themes across public templates, forms, dialogs and shared states; refresh, navigation, storage failure, zoom and keyboard tests. Check production SVG fills and text against actual surfaces. Include legacy saved preferences, all six directed theme-switch pairs, unchanged URL/scroll/focus/form state and the Vivid Blue contrast limitations in §3.2. |

## 4. Typography

### 4.1 Font system

Retain **Inter** for display, body and UI. A single family supports editorial impact without a second font dependency. Use 400 regular, 500 medium, 600 semibold, 700 bold and 800 extra-bold where needed; only ship actual used weights or a measured variable subset. No assumed Manrope replacement or invented exact font extraction from mockups. Use a sensible system sans fallback, with matched metrics where supported. Monetary/table numbers use tabular figures; long IDs wrap or have an explicitly named copy action if justified.

| Token | Mobile <768px | Tablet 768–1199px | Desktop ≥1200px | Weight / line-height / tracking |
|---|---:|---:|---:|---|
| `--type-display` | 44–64px | 68–88px | 88–112px | 800 / 1.02 / −0.035em |
| `--type-h1` | 36–44px | 48–56px | 56–64px | 700 / 1.08 / −0.025em |
| `--type-h2` | 28–32px | 34–40px | 40–48px | 700 / 1.15 / −0.02em |
| `--type-h3` | 22–24px | 24–28px | 28–32px | 600–700 / 1.25 / −0.01em |
| `--type-h4` | 18–20px | 20px | 20–22px | 600 / 1.35 / normal |
| `--type-lead` | 18px | 20px | 22–24px | 400 / 1.5 / normal |
| `--type-body` | 16px | 16–18px | 18px marketing; 16px app | 400 / 1.6 / normal |
| `--type-ui` | 16px controls | 14–16px | 14–16px | 500 / 1.4 / normal |
| `--type-small` | 14px | 14px | 14px | 400 / 1.5 / normal |
| `--type-eyebrow` | 12px | 12px | 12px | 600 / 1.5 / 0.12em; short labels only |

Fluid type must interpolate between these bounds with rem-based limits; do not tie size entirely to viewport units or prevent browser zoom. The display token is reserved for the homepage/selected marketing hero, not every heading or dashboard page. A 320px viewport must allow the longest word “Automate.” to fit or scale within the bounded mobile treatment; never crop it. Prefer 44–48px at the narrowest widths. Test actual glyph widths, 200% text resize and 400% page zoom.

One meaningful H1 per page. The Home tagline may be its H1 if the nearby descriptor/support clearly explains the offering. Source draft H1 alternatives remain copy options, not a reason to render two H1s. Section H2s and card H3s follow semantic hierarchy independently of font size. Avoid font-weight-driven heading misuse.

Paragraphs aim for 55–75 characters per line with a 720px reading container. Hero supporting copy is roughly 34–46 characters wide. Left-align paragraphs and long headings. Center only brief confirmation/status text where useful. No justified paragraphs. On wide Home hero, intentional three-line tagline is retained; other headings wrap naturally. Never hardcode line breaks that produce a single tiny word or hide meaning on mobile.

### 4.2 Font delivery and editorial quality

Use self-hosted optimized WOFF2 via the approved framework's font facilities where appropriate; preload only the critical family/style subset, reserve fallback metrics and avoid render-blocking third-party font CSS. Font-loading details and licenses are verified at implementation. No unnecessary italic/display families. Check layout after font load, missing-font fallback, long labels, real article titles and translated-length stress strings without introducing unapproved multilingual routes. Avoid faux bold and ultra-light body copy.

## 5. Layout, responsive behavior and design tokens

### 5.1 Breakpoints and containers

Breakpoints are R4 layout specifications; content fit overrides an arbitrary device name. Values are CSS pixels at default zoom. Tailwind's configured breakpoint mapping must reflect these names consistently; do not assume its default `lg` equals the proposed desktop threshold.

| Band | Range | Grid / gutters | Navigation / content behavior |
|---|---|---|---|
| Compact | 320–639px | 4 columns; 16px gutters; 16px grid gap | Single-column reading; stacked forms; drawer navigation |
| Wide mobile | 640–767px | 4 columns; 24px gutters; 20px gap | Two short cards where labels fit; no squeezed comparisons |
| Tablet | 768–1199px | 8 columns; 32px gutters; 24px gap | Two-column collections; mobile/compact header; no hover dependency |
| Desktop | 1200–1535px | 12 columns; 40px outer minimum; 24–32px gap | Full header only when all items plus utilities fit; 1280px max container |
| Wide desktop | ≥1536px | 12 columns within 1280px max; centered | Whitespace grows; paragraphs and controls do not stretch indefinitely |

Marketing container max 1280px; compact commercial/form container 960px; article/policy text 720px; single-task form 640px; authentication form 440px. Staff working canvas may extend to 1600px for meaningful tables, with 256px sidebar and 24/32px inner gutters. Content never depends on fixed viewport height; hero is content-sized, not compulsory 100vh. Avoid page-level horizontal scrolling.

Public header target height 80px desktop, 64px compact. Full navigation may remain collapsed between 1200 and 1280px if the logo, theme and search controls crowd labels. Do not remove Contact, shorten approved names silently or shrink targets to make it fit. Staff top bar 64px; tablet/sidebar below 1024px becomes drawer; wider compact sidebars are optional only if labels remain understandable.

### 5.2 Spacing and dimensions

| Token family | Values / application |
|---|---|
| Spacing scale | `--space-1` 4px; 2=8px; 3=12px; 4=16px; 5=20px; 6=24px; 8=32px; 10=40px; 12=48px; 16=64px; 20=80px; 24=96px; 28=112px; 32=128px |
| Section padding block | 48px mobile; 64px tablet; 88–96px desktop. Major hero 56/72/96px. Compact utility sections 32/40/48px. |
| Section heading → content | 24/32/40px by compact/tablet/desktop |
| Heading → support copy | 12–16px; support → main actions 24–32px |
| Card/panel padding | 20px mobile; 24px tablet; 32px desktop feature; 16–24px dashboard |
| Field group gap | 20–24px; label → control 8px; control → help/error 6–8px |
| Inline action gap | 12–16px; allow wrap with maintained reading order |
| Buttons | Primary 48px min height desktop, 48px compact; compact app actions 40px visual height with ≥44px touch hit area where possible; horizontal padding 20–24px |
| Inputs/select triggers | 48px public forms; 44px app default; textarea minimum 144px, user-resizable vertically |
| Table rows | 56px default, 48px compact desktop only; variable height for wrapped meaningful text |
| Icon sizes | 16px inline, 20px controls, 24px navigation, 32px selected service illustrations; hit target larger than glyph |
| Touch target | Project default ≥44×44px; true narrow exceptions follow §12, never icon-size-only hitboxes |
| Radius | 0px editorial rows; 4px buttons/inputs; 8px panels/cards; 12px dialogs; full only badges/avatars |
| Borders | 1px normal; 2px selected/focus treatment where necessary |
| Elevation | Base none; hover subtle 0 4px 16px charcoal at 6%; popover 0 12px 32px at 12%; modal 0 20px 64px at 18%. No floating-shadow overload. |
| Overlay | Charcoal at 40% for modal scrim; contrast tested on dialog itself, not through background |
| Z-index scale | base 0; local overlay 10; sticky 20; navigation/popover 30; modal backdrop 40; modal 50; toast 60. Portals/stacking contexts audited; no arbitrary 99999. |

Whitespace supports scanning; it must not inflate short utility pages. No mandatory card height that clips a long service name or translated-length stress text. Images have fixed aspect-ratio reservations where appropriate (project previews 16:10, editorial thumbnails 3:2) with a deliberate crop; full technical screenshots use contain/zoomable detail where warranted.

### 5.3 Composition and responsive interaction

Home hero uses a 7/5 text/art split on desktop, with a balanced 6/6 permitted when actual headline fit benefits; text is first in source and visual reading order. Tablet narrows art or stacks below the text before copy becomes cramped. Mobile puts heading, explanation and both actions before art. Decorative sculpture can be smaller, cropped only decoratively, or omitted on very small screens; core meaning cannot disappear with it.

Use selective asymmetric work showcases and short supporting sidebars. Keep source section order in the DOM; responsive repositioning must not make focus/read order confusing. Eight Home service categories use a ruled 4×2 desktop grid, 2×4 tablet and 1×8 narrow mobile. Five solutions use a deliberate 3+2 arrangement or editorial list, not five unreadable columns. Pricing is compared in accessible tables/cards; preserve units and exclusions with every price.

Bento treatments are optional presentations inside existing service/solution/work regions, not additional sections. At most one expressive bento arrangement per ordinary marketing page. Order, labels and links remain visible without hover; all eight categories and five solutions retain fair discoverability. Mobile becomes a normal ordered stack. No uneven visual priority implying unapproved service availability.

### 5.4 Mapping to Tailwind and shadcn/ui

Use semantic CSS custom properties as the color/state source of truth and expose them through the selected Tailwind version's theme configuration. Map shadcn background, foreground, primary, primary-foreground, muted, border, ring, destructive and sidebar roles to these semantic tokens. Never distribute raw terracotta/slate/vivid-blue HEX strings across components or store separate duplicated theme pages. Typography, radii, spacing and z-index use named scales.

Tailwind's current theme-variable approach supports utility generation from design tokens; exact syntax/version is selected during initialization, not frozen by this design document (technical ref T1). shadcn primitives supply interaction foundations, not an unreviewed visual template. Style the same buttons/fields across public forms and staff UI, with density variants rather than another design system. No code is included here.

## 6. Reusable component system

### 6.1 Component contract

Each component below inherits: semantic HTML; visible keyboard focus; labels; theme tokens; no hover-only meaning; default, hover, focus, active, disabled where applicable; reduced-motion behavior; no clipped long text; stable loading space; truthful empty/error/success states. State semantics are described in §12. Components without a data operation do not need fabricated loading/success variants. Copy/sample data is separate from layout; no invented proof is hardcoded into components.

Reuse source recipe names for page structures and plain names for elements. Build a variant only when two real uses need it. Custom means project-authored presentation, not reimplementing accessible dialog/menu behavior. Every interactive component is tested in all three themes.

### 6.2 Global and marketing components

| ID / component | Purpose and anatomy | Variants / reuse | Responsive and accessibility specifics | Foundation / motion |
|---|---|---|---|---|
| CMP-01 SiteHeader | Logo; nav; Search; Appearance; quote action | Public pages; simplified task shell when appropriate | Collapse before crowding; skip link; current page; visible Contact; no public Staff Login | Custom shell + accessible navigation primitive; CSS state feedback |
| CMP-02 ServicesMenu | All Services; eight category groups; optional published featured links | Desktop panel/mobile disclosures | Click/keyboard reachable; links remain links; Escape/return focus; do not expose 57 top-level items | Selective NavigationMenu/Popover; CSS or Motion opacity |
| CMP-03 SolutionsMenu | All Solutions; five exact solution links | Desktop/mobile | Full names wrap; no hover-only trigger | Same primitive family as CMP-02 |
| CMP-04 MobileNavigation | Logo/close; ordered links; nested disclosures; utilities | Public compact layouts | Modal focus containment if drawer; scrollable inside viewport; restore focus; close on navigation | Sheet/Dialog + Accordion; optional Motion 220ms |
| CMP-05 SiteFooter | Service/solution/company/resource groups; policies; real contacts | Public standard; compact utility | Stack groups; labels remain visible; no invented destinations or inactive future links | Custom; static |
| CMP-06 Breadcrumbs | Ordered parent path and current label | Catalog, solutions, work/content details; private context | Named nav; current item text; wrap, don't truncate meaningful parent names | Custom semantic list; static |
| CMP-07 ButtonLink | Text; optional icon; optional progress | Primary, secondary outline, quiet, destructive; links vs actions | Anchor for navigation; button for action; no nested controls; visible pending label | shadcn Button styling; CSS 180ms |
| CMP-08 ContainerSection | Bounded width; section heading/content slots | Marketing, reading, form, app | Semantic section only with meaning; logical heading order; mobile gutters | Custom; no automatic animation wrapper |
| CMP-09 SectionHeading | Eyebrow optional; H2; support; related link | Split/stacked | Meaning before typography; link wraps below on mobile | Custom; selective content entrance |
| CMP-10 AppearanceSelector | Name; selected radio options; swatches/check | Header/mobile; optional footer | Named values, keyboard selection, persistent focus; swatch not only label | Popover + RadioGroup; instant/CSS 120ms |
| CMP-11 PublicSearch | Query label/input; submit; type/query context | Header entry; search page; FAQ discovery | Standard submit fallback; no assumption of autocomplete; accessible results status | Input/Button; CSS only |
| CMP-12 EditorialHero | Descriptor; H1; support; two actions; artwork | Home; category/service/solution compact variants | Text/CTA before art; meaningful content rendered initially; art alt empty if decorative | Custom; Motion text optional; independent GSAP art only if justified |
| CMP-13 CategoryDirectory | Number/icon; name; short explanation; link | Eight-category ruled grid or compact directory | 4→2→1 columns; full names; hover supplements focus | Custom; CSS underline/border |
| CMP-14 ServiceCard | Name; need/scope; price/unit; availability; action | Project, custom, ongoing, assessment, design/media | Never separate price from period; actual status not color alone | Custom; CSS hover ≤2px optional |
| CMP-15 SolutionCard | Exact name; business need; starting/custom cue; link | Five solutions; grid/list | 3+2 desktop or list; no unsupported inclusions; equal discovery | Custom; CSS |
| CMP-16 BentoGroup | Ordered related offer/work units with varied spans | Selected marketing regions only | DOM order consistent; no hover-dependent disclosure; all units stack | Custom composition of existing cards; CSS/Motion selected children |
| CMP-17 PriceComparison | Tier/fit; price/unit; approved inclusions; exclusions; quote | Service tiers, solution tiers, compact Home starting rows | Stacked labeled cards or scrollable table with header relationships; no invented checkmarks | Custom table/cards; static |
| CMP-18 AvailabilityBadge | Text + optional icon + help | Available, specialist-led, coming-soon | Actual owner-approved status; no purchase action for unavailable service | Badge; CSS state only |
| CMP-19 EvidenceBlock | Classification; permitted artifact; context; source-supported result | Client work/internal/demo | Visible classification; no fabricated count; gracefully omit absent evidence | Custom; selected image reveal optional |
| CMP-20 ProjectCardGallery | Image; project title; classification; contribution; link | Work list, Home, offer evidence, case gallery | Captions always visible; aspect reserved; optional gallery controls keyboard accessible | Custom; CSS or Motion ≤1.02 image scale |
| CMP-21 Testimonial | Actual quote; attribution; engagement link | One quote/grid, never required carousel | Permission recorded privately; sample label in previews; no auto-rotation | Custom blockquote; static |
| CMP-22 IndustryCard | Sector name; problem; relevant offer link | Future IND pages only | No false expertise; long names wrap; no P1 industry route promotion | Custom; CSS |
| CMP-23 ProcessTimeline | Number; step title; short responsibility/result | Home five steps; scoped service/solution process | Semantic ordered list; desktop horizontal only if readable; mobile vertical | Custom; optional one-time line reveal |
| CMP-24 FAQAccordion | Question button; answer; relevant help link | Home, offers, hub | Expanded state, keyboard, content reachable; no forced one-open rule | Accordion; CSS height transition only measured safe or instant |
| CMP-25 ArticleCard | Title; excerpt; topic; genuine metadata; optional image | Insights/Home/related | Heading/link hierarchy; no placeholder dates; published content only | Custom; CSS |
| CMP-26 ConversionCTA | Task-focused heading; brief; quote; secondary help | Final commercial sections | One dominant action; skip on legal/auth/error/confirmation | Custom; optional subtle entrance |
| CMP-27 ReadingBodyTOC | Headings; paragraphs; lists; figures; contents links | Article/help/policy/case narrative | 720px measure; anchor focus/offset; tables locally scroll; no prose clipping | Custom typography; static |
| CMP-28 CollectionControls | Search/filter/reset; result count; pagination | Public work/content/search; staff lists | URL/query context retained where appropriate; no results ≠ error; labels not placeholder-only | Select/Input/Button; CSS |

### 6.3 Forms, feedback and staff components

| ID / component | Purpose and anatomy | Variants / reuse | Responsive and accessibility specifics | Foundation / motion |
|---|---|---|---|---|
| CMP-29 FieldGroup | Visible label; input; optional marker; help; error | Text/email/URL/textarea; contact/quote/editors | Label association, autocomplete when appropriate, error description, preserve input | Label/Input/Textarea; CSS focus only |
| CMP-30 ChoiceControl | Label; select/radio/checkbox; help | Services, tiers, consent, filters | Native first when sufficient; correct keyboard and selected semantics; no disabled mystery values | Native or Select/RadioGroup/Checkbox; CSS |
| CMP-31 FormProgress | Step name; current/total; completed edit links | Four-step quote | Current step announced; back never submits; progress not color-only | Custom semantic step list; optional Motion ≤180ms |
| CMP-32 QuoteSelection | Search/category selection; chosen items; custom option | Multi-service and solution/tier context | Service identity preserved; remove/edit reachable; no binding automatic total | Custom composition; CSS |
| CMP-33 ReviewSummary | Labeled answers; edit-step links; submission action | Quote review; consequential changes | No mandatory re-entry; clear acknowledgement; protect PII | Custom; static |
| CMP-34 ConsultationRequest | Topic; name/email; preferred time/timezone; state | Manual default; conditional live scheduler | Accurate timezone and request-versus-booked distinction; accessible provider fallback | Custom form; provider UI only when approved |
| CMP-35 FormFeedback | Error summary; field links; pending; saved reference | All forms | Focus summary on failed submit; status announcement on success; no duplicate retry after save | Alert + inline status; CSS spinner optional |
| CMP-36 LoadingEmptyError | Reserved skeleton/progress; explanation; recovery | Collections, panels, details | No infinite shimmer; error not shown as empty; preserve filters/entered data | Skeleton/Alert; reduced motion static |
| CMP-37 DashboardShell | Sidebar; top bar; breadcrumb; page content; account | All ADM pages | Role-scoped navigation, skip links, drawer on compact; no public data leakage | Custom + Sheet; menu transition only |
| CMP-38 PageToolbar | Title/status; primary action; optional filters | Lists, record/editor pages | Wrap; secondary actions grouped; no sticky action covering fields | Custom/Button/DropdownMenu; CSS |
| CMP-39 DataTable | Caption; column headers; rows; actions; pagination | Operational/content/finance lists | Sort announced only if implemented; mobile summary or labeled local horizontal scroll; no invented bulk/export tools | Semantic table + selective table primitive; no row entrance cascade |
| CMP-40 StatusBadge | Label/icon + state token | Lead/task/content/payment | Never status by color alone; Won ≠ Paid; draft ≠ published | Badge; static |
| CMP-41 PipelineView | Fixed-stage summaries; opportunity list; stage action | ADM-006; future compatible board | Table baseline; board optional view of same data; keyboard Move to stage action; dragging never sole method | Custom; Motion only optional small relocation |
| CMP-42 RecordPanel | Identity; labeled facts; links; notes/history/actions | Leads/contacts/opportunities/tasks/customers | Safe missing values; source order; sensitive sections permission-limited | Custom/Card/Tabs only when useful; static |
| CMP-43 ActivityTimeline | Time; actor; action; relevant link | Record history/audit | Real history; timezone clear; private notes distinct from external communication | Custom semantic list; static |
| CMP-44 TaskEditor | Title; owner; due date/timezone; status; linked record | In-page task create/detail | Visible date format/timezone, validation, completion feedback | Form/Dialog as needed; essential feedback only |
| CMP-45 ContentEditor | Identity; body; assets; classification; SEO; publication | Article/FAQ/testimonial variants | Label editor toolbar; heading structure; keyboard workflow; clear unsaved/saved state | Accessible editor choice unresolved; reuse form primitives |
| CMP-46 SEOEditor | Page identity; metadata; canonical/index restrictions; preview | ADM-020, article panel | Preview illustrative, not Google guarantee; no publicizing private routes | Custom form; static |
| CMP-47 DialogDrawer | Title; context; fields or confirmation; actions | Forms, row detail, navigation, dangerous action | Focus trapping when modal, Escape where safe, return focus, scroll constraints, unsaved-change handling | Dialog/Sheet/AlertDialog; CSS/Motion 180–220ms |
| CMP-48 Notification | Short result; optional recovery action | Inline first, toast supplementary | Polite status; errors persistent and contextual; no critical message only in disappearing toast | Alert/Toast primitive; CSS fade optional |
| CMP-49 PrivatePreview | Protected notice; public-style article; return | ADM-016 | Noindex + actual authorization; no leak via draft assets; keyboard return | Reuse reading template; static |
| CMP-50 SecurityPanel | Identity/MFA/session state; supported actions | Auth/account/access | Paste/password managers allowed; provider-supported recovery; no self-granted role | Provider + custom framing; no cinematic motion |
| CMP-51 ManualFinancePanel | Amount/currency; external reference; verified state; history | Conditional ADM-027 | Expected/invoiced/received separate; permission restricted; correction confirms target | Custom table/form; no checkout animation |

## 7. Motion system and animation mapping

### 7.1 Principles and ownership

Motion expresses response, sequence and spatial continuity. The original editorial composition remains legible as a still page. Every decorative effect is optional; business-critical actions never wait for it. No scroll hijacking, forced smooth-scroll library, custom cursor, mandatory splash screen, typewriter-delayed headline, autoplay testimonial carousel, persistent particle field or unapproved WebGL. Do not animate every section.

| Level | Use | Allowed scope |
|---|---|---|
| L1 Essential feedback | Focus, selected state, loading, validation, menu open/closed | Broadly used; the state change is essential, animation itself usually optional |
| L2 Refined content | Small hero/selected evidence entrances; menu/component continuity | Selected public areas; dashboard only when task clarity improves |
| L3 Cinematic | Coordinated layered hero or selected future case storytelling | Few justified public areas only; static fallback required; mobile and reduced-motion simplification |

CSS/Tailwind owns colors, borders, focus, underlines and simple control transitions. Motion owns React-local entrance/exit and layout transitions where useful. GSAP owns an explicitly isolated complex timeline/artwork region only when simpler tools cannot express it cleanly. Never let Motion, GSAP and CSS transitions write the same element's transform/opacity concurrently. Prefer separate sibling regions, not nested transforms whose combined movement becomes confusing. Document owner/property/cleanup per effect.

### 7.2 Motion tokens

| Token | Default | Compact/reduced behavior |
|---|---|---|
| `--motion-instant` | 0ms focus, validation placement, urgent state | Always immediate |
| `--motion-fast` | 180ms control response | 120–180ms color only; 0ms reduced if appropriate |
| `--motion-ui` | 220ms menus/dialogs | 180ms compact; instant reduced |
| `--motion-enter` | 480ms selected content | 300ms compact if used; instant or ≤120ms opacity reduced |
| `--motion-feature` | 650ms larger coordinated decorative entrance | Disable L3 on compact; static reduced |
| `--motion-stagger` | 70ms, no more than six items; total delay ≤350ms | 40ms maximum or none; none reduced |
| `--motion-ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | Same for allowed fades |
| `--motion-ease-ui` | cubic-bezier(0.2, 0, 0, 1) | Same or instant |
| `--motion-distance` | 16px selected content; hero art up to 24px | 8px compact; 0px reduced |
| `--motion-hover-y` | −2px maximum | 0px coarse pointer/reduced |
| `--motion-hover-scale` | Up to 1.02 images; buttons never need scaling | 1 compact/reduced |
| `--motion-parallax` | Optional decorative displacement ≤12px desktop | Off tablet/mobile/reduced |
| `--motion-theme` | 0–120ms color only | Immediate reduced; no full-page fade |

These values refine the brief's suggested ranges. An animation can end earlier after interruption and must not queue behind repeated input. Enter effects run once per relevant mount/first viewport entry, not on every scroll reversal. Typical trigger is first useful visibility around 15–25% of the region; do not hide content indefinitely when trigger calculation fails. Exit animations never trap focus or delay submitting/navigation. No animated counters for unverified numbers.

### 7.3 Animation-to-component mapping

| Area / component | Effect and purpose | Owner | Desktop | Mobile | Reduced-motion alternative | Risk / classification |
|---|---|---|---|---|---|---|
| Primary/secondary actions CMP-07 | Color/border feedback identifies interaction | CSS | 180ms | Same without hover reliance | Instant | Low; feedback essential, tween optional |
| Body/nav links | Underline/color clarifies click target | CSS | Short underline transition | Persistent readable affordance | Instant underline | Low; essential affordance |
| Keyboard focus | High-contrast outline | CSS | Immediate | Immediate with external keyboard | Same | Low; essential |
| Appearance CMP-10 | Accent update preserves visual continuity | CSS | ≤120ms; logo swap fixed box | Same | Instant | Low; selection essential, fade optional |
| Desktop menus CMP-02/03 | Small panel opacity/≤6px movement | CSS or Motion, choose one | 180–220ms | Replaced by mobile menu | Instant panel | Low; menu state essential |
| Mobile menu CMP-04 | Drawer continuity, clear opening | Motion or CSS, choose one | Compact-header only | 220ms; no bounce | Instant | Medium focus/scroll risk; animation optional |
| Home hero text CMP-12 | Small line-group entrance reinforces hierarchy | Motion | Optional 480ms; no per-letter splitting required | Shorter or none | Fully visible text | Medium LCP/readability risk; decorative |
| Home hero art CMP-12 | Coordinated plane entrance only if separate layers exist | GSAP only when justified | Optional 650ms isolated timeline | Static art | Static art | Medium/high payload risk; decorative |
| Selected section headings | Subtle opacity/16px entrance | Motion | Only 2–3 chosen regions per page | 0–8px or static | Static | Low/medium; decorative |
| Service/solution rows CMP-13/15 | Border/arrow emphasis | CSS | ≤2px arrow movement | No motion required | Color/underline | Low; optional |
| Bento/image hover CMP-16/20 | Focus attention within reserved frame | CSS or Motion | ≤1.02 scale, clipped frame | Static | Static | Medium if many images; decorative |
| Case-gallery reveal | Small image entrance with caption already visible | Motion | Once, reserved aspect | Static/short fade | Static | Medium; decorative |
| Process CMP-23 | Optional connector progress | CSS simple or GSAP for approved coordinated sequence | No pinned reading; list remains visible | Vertical static list | Static | Medium; decorative |
| Decorative parallax | Tiny spatial depth on artwork only | GSAP within same art owner | ≤12px; stop offscreen | Off | Off | High relative to benefit; optional and removable |
| Background movement | None by default; optional short one-shot accent | CSS or art owner | Ends, no indefinite loop | Off | Off | High for large paint areas; decorative |
| Quote step CMP-31 | Explain forward/backward flow | Motion if used | 150–180ms subtle fade; focus new heading | Same or instant | Instant with focus | Medium focus/input risk; state essential |
| FAQ CMP-24 | Open/close answer | CSS or primitive transition | 180ms bounded; no page jump | Same | Instant | Low; disclosure essential |
| Form submit CMP-35 | Pending label and progress | CSS | Spinner only while pending | Same | Static pending indicator | Low; status essential |
| Loading skeleton CMP-36 | Reserved geometry | CSS | Static default; no perpetual shimmer | Static | Static | Low; feedback essential |
| Dialog/drawer CMP-47 | Local context change | Motion or CSS | 180–220ms | Full-width sheet if appropriate | Instant | Medium; focus semantics essential |
| Toast CMP-48 | Brief supplementary confirmation | CSS | Short fade | Same | Instant | Low; never sole essential feedback |
| Pipeline CMP-41 | Optional relocation continuity | Motion only if board chosen | ≤180ms; table always viable | Stage control/list | Instant update + announcement | Medium; no drag-only action |
| Dashboard tables/editors | No cinematic entrance or scroll effects | CSS | Immediate task content | Immediate | Same | Low; essential task clarity |
| Route navigation | Standard navigation and loading status | Framework/CSS | No blocking page transition | Same | Same | Avoid artificial waits; essential |

### 7.4 Performance and lifecycle safeguards

Load GSAP only with regions that need it; do not put its import in the global layout. Motion is not needed for CSS-only controls; use a measured feature subset/lazy feature loading when useful (M2). Keep client boundaries small and static content server-rendered (N1). A shared client header may justify small Motion usage, but it never justifies shipping GSAP to policy/auth/dashboard pages.

Respect the user's reduced-motion setting across CSS, Motion and GSAP. Motion's global reduced-motion setting can suppress transform/layout motion but does not automatically suppress every opacity/background effect; explicitly handle custom decorative loops and use the hook for bespoke decisions (M1). GSAP media conditions should rebuild/revert only their own region when conditions change (G2). Lower-powered/coarse-pointer devices receive the simpler static presentation without unreliable device-brand sniffing.

Prefer transform/opacity, reserve dimensions, avoid animating layout properties, large blur, shadows over large areas or filters. Do not permanently add will-change everywhere. No layout reads/writes in per-frame React state loops. Pause/dispose work offscreen and in hidden tabs where applicable. If artwork is a single raster image, animate it as one subtle layer or leave it static; do not assume its pictured parts are independently animatable.

In future React integration use scoped GSAP context/useGSAP cleanup and explicitly clean timers/listeners/observers created outside that scope. Context-safe callbacks or equivalent ownership prevent delayed handlers leaking animations; verify repeated mount/unmount and dependency changes (G1). Do not reset the whole hero timeline on a theme change. No paid plugin, extra animation framework, WebGL engine or heavyweight smooth-scroll dependency without a justified approved requirement. Version/license checks occur before installation.

## 8. Global navigation and shared shells

### 8.1 Public shell

Desktop order is Logo/Home; Services; Solutions; Pricing; Our Work; About; Insights; Contact; Search utility; Appearance utility; primary Get a Quote. Full navigation is retained when there is room; on constrained widths collapse to the complete mobile menu. Theme selector is an owner-approved utility addition, not a new commercial CTA.

Services menu includes All Services and CAT-01–CAT-08 in approved order. Optional featured service links must be published; do not dump all 57 links into the header. Solutions menu contains All Solutions plus the five exact source-named routes. Mobile includes Home, Services, Solutions, Pricing, Our Work, About, Insights, Contact, Consultation, Search, Appearance and Get a Quote. Use explicit All Services/All Solutions destinations as well as disclosure triggers. Preserve browser back behavior, Escape, close button and focus return.

Footer groups follow S-SITEMAP: Services; Solutions; Company (About, Our Work, Contact); Resources (Insights, FAQ); Start a Project (Pricing, Quote, Consultation); actual published legal/trust pages; verified contact/social channels. No public Staff Login; future client portal only after approval and operation. `hello@aradun.com` is selected but source operational readiness must be verified before launch. No invented GitHub, mailboxes, street address or offices.

Breadcrumbs preserve supplied hierarchy even where URLs are flat. Cross-listed SVC-009 uses the source canonical parent. No breadcrumbs on Home or elaborate multi-level trail on single-task confirmation/auth. Sticky header is optional at 64/80px without resizing jumps; focused anchors/fields must not be hidden underneath it. If full utility density conflicts with the spacious original reference, collapse the menu earlier rather than remove Contact or shrink text.

### 8.2 Staff shell and permissions

Use a light neutral productive shell: sidebar 256px at wide desktop, top bar 64px, body 24–32px padding. Compact layouts use a labeled menu drawer; persistent account/sign-out access remains available. Top bar contains page context/breadcrumb, Appearance if adopted for staff, and own-account menu. Do not invent global staff search or a P1 notification center; list search is scoped to the current approved module, and notification-center routes remain future scope.

| Sidebar group | Entries |
|---|---|
| Overview | ADM-001 Dashboard Overview |
| Sales | ADM-002 Leads; ADM-004 Contacts; ADM-006 Pipeline; ADM-008 Follow-up Tasks; ADM-010 Customers |
| Content | ADM-012 Content Overview; ADM-013 Articles; ADM-017 Testimonials; ADM-019 SEO |
| Conditional content | ADM-021 FAQs & Help when selected |
| Restricted administration | ADM-023 Staff Access and ADM-025 Audit only when UI alternatives selected and authorized |
| Conditional finance | ADM-027 Manual Payment Tracker if D-007 selects it |
| Account | ADM-026 My Account & Security; sign out |

Detail/create/preview pages are contextual destinations, not separate sidebar links. Show only enabled authorized modules and recheck role/record access on the server; hidden links are not security. Admin, Sales and Editor responsibility labels come from sources; D-013 still governs exact visibility/publishing/provisioning policy. No cross-tenant or client-portal assumptions are introduced.

### 8.3 Shared state wireframes

Public collections: heading and controls remain visible; loading preserves query/space; no-data explains unavailable published content; no-match offers reset/refine; network error offers retry without pretending results are empty. Forms retain safe entered data, show field-associated errors and a focusable summary; saved inquiry wins even when its email is delayed. Reference-only confirmation never exposes private submitted messages.

Private pages: authorization resolves before sensitive content. A list loading/error state retains controls; a detail permission loss hides protected content and offers safe navigation. Dirty edits prompt on consequential navigation; a stale-save conflict offers review/reload without silently overwriting someone else's work. Distinguish “Draft saved”, “Published”, “Request received”, “Meeting confirmed”, “Expected payment” and “Received payment”. Toasts supplement, never replace, persistent form/record state.

Authentication: centered 440px card, logo, one task heading, provider-supported controls, help/recovery. No public staff registration, misleading account-existence errors, blocked password paste or unnecessary marketing animation. Error/404 states have one clear heading, brief known explanation and useful recovery choices; no separate invented indexable error routes.

## 9. Public, authentication and dashboard template wireframes

These are textual wireframe specifications for Markdown: ordered regions, placement, proportions, responsive behavior and interaction contracts, not exported high-fidelity screens. Source recipes below are retained in full. **Numbered cross-references inside preserved source text refer to `03-page-sections.md`; new “Step 4” paragraphs refer to this file.** Historical instructions to perform design later are fulfilled by the accompanying specifications. Neither source prose nor a decorative arrangement overrides the explicit Step 4 visual decisions.

The shared shell is outside the counted main sections. Reuse components from §6; inherit loading/empty/no-match/error/success/denied states from §8 and §12. Keep DOM/keyboard order equal to source reading order when using columns. Any side-by-side layout described below is within the relevant ordered source region, not permission to reorder whole sections. Section counts remain content slots, not fixed-height screens.

### T-HOME — Homepage — approved 11-section plan

**Planned main sections/UI regions:** 11.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero and value proposition | Explain ARADUN immediately. Descriptor: Technology & Digital Solutions; tagline: Build. Automate. Grow. Suggested H1: Technology and digital services to build, automate, and grow your business. Draft support: From websites and software to automation, design, cloud, security, and marketing, ARADUN helps businesses connect their digital needs around a clear plan. | Concise text and permitted work image or identified concept; Get a Quote; Explore Services. |
| 2. Eight service categories | Find the expertise your next project needs. Eight concise descriptions show breadth while making a choice easy. Do not list all 57 detailed offers here. | Category cards in source order; View All Services. |
| 3. Five business solutions | Start with your business goal. Explain Digital Presence, Business Automation, Business Growth, Cloud & Technology, Complete Digital Business as problem-led routes, not guaranteed package inclusions. | Five cards; Explore Solution; unsure visitors can use consultation. |
| 4. Selected work and case studies | Explore our work. Recommend two or three genuine examples when available, showing problem, contribution, supported outcome and visible Client Work/Internal Product/Concept-Demo classification. | Annotated project cards; View Project; View Our Work. |
| 5. Why work with ARADUN | A clear approach to complex digital work. Explain business needs first, clear scope/expectations, connected capabilities, maintainable delivery. These are approved content directions to substantiate, not verified superiority claims. | Four concise principles and genuine company/founder context; About ARADUN. |
| 6. How we work | From your first idea to delivery and handoff. Understand need; define engagement/agreement/initial payment; deliver milestones; review within agreed scope; accept/final payment/handoff/optional support. Reduce uncertainty. | Five numbered stages; Get a Quote. No fixed timing or unlimited revisions implied. |
| 7. Starting prices and engagement options | Starting points for your next investment. Use the five source Starter solution prices and explain individual services plus four pricing models. Pricing is indicative and depends on agreed scope. | Compact price comparison with USD and periods; Pricing & Packages and solution detail links. |
| 8. Client feedback | What clients say about working with us. One to three permitted genuine quotations, attribution and relevant engagement context explain the working relationship. | Readable quote cards; related case-study link when appropriate; no automatic carousel required. |
| 9. Insights and resources | Practical guidance for your next digital decision. Up to three useful published articles. Suggested topics: website versus custom application, workflows worth automating, project and ongoing costs. These are topic ideas, not existing publications. | Title, summary, topic, genuine date/author information; Read Article; Explore Insights. |
| 10. Frequently asked questions | Before you start. Answer individual versus combined services; unsure needs; indicative prices; timeline dependencies; international working arrangements; separately agreed maintenance. Resolve purchase uncertainty. | Six accessible answers; FAQs & Help; Contact for unresolved questions. |
| 11. Final project invitation | Tell us what you want to build, improve, or automate. Draft copy: Share a short description of your project. We’ll review your needs and discuss an appropriate next step. | Dominant Get a Quote; quieter Request a Consultation under manual baseline; Contact link. |

**Responsive priority:** Hero message and action precede imagery; category/solution cards remain in reading order; stage sequence stacks vertically; amounts stay attached to units; no swipe-only discovery or hover-only explanations.

**SEO/search purpose:** Branded discovery and broad commercial research. Suggested title: ARADUN | Technology & Digital Solutions. Suggested description: Explore ARADUN’s technology and digital services, business solutions, and starting prices. Find the right support for your next project and request a quote.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Hero in a 7/5 split: left eyebrow, oversized three-line Build. / Automate. / Grow., clear Technology & Digital Solutions descriptor/support and Quote then Explore Services; right matte abstract geometry with reserved 4:3 frame. No text over busy art. Subsequent regions retain all eleven source positions: eight-category ruled grid 4×2; five solutions in two-column editorial rows; work in two generous image-led columns; four why-us principles; five-stage process across a readable ruled sequence; five Starter price rows with units; testimony up to three columns; three article cards; 800px FAQ; full-width final invitation with a contained inner grid.

**Step 4 tablet adaptation:** Hero 5/3 only if headline and actions fit; otherwise text then art. Categories 2×4, solutions two columns with final full row, work two columns, process vertical, price rows wrapped, testimony/articles two columns. No region jumps above an earlier source region.

**Step 4 mobile wireframe:** Hero is a single column: descriptor/headline/support, full-width Quote, Explore Services, then cropped but meaningful static art. Categories eight compact ruled rows or two columns at ≥640px only; solutions/work/prices/testimony/articles single column. Process and FAQ vertical. Final Quote before consultation. All 11 planned slots retained; evidence-dependent 4/8/9 display only when ready.

**Step 4 components, CTA, accessibility and motion:** CMP-12, CMP-13, CMP-15, CMP-17, CMP-19, CMP-20, CMP-21, CMP-23, CMP-24, CMP-25, CMP-26. Primary Quote in hero and final region; secondary service exploration in hero. Proof stays at source positions. Hero optional L2 text and isolated L3 art; other sections predominantly static. Decorative artwork has empty alternative text; heading is real text, not an image.

### T-OV-S — Services overview

**Planned main sections/UI regions:** 6.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: Find the right services for your business | Explain the breadth of design, development, automation, infrastructure, security and growth. Orient service-aware buyers. | Explore Services anchor; Get a Quote. |
| 2. Category directory: Explore our expertise | Show all eight category identities, short descriptions and representative services. Reduce selection effort. | Eight category cards linking to their existing routes. |
| 3. Help choosing: Start with what you want to achieve | Map improving a website, automating follow-up, launching an app, improving deployment and marketing needs to existing categories/solutions. Help nontechnical buyers. | Need-to-offer comparisons and contextual links. |
| 4. Engagement options: Choose the engagement that fits | Explain individual, combined, solution and ongoing engagements without inventing bundles. | Links to Solutions and Pricing. |
| 5. Buyer questions: Before choosing a service | Address combining services, custom needs, starting prices and selection. | Four concise FAQs linked to relevant help. |
| 6. Closing invitation: Tell us what you need | Capture a useful brief or help an undecided prospect. | Get a Quote; Consultation. |

**Responsive priority:** Keep all categories accessible in normal flow; avoid 57 full service descriptions.

**SEO/search purpose:** Broad commercial discovery; category/service pages handle narrower searches.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Left-aligned intro with short action row; eight ruled category cells 2×4 with an optional internal illustrative cell treatment; need-to-offer comparison full-width below; engagement choices in horizontal rows; FAQs at reading width; closing CTA.

**Step 4 tablet adaptation:** Two-column category grid and stacked comparison pairs; introduction stays one reading column.

**Step 4 mobile wireframe:** Single category rows with name, one-line purpose and link; comparison labels repeat per item; engagement, FAQ and CTA stack.

**Step 4 components, CTA, accessibility and motion:** CMP-13, CMP-17, CMP-24, CMP-26. All category links are visible without hover. Quote in hero/closing; selection links in directory. No pricing calculated here; CSS row feedback, optional one entrance only.

### T-CATEGORY — Service category

**Planned main sections/UI regions:** 7.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Category hero | Category name, intended buyer and business-focused outcome establish fit. | H1 using approved category name and tailored introduction; contextual quote CTA. |
| 2. Services in this category | Names, concise explanations, approved price cues, availability and service links let buyers compare. | Service cards linked to all assigned service details. |
| 3. Which service fits your need? | Compare business need, suitable service and when to consider it; distinguish overlapping offers. | Compact comparison rows. |
| 4. Relevant work and capability evidence | Show actual permitted examples, screenshots or labeled demos and specific contribution. | Evidence cards with project links; omit public empty proof. |
| 5. How engagements work | Explain category-specific stages, required inputs and engagement/pricing models. Set expectations. | Short process sequence and relevant offer/pricing links. |
| 6. Category FAQs | Four to six questions about selection, scope, dependencies and ongoing work. | Accessible disclosures with useful detail links. |
| 7. Next step | Offer a contextual quote and a route for clarification; show relevant existing solutions. | Get a Quote; Consultation; solution links. |

**Responsive priority:** Introduction then choices then comparisons; stack comparison rows; preserve all service labels.

**SEO/search purpose:** Category commercial comparison intent; unique introduction, comparison guide and FAQs.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Intro 7/5 text/context; service cards in two or three columns depending on name length, with price and unit together; fit comparison; evidence gallery; process; FAQ; closing contextual Quote/solution links.

**Step 4 tablet adaptation:** Two service columns, comparison rows stack when columns become narrow; proof in one or two columns.

**Step 4 mobile wireframe:** Name and introductory Quote before all service rows; retain every assigned service; fit rows, evidence, process and FAQ stack in source order.

**Step 4 components, CTA, accessibility and motion:** CMP-13, CMP-14, CMP-17, CMP-19, CMP-20, CMP-23, CMP-24, CMP-26. Evidence never moves ahead of service selection. All prices use source values; custom quotes not blank prices. CSS hover only, optional proof reveal.

### T-SERVICE — Service detail

**Planned main sections/UI regions:** 9.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: [Service name] for [business need] | Identify audience, availability, meaningful outcome and existing starting price or Custom quote. Establish relevance quickly. | Intro and Get a Quote carrying service context. |
| 2. Fit and outcomes: When this service makes sense | Three or four situations, desired benefits and material limitations help buyers self-qualify. | Scannable situation/outcome list; no guaranteed results. |
| 3. Scope: What the engagement can cover | Define deliverable groups, inputs, boundaries, exclusions and useful technologies. Separate confirmed inclusions from optional work. | Scope list/table and annotated examples. |
| 4. Evidence: See relevant work | One or two genuine projects, permitted artifacts or labeled demos support capability; integrate relevant permitted feedback. | Project/evidence cards; link to published work. |
| 5. Commercial options: Packages and starting prices | Compare approved scope, units, limits, revisions, ongoing fees and exclusions; retain custom option. | Package comparison; contextual quote action; no checkout or binding automatic sum. |
| 6. Delivery: How the work progresses | Explain service-specific stages, access/assets, review points, handoff and timing dependencies. | Short numbered process; relevant responsibilities/support links. |
| 7. Related services and solutions | Two or three relevant neighboring services and an appropriate solution explain useful connections without duplicate purchases. | Descriptive links to published relevant offers. |
| 8. Service FAQs | Four to six unique purchase questions including the distinguishing question in the page record. | Accessible answers addressing scope, costs, ownership and delivery. |
| 9. Final CTA: Discuss your [service] requirements | Invite a brief tied to this offer after evaluation. | Get a Quote with service/package selection; Consultation alternative. |

**Responsive priority:** Service meaning and quote first; stack scope/package comparison clearly; keep price, billing period and exclusions together.

**SEO/search purpose:** Specific service commercial evaluation. Suggested title: [Service name] | ARADUN; unique fit, scope, process and FAQs, not merely a swapped title.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Reading-width hero with scope qualifier and contextual Quote; fit/outcome content occupies a 7-column reading area with restrained supporting diagram; scope comparisons use labeled rows; genuine evidence frame; commercial packages align for comparison; delivery, related offers, FAQ and closing sections follow the exact nine-region recipe below. Use no fixed-height card that clips scope.

**Step 4 tablet adaptation:** Two-column package comparison only if labels remain readable; otherwise labeled stacked packages. Supporting diagram follows related text. Related offers two columns.

**Step 4 mobile wireframe:** Hero and contextual action first; fit/scope then evidence then commercial information exactly as source; all package prices, units, exclusions and limitations stay with their package. Delivery vertical; related cards/FAQ/final Quote stack.

**Step 4 components, CTA, accessibility and motion:** CMP-14, CMP-17, CMP-18, CMP-19, CMP-20, CMP-23, CMP-24, CMP-26. CTA preserves service identity and editable package selection. Service-specific evidence, scope and FAQ below are mandatory specialization; no 57 identical pages. Static baseline, CSS feedback; image-only entrance optional.

### T-OV-SOL — Solutions overview

**Planned main sections/UI regions:** 6.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: Find a solution around your business goals | Explain coordinated services around an agreed business need. | Explore Solutions anchor; Get a Quote. |
| 2. Five solutions: What would you like to improve? | Five cards show names, intended buyers, problem and source starting/custom price. | Each card links to its solution page. |
| 3. Selection guide: Choose your starting point | Map business situation to solution and key consideration. Distinguish overlaps. | Compact comparison. |
| 4. Engagement approach: From your goals to an agreed scope | Needs review, service selection, package/custom proposal, agreed stages; names alone are not contractual inclusions. | Process summary and pricing link. |
| 5. FAQs: Before choosing a solution | Explain customization, existing systems, combined services and starting prices. | Four selection-oriented answers. |
| 6. Closing CTA: Let’s identify the right approach | Invite a brief including an unsure/custom path. | Get a Quote; Consultation. |

**Responsive priority:** All five options in readable order; no mandatory horizontal comparison.

**SEO/search purpose:** Broad commercial research into coordinated digital business solutions.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Editorial introduction, five substantial solution rows with number, problem, title and link; selection guide; approved engagement information; FAQ; closing invitation in source order.

**Step 4 tablet adaptation:** Rows become two-column text/link units with ample wrapping; selection guide below.

**Step 4 mobile wireframe:** One solution per row, business goal before technical detail; all five visible in normal scroll.

**Step 4 components, CTA, accessibility and motion:** CMP-15, CMP-17, CMP-24, CMP-26. Explore Solution is the local action; Quote/Consultation remain available. Do not assign made-up inclusions. Minimal motion.

### T-SOLUTION — Solution detail

**Planned main sections/UI regions:** 9.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: [Solution] for [business need] | Value proposition, intended buyer and source starting/custom price establish relevance and budget direction. | Get a Quote with solution context. |
| 2. Fit and outcomes: Is this the right solution for you? | Explain situations, desired improvements, existing-system considerations and boundaries. | Scannable fit guidance. |
| 3. Scope: How the services work together | Explain capabilities, relationships, deliverable types, client inputs and exclusions. | Coordinated scope map/list, not invented included-service checkmarks. |
| 4. Packages: Compare your engagement options | Preserve Starter, Professional and Enterprise labels/prices; define meaningful scope distinctions before publication. | Comparison and tier-context quote actions. |
| 5. Delivery: How we approach the work | Solution-specific stages, reviews, responsibilities, timing dependencies and handoff/ongoing arrangements. | Numbered sequence. |
| 6. Evidence: Explore relevant work | Actual case study/internal work/labeled demo, optionally permitted feedback. | Evidence cards and project links. |
| 7. Related options: Other ways we can help | Relevant services and one or two neighboring solutions help buyers choose a narrower/different engagement. | Published offer links. |
| 8. Solution FAQs | Four to six unique scope/cost/dependency/ownership/delivery questions. | Accessible disclosures. |
| 9. Final CTA: Discuss your [solution] requirements | Invite a useful brief after evaluation. | Get a Quote retaining solution/tier; Consultation alternative. |

**Responsive priority:** Stack packages with amount/period/inclusions/exclusions together; avoid redundant long text.

**SEO/search purpose:** Solution-specific commercial research. Suggested title: [Solution Name] | ARADUN.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Intro with contextual Quote; audience/problem fit; coordinated scope; three package columns where source permits; delivery sequence; genuine evidence; related capabilities; FAQ; final CTA. Price cards align headers/actions but let content height vary.

**Step 4 tablet adaptation:** Packages use two columns then full-width custom option or all vertical if comparison is clearer; evidence and related capabilities two columns.

**Step 4 mobile wireframe:** Solution fit and scope before packages; each package repeats labels, unit and exclusions; custom path remains visible. Process/proof/related/FAQ/CTA stack.

**Step 4 components, CTA, accessibility and motion:** CMP-15, CMP-17, CMP-18, CMP-19, CMP-20, CMP-23, CMP-24, CMP-26. Preserve source nine-region order. Quote carries solution and tier, without claiming all referenced services are included. CSS only unless one selected evidence reveal.

### T-PRICING — Pricing and packages

**Planned main sections/UI regions:** 8.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: Understand your options before you start | Explain USD starting prices and scope-based final quotes. | Anchors to solution and service prices; Get a Quote. |
| 2. Pricing models: How engagements are priced | Explain one-time, monthly, setup plus monthly and custom; make obligations comparable. | Four concise model explanations. |
| 3. Solution pricing: Compare business solutions | Reuse the five source solutions and tier values; detailed definitions stay with offers. | Comparison table and solution links. |
| 4. Individual services: Need a specific service? | Eight groups expose all 57 service names and existing prices/periods without a wall of full packages. | Compact accessible expandable groups and detail links. |
| 5. Combined/custom: Build a scope around your needs | Explain multi-selection and staff review of overlap/dependencies; no binding automatic sum. | Request a Custom Quote through the unified flow. |
| 6. Cost/payment expectations: What affects your quote? | Scope, quantities, integrations, assets, third-party charges, payment stages and optional ongoing work prevent surprises. | Clear costs/terms explanation; distinguish fees and external charges. |
| 7. Pricing FAQs | Starting prices, external costs, deposits, maintenance, custom work and quote changes. | Concise answers and policy/help links. |
| 8. Final CTA: Get a quote for your requirements | Explain the useful brief and next step. | Get a Quote; Consultation. |

**Responsive priority:** Stack comparisons or use compact groups; never detach prices from currency, period and conditions.

**SEO/search purpose:** Commercial price comparison. Suggested title: Pricing & Packages | ARADUN.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Eight ordered regions: left-aligned hero; four pricing-model rows; five-solution comparison; individual-service directory links; combined/custom explanation; cost/payment expectations; pricing FAQs; final Quote. Comparisons have readable column headers and local scrolling only if necessary.

**Step 4 tablet adaptation:** Readable two-column comparisons or labeled per-solution groups, with no data loss; keep caveats adjacent to relevant prices.

**Step 4 mobile wireframe:** Stack solution groups and repeat Starter/Professional/Enterprise labels; no page-wide overflow. Custom option and scope-dependent note visible before Quote.

**Step 4 components, CTA, accessibility and motion:** CMP-17, CMP-18, CMP-24, CMP-26. No checkout, total calculator, currency toggle or fabricated popular badge. Amount/unit inseparable; no meaning by highlight alone. Static comparison.

### T-ABOUT — About ARADUN

**Planned main sections/UI regions:** 6.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Introduction: Technology & Digital Solutions for businesses | Explain identity, global B2B positioning and tagline to orient credibility-checking prospects. | Company introduction; Get a Quote. |
| 2. Purpose and direction | Approved mission, vision and practical problems explain direction; products remain ambitions unless real. | Concise narrative and relevant capability links. |
| 3. People behind ARADUN | Genuine founder/team names, roles, relevant experience and permitted photos show accountability. | People profiles within About, not new routes. |
| 4. How we work | Scope, communication, review, quality, documentation and handoff explain expectations. | Process/principles and service/FAQ links. |
| 5. Evidence of our work | Actual projects and permitted feedback substantiate capability; attribute personal/employer experience accurately. | Project/testimonial cards. |
| 6. Start a conversation | Invite a brief or general question with approved location/contact facts. | Get a Quote; Contact Us. |

**Responsive priority:** Identity and people before long background.

**SEO/search purpose:** Branded company research.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Editorial title and concise positioning; verified story/founder content with permitted portrait beside text; capabilities and working principles; genuine trust evidence; final invitation in six source regions.

**Step 4 tablet adaptation:** Portrait beside short text only, otherwise below; principles two columns.

**Step 4 mobile wireframe:** Identity/story precedes image, all principles stack, evidence and Quote remain in normal flow.

**Step 4 components, CTA, accessibility and motion:** CMP-19, CMP-20, CMP-21, CMP-23, CMP-26, CMP-27. No invented team, office, award or scale claims. Technology breadth stays explicit. Portrait alt identifies relevant person; optional single image reveal.

### T-WORK — Our Work

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: Explore our work | Explain inspectable evidence and the three classifications. | Brief introduction. |
| 2. Browse controls | Service/type filters only when collection size warrants them help find relevant work. | Accessible filters and clear-filter action. |
| 3. Project collection | Accurate classification, image, problem and contribution summary support inspection. | Cards to project details. |
| 4. Similar project invitation | Relate evidence to the prospect’s need. | Contextual quote and service links. |

**Responsive priority:** Classifications and captions visible without hover; readable stacked project cards.

**SEO/search purpose:** Portfolio discovery and commercial capability evaluation.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Four regions: intro; labeled browse controls; two-column image-led project collection with classification, captions, pagination and collection states; Similar project invitation with contextual Quote. A featured composition stays inside region 3.

**Step 4 tablet adaptation:** Two columns where captions fit, otherwise one.

**Step 4 mobile wireframe:** Filters wrap or open labeled panel; project cards single column with classification visible; normal pagination, no swipe-only gallery.

**Step 4 components, CTA, accessibility and motion:** CMP-20, CMP-26, CMP-28, CMP-36. Open Project primary per card. Concept/Demo cannot resemble a client endorsement. No empty proof grid, no blocking hover overlay; CSS focus/hover.

### T-CASE — Case study/project detail

**Planned main sections/UI regions:** 7.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Project introduction | Actual title, type, concise summary and permitted image establish context. | Project header. |
| 2. Problem and constraints | Starting situation, audience, limitations and objectives explain the challenge. | Short narrative. |
| 3. Scope and contribution | Identify actual ARADUN contribution and collaborators/boundaries. | Scope list. |
| 4. Approach and key decisions | Explain meaningful design, technical and operational choices. | Annotated decisions and visuals. |
| 5. Delivered work | Show permitted screens, demonstrations or artifacts with explanation. | Accessible annotated gallery. |
| 6. Outcomes and evidence | Supported results with measurement context/limits; factual delivery outcomes if no metrics; genuine permitted feedback. | Evidence summary; no invented results. |
| 7. Related services and next step | Connect demonstrated work to offers and a similar-need inquiry. | Relevant service; Get a Quote. |

**Responsive priority:** Visible classifications/captions; responsive visuals, no private data.

**SEO/search purpose:** Specific project/problem research.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Project identity/classification then context; problem and contribution; approach; reserved gallery/screen frames; substantiated outcomes; relevant capabilities and next-step action in exact seven-region order. Reading column 720px, media may use full container.

**Step 4 tablet adaptation:** Media can span width; text remains constrained; metadata wraps.

**Step 4 mobile wireframe:** Identity and classification before imagery; screenshots offer accessible descriptions and readable crops; no tiny mockup text as sole information. Related quote follows outcome context.

**Step 4 components, CTA, accessibility and motion:** CMP-19, CMP-20, CMP-23, CMP-26, CMP-27. Preserve genuine attribution, metrics period/source and role. Caption gallery; optional one image reveal, no required scroll pinning.

### T-INSIGHTS — Insights and Resources

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: Practical guidance for your digital decisions | Explain subject coverage and reader value. | Introduction. |
| 2. Topic navigation | Approved topics/categories and website search aid discovery. | Topic controls and Search. |
| 3. Article/resource collection | Published title, summary, topic, genuine author/date and optional image help selection. | Cards/list and manageable pagination. |
| 4. Need practical help? | Link education to a relevant offer without distracting from reading. | Relevant services or Consultation. |

**Responsive priority:** Titles and summaries before supporting images; usable topic controls.

**SEO/search purpose:** Informational discovery across published resources.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Four regions: intro; topic navigation; three-column article/resource collection with title, summary, actual metadata, pagination and collection states; Need practical help with contextual guidance/CTA. Never replace the final assistance region with pagination.

**Step 4 tablet adaptation:** Two columns with equal image aspect; controls wrap.

**Step 4 mobile wireframe:** One article per row/card; controls available above results, pagination below.

**Step 4 components, CTA, accessibility and motion:** CMP-25, CMP-26, CMP-28, CMP-36. Read Article primary; avoid sales banner interrupting result scan. No invented dates/authors. Static list or very small once-only entrance.

### T-ARTICLE — Article/resource detail

**Planned main sections/UI regions:** 6.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Article header | Unique title, summary, genuine author, accurate dates and topic establish accountability. | Header and optional featured image. |
| 2. Key takeaway and contents | Answer the question early; contents for long articles reduce navigation effort. | Summary and anchor links. |
| 3. Main article | Useful distinct explanation, examples, sources and accessible visuals deliver value. | Semantic body with meaningful subheadings. |
| 4. Practical resource | Checklist/example/download only when genuinely useful; no mandatory email gate introduced. | Optional resource block/asset link. |
| 5. Related reading and services | A few relevant published links support further research or help. | Descriptive cards/links. |
| 6. Contextual next step | Match the next action to the topic. | Relevant offer or Consultation. |

**Responsive priority:** Readable paragraphs, responsive visuals/tables and optional contents.

**SEO/search purpose:** A distinct informational question; appropriate accurate Article metadata.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Six regions: article header with genuine metadata and optional reserved image; key takeaway and contents; 720px main article; practical resource; related reading/services; contextual next step. Long contents may occupy a restrained rail without altering logical order.

**Step 4 tablet adaptation:** Header and takeaway/contents remain in-flow, body 720px maximum; practical resource then two-column related cards then contextual action.

**Step 4 mobile wireframe:** Header/metadata, takeaway/contents, article, resource, related links and contextual next step stack in source order. Tables scroll locally; captions and text alternatives remain.

**Step 4 components, CTA, accessibility and motion:** CMP-25, CMP-26, CMP-27. Sales CTA only when relevant. Real headings and descriptive links; no per-paragraph reveals. Reading is static.

### T-FAQ — FAQs and Help

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Introduction and search: How can we help? | Orient the user and expose published-answer discovery. | Search control. |
| 2. Question categories | Services, pricing, delivery, support and working with ARADUN help browsing. | Category navigation. |
| 3. Questions and answers | Short accurate answers resolve common issues; detailed pages only when needed. | Accessible disclosures, stable answer links and help links. |
| 4. Still need help? | Provide a clear route when the answer is insufficient. | Contact; Quote/Consultation when relevant. |

**Responsive priority:** Question labels and answers readable, keyboard-operable controls.

**SEO/search purpose:** Informational and purchase/service questions.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Four regions: intro/search; question-category navigation; grouped readable accordion answers at 800px; Still need help with Contact and relevant detailed-help links. Detailed-help links can also appear inside answers.

**Step 4 tablet adaptation:** Category controls wrap above answers; one readable question/answer column.

**Step 4 mobile wireframe:** Search then category links then full-width question buttons and answers; final assistance remains visible. No nested controls or swipe-only topics.

**Step 4 components, CTA, accessibility and motion:** CMP-11, CMP-24, CMP-28. Answer expansion does not create a new route; headings preserve groups. Contact alternative visible. CSS disclosure only.

### T-HELP — Detailed help article

**Planned main sections/UI regions:** 5.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Question and immediate answer | Resolve the central issue quickly. | Title and answer summary. |
| 2. When this applies | State scope, circumstances and limitations. | Context note. |
| 3. Explanation or steps | Give complete approved instructions/examples. | Ordered steps or explanatory body. |
| 4. Related answers and offers | Link relevant supporting material without duplication. | Published help/offer links. |
| 5. Further help | Explain useful information to include in a question. | Contact Us. |

**Responsive priority:** Answer first, steps readable and semantic.

**SEO/search purpose:** Substantial specific help question; do not duplicate an Insights article.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Five regions: question and immediate answer; when this applies; reading-width explanation/numbered steps; related answers/offers; further help. Optional contents belongs within the explanation region, not a replacement region.

**Step 4 tablet adaptation:** One reading column; relevant supporting media within its own explanation region, related cards two columns.

**Step 4 mobile wireframe:** Immediate answer then applicability, steps, related answers/offers and help; warnings stay with the relevant step.

**Step 4 components, CTA, accessibility and motion:** CMP-24, CMP-26, CMP-27. No duplicate article copied to help. Search/breadcrumbs return to hub. Static reading and accessible inline links.

### T-CONTACT — Contact

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: How can we help? | Explain general inquiries and show alternative quote/consultation paths. | Short intro and contextual links. |
| 2. Contact form | Required name, email, subject and message keep the inquiry easy. | Send Message; no required phone/company/budget/login. |
| 3. Contact details | Working hello@aradun.com, approved location and verified channels offer an alternative. | Email/contact/social links; no invented offices. |
| 4. What happens next | Explain staff review/routing; response time only when approved. | Next-step copy. |

**Responsive priority:** Form before secondary company detail; visible labels/errors.

**SEO/search purpose:** Branded contact intent.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Four regions in order: hero; 640px contact form; verified contact-details band; what happens next and relevant alternatives. Form is single-column; contact details can use a two-column internal layout without moving ahead of the form.

**Step 4 tablet adaptation:** Single-column form, contact details in one or two readable columns, then accurate next-step explanation.

**Step 4 mobile wireframe:** Hero, name/email/subject/message and Send, verified contact details, then next steps. Privacy help stays by submit; do not force Quote or Consultation.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-35, CMP-36. General contact must not force a quote, meeting, phone or company. Focus error summary then fields; no animation beyond status.

### T-QUOTE — Get a Quote — four regions, four form steps

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Introduction: Tell us about your project | Explain that the inquiry starts scoping rather than a purchase. | Concise intro. |
| 2. Progress and form | Service → Project → Contact → Review; preserve and allow editing of incoming selections. | Four-step form, Back/Continue and Submit Quote Request. |
| 3. Contextual guidance | Explain optional fields, custom needs and indicative pricing at relevant steps. | Short inline guidance, no intrusive copy. |
| 4. Privacy and assistance | Applicable acknowledgement, privacy link and accessible help support informed submission. | Separate optional marketing choice if introduced; Contact assistance. |

**Responsive priority:** Single-column flow; visible progress; labels, error summary and preserved input.

**SEO/search purpose:** Noindex; excluded from XML sitemap.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Four source page regions contain a centered 640px four-step flow, with editable selected-offer summary beside it only on roomy screens. Step indicator, one current step, Back/Continue or final Submit, privacy and starting-price context. Review step lists all submitted selections before contact details/action.

**Step 4 tablet adaptation:** Summary becomes in-flow above relevant current content; no narrow parallel form columns.

**Step 4 mobile wireframe:** Single-column visible step x of 4, selected-offer summary expandable, active fields, persistent in-flow controls; back preserves answers. On-screen keyboard never covers errors or final action.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-31, CMP-32, CMP-33, CMP-35, CMP-36. Service → Project → Contact → Review. Contextual selection editable; Not sure/Custom path. Motion step fade optional with immediate focus; reduced static.

### T-CONSULT — Consultation

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Hero: Discuss your goals with ARADUN | Explain whom the conversation helps and the decision it supports. | Brief intro. |
| 2. What to expect | Goals, current systems, priorities and next steps; duration/fees only after approval. | Preparation summary. |
| 3. Request/scheduling area | Name, email, topic; manual preferred time/timezone or provider-confirmed slots under the chosen mode. | Request a Consultation under baseline; Book only with functioning live scheduling. |
| 4. Preparation and alternatives | Explain useful inputs, confirmation expectations and quote/contact alternatives. | Quote and Contact links. |

**Responsive priority:** Topic/timezone clear before time selection; accessible scheduling fallback.

**SEO/search purpose:** Branded consultation and commercial inquiry intent.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Four regions: hero; what to expect; request/scheduling area with form and timezone/preparation context inside that region; preparation and alternatives. Manual request is baseline; conditional live scheduler replaces only the input area after D-003.

**Step 4 tablet adaptation:** Expectations above one-column form; timezone next to preferred-time input; preparation/alternatives last.

**Step 4 mobile wireframe:** Hero then expectations, name/email/topic/preferred time/timezone and request action, then preparation/alternatives. No tiny slot grid or false booking confirmation.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-34, CMP-35, CMP-36. Request a Consultation is P1; verified booking wording only in approved live mode. CSS status, no decorative animation in scheduling.

### T-CONFIRM — Inquiry confirmation

**Planned main sections/UI regions:** 3.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Accurate confirmation | Show type/reference only after confirmed save; distinguish pending consultation from booked appointment. | Acknowledgement. |
| 2. What happens next | Explain actual staff review and required user action without unsupported promises. | Next-step information. |
| 3. Useful continuation | Return the visitor to relevant content. | Relevant offer, FAQ or Contact. |

**Responsive priority:** Concise status and next action; avoid showing sensitive full inquiry contents.

**SEO/search purpose:** Noindex; direct visits show neutral guidance, not false conversion success.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Centered 640px status/reference region, accurate next-step explanation, limited relevant navigation; no submitted private content or unnecessary sales wall.

**Step 4 tablet adaptation:** Same constrained layout.

**Step 4 mobile wireframe:** Full-width readable result, selectable reference, next actions stacked; announce status once.

**Step 4 components, CTA, accessibility and motion:** CMP-35, CMP-36. A saved request is not a booked meeting/paid order; direct route visit cannot fabricate success. Static.

### T-SEARCH — Search results

**Planned main sections/UI regions:** 3.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Search controls | Editable query and clear submit action; useful content-type filter if selected. | Search/refine. |
| 2. Results | Published services, solutions, articles and FAQs with title/type/excerpt aid selection. | Descriptive result links. |
| 3. Recovery and continuation | No-results help, clear filters, category links and pagination support continuation. | Refine, clear filters, retry or browse Services. |

**Responsive priority:** Search and results first; compact understandable filters.

**SEO/search purpose:** Noindex. Public P1 search excludes drafts/private content; no silent work/product/industry expansion.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Query heading and search controls; one readable result column grouped/labeled by content type; pagination and empty/error guidance. Matched titles/summary are links with category context.

**Step 4 tablet adaptation:** Same layout with filters wrapping.

**Step 4 mobile wireframe:** Query input full-width, filters accessible; results show title and useful excerpt, no clipped link targets.

**Step 4 components, CTA, accessibility and motion:** CMP-11, CMP-28, CMP-36. Only published services/solutions/articles/FAQs as approved; no private search results. URL/filter indexing governed by source. Static result replacement with polite count.

### T-POLICY — Public legal/policy document

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Title and dates | Identify the document and real effective/update dates. | Clear H1 and date. |
| 2. Contents navigation | Help users reach the relevant topic in longer text. | Semantic anchor links. |
| 3. Policy body | Ordered headings reflect actual facts/practices and the page-specific topics below. | Readable document, not fictional legal commitments. |
| 4. Questions/reporting route | Provide the correct actual channel and related policies. | Privacy contact, clarification, choice management or report action as appropriate. |

**Responsive priority:** Readable body and contents; no interrupting sales banners.

**SEO/search purpose:** Substantive published policies eligible for indexing; no legal-compliance guarantee.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Four regions: title/actual dates; contents navigation; 720px policy body; questions/reporting route and related policies. Long contents can be a restrained adjacent rail while DOM order stays before the body; no sales interruption.

**Step 4 tablet adaptation:** Contents disclosure in-flow before body; question/reporting route last.

**Step 4 mobile wireframe:** Title/dates, contents, readable clauses then questions/reporting. Do not hide essential conditions inside collapsed body accordions.

**Step 4 components, CTA, accessibility and motion:** CMP-27. Content must reflect actual operations/jurisdictions; conditional policy routes remain conditional. Static; table and link semantics preserved.

### T-STATE — Shared system state

**Planned main sections/UI regions:** 3.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Clear state heading | Identify missing page or recoverable failure without blaming the user. | Meaningful H1/status. |
| 2. Accurate explanation | Explain known effect on an attempted action; never claim a save succeeded without evidence. | Concise safe text without internal diagnostics. |
| 3. Recovery choices | Restore a useful path and preserve safe input when possible. | Search/Services/Home for 404; safe Retry or Contact for failure. |

**Responsive priority:** Readable explanation and focus/status announcement; touch/keyboard usable actions.

**SEO/search purpose:** Correct error response; no dedicated extra indexable route.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Calm centered heading/explanation/recovery region within relevant public or protected shell; no oversized animation.

**Step 4 tablet adaptation:** Same simple geometry.

**Step 4 mobile wireframe:** Explanation before clear Retry/Home/Search/Contact choices appropriate to actual state; focus remains useful.

**Step 4 components, CTA, accessibility and motion:** CMP-36. Correct status semantics, safe recovery and no false save. Static.

### T-AUTH — Authentication — staff and future client variants

**Planned main sections/UI regions:** 3.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Identity and purpose | Explain sign-in, recovery or verification task with ARADUN identity. | Compact heading; no private records. |
| 2. Provider-supported controls | Capture only supported credentials/challenge/reset inputs. | Main authentication action and progress/errors. |
| 3. Help, recovery or completion | Neutral identity-safe recovery guidance and valid next step. | Approved alternatives; return to Sign In. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Centered 440px card; compact logo/identity, provider-supported form, recovery/help. Public marketing header and staff sidebar absent until authenticated.

**Step 4 tablet adaptation:** Same card with gutters and keyboard-safe placement.

**Step 4 mobile wireframe:** Card fills available width without fixed height; heading and error summary before credentials; submit then recovery.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-35, CMP-50. Accessible names/autocomplete and password managers; generic recovery responses. No promotional motion, reduced-motion identical.

### T-DASH — Dashboard overview

**Planned main sections/UI regions:** 6.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Heading and scope | Explain dashboard and authorized record/user scope. | Page title. |
| 2. Operational summary | Authorized inquiry/status and due/overdue counts orient priorities. | Summary cards; distinguish zero from unavailable. |
| 3. Inquiries needing review | Reference/type/date/owner expose current work. | List to lead details. |
| 4. Pipeline summary | Fixed-stage counts and clearly labeled recorded estimated value support sales attention. | Stage links. |
| 5. Follow-up priorities | Due/overdue task, owner, record and timezone show next actions. | Open or complete task. |
| 6. Recent activity and shortcuts | Relevant permitted changes connect staff to existing workflows. | Lead/task/content links according to permission. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Staff shell; heading/scope, summary strip, inquiries table, pipeline summary, task priorities, activity/shortcuts. Two-column lower panels only if DOM order remains source order; no giant decorative chart.

**Step 4 tablet adaptation:** Sidebar drawer; summary 2×2, operational panels stack or use two columns only when readable.

**Step 4 mobile wireframe:** Summary tiles two columns at most, then compact inquiry rows, pipeline stage list, tasks, activity; data labels/timezones preserved.

**Step 4 components, CTA, accessibility and motion:** CMP-37, CMP-38, CMP-39, CMP-40, CMP-41, CMP-42, CMP-43, CMP-44, CMP-48. Role-filtered counts; no-access not zero; panel-specific retry. CSS feedback only.

### T-LIST — Operational/content list

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Heading and relevant action | Explain record type and available primary action. | Title; create only where assigned. |
| 2. Search and filters | Narrow the working set using page-specific fields. | Search, filters and clear controls. |
| 3. Results table/list | Show identity, relevant status/owner/date and business context. | Open detail/editor; permitted row actions. |
| 4. Pagination and feedback | Bound browsing and explain loading/empty/no-match/failure/success. | Page navigation and retry. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Staff shell; title/actions, inline search/filter toolbar, full-width semantic table, pagination/status. Summary/board variation stays within region 3, never a new section/route.

**Step 4 tablet adaptation:** Filters wrap; table either intentional local scrolling or selected key columns plus explicit expandable details.

**Step 4 mobile wireframe:** Title and main action first, search then filter disclosure, labeled record summaries and pagination. All omitted columns accessible in record detail, never silently lost.

**Step 4 components, CTA, accessibility and motion:** CMP-28, CMP-37, CMP-38, CMP-39, CMP-40, CMP-47, CMP-48. Keyboard row links and menus, announced results, no whole-row nested link traps. Static tables.

### T-DETAIL — Operational record detail

**Planned main sections/UI regions:** 5.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Identity and status | Confirm which record is open. | Header and status. |
| 2. Core information | Present the page-specific facts. | Labeled fields/edit controls by permission. |
| 3. Linked records and context | Explain relationships without duplicate identities. | Authorized related-record links. |
| 4. Notes, activity or tasks | Preserve relevant operational context/history. | Timeline, notes and task controls where applicable. |
| 5. Actions and feedback | Perform permitted changes with clear result. | Save/update/confirm; safe validation and conflict recovery. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Identity/status; core facts 8/12 with narrow context alongside only inside matching region; linked records; notes/activity/tasks; in-flow save/update/confirmation. Maintain visible record ID when editing.

**Step 4 tablet adaptation:** Core facts full-width; context follows facts; activity below.

**Step 4 mobile wireframe:** Identity/status, labeled fields, related records, notes/history/tasks and action follow one column; contextual edit may use full-height drawer.

**Step 4 components, CTA, accessibility and motion:** CMP-37, CMP-38, CMP-40, CMP-42, CMP-43, CMP-44, CMP-47, CMP-48. Role-check each action; safe stale-update recovery. No cinematic motion.

### T-CONTENT — Content overview

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Heading | Explain the limited P1 content workspace. | Contextual title. |
| 2. Permitted modules | Show Articles, Testimonials, SEO and conditional FAQs. | Role-aware module cards. |
| 3. Publication summaries | Useful counts/status only from permitted content. | Draft/published summaries. |
| 4. Recent edits | Help resume relevant work. | Authorized editor links. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Heading then four-or-fewer permitted module cards in one row, publication summaries, recent-edit table. Exclude unapproved general CMS modules.

**Step 4 tablet adaptation:** Two-column module grid, summaries and edits stack.

**Step 4 mobile wireframe:** Modules one column, status values labeled, recent edits compact list.

**Step 4 components, CTA, accessibility and motion:** CMP-37, CMP-38, CMP-39, CMP-40, CMP-48. Editor permissions only, no fake zero statistics. CSS feedback.

### T-EDITOR — Article creation/editing

**Planned main sections/UI regions:** 6.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Identity | Title and slug identify the content. | Labeled inputs. |
| 2. Summary and body | Excerpt/body provide substantive article content. | Accessible editor and structured headings. |
| 3. Images and assets | Controlled featured-image references and alt text support useful visuals. | Approved asset selection; secured uploads only if chosen. |
| 4. Classification and author | Accurate author/topic/type fields support discovery/accountability. | Approved selectors. |
| 5. SEO metadata | Title/description and permitted metadata support discovery. | Validated metadata controls. |
| 6. Save and publication | Explicitly distinguish draft/public state. | Save Draft; saved-record Preview; authorized Publish/Unpublish. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Six ordered full-width form panels with 720–880px writing area; publication status in toolbar is a summary, actual source publication actions remain last. Optional right preview is secondary and does not reorder form fields.

**Step 4 tablet adaptation:** One editing column; metadata and image controls below body in source order.

**Step 4 mobile wireframe:** All panels stack; editor toolbar wraps accessibly, media controls large enough; Save Draft/Preview/Publish remain clearly distinct, no sticky obstruction.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-37, CMP-38, CMP-45, CMP-47, CMP-48. No assumed autosave or live-revision behavior; U-03. Restricted publication confirmation and dirty-navigation treatment; CSS status.

### T-PREVIEW — Private article preview

**Planned main sections/UI regions:** 3.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Private-preview notice | Identify draft status and access boundary. | Clear banner. |
| 2. Rendered article | Inspect the public content layout without public exposure. | Draft-rendered article. |
| 3. Return/publication controls | Support correction and authorized publication. | Return to Editor; Publish only if authorized. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Protected preview notice; actual public article typography and media; explicit return/publication controls. Preview width selectors, if later useful, cannot imply separate routes.

**Step 4 tablet adaptation:** Rendered article adapts naturally.

**Step 4 mobile wireframe:** Notice remains visible before article, Return to Editor reachable after reading; no editing controls inside public prose.

**Step 4 components, CTA, accessibility and motion:** CMP-27, CMP-49. Actual draft authorization/asset protection, no public cache exposure. Static.

### T-TESTIMONIAL — Testimonial editor

**Planned main sections/UI regions:** 5.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Attribution | Accurate permitted name/role/company establish source. | Attribution fields. |
| 2. Quotation | Preserve genuine feedback meaning. | Quote editor. |
| 3. Evidence and permission | Record actual source/permission before publishing. | Protected evidence references/status. |
| 4. Context and preview | Relate to genuine engagement/work. | Context fields and readable preview. |
| 5. Publication actions | Control public visibility. | Save; Publish; Hide. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Five ordered form panels: attribution, quote, private permission/source, contextual preview, publication actions; preview alongside its own context on wide screens.

**Step 4 tablet adaptation:** Single column with contextual preview below fields.

**Step 4 mobile wireframe:** One field group per row; private evidence is never part of public preview; save/publication labels explicit.

**Step 4 components, CTA, accessibility and motion:** CMP-21, CMP-29, CMP-30, CMP-45, CMP-48. Cannot publish fabricated feedback; approved permission is business review, not a cosmetic checked box. Static.

### T-SEOEDIT — SEO metadata editor

**Planned main sections/UI regions:** 5.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Page identity | Show stable page/route/content identity. | Readable header and public link where permitted. |
| 2. Search metadata | Approved title and description describe content. | Validated text fields. |
| 3. Canonical and index controls | Explain consequences and preserve protected-page rules. | Restricted canonical/index options. |
| 4. Social metadata and preview | Explain sharing presentation accurately. | Approved image/title fields; illustrative preview, not a search-result guarantee. |
| 5. Save controls | Apply authorized validated metadata. | Save and clear feedback. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Stable page identity; metadata form; restricted canonical/index settings; social preview alongside its fields; Save at end. 720px form, no page-builder canvas.

**Step 4 tablet adaptation:** Preview follows fields.

**Step 4 mobile wireframe:** Inputs and counters wrap, route strings break safely; metadata consequences in visible text.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-46, CMP-48. Preview illustrative; restrict protected-page indexing and wrong canonical. Static.

### T-FAQEDIT — FAQ/help editor

**Planned main sections/UI regions:** 5.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Identity and type | Distinguish short FAQ and detailed help. | Question/title and type. |
| 2. Answer/body | Maintain useful policy-consistent answers. | Content editor. |
| 3. Category and related links | Support discovery without duplicate content. | Categories and approved links. |
| 4. Metadata and preview | Inspect reader presentation. | Metadata/private preview appropriate to content. |
| 5. Publication actions | Control approved visibility. | Save; Publish; Hide. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Question/type; body; category/related links; metadata/private reader preview; publication. Reading width for answer, no expanded CMS canvas.

**Step 4 tablet adaptation:** All form groups one column.

**Step 4 mobile wireframe:** Toolbar/inputs wrap, answer editing remains keyboard usable; action labels distinguish save/publish/hide.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-45, CMP-48. Conditional route; public FAQ capability stays required whichever authoring method wins. Static.

### T-ACCESS — Staff access detail

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Staff identity and status | Confirm the person before consequential actions. | Identity header. |
| 2. Assigned permissions | Explain approved role and scope. | Restricted role controls. |
| 3. Supported access controls | Enable approved provisioning/revocation processes. | Provider-supported settings. |
| 4. Confirmation and history | Explain effects and preserve accountability. | Confirm changes/revoke; prevent accidental loss of required admin access. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Staff identity/status and permission form; supported access controls; consequential confirmation/history at end. Current target repeated near revoke.

**Step 4 tablet adaptation:** One column; long permission explanations wrap.

**Step 4 mobile wireframe:** Identity stays above roles, full-width confirm dialog with exact target and consequence; no compact unlabeled icon-only revoke.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-47, CMP-50. Admin-only, no unapproved role builder, guard required administrator access; audited outcomes and provider errors. Static.

### T-AUDIT — Audit log viewer

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Scope explanation | Explain visible events and permission scope. | Heading. |
| 2. Filters | Date, actor, action and record locate relevant changes. | Accessible filters. |
| 3. Events and detail | Show time/actor/action/record/permitted change summary. | Read-only table and detail expansion. |
| 4. Pagination and recovery | Bound history and distinguish empty/failure. | Page/retry actions; no edit/delete of audit events. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Read-only scope, filters, events table with detail expansion, pagination/recovery; monospace references only where useful.

**Step 4 tablet adaptation:** Filters wrap; table local-scroll or event cards.

**Step 4 mobile wireframe:** Actor/action/time/record in each event card; details disclose safely, no delete/edit gestures.

**Step 4 components, CTA, accessibility and motion:** CMP-39, CMP-43, CMP-48. Conditional viewer, required logging remains. Authorized audit visibility only; static.

### T-ACCOUNT — My Account and Security

**Planned main sections/UI regions:** 4.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Own profile | Show permitted personal profile fields. | Profile form. |
| 2. Sign-in and MFA | Explain supported own-account security options. | Provider-supported security controls. |
| 3. Session and recovery | Show supported session/recovery options. | Reauthentication/recovery controls only where supported. |
| 4. Actions and feedback | Confirm own-account changes; never self-grant roles. | Save permitted fields; Sign Out. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Constrained profile form, security/MFA panel, session/recovery panel, own-account actions; separate consequential actions clearly.

**Step 4 tablet adaptation:** Single column.

**Step 4 mobile wireframe:** Identity and security state before controls; password/paste/OTP autofill supported; Sign Out remains accessible.

**Step 4 components, CTA, accessibility and motion:** CMP-29, CMP-30, CMP-48, CMP-50. Own identity, no role escalation; provider-supported recovery only. Static.

### T-PAYMENTS — Manual payment tracker

**Planned main sections/UI regions:** 5.

| Order / section | Purpose, content and conversion value | Components / action |
| --- | --- | --- |
| 1. Scope/status explanation | Distinguish expected, invoiced and received money from estimated opportunities. | Clear labels and currencies. |
| 2. Filters | Find linked customer/opportunity/status/date records. | Search/filter controls. |
| 3. Records | Show references, dates, verified amounts and context. | Protected finance list. |
| 4. Entry/correction form | Record verified external transactions/corrections. | In-page form; no gateway or public checkout. |
| 5. Reconciliation feedback | Preserve correction history and verification context. | Save verified record/correction with explicit result. |

**Responsive priority:** Prioritize identity/status/date/main action; secondary fields move into labeled detail; usable filters, table headers, intentional scrolling only when needed; visible focus, labels/errors, timezone and currency.

**SEO/search purpose:** Noindex; excluded from public/XML search. Authentication and server-side role/record authorization are required; noindex is not security.

**Inherited rules:** G-TRUST, G-CONVERSION/G-PRICING where applicable, G-A11Y, G-SEO, G-ACCESS for protected use, and G-STATES. Internal links follow the page record and published relevant destinations.

**Step 4 desktop wireframe:** Scope/status, filters, finance table, in-page verified entry/correction, reconciliation feedback/history. Amount and currency aligned; no sum of mixed currencies.

**Step 4 tablet adaptation:** Table locally scrolls or labeled grouped rows, form below.

**Step 4 mobile wireframe:** Record cards keep amount/currency/status/reference together; correction form single column with confirmation.

**Step 4 components, CTA, accessibility and motion:** CMP-39, CMP-40, CMP-47, CMP-51. Conditional finance permission; verified external data only, no gateway or invoice-suite expansion. Static.

### Service-template variations

| Variation | How SERVICE sections differ | Useful delivery sequence; timing remains scope-dependent |
| --- | --- | --- |
| Project | Concrete deliverables, inputs, acceptance and handoff; distinguish optional ongoing work. | Understand requirements → agree scope/inputs → create/configure → review/verify → handoff. |
| Custom | Discovery, roles/workflows/integrations and estimation assumptions; no fixed invented package scope. | Discovery → prioritize/estimate → agree milestones → iterative delivery/review → acceptance/handoff. |
| Ongoing | Period, workload, service boundaries, recurring fees, reporting and change requests; no unlimited capacity. | Baseline/onboarding → recurring agreed work → review/report → reprioritize under agreed terms. |
| Assessment | Authorized boundaries, method, evidence, findings and limits; remediation/retest only when agreed. | Scope/authorization → assess → validate findings → explain priorities → optional separately agreed follow-up. |
| Design/media | Source assets, rights, formats, production versus editing, reviews and handoff; no implementation implied. | Brief/assets → concept/structure → production/design → agreed review → final agreed formats. |

### 9.36 High-level future layout patterns

Future entries retain their own complete ordered regions in §10. No detailed future workflow, provider or tenant architecture is approved by these patterns.

| Pattern | Desktop | Tablet | Mobile | Boundary |
|---|---|---|---|---|
| Industry / product marketing | Editorial intro, distinct problem/capability sections, status-accurate proof and inquiry action; 7/5 visual split only within a region | Two-column cards, one reading column | Single ordered column; actual availability before action | No new offer identities, invented product readiness or empty sector pages |
| Operational list | Title, scoped filters, table, pagination | Wrapped filters, local table scroll | Labeled record cards with all important values, details link | Existing future route; bounded authorized data |
| Record / project workspace | Identity, authorized facts, related work, activity, action in its prescribed order | Context panels below relevant facts | Same order, task-focused disclosure | No automatic commerce visibility for contractors |
| Proposal / contract / invoice | Version/status identity, readable document, amount/currency and permissions, review/action | Reading column with action in-flow | Document sections readable, explicit acknowledgement and safe completion | External truth, authorization and signing/payment provider gates preserved |
| CMS / media / catalog | Ordered editor panels, restricted metadata/asset handling, preview/publication | One editing column | Stacked labeled panels, accessible upload/selection alternatives | P2 general editing and media never inferred as P1 |
| Client portal | Distinct client shell and own-record scope; authorized list/detail patterns | Drawer navigation, stacked task panels | Current client context, record identity and primary task first | No cross-client disclosure; client onboarding/auth policy unresolved |
| Workflow / integration | Identity, configuration, validation/test status, controlled activation/history | Stack configuration and evidence | Reviewable sequential sections, no tiny visual-canvas-only editing | Source-of-truth, credentials, retries and human confirmation required |
| Analytics / audit | Scope/timezone/date, real summaries, accessible chart-plus-table, details | Fewer columns, same data | Summary then table/list, no color-only chart | Partial/missing data shown; mixed currency never summed silently |
| AI-assisted / advanced | Clear advisory label, inputs/context, attributable output, review/action, history | Same order | Single task column, readable output, explicit confirmation | Human review, capability/cost/permission limits; no unapproved autonomous action |
| AMS / multi-organization | Strong module/organization context, role-scoped shell and ordered task regions | Drawer and stacked panels | Context and record identity before action | Separate product/AMS-GATE, tenant boundaries and scope remain conditional |

Future patterns inherit the same three themes, semantics and reduced-motion defaults. Do not copy marketing hero motion into workspaces. When approved later, map new controls to existing tokens/components before adding a new primitive.

## 10. Page-by-page wireframe coverage — all phases

The complete source records follow without omission. Their names, exact supplied routes, phases, access, audience, objectives, actions, ordered sections, page-specific content, navigation, indexing and requirement references are retained. The reusable compositions in §9 apply to every assigned template. Each P1 private record also receives its own operational interaction specification below. The source's numbered references remain source-local; section order and conditional status have not been rewritten.

### 10.1 Phase 1 — 124 page/state records

#### PUB-001 — Home

**URL:** `/`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** New visitors; business decision-makers.  
**Objective:** Explain ARADUN and direct visitors to relevant offers and evidence.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Explore Services in hero; consultation and Contact in final invitation.

**Blueprint:** T-HOME; **11** planned sections/UI regions.

**Order:** 1. Hero and value proposition → 2. Eight service categories → 3. Five business solutions → 4. Selected work and case studies → 5. Why work with ARADUN → 6. How we work → 7. Starting prices and engagement options → 8. Client feedback → 9. Insights and resources → 10. Frequently asked questions → 11. Final project invitation.

**Page-specific content and decisions:** Eight core sections plus three evidence-dependent sections (4, 8, 9): published page may show 8–11. Industry relevance belongs within solution/audience content; technology evidence belongs within capabilities/work, not separate long homepage walls. Preserve all planned sections even when evidence display is deferred.

**Navigation/internal links:** Header logo; footer. Parent: ROOT. Children: PUB-002, PUB-003, PUB-004, PUB-005, PUB-006, PUB-008, PUB-010, PUB-012, PUB-013, PUB-014, PUB-015, PUB-016, PUB-017, PUB-018, IND-00, PRD-00, TRU-01, TRU-02, TRU-03. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-HOME guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Home | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-001; S-MASTER requirements FR-01-02, FR-01-07; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-HOME in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-002 — Services

**URL:** `/services`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Service-aware buyers.  
**Objective:** Organize all eight categories and 57 unique services.

**Primary action:** Choose a category.  
**Secondary action/navigation:** Consultation for help selecting.

**Blueprint:** T-OV-S; **6** planned sections/UI regions.

**Order:** 1. Hero: Find the right services for your business → 2. Category directory: Explore our expertise → 3. Help choosing: Start with what you want to achieve → 4. Engagement options: Choose the engagement that fits → 5. Buyer questions: Before choosing a service → 6. Closing invitation: Tell us what you need.

**Navigation/internal links:** Header; Services menu; footer. Parent: PUB-001. Children: CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-OV-S guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Services | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-002; S-MASTER requirements FR-01-03, FR-01-04, FR-04-01, FR-04-03; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-OV-S in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-003 — Solutions

**URL:** `/solutions`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; operations leaders.  
**Objective:** Present the five coordinated business solutions.

**Primary action:** Explore a solution.  
**Secondary action/navigation:** Consultation.

**Blueprint:** T-OV-SOL; **6** planned sections/UI regions.

**Order:** 1. Hero: Find a solution around your business goals → 2. Five solutions: What would you like to improve? → 3. Selection guide: Choose your starting point → 4. Engagement approach: From your goals to an agreed scope → 5. FAQs: Before choosing a solution → 6. Closing CTA: Let’s identify the right approach.

**Page-specific content and decisions:** Selection mapping: professional online presence → SOL-01; repetitive administration → SOL-02; coordinated marketing → SOL-03; deployment/infrastructure improvements → SOL-04; connected needs across business → SOL-05.

**Navigation/internal links:** Header; Solutions menu; footer. Parent: PUB-001. Children: SOL-01, SOL-02, SOL-03, SOL-04, SOL-05. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-OV-SOL guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Solutions | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-003; S-MASTER requirements FR-01-05; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-OV-SOL in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-004 — Pricing & Packages

**URL:** `/pricing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Price-comparing prospects.  
**Objective:** Explain pricing models and link to authoritative offer comparisons.

**Primary action:** Compare an offer; Get a Quote.  
**Secondary action/navigation:** View authoritative offer; Consultation.

**Blueprint:** T-PRICING; **8** planned sections/UI regions.

**Order:** 1. Hero: Understand your options before you start → 2. Pricing models: How engagements are priced → 3. Solution pricing: Compare business solutions → 4. Individual services: Need a specific service? → 5. Combined/custom: Build a scope around your needs → 6. Cost/payment expectations: What affects your quote? → 7. Pricing FAQs → 8. Final CTA: Get a quote for your requirements.

**Page-specific content and decisions:** Preserve source payment planning guidance: Starter projects 50% deposit/50% before final handoff; Professional 40/30/30 at agreed milestones; Enterprise custom; retainers monthly in advance with cancellation governed by agreement. Retainer source guidance generally 30 days and no unused-hour rollover unless agreed is not a new universal promise. No new refund terms or public checkout.

**Navigation/internal links:** Header; footer; contextual. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-PRICING guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Pricing & Packages | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-004; S-MASTER requirements FR-01-06, FR-04-02, BR-002; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-PRICING in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-005 — About ARADUN

**URL:** `/about`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Prospects checking credibility.  
**Objective:** Establish truthful company identity, people, mission, values and delivery approach.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-ABOUT; **6** planned sections/UI regions.

**Order:** 1. Introduction: Technology & Digital Solutions for businesses → 2. Purpose and direction → 3. People behind ARADUN → 4. How we work → 5. Evidence of our work → 6. Start a conversation.

**Page-specific content and decisions:** No separate founder/team pages. Technology logos describe real use, not partnership. Narrative/public origin wording remains D-001.

**Navigation/internal links:** Header; footer. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-ABOUT guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: About ARADUN | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-005; S-MASTER requirements FR-01-08, FR-01-11, BR-001, BR-004; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-ABOUT in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-006 — Our Work

**URL:** `/our-work`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Business and technical buyers.  
**Objective:** Present permitted client, internal and concept/demo work.

**Primary action:** View a project.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-WORK; **4** planned sections/UI regions.

**Order:** 1. Hero: Explore our work → 2. Browse controls → 3. Project collection → 4. Similar project invitation.

**Page-specific content and decisions:** Empty collection is honestly explained; no-match filters offer reset. Do not fabricate projects to meet a count.

**Navigation/internal links:** Header; footer. Parent: PUB-001. Children: PUB-007. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-WORK guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Our Work | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-006; S-MASTER requirements FR-01-10, BR-004; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-WORK in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-007 — Case Study / Project Detail

**URL:** `/our-work/[slug]`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Business and technical evaluators.  
**Objective:** Explain one project's problem, contribution and supported outcomes.

**Primary action:** Get a Quote for a similar need.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-CASE; **7** planned sections/UI regions.

**Order:** 1. Project introduction → 2. Problem and constraints → 3. Scope and contribution → 4. Approach and key decisions → 5. Delivered work → 6. Outcomes and evidence → 7. Related services and next step.

**Page-specific content and decisions:** Classify Client Work, ARADUN Internal Product or Concept/Demo. Never present concept outcomes as measured client results.

**Navigation/internal links:** Work cards; related offers/content. Parent: PUB-006. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CASE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Case Study / Project Detail | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-007; S-MASTER requirements FR-01-10, FR-01-07, BR-004; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CASE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-008 — Insights & Resources

**URL:** `/insights`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Researching prospects.  
**Objective:** Provide a unified article, guide and resource hub.

**Primary action:** Read an article or resource.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-INSIGHTS; **4** planned sections/UI regions.

**Order:** 1. Hero: Practical guidance for your digital decisions → 2. Topic navigation → 3. Article/resource collection → 4. Need practical help?.

**Navigation/internal links:** Header; footer. Parent: PUB-001. Children: PUB-009. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-INSIGHTS guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Insights & Resources | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-008; S-MASTER requirements FR-01-12, FR-04-06, FR-04-08; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-INSIGHTS in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-009 — Article / Resource Detail

**URL:** `/insights/[slug]`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Readers; prospective clients.  
**Objective:** Provide one useful educational article or resource landing page.

**Primary action:** Explore a relevant offer.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-ARTICLE; **6** planned sections/UI regions.

**Order:** 1. Article header → 2. Key takeaway and contents → 3. Main article → 4. Practical resource → 5. Related reading and services → 6. Contextual next step.

**Navigation/internal links:** Insights cards; related links; website search. Parent: PUB-008. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-ARTICLE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Article / Resource Detail | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-009; S-MASTER requirements FR-01-12, FR-04-06, FR-04-08; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-ARTICLE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-010 — FAQs & Help

**URL:** `/faq`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Prospects; returning clients.  
**Objective:** Provide browsable and searchable purchase/service answers.

**Primary action:** Find an answer.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-FAQ; **4** planned sections/UI regions.

**Order:** 1. Introduction and search: How can we help? → 2. Question categories → 3. Questions and answers → 4. Still need help?.

**Navigation/internal links:** Footer; contextual; search. Parent: PUB-001. Children: PUB-011. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-FAQ guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: FAQs & Help | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-010; S-MASTER requirements FR-01-13, FR-01-14; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-FAQ in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-011 — Detailed Help Article

**URL:** `/faq/[slug]`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Users needing clarification.  
**Objective:** Explain a substantial question requiring a full answer.

**Primary action:** Contact ARADUN if unresolved.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-HELP; **5** planned sections/UI regions.

**Order:** 1. Question and immediate answer → 2. When this applies → 3. Explanation or steps → 4. Related answers and offers → 5. Further help.

**Navigation/internal links:** FAQ links; website search; contextual. Parent: PUB-010. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-HELP guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Detailed Help Article | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-011; S-MASTER requirements FR-01-13, FR-01-14, NFR-011; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-HELP in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-012 — Contact

**URL:** `/contact`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Prospects; partners; clients.  
**Objective:** Receive general questions, partnership inquiries and existing-client requests.

**Primary action:** Send an inquiry.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-CONTACT; **4** planned sections/UI regions.

**Order:** 1. Hero: How can we help? → 2. Contact form → 3. Contact details → 4. What happens next.

**Navigation/internal links:** Desktop header; mobile menu; footer; contextual. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CONTACT guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Contact | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-012; S-MASTER requirements FR-01-09, FR-02-04, BR-003; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CONTACT in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-013 — Get a Quote

**URL:** `/get-a-quote`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Prospects ready to discuss scope.  
**Objective:** Capture Service, Project, Contact and Review through one quote flow.

**Primary action:** Submit quote request.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-QUOTE; **4** planned sections/UI regions.

**Order:** 1. Introduction: Tell us about your project → 2. Progress and form → 3. Contextual guidance → 4. Privacy and assistance.

**Page-specific content and decisions:** Step 1: service(s), solution/package or Custom/Not sure. Step 2: required brief description, optional budget/timeline. Step 3: required name/email, optional company/website. Step 4: editable summary, indicative context, applicable privacy acknowledgement and submit. Accept personal/business emails; no account. Preserve selections, edits and safe retries. Optional marketing consent is separate.

**Navigation/internal links:** Primary header button; offer CTAs; footer. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-QUOTE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Get a Quote | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP PUB-013; S-MASTER requirements FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-02-07; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-QUOTE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-014 — Consultation

**URL:** `/consultation`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Prospects needing discovery.  
**Objective:** Capture a manual consultation request pending staff confirmation.

**Primary action:** Request a consultation.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**Blueprint:** T-CONSULT; **4** planned sections/UI regions.

**Order:** 1. Hero: Discuss your goals with ARADUN → 2. What to expect → 3. Request/scheduling area → 4. Preparation and alternatives.

**Page-specific content and decisions:** D-003: requested Google Calendar scheduling direction is recorded; documents still use manual P1 requests. Manual preferred time/timezone is pending staff confirmation. Live mode shows provider availability/timezone and confirmed appointment details, with unavailable-slot/loading failure fallback; phase, external-link versus integration, CRM linkage and account capability remain unresolved. Same public route, no invented internal appointment promotion.

**Navigation/internal links:** Secondary CTAs; Contact; footer; mobile. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CONSULT guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Consultation | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-014; S-MASTER requirements FR-02-05; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CONSULT in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-015 — Inquiry Confirmation

**URL:** `/thank-you`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Successful form submitters.  
**Objective:** Confirm successful saved inquiry and explain next steps without exposing private records.

**Primary action:** Review next steps; return to relevant content.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-CONFIRM; **3** planned sections/UI regions.

**Order:** 1. Accurate confirmation → 2. What happens next → 3. Useful continuation.

**Page-specific content and decisions:** Direct URL visits cannot prove submission or trigger a conversion. Reference alone grants no record access. Notification delay does not require resubmission of an already saved inquiry.

**Navigation/internal links:** Successful quote/contact/consultation submission only. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CONFIRM guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Inquiry Confirmation | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP PUB-015; S-MASTER requirements FR-02-06, FR-02-07, NFR-006, NFR-014; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CONFIRM in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-016 — Search Results

**URL:** `/search`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Visitors seeking a topic.  
**Objective:** Search published services, solutions, articles and FAQs.

**Primary action:** Open result or refine query.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-SEARCH; **3** planned sections/UI regions.

**Order:** 1. Search controls → 2. Results → 3. Recovery and continuation.

**Navigation/internal links:** Header search; mobile search; contextual. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SEARCH guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Search Results | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP PUB-016; S-MASTER requirements FR-01-14, NFR-011; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SEARCH in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-017 — Privacy Policy

**URL:** `/privacy`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** All visitors; submitters.  
**Objective:** Explain actual data practices and privacy contact process.

**Primary action:** Read policy; contact approved channel.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-POLICY; **4** planned sections/UI regions.

**Order:** 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route.

**Page-specific content and decisions:** Body order: responsible business/contact; collected information; purposes; providers/sharing; retention; applicable choices/request process; factual security description; cookies/embeds; updates. Match actual providers and data handling.

**Navigation/internal links:** Footer; inquiry forms. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-POLICY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Privacy Policy | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-017; S-MASTER requirements FR-14-08, BR-003, NFR-007; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-POLICY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-018 — Website Terms

**URL:** `/terms`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Website users.  
**Objective:** Explain public website usage terms distinct from client agreements.

**Primary action:** Read terms; request clarification.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-POLICY; **4** planned sections/UI regions.

**Order:** 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route.

**Page-specific content and decisions:** Body order: operator/scope; acceptable use; content/IP; indicative services/prices; external links; distinction from client agreements; applicable terms; contact/updates. Final wording depends on actual operating entity/policies.

**Navigation/internal links:** Footer; relevant commercial links. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-POLICY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Website Terms | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-018; S-MASTER requirements BR-006, EXT-006; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-POLICY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CAT-01 — Web & Software Development

**URL:** `/services/web-software-development`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; product teams.  
**Objective:** Choose website, software and upkeep services.

**Primary action:** Choose a service; Get a Quote.  
**Secondary action/navigation:** View a specific service; Consultation for guidance.

**Blueprint:** T-CATEGORY; **7** planned sections/UI regions.

**Order:** 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step.

**Page-specific content and decisions:** Owners and product teams; Websites and software built around your business needs. Compare business website/e-commerce/custom application and redesign/maintenance; explain content and existing-site inputs. Related solutions: SOL-01, SOL-05.

**Navigation/internal links:** Services menu; directory cards; footer. Parent: PUB-002. Children: PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CATEGORY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Web & Software Development | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP CAT-01; S-MASTER requirements FR-01-03, FR-01-04, FR-01-06, FR-01-07, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CATEGORY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CAT-02 — Mobile App Development

**URL:** `/services/mobile-app-development`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; mobile product teams.  
**Objective:** Choose app development, design and maintenance.

**Primary action:** Choose a service; Get a Quote.  
**Secondary action/navigation:** View a specific service; Consultation for guidance.

**Blueprint:** T-CATEGORY; **7** planned sections/UI regions.

**Order:** 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step.

**Page-specific content and decisions:** Founders and product owners; Mobile experiences for your customers and team. Compare business/e-commerce/custom apps and design/development; explain backend and release responsibilities. Related solutions: SOL-05.

**Navigation/internal links:** Services menu; directory cards; footer. Parent: PUB-002. Children: PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CATEGORY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Mobile App Development | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP CAT-02; S-MASTER requirements FR-01-03, FR-01-04, FR-01-06, FR-01-07, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CATEGORY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CAT-03 — AI Automation & CRM

**URL:** `/services/ai-automation-crm`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; sales and operations teams.  
**Objective:** Choose CRM and workflow improvement services.

**Primary action:** Choose a service; Get a Quote.  
**Secondary action/navigation:** View a specific service; Consultation for guidance.

**Blueprint:** T-CATEGORY; **7** planned sections/UI regions.

**Order:** 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step.

**Page-specific content and decisions:** Operations and sales leaders; Connect your tools and reduce repetitive work. Compare CRM/workflow/follow-up and chatbot/voice; explain dependencies and human handoff. Related solutions: SOL-02.

**Navigation/internal links:** Services menu; directory cards; footer. Parent: PUB-002. Children: PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CATEGORY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: AI Automation & CRM | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP CAT-03; S-MASTER requirements FR-01-03, FR-01-04, FR-01-06, FR-01-07, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CATEGORY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CAT-04 — Digital Marketing

**URL:** `/services/digital-marketing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Choose acquisition, content and conversion services.

**Primary action:** Choose a service; Get a Quote.  
**Secondary action/navigation:** View a specific service; Consultation for guidance.

**Blueprint:** T-CATEGORY; **7** planned sections/UI regions.

**Order:** 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step.

**Page-specific content and decisions:** Owners and marketers; Connect discovery, engagement, and conversion. Compare organic/paid, management/production; separate ad spend and external costs. Related solutions: SOL-03.

**Navigation/internal links:** Services menu; directory cards; footer. Parent: PUB-002. Children: PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CATEGORY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Digital Marketing | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP CAT-04; S-MASTER requirements FR-01-03, FR-01-04, FR-01-06, FR-01-07, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CATEGORY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CAT-05 — Cloud & DevOps

**URL:** `/services/cloud-devops`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Choose infrastructure, deployment and operations services.

**Primary action:** Choose a service; Get a Quote.  
**Secondary action/navigation:** View a specific service; Consultation for guidance.

**Blueprint:** T-CATEGORY; **7** planned sections/UI regions.

**Order:** 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step.

**Page-specific content and decisions:** Technical founders and engineers; Improve how your applications are deployed and operated. Compare setup/deployment/ongoing management; clarify ownership, bills and responsibilities. Related solutions: SOL-04.

**Navigation/internal links:** Services menu; directory cards; footer. Parent: PUB-002. Children: PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CATEGORY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Cloud & DevOps | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP CAT-05; S-MASTER requirements FR-01-03, FR-01-04, FR-01-06, FR-01-07, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CATEGORY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CAT-06 — Cybersecurity

**URL:** `/services/cybersecurity`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Understand authorized security engagements and capability conditions.

**Primary action:** Choose a service; Get a Quote.  
**Secondary action/navigation:** View a specific service; Consultation for guidance.

**Blueprint:** T-CATEGORY; **7** planned sections/UI regions.

**Order:** 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step.

**Page-specific content and decisions:** Technical and risk stakeholders; Understand risks and strengthen your systems. Compare assessment/remediation/ongoing services; explain authorized scope, reporting limits and qualified delivery. Related solutions: SOL-04.

**Navigation/internal links:** Services menu; directory cards; footer. Parent: PUB-002. Children: PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CATEGORY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Cybersecurity | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP CAT-06; S-MASTER requirements FR-01-03, FR-01-04, FR-01-06, FR-01-07, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CATEGORY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CAT-07 — UI/UX, Graphic Design & Branding

**URL:** `/services/design-branding`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; product and marketing teams.  
**Objective:** Choose experience, visual design and branding services.

**Primary action:** Choose a service; Get a Quote.  
**Secondary action/navigation:** View a specific service; Consultation for guidance.

**Blueprint:** T-CATEGORY; **7** planned sections/UI regions.

**Order:** 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step.

**Page-specific content and decisions:** Founders, product owners and marketers; Design clear experiences and consistent brand communication. Compare product design/branding/graphics and design/implementation; explain assets and review. Related solutions: SOL-01, SOL-05.

**Navigation/internal links:** Services menu; directory cards; footer. Parent: PUB-002. Children: PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S009 (secondary discovery; canonical parent CAT-02). Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CATEGORY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: UI/UX, Graphic Design & Branding | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP CAT-07; S-MASTER requirements FR-01-03, FR-01-04, FR-01-06, FR-01-07, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CATEGORY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CAT-08 — Video Editing & Production

**URL:** `/services/video-editing-production`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Choose editing and production services.

**Primary action:** Choose a service; Get a Quote.  
**Secondary action/navigation:** View a specific service; Consultation for guidance.

**Blueprint:** T-CATEGORY; **7** planned sections/UI regions.

**Order:** 1. Category hero → 2. Services in this category → 3. Which service fits your need? → 4. Relevant work and capability evidence → 5. How engagements work → 6. Category FAQs → 7. Next step.

**Page-specific content and decisions:** Marketers and creators; Turn your message into effective video content. Compare supplied-footage editing/production, short/long form, motion graphics/captions and recurring work. Related solutions: SOL-03.

**Navigation/internal links:** Services menu; directory cards; footer. Parent: PUB-002. Children: PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-CATEGORY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Video Editing & Production | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP CAT-08; S-MASTER requirements FR-01-03, FR-01-04, FR-01-06, FR-01-07, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-CATEGORY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S001 — Business Website Development

**URL:** `/services/business-website-development`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; product teams.  
**Objective:** Explain business websites supporting credibility and inquiries.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Page structure, content responsibilities, forms, editing and handoff. Distinguishing FAQ: **Who supplies the website content?** Existing indicative USD pricing: **$699+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S045, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-01. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Business Website Development | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S001; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-001; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S002 — E-commerce Website Development

**URL:** `/services/ecommerce-website-development`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; product teams.  
**Objective:** Explain online-store scope and commerce integration requirements.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Catalog, checkout, shipping/tax requirements, integrations and store administration. Distinguishing FAQ: **Are payment-provider charges included?** Existing indicative USD pricing: **$999+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S007, PUB-S018, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-01. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: E-commerce Website Development | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S002; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-002; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S003 — Custom Web Application

**URL:** `/services/custom-web-application`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; product teams.  
**Objective:** Capture requirements for bespoke browser-based business software.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Custom**. Specific scope: Users, workflows, roles, integrations, acceptance criteria and discovery. Distinguishing FAQ: **How will you estimate a custom application?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S044, PUB-S015, PUB-S028, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-01. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Custom Web Application | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S003; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-003; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S004 — Website Redesign

**URL:** `/services/website-redesign`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; product teams.  
**Objective:** Explain improvements to an existing website.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Existing-site review, content migration, URL continuity and cutover responsibilities. Distinguishing FAQ: **Can existing content and URLs be retained?** Existing indicative USD pricing: **$399+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S048, PUB-S043, PUB-S005, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-01. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Website Redesign | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S004; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-004; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S005 — Website Maintenance

**URL:** `/services/website-maintenance`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; product teams.  
**Objective:** Explain recurring website upkeep and support boundaries.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Covered systems, routine work, request limits and out-of-scope changes. Distinguishing FAQ: **What counts as maintenance versus new development?** Existing indicative USD pricing: **$49 / $99 / $199+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S004, PUB-S032, PUB-S035, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-01. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Website Maintenance | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S005; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S006 — Business Mobile App

**URL:** `/services/business-mobile-app`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; mobile product teams.  
**Objective:** Explain mobile applications for business and customer workflows.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Business workflows, supported devices, backend dependencies and release responsibilities. Distinguishing FAQ: **Does the app need a separate backend?** Existing indicative USD pricing: **$1,999+ / $4,999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S009, PUB-S003, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-02. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Business Mobile App | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S006; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-006; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S007 — E-commerce Mobile App

**URL:** `/services/ecommerce-mobile-app`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; mobile product teams.  
**Objective:** Explain mobile commerce experiences and integrations.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Store integration, catalog, orders, accounts and payment dependencies. Distinguishing FAQ: **Can it connect to our existing store?** Existing indicative USD pricing: **$2,499+ / $5,999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S002, PUB-S009, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-02. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: E-commerce Mobile App | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S007; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-007; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S008 — Custom Mobile App

**URL:** `/services/custom-mobile-app`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; mobile product teams.  
**Objective:** Capture bespoke mobile product requirements.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Custom**. Specific scope: Product requirements, device capabilities, integrations and release planning. Distinguishing FAQ: **What information is needed to scope the app?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S009, PUB-S015, PUB-S010, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-02. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Custom Mobile App | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S008; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-008; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S009 — Mobile App UI/UX Design

**URL:** `/services/mobile-app-ui-ux-design`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; mobile product teams.  
**Objective:** Explain mobile interface and experience design.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: User flows, screens, interaction states, prototype and developer handoff. Distinguishing FAQ: **Does the design package include app development?** Existing indicative USD pricing: **$299+ / $899+ (cross-listed under Design)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S006, PUB-S008, PUB-S044, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling. Cross-listed in CAT-02 and CAT-07 using this one canonical page; do not create a duplicate UI/UX service route.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-02. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Mobile App UI/UX Design | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S009; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-009; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S010 — Mobile App Maintenance

**URL:** `/services/mobile-app-maintenance`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; mobile product teams.  
**Objective:** Explain ongoing app upkeep and support.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Supported app versions, defects, compatibility work and release assistance. Distinguishing FAQ: **Are new features included?** Existing indicative USD pricing: **$99 / $249 / $499+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S006, PUB-S008, PUB-S032, SOL-05. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-02. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Mobile App Maintenance | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S010; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-010; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S011 — Workflow Automation

**URL:** `/services/workflow-automation`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; sales and operations teams.  
**Objective:** Explain connected workflows reducing repetitive operations.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Triggers, actions, connected systems, exceptions and handoff. Distinguishing FAQ: **What happens if an automated step fails?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-03. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Workflow Automation | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S011; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-011; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S012 — CRM Setup & Customization

**URL:** `/services/crm-setup-customization`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; sales and operations teams.  
**Objective:** Explain CRM configuration around sales and customer processes.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Pipelines, fields, migration boundaries, access and user orientation. Distinguishing FAQ: **Can existing customer records be imported?** Existing indicative USD pricing: **$399+ / $1,199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-03. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: CRM Setup & Customization | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S012; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-012; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S013 — Lead Follow-up Automation

**URL:** `/services/lead-follow-up-automation`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; sales and operations teams.  
**Objective:** Explain systematic inquiry and opportunity follow-up.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Follow-up triggers, channels, message approvals, stop conditions and staff handoff. Distinguishing FAQ: **When does automated follow-up stop?** Existing indicative USD pricing: **$349+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S023, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-03. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Lead Follow-up Automation | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S013; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-013; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S014 — AI Chatbot

**URL:** `/services/ai-chatbot`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; sales and operations teams.  
**Objective:** Explain scoped conversational assistance engagements.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Approved knowledge, supported tasks, uncertainty, escalation and usage costs. Distinguishing FAQ: **What happens when the chatbot cannot answer?** Existing indicative USD pricing: **$499+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S015, PUB-S011, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-03. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: AI Chatbot | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S014; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-014; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S015 — AI Integrations

**URL:** `/services/ai-integrations`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; sales and operations teams.  
**Objective:** Explain adding suitable AI capabilities to existing systems.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Custom**. Specific scope: Intended AI task, connected systems, data boundaries, evaluation and usage costs. Distinguishing FAQ: **What data will the AI provider receive?** Existing indicative USD pricing: **$799+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S014, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-03. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: AI Integrations | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S015; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-015; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S016 — AI Voice Agent

**URL:** `/services/ai-voice-agent`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; sales and operations teams.  
**Objective:** Explain bounded voice-assistance use cases and prerequisites.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Custom**. Specific scope: Call purposes, supported interactions, disclosure, escalation and telephony costs. Distinguishing FAQ: **Can calls transfer to a person?** Existing indicative USD pricing: **$799+ / $2,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S012, PUB-S013, PUB-S017, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-03. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: AI Voice Agent | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S016; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-016; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S017 — Automation Maintenance

**URL:** `/services/automation-maintenance`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; sales and operations teams.  
**Objective:** Explain maintenance of deployed workflows and integrations.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Monitored workflows, failure investigation, dependency changes and update limits. Distinguishing FAQ: **Are new automations included?** Existing indicative USD pricing: **$99 / $249 / $599+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S011, PUB-S012, PUB-S015, SOL-02. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-03. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Automation Maintenance | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S017; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-017; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S018 — SEO Services

**URL:** `/services/seo-services`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain search visibility services and scoped initial SEO offerings.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Technical/content priorities, approved implementation scope and reporting. Distinguishing FAQ: **How will progress be measured?** Existing indicative USD pricing: **$299 / $699 per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S024, PUB-S025, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: SEO Services | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S018; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-018; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S019 — Google Ads Management

**URL:** `/services/google-ads-management`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain campaign management separately from setup and ad spend.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Account access, campaign scope, tracking, management fee, setup and separate ad spend. Distinguishing FAQ: **How much of the payment goes to advertising?** Existing indicative USD pricing: **$249 / $599 per month (setup and ad spend separate)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S047, PUB-S025, PUB-S052, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Google Ads Management | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S019; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-019; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S020 — Social Media Management

**URL:** `/services/social-media-management`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain recurring social content and channel management.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Platforms, content responsibilities, approval and community-management boundaries. Distinguishing FAQ: **Who approves posts before publication?** Existing indicative USD pricing: **$299 / $699 per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S046, PUB-S050, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Social Media Management | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S020; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-020; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S021 — Meta Ads Management

**URL:** `/services/meta-ads-management`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain Meta advertising management separately from ad spend.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Campaign scope, audiences, creative responsibilities, tracking and separate ad spend. Distinguishing FAQ: **Is creative production included?** Existing indicative USD pricing: **$249 / $599 per month (ad spend separate)**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S046, PUB-S047, PUB-S052, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Meta Ads Management | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S021; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-021; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S022 — Content Marketing

**URL:** `/services/content-marketing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain content supporting education, discovery and leads.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Audience, formats, research, writing, review and distribution boundaries. Distinguishing FAQ: **Which content formats are covered?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S018, PUB-S023, PUB-S020, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Content Marketing | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S022; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-022; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S023 — Email Marketing

**URL:** `/services/email-marketing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain appropriate email campaign and communication services.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Campaign or workflow scope, subscriber data, templates, testing and platform costs. Distinguishing FAQ: **Do you manage campaigns, automations, or both?** Existing indicative USD pricing: **$249+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S013, PUB-S022, PUB-S012, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Email Marketing | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S023; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-023; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S024 — Local SEO / Google Business Profile

**URL:** `/services/local-seo-google-business-profile`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain local search presence and business-profile improvements.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Business/location details, profile work, local content and owner access. Distinguishing FAQ: **Can you help with an existing business profile?** Existing indicative USD pricing: **$199+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S001, PUB-S018, PUB-S022, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Local SEO / Google Business Profile | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S024; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-024; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S025 — Conversion Rate Optimization & Analytics

**URL:** `/services/conversion-rate-optimization-analytics`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain conversion measurement and journey improvement.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Assessment**. Specific scope: Measurement review, journey friction, hypotheses, recommendations and testing dependencies. Distinguishing FAQ: **Is there enough traffic to run meaningful tests?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S048, PUB-S047, PUB-S019, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Conversion Rate Optimization & Analytics | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S025; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-025; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S026 — Digital Marketing Consulting

**URL:** `/services/digital-marketing-consulting`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing teams.  
**Objective:** Explain marketing assessment and advisory engagements.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Assessment**. Specific scope: Goals, channel review, priorities, recommendations and engagement format. Distinguishing FAQ: **Does consulting include implementation?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S018, PUB-S019, PUB-S025, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-04. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Digital Marketing Consulting | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S026; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-026; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S027 — Cloud Infrastructure Setup

**URL:** `/services/cloud-infrastructure-setup`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Explain infrastructure provisioning for approved workloads.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Environments, access, infrastructure scope, documentation and provider charges. Distinguishing FAQ: **Who owns the cloud account?** Existing indicative USD pricing: **$399+ / $1,299+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S031, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-05. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Cloud Infrastructure Setup | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S027; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-027; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S028 — Application Deployment

**URL:** `/services/application-deployment`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Explain deploying applications into suitable operating environments.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Application readiness, target environment, configuration, deployment checks and handoff. Distinguishing FAQ: **What access and application files are required?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S029, PUB-S030, PUB-S032, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-05. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Application Deployment | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S028; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-028; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S029 — CI/CD Pipeline Setup

**URL:** `/services/ci-cd-pipeline-setup`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Explain controlled build, test and release automation.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Build/test/release stages, permissions, approvals and rollback responsibilities. Distinguishing FAQ: **Which repositories and environments are covered?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S031, PUB-S032, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-05. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: CI/CD Pipeline Setup | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S029; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-029; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S030 — Docker Containerization

**URL:** `/services/docker-containerization`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Explain packaging applications into maintainable containers.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Application packaging, configuration, local operation and documentation. Distinguishing FAQ: **Does containerization also include cloud deployment?** Existing indicative USD pricing: **$249+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S029, PUB-S031, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-05. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Docker Containerization | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S030; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-030; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S031 — Infrastructure as Code

**URL:** `/services/infrastructure-as-code`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Explain repeatable infrastructure configuration and provisioning.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Managed resources, ownership, state handling and change workflow. Distinguishing FAQ: **Can existing infrastructure be brought under management?** Existing indicative USD pricing: **$399+ / $1,199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S029, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-05. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Infrastructure as Code | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S031; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-031; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S032 — Monitoring & Observability

**URL:** `/services/monitoring-observability`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Explain visibility into application and infrastructure behavior.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Logs, metrics, alerts, dashboards and operational ownership. Distinguishing FAQ: **Who responds when an alert fires?** Existing indicative USD pricing: **$249+ / $799+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S028, PUB-S033, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-05. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Monitoring & Observability | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S032; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-032; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S033 — Cloud Security & Backup

**URL:** `/services/cloud-security-backup`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Explain scoped cloud protection and recovery arrangements.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Access, configuration, backup scope, retention decisions and recovery verification. Distinguishing FAQ: **Is restoration testing included in the agreed scope?** Existing indicative USD pricing: **$349+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S032, PUB-S038, PUB-S034, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-05. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Cloud Security & Backup | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S033; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-033; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S034 — Managed Cloud Services

**URL:** `/services/managed-cloud-services`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; engineering leaders.  
**Objective:** Explain recurring cloud operations and explicit support coverage.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Managed assets, routine operations, reporting, response arrangements and exclusions. Distinguishing FAQ: **Are cloud-provider bills separate?** Existing indicative USD pricing: **$99 / $299 / $799+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S032, PUB-S037, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-05. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Managed Cloud Services | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S034; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-034; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S035 — Web Application Security Assessment

**URL:** `/services/web-application-security-assessment`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Explain authorized assessment of web application risks.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Assessment**. Specific scope: Authorized application boundaries, review approach, findings and remediation options. Distinguishing FAQ: **Does the engagement include fixing findings?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S036, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-06. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Web Application Security Assessment | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S035; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-035; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S036 — Vulnerability Assessment / Penetration Testing

**URL:** `/services/vulnerability-assessment-penetration-testing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Explain specialist-led testing scope and authorization requirements.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Assessment + custom**. Specific scope: Written authorization, targets, testing boundaries, reporting and retest options. Distinguishing FAQ: **What permission is required before testing?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-06. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Vulnerability Assessment / Penetration Testing | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S036; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-036; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S037 — Cloud Security Assessment

**URL:** `/services/cloud-security-assessment`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Explain assessment of cloud configurations and exposure.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Assessment**. Specific scope: Accounts/services reviewed, access arrangements, findings and priorities. Distinguishing FAQ: **Which cloud environments are assessed?** Existing indicative USD pricing: **$399+ / $1,299+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S027, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-06. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Cloud Security Assessment | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S037; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-037; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S038 — Security Hardening

**URL:** `/services/security-hardening`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Explain appropriate configuration changes reducing exposure.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Approved configuration changes, compatibility checks, rollback and handoff. Distinguishing FAQ: **Could changes affect existing applications?** Existing indicative USD pricing: **$249+ / $999+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S033, PUB-S035, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-06. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Security Hardening | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S038; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-038; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S039 — Identity & Access / Email Security

**URL:** `/services/identity-access-email-security`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Explain identity, access and business-email protection.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Identity/email environment, account controls, policies and rollout boundaries. Distinguishing FAQ: **Which systems and user accounts are included?** Existing indicative USD pricing: **$199+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S040, PUB-S038, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-06. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Identity & Access / Email Security | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S039; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-039; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S040 — Security Awareness Training

**URL:** `/services/security-awareness-training`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Explain practical security education for business teams.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Project**. Specific scope: Audience, topics, delivery format, materials and assessment options. Distinguishing FAQ: **Can training reflect our team’s work?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S039, PUB-S041, PUB-S042, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-06. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Security Awareness Training | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S040; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-040; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S041 — Compliance Readiness

**URL:** `/services/compliance-readiness`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Explain preparation and gap assessment without implying certification.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Assessment + custom**. Specific scope: Selected framework, readiness gaps, evidence preparation and responsibility boundaries. Distinguishing FAQ: **Is this certification or readiness assistance?** Existing indicative USD pricing: **Custom quote**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S037, PUB-S040, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-06. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Compliance Readiness | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S041; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-041; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S042 — Managed Security Services

**URL:** `/services/managed-security-services`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical and risk stakeholders.  
**Objective:** Explain recurring security services within verified capacity.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Covered systems, monitoring responsibilities, escalation and service-hour boundaries. Distinguishing FAQ: **What response coverage is actually provided?** Existing indicative USD pricing: **$149 / $399 / $999+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S035, PUB-S037, PUB-S038, SOL-04. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-06. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Managed Security Services | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S042; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-042; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S043 — Website UI/UX Design

**URL:** `/services/website-ui-ux-design`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; product and marketing teams.  
**Objective:** Explain website experience and interface design.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Page types, responsive states, prototype and handoff. Distinguishing FAQ: **Does this include a working website?** Existing indicative USD pricing: **$299+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S001, PUB-S004, PUB-S048, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-07. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Website UI/UX Design | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S043; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-043; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S044 — SaaS Dashboard UI/UX

**URL:** `/services/saas-dashboard-ui-ux`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; product and marketing teams.  
**Objective:** Explain usable software dashboards and workflows.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Roles, workflows, tables, forms and loading/empty/error states. Distinguishing FAQ: **How are complex user roles represented?** Existing indicative USD pricing: **$499+ / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S003, PUB-S009, PUB-S048, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-07. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: SaaS Dashboard UI/UX | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S044; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-044; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S045 — Logo & Brand Identity

**URL:** `/services/logo-brand-identity`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; product and marketing teams.  
**Objective:** Explain identity design and approved deliverables.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Brief, identity assets, review process, file formats and usage guidance. Distinguishing FAQ: **Which final files will we receive?** Existing indicative USD pricing: **$149+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S046, PUB-S022, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-07. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Logo & Brand Identity | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S045; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-045; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S046 — Graphic Design

**URL:** `/services/graphic-design`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; product and marketing teams.  
**Objective:** Explain visual communication and marketing-design work.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Asset types, formats, source material, reviews and delivery. Distinguishing FAQ: **Are editable source files included?** Existing indicative USD pricing: **$49+ / $249+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S020, PUB-S021, PUB-S045, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-07. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Graphic Design | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S046; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-046; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S047 — Landing Page Design

**URL:** `/services/landing-page-design`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; product and marketing teams.  
**Objective:** Explain focused campaign and conversion-page design.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Campaign goal, content hierarchy, conversion flow and responsive design. Distinguishing FAQ: **Who supplies the copy and implements the page?** Existing indicative USD pricing: **$199+ / $599+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S019, PUB-S025, PUB-S022, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-07. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Landing Page Design | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S047; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-047; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S048 — UX Audit

**URL:** `/services/ux-audit`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; product and marketing teams.  
**Objective:** Explain usability assessment and improvement priorities.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Assessment**. Specific scope: Journeys reviewed, evidence, findings, severity and recommendations. Distinguishing FAQ: **Does the audit include redesign work?** Existing indicative USD pricing: **$199+ / $799+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S044, PUB-S025, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-07. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: UX Audit | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S048; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-048; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S049 — Monthly Design Support

**URL:** `/services/monthly-design-support`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Founders; product and marketing teams.  
**Objective:** Explain recurring design capacity and scope.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Request workflow, agreed capacity, priorities, reviews and exclusions. Distinguishing FAQ: **How are simultaneous requests handled?** Existing indicative USD pricing: **$149 / $399 / $899+ per month**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S043, PUB-S046, PUB-S047, SOL-01. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-07. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Monthly Design Support | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S049; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-049; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S050 — Short-form Video Editing

**URL:** `/services/short-form-video-editing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Explain editing for short social and promotional formats.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Supplied footage, target format, pacing, captions and exports. Distinguishing FAQ: **What footage should we provide?** Existing indicative USD pricing: **$39+ / $199+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S020, PUB-S021, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-08. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Short-form Video Editing | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S050; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-050; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S051 — YouTube Video Editing

**URL:** `/services/youtube-video-editing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Explain longer-form channel and video-content editing.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Source footage, style, audio, graphics and agreed output length. Distinguishing FAQ: **Are thumbnails or publishing included?** Existing indicative USD pricing: **$99+ / $349+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S055, PUB-S054, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-08. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: YouTube Video Editing | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S051; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-051; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S052 — Promotional / Ad Video

**URL:** `/services/promotional-ad-video`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Explain promotional and advertising-video engagements.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Campaign brief, message, supplied/produced assets, variants and usage rights. Distinguishing FAQ: **Does the quote include filming or only editing?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S021, PUB-S047, PUB-S054, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-08. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Promotional / Ad Video | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S052; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-052; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S053 — Corporate Video Production

**URL:** `/services/corporate-video-production`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Explain business-video production and delivery conditions.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Pre-production, filming arrangements, location responsibilities, editing and expenses. Distinguishing FAQ: **Where can production take place?** Existing indicative USD pricing: **$249+ / $899+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S052, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-08. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Corporate Video Production | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S053; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-053; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S054 — Motion Graphics

**URL:** `/services/motion-graphics`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Explain animated visual communication.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Script/storyboard, visual assets, animation scope, reviews and exports. Distinguishing FAQ: **Do we need to supply a storyboard?** Existing indicative USD pricing: **$199+ / $699+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S052, PUB-S051, PUB-S046, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-08. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Motion Graphics | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S054; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-054; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S055 — Podcast Editing

**URL:** `/services/podcast-editing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Explain podcast post-production deliverables.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Audio/video source, cleanup, episode structure and output formats. Distinguishing FAQ: **Are clips and distribution included?** Existing indicative USD pricing: **$149+ / $499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S022, PUB-S050, PUB-S056, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-08. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Podcast Editing | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S055; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-055; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S056 — Captions / Subtitles

**URL:** `/services/captions-subtitles`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Explain captioning and subtitling services.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Design/media**. Specific scope: Source language, transcription/translation boundaries, timing, review and format. Distinguishing FAQ: **Is translation included?** Existing indicative USD pricing: **$29+ / $149+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S050, PUB-S051, PUB-S055, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-08. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Captions / Subtitles | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S056; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-056; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### PUB-S057 — Monthly Video Editing

**URL:** `/services/monthly-video-editing`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses; marketers; creators.  
**Objective:** Explain recurring editing after billing units and scope are confirmed.

**Primary action:** Get a Quote with service/package context; availability-appropriate inquiry if coming soon.  
**Secondary action/navigation:** Consultation; parent category and relevant solution.

**Blueprint:** T-SERVICE; **9** planned sections/UI regions.

**Order:** 1. Hero: [Service name] for [business need] → 2. Fit and outcomes: When this service makes sense → 3. Scope: What the engagement can cover → 4. Evidence: See relevant work → 5. Commercial options: Packages and starting prices → 6. Delivery: How the work progresses → 7. Related services and solutions → 8. Service FAQs → 9. Final CTA: Discuss your [service] requirements.

**Page-specific content and decisions:** Variation: **Ongoing**. Specific scope: Workload, source-footage limits, output formats, priorities and revisions. Distinguishing FAQ: **How many deliverables does the agreed plan cover?** Existing indicative USD pricing: **$199 / $599 / $1,499+**. These are content topics, not invented package inclusions. Use the category audience, narrowed to this named need; related-service links should address actual dependencies and complementary work. Suggested contextual links: PUB-S050, PUB-S051, PUB-S055, SOL-03. Select only genuinely relevant links from this set; do not imply compulsory bundling.

**Navigation/internal links:** Category cards; relevant solutions/content; website search; selected menu features. Parent: CAT-08. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SERVICE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Monthly Video Editing | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PUB-S057; S-MASTER requirements FR-01-04, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-01, FR-04-02, FR-04-03, BR-002, BR-005, NFR-001, NFR-011, SVC-057; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SERVICE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### SOL-01 — Digital Presence

**URL:** `/solutions/digital-presence`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** New businesses; SMB owners.  
**Objective:** Coordinate a business digital-presence engagement.

**Primary action:** Get a Quote with solution/package context.  
**Secondary action/navigation:** Consultation; related individual service or neighboring solution.

**Blueprint:** T-SOLUTION; **9** planned sections/UI regions.

**Order:** 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements.

**Page-specific content and decisions:** Build a clear, professional digital presence. Audience: new businesses/SMBs. Address missing/outdated websites, unclear messaging, inconsistent presentation and inquiry journeys. Explain potential website design/development, relevant brand assets, content responsibilities and inquiry paths. Process: goals/assets → scope/content → design/build → review → launch/handoff. Evidence: actual website contribution/usability. FAQs: existing branding; who supplies content; hosting and maintenance. Link PUB-S001, PUB-S004, PUB-S043, PUB-S045, PUB-S005.

**Navigation/internal links:** Solutions dropdown; directory cards; contextual links; footer. Parent: PUB-003. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SOLUTION guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Digital Presence | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP SOL-01; S-MASTER requirements FR-01-05, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-02, BR-002, SOL-001; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SOLUTION in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### SOL-02 — Business Automation

**URL:** `/solutions/business-automation`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; operations and sales leaders.  
**Objective:** Address manual workflows and disconnected customer operations.

**Primary action:** Get a Quote with solution/package context.  
**Secondary action/navigation:** Consultation; related individual service or neighboring solution.

**Blueprint:** T-SOLUTION; **9** planned sections/UI regions.

**Order:** 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements.

**Page-specific content and decisions:** Connect your workflows and reduce repetitive administration. Audience: owners/operations/sales. Address repeated entry, disconnected tools and missed follow-ups. Explain workflow mapping, CRM configuration, integrations, automated steps, exceptions and staff handoff. Process: map → rules/responsibilities → configure/connect → normal/failure tests → orientation/handoff. Evidence: actual workflow with human intervention. FAQs: keep current CRM; failures; subscriptions. Link PUB-S011, PUB-S012, PUB-S013, PUB-S015, PUB-S017. AI is not required for every automation.

**Navigation/internal links:** Solutions dropdown; directory cards; contextual links; footer. Parent: PUB-003. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SOLUTION guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Business Automation | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP SOL-02; S-MASTER requirements FR-01-05, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-02, BR-002, SOL-002; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SOLUTION in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### SOL-03 — Business Growth

**URL:** `/solutions/business-growth`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Owners; marketing leaders.  
**Objective:** Explain coordinated growth services with approved recurring scope.

**Primary action:** Get a Quote with solution/package context.  
**Secondary action/navigation:** Consultation; related individual service or neighboring solution.

**Blueprint:** T-SOLUTION; **9** planned sections/UI regions.

**Order:** 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements.

**Page-specific content and decisions:** Build a coordinated approach to digital growth. Audience: owners/marketing leaders. Address fragmented activity, inconsistent content and weak measurement. Explain selected channels, approvals, recurring workload, reporting and campaign responsibilities. Process: objectives/baseline → channel priorities → prepare → operate/measure → review. Evidence: permitted campaign with documented context. FAQs: included channels; separate ad spend; progress review. Link PUB-S018–PUB-S022 and PUB-S025. Do not promise rankings, lead quantities or revenue.

**Navigation/internal links:** Solutions dropdown; directory cards; contextual links; footer. Parent: PUB-003. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SOLUTION guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Business Growth | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP SOL-03; S-MASTER requirements FR-01-05, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-02, BR-002, SOL-003; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SOLUTION in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### SOL-04 — Cloud & Technology

**URL:** `/solutions/cloud-technology`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Technical founders; technology leaders.  
**Objective:** Coordinate infrastructure and technology services.

**Primary action:** Get a Quote with solution/package context.  
**Secondary action/navigation:** Consultation; related individual service or neighboring solution.

**Blueprint:** T-SOLUTION; **9** planned sections/UI regions.

**Order:** 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements.

**Page-specific content and decisions:** Create a clearer foundation for deployment and operations. Audience: technical founders/engineers. Address inconsistent deployments, unclear environments and limited visibility. Explain relevant setup, pipelines, monitoring, backup and documentation with client boundaries. Process: environment review → target scope → changes → verify deployment/recovery → handoff/separate management. Evidence: sanitized genuine implementation artifacts. FAQs: account ownership; provider charges; monitoring/response. Link PUB-S027–PUB-S029, PUB-S032–PUB-S034.

**Navigation/internal links:** Solutions dropdown; directory cards; contextual links; footer. Parent: PUB-003. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SOLUTION guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Cloud & Technology | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP SOL-04; S-MASTER requirements FR-01-05, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-02, BR-002, SOL-004; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SOLUTION in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### SOL-05 — Complete Digital Business

**URL:** `/solutions/complete-digital-business`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Businesses pursuing wider transformation.  
**Objective:** Introduce discovery for a custom combination of capabilities.

**Primary action:** Get a Quote with solution/package context.  
**Secondary action/navigation:** Consultation; related individual service or neighboring solution.

**Blueprint:** T-SOLUTION; **9** planned sections/UI regions.

**Order:** 1. Hero: [Solution] for [business need] → 2. Fit and outcomes: Is this the right solution for you? → 3. Scope: How the services work together → 4. Packages: Compare your engagement options → 5. Delivery: How we approach the work → 6. Evidence: Explore relevant work → 7. Related options: Other ways we can help → 8. Solution FAQs → 9. Final CTA: Discuss your [solution] requirements.

**Page-specific content and decisions:** Plan connected digital improvements around your business. Audience: organizations with connected needs. Explain priorities, selected workstreams, dependencies, phased delivery, responsibilities and acceptance. Process: priorities → workstreams → scope/milestones → incremental delivery/review → handoff/optional support. All three tiers remain Custom quote; define differences before publication. FAQs: staged delivery; existing tools; whether all services are included. Complete means agreed coordinated scope, not automatic inclusion of all 57 services. Link SOL-01–SOL-04 and relevant constituent services. Do not combine separate examples into a fictional integrated client engagement.

**Navigation/internal links:** Solutions dropdown; directory cards; contextual links; footer. Parent: PUB-003. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-SOLUTION guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Complete Digital Business | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP SOL-05; S-MASTER requirements FR-01-05, FR-01-06, FR-01-07, FR-02-01, FR-02-02, FR-02-03, FR-04-02, BR-002, SOL-005; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-SOLUTION in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### TRU-01 — Cookie Information

**URL:** `/cookies`  
**Phase / source status:** P1 conditional / C  
**Access:** Public

**Audience:** Visitors.  
**Objective:** Explain actual tracking and user choices; combine with Privacy if sufficient.

**Primary action:** Review or manage supported choices.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-POLICY; **4** planned sections/UI regions.

**Order:** 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route.

**Page-specific content and decisions:** Conditional body: actual technologies/providers; purposes/categories; durations; supported controls; changing choices; privacy/contact links. May be incorporated into Privacy by approved choice.

**Navigation/internal links:** Footer; consent interface. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-POLICY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Cookie Information | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP TRU-01; S-MASTER requirements FR-14-08, NFR-007, EXT-006; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-POLICY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### TRU-02 — Accessibility Statement

**URL:** `/accessibility`  
**Phase / source status:** P1 conditional / C  
**Access:** Public

**Audience:** Visitors with accessibility needs.  
**Objective:** Explain actual accessibility work and barrier-reporting channel.

**Primary action:** Report an accessibility issue.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-POLICY; **4** planned sections/UI regions.

**Order:** 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route.

**Page-specific content and decisions:** Conditional body: accessibility approach; actual evaluated scope; known limitations; alternatives; barrier reporting; review date. No unsupported certification claim.

**Navigation/internal links:** Footer. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-POLICY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Accessibility Statement | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP TRU-02; S-MASTER requirements NFR-002, EXT-006; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-POLICY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### TRU-03 — Responsible Disclosure

**URL:** `/security`  
**Phase / source status:** P1 conditional / C  
**Access:** Public

**Audience:** Security researchers.  
**Objective:** Explain an approved vulnerability-reporting process for ARADUN systems.

**Primary action:** Submit a report through the approved channel.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-POLICY; **4** planned sections/UI regions.

**Order:** 1. Title and dates → 2. Contents navigation → 3. Policy body → 4. Questions/reporting route.

**Page-specific content and decisions:** Conditional body: covered systems; actual reporting channel; useful report details; approved research boundaries; handling; disclosure coordination. Do not invent authorization, rewards, deadlines or legal protections.

**Navigation/internal links:** Footer. Parent: PUB-001. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-POLICY guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Responsible Disclosure | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP TRU-03; S-MASTER requirements EXT-006, BR-003; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-POLICY in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### SYS-01 — Page Not Found

**URL:** `Requested nonexistent URL; no dedicated /404 route`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Visitors.  
**Objective:** Help recover from invalid or removed links.

**Primary action:** Search; choose a service; return Home.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-STATE; **3** planned sections/UI regions.

**Order:** 1. Clear state heading → 2. Accurate explanation → 3. Recovery choices.

**Page-specific content and decisions:** Suggested heading: We couldn’t find that page. Render at the requested nonexistent URL; preserve true 404 behavior.

**Navigation/internal links:** Invalid URL response. Parent: ROOT. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-STATE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Page Not Found | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** 404 response; not indexable. **Traceability:** S-SITEMAP SYS-01; S-MASTER requirements NFR-014; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-STATE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### SYS-02 — Recoverable Error

**URL:** `Affected route; no dedicated /error route`  
**Phase / source status:** P1 / A  
**Access:** Public

**Audience:** Visitors.  
**Objective:** Enable safe recovery without exposing internals.

**Primary action:** Retry or contact ARADUN.  
**Secondary action/navigation:** Relevant policy/help or safe navigation recovery; avoid competing sales prompts.

**Blueprint:** T-STATE; **3** planned sections/UI regions.

**Order:** 1. Clear state heading → 2. Accurate explanation → 3. Recovery choices.

**Page-specific content and decisions:** Explain what could not load/complete, whether action state is known, and safe retry. Render at affected route; no new /error URL.

**Navigation/internal links:** Failure state. Parent: ROOT. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive/search:** Apply G-TRUST and G-A11Y plus the specific T-STATE guidance. Suggested H1 uses the approved page name or its template’s clear task/value wording; suggested search title: Recoverable Error | ARADUN, specialized by genuine content record for detail templates.

**Indexing:** Not a separately indexable page; appropriate error response. **Traceability:** S-SITEMAP SYS-02; S-MASTER requirements NFR-006, NFR-008, NFR-014; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-STATE in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### STA-001 — Staff Sign In

**URL:** `/staff/login`  
**Phase / source status:** P1 / B  
**Access:** Authentication gateway; no business data

**Audience:** Provisioned staff.  
**Objective:** Authenticate provisioned staff; no public staff signup.

**Primary action:** Sign in.  
**Secondary action/navigation:** Supported recovery/help or return to Sign In, according to this authentication task.

**Blueprint:** T-AUTH; **3** planned sections/UI regions.

**Order:** 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion.

**Page-specific content and decisions:** Sign In, progress/generic errors, recovery link and session-expiry guidance. Provisioned accounts only; no public staff signup.

**Navigation/internal links:** Direct/bookmarked URL; protected-route redirect. Parent: STA-ROOT. Children: STA-002, STA-003, STA-004. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP STA-001; S-MASTER requirements FR-09-01, FR-14-04; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Sign In submits provisioned staff credentials/provider identity. Show pending, generic invalid credentials, provider failure and expired-session recovery. Success returns only to a safe permitted local destination; recovery link never offers public staff registration.

**Desktop / tablet / mobile:** Apply the three explicit T-AUTH compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### STA-002 — Staff Access Recovery

**URL:** `/staff/recover`  
**Phase / source status:** P1 provider/policy conditional / C  
**Access:** Authentication gateway; no business data

**Audience:** Provisioned staff.  
**Objective:** Start provider-supported account recovery.

**Primary action:** Request recovery.  
**Secondary action/navigation:** Supported recovery/help or return to Sign In, according to this authentication task.

**Blueprint:** T-AUTH; **3** planned sections/UI regions.

**Order:** 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion.

**Page-specific content and decisions:** Request Recovery; neutral account-existence response, throttling and retry.

**Navigation/internal links:** Sign-in contextual link. Parent: STA-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP STA-002; S-MASTER requirements FR-14-04; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Recovery accepts the supported identifier, returns the same neutral acknowledgement for existing/nonexisting identities, and exposes retry/throttle guidance without account enumeration. Success means instructions requested, not proof of mail delivery.

**Desktop / tablet / mobile:** Apply the three explicit T-AUTH compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### STA-003 — Staff Recovery Completion

**URL:** `/staff/reset`  
**Phase / source status:** P1 provider/policy conditional / C  
**Access:** Authentication gateway; no business data

**Audience:** Verified recovery recipient.  
**Objective:** Complete a provider-validated recovery flow.

**Primary action:** Restore access.  
**Secondary action/navigation:** Supported recovery/help or return to Sign In, according to this authentication task.

**Blueprint:** T-AUTH; **3** planned sections/UI regions.

**Order:** 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion.

**Page-specific content and decisions:** Complete provider-supported recovery; handle expired/invalid link and restart; completion returns to Sign In.

**Navigation/internal links:** Valid recovery link only. Parent: STA-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP STA-003; S-MASTER requirements FR-14-04; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Reset form starts only with supported valid reset context. Invalid/expired token state offers restart; confirmation/strength rules follow provider. Save success returns to sign-in; do not echo tokens or log them in analytics.

**Desktop / tablet / mobile:** Apply the three explicit T-AUTH compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### STA-004 — Staff Verification / MFA

**URL:** `/staff/verify`  
**Phase / source status:** P1 provider/policy conditional / C  
**Access:** Authentication gateway; no business data

**Audience:** Partially authenticated staff.  
**Objective:** Complete required provider-supported verification.

**Primary action:** Verify identity.  
**Secondary action/navigation:** Supported recovery/help or return to Sign In, according to this authentication task.

**Blueprint:** T-AUTH; **3** planned sections/UI regions.

**Order:** 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion.

**Page-specific content and decisions:** Verify supported challenge; invalid/expired/limited retry and approved alternative/recovery. Provider and mandatory MFA remain open.

**Navigation/internal links:** Authentication flow only. Parent: STA-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP STA-004; S-MASTER requirements FR-14-04, FR-14-10; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Verification shows the supported challenge and available recovery method. Label one-time-code input; allow paste/autofill; expose invalid, expired, limited-retry and recovery states. Production MFA choice remains D-009.

**Desktop / tablet / mobile:** Apply the three explicit T-AUTH compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-001 — Dashboard Overview

**URL:** `/dashboard`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized staff.  
**Objective:** Summarize authorized lead counts, fixed pipeline and due/overdue manual tasks.

**Primary action:** Open priority work.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-DASH; **6** planned sections/UI regions.

**Order:** 1. Heading and scope → 2. Operational summary → 3. Inquiries needing review → 4. Pipeline summary → 5. Follow-up priorities → 6. Recent activity and shortcuts.

**Page-specific content and decisions:** Authorized staff only; open inquiry/opportunity/task, complete permitted tasks. New dashboard explains how data arrives; failure of one panel should permit retry without hiding all usable panels.

**Navigation/internal links:** Sidebar: Overview. Parent: STA-ROOT. Children: ADM-002, ADM-004, ADM-006, ADM-008, ADM-010, ADM-012, ADM-023, ADM-025, ADM-026, ADM-027, EXP-001, EXP-003, EXP-005, EXP-007, EXP-009, EXP-011, EXP-012, EXP-014, EXP-022, EXP-024, EXP-025, EXP-026, EXP-027, EXP-029, EXP-031, ADV-003, ADV-004, ADV-006, ADV-007, ADV-009. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-001; S-MASTER requirements FR-09-02, FR-10-04; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Operational summary shows authorized inquiries/status and due/overdue counts; inquiry rows reference/type/date/owner; pipeline includes stage and labeled estimated value; task rows title/owner/due/record; activity includes actor/time/action. Clicking a summary uses permitted existing list filters, not new reporting pages.

**Desktop / tablet / mobile:** Apply the three explicit T-DASH compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-002 — Leads & Inquiries

**URL:** `/dashboard/leads`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Sales; admin.  
**Objective:** Find and process common quote, contact and consultation inquiries.

**Primary action:** Open an inquiry.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Columns: reference, person, inquiry type, requested service/solution, owner, received date, relevant status. Filters: type, owner, date, status. Open Inquiry.

**Navigation/internal links:** Sidebar: Leads & Inquiries. Parent: ADM-001. Children: ADM-003. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-002; S-MASTER requirements FR-02-06, FR-09-03, FR-09-05; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Table columns: reference, person, inquiry type, selected offer, owner, created date, status. Filters: type, owner, date, status. Primary action opens the selected inquiry; no invented manual lead-create page. Empty collection explains capture sources; no-match offers Reset.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-003 — Lead Detail

**URL:** `/dashboard/leads/[leadId]`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized sales; admin.  
**Objective:** Review scope, snapshot, source, owner and internal history.

**Primary action:** Qualify; assign; update status; add note or task.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-DETAIL; **5** planned sections/UI regions.

**Order:** 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback.

**Page-specific content and decisions:** Original message, contact, offer/package snapshot, budget/timeline if supplied, source, owner, notes, activity, linked opportunity/tasks. Assign; note; create follow-up; qualify/link opportunity under D-011.

**Navigation/internal links:** Lead rows; notifications. Parent: ADM-002. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-003; S-MASTER requirements FR-02-07, FR-02-10, FR-02-11, FR-02-12, FR-02-13, FR-09-04, FR-09-06, FR-09-08; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Core panel preserves submitted contact, original message, selected offer/price snapshot, optional budget/timeline and source/UTM context. Staff controls assign owner, classify/qualify, add note and follow-up task; linked opportunity/contact and activity follow. Conversion/duplicate decisions are reviewed under D-011.

**Desktop / tablet / mobile:** Apply the three explicit T-DETAIL compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-004 — Contacts

**URL:** `/dashboard/contacts`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Sales; admin.  
**Objective:** Find shared contact identities linked to inquiries and opportunities.

**Primary action:** Find or open a contact.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Name/email, supplied company text, available contact details and relationship indicators. Search name/email/company; Open Contact. Company text does not introduce P2 company entities.

**Navigation/internal links:** Sidebar: Contacts. Parent: ADM-001. Children: ADM-005. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-004; S-MASTER requirements FR-03-01; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Contact table: name, email, company text, useful contact detail and linked-record context. Search/open is primary. Company text is not a P2 company entity. No-match/reset differs from no saved contacts.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-005 — Contact Detail

**URL:** `/dashboard/contacts/[contactId]`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized sales; admin.  
**Objective:** View authorized contact information and linked records without duplicate identity.

**Primary action:** Review linked inquiries and opportunities.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-DETAIL; **5** planned sections/UI regions.

**Order:** 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback.

**Page-specific content and decisions:** Contact facts, linked inquiries/opportunities/customer relationship and permitted activity. Correct permitted details; open linked records. Staff-reviewed duplicate handling, no unsafe auto-merge.

**Navigation/internal links:** Contact rows; record links. Parent: ADM-004. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-005; S-MASTER requirements FR-03-01, FR-02-12; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Show contact identity, communication facts, linked inquiries/opportunities/customer classification and history. Permitted updates preserve relationships; suspected duplicate presents reviewed resolution, no silent merge. Company is a text fact until P2.

**Desktop / tablet / mobile:** Apply the three explicit T-DETAIL compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-006 — Sales Pipeline

**URL:** `/dashboard/opportunities`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Sales; admin.  
**Objective:** Track the fixed New-to-Won/Lost sales process.

**Primary action:** Open or update an opportunity.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Fixed-stage summary and opportunity table: identity/contact/stage/owner/estimated value and currency/latest activity. Stage/owner filters; open or authorized update. Drag-and-drop not required.

**Navigation/internal links:** Sidebar: Sales Pipeline. Parent: ADM-001. Children: ADM-007. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-006; S-MASTER requirements FR-03-05; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Region 3 contains the fixed stage summary and operational opportunity table: identity, contact, stage, owner, estimated amount/currency and latest activity. Filters stage/owner. Optional board uses the same source data: desktop stage columns with local scroll; tablet/mobile stage selector and list. Every card offers a keyboard-operable Move to stage action; drag-and-drop is neither required nor sufficient. No configurable pipeline, forecasts or invented stage. Empty stage differs from fetch failure.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-007 — Opportunity Detail

**URL:** `/dashboard/opportunities/[opportunityId]`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized sales; admin.  
**Objective:** Maintain stage, owner, estimated value and history; convert with staff confirmation.

**Primary action:** Update stage; create task; confirm customer conversion.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-DETAIL; **5** planned sections/UI regions.

**Order:** 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback.

**Page-specific content and decisions:** Inquiry/contact, scope summary, fixed stage, owner, estimated value, notes, stage history and tasks. Update stage/owner/value; task; staff-confirmed customer conversion when appropriate.

**Navigation/internal links:** Pipeline rows; contact/lead links. Parent: ADM-006. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-007; S-MASTER requirements FR-03-05, FR-03-03, FR-02-10, FR-02-11, FR-02-12; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Show inquiry/contact, scope, stage, owner, estimated amount/currency; related records, stage history, notes and tasks. Stage change exposes exact new stage and records result. Won/Lost remains opportunity state; reviewed customer conversion does not claim payment. Confirmation addresses specific conversion/correction effects.

**Desktop / tablet / mobile:** Apply the three explicit T-DETAIL compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-008 — Follow-up Tasks

**URL:** `/dashboard/tasks`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Sales; admin.  
**Objective:** Manage manual tasks and due/overdue reminders.

**Primary action:** Create, assign or complete a task.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Task title, linked record, owner, due time/timezone, status. Due/overdue/completed/owner filters. Create using in-page form; open; complete.

**Navigation/internal links:** Sidebar: Follow-up Tasks. Parent: ADM-001. Children: ADM-009. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-008; S-MASTER requirements FR-03-06; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Task table: title, linked record, owner, due date/timezone, status. Filters due/overdue/completed/owner; in-page Create Task supports title, owner, due and record. Completion updates row and announces result; no automated external reminder campaign.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-009 — Task Detail

**URL:** `/dashboard/tasks/[taskId]`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized task owner/staff.  
**Objective:** Review owner, due date, notes, status and linked sales record.

**Primary action:** Edit or complete task.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-DETAIL; **5** planned sections/UI regions.

**Order:** 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback.

**Page-specific content and decisions:** Title, notes, owner, due date, status, inquiry/opportunity/customer link and completion information. Save; mark complete.

**Navigation/internal links:** Task rows; record links. Parent: ADM-008. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-009; S-MASTER requirements FR-03-06; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Task detail exposes title/notes, owner, due/timezone, status, linked record and completion context. Save and Mark complete are distinct actions. Incomplete fields, unavailable related record, stale update and successful completion have explicit states.

**Desktop / tablet / mobile:** Apply the three explicit T-DETAIL compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-010 — Customers

**URL:** `/dashboard/customers`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Sales; admin.  
**Objective:** Find staff-managed customer records.

**Primary action:** Open customer.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Customer identity/contact details, conversion information and relevant opportunity context. Search identity/contact; Open Customer.

**Navigation/internal links:** Sidebar: Customers. Parent: ADM-001. Children: ADM-011. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-010; S-MASTER requirements FR-03-02, FR-03-03; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Customer list shows identity/contact and reviewed conversion context; search/open supports sales follow-up. No invoices, portal credentials or paid badges inferred from classification. Empty explains that reviewed conversion creates customer context.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-011 — Customer Detail

**URL:** `/dashboard/customers/[customerId]`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized sales; admin.  
**Objective:** Preserve authorized inquiry/opportunity history and customer classification.

**Primary action:** Review history; create follow-up.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-DETAIL; **5** planned sections/UI regions.

**Order:** 1. Identity and status → 2. Core information → 3. Linked records and context → 4. Notes, activity or tasks → 5. Actions and feedback.

**Page-specific content and decisions:** Contact facts, conversion context, inquiries, opportunities, notes and tasks. Review history; correct permitted facts; follow-up. Customer classification does not imply paid.

**Navigation/internal links:** Customer rows; linked records. Parent: ADM-010. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-011; S-MASTER requirements FR-03-02, FR-03-03; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Customer detail shows facts/conversion context and related inquiries, opportunities, notes and tasks. Each relationship respects record permissions. Correcting classification retains history; customer identity alone is not evidence of a sale receipt.

**Desktop / tablet / mobile:** Apply the three explicit T-DETAIL compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-012 — Content Overview

**URL:** `/dashboard/content`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Editor; admin.  
**Objective:** Provide permission-scoped entry to limited launch content tools.

**Primary action:** Open an allowed content tool.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-CONTENT; **4** planned sections/UI regions.

**Order:** 1. Heading → 2. Permitted modules → 3. Publication summaries → 4. Recent edits.

**Page-specific content and decisions:** Article/SEO/testimonial modules and conditional FAQ module only; content-only users receive no sales data.

**Navigation/internal links:** Sidebar group: Content. Parent: ADM-001. Children: ADM-013, ADM-017, ADM-019, ADM-021, EXP-016, EXP-018, EXP-019, EXP-021. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-012; S-MASTER requirements FR-04-06, FR-04-08, FR-01-11; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Module cards: Articles, Testimonials, SEO and FAQs only if its authoring UI is selected. Summaries are real authorized draft/published counts; recent edits show title/type/status/time. No page-builder, catalog editor, media library or sales-data module inferred.

**Desktop / tablet / mobile:** Apply the three explicit T-CONTENT compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-013 — Articles & Resources

**URL:** `/dashboard/content/articles`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Editor; admin.  
**Objective:** List drafts and published articles/resources.

**Primary action:** Create or edit article.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Title, type/topic where supported, status, author, modified/publication dates. Search/status/category filters; Create Article, Edit, Preview.

**Navigation/internal links:** Content sidebar: Articles & Resources. Parent: ADM-012. Children: ADM-014, ADM-015. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-013; S-MASTER requirements FR-04-06; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Article table: title, type/topic, publication status, author, modified and publication dates. Search/status/category filters; New Article, Edit and private Preview where a saved record exists. Empty offers first draft without inventing public content.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-014 — Create Article

**URL:** `/dashboard/content/articles/new`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Editor; admin.  
**Objective:** Draft article fields with controlled featured-image references.

**Primary action:** Save draft.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-EDITOR; **6** planned sections/UI regions.

**Order:** 1. Identity → 2. Summary and body → 3. Images and assets → 4. Classification and author → 5. SEO metadata → 6. Save and publication.

**Page-specific content and decisions:** Required content fields follow approved article definition; create a draft and then continue into saved editor. No claim of scheduled publishing or broad page builder.

**Navigation/internal links:** Create button. Parent: ADM-013. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-014; S-MASTER requirements FR-04-06; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** New Article uses all six editor groups; Save Draft creates a real saved identity before Preview. Title/slug/body/asset alt/classification/SEO are reviewed; draft can be incomplete where policy permits, while publication checks are stricter. Publication permission remains D-013.

**Desktop / tablet / mobile:** Apply the three explicit T-EDITOR compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-015 — Article Editor

**URL:** `/dashboard/content/articles/[articleId]`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized editor; admin.  
**Objective:** Edit, publish or unpublish an article with SEO fields.

**Primary action:** Save draft; publish; unpublish.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-EDITOR; **6** planned sections/UI regions.

**Order:** 1. Identity → 2. Summary and body → 3. Images and assets → 4. Classification and author → 5. SEO metadata → 6. Save and publication.

**Page-specific content and decisions:** Save Draft, Preview, authorized Publish/Unpublish. Distinguish editing live content from saving a separate draft; exact behavior remains review item U-03.

**Navigation/internal links:** Article rows. Parent: ADM-013. Children: ADM-016. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-015; S-MASTER requirements FR-04-06, FR-04-08; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Existing Article offers Save Draft or clearly named save behavior, private Preview, authorized Publish and Unpublish. Display current public state and last saved state separately. U-03 must decide whether editing a live item updates it immediately or creates an unpublished revision; no hidden assumption or scheduled publishing.

**Desktop / tablet / mobile:** Apply the three explicit T-EDITOR compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-016 — Article Preview

**URL:** `/dashboard/content/articles/[articleId]/preview`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized editor; admin.  
**Objective:** Inspect a draft privately before publication.

**Primary action:** Return to editor.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-PREVIEW; **3** planned sections/UI regions.

**Order:** 1. Private-preview notice → 2. Rendered article → 3. Return/publication controls.

**Page-specific content and decisions:** Authorized editors only, even with guessed URL. Render actual article layout and return to editor.

**Navigation/internal links:** Editor preview action. Parent: ADM-015. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-016; S-MASTER requirements FR-04-06, NFR-011; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Private Preview renders the actual article template, notice and Return to Editor. Only permitted staff can read it or draft assets. Missing/forbidden draft gives safe return; showing preview never makes it public. Publish appears only with explicit permission.

**Desktop / tablet / mobile:** Apply the three explicit T-PREVIEW compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-017 — Testimonials & Reviews

**URL:** `/dashboard/content/testimonials`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Editor with permission; admin.  
**Objective:** Curate authentic permitted testimonials; create via in-page form.

**Primary action:** Create or edit permitted testimony.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Attribution/excerpt, engagement context, permission/evidence readiness and visibility. Create via in-page form; edit. Genuine permission required.

**Navigation/internal links:** Content sidebar: Testimonials. Parent: ADM-012. Children: ADM-018. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-017; S-MASTER requirements FR-01-11, BR-004; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Testimonial table: attribution, excerpt, engagement context, permission readiness and visibility. In-page create/edit starts private; detail uses ADM-018. Missing permission blocks public publication, not the ability to retain a private pending record when allowed.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-018 — Testimonial Editor

**URL:** `/dashboard/content/testimonials/[testimonialId]`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized editor; admin.  
**Objective:** Maintain attribution, evidence/permission and publication state.

**Primary action:** Save; publish or hide.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-TESTIMONIAL; **5** planned sections/UI regions.

**Order:** 1. Attribution → 2. Quotation → 3. Evidence and permission → 4. Context and preview → 5. Publication actions.

**Page-specific content and decisions:** Actual permitted quote/attribution/source and related work. Save, Publish, Hide; prevent preview fiction from becoming genuine public proof.

**Navigation/internal links:** Testimonial rows. Parent: ADM-017. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-018; S-MASTER requirements FR-01-11, BR-004; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Attribution/quote/source permission/context/preview precede Save, Publish or Hide. Source evidence stays private; preview shows permitted public attribution only. Explain genuine review readiness and any validation issue directly beside publication controls.

**Desktop / tablet / mobile:** Apply the three explicit T-TESTIMONIAL compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-019 — SEO Metadata

**URL:** `/dashboard/content/seo`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** SEO editor; admin.  
**Objective:** Find published-page metadata records without broad page-builder rights.

**Primary action:** Choose page metadata.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Page name, route, content type, title and indexing status. Search/type filter; open metadata editor.

**Navigation/internal links:** Content sidebar: SEO Metadata. Parent: ADM-012. Children: ADM-020. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-019; S-MASTER requirements FR-04-08; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** SEO list: page name, route, type, title and index state. Search and type filter; open metadata record. Only approved editable public metadata listed; a private page is not made public by a checkbox.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-020 — SEO Metadata Editor

**URL:** `/dashboard/content/seo/[pageId]`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized SEO editor; admin.  
**Objective:** Edit approved title, description, canonical, index and social fields.

**Primary action:** Save validated metadata.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-SEOEDIT; **5** planned sections/UI regions.

**Order:** 1. Page identity → 2. Search metadata → 3. Canonical and index controls → 4. Social metadata and preview → 5. Save controls.

**Page-specific content and decisions:** Editing metadata grants no general body/page-builder or private-record access. Protected pages cannot become public/indexable through these controls.

**Navigation/internal links:** Metadata list; authorized editor shortcuts. Parent: ADM-019. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-020; S-MASTER requirements FR-04-08, NFR-001; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Metadata editor shows stable page/route identity, title/description, restricted canonical/index rules, social fields/illustrative preview and Save. It does not edit page sections or service pricing. Invalid protected-page indexing is rejected, with useful field error.

**Desktop / tablet / mobile:** Apply the three explicit T-SEOEDIT compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-021 — FAQs & Help Management

**URL:** `/dashboard/content/faqs`  
**Phase / source status:** P1 conditional / C  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized editor; admin.  
**Objective:** Manage FAQ/help content if a limited dashboard authoring workflow is selected.

**Primary action:** Create or edit answer.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Conditional FAQ authoring UI: question/title, short/detailed type, category, publication state and modification date. In-page create; edit.

**Navigation/internal links:** Conditional Content sidebar link. Parent: ADM-012. Children: ADM-022. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-021; S-MASTER requirements FR-01-13; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Conditional FAQ/help list: question/title, type, category, visibility and modified date. Search/filter; permitted in-page create and edit link. Underlying public FAQ/help remains required even if alternative authoring replaces this UI.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-022 — FAQ / Help Editor

**URL:** `/dashboard/content/faqs/[faqId]`  
**Phase / source status:** P1 conditional / C  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized editor; admin.  
**Objective:** Edit a short answer or substantive help article under approved publishing rules.

**Primary action:** Save; publish or hide answer.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-FAQEDIT; **5** planned sections/UI regions.

**Order:** 1. Identity and type → 2. Answer/body → 3. Category and related links → 4. Metadata and preview → 5. Publication actions.

**Page-specific content and decisions:** Conditional FAQ/help authoring UI; approved support/commercial wording and related links. Save, Publish, Hide.

**Navigation/internal links:** FAQ list; create form in list. Parent: ADM-021. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-022; S-MASTER requirements FR-01-13; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Conditional FAQ/help editor distinguishes short FAQ from long help; question, body, category/related links, metadata/preview, save/publish/hide. Avoid duplicating the same article in FAQ and Insights. Public presentation follows matching template.

**Desktop / tablet / mobile:** Apply the three explicit T-FAQEDIT compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-023 — Staff Access Administration

**URL:** `/dashboard/settings/access`  
**Phase / source status:** P1 conditional / C  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Admin only.  
**Objective:** Provide minimal account provisioning/revocation if application UI is selected.

**Primary action:** Provision or revoke staff access.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-LIST; **4** planned sections/UI regions.

**Order:** 1. Heading and relevant action → 2. Search and filters → 3. Results table/list → 4. Pagination and feedback.

**Page-specific content and decisions:** Admin-only staff identity, approved role and access status. Search/status filters. Provision through selected process; open staff access. Conditional provider-vs-app UI choice.

**Navigation/internal links:** Settings: Staff Access. Parent: ADM-001. Children: ADM-024. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-023; S-MASTER requirements FR-09-07, FR-14-03, FR-14-04; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Conditional administrator access list shows staff identity, approved role and account status with search/filter/provisioning only if provider supports it. Provisioning is private, no public signup. If provider console is selected, retain required access lifecycle there.

**Desktop / tablet / mobile:** Apply the three explicit T-LIST compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-024 — Staff Access Detail

**URL:** `/dashboard/settings/access/[userId]`  
**Phase / source status:** P1 conditional / C  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Admin only.  
**Objective:** Inspect and change approved basic permissions without an advanced role builder.

**Primary action:** Change permitted role; revoke access.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-ACCESS; **4** planned sections/UI regions.

**Order:** 1. Staff identity and status → 2. Assigned permissions → 3. Supported access controls → 4. Confirmation and history.

**Page-specific content and decisions:** Admin-only role changes/revocation; show target/consequences; no advanced permission builder implied.

**Navigation/internal links:** Staff-access rows. Parent: ADM-023. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-024; S-MASTER requirements FR-09-07, FR-14-03; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Conditional administrator detail shows target staff identity, role/scope, supported controls and history. Revoke/change confirmation names target and effect, handles last-required-admin safeguards, and reflects authoritative outcome; no arbitrary permissions builder.

**Desktop / tablet / mobile:** Apply the three explicit T-ACCESS compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-025 — Audit Log Viewer

**URL:** `/dashboard/audit`  
**Phase / source status:** P1 conditional / C  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Admin or designated reviewer.  
**Objective:** Inspect authorized material changes when a launch viewer is selected.

**Primary action:** Filter audit events.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-AUDIT; **4** planned sections/UI regions.

**Order:** 1. Scope explanation → 2. Filters → 3. Events and detail → 4. Pagination and recovery.

**Page-specific content and decisions:** Conditional read-only viewer for authorized admin/reviewer. Logging itself is required from first release even if viewer is not selected.

**Navigation/internal links:** Restricted sidebar: Audit. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-025; S-MASTER requirements FR-09-13; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Conditional audit viewer filters date, actor, action and record. Event rows show time, actor, action, record and permitted summary; expand safely. Read-only, no delete/edit. Backend logging remains required if this viewer is deferred.

**Desktop / tablet / mobile:** Apply the three explicit T-AUDIT compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-026 — My Account & Security

**URL:** `/dashboard/account`  
**Phase / source status:** P1 / B  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Signed-in staff, own account.  
**Objective:** Access supported profile/session/recovery and MFA settings.

**Primary action:** Manage own supported security settings; sign out.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-ACCOUNT; **4** planned sections/UI regions.

**Order:** 1. Own profile → 2. Sign-in and MFA → 3. Session and recovery → 4. Actions and feedback.

**Page-specific content and decisions:** Every signed-in staff member sees only own account. Exact session/security/recovery controls depend on provider; no self-granted roles.

**Navigation/internal links:** Account menu. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-026; S-MASTER requirements FR-09-01, FR-14-04, FR-14-10; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Own profile and provider-supported security/MFA/session/recovery controls. Save profile, reauthenticate for sensitive changes, Sign Out. No editing own role or seeing other staff private data. Provider unsupported state is honest, not a broken decorative switch.

**Desktop / tablet / mobile:** Apply the three explicit T-ACCOUNT compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

#### ADM-027 — Manual Payment Tracker

**URL:** `/dashboard/payments`  
**Phase / source status:** P1 conditional / C  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Owner; authorized finance staff.  
**Objective:** Record reconciled payments only if the dashboard option is selected.

**Primary action:** Record verified payment or correction.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-PAYMENTS; **5** planned sections/UI regions.

**Order:** 1. Scope/status explanation → 2. Filters → 3. Records → 4. Entry/correction form → 5. Reconciliation feedback.

**Page-specific content and decisions:** Conditional D-007 interface for owner/authorized finance. Manual externally handled financial records, not a gateway or full invoice suite. Verified correction history required.

**Navigation/internal links:** Conditional sidebar: Payments. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADM-027; S-MASTER requirements FR-07-02; shared cross-cutting controls in §2 and §8.

**Step 4 operational detail:** Conditional limited manual finance: expected/invoiced/received statuses, actual amount/currency, linked customer/opportunity, external reference, dates and verification context. In-page entry/correction and history only; prevent duplicate external entries and show unreconciled versus confirmed. No gateway, checkout or full invoice subsystem.

**Desktop / tablet / mobile:** Apply the three explicit T-PAYMENTS compositions in §9 and the staff shell in §8 (authentication uses its separate centered shell). Field and row priorities above specialize those layouts; source region order remains unchanged.

**Permissions, states and interaction:** Source Access/role boundaries plus D-013 govern reading and each action. Inherit the task-specific empty/loading/error/success and conflict/expired-session states in §8/§12; do not show inaccessible records during loading. Field errors are associated with labels, table headers and controls are keyboard accessible, changes announce a concise result. No business action depends on animation; CSS essential feedback only unless the optional pipeline view is selected.

### 10.2 Phase 2 — 62 high-level records

#### IND-00 — Industries

**URL:** `/industries`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Industry-specific buyers.  
**Objective:** Help sector-specific buyers identify relevant capabilities.

**Primary action:** Choose an industry.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Introduction | Explain sector-specific discovery without implying an established client base in every industry. |
| 2. Industry directory | Link all ten approved candidate industry routes with meaningful audience descriptions. |
| 3. Capability selection | Help visitors connect their business problem to existing services and solutions. |
| 4. Next step | Contextual Get a Quote and consultation route; publish only useful, truthful content. |

**Navigation/internal links:** Contextual; footer when published. Parent: PUB-001. Children: IND-01, IND-02, IND-03, IND-04, IND-05, IND-06, IND-07, IND-08, IND-09, IND-10. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-00; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-01 — Insurance & Financial Services

**URL:** `/industries/insurance-financial-services`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Agencies and financial-service businesses.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Policyholder inquiry, servicing workflows and authorized data handling; distinguish technology support from regulated advice and the separate future AMS. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-01; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-02 — Healthcare & Medical

**URL:** `/industries/healthcare-medical`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Healthcare organizations.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Patient-facing information, appointment inquiry and administrative workflows; do not claim clinical capability or regulatory certification. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-02; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-03 — Education

**URL:** `/industries/education`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Education providers.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Course information, enrollment inquiries and administrative communication; distinguish website/CRM support from an unapproved learning platform. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-03; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-04 — Real Estate

**URL:** `/industries/real-estate`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Real-estate businesses.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Property presentation, inquiry capture and agent follow-up; use genuine listings only with permission. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-04; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-05 — Construction & Home Services

**URL:** `/industries/construction-home-services`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Contractors and home-service businesses.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Service-area presentation, quote inquiries, project information and follow-up; avoid unverified geographic delivery claims. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-05; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-06 — E-commerce & Retail

**URL:** `/industries/ecommerce-retail`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Retail businesses.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Catalog, shopping journeys, customer communication and store integrations; distinguish platform fees and fulfillment responsibilities. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-06; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-07 — Marketplaces

**URL:** `/industries/marketplaces`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Marketplace founders.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Buyer/seller journeys, onboarding and operational workflows; discovery must establish platform roles and transaction responsibilities. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-07; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-08 — Restaurants & Hospitality

**URL:** `/industries/restaurants-hospitality`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Hospitality businesses.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Menu/service information, guest inquiries, booking-system connections and local discovery; do not imply a proprietary booking product. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-08; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-09 — Professional Services

**URL:** `/industries/professional-services`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Professional firms.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Expertise presentation, qualified inquiries, appointments and CRM follow-up; substantiate professional claims. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-09; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### IND-10 — Startups & SaaS

**URL:** `/industries/startups-saas`  
**Phase / source status:** P2 proposed; P1 only by explicit promotion / C  
**Access:** Public

**Audience:** Startup and SaaS founders.  
**Objective:** Explain distinct sector problems and link truthful capabilities without creating new service identities.

**Primary action:** Get a Quote.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Industry hero | State the sector, business situations and relevant technology outcomes; use the exact source page name. |
| 2. Problems and priorities | Product positioning, early customer acquisition, application experience and deployment foundations; no fabricated startup success metrics. |
| 3. Relevant capabilities | Curate existing services/solutions and explain why each fits; do not invent industry packages. |
| 4. Delivery and responsibilities | Explain discovery, domain inputs, scope, delivery and handoff at a high level. |
| 5. Evidence | Show only permitted sector-relevant work, with honest context; otherwise omit this display region. |
| 6. Questions | Address sector-specific data, integration, content and commercial questions without unsupported assurances. |
| 7. Next step | Carry sector context to Get a Quote; consultation for selection help. |

**Page-specific content and decisions:** Suggested search intent: sector-specific commercial research. Use a unique sector problem narrative, not ten near-duplicate doorway pages. Mobile: hero, relevant capabilities and main action first; stack comparison/evidence.

**Navigation/internal links:** Industry cards; contextual links. Parent: IND-00. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Sector-specific capability discovery and commercial research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP IND-10; S-MASTER requirements EXT-001, FR-01-04, FR-01-05, FR-01-07, BR-001, BR-005; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### PRD-00 — Products

**URL:** `/products`  
**Phase / source status:** P2 proposed; P1 only by explicit publication approval / C  
**Access:** Public

**Audience:** Potential product buyers.  
**Objective:** Present genuine ARADUN-owned offerings with accurate lifecycle status.

**Primary action:** Explore a product.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Product introduction | Explain genuine ARADUN-owned offerings and distinguish them from agency services. |
| 2. Available products | Name, problem, actual lifecycle status and eligible next action for each verified product. |
| 3. Choosing and learning | Link product detail and service alternatives; explain availability honestly. |
| 4. Product inquiry | Use the existing inquiry path; do not introduce P1 checkout or imply a demo is available. |

**Navigation/internal links:** Contextual; footer when published. Parent: PUB-001. Children: PRD-01. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Product-specific evaluation and availability research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PRD-00; S-MASTER requirements EXT-002, BR-007; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### PRD-01 — Product Detail

**URL:** `/products/[slug]`  
**Phase / source status:** P2 proposed; P1 only by explicit publication approval / C  
**Access:** Public

**Audience:** Product prospects.  
**Objective:** Explain one approved product and available next steps.

**Primary action:** Request information; demo only if available.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 7. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Product identity | Name, actual lifecycle status, intended customer and supported problem. |
| 2. Use cases and capabilities | Describe verified behavior and boundaries; avoid roadmap-as-current-feature claims. |
| 3. Demonstration or evidence | Real product views or clearly labeled concept material; demo action only if available. |
| 4. Commercial options | Publish approved price, delivery model and terms only; otherwise inquiry with accurate status. |
| 5. Onboarding and support | Outline actual prerequisites, onboarding, support and ownership expectations. |
| 6. Questions and related information | Product-specific FAQs, relevant terms/privacy and service alternatives. |
| 7. Next step | Available demo, inquiry or approved acquisition action appropriate to lifecycle stage. |

**Page-specific content and decisions:** Repeatable product template, not an invented product-instance list. AMS marketing does not authorize implementation.

**Navigation/internal links:** Product cards; contextual. Parent: PRD-00. Children: PRD-02. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Product-specific evaluation and availability research.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PRD-01; S-MASTER requirements EXT-002, EXT-003, FR-02-04, FR-02-06, BR-007; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-001 — Companies

**URL:** `/dashboard/companies`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Sales; admin.  
**Objective:** Manage B2B company identities; create in-page.

**Primary action:** Open or create company.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Company scope | Authorized B2B company directory. |
| 2. Search and filters | Name and supported relationship/status filters. |
| 3. Company records | Identity, linked contacts and permitted relationship summary. |
| 4. Create and continue | Controlled in-page create; open Company Detail. |

**Navigation/internal links:** Sidebar: Companies. Parent: ADM-001. Children: EXP-002. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-001; S-MASTER requirements FR-03-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-002 — Company Detail

**URL:** `/dashboard/companies/[companyId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized sales; admin.  
**Objective:** Maintain company/contact links and reviewed merges.

**Primary action:** Edit company and links.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Company identity | Confirm the company and permitted editable facts. |
| 2. Related people and work | Contacts, inquiries and opportunities as authorized. |
| 3. History | Relevant changes and relationship activity. |
| 4. Actions | Edit and reviewed duplicate/merge flow with consequences; no unsafe automatic merging. |

**Navigation/internal links:** Company rows. Parent: EXP-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-002; S-MASTER requirements FR-03-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-003 — Projects

**URL:** `/dashboard/projects`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Assigned staff; manager; admin.  
**Objective:** Manage authorized delivery projects; create from accepted proposal.

**Primary action:** Create or open project.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Project scope | Explain authorized delivery projects. |
| 2. Search and filters | Status, owner and agreed dates. |
| 3. Project list | Identity, customer, stage, responsible person and next milestone. |
| 4. Actions | Open workspace; create from accepted proposal under approved conversion rules. |

**Navigation/internal links:** Sidebar: Projects. Parent: ADM-001. Children: EXP-004. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-003; S-MASTER requirements FR-06-01, FR-06-02; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-004 — Project Detail

**URL:** `/dashboard/projects/[projectId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Assigned team; manager; admin.  
**Objective:** Coordinate tasks, team, milestones, board, deadlines, files, reviews, changes and time as scoped tabs.

**Primary action:** Advance authorized delivery work.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Project identity | Scope, customer, status, owners and dates. |
| 2. Delivery workspace | Scoped tabs for tasks, team, board, milestones, deadlines and time. |
| 3. Review workspace | Requirements, files, reviews, change requests and permitted messages. |
| 4. History and next action | Visible dependencies, assigned work and approval state; staff-only material remains protected. |

**Navigation/internal links:** Project rows; related records. Parent: EXP-003. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-004; S-MASTER requirements FR-06-03, FR-06-04, FR-06-05, FR-06-06, FR-06-07, FR-06-08, FR-06-09, FR-06-10, FR-05-07, FR-05-09, FR-05-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-005 — Proposals

**URL:** `/dashboard/proposals`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Sales; admin.  
**Objective:** Create staff-reviewed proposals from approved scope.

**Primary action:** Create or open proposal.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Proposal scope | Explain drafts, issued versions and approval states. |
| 2. Find proposals | Customer, owner, status and date filters. |
| 3. Proposal list | Identity, version, value/currency and state. |
| 4. Actions | Create from approved scope; open editor/review. |

**Navigation/internal links:** Sidebar: Proposals. Parent: ADM-001. Children: EXP-006. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-005; S-MASTER requirements FR-02-16, FR-07-01; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-006 — Proposal Detail / Editor

**URL:** `/dashboard/proposals/[proposalId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized sales; admin.  
**Objective:** Review versions, scope, fees and approval/signature evidence.

**Primary action:** Review; issue through approved workflow.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Proposal identity | Customer, version and accurate draft/issued/accepted state. |
| 2. Scope and commercial body | Deliverables, exclusions, fees and agreed terms. |
| 3. Review and evidence | Version differences and supported approval/signature evidence. |
| 4. Actions and history | Save/review/issue through authorized workflow; preserve the accepted version. |

**Navigation/internal links:** Proposal rows; opportunity links. Parent: EXP-005. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-006; S-MASTER requirements FR-02-16, FR-02-17, FR-07-01; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-007 — Contracts & SOWs

**URL:** `/dashboard/contracts`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized sales; finance; admin.  
**Objective:** Find protected versioned agreements.

**Primary action:** Open or create agreement.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Agreement scope | Protected contracts and SOWs. |
| 2. Find agreements | Customer, project, state and dates. |
| 3. Agreement list | Title, version and signing status. |
| 4. Actions | Open the permitted agreement version. |

**Navigation/internal links:** Sidebar: Contracts. Parent: ADM-001. Children: EXP-008. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-007; S-MASTER requirements FR-07-09; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-008 — Contract Detail

**URL:** `/dashboard/contracts/[contractId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized commercial staff.  
**Objective:** Manage agreement status, versions and signature evidence.

**Primary action:** Review agreement; initiate approved signing.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Agreement identity | Parties, related project and version. |
| 2. Agreement content | Authorized text and files. |
| 3. Signature and history | Evidence, dates and permitted audit history. |
| 4. Actions | Manage permitted versions and approved signing process; no false signature completion. |

**Navigation/internal links:** Contract rows; project links. Parent: EXP-007. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-008; S-MASTER requirements FR-07-09, FR-02-17; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-009 — Invoices

**URL:** `/dashboard/invoices`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized finance; admin.  
**Objective:** Manage draft and issued invoices.

**Primary action:** Create or open invoice.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Invoice scope | Distinguish drafts, issued invoices and verified payment states. |
| 2. Find invoices | Customer, dates, status and currency. |
| 3. Invoice list | Number, issued/due dates, amount and balance. |
| 4. Actions | Create/open subject to approved billing workflow. |

**Navigation/internal links:** Sidebar: Invoices. Parent: ADM-001. Children: EXP-010. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-009; S-MASTER requirements FR-07-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-010 — Invoice Detail

**URL:** `/dashboard/invoices/[invoiceId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized finance; admin.  
**Objective:** Track deposits, installments, verified payments, reminders and adjustments.

**Primary action:** Issue invoice; reconcile payment; review refund request.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Invoice identity | Customer, invoice reference, currency and dates. |
| 2. Charges and installments | Line items, deposit/milestone obligations and adjustments. |
| 3. Payment evidence | Verified receipts, balance and reconciliation state. |
| 4. Actions and history | Authorized issue/reminder/adjustment/provider actions; do not infer receipt from a redirect. |

**Navigation/internal links:** Invoice rows; customer links. Parent: EXP-009. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-010; S-MASTER requirements FR-07-04, FR-07-05, FR-07-06, FR-07-08, FR-07-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-011 — Billing Profiles

**URL:** `/dashboard/billing-profiles`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized finance; admin.  
**Objective:** Manage client billing identities as controlled in-page editors.

**Primary action:** Update billing information.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Billing profile scope | Authorized customer billing identities. |
| 2. Find profiles | Customer/profile search. |
| 3. Profile list and form | Approved identity and billing fields in controlled in-page editor. |
| 4. Validation and actions | Review, save and link under billing permissions. |

**Navigation/internal links:** Finance navigation; customer links. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-011; S-MASTER requirements FR-07-03; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-012 — Recurring Billing

**URL:** `/dashboard/subscriptions`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized finance; admin.  
**Objective:** Manage recurring service/product billing and provider state.

**Primary action:** Open subscription.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Recurring billing scope | Explain recurring service/product billing and provider state. |
| 2. Find arrangements | Customer, lifecycle state and next billing date. |
| 3. Arrangements | Amount/currency/period, provider status and next event. |
| 4. Actions | Open subscription; create/change only through approved lifecycle controls. |

**Navigation/internal links:** Finance sidebar: Recurring Billing. Parent: ADM-001. Children: EXP-013. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-012; S-MASTER requirements FR-07-07; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-013 — Subscription Detail

**URL:** `/dashboard/subscriptions/[subscriptionId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized finance; admin.  
**Objective:** Review recurring charges, lifecycle and cancellation terms.

**Primary action:** Manage authorized billing lifecycle.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Subscription identity | Customer, agreed plan and lifecycle state. |
| 2. Charges and dates | Recurrence, next event and verified invoices/payments. |
| 3. Terms and consequences | Applicable changes/cancellation conditions. |
| 4. Actions and history | Review and perform only supported approved changes. |

**Navigation/internal links:** Recurring-billing rows. Parent: EXP-012. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-013; S-MASTER requirements FR-07-07, FR-07-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-014 — Support Tickets

**URL:** `/dashboard/support`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Assigned support; admin.  
**Objective:** Manage client-scoped support requests.

**Primary action:** Open ticket.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Support scope | Authorized client requests. |
| 2. Find tickets | Status, owner, customer and date. |
| 3. Ticket queue | Topic, related work, status and activity. |
| 4. Actions | Open, assign and prioritize according to the actual support policy. |

**Navigation/internal links:** Sidebar: Support. Parent: ADM-001. Children: EXP-015. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-014; S-MASTER requirements FR-05-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-015 — Support Ticket Detail

**URL:** `/dashboard/support/[ticketId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Assigned support; admin.  
**Objective:** Respond and track status/history under support policy.

**Primary action:** Reply; update status.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Ticket identity | Customer, topic, related work and state. |
| 2. Conversation | Clearly separate client-visible replies from internal notes. |
| 3. Context | Authorized attachments, history and responsibility. |
| 4. Actions | Reply, assign and update state; no invented response SLA. |

**Navigation/internal links:** Ticket rows; notifications. Parent: EXP-014. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-015; S-MASTER requirements FR-05-11, FR-05-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-016 — Service Catalog Editor

**URL:** `/dashboard/content/services`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized catalog admin.  
**Objective:** Find services for editing without changing their stable identities.

**Primary action:** Open service editor.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Catalog scope | Stable service identities and publication/availability state. |
| 2. Find services | Category, name and status. |
| 3. Service records | Current content and commercial readiness cues. |
| 4. Actions | Open existing Service/Package Editor; no unapproved new service taxonomy. |

**Navigation/internal links:** Content sidebar: Services. Parent: ADM-012. Children: EXP-017. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-016; S-MASTER requirements FR-04-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-017 — Service / Package Editor

**URL:** `/dashboard/content/services/[serviceId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized catalog admin.  
**Objective:** Edit approved service details, availability and package fields.

**Primary action:** Save; preview; publish approved content.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Service identity | Stable ID, name, route and category. |
| 2. Content and offer fields | Approved service content, availability, package scope, price and units. |
| 3. Review and versions | Private preview, validation and previous versions. |
| 4. Actions | Save, review and publish under approved rights; do not apply D-002 price increases silently. |

**Navigation/internal links:** Service editor list. Parent: EXP-016. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-017; S-MASTER requirements FR-04-04, FR-04-10, FR-04-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-018 — Solution / Package Management

**URL:** `/dashboard/content/solutions`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized catalog admin.  
**Objective:** Manage existing solution definitions using constrained in-page editors.

**Primary action:** Edit approved solution/package.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Solution scope | Five existing solution identities. |
| 2. Package workspace | Constrained in-page content, tier, scope and price fields. |
| 3. Review and versions | Preview and check shared offer consistency. |
| 4. Actions | Authorized save/publish with history; no new package commitments from missing values. |

**Navigation/internal links:** Content sidebar: Solutions. Parent: ADM-012. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-018; S-MASTER requirements FR-04-02, FR-04-05, FR-04-10, BR-002; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-019 — Website Page Management

**URL:** `/dashboard/content/pages`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized editor; admin.  
**Objective:** Find approved page records and supported content types.

**Primary action:** Open page editor.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Page scope | Approved public page records and supported types. |
| 2. Find pages | Name, route, type and publication filters. |
| 3. Page inventory | Stable identity, status and modification information. |
| 4. Actions | Open constrained page editor; no unapproved route creation. |

**Navigation/internal links:** Content sidebar: Pages. Parent: ADM-012. Children: EXP-020. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-019; S-MASTER requirements FR-04-05; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-020 — Website Page Editor

**URL:** `/dashboard/content/pages/[pageId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized editor; admin.  
**Objective:** Edit constrained fields/blocks with private preview, publishing and version controls.

**Primary action:** Save; preview; publish or restore.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Page identity | Approved route, type and publication state. |
| 2. Content workspace | Constrained fields/blocks appropriate to the page template. |
| 3. Preview and versions | Private preview and permitted revision history. |
| 4. Actions | Save/review/publish with clear live-content effect; not an advanced freeform builder. |

**Navigation/internal links:** Page list. Parent: EXP-019. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-020; S-MASTER requirements FR-04-05, FR-04-09, FR-04-10, FR-04-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-021 — Media Library

**URL:** `/dashboard/content/media`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized editor; admin.  
**Objective:** Manage public assets and protected file references with usage and access controls.

**Primary action:** Upload or select authorized asset.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Media scope | Distinguish public assets from protected references. |
| 2. Find assets | Type, usage and access filters. |
| 3. Asset workspace | Preview, metadata, usage and permissions. |
| 4. Actions | Authorized upload/edit/replace with security and dependency checks; no exposure of private documents. |

**Navigation/internal links:** Content sidebar: Media. Parent: ADM-012. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-021; S-MASTER requirements FR-04-07, FR-14-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-022 — Team Management

**URL:** `/dashboard/team`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Admin; authorized manager.  
**Objective:** Manage broader staff/contractor invitations and membership.

**Primary action:** Invite or open member.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Team scope | Broader staff/contractor membership. |
| 2. Find people | Name, membership and role filters. |
| 3. Team list | Identity, role, membership status and assignment context. |
| 4. Actions | Approved invitation; open member; no public staff registration. |

**Navigation/internal links:** Sidebar: Team. Parent: ADM-001. Children: EXP-023. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-022; S-MASTER requirements FR-09-09; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-023 — Team Member Detail

**URL:** `/dashboard/team/[memberId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized admin/manager.  
**Objective:** Manage membership, working role and offboarding.

**Primary action:** Update member; revoke access.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Member identity | Person, membership state and role. |
| 2. Responsibilities | Approved working role and project assignments. |
| 3. Access context | Explain permitted scope and effects of changes. |
| 4. Actions and history | Authorized changes/offboarding; preserve necessary ownership continuity. |

**Navigation/internal links:** Team rows. Parent: EXP-022. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-023; S-MASTER requirements FR-09-09, FR-06-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-024 — Departments

**URL:** `/dashboard/departments`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Admin; manager.  
**Objective:** Maintain department groupings without expanding record permissions.

**Primary action:** Manage departments in-page.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Department scope | Organizational groupings and intended use. |
| 2. Department list | Names and membership summaries. |
| 3. In-page editor | Approved grouping fields and member selection. |
| 4. Actions | Save/review changes; department grouping does not expand record permissions. |

**Navigation/internal links:** Team navigation. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-024; S-MASTER requirements FR-09-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-025 — Staff Notifications

**URL:** `/dashboard/notifications`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Signed-in staff.  
**Objective:** Provide recipient-scoped operational notifications.

**Primary action:** Open authorized linked action.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Notification scope | Signed-in recipient only. |
| 2. Filters | Read/unread, type and date where useful. |
| 3. Notifications | Meaningful event, time and permitted target. |
| 4. Actions | Mark read and follow authorized link; hide sensitive unavailable-record detail. |

**Navigation/internal links:** Header notification control. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-025; S-MASTER requirements FR-09-12; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-026 — Reports

**URL:** `/dashboard/reports`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Owner; permitted managers/analysts.  
**Objective:** Provide approved source, funnel, revenue, demand, acquisition-cost and team report views.

**Primary action:** Select and filter report.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Report selection | Approved source, funnel, revenue, demand, acquisition-cost and team views. |
| 2. Definitions and filters | Dates, currency, denominators and record scope. |
| 3. Results | Summary plus accessible chart/table and qualified interpretation. |
| 4. Details and quality | Source records, missing data and last update; no false zero or fabricated metrics. |

**Navigation/internal links:** Sidebar: Reports. Parent: ADM-001. Children: ADV-001, ADV-002. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-026; S-MASTER requirements FR-10-05, FR-10-06, FR-10-07, FR-10-08, FR-10-09, FR-10-10, FR-09-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-027 — Automation Rules

**URL:** `/dashboard/automations`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized automation admin.  
**Objective:** Manage approved triggers and bounded follow-up, reminder, pipeline and finance/onboarding rules.

**Primary action:** Open or create rule.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Automation scope | Approved bounded operational rules. |
| 2. Find rules | Trigger, state and responsible owner. |
| 3. Rule list | Purpose, activation and recent failure context. |
| 4. Actions | Open/review/enable only approved rules; no automatic unsolicited sending assumption. |

**Navigation/internal links:** Sidebar: Automations. Parent: ADM-001. Children: EXP-028, ADV-005. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-027; S-MASTER requirements FR-02-15, FR-08-04, FR-08-05, FR-08-06, FR-08-07, FR-08-08, FR-08-09, FR-08-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-028 — Automation Rule Detail

**URL:** `/dashboard/automations/[automationId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized automation admin.  
**Objective:** Edit and review approved rule configuration; basic failure visibility accompanies release.

**Primary action:** Review; enable or disable authorized rule.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Rule identity | Purpose, owner, state and scope. |
| 2. Configuration | Approved trigger, conditions, actions and stop/consent boundaries. |
| 3. Review | Explain effects and permitted validation before activation. |
| 4. Actions and reliability | Save/enable/disable with basic failures and safe retry visibility from first release. |

**Navigation/internal links:** Automation list. Parent: EXP-027. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-028; S-MASTER requirements FR-02-15, FR-08-04, FR-08-05, FR-08-06, FR-08-07, FR-08-08, FR-08-09, FR-08-10, NFR-006; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-029 — Integrations

**URL:** `/dashboard/integrations`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized integration admin.  
**Objective:** List approved integration connections and statuses.

**Primary action:** Select an integration.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Integration scope | Approved providers and connection purposes. |
| 2. Connections | Provider, owner, state and last verified synchronization. |
| 3. Readiness and issues | Required permissions, unavailable connections and basic errors. |
| 4. Actions | Open scoped connection; connect only under approval and actual provider capabilities. |

**Navigation/internal links:** Settings: Integrations. Parent: ADM-001. Children: EXP-030, ADV-010, ADV-011. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-029; S-MASTER requirements FR-11-03, FR-11-04, FR-11-05, FR-11-06, FR-11-07, FR-11-08, FR-11-09, FR-11-10, FR-11-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-030 — Integration Detail

**URL:** `/dashboard/integrations/[integrationKey]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized integration admin.  
**Objective:** Manage scoped connection, mapping, revocation and basic failure/reconciliation information.

**Primary action:** Connect or disconnect approved provider.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Connection identity | Provider, owner, purpose and scope. |
| 2. Mapping and authority | System of record, sync direction and permitted mappings. |
| 3. Health and reconciliation | Last sync, safe failure detail and discrepancies. |
| 4. Actions | Authorized connect/update/revoke/retry; no raw secret display. |

**Navigation/internal links:** Integration list. Parent: EXP-029. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-030; S-MASTER requirements FR-03-09, FR-08-11, FR-11-03, FR-11-04, FR-11-05, FR-11-06, FR-11-07, FR-11-08, FR-11-09, FR-11-10, FR-11-11, FR-14-12, FR-14-13, NFR-015; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### EXP-031 — Appointments

**URL:** `/dashboard/appointments`  
**Phase / source status:** P2 baseline; P1 only if D-003 explicitly resolved / C  
**Access:** Private staff; server-authorized role and record scope

**Audience:** Authorized sales; admin.  
**Objective:** Review verified bookings if integrated scheduling needs an internal view.

**Primary action:** Review provider-confirmed appointment.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Appointment scope | Internal view only if integrated booking requires it and D-003 is resolved. |
| 2. Find appointments | Date, timezone, status and responsible person. |
| 3. Appointments | Provider-confirmed details and linked permitted inquiry. |
| 4. Actions | Open or follow actual reschedule/cancel provider flow; do not invent a confirmed booking. |

**Navigation/internal links:** Conditional sidebar: Appointments. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP EXP-031; S-MASTER requirements FR-02-14, FR-11-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-A01 — Client Sign In

**URL:** `/client/login`  
**Phase / source status:** P2 conditional / C  
**Access:** Authentication gateway; no client business data

**Audience:** Clients.  
**Objective:** Authenticate provisioned client access.

**Primary action:** Sign in.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-AUTH; **3** planned sections/UI regions.

**Order:** 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion.

**Page-specific content and decisions:** Client identity only, separate from staff accounts. Provisioned sign-in; neutral errors and supported recovery.

**Navigation/internal links:** Future Client Portal link; direct; protected-route redirect. Parent: CLI-ROOT. Children: CLI-A02, CLI-A03, CLI-A04. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-A01; S-MASTER requirements FR-05-01; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-AUTH in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CLI-A02 — Client Access Recovery

**URL:** `/client/recover`  
**Phase / source status:** P2 conditional / C  
**Access:** Authentication gateway; no client business data

**Audience:** Clients.  
**Objective:** Start provider-supported account recovery.

**Primary action:** Request recovery.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-AUTH; **3** planned sections/UI regions.

**Order:** 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion.

**Page-specific content and decisions:** Client identity only, separate from staff accounts. Neutral recovery request response; do not disclose account existence.

**Navigation/internal links:** Sign-in contextual link. Parent: CLI-A01. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-A02; S-MASTER requirements FR-05-01; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-AUTH in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CLI-A03 — Client Recovery Completion

**URL:** `/client/reset`  
**Phase / source status:** P2 conditional / C  
**Access:** Authentication gateway; no client business data

**Audience:** Verified recovery recipient.  
**Objective:** Complete provider-validated recovery.

**Primary action:** Restore access.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-AUTH; **3** planned sections/UI regions.

**Order:** 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion.

**Page-specific content and decisions:** Client identity only, separate from staff accounts. Provider-validated reset/completion, invalid/expired recovery and return to sign-in.

**Navigation/internal links:** Valid recovery link. Parent: CLI-A01. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-A03; S-MASTER requirements FR-05-01; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-AUTH in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CLI-A04 — Client Account Activation

**URL:** `/client/activate`  
**Phase / source status:** P2 conditional / C  
**Access:** Authentication gateway; no client business data

**Audience:** Invited client contact.  
**Objective:** Accept a valid invitation if invitation-based accounts are selected.

**Primary action:** Activate account.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**Blueprint:** T-AUTH; **3** planned sections/UI regions.

**Order:** 1. Identity and purpose → 2. Provider-supported controls → 3. Help, recovery or completion.

**Page-specific content and decisions:** Client identity only, separate from staff accounts. Valid invitation activation if invitation provisioning is selected; show expiration/recovery. Public registration is not assumed.

**Navigation/internal links:** Valid invitation only. Parent: CLI-A01. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-A04; S-MASTER requirements FR-05-01; shared cross-cutting controls in §2 and §8.

**Step 4 visual binding:** T-AUTH in §9 supplies desktop/tablet/mobile placement, component anatomy, CTA/trust positions, accessibility and motion. Apply this page’s exact source specialization above in all three themes; no new section or route.

#### CLI-001 — Client Overview

**URL:** `/portal`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client.  
**Objective:** Summarize own projects, documents and required actions.

**Primary action:** Open required action.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Client identity | Own authorized workspace. |
| 2. Required actions | Pending permitted reviews, documents and support actions. |
| 3. Work summary | Own project states and next milestones. |
| 4. Navigation | Scoped project, proposal, contract, invoice and support links; no staff-wide data. |

**Navigation/internal links:** Portal sidebar: Overview. Parent: CLI-ROOT. Children: CLI-002, CLI-004, CLI-006, CLI-008, CLI-010, CLI-013, CLI-014, CLI-015. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-001; S-MASTER requirements FR-05-02; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-002 — My Projects

**URL:** `/portal/projects`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client.  
**Objective:** List only client-authorized projects.

**Primary action:** Open project.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Project scope | Only client-authorized projects. |
| 2. Find projects | Useful status/search controls. |
| 3. Project list | Project name, status and next milestone. |
| 4. Actions | Open permitted Project Workspace. |

**Navigation/internal links:** Portal sidebar: Projects. Parent: CLI-001. Children: CLI-003. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-002; S-MASTER requirements FR-05-03; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-003 — Project Workspace

**URL:** `/portal/projects/[projectId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized project client.  
**Objective:** View progress and use scoped requirements, files, approvals, changes and messages tabs.

**Primary action:** Submit requirements; exchange files; review a deliverable.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Project overview | Agreed scope, progress and milestones. |
| 2. Client workspace | Scoped requirements, files, approvals, change requests and messages tabs. |
| 3. Review context | Correct versions, responsibilities and consequences. |
| 4. Actions and history | Submit permitted inputs/review responses; never show staff internal notes. |

**Navigation/internal links:** Project rows; notifications. Parent: CLI-002. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-003; S-MASTER requirements FR-05-03, FR-05-06, FR-05-07, FR-05-08, FR-05-09, FR-05-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-004 — My Proposals

**URL:** `/portal/proposals`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client.  
**Objective:** Find client-authorized proposals.

**Primary action:** Open proposal.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Proposal scope | Only authorized client proposals. |
| 2. Find proposals | Status/date controls. |
| 3. Proposal list | Title, version and decision state. |
| 4. Actions | Open the correct review version. |

**Navigation/internal links:** Portal: Documents > Proposals. Parent: CLI-001. Children: CLI-005. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-004; S-MASTER requirements FR-05-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-005 — Proposal Review

**URL:** `/portal/proposals/[proposalId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client approver.  
**Objective:** Review the correct proposal version and approved signature/acceptance process.

**Primary action:** Review; accept or decline through approved process.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Proposal identity | Parties, correct version and state. |
| 2. Review body | Scope, exclusions, commercial terms and permitted files. |
| 3. Decision context | Approval/signature effect and available clarification route. |
| 4. Actions | Approved accept/sign process with authoritative confirmation, not an implied signature. |

**Navigation/internal links:** Proposal rows; authenticated deep links. Parent: CLI-004. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-005; S-MASTER requirements FR-05-04, FR-02-17; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-006 — My Contracts

**URL:** `/portal/contracts`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client.  
**Objective:** Find authorized agreements and SOWs.

**Primary action:** Open contract.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Agreement scope | Authorized contracts and SOWs. |
| 2. Find agreements | Project/status/date controls. |
| 3. Agreement list | Title, version and state. |
| 4. Actions | Open/download permitted version. |

**Navigation/internal links:** Portal: Documents > Contracts. Parent: CLI-001. Children: CLI-007. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-006; S-MASTER requirements FR-05-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-007 — Contract Review

**URL:** `/portal/contracts/[contractId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client approver.  
**Objective:** View/download permitted agreement versions and supported signing evidence.

**Primary action:** Review; sign only through approved process.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Agreement identity | Parties, version and state. |
| 2. Agreement body | Authorized text and documents. |
| 3. Signing context | Supported process and actual signing evidence. |
| 4. Actions | Review/download/approved signing only. |

**Navigation/internal links:** Contract rows; authenticated deep links. Parent: CLI-006. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-007; S-MASTER requirements FR-05-04, FR-07-09, FR-02-17; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-008 — My Invoices

**URL:** `/portal/invoices`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized billing contact.  
**Objective:** Show authorized balances and verified payment history.

**Primary action:** Open invoice.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Invoice scope | Own authorized financial records. |
| 2. Find invoices | Status/date/currency controls. |
| 3. Invoice list | Reference, due date, amount and verified balance. |
| 4. Actions | Open Invoice & Payment Detail. |

**Navigation/internal links:** Portal sidebar: Billing. Parent: CLI-001. Children: CLI-009. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-008; S-MASTER requirements FR-05-05; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-009 — Invoice & Payment Detail

**URL:** `/portal/invoices/[invoiceId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized billing contact.  
**Objective:** Show reconciled invoice state and initiate approved provider collection.

**Primary action:** Pay eligible invoice; review payment status.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Invoice identity | Correct invoice, currency and due date. |
| 2. Amounts | Charges, adjustments, verified payments and balance. |
| 3. Payment context | Approved provider, current state and next action. |
| 4. Actions | Initiate permitted collection; reconcile pending/failure/success without redirect-based false success. |

**Navigation/internal links:** Invoice rows; authenticated links. Parent: CLI-008. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-009; S-MASTER requirements FR-05-05, FR-07-05; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-010 — Support

**URL:** `/portal/support`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client.  
**Objective:** List own permitted support tickets.

**Primary action:** Open or create ticket.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Support scope | Own permitted tickets and actual policy. |
| 2. Find requests | Status/topic/date controls. |
| 3. Ticket list | Topic, status and recent client-visible activity. |
| 4. Actions | New ticket or open existing ticket. |

**Navigation/internal links:** Portal sidebar: Support. Parent: CLI-001. Children: CLI-011, CLI-012. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-010; S-MASTER requirements FR-05-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-011 — New Support Ticket

**URL:** `/portal/support/new`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client.  
**Objective:** Capture a support request under agreed support policy.

**Primary action:** Submit ticket.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Request context | Explain applicable support and relevant project selection. |
| 2. Request form | Topic and description; permitted attachment only where supported. |
| 3. Review and privacy | Confirm useful details and authorized file handling. |
| 4. Submit and result | Submit once, preserve input on error and show actual saved ticket reference. |

**Navigation/internal links:** Support create button. Parent: CLI-010. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-011; S-MASTER requirements FR-05-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-012 — Support Ticket Detail

**URL:** `/portal/support/[ticketId]`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client.  
**Objective:** Show client-visible responses and ticket status.

**Primary action:** Reply or review update.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Ticket identity | Topic, related work and state. |
| 2. Conversation | Client-visible replies only. |
| 3. Context | Permitted attachments and relevant history. |
| 4. Actions | Reply and approved status action; no internal staff notes. |

**Navigation/internal links:** Ticket rows; notifications. Parent: CLI-010. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-012; S-MASTER requirements FR-05-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-013 — Client Notifications

**URL:** `/portal/notifications`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client.  
**Objective:** Prompt permitted project/document/support actions.

**Primary action:** Open linked action.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Notification scope | Signed-in client recipient. |
| 2. Filters | Read/unread and useful type/date controls. |
| 3. Notifications | Permitted project/document/support event and time. |
| 4. Actions | Follow authorized target or mark read. |

**Navigation/internal links:** Portal notification control. Parent: CLI-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-013; S-MASTER requirements FR-05-12; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-014 — Client Account & Billing Details

**URL:** `/portal/account`  
**Phase / source status:** P2 proposed / R  
**Access:** Private client; own permitted client/project records only

**Audience:** Authorized client; billing permissions where relevant.  
**Objective:** Manage approved own-account and billing-profile fields.

**Primary action:** Update permitted details; sign out.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Own account | Approved profile fields and identity. |
| 2. Billing identity | Permitted own billing-profile fields. |
| 3. Security context | Supported sign-in/recovery and verification controls. |
| 4. Actions | Save validated fields; no self-granted permissions. |

**Navigation/internal links:** Portal account menu. Parent: CLI-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-014; S-MASTER requirements FR-05-01, FR-07-03; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

### 10.3 Phase 3 — 28 high-level records

#### ADV-001 — Advanced Reports & Forecasts

**URL:** `/dashboard/reports/advanced`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized owner/analyst.  
**Objective:** Provide defined forecasting, lifetime-value, health, profitability and predictive views.

**Primary action:** Inspect assumptions and source records.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Report selection | Approved forecast, lifetime value, health, profitability and predictive views. |
| 2. Definitions and inputs | Method, scope, time horizon and data quality. |
| 3. Results | Accessible summaries/charts/tables; uncertainty and historical versus forecast distinction. |
| 4. Review and action | Explain limits and supporting records; no automated decision claim. |

**Navigation/internal links:** Reports navigation. Parent: EXP-026. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-001; S-MASTER requirements FR-02-20, FR-03-10, FR-03-11, FR-03-13, FR-06-11, FR-07-11, FR-07-14, FR-10-12, FR-10-13; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-002 — Custom Report Builder

**URL:** `/dashboard/reports/custom`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized analyst/admin.  
**Objective:** Build reports using approved fields and access scopes.

**Primary action:** Create or run a bounded report.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Report purpose | Name, owner and authorized data scope. |
| 2. Builder | Approved fields, filters, grouping and metric definitions. |
| 3. Preview | Accessible sample results and quality warnings. |
| 4. Save/use | Authorized saved-report controls; never bypass record permissions. |

**Navigation/internal links:** Reports navigation. Parent: EXP-026. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-002; S-MASTER requirements FR-10-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-003 — Expenses

**URL:** `/dashboard/expenses`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized finance/admin.  
**Objective:** Record costs and controlled supporting evidence.

**Primary action:** Record or review expense.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Expense scope | Authorized costs and accounting context. |
| 2. Find expenses | Date, category, project and currency controls. |
| 3. Records and evidence | Amount, purpose and protected supporting references. |
| 4. Entry/actions | Controlled in-page create/edit with history and review. |

**Navigation/internal links:** Finance navigation. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-003; S-MASTER requirements FR-07-13; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-004 — Capacity Planning

**URL:** `/dashboard/capacity`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized manager.  
**Objective:** Plan approved staff availability and workload.

**Primary action:** Review capacity and assignments.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Planning scope | Period, team and authorized capacity model. |
| 2. Availability | Approved working availability and commitments. |
| 3. Workload | Accessible allocation comparison and conflicts. |
| 4. Adjustments | Review proposed changes and effects; avoid exposing unnecessary personal information. |

**Navigation/internal links:** Projects navigation. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-004; S-MASTER requirements FR-06-12; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-005 — Workflow Execution History

**URL:** `/dashboard/automations/executions`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized automation admin.  
**Objective:** Inspect advanced step histories and safe retry/replay controls.

**Primary action:** Inspect or safely retry execution.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Execution scope | Authorized advanced workflow runs. |
| 2. Find runs | Rule, time and status filters. |
| 3. Run history | Step states, timing and safe diagnostics. |
| 4. Recovery controls | Reviewed safe retry/replay with duplication consequences; basic reliability is not deferred to P3. |

**Navigation/internal links:** Automation navigation. Parent: EXP-027. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-005; S-MASTER requirements FR-08-15; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-006 — Permission Builder

**URL:** `/dashboard/settings/permissions`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Privileged admin.  
**Objective:** Configure advanced permission sets with escalation controls.

**Primary action:** Review or edit permitted roles.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Permission scope | Restricted administrative permission management. |
| 2. Permission workspace | Role/capability and record-scope matrix. |
| 3. Impact review | Explain affected users and escalation/lockout risk. |
| 4. Actions and evidence | Authorized confirm/revoke with audit trail; no self-escalation. |

**Navigation/internal links:** Restricted Settings. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-006; S-MASTER requirements FR-09-14; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-007 — Organizations

**URL:** `/dashboard/organizations`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized platform admin.  
**Objective:** Manage separately approved organization workspaces.

**Primary action:** Open or provision approved organization.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Organization scope | Separately approved workspaces. |
| 2. Find organizations | Name and state filters. |
| 3. Workspace list | Identity and authorized summary only. |
| 4. Actions | Open/manage only within explicit organization boundaries. |

**Navigation/internal links:** Restricted organization navigation. Parent: ADM-001. Children: ADV-008. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-007; S-MASTER requirements FR-09-16, FR-14-15; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-008 — Organization Detail

**URL:** `/dashboard/organizations/[organizationId]`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized platform/organization admin.  
**Objective:** Manage approved organization membership and configuration within explicit boundaries.

**Primary action:** Manage permitted membership/settings.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Organization identity | Current workspace and configuration. |
| 2. Membership | Authorized members and assigned roles. |
| 3. Boundary settings | Approved workspace configuration and data separation. |
| 4. Actions/history | Restricted changes with clear target organization and audit evidence. |

**Navigation/internal links:** Organization list; scoped workspace entry. Parent: ADV-007. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-008; S-MASTER requirements FR-09-16, FR-14-15; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-009 — Security Audit Dashboard

**URL:** `/dashboard/security`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized security admin.  
**Objective:** Review restricted advanced audit/security signals.

**Primary action:** Investigate an authorized event.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Security scope | Restricted advanced security/audit signals. |
| 2. Filters and definitions | Date, event, actor and scope. |
| 3. Signals and evidence | Authorized summaries and relevant safe event detail. |
| 4. Review | Investigation links and verified status; no secrets or blanket security guarantee. |

**Navigation/internal links:** Restricted sidebar. Parent: ADM-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-009; S-MASTER requirements FR-14-14; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-010 — Developer API Access

**URL:** `/dashboard/integrations/api-access`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized integration admin.  
**Objective:** Manage approved external API scopes and credentials.

**Primary action:** Issue, review or revoke scoped access.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. API access scope | Approved external uses and permissions. |
| 2. Credentials | Issued credential metadata and scopes; secret handling follows selected secure workflow. |
| 3. Activity and limits | Authorized usage/status information. |
| 4. Actions | Restricted issue/rotate/revoke with clear consequences and audit. |

**Navigation/internal links:** Integrations navigation. Parent: EXP-029. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-010; S-MASTER requirements FR-11-13, FR-14-13; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### ADV-011 — Integration Marketplace

**URL:** `/dashboard/integrations/marketplace`  
**Phase / source status:** P3 conditional / C  
**Access:** Private staff; additional feature and role gates

**Audience:** Authorized organization/platform admin.  
**Objective:** Manage reviewed integration extensions if the marketplace is justified.

**Primary action:** Review and install approved extension.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Marketplace purpose | Only reviewed approved extension types. |
| 2. Directory | Extension identity, actual compatibility and lifecycle. |
| 3. Extension review | Purpose, permissions, data sharing and support responsibility. |
| 4. Actions/status | Authorized installation/configuration/removal only if marketplace scope is approved. |

**Navigation/internal links:** Integrations navigation. Parent: EXP-029. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP ADV-011; S-MASTER requirements FR-11-14; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-015 — My Subscriptions

**URL:** `/portal/subscriptions`  
**Phase / source status:** P3 conditional / C  
**Access:** Private client; own permitted subscriptions only

**Audience:** Authorized client billing contact.  
**Objective:** List eligible recurring product/service subscriptions.

**Primary action:** Open subscription.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Subscription scope | Own eligible recurring products/services. |
| 2. Find subscriptions | Lifecycle and renewal filters. |
| 3. Subscription list | Plan, period, next charge/date and accurate state. |
| 4. Actions | Open permitted subscription management. |

**Navigation/internal links:** Future portal Billing navigation. Parent: CLI-001. Children: CLI-016. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-015; S-MASTER requirements FR-05-13; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### CLI-016 — Subscription Management

**URL:** `/portal/subscriptions/[subscriptionId]`  
**Phase / source status:** P3 conditional / C  
**Access:** Private client; own permitted subscriptions only

**Audience:** Authorized client billing contact.  
**Objective:** Manage approved subscription changes with clear effective dates and consequences.

**Primary action:** Request permitted plan change or cancellation.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Subscription identity | Own plan, lifecycle and current terms. |
| 2. Charges and dates | Recurring amount, next event and verified billing context. |
| 3. Change review | Supported options, effective dates, fees and cancellation consequences. |
| 4. Confirm/result | Explicit approved action with accurate provider state and history. |

**Navigation/internal links:** Subscription list. Parent: CLI-015. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Source roles above define intended responsibility; final permissions remain D-013. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP CLI-016; S-MASTER requirements FR-05-13, FR-07-07; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-001 — Agency Overview

**URL:** `/ams`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency staff.  
**Objective:** Summarize specialized agency work after separate product/domain approval.

**Primary action:** Open authorized agency work.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Agency scope | Separate approved AMS workspace and authorized domain context. |
| 2. Work summary | Defined renewal, servicing and assigned workflow counts. |
| 3. Priority work | Due tasks, renewal work and authorized exceptions. |
| 4. Navigation | Scoped agency customers, policies, workflows and reports. |

**Navigation/internal links:** AMS sidebar: Overview. Parent: AMS-ROOT. Children: AMS-002, AMS-004, AMS-006, AMS-007, AMS-009, AMS-010, AMS-011, AMS-013, AMS-014, AMS-015. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-001; S-MASTER requirements FR-13-01; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-002 — Agency Customers & Households

**URL:** `/ams/customers`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency staff.  
**Objective:** Find specialized customer and household records.

**Primary action:** Open or create record.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Customer/household scope | Authorized specialized agency records. |
| 2. Find records | Identity and permitted servicing filters. |
| 3. Record list | Customer/household identity and assigned responsibility. |
| 4. Actions | Open record; creation only under approved domain workflow. |

**Navigation/internal links:** AMS sidebar: Customers. Parent: AMS-001. Children: AMS-003. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-002; S-MASTER requirements FR-13-02; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-003 — Agency Customer Detail

**URL:** `/ams/customers/[customerId]`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency staff.  
**Objective:** Manage customer/household relationships and assigned servicing responsibility.

**Primary action:** Review or update permitted record.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Customer identity | Authorized customer/household facts. |
| 2. Relationships | Household/contact links and assigned servicing responsibility. |
| 3. Related work | Permitted policies, documents and service requests. |
| 4. Actions/history | Controlled corrections and servicing actions with record history. |

**Navigation/internal links:** Customer rows. Parent: AMS-002. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-003; S-MASTER requirements FR-13-02, FR-13-09; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-004 — Policies & Renewals

**URL:** `/ams/policies`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agents.  
**Objective:** Find policy records and renewal work.

**Primary action:** Open policy or renewal queue.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Policy scope | Authorized policies and renewal work. |
| 2. Find policies | Customer, carrier, dates and verified state. |
| 3. Policy list | Reference, customer, dates and next renewal work. |
| 4. Actions | Open Policy Detail; no implied carrier authority. |

**Navigation/internal links:** AMS sidebar: Policies & Renewals. Parent: AMS-001. Children: AMS-005. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-004; S-MASTER requirements FR-13-03, FR-13-06; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-005 — Policy Detail

**URL:** `/ams/policies/[policyId]`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agents.  
**Objective:** Track policy state, dates, authorized documents and servicing links.

**Primary action:** Update verified policy/renewal information.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Policy identity | Customer, carrier, reference and verified state. |
| 2. Dates and servicing | Effective/renewal information and assigned work. |
| 3. Documents and links | Protected policy evidence and related requests. |
| 4. Actions/history | Authorized tracking updates; distinguish staff notes from carrier-confirmed changes. |

**Navigation/internal links:** Policy rows; customer links. Parent: AMS-004. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-005; S-MASTER requirements FR-13-03, FR-13-06, FR-13-08; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-006 — Carriers / Companies

**URL:** `/ams/carriers`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency admin.  
**Objective:** Maintain controlled carrier reference information using in-page editor.

**Primary action:** Review or update carrier reference.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Carrier scope | Controlled company/carrier reference information. |
| 2. Find carriers | Name and supported status search. |
| 3. Records and editor | Approved reference fields in-page. |
| 4. Actions | Save reviewed references; no implied carrier integration or appointment. |

**Navigation/internal links:** AMS sidebar: Carriers. Parent: AMS-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-006; S-MASTER requirements FR-13-04; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-007 — Quote & Policy Workflows

**URL:** `/ams/workflows`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agents.  
**Objective:** Track authorized agency workflow records.

**Primary action:** Open workflow.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Workflow scope | Authorized quote/policy tracking. |
| 2. Find workflows | Customer, carrier, owner and state. |
| 3. Workflow queue | Reference, stage and next assigned action. |
| 4. Actions | Open detail; no promise of instant carrier quote or binding. |

**Navigation/internal links:** AMS sidebar: Workflows. Parent: AMS-001. Children: AMS-008. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-007; S-MASTER requirements FR-13-05; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-008 — Agency Workflow Detail

**URL:** `/ams/workflows/[workflowId]`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agents.  
**Objective:** Distinguish internal tracking from carrier-confirmed outcomes.

**Primary action:** Record authorized progress.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Workflow identity | Customer, policy context and responsible person. |
| 2. Progress | Defined internal stages and next work. |
| 3. Evidence | Authorized documents and carrier-confirmed outcomes clearly separated. |
| 4. Actions/history | Reviewed updates and handoffs; internal tracking is not policy issuance. |

**Navigation/internal links:** Workflow rows. Parent: AMS-007. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-008; S-MASTER requirements FR-13-05; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-009 — Commissions

**URL:** `/ams/commissions`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency finance.  
**Objective:** Track expected and received commissions with reconciliation.

**Primary action:** Reconcile source records.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Commission scope | Defined expected and received amounts. |
| 2. Find records | Carrier, policy, dates and currency. |
| 3. Reconciliation | Expected/received differences and evidence. |
| 4. Actions/history | Controlled verified corrections; no unsupported accounting automation. |

**Navigation/internal links:** AMS sidebar: Commissions. Parent: AMS-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-009; S-MASTER requirements FR-13-07; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-010 — Agency Documents

**URL:** `/ams/documents`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency staff.  
**Objective:** Find protected, classified agency documents.

**Primary action:** Access permitted document.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Document scope | Protected classified agency files. |
| 2. Find documents | Permitted customer/policy/type filters. |
| 3. Document records | Classification, ownership and access information. |
| 4. Actions | Authorized view/upload/replace under retention and security rules. |

**Navigation/internal links:** AMS sidebar: Documents. Parent: AMS-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-010; S-MASTER requirements FR-13-08; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-011 — Claims & Service Requests

**URL:** `/ams/service-requests`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agents.  
**Objective:** Organize authorized agency servicing records.

**Primary action:** Open request.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Servicing scope | Authorized claims/service tracking. |
| 2. Find requests | Customer, policy, type, owner and status. |
| 3. Request queue | Topic, next action and verified tracking state. |
| 4. Actions | Open servicing detail; no implied claims decision authority. |

**Navigation/internal links:** AMS sidebar: Service Requests. Parent: AMS-001. Children: AMS-012. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-011; S-MASTER requirements FR-13-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-012 — Agency Service Request Detail

**URL:** `/ams/service-requests/[requestId]`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agents.  
**Objective:** Maintain history while distinguishing carrier decisions from agency tracking.

**Primary action:** Record authorized update.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Request identity | Customer, policy, type and owner. |
| 2. History | Authorized correspondence, dates and actions. |
| 3. Evidence and responsibility | Protected files and carrier decision evidence. |
| 4. Actions | Track/reply/escalate as authorized; never equate internal closure with carrier approval. |

**Navigation/internal links:** Service-request rows. Parent: AMS-011. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-012; S-MASTER requirements FR-13-10; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-013 — Agency Integrations

**URL:** `/ams/integrations`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency integration admin.  
**Objective:** Configure individually authorized carrier adapters.

**Primary action:** Manage approved adapter.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Integration scope | Individually authorized carrier adapters. |
| 2. Connections | Actual provider, permissions and state. |
| 3. Health and mapping | Approved mapping, source of truth and failures. |
| 4. Actions | Restricted connect/revoke/reconcile; no speculative carrier coverage. |

**Navigation/internal links:** Restricted AMS Settings. Parent: AMS-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-013; S-MASTER requirements FR-13-11; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-014 — Agency Audit & Compliance Controls

**URL:** `/ams/audit`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency reviewer.  
**Objective:** Inspect domain-approved audit and control evidence.

**Primary action:** Inspect authorized history.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Control scope | Domain-approved audit and control evidence. |
| 2. Find evidence | Authorized date/actor/record controls. |
| 3. Evidence views | Actual events, control records and limitations. |
| 4. Review actions | Restricted investigation and evidence handling; no automatic compliance certification. |

**Navigation/internal links:** Restricted AMS navigation. Parent: AMS-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-014; S-MASTER requirements FR-13-12; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

#### AMS-015 — Agency Reports

**URL:** `/ams/reports`  
**Phase / source status:** P3 conditional; separate AMS-GATE / C  
**Access:** Private agency; agency and record authorization; tenant isolation only if selected

**Audience:** Authorized agency manager.  
**Objective:** Review defined agency workload and renewal measures.

**Primary action:** Filter approved report.  
**Secondary action/navigation:** Return to parent/work queue; open only authorized linked records; cancel edits where relevant.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Report selection | Defined agency workload and renewal measures. |
| 2. Definitions/filters | Approved period, scope, status and denominators. |
| 3. Results | Accessible table/chart with actual data and update time. |
| 4. Quality and detail | Missing data, source records and authorized follow-up. |

**Navigation/internal links:** AMS sidebar: Reports. Parent: AMS-001. Children: None. Enable only relevant published/authorized destinations.

**UI states and trust:** Inherit the applicable G-STATES family and G-ACCESS. Show authorized identity, real status, reliable saved-state feedback and relevant history; never substitute a zero/empty state for a load failure. Agency authorization and AMS-GATE apply. Mobile priority: identity, status and main task, then details; meaningful field labels and filters remain available.

**Indexing:** Noindex; exclude from XML sitemap. **Traceability:** S-SITEMAP AMS-015; S-MASTER requirements FR-13-13; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

### 10.4 Cross-phase Product Terms — one record

#### PRD-02 — Product Terms

**URL:** `/products/[slug]/terms`  
**Phase / source status:** P2/P3 follows approved product release / C  
**Access:** Public

**Audience:** Product users.  
**Objective:** Explain product-specific terms only when separately needed.

**Primary action:** Read terms.  
**Secondary action/navigation:** Relevant offer/detail or Contact for clarification; Consultation where it supports this task.

**High-level planned sections/UI regions:** 4. Detailed workflow/feature design remains under the source phase and decision gates.

| Order / region | High-level content, components, purpose and action |
| --- | --- |
| 1. Title and effective date | Identify the actual product and applicable approved terms version. |
| 2. Contents | Link sections of a substantial product-specific document. |
| 3. Terms body | Reflect actual access/license, billing, cancellation, data, support and responsibilities; final substance requires approval. |
| 4. Questions and related policies | Product contact, Privacy and applicable commercial policies. |

**Page-specific content and decisions:** Separate P2/P3 allocation follows the actual product release. Do not double-count it in both phases.

**Navigation/internal links:** Product page; relevant acceptance flows. Parent: PRD-01. Children: None. Enable only relevant published/authorized destinations.

**Trust/responsive:** G-TRUST and G-A11Y; put identity, actual availability and useful next action first. Stack capabilities/comparisons; evidence remains conditional. **Search intent:** Product policy clarification.

**Indexing:** Index when approved and published. **Traceability:** S-SITEMAP PRD-02; S-MASTER requirements EXT-006, BR-006, BR-007; shared cross-cutting controls in §2 and §8.

**Step 4 high-level visual binding:** Use the matching future layout pattern in §9.36 and the ordered region table above. Desktop may pair related content inside a region; tablet stacks supporting panels; mobile uses one labeled column in the same order. Retain source CTA/permission/publication gates; meaningful content and actions never depend on animation. Detailed interactions remain future-phase work.

## 11. Conversion and editorial workflows

### 11.1 Source-wide rules retained

The following G-rules preserve all original conversion, evidence, commercial, SEO, private-access and state requirements. Numbered references in this preserved block point to S-SECTIONS/S-SITEMAP as indicated there. The closing remarks that design must be done “later” are historical: this file provides that Step 4 design. They do not override the current tokens or completion status.


#### Source shared rule 2.1 Public navigation and editorial rules

Preserve Step 2 navigation and routes. Keep Get a Quote as the primary commercial action. Contact remains visible in the desktop header, mobile menu, footer and relevant contextual links. Consultation is a distinct route for discovery. The header logo links Home; footer links support company, service discovery, contact and actual policies. Search remains discoverable through the approved navigation. Show only published, enabled destinations; do not expose inactive P2/P3 menus at P1 launch.

Keep founder/team information within About, testimonials within relevant public pages, technologies within relevant capability/work content, and short FAQs in the FAQ hub and appropriate offer pages. No extra founder, team, reviews, technology, country, package-tier or category-filter routes are introduced. Industry/product routes retain their source gates. Use breadcrumbs below the shared header where hierarchy helps, particularly category, service, solution and content-detail pages.

Write for international B2B decision-makers: state the business need before technical detail, use specific deliverables and plain language, explain acronyms when useful, and distinguish desired benefits from promised results. One page H1 describes its subject; ordered sections use H2 and subordinate content uses H3. The visible headings can be refined in copywriting without changing the architecture or approved offer names.

#### Source shared rule 2.2 Evidence and trust — G-TRUST

Use genuine company/founder/team information, clear scope and process, accurate starting prices, inspectable work, real attributed feedback and honest policies. Client names/logos/screenshots/quotes require permission and substantiation. Label Client Work, ARADUN Internal Product and Concept/Demo prominently. Personal or previous-employer experience must be accurately attributed, not presented as an ARADUN contract. Metrics need context, source, period and actual contribution; factual delivery outcomes can replace absent performance metrics.

Do not invent clients, awards, offices, reviews, projects, certifications, results, response times or support coverage. Do not imply technology-logo partnership. Security/compliance service content describes authorized work and qualified capability without guaranteeing protection or certification. Genuine quote source/permission is retained privately; display only approved attribution.

When evidence is missing, keep the section blueprint, record content needed and omit that display slot until ready. Do not replace a nonexistent case study with an unlabeled demo. A demo is evidence of that demonstrated work only. Testimonials remain P1 functionality even when none can yet be published. Avoid intrusive sales CTAs on legal, authentication, confirmation and error pages.

#### Source shared rule 2.3 Three conversion paths — G-CONVERSION

| Path | How visitors arrive | Required information | Optional/context | Result and onward workflow |
| --- | --- | --- | --- | --- |
| Quote — PUB-013 | Global CTA; offer/tier cards; Pricing; work/article contextual actions. | Service/solution or Custom/Not sure; brief description; name; email; applicable privacy acknowledgement. | Multi-service/package selections preserved and editable; optional budget, timeline, company and website. | Four steps: Service → Project → Contact → Review. Confirm only after successful save; show unique reference and review expectations. Staff handles inquiry → opportunity/tasks as appropriate. |
| Consultation — PUB-014 | Secondary commercial CTAs; Contact; footer/mobile; unsure/custom paths. | Name, email, meeting topic; preferred time/timezone in manual mode, available appointment slot in approved live mode. | Only preparation information needed; no mandatory project budget/account. | P1 manual baseline: request received, pending staff confirmation. Live Google Calendar mode requires D-003 resolution, valid provider availability and actual booking confirmation. |
| Contact — PUB-012 | Visible header/mobile/footer; FAQ/help; general and returning-client inquiries. | Name, email, subject, message. | Offer/page context only when useful and transparent; no compulsory phone/company. | Save general inquiry; accurate confirmation; staff review/routing. Do not force a quote or meeting. |

Use one public quote journey for all services/solutions, with a custom/unsure route and editable incoming context. Do not blindly total public prices; staff review overlap, dependencies and scope. Preserve valid chosen identities and the submitted offer/price context. Starting-price and availability decisions are authoritative business data, not trusted browser-supplied amounts. This is a UX requirement, not a database design.

Forms use visible labels, appropriate field types, clear optional markers, useful inline help and error summary with focus. Preserve valid input when validation or a transient failure occurs. Provide explicit Back/Continue and a review step for quotes; do not require login. Allow ordinary personal or business email addresses. A privacy acknowledgement is distinct from optional marketing consent; exact wording follows actual practices and D-014. Apply accessible spam protection without silently discarding legitimate inquiries.

Show submitting state and prevent accidental repeated sends. A durable saved inquiry is successful even if notification delivery is delayed; tell the user accurately and do not encourage a duplicate submission. Unsaved failures offer safe retry with preserved input. Staff notification and customer confirmation email depend on working mail and actual saved state. Direct access to the confirmation URL is not proof of conversion. Reference numbers do not expose private records.

**Google Calendar:** Preserve the requested direction, but D-003 remains unresolved in the authoritative files. Specify both modes on the same Consultation page. Live mode needs clear timezone, selectable actual slots, unavailable-slot recovery, loading/error state, authoritative appointment confirmation and actual reschedule/cancel instructions. External scheduling is not automatically a CRM inquiry; linkage and provider/account capability require a decision. The internal Appointments page remains EXP-031/P2 baseline until explicitly promoted. A manual request must not say “Your meeting is booked.”

**Measurement:** Distinguish CTA click, form start, successful saved inquiry, consultation request and verified booking. Capture approved inquiry-level source/landing/referrer/UTM context in P1; advanced attribution reports remain future scope. GA4/Search Console are retained source requirements; optional tools/events remain D-021. Never send form messages, email addresses, protected record details or recovery tokens into analytics. A thank-you page view alone is not a unique conversion.

#### Source shared rule 2.4 Commercial presentation — G-PRICING

Preserve existing source values in USD. Use “From” and an explicit approved unit/period; custom means a reviewed scope, not a missing zero-dollar price. Two-price service entries preserve Starter / Professional source order. Three-price recurring entries retain source order without inventing tier names/limits. Never infer a per-project period where the master marks it ambiguous. D-002 proposed increases are not applied. Monthly Video Editing billing-period clarification remains D-004.

Each offer comparison should contain, when confirmed: intended fit, deliverables/limits, revisions, client inputs, timeline dependencies, setup and recurring fees, third-party costs, exclusions, support and custom-scope option. Do not fill missing package cells with invented checkmarks or promise timelines. Hosting, licenses, advertising spend, API usage, subscriptions, applicable taxes and travel/production costs are distinct when relevant. Display selected-offer context consistently across Home, overview, detail, Pricing and Quote.

Existing solution prices, copied from S-MASTER §5:

| ID | Solution | Starter | Professional | Enterprise |
|---|---|---|---|---|
| SOL-001 | Digital Presence | From $899/project | From $2,499/project | Custom |
| SOL-002 | Business Automation | From $699/project | From $2,499/project | Custom |
| SOL-003 | Business Growth | From $399/month | From $999/month | Custom |
| SOL-004 | Cloud & Technology | From $499/project | From $1,999/project | Custom |
| SOL-005 | Complete Digital Business | Custom | Custom | Custom |

Source payment guidance: Starter 50% deposit/50% before handoff; Professional 40%/30%/30% at agreed milestones; Enterprise custom; retainers monthly in advance, generally 30-day cancellation notice subject to signed terms, with no unused-hour rollover unless agreed. These are planning policies, not finalized universal contract terms. No P1 public checkout, gateway, subscription purchase or binding automatic quote is introduced. Won does not mean paid.

#### Source shared rule 2.5 Accessibility and responsive priorities — G-A11Y

Use semantic landmarks, logical headings, keyboard-operable navigation/disclosures/dialogs, visible focus, descriptive links and meaningful image alternatives. Show labels and instructions persistently. Announce status and associate errors with fields. Never rely on color, hover, drag, animation or icons alone. Respect reduced-motion preferences. Readable tables retain header relationships; responsive alternatives preserve every important label/value pair.

On mobile, place page identity/value and the next action before supporting imagery; present a single understandable column for forms and stacked cards/comparisons. Keep currency, unit, price conditions and exclusions together. Filters, contents and menus must work by touch and keyboard. Any sticky action must not cover content, focus, errors or consent controls. Do not hide meaningful scope, costs or limitations on small screens.

On tablet, use additional width for short comparable cards or a restrained supporting panel only when reading order stays logical. On desktop, use width to compare choices and inspect records, not to stretch prose. Shared semantic order remains sensible at all sizes. Avoid swipe-only discovery, auto-rotating proof, excessive decorative media and horizontal page overflow. Later Step 4 must verify actual layouts; this document does not select breakpoints, colors or fonts.

#### Source shared rule 2.6 SEO and content uniqueness — G-SEO

Follow S-SITEMAP §9. Each indexable published page gets an accurate unique title/description, appropriate H1, substantive content, descriptive internal links and clean canonical. Categories address discovery/comparison; services address a specific need and scope; solutions address a coordinated business problem. Unique service content includes its fit, scope, process, dependencies and FAQ, not just a changed title.

Keep SVC-009 cross-listing at one canonical URL. Do not canonicalize all service pages to categories. Index only approved substantive public content; include only canonical indexable published URLs in the XML sitemap. Public search, quote utility variants, confirmation, authentication, staff/client/AMS pages and private previews are noindex and excluded. Robots blocking is neither access control nor a substitute for a usable noindex directive. Authenticated content remains protected independently of search directives.

Tracking-only copies canonicalize to the clean page. Do not generate unlimited indexable filter/search/selection URLs. Meaningful pagination needs its own considered treatment rather than false first-page canonicals. FAQ anchors are not new pages; detailed help and Insights must not duplicate the same article. Truthful Organization, Service, Article and BreadcrumbList data may describe real content; do not add fabricated ratings, certifications or guaranteed rich-result claims.

Publish/unpublish must keep route access, public search, links, sitemap and caches consistent. Missing/unpublished content has a safe not-found state, not an empty successful page. Removed content gets an appropriate decision based on actual replacements. Future languages/currencies/personalization enhance existing templates unless separately approved routes are required; no new locale URL scheme is invented here.

#### Source shared rule 2.7 Private navigation, roles and workflow — G-ACCESS

All staff/client/AMS pages require the appropriate identity plus server-side role and record authorization for reading and actions. A sidebar, hidden button or noindex is not enforcement. Private preview/files remain protected even with a guessed URL; public asset links must not bypass private-file access. Use the correct sign-in boundary and safe local return destination. Signed-in but unauthorized users receive a safe denial without sensitive record disclosure.

P1 roles follow S-MASTER §7: Admin/owner handles approved administration and access; Sales works permitted inquiries/opportunities/customers/tasks; Editor handles approved content/SEO without default sales/finance access; Manager exists only if justified. Exact assignments/visibility/publishing permissions remain D-013. My Account never grants its user extra roles. Provisioning, MFA and recovery depend on provider/policy; no public staff registration.

P1 sales: inquiry/contact context → staff qualification → linked opportunity → fixed pipeline → follow-up tasks → reviewed customer conversion. Preserve New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost. Spam, duplicate and no-response are secondary classifications. A customer can have several inquiries/opportunities; preserve history and review merging/corrections (D-011). Estimated opportunity value, invoiced amount and verified received funds are distinct.

P1 content: permitted module → draft/edit → private preview → authorized publish/unpublish → consistent public visibility. Article publication is P1; general page/service editing and full media library remain P2. FAQ authoring UI, staff access UI, audit viewer and manual tracker remain conditional while their underlying required capabilities must be met appropriately. No general page builder is inferred from the SEO editor.

Future client users see only permitted own projects/documents/invoices/support; project contractors do not automatically see commercial data; finance actions require actual finance permission. Organization/tenant separation is conditional on approved multi-organization scope. AMS stays a separate product/domain gate, not an automatic extension of ARADUN's CRM.

#### Source shared rule 2.8 Shared states — G-STATES

Every applicable page/template inherits this state contract; individual page notes identify important exceptions.

| State family | Empty / initial | Loading | Error / denial / conflict | Success |
| --- | --- | --- | --- | --- |
| Public collections/search | Explain no published content honestly; no-match offers clear filters and alternate discovery. | Stable loading feedback preserving query/filter context. | Retry or use another path; no private/draft leakage. | Readable results, count only if accurate, and usable pagination. |
| Public forms | Ready fields with short instructions; no forced optional input. | Submitting/booking state; prevent duplicate action. | Specific field errors, preserved input, safe retry; unknown result not falsely successful. | Actual saved reference or provider-confirmed appointment and clear next step. |
| Authentication | Sign-in/recovery/challenge initial state without records. | Neutral progress and bounded retries. | Generic identity-safe errors; expired/invalid token, challenge and session handling. | Valid session or neutral recovery acknowledgement; appropriate next destination. |
| Private overview | Explain how authorized records arrive; never fabricate totals. | Panel-level loading with useful existing data retained. | Retry failed panel; inaccessible records hidden; failure not shown as zero. | Current authorized summaries and next actions. |
| Private list | No records differs from no matches; permitted create/help or reset filters. | Preserve filters, columns and context with progress. | Retry; safe denied/not-found state; no false empty table. | Updated row/list and brief action feedback. |
| Private detail/form/editor | Blank/new state, absent optional fields and no activity distinguished. | Load identity/context safely; disable dependent actions. | Field errors, save/publish failure, stale update/conflict, unsaved changes and permission loss handled explicitly. | Clear saved/draft/published/updated state, relevant date and action result. |
| Private preview | Unavailable draft offers safe return to editor. | Layout-aware loading without exposing content publicly. | Safe missing/unauthorized state and return path. | Rendered draft with private notice; no public publication implication. |
| Audit/report/payment | No qualifying events versus not connected/not reconciled distinguished. | Retain selected scope and last valid state where appropriate. | Source failure/partial data/currency mismatch shown; unsafe duplicate financial action prevented. | Verified result and history; logging/receipt not implied from a click. |

Exact text follows the page task: “Draft saved” is different from “Published”; “Request received” differs from “Meeting confirmed”; “Payment pending” differs from “Paid.” Role restriction, expired session, stale data and unavailable dependent records need safe recovery. Changes with consequential effects use a clear target and explicit confirmation; ordinary browsing and reversible editing should remain efficient.


### 11.2 Journey-by-journey interaction handoff

| Journey | Discover / evaluate | Decision and action | Confirmation and follow-through | Design acceptance |
|---|---|---|---|---|
| Service discovery | Home or Services → category → exact service; categories and cross-listed entries use source routes | Understand fit, scope, source price/period and availability; contextual Get a Quote | Quote receives valid editable service/package context; staff reviews overlap and dependencies | Every one of the 57 identities is discoverable; no hover-only link or missing mobile price condition |
| Solution discovery | Home/Solutions → one of five problem-led solutions | Scope and three-tier source package information; custom engagement option | One unified quote flow, not a separate form per solution | No invented bundle, renamed solution or hidden Enterprise/custom path |
| Package comparison | Pricing or offer detail → labeled comparison | Confirm “From”, USD, billing unit, scope caveats and third-party costs | Staff review produces a tailored quote later | No sum of starting prices presented as a binding quote; D-002 increases unapplied |
| Quote | Incoming context, custom or Not sure → Service step | Project → Contact → Review, with visible Back/Continue and editable summary | Durable save → unique reference → customer acknowledgement and authorized staff notification → qualification | No login; optional budget/timeline remain optional; saved request succeeds even if email is delayed |
| Consultation | Unsure/custom, Contact, secondary CTA → request page | Manual name/email/topic/preferred time/timezone; live slots only after D-003 | Manual: request received, pending staff confirmation. Live: actual authoritative confirmed booking or accurate failure | Browser timezone shown and editable; no “Booked” from form submission alone |
| General contact | Header/mobile/footer/help → Contact | Name/email/subject/message; verified alternate channel when available | Saved inquiry → accurate confirmation → staff routing | No compulsory business email, phone, company, budget, account or meeting |
| Content discovery | Insights/search/related resource → actual article/help | Read comfortably, follow substantive related links | Contextual offer/quote only where useful; no forced lead gate | Actual publication/author/date; empty/search-error states distinct; private drafts excluded |
| Trust evaluation | About, relevant proof, process, prices, policies | Inspect genuine work/classification and scope; contact for uncertainties | Useful next action and honest expectations | No fictional proof, invented offices/awards/statistics or guarantee of outcomes |

**CTA hierarchy:** One visually dominant primary action per local decision region. Get a Quote remains the global primary commercial CTA. Explore Services, Explore Solution, Read Article, View Project and contextual record actions serve their actual tasks. Consultation remains a secondary discovery path; Contact remains visible. Repetition of Quote in hero and final region is intentional; every card need not contain two competing solid buttons. Avoid a sticky mobile sales bar by default; add only if actual viewport/focus testing proves it useful and non-obstructive.

**Quote step contracts:** Step 1 groups services by the eight source categories, shows selected items and permits Custom/Not sure; cross-listed SVC-009 is selected once. Step 2 collects a short project brief with optional budget, timeline, company/website context only as source allows. Step 3 collects name/email and actual required privacy acknowledgement; marketing opt-in is separate and optional if ever selected. Step 4 repeats all material selections/answers, starting-price qualifiers and contact data with Edit links that preserve other answers. Required fields validate before moving forward; backtracking does not delete values. The final action is “Send quote request”, not Buy/Pay/Confirm price. Maintain a clear submitting label, safe retry, final saved-reference state and no false duplicate success. Do not persist sensitive form content in analytics or publicly shareable query strings. Any client-side draft storage requires a privacy decision; in-memory preservation alone is the baseline.

**Consultation mode contracts:** In manual mode, use “Request a consultation” and explain that preferred time is a request. If an external booking page is later selected, identify the handoff and whether a separate inquiry is saved; do not claim integration that does not exist. If integrated scheduling is approved, show loading, unavailable dates, actual available slots, timezone, selected-slot review, conflict recovery, authoritative booking confirmation and supported reschedule/cancel guidance. Do not manufacture a successful calendar event after a local UI selection. Both modes use PUB-014; no new P1 Appointments page is inferred.

**Confirmation semantics:** A saved inquiry is the conversion event. Route visits, CTA clicks, validation attempts and email delivery are separate events. A directly opened confirmation route without valid context offers a neutral explanation/return path rather than inventing a reference. References do not grant access to private messages. Successful user confirmation survives a staff email delivery problem; operational retry does not cause another inquiry.

### 11.3 Phase 1 sales and content state transitions

| Workflow | Visible states and safe actions | Business boundary |
|---|---|---|
| Inquiry handling | Received/saved context; assigned owner; staff classification; notes/activity; linked contact/opportunity/task | Do not silently map every inquiry status to an opportunity stage; D-011 settles exact relationship |
| Sales pipeline | New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost; clear owner and estimated amount/currency | Spam/duplicate/no-response are secondary classifications; fixed pipeline; no configurable stage builder required |
| Follow-up task | Create in-page → assigned/due → overdue when appropriate → completed; permit safe corrections with history | Dashboard reminders only; no unapproved automated outbound campaign |
| Customer conversion | Staff reviews identity and conversion → confirms → linked customer context with history | Avoid duplicate identities; “customer” and “Won” do not mean paid; correction/merge behavior remains D-011 |
| Article | New draft → saved draft → protected preview → authorized publication → published visibility; unpublish explicitly | General CMS and scheduled publication not inferred; U-03 defines edits to live content before implementation |
| Testimonial | Private pending record → verified attribution/permission/context → authorized publication or hide | Permission evidence stays private; no public review submission/verification platform |
| SEO | Existing authorized page → metadata validation/preview → save → consistent published metadata | No page builder or pricing editor; private records cannot become indexable |
| FAQ/help | Approved authoring method → useful structured answer → preview/publish/hide if conditional UI selected | Public capability required; dedicated editor remains conditional |
| Manual finance | Record actual external evidence → verify reference/amount/currency/status → save/correct with history | Expected/invoiced/received distinct; no P1 checkout, gateway or invoice suite |

Staff navigation follows authorized scope; a sales record link never grants permission itself. Deactivation, publish/unpublish and other consequential actions identify the exact target and effect. Routine reversible field edits should not produce repetitive confirmation dialogs. Do not introduce bulk actions, exports, autonomous AI decisions or assignment automations simply because a table could support them.

### 11.4 Content readiness and publication safeguards

Each launch page needs its exact source name/route, useful original copy, confirmed offer readiness, verified commercial units, permitted assets, accessible media descriptions, contextual links, accurate metadata and tested next action. Keep a private content checklist keyed by existing page ID; this is a production handoff artifact, not a new dashboard module. Do not require artificial case-study/testimonial counts to fill the visual design.

Client work, internal products and labeled demos remain distinct. Editorial templates can use meaningful diagrams, software screens or a clearly identified demonstration when true; a polished concept cannot imply a client contract or proven commercial outcome. No fabricated team, response guarantee, 24/7 coverage, certification, office, review, award, historical date or statistic. Verify company/contact/policy facts and mailbox operations before launch. The selected hello@aradun.com identity remains a planning value until operationally tested.

Publish/unpublish must coordinate readable route state, search, sitemap, internal links, metadata and cache visibility. Keep one canonical SVC-009 page across both category entries. Case/article/help detail templates do not imply approved content instance titles or counts. Optional evidence slots remain specified even when omitted from the live page for lack of genuine content.

## 12. Accessibility and inclusive interaction

### 12.1 Target and interpretation

Target **WCAG 2.2 AA-oriented implementation and testing** as required by S-MASTER. This Markdown specification and a high automated score do not establish conformance. The plan also uses a project-default 44×44px target for comfortable controls; WCAG 2.2 AA's target-size minimum is 24×24 CSS pixels subject to specified exceptions, not a universal 44px requirement (W3). Text contrast targets are 4.5:1 for ordinary text and 3:1 for qualifying large text; do not round a failing value into a pass (W2). Check required control/focus boundaries against adjacent colors; decorative pale rules may be lower contrast when they carry no necessary information. Relevant normative criteria and exceptions must be evaluated in context (W1).

### 12.2 Page and interaction requirements

| Area | Design contract | Later verification |
|---|---|---|
| Structure | Skip to main; semantic header/nav/main/footer, one meaningful page H1, logical H2/H3 structure; unique page title | Navigate landmarks/headings with a screen reader; confirm no repeated unlabeled landmark ambiguity |
| Reading order | Meaningful DOM order follows source sections; CSS asymmetry never changes understanding or keyboard sequence | Keyboard traversal at each breakpoint and CSS-off reading check |
| Keyboard | Every action reachable and operable; no hover-only discovery, drag-only stage change or keyboard trap | Tab/Shift+Tab, Enter/Space, Escape and appropriate component keys across all three themes |
| Focus | Immediate visible 2px outline with separation, selected token suited to actual adjacent background; never removed without equivalent indicator | Inspect every control, inverse surface and dialog; focused element not hidden behind sticky header/consent/toast |
| Links/buttons | Link for navigation, button for action; accessible name states purpose; repeated “Learn more” disambiguated | Name/role/value review; no nested interactive card/link/button traps |
| Menus | Trigger exposes expanded state; click/touch/keyboard support; useful focus management and Escape close; desktop disclosure nav need not imitate application menu semantics | Open/close by keyboard and touch; resize across header breakpoint without lost focus |
| Mobile drawer/dialog | Clear title and close; modal focus contained; background inert as appropriate; return focus to origin; scroll inside tall panel without clipping | 320px width, landscape, on-screen keyboard and zoom; safe navigation/unsaved-change handling |
| Forms | Persistent visible labels, required/optional markings, matching instruction/error associations, correct input purpose/autocomplete, no placeholder-only labels | Screen-reader field navigation and autofill; optional budget/company/phone not made mandatory |
| Validation | Plain field error plus focusable summary; preserve safe input; error not only red; new step focuses heading after render | Invalid submit, server rejection, network failure, rapid double-click and retry |
| Status | Polite short result updates; urgent alerts only when needed; pending state has text; avoid reading whole page on each update | Result count, step change, save and task completion announcement once; no repeated toast chatter |
| Authentication | Allow password managers, paste, OTP autofill and supported accessible challenge alternatives | Provider flow/recovery/session expiration; no unnecessary memory puzzle added by ARADUN |
| Images/icons | Meaningful alt for information; empty alt/decorative hiding for sculpture and repeated ornament; text equivalent for diagrams | Screen reader does not announce decorative logo twice or rely on tiny image text |
| Media | Captions/transcript and meaningful alternative for informational media; no autoplay sound | Verify actual delivered assets, player keyboard operation and pause controls |
| Tables | Caption/context, associated headers, meaningful cells, labeled actions; mobile alternative preserves information | Read rows/columns; local horizontal scroll keyboard-accessible where genuinely necessary |
| Accordions | Button heading, expanded state and controlled answer; focus remains stable; opening doesn't erase another answer unexpectedly | Keyboard toggle, deep link/anchor use, reduced-motion behavior |
| Color/status | Label/icon plus color for task, publication, lead and finance status; underline or equivalent distinguishable links | All three themes, grayscale/forced-colors and simulated color-vision review |
| Zoom/reflow | Text zoom 200%; reflow at 320 CSS px and high zoom; no whole-page horizontal scrolling except genuinely two-dimensional content | Long service names, 400% zoom on desktop-sized viewport, no clipping of fields/actions |
| Text spacing | User text-spacing overrides cannot truncate labels/content or overlap controls | Check WCAG text-spacing adjustments with long headings and nav labels |
| Motion | Respect reduced motion on initial load and setting changes; disable parallax/continuous/decorative movement; all meaning remains in static layout | OS reduced-motion on/off, runtime change, keyboard focus and animation-load failure |
| Timing/interruption | No artificial reading timers or auto-closing essential errors; warn of provider/session expiration when supported and preserve safe work | Session timeout, interrupted save, slow connection and returning after idle |
| Consent/third parties | Actual practices determine controls; any selected embed or consent dialog has equivalent keyboard/focus behavior | Test external component, not just ARADUN wrapper; no inaccessible blocking wall |

A 44px visual button with a much smaller actual hitbox fails the project intent; a 20px glyph can have a 44px hit area. Dense desktop-only controls may use smaller visual sizes while retaining usable hit areas and applicable target-spacing rules. Inline prose links follow text layout and the standard's applicable exceptions. Do not hide substantive limitations in tooltips. Native browser zoom must remain enabled.

### 12.3 Reduced-motion and failure alternatives

All content is visible in the initial nonanimated document. Enhancement code may animate already-present regions only without risking permanent invisibility. Reduced motion removes translational entrances, scale, parallax, scroll-scrubbed timelines, looping backgrounds and long staggers; state changes happen immediately or with a brief optional nonessential fade. Loading text remains even when the spinner stops. FAQ/menu/dialog/step interactions preserve focus and state semantics with animation disabled. A static diagram replaces a process animation; a still image replaces layered hero choreography. Theme switching does not restart the hero or flash the whole page.

Support keyboard-only, touch-only, screen-reader, zoom, reduced-motion and forced-color use. Do not infer disability from a theme selection or claim muted blue prevents eye strain. User preference is respected without changing content, actions or access.

### 12.4 Required state matrix

| Context | Empty / initial | Loading | Error / denied / conflict | Success |
|---|---|---|---|---|
| Public list/search | No published items vs no matches; reset/query help | Query/controls remain, dimensions reserved | Retry and known scope; don't label source failure “0 results” | Accurate result count, usable links and pagination |
| Quote/contact/consultation | Useful labeled form and explanation | Pending label, accidental repeat guarded | Inline errors/summary; input preserved; safe retry; slot conflict only in live mode | Saved reference or actual booking state, accurate next steps |
| Record list | No saved records vs filtered empty | Preserve filters; no private-data flash | Safe denied/not-found, retry, no false zero | Updated row/filter context and concise announcement |
| Detail/edit | Missing optional field shown as absent | Identity/context safely loaded | Validation, dirty navigation, stale save, lost permission and expired session handled | Explicit saved/update/completed state and relevant time |
| CMS publication | Draft/unsaved/public state distinct | Saving/publishing status | Field/policy/permission error; don't overwrite concurrent edit | Draft saved, Published or Unpublished accurately |
| Private preview | Missing draft safe return | Reserved article layout | Unauthorized/missing content not disclosed | Protected rendered draft, never public success |
| Auth | Supported task and neutral help | Provider progress | Invalid/expired challenge, throttling, session/provider recovery | Safe authorized navigation; recovery acknowledges request neutrally |
| Audit/finance/report | No qualifying data vs not connected/reconciled | Preserve selected scope, label stale data | Partial source failure, mixed currency, duplicate or permission problem explicit | Verified record/history, not assumed payment or completeness |

## 13. Performance, frontend guidance and verification

### 13.1 Measurable targets and provisional budgets

| Measure | Target / interpretation | Verification stage |
|---|---|---|
| Field LCP | ≤2.5 seconds at the 75th percentile | Real representative mobile/desktop field data after deployment; lab proxy before launch |
| Field INP | ≤200ms at the 75th percentile | Field interactions; use representative local interaction traces before traffic exists |
| Field CLS | ≤0.1 at the 75th percentile | Initial load plus interaction/navigation, image/font/form states |
| Lighthouse Performance | 90+ aspirational on agreed representative mobile configuration | Repeatable production-build lab runs; report environment and median, not cherry-picked score |
| Lighthouse Accessibility | 95+ aspirational automated check | Manual WCAG-oriented review still required; score is not conformance |
| Layout | No unintended page overflow at 320, 375/390, 768, 1024, 1280 and 1440px | All three themes, long labels, realistic data, zoom and text-spacing changes |
| Hero media budget | Working target ≤250KB compact image and ≤450KB large image transfer | Provisional R4 budget; optimize format/crop without breaking legibility; confirm with actual asset |
| Font budget | Working target ≤150KB total initial font transfer | Provisional; use only needed Latin/subset/weights with actual file checks |
| Motion overhead | Working target ≤60KB compressed incremental public motion JS on routes that use it; zero GSAP payload on routes without GSAP effects | Provisional route-level budget; inspect real build, reduce effects or subset rather than promising library bundle size |
| Initial marketing transfer | Working target ≤1MB compressed route transfer before below-fold lazy media and optional third-party tooling | Provisional; document fonts/images/framework/analytics separately; includes actual shared dependencies |
| Dashboard workload | Bounded/paginated data, no all-record browser render or animation; responsive input and panel-level loading | Test a realistic populated list and slow/failing source; dataset/page size chosen later |

The field goals come from S-MASTER and the Step 4 brief. Byte budgets are **new provisional engineering guardrails**, not historical Chat 4 approvals, provider promises or measured outcomes. D-020/U4-06 settle final operating and route budgets after asset/dependency choices. Do not weaken field goals merely to retain optional animation. If budgets conflict, remove decorative effects and optimize assets before adding infrastructure.

### 13.2 Frontend design implementation guidance — no code

Preserve Next.js App Router, TypeScript, Tailwind, selective shadcn/ui, MongoDB and Mongoose through the separate Express backend within one repository. This design document does not select a database schema, route-handler contract, folder tree, provider or deployment platform. Server/client boundaries follow the smallest necessary interactive surface; static marketing content need not become client-rendered because one menu or hero is animated (N1).

Use the semantic design tokens as the one theme source. Components receive content and state, not duplicated terracotta/slate/vivid-blue page markup. Keep catalog identity/pricing/availability authoritative and centrally maintained; selected service/package context remains editable but never trusted as authoritative price data. Use shared source recipes and page-specific content, not 57 independent layouts. No database or persistence design is supplied here.

shadcn/ui is appropriate selectively for accessible foundational controls such as Button, Input, Dialog, Sheet, Accordion, Select, DropdownMenu, Tabs, Checkbox, Alert and Table where their behavior is needed. Custom composition supplies editorial heroes, ruled grids, package comparison, proof, pipeline summaries and record panels. Every chosen primitive still needs keyboard, contrast, content and responsive review after styling. Do not install a large component suite merely because this inventory names many patterns. Do not replace the approved article/SEO/testimonial scope with a general page builder.

Prefer semantic HTML and native behavior where practical. Forms, navigation and public reading should fail usefully if animation is unavailable; critical submit/access rules remain authoritative. Image assets have responsive sizes and intrinsic dimensions; below-fold imagery lazy-loads, while the likely LCP asset is deliberately prioritized rather than accidentally lazy-loaded. Avoid sending desktop-sized imagery to compact screens, transparent PNG artwork when a smaller appropriate format suffices, or expensive filters over large scrolling surfaces. Do not preload every image/font.

Keep font weights limited, use sensible fallbacks with similar metrics and permit prompt text display. Reserve image/card/form geometry to prevent layout shifts. Avoid delayed typography changes or per-character spans that impair reading. Respect external asset rights. Do not add WebGL, canvas particle engines, mandatory video hero, smooth-scroll hijacking or paid animation plugins without an actual approved requirement.

Motion and GSAP ownership/cleanup follow §7 and official guidance M1/M2/G1/G2. Inspect route bundles to verify lazy imports actually isolate animation. A shared import can defeat intended code splitting. Do not use Motion for a color hover or load GSAP to animate an ordinary button. Reduced motion is a functional branch, not merely a slower timeline. Unmount, route change, breakpoint change, hidden tab and theme-switch behavior must be verified for listener/timer/ScrollTrigger cleanup and duplicated timelines. Keep static fallback visible if animation code fails.

Measure real data-loading and interaction costs separately from animation. Paginate operational lists, avoid client loading of all private records, use task-specific skeletons sparingly, and retain authorized prior state during refresh only when safe. Error messages must not disclose secrets, personal details or provider diagnostics. No hardcoded fake dashboard totals are allowed outside visibly labeled preview fixtures.

### 13.3 Later visual and interaction QA checklist

These are future acceptance checks, not tests performed on a website during this document task.

- [ ] Compare representative Home, category, service, solution, Pricing, work/article, form and dashboard pages with the approved editorial references; preserve hierarchy and restrained accent use.
- [ ] Check all three themes on every shared component and a representative instance of every template; neutral colors, layout and content identical; logo switches without size shift or mismatched halo.
- [ ] Theme default, choice persistence, blocked storage, first paint, refresh and navigation behave consistently; theme change preserves form data, focus and scroll.
- [ ] Verify header fit, Services menu, Solutions disclosure, Contact, search, theme control and Quote at all widths; no invisible focus or inaccessible hover-only menu.
- [ ] Test full catalog identity and internal links, one canonical SVC-009, exact supplied URLs, future/conditional nav gating, useful breadcrumbs and safe not-found behavior.
- [ ] Check typography, intentional hero line breaks, long service names, paragraph measure, line height, uniform spacing, borders, selected states and button hierarchy.
- [ ] Check image crop/dimensions/alt/captions, genuine proof classifications, permitted attribution and all prototype placeholders before publication.
- [ ] Check all quote paths including multiple offers, cross-list deduplication, custom/unsure, optional fields, Back/Edit, validation, slow submit, duplicate click, saved-with-email-delay and unsaved retry.
- [ ] Check manual consultation wording, timezone, unavailable contact channel; test live scheduling only if D-003 is resolved and provider outcome is real.
- [ ] Check public search query/result/empty/error/pagination, article publication/unpublication and protected preview exclusion.
- [ ] Test role/record access, safe denial, session expiry, private-file access, stale editor conflicts, task completion and reviewed customer conversion; hide is not authorization.
- [ ] Test permission-sensitive publish/unpublish, access revocation and finance corrections with exact target/result; audit visibility is distinct from underlying logging.
- [ ] Complete keyboard/screen-reader, focus, zoom, text spacing, touch, forced-color, color/status and reduced-motion checks in §12; automated findings reviewed manually.
- [ ] Test production build on representative mid-range mobile and desktop with realistic network/CPU conditions; capture layout and interaction traces, route payloads and field-data plan.
- [ ] Confirm no animation makes first content invisible, delays CTA, hijacks scroll, leaks after repeated navigation, consumes indefinite background work or shares transform ownership.
- [ ] Inspect font/media loading and layout stability; run representative Lighthouse checks with recorded configuration; treat scores as diagnostic goals.
- [ ] Verify core GA4/Search Console behavior only under selected privacy/consent configuration; no private data or tokens in analytics; successful saved inquiry distinct from page view.
- [ ] Record remaining U/D gates with accountable owner, decision and date; do not publish unavailable offers or unsupported policy/provider promises.

### 13.4 Handoff order when implementation is separately authorized

After the owner begins the next stage, first reconcile open business/provider/access decisions needed for that stage, then map this design specification into the approved technical architecture. A later implementation can establish semantic tokens and all three themes, shared primitives, shell/navigation, representative templates, forms, private workflows, real content and selective motion in that order, measuring at each meaningful boundary. This is future guidance only; **no Step 5, implementation code, database design, installation or deployment is performed by this document**.

## 14. Requirement traceability and preserved commercial catalog

### 14.1 Complete functional allocation — 207 requirements

The following 207 allocation rows are retained verbatim from S-SECTIONS §8.2 and cross-checked by ID against S-MASTER and S-SITEMAP. The source phase/qualification remains binding. Original C-04 references are source Step 3 consolidation provenance, not this file’s C4 decisions. UI-only capabilities inherit the relevant §3–13 contract and do not create routes. Detailed source acceptance criteria continue to apply; this is design coverage, not implemented/tested functionality.

| Requirement | Capability | Source phase | Source page/capability allocation | Source qualification |
| --- | --- | --- | --- | --- |
| FR-01-01 | Responsive website (desktop/tablet/mobile) | P1. | Capability / no extra page: All introduced public routes: responsive layouts and usable states; no separate page. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-02 | Professional homepage | P1. | Page(s): PUB-001 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-03 | Mega menu and dropdown navigation | P1. | Page(s): PUB-002, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08 | Confirmed grouped navigation; mega-menu presentation detail proposed. |
| FR-01-04 | Service categories and individual pages | P1. | Page(s): PUB-002, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057, IND-00, IND-01, IND-02, IND-03, IND-04, IND-05, IND-06, IND-07, IND-08, IND-09, IND-10 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-05 | Solutions and service bundles | P1. | Page(s): PUB-003, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05, IND-00, IND-01, IND-02, IND-03, IND-04, IND-05, IND-06, IND-07, IND-08, IND-09, IND-10 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-06 | Service package and pricing comparison | P1. | Page(s): PUB-004, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-07 | Dynamic call-to-action buttons | P1. | Page(s): PUB-001, PUB-007, PUB-013, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05, IND-00, IND-01, IND-02, IND-03, IND-04, IND-05, IND-06, IND-07, IND-08, IND-09, IND-10 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-08 | About, team, mission and company information | P1. | Page(s): PUB-005 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-09 | Contact page and inquiry form | P1. | Page(s): PUB-012 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-10 | Portfolio and case studies | P1. | Page(s): PUB-006, PUB-007 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-11 | Testimonials and client reviews | P1. | Page(s): PUB-005, ADM-012, ADM-017, ADM-018 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-12 | Blog, articles and resource center | P1. | Page(s): PUB-008, PUB-009 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-13 | FAQ and knowledge base | P1. | Page(s): PUB-010, PUB-011, ADM-021, ADM-022 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-14 | Website search | P1. | Page(s): PUB-010, PUB-011, PUB-016 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-01-15 | Multi-language website | P3. | Capability / no extra page: P3 conditional translations of existing public pages; locale list and route prefix unresolved. Do not publish empty language variants. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-01-16 | Multi-currency pricing display | P3. | Capability / no extra page: P3 conditional display capability on existing pricing/offer pages; no currency-specific page duplicates. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-01-17 | Personalized website content | P3. | Capability / no extra page: P3 conditional personalization within existing public pages; default content remains available. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-01-18 | AI-powered website search | P3. | Capability / no extra page: P3 conditional enhancement of PUB-016; ordinary search remains available. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-02-01 | Unified multi-step quote request | P1. | Page(s): PUB-013, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-02 | Multi-service selection | P1. | Page(s): PUB-013, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-03 | Package selection with starting prices | P1. | Page(s): PUB-013, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-04 | General contact form | P1. | Page(s): PUB-012, PRD-01 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-05 | Consultation request form | P1. | Page(s): PUB-014 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-06 | Lead database | P1. | Page(s): PUB-015, PRD-01, ADM-002 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-07 | Automatic lead reference number | P1. | Page(s): PUB-013, PUB-015, ADM-003 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-08 | Customer confirmation email | P1. | Capability / no extra page: Saved inquiry acknowledgement email; PUB-015 is on-screen confirmation. No standalone email page. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-09 | Internal lead notification | P1. | Capability / no extra page: Saved-inquiry staff alert links to ADM-003; no duplicate notification subsystem. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-10 | Lead status management | P1. | Page(s): ADM-003, ADM-007 | Confirmed status tracking; inquiry/opportunity mapping requires D-011 resolution. |
| FR-02-11 | Lead assignment | P1. | Page(s): ADM-003, ADM-007 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-12 | Lead notes and activity history | P1. | Page(s): ADM-003, ADM-005, ADM-007 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-13 | Lead source tracking | P1. | Page(s): ADM-003 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-02-14 | Calendar appointment booking | P2 baseline; P1 proposed, pending D-003. | Page(s): EXP-031 | Decision required — S1/S2 P2; S3 proposes P1; Google Calendar booking scope/phase unresolved (D-003). |
| FR-02-15 | Automated follow-up sequences | P2. | Page(s): EXP-027, EXP-028 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-02-16 | Proposal generation | P2. | Page(s): EXP-005, EXP-006 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-02-17 | Proposal approval and e-signature | P2. | Page(s): EXP-006, EXP-008, CLI-005, CLI-007 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-02-18 | AI lead qualification | P3. | Capability / no extra page: P3 conditional advisory panel within ADM-003 / ADM-007; reuse FR-12-03. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-02-19 | AI sales assistant | P3. | Capability / no extra page: P3 conditional staff assistance within authorized lead/contact/opportunity views; no autonomous external commitments. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-02-20 | Lead scoring and sales forecasting | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-03-01 | Contacts database | P1. | Page(s): ADM-004, ADM-005 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-03-02 | Basic customer profile | P1. | Page(s): ADM-010, ADM-011 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-03-03 | Lead-to-customer conversion | P1. | Page(s): ADM-007, ADM-010, ADM-011 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-03-04 | Company/organization records | P2. | Page(s): EXP-001, EXP-002 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-03-05 | Sales opportunity pipeline | P1. | Page(s): ADM-006, ADM-007 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-03-06 | Follow-up tasks and reminders | P1. | Page(s): ADM-008, ADM-009 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-03-07 | Communication timeline | P2. | Capability / no extra page: P2 timeline tab within ADM-005 / ADM-011; imported communication must be scoped. | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-03-08 | Customer tags and segmentation | P2. | Capability / no extra page: P2 tagging/segmentation controls within ADM-004 / ADM-010; no duplicate contact store. | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-03-09 | Email integration | P2. | Page(s): EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-03-10 | Deal and revenue forecasting | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-03-11 | Customer lifetime value tracking | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-03-12 | AI CRM assistant | P3. | Capability / no extra page: P3 conditional advisory panel within authorized CRM records; reuse FR-12-09. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-03-13 | Customer health scoring | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-03-14 | Multiple customizable pipelines | P3. | Capability / no extra page: P3 conditional configuration within ADM-006; retain fixed P1 pipeline until approved. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-04-01 | Centralized service catalog | P1. | Page(s): PUB-002, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-04-02 | Centralized pricing/package data | P1. | Page(s): PUB-004, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057, SOL-01, SOL-02, SOL-03, SOL-04, SOL-05, EXP-018 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-04-03 | Service availability management | P1. | Page(s): PUB-002, CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07, CAT-08, PUB-S001, PUB-S002, PUB-S003, PUB-S004, PUB-S005, PUB-S006, PUB-S007, PUB-S008, PUB-S009, PUB-S010, PUB-S011, PUB-S012, PUB-S013, PUB-S014, PUB-S015, PUB-S016, PUB-S017, PUB-S018, PUB-S019, PUB-S020, PUB-S021, PUB-S022, PUB-S023, PUB-S024, PUB-S025, PUB-S026, PUB-S027, PUB-S028, PUB-S029, PUB-S030, PUB-S031, PUB-S032, PUB-S033, PUB-S034, PUB-S035, PUB-S036, PUB-S037, PUB-S038, PUB-S039, PUB-S040, PUB-S041, PUB-S042, PUB-S043, PUB-S044, PUB-S045, PUB-S046, PUB-S047, PUB-S048, PUB-S049, PUB-S050, PUB-S051, PUB-S052, PUB-S053, PUB-S054, PUB-S055, PUB-S056, PUB-S057 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-04-04 | Admin service editor | P2. | Page(s): EXP-016, EXP-017 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-04-05 | Dynamic page management | P2. | Page(s): EXP-018, EXP-019, EXP-020 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-04-06 | Blog/article management | P1. | Page(s): PUB-008, PUB-009, ADM-012, ADM-013, ADM-014, ADM-015, ADM-016 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-04-07 | Media library | P2. | Page(s): EXP-021 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-04-08 | SEO metadata editor | P1. | Page(s): PUB-008, PUB-009, ADM-012, ADM-015, ADM-019, ADM-020 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-04-09 | Reusable content blocks | P2. | Page(s): EXP-020 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-04-10 | Draft and publish workflow | P2. | Page(s): EXP-017, EXP-018, EXP-020 | Proposed P2 for general content only; article draft/publish is explicitly confirmed P1 under FR-04-06 (D-008). |
| FR-04-11 | Content version history | P2. | Page(s): EXP-017, EXP-020 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-04-12 | Scheduled publishing | P3. | Capability / no extra page: P3 scheduling controls within existing authorized content editors; no separate public page. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-04-13 | Multi-language content management | P3. | Capability / no extra page: P3 translation controls within content editors; route/localization decisions remain open. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-04-14 | AI-assisted content drafting | P3. | Capability / no extra page: P3 human-reviewed drafting within ADM-015 and approved editors; reuse FR-12-07. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-04-15 | Visual page builder | P3. | Capability / no extra page: P3 conditional visual editing in EXP-020; no automatic launch page builder. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-05-01 | Client registration and login | P2. | Page(s): CLI-A01, CLI-A02, CLI-A03, CLI-A04, CLI-014 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-02 | Client dashboard | P2. | Page(s): CLI-001 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-03 | Project status tracking | P2. | Page(s): CLI-002, CLI-003 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-04 | View proposals and contracts | P2. | Page(s): CLI-004, CLI-005, CLI-006, CLI-007 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-05 | View invoices and payments | P2. | Page(s): CLI-008, CLI-009 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-06 | Upload/download project files | P2. | Page(s): CLI-003 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-07 | Submit project requirements | P2. | Page(s): EXP-004, CLI-003 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-08 | Approve designs and deliverables | P2. | Page(s): CLI-003 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-09 | Request project changes | P2. | Page(s): EXP-004, CLI-003 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-10 | Message project manager | P2. | Page(s): EXP-004, EXP-015, CLI-003 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-11 | Submit support tickets | P2. | Page(s): EXP-014, EXP-015, CLI-010, CLI-011, CLI-012 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-12 | Client notifications | P2. | Page(s): CLI-013 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-05-13 | Subscription management | P3. | Page(s): CLI-015, CLI-016 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-05-14 | AI client support assistant | P3. | Capability / no extra page: P3 conditional assistant within CLI-010 / CLI-012; only client-permitted context. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-06-01 | Project creation from accepted proposal | P2. | Page(s): EXP-003 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-02 | Project dashboard | P2. | Page(s): EXP-003 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-03 | Task and subtask management | P2. | Page(s): EXP-004 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-04 | Team assignment | P2. | Page(s): EXP-004, EXP-023 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-05 | Project milestones | P2. | Page(s): EXP-004 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-06 | Kanban board | P2. | Page(s): EXP-004 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-07 | Project files and documentation | P2. | Page(s): EXP-004 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-08 | Deadline and progress tracking | P2. | Page(s): EXP-004 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-09 | Client review and approval | P2. | Page(s): EXP-004 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-10 | Time tracking | P2. | Page(s): EXP-004 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-06-11 | Project profitability tracking | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-06-12 | Resource and capacity planning | P3. | Page(s): ADV-004 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-06-13 | Gantt chart | P3. | Capability / no extra page: P3 conditional timeline/Gantt view within EXP-004; accessible alternative required. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-06-14 | Automated project creation | P3. | Capability / no extra page: P3 conditional event-driven project creation behind EXP-003; distinguish P2 onboarding actions from fully automated creation. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-06-15 | AI project progress summaries | P3. | Capability / no extra page: P3 reviewed project-summary panel within EXP-004; reuse FR-12-10. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-07-01 | Proposal and invoice templates | P1. | Page(s): EXP-005, EXP-006 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-07-02 | Manual payment tracking | P1 proposed; implementation location pending D-007. | Page(s): ADM-027 | Decision required — S2 proposes P1; external manual process versus dashboard feature unresolved (D-007). |
| FR-07-03 | Client billing profiles | P2. | Page(s): EXP-011, CLI-014 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-07-04 | Automated invoice generation | P2. | Page(s): EXP-009, EXP-010 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-07-05 | Online payment gateway | P2. | Page(s): EXP-010, CLI-009 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-07-06 | Deposit and milestone payments | P2. | Page(s): EXP-010 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-07-07 | Recurring subscriptions | P2. | Page(s): EXP-012, EXP-013, CLI-016 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-07-08 | Payment reminders | P2. | Page(s): EXP-010 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-07-09 | Contract and SOW management | P2. | Page(s): EXP-007, EXP-008, CLI-007 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-07-10 | Refund and cancellation management | P2. | Page(s): EXP-010, EXP-013 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-07-11 | Financial reporting | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-07-12 | Multi-currency invoicing | P3. | Capability / no extra page: P3 conditional invoice-currency behavior within EXP-010 / CLI-009; no duplicate currency routes. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-07-13 | Expense tracking | P3. | Page(s): ADV-003 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-07-14 | Revenue and profit forecasting | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-08-01 | New lead email notification | P1. | Capability / no extra page: Alias of FR-02-09: one new-lead staff email pathway. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-08-02 | Customer quote confirmation | P1. | Capability / no extra page: Alias of FR-02-08: one customer quote acknowledgement pathway. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-08-03 | Lead assignment notifications | P1. | Capability / no extra page: Proposed P1 assignment alert from lead/opportunity changes; no P1 global notification-center requirement. | Proposed P1 specific assignment notification; general staff alerts are confirmed. |
| FR-08-04 | Event-based workflow triggers | P2. | Page(s): EXP-027, EXP-028 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-08-05 | Automated lead follow-up | P2. | Page(s): EXP-027, EXP-028 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-08-06 | Email and SMS sequences | P2. | Page(s): EXP-027, EXP-028 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-08-07 | Scheduled tasks and reminders | P2. | Page(s): EXP-027, EXP-028 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-08-08 | CRM pipeline automation | P2. | Page(s): EXP-027, EXP-028 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-08-09 | Invoice and payment automation | P2. | Page(s): EXP-027, EXP-028 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-08-10 | Project onboarding automation | P2. | Page(s): EXP-027, EXP-028 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-08-11 | Webhook management | P2. | Page(s): EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-08-12 | Visual workflow builder | P3. | Capability / no extra page: P3 conditional visual builder within EXP-028; no automatic P2 graphical workflow engine. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-08-13 | Conditional branching workflows | P3. | Capability / no extra page: P3 conditional branching in EXP-028; rules must be bounded and validated. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-08-14 | AI-driven automation | P3. | Capability / no extra page: P3 conditional AI workflow steps in EXP-028 with approved safeguards. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-08-15 | Workflow execution logs and retries | P3 advanced console; basic reliability from P1 onward. | Page(s): ADV-005 | Conditional P3 advanced console; basic logging/retries required with every first-release workflow/integration (D-025). |
| FR-09-01 | Secure staff login/logout | P1. | Page(s): STA-001, ADM-026 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-02 | Admin dashboard overview | P1. | Page(s): ADM-001 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-03 | Lead management table | P1. | Page(s): ADM-002 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-04 | Lead detail pages | P1. | Page(s): ADM-003 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-05 | Search and filtering | P1. | Page(s): ADM-002 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-06 | Lead status and assignment | P1. | Page(s): ADM-003 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-07 | Basic user roles and permissions | P1. | Page(s): ADM-023, ADM-024 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-08 | Internal activity history | P1. | Page(s): ADM-003 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-09 | Team management | P2. | Page(s): EXP-022, EXP-023 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-09-10 | Department management | P2. | Page(s): EXP-024 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-09-11 | Staff performance dashboard | P2. | Page(s): EXP-026 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-09-12 | Global admin notifications | P2. | Page(s): EXP-025 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-09-13 | Audit logs | P1. | Page(s): ADM-025 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-09-14 | Advanced permission builder | P3. | Page(s): ADV-006 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-09-15 | Customizable dashboard widgets | P3. | Capability / no extra page: P3 conditional customization of ADM-001 widgets using already authorized data. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-09-16 | Multi-organization management | P3. | Page(s): ADV-007, ADV-008 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-10-01 | Google Analytics 4 | P1. | Capability / no extra page: External GA4 setup/analysis; approved public analytics only; no new P1 dashboard report page. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-10-02 | Google Search Console | P1. | Capability / no extra page: External Search Console property and indexing workflow; no user-facing application page. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-10-03 | Quote conversion tracking | P1. | Capability / no extra page: Quote conversion instrumentation after durable save; direct PUB-015 visits never create conversion evidence. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-10-04 | Lead count and status summary | P1. | Page(s): ADM-001 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-10-05 | Lead source attribution | P2. | Page(s): EXP-026 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-10-06 | Sales funnel reporting | P2. | Page(s): EXP-026 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-10-07 | Revenue reporting | P2. | Page(s): EXP-026 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-10-08 | Service popularity analytics | P2. | Page(s): EXP-026 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-10-09 | Customer acquisition cost | P2. | Page(s): EXP-026 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-10-10 | Team performance reports | P2. | Page(s): EXP-026 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-10-11 | Custom report builder | P3. | Page(s): ADV-002 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-10-12 | AI business insights | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-10-13 | Predictive analytics | P3. | Page(s): ADV-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-11-01 | Transactional email provider | P1. | Capability / no extra page: Transactional provider integration; email templates and operational retry visibility; no public route. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-11-02 | Analytics integrations | P1. | Capability / no extra page: Controlled analytics integration behind approved public routes; no PII in event payloads. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-11-03 | GoHighLevel CRM | P2. | Page(s): EXP-029, EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-11-04 | Google Calendar | P2 baseline; P1 proposed, pending D-003. | Page(s): EXP-029, EXP-030, EXP-031 | Decision required — baseline P2; P1 external or integrated booking remains under review (D-003). |
| FR-11-05 | ClickSend SMS | P2. | Page(s): EXP-029, EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-11-06 | Payment providers | P2. | Page(s): EXP-029, EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-11-07 | Google Drive / cloud storage | P2. | Page(s): EXP-029, EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-11-08 | Slack / Microsoft Teams | P2. | Page(s): EXP-029, EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-11-09 | Zapier / Make / n8n | P2. | Page(s): EXP-029, EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-11-10 | Accounting software | P2. | Page(s): EXP-029, EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-11-11 | WhatsApp Business Platform | P2. | Page(s): EXP-029, EXP-030 | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-11-12 | GitHub integration | P3. | Capability / no extra page: P3 conditional GitHub adapter using EXP-030; ordinary Git and CI infrastructure already accompanies launch. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-11-13 | Public developer API | P3. | Page(s): ADV-010 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-11-14 | Integration marketplace | P3. | Page(s): ADV-011 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-01 | Website AI chatbot | P2. | Capability / no extra page: P2 proposed assistant in existing public pages, with human contact fallback; not a dedicated page. | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-12-02 | AI FAQ assistant | P2. | Capability / no extra page: P2 proposed FAQ assistant in PUB-010 / PUB-011; no unsupported policy answers. | Proposed catalog requirement; detailed scope and phase require approval. |
| FR-12-03 | AI lead qualification | P3. | Capability / no extra page: Same advisory capability as FR-02-18 within authorized CRM views. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-04 | AI quote scope assistant | P3. | Capability / no extra page: P3 conditional scope-question assistance in ADM-003 / ADM-007; no binding automated public quote. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-05 | AI proposal drafting | P3. | Capability / no extra page: P3 conditional reviewed drafting in EXP-006; no automatic sending or signing. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-06 | AI customer support | P3. | Capability / no extra page: P3 conditional staff support drafts in EXP-015; no autonomous refunds or account changes. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-07 | AI content generation | P3. | Capability / no extra page: Same human-reviewed drafting capability as FR-04-14. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-08 | AI workflow suggestions | P3. | Capability / no extra page: P3 conditional non-executing suggestions in EXP-028; activation remains controlled. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-09 | AI CRM insights | P3. | Capability / no extra page: Same authorized advisory foundation as FR-03-12; source/time scope remains visible. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-10 | AI project management assistant | P3. | Capability / no extra page: Same reviewed project-assistance foundation as FR-06-15. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-12-11 | AI voice agent | P3. | Capability / no extra page: P3 conditional voice interaction/integration only after approved use case; no standalone website page presumed. | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-01 | Agency dashboard | P3. | Page(s): AMS-001 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-02 | Customer and household records | P3. | Page(s): AMS-002, AMS-003 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-03 | Policy records and renewal dates | P3. | Page(s): AMS-004, AMS-005 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-04 | Carrier/company directory | P3. | Page(s): AMS-006 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-05 | Quote and policy workflow tracking | P3. | Page(s): AMS-007, AMS-008 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-06 | Renewal reminders | P3. | Page(s): AMS-004, AMS-005 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-07 | Commission tracking | P3. | Page(s): AMS-009 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-08 | Document management | P3. | Page(s): AMS-005, AMS-010 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-09 | Agent assignment | P3. | Page(s): AMS-003 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-10 | Claims/service request tracking | P3. | Page(s): AMS-011, AMS-012 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-11 | Carrier integration adapters | P3. | Page(s): AMS-013 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-12 | Compliance and audit controls | P3. | Page(s): AMS-014 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-13-13 | Agency-specific reporting | P3. | Page(s): AMS-015 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-14-01 | HTTPS and secure configuration | P1. | Capability / no extra page: HTTPS, environment/secret and header controls across application; no public security-control page required. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-02 | Server-side input validation | P1. | Capability / no extra page: Server validation on every introduced action/query; no page of its own. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-03 | Role-based authorization | P1. | Page(s): ADM-023, ADM-024 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-04 | Secure staff authentication | P1. | Page(s): STA-001, STA-002, STA-003, STA-004, ADM-023, ADM-026 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-05 | Rate limiting and spam protection | P1. | Capability / no extra page: Server-enforced anti-abuse controls on forms/auth/APIs from first release; accessible recovery. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-06 | Database backups | P1. | Capability / no extra page: Protected backup and restore operations; provider/operator workflow, not a required custom dashboard page. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-07 | Error logging and monitoring | P1. | Capability / no extra page: Operational logging/monitoring from launch; external tooling or appropriate protected context, not gated on ADV-009. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-08 | Privacy and consent handling | P1. | Page(s): PUB-017, TRU-01 | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-09 | Automated deployment and testing | P1. | Capability / no extra page: CI, verification, staging, deployment and rollback infrastructure; no end-user page. | Confirmed concept; detailed acceptance criteria proposed for review. |
| FR-14-10 | Multi-factor authentication for staff | P1. | Page(s): STA-004, ADM-026 | Decision required — S2 P1 mandatory wording conflicts with S1 if-available wording (D-009). |
| FR-14-11 | File upload security | P2 baseline; P1 prerequisite if uploads introduced. | Page(s): EXP-021 | Required when uploads begin; baseline P2, but P1 if the selected article-image workflow includes uploads (D-012). |
| FR-14-12 | Webhook signature verification | P2 baseline; accompanies first webhook. | Page(s): EXP-030 | Required from first webhook introduction; baseline P2, earlier if an approved P1 integration needs it. |
| FR-14-13 | API key management | P2 integration management; P1 secret protection. | Page(s): EXP-030, ADV-010 | Advanced integration-key management proposed P2; secure server-side credential handling is already required P1. |
| FR-14-14 | Advanced security audit dashboard | P3. | Page(s): ADV-009 | Conditional future candidate; phase and detail proposed for owner approval. |
| FR-14-15 | Multi-tenant data isolation | P3. | Page(s): ADV-007, ADV-008 | Conditional future candidate; phase and detail proposed for owner approval. |

### 14.2 Step 4 design coverage mapping

Read this table together with the exact FR-to-page allocations above and §10. A requirement with no extra page is still retained as a capability. “Covered” means specified or intentionally reserved under its phase, not implemented, tested or promoted.

| Requirement family / decision | Design coverage in this file | Phase / qualification |
|---|---|---|
| FR-01 public site, discovery and content | §2–8 identity/tokens/navigation/components; §9 public templates; all assigned §10 pages; §11/12/13 conversion/SEO/a11y/performance | P1 baseline; multilingual/currency/personalization/AI search retain individual future phases |
| FR-02 lead capture and sales | T-QUOTE/CONTACT/CONSULT/CONFIRM, source PUB pages and ADM lead/pipeline/task/customer records, §11 workflows/state meanings | Calendar D-003; later proposals/follow-up automation/AI not promoted |
| FR-03 CRM capabilities | T-DASH/LIST/DETAIL, authorized source ADM/EXP/ADV allocations, role shell/state contracts | P1 essential records; extended companies/CRM/AI source phases preserved |
| FR-04 CMS and catalog management | T-CONTENT/EDITOR/PREVIEW/TESTIMONIAL/FAQEDIT/SEOEDIT; public catalog/content templates and future catalog editors | Article workflow P1; general editing/media P2; FAQ authoring conditional |
| FR-05 client portal | Source CLI/CLI-A future blueprints, client identity/shell, own-record list/detail/document patterns | Future portal/provisioning decision; no P1 client login |
| FR-06 project/delivery capabilities | Assigned future EXP/CLI layouts and §9.36 workspace/document patterns | Future source phases; not a P1 project-management suite |
| FR-07 finance, billing and contracts | Conditional T-PAYMENTS; future invoice/document/finance patterns; precise currency/status semantics | D-007 external ledger vs limited tracker; no P1 public payment gateway |
| FR-08 automation | Source future workflow pages, controlled configuration/history, §11 durable confirmation/retry behavior | Basic reliability accompanies each feature; advanced console remains future |
| FR-09 staff dashboard and team management | T-AUTH/DASH/ACCESS/ACCOUNT, role-scoped shell, staff list/detail and source future team pages | Conditional interfaces and exact role/MFA policies retained; no public staff signup |
| FR-10 analytics and reporting | P1 authorized summaries and source context; future report pages; accessible chart/table pattern | Optional extra events/tools D-021; advanced attribution not silently added |
| FR-11 external integrations | Source future integration/appointment pages; §9.36 controlled setup/history; provider-confirmed states | D-003/017 provider/source-of-truth gates; no unverified sync or booking |
| FR-12 AI capabilities | Source future allocations plus advisory labeling, inputs/output/review/fallback and human-control patterns | Future/conditional; no robot hero implies an AI-only positioning or built AI platform |
| FR-13 specialized/product capabilities | Source AMS and future product/advanced records; §9.36 separate product shell/organization context | AMS-GATE and product-readiness conditions retained |
| FR-14 platform/security capabilities | Access states, private preview, metadata protections, trustworthy state changes, bounded workloads, lifecycle/QA guidance | Detailed backend/security design belongs later; source criteria still binding |
| BR-001/003/004 | §2 truthful identity and imagery; §11 verified contacts/evidence/publication; source record copy | No fictional proof or operational claim |
| BR-002/005 | Complete catalog/prices and source availability per offer; category/service/solution design | All 57 planned; publication still needs truthful capability |
| BR-006 | Pricing conditions, quote review, pipeline/payment distinctions, terms and verification | Manual operations allowed; no invented contractual terms |
| BR-007/008 | Phase/source authority, future layout gates, explicit Step 4 boundary and approval provenance | No automatic commercial SaaS, AMS or next-stage implementation |
| NFR-001/011 | Source per-page indexing/canonicals/search/publication rules; metadata/editor and public templates | Indexable content only; noindex never replaces security |
| NFR-002/014 | §6/8/9/12 semantics, responsive controls, state recovery, reduced motion and confirmation | Requires real later accessibility testing |
| NFR-003 | §7/13 motion boundaries, field goals, provisional byte budgets and QA | Goals, not achieved scores; D-020 retained |
| NFR-004/005/008 | Private identity/access states, safe error boundaries and implementation/recovery handoff | Detailed data lifecycle/security/provider decisions remain later |
| NFR-006/015 | Durable save vs email, duplicate prevention, provider-confirmed booking and reconciliation | Basic reliability in each implemented feature; D-017 source-of-truth decisions |
| NFR-007/009 | Conversion meaning, privacy-conscious events, conditional consent, manual/lab/field verification | No private content in analytics; not a compliance/release certification |
| NFR-010 | 35 shared templates, semantic tokens, 51 components, narrow Motion/GSAP ownership, approved stack | Solo-maintainable modular monolith, no architecture replacement |
| NFR-012 | USD/unit/currency/timezone visible in price, form, record, timeline and finance components | No ambiguous unit invented, no mixed-currency aggregate |
| NFR-013 | Advisory AI future pattern, provenance/human review and limits | No premature AI feature approval |
| EXT-001/002/003 | Full industry/product high-level records and readiness-accurate action | Conditional public publication/future product scope |
| EXT-004 | Curated related published service/solution/work/content components | No new route or CMS subsystem |
| EXT-005/006 | Measurement/privacy rules, exact policy pages and conditional extensions | Real practices and approved tools govern implementation |
| C4-01/04/05 | §2 original editorial identity, restrained art/header; §9 Home | Default terracotta, no later busy copper redesign |
| C4-02/03 | §3 three themes, matching logo variants, persistent accessible selector | Explicit visual capability, no new page; production assets U4-01/02 |
| C4-06/07 | §7 CSS/Motion/GSAP mapping, cleanup/reduced motion; §13 QA | Selective use, no conflicting ownership or global heavy imports |
| C4-08/09 | Evidence governance, version/approval and design-only completion | Mock previews labeled; no Step 5 |

Family labels are summaries for navigation, not replacements for the exact individual capability titles, phases and qualifications in §14.1. If a family summary is broader than a specific row, the individual source row wins.

### 14.3 Business, quality and extension requirements — source detail

The full BR/NFR/EXT specifications below preserve non-page requirements, role, phase, dependencies and acceptance criteria. Section numbers inside them refer to S-MASTER. Historical stage-governance language is read with the current Step 4 boundary; it is not permission to start Step 5.

The records in this section consolidate cross-cutting obligations from S1/S3/S7 and useful additions from S4–S6. Numeric targets already present in S1 are retained; new implementation and policy details require review.

#### BR-001 — Truthful business identity and messaging

- **Explanation:** Present the approved brand and accurate company information, with claims matched to evidence.
- **Purpose:** Build trust without misleading buyers.
- **Example:** “Dhaka, Bangladesh” is used as the supplied city; worldwide offices are not claimed.
- **Role:** Owner, content editor, visitor.
- **Phase:** P1 and ongoing.
- **Dependencies:** Section 2; verified public facts; D-001, D-018.
- **Acceptance criteria:** Name/descriptor/tagline are consistent; public facts are owner-approved; unsupported credentials and results are absent; proposed mission/story wording is reviewed before publication.
- **Status/source:** Confirmed truthfulness principle, proposed consolidated wording; S1 §§1/9/10, S3, S7.

#### BR-002 — Catalog and commercial consistency

- **Explanation:** Keep approved services, solution prices, package definitions, availability and quote snapshots consistent.
- **Purpose:** Prevent conflicting offers or misleading commercial commitments.
- **Example:** An old inquiry retains its original price after the public package changes.
- **Role:** Owner, sales, editor, visitor.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-04-01/02/03; D-002, D-004.
- **Acceptance criteria:** 57 unique service identities and five solutions are maintained; source prices remain until approved changes; scope/billing units are defined before publishing offers; browser-submitted prices never override server values.
- **Status/source:** Confirmed concept; S1 §§4–5/12; detailed package scope unresolved.

#### BR-003 — Operational contact readiness

- **Explanation:** Maintain approved public contact details and working response channels.
- **Purpose:** Ensure inquiries actually reach ARADUN.
- **Example:** The owner activates hello@aradun.com before launch and tests replies.
- **Role:** Owner, sales, visitor.
- **Phase:** P1 launch gate.
- **Dependencies:** Domain/email setup; FR-11-01; D-018.
- **Acceptance criteria:** hello@aradun.com is configured and tested for sending/receiving before live use; staff notification destination is selected; published phone/social links are checked; additional uncreated addresses are not advertised.
- **Status/source:** Email address explicitly confirmed; setup pending; S7, S1 §13.

#### BR-004 — Evidence and placeholder governance

- **Explanation:** Classify proof and prevent fictional material from appearing genuine.
- **Purpose:** Preserve credibility and avoid false claims.
- **Example:** An internal dashboard concept is labeled Concept/Demo instead of client work.
- **Role:** Owner, editor, developer.
- **Phase:** P1 and every release.
- **Dependencies:** FR-01-10/11; approved asset/permission records.
- **Acceptance criteria:** Client/internal/concept labels are accurate; testimonial permissions and measurable claims are reviewed; sample content is centralized and unmistakably labeled in previews; launch check replaces/removes unapproved placeholders; genuine labeled demos may remain public.
- **Status/source:** Confirmed principle; S1, S5, S7 project instructions.

#### BR-005 — Delivery capability and service availability

- **Explanation:** Match marketed offers to actual in-house or qualified specialist capability.
- **Purpose:** Avoid accepting work ARADUN cannot responsibly deliver.
- **Example:** A security assessment is specialist-led until suitable delivery resources are confirmed.
- **Role:** Owner, sales, delivery specialists.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-04-03; D-004, D-019.
- **Acceptance criteria:** Each launch offer has approved availability and an accountable delivery approach; cybersecurity authorization is required; unavailable capabilities are not presented as immediate services; broader catalog identity remains intact.
- **Status/source:** Confirmed principle; service-by-service readiness unresolved; S1 §§4/13.

#### BR-006 — Commercial and delivery controls

- **Explanation:** Use agreed scope, payment milestones, revision/support terms and acceptance before handoff.
- **Purpose:** Reduce disputes and unpriced scope expansion.
- **Example:** An additional integration becomes a reviewed change request rather than an assumed included revision.
- **Role:** Owner, sales, delivery, client.
- **Phase:** P1 manual operations; P2 system support.
- **Dependencies:** Section 3; approved templates/policies; D-005, D-007, D-018.
- **Acceptance criteria:** Proposals/agreements state deliverables, exclusions, revisions, timing, fees, third-party costs and support; project changes require recorded agreement; payment and acceptance evidence are distinguished; actual legal/tax review precedes use of jurisdiction-specific terms.
- **Status/source:** Confirmed operational direction; policy details unresolved; S1 §11, S4.

#### BR-007 — Product and internal-platform separation

- **Explanation:** Treat owned commercial products as separately validated offerings from ARADUN's internal CRM/CMS.
- **Purpose:** Avoid accidental expansion into a SaaS platform before business validation.
- **Example:** Internal contact management does not automatically enable public subscriptions or tenant workspaces.
- **Role:** Owner, product lead, developer.
- **Phase:** P1 planning boundary; P2/P3 only after product approval.
- **Dependencies:** D-015, D-016; EXT-002; AMS-GATE where relevant.
- **Acceptance criteria:** Each product has stated owner, audience, readiness, scope, phase and business model before development; AMS remains a separate domain; no source example is portrayed as an existing product without verification.
- **Status/source:** Owner-stated dual business intent; proposed boundary; S1 §7, S6, S7.

#### BR-008 — Planning and implementation governance

- **Explanation:** Approve manageable planning sections and later coding tasks incrementally.
- **Purpose:** Keep the project coherent and maintainable by one developer.
- **Example:** A coding task references approved requirement IDs and passes its acceptance checks before the next task.
- **Role:** Owner, analyst, developer.
- **Phase:** All phases.
- **Dependencies:** Section 1; approval register.
- **Acceptance criteria:** Each task states scope/dependencies/affected modules/behavior/acceptance/security/accessibility/performance/tests/out-of-scope items; existing conventions are inspected; changes/results/assumptions are reported; significant architecture changes require approval; this draft alone authorizes no implementation.
- **Status/source:** Confirmed process; S7 project instructions.

#### NFR-001 — Search visibility and indexing

- **Explanation:** Make approved public content discoverable while keeping private and draft data out of search engines.
- **Purpose:** Support sustainable organic discovery without privacy leakage.
- **Example:** A published service is in the sitemap; a draft article and staff dashboard are not.
- **Role:** Developer, editor, owner.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-04-08; CONTENT; FR-10-02.
- **Acceptance criteria:** Appropriate SSR/SSG, metadata, canonical URLs, sitemap and robots are configured; truthful Organization/Service/BreadcrumbList/Article structured data used where appropriate; private routes require authorization and are noindexed; unpublished content excluded; redirects preserve approved changes; production indexing and previews tested; thin placeholder pages not published.
- **Status/source:** Confirmed concept; S1 §10; S6 clarifications.

#### NFR-002 — Accessibility and usable interaction states

- **Explanation:** Apply WCAG 2.2 AA-oriented design and implementation to public and protected interfaces.
- **Purpose:** Enable effective use across abilities and devices.
- **Example:** A keyboard user can complete the quote form and understand validation errors.
- **Role:** All users, designer, developer.
- **Phase:** P1 and each introduced feature.
- **Dependencies:** Approved design system; FR-01-01.
- **Acceptance criteria:** Semantic structure, keyboard navigation, focus, labels, contrast, status announcements and reduced-motion behavior are checked; loading/empty/error/success states exist; responsive controls are usable; automated checks are supplemented with manual critical-flow review; no unsupported accessibility certification claim.
- **Status/source:** Confirmed principle; S1 §9, S6; detailed test matrix proposed.

#### NFR-003 — Performance and bounded workload

- **Explanation:** Keep public pages and business operations responsive at an agreed operating scale.
- **Purpose:** Support conversion and predictable operation.
- **Example:** A service page uses optimized imagery without a heavy animation delaying the main content.
- **Role:** Visitor, staff, developer.
- **Phase:** P1 and ongoing.
- **Dependencies:** BASE; D-020.
- **Acceptance criteria:** Target p75 field Core Web Vitals of LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 as in S1; pre-launch lab checks are a proxy, not claimed field results; images/fonts/JS/cache strategy reviewed; queries/pagination/uploads bounded; API/search load and response targets approved before capacity signoff.
- **Status/source:** Existing CWV targets confirmed; scale budgets unresolved; S1 §10, S6.

#### NFR-004 — Data lifecycle, backups and recovery

- **Explanation:** Define retention, correction, deletion, restoration and operational ownership.
- **Purpose:** Limit unnecessary data and recover from failure.
- **Example:** A restore exercise recovers sample inquiries into an isolated environment.
- **Role:** Owner, authorized administrator.
- **Phase:** P1 and each new data domain.
- **Dependencies:** FR-14-06/08; D-014, D-020.
- **Acceptance criteria:** Retention/deletion rules and backup coverage approved; restore test completed; recovery point/time targets explicitly chosen; audit needs and legitimate retention constraints addressed; stale copies and third-party data considered; no invented uptime/recovery guarantee.
- **Status/source:** Confirmed backup/privacy direction; detailed policy proposed; S1 §§6/12/13.

#### NFR-005 — Authorization and data isolation

- **Explanation:** Enforce least privilege across every data-access channel.
- **Purpose:** Prevent unauthorized disclosure or modification.
- **Example:** Changing an invoice ID cannot reveal another client's invoice.
- **Role:** Staff/client/organization users as introduced; developer.
- **Phase:** P1 staff boundaries; P2 client boundaries; P3 tenant boundaries if approved.
- **Dependencies:** FR-14-03; approved permission matrix.
- **Acceptance criteria:** Backend checks cover reads/mutations/search/files/exports/jobs; negative access tests pass; internal notes remain private; offboarding revokes access; future tenant isolation includes caches and integrations; UI hiding alone is insufficient.
- **Status/source:** Confirmed principle; exact roles proposed; S1 §12, S2.

#### NFR-006 — Reliable events, retries and duplicate prevention

- **Explanation:** Persist important state before acknowledging success and safely retry dependent actions.
- **Purpose:** Avoid lost leads, duplicated messages, or repeated charges.
- **Example:** An email outage leaves the inquiry saved and its notification pending retry.
- **Role:** Visitor, staff, developer/operator.
- **Phase:** P1 notifications; every later integration when introduced.
- **Dependencies:** DATA; MAIL; monitoring; provider controls as applicable.
- **Acceptance criteria:** Unique IDs/references and idempotency rules are tested; inquiry save/notification scheduling is failure-safe; retry/backoff/dead-letter or equivalent failure handling defined; manual recovery is possible; webhooks and financial actions deduplicated; advanced P3 workflow UI is not a prerequisite for basic reliability.
- **Status/source:** Confirmed principle; implementation choice later; S1 §§6/12, S2 automation clarification.

#### NFR-007 — Privacy-conscious analytics and consent

- **Explanation:** Separate service inquiry handling from optional marketing and behavioral tracking.
- **Purpose:** Respect choices and avoid exposing prospect information.
- **Example:** A contact submission succeeds without marketing subscription.
- **Role:** Visitor, owner, developer.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-14-08; selected analytics/booking tools; D-014.
- **Acceptance criteria:** No names/emails/phones/message bodies sent to analytics; URLs/UTMs are handled to avoid PII leakage; required consent behavior is determined for actual jurisdictions/tools; public notices match reality; sensitive forms/private pages are excluded from any later session recording by default.
- **Status/source:** Confirmed PII/consent principle; legal implementation unresolved; S1 §§6/10, S6.

#### NFR-008 — Production security and observability

- **Explanation:** Configure safe hosting, secrets, logging, dependency maintenance and availability monitoring.
- **Purpose:** Detect failures and reduce preventable exposure.
- **Example:** A production form error alerts the maintainer without exposing the visitor's message.
- **Role:** Developer/operator, owner.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-14-01/05/07; BASE.
- **Acceptance criteria:** HTTPS and appropriate header policy checked; secrets separated by environment; logs redact sensitive values; errors have correlation; uptime/error alerts route to a responsible person; dependency/security update process and incident response steps documented; WAF/provider tooling only added when justified.
- **Status/source:** Confirmed principles; tools/targets unselected; S1 §12/13, S6.

#### NFR-009 — Verification, release and rollback

- **Explanation:** Use risk-appropriate automated and manual checks before releasing changes.
- **Purpose:** Protect critical operations while keeping maintenance practical.
- **Example:** A release with broken inquiry persistence fails its gate.
- **Role:** Developer, owner/reviewer.
- **Phase:** P1 and all releases.
- **Dependencies:** FR-14-09; agreed acceptance criteria.
- **Acceptance criteria:** Lint/type/build pass; critical validation/auth/inquiry/idempotency paths have meaningful tests; key user flows and responsive/accessibility checks pass; future billing/isolation tests accompany those modules; staging and production are separate; rollback/data-change plan exists; release result is documented.
- **Status/source:** Confirmed principle; exact tools/test cases later; S1 §12/13, S6.

#### NFR-010 — Maintainable modular monolith

- **Explanation:** Keep one understandable application with explicit domain boundaries and limited dependencies.
- **Purpose:** Make long-term operation feasible for one developer.
- **Example:** Inquiry business logic is reusable from the form handler without living inside a React component.
- **Role:** Developer, owner.
- **Phase:** P1 and ongoing.
- **Dependencies:** Section 9; BR-008.
- **Acceptance criteria:** UI/business/persistence/integration responsibilities separated; runtime validation and clear types/names used; errors handled consistently; unnecessary abstraction/services avoided; architectural decisions and setup documented; the separate Express backend is approved; no microservices or speculative layers.
- **Status/source:** Confirmed constraint; S1 §12, S3, S7.

#### NFR-011 — Search and publication visibility

- **Explanation:** Keep public search, sitemap, cached content and page visibility consistent.
- **Purpose:** Prevent draft/private leakage and stale publication states.
- **Example:** Unpublishing an article removes it from public results and invalidates its cached public presentation.
- **Role:** Editor, developer, visitor.
- **Phase:** P1 and broader CMS later.
- **Dependencies:** FR-01-14; FR-04-06/08; NFR-001.
- **Acceptance criteria:** Publication changes update discovery surfaces according to defined invalidation behavior; private content never enters public indexes; invalid/deleted links receive defined responses; title/slug changes preserve approved redirect policy.
- **Status/source:** Proposed explicit acceptance clarification of confirmed search/CMS; S1 amendment, S2, R.

#### NFR-012 — Monetary and temporal integrity

- **Explanation:** Use precise amounts, explicit currencies/periods, UTC storage and clear display timezones.
- **Purpose:** Avoid financial errors and scheduling ambiguity.
- **Example:** An invoice total remains exact, and a consultation displays the client's selected timezone.
- **Role:** Sales, finance, clients, developer.
- **Phase:** P1 money/date fields and every later module.
- **Dependencies:** CAT; DATA; FINANCE when introduced.
- **Acceptance criteria:** Money uses integer minor units or appropriate precise decimals; currency/period retained; quoted snapshots immutable; dates stored consistently and displayed clearly; daylight-saving/timezone behavior verified for booking; no floating-point rounding surprises in finance.
- **Status/source:** Confirmed architectural direction plus proposed clarification; S1 §12, S6.

#### NFR-013 — AI evaluation and bounded action

- **Explanation:** Introduce AI only with defined tasks, approved data access, evaluations and human oversight.
- **Purpose:** Reduce fabricated claims, unauthorized actions and uncontrolled costs.
- **Example:** An AI proposal remains a staff-reviewed draft before it can reach a client.
- **Role:** Owner, staff, client/visitor where applicable, developer.
- **Phase:** P2 limited assistants; P3 advanced features, all proposed.
- **Dependencies:** CONSENT; AUTH; selected provider and use case.
- **Acceptance criteria:** Data/retention/provider policy approved; source permissions enforced; untrusted content cannot override tool permissions; outputs evaluated on representative cases; unsupported claims/uncertainty handled; cost/rate limits and fallback exist; external commitments and high-impact changes require approved human control.
- **Status/source:** Proposed supporting safeguards for retained AI features; S1 future architecture, S2, R.

#### NFR-014 — Accessible error recovery and confirmation

- **Explanation:** Provide actionable failure, empty and success states without exposing internals.
- **Purpose:** Prevent abandonment and duplicate submissions.
- **Example:** A validation error preserves entered quote details and identifies the field to fix.
- **Role:** Visitor, staff, client as introduced.
- **Phase:** P1 and ongoing.
- **Dependencies:** FR-02-01/04/05; NFR-002/006.
- **Acceptance criteria:** Field errors are associated with controls; safe entered data retained appropriately; submission state is clear; success only after save; retry safe; missing pages show useful navigation; no stack traces/credentials/private details in responses.
- **Status/source:** Confirmed engineering principle with S6 clarification; S7, R.

#### NFR-015 — Integration ownership and reconciliation

- **Explanation:** Define which system owns each record/field before synchronizing platforms.
- **Purpose:** Prevent duplicate contacts and conflicting updates.
- **Example:** An external CRM event maps to an existing ARADUN contact using an approved external ID.
- **Role:** Owner, integration maintainer, staff.
- **Phase:** P2 integrations; P1 if synchronized booking is approved.
- **Dependencies:** INTEGRATION; D-017; NFR-006.
- **Acceptance criteria:** Mapping/direction/identity/conflict/deletion/consent rules documented; test sync handles duplicates, retries and provider outages; disconnect/revoke works; reconciliation failures are visible; no external system bypasses ARADUN access controls.
- **Status/source:** Proposed explicit integration boundary; S1 §7/12, S3, R.

#### EXT-001 — Industries content capability

- **Explanation:** Present industry-specific problems and relevant ARADUN capabilities without changing the service catalog.
- **Purpose:** Help prospects recognize relevance and support targeted content.
- **Example:** A real-estate page links relevant CRM, website and automation services.
- **Role:** Visitor, editor, owner.
- **Phase:** Proposed P1 directory/selected substantive content or P2 expansion; owner decision required.
- **Dependencies:** CAT; CONTENT; BR-005; D-006.
- **Acceptance criteria:** Approved industry list retained; no unsupported specialization/client claims; pages provide distinct useful content; service links are valid; thin placeholders not published; navigation/routes decided in Step 2.
- **Status/source:** Owner-proposed addition; phase/publication scope unresolved; S6/S7.

#### EXT-002 — Products catalog and readiness

- **Explanation:** Present ARADUN-owned products with accurate lifecycle status and approved detail content.
- **Purpose:** Support the services-and-products business model honestly.
- **Example:** A concept product is explicitly labeled rather than advertised as a released SaaS.
- **Role:** Visitor, owner, editor.
- **Phase:** Proposed P1 structure only if useful truthful content exists; actual products independently phased.
- **Dependencies:** BR-007; D-006, D-015.
- **Acceptance criteria:** Product identity/ownership/status and available actions approved; screenshots reflect actual state or clearly labeled concepts; pricing/integrations/security claims verified; no fake products to fill cards; no implied portal/subscription implementation.
- **Status/source:** Owner intent; proposed website capability; S6/S7.

#### EXT-003 — Product demo and information inquiries

- **Explanation:** Capture inquiries tied to an approved product through the existing lead system.
- **Purpose:** Measure product interest and arrange meaningful next steps.
- **Example:** A prospect requests information about a product under development.
- **Role:** Visitor, sales.
- **Phase:** Follows approved product publication; P1/P2 decision required.
- **Dependencies:** EXT-002; FR-02-04/06; NFR-006.
- **Acceptance criteria:** Product and inquiry type retained; form/acknowledgement accurately reflects demo availability; no duplicate CRM module; PII and notification controls reused; successful submission distinguished from completed demo/booking.
- **Status/source:** Proposed addition; S6, R.

#### EXT-004 — Related content and featured selections

- **Explanation:** Connect relevant services, solutions, industries, products, articles and work using maintained references.
- **Purpose:** Help visitors progress from learning to proof to action.
- **Example:** An automation article links to an approved service and related demo.
- **Role:** Visitor, editor.
- **Phase:** Proposed P1 simple maintained references; broader CMS editing follows its approved phase.
- **Dependencies:** CONTENT; CAT; FR-04-06; NFR-011.
- **Acceptance criteria:** Links only expose approved published content; unpublished targets disappear gracefully; featured selections are intentional; no duplicate source records; layout decisions deferred.
- **Status/source:** Existing related-content direction strengthened by S6; proposed details.

#### EXT-005 — Supplemental analytics and webmaster tools

- **Explanation:** Consider Bing Webmaster Tools and additional CTA/product engagement events beyond core GA4/Search Console.
- **Purpose:** Broaden measurement where useful without overloading launch.
- **Example:** An email-link click is recorded as engagement, not a qualified lead.
- **Role:** Owner, analyst/developer.
- **Phase:** Proposed optional P1 setup/P2 expansion; not a mandatory new platform.
- **Dependencies:** FR-10-01; NFR-007; D-021.
- **Acceptance criteria:** Each event has an explicit meaning and data policy; clicks/submissions/bookings are distinct; no PII; dashboards do not claim bookings from link clicks; session recording remains separately approved and excluded from sensitive forms/private pages by default.
- **Status/source:** Proposed; S6, R.

#### EXT-006 — Public trust and product policy extensions

- **Explanation:** Review cookie information, accessibility statement, responsible disclosure and product-specific policies as relevant.
- **Purpose:** Keep trust information aligned with actual operations and products.
- **Example:** A later SaaS has terms matching its subscriptions rather than copying the corporate website terms.
- **Role:** Owner, qualified legal/privacy reviewer, editor.
- **Phase:** P1 actual privacy/cookie needs; P2/P3 product-specific policies as introduced.
- **Dependencies:** FR-14-08; BR-006/007; D-014, D-018.
- **Acceptance criteria:** Policies reflect actual entity/providers/data practices; applicability reviewed; website terms and client agreements distinguished; no copied false compliance claims; final routes belong to Step 2.
- **Status/source:** Confirmed accurate-policy principle; extra documents proposed; S1 §11, S6.

### 14.4 Complete service catalog and unchanged pricing

The source tables and qualifications below are retained exactly; category letters and headings are source grouping, not new navigation. SVC IDs are catalog IDs; PUB-S IDs are page IDs.


The following source-preserved catalog has **58 category entries representing 57 unique services**. Mobile App UI/UX Design is one service cross-listed in Mobile and Design. Stable `SVC-###` identifiers below are proposed documentation IDs, not approved URLs or database schemas. They distinguish catalog entries from functional requirement IDs.

Prices are existing indicative public display values from S1. Proposed increases are isolated in the decision register and are not applied here. Two-price entries represent **Starter / Professional**, as stated in S1. Three-price recurring entries preserve the source order; exact tier names and limits still need confirmation. Unless explicitly monthly, amounts must be assigned a confirmed billing unit during package review. Package scope, revision count, delivery estimate, and individual availability remain unresolved for every service unless separately approved.


#### A. Web & Software Development (5)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-001 | Business Website Development | $699+ / $1,499+ |
| SVC-002 | E-commerce Website Development | $999+ / $2,499+ |
| SVC-003 | Custom Web Application | Custom quote |
| SVC-004 | Website Redesign | $399+ / $999+ |
| SVC-005 | Website Maintenance | $49 / $99 / $199+ per month |

#### B. Mobile App Development (5)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-006 | Business Mobile App | $1,999+ / $4,999+ |
| SVC-007 | E-commerce Mobile App | $2,499+ / $5,999+ |
| SVC-008 | Custom Mobile App | Custom quote |
| SVC-009 | Mobile App UI/UX Design | $299+ / $899+ (cross-listed under Design) |
| SVC-010 | Mobile App Maintenance | $99 / $249 / $499+ per month |

#### C. AI Automation & CRM (7)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-011 | Workflow Automation | $299+ / $899+ |
| SVC-012 | CRM Setup & Customization | $399+ / $1,199+ |
| SVC-013 | Lead Follow-up Automation | $349+ / $999+ |
| SVC-014 | AI Chatbot | $499+ / $1,499+ |
| SVC-015 | AI Integrations | $799+ / $2,499+ |
| SVC-016 | AI Voice Agent | $799+ / $2,499+ |
| SVC-017 | Automation Maintenance | $99 / $249 / $599+ per month |

#### D. Digital Marketing (9)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-018 | SEO Services | $299 / $699 per month |
| SVC-019 | Google Ads Management | $249 / $599 per month (setup and ad spend separate) |
| SVC-020 | Social Media Management | $299 / $699 per month |
| SVC-021 | Meta Ads Management | $249 / $599 per month (ad spend separate) |
| SVC-022 | Content Marketing | $199+ / $599+ |
| SVC-023 | Email Marketing | $249+ / $699+ |
| SVC-024 | Local SEO / Google Business Profile | $199+ / $499+ |
| SVC-025 | Conversion Rate Optimization & Analytics | $299+ / $899+ |
| SVC-026 | Digital Marketing Consulting | $149+ / $499+ |

#### E. Cloud & DevOps (8)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-027 | Cloud Infrastructure Setup | $399+ / $1,299+ |
| SVC-028 | Application Deployment | $199+ / $599+ |
| SVC-029 | CI/CD Pipeline Setup | $299+ / $899+ |
| SVC-030 | Docker Containerization | $249+ / $699+ |
| SVC-031 | Infrastructure as Code | $399+ / $1,199+ |
| SVC-032 | Monitoring & Observability | $249+ / $799+ |
| SVC-033 | Cloud Security & Backup | $349+ / $999+ |
| SVC-034 | Managed Cloud Services | $99 / $299 / $799+ per month |

#### F. Cybersecurity (8)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-035 | Web Application Security Assessment | $299+ / $899+ |
| SVC-036 | Vulnerability Assessment / Penetration Testing | Custom quote |
| SVC-037 | Cloud Security Assessment | $399+ / $1,299+ |
| SVC-038 | Security Hardening | $249+ / $999+ |
| SVC-039 | Identity & Access / Email Security | $199+ / $699+ |
| SVC-040 | Security Awareness Training | $199+ / $599+ |
| SVC-041 | Compliance Readiness | Custom quote |
| SVC-042 | Managed Security Services | $149 / $399 / $999+ per month |

#### G. UI/UX, Graphic Design & Branding (8 category entries)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-043 | Website UI/UX Design | $299+ / $899+ |
| SVC-009 | Mobile App UI/UX Design | $299+ / $899+ (same service as Mobile category) |
| SVC-044 | SaaS Dashboard UI/UX | $499+ / $1,499+ |
| SVC-045 | Logo & Brand Identity | $149+ / $599+ |
| SVC-046 | Graphic Design | $49+ / $249+ |
| SVC-047 | Landing Page Design | $199+ / $599+ |
| SVC-048 | UX Audit | $199+ / $799+ |
| SVC-049 | Monthly Design Support | $149 / $399 / $899+ per month |

#### H. Video Editing & Production (8)

| Service ID | Service | Existing indicative prices |
|---|---|---|
| SVC-050 | Short-form Video Editing | $39+ / $199+ |
| SVC-051 | YouTube Video Editing | $99+ / $349+ |
| SVC-052 | Promotional / Ad Video | $149+ / $499+ |
| SVC-053 | Corporate Video Production | $249+ / $899+ |
| SVC-054 | Motion Graphics | $199+ / $699+ |
| SVC-055 | Podcast Editing | $149+ / $499+ |
| SVC-056 | Captions / Subtitles | $29+ / $149+ |
| SVC-057 | Monthly Video Editing | $199 / $599 / $1,499+ |

### 14.5 Five solutions and unchanged packages

| ID | Solution | Starter | Professional | Enterprise |
|---|---|---|---|---|
| SOL-001 | Digital Presence | From $899/project | From $2,499/project | Custom |
| SOL-002 | Business Automation | From $699/project | From $2,499/project | Custom |
| SOL-003 | Business Growth | From $399/month | From $999/month | Custom |
| SOL-004 | Cloud & Technology | From $499/project | From $1,999/project | Custom |
| SOL-005 | Complete Digital Business | Custom | Custom | Custom |

Names/prices are confirmed concepts from S1 §5. Exact included services, quantities, exclusions, revisions, timelines, setup fees, recurring costs, and upgrade/maintenance rules are not fully specified in the supplied sources. Do not infer a bundle's contractual scope from its name. Each solution must have one maintained package definition and enter the unified quote flow. Existing canonical solution URLs in S1 remain reference constraints; final page inventory belongs to Step 2.


### 14.6 Preserved business foundation, markets and operations

The following source business identity, markets, contact-readiness and commercial/operational rules remain unchanged. Proposed wording remains proposed. Source section numbers below are local to S-MASTER; supplied contact/profile values are not independently verified in this document.

#### Source 2. Business identity, positioning, and markets

##### Source 2.1 Brand foundation

| Item | Baseline | Status |
|---|---|---|
| Brand | ARADUN | Confirmed |
| Descriptor | Technology & Digital Solutions | Confirmed |
| Primary tagline | Build. Automate. Grow. | Confirmed |
| Business | International B2B technology and digital services | Confirmed |
| Broader strategic direction | Professional services plus ARADUN-owned software, SaaS, industry platforms, and other digital products | Owner-stated intent; individual products and investment unapproved |
| Supporting theme | Technology Without Boundaries. | Owner-provided direction; final public wording for review |
| Website language/currency | English and USD initially | Confirmed |
| Operating location | Dhaka, Bangladesh | Owner-supplied city; not a verified registered-office address |
| Primary domain | aradun.com | Owner states ownership; launch DNS/hosting checks pending |

**Proposed identity statement:** ARADUN is a technology and digital solutions company serving businesses globally through professional services and the development of its own software and digital products. Product language must reflect actual readiness; it must not imply released products exist.

**Proposed mission:** Help businesses solve practical problems through thoughtful design, reliable software, automation, secure infrastructure, and digital growth services.

**Proposed vision:** Build a global technology company whose services and products help businesses across industries and markets operate effectively and grow.

**Proposed positioning:** ARADUN combines design, software engineering, AI and automation, cloud and DevOps, cybersecurity, and digital marketing to support businesses from initial planning through delivery, ongoing improvement, and growth.

**Value proposition for review:** A coordinated technology partner that connects a client's website, software, operations, infrastructure, and growth activities around defined business outcomes, with clear scope and maintainable delivery.

These are positioning commitments to substantiate, not demonstrated competitive superiority. Actual differentiators must be supported by delivery capability, relevant work, transparent process, or verified client evidence. Do not claim “leading,” “#1,” worldwide offices, guaranteed results, or large client counts without evidence.

##### Source 2.2 Brand story and personality

The owner describes ARADUN as inspired by Arabic أَرَضُونَ and the idea of lands or earths, representing a broad cross-border vision. This is recorded as the founder's intended inspiration, not a verified literal translation or pronunciation. Verify linguistic wording before publishing it as fact.

Proposed values: Innovation, Quality, Security, Clarity, Partnership, and Growth. Proposed personality: modern, professional, technical, creative, clear, security-conscious, and global in ambition. Voice: clear, confident, helpful, and technically credible. Use plain business language and explain outcomes before technical details.

##### Source 2.3 Target customers and markets

Confirmed near-term go-to-market focus: small and medium-sized service businesses needing websites, lead capture, CRM/workflow automation, and related digital solutions. This is an internal acquisition priority, not a restriction on the full catalog.

Broader intended customers: startups, SMBs, growing companies, and established organizations seeking software, digital transformation, automation, infrastructure, security, or digital growth. Proposed buyer roles include founders, owners, operations leads, marketing leaders, and technical decision-makers; validate priority personas during review.

| Target industry from owner | Typical problem-to-service fit; examples are not claims of delivered work |
|---|---|
| Insurance & Financial Services | Lead management, business workflows, portals, secure systems, future specialized products |
| Healthcare & Medical | Scheduling/workflow improvements, public websites, portals subject to applicable data controls |
| Education | Learning/business platforms, websites, communication workflows |
| Real Estate | Property experiences, CRM, lead follow-up, digital acquisition |
| Construction & Home Services | Service websites, inquiries, scheduling workflows, marketing |
| E-commerce & Retail | Commerce experiences, integrations, customer operations, growth |
| Marketplaces | Multi-party applications, workflow design, integrations |
| Restaurants & Hospitality | Websites, booking/order experiences, communications, growth |
| Professional Services | Websites, CRM, document/workflow automation, lead generation |
| Startups & SaaS | MVPs, product design, software, cloud, maintenance |

S6 additionally proposes Logistics & Transportation, Manufacturing, and Technology Companies. Retain them as candidates for approval, without replacing the owner's industry list. Other suitable industries remain possible. Industry pages require substantive content and truthful capability statements; listing a sector is not evidence of specialization or regulatory certification.

The owner identifies the USA, Canada, UK, Australia, European markets, Middle East, and Bangladesh as potential markets. Serve globally while privately prioritizing regions based on opportunity, relationships, delivery capability, and commercial potential. Exact first markets, budgets, languages beyond English, buyer segments, and time-zone service coverage remain open.

##### Source 2.4 Contact and social identity

| Channel | Selected or supplied value | Readiness |
|---|---|---|
| Website | https://aradun.com/ | Domain owner-confirmed; live-site readiness not verified |
| Primary public email | hello@aradun.com | Explicitly selected; mailbox not yet created/activated according to owner. May be used in planned content; test before public launch. |
| Additional email | helloaradun@gmail.com | Owner supplied; public fallback use not selected |
| Phone | 01302601121 / +880 1302-601121 | Owner supplied; publishing and call handling to confirm |
| Location | Dhaka, Bangladesh | City only |
| LinkedIn | https://www.linkedin.com/company/aradun/ | Owner supplied |
| Facebook | https://www.facebook.com/aradunhq/ | Owner supplied |
| YouTube | https://www.youtube.com/@aradunhq | Owner supplied |
| X | https://x.com/aradunhq | Owner supplied |
| Instagram | https://www.instagram.com/aradunhq/ | Owner supplied |
| GitHub | Not supplied | Do not invent a URL |

Use ARADUN for the brand and Aradun as the supplied social display name where appropriate. Preferred @aradun and fallback @aradunhq/@wearearadun are naming preferences, not availability claims. Existing supplied profiles mostly use @aradunhq; preserving them is recommended. `sales@` and `support@` are unapproved suggestions, not active mailboxes. Legal registration, street address, ownership structure, credentials, partnerships, payment accounts, and certifications remain unconfirmed.

#### Source 3. Business model, commercial policy, and operations

##### Source 3.1 Revenue streams

| Revenue stream | Baseline |
|---|---|
| Project services | Defined deliverables and agreed project fees; indicative starting prices lead to tailored quotes. |
| Recurring services | Maintenance, managed services, marketing, design, and video retainers as listed in the catalog. |
| Setup plus monthly | Separate setup/implementation charge and recurring operation/support where actually applicable. |
| Custom engagements | Discovery and tailored scope for complex work. |
| Owned products | Strategic intent: subscriptions, licenses, or one-time digital-product sales; select per validated product, not automatically. |

Products, SaaS, business software, and industry platforms overlap. They are not automatically four separate systems. ARADUN's internal CRM/CMS/operations platform is separate in purpose from software sold to customers. Internal features do not automatically become a commercial SaaS. Future AMS scope remains a separate domain/product decision. An AMS may be scoped for a single agency; multi-organization tenancy is a dependency only if that product scope is explicitly selected, not a mandatory feature of every AMS.

##### Source 3.2 Package and quote rules

- Preserve the 57 unique services, canonical service identity, cross-listing, prices, and five solutions below.
- Display USD starting prices as indicative “From” amounts; no binding automatic quote or public checkout in Phase 1.
- Define deliverables, units/limits, revision rounds, assumptions, exclusions, timeline conditions, and support before publishing a package as purchasable scope. These details are incomplete in the sources and must not be invented.
- Four pricing models: one-time, monthly, setup plus monthly, and custom. Clarify ambiguous units before publication, including Monthly Video Editing and any packages lacking an explicit period.
- Separate hosting, licenses, advertising spend, API usage, third-party subscriptions, taxes where applicable, and travel/production costs where relevant to the approved scope.
- Solutions reference constituent services. Avoid double-charging overlapping deliverables; quoting remains staff-reviewed rather than blindly adding every public starting price.
- The server resolves valid service/package IDs, prices, and availability. Store an immutable inquiry/quote snapshot; never trust amounts submitted by the browser.
- Service availability values: available, specialist-led, coming-soon. Owner must confirm each service's current delivery readiness before publication.
- Cybersecurity work requires authorization and qualified capability; do not promise guaranteed security or a 24/7 SOC that does not exist.

##### Source 3.3 Operational workflows

Sales pipeline: **New → Qualified → Discovery → Proposal Sent → Negotiation → Won / Lost**. Spam, duplicate, and no-response are secondary classifications, not replacements for commercial stages. Phase 1's default pipeline is fixed; configurable multiple pipelines are a future proposal.

Delivery: **Lead → Qualification → Discovery → Proposal → Written agreement/SOW → Initial payment → Kickoff → Delivery → Review → Acceptance → Final payment → Handoff → Optional maintenance**.

Project states from S1: **Pending Agreement → Pending Deposit → Ready → In Progress → Client Review → Completed → Closed**. These describe business operations before the project-management module exists.

Payment states from S1: **Draft → Issued → Partially Paid → Paid / Overdue / Cancelled**. The final model may distinguish overdue as a derived condition; do not silently change the business meaning.

Won does not mean paid. Customer conversion preserves inquiry and opportunity history and avoids duplicate contacts. A client can have more than one inquiry/opportunity; the precise linking, merge, and correction rules require review.

##### Source 3.4 Existing payment scheduling guidance

| Engagement | Existing guidance |
|---|---|
| Starter project | 50% deposit, 50% before final handoff |
| Professional project | 40% / 30% / 30% by agreed milestones |
| Enterprise | Custom milestones |
| Retainer | Monthly in advance; generally 30-day cancellation notice subject to signed terms; unused hours do not roll over unless agreed |

These are existing planning policies, not jurisdiction-specific legal advice or finalized customer contracts. Phase 1 uses proposal/agreement/invoice-based collection; payment providers and eligibility are unconfirmed. Manual financial operations can occur outside the platform. Whether Phase 1 includes a staff payment tracker is unresolved.

##### Source 3.5 Delivery, support, and readiness

Proposals should identify goals, scope, deliverables, exclusions, dependencies, timelines, milestones, revisions, fees, payment schedule, third-party costs, support, expiration, and signatures. Agreements may include MSA, SOW, NDA, DPA where applicable, change orders, maintenance terms, and contractor terms. Determine applicable legal/tax obligations from the actual operating entity and jurisdictions before use.

Define onboarding information, secure credential exchange, communication owner, change control, QA, client UAT, acceptance, documentation, handoff, and maintenance escalation. Support hours, response targets, warranty periods, revision limits, refunds, cancellation rules, and IP/license terms remain decisions for approval. Do not promise unlimited revisions or round-the-clock support.

Business readiness includes appropriate registration/ownership decisions, working business communication, contracts, permitted payment collection, receipts, reconciliation, and records. These do not automatically require building accounting or legal-management software. The separate business-roadmap numbering in S4/S6 does not supersede the platform's eight planning stages.


### 14.7 Preserved roles, phases and architecture constraints

This source block retains the approved stack, phase amendments/exclusions and unresolved provider choices. The obsolete palette paragraph is excluded here because §1–3 explicitly replace it. No architecture decision is made by copying the source constraints.

#### Source 7. Roles and access boundaries

| Role | Proposed responsibility | Boundary |
|---|---|---|
| Visitor/prospect | Browse, search, inquire, request consultation | Public actions do not require login; no private record access |
| Admin/owner | Manage approved settings, staff access, catalog/content and sales records | Administrative actions checked server-side and audited |
| Sales/staff | Work authorized leads/opportunities/customers and tasks | Assignment and record visibility policy to approve |
| Manager | Review team pipeline and reports where needed | Separate role only if operationally justified |
| Content editor | Draft/edit approved content and SEO | Proposed permission set; no automatic sales/finance access |
| Client (future) | View own projects, documents, invoices and approvals | Explicit account-to-client access; no access to other clients |
| Project team/contractor (future) | Work assigned delivery tasks/files | Minimum project access; no default commercial-data access |
| Finance operator (future) | Manage permitted billing and reconciliation | Distinct finance permission where needed |
| Organization admin (conditional future) | Manage one organization | Cannot cross tenant boundaries |
| Platform/SaaS administrator (conditional future) | Manage platform-level operations | Exceptional access governed and audited |

Final permissions matrix is unresolved. Client roles start when the portal is approved; no public staff registration. Internal collaboration and customer communication visibility must be distinguished.

#### Source 8. Three-phase scope and constraints

##### Source 8.1 Proposed structure

| Phase | Intent | Approval interpretation |
|---|---|---|
| P1 — Initial launch | Public site, catalog, solutions, lead capture, protected dashboard, essential CRM, approved limited CMS, notifications, SEO and operational quality | Preserve explicit existing scope and amendments. New details still need approval. |
| P2 — Expansion | Portal, project management, billing, broader CMS/CRM, integrations and workflow automation; limited public AI assistance if justified | Existing future concepts; detailed three-phase allocation is proposed. |
| P3 — Advanced | Specialized AMS, advanced AI, multi-organization/SaaS capabilities, sophisticated automation and analytics | Conditional future candidates, not a commitment to build all. |

S1 grouped much future work into P2, while S2 used P2/P3. This draft uses S2's more granular future placement and the owner's requested three-phase structure as a proposal. Phase conflicts remain in Section 14.

##### Source 8.2 Explicitly approved Phase 1 amendment

The ten promoted features are testimonials/client reviews; blog/articles/resource center; FAQ/knowledge base; blog/article management; SEO metadata editor; lead source tracking; website search; manual follow-up tasks/reminders; sales opportunity pipeline; lead-to-customer conversion.

Boundaries: article draft/publish/unpublish is P1; full page builder/general CMS is not. Search covers published services, solutions, articles, and FAQs. Tasks are manually created with dashboard due/overdue indicators; external reminder campaigns remain later. Pipeline stage, owner, activity and estimated value are P1; configurable pipelines and drag-and-drop are not required. Customer conversion is staff-confirmed, preserves history, avoids duplicates, and does not imply payment. Testimonials require genuine permission; public review submission/verification is not required.

##### Source 8.3 Explicit exclusions from P1 implementation

No customer login/portal, public checkout, payment gateway, full project-management suite, online proposal signing, full CMS/page builder, advanced CRM sequences, AMS, multi-tenant SaaS, or advanced AI platform. Live Calendar booking remains an open phase decision, with manual consultation requests as the existing baseline. Business proposals, agreements, deposits, and delivery can operate manually before those software modules exist.

Broader services/solutions/pricing editing, company records, media library, and integrations do not become P1 simply because limited CMS/CRM is approved. Reliability/security for any feature that is implemented is required in that feature's phase.

#### Source 9. Technology and architectural constraints

##### Source 9.1 Confirmed stack and principles

- Next.js App Router and TypeScript.
- Tailwind CSS and selective shadcn/ui.
- MongoDB + Mongoose through the Express backend; locally installed MongoDB for development, Atlas optional later through configuration. Production database hosting remains unselected; this supersedes PostgreSQL/Prisma for this platform.
- One `aradun/` repository with `frontend/` (Next.js App Router + TypeScript) and `backend/` (Express.js + TypeScript). The backend uses simple feature-based modules; all database access goes through it. No microservices or unnecessary architectural patterns.
- Separate UI, business logic, persistence, and integrations. Keep naming and module boundaries understandable for one developer.
- Server-side validation and authorization, least privilege, secure secrets, audited mutations, and practical tests.
- Centralized catalog, server-authoritative pricing, UTC timestamps, precise monetary representation, unique IDs/references, safe data changes and rollback.
- Use the Node.js runtime for Mongoose-backed operations as noted in S3; exact runtime/hosting compatibility is checked during architecture/implementation.
- No database schemas, folder tree, or complete API contract is finalized here.

##### Source 9.2 Supporting technologies and decisions

| Need | Existing direction | Selection status |
|---|---|---|
| Runtime validation | Zod in S1 | Confirmed direction; detailed schemas later |
| Form state | React Hook Form in S3 | Optional recommendation |
| Authentication | Auth.js or managed provider | Provider unselected; MFA/access needs must be met |
| Email | Transactional provider; S3 names Resend/Postmark as examples | Provider and domain setup unselected |
| Search | Simple indexed search or Atlas Search | Select smallest adequate solution later |
| CMS | Protected custom article/SEO/testimonial management initially | Broad headless CMS alternatives unselected |
| Calendar | Google Calendar requested; external booking versus integrated scheduling unresolved | Phase, account capability and synchronization unselected |
| Storage | Object storage/managed media when files require it | Provider and initial image workflow unresolved |
| Background processing | Reliable outbox/retry for notifications; durable worker/queue as needed | No heavyweight workflow engine required at launch |
| Analytics | GA4 and Search Console | Confirmed direction; consent configuration to determine |
| Monitoring | Error/uptime monitoring; Sentry or similar suggested | Provider unselected |
| Hosting | Next.js frontend hosting plus Node-capable Express hosting and selected MongoDB connectivity | Provider/region/budget unselected |
| CI/CD | GitHub Actions, isolated staging/production and verification gates | Confirmed direction; implementation later |

Specific vendor availability, costs, free-plan features, legal eligibility, and technical limits have not been verified in this consolidation. Verify when selecting them. No payment provider eligibility is assumed.


## 15. Unresolved decisions and future implementation notes

**Controlled-update accessibility concern:** Vivid Blue normal-size link/selected-label treatment on warm or pale-blue backgrounds needs an explicit component-use decision before implementation; see §3.2. The approved eight Vivid Blue token values remain unchanged. This does not block documenting the requested third theme.

### 15.1 Preserved source registers

These source registers are retained in full. They record unsettled facts, workflows, permissions and future scope, not an incomplete Step 4 inventory. **Current override:** D-022’s old navy/teal palette is superseded by C4-01/02; Inter, eight categories, five solutions, Get a Quote, exact supplied routes and approved architecture remain. Source statements about earlier stage completion are historical. C4-FINAL authorizes this consolidation without silently resolving other gates.


The owner's Step 3 approval is a planning approval. It does not supply missing package commitments, business facts, integration credentials or role policies. The following source registers are preserved, including entries already resolved by scope. A recorded issue is not automatically a blocker to planning unrelated pages.

#### Source register 9.1 Source consolidation register — O-01–O-07

| ID | Source issue | Source treatment |
|---|---|---|
| O-01 | Historical master draft metadata conflicted with owner designation of approval. | Resolved for document authority in the paired v0.2.0/v1.1.0 revision; retain historical draft provenance and substantive unresolved decisions. |
| O-02 | Earlier individual private-route reviews were absent from the original visible chat. | The 23 October owner instruction includes all P1 private pages in planning. Retain B/R/C provenance and review permissions, workflows and conditional interfaces during their section planning; do not claim missing historical approvals. |
| O-03 | Master instructs preserving previous S1 URLs but does not reproduce the complete original list. | All routes here remain proposed exact spellings pending reconciliation. Do not claim `/our-work`, solution slugs or other routes were verified against unavailable S1 text. Do not substitute `/work` or `/legal` silently. |
| O-04 | Exact role/record permissions and client identity provisioning are not finalized. | Listed users define intended responsibility only; D-013 and FR-05-01 must settle enforcement and invitation/public-registration decisions. |
| O-05 | P1 FAQ authoring, staff-admin UI, audit viewer and manual payment location are not all confirmed pages. | C rows remain optional interface allocations. Required public FAQ, access revocation, logging and business tracking must still be satisfied through the approved alternative. |
| O-06 | No approved content-instance list for cases/articles/help/products exists. | Repeatable templates are complete; actual record titles, quantities and content IDs belong to later approved content work. Do not fill gaps with fictional proof. |
| O-07 | Product/industry scope, AMS deployment boundary and full P2/P3 allocations remain conditional. | Preserve source gates and proposed phases. Do not expose future navigation or implement all candidates because they appear in a sitemap. |

**Current completion note:** O-01's document authority resolution remains settled. For O-02, this final owner instruction approves the completed Step 3 inventory and P1 page planning; it does not invent an earlier private-route approval or resolve D-013 permissions. O-03–O-07 keep their specific remaining decisions.

#### Source register 9.2 Master decision register — D-001–D-025

| ID | Issue and current evidence | Recommendation / decision required |
|---|---|---|
| D-001 | Mission/vision/positioning, supporting theme and founder-origin wording are proposed refinements. | Approve final public wording and substantiate differentiators. Keep brand/descriptor/tagline unchanged. Verify literal Arabic wording before factual publication. |
| D-002 | S3 proposes three price increases; S1 retains original prices. | Decide the price table below; retain originals meanwhile. |
| D-003 | S1/S2 place Calendar booking in P2; S3 recommends P1; owner requests Google Calendar but asks to confirm phases. | Choose manual request, external booking page, or integrated booking; decide P1/P2; verify account capability and CRM linkage. Existing P1 baseline is manual request. |
| D-004 | Service and solution prices are known, but full package scope/units/availability are not. | Approve per-offer deliverables, revisions, limits, timing, exclusions and recurring/setup charges. Clarify monthly-video billing period. Confirm available/specialist-led/coming-soon for each launch offer. |
| D-005 | Support/revision/warranty/refund/cancellation and exact commercial terms incomplete. | Approve policies within actual capacity and legal context; preserve existing payment schedule guidance until changed. |
| D-006 | Industries/Products and optional Careers/Technologies pages proposed, not in approved original navigation. | Decide capability scope and phase now; route/navigation/detail design later. Avoid empty product/industry pages. Careers only with a real recruitment need; technology information can live in relevant content. |
| D-007 | S2 lists P1 manual payment tracking; S1 has manual invoicing without payment portal. | Choose external ledger versus limited staff tracker; either must distinguish expected, invoiced and received money. No gateway/public checkout in P1. |
| D-008 | S2 lists general draft/publish as P2 but explicitly approves article draft/publish in P1. | Resolve by scope: article workflow P1; broader page/service content workflows P2. No new approval needed to retain the explicit article amendment. |
| D-009 | S2 marks staff MFA P1; S1 says if available. | Recommend mandatory production staff MFA; confirm provider/recovery policy. Keep conflict visible until selected. |
| D-010 | P1 source capture versus P2 attribution reports. | Keep inquiry-level UTM/referrer/landing data in P1; decide whether launch needs any aggregate source report beyond source visibility/basic summaries. |
| D-011 | Inquiry/contact/opportunity/customer linking, duplicate merges and conversion corrections incomplete. | Recommend one contact with multiple inquiries/opportunities; staff-reviewed merges and reversible classification changes with history. Approve exact behavior. |
| D-012 | P1 articles need featured images; FAQs/help authoring unspecified; full media library is P2. | Choose controlled asset references versus a minimal upload path. If uploads start P1, file security starts P1 too. Choose FAQ/help authoring permissions/workflow without assuming full CMS. |
| D-013 | Exact roles, data visibility and publishing rights incomplete. | Approve minimal Admin/Sales/Editor permissions and manager need; define staff provisioning/offboarding and assignment visibility. |
| D-014 | Actual jurisdictions, tracking/embeds, retention, consent and deletion processes unknown. | Review actual data practices and applicable obligations; choose cookie/consent implementation and retention rules before launch. No blanket compliance claim. |
| D-015 | S6 describes an initial existing Insurance AMS; current confirmed plan is future AMS. | Confirm actual product inventory/readiness. Keep AMS as future separate module/product until specifically approved; product marketing does not authorize building it. |
| D-016 | S1 groups AMS/advanced systems under P2; S2 and proposed structure place many in P3. | Approve the three-phase matrix requirement by requirement. Multi-organization/SaaS, marketplace, advanced AI and AMS remain conditional. |
| D-017 | GHL/external CRM and other integrations can duplicate ARADUN data. | Select system of record and sync direction per integration; approve vendors/credentials/access before implementation. |
| D-018 | Business entity/legal setup, street address, payment eligibility and mail readiness not fully established. | Record verified facts and actual account readiness. hello@aradun.com is selected but not operational yet. Do not publish uncreated sales/support inboxes or unverified offices. |
| D-019 | Priority countries, industries and delivery resources remain to confirm; the owner has selected full Phase 1 page planning rather than a reduced service subset. | Plan all 57 service detail pages in P1 (23 October amendment). Acquisition priority and verified delivery readiness remain separate decisions; additional S6 industries remain candidates. |
| D-020 | Operating budget, providers, load, recovery targets, uptime ownership and implementation timeline unresolved. | Select cost/scale/recovery expectations before architecture signoff; re-estimate expanded scope. |
| D-021 | Additional analytics events, Bing tools and session/behavior tooling proposed. | Retain core GA4/Search Console; approve optional events/tools separately with explicit meaning/privacy controls. |
| D-022 | S6 proposes six categories, new primary CTA, /work and /legal routes, blue palette, and broad headless CMS. | Preserve eight categories, five solutions, Get a Quote, existing URLs, navy/teal+Inter and approved stack. Review alternatives explicitly in the relevant stage. |
| D-023 | Portfolio/article quantity suggestions conflict and may add launch burden. | Use real readiness and quality to set targets; do not mandate building an AMS or several large demos just to launch. |
| D-024 | S6 omits solution/pricing/CRM details, calls testimonials later and claims Stage 10 complete. | Treat as supplemental reference; omissions do not remove requirements; P1 testimonial amendment wins; no current stage completion inferred. |
| D-025 | S2 places advanced workflow logs/retries P3 although S1 requires reliability earlier. | Basic failure logging/retries/idempotency accompany each feature immediately. Only the advanced workflow console is P3. |

#### Source register 9.3 Price alternatives remain unapproved

| Service | Existing Starter | Proposed Starter | Existing Professional | Proposed Professional |
|---|---|---|---|---|
| E-commerce Website Development | $999+ | $1,499+ | $2,499+ | $2,999+ |
| Business Mobile App | $1,999+ | $2,999+ | $4,999+ | $6,999+ |
| E-commerce Mobile App | $2,499+ | $3,999+ | $5,999+ | $8,999+ |

D-008 is already resolved by scope: article draft/publish P1; general content workflow P2. D-019's reduced first-publication planning limit is superseded by the owner: all 57 service pages are planned in P1. D-022 alternatives do not replace approved identity/navigation/stack. D-024 does not defer P1 testimonials or erase CRM/pricing. D-025 requires basic reliability with each feature rather than postponing it to the advanced P3 console. All other undecided details remain as stated.

#### Source register 9.4 Section-planning handoff items

| ID | Unresolved detail | Affected content/regions | Treatment in this file |
| --- | --- | --- | --- |
| U-01 | Final verified public copy and evidence inventory | Home, About, work, testimony, service/solution proof and articles | Headings/topic directions are supplied; do not invent business facts. No mandatory count of fabricated work or testimonials. |
| U-02 | Detailed future workflow and feature decisions | P2/P3 and Product Terms | Every route has a high-level blueprint; source proposed/conditional status remains. No claim of earlier individual advanced-page approval. |
| U-03 | Editing live article versus separate unpublished revision behavior | ADM-015/016 and public article visibility | Clearly distinguish draft/save/publish; decide exact editorial behavior before interaction design relies on it. No scheduled publishing assumed. |
| U-04 | Actual contact/mail operational readiness | Contact, all inquiry flows and confirmation notifications | hello@aradun.com is selected but source says not yet operational. Use verified working channels at release; no invented sales/support mailboxes. |
| U-05 | Final content instance titles/quantities and publication scheduling | Case studies, articles, help and products | Templates included in full; no unapproved record count or filler content added. |
| U-06 | Package units, limits and truthful delivery availability | All service and solution price/scope sections | Retain source prices and scope prompts; D-004 governs publication of exact package commitments. |


### 15.2 Step 4-specific remaining decisions

| ID | Remaining detail | Settled now | Required later / owner |
|---|---|---|---|
| U4-01 | Production logo masters | Folded-A identity; same geometry in terracotta/slate/vivid-blue; charcoal light-surface wordmark | Owner/designer supplies or validates exact vector geometry, export rights, small-size fidelity, transparent edge quality and inverse variant |
| U4-02 | Final header lockup | Spacious original editorial header; no oversized busy logo | Owner/designer chooses compact symbol-plus-wordmark versus original text wordmark after actual header fit; symbol remains available for other brand uses |
| U4-03 | Exact hero media and independent layers | Original matte geometric composition, technology meaning elsewhere, static mobile/reduced fallback | Designer prepares final optimized art/crops; decide whether layers justify GSAP. Raster concept is not an editable layered asset |
| U4-04 | Detailed design provenance | Owner declared Step 4 approved; core direction and all three themes explicit | Token sizes, detailed compositions and motion timings in this consolidation are R4 specifications, not fabricated earlier individual approvals; refine by measured QA without changing approved business scope |
| U4-05 | Theme preference mechanism | Terracotta initial default, explicit visitor choice, same content/layout, logo changes too | Developer selects small safe preference storage compatible with privacy/SSR; blocked-storage behavior and no-flash first paint tested. No sensitive preference profile or extra account required |
| U4-06 | Final performance/payload budgets | Source field goals and aspirational Lighthouse targets; optional motion removable | Owner/developer confirms provisional §13 budgets against real assets, route build and devices; provider/load/recovery D-020 remains |
| U4-07 | Dependency versions and foundational controls | Approved stack; CSS first; Motion and selective GSAP supported | Developer verifies compatible versions, current license/terms and chosen primitives before installation; paid plugins require separate justified approval |
| U4-08 | Article editor/assets/live editing | P1 article workflow and protected preview complete in plan | D-012/U-03 choose editor, minimal image workflow and live-revision semantics; no full media library inferred |
| U4-09 | Publication evidence/copy | All source page slots and exact catalog preserved | Owner/editor verifies actual work, quotes, images, service readiness, package units, contact operations, policies and final copy before publication |
| U4-10 | Accessibility and motion validation | Semantic/control/reduced-motion contracts specified | Developer/designer tests actual product with representative assistive-tech/keyboard/mobile conditions; final tweaks follow evidence |

**Settled exclusions:** A full dark mode is not approved by the three light themes. No third palette, new logo geometry, full CMS, client portal, checkout, configurable pipeline, paid motion plugin, WebGL or autonomous AI system is introduced. Do not list these as silently approved “future implementation tasks”; they require their own existing source phase/gate or new authorization.

### 15.3 Future implementation notes and change control

Preserve immutable page/catalog identities and the exact supplied URLs during later technical planning; O-03 historical S1 route reconciliation must be explicit before claiming historical URL verification. Compare later revisions by ID, not title alone. Record any approved business change in its authoritative source and propagate the delta to sitemap, section plan and this design specification.

Keep source data, source snapshots and draft content distinct from the display theme. A theme switch updates semantic colors, appropriate decorative art and logo treatment; it cannot alter prices, service availability, quote answers, route, publication or permissions. External proposals/social assets use the default brand unless separately selected.

Maintain a component reference set with all three themes, each state, compact/regular density and reduced motion. Build representative public and staff screens before multiplying content instances. Future details should use the existing templates where they fit; do not fragment one record into many pages to match a component library. Keep conditional P1 interfaces visible in planning while selecting a valid alternative for their required underlying capabilities.

Choose providers and architecture only in their authorized later stage, using verified current capabilities and the existing business constraints. No subscription, vendor purchase, account connection, infrastructure configuration, schema or application implementation is produced here. This document ends Step 4 and waits for the owner's separate next-stage instruction.

## 16. Final audit and version record

### 16.1 Source fingerprints and document verification

| Source | Version | SHA-256 of supplied file |
|---|---|---|
| `01-master-requirements.md` | 0.2.0 | `0cf55ee4791aa6256f5035de3cc727a26dc048c581d4a55a26cc320b574cd9a6` |
| `02-pages-sitemap.md` | 1.1.0 | `264d8bb070e003baa558742e8709f9de3506d9145a94a696b7d5593a115e9b16` |
| `03-page-sections.md` | 1.0.0 | `a119700e79245c2a01bf10f8672a630a1969cf6c6b3c9b87bf47175c212a6a84` |


Document checks passed: 215 unique page/state records; exact ID/name/URL/phase/status agreement across the three supplied inventories; 35 complete source templates plus responsive overlays; all 31 P1 private records specialized; all 207 FR allocation rows retained; 57 unique services / 58 category entries and five solution price rows retained. Every original page body and template body is present verbatim. Source files were read without modification. These are document checks, not live-product tests.

The fingerprints identify the exact supplied copies used, not a newly edited master. Original uploaded filenames can differ from their canonical document titles. Source bodies are retained intentionally so commercial qualifications, service-specific questions, private-record details and future gates remain inspectable in this standalone file. Source-local cross-references are explicitly labeled; the new design rules are outside the preserved blocks.

### 16.2 Coverage and boundary audit

| Check | Result | Limit / evidence |
|---|---|---|
| Brand and approved Chat 4 direction | Covered | Original editorial default, three light themes, folded-A recoloring, restrained header/art and selective motion decisions recorded C4-01–09 |
| Visual tokens | Covered | Semantic colors and states; typography; spacing; grids; breakpoints; elevation; icons; control sizes; motion; z-index |
| Reusable components | Covered — 51 named components | Anatomy, variants, behavior/states, reuse, foundation and optional motion in §6; shared contract supplies common states |
| Source template order | Verified — 35/35 source recipes retained | Every source body preserved, with explicit desktop/tablet/mobile overlay; shared shell outside counted regions |
| P1 public pages | Verified — 91/91 source entries | Core/catalog, repeatable details and conditional policy pages all included |
| P1 staff/auth pages | Verified — 31/31 | Four authentication plus 27 dashboard entries, specific data/actions/state contracts and responsive templates |
| Shared states | Verified — 2/2 | 404 and recoverable failure; no invented public route |
| Future inventory | Verified — 62 P2 + 28 P3 + 1 cross-phase | High-level ordered regions and reusable responsive patterns, conditional gates retained |
| Entire inventory | Verified — 215 unique records | Exact names/routes/phases/status cross-checked with master §17 and the sitemap inventory; source page bodies kept |
| Service/solution scope | Verified — 57 unique services, 58 memberships, 5 solutions | All source price tables and page-specific specializations retained; SVC-009 remains one canonical service |
| Functional traceability | Verified — 207/207 FR IDs and allocation rows | All source qualifications retained; no-page capabilities included; design overlays mapped in §14.2 |
| Business/quality/extension scope | Covered — 8 BR, 15 NFR, 6 EXT | Full source definitions retained; Step 4 mapping supplies UI implications |
| Conversion | Covered | Discovery/comparison/quote/consultation/contact/content/trust journeys, accurate confirmation and staff handoff |
| Accessibility | Specified; not live certified | Contrast samples computed; semantics, keyboard, focus, reflow, forms, status and reduced-motion requirements supplied |
| Motion technologies | Covered | CSS/Motion/GSAP ownership, levels/tokens/mapping, lazy boundaries, cleanup, static fallbacks |
| Performance | Targets and future QA specified | Field metrics retained; new byte budgets provisional; no website measurements or achieved scores claimed |
| Open decisions | Preserved | O/D/U source registers plus U4 details; D-022 visual portion explicitly superseded only |
| Step boundary | Satisfied | Markdown design deliverable only; no Step 5, implementation code, database/API design or deployment |

### 16.3 Computed color-pair checks

The following ratios use relative sRGB luminance for the exact opaque HEX pairs in §3. Rounded values are display only; pass/fail used full calculated values. These checks do not cover transparency, imagery behind text, gradients, every component state, anti-aliasing, disabled exceptions or the complete implemented focus/contrast context. All real states still require review. Pale decorative rules must not substitute for the tested functional control boundary.

| Pair | Foreground / background | Computed ratio | Threshold | Result |
|---|---|---:|---:|---|
| Primary text / page | `#20201E` / `#F7F4EE` | 14.87:1 | 4.5:1 | Pass for these opaque colors |
| Muted text / page | `#625E58` / `#F7F4EE` | 5.87:1 | 4.5:1 | Pass for these opaque colors |
| Terracotta button / white label | `#AF432D` / `#FFFFFF` | 5.73:1 | 4.5:1 | Pass for these opaque colors |
| Slate button / white label | `#3F617B` / `#FFFFFF` | 6.55:1 | 4.5:1 | Pass for these opaque colors |
| Terracotta link / page | `#AF432D` / `#F7F4EE` | 5.22:1 | 4.5:1 | Pass for these opaque colors |
| Slate link / page | `#3F617B` / `#F7F4EE` | 5.96:1 | 4.5:1 | Pass for these opaque colors |
| Control boundary / white | `#817A70` / `#FFFFFF` | 4.24:1 | 3:1 | Pass for these opaque colors |
| Control boundary / page | `#817A70` / `#F7F4EE` | 3.86:1 | 3:1 | Pass for these opaque colors |
| Terracotta inverse link / charcoal | `#F2C3B6` / `#20201E` | 10.30:1 | 4.5:1 | Pass for these opaque colors |
| Slate inverse link / charcoal | `#C4DAEB` / `#20201E` | 11.33:1 | 4.5:1 | Pass for these opaque colors |
| Vivid button / white label | `#0066FF` / `#FFFFFF` | 4.83:1 | 4.5:1 | Pass for these opaque colors |
| Vivid hover / white label | `#0057DB` / `#FFFFFF` | 6.20:1 | 4.5:1 | Pass for these opaque colors |
| Vivid active / white label | `#0047B3` / `#FFFFFF` | 8.23:1 | 4.5:1 | Pass for these opaque colors |
| Vivid normal-size link / page | `#0066FF` / `#F7F4EE` | 4.40:1 | 4.5:1 | Fail; §3.2 component-use decision remains open |
| Vivid normal-size text / subtle surface | `#0066FF` / `#EFEAE2` | 4.04:1 | 4.5:1 | Fail; retain token, do not ship this pairing |
| Vivid normal-size text / selected fill | `#0066FF` / `#EAF1FF` | 4.26:1 | 4.5:1 | Fail; retain token, do not ship this pairing |
| Vivid focus / page | `#0066FF` / `#F7F4EE` | 4.40:1 | 3:1 | Pass for this opaque non-text pairing; test gap/adjacency |
| Charcoal text / Vivid selection | `#20201E` / `#EAF1FF` | 14.40:1 | 4.5:1 | Pass for these opaque colors |
| Vivid inverse link / charcoal | `#BFD7FF` / `#20201E` | 11.17:1 | 4.5:1 | Pass for these opaque colors |
| Success text / subtle success | `#24613B` / `#EDF7EF` | 6.72:1 | 4.5:1 | Pass for these opaque colors |
| Warning text / subtle warning | `#805300` / `#FFF4D6` | 6.07:1 | 4.5:1 | Pass for these opaque colors |
| Error text / subtle error | `#A12622` / `#FCEDEB` | 6.55:1 | 4.5:1 | Pass for these opaque colors |
| Info text / subtle info | `#315F7A` / `#EDF4F8` | 6.20:1 | 4.5:1 | Pass for these opaque colors |


### 16.4 Approval and version history

**1.1.0 · 25 October 2026 — Controlled amendment:** Applied only affected portions of the four owner-requested changes and their direct cross-references; all unrelated content retained.


| Version | Date | Status | Change |
|---|---|---|---|
| 1.0.0 | 23 October 2026 | Owner-declared Step 4 completed and approved; final consolidation authorized, named source conditions retained | Consolidates approved original editorial direction and two-theme behavior, production design specifications, all template/page wireframes, complete source inventory/FR allocations/commercial catalog, motion/accessibility/performance contracts and future handoff notes |

Approval records the owner's completion instruction and explicit Chat 4 visual decisions. It does not invent separate historical approvals for each new detailed R4 token or wireframe, resolve factual/provider/permission questions, or certify a built product. This file is ready as the Step 4 planning handoff. Future substantive scope changes require an explicit recorded decision; ordinary measured design refinements should retain source identities, functionality, section order, accessibility and all three theme choices.

## 17. Authoritative technical references

Official documentation was checked for this consolidation on 23 October 2026. Links support technical guidance, not ARADUN's business approvals. Versions and provider capabilities must be checked again before later implementation. No source is used to claim that the current plan has passed a live accessibility or performance audit.

| Ref | Official source | Used for |
|---|---|---|
| W1 | [W3C — Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) | Normative accessibility criteria and conformance context; consult applicable exceptions |
| W2 | [W3C — Understanding Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | Ordinary/large-text contrast thresholds and unrounded threshold interpretation |
| W3 | [W3C — Understanding Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | AA minimum target sizing and exceptions, distinct from the project's 44px preferred target |
| M1 | [Motion — React accessibility](https://motion.dev/docs/react-accessibility) | Reduced-motion configuration and bespoke reduced-motion handling |
| M2 | [Motion — LazyMotion](https://motion.dev/docs/react-lazy-motion) | Selective/lazy animation feature loading; actual build size must be measured |
| G1 | [GSAP — React integration](https://gsap.com/resources/React/) | Scoped lifecycle, context/useGSAP cleanup and safe delayed callbacks |
| G2 | [GSAP — matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) | Media-condition scopes and reverting animation ownership |
| N1 | [Next.js — Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components) | Keep interactive client boundaries appropriately small |
| T1 | [Tailwind CSS — Theme variables](https://tailwindcss.com/docs/theme) | Semantic design-token mapping; exact selected-version configuration deferred |

**End of Step 4. No Step 5 or implementation code is included.**
