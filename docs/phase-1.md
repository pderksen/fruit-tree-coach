# Phase 1: Fix What's Broken + Navigation Consistency

## Context

The app has several non-functional UI elements and the Tips tab should be replaced with a more useful Watering guide. This phase focuses on making existing features work and cleaning up navigation before adding new features in later phases.

## Images Needed

**None.** All Phase 1 changes are code and navigation fixes — no new image assets required.

---

## Tasks

### 1. Fix "Add to My Orchard" (broken persistence)

- **File:** `app/tree/new.tsx`
- **Problem:** `onSubmit` logs to console and calls `router.back()` but never saves the tree. Trees don't appear in the orchard after submission.
- **Fix:** Create a Zustand store (`stores/tree-store.ts`) to hold user trees in local state. Update `onSubmit` to add the tree to this store. Update orchard and home pages to read from this store (merged with mock data for now).

### 2. Link Profile Icon to Profile/Account Page

- **File:** `app/(tabs)/index.tsx`
- **Problem:** Profile icon `<Pressable>` has no `onPress` handler. No profile page exists.
- **Fix:**
  - Create `app/profile.tsx` as a stack screen
  - Add `onPress` handler to navigate to `/profile`
  - Register route in `app/_layout.tsx`
  - Profile page includes: name, zip code, gardening zone, subscription status (placeholder/editable)

### 3. Link "Start Weekly Checklist"

- **File:** `app/(tabs)/index.tsx` via `OrchardHealthCard` component
- **Problem:** `onStartChecklist` callback is empty (TODO comment).
- **Fix:** Navigate to the calendar page: `router.push('/(tabs)/calendar')`. The calendar already shows monthly tasks, making it the logical destination.

### 4. Back Arrow Consistency

- **Files:** `app/_layout.tsx`, screen headers
- **Problem:** Back buttons may show "(tabs)" text instead of a clean arrow.
- **Fix:** Add `headerBackTitle: ""` to the `(tabs)` Stack.Screen in root layout so back buttons show just an arrow. Verify consistency across all stack screens.

### 5. Remove Tips Page → Replace with Watering Guide

- **Files:** `app/(tabs)/_layout.tsx`, `app/(tabs)/tips.tsx`
- **Fix:**
  - Replace `tips.tsx` with `watering.tsx`
  - Update tab config in `_layout.tsx` (icon: `water-outline`, label: "Watering")
  - Content: how much to water each tree type, when to water, signs of over/under-watering
  - Create `lib/care/watering.ts` for watering data per tree type

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes
3. `npm run lint` passes
4. Manual checks:
   - Add a tree → appears in orchard list
   - Tap profile icon → navigates to profile page
   - Tap "Start Weekly Checklist" → navigates to calendar
   - Back arrows show correctly (no "(tabs)" text)
   - Tips tab is gone, Watering tab shows content
