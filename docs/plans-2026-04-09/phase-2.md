# Phase 2: Onboarding Flow

## Context

New users currently land directly on the Home tab with no introduction, trial info, or auth. This phase adds the first-run experience: a branded splash screen, a trial/subscription page, and a sign-in/sign-up page. Until auth is wired to Supabase, these screens can be static UI with placeholder navigation so the flow is testable end-to-end.

## Images Needed

| Asset | Purpose |
|---|---|
| `main logo.png` | Centred on splash screen |
| `trial page.png` | Visual reference for trial page layout |
| `sign in page.png` | Visual reference for auth page (Goodreads-style) |

Place all image assets in an `assets/images/` directory.

---

## Tasks

### 1. Splash / Logo Screen

- **New file:** `app/splash.tsx` (stack screen, not a tab)
- **Register route:** Add `<Stack.Screen name="splash" options={{ headerShown: false }} />` in `app/_layout.tsx`
- **Design:**
  - White background, vertically and horizontally centred content
  - `main logo.png` displayed via `<Image>` (use `expo-image` or RN `Image`)
  - "Fruit Tree Coach" text below the logo — use `text-2xl font-bold text-brand-700`
  - Optional: subtle fade-in animation with `react-native-reanimated` (already an Expo dep)
- **Behaviour:**
  - This is the initial route on app open (before auth check)
  - After ~2 seconds (or after auth state resolves), auto-navigate:
    - If first launch → trial page
    - If already authenticated → home tabs
  - Use `expo-splash-screen` (`SplashScreen.preventAutoHideAsync` already in `_layout.tsx`) to prevent flash before this screen renders
- **State:**
  - Track `hasSeenOnboarding` in a Zustand store persisted with `zustand/middleware` + `expo-secure-store` or `AsyncStorage`
  - Alternatively, rely on Supabase session presence once auth is real

### 2. Trial Page

- **New file:** `app/trial.tsx` (stack screen)
- **Register route:** Add `<Stack.Screen name="trial" options={{ headerShown: false }} />` in `app/_layout.tsx`
- **Design (reference `trial page.png`):**
  - Full-screen layout, no header
  - App logo at top (smaller than splash)
  - Headline: "Start your free 7-day trial"
  - Bullet list of key features:
    - Personalised weekly care plans
    - Location-aware seasonal guidance
    - Step-by-step pruning, fertilizing & thinning guides
  - Price info: "Then $X.XX/month — cancel anytime"
  - Primary CTA button: "Start Free Trial" → navigates to sign-up
  - Secondary link: "Already have an account? Sign in" → navigates to sign-in
  - Use brand colours: `bg-cream-50` background, `bg-brand-700` button, `text-brand-700` accents
- **Behaviour:**
  - "Start Free Trial" → `router.push("/sign-in?mode=signup")`
  - "Sign in" link → `router.push("/sign-in?mode=login")`
  - No actual payment integration yet — this is UI scaffolding

### 3. Sign-In / Sign-Up Page

- **New file:** `app/sign-in.tsx` (stack screen)
- **Register route:** Add `<Stack.Screen name="sign-in" options={{ headerShown: false }} />` in `app/_layout.tsx`
- **Design (reference `sign in page.png`, Goodreads-style):**
  - Clean, minimal layout — white/cream background
  - App logo at top (small)
  - Toggle between Sign In and Sign Up modes (controlled by route param or local state)
  - **Sign Up mode:**
    - Fields: Name, Email, Password (use `react-hook-form` + Zod validation)
    - "Create Account" primary button
    - "Already have an account? Sign in" link
  - **Sign In mode:**
    - Fields: Email, Password
    - "Sign In" primary button
    - "Don't have an account? Sign up" link
    - "Forgot password?" link (placeholder — shows alert for now)
  - Optional: social auth buttons (Google, Apple) — UI only, not wired
- **Form validation (Zod):**
  - Email: valid email format
  - Password: minimum 8 characters
  - Name (sign-up only): required, non-empty
- **Behaviour:**
  - On submit: call Supabase `signUp` or `signInWithPassword` from `lib/supabase.ts`
  - On success: navigate to `/(tabs)` (home)
  - On error: show inline error message below the form
  - Use existing `FormField` component from `components/FormField.tsx` for consistent field styling
- **Auth helper:**
  - Create `lib/auth.ts` with thin wrappers around Supabase auth methods
  - Keep auth queries out of the component per CLAUDE.md conventions

### 4. Root Layout Auth Gating

- **File:** `app/_layout.tsx`
- **Changes:**
  - Add a Supabase auth state listener (`onAuthStateChange`)
  - On app load:
    - If no session → show splash → trial → sign-in flow
    - If session exists → show tabs as normal
  - Update `unstable_settings.initialRouteName` or use a redirect in `_layout.tsx`
  - Ensure the onboarding screens (`splash`, `trial`, `sign-in`) don't show the tab bar

### 5. Navigation Guard

- **File:** `app/_layout.tsx` or a new `hooks/useAuthGuard.ts`
- **Behaviour:**
  - Redirect unauthenticated users away from tab screens
  - Redirect authenticated users away from onboarding screens
  - Use Expo Router's `<Redirect>` component or `router.replace` in a layout effect

---

## File Summary

| Action | Path |
|---|---|
| Create | `app/splash.tsx` |
| Create | `app/trial.tsx` |
| Create | `app/sign-in.tsx` |
| Create | `lib/auth.ts` |
| Modify | `app/_layout.tsx` (add routes, auth gating) |
| Add | `assets/images/main-logo.png` (provided by designer) |

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes
3. `npm run lint` passes
4. Manual checks:
   - Cold launch → splash screen appears with logo → auto-navigates to trial page
   - Trial page shows features and pricing → "Start Free Trial" goes to sign-up
   - Sign-up form validates inputs (empty name, bad email, short password show errors)
   - Sign-in form validates inputs
   - Successful auth → lands on Home tab
   - Returning user with session → skips onboarding, goes straight to Home
   - Back button from sign-in → returns to trial page
   - Tab bar is not visible on splash, trial, or sign-in screens
