# Phase 5: Calendar Task Simplification

## Context

Calendar tasks currently show too much information in the list view — task name, tree name, due date (specific day), and a 2-line description. We need to simplify to just the task name, tree name, and the recommended week. The full description should only appear when the user taps on a task.

## Images Needed

**None.**

---

## Tasks

### 1. Simplify TimelineTask Display

- **File:** `components/TimelineTask.tsx`
- **Current:** Each task shows: fruit icon, task title, tree name, due date (formatted as "Mon, Apr 10"), and a 2-line truncated description with a chevron.
- **Fix:**
  - Remove the description text from the list view
  - Keep: task title, tree name, and recommended week
  - The task should still be tappable to navigate to the detail/guide view

### 2. Show Week Instead of Specific Date

- **File:** `components/TimelineTask.tsx` and/or `app/(tabs)/calendar.tsx`
- **Current:** Due dates are shown as specific days (e.g. "Mon, Apr 10")
- **Fix:**
  - Change date display to show the week range, e.g. "Apr 6 – 12" or "Week of Apr 6"
  - Calculate week range from the task's due date (Monday–Sunday of that week)
  - Group label dates can remain as-is for section headers, or also switch to week view

### 3. Ensure Task Detail Shows Full Description

- **File:** Task detail/guide view (likely `app/tree/guide/[taskId].tsx` or the navigation target when tapping a task)
- **Current:** Tapping a task should navigate to its detail view
- **Fix:** Verify the description, "why" explanation, and other details are visible when the user taps on a calendar task. If not already linked, wire up the tap handler to navigate to the task's step-by-step guide.

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes for touched files
3. `npm run lint` passes
4. Manual checks:
   - Calendar tasks show only: task name, tree name, recommended week
   - No description visible in list view
   - Tapping a task navigates to detail view with full description
   - Week format is clear and readable (e.g. "Apr 6 – 12")
