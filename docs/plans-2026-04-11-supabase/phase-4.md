# Phase 4: Orchards — Migrate to Supabase + TanStack Query

## Goal
Replace the local Zustand orchard store with TanStack Query hooks
backed by the Supabase orchard service. Orchards are the first entity
to migrate because trees depend on them (foreign key).

## Current state
- `stores/orchard-store.ts` manages orchards in Zustand + AsyncStorage
- Initialized with a hardcoded default orchard (zip "97201", zone "7a")
- Used by: orchard screen, profile screen, new-tree form, home screen
- Has `refreshZoneFromApi` for USDA zone lookup

## Tasks

### 1. Create TanStack Query hooks for orchards
- **File:** `hooks/use-orchards.ts`
- `useOrchards()` — fetches all orchards for the current user
  - Uses `useQuery` with key `["orchards", userId]`
  - Calls `fetchOrchards(userId)` from the service layer
- `useCreateOrchard()` — `useMutation` wrapping `createOrchard`
  - On success: invalidate `["orchards"]` query
- `useUpdateOrchard()` — `useMutation` wrapping `updateOrchard`
  - On success: invalidate `["orchards"]` query
- `useDefaultOrchard()` — convenience hook that returns the first orchard
  (or a specific one if we add multi-orchard support later)

### 2. Auto-create default orchard on sign-up
- After sign-up completes (Phase 2), call `createOrchard` with:
  - `user_id`: the new user's ID
  - `name`: "My Orchard"
  - `zip_code`: from the user's profile or left blank
  - `zone`: looked up from zip or left blank
- Could be done in the sign-up flow or via a Supabase trigger
  (prefer app-side for now — simpler to debug)

### 3. Keep USDA zone lookup working
- `refreshZoneFromApi` currently lives in the Zustand store
- Move it to the update-orchard mutation: when zip changes, fetch zone
  from USDA API, then update both `zip_code` and `zone` in Supabase
- Keep `lib/zone-lookup.ts` unchanged — it's a pure utility

### 4. Update screens to use new hooks
- **`app/(tabs)/orchard.tsx`** — replace `useOrchardStore()` with `useOrchards()`
- **`app/profile.tsx`** — replace orchard store reads/writes with hooks
- **`app/tree/new.tsx`** — get `orchardId` from the hook instead of the store
- **`app/(tabs)/home.tsx`** — if it reads orchard data, switch to hooks

### 5. Remove or gut `orchard-store.ts`
- Once all consumers are migrated, remove the Zustand store
- Or keep a minimal version for optimistic UI (local state for instant updates)
- Delete the AsyncStorage persistence — Supabase is the source of truth

## Files changed
- `hooks/use-orchards.ts` (new)
- `stores/orchard-store.ts` (remove or simplify)
- `app/(tabs)/orchard.tsx` — use hooks
- `app/profile.tsx` — use hooks
- `app/tree/new.tsx` — use hooks
- `app/(tabs)/home.tsx` — use hooks (if applicable)

## Verification
- Create a new account -> default orchard exists in Supabase `orchards` table
- Update zip code on profile -> orchard row updates in Supabase
- Zone auto-refreshes after zip change
- Orchard screen shows data from Supabase (verify by editing in Supabase
  dashboard and refreshing the app)
- `npm run typecheck` passes
