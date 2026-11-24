# Public availability and social alignment — 2026-11-23

Owner-authorized correction to recurring public errors and inconsistent social controls; implementation complete for local review, owner acceptance pending.

## Changes

- SocialLink now renders WhatsApp icon-only with the same 44px circle as the other five platforms, retaining a green accent and accessible Chat on WhatsApp label. BusinessContact places all six in one shared row; Footer reuses the same geometry. Contact information remains grouped rather than moving icons into an unrelated page edge.
- Root npm run dev launches existing frontend/backend scripts together without new dependencies, using the active Node 24 runtime. Existing separate commands remain unchanged. Child termination is scoped to launched child process trees; README documents the combined command and avoiding duplicate servers. Launcher syntax, focused lint and frontend types pass; a full combined-server launch was not run over existing preview listeners.
- InquiryForm automatically rechecks failed readiness after fifteen seconds while visible, and on reconnect/tab return. Inputs are preserved; actual submissions are never automatically retried. Genuine outages still display truthful unavailable status rather than pretending to save a request.

## Root cause and live evidence

Frontend 3000 was responding while backend 4000 was unreachable. The attempted backend start inside the restricted runner failed in tsx's Windows userInfo call (uv_os_get_passwd), before MongoDB access. Starting the existing backend under normal Windows access succeeded: API listening on 4000; live /api/intake/status returned 200, available true, emailDeliveryEnabled true. No URI, provider, TLS, network-access rule or credential was changed. Actual internet/database outages can still cause unavailability; this is not an uninterrupted-service guarantee.

Browser checks passed on desktop 1440px and mobile 390px: six equal 44px icons in each shared social navigation; no horizontal overflow. Live /services, /solutions, /pricing and first service-category/solution detail rendered without Something went wrong. A separate controlled status response switched from unavailable to enabled automatically (three readiness GETs in development), without any POST/email. Test setup initially counted React development duplicate requests as recovery; corrected to an explicit readiness flag before recording the passing result.

Changed: package.json; scripts/dev.mjs; README.md; SocialLink; BusinessContact; editorial.css; InquiryForm; PROGRESS.md and this record. No dependency installation, lockfile change, source-document edits, database write or live email. No full regression/build or production verification claimed for this focused correction.
