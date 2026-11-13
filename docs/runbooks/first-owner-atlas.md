# One-time Atlas development owner setup

Prepared 2026-11-13 under M06-06. The owner approved preparation of this command after accepting Atlas initialization. **No real account has been created by the agent.** This is the small owner/recipient prerequisite for client inquiries, not staff-management expansion.

## Run privately

At the repository root, with Node 24 active:

```sh
npm run staff:setup:atlas
```

1. Read the displayed target and account identity. This uses the existing backend/.env connection only for the explicit command, on the approved Atlas cluster and `aradun_development`; it does not use or transfer the local database. This private interactive execution deliberately selects that connection for owner bootstrap; it creates no persistent operational fallback.
2. At **Type CREATE OWNER to continue**, type the literal `CREATE OWNER`, not your password. Any other answer cancels before a password is requested or a child bootstrap is launched.
3. Enter a fresh 15–128-character password at the hidden password prompt, then confirm it. No secret belongs in chat, arguments, history, recordings or screenshots. The existing maintained password hashing runs in the audited service, with an atomic first-owner fence, one Admin identity and audit event. Duplicate/bootstrap-completed state refuses another owner; do not reset records to retry.
4. Keep the returned staffUserId/auditId receipt. It contains no password. Restart `npm run backend`, then use the existing `/staff/login` at http://127.0.0.1:3000. Security policy is unchanged: the temporary password-only development mode permits its existing account view; private inquiry reads still require the existing stronger authorization. No MFA workflow is automatically started by this command.
5. Tell the assistant only that owner creation succeeded, optionally sharing the safe IDs. The next separately approved checkpoint can verify/configure the recipient and actual client-intake/email prerequisites. Forms/email remain off after account creation.

Optional **read-only** readiness check, with no password prompt or mutation:

```sh
npm run staff:setup:atlas -- -Check
```

With a different active Node version, use `./scripts/npm.cmd` in Git Bash or `.\scripts\npm.cmd` in PowerShell in place of npm. Existing `npm run staff:setup` continues to target the original local database and is not the Atlas command.

## Boundaries

The new CLI accepts only `--check` or explicitly process-armed `--bootstrap`, a validated authenticated SRV connection to the exact approved cluster/database, development environment, matching replica-set member and reviewed indexes. Staging/production, changed database/cluster, extra arguments, wrong owner identity, unarmed bootstrap and existing owner/bootstrap state fail closed. The Atlas-only lifecycle mode denies inspect/provision/role/status/revoke operations; the older general lifecycle CLI/service remain local-only by default.

The fixed identity is Ahmad Musa Abdullah / ahmadmusa@aradun.com / Admin with the existing required MFA policy retained. Input is bounded private stdin and uses the existing bootstrap schema/library/transaction/audit. Only allowlisted receipt fields are shown. Raw driver/child errors and extra child output are suppressed. No signup endpoint, credential file, role editor, invitation, automatic login, email, queue run or production deployment is added. Managed runtime strings cannot guarantee memory zeroization; buffers are short-lived and no password is persisted outside maintained hash/salt storage.

If refused, do not retry blindly or delete identity records. Run the read-only check and report its safe result. No second account, automatic password reset or local-data migration is performed.
