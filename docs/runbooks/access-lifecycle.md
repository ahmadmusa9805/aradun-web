# Local staff access lifecycle

M03-04 local operational alternative for Phase 1. No access-management UI, public signup, default password or production emergency mechanism. This runbook/tooling is prepared for review; **no real account, environment, index apply or owner database operation was performed**. Real execution needs separate explicit owner authorization and actual private identity/custody evidence.

## Preconditions and boundaries

1. Verify the owner-approved person, email, role bundles and requested action outside the application. Retain the real approval reference and command UUID privately. The tool checks matching input and current authorization; a string labelled `approvalReference` is not proof of human identity or genuine approval. Do not invent evidence or infer authorization from an email/domain.
2. Use approved Node 24/npm and the existing local replica-set MongoDB. No Docker/Atlas installation/account is required. This tool refuses hosted tiers, SRV/remote hosts and nondevelopment database names before connecting. Ordinary local connections with `localhost`, `127.0.0.1` or loopback IPv6 are supported by the CLI.
3. Follow the existing reviewed operational index procedure first. Its plan now includes `missingCollection` in the fingerprint, including collections with only MongoDB's default `_id` index. Explicit reviewed apply creates the singleton control namespace; application startup and lifecycle commands never apply indexes. Do not fabricate backup/restoration evidence to pass the existing index-apply gate.
4. Store operational URI/arming flags in the existing ignored `backend/.env.operations` only when separately authorized. `DB_OPERATIONS_URI` is required; there is no fallback to application credentials. Bootstrap additionally requires `ALLOW_LOCAL_STAFF_BOOTSTRAP=true`; every non-help command requires `ENABLE_LOCAL_STAFF_LIFECYCLE=true` and explicit `APP_ENV=development`. Keep these disarmed after use. Do not turn a failed bootstrap into a restore/seed/backdoor script.
5. Normal application auth/security stays explicitly configured and local-only, with separate session/limiter/factor-sealing secrets and mandatory MFA. M03-03 real delivery, staging, notifications and sole-Admin/all-material-loss custody remain gates. This runbook does not waive them or establish production recovery readiness.

## Safe command interface

From the repository root, the following help command is inert:

```text
npm run staff:access -- --help
```

With the portable launcher in Git Bash: `./scripts/npm.cmd run staff:access -- --help`; PowerShell: `.\scripts\npm.cmd run staff:access -- --help`.

All operational requests are bounded private JSON on **stdin**, at most 16 KiB; never passwords/session IDs in arguments, URLs, shell history, logs, committed files or chat. Use a protected temporary input outside this repository. Delete private transient input securely under the owner's local policy; retain only nonsecret approval/receipt evidence. Avoid shell tracing or terminal transcript recording. JavaScript strings cannot promise memory zeroization.

Envelope:

```json
{
  "database": "aradun_development",
  "sessionId": "<existing private opaque Admin session ID; omitted for bootstrap>",
  "input": {}
}
```

The database must exactly match the separate operational URI target/name. `sessionId` is the opaque ID issued by the existing session authority, not a user ID, password, provider subject or role claim. For an authorized local operator, obtain the opaque portion of the HttpOnly `aradun.staff.local` cookie through browser developer tools after password and MFA verification; URL-decode once if necessary and remove the `s:` prefix and signature suffix. Never add an endpoint/JavaScript hook that exposes it, and never disable HttpOnly to obtain it. Treat the opaque ID as a bearer secret, pass it privately only, then sign out/revoke and clear the temporary material. The CLI verifies its stored hash, active staff, current roles/accessVersion, expiry and fresh MFA; it does not trust client role fields.

For separately approved real execution, one possible PowerShell transport is `Get-Content -Raw -LiteralPath '<private input path>' | npm run staff:access -- --<mode>`. Substitute a supported mode; do not execute placeholder input. A session must have both primary and factor authentication no older than five minutes for operational inspection or changes.

## One-time owner bootstrap

`--bootstrap` accepts `input` fields only:

- `commandId`: a fresh UUID, retained with private approval evidence.
- `approvalReference`: nonsecret private-evidence identifier, 1–100 ASCII letters/digits/colon/underscore/hyphen.
- `email`, `confirmedOwnerEmail`: the exact owner-approved identity, normalized and matching. An operator must verify the real approval; repeating an address does not verify mailbox ownership.
- `displayName` and owner-supplied `password` (15–128 characters; no default/generated starter password).

Bootstrap must have both staff and credential collections empty and a never-completed persistent control record. A transaction serializes attempts, creates a new maintained-library credential subject and the Admin mapping, appends system audit provenance, and permanently records closure and a hash of the approval reference. Concurrent/repeated attempts cannot create a second initial Admin. Removing a staff row does not reopen bootstrap. **Never delete/reset the control record to regain access.** Preserve it with the identity data during any separately authorized restore.

The initial Admin is active only so password sign-in can begin MFA enrollment. **No primary-only business access is granted.** Complete `/staff/verify`, verify My Account, create/store offline recovery material privately, and establish actual custody evidence. There is no public bootstrap route. Disarm the bootstrap flag immediately, including on uncertain output. If a response is lost, inspect the existing controlled state; do not assume no change occurred.

## Provision, inspect and activate

1. Sign in as an already active Admin, complete MFA, and obtain fresh authorization.
2. `--provision`: `commandId`, `approvalReference`, `email`, `displayName`, `password`, `roles` (explicit nonempty unique subset of `admin`, `sales`, `editor`). It creates a **new** immutable credential subject, invited StaffUser and `provisionedBy` provenance atomically. It never links an existing account by matching email. Duplicate email/subject or audit failure rolls back the entire operation. No email/invitation is sent and no login access is granted yet. Credential handoff is a separately reviewed private operational step, never a logged/shared default password.
3. `--inspect`: `{ "targetId": "<24-hex staff ID>" }` returns only ID, role/status and revision/accessVersion metadata, never name/email/password/seed/session/recovery data. Use this receipt to obtain current `expectedRevision`. It is a current-Admin read, not a team directory or access viewer.
4. `--status`: `commandId`, `approvalReference`, `targetId`, `expectedRevision`, `status: "active"`. It verifies the already-created immutable credential mapping and activates an invited or suspended account. Complete the staff member's MFA/recovery readiness through the approved flow. No role, assurance or provisioning metadata from a public request is accepted.

Keep only safe operation receipts (staff ID, state/version, audit ID, assignment counts) with private approval records. A command UUID binds its audit receipt to those external records; approval text is not logged. Do not retain passwords or session IDs with receipts.

## Roles, suspension, revocation and offboarding

- `--roles`: `commandId`, `approvalReference`, `targetId`, `expectedRevision`, `roles`, and `replacementId` when removing an active Admin's Admin bundle. No Manager/Finance bundle or editable permission builder.
- `--status`: same command/target fields plus `status: "suspended"` or `"deactivated"`; supply `replacementId` when removing an active Admin from active service. Invited → active/deactivated; active → suspended/deactivated; suspended → active/deactivated are supported. Deactivated is terminal in this operational alternative; do not manually reactivate/relink it. A returning staff identity requires a separately reviewed lifecycle decision instead of an ad hoc database edit.
- `--revoke`: `commandId`, `approvalReference`, `targetId`, `expectedRevision`; keeps roles/status but increments accessVersion and revokes sessions/challenges/recovery packs. It is not an emergency bypass or credential reset.

Every mutation rechecks/fences the current Admin inside its transaction, uses a shared control-document write to serialize lifecycle changes, checks target revision and appends an AuditEvent in the same transaction. Role/status/revoke changes increment accessVersion and invalidate sessions, outstanding recovery challenges/packs and pending enrollment. Active factors are retained, never copied or exposed. The actor's revision may advance as an authorization write fence; refresh inspection after any conflict. No successful audit → no successful lifecycle mutation.

Removing an active Admin requires an explicitly approved different active Admin replacement with verified factor enrollment and a current nonexpired unused recovery pack. An unenrolled/invited/suspended/deactivated/archived replacement cannot satisfy the guard. Concurrent reciprocal removals cannot leave zero active Admins. The tool offers no sole-Admin/all-material-loss override; actual custody remains a separate human/activation gate, not something inferred from a stored pack.

Offboarding immediately blocks local authorization, even if the old browser cookie or library credential still exists. It does not delete business history or silently transfer ownership. Receipts count current assigned inquiries. Contacts/opportunities/tasks are not implemented yet; their reassignment evidence is explicitly outstanding, never reported as zero. Each later owning feature must add its permitted reassignment review/commands before activation. Refresh assignment review if data changes after a receipt.

## Failure and recovery exercise

- Stale revision or duplicate command: no automatic overwrite/retry under a new identity. Inspect current state and restricted audit receipt, reconcile whether the first request committed, then obtain a fresh approved command if necessary. Reusing a consumed command UUID conflicts rather than repeating a mutation.
- No/primary/expired/stale-version/suspended/non-Admin session: deny. Sign in and verify again; do not promote assurance or edit roles/session rows manually.
- Audit/database/index failure: fail closed; transaction aborts. Check the safe receipt/state after recovery before repeating.
- Lost authenticator with retained password/offline code: use `/staff/recover`; verify the replacement, sign in again and rotate/store a fresh recovery pack. Another unused code can restart an interrupted replacement. No recovery grant gives business access.
- Forgotten password: live email delivery remains disabled. Do not claim a message was sent or print a reset token as an operational workaround. Verified delivery and actual recovery/custody rehearsal must precede activation/release.
- All factors/material lost or last Admin unavailable: stop; use only the separately approved, genuinely rehearsed custody/identity-verification procedure. No support-only reset, bootstrap reopen, direct unaudited role edit or permanent emergency login.

Owned-fixture verification covers one-time/concurrent bootstrap, actual credential/MFA provisioning, last-Admin races, stale-cookie deactivation, assignment preservation and audit rollback. It is not evidence that the real owner has saved material, that actual mail works, or that a production restore succeeded. Record real human/operator/staging evidence privately when separately authorized. See [M03-04 verification](../verification/m03-04.md).
