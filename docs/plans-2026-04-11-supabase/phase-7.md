# Phase 7: Profile & Settings — Sync with Supabase

## Goal
Wire the profile screen to read/write from the Supabase `profiles`
table. Decide whether notification settings stay local or move to
Supabase.

## Current state
- `stores/profile-store.ts` — Zustand + AsyncStorage, stores `name` only
- `stores/settings-store.ts` — Zustand + AsyncStorage, stores notification prefs
- `app/profile.tsx` reads from both stores
- Profile name is hardcoded to "Phil" on first load

## Tasks

### 1. Create TanStack Query hooks for profile
- **File:** `hooks/use-profile.ts`
- `useProfile()` — fetches the current user's profile from `profiles` table
  - Uses `useQuery` with key `["profile", userId]`
- `useUpdateProfile()` — `useMutation` wrapping `updateProfile`
  - On success: invalidate `["profile"]` query

### 2. Update profile screen
- **File:** `app/profile.tsx`
- Replace `useProfileStore().name` with `useProfile().data.name`
- Replace `updateProfile({ name })` with `useUpdateProfile().mutateAsync({ name })`
- Show loading state while profile is fetching
- Show the user's email from the auth session (read-only)

### 3. Remove or simplify profile store
- **File:** `stores/profile-store.ts`
- Once profile screen uses hooks, the store is no longer needed
- Remove it, or keep a thin version for caching the user's name in
  places that need it synchronously (header, etc.)

### 4. Decide on settings storage
- **Recommendation: keep local.** Notification preferences are device-specific
  (push token is per-device) and don't need cross-device sync.
- `stores/settings-store.ts` stays as-is with AsyncStorage persistence.
- If we later need cross-device settings, add a `settings` table then.

### 5. Sign-out cleanup
- On sign-out, clear profile query cache
- Clear any local Zustand stores that hold user-specific data
- AsyncStorage items from old stores may linger — add cleanup if needed

## Files changed
- `hooks/use-profile.ts` (new)
- `stores/profile-store.ts` (remove or simplify)
- `app/profile.tsx` — use hooks
- `lib/auth.ts` — add cache cleanup to `signOut`

## Verification
- Profile screen shows name from Supabase `profiles` table
- Update name -> persists in Supabase (check dashboard)
- Sign out and sign in -> name is still there (not hardcoded "Phil")
- Email is displayed correctly from auth session
- Settings (notification prefs) still work as before — local only
- `npm run typecheck` passes
