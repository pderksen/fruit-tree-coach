# Fruit Tree Coach — UI Overhaul Roadmap (2026-04-10)

All planned improvements, organized into 7 phases.

---

## Phase 1: Splash Page & App Entry Flow

- Make splash page the first screen on every app open (already `initialRouteName`)
- Remove the green leaf icon next to "Fruit Tree Coach" on splash
- Auto-navigate to home page after ~2 seconds (already exists, verify timing)

**Files:** `app/splash.tsx`

---

## Phase 2: Home Page Updates

- Add "My Gardening Zone" title with zone number at top of home page (reads from profile store)
- Remove tree category badge (e.g. "Pome Fruit", "Citrus") from each TreeCard on home

**Files:** `app/(tabs)/index.tsx`, `components/TreeCard.tsx`

---

## Phase 3: Tree Details Page Redesign

- Restructure tree detail header into ordered rows:
  - 1st row: Tree name (e.g. "Honeycrisp Apple")
  - 2nd row: "Scientific Name: Malus domestica"
  - 3rd row: Age (e.g. "7 years old")
  - 4th row: "Type of tree: Pome Fruit"
  - Then the paragraph description
- Ensure all fields pull from existing data (SCIENTIFIC_NAME_MAP, TREE_CATEGORY_MAP, plantedYear)

**Files:** `app/tree/[id].tsx`, `components/TreeDetailHeader.tsx`

---

## Phase 4: New Tree Page Improvements

- Limit displayed fruit types to 8 most popular for user's gardening zone
- Add "Look for more" text with search box for additional trees
- Fix back button: change "splash" text in top-left to "Home"

**Files:** `app/tree/new.tsx`, `components/FruitTypeGrid.tsx`, `app/_layout.tsx`

---

## Phase 5: Calendar Task Simplification

- Simplify each calendar task to show only: task name, tree name, and recommended week
- Remove task description from calendar list view
- Description shown only when user taps on a task (detail view)

**Files:** `app/(tabs)/calendar.tsx`, `components/TimelineTask.tsx`

---

## Phase 6: Watering Guide Enhancements

- Add fruit icons next to each fruit name in watering sections
- Change under-watering icons to yellow water drops
- Change "Best Time to Water" icon to a clock

**Files:** `app/(tabs)/watering.tsx`, `components/WateringCard.tsx`

---

## Phase 7: App-Wide Consistency & Zip Code Propagation

- Standardize icons throughout the entire app:
  - Green star → all tips & expert tips
  - Scissors/pruning tool → recommended pruning products
  - Green leaf → all other recommended products
  - Wrench → all tools needed
- Ensure all back/home arrows on top-left navigate to home page
- When user changes zip code in profile, update gardening zone everywhere:
  - Profile store propagation
  - Home page zone display
  - New tree page zone-based filtering
  - Any other zone-dependent content

**Files:** Multiple components, `stores/profile-store.ts`, `app/profile.tsx`, all screens with back navigation
