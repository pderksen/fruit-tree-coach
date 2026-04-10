# Phase 3: Tree Details Page Redesign

## Context

The tree detail page needs a structured, ordered layout for tree information. Currently the header shows the name, scientific name badge, and age badge, but not in the specific order requested. The tree category ("Type of tree") is missing from the detail view, and the layout needs to be sequential rows rather than inline badges.

## Images Needed

**None.**

---

## Tasks

### 1. Restructure TreeDetailHeader into Ordered Rows

- **File:** `components/TreeDetailHeader.tsx`
- **Current:** Lines 18-35 show a centered layout with fruit icon, tree name, scientific name as a badge, and age as a badge. Layout is centered with badges inline.
- **Fix:** Redesign to show information in clear, distinct rows:
  - **1st row:** Tree name (e.g. "Honeycrisp Apple") — large, bold, prominent
  - **2nd row:** "Scientific Name: Malus domestica" — regular text, slightly muted
  - **3rd row:** Age (e.g. "7 years old") — calculated from `plantedYear`, regular text
  - **4th row:** "Type of tree: Pome Fruit" — from `TREE_CATEGORY_MAP[tree.type]`
  - **After rows:** The tree description paragraph
- Keep the fruit icon at the top (above the name) or integrate it beside the name — maintain visual appeal.
- Each row should be left-aligned or centered consistently.
- Use labels like "Scientific Name:" and "Type of tree:" as inline prefixes.

### 2. Add Tree Category to Detail View

- **File:** `components/TreeDetailHeader.tsx`
- **Fix:**
  - Import `TREE_CATEGORY_MAP` from `@/lib/fruit-tree-data`
  - Add 4th row showing "Type of tree: {category}" where category comes from `TREE_CATEGORY_MAP[tree.type]`

### 3. Improve Age Display

- **File:** `components/TreeDetailHeader.tsx`
- **Current:** Age shown as a badge like "~7 years"
- **Fix:** Change to a row that reads naturally, e.g. "7 years old". If `plantedYear` is missing, show the `ageBracket` label instead (e.g. "Maturing tree").

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes for touched files
3. `npm run lint` passes
4. Manual checks:
   - Tree detail page shows 4 ordered rows: name, scientific name, age, type
   - Description paragraph follows the 4 rows
   - All data pulls correctly from existing data sources
   - Layout looks clean on both iOS and Android
