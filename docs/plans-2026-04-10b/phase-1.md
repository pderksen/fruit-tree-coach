# Phase 1: Splash Page & App Entry Flow Fixes

## Goal
Ensure the splash page is the true first screen, looks correct, and that
navigation after adding a tree or pressing back doesn't route to splash.

## Current state
- `app/splash.tsx` already has logo + "Fruit Tree Coach" text on white bg, auto-navigates after 2s
- `app/_layout.tsx` has `initialRouteName: "splash"` — splash IS the first screen
- Logo renders at 160x160 (`h-40 w-40`) — may need to verify it looks "app-store square"
- **Bug:** `app/tree/new.tsx` line 60 uses `router.back()` after "Add to My Orchard" — if the user navigated from splash (or the stack is shallow), this can land on splash instead of Home
- **Bug:** The back arrow on the New Tree page shows "splash" because the previous screen in the stack is splash (on first launch the stack is splash -> (tabs) -> tree/new, and `headerBackTitle: ""` should hide it — need to verify why it still shows "splash")

## Tasks

### 1. Verify splash page appearance
- Confirm logo asset is square and displays correctly at app-store-like size
- White background, centered logo, "Fruit Tree Coach" text below — already done, just verify

### 2. Fix "Add to My Orchard" navigation
- **File:** `app/tree/new.tsx`, line 60
- **Current:** `router.back()` — unreliable, may go to splash
- **Change to:** `router.replace("/(tabs)")` — always goes home, replaces tree/new in stack
- This ensures after adding a tree the user always lands on the home tab

### 3. Fix back button text showing "splash"
- **File:** `app/_layout.tsx`, line 24
- `headerBackTitle: ""` is already set globally — investigate why "splash" still appears
- The `(tabs)` screen has `title: "Home"` (line 41) which should be the back title
- Likely cause: when navigating splash -> (tabs) -> tree/new, the stack includes splash; `router.replace("/(tabs)")` in splash.tsx (line 12) should remove splash from the stack — verify this is working
- If the issue persists, explicitly set `headerBackTitle: "Home"` on the `tree/new` Stack.Screen

### 4. Fix "Save as Draft" button
- **File:** `app/tree/new.tsx`, line 132
- Same `router.back()` issue — change to `router.replace("/(tabs)")`

## Verification
- Open app fresh -> see splash -> auto-nav to home
- Navigate to New Tree -> back arrow should say "Home" (or be blank), NOT "splash"
- Add a tree -> should land on home page, not splash
- Press "Save as Draft" -> should land on home page
