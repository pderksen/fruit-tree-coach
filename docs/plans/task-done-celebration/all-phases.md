---
status: proposed
---

# Task-done celebration

## Why

When a user taps "Mark done" on a tree task, the row updates and
nothing else happens. We want a short, on-brand celebration that
feels like *growth*, not a confetti dump. User brief:
*"fruit that's going to be growing and leaves are flying through the
sky"* — explicitly **not** pelted with fruit.

This doc walks through the menu of patterns popular apps use today,
gives concrete examples of each, then recommends one.

---

## The menu: 6 gamification patterns for "task done"

### Option A — Particle burst (confetti, hearts, sparkles)

**What it is:** the moment of tap fires a short-lived particle
emitter from the tap point. Particles arc outward, fall under
gravity, fade. Lasts ~800ms–1.5s.

**Apps that use it:**
- **Apple Reminders** — small confetti when you complete the last
  item in a list.
- **Things 3** — a "magic" sparkle puff when checking off.
- **Notion** — confetti rain on completing certain templates.
- **Robinhood** (historically) — confetti on first trade — became
  controversial because it cheapened serious actions; the team
  removed it. *Useful cautionary tale.*

**Pros:** universally understood, instant dopamine, easy to build
(many libs).

**Cons:** generic — doesn't reinforce the fruit-tree metaphor; risks
exactly the "pelted with fruit" feeling you want to avoid; can feel
juvenile if overused.

**Fit for Fruit Tree Coach:** Low. The user explicitly ruled out
projectile-style celebrations.

---

### Option B — In-place artwork transformation ("the thing grows")

**What it is:** the celebration *is* the artwork itself changing.
No overlay, no particles. The visual on screen evolves to reflect the
completed action.

**Apps that use it:**
- **Forest** — your virtual tree visibly finishes growing in the
  same spot when your focus session ends. The reward *is* the
  painting filling in.
- **Flora** — same model, multi-user; trees mature as you focus.
- **Focus Plant** — your potted plant grows leaves and blooms over
  successive sessions; no separate celebration screen.
- **Apple Fitness rings** — closing a ring triggers a brief glow +
  particle wash on the ring itself, but the ring closing *is* the
  reward.

**Pros:** deeply on-brand for a plant/garden app; doesn't interrupt
flow; the user feels they grew something rather than were
congratulated by a popup.

**Cons:** requires the artwork to actually exist and be persistent
(your tree detail screens have illustrations; the task list does
not). More work to design well.

**Fit for Fruit Tree Coach:** High *eventually*, but only once each
tree has a persistent visual on the screen where tasks are completed.
Not a v1 fit because the priority task card and task list show
text + icons, not a rendered tree the user is tending.

---

### Option C — Checkbox morph + pulse + haptic (the "native" minimum)

**What it is:** the row itself animates. The empty circle morphs to
a filled check, the row pulses (scale or color), success haptic fires
on the same frame. ~300–500ms total. No overlay.

**Apps that use it:**
- **Streaks** — tap a habit, the tile flips/fills with color, haptic.
  That's it. Famously low-friction.
- **Apple Reminders** — checkbox fills, row dims and slides out.
- **Things 3** — same pattern, with a more polished spring curve.
- **Todoist** — checkbox fills, strikethrough animates across the
  text.
- **Google Tasks** — similar, minimal.

**Pros:** feels native, instant, never annoying, low engineering
cost. Considered the *floor* of what every modern task app must do.

**Cons:** quiet — doesn't feel like a "moment." For an app whose
core loop is task completion, the celebration may need to be more
than this to drive habit.

**Fit for Fruit Tree Coach:** This is the **table stakes layer**.
Whatever else we add, this should be there too. The question is
whether we add anything *on top*.

---

### Option D — Inline scene animation (Lottie / Reanimated character beat)

**What it is:** a small designed animation plays inline near the
completion point. Bigger than a checkbox pulse, smaller than a
full-screen takeover. ~1–2s. Often vector (Lottie or Rive) so it
scales cleanly.

**Apps that use it:**
- **Duolingo** — Duo the owl does a little dance, a character does
  a slow-clap or a fist-pump after a lesson section. Full Lottie
  animations, character-driven.
- **Headspace** — soft particle blooms and breathing-circle pulses
  after a meditation session. Calm, on-brand.
- **Habitica** — your avatar gains XP with a small flash; pet
  egg hatches with a brief animation when conditions are met.
- **Calm** — gentle ripple animation around a completed session
  card.

**Pros:** the most flexible canvas for *brand-specific* celebration.
Can directly express "fruit grows, leaves fly" exactly.

**Cons:** designed assets need to be made (Lottie file or coded
Reanimated scene). Slight performance cost. Adds a dep if going the
Lottie route.

**Fit for Fruit Tree Coach:** **High.** This is the pattern that
literally matches the user's brief.

---

### Option E — Progress increment + streak / counter flash

**What it is:** the celebration is tied to a *number going up*. A
streak counter, XP bar, or progress ring increments visibly,
sometimes with a flash or scaling beat.

**Apps that use it:**
- **Duolingo** — XP bar fills, gem counter ticks up, streak fire icon
  flares if you hit your daily goal. The number going up *is* the
  reward.
- **Habitica** — gold + XP counters flash and increment.
- **Strava / Apple Fitness** — distance and ring progress animate up.
- **Way of Life** — streak increments visibly; broken streaks get
  their own (intentionally painful) animation.

**Pros:** measurable, addictive, drives return visits. Great for
*streak* mechanics.

**Cons:** **requires a scoring system to exist.** Fruit Tree Coach
has no XP, no streaks, no points today. Adding all of that just to
support a celebration is the tail wagging the dog.

**Fit for Fruit Tree Coach:** Not for v1. Worth revisiting once we
decide whether the app has streaks/scoring at all (separate product
question, not a celebration question).

---

### Option F — Modal / full-screen "achievement" takeover

**What it is:** a full-screen or large modal celebration covers the
UI for 1–3s. Often with sound, particle effects, character art, and
sometimes a tappable "Continue."

**Apps that use it:**
- **Duolingo** — end-of-lesson screen with characters, XP, gems.
  *End of session, not per-task.*
- **Pokémon GO** — catch animation, level-up takeover.
- **Habitica** — boss-defeat or level-up screens.
- **Peloton** — milestone takeovers (100th ride, etc.).

**Pros:** big emotional beats, great for rare achievements.

**Cons:** *too much* for a routine action like "marked watering
done." If it fired on every tap users would disable it within a day.

**Fit for Fruit Tree Coach:** Reserve for genuine milestones — first
fruit harvested, full season completed, etc. Not for routine task
completion.

---

## Recommendation

**Combine Option C (checkbox morph + haptic) as the always-on base
+ Option D (inline scene) as the celebration layer.**

Concretely, the scene that plays on "Mark done":

1. **Checkbox morph (always):** `ellipse-outline` → `checkmark-circle`
   in brand-700 with a 250ms scale pulse (1.0 → 1.15 → 1.0).
2. **Success haptic (always):** `Haptics.notificationAsync(Success)`
   on the same frame.
3. **Inline grow scene (~1.2s):** above the task title, ~70px tall:
   - A small fruit (matching the tree type — apple, peach, plum,
     etc., via existing `lib/fruit-icons.ts`) scales 0 → 1 with a
     subtle bounce on a tiny branch silhouette.
   - 3–5 leaf shapes drift upward and outward in gentle arcs,
     rotating slowly, fading to 0 over ~1200ms. Path is curved,
     not radial — leaves *float*, they don't burst.
4. The row then transitions to its done state (existing behavior).

**Why this combo:**
- C alone is too quiet for the core dopamine moment of a coaching
  app. Users need to *feel* they accomplished care.
- D alone without C feels disconnected — the row didn't react.
- Together: instant tactile feedback + a short narrative beat that
  matches the brand (growth, leaves) and the user's brief exactly.
- A and F are explicitly out (projectiles / over-the-top).
- B is the right *long-term* pattern when each tree has a persistent
  growing illustration on its detail screen — worth revisiting in
  a later phase.
- E is downstream of a scoring/streak product decision we haven't
  made.

### Reduced-motion fallback

When `AccessibilityInfo.isReduceMotionEnabled()` is true, drop the
inline scene and keep only the checkbox morph + haptic. Standard
accessibility hygiene.

---

## Stack additions

- `expo-haptics` — new dep, first-party Expo. No native config in
  the dev client (SDK 54 supports it).
- Reanimated v4 — already in `package.json`. Drives the leaf and
  fruit motion.
- **No Lottie in v1.** A Reanimated scene with the existing fruit
  icon is enough to validate the pattern. If the result feels flat
  during dogfooding, swap to Lottie in Phase 2.
- No sound. The app has no sound surface today; adding one for a
  single moment is over-scoped for v1.

---

## Phases

### Phase 1 — Build the celebration component

**Trigger point: only the "Mark as done" button at the bottom of the
step-by-step guide screen** (`app/tree/guide/[taskId].tsx`). NOT the
checkbox affordances on `PriorityTaskCard` / `LaterTaskList` /
`TaskCard` — those still complete the task silently. The celebration
is the reward for going through the guide, not for tapping a checkbox.

Files touched:

- `components/TaskDoneCelebration.tsx` (new) — self-contained scene.
  Props: `fruitType: FruitTreeType`, `onComplete: () => void`.
  Renders nothing when not active. Sized for the guide-screen moment
  (~140px, 8 leaves) since this is the app's main dopamine beat.
- `app/tree/guide/[taskId].tsx` — wire celebration into the bottom
  "Mark as done" button: fire mutation immediately, play scene as a
  centered absolute overlay, `router.back()` on `onComplete`.
- `lib/haptics.ts` (new, ~10 lines) — thin wrapper, no-ops on web,
  trivial to mock.
- `package.json` — add `expo-haptics` via `npx expo install`.

Out of scope for Phase 1: sound, streaks/XP, Lottie, per-fruit
custom motion paths (one shared motion; fruit *icon* varies — that's
it), modal milestone celebrations.

### Phase 2 — Polish + measure (only if dogfooding flags issues)

- Tune timing per device class.
- Lottie version for top-3 fruit (apple, peach, citrus) if Reanimated
  feels generic.
- Optional sound, opt-in via existing `stores/settings-store.ts`.
- Consider Option B (in-place tree artwork growing) once the tree
  detail screen has a persistent illustration to mutate.

### Things to try if Phase 1 doesn't come out right

Captured during build — apply only if dogfooding flags problems.
Sticking close to the original on first pass per user request.

- **Anchor as overlay, not inline.** The scene currently takes ~70px
  of vertical space *inside* the card, which causes a layout shift the
  moment you tap. Switching to absolute-positioned overlay (no layout
  impact) is almost certainly better if the shift feels jarring.
- **Don't gate the parent handler on the animation.** Right now we
  wait until the ~1.2s scene finishes before calling
  `onToggleDone`/`onMarkDone`. Firing the mutation immediately and
  letting the celebration play over the row as it transitions would
  remove perceived lag and let the animation be interrupted cleanly
  without orphaning a tap. Tradeoff: the row may disappear mid-scene
  if the parent re-renders quickly.

---

## QA additions to `docs/testing.md`

- Tap "Mark done" on Home priority card — celebration plays, haptic
  fires, task transitions to done.
- Same on Calendar / Orchard task list.
- Rapid double-tap doesn't fire animation twice or double-complete.
- Backgrounding mid-animation doesn't crash.
- Reduced-motion setting → checkbox morph + haptic only.
- iOS + Android both tested. Web silently no-ops the haptic.

---

## Open questions for the user

1. **Is Option C+D the right combination?** Or do you want just D
   without the checkbox pulse, just C without the scene, or
   something else from the menu?
2. **Fruit variety:** scale the tree's actual fruit type in the
   animation? (recommend yes — uses existing icon mapping, no new art).
3. **Anchor location:** inside the card above the title, vs. floating
   in the card center? (recommend inside above title — no layout
   shift, stays grounded).
4. **Sound in v1:** confirm silent for v1? (recommend yes).
5. **`expo-haptics` dep approval** — per CLAUDE.md, deps need explicit
   sign-off.
