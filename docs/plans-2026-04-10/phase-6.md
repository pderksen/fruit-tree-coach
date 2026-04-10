# Phase 6: Watering Guide Enhancements

## Context

The watering guide page needs visual improvements: fruit icons next to each fruit, yellow water drops for under-watering signs, and a clock icon for "Best Time to Water."

## Images Needed

**None.** Uses existing fruit icons from `FruitIcon` component and Ionicons.

---

## Tasks

### 1. Add Fruit Icons Next to Each Fruit Name

- **File:** `app/(tabs)/watering.tsx`
- **Current:** Section headers show tree type names. WateringCard shows watering data but no fruit icon in the header.
- **Fix:**
  - Add `<FruitIcon>` component next to each tree type name in the section headers or WateringCard header
  - Import `FruitIcon` from `@/components/FruitIcon`
  - Size: 24-32px, inline with the tree type name

### 2. Change Under-Watering Icons to Yellow Water Drops

- **File:** `components/WateringCard.tsx`
- **Current:** Under-watering signs use `sunny-outline` icon with amber color (#f59e0b) (lines 86-90)
- **Fix:**
  - Change icon from `sunny-outline` to `water-outline`
  - Change color to yellow (#eab308 or similar yellow, not amber)
  - This distinguishes under-watering (yellow water) from over-watering (red/blue water)

### 3. Change "Best Time to Water" Icon to Clock

- **File:** `components/WateringCard.tsx`
- **Current:** "Best Time to Water" uses `sunny-outline` icon (lines 73-83)
- **Fix:**
  - Change icon from `sunny-outline` to `time-outline` (Ionicons clock icon)
  - Keep the existing color or use a neutral color (gray or brand green)

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes for touched files
3. `npm run lint` passes
4. Manual checks:
   - Each watering section has a fruit icon next to the fruit name
   - Under-watering signs show yellow water drop icons
   - "Best Time to Water" shows a clock icon
   - Over-watering signs still show their distinct icon/color
   - Visual consistency across all watering cards
