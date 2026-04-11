# Phase 3: Watering Guide Page Updates

## Goal
Three visual changes on the watering guide page:
1. Tip icons: lightbulb -> star
2. Section headers: remove tree category (e.g. "Pome Fruit")
3. Over-watering icons: filled red water drop -> outlined red water drop

## Current state
- **File:** `app/(tabs)/watering.tsx`
- Line 101: tip icon is `bulb-outline` (lightbulb) — needs to be `star`
- Line 125: section title is `${tree.type} (${category})` — needs to drop `(${category})`
- Lines 35-36: over-watering signs use `name="water"` (filled) — needs to be `name="water-outline"`
- Lines 92-96: under-watering signs already use `water-outline` (amber/yellow) — no change needed

## Tasks

### 1. Change tip icon from lightbulb to star
- **File:** `app/(tabs)/watering.tsx`, line 101
- **Current:** `<Ionicons name="bulb-outline" size={16} color="#15803d" />`
- **Change to:** `<Ionicons name="star" size={16} color="#15803d" />`

### 2. Remove tree category from section headers
- **File:** `app/(tabs)/watering.tsx`, line 125
- **Current:** `title: \`${tree.type} (${category})\``
- **Change to:** `title: tree.type`
- Also remove the `TREE_CATEGORY_MAP` import (line 7) if no longer used
- Remove the `category` variable assignment (line 123) if no longer used

### 3. Change over-watering icon to outline
- **File:** `app/(tabs)/watering.tsx`, line 36
- **Current:** `name={color === "red" ? "water" : "water-outline"}`
- **Change to:** `name="water-outline"` (always outline, regardless of color)
- Both over-watering (red) and under-watering (amber) will now use the outline variant

## Verification
- Open Watering Guide tab
- Each watering card tip section should show a green star icon (not lightbulb)
- Section headers should show just the tree name (e.g. "Apple", not "Apple (Pome Fruit)")
- Over-watering signs should show outlined red water drops (not filled)
- Under-watering signs should still show outlined amber water drops (unchanged)
