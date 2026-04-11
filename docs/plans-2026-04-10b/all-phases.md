# Fruit Tree Coach — Bug Fixes & UI Polish (2026-04-10b)

All planned improvements, organized into 6 phases.

---

## Phase 1: Splash Page & App Entry Flow Fixes

- Splash page logo should be square (app-store style) centered on white background
- "Fruit Tree Coach" text underneath the logo
- Ensure splash is truly the first page on every app open
- Fix: "Add to My Orchard" button currently navigates to splash — should go to Home
- Fix: back arrow on New Tree page says "splash" — should say "Home" and link to home

**Files:** `app/splash.tsx`, `app/tree/new.tsx`, `app/_layout.tsx`

---

## Phase 2: Navigation Fixes

- Fix all broken "Home" buttons across the app
- Ensure all back arrows navigate correctly (never to splash)
- Audit every `router.back()`, `router.replace()`, and `router.push()` call

**Files:** `app/tree/new.tsx`, `app/tree/[id].tsx`, `app/tree/guide/[taskId].tsx`, `app/_layout.tsx`, all screen files

---

## Phase 3: Watering Guide Page Updates

- Change tip icons from lightbulb (`bulb-outline`) to star (`star`) on watering cards
- Remove tree category from section headers (e.g. "Apple (Pome Fruit)" -> "Apple")
- Change red filled water drop icons (`water`) in over-watering signs to outline only (`water-outline`), keep red color

**Files:** `app/(tabs)/watering.tsx`

---

## Phase 4: Orchard Page Zip Code Sync

- When profile zip code is updated, propagate to all existing trees
- New trees should use the user's current profile zip code (not hardcoded "97201")
- Ensure orchard page header zip and per-tree zip always match

**Files:** `stores/tree-store.ts`, `stores/profile-store.ts`, `app/tree/new.tsx`, `components/TreeRow.tsx`

---

## Phase 5: App-Wide Icon Consistency

- Change all remaining lightbulb tip icons to star icons across the entire app
- Locations: watering guide tips (Phase 3 covers this), advice page placeholder
- Verify CoachTipCard, ExpertTipsCard, GardenerInsight already use star (they do)

**Files:** `app/(tabs)/advice.tsx`, all components with tip icons

---

## Phase 6: New Tree Page Fruit Icons

- Replace tree emoji placeholders with actual fruit images for all types
- Priority: Fig, Persimmon, Pomegranate (currently show tree emoji)
- All icons on FruitTypeGrid should show fruits, not trees
- Source or create PNG fruit icons for types that lack them
- Update `lib/fruit-icons.ts` to uncomment/add icon mappings
- Update `TREE_EMOJI` fallbacks: replace all tree emoji with closest fruit emoji

**Files:** `lib/fruit-icons.ts`, `lib/fruit-tree-data.ts`, `components/FruitIcon.tsx`, `assets/images/`

---

## Cross-Cutting: American English Audit

- Review all user-facing text strings for British English spellings
- Ensure consistent American English throughout (e.g. "color" not "colour", "fertilize" not "fertilise")
- Check: screen titles, tips, descriptions, labels, placeholder text

**Files:** All `.tsx` files with user-facing text, `lib/mocks/care-details.ts`, `lib/care/watering.ts`
