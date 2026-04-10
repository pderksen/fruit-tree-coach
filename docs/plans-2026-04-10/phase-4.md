# Phase 4: New Tree Page Improvements

## Context

The new tree page currently shows 9 popular types then all categories. We need to limit to 8 zone-appropriate popular types, improve the search UX with a "Look for more" prompt, and fix the back button header text.

## Images Needed

**None.**

---

## Tasks

### 1. Limit to 8 Most Popular Trees for User's Zone

- **File:** `components/FruitTypeGrid.tsx`, `lib/fruit-tree-data.ts`
- **Current:** Shows first 9 types from `FRUIT_TREE_TYPES` as "popular", then categorized groups on toggle. `POPULAR_TYPE_COUNT` is 9.
- **Fix:**
  - Change `POPULAR_TYPE_COUNT` from 9 to 8
  - Create a zone-aware popular types function or mapping:
    - Define a `POPULAR_BY_ZONE` map (or similar) that returns the 8 most popular types for a given USDA zone range
    - For zones 3-5 (cold): emphasize Apple, Pear, Cherry, Plum, Peach, Apricot, Elderberry, Mulberry
    - For zones 6-8 (moderate): emphasize Apple, Peach, Pear, Cherry, Plum, Fig, Persimmon, Pomegranate
    - For zones 9-13 (warm): emphasize Citrus (Orange, Lemon, Lime, Grapefruit), Fig, Pomegranate, Avocado, Mango
    - These are starting suggestions — can refine with research
  - Pass the user's zone from profile store to FruitTypeGrid
  - Display only those 8 types in the initial grid view

### 2. Add "Look for More" Search UX

- **File:** `components/FruitTypeGrid.tsx`
- **Current:** Search input already exists (lines 45-55) and "Show all" / "Show fewer" toggle exists (lines 66-74)
- **Fix:**
  - Below the 8 popular types, add a "Look for more" text/link that reveals the search box
  - Or: Show "Look for more" as a subtle prompt above/near the search input
  - When user taps "Look for more" or starts typing in search, show the full list filtered by query
  - Search should filter across ALL tree types, not just the 8 popular ones
  - Style: Use a common app pattern — text link or button with search icon, e.g. "🔍 Look for more trees"

### 3. Fix Back Button Header Text

- **File:** `app/_layout.tsx`
- **Current:** The `tree/new` screen is registered in `_layout.tsx` (line ~47). The back button may show "splash" as the back title depending on navigation state.
- **Fix:**
  - The `tree/new` route opens as a modal from the tabs. The back button text comes from the previous screen's title.
  - Ensure the `(tabs)` screen has `title: "Home"` in `_layout.tsx` so back button reads "Home" (or empty with the global `headerBackTitle: ""` setting)
  - If the issue is specific to `tree/new` showing "splash", verify that navigation goes `splash → (tabs) → tree/new` and that `splash` is replaced (not pushed) so it's not in the stack
  - Check that `router.replace` is used on splash (not `router.push`) to keep splash out of the back stack

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes for touched files
3. `npm run lint` passes
4. Manual checks:
   - New tree page shows exactly 8 fruit types appropriate for the user's zone
   - "Look for more" text is visible and reveals search/full list
   - Search filters all tree types (not just popular 8)
   - Back button in top-left says "Home" (or just arrow), not "splash"
   - Changing zone in profile changes which 8 types appear
