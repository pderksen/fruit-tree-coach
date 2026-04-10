# Phase 1: Splash Page & App Entry Flow

## Context

The splash page should be the definitive entry point every time the app opens. Currently it navigates to tabs after 2 seconds and has a green leaf icon next to the title. We need to clean up the visual and confirm the flow.

## Images Needed

**None.** The main logo image is already in place.

---

## Tasks

### 1. Remove Green Leaf Icon from Splash

- **File:** `app/splash.tsx`
- **Current:** Line ~25-29 shows an Ionicons `leaf` icon (28px, #15803d) next to "Fruit Tree Coach" text
- **Fix:** Remove the `<Ionicons name="leaf" />` element. Keep only the "Fruit Tree Coach" text.

### 2. Verify Auto-Navigation Timing

- **File:** `app/splash.tsx`
- **Current:** 2-second `setTimeout` before `router.replace("/(tabs)")` (lines 12-15)
- **Fix:** Confirm this navigates to the home tab (index). The `initialRouteName: "splash"` in `app/_layout.tsx` already ensures splash is first. No change needed if working correctly.

### 3. Verify Splash is Always First Screen

- **File:** `app/_layout.tsx`
- **Current:** `initialRouteName: "splash"` on line 11
- **Fix:** Confirm that on every app open (cold start and resume), the user sees splash first. If `replace` keeps the tabs in the stack on resume, consider whether additional logic is needed. For now, cold start behavior is the priority.

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes for `splash.tsx`
3. `npm run lint` passes
4. Manual checks:
   - App opens to splash screen
   - No leaf icon next to "Fruit Tree Coach"
   - After ~2 seconds, navigates to home page
   - Logo and text are centered and clean
