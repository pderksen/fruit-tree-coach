# Phase 4: Care Content Expansion

## Context

The app's care content is currently limited to a few mock guides and tasks. This phase enriches the care experience: better task ordering, new care categories (pest control, harvest timing), a missing Peach guide, pruning diagrams, a watering info section, source citation formatting, and removal of placeholder video sections. This is the heaviest content phase and will make the app feel substantially more useful.

## Images Needed

| Asset | Purpose |
|---|---|
| `peach tree.png` | Reference for Peach pruning diagram |
| Pruning diagram assets | To be created — annotated diagrams with red X marks showing where NOT to cut |

Place pruning diagram images in `assets/images/guides/`.

---

## Tasks

### 1. Reorder "What to Do Later" Tasks by Upcoming Season

- **File:** `app/tree/[id].tsx`
- **Current:** `laterTasks` are displayed in array order from `MOCK_DETAILED_TASKS`
- **Change:** Sort `laterTasks` by season chronologically from the current date forward
- **Implementation:**
  - Define a season order map in `lib/care/season-order.ts`:
    ```ts
    const SEASON_ORDER = ["Early Spring", "Spring", "Late Spring", "Early Summer", "Summer", "Late Summer", "Fall", "Late Fall", "Winter", "Late Winter"];
    ```
  - Given the current month, rotate the array so the next upcoming season is first
  - Sort `laterTasks` using this rotated order based on each task's `season` field
  - Tasks without a `season` field go to the end
- **Data:** Also update `lib/mocks/care-details.ts` to ensure all tasks have a `season` field

### 2. Add Organic Pest Control Tasks

- **File:** `lib/mocks/care-details.ts`
- **Changes:** Add pest control tasks to each tree's `MOCK_DETAILED_TASKS` array:
  - **Apple:** "Dormant oil spray" (Late Winter) — Source: Oregon State Extension
  - **Peach:** "Peach leaf curl prevention" (Late Winter, before bud break) — Source: UC IPM
  - **Lemon:** "Scale and aphid inspection" (Spring) — Source: UC Davis
  - **Fig:** "Fig beetle monitoring" (Summer) — Source: Texas A&M Extension
- Each task must include: `title`, `why`, `season`, `description`, and a source comment
- **New guide pages:** Add corresponding step-by-step guides in `lib/mocks/guides.ts` for each pest control task, including organic treatment steps and recommended products

### 3. Add Harvest Timing and Readiness Guidance

- **File:** `lib/mocks/care-details.ts`
- **Changes:** Add harvest-related tasks to each tree:
  - **Apple:** "Harvest readiness check" (Late Summer/Fall) — test with stem-twist method — Source: University of Minnesota Extension
  - **Peach:** "Harvest window" (Summer) — colour and give test — Source: Clemson Extension
  - **Lemon:** "Citrus harvest" (Year-round for Meyer) — colour and firmness — Source: UC Davis
  - **Fig:** "Fig ripeness check" (Summer/Fall) — droop and softness — Source: Texas A&M Extension
- Add guide pages in `lib/mocks/guides.ts` with steps for determining ripeness, picking technique, and storage
- **Calendar integration:** Add harvest tasks to `lib/mocks/calendar-tasks.ts` at appropriate dates

### 4. Add "No Tasks Required" Empty States

- **File:** `app/tree/[id].tsx`
- **Current:** If `priorityTask` is undefined, the "What to do now" section simply doesn't render
- **Change:** When there are no priority tasks, show a positive empty state:
  - Green checkmark icon
  - "No tasks required right now"
  - "Your [tree name] is looking good. Check back next week."
- Similarly, if `laterTasks` is empty, show: "No upcoming tasks on the horizon."
- Apply the same pattern to the calendar screen (`app/(tabs)/calendar.tsx`) if all tasks are complete

### 5. Add Peach Tree Step-by-Step Guide

- **File:** `lib/mocks/guides.ts`
- **Problem:** The Peach tree's "Bud monitoring" task (dt4) has no corresponding guide entry
- **Add guide for `dt4`:**
  - Title: "Bud Monitoring & Dormant Spray Guide"
  - Source: Clemson Cooperative Extension — Peach Care Calendar
  - Steps: inspect buds for swell stage, identify pink/silver tip stages, apply dormant oil spray timing, clean up fallen debris, schedule follow-up check
  - Tools: hand lens/magnifying glass, dormant oil spray, pump sprayer
  - Products: organic dormant oil (Bonide All Seasons), copper fungicide spray
- **Add additional Peach guides:**
  - "Peach Tree Pruning Guide" — open-vase pruning technique, Source: University of Georgia Extension
  - Add corresponding task in `MOCK_DETAILED_TASKS["2"]` for pruning

### 6. Add Pruning Diagram with Red X Marks

- **Type update:** Add an optional `diagramImage` field to the `GuideStep` interface in `lib/mocks/guides.ts`:
  ```ts
  export interface GuideStep {
    stepNumber: number;
    title: string;
    description: string;
    tip?: string;
    diagramImage?: ImageSourcePropType;
  }
  ```
- **Guide update:** In the Winter Pruning Guide (guide `dt1`), add `diagramImage` to the relevant step showing where NOT to cut (red X marks on branch diagram)
- **UI update:** In `app/tree/guide/[taskId].tsx`, update `StepCard` to render the diagram image below the description when `diagramImage` is present
- **Image:** `assets/images/guides/pruning-diagram-apple.png` — annotated diagram (provided by designer)

### 7. Add Watering Info Section on Home Page

- **File:** `app/(tabs)/index.tsx`
- **Placement:** Below the "My Backyard Orchard" collection, above the Seasonal Forecast
- **Content:**
  - Card with water drop icon and heading: "About Watering"
  - Body text explaining that the app assumes regular watering is handled and focuses on trickier care (pruning, fertilizing, pest control, harvest timing)
  - Link: "See watering details →" navigating to `/(tabs)/watering`
- **Design:** Use a soft blue-tinted card (`bg-blue-50` border, `text-blue-800` text) to differentiate from green care cards
- **Component:** Create `components/WateringInfoCard.tsx` to keep `index.tsx` under 200 lines

### 8. Remove Video Sections from All Tree Detail Pages

- **File:** `app/tree/[id].tsx`
- **Change:** Remove the `<VideoCard>` render block (lines ~89–94) entirely
- **Cleanup:**
  - Remove `import { VideoCard }` from the file
  - Consider deleting `components/VideoCard.tsx` if no other screen uses it (verify with grep first)
  - If other screens reference `VideoCard`, leave the component but remove the import from `[id].tsx`

### 9. Add "Resource" Prefix to Source Citations

- **File:** `app/tree/guide/[taskId].tsx`
- **Current:** Source line renders `guide.source` directly (e.g., "Oregon State University Extension — PNW 400")
- **Change:** Prefix with "Resource: " → `"Resource: Oregon State University Extension — PNW 400"`
- **Implementation:** Update the render line:
  ```tsx
  <Text className="mt-1 text-xs font-medium text-brand-600">
    Resource: {guide.source}
  </Text>
  ```
- Do NOT modify the source data in `lib/mocks/guides.ts` — the prefix is a display concern only

### 10. Integrate ChatGPT Research Resources

- **File:** `lib/care/research-sources.ts` (new)
- **Purpose:** Document external research sources used for care recommendations, including ChatGPT-generated research summaries
- **Implementation:**
  - Create a typed list of research sources with name, URL (where applicable), and description
  - Add a `researchNotes` optional field to the `Guide` interface for additional context sourced from ChatGPT research
  - In guide pages, if `researchNotes` is present, render a collapsible "Research Notes" section below the steps
- **Important:** Per CLAUDE.md, all horticultural advice must cite a known source. ChatGPT-sourced info should be cross-referenced with extension service publications and flagged with a note like "Compiled from multiple extension sources"

---

## File Summary

| Action | Path |
|---|---|
| Create | `lib/care/season-order.ts` |
| Create | `lib/care/research-sources.ts` |
| Create | `components/WateringInfoCard.tsx` |
| Create | `assets/images/guides/pruning-diagram-apple.png` (provided) |
| Modify | `app/tree/[id].tsx` (task ordering, empty states, remove VideoCard) |
| Modify | `app/(tabs)/index.tsx` (watering info card) |
| Modify | `app/(tabs)/calendar.tsx` (empty state) |
| Modify | `app/tree/guide/[taskId].tsx` (diagram support, "Resource:" prefix) |
| Modify | `lib/mocks/care-details.ts` (pest control tasks, harvest tasks, seasons) |
| Modify | `lib/mocks/guides.ts` (Peach guide, pest guides, harvest guides, diagram field) |
| Modify | `lib/mocks/calendar-tasks.ts` (harvest tasks) |
| Modify | `lib/types.ts` (if GuideStep type lives here) |
| Delete | `components/VideoCard.tsx` (if unused after removal) |

---

## Verification

1. `npm run typecheck` passes
2. `npm test` passes
3. `npm run lint` passes
4. Manual checks:
   - Tree detail: "What to do later" tasks appear in upcoming-season order
   - Tree detail: pest control and harvest tasks appear in task lists
   - Tree detail: when no tasks are active, friendly empty state shows
   - Peach tree detail: "Bud monitoring" → "View Guide" opens a real guide (not "Guide not available")
   - Apple pruning guide: pruning diagram image renders in the relevant step
   - Guide pages: source lines read "Resource: [source name]"
   - Home page: watering info card appears and links to Watering tab
   - Tree detail pages: no video section visible
   - Calendar: harvest tasks appear at appropriate dates
   - Calendar: empty state shows if all tasks are complete
   - All new care advice has a source citation comment in the code
