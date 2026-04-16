# Testing

Two layers: automated unit tests (Vitest) for logic, and a manual smoke
path for UI changes. Pre-launch, solo-dev scope — no E2E framework yet.
Revisit E2E (Detox/Maestro) at the first-beta-users milestone.

## Automated tests (Vitest)

Run with `npm test` or `npm run test:watch`. Co-locate tests next to the
file under test (`foo.ts` → `foo.test.ts`).

### What to cover

- **Zod schemas** in `lib/services/*` and anywhere else Supabase
  responses are parsed. One happy-path case plus one malformed-input
  case per schema — the point is to catch API drift, not re-test Zod.
- **Pure care logic** in `lib/care/` (`watering.ts`, `season-order.ts`)
  — these encode horticultural rules and are the highest-value thing
  to regression-test. Table-driven tests: input conditions → expected
  recommendation.
- **`lib/date-utils.ts`** — timezone and week-boundary math is easy
  to get subtly wrong. Cover DST transitions and week-starts.
- **`lib/zone-lookup.ts`** — boundary lat/lon values, and the
  offline-fallback path when the API is unreachable.
- **`lib/fruit-tree-data.ts` lookup integrity** — every
  `FruitTreeType` union member has an entry in `TREE_EMOJI`,
  `TREE_CATEGORY_MAP`, and `SCIENTIFIC_NAME_MAP`. One test that
  iterates the union catches a whole class of mistakes.
- **TanStack Query hook reducers / select functions** — if a hook in
  `hooks/use-*.ts` transforms data after fetch, test the transform as
  a plain function. Don't test the fetch itself.
- **Form validation** — the Zod schemas behind React Hook Form.
  Test the schema directly, not the rendered form.

### What NOT to unit-test

- Screen layouts and navigation flow — fragile, low signal, and the
  manual smoke path covers these better.
- TanStack Query fetching itself — that's library code. Test your
  `select` / parsing, not `useQuery`.
- Supabase client calls — mocking the network boundary re-tests the
  mock. Integration-test these against a real Supabase branch when
  the stakes warrant it (migrations, RLS); skip otherwise.
- Zustand stores with trivial setters — if the "logic" is
  `set({ foo })`, there's nothing to test.
- Styling / NativeWind class output.
- Third-party components (`@react-native-community/datetimepicker`,
  etc.).

### Conventions

- Arrange-Act-Assert, one behavior per `test()`.
- No snapshot tests for components — they rot and nobody reads the
  diffs. Snapshot pure data transforms only if the shape is stable.
- Test names describe behavior: `returns dormant-season tasks for
  zone 5 in January`, not `watering works`.

## Manual smoke path

Run before merging a UI change, and before any build that goes to a
device (EAS preview or production). Walk through on **both iOS and
Android** — simulator is fine for most of it; use a real device for
notifications and haptics.

A "UI change" means any edit to `app/`, `components/`, `global.css`,
`tailwind.config.js`, or anything that affects rendering. Pure
refactors inside `lib/` don't need the smoke path.

Report which steps were run, which were skipped, and on which
platforms. If a platform couldn't be tested (no Mac for iOS, etc.),
say so explicitly rather than claiming success.

### 1. Cold start + auth

- [ ] Kill app, relaunch — splash appears, then routes correctly
      (signed-in → home tab; signed-out → sign-in)
- [ ] Sign in with email/password works
- [ ] Sign out from profile screen works; cache clears (no stale
      trees flash on next sign-in)
- [ ] Dev-login screen (`app/dev-login.tsx`) still works for test
      accounts

### 2. Home tab (`app/(tabs)/index.tsx`)

- [ ] Loads without spinner flash when cache is warm
- [ ] Pull-to-refresh works and shows the refresh spinner
- [ ] Empty state renders when the user has no trees
- [ ] Error state renders when offline on first load (no cache)

### 3. Trees

- [ ] Add a tree via `new-tree` tab — form validates, submits,
      appears on home and in orchard
- [ ] Open tree detail (`app/tree/[id].tsx`) — all fields render
- [ ] Step-by-step guide (`app/tree/guide/`) advances correctly
- [ ] Fruit type picker shows correct emoji/icon for each type

### 4. Tasks & calendar

- [ ] Calendar tab renders current month without crashing at
      month boundaries
- [ ] Mark a task done — UI updates immediately (optimistic),
      persists after app restart
- [ ] Mark a task done while offline — still updates; syncs when
      back online (once Phase 9 ships; until then, note that this
      will fail offline)

### 5. Orchard & watering

- [ ] Orchard tab lists all trees
- [ ] Watering tab shows correct recommendations for the current
      season and zone

### 6. Profile & settings

- [ ] Profile screen loads current user info
- [ ] Notification toggle turns notifications on/off (device-local
      — confirm an iPad doesn't mirror a phone toggle if you have
      both)
- [ ] Notification time picker saves and the next scheduled
      notification reflects the new time

### 7. Notifications (real device required)

- [ ] Grant permission on first run
- [ ] Scheduled notification fires at the configured time
- [ ] Tapping notification opens the correct screen

### 8. Offline (target state — Phase 9)

- [ ] Airplane mode: cached trees still render on cold start
- [ ] Offline banner appears
- [ ] Sign-in hard-fails gracefully with a clear message
- [ ] USDA zone lookup uses cached last-known zone

## iOS-specific gotchas to watch for

- Back button text: should be blank (`headerBackTitle: ""` is
  global). If you see a route name like "(tabs)" or a prior screen
  title leaking in, a screen registration is missing `title`.
- `@react-native-community/datetimepicker`: the picker stays visible
  after selection — needs an explicit dismiss. Don't assume Android
  behavior.
- Safe areas: new screens should respect top/bottom insets.
  Check notch and home-indicator areas.
- Haptics: only testable on a real device.
- Keyboard: `KeyboardAvoidingView` behavior differs from Android
  (`padding` on iOS, `height` on Android is the usual pattern).

## Android-specific gotchas to watch for

- `@react-native-community/datetimepicker`: auto-dismisses on
  selection. Opposite of iOS — handle both with `Platform.OS`.
- System back button (hardware/gesture): should pop the stack, not
  exit the app, on any non-root screen.
- Status bar color/contrast: dark text on light backgrounds must be
  legible.
- Notification channel: Android requires a channel; confirm the
  first scheduled notification doesn't silently drop.
- Emulator quirks: location and notifications sometimes behave
  differently than a real device. Confirm on hardware before
  release.

## Feature-specific QA checklists

When a change is too new or too narrow to fit the general smoke path
(e.g. a phase rollout, a one-off subsystem), append its QA steps here.
Each section is append-only history — don't delete old sections, they
document what the feature was supposed to do when it shipped. If a
step later graduates to "always run this before release", promote it
up into the main smoke path and leave a note here.

### Phase 9b — Offline-first foundation (shipped 2026-04-12)

Cache persistence + optimistic mutations + offline banner. Requires
toggling airplane mode on a real device or simulator.

- [ ] Airplane mode → cold-launch app → cached trees and tasks render
      without a spinner
- [ ] Airplane mode → offline banner appears above the tab bar
      ("You're offline. Changes will sync when you reconnect.")
- [ ] Airplane mode → mark a task done → UI updates immediately →
      disable airplane mode → task stays done after sync
- [ ] Airplane mode → add a tree → optimistic row appears with a
      temporary UUID → enable network → temp row is replaced by the
      real row (no duplicate, no flicker)
- [ ] Airplane mode → edit tree notes → change persists in the list
      and detail view → enable network → confirm the edit stuck
- [ ] Kill + reopen the app while offline → data still there
- [ ] Sign-in still fails cleanly offline (does NOT pretend to work)
- [ ] Change zip with network off → `zipToZone` fallback populates
      the zone (regression check for Phase 9a)
- [ ] Banner does NOT flash on cold start before NetInfo resolves
      (i.e. no render when `isConnected === null`)

### Onboarding ZIP screen (shipped 2026-04-12)

New post-signup screen that collects ZIP via device location or manual
entry, then populates orchard zip+zone via `useUpdateOrchard`. Requires
real device or simulator with location services configurable.

**Note (2026-04-12):** the "Use my current location" button is hidden in
Expo Go because the native permission string only lands in a custom dev
client. In Expo Go, only manual entry is testable. The location items
below are parked until the dev client ships (see
`docs/plans/dev-client-migration/`).

- [ ] Sign up as a new user → lands on Onboarding ZIP screen (not
      directly on the tabs)
- [ ] Tap "Use my current location" → native permission dialog appears
      on first run → grant → ZIP populates in the input within a few
      seconds → success message reads "Detected your ZIP. Change it
      if it's wrong."
- [ ] Deny location permission → inline error shows, ZIP input is
      empty, can still enter manually
- [ ] Simulator with location set to a non-US region (e.g. London) →
      error: "Couldn't detect a US ZIP code."
- [ ] Manually enter a 5-digit ZIP → Continue enables → tap → lands
      on Home → open Profile → ZIP and Gardening Zone are both set
      (zone was auto-looked up)
- [ ] Enter fewer than 5 digits → Continue stays disabled
- [ ] Tap "Skip for now" → lands on Home → Profile shows blank ZIP
      and zone (expected — no banner yet, tracked as follow-up)
- [ ] iOS: no back-swipe gesture dismisses the onboarding screen
      (`gestureEnabled: false`)
- [ ] Android: hardware/gesture back does not leave the onboarding
      screen back into sign-in

### Date-aware tasks (shipped 2026-04-12)

Tasks now compute `active` / `upcoming` / `late` / `hidden` status from
today's date vs. each task's month/day window (see
`lib/care/task-windows.ts`). Most failures show up by time-traveling
the device clock.

- [ ] On the tree detail screen, the priority card appears whenever a
      task is active, late, or urgent (priority slot preference: late
      > urgent > active)
- [ ] A task within 14 days *before* its window start shows in the
      "later" list with a gray "Coming up" tag
- [ ] A task within 14 days *after* its window end shows as the
      priority card with an amber ⚠ "Do this as soon as possible" tag
      and an amber left border — and the "View Step-by-Step Guide"
      button is visible
- [ ] An urgent task (15–28 days after window end) also shows as the
      priority card with the amber treatment and the step-by-step
      guide button
- [ ] A task more than 28 days past its window end does not appear
- [ ] A tree with no active/upcoming/late/urgent tasks shows the 🌱
      "just growing" empty state — not a red error and not an empty
      page
- [ ] Calendar screen still shows tasks in future/past months (uses
      the unfiltered `useAllTasksByOrchardRaw` hook)
- [ ] Time-travel: set the device clock to Feb 15 → apple "Winter
      pruning" is the priority task. Jump to Jul 1 → it's gone, a
      harvest-adjacent task may be active. Jump to Nov 1 → empty state
      on most trees
- [ ] Adding a new Apple / Peach / Lemon / Fig tree seeds the right
      templates (check `tasks` table in Supabase after creation)
- [ ] Adding a tree of a species with no templates (e.g. Kiwi) does
      not error; the detail screen shows the empty state

### Task completions — append-only done state (shipped 2026-04-13)

`useToggleTask` now writes to / deletes from `task_completions`. Done state
is window-scoped: a completion only counts if its `completed_at` falls within
the task&apos;s resolved seasonal window.

- [ ] Open tree detail → tap the circle icon on a task → confirm the UI updates
      (once real done-state UI lands; for now the toggle fires silently)
- [ ] In the Supabase dashboard → Table Editor → `task_completions` → confirm
      a new row appears with the correct `task_id` and `tree_id`
- [ ] Open the step-by-step guide for a task → tap "Mark as done" → screen
      navigates back → in Supabase dashboard confirm the row was inserted
- [ ] Trigger an undo (done=false path): row for that task&apos;s current window
      should be deleted; prior-window rows should be untouched
- [ ] Close and reopen the app → same task still shows as done (roundtrip
      through RLS + TanStack Query refetch)
- [ ] Verify RLS: sign in as a second user account → confirm that user cannot
      see or delete the first user&apos;s `task_completions` rows

### Edit tree details (shipped 2026-04-14)

Pencil icon on the tree detail header opens `app/tree/edit/[id].tsx`,
which can change `variety` and `ageBracket`. Tree `type` is deliberately
read-only. `name` is re-derived from `${variety} ${type}` to match the
new-tree flow.

- [ ] Open a tree → header title shows the tree's name (e.g.
      "Honeycrisp Apple") and a green "Edit" button appears top-right
- [ ] Tap Edit → Edit tree screen opens with current variety and age
      pre-filled, and tree type shown as read-only
- [ ] Change variety → Save → returns to detail screen → header name
      updates to `"{new variety} {type}"`
- [ ] Clear variety entirely → Save → header name falls back to the
      bare tree type (no leading space)
- [ ] Change age bracket → Save → detail screen reflects new age
- [ ] Tap Cancel → returns to detail with no change applied
- [ ] Edit screen shows a loading spinner while the tree is fetching,
      and an error state (with retry) if fetch fails
- [ ] Edit while offline (airplane mode) → change appears immediately
      in the list and detail (optimistic) → reconnect → edit persists

### Watering guide stack route (shipped 2026-04-14)

The "See watering details" link on the home screen now pushes a dedicated
stack screen (`app/watering-guide.tsx`) instead of switching to the Watering
tab, so the global back chevron returns the user to Home. The Watering tab
still exists and renders the same content via `WateringGuideContent`.

- [ ] Home → tap "See watering details" on the About Watering card →
      opens a screen titled "Watering Guide" with a back chevron top-left
- [ ] Tap the back chevron → returns to Home with scroll position
      preserved
- [ ] Android hardware/gesture back from the watering guide returns to
      Home (does not exit the app)
- [ ] Watering tab still renders the same guide content with its own
      large heading (no duplicate header bar)

## When Vitest and the smoke path aren't enough

- **Schema/RLS changes**: in addition to the smoke path, run the
  Supabase advisors (`get_advisors`) and manually verify RLS with
  two different user accounts.
- **Care-logic changes**: add a Vitest case for the specific
  input that prompted the change, with a source comment citing
  the extension-service guidance (see CLAUDE.md).
- **Dependency bumps**: `npx expo install --fix`, full smoke path
  on both platforms, and check the Gotchas section of CLAUDE.md
  for any pins that conflict.

### Peach per-task guides pilot (shipped 2026-04-14)

Migration `20260415010312_guides_peach_per_task.sql` adds four
per-task guides for Peach (protection, pruning, monitoring/thinning,
harvesting). Guide lookup in `lib/services/guide-service.ts` now
prefers the per-task row and falls back to the tree-wide overview.

- [ ] Create a Peach tree → open a Peach pruning task → guide title
      reads "Peach Tree Pruning" and steps cover pruning only (no
      harvest, feeding, or spray content)
- [ ] Open the Peach leaf-curl (protection) task → guide reads
      "Peach Leaf Curl Prevention" and covers copper-spray steps only
- [ ] Open the Peach thinning (monitoring) task → guide reads
      "Bloom and Fruit Thinning" and covers spacing/thinning only
- [ ] Open the Peach harvest task → guide reads "Peach Harvest
      Window" and covers picking only
- [ ] Open any task for a tree without per-task guides yet (e.g.
      Cherry, Plum) → the tree-wide overview guide still renders as
      a fallback
- [ ] Each guide's "Tools Needed" list is scoped to that task (no
      pruners on the harvest guide, no basket on the pruning guide)

### Task completions with missed outcome (shipped 2026-04-15)

Migration `20260415222715_task_completions_outcome.sql` adds an
`outcome` column ('completed' | 'missed') to `task_completions`. When
a task's window expires >28 days past end with no completion row for
the current cycle, `hooks/use-tasks.ts` fires a `missed` insert so the
task stays hidden until next year's window reopens.

- [ ] Mark a task done → row in `task_completions` has
      `outcome = 'completed'` (spot-check via Supabase dashboard)
- [ ] Simulate an expired task: in dev, temporarily set a tree's task
      window to end >28 days in the past → open the tree → task does
      not appear in the active list → Supabase shows a new
      `outcome = 'missed'` row for that task
- [ ] After a `missed` row is recorded, re-opening the tree does NOT
      insert another `missed` row for the same cycle (idempotent)
- [ ] Unmark toggle (undo) still works for `completed` rows — the
      delete path is scoped to the current window and should not
      touch `missed` rows from prior cycles
- [ ] Next year's window for the same task template generates a fresh
      task that is visible (manual — requires time travel or a
      hand-crafted task row with windowStart in the near future)

### Task-done celebration (shipped 2026-04-16)

Only the "Mark as done" button at the bottom of the step-by-step
guide screen (`app/tree/guide/[taskId].tsx`) plays the celebration —
the checkbox affordances on `PriorityTaskCard`, `LaterTaskList`, and
`TaskCard` complete tasks silently. The celebration is a ~1.5s
centered overlay: success haptic + the tree's fruit icon scales in
+ 8 leaf shapes drift upward and outward while fading. New deps:
`expo-haptics`. Reduced-motion fallback skips the scene entirely
(brief delay + haptic only, then `router.back()`).

- [ ] Tree detail → tap "View Step-by-Step Guide" on the priority
      task → guide loads → scroll to bottom → tap "Mark as done" →
      celebration overlay plays centered on screen (fruit grows,
      leaves drift), then screen pops back to tree detail. Task is
      gone from priority slot.
- [ ] Tap the priority task checkbox directly (without going through
      the guide) → task completes silently, NO celebration
- [ ] Same for "What to do later" rows → silent completion, NO
      celebration
- [ ] Calendar tab → tap "Mark done" on a `TaskCard` → silent
      completion, NO celebration
- [ ] iOS hardware: success haptic fires once on the guide-screen
      "Mark as done" tap. Simulator may no-op silently.
- [ ] Android hardware: vibration fires once on the guide-screen
      "Mark as done" tap.
- [ ] Rapid double-tap on guide-screen "Mark as done" does NOT fire
      celebration twice (button disabled while `celebrating`)
- [ ] Background the app mid-animation → return → no crash, task is
      done, screen popped back
- [ ] Settings → Accessibility → enable Reduce Motion → tap "Mark
      as done" on guide → no leaves, no fruit growth; brief pause then
      `router.back()`; haptic still fires
- [ ] Web (if it loads): celebration overlay renders without crashing;
      haptic silently no-ops (no console error)

### Add Tree screen polish (shipped 2026-04-16)

Tweaks to `app/tree/new.tsx` + `components/FruitTypeGrid.tsx`: gray
border on all type cards, single-tap select inside search, auto-scroll
to the Varietal/Age form on select, "Save as Draft" removed.

- [ ] Every tree-type card (Most popular row + search results +
      category groups under "Look for more trees") shows a visible
      gray-200 border in its unselected state
- [ ] Selected card shows a green (`brand-600`) border and no gray
      border visible behind it
- [ ] "Look for more trees" → type a query (e.g. "nect") → tap the
      Nectarine card ONCE → card becomes selected on the first tap
      (keyboard may dismiss, but the press still registers)
- [ ] Selecting any tree type auto-scrolls the screen so the Varietal
      / Est. Age form card is visible without manual scrolling
- [ ] Picking an Est. Age option dismisses the keyboard and scrolls
      to the bottom of the form so "Add to My Orchard" is visible
      (iOS should NOT auto-refocus the Varietal field)
- [ ] Tapping a different tree type after the first selection does
      NOT re-scroll to the form
- [ ] "Save as Draft" link is gone from below the "Add to My
      Orchard" button
- [ ] Form still submits end-to-end: pick type → fill varietal → pick
      age → "Add to My Orchard" → lands on home with the new tree
