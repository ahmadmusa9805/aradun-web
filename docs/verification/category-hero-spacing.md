# Five-category hero spacing — 2026-11-24

Owner requests restrained spacing correction on Web, AI/CRM, Digital Marketing, Mobile and Cloud category heroes, without oversized whitespace. CSS-only changes scoped to their category wrappers: explicit H1-to-supporting-headline gap, headline-to-description gap, description-to-CTA spacing and bounded hero padding. H1 text/font size, copy, colors, routes and functionality unchanged. Added20px separation before direct service grids; grouped AI/Marketing grids retain their existing spacing. No individual-service, Home or other category hero changes.

Live checks passed for all five at1440/768/390/320 (twenty combinations): title/headline/description/button groups do not overlap, title/headline gap16–22px, headline/description16–24px, description/actions24px; no horizontal overflow. Desktop hero-content height bounded below460px. Web desktop/mobile screenshots visually reviewed. Direct card-grid margin verified20px on Web/Mobile/Cloud. CSS compiled in the running frontend. No full build/regression claimed for this styling-only correction.

Files: editorial.css, PROGRESS/DECISIONS and this record. Owner visual review pending. Future page reviews should check typography rhythm and content-to-card spacing without adding large empty regions. No source, price, provider, deployment, commit or push changes.
