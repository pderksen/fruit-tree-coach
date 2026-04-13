# Database foundation cleanup — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the database-foundation design spec (`docs/superpowers/specs/2026-04-13-database-foundation-design.md`): clean up accreted schema cruft, enforce app-layer contracts in the DB, fix advisor-flagged security and performance issues, and add `task_completions` / `photos` / `notifications_log` tables so planned features have a place to land.

**Architecture:** Forward-only Postgres migrations via `npx supabase migration new` + `db push`, ordered so that app code and schema stay compatible between migrations. Schema changes come first in their own PR-ready migrations; app-layer rewrites ship alongside the migrations that drop read-by-app columns. TanStack Query cache keys / hook shapes change when `tasks.done` becomes completion-derived. All Zod schemas and types updated to mirror the new DB shape.

**Tech Stack:** Supabase (Postgres 15), `npx supabase` CLI, React Native + Expo SDK 54, TypeScript, Zod, TanStack Query, Vitest.

**Pre-flight for every task that writes migrations:**
- Migrations live in `supabase/migrations/` and must be committed to git. Never use the Supabase dashboard SQL editor or MCP `apply_migration` (per CLAUDE.md).
- After editing the generated `.sql` file, run `npx supabase db push` then commit the file.
- Forward-only. To undo, write a new migration.

---

## File Structure

**New migrations (created in order):**
- `supabase/migrations/<ts>_drop_dead_columns.sql` — drop `trees.status_label`, `trees.status_description`, `tasks.done`, `tasks.guide_task_id`, drop `tasks_due_date_idx`
- `supabase/migrations/<ts>_planted_on.sql` — add `trees.planted_on date`, backfill from `planted_year` / `planted_date`, drop old columns
- `supabase/migrations/<ts>_tree_check_constraints.sql` — CHECK on `trees.type`, `trees.age_bracket`; tighten `guides.tree_type`/`task_category` to NOT NULL
- `supabase/migrations/<ts>_task_completions.sql` — create `task_completions` table + indexes + RLS
- `supabase/migrations/<ts>_photos.sql` — create `photos` table + indexes + RLS + storage bucket + storage RLS
- `supabase/migrations/<ts>_notifications_log.sql` — create `notifications_log` table + indexes + RLS
- `supabase/migrations/<ts>_rls_perf_and_security.sql` — rewrite existing RLS policies to `(select auth.uid())`, drop profiles INSERT policy, fix `handle_new_user` search_path, add FK-covering indexes on `orchards.user_id` and `trees.orchard_id` and `tasks.tree_id`

**Modified app files:**
- `lib/types.ts` — Tree/Task type changes; add `TaskCompletion`, `Photo` types
- `lib/schemas.ts` — mirror type changes, add completion/photo schemas
- `lib/services/tree-service.ts` — drop status/plantedYear/plantedDate handling; use `planted_on`
- `lib/services/task-service.ts` — drop `done`, drop `guide_task_id`
- `lib/services/completion-service.ts` (new) — insert/delete/list completions
- `hooks/use-tasks.ts` — `useToggleTask` becomes completion-based; new `useIsTaskDoneThisWindow`
- `hooks/use-task-completions.ts` (new)
- `hooks/use-trees.ts` — drop `statusLabel`/`statusDescription`/`plantedYear`/`plantedDate` from optimistic create
- `components/TreeCard.tsx` — derive status line from active tasks instead of reading `statusLabel`
- `components/TreeDetailHeader.tsx` — age from `plantedOn` instead of `plantedYear`
- `app/tree/new.tsx` — stop writing `statusLabel`/`statusDescription`
- `lib/mocks/trees.ts` — drop `statusLabel`/`statusDescription`/`plantedYear` (or leave mocks as-is if unused by real screens — verify before deleting)

**Manual (non-migration) step:** enable HIBP leaked-password protection in the Supabase Auth dashboard. Not a code change. Documented in Task 10.

---

## Execution order rationale

The migrations are grouped so each group is independently revertable-via-new-migration and leaves the app in a working state. **App code changes must ship with the migration that drops a column the app reads** — otherwise there's a window where `select status_label` errors.

Order:
1. **Task 1** — App prep: remove reads/writes of `status_label`, `status_description`, `guide_task_id`, `done` from app code. Switch `done` to completion-derived (but the table doesn't exist yet — use a stub that returns `false` for now, to be wired up in Task 4). App keeps compiling, tests pass.
2. **Task 2** — Migration: drop dead columns (`status_label`, `status_description`, `guide_task_id`, `done`, `tasks_due_date_idx`). Safe because Task 1 removed all references.
3. **Task 3** — Migration + app: `planted_on` column swap, `TreeDetailHeader` + form updates.
4. **Task 4** — Migration: create `task_completions`. App: wire the completion-based "is done" check, replace the stub from Task 1.
5. **Task 5** — Migration: CHECK constraints. No app change needed (app already respects them).
6. **Task 6** — Migration: `photos` table + storage bucket. No app change (photos feature lands later).
7. **Task 7** — Migration: `notifications_log`. No app change.
8. **Task 8** — Migration: RLS perf rewrite + profiles INSERT removal + `handle_new_user` search_path + FK covering indexes.
9. **Task 9** — Verification: re-run advisors, run full test + typecheck + lint.
10. **Task 10** — Manual: enable HIBP protection in dashboard.

---

## Task 1: App prep — remove status fields, remove `done` reads, stub completion-based check

**Files:**
- Modify: `lib/types.ts`
- Modify: `lib/schemas.ts`
- Modify: `lib/services/tree-service.ts`
- Modify: `lib/services/task-service.ts`
- Modify: `hooks/use-tasks.ts`
- Modify: `hooks/use-trees.ts`
- Modify: `components/TreeCard.tsx`
- Modify: `app/tree/new.tsx`
- Modify: `lib/mocks/trees.ts`
- Create: `hooks/use-task-done-state.ts`

This task keeps the app compiling with the **existing** DB. It removes all reads/writes of `status_label`, `status_description`, `guide_task_id`, and `done`, and introduces a hook `useIsTaskDoneThisWindow(taskId)` that returns `false` as a stub. Task 4 replaces the stub with a real query against `task_completions`.

- [ ] **Step 1: Update `lib/types.ts` — drop status fields from Tree, drop done/guideTaskId from Task**

Replace the `Tree` interface (lines 54–68) with:

```ts
export interface Tree {
  id: string;
  name: string;
  type: FruitTreeType;
  variety?: string;
  plantedYear?: number;
  plantedDate?: string;
  orchardId: string;
  ageBracket?: AgeBracket;
  description?: string;
}
```

Replace the `Task` interface (lines 79–98) with:

```ts
export interface Task {
  id: string;
  treeId: string;
  treeName: string;
  treeType?: FruitTreeType;
  title: string;
  why: string;
  dueDate?: string;
  category?: TaskCategory;
  description?: string;
  templateId?: string;
  windowStart?: { month: number; day: number };
  windowEnd?: { month: number; day: number };
  status?: TaskStatus;
  displayWindow?: string;
}
```

(Note: `plantedYear` / `plantedDate` stay here for Task 1 — Task 3 removes them and adds `plantedOn`.)

- [ ] **Step 2: Update `lib/schemas.ts` — mirror type changes**

In `treeRowSchema` (lines 61–74), remove the `status_label` and `status_description` lines.
In `treeSchema` transform (lines 78–90), remove the `statusLabel` and `statusDescription` lines.
In `newTreeSchema` (lines 94–105), remove `statusLabel` and `statusDescription`.

In `taskRowSchema` (lines 124–144), remove `done: z.boolean(),` and `guide_task_id: z.string().nullable(),`.
In `taskSchema` transform (lines 153–168), remove `done: row.done,` and `guideTaskId: optional(row.guide_task_id),`.
In `newTaskSchema` (lines 172–184), remove `done: z.boolean().default(false),` and `guideTaskId: z.string().optional(),`.

- [ ] **Step 3: Update `lib/services/tree-service.ts` — drop status columns from query/insert/update**

Change `TREE_COLUMNS` (line 7) to:

```ts
const TREE_COLUMNS =
  "id, orchard_id, name, type, variety, planted_year, planted_date, age_bracket, description, created_at";
```

In `createTree` (lines 29–50) remove the `status_label` and `status_description` lines from the insert payload.
In `updateTree` (lines 75–104) remove the `statusLabel` / `statusDescription` branches.
In `seedStarterTasks` (lines 52–73), remove the `done: false,` line from the insert rows.

- [ ] **Step 4: Update `lib/services/task-service.ts` — drop `done` and `guide_task_id`**

Change `TASK_COLUMNS` (line 6) to:

```ts
const TASK_COLUMNS =
  "id, tree_id, title, why, created_at, due_date, category, description, template_id, window_start_month, window_start_day, window_end_month, window_end_day, trees!inner(name, type)";
```

In `createTask` (lines 38–60), remove the `done:` and `guide_task_id:` lines from the insert payload.
In `TaskUpdateFields` (lines 62–70), remove `done?: boolean;` and `guideTaskId?: string | null;`.
In `updateTask` (lines 72–94), remove the `done` and `guideTaskId` branches.

- [ ] **Step 5: Create `hooks/use-task-done-state.ts` — stub the completion check**

```ts
/**
 * Is this task done within its current window?
 *
 * Stub implementation returns false. Task 4 wires this to task_completions.
 */
export function useIsTaskDoneThisWindow(_taskId: string | undefined): {
  data: boolean;
  isLoading: boolean;
} {
  return { data: false, isLoading: false };
}
```

- [ ] **Step 6: Update `hooks/use-tasks.ts` — drop `done` from filter, rewrite `useToggleTask` as no-op stub**

Remove the `!task.done` clause from `filterAndDecorate` (line 31). The new line reads:

```ts
    if (status === "hidden") continue;
```

Replace `useToggleTask` entirely (lines 95–124) with a stub that will be replaced in Task 4:

```ts
/**
 * Mark a task done / undone for the current window.
 *
 * Stub implementation — Task 4 replaces this with a completion-based mutation.
 */
export function useToggleTask() {
  return useMutation({
    mutationFn: async (_args: { id: string; done: boolean }) => {
      // No-op stub; Task 4 replaces with real completion insert/delete.
    },
  });
}
```

Update the import at the top of the file — remove `updateTask` from the imports since it's no longer used:

```ts
import {
  createTask,
  deleteTask,
  fetchTask,
  fetchTasks,
  fetchTasksByOrchard,
} from "@/lib/services/task-service";
```

- [ ] **Step 7: Update `hooks/use-trees.ts` — drop status fields from optimistic create**

In `useCreateTree` (lines 32–66), remove `statusLabel: tree.statusLabel,` and `statusDescription: tree.statusDescription,` from the `optimistic` object (lines 51–52).

- [ ] **Step 8: Update `components/TreeCard.tsx` — replace status lines with nearest-active-task derivation**

Replace the component body (lines 11–38) with:

```tsx
import { View, Text, Pressable } from "react-native";

import { FruitIcon } from "@/components/FruitIcon";
import { useTasks } from "@/hooks/use-tasks";
import type { Tree } from "@/lib/types";

interface TreeCardProps {
  tree: Tree;
  onViewCareGuide: (treeId: string) => void;
}

export function TreeCard({ tree, onViewCareGuide }: TreeCardProps) {
  const { data: tasks } = useTasks(tree.id);
  const activeTask = tasks?.find((t) => t.status === "active");
  const statusLine = activeTask?.title;
  const statusDescription = activeTask?.why;

  return (
    <View className="mb-4 rounded-3xl bg-white p-5">
      <FruitIcon type={tree.type} size={36} />

      <Text className="mt-3 text-xl font-bold text-gray-900">{tree.name}</Text>
      {statusLine ? (
        <Text className="mt-0.5 text-sm font-medium text-brand-600">
          {statusLine}
        </Text>
      ) : null}
      {statusDescription ? (
        <Text className="mt-2 text-sm leading-5 text-gray-600">
          {statusDescription}
        </Text>
      ) : null}

      <Pressable
        className="mt-4 items-center rounded-xl border border-gray-200 py-3"
        onPress={() => onViewCareGuide(tree.id)}
      >
        <Text className="text-sm font-semibold text-gray-700">
          View Care Guide
        </Text>
      </Pressable>
    </View>
  );
}
```

- [ ] **Step 9: Update `app/tree/new.tsx` — stop writing status fields**

Remove lines 59–60 from the `createTree.mutateAsync` call:

```ts
      await createTree.mutateAsync({
        orchardId: defaultOrchard.id,
        name: variety ? `${variety} ${treeType}` : treeType,
        type: treeType,
        variety,
        ageBracket: (data.ageBracket as AgeBracket) || undefined,
      });
```

- [ ] **Step 10: Update `lib/mocks/trees.ts` — drop status fields from mock data**

Remove `statusLabel` and `statusDescription` lines from each mock tree entry. If `plantedYear` is set on mocks, leave it (Task 3 removes it).

- [ ] **Step 11: Run typecheck and tests**

```bash
npm run typecheck
npm test
```

Expected: both pass. If tests reference `task.done` or `tree.statusLabel`, update them to match the new shape (those are likely in `lib/care/task-windows.test.ts` — check and fix any compile errors).

- [ ] **Step 12: Run lint**

```bash
npm run lint
```

Expected: pass. Fix any unused-import warnings from removed fields.

- [ ] **Step 13: Commit**

```bash
git add -u
git commit -m "refactor: remove status fields and done flag from app layer

Preparation for schema cleanup — app no longer reads or writes
trees.status_label, trees.status_description, tasks.done, or
tasks.guide_task_id. TreeCard derives its status line from the
nearest active task. useToggleTask is stubbed pending the
task_completions table.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Migration — drop dead columns and unused index

**Files:**
- Create: `supabase/migrations/<ts>_drop_dead_columns.sql`

- [ ] **Step 1: Generate migration file**

```bash
cd c:/Dev/fruit-tree-coach && npx supabase migration new drop_dead_columns
```

This creates a new timestamped file in `supabase/migrations/`. Note the filename.

- [ ] **Step 2: Write the SQL**

Open the new file and replace its contents with:

```sql
-- Drops fields and index identified as dead in the 2026-04-13 database
-- foundation design: status_label/status_description were written once at
-- tree creation and never updated; tasks.done is replaced by the
-- task_completions table (added in a later migration); tasks.guide_task_id
-- is replaced by a functional lookup on (tree.type, task.category);
-- tasks_due_date_idx was flagged unused by the performance advisor.

alter table public.trees drop column if exists status_label;
alter table public.trees drop column if exists status_description;

alter table public.tasks drop column if exists done;
alter table public.tasks drop column if exists guide_task_id;

drop index if exists public.tasks_due_date_idx;
```

- [ ] **Step 3: Push to remote**

```bash
npx supabase db push
```

Expected: migration applies without error. The linked project is `wrbrgzkbqcyhhjqepqiv`.

- [ ] **Step 4: Verify columns are gone**

```bash
npx supabase db execute --linked "select column_name from information_schema.columns where table_schema='public' and table_name='trees' order by column_name;"
```

Expected: no `status_label`, no `status_description`. Same check for `tasks`:

```bash
npx supabase db execute --linked "select column_name from information_schema.columns where table_schema='public' and table_name='tasks' order by column_name;"
```

Expected: no `done`, no `guide_task_id`.

(If `db execute` isn't available in the CLI version, run the same SELECTs via the MCP `execute_sql` tool instead.)

- [ ] **Step 5: Run app-side checks**

```bash
npm run typecheck && npm test && npm run lint
```

Expected: all pass. The app uses the new column list from Task 1 and should no longer reference the dropped columns.

- [ ] **Step 6: Commit**

```bash
git add supabase/migrations/
git commit -m "feat(db): drop dead columns and unused index

Drops trees.status_label, trees.status_description, tasks.done,
tasks.guide_task_id, and the unused tasks_due_date_idx per the
2026-04-13 foundation design.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Migration + app — collapse planting date fields into `planted_on date`

**Files:**
- Create: `supabase/migrations/<ts>_planted_on.sql`
- Modify: `lib/types.ts`
- Modify: `lib/schemas.ts`
- Modify: `lib/services/tree-service.ts`
- Modify: `hooks/use-trees.ts`
- Modify: `components/TreeDetailHeader.tsx`
- Modify: `lib/mocks/trees.ts`

- [ ] **Step 1: Inspect current data**

Before writing the backfill, check the 3 tree rows:

```bash
npx supabase db execute --linked "select id, planted_year, planted_date from public.trees;"
```

Note what's there so you can hand-verify the backfill. (If `planted_date` contains non-parseable strings like "April 2023", the parse-attempt SQL below will null them out — that's acceptable since there are only 3 rows, manually fix afterward if needed.)

- [ ] **Step 2: Generate migration**

```bash
npx supabase migration new planted_on
```

- [ ] **Step 3: Write the SQL**

```sql
-- Replaces trees.planted_year (int) and trees.planted_date (text) with a
-- single trees.planted_on (date) column per the 2026-04-13 foundation
-- design. Age is computed from planted_on at render time. Text
-- planted_date values that don't parse as a date fall through to null.

alter table public.trees add column planted_on date;

-- Prefer the more precise planted_date when it parses; fall back to
-- January 1 of planted_year. Unparseable planted_date values null out.
update public.trees
set planted_on = coalesce(
  (
    case
      when planted_date ~ '^\d{4}-\d{2}-\d{2}$'
        then planted_date::date
      else null
    end
  ),
  case when planted_year is not null then make_date(planted_year, 1, 1) else null end
);

alter table public.trees drop column planted_year;
alter table public.trees drop column planted_date;
```

- [ ] **Step 4: Push and verify**

```bash
npx supabase db push
npx supabase db execute --linked "select id, planted_on from public.trees;"
```

Expected: 3 rows, each with either a date or null. Hand-verify the values look right given the raw data from Step 1.

- [ ] **Step 5: Update `lib/types.ts` — `plantedOn` replaces the two old fields**

In the `Tree` interface, replace:

```ts
  plantedYear?: number;
  plantedDate?: string;
```

with:

```ts
  plantedOn?: string; // ISO date (YYYY-MM-DD)
```

- [ ] **Step 6: Update `lib/schemas.ts`**

In `treeRowSchema`, replace:

```ts
  planted_year: z.number().int().nullable(),
  planted_date: z.string().nullable(),
```

with:

```ts
  planted_on: z.string().nullable(),
```

In `treeSchema` transform, replace:

```ts
  plantedYear: optional(row.planted_year),
  plantedDate: optional(row.planted_date),
```

with:

```ts
  plantedOn: optional(row.planted_on),
```

In `newTreeSchema`, replace:

```ts
  plantedYear: z.number().int().optional(),
  plantedDate: z.string().optional(),
```

with:

```ts
  plantedOn: z.string().optional(),
```

- [ ] **Step 7: Update `lib/services/tree-service.ts`**

Change `TREE_COLUMNS` to:

```ts
const TREE_COLUMNS =
  "id, orchard_id, name, type, variety, planted_on, age_bracket, description, created_at";
```

In `createTree`, replace:

```ts
      planted_year: tree.plantedYear ?? null,
      planted_date: tree.plantedDate ?? null,
```

with:

```ts
      planted_on: tree.plantedOn ?? null,
```

In `updateTree`, replace the two `plantedYear` / `plantedDate` branches with one:

```ts
  if (fields.plantedOn !== undefined)
    patch.planted_on = fields.plantedOn ?? null;
```

- [ ] **Step 8: Update `hooks/use-trees.ts`**

In `useCreateTree`'s optimistic object, replace:

```ts
        plantedYear: tree.plantedYear,
        plantedDate: tree.plantedDate,
```

with:

```ts
        plantedOn: tree.plantedOn,
```

- [ ] **Step 9: Update `components/TreeDetailHeader.tsx` — compute age from `plantedOn`**

Replace lines 18–19:

```ts
  const currentYear = new Date().getFullYear();
  const age = tree.plantedYear ? currentYear - tree.plantedYear : null;
```

with:

```ts
  const plantedYear = tree.plantedOn
    ? new Date(tree.plantedOn).getFullYear()
    : null;
  const currentYear = new Date().getFullYear();
  const age = plantedYear !== null ? currentYear - plantedYear : null;
```

- [ ] **Step 10: Update `lib/mocks/trees.ts`**

Replace each `plantedYear: <N>` line with `plantedOn: "<N>-01-01"` (preserving the year). This keeps the mock age displays working.

- [ ] **Step 11: Verify**

```bash
npm run typecheck && npm test && npm run lint
```

Expected: all pass.

- [ ] **Step 12: Commit**

```bash
git add -u supabase/migrations/ lib/ hooks/ components/
git commit -m "feat(db): collapse planted_year and planted_date into planted_on

Replaces the two redundant planting-date columns with a single
typed date column. Age is computed at render time from planted_on.
Backfill prefers the more precise planted_date text when it parses
as ISO date, falling back to Jan 1 of planted_year.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Migration + app — create `task_completions` and wire completion-based done check

**Files:**
- Create: `supabase/migrations/<ts>_task_completions.sql`
- Create: `lib/services/completion-service.ts`
- Create: `hooks/use-task-completions.ts`
- Modify: `lib/types.ts`
- Modify: `lib/schemas.ts`
- Modify: `hooks/use-task-done-state.ts`
- Modify: `hooks/use-tasks.ts`

- [ ] **Step 1: Generate migration**

```bash
npx supabase migration new task_completions
```

- [ ] **Step 2: Write the SQL**

```sql
-- task_completions: immutable append-only log of "user marked this task
-- done on this date." Replaces the tasks.done boolean dropped earlier.
-- tree_id is denormalized for query speed and to keep history queryable
-- even if a task row is later recreated.

create table public.task_completions (
  id uuid primary key default extensions.uuid_generate_v4(),
  task_id uuid not null references public.tasks(id) on delete cascade,
  tree_id uuid not null references public.trees(id) on delete cascade,
  completed_at timestamptz not null default now(),
  notes text,
  created_at timestamptz not null default now()
);

create index task_completions_tree_id_completed_at_idx
  on public.task_completions (tree_id, completed_at desc);

create index task_completions_task_id_completed_at_idx
  on public.task_completions (task_id, completed_at desc);

alter table public.task_completions enable row level security;

create policy "Users can view own task completions"
  on public.task_completions for select
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = task_completions.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can create task completions"
  on public.task_completions for insert
  with check (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = task_completions.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can delete own task completions"
  on public.task_completions for delete
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = task_completions.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

-- No UPDATE policy: completions are immutable history.
```

- [ ] **Step 3: Push and verify**

```bash
npx supabase db push
```

Expected: applies cleanly.

- [ ] **Step 4: Add `TaskCompletion` type to `lib/types.ts`**

Append below the `Task` interface:

```ts
export interface TaskCompletion {
  id: string;
  taskId: string;
  treeId: string;
  completedAt: string; // ISO timestamp
  notes?: string;
}
```

- [ ] **Step 5: Add completion schemas to `lib/schemas.ts`**

Append below `newTaskSchema`:

```ts
export const taskCompletionRowSchema = z.object({
  id: z.string().uuid(),
  task_id: z.string().uuid(),
  tree_id: z.string().uuid(),
  completed_at: z.string(),
  notes: z.string().nullable(),
});

export const taskCompletionSchema = taskCompletionRowSchema.transform((row) => ({
  id: row.id,
  taskId: row.task_id,
  treeId: row.tree_id,
  completedAt: row.completed_at,
  notes: optional(row.notes),
}));

export type TaskCompletionRow = z.infer<typeof taskCompletionRowSchema>;
```

- [ ] **Step 6: Create `lib/services/completion-service.ts`**

```ts
import { supabase } from "@/lib/supabase";
import { taskCompletionSchema } from "@/lib/schemas";
import type { TaskCompletion } from "@/lib/types";

const COLS = "id, task_id, tree_id, completed_at, notes";

export async function fetchCompletionsForTask(
  taskId: string,
): Promise<TaskCompletion[]> {
  const { data, error } = await supabase
    .from("task_completions")
    .select(COLS)
    .eq("task_id", taskId)
    .order("completed_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row) => taskCompletionSchema.parse(row));
}

export async function fetchCompletionsForTree(
  treeId: string,
): Promise<TaskCompletion[]> {
  const { data, error } = await supabase
    .from("task_completions")
    .select(COLS)
    .eq("tree_id", treeId)
    .order("completed_at", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((row) => taskCompletionSchema.parse(row));
}

export async function createCompletion(args: {
  taskId: string;
  treeId: string;
  notes?: string;
}): Promise<TaskCompletion> {
  const { data, error } = await supabase
    .from("task_completions")
    .insert({
      task_id: args.taskId,
      tree_id: args.treeId,
      notes: args.notes ?? null,
    })
    .select(COLS)
    .single();
  if (error) throw error;
  return taskCompletionSchema.parse(data);
}

export async function deleteCompletion(id: string): Promise<void> {
  const { error } = await supabase
    .from("task_completions")
    .delete()
    .eq("id", id);
  if (error) throw error;
}
```

- [ ] **Step 7: Create `hooks/use-task-completions.ts`**

```ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createCompletion,
  deleteCompletion,
  fetchCompletionsForTask,
  fetchCompletionsForTree,
} from "@/lib/services/completion-service";

export const completionsForTaskKey = (taskId: string | undefined) => [
  "completions",
  "task",
  taskId,
];
export const completionsForTreeKey = (treeId: string | undefined) => [
  "completions",
  "tree",
  treeId,
];

export function useCompletionsForTask(taskId: string | undefined) {
  return useQuery({
    queryKey: completionsForTaskKey(taskId),
    queryFn: () => fetchCompletionsForTask(taskId!),
    enabled: !!taskId,
  });
}

export function useCompletionsForTree(treeId: string | undefined) {
  return useQuery({
    queryKey: completionsForTreeKey(treeId),
    queryFn: () => fetchCompletionsForTree(treeId!),
    enabled: !!treeId,
  });
}

export function useCreateCompletion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCompletion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completions"] });
    },
  });
}

export function useDeleteCompletion() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCompletion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completions"] });
    },
  });
}
```

- [ ] **Step 8: Replace the stub in `hooks/use-task-done-state.ts`**

```ts
import { useCompletionsForTask } from "@/hooks/use-task-completions";
import { computeTaskStatus } from "@/lib/care/task-windows";
import type { Task } from "@/lib/types";

/**
 * Is this task done within its current window?
 *
 * A task is considered done if there's a completion whose completed_at
 * falls between the resolved window start and end for the nearest active
 * instance of the window. Uses computeTaskStatus to get the resolved
 * window dates.
 */
export function useIsTaskDoneThisWindow(task: Task | undefined): {
  data: boolean;
  isLoading: boolean;
} {
  const { data: completions, isLoading } = useCompletionsForTask(task?.id);
  if (!task || isLoading) return { data: false, isLoading };
  const { resolvedStart, resolvedEnd } = computeTaskStatus(task, new Date());
  if (!resolvedStart || !resolvedEnd) return { data: false, isLoading: false };
  const done = (completions ?? []).some((c) => {
    const ts = new Date(c.completedAt);
    return ts >= resolvedStart && ts <= resolvedEnd;
  });
  return { data: done, isLoading: false };
}
```

**Note:** this hook's signature changed from `(taskId)` to `(task)` — callers must pass the Task object. Update any caller. Search and fix:

```bash
grep -rn "useIsTaskDoneThisWindow" --include="*.ts" --include="*.tsx" .
```

If there are no callers yet (Task 1's stub had a deliberate `_taskId` arg never wired up), no fix is needed.

- [ ] **Step 9: Replace `useToggleTask` in `hooks/use-tasks.ts` with the real completion-based version**

Replace the stub from Task 1 Step 6 with:

```ts
import {
  createCompletion,
  deleteCompletion,
  fetchCompletionsForTask,
} from "@/lib/services/completion-service";
import { computeTaskStatus } from "@/lib/care/task-windows";

/**
 * Toggle task done-ness for the current window:
 * - done=true  → insert a completion row
 * - done=false → delete the most recent completion that falls within the
 *   current window (no-op if none)
 */
export function useToggleTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (args: { task: Task; done: boolean }) => {
      if (args.done) {
        await createCompletion({
          taskId: args.task.id,
          treeId: args.task.treeId,
        });
        return;
      }
      const { resolvedStart, resolvedEnd } = computeTaskStatus(
        args.task,
        new Date(),
      );
      const completions = await fetchCompletionsForTask(args.task.id);
      const inWindow =
        resolvedStart && resolvedEnd
          ? completions.find((c) => {
              const ts = new Date(c.completedAt);
              return ts >= resolvedStart && ts <= resolvedEnd;
            })
          : completions[0];
      if (inWindow) await deleteCompletion(inWindow.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["completions"] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
```

**Note:** the mutation arg shape changed from `{ id, done }` to `{ task, done }`. Find and update callers:

```bash
grep -rn "useToggleTask" --include="*.ts" --include="*.tsx" .
```

Update each caller that used `mutate({ id: ..., done: ... })` to pass the whole `Task` object: `mutate({ task, done: ... })`.

- [ ] **Step 10: Verify**

```bash
npm run typecheck && npm test && npm run lint
```

Expected: all pass.

- [ ] **Step 11: Manual smoke (per CLAUDE.md `docs/testing.md`)**

Start the app: `npm run dev`. On a tree detail screen, mark a task done → verify it shows as done. Unmark it → verify it goes back. Check the Supabase dashboard to confirm rows appear in and disappear from `task_completions`. Note which platforms (iOS/Android) were checked; if only one, say so.

- [ ] **Step 12: Append smoke steps to `docs/testing.md`**

Add a dated subsection under "Feature-specific QA checklists" documenting the task-completion smoke path (mark done, unmark, verify DB round-trip).

- [ ] **Step 13: Commit**

```bash
git add -u
git commit -m "feat(db): add task_completions table and wire completion-based done state

Task completions are the new source of truth for 'is this task done
for the current window.' Supports recurring annual tasks without
losing prior-year history. Replaces the removed tasks.done boolean.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Migration — CHECK constraints on `trees.type`, `trees.age_bracket`, tighten `guides`

**Files:**
- Create: `supabase/migrations/<ts>_tree_check_constraints.sql`

- [ ] **Step 1: Verify current data is clean**

```bash
npx supabase db execute --linked "select distinct type from public.trees;"
npx supabase db execute --linked "select distinct age_bracket from public.trees;"
npx supabase db execute --linked "select count(*) from public.guides where tree_type is null or task_category is null;"
```

Expected:
- All `trees.type` values fall in the 37-species union (listed in `lib/types.ts` lines 6–44).
- All `trees.age_bracket` values are null or one of `sapling/young/maturing/mature`.
- The guides count is 0 (all 53 rows have both columns set, per earlier inspection).

If any row violates — stop and fix the data before running the migration, or the ALTER will fail.

- [ ] **Step 2: Generate migration**

```bash
npx supabase migration new tree_check_constraints
```

- [ ] **Step 3: Write the SQL**

```sql
-- Enforces app-layer contracts at the DB level per the 2026-04-13
-- foundation design. Today the app only writes these values via Zod
-- validation; the CHECKs catch direct-SQL mistakes (migration typos,
-- future admin tooling, manual fixes).

alter table public.trees
  add constraint trees_type_check check (type in (
    'Apple','Pear','Peach','Cherry','Plum','Fig','Lemon','Orange','Lime',
    'Crabapple','Quince','Medlar','Apricot','Nectarine','Grapefruit',
    'Tangerine','Kumquat','Avocado','Pomegranate','Persimmon','Olive',
    'Jujube','Loquat','Mango','Guava','Papaya','Banana','Passion Fruit',
    'Dragon Fruit','Kiwi','Jackfruit','Starfruit','Coconut','Date Palm',
    'Mulberry','Pawpaw','Gooseberry','Elderberry'
  ));

alter table public.trees
  add constraint trees_age_bracket_check check (
    age_bracket is null or age_bracket in ('sapling','young','maturing','mature')
  );

alter table public.guides alter column tree_type set not null;
alter table public.guides alter column task_category set not null;
```

- [ ] **Step 4: Push and verify**

```bash
npx supabase db push
```

Expected: applies cleanly. If it fails with a constraint violation, revisit Step 1.

- [ ] **Step 5: Verify app still works**

```bash
npm run typecheck && npm test && npm run lint
```

No app code changes needed — the app already enforces these values.

- [ ] **Step 6: Commit**

```bash
git add supabase/migrations/
git commit -m "feat(db): enforce tree type / age bracket / guide classification at DB layer

CHECK constraints on trees.type (37 species) and trees.age_bracket
(4 brackets). Tightens guides.tree_type and guides.task_category to
NOT NULL — all 53 existing rows have them set.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Migration — create `photos` table + storage bucket

**Files:**
- Create: `supabase/migrations/<ts>_photos.sql`

- [ ] **Step 1: Generate migration**

```bash
npx supabase migration new photos
```

- [ ] **Step 2: Write the SQL**

```sql
-- photos: attached to a tree; optionally linked to a specific task
-- completion ("here's what my tree looked like after pruning").
-- Storage path follows {user_id}/{tree_id}/{photo_id}.jpg under the
-- private tree-photos bucket.

create table public.photos (
  id uuid primary key default extensions.uuid_generate_v4(),
  tree_id uuid not null references public.trees(id) on delete cascade,
  task_completion_id uuid references public.task_completions(id) on delete set null,
  storage_path text not null,
  caption text,
  taken_at timestamptz,
  created_at timestamptz not null default now()
);

create index photos_tree_id_taken_idx
  on public.photos (tree_id, taken_at desc nulls last, created_at desc);

alter table public.photos enable row level security;

create policy "Users can view own photos"
  on public.photos for select
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = photos.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can create photos"
  on public.photos for insert
  with check (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = photos.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can update own photos"
  on public.photos for update
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = photos.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can delete own photos"
  on public.photos for delete
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = photos.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

-- Storage: private bucket for photo blobs. Path convention:
-- {user_id}/{tree_id}/{photo_id}.jpg. Storage RLS matches table RLS:
-- users can only access objects under their own user_id prefix.
insert into storage.buckets (id, name, public)
values ('tree-photos', 'tree-photos', false)
on conflict (id) do nothing;

create policy "Users can read own tree photos"
  on storage.objects for select
  using (
    bucket_id = 'tree-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can upload own tree photos"
  on storage.objects for insert
  with check (
    bucket_id = 'tree-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can update own tree photos"
  on storage.objects for update
  using (
    bucket_id = 'tree-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can delete own tree photos"
  on storage.objects for delete
  using (
    bucket_id = 'tree-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );
```

- [ ] **Step 3: Push and verify**

```bash
npx supabase db push
npx supabase db execute --linked "select id, name, public from storage.buckets where id='tree-photos';"
```

Expected: bucket exists and `public = false`.

- [ ] **Step 4: Typecheck (no app changes, but sanity check)**

```bash
npm run typecheck && npm test && npm run lint
```

- [ ] **Step 5: Commit**

```bash
git add supabase/migrations/
git commit -m "feat(db): add photos table and private tree-photos storage bucket

Photos can attach to a tree generally or to a specific task
completion. Storage path convention: {user_id}/{tree_id}/{photo_id}.
RLS mirrors the table policies so users only see their own photos.
UI for photos ships separately.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Migration — create `notifications_log` table

**Files:**
- Create: `supabase/migrations/<ts>_notifications_log.sql`

- [ ] **Step 1: Generate migration**

```bash
npx supabase migration new notifications_log
```

- [ ] **Step 2: Write the SQL**

```sql
-- notifications_log: server-side record of push notifications sent,
-- for dedup and debugging. The app reads this for "recent activity"
-- views; writes happen via service role from a future notification
-- worker. kind is a text CHECK so it's easy to extend; exact values
-- will be finalized when the notification feature ships.

create table public.notifications_log (
  id uuid primary key default extensions.uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  tree_id uuid references public.trees(id) on delete set null,
  task_id uuid references public.tasks(id) on delete set null,
  kind text not null check (kind in ('task_active','task_late','weekly_digest')),
  sent_at timestamptz not null default now(),
  payload jsonb
);

create index notifications_log_user_sent_idx
  on public.notifications_log (user_id, sent_at desc);

create index notifications_log_task_kind_idx
  on public.notifications_log (task_id, kind, sent_at desc);

alter table public.notifications_log enable row level security;

create policy "Users can view own notifications"
  on public.notifications_log for select
  using (user_id = (select auth.uid()));

-- No INSERT/UPDATE/DELETE policies: writes happen via service role.
```

- [ ] **Step 3: Push and verify**

```bash
npx supabase db push
```

- [ ] **Step 4: Typecheck**

```bash
npm run typecheck && npm test && npm run lint
```

- [ ] **Step 5: Commit**

```bash
git add supabase/migrations/
git commit -m "feat(db): add notifications_log for dedup and history

Server-side record of push notifications. Users can read their own
rows; writes happen via service role from the future notification
worker. The kind CHECK currently lists three values but can be
extended when the feature ships.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Migration — RLS perf rewrite, security hardening, FK-covering indexes

**Files:**
- Create: `supabase/migrations/<ts>_rls_perf_and_security.sql`

- [ ] **Step 1: Generate migration**

```bash
npx supabase migration new rls_perf_and_security
```

- [ ] **Step 2: Write the SQL**

```sql
-- Performance: all existing RLS policies re-evaluate auth.uid() per row.
-- Rewriting to (select auth.uid()) lets Postgres cache the value once per
-- query. Applies to 14 policies across profiles, orchards, trees, tasks.
--
-- Security: (1) the profiles "Allow insert for new users" policy uses
-- WITH CHECK (true) — remove entirely since the handle_new_user trigger
-- is the sole creator. (2) handle_new_user has a mutable search_path —
-- pin it to prevent schema-shadow attacks. (3) add covering indexes on
-- orchards.user_id, trees.orchard_id, tasks.tree_id (advisor-flagged).

-- profiles
drop policy if exists "Allow insert for new users" on public.profiles;
drop policy if exists "Users can view own profile" on public.profiles;
drop policy if exists "Users can update own profile" on public.profiles;

create policy "Users can view own profile"
  on public.profiles for select
  using (id = (select auth.uid()));

create policy "Users can update own profile"
  on public.profiles for update
  using (id = (select auth.uid()));

-- orchards
drop policy if exists "Users can view own orchards" on public.orchards;
drop policy if exists "Users can create orchards" on public.orchards;
drop policy if exists "Users can update own orchards" on public.orchards;
drop policy if exists "Users can delete own orchards" on public.orchards;

create policy "Users can view own orchards"
  on public.orchards for select
  using (user_id = (select auth.uid()));

create policy "Users can create orchards"
  on public.orchards for insert
  with check (user_id = (select auth.uid()));

create policy "Users can update own orchards"
  on public.orchards for update
  using (user_id = (select auth.uid()));

create policy "Users can delete own orchards"
  on public.orchards for delete
  using (user_id = (select auth.uid()));

-- trees
drop policy if exists "Users can view own trees" on public.trees;
drop policy if exists "Users can create trees" on public.trees;
drop policy if exists "Users can update own trees" on public.trees;
drop policy if exists "Users can delete own trees" on public.trees;

create policy "Users can view own trees"
  on public.trees for select
  using (
    exists (
      select 1 from public.orchards
      where orchards.id = trees.orchard_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can create trees"
  on public.trees for insert
  with check (
    exists (
      select 1 from public.orchards
      where orchards.id = trees.orchard_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can update own trees"
  on public.trees for update
  using (
    exists (
      select 1 from public.orchards
      where orchards.id = trees.orchard_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can delete own trees"
  on public.trees for delete
  using (
    exists (
      select 1 from public.orchards
      where orchards.id = trees.orchard_id
        and orchards.user_id = (select auth.uid())
    )
  );

-- tasks
drop policy if exists "Users can view own tasks" on public.tasks;
drop policy if exists "Users can create tasks" on public.tasks;
drop policy if exists "Users can update own tasks" on public.tasks;
drop policy if exists "Users can delete own tasks" on public.tasks;

create policy "Users can view own tasks"
  on public.tasks for select
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = tasks.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can create tasks"
  on public.tasks for insert
  with check (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = tasks.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can update own tasks"
  on public.tasks for update
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = tasks.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can delete own tasks"
  on public.tasks for delete
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = tasks.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

-- handle_new_user: pin search_path. Recreate with the existing body.
-- (If the current body differs, reconcile before running this migration.)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', ''));
  return new;
end;
$$;

-- FK-covering indexes (performance advisor).
create index if not exists orchards_user_id_idx on public.orchards (user_id);
create index if not exists trees_orchard_id_idx on public.trees (orchard_id);
create index if not exists tasks_tree_id_idx on public.tasks (tree_id);
```

**Important:** before running, verify the current `handle_new_user` function body matches the recreate above. Run:

```bash
npx supabase db execute --linked "select pg_get_functiondef(oid) from pg_proc where proname='handle_new_user' and pronamespace='public'::regnamespace;"
```

If the body does something different, copy that body into the `begin ... end;` block of the migration before pushing — don't blindly replace behavior.

- [ ] **Step 3: Push and verify**

```bash
npx supabase db push
```

- [ ] **Step 4: Run full test + typecheck + lint**

```bash
npm run typecheck && npm test && npm run lint
```

- [ ] **Step 5: Manual smoke — sign in / create orchard / create tree / mark task done**

Start the app: `npm run dev`. Run through the golden path: sign in, create an orchard, add a tree, mark one of the seeded tasks done. Verify no RLS errors appear in the console.

- [ ] **Step 6: Commit**

```bash
git add supabase/migrations/
git commit -m "feat(db): fix RLS perf, remove profiles insert hole, pin trigger search_path

Rewrites 14 RLS policies across profiles/orchards/trees/tasks to use
(select auth.uid()) so it's cached once per query instead of
re-evaluated per row. Removes the profiles INSERT policy with
WITH CHECK (true) since the handle_new_user trigger is the sole
creator. Pins handle_new_user search_path to prevent schema-shadow
attacks. Adds FK-covering indexes on orchards.user_id,
trees.orchard_id, tasks.tree_id.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Verification — advisors + full checks

- [ ] **Step 1: Re-run the security advisor**

Via MCP:

```
mcp__claude_ai_Supabase__get_advisors(project_id="wrbrgzkbqcyhhjqepqiv", type="security")
```

Expected: `function_search_path_mutable` is gone. `rls_policy_always_true` on profiles is gone. `auth_leaked_password_protection` remains — that's Task 10 (dashboard-only).

- [ ] **Step 2: Re-run the performance advisor**

```
mcp__claude_ai_Supabase__get_advisors(project_id="wrbrgzkbqcyhhjqepqiv", type="performance")
```

Expected: all `auth_rls_initplan` warnings gone. All `unindexed_foreign_keys` gone. `unused_index` for `tasks_due_date_idx` gone. There may be new INFO-level entries for indexes on the newly added tables — those will show as "unused" until the features that query them ship; acceptable.

- [ ] **Step 3: Confirm full test suite green**

```bash
npm run typecheck && npm test && npm run lint
```

Expected: all pass.

- [ ] **Step 4: Run the manual smoke checklist from `docs/testing.md`**

Go through the standard golden-path smoke. Note any platform (iOS/Android) not tested. If anything regressed, fix before declaring the task done.

- [ ] **Step 5: Document advisor results**

Append a short dated entry to `docs/testing.md` under "per-phase QA history" (or the closest equivalent section in that doc) listing:
- Date
- Which advisor warnings were resolved
- Which remain (HIBP pending Task 10; unused indexes on new empty tables)

- [ ] **Step 6: Commit (docs only, if any edits)**

```bash
git add docs/testing.md
git commit -m "docs: note 2026-04-13 database foundation verification pass

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

## Task 10: Manual — enable HIBP leaked-password protection

**This is not a code change.** It's a toggle in the Supabase Auth dashboard and must be done by the project owner.

- [ ] **Step 1: Open the Supabase dashboard**

Navigate to the project (ref `wrbrgzkbqcyhhjqepqiv`) → Authentication → Providers → Email → settings. Or: Authentication → Policies → Password Security.

- [ ] **Step 2: Enable "Leaked password protection"**

Toggle on. This makes Supabase check submitted passwords against the HaveIBeenPwned database at sign-up and password-change time.

- [ ] **Step 3: Verify via advisor**

```
mcp__claude_ai_Supabase__get_advisors(project_id="wrbrgzkbqcyhhjqepqiv", type="security")
```

Expected: `auth_leaked_password_protection` is no longer in the list.

- [ ] **Step 4: No commit needed**

This is a dashboard-only change. Mention the completion in the next PR description or commit body if convenient, but there's nothing to commit.

---

## Self-review notes

- Spec coverage: every section of the design doc maps to at least one task. Dead-column drops → Task 2. `planted_on` → Task 3. CHECK constraints → Task 5. `task_completions` → Task 4. Photos → Task 6. Notifications log → Task 7. RLS perf + security → Task 8. HIBP → Task 10. App-layer changes bundled with the migrations that drop read-by-app columns → Tasks 1 & 3.
- Placeholder scan: no TBD/TODO/vague steps. Every code step includes exact code. Every migration step includes exact SQL.
- Type consistency: `useToggleTask` arg shape changes from `{ id, done }` (Task 1 stub) to `{ task, done }` (Task 4 real version) — documented inline and a grep command given for caller updates. `useIsTaskDoneThisWindow` arg changes from `taskId` (Task 1 stub) to `task` (Task 4 real) — same.
- Scope: focused on the database-foundation design. No unrelated refactors. Photo/notification UI deliberately deferred.
