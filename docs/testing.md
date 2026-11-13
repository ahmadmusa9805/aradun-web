# Phase 1 testing foundation — M01-03

Owner-approved scope: Vitest unit/component checks, Playwright/axe browser checks, native disposable MongoDB replica-set integration checks and safe synthetic fixtures. No CI, staging/provider integration or business feature is initialized by this foundation. Use Node 24.22.2/npm 11.19.1 and the single root package-lock.json.

## Run on this Windows workspace

From the repository root, using the portable runtime launcher (or ordinary `npm` with the approved runtime active):

```powershell
.\scripts\npm.cmd ci --cache .tools/npm-cache
.\scripts\npm.cmd test
.\scripts\npm.cmd run build
.\scripts\npm.cmd run test:browser
.\scripts\npm.cmd run lint
.\scripts\npm.cmd run typecheck
.\scripts\npm.cmd run format:check
```

`npm test` runs backend unit/HTTP/safety/database tests and a frontend component test. `npm run test:unit` runs backend checks excluding MongoDB; `npm run test:db` runs the real replica-set cases. Vitest projects resolve each application's own `@/*` alias independently. Tests use explicit imports, no global assertion API and strict test TypeScript compilation.

Browser tests require a fresh frontend production build. `npm run test:browser` starts/stops an owned loopback Next.js production server on port 3100; it refuses to reuse an existing server. It does not use an arbitrary external BASE_URL or a personal signed-in browser. Existing development shortcuts and ports 3000/4000 remain unchanged. Test projects are Chromium desktop and Pixel-7-sized Chromium, not Safari/iOS/Firefox coverage. No retries mask a failing baseline.

## Native MongoDB test binary

The current machine has official MongoDB Community **8.0.34** extracted under ignored `.tools/mongodb-8.0.34/`, retaining the archive's `mongodb-win32-x86_64-windows-8.0.34/bin/mongod.exe` directory. This is a native Windows executable, not Docker, Atlas or an in-memory database emulator. No Windows service or persistent development database is installed/configured.

Fresh Windows setup, from the repository root:

```powershell
$mongoZip = Join-Path (Get-Location) '.tools/mongodb-windows-x86_64-8.0.34.zip'
New-Item -ItemType Directory -Path .tools -Force | Out-Null
curl.exe --fail --location --retry 3 'https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.0.34.zip' --output $mongoZip
if ($LASTEXITCODE -ne 0) { throw 'MongoDB download failed' }
$mongoHash = (Get-FileHash -LiteralPath $mongoZip -Algorithm SHA256).Hash.ToLowerInvariant()
if ($mongoHash -ne '6b021a0864494e4decf278b36477a29eb36072432773e4e62c2f42c302630db0') { throw 'MongoDB checksum mismatch' }
Expand-Archive -LiteralPath $mongoZip -DestinationPath .tools/mongodb-8.0.34
```

Release/version/checksum came from [official release metadata](https://downloads.mongodb.org/current.json); [official Windows instructions](https://www.mongodb.com/docs/manual/administration/install-community-windows/) cover runtime prerequisites. The code's version guard expects MongoDB 8.0.x. Updating this pin requires rechecking the official checksum and transaction/index suite. This Windows harness is not a claim of a completed Linux/CI setup; M01-04 owns future CI integration.

## Browser installation

```powershell
.\scripts\npm.cmd run test:install-browser
```

This installs Playwright's pinned Chromium and helper binaries under ignored `.tools/playwright-browsers/`. The installer and Playwright config use that same path, preserving the root lockfile and system browser. Browser dependencies are not restored by `npm ci`; rerun this step after changing Playwright's pin.

## Disposable database lifecycle and reset safety

Each Mongo suite generates a cryptographically random run ID, reserves an ephemeral port and creates a fresh `.tools/test-runs/<run-id>/` directory. It starts its own `mongod` bound to `127.0.0.1`, verifies effective dbpath/replica-set/bind/port ownership before initialization, initiates one member, waits for primary election and marks the uniquely named `aradun_test_<run-id>` database. Tests cannot attach to an existing development service or use application MongoDB credentials.

The harness requires `NODE_ENV=test` (set by Vitest). It refuses inherited `MONGODB_URI` or `MONGODB_DB_NAME`; use a fresh test terminal without application database configuration. It supplies no default production or development URI. Failure to establish ownership is a test failure, never a skipped live-target safety check.

Reset requires all of: explicit test environment, valid unguessable run marker, exact loopback host/port, exact generated database/replica set, no credentials or unknown URI parameters, matching active connection, matching live replica set and a database ownership record. A name ending in test is insufficient. Negative cases verify production mode, production/remote/credential-bearing/malformed targets and missing ownership records are refused before dropDatabase. No production credentials/server are needed for these denial tests.

Teardown closes Mongoose sessions/connections, stops only its owned child and removes only that run's directory after checking its parent path and run-ID format. No external provider calls occur in transactions; transaction operations are sequential. Interrupted runs may leave ignored directories; inspect ownership and running processes before manually removing any abandoned run. Never point cleanup at a real environment.

## Meaningful foundation cases

- Safety validation accepts only the exact owned target and rejects unsafe URI/configuration variants with strict Zod validation.
- Existing Express root response is exercised over a real ephemeral HTTP listener, proving backend alias resolution and baseline transport behavior.
- Native Mongoose/MongoDB cases demonstrate successful two-collection transaction commit, forced rollback with no partial writes, revision compare-and-set contention, concurrent unique-key rejection, real partial indexes and absent optional keys/shared synthetic email.
- Production mode and missing ownership marker cannot trigger destructive reset; a correctly marked disposable database can be reset and its marker recreated.
- The frontend component renders a semantic main/heading. A real keyboard Tab/Enter sequence follows a visible skip link to main in production HTML; axe checks WCAG A/AA rules and the tested desktop/mobile widths have no horizontal overflow.

The small skip link/main target is an accessibility correction to the existing shell, not a new page/feature module. No application-authored client JavaScript or remote asset was introduced. Automated axe checks cannot prove all accessibility; manual assistive-technology, real responsive content, all three approved themes and measured performance/SEO budgets remain with the owning Phase 1 feature/release checks.

## Synthetic data and provider doubles

All database collections/model names in the integration suite are explicitly synthetic and test-only, not CRM/application schemas. Fixture addresses use reserved `.invalid` domains. `backend/tests/support/provider-double.ts` is a deterministic in-process notification double with no network capability; it rejects real recipient domains. It proves local fixture behavior only, not email delivery, credentials, provider callback/recovery/revocation or essential-provider fallback. Real selected adapter/sandbox evidence stays gated by M00-02 and its owning feature tasks. No auth double is presented as provider authentication.

No real business proof, personal data, secrets, storage state or production exports belong in fixtures. Generated reports/traces may contain future private data; keep them ignored and use synthetic inputs. Current browser tests use only the public foundation page.

## Outputs and later checks

Unit results are printed to the terminal. Playwright writes ignored `playwright-report/` and `test-results/` output, retaining traces only for failures. `.tools/`, test data, browser binaries and build caches are ignored. Relevant sources: [roadmap M01-03](sources/07-development-roadmap.md#m01-03), [QA](sources/10-testing-qa.md), [Vitest](https://vitest.dev/guide/), [Playwright web server](https://playwright.dev/docs/test-webserver), [axe integration](https://playwright.dev/docs/accessibility-testing). [Task verification](verification/m01-03.md) records actual commands, versions, limitations and owner acceptance status.


## M02-01 database failure and recovery checks

The existing real MongoDB suite now checks the application connection/transaction helpers: concurrent opening/reuse, explicit target/pool bounds, unavailable-target recovery through an owned loopback proxy, server-injected transient write retry, multi-collection rollback, pool wait timeout/recovery, and actual Express entrypoint startup against the owned set. The child API uses a unique development-prefixed database on the same owned disposable mongod; whole-process teardown removes only its verified fixture directory. Test failpoints are enabled only with enableTestCommands on the disposable test process and disabled in finally blocks. Never configure them on a shared server.

If this Windows sandbox blocks tsx's os.userInfo lookup (uv_os_get_passwd ENOMEM), run the authorized test command with normal process permissions; do not replace the approved Node runtime or disable a test. No tsx workaround or skipped assertion is installed. Existing user development servers are not stopped by tests.
