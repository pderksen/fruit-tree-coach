# Date-aware care tasks

Status: **planned, not started** — awaiting go-ahead after review.

## Why

Today the app shows tasks like "Winter pruning — Best window: Late February" in
early April. The `timeWindow` is a human-written string baked into mock data
and a Supabase text column; neither knows what day it is. The static
`CURRENT_SEASON_STAGE` lookup in `lib/care/season-stage.ts` is also hardcoded
to April. In July the app will still say "Late February."

Users need to see only tasks that are relevant **right now** — with enough
slack to catch tasks they're a little late on.

## Rules (agreed with Phil)

For each tree, on every render, compute task status from `new Date()`:

| Where today sits vs. window | Status    | Shown? | Tag / styling              |
|-----------------------------|-----------|--------|----------------------------|
| `today < windowStart - 14d` | `future`  | no     | —                          |
| within 14d before start     | `upcoming`| yes    | "Coming up" (gray)         |
| `windowStart ≤ today ≤ windowEnd` | `active` | yes | priority styling, no tag   |
| within 14d after end        | `late`    | yes    | ⚠ "Do this as soon as possible" (amber) |
| `today > windowEnd + 14d`   | `past`    | no     | —                          |

- Zone adjustment: **skip for v1.** Use raw month/day windows from cited
  sources. Zone shifts land later if needed.
- Priority: no longer a stored flag. A task is "priority" iff status is
  `active`. Drop the `priority` boolean from the data model.
- Empty state per tree: show a friendly message, e.g.
  *"Your Honeycrisp Apple is just growing right now — no tasks this week. 🌱"*

## Data model

### Task template (new, in-code)

```ts
// lib/care/task-templates.ts
export interface TaskTemplate {
  id: string;              // stable id for seeding (e.g. "apple-winter-pruning")
  species: FruitTreeType;
  title: string;
  why: string;
  description: string;
  category: TaskCategory;
  windowStart: { month: number; day: number }; // 1-indexed
  windowEnd:   { month: number; day: number };
  source: string;          // citation, required per CLAUDE.md
  guideTaskId?: string;    // optional link to guide step
}
```

Windows that cross year boundary (e.g. Dec 15 → Feb 1) are supported by the
compute function, not by splitting the template.

### Task status (computed, not stored)

```ts
export type TaskStatus = "upcoming" | "active" | "late";

export interface TaskWithStatus extends Task {
  status: TaskStatus;
  displayWindow: string;   // e.g. "This week", "Starts Apr 20", "Ended Apr 5"
}
```

### DB columns on `tasks`

Drop:
- `time_window text`
- `season text`
- `priority boolean`

Add:
- `window_start_month int` (1–12)
- `window_start_day int` (1–31)
- `window_end_month int`
- `window_end_day int`
- `template_id text` — stable reference to the template that produced the row

All four window columns nullable (user-created tasks without a seasonal
window are still allowed and are always treated as `active`).

## Compute function

```ts
// lib/care/task-windows.ts
export function computeTaskStatus(
  task: { windowStart?: MonthDay; windowEnd?: MonthDay },
  today: Date,
): { status: TaskStatus | "hidden"; displayWindow: string };
```

Rules:
- If either window bound is missing, return `active` with empty displayWindow.
- Resolve the window to a concrete `[Date, Date]` range in the current
  calendar year. If `windowEnd < windowStart` as month/day, the window wraps
  — pick the nearest instance to `today` (previous-year end or next-year end).
- Compute day-delta from today to windowStart and windowEnd.
- Apply the table above.

Pure function, no `Date.now()` inside — caller passes `today`. This keeps
tests deterministic.

## File-by-file changes

### New files
- `lib/care/task-templates.ts` — all task templates, one array per species
- `lib/care/task-windows.ts` — `computeTaskStatus`, `getTasksInWindow`,
  `formatDisplayWindow`
- `lib/care/task-windows.test.ts` — Vitest unit tests
- `supabase/migrations/<timestamp>_date_aware_tasks.sql` — schema change + reseed
- `components/TaskStatusTag.tsx` — small pill component for "Coming up" / late warning

### Edited files
- `lib/types.ts` — remove `priority`, `season`, `timeWindow` from `Task`;
  add `templateId`, `windowStart`, `windowEnd`; add `TaskStatus` export
- `lib/schemas.ts` — mirror the type changes in `taskRowSchema`,
  `taskSchema`, `newTaskSchema`
- `lib/services/task-service.ts` — update column list, insert/update payloads,
  `TaskUpdateFields`
- `hooks/use-tasks.ts` — wrap list queries with `getTasksInWindow(new Date())`
  and return `TaskWithStatus[]`
- `app/(tabs)/index.tsx` — use filtered list; update `nextTaskTitle` logic;
  hero chip/copy still hardcoded "Early Spring" but **out of scope** for this
  change (tracked as follow-up below)
- `app/tree/[id].tsx` — show filtered tasks, render empty state, show status tags
- `app/(tabs)/calendar.tsx` — already filters by month; add status tags so
  late tasks visually stand out
- `components/PriorityTaskCard.tsx` — read `status` instead of `priority`;
  render `displayWindow` instead of raw `timeWindow`; wire `TaskStatusTag`
- `lib/mocks/care-details.ts` — rewrite as templates (for offline/dev fallback)

### Deleted files
- `lib/care/season-stage.ts` — replaced by date-driven windows

## Migration SQL (draft)

```sql
-- forward-only per CLAUDE.md
alter table public.tasks drop column if exists time_window;
alter table public.tasks drop column if exists season;
alter table public.tasks drop column if exists priority;

alter table public.tasks add column window_start_month int;
alter table public.tasks add column window_start_day int;
alter table public.tasks add column window_end_month int;
alter table public.tasks add column window_end_day int;
alter table public.tasks add column template_id text;

-- Option A reseed: wipe existing generated tasks and re-seed from templates.
-- User-created tasks (template_id is null) would be preserved, but there
-- shouldn't be any in dev yet.
delete from public.tasks where template_id is null or template_id is not null;

-- Re-seed: done in a follow-up SQL block or via a one-off script, keyed off
-- the new lib/care/task-templates.ts. Exact inserts TBD during implementation.
```

Applied via `npx supabase migration new date_aware_tasks` → edit file →
`npx supabase db push` → commit. **Not** via dashboard or MCP apply.

## Test plan

Vitest covers `computeTaskStatus` exhaustively:
- today before window, more than 14d away → `hidden`
- today within 14d before start → `upcoming` with "Starts {date}"
- today on start boundary → `active`
- today mid-window → `active` with "This week" or similar
- today on end boundary → `active`
- today within 14d after end → `late` with "Ended {date}"
- today more than 14d after end → `hidden`
- wrap-around window (Dec → Feb): today in Jan → `active`; today in Oct → `upcoming`
- missing window bounds → `active` always

Manual QA (to be appended to `docs/testing.md` per CLAUDE.md):
- Time-travel by changing the device date (iOS Simulator → Features → Time
  Travel; Android emulator → extended controls). Verify task list rotates
  across: Feb 15 (Winter pruning active), Apr 12 (citrus feeding active,
  pruning gone), Jul 1 (harvest prep, most pruning hidden), Nov 1 (quiet
  state, empty per-tree messages).
- Empty state shows for a tree with no active/upcoming/late tasks.
- Late tag renders amber with warning icon; doesn't dominate the card.

## Out of scope (follow-ups)

- **Home-screen hero copy:** the "Early Spring" chip and "morning frost is
  lifting" text at `app/(tabs)/index.tsx:87-97` are hardcoded. Same root
  problem — needs a date-driven season label + rotating copy — but large
  enough to deserve its own pass.
- **`SeasonalForecast` component:** likely hardcoded too; audit separately.
- **`GardenerInsight` quote rotation:** unrelated to date-awareness.
- **Zone shift:** add when cited per-zone data is in hand.
- **Supabase-hosted task templates:** move templates from code → DB table
  when the first horticultural update requires shipping without an app
  release. Same shape.

## Estimated size

~8 files new/edited, one migration, one component, one test file. Mid-sized
change. One PR.

## Open questions for Phil

None — all earlier questions resolved in chat:
- Option A chosen for existing DB tasks (wipe + reseed).
- Zone shift deferred.
- Late-tag copy: "Do this as soon as possible" with warning triangle icon.
- 14-day late window, 14-day upcoming window.
- Migration bundled into same PR.
