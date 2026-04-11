# Phase 2: Navigation Fixes

## Goal
Ensure all "Home" / back buttons across the app navigate correctly.
No button should ever take the user to the splash page.

## Current state
- Global `headerBackTitle: ""` in `app/_layout.tsx` line 24 hides back text on all screens
- `(tabs)` screen has `title: "Home"` — this should be the back-button label for screens pushed on top
- `app/profile.tsx` lines 65, 78: sign-out routes to `/splash` via `router.replace` — this is correct (signing out should show splash)
- `app/tree/new.tsx` line 60: `router.back()` — fixed in Phase 1
- No other screens appear to have explicit "Home" buttons that could be broken

## Tasks

### 1. Audit all navigation calls
Search all `.tsx` files for:
- `router.back()`
- `router.replace()`
- `router.push()`

Verify each one navigates to the intended destination.

**Known screens to check:**
- `app/tree/new.tsx` — "Add to My Orchard" and "Save as Draft" (Phase 1)
- `app/tree/[id].tsx` — any "back to home" or similar buttons
- `app/tree/guide/[taskId].tsx` — back navigation from step-by-step guide
- `app/(tabs)/index.tsx` — home page navigation to tree detail / new tree
- `app/(tabs)/orchard.tsx` — orchard page navigation to tree detail / new tree
- `app/(tabs)/calendar.tsx` — calendar task navigation
- `components/TimelineTask.tsx` — task tap navigation
- `app/profile.tsx` — sign out (splash is correct here)

### 2. Fix any broken navigation
- Replace any `router.back()` that could land on splash with explicit `router.push("/(tabs)")`
- Ensure back arrows on all stack screens (tree detail, new tree, guide, profile) point to the correct parent

### 3. Verify header back titles
- The `headerBackTitle: ""` global setting should suppress all back-button text
- If any screen still shows incorrect back text (like "splash"), override with `headerBackTitle: "Home"` on that specific Stack.Screen

## Verification
- Navigate to every stack screen (tree detail, new tree, guide, profile)
- Press back arrow on each — should always go to the expected parent screen
- No back arrow should ever navigate to splash (except sign-out flow, which is intentional)
