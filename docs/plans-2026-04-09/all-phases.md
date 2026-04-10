# Fruit Tree Coach — Full Roadmap

All planned improvements, organized into 6 phases.

---

## Phase 1: Fix What's Broken + Navigation Consistency

- Fix broken "Add to My Orchard" persistence (data not saved)
- Link profile icon (top-right on home page) to a profile/account page
- Link "Start Weekly Checklist" button to calendar tasks
- Back arrow consistency across all pages (remove "(tabs)" text)
- Remove Tips tab, replace with Watering guide tab

**Images needed:** None

---

## Phase 2: Onboarding Flow

- Splash/logo screen — main logo centered, "Fruit Tree Coach" text, white background (first screen on app open)
- Trial page — free 7-day trial then monthly charge, styled to match app (similar to `trial page.png`)
- Sign-in / Sign-up page — clean auth page styled like Goodreads example (see `sign in page.png`)

**Images needed:** `main logo.png`, `trial page.png` (reference), `sign in page.png` (reference)

---

## Phase 3: Icon & Visual Consistency

- Extract individual fruit icons from `MAIN fruit icons.png`
- Replace all fruit emoji/icons throughout the app with extracted icons
- Standardize recurring icons:
  - Green star → all tips & expert tips
  - Scissors/pruning tool → recommended pruning products
  - Green leaf → all other recommended products
  - Wrench → all tools needed
- Home page: swap leaf icon next to "Fruit Tree Coach" with main logo (cropped to fit)
- Rename "Your Fruit Trees" → "My Backyard Orchard"
- Orchard page: add fruit icon next to each tree name
- Orchard page: show user's gardening zone under "My Orchard" heading

**Images needed:** `MAIN fruit icons.png`, `main logo.png`

---

## Phase 4: Care Content Expansion

- Reorder "What to do later" tasks by upcoming season (e.g., spring tasks before summer)
- Add organic pest control tasks to care plans and calendar
- Add harvest timing and readiness guidance to tasks and calendar
- Add "No tasks required at this time" states where applicable
- Add Peach tree step-by-step guide (currently missing)
- Add pruning diagram with red X marks showing where NOT to cut (Winter Pruning Guide)
- Add watering info section on home page (explain regular watering assumption, app focuses on trickier care)
- Remove video sections from all tree detail pages
- Add "Resource" prefix before all source citations on step-by-step guide pages
- Integrate ChatGPT research resources for care recommendations

**Images needed:** `peach tree.png` (reference for pruning diagram), pruning diagram assets (to be created)

---

## Phase 5: Calendar Redesign + Notifications

- Restyle Care Calendar — timeline layout on bottom 2/3 of page (see `calendar idea.jpg`, ignore crossed-out top section)
- Link each calendar task to its corresponding step-by-step guide page
- Add notification opt-in popup on first visit to Care Calendar — ask if user wants reminders for pruning, fertilizing, etc. (similar concept to `notifications.png`)

**Images needed:** `calendar idea.jpg` (reference), `notifications.png` (reference)

---

## Phase 6: Products, Affiliates & Profile

- Fertilizer recommendations: use Organic Espoma (first) and Organic Dr. Earth (second) on all fertilizing pages
- All recommended products link to Amazon affiliate URLs
- Add affiliate disclaimer at bottom of each products section:
  > "By shopping through these links, we receive a small commission — at no cost to you. Thank you for supporting us!"
- Profile/Account page enhancements: account info, subscription management, name, zip code, gardening zone

**Images needed:** None (product images pulled from Amazon links)
