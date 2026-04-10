# Phase 2: Home Page Updates

## Context

The home page needs a gardening zone header and the tree cards should be simplified by removing the category badge (e.g. "Pome Fruit", "Citrus") that currently appears next to each tree name.

## Images Needed

**None.**

---

## Tasks

### 1. Add "My Gardening Zone" Header

- **File:** `app/(tabs)/index.tsx`
- **Current:** The home page starts with a logo + title header (lines 28-49). Zone info is only shown on the orchard page.
- **Fix:**
  - Import `useProfileStore` to read `gardeningZone`
  - Add a section at the top (below the existing header, above "This Week") that displays:
    - Title: "My Gardening Zone"
    - Zone value: e.g. "Zone 8b" in a prominent style (bold, larger text or badge)
  - Style: Clean, visible but not overwhelming. Consider a subtle card or inline display.

### 2. Remove Tree Category Badge from TreeCard

- **File:** `components/TreeCard.tsx`
- **Current:** Lines ~30-40 show a `<Badge>` component with the tree's category (from `TREE_CATEGORY_MAP`), styled with category-specific colors (lines 8-17).
- **Fix:**
  - Remove the category badge (`<Badge>` element) from the TreeCard component
  - Remove the `TREE_CATEGORY_MAP` import and `CATEGORY_COLORS` map if no longer used in this file
  - Keep the tree icon, tree name, status label, status description, and "View Care Guide" button

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes for touched files
3. `npm run lint` passes
4. Manual checks:
   - Home page shows "My Gardening Zone" with zone number at top
   - Zone updates when changed in profile
   - Tree cards no longer show "Pome Fruit", "Citrus", etc.
   - Tree cards still show icon, name, status, and care guide button
