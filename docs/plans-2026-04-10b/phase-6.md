# Phase 6: New Tree Page Fruit Icons

## Goal
Replace tree emoji/icons with actual fruit images for all types on the
New Tree page (and everywhere FruitIcon is used). No trees, just fruits.

## Current state
- **FruitIcon** (`components/FruitIcon.tsx`): checks `FRUIT_ICON_MAP` for PNG first, falls back to emoji from `TREE_EMOJI`
- **FRUIT_ICON_MAP** (`lib/fruit-icons.ts`): all 15 PNG requires are commented out — no images are active
- **TREE_EMOJI** (`lib/fruit-tree-data.ts`, lines 167-206): many types use `🌳` tree emoji as placeholder:
  - Fig, Pomegranate, Persimmon, Medlar, Jujube, Papaya, Passion Fruit, Dragon Fruit, Jackfruit, Pawpaw — all use `🌳`
- **FruitTypeGrid** (`components/FruitTypeGrid.tsx`): renders `<FruitIcon type={type} size={32} />` for each type

## Tasks

### 1. Source fruit PNG icons
- Need small transparent PNG images of individual fruits (not trees) for all types
- Priority types that currently show tree emoji: Fig, Pomegranate, Persimmon, Medlar, Jujube, Papaya, Passion Fruit, Dragon Fruit, Jackfruit, Pawpaw
- Icons should be consistent style, ~128x128px or similar, transparent background
- Place in `assets/images/fruits/` directory

### 2. Update FRUIT_ICON_MAP
- **File:** `lib/fruit-icons.ts`
- Uncomment existing requires and update paths to match actual icon files
- Add new entries for any types not yet in the map
- Goal: every FruitTreeType has a PNG icon entry

### 3. Update TREE_EMOJI fallbacks
- **File:** `lib/fruit-tree-data.ts`, lines 167-206
- For any type that still needs an emoji fallback (in case PNG fails to load), replace `🌳` tree emoji with the closest fruit emoji available:
  - Fig: could use a generic fruit emoji or keep as-is if PNG covers it
  - Pomegranate: same approach
  - Persimmon: same approach
- This is a safety net — with PNGs in place, emoji fallback should rarely show

### 4. Verify FruitIcon component
- **File:** `components/FruitIcon.tsx`
- No changes expected — it already prefers PNG over emoji
- Verify it handles all new icon paths correctly

## Verification
- Open New Tree page -> all fruit type buttons should show fruit images, not tree emoji
- Scroll through "Look for more" expanded list -> all types show fruit icons
- Check other screens that use FruitIcon (watering guide headers, orchard TreeRow, tree detail) — all should show fruits
- No `🌳` tree emoji should be visible anywhere for fruit types

## Open question
- Where to source the fruit icon PNGs? Options:
  - Extract from existing master icon sheet (referenced in fruit-icons.ts comments)
  - Use a free icon set (e.g. Flaticon, Icons8) with appropriate license
  - Generate simple fruit illustrations
  - Ask user for preferred icon source/style
