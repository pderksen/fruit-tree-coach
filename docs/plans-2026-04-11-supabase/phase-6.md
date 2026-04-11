# Phase 6: Tasks — Migrate to Supabase + TanStack Query

## Goal
Replace mock task data with TanStack Query hooks backed by the
Supabase task service. After this phase, tasks (pruning, fertilizing,
etc.) are persisted and tied to specific trees.

## Current state
- `lib/mocks/tasks.ts` has `MOCK_TASKS` — 3 sample tasks
- `lib/mocks/calendar-tasks.ts` has calendar-specific task data
- Tasks are read directly from mocks in screens
- No task store exists — tasks are stateless in the current UI

## Tasks

### 1. Create TanStack Query hooks for tasks
- **File:** `hooks/use-tasks.ts`
- `useTasks(treeId: string)` — fetches tasks for a specific tree
  - Uses `useQuery` with key `["tasks", treeId]`
- `useAllTasks(orchardId: string)` — fetches all tasks across an orchard
  - Uses `useQuery` with key `["tasks", "orchard", orchardId]`
  - For the home screen "this week's tasks" view
- `useCreateTask()` — `useMutation` wrapping `createTask`
- `useToggleTask()` — `useMutation` that flips the `done` boolean
  - Optimistic update: toggle locally, revert on error
- `useDeleteTask()` — `useMutation` wrapping `deleteTask`

### 2. Update home screen task list
- **File:** `app/(tabs)/home.tsx`
- Replace `MOCK_TASKS` reads with `useAllTasks(orchardId)`
- Tapping a task's checkbox calls `useToggleTask`
- Add empty state: "No tasks this week" or similar

### 3. Update calendar screen
- **File:** `app/(tabs)/calendar.tsx`
- Replace `MOCK_CALENDAR_TASKS` with real task queries
- Group tasks by date/week as the UI requires

### 4. Update tree detail task list
- **File:** `app/tree/[id].tsx`
- Show tasks specific to this tree using `useTasks(treeId)`
- Allow toggling done/not-done from the detail screen

### 5. Update step-by-step guide
- **File:** `app/tree/guide/[taskId].tsx`
- Load the specific task from Supabase
- Mark task as done at the end of the guide flow

### 6. Remove mock task usage
- Remove imports of `MOCK_TASKS` and `MOCK_CALENDAR_TASKS` from screens
- Keep the mock files for test fixtures

## Files changed
- `hooks/use-tasks.ts` (new)
- `app/(tabs)/home.tsx` — use task hooks
- `app/(tabs)/calendar.tsx` — use task hooks
- `app/tree/[id].tsx` — use task hooks
- `app/tree/guide/[taskId].tsx` — use task hooks

## Verification
- Home screen shows real tasks from Supabase (empty for new users)
- Mark a task done -> persists across app restart
- Calendar view shows tasks grouped correctly
- Tree detail shows only that tree's tasks
- `npm run typecheck` passes
