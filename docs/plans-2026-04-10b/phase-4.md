# Phase 4: Orchard Page Zip Code Sync

## Goal
When the user updates their zip code in the profile, all existing trees
should reflect the new zip code. New trees should also use the current
profile zip code instead of a hardcoded value.

## Current state
- **Profile store** (`stores/profile-store.ts`): stores `zipCode` and `gardeningZone`, auto-calculates zone from zip on update
- **Tree store** (`stores/tree-store.ts`): stores `trees: Tree[]` with each tree having its own `zipCode` field
- **New tree creation** (`app/tree/new.tsx`, line 54): hardcodes `zipCode: "97201"` with a TODO comment
- **Orchard page** (`app/(tabs)/orchard.tsx`, line 20): shows profile zip in header
- **TreeRow** (`components/TreeRow.tsx`, line 25): shows per-tree `tree.zipCode`
- **Result:** Header shows updated profile zip, but tree rows show the old/hardcoded zip

## Tasks

### 1. Fix new tree creation to use profile zip
- **File:** `app/tree/new.tsx`, line 54
- **Current:** `zipCode: "97201"` (hardcoded)
- **Change to:** Read `zipCode` from `useProfileStore` (already imported, line 21) and use it
- Add `const zipCode = useProfileStore((s) => s.zipCode);` alongside existing `zone` selector
- Replace line 54: `zipCode: zipCode`

### 2. Add zip propagation to tree store
- **File:** `stores/tree-store.ts`
- Add a new action: `updateAllZipCodes(zipCode: string)` that updates `zipCode` on every tree in the store
- This runs whenever the profile zip code changes

### 3. Trigger zip propagation on profile update
- **Option A (preferred):** In the profile update flow, after calling `updateProfile({ zipCode })`, also call `useTreeStore.getState().updateAllZipCodes(newZip)`
- **Option B:** Use a Zustand `subscribe` to watch profile store zip changes and propagate — more automatic but adds coupling
- Decide which approach based on where the profile is edited (likely `app/profile.tsx`)

### 4. Update existing mock trees
- **File:** `lib/mocks/trees.ts`
- If mock trees have hardcoded zip codes, update them to match the default profile zip ("97201") for consistency
- Or better: have the mock data reference the default from the profile store

## Verification
- Add a tree -> its zip should match profile zip (not "97201" if profile has a different zip)
- Change zip in profile -> go to orchard -> header zip and ALL tree row zips should match
- Add another tree after changing zip -> new tree should have the updated zip
