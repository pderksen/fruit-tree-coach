# Phase 5: Calendar Redesign + Notifications

## Context

The current calendar is a simple sectioned list grouped by week. This phase transforms it into a visual timeline layout and adds a notification opt-in so users can receive reminders for upcoming care tasks. The calendar becomes the app's primary action hub — users should be able to see their timeline at a glance and tap into any task's guide.

## Images Needed

| Asset | Purpose |
|---|---|
| `calendar idea.jpg` | Visual reference for timeline layout (ignore crossed-out top section — focus on bottom 2/3 timeline design) |
| `notifications.png` | Visual reference for notification opt-in popup concept |

---

## Tasks

### 1. Redesign Calendar with Timeline Layout

- **File:** `app/(tabs)/calendar.tsx` (major rewrite)
- **Current:** `SectionList` grouped by week with `CalendarTaskRow` items
- **New design (reference `calendar idea.jpg`, bottom 2/3):**

#### Layout Structure

- **Top 1/3:** Month/week header area
  - Current month and year displayed prominently (`text-2xl font-bold`)
  - Horizontal scrollable week selector (circles for each day, current day highlighted in `bg-brand-700`)
  - "Today" indicator dot
- **Bottom 2/3:** Vertical timeline
  - Left edge: vertical line (2px, `bg-gray-200`) running the full height
  - Each task is a card branching off the timeline with a coloured dot on the line
  - Dot colours indicate task type:
    - Green (`bg-brand-500`) — pruning
    - Amber (`bg-amber-500`) — fertilizing
    - Blue (`bg-blue-500`) — watering-related
    - Purple (`bg-purple-500`) — pest control
    - Orange (`bg-orange-500`) — harvest
  - Task cards show: title, tree name, due date, and a brief description
  - Overdue tasks get a red dot and subtle red border

#### New Components

- **`components/CalendarHeader.tsx`** — month display + horizontal day selector
- **`components/TimelineTask.tsx`** — single timeline task card with dot connector
- **`components/TimelineLine.tsx`** — the vertical line and dot rendering

#### Data

- Continue using `MOCK_CALENDAR_TASKS` from `lib/mocks/calendar-tasks.ts`
- Add a `taskType` field to the `CalendarTask` interface if not already present:
  ```ts
  taskType: "pruning" | "fertilizing" | "watering" | "pest-control" | "harvest" | "other";
  ```
- Map `taskType` to dot colour in the timeline component

#### Scrolling Behaviour

- Timeline scrolls vertically (use `ScrollView` or `FlatList`)
- Auto-scroll to today's tasks on mount
- Week selector scrolls horizontally, tapping a day filters or scrolls the timeline to that day

### 2. Link Calendar Tasks to Step-by-Step Guides

- **File:** New `components/TimelineTask.tsx` (or updated `CalendarTaskRow.tsx`)
- **Current:** `CalendarTaskRow` displays tasks but doesn't link anywhere
- **Change:** Each task card gets an `onPress` handler that navigates to its guide:
  ```ts
  router.push({ pathname: "/tree/guide/[taskId]", params: { taskId: task.id } });
  ```
- **Data requirement:** `CalendarTask` needs a `guideTaskId` field that maps to the guide's `taskId` in `MOCK_GUIDES`
- **Fallback:** If no matching guide exists, navigate to the tree detail page instead:
  ```ts
  router.push({ pathname: "/tree/[id]", params: { id: task.treeId } });
  ```
- **Visual cue:** Add a small chevron icon (`chevron-forward`) on the right side of each task card to indicate it's tappable

### 3. Notification Opt-In Popup

- **Trigger:** First time the user visits the Care Calendar tab
- **Tracking:** Store `hasSeenNotificationPrompt` in Zustand (persisted to AsyncStorage)
- **Implementation:**

#### Modal Component

- **New file:** `components/NotificationOptInModal.tsx`
- **Design (reference `notifications.png`):**
  - Modal overlay with rounded white card
  - Bell icon at top (`notifications-outline`, brand-700)
  - Heading: "Never miss a care task"
  - Body: "Get reminders when it's time to prune, fertilize, or harvest your trees."
  - Checkboxes for notification categories (all checked by default):
    - Pruning reminders
    - Fertilizing reminders
    - Pest control alerts
    - Harvest timing
  - Primary button: "Enable Reminders" → requests push notification permission
  - Secondary link: "Not now" → dismisses modal, sets `hasSeenNotificationPrompt = true`

#### Notification Permission

- Use `expo-notifications` to request permission:
  ```ts
  import * as Notifications from "expo-notifications";
  const { status } = await Notifications.requestPermissionsAsync();
  ```
- Store the user's category preferences in Zustand for later use when scheduling local notifications
- If permission denied by OS, show a subtle banner: "You can enable notifications later in Settings"

#### Local Notification Scheduling (Scaffold)

- **New file:** `lib/notifications.ts`
- Create helper functions (not yet wired to real scheduling):
  - `scheduleTaskReminder(task, daysBefore)` — schedules a local notification N days before task due date
  - `cancelAllReminders()` — clears scheduled notifications
  - `getScheduledReminders()` — lists what's queued
- These will be connected to real task data in a future phase; for now, scaffold the API

---

## File Summary

| Action | Path |
|---|---|
| Rewrite | `app/(tabs)/calendar.tsx` |
| Create | `components/CalendarHeader.tsx` |
| Create | `components/TimelineTask.tsx` |
| Create | `components/TimelineLine.tsx` |
| Create | `components/NotificationOptInModal.tsx` |
| Create | `lib/notifications.ts` |
| Modify | `lib/mocks/calendar-tasks.ts` (add `taskType`, `guideTaskId` fields) |
| Modify | `components/CalendarTaskRow.tsx` (add navigation, or replace with `TimelineTask`) |
| Delete | `components/CalendarTaskRow.tsx` (if fully replaced by `TimelineTask`) |

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes
3. `npm run lint` passes
4. Manual checks:
   - Calendar shows month header and horizontal day selector
   - Day selector highlights today, scrolls horizontally
   - Timeline renders with vertical line and coloured task dots
   - Task dot colours match their type (green = pruning, amber = fertilizing, etc.)
   - Overdue tasks show red dot and border
   - Tapping a task navigates to its step-by-step guide page
   - Tasks without a guide navigate to the tree detail page
   - First visit to calendar triggers notification opt-in modal
   - "Enable Reminders" requests OS notification permission
   - "Not now" dismisses modal; modal doesn't reappear on next visit
   - Category checkboxes toggle correctly
   - Timeline auto-scrolls to today's tasks on mount
   - Both iOS and Android render the timeline correctly (test dot alignment and scrolling)
