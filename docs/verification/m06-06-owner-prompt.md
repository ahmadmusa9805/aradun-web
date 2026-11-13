# M06-06 secure local owner setup preparation

2026-11-12. Implemented/verified; owner acceptance and owner-performed account/MFA setup pending. Owner approved preparing the missing local auth settings and a private input wrapper, not autonomous account creation.

## Delivered

- Root `npm run staff:setup` opens scripts/setup-owner.ps1. Approved portable Node 24 preferred; runtime family checked. Fixed native development target and existing owner identity only. No public signup or new authentication logic.
- Explicit CREATE OWNER confirmation, hidden password/confirmation prompts, 15–128 character bound. Password serialized in memory to the existing audited bootstrap CLI's private stdin; never in process arguments, files or echoed output. Only allowlisted staff/audit IDs are displayed. No automatic retry or raw child error/receipt disclosure.
- Operational URI and bootstrap flags exist only in the single child process, not a persistent arming file. Existing transaction/audit, maintained-library hashing, one-time fence and mandatory MFA retained. Test mode refuses a real child bootstrap process; tests replace it with a fake.
- Prepared missing independent 48-random-byte AUTH_SESSION_SECRET and AUTH_FACTOR_SEALING_KEY in ignored backend/.env, preserving prior secrets. Local configuration AUTH_PROVIDER=aradun-local and AUTH_SECURITY_ENABLED=true validates. Local-development login setting: five attempts per 900-second window; this is a local implementation setting, not a new production policy. Existing approved session limits unchanged.
- Expanded private-artifact scan to cover both new auth secrets. No dependency, application auth model/flow, source document, root lockfile, intake/outbox/provider switch or hosted change.

## Actual verification

- `npm run staff:setup -- -Check`: PASS, no prompt/account mutation.
- Existing lifecycle/config suite: 29 tests PASS; includes actual maintained-library bootstrap, transaction/audit and denials using disposable owned MongoDB. New five prompt tests PASS after correcting synthetic fixture scoping/module loading; repeated final five-test run PASS. These are 34 distinct covered tests across runs, not a claimed single all-green 34-test run.
- Prompt scenarios: success, cancel, short password, mismatch and CLI refusal; verify secret reaches stdin only, fixed target/delegate/process arming, no retry and safe receipt output. Real hidden-terminal rendering remains an owner interaction, not something the fake child test proves.
- Typecheck and lint/import boundaries PASS. Local config/MFA validation PASS; read-only actual staff/credential counts both **zero**. Form intake false, outbox disabled. No real password entered, account created or email sent by the agent.
- Public-secret scan with backend/.env loaded: 80 artifacts PASS. Source/register checks PASS with all 13 approved hashes unchanged; format:check PASS. No new frontend changes; build/browser suites not rerun for this script/config checkpoint.

## Owner action

In a private PowerShell terminal from repository root:

```text
npm run staff:setup
```

Read the target/identity, type CREATE OWNER if correct, then enter your password twice at the hidden prompts. This is the explicit owner-run account-creation action; do not run under automated-test mode. The command uses process-scoped RemoteSigned execution policy only, not a persistent machine policy change. Managed strings cannot guarantee memory zeroization; do not record/trace the terminal.

After success, restart backend with `npm run backend`, run frontend with `npm run frontend`, visit http://127.0.0.1:3000/staff/login and complete MFA/recovery setup privately. Never send passwords, seeds, codes or cookies in chat. If setup fails or its outcome is uncertain, stop for inspection; do not reset or blindly retry bootstrap.

Next checkpoint: owner confirms account/MFA/recovery setup, then approve M06-06 read-only recipient-readiness verification and controlled local inquiry-activation planning. No queue send, form activation, new account or next development task is automatic. Full business/privacy/custody/staging/release gates remain.

## Changed files

New scripts/setup-owner.ps1, backend/tests/owner-prompt.test.ts, tests/fixtures/owner-prompt.ps1 and this report. Updated package.json (one root command), scripts/check-public-secrets.mjs, ignored backend/.env (six local auth settings), docs/runbooks/first-owner-local.md, PROGRESS.md and DECISIONS.md. Previous database report cross-reference updated. No actual account receipt stored because no real bootstrap occurred.
