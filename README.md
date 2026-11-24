# ARADUN — Technology & Digital Solutions

Catalog maintenance: `npm run catalog:check` validates the draft source registry and safe generated navigation. After an approved catalog change, regenerate explicitly with `npm run catalog:check -- --write-navigation`, review changes and run tests/build. Root build checks projection consistency. This requires Node 24, not a running MongoDB server, and does not publish draft offers.

Build. Automate. Grow.

Public website: Home and primary navigation now have a larger local implementation, reusing all category/service/solution templates. See the [public launch checklist](docs/public-launch.md) and [batch verification](docs/verification/public-website-batch-01.md). This is a development preview; legal/publication/real-inquiry activation and release gates remain. Dashboard/CRM expansion is deferred under the owner's public-first direction.

M01-01 provides the minimal npm workspace foundation and is owner-accepted. M01-03 testing infrastructure is implemented, verified and owner-accepted. M00-03 is owner-accepted. M01-02 adds environment validation; external M00-02 decisions remain deferred to affected gates. Later tasks require separate authorization.

- [Current progress and all M00–M14 tasks](PROGRESS.md)
- [Decision index and unresolved gates](DECISIONS.md)
- [M00-02 provider/version recommendations](docs/architecture/provider-selection.md)
- [M00-02 environment/database plan](docs/architecture/environment.md)
- [Source versions, hashes and historical supersessions](docs/source-baseline.md)
- [236 requirement coverage and evidence rows](docs/traceability.md)
- [215 page/route/phase entries and conditional screens](docs/page-inventory.md)
- [Categories, services, solutions and original prices](docs/catalog-register.md)
- [M00-01 verification and acceptance report](docs/verification/m00-01.md)
- [Repository instructions](AGENTS.md)

The 13 unchanged canonical documents in `docs/sources/` retain subject authority and approval qualifications. Approved architecture: Next.js App Router/TypeScript frontend, Express.js/TypeScript backend, MongoDB/Mongoose through Express, Tailwind CSS and selective shadcn/ui. Local MongoDB development requires a replica set. MongoDB/Mongoose, shadcn/ui components, the three-theme system and feature modules are added only in their authorized tasks.

## Local foundation

With the approved Node 24/npm versions active, start either application from the repository root:

```sh
npm run frontend
npm run backend
```

From the repository root, `npm run dev` starts both applications together using Node 24. Stop existing development servers first to avoid port conflicts. On Windows with the portable runtime, use `./scripts/npm.cmd run dev` in Git Bash or `.\scripts\npm.cmd run dev` in PowerShell. Ctrl+C stops the launched processes. Separate `frontend`, `backend`, `dev:frontend` and `dev:backend` commands remain available; inside either workspace, `npm run dev` starts that application only.

Use Node **24.22.2** and npm **11.19.1** (see `.node-version` and root engines). From the root, install with `npm ci`; keep the single root `package-lock.json`. In this workspace a checksum-verified portable Windows runtime is already available under ignored `.tools/`; the following launcher uses it without changing the system Node 22 installation:

```powershell
# Terminal 1, workspace root
.\scripts\npm.cmd run frontend
# Terminal 2, workspace root
.\scripts\npm.cmd run backend
```

Open http://127.0.0.1:3000 for the minimal frontend and http://127.0.0.1:4000 for the backend foundation response. Both bind to loopback. The earlier M01-01 checkpoint needed no database; current M02-01 backend startup requires a configured reachable MongoDB replica set. No hosted account or subscription is required. Stop either terminal with Ctrl+C. On another machine, install the pinned Node runtime from the official Node.js distribution and use `npm` directly instead of the workspace-specific portable launcher. `.tools/` is not committed or restored by `npm ci`.

```powershell
.\scripts\npm.cmd ci --cache .tools/npm-cache
.\scripts\npm.cmd run lint
.\scripts\npm.cmd run typecheck
.\scripts\npm.cmd run format:check
.\scripts\npm.cmd run build
# After build, production-mode local servers (separate terminals):
.\scripts\npm.cmd run start --workspace @aradun/frontend
.\scripts\npm.cmd run start --workspace @aradun/backend
```

Each application owns its `@/*` alias. Backend development uses tsx; its build rewrites aliases to `.js` paths for native Node ESM. `npm run check:boundaries` checks real imports and virtual forbidden-import fixtures; root lint includes it. Formatting targets foundation files only. The placeholder page is not an approved launch website; local ports are foundation defaults, with validated environment settings documented in the environment guide. Inter is a CSS preference with a system fallback; font assets, all three light themes and selective UI components belong to their later design tasks.

See [M01-01 versions, acceptance and verification](docs/verification/m01-01.md).

M01-03 testing commands, native disposable MongoDB setup, browser installation and reset safeguards are documented in [testing.md](docs/testing.md). Run `npm test` for unit/component/real replica-set checks; after `npm run build`, run `npm run test:browser` for keyboard/axe browser checks. Use the portable launcher here if Node 24 is not active globally.

To rerun the documentation-only baseline checks with the existing Python installation, from the workspace root:

```powershell
python -X utf8 docs/verification/verify-m00-01.py
```

The checker uses only Python's standard library, reads sources/registers, and does not install tools, modify files, access a database, or contact providers. It verifies documentation consistency, not application functionality or owner acceptance.

## Environment configuration

Frontend starts independently. Backend now requires a reachable MongoDB replica set: copy `backend/.env.example` to `backend/.env`, and `frontend/.env.example` to `frontend/.env.local`, then edit locally. Keep MongoDB credentials only in backend `.env`. Use `MONGODB_URI=mongodb://127.0.0.1:27017/aradun_development?replicaSet=rs0` for a matching local replica set, or your Atlas SRV URI with the isolated `aradun_development` database. M02-01 validates the target and connects before the backend listens; missing/unreachable MongoDB exits safely. No data is transferred by changing the URI. See [environment contract](docs/architecture/environment.md).

In **Git Bash**, activate the already available Node 24 from the repository root, then use simple npm commands in separate terminals:

```sh
export PATH="$PWD/.tools/node-v24.22.2-win-x64:$PATH"
npm run frontend
# Another terminal with Node 24 active:
npm run backend
```

Inside either application folder use `npm run dev`. Open http://127.0.0.1:3000. Restart existing servers after configuration changes. The PowerShell launcher syntax above is for PowerShell; Git Bash uses forward slashes (`./scripts/npm.cmd`) if the launcher is needed.


M02-01 adds connection reuse, bounded pools and database-only transactions. For local MongoDB ensure the server is running and its replica set is initialized under your actual name (`rs0` is the example, not automatic setup). Supply that URI in ignored backend/.env, then run `npm run backend`; startup failure means checking the URI, replica-set name and reachability. Nothing connects to Atlas or creates Docker/S3 resources automatically. [Connection/transaction verification](docs/verification/m02-01.md).


## Current appearance foundation and startup diagnosis

The foundation page now has Editorial Terracotta (default), Muted Slate Blue and Vivid Blue. Use the Appearance radios; preference stays on this browser/device. Inter is self-hosted. This is the design-system foundation, not the completed homepage. Run `npm run frontend` with Node 24 active and open http://127.0.0.1:3000.

If backend reports `Failed running src/server.ts` with a correlated dependency error, inspect the preceding fixed diagnostic. In the reviewed workspace no backend/.env/MONGODB_URI exists. With no existing backend/.env, Git Bash from root can copy the safe example using `cp backend/.env.example backend/.env`; then edit MONGODB_URI to your running replica-set target and restart `npm run backend`. Match its real replica-set name/database; copying the example alone does not start MongoDB. Never paste credentials into chat or frontend variables. Production logging remains redacted; no permissive no-database startup was introduced. Database target selection remains owner-controlled.


## Native local MongoDB (configured 2026-11-08)

Native MongoDB 8.0.34 is now configured with replica set rs0, listening only on 127.0.0.1:27017. backend/.env points to aradun_development. Persistent data lives in ignored .tools/mongodb-development/data; disposable tests use different owned databases/directories. No Docker or Atlas is required. The earlier missing-URI diagnosis above is historical; local startup is now verified.

With Node 24 active, from the repository root:

```sh
npm run mongodb
npm run backend
# Separate terminal:
npm run frontend
```

MongoDB startup returns after the owned background instance is ready and is safe to repeat. After a computer restart, run it again; no Windows service/autostart was installed. Backend/frontend stay in their own terminals as before. Status: `npm run mongodb -- --status`. Stop only when development is finished: `npm run mongodb -- --stop` (data retained; the backend will lose its database connection). Neither command deletes data or stops a foreign MongoDB process. [Setup and verification](docs/verification/local-mongodb.md).
