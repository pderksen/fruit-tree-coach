# Phase 6b: Expand Tasks Schema for Calendar, Tree Detail, and Guide Linkage

## Goal
Phase 6 wired the home screen and task hooks to Supabase, but the
Supabase `tasks` table only has `id, tree_id, title, why, done,
created_at`. Several UI surfaces depend on richer fields still sourced
from mocks. This phase expands the schema and rewires those surfaces.

## Why this is separate from Phase 6
Phase 6 as originally scoped assumed the `tasks` table could drive
calendar, tree detail, and guide screens. It can't — those screens
read fields (`dueDate`, `category`, `priority`, `season`, `timeWindow`,
`description`, `guideTaskId`) that don't exist in the table. Expanding
the schema is a deliberate design decision, not a drop-in swap, so
it got its own phase.

## Current state after Phase 6
- `hooks/use-tasks.ts` exists with `useTasks`, `useAllTasks`,
  `useCreateTask`, `useToggleTask`, `useDeleteTask`
- `app/(tabs)/index.tsx` reads pending tasks from `useAllTasks`
- `app/(tabs)/calendar.tsx` still reads `MOCK_CALENDAR_TASKS`
- `app/tree/[id].tsx` still reads `MOCK_DETAILED_TASKS`
- `app/tree/guide/[taskId].tsx` still reads `MOCK_GUIDES`
- `MOCK_TASKS`, `MOCK_CALENDAR_TASKS`, `MOCK_DETAILED_TASKS` remain in
  `lib/mocks/` and are still imported by the above screens

## Tasks

### 1. Schema migration
Add columns to `public.tasks`:
- `due_date` (date, nullable)
- `category` (text, nullable) — one of
  `pruning | feeding | monitoring | harvesting | protection`
- `priority` (boolean, not null, default false)
- `season` (text, nullable) — free-form label like "Late Winter"
- `time_window` (text, nullable) — e.g. "Best window: Late February"
- `description` (text, nullable) — longer copy than `why`
- `guide_task_id` (text, nullable) — links to a guide entry

Consider a CHECK constraint on `category` once the set is stable.

### 2. Update Zod schemas and service
- Extend `taskRowSchema` and `taskSchema` in `lib/schemas.ts`
- Extend `newTaskSchema` to accept the new optional fields
- Update `lib/services/task-service.ts` `TASK_COLUMNS` and `createTask`/
  `updateTask` to pass the new fields through
- Update `Task` / `DetailedTask` in `lib/types.ts` — decide whether
  to collapse `DetailedTask` into `Task` or keep the split

### 3. Rewire calendar screen
- **File:** `app/(tabs)/calendar.tsx`
- Swap `MOCK_CALENDAR_TASKS` for `useAllTasks(orchardId)`
- Filter/group by `dueDate` as before
- Handle empty state (no tasks for the selected month)

### 4. Rewire tree detail
- **File:** `app/tree/[id].tsx`
- Swap `MOCK_DETAILED_TASKS[id]` for `useTasks(id)`
- Priority task: `tasks.find((t) => t.priority)`
- Later tasks: sort by season via existing `compareByUpcomingSeason`
- Add toggle-done from `PriorityTaskCard` / `LaterTaskList` if desired

### 5. Guide screen
- **File:** `app/tree/guide/[taskId].tsx`
- Load the task from Supabase using the route `taskId` (uuid)
- Look up the guide content via `guide_task_id` -> `MOCK_GUIDES`
  (guides remain mock content until a future "guides in Supabase"
  phase)
- Mark task done at the end of the guide flow via `useToggleTask`

### 6. Seeding strategy (pick one)
Users have no tasks until something creates them. Options:
- **Seed on tree creation**: insert a handful of category-appropriate
  tasks when `createTree` runs. Simple but static.
- **Care plan generator**: a `lib/care/generate-tasks.ts` that takes
  a tree + zone + season and returns tasks to insert. Defer until
  real care logic lands.
- **Manual entry UI**: let users add tasks themselves. Lowest-effort
  but not the product vision.

Recommend: seed on tree creation with 2–3 generic tasks per tree for
now; replace with a real generator in a later phase.

### 7. Remove mock imports from production paths
- `MOCK_TASKS`, `MOCK_CALENDAR_TASKS`, `MOCK_DETAILED_TASKS` should no
  longer be imported from any `app/` file
- Keep mock files for test fixtures only (per CLAUDE.md)

## Files changed
- Supabase migration (new)
- `lib/schemas.ts`
- `lib/services/task-service.ts`
- `lib/types.ts`
- `app/(tabs)/calendar.tsx`
- `app/tree/[id].tsx`
- `app/tree/guide/[taskId].tsx`
- `hooks/use-trees.ts` (if seeding on create)

## Verification
- Calendar shows real tasks grouped by week for the selected month
- Tree detail shows the priority task + later tasks for that tree
- Marking a task done from the guide persists and toggles the UI
- New tree creation seeds a couple of starter tasks (if option 1)
- `npm run typecheck`, `npm run lint`, `npm test` pass
