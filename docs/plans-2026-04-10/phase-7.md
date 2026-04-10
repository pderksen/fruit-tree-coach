# Phase 7: App-Wide Consistency & Zip Code Propagation

## Context

This is the cross-cutting phase that ensures visual and functional consistency across the entire app. It covers standardized icons, back-button navigation, and making zip code/zone changes propagate everywhere.

## Images Needed

**None** (unless custom star/scissors/wrench icons are desired beyond Ionicons).

---

## Tasks

### 1. Standardize Icons Throughout the App

- **Files:** All components that show tips, products, or tools
- **Fix:** Create a shared icon convention and apply it everywhere:
  - **Green star** (`star`, #15803d) → all tips & expert tips on all pages
    - Files to update: `components/ExpertTips.tsx` or wherever tips appear, tree detail expert tips section, watering guide tips, coach tips on new tree page
  - **Scissors** (`cut-outline` or similar) → recommended products for pruning
    - Files to update: any product recommendation components for pruning tools
  - **Green leaf** (`leaf-outline`, #15803d) → all other recommended products
    - Files to update: any product recommendation components for non-pruning products (fertilizers, etc.)
  - **Wrench** (`build-outline` or `hammer-outline`) → all tools needed
    - Files to update: any tool recommendation sections
- Consider creating a small `components/CategoryIcon.tsx` helper that maps category → icon + color for reuse

### 2. Fix All Back/Home Navigation

- **Files:** `app/_layout.tsx`, all stack screens
- **Current:** `headerBackTitle: ""` is set globally. Some screens may have inconsistent navigation.
- **Fix:**
  - Audit every screen that shows a back arrow in the top-left
  - Ensure all back arrows navigate to a logical parent (usually home)
  - For stack screens opened from tabs, back should return to the tab
  - For deeply nested screens (e.g. guide → task detail), back should go up one level
  - Verify no screen shows "splash" or "(tabs)" as back text

### 3. Zip Code → Zone Propagation

- **File:** `stores/profile-store.ts`, `app/profile.tsx`
- **Current:** Zip code and gardening zone are independently editable fields. Changing zip does NOT auto-update zone.
- **Fix:**
  - Add a zip-to-zone lookup function in `lib/zone-lookup.ts`:
    - Use a mapping of zip code prefixes to USDA hardiness zones
    - Or integrate a lightweight lookup table (zip prefix → zone)
    - This doesn't need to be perfect — a prefix-based approximation is fine for MVP
  - When user changes zip code in profile:
    - Auto-update `gardeningZone` in the profile store
    - Zone field on profile page updates immediately
    - All consumers of `useProfileStore` (home page zone display, new tree zone filtering) reactively update via Zustand

### 4. Verify Zone Propagation Across App

- **Files:** All screens that read zone or zip from profile store
- **Fix:** Ensure these screens react to zone changes:
  - **Home page** (`app/(tabs)/index.tsx`): "My Gardening Zone" header updates
  - **New tree page** (`components/FruitTypeGrid.tsx`): Popular 8 trees update for new zone
  - **Orchard page** (`app/(tabs)/orchard.tsx`): Zone display under heading updates
  - **Profile page** (`app/profile.tsx`): Zone field updates when zip changes
  - Since all use `useProfileStore`, Zustand reactivity should handle this — but verify with manual testing

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes for touched files
3. `npm run lint` passes
4. Manual checks:
   - All tips show green star icon consistently
   - Pruning product recommendations show scissors icon
   - Other product recommendations show green leaf icon
   - Tool sections show wrench icon
   - Every back arrow navigates correctly (no dead ends, no "splash" text)
   - Change zip code in profile → zone updates on profile page
   - Navigate to home → zone header shows new zone
   - Navigate to new tree → popular types reflect new zone
   - Navigate to orchard → zone display updated
