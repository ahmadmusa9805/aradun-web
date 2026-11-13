# Index, migration and fixture operations - M02-05

Only AuditEvent is implemented and registered today. Its five source indexes plus MongoDB `_id` are the entire application registry; it has no partial or TTL index. Partial-populated uniqueness/TTL behavior is tested on explicitly synthetic collections, without creating future application models or selecting retention. Extend the registry/expected indexes only with authorized feature models.

## Inspect and plan

With approved Node 24 active, from root:

```sh
npm run db:indexes -- --plan
```

This prints source-derived definitions without opening a database. `--check` (the default) uses backend/.env.operations and requires backend-only DB_OPERATIONS_URI, never a fallback to the API MONGODB_URI. Copy backend/.env.operations.example only if needed and never overwrite an existing real file. The local no-auth example grants no real privilege separation; use a separate verified operator identity in secured environments. The API never loads this file. Read-only checking needs find/listIndexes/listCollections-compatible inspection rights; DDL rights belong only to the operator. No accounts/roles are provisioned here.

```sh
npm run db:indexes -- --check
```

Check does not create collections or indexes. It reports missing definitions, semantic drift and extra index names without returning data or credentials; exit 1 means differences/refusal/failure. Preserve ordered compound keys and exact unique/partial/TTL semantics. Do not interpret a matching name as a matching definition. Unknown index shapes/collation/sparse/multikey preflight requirements need an explicit adapter review; current registry uses ordinary numeric-direction, non-sparse, default-collation indexes only. No production-scale capacity claim is made by a two-second inspection/preflight query bound.

## Explicit additive development apply

Nothing runs during startup, build, requests or application import. Apply requires a fresh reviewed fingerprint and a local evidence JSON file, kept outside Git if it contains private operational references. Required fields: database, fingerprint, reviewed=true, nonempty backupReference, recoveryVerified=true. These are operator attestations referencing actual evidence, not a backup engine or automatic proof of recovery. Do not fabricate evidence. The fingerprint binds database and inspected index differences, but cannot authenticate an environment/credential owner; the operator must confirm target identity separately.

```sh
npm run db:indexes -- --apply path/to/reviewed-evidence.json
```

This command is restricted to APP_ENV=development and a matching development database. Staging/production apply is refused before opening a connection and needs a future separately authorized release procedure. No actual owner database apply was executed in M02-05. Tests invoke the same additive helper only on owned disposable data; their in-memory synthetic snapshot is not a production backup or restore test.

The helper rechecks the fingerprint, refuses drift/extras, preflights unique duplicates without exposing values, adds missing indexes only, and verifies the result. It never drops/replaces indexes, runs syncIndexes, seeds data or performs a migration. Concurrent writes can invalidate a preflight; MongoDB unique enforcement is authoritative. DDL across several indexes/collections is not an atomic transaction: after failure inspect actual state and approve a new plan; do not delete the successful indexes as an automatic rollback. Extra indexes are evidence for separate review, not permission to remove them.

Production/read-only operator invocation still requires separately approved isolated credentials/network settings. Current script requires the existing application tier/origin/DB-name validation and sanitizes all error output. It does not log operational URI or evidence contents. Operations pool is bounded to one connection with finite selection/connect/socket/queue waits; it is distinct from the API pool and closes on completion.

## Migrations, fixtures and recovery

Use [migration-record instructions](../../backend/scripts/db/migrations/README.md) for actual numbered changes and external deployment ledger. No business migration or extra app collection is introduced. The real owned-DB rehearsal checks dry-run counts, repeat-safe SAMPLE upsert, bounded compare-and-set backfill, second apply no-op, verification, reversible rollback and production-reset refusal. Backup/restore prerequisites and production authorization remain mandatory; no S3, Docker, Atlas or backup provider is configured.

Run `npm run test:db` for registry/index and existing audit/transaction tests. Tests refuse inherited application MONGODB_URI/MONGODB_DB_NAME; use their owned loopback replica sets and markers. The deliberately damaged/drifted indexes and synthetic data exist only there and are removed with verified fixture cleanup. Do not copy test drop/delete logic into an operational apply script.
