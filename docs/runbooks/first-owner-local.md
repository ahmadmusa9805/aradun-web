# First owner: local setup procedure

Current prepared implementation: run `npm run staff:setup` in a private PowerShell terminal from repository root. [Verified wrapper, exact steps and limits](../verification/m06-06-owner-prompt.md). Separate local session/sealing keys and mandatory-MFA auth configuration are now prepared; five attempts/900 seconds is the local login setting. No account exists yet. The missing-setting/wrapper-proposal statements below describe the earlier procedure-preparation checkpoint; existing bootstrap/audit/MFA protections remain unchanged.

Prepared 2026-11-12 for the M06-06 client-inquiry dependency. No account has been created. This uses the existing [staff lifecycle runbook](access-lifecycle.md), CLI and maintained credential/session/MFA implementation; it is not a new staff-management feature.

## Known identity and prerequisites

- Owner-supplied identity: **Ahmad Musa Abdullah**, **ahmadmusa@aradun.com**. Reuse these facts; do not ask for them again or infer another identity from the notification inbox.
- Local native replica set and all 12 implemented collections/30 application indexes are ready; [database evidence](../verification/m06-06-local-database.md). Initial staff and credential collections are empty. Recheck immediately before a separately authorized bootstrap; never reset a completed bootstrap.
- Current AUTH_PROVIDER/AUTH_SECURITY_ENABLED are disabled/unset. AUTH_SESSION_SECRET, AUTH_FACTOR_SEALING_KEY, AUTH_LOGIN_LIMIT and AUTH_LOGIN_WINDOW_SECONDS are missing; backend/.env.operations does not exist. Do not silently arm authentication or operational bootstrap.
- Account creation still needs explicit owner authorization and a private **owner-supplied** password, 15–128 characters. Never request it in chat, put it in command arguments/history, create a default password or log it. Mandatory MFA and recovery custody are retained.

## Execution sequence after explicit authorization

1. Prepare separate cryptographically random application session and factor-sealing keys in ignored local configuration, preserving existing keys. Use the approved local login policy; do not invent a new security policy. Validate local `AUTH_PROVIDER=aradun-local` and `AUTH_SECURITY_ENABLED=true` configuration before enabling it.
2. Prepare the separate ignored operational configuration for the reviewed local target: APP_ENV=development, explicit DB_OPERATIONS_URI, ENABLE_LOCAL_STAFF_LIFECYCLE=true and ALLOW_LOCAL_STAFF_BOOTSTRAP=true. Never fall back to application credentials or commit operational settings. Restrict arming to the actual bootstrap invocation and disarm afterward, including on failure.
3. Use the existing `npm run staff:access -- --bootstrap` command with its bounded JSON **stdin** contract, not shell arguments. A secure owner-run terminal prompt can collect the password and construct the envelope in memory; a wrapper may only handle input/configuration and delegate to the existing CLI, not recreate authentication. Prepare that wrapper only as part of the next explicitly approved task.
4. Envelope target: aradun_development. No sessionId for initial bootstrap. Input: fresh commandId, a genuine recorded approvalReference, email and confirmedOwnerEmail both ahmadmusa@aradun.com, displayName Ahmad Musa Abdullah, and the privately supplied password. The existing maintained-library password hashing, one-time control fence, credential identity, Admin mapping and atomic audit apply unchanged.
5. Record only the safe staff-ID/audit receipt. Do not retry a lost/uncertain response blindly; inspect/reconcile existing state without resetting collections or bootstrap controls. No other account, role promotion or reusable bootstrap endpoint.
6. Restart the backend with reviewed auth configuration. Owner signs in through `/staff/login`, completes `/staff/verify`, verifies My Account, and privately stores MFA/recovery material. Never paste seeds, recovery codes, cookies or passwords into chat. Stored flags do not prove actual owner custody; obtain explicit completion evidence.
7. Only then configure the resulting eligible staff ID for the fixed inquiry inbox. Keep form intake/outbox off until the existing privacy/operating approvals, recipients and activation review are complete. Account creation is not permission to send mail, run queued work or publish/deploy.

## Current boundary

Next proposed M06-06 checkpoint: prepare validated local auth settings and a safe owner-run password-input wrapper for this existing bootstrap. The owner then runs the explicitly reviewed one-time command privately and completes MFA in the browser. Do not create an account autonomously with invented/generated credentials. Hosted authentication, recovery-delivery integration, dashboards and production release remain outside this local setup task.
