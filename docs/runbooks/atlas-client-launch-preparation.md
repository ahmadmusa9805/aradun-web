# Atlas foundation and client inquiry preparation

Owner decision 2026-11-13: **fresh Atlas development setup, preserve local data** selected. The fresh-versus-migration choice below is resolved in favor of fresh initialization of the already connected database. No new cluster, local-data/account transfer, local deletion or cloud write is implied by recording the decision. Recovery/target/operational access and execution approval gates still apply.

Status update 2026-11-13: owner accepted this preparation and authorized its next development-only minimal inquiry reader. [Reader implementation and tests](../verification/m06-06-inquiry-reader.md) now supersede the earlier statements below that its screens are not implemented. Cloud provisioning/migration/activation are still unexecuted; this historical plan does not authorize them.

Prepared 2026-11-13. **M06-06 preparation only**, supporting M06-07 and the public launch. Owner's `Approve and next.` accepts the verified local public-readiness checkpoint only and authorizes its named foundation/inquiry planning step. It does not approve the incomplete public release, cloud writes, data migration, new accounts or real email. Dashboard/CRM/staff feature expansion remains deferred.

## Observed target and exact proposed change

Backend-only configuration selects `aradun_development` on Atlas. A fresh read-only check confirms replica-set access. The [machine-readable additive plan](../verification/atlas-development-index-plan.json) contains the database, live-plan fingerprint, exact index definitions and missing-collection flags, without URI, host, credentials or record values.

All **12 application collections and 30 application indexes** are missing. No drift or extra indexes detected. The 12 are auditEvents, inquiries, outboxEvents, rateLimitBuckets, staffUsers, staffSessions, authCredentials, identityFactors, identityChallenges, identityRecoveryPacks, identitySecurityEvents and identityLifecycleControl. The last requires a collection but no additional schema index. Collection creation also produces MongoDB's `_id_` indexes; these are not counted among the 30 application indexes.

Proposed operation is additive **only within `aradun_development`**: create these missing collections/indexes through the existing fingerprint-checked index tool, after operational evidence and owner approval. Do not drop, reset, rename, restore over or modify any other database in the shared cluster. Do not automatically copy local owner accounts, sessions, MFA material or inquiries. This is development preparation, not selection of a production database/tier or approval of a development name for real customer production data.

## Execution gates and procedure

1. Owner chooses **fresh development foundation** (recommended for the currently empty application target) or a separately planned local-data migration. Fresh foundation does not transfer the existing local owner account. Preserve all local data either way.
2. Privately rotate the previously exposed Atlas database password and update its consumers; record only completion, never the replacement. Give the runtime only required database-scoped access. Use a separately configured operational identity for index changes; do not reuse application credentials automatically or edit the other database users.
3. Obtain genuine target recovery evidence: recheck the selected application's emptiness immediately before setup and document how a clean, isolated reconstruction/restore was verified. If data exists, take and verify a recoverable backup first. Do not assert that Atlas Free provides managed backups, use another business's database as a restore target, or invent `backupReference` / `recoveryVerified` values to satisfy a tool.
4. Prepare ignored `backend/.env.operations` with **DB_OPERATIONS_URI**, matching **MONGODB_DB_NAME** and **APP_ENV=development**. It must select the exact approved application database, use validated TLS settings and never fall back to MONGODB_URI. No working URI is included here.
5. Run the existing operational **read-only check** with Node 24: `npm run db:indexes -- --check`. It uses .env.operations. A nonzero result is expected when indexes are missing; inspect its structured result instead of treating missing indexes as connection failure. Do not run it before the private operational target is deliberately configured.
6. Compare the refreshed live fingerprint to the reviewed manifest. Any target, data, index, drift or plan change requires another review; the saved fingerprint is not indefinitely valid. Review the exact additive plan before constructing genuine private execution evidence.
7. Only after owner authorizes that concrete cloud operation, run `npm run db:indexes -- --apply <private-evidence-file>` using the existing strict evidence contract. Its evidence includes database, fingerprint, reviewed=true, real backupReference and recoveryVerified=true. This preparation creates no fabricated executable approval/evidence file.
8. Re-run `--check`; require no missing collection/index, drift or extra index. Inspect only bounded counts/metadata, record safe evidence, disarm operational access and restart the backend only when identity prerequisites below are also satisfied. Do not enable intake/mail automatically.

No commands above were executed against an operational target during this preparation; only a bounded read-only application-target plan probe was run. No cloud collections/indexes/records were changed.

## Owner recipient and backend startup dependency

The application still configures identity. Identity startup requires reviewed identity indexes. Atlas does not inherit local account data. The one-time local owner command **must not be run against Atlas**: both its CLI and lifecycle service intentionally refuse SRV/remote targets. The earlier host fix only affected account read routes, not operational bootstrap. Do not silently remove both lifecycle safeguards or insert a StaffUser directly.

Before actual form activation, review a separate target-bound fresh owner provisioning procedure or a narrowly scoped migration of required existing owner identity/audit state. Avoid copying sessions, operational arming flags or test records. Reuse maintained hashing/session libraries and lifecycle invariants; no new public registration or bootstrap endpoint. Owner enters any new password privately. This procedure is not implemented or approved by this preparation.

Choose an actual active Admin/Sales recipient from that target after provisioning; configure its ID in INTAKE_STAFF_RECIPIENT_IDS. A local database's ID is not evidence of an eligible Atlas record. Keep PUBLIC_INTAKE_ENABLED=false, EMAIL_PROVIDER=disabled and OUTBOX_MODE=disabled until this and the privacy/index/readiness checks pass. Do not temporarily turn off identity and enable real intake with invented recipients.

## Minimum receiving/responding workflow

Use the existing source-approved **M06-06** list/detail allocation, rather than a full dashboard or an unapproved email-only private-data copy:

| Stage | Minimum behavior |
| --- | --- |
| Client | Submit Contact, Quote or Consultation; receive a truthful durable reference; distinguish saved-with-delayed-email from unsaved failure |
| Storage | One immutable inquiry snapshot and deduplicated outbox work in the same short transaction |
| Notification | Fixed reviewed owner inbox receives an escaped reference/type notification and protected inquiry link; no guessed-reference access or private text in the URL |
| Owner read | Small authorized read-only `/dashboard/leads` and `/dashboard/leads/[leadId]` views: submitted identity, message/request details and immutable selected-offer context. No charts, staff editor, pipeline, assignment, notes, automated sales or full CRM |
| Authorization | Reuse Express session authorization and approved record scope: active Admin sees authorized records, Sales only assigned records, Editor/public denied. Do not broaden temporary password-only account viewing to private inquiry data or waive hosted MFA requirements |
| Reply | Owner manually replies using the confirmed mailbox and the verified inquiry email; no automatic quote, booking confirmation or campaign. Copy/reply UI must safely encode mailto values and never expose private information in analytics |
| Worker | Authenticated bounded outbox invocation and retry/reconciliation procedure; a saved inquiry must remain available if mail is delayed. No provider call inside intake transaction |

The current staff email deliberately omits the private message/contact details and tells the reader to use a staff workflow that is not implemented. Therefore a reference-only notification is **not launch-complete**. Adding full private data to email would change the reviewed privacy/access design and requires a separate explicit decision; it is not selected here.

Current development-only password login remains for its existing account view only. Development preview of inquiry screens can use disposable authenticated fixtures; owner custody/hosted access decisions remain a release gate, not staff-management implementation.

## Preparation evidence

Read-only Atlas probe completed successfully using the approved Node 24 runtime outside sandbox network restrictions, without loading an operational URI or executing DDL. Saved the manifest after `hello` replica-set confirmation and `checkIndexes`; all 12 collections missing, 30 missing application indexes, zero drift/extra. Independent Node validation of manifest database/shape/counts/fingerprint, relative runbook links and all 13 source SHA-256 values PASS. No application code changed, so previous application tests were not needlessly repeated. Created this runbook and manifest; updated PROGRESS.md, DECISIONS.md and traceability only. Suggested commit: `docs: prepare Atlas foundation and minimal inquiry response workflow` (not committed; existing unrelated/untracked work preserved).

## Next eligible implementation checkpoint

**M06-06 authorized read-only inquiry list/detail, development verification only.** Expected files: existing intake/identity modules for bounded DTOs and authorized routes; the source-allocated lead list/detail pages, shared presentation/styles; notification protected-link template as appropriate; backend/browser regressions and verification records. Resolve actual route/session mounting using existing middleware, not a second auth authority. Confirm nested frontend instructions before editing.

Acceptance: bounded deterministic list (default 20, maximum 50), validated IDs/query input, server-side Admin/Sales record scope, read-only message/offer display with escaped text, safe reply/copy controls, no-store/private indexing, unauthenticated/suspended/Editor/unassigned-Sales/guessed-ID denials; mobile/keyboard/three-theme and email-delay state checks. Use only owned disposable fixtures and mocked email. Preserve real Atlas data and existing public pages. No live activation, provisioning, migration, provider requests, hosted-security downgrade or production deployment. Respect outstanding source M03-05/M04-04 prerequisites; this development checkpoint cannot claim full M06-06 acceptance.

Next owner approval can authorize this narrow application checkpoint while cloud write/recovery/provisioning decisions remain pending. Actual production readiness still needs isolated staging, real controlled delivery, approved public content/design, hosted guards/canonical/indexing configuration and separate release approval. Full personal dashboard work stays deferred.
