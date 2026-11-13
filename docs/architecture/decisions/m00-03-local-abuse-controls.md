# M00-03 local abuse-control decision packet

## Current disposition - approved 2026-11-10

Owner **Approve and next.** approves this local numeric policy and scoped D-014/D-020 disposition and authorizes M02-04 only. Local implementation is recorded in [M02-04 evidence](../../verification/m02-04.md); owner acceptance pending. Production and later gates below remain unchanged. Earlier proposal statements describe delivery-time status; they are superseded only for approved local scope.


2026-11-10 (Asia/Dhaka). **Prepared for owner decision; recommendations are not approved or implemented.**

## Authorization and authority

Owner **Approve and next.** accepts M06-02's verified local implementation with live gates retained and authorizes this documentation checkpoint only. Existing M00-03 planning acceptance remains unchanged; this packet resolves a proposed subset of its explicitly deferred numeric decisions, not a reopening of settled business scope. M00-01 is accepted. M02-02, M02-04's exact roadmap prerequisite, is accepted.

Sources: 01 FR-14-05/08 and NFR-008; 05 section 7.12 and ADR-13; 07 M02-04; 08 request-boundary, trusted-proxy, secret and verification instructions; 10 QA-T-M02-04 and QA-IN-10. Preserve D-014 identifier-retention and D-020 operational-threshold gates. No source document is changed. Existing privacy/recovery/staff policies continue to govern their subjects.

## Recommended local policy - requires approval

| Decision | Recommended local baseline | Boundary |
| --- | --- | --- |
| Shared storage | Existing MongoDB RateLimitBucket model, owned by Express Operations | No process-memory substitute, Redis, service account or new framework |
| Intake budget | One shared `intake` scope for contact, quote and manual consultation: 10 attempts per trusted client key per fixed 10-minute UTC window | The aggregate budget prevents bypass by switching form type; route activation belongs to M06. Count admitted HTTP attempts, including invalid payloads and retries; no claim of saved inquiry until commit |
| Existing catalog API reads | `catalog-read`: 120 requests per trusted client key per fixed 60-second UTC window | Local development baseline; frontend SSR may share a backend socket identity. Production server-to-server client attribution/capacity must be reviewed before deployment |
| Other routes | Explicit scope allowlist only; no generic collection/route name or user-provided scope | Root readiness and machine jobs retain existing contracts; do not alter outbox batch/auth settings. Authentication/recovery limits are selected with M03, not invented here |
| Window handling | UTC epoch-aligned fixed windows; allow exactly the configured count; next admission denied with 429 | Fixed windows allow a boundary burst of up to twice the count; this is not a sliding-window guarantee |
| Logical expiry | Determine active window from server time on every admission, regardless of TTL cleanup | Old buckets can never extend an expired limit; expiresAt is not an authorization substitute |
| Local operational retention | `expiresAt = window end + 1 hour`; TTL expire-at-date index | Applies only to pseudonymous limiter buckets, not inquiries, audit, sessions or outbox. MongoDB TTL cleanup is asynchronous: one hour is an eligibility target, not guaranteed physical erasure time. Actual production retention/notice/backup handling remains gated |
| Identifier | HMAC-SHA-256 over versioned, length-delimited scope and normalized trusted socket IP; store lowercase hex digest only | No email, raw IP, user agent, request contents, cookies or token in bucket. Raw socket address used transiently in memory; pseudonymous hash is still privacy-relevant |
| Secret | Backend-only `RATE_LIMIT_HASH_SECRET`, at least 32 random bytes in canonical base64url form; validate when limiter is required | No value generated or real env edited in this checkpoint. Ephemeral random secrets in tests only. Never NEXT_PUBLIC, logs, frontend imports or unkeyed hashing |
| Rotation | Local explicit rotation documented; immediately changes identifiers and resets effective counters for the remaining old window | Not a transparent migration. Production rotation requires reviewed overlap/drain strategy and privileged operation; do not silently rotate or create a second active key path |
| Local proxy trust | Express trust proxy stays false; use normalized socket peer; ignore X-Forwarded-For/Forwarded/X-Real-IP for attribution | Normalize IPv4-mapped IPv6 to IPv4; IPv6 equivalent spellings must resolve to one canonical address, without guessing from headers. NAT clients share budget; local loopback clients intentionally share it |
| Request parsing | On future public JSON intake boundary: 32 KiB total decoded body, JSON object only, no compressed body, allowlisted fields and source field limits | Reject 413 oversize and 415 unsupported media/encoding before domain writes. Existing catalog GET needs no JSON parser. Existing job route keeps its stricter 1 KiB bound |
| Origin and CSRF | Preserve exact allowed browser origins; reject missing/unknown/null origin on browser mutations; no state-changing GET | CORS is not authentication or bot protection. Cookie-authenticated staff mutations still need selected-library CSRF protection at M03. Do not broaden current read-only preflight permissions until an actual authorized mutation route needs them |
| Accessible refusal | 429 with integer Retry-After seconds to window boundary, safe code/correlation and useful retry message; no redirect or fake success | Form integration later retains input in existing component memory and announces errors without focus loss; no PII localStorage or forced CAPTCHA. No challenge service selected |
| Store unavailable | Writes fail closed with honest retryable 503, Retry-After 5 seconds; no inquiry/outbox write and no false confirmation | Catalog reads also return bounded safe 503 when shared store unavailable; no unlimited in-memory fallback. Ordinary frontend remains governed by existing API unavailable UI |
| Retry/resource bound | Atomic conditional counter admission; concurrent unique upsert collisions retry at most 3 times, then safe 503; operations have 2-second server query cap | Never fall back to unlimited admission. Do not grow requestCount indefinitely after rejection. Minimal fixed scope/subject/window keys only. Database network/selection timeout is separately bounded by connection config; server query cap is not a full wall-clock SLA |

An intake limiter increment is separate from the later business transaction, so aborted domain work does not refund anti-abuse budget. Legitimate retries remain possible within the budget; after exhaustion users receive an honest retry time and keep entered input. Submission idempotency in M06-03 must still prevent duplicate inquiries and notification events; rate limiting never replaces it.

## RateLimitBucket contract preserved

Exactly source 05 section 7.12: `_id`, createdAt, schemaVersion, allowlisted scope (max 80), subjectHash, windowStart, nonnegative integer requestCount and expiresAt. No general mutable business-record archive/revision fields. Unique `(scope, subjectHash, windowStart)` index and TTL `(expiresAt)` expire-at-date index. Register only the implemented model; automatic creation/indexing remains disabled, production index changes remain explicitly reviewed. Fixture-only index application proves behavior without changing the owner's development/production database.

No raw identifier/payload logging or public bucket-read/reset endpoint. Do not place subject hashes in public errors. Rejections use existing safe error conventions. Limiter operational data is not a staff activity feed or justification to expand audit fields.

## Production and later decisions still open

- Exact ingress/proxy chain and trusted forwarding, TLS, deployment-specific capacity and upstream pre-database exhaustion controls. MongoDB buckets alone do not prevent distributed attacks or unbounded unique-client cardinality. Do not declare production abuse protection complete from local tests.
- Actual production thresholds, limiter-identifier retention/backup/notice obligations, secret storage/rotation and monitoring ownership before launch. No business-data retention or legal conclusion follows from this local policy.
- Auth/session/recovery library and associated abuse/CSRF policy at M03; no login implementation in M02-04.
- UI input preservation/live-region/keyboard evidence at the first public form integration; grouped human checks remain due before M13/release. Do not fabricate frontend evidence while no public intake form exists.
- Outbox live transport/scheduler/fallback and source/staff/privacy eligibility bindings remain open. M06-02 local acceptance does not close its live gates or full M00-02.

## Next task proposed: M02-04 only

If approved, implement shared abuse/request foundations with this **local-only numeric policy**. The scope resolves D-014/D-020 for local M02-04 development/test only; actual deployment values remain an explicit release gate.

Expected files: `backend/src/modules/operations/models/rate-limit-bucket.model.ts`, Operations server limiter/request helpers; necessary backend env/app/error integration and `.env.example` comments; implemented-model registry; real owned-fixture concurrency/expiry tests and actual HTTP negative tests; `docs/verification/m02-04.md`, PROGRESS/DECISIONS/traceability and baseline-verifier expectations. No real secret/env modification, new dependency/install, owner-database apply, public form/submission/auth flow or external provider.

Acceptance evidence to produce:

1. Separate instances share atomic budgets; exactly N admissions under contention; collision/retry exhaustion never grants unlimited access.
2. Fixed-window expiry works while old documents remain and TTL lags; required unique/TTL indexes match source.
3. Forged forwarding headers do not change local identity; equivalent addresses normalize consistently; secret/config failures fail closed, no raw identity in storage/errors/logs.
4. Correct 429/Retry-After and safe 503 on unavailable limiter; current safe read UI contract remains intact. Domain workflow writes cannot proceed after denial.
5. Actual HTTP origin, body-size/media/encoding and safe-error probes. Shared mutation guards tested in an isolated test route; do not add a production submission route prematurely.
6. Existing regressions, strict types/lint/build and source hashes pass. Input-preservation UI/manual evidence explicitly tracked for M06, not claimed complete now.

**Next “Approve and next.”** would approve this packet's local recommendations and scoped D-014/D-020 disposition, then authorize M02-04 only. It does not approve production values or waive remaining M03/M06/release gates. No implementation in this checkpoint.

## Checkpoint review evidence

Reviewed existing Express security/CORS and outbox machine-route isolation, env guards, accepted policy dispositions and exact source roadmap. Git inspection: existing repository files untracked, no initial commit; no stage/reset/commit. Documentation-only changes; no application tests run or represented as new execution evidence. M06-02's prior 175-test result remains historical verified evidence. Source/register checker run at handoff; see current checkpoint in PROGRESS.

Final verification: `python -X utf8 docs/verification/verify-m00-01.py` PASS: 13 original source versions/byte lengths/SHA-256 hashes unchanged; 236 requirement contracts, 215 page entries, 87 tasks, inherited decisions, qualified future scope and management links reconcile. Documentation review confirms all numeric choices remain proposed, local acceptance is distinct from live operational completion, and no unrelated runtime files were changed in this checkpoint. Changed records: this new packet, PROGRESS.md, DECISIONS.md, docs/verification/m00-03.md, docs/verification/m06-02.md, docs/traceability.md and docs/verification/verify-m00-01.py. Suggested logical commit: `docs: propose local abuse-control policy and accept local outbox` (not created).
