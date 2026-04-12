# Phase 2: Navigation Reliability

## Problem

Three navigation issues survived the Supabase migration:

1. **Splash in the Stack.** `app/_layout.tsx` registers `splash` as a
   `Stack.Screen` (see `app/_layout.tsx:98-101`). If auth state flips
   mid-session, splash can become a back-button target or appear in
   the navigation history. Splash should be a conditional render
   *before* the Stack, not a screen within it.

2. **Unconditional `router.back()`.** Several places call
   `router.back()` without a `canGoBack()` guard. When history is
   empty (deep link from a notification, cold start, modal dismissal)
   this either no-ops or pops the user to an unexpected screen:
   - `app/_layout.tsx:92` — header back button
   - `app/tree/guide/[taskId].tsx:57` — guide dismiss
   - `app/tree/new.tsx` — "Save as Draft" link (also uses `replace`,
     which is fine, but needs review alongside the back-arrow behavior)

3. **iOS modal dismissal.** `sign-in` and `trial` are presented as
   modals in `app/_layout.tsx:113-119`. On iOS these can be
   swipe-dismissed, which may leave the user in an inconsistent auth
   state. Verify and, if needed, set `gestureEnabled: false` for the
   auth modals.

These are leftovers from `plans-2026-04-10b` Phase 1–2 that didn't get
finished before the Supabase work consumed attention.

## Tasks

1. **Extract splash out of the Stack.** In `app/_layout.tsx`, return
   the splash component directly (outside the `Stack`) while auth is
   still loading or on first app open. Only mount the `Stack` once
   we know the auth state. Remove the `<Stack.Screen name="splash"
   />` registration.

2. **Delete `app/splash.tsx` as a routable screen.** Once it's no
   longer in the Stack, move the JSX into a non-route component
   under `components/SplashScreen.tsx` (or similar). Expo Router
   auto-registers files in `app/`, so leaving `app/splash.tsx` in
   place will keep it routable — remove or relocate the file.

3. **Add a `safeBack` helper.** In `lib/navigation.ts` (new), export:
   ```ts
   export function safeBack(fallback: Href = "/") {
     if (router.canGoBack()) router.back();
     else router.replace(fallback);
   }
   ```
   Replace every unconditional `router.back()` in the three files
   above with `safeBack("/")` (or a more appropriate fallback per
   context — the guide screen probably falls back to the tree detail,
   not home).

4. **iOS modal audit.** Load the app on an iOS simulator (or device)
   and confirm that swipe-dismissing `sign-in` and `trial` doesn't
   leave the user unauthenticated-but-past-the-gate. If it does, set
   `gestureEnabled: false` on those `Stack.Screen` options, or move
   them out of modal presentation.

5. **Manual QA matrix.** Verify on both Android and iOS:
   - Cold launch → splash shows → routes to correct screen based on
     auth state → splash never appears in back stack
   - Deep link into `/tree/[id]` → back button goes to orchard, not
     splash, not nothing
   - Sign out → lands on splash/sign-in, cannot back-swipe to tabs
   - Guide screen → back button returns to tree detail

## Out of scope

- Redesigning the auth-gating state machine. If the conditional-render
  pattern exposes a real state-machine problem (e.g. flashing splash
  on every tab change), file it separately.
- New navigation features (deep-link handling, universal links).

## Done when

- [ ] Splash is no longer a `Stack.Screen`
- [ ] `app/splash.tsx` deleted or relocated out of `app/`
- [ ] `lib/navigation.ts` with `safeBack` exists and is used in the
      three call sites above
- [ ] Manual QA matrix checked on both platforms
- [ ] iOS modal dismissal behavior documented or locked down
- [ ] `npm run typecheck && npm test && npm run lint` pass
