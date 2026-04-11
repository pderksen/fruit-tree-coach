# Phase 2: Auth — Wire Up Real Sign-In / Sign-Up / Sign-Out

## Goal
Replace the mock auth functions with real Supabase auth so users can
create accounts, sign in, sign out, and reset passwords. Gate the app
so only authenticated users see the main tabs.

## Current state
- `lib/auth.ts` has three mock functions that always return `{ success: true }`
- `app/sign-in.tsx` calls these mocks, then navigates to `/(tabs)` on success
- `app/_layout.tsx` always shows the full stack (no auth gating)
- Social auth buttons show "Coming Soon" alerts

## Tasks

### 1. Replace mock auth with real Supabase calls
- **File:** `lib/auth.ts`
- `signIn(email, password)` -> `supabase.auth.signInWithPassword({ email, password })`
- `signUp(name, email, password)` -> `supabase.auth.signUp({ email, password, options: { data: { name } } })`
- `signOut()` -> `supabase.auth.signOut()`
- Keep the same `AuthResult` return shape so `sign-in.tsx` doesn't need major changes
- Map Supabase error messages to user-friendly strings

### 2. Add auth state listener in root layout
- **File:** `app/_layout.tsx`
- Use `supabase.auth.onAuthStateChange()` in a `useEffect`
- Track auth state: `"loading" | "authenticated" | "unauthenticated"`
- While loading, show splash screen (or keep native splash visible)
- When authenticated, render the full Stack
- When unauthenticated, redirect to splash/trial/sign-in flow

### 3. Create `useSession` hook or auth context
- **File:** `lib/auth.ts` or `hooks/use-session.ts`
- Expose: `session`, `user`, `isLoading`, `isAuthenticated`
- Used by root layout and any screen that needs the current user ID
- Keep it simple — just wraps `onAuthStateChange` + `getSession`

### 4. Gate navigation on auth state
- **File:** `app/_layout.tsx`
- If unauthenticated: `router.replace("/splash")` or only render splash/trial/sign-in screens
- If authenticated: render tabs + all other screens
- The sign-in `onSuccess` callback can stay as `router.replace("/(tabs)")` —
  the auth state change will naturally allow it

### 5. Seed profile store from auth metadata
- **File:** `stores/profile-store.ts`
- After sign-in or sign-up, read `user.user_metadata.name` and set it in the store
- This is a temporary bridge — Phase 7 will replace the store with Supabase queries

### 6. Add password reset
- **File:** `app/sign-in.tsx`
- Replace the "Forgot password?" alert with `supabase.auth.resetPasswordForEmail(email)`
- Show a confirmation message: "Check your email for a reset link"
- Could also add a small text input modal to collect the email if not already filled in

### 7. Update sign-in error handling
- **File:** `app/sign-in.tsx`
- Supabase returns specific error messages — map them:
  - `"Invalid login credentials"` -> "Incorrect email or password"
  - `"User already registered"` -> "An account with this email already exists"
  - Network errors -> "Unable to connect. Check your internet connection."

## Files changed
- `lib/auth.ts` — real Supabase auth calls
- `app/_layout.tsx` — auth state listener + navigation gating
- `hooks/use-session.ts` (new) — session hook
- `app/sign-in.tsx` — error handling, password reset
- `stores/profile-store.ts` — seed name from auth metadata

## Verification
- Sign up with a new email -> account created in Supabase Auth dashboard
- Sign in with that email -> lands on home tabs
- Sign out -> redirected to splash/sign-in
- Sign in with wrong password -> shows error message
- Close and reopen app while signed in -> stays signed in (session persisted)
- Tap "Forgot password?" -> sends reset email (check Supabase logs)
- `npm run typecheck` passes
