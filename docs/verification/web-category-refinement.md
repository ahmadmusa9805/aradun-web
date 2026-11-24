# Web & Software category refinement — 2026-11-23

Owner authorized improvements to Web & Software Development only, using the pasted ChatGPT conversation as reference rather than instructions to adopt wholesale. This is a CAT-01/M09-02 public-content checkpoint; implementation complete, owner review pending, not full M09-02 or launch acceptance.

## Scope and decisions

- Preserve /services/web-software-development, category ID/name, one descriptive H1, title/canonical/breadcrumb structure and existing design/themes. H1 is responsive at 36–64px; heading text remains Web & Software Development. Font size is a design/readability choice, not a claim of SEO ranking benefit. Added a concise category-specific meta description without changing indexing gates.
- Retain the five approved services, source price labels and existing billing qualifications. No CMS offer, new service IDs/routes, invented package inclusions or new prices. Pasted proposals for $199 landing pages / $99 fixes were not adopted. Individual service pages and other category/solution/pricing content remain unchanged.
- Explain landing pages and website fixes/optimization as project needs under existing relevant services. A one-off issue does not automatically require a rebuild or maintenance subscription. New separately priced service pages would require their own approved catalog/pricing decision; this checkpoint does not create them.
- Category-only template adds clearer hero and service copy/examples, eight capability links, a five-row needs-to-service selection guide, two labelled independent web studies in development, a five-step delivery process, six useful FAQ answers, contextual quote/consultation and the existing two related solutions. Portfolio examples remain development-gated; not invented client proof.
- No navigation reorganization, other category work, backend/registry mutation, deployment or new provider/dependency.

## Files

New templates/web-category.tsx and web-category-copy.ts; category.tsx dispatches CAT-01 only; services/[slug]/page.tsx uses the tailored description for CAT-01 only; scoped .web-category and .web-* CSS in editorial.css. Other category rendering stays on the existing generic template. DECISIONS/PROGRESS and this report record scope and evidence. Approved sources untouched.

## Actual verification

- Live desktop1440/mobile390: one H1, five service cards, eight capabilities, five process steps, six FAQ disclosures; first FAQ opens; correct canonical/title; no horizontal overflow. Service links retain canonical service routes; quote links retain service/category IDs.
- Targeted axe scan of .web-category: zero violations in Editorial Terracotta, Muted Slate Blue and Vivid Blue. A Mobile category visit confirms the CAT-01 wrapper is absent. No full-site regression claimed.
- Focused ESLint, frontend TypeScript and frontend production build passed. Desktop hero/process and full desktop/mobile screenshots inspected/saved under ignored .tools. No form submitted, email sent or database written.

Review the category introduction, five cards, capabilities/selection guide, concept-work section, process and FAQ answers. New offers and changes to individual service pages have not been silently accepted. Stop for owner review; do not start the second category automatically.
