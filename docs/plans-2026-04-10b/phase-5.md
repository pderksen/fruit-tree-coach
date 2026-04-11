# Phase 5: App-Wide Icon & Language Consistency

## Goal
1. Change ALL remaining lightbulb tip icons to star icons across the entire app
2. Ensure all user-facing text is in American English

## Current state — Icons
- **Already star:** `CoachTipCard.tsx` (line 12), `ExpertTipsCard.tsx` (line 16), `GardenerInsight.tsx` (line 18) — all use `name="star"`
- **Still lightbulb:** `app/(tabs)/watering.tsx` line 101 — fixed in Phase 3
- **Still lightbulb:** `app/(tabs)/advice.tsx` line 10 — placeholder screen with `bulb-outline` icon
- No other lightbulb icons found in the codebase

## Tasks — Icons

### 1. Change advice page placeholder icon
- **File:** `app/(tabs)/advice.tsx`, line 10
- **Current:** `<Ionicons name="bulb-outline" size={48} color="#9ca3af" />`
- **Change to:** `<Ionicons name="star" size={48} color="#9ca3af" />`

### 2. Final audit
- Grep the entire codebase for `bulb` to confirm no remaining lightbulb icons
- All tip/advice icons should now be `star`

## Tasks — American English

### 3. Audit all user-facing text
- Search all `.tsx` files and mock data files for common British spellings:
  - `colour` -> `color`
  - `favourite` -> `favorite`
  - `fertilise` -> `fertilize`
  - `organise` -> `organize`
  - `recognise` -> `recognize`
  - `defence` -> `defense`
  - `centre` -> `center`
  - `metre` -> `meter`
  - `behaviour` -> `behavior`
  - `catalogue` -> `catalog`
  - `grey` -> `gray`
  - `programme` -> `program`
  - `practise` -> `practice`
  - `analyse` -> `analyze`
  - `travelled` -> `traveled`

### 4. Fix any British spellings found
- Update to American English equivalents
- Files to check:
  - `lib/mocks/care-details.ts` (expert tips, coach tips, descriptions)
  - `lib/care/watering.ts` (watering advice text)
  - All screen files with user-facing copy
  - Component files with label/placeholder text

## Verification
- Grep for `bulb` — zero results (outside of skill reference files)
- Grep for common British spellings — zero results in app code
- Visual check: all tip sections show star icons
