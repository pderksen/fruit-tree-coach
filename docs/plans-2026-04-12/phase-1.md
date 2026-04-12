# Phase 1: RLS Policy Recovery & Security Hardening

## Problem

`supabase/migrations/20260411230248_enable_rls_and_policies.sql` is a
placeholder stub — the actual RLS policies were applied directly to
the linked remote dev database during the Supabase migration work and
were never captured in a migration file. Consequences:

- `supabase db reset` wipes and rebuilds an *insecure* database
- A fresh clone of the repo has no way to reproduce the security model
- Staging or a second dev environment would ship with RLS disabled
- The `plans-2026-04-11-supabase` Phase 8 task "verify RLS with a
  second test account" can't be done until we know what the policies
  actually are

This is a security issue masquerading as a migration-hygiene issue.
Do it first.

## Tasks

1. **Inventory the live policies.** Against the linked remote DB, dump
   policies for every table (`profiles`, `orchards`, `trees`, `tasks`
   — and `guides` if it exists yet). Use `pg_policies` or the Supabase
   MCP `execute_sql` tool with a `SELECT * FROM pg_policies WHERE
   schemaname = 'public'`. Capture the output verbatim.

2. **Inventory RLS-enabled tables.** `SELECT relname, relrowsecurity
   FROM pg_class WHERE relnamespace = 'public'::regnamespace` — confirm
   every user-data table has RLS enabled.

3. **Write a new forward migration.** `npx supabase migration new
   rls_baseline_recovery`. The SQL should:
   - `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` for each user-data
     table (idempotent via `IF NOT ENABLED` pattern or check-first)
   - `CREATE POLICY IF NOT EXISTS ...` for each live policy, exactly
     matching what's on the remote
   - Include a header comment explaining this is a recovery migration
     that captures pre-existing live policies

4. **Verify it's idempotent.** The migration must be safe to re-run
   against the current remote (policies already exist there). Use
   `CREATE POLICY IF NOT EXISTS` or `DROP POLICY ... ; CREATE POLICY
   ...` pairs.

5. **Test the reset path.** On a throwaway branch or local Supabase,
   run `supabase db reset` and confirm the rebuilt schema matches the
   remote's RLS state. Use the same `pg_policies` query to diff.

6. **Delete the stub migration.** Remove
   `supabase/migrations/20260411230248_enable_rls_and_policies.sql`
   (the 3-line placeholder) now that the real one exists. Leave the
   other `20260411*` placeholders alone — they cover non-RLS schema
   and are documented as baseline shims in
   `plans-2026-04-11-supabase/all-phases.md`.

7. **Document the verification steps.** Add a short section to
   `docs/testing.md` under "How to verify RLS" with the exact SQL
   queries and expected output shapes. This unblocks Phase 6's
   cross-user leak test.

## Out of scope

- *Writing new* policies. This phase only captures what already
  exists. If we discover a missing policy during inventory (e.g. a
  table with RLS disabled), flag it in the report but fix it in a
  separate migration with its own review.
- Policy refactors, optimizations, or consolidations. Capture first,
  improve later.

## Done when

- [ ] `pg_policies` dump from remote is in the PR description
- [ ] New recovery migration committed in `supabase/migrations/`
- [ ] Stub `20260411230248_enable_rls_and_policies.sql` deleted
- [ ] `supabase db reset` against a throwaway target produces an
      identical `pg_policies` output to the live remote
- [ ] `docs/testing.md` has the RLS verification recipe
- [ ] `npm run typecheck && npm test && npm run lint` pass
