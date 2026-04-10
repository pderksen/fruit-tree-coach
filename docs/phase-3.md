# Phase 3: Icon & Visual Consistency

## Context

The app currently uses emoji characters and Ionicons for fruit tree imagery, which looks inconsistent and unpolished. This phase replaces all fruit emoji/icons with extracted images from a master icon sheet, standardises recurring UI icons across the app, and makes several branding/naming updates to improve visual cohesion.

## Images Needed

| Asset | Purpose |
|---|---|
| `MAIN fruit icons.png` | Master sheet — extract individual fruit icons from this |
| `main logo.png` | Replace leaf icon in home header; cropped to fit inline |

### Icon Extraction

Extract individual fruit icons from `MAIN fruit icons.png` and save as separate PNGs in `assets/images/fruit-icons/`. Name each file to match the `FruitTreeType` union in lowercase:

```
assets/images/fruit-icons/apple.png
assets/images/fruit-icons/pear.png
assets/images/fruit-icons/peach.png
assets/images/fruit-icons/cherry.png
assets/images/fruit-icons/plum.png
assets/images/fruit-icons/fig.png
assets/images/fruit-icons/lemon.png
assets/images/fruit-icons/orange.png
assets/images/fruit-icons/lime.png
... (one per supported FruitTreeType)
```

---

## Tasks

### 1. Create Fruit Icon Map

- **New file:** `lib/fruit-icons.ts`
- **Purpose:** Export a `FRUIT_ICON_MAP` that maps each `FruitTreeType` to its `require()`'d image asset
- **Example:**
  ```ts
  import type { FruitTreeType } from "@/lib/types";
  import { ImageSourcePropType } from "react-native";

  export const FRUIT_ICON_MAP: Partial<Record<FruitTreeType, ImageSourcePropType>> = {
    Apple: require("@/assets/images/fruit-icons/apple.png"),
    Pear: require("@/assets/images/fruit-icons/pear.png"),
    // ...
  };
  ```
- **Fallback:** If a fruit type has no extracted icon, components should fall back to the existing emoji from `TREE_EMOJI` in `lib/fruit-tree-data.ts`

### 2. Create Reusable FruitIcon Component

- **New file:** `components/FruitIcon.tsx`
- **Props:** `type: FruitTreeType`, `size?: number` (default 24)
- **Behaviour:** Renders the extracted icon image if available in `FRUIT_ICON_MAP`, otherwise falls back to a `<Text>` with the emoji from `TREE_EMOJI`
- **Usage:** Replace all inline emoji/icon rendering for fruit types across the app with `<FruitIcon>`

### 3. Replace Fruit Emoji/Icons Throughout the App

Swap every instance of fruit emoji or Ionicon leaf stand-ins with `<FruitIcon>`:

- **`components/TreeCard.tsx`** — tree card icon
- **`components/TreeRow.tsx`** — tree row icon
- **`components/TreeDetailHeader.tsx`** — tree detail page header
- **`app/(tabs)/orchard.tsx`** — add fruit icon next to each tree name
- **`app/tree/new.tsx`** and **`components/FruitTypeGrid.tsx`** — fruit type selector grid
- **Any other component** rendering `TREE_EMOJI[tree.type]`

### 4. Standardise Recurring UI Icons

Replace inconsistent icons with a standard set across all screens:

| Concept | Icon | Colour | Usage |
|---|---|---|---|
| Tips / Expert Tips | Green star (`star`) | `#15803d` (brand-700) | `ExpertTipsCard`, `CoachTipCard`, `TipCard`, `GardenerInsight` |
| Pruning Products | Scissors (`cut-outline`) | `#15803d` | Guide product recommendations (category: `pruning-tool`) |
| Other Products | Green leaf (`leaf-outline`) | `#15803d` | Guide product recommendations (category: `fertilizer`, `other`) |
| Tools Needed | Wrench (`build-outline`) | `#6b7280` (gray-500) | Guide tools section |

- **File:** `app/tree/guide/[taskId].tsx` — update `CategoryIcon` function to match the table above
- **Files:** `components/ExpertTipsCard.tsx`, `components/CoachTipCard.tsx`, `components/TipCard.tsx`, `components/GardenerInsight.tsx` — replace any non-star icons for tips with the green star
- Audit all screens for stray icon inconsistencies

### 5. Home Page: Replace Leaf with Logo

- **File:** `app/(tabs)/index.tsx`
- **Current:** `<Ionicons name="leaf" size={22} color="#15803d" />` next to "Fruit Tree Coach" (line 29)
- **Change:** Replace with a small `<Image>` rendering `main logo.png`, cropped/sized to ~22×22, with `resizeMode="contain"`
- Ensure proper vertical alignment with the title text

### 6. Rename "Your Fruit Trees" to "My Backyard Orchard"

- **File:** `app/(tabs)/index.tsx`
- **Current:** `"Your Fruit Trees"` (line 83)
- **Change:** `"My Backyard Orchard"`
- Also update the "See All" link label if it says "See All Trees" anywhere

### 7. Orchard Page: Add Fruit Icon Next to Each Tree Name

- **File:** `app/(tabs)/orchard.tsx`
- **Change:** In each tree row/card, prepend the `<FruitIcon>` component before the tree name
- Ensure consistent spacing and alignment

### 8. Orchard Page: Show Gardening Zone Under Heading

- **File:** `app/(tabs)/orchard.tsx`
- **Change:** Below the "My Orchard" heading, add a subtitle line showing the user's gardening zone
- **Example:** `"Zone 8b · Portland, OR"` — pull zone from profile data (currently hardcoded in `app/profile.tsx` as `"8b"`)
- Style: `text-sm text-gray-500` to match existing subtitle patterns
- Later phases will make this dynamic from user profile/location

---

## File Summary

| Action | Path |
|---|---|
| Create | `lib/fruit-icons.ts` |
| Create | `components/FruitIcon.tsx` |
| Create | `assets/images/fruit-icons/*.png` (provided by designer) |
| Modify | `components/TreeCard.tsx` |
| Modify | `components/TreeRow.tsx` |
| Modify | `components/TreeDetailHeader.tsx` |
| Modify | `components/FruitTypeGrid.tsx` |
| Modify | `components/ExpertTipsCard.tsx` |
| Modify | `components/CoachTipCard.tsx` |
| Modify | `components/TipCard.tsx` |
| Modify | `components/GardenerInsight.tsx` |
| Modify | `app/(tabs)/index.tsx` |
| Modify | `app/(tabs)/orchard.tsx` |
| Modify | `app/tree/guide/[taskId].tsx` |

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes
3. `npm run lint` passes
4. Manual checks:
   - Home page shows logo (not leaf icon) next to "Fruit Tree Coach"
   - Home page says "My Backyard Orchard" instead of "Your Fruit Trees"
   - All tree cards/rows show the extracted fruit icon (not emoji)
   - Orchard page shows fruit icon next to each tree name
   - Orchard page shows gardening zone under the heading
   - Tree detail page header shows correct fruit icon
   - Fruit type selector grid shows fruit icons
   - Expert tips sections use green star icon consistently
   - Guide pages use correct icons: scissors for pruning, leaf for other products, wrench for tools
   - Fruit types without an extracted icon fall back to emoji gracefully
   - Icons render crisply on both iOS and Android at various screen densities
