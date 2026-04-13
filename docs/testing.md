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
`docs/plans-2026-04-12/`).

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

- [ ] On the tree detail screen, the priority card only appears when a
      task is currently in its seasonal window
- [ ] A task within 14 days *before* its window start shows in the
      "later" list with a gray "Coming up" tag
- [ ] A task within 14 days *after* its window end shows with an amber
      ⚠ "Do this as soon as possible" tag and an amber left border on
      the priority card
- [ ] A task more than 14 days outside its window does not appear
- [ ] A tree with no active/upcoming/late tasks shows the 🌱 "just
      growing" empty state — not a red error and not an empty page
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
