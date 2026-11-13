# M06-06 local form-readiness checkpoint

Subsequent approved checkpoint: [local database foundation applied and verified](m06-06-local-database.md). All 12 collections/30 application indexes are now present; earlier missing-index observations below are historical. No staff account exists yet; intake/email remain off.

2026-11-12. Owner approves the previously proposed key preparation, read-only local database/index/staff review and privacy-version check. Preparation/checks completed; activation is blocked by actual database/account readiness. Full M06-06 and release acceptance remain open.

## Results

| Item | Actual result |
| --- | --- |
| Backend private settings | Added missing RATE_LIMIT_HASH_SECRET and JOB_TRIGGER_SECRET to ignored backend/.env, each independently generated from 48 cryptographically random bytes; existing values were not rotated or printed |
| Technical privacy revision | Prepared `privacy-2026-11-12-4406a1c05c47`, derived from the current source-managed policy-copy file SHA-256. This identifies the current copy, not an invented business/privacy approval |
| Existing local MongoDB | Initially stopped; started the existing workspace-owned mongod executable against existing data files, loopback only. Replica set then reachable. No installation, database-file replacement or replica-set initialization |
| Configured development database | All 12 registered application collections absent; no index drift in existing collections because none are present. Required inquiry, outbox, rate-limit and staff collections/indexes are not ready |
| Eligible staff recipient | Zero current active Admin/Sales records. INTAKE_STAFF_RECIPIENT_IDS intentionally not invented or set. No account created/modified |
| Application configuration | loadBackendEnv validation PASS; two prepared keys present and distinct; intake false and outbox disabled. EMAIL_PROVIDER remains disabled |
| Delivery | Previously approved one-message test received and owner-confirmed. No additional email or outbox processing during this checkpoint |

## Scope and verification

- Read-only Mongoose connection uses autoCreate=false and autoIndex=false. Used replica-set hello, existing checkIndexes and a bounded staff query; no application record/index/account mutation. The local MongoDB process remains running for development.
- Original first connection attempt failed while MongoDB was stopped. After starting existing MongoDB without initialization, the readiness command completed with exit 0 and the concrete gaps above. Completed inspection does not mean index/staff readiness passed.
- Private helper `.tools/m06-readiness.ts` contains no credentials, preserves existing settings and enabled/disabled switches, and is ignored. It is an operational preparation helper, not an application module or fixture seeded into owner data.
- Updated the public-artifact scanner to include RATE_LIMIT_HASH_SECRET alongside the existing Resend/job-secret checks. Final checks PASS: backend configuration validates with distinct prepared keys; 80 public artifacts scanned against loaded private values; leak-detector self-test and targeted ESLint pass; git check-ignore confirms both private paths excluded; all 13 source hashes and source/register consistency pass. No frontend/app behavior changes or dependency installation; no browser/full test-suite rerun needed for this preparation checkpoint.
- Source privacy/retention/provider operating gates remain recorded in docs/architecture/decisions/m00-03-remaining-decisions.md. Current readable privacy copy and its technical version do not silently approve those operating decisions or public capture.

## Files

Changed ignored backend/.env: only the three missing prepared settings. New ignored .tools/m06-readiness.ts. Updated scripts/check-public-secrets.mjs, PROGRESS.md and DECISIONS.md; new this report and receipt/readiness cross-reference in resend-integration.md. No approved source documents changed.

## Next proposed checkpoint

**M06-06 local database foundation preparation:** use the existing reviewed index-plan machinery to create only the missing implemented application collections/indexes in the verified native development database; no drop/reset, data migration, email/queue execution or hosted operation. Recheck required indexes and the existing first-owner bootstrap prerequisites. Prepare a concrete secure first-owner setup procedure using the existing authentication/lifecycle code, without inventing a staff ID, password, MFA custody evidence or creating an account automatically. Do not build staff-management/dashboard features.

Acceptance for that next checkpoint: required existing schema/index plan applied and verified without drift/destructive changes; existing data preserved; remaining first-owner account/privacy/activation gates explicit. Requires next owner approval because it changes the development database, beyond this read-only inspection. Intake and mail remain off until their prerequisites are met and activation is explicitly authorized.
