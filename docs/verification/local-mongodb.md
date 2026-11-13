# Native local MongoDB setup - 2026-11-08

Owner authorization: **Set up native local MongoDB using the existing downloaded binary**. This is the requested backend-startup support action, not acceptance of M04-01 or authorization for M04-02. Root instructions/current decisions/progress and source 05 local replica-set/source 08 persistence rules reviewed; approved sources unchanged.

Configured the already downloaded MongoDB **8.0.34** executable. No software/dependency install, cloud account, Docker container, service registration, S3, backup implementation or business feature created.

- Listener: **127.0.0.1:27017**, single-member replica set **rs0**, writable primary verified. Background process launched hidden; it remains running independently of the launcher terminal.
- Persistent data: **.tools/mongodb-development/data**. Logs: .tools/mongodb-development/mongod.log. Paths ignored; no delete/reset routine supplied. Disposable integration tests still use their own separate random-port replica sets and aradun_test_<run> databases under .tools/test-runs.
- Missing **backend/.env** created from its existing safe example, pointing to **mongodb://127.0.0.1:27017/aradun_development?replicaSet=rs0** and matching DB name. No previous env content overwritten and no credentials printed. Database/collection creation remains feature-timed; no business seed or fixture written to the development database.
- Added `npm run mongodb`: start/reuse local instance; `--status` verifies readiness; `--stop` requests graceful shutdown only after matching actual dbpath/bind/port/replica-set options. Foreign instances refused before initialization/shutdown. Repeated starts reuse the same instance and persistent path. This workspace-specific launcher requires the documented existing Windows binary/approved Node, not a global Mongo install. No OS autostart configured.

## Actual checks

1. `scripts/npm.cmd run mongodb`: PASS; first initialization elects rs0 primary. `--status` and a second start: PASS, same verified owned instance.
2. Existing backend at **http://127.0.0.1:4000** responds **HTTP 200**, JSON application ARADUN API/stage foundation. No existing user process stopped or replaced.
3. Fresh backend source process, native env-file loader/backend/.env and temporary HTTP port: PASS, connected to local MongoDB and returned HTTP 200. Only that owned temporary smoke process terminated; user backend on 4000 retained.
4. `npm run lint` and `npm run format:check`: PASS after formatting the launcher in the normal workspace context. An earlier elevated formatter/check mismatch was corrected; final workspace checks pass.
5. `npm test`: **80 passed / ten files**, including transaction/index/audit/migration/reset-isolation cases. This ran alongside the persistent development instance; it did not reset development data. No frontend code changed, so prior 20-browser-check evidence remains in M04-01; browser suite not unnecessarily repeated for native setup.
6. `git check-ignore backend/.env .tools/mongodb-development/data/WiredTiger`: both ignored. One elevated Git inspection encountered existing repository ownership checks; no global Git/safe.directory setting changed. Normal workspace Git inspection succeeds.
7. Source/register preservation verification follows the unchanged approved-source hash register; final reconciliation recorded below. No claim of tested stop/restart, production durability, backup/restore or protected remote deployment. Stop command is available for later intentional use, not exercised against the owner's now-running backend.

## Files and use

Created scripts/mongodb-local.mjs, this report and ignored backend/.env/data/log artifacts. Modified package.json (mongodb command), DECISIONS.md, PROGRESS.md, README.md and docs/verification/m04-01.md (dated restoration follow-up). No manifest dependency or lockfile version changed. Existing backend/app/frontend code, source requirements and unrelated user files preserved. No Git staging/commit/reset.

With approved Node 24 active, from repository root:

```sh
npm run mongodb
npm run backend
# Separate terminal:
npm run frontend
```

Backend currently already responds on 4000; do not launch a second backend on that port. Keep using its existing terminal. After reboot, run MongoDB first, then backend/frontend. Status: `npm run mongodb -- --status`. When finished, `npm run mongodb -- --stop` retains all database files; stop the application first to avoid a database interruption.

M04-01 remains implementation complete/owner acceptance pending. Next proposed M04-02 has not started. Local development setup no longer needs an Atlas/Docker decision; production/security/backup/limiter/monitoring gates remain for their respective tasks.
