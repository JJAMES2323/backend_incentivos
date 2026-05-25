# AGENTS.md — backend_incentivos

## Stack
- **Runtime:** Node.js, **Express 5**, **TypeScript 6** (strict mode)
- **DB:** PostgreSQL via `pg.Pool` (raw SQL, no ORM)
- **Auth:** JWT + bcrypt, role-based (ADMIN, RH, PRODUCCION)
- **Validation:** Zod 4

## Commands
```sh
npm run dev      # ts-node-dev --respawn --transpile-only (no typecheck in dev)
npm run build    # tsc -> dist/
npm start        # node dist/server.js
```
No test/lint/format scripts exist. No CI.

## Dev setup
1. Create PostgreSQL DB (name from `.env`) and run `schema.sql` + `seed.sql`
2. Default admin: `admin@incentivos.com` / `2324` (bcrypt hash in seed)
3. `npm install && npm run dev`

## Architecture
- Entry: `src/server.ts` → `src/app.ts`
- Modules under `src/modules/` follow a consistent pattern: `*.routes.ts` → `*.controller.ts` → `*.service.ts` → `*.repository.ts` → raw SQL via pg Pool. Each has `*.model.ts` (TS interface), `*.schema.ts` (Zod), `*.Dto.ts`.
- Module routes are mounted in `app.ts` with role middleware and Zod validation middleware.
- `@` module alias maps to `dist/` — works in dev via ts-node-dev.

## Quirks & gotchas
- **`ioredis`** is in `package.json` dependencies but **never imported** anywhere. Do not use it.
- **Express 5** — check for v5-specific behavior (e.g., `req.query` parsing, async error handling).
- **`.env` is tracked in git** (committed before being gitignored). Do not commit secrets.
- **No migration tool** — DB schema lives in `schema.sql` (pg_dump output). Apply manually.
- **`ts-node-dev`** runs with `--transpile-only` — type errors only surface via `npm run build`.

## Liquidation module
The most complex module; cross-imports `ProductionRepository` and `workLogsRepository`. Uses `withTransaction()` for batch inserts. Incentive calculation logic lives in `liquidation.service.ts`.

## Key files
| File | Purpose |
|---|---|
| `schema.sql` | Full PostgreSQL schema |
| `seed.sql` | Admin user seed |
| `src/config/env.ts` | Environment variable loader |
| `src/shared/db/transaction.ts` | `withTransaction()` helper |
| `src/shared/middlewares/validate.middleware.ts` | Zod body/params/query validation |
| `src/shared/validations/common.schemas.ts` | Reusable Zod schemas |
