# Database foundation design

**Date:** 2026-04-13
**Status:** Design approved, pending implementation plan
**Scope:** Pre-launch hygiene pass on the Supabase schema and RLS policies. Clean foundation before further feature work.

## Context

The schema grew organically alongside the app without an up-front design. A live inspection (see end of doc for current state) surfaced mismatches between app intent and DB enforcement, two dead columns, redundant date fields, a confused identity model linking tasks to guides, and several advisor warnings (security + performance).

This spec captures the cleanup and the small number of additions needed to support planned features (care history, photos, notifications log). Features explicitly **out of scope**: multi-user orchards, user preferences (both still YAGNI).

## Goals

1. Every column has a clear owner and a clear consumer. No dead fields.
2. DB enforces what the app already assumes (enums, required fields, lookup keys).
3. Planned near-term features (history, photos, notifications) have a shape that fits without another redesign.
4. Advisor warnings (security + performance) are resolved.
5. Task recurrence works naturally: one task row per care item per tree, completions are append-only history.

## Non-goals

- Multi-user / shared orchards.
- `user_preferences` table — still YAGNI until a real synced preference exists.
- Offline-first persistence (Phase 9 concern, not schema-level).
- Changing guide content or the guide-generation workflow.

## Final target schema

### `profiles`
Unchanged structurally.
- `id uuid pk` → `auth.users.id`
- `name text default ''`
- `created_at timestamptz default now()`
- RLS: view/update own row. **INSERT policy removed** — the `handle_new_user` trigger is the sole creator.

### `orchards`
Unchanged structurally.
- `id uuid pk default uuid_generate_v4()`
- `user_id uuid` → `profiles.id` ON DELETE CASCADE
- `name text default 'My Orchard'`
- `zip_code text null`
- `zone text null`
- `created_at timestamptz default now()`
- **New index:** `orchards_user_id_idx` on `user_id` (FK coverage, advisor).

### `trees`
- `id uuid pk default uuid_generate_v4()`
- `orchard_id uuid` → `orchards.id` ON DELETE CASCADE
- `name text not null`
- `type text not null` — **new CHECK** constraining to the 37-species union.
- `variety text null`
- `planted_on date null` — **replaces** `planted_year int` + `planted_date text`. Age computed from this.
- `age_bracket text null` — **new CHECK** constraining to `'sapling' | 'young' | 'maturing' | 'mature'`.
- `description text null`
- `created_at timestamptz default now()`
- **Dropped:** `status_label`, `status_description` (dead fields, only ever held `"Just planted"`).
- **New index:** `trees_orchard_id_idx` on `orchard_id` (FK coverage, advisor).

### `tasks`
Represents a recurring annual care item for a tree. One row per (tree × care item), lives for the life of the tree, re-activates each year when its window opens.
- `id uuid pk default uuid_generate_v4()`
- `tree_id uuid` → `trees.id` ON DELETE CASCADE
- `title text not null`
- `why text null`
- `description text null`
- `category text null` — CHECK: `pruning | feeding | monitoring | harvesting | protection` (unchanged).
- `template_id text null` — code-defined template key from `lib/care/task-templates.ts`. No FK (templates live in code).
- `window_start_month int null` CHECK 1–12
- `window_start_day int null` CHECK 1–31
- `window_end_month int null` CHECK 1–12
- `window_end_day int null` CHECK 1–31
- `due_date date null` — optional fixed date override for non-seasonal one-offs.
- `created_at timestamptz default now()`
- **Dropped:** `done` (replaced by `task_completions` existence check for the current window).
- **Dropped:** `guide_task_id` (guides are looked up by `(tree.type, task.category)` at render time).
- **Dropped:** `tasks_due_date_idx` (advisor flagged unused).
- **New index:** `tasks_tree_id_idx` on `tree_id`.

### `task_completions` (new)
Immutable append-only log of "user marked this task done on this date." Supports history views, streaks, year-over-year comparisons. Also the source of truth for "is this task done for the current window?"
- `id uuid pk default uuid_generate_v4()`
- `task_id uuid` → `tasks.id` ON DELETE CASCADE
- `tree_id uuid` → `trees.id` ON DELETE CASCADE — denormalized for query speed and to keep history queryable even if a task row is somehow recreated.
- `completed_at timestamptz default now()`
- `notes text null` — user's free-text note (e.g. "used 2 gal compost")
- `created_at timestamptz default now()`
- **Index:** `(tree_id, completed_at desc)` for history views.
- **Index:** `(task_id, completed_at desc)` for "is task done this year" queries.
- RLS: mirrors task visibility via `task_id → tree_id → orchard_id → user_id`.

**Un-check semantics:** deleting the most recent completion row for a task un-does the check. App-level operation.

### `photos` (new)
- `id uuid pk default uuid_generate_v4()`
- `tree_id uuid` → `trees.id` ON DELETE CASCADE — every photo belongs to a tree.
- `task_completion_id uuid null` → `task_completions.id` ON DELETE SET NULL — optional link to a specific completion event (e.g. "here's what my tree looked like after pruning").
- `storage_path text not null` — Supabase Storage object path (bucket + key).
- `caption text null`
- `taken_at timestamptz null` — from EXIF or user-specified; distinct from `created_at`.
- `created_at timestamptz default now()`
- **Index:** `(tree_id, taken_at desc nulls last, created_at desc)` for gallery view.
- RLS: visibility inherits from tree → orchard → user.
- **Storage:** one private bucket `tree-photos`, path convention `{user_id}/{tree_id}/{photo_id}.jpg`. Storage RLS policy matches table RLS.

### `notifications_log` (new)
Dedup + history of push notifications sent to the user. Written server-side (edge function or future notification worker); the app reads only for "recent activity" views.
- `id uuid pk default uuid_generate_v4()`
- `user_id uuid` → `profiles.id` ON DELETE CASCADE
- `tree_id uuid null` → `trees.id` ON DELETE SET NULL
- `task_id uuid null` → `tasks.id` ON DELETE SET NULL
- `kind text not null` — CHECK on a small enum (e.g. `task_active`, `task_late`, `weekly_digest`); exact values deferred to notification-feature work but CHECK is easier to extend than reshape.
- `sent_at timestamptz default now()`
- `payload jsonb null` — the notification content sent, for debugging.
- **Index:** `(user_id, sent_at desc)`.
- **Index:** `(task_id, kind, sent_at desc)` for dedup lookups.
- RLS: select-own only. Writes via service role.

### `guides`
- `id text pk` — keep as stable slug for URL-friendliness and stable references.
- `tree_type text not null` — tightened from nullable (all 53 rows have it).
- `task_category text not null` — tightened from nullable.
- `content jsonb not null`
- `source text not null`
- `approved boolean not null default false`
- `updated_at timestamptz default now()`
- Existing partial unique index on `(tree_type, task_category) where approved` — keep; this is the functional lookup key.
- RLS: select where `approved = true`. No insert/update/delete policies (migration-only writes).

## Guide lookup model

Tasks no longer carry a pointer to their guide. At render time, the app does:

```ts
fetchGuide({ treeType: tree.type, category: task.category, approved: true })
```

Returns at most one row (enforced by the partial unique index). If no guide exists yet for that pair, the UI shows the task without a "View guide" link. This drops `tasks.guide_task_id` and collapses three identifier systems (template IDs, guide slugs, and task-to-guide pointers) into two non-overlapping ones:

- **Templates** live in code, keyed by `template_id` slugs. They define what tasks should exist.
- **Guides** live in the DB, keyed functionally by `(tree_type, task_category)`. They provide how-to content.

## Task lifecycle & recurrence

1. Tree is created → `seedStarterTasks()` inserts one `tasks` row per template that applies to that species.
2. Each task row is permanent for the life of the tree.
3. "Is this task active / upcoming / late?" — computed client-side from `window_start/end` + today's date (unchanged from current behavior).
4. "Is this task done for the current window?" — `task_completions.completed_at` exists within the current window for this task.
5. User marks done → insert `task_completions` row.
6. User un-checks → delete the most recent `task_completions` row for that task (within the current window).
7. Window closes, year rolls over → the task becomes "upcoming" again next year. History accumulates in `task_completions` indefinitely.

## Security fixes (advisor-driven)

- `handle_new_user` function: add `SET search_path = public, pg_temp` to prevent schema-shadow attacks.
- `profiles` INSERT policy (`WITH CHECK (true)`): removed entirely. Trigger is the sole creator.
- Leaked-password protection (HIBP): enable via Supabase dashboard (not a migration; note in task list).

## Performance fixes (advisor-driven)

- All RLS policies: rewrite `auth.uid()` → `(select auth.uid())` to avoid per-row re-evaluation. 14 policies affected across `profiles`, `orchards`, `trees`, `tasks`.
- New covering indexes on `orchards.user_id`, `trees.orchard_id`, `tasks.tree_id`.
- Drop unused `tasks_due_date_idx`.

## App-layer changes required

These are non-optional consequences of the schema change. The implementation plan will sequence them.

- `lib/types.ts`: drop `statusLabel`, `statusDescription`, `plantedYear`, `plantedDate`, `guideTaskId`, `done` from `Tree`/`Task`. Add `plantedOn` (Date or ISO string). Add `completions` concept (probably as a separate type / hook, not embedded on `Task`).
- `lib/schemas.ts`: mirror the above.
- `lib/services/tree-service.ts`: drop status/plantedYear/plantedDate handling; add `planted_on`.
- `lib/services/task-service.ts`: drop `done` and `guide_task_id`. New `markTaskDone(taskId)` → inserts completion. New `unmarkTaskDone(taskId)` → deletes most recent completion in current window.
- New `lib/services/completion-service.ts` + `hooks/use-task-completions.ts`.
- `hooks/use-tasks.ts`: `useToggleTask` becomes a wrapper over completion insert/delete. Client-side "is done" derives from completions.
- `components/TreeCard.tsx`: replace `statusLabel`/`statusDescription` render with a derived "nearest active task" snippet. (Implementation detail — could be the active task's title + why, or a computed phrase.)
- `app/tree/new.tsx`: stop writing `statusLabel` / `statusDescription`. Optionally add planted-date picker (separate feature, not blocked by this cleanup).
- `components/TreeDetailHeader.tsx`: age computation switches from `plantedYear` to `plantedOn`.

## Data migration

The DB has 4 profiles, 3 orchards, 3 trees, 0 tasks, 53 guides. Tree rows will be migrated:

- `status_label`, `status_description` → dropped (lost, no value).
- `planted_year` (int) → merged into new `planted_on date` as `make_date(planted_year, 1, 1)` where non-null.
- `planted_date` (text) → attempted parse; unparseable rows fall through to `planted_on = null`. Given there are only 3 rows, verify manually after migration.

Tasks table is empty, so no task data to migrate. Guides keep all existing columns.

## Rollout

One migration file per logically-grouped change is overkill for a single-developer pre-launch repo. Per CLAUDE.md, migrations are forward-only; to undo, write another migration. The implementation plan will break this into 3–5 migrations for reviewability:

1. Drop dead columns + indexes (`trees.status_*`, `tasks.done`, `tasks.guide_task_id`, `tasks_due_date_idx`).
2. Collapse `planted_year`/`planted_date` → `planted_on`.
3. Add CHECK constraints (`trees.type`, `trees.age_bracket`, `guides.tree_type not null`, `guides.task_category not null`).
4. Add new tables (`task_completions`, `photos`, `notifications_log`) + indexes + RLS policies.
5. Rewrite RLS policies for `auth.uid()` perf + fix `handle_new_user` search_path + remove profiles INSERT policy + add FK-covering indexes.

App-layer changes ship alongside migration (1)–(2) in the same PR to avoid a broken-app window, since dropped columns are being read by current code.

## Open questions deferred past this cleanup

- Recurrence for non-annual tasks (e.g. "water twice a week"). Current templates are all annual-window. If watering becomes a task type, it needs a different model (probably an `interval_days` field or similar). **Not part of this cleanup.**
- Streaks / gamification on top of `task_completions`. Enabled by this design, not required.
- Photo thumbnail generation. Storage-level concern, deferred until photos ship.
- Notification `kind` enum finalization. Deferred until notification feature.

## Appendix: current DB state (2026-04-13)

- `profiles` (4 rows), `orchards` (3), `trees` (3), `tasks` (0), `guides` (53).
- All FKs `ON DELETE CASCADE` (verified directly, not inferred from migrations).
- All tables RLS-enabled.
- Advisor-flagged issues: function search_path mutable, profiles INSERT always-true, leaked-password protection off, 2 unindexed FKs, 14 RLS policies re-evaluating `auth.uid()` per row, 1 unused index.
