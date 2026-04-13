# Request a tree type — design

**Date:** 2026-04-13
**Status:** Approved, ready for implementation plan

## Problem

When a user adds a tree to their orchard via [app/tree/new.tsx](../../../app/tree/new.tsx), they pick from a fixed grid of supported fruit tree types ([components/FruitTypeGrid](../../../components/FruitTypeGrid.tsx)). If their tree isn't in that grid, there's currently no way to tell us — they have to bail or pick the wrong type. This is a discoverability and feedback dead end.

We want to give them a way to request a tree type. The full backend wiring (sending requests to us, replying to users) comes later. For now, ship a UI mock that captures the moment of frustration and proves the interaction, with submissions logged to the dev console so we can eyeball demand during dev/TestFlight.

## Scope

**In scope**
- New "Request it" tile inside the fruit type grid
- Modal with a form (tree name + optional notes) and a Send button
- On submit: `console.log` the payload, close the modal, show a confirmation alert
- No backend, no persistence

**Out of scope (explicit)**
- Backend endpoint, Supabase table, edge function
- Local AsyncStorage queue or any kind of "pending request" persistence
- Dedupe logic ("you already requested Pawpaw")
- Email capture (we have the user's auth email if/when we wire the real flow)
- Admin dashboard for viewing requests

## UX

### Entry point: request tile in the grid

Append a new tile to the end of [components/FruitTypeGrid](../../../components/FruitTypeGrid.tsx). It must read as visually distinct from real tree tiles so users don't think it's another tree type they can select:

- Dashed border (vs. solid for real tiles)
- Plus icon (Ionicons `add-outline`) instead of a fruit emoji/SVG
- Label: "Don't see your tree? **Request it**"
- Same tile dimensions/grid slot as real tiles so layout stays clean

Tapping the tile calls a new `onRequestTree` callback prop on `FruitTypeGrid`. The grid does not own the modal state — the parent screen does.

### Modal

New component: `components/RequestTreeModal.tsx`. Uses React Native's built-in `Modal` with `presentationStyle="pageSheet"` on iOS and a fade animation on Android (matches platform conventions; no new dependency).

Contents:

- Title: "Request a tree type"
- Subtitle: "We'll look into adding it to the app."
- **Field 1 (required):** "Tree name" — single-line text input, placeholder e.g. "Pawpaw"
- **Field 2 (optional):** "Anything else? (variety, why you want it…)" — multiline text input
- `PrimaryButton` labeled "Send request" — disabled until the name field has non-empty content
- Cancel link below the button (tappable text, matching the "Save as Draft" pattern in [app/tree/new.tsx:137](../../../app/tree/new.tsx#L137))

Form uses React Hook Form + Zod to match existing conventions:

```ts
const requestSchema = z.object({
  name: z.string().min(1, "Tree name is required"),
  notes: z.string().optional(),
});
```

### Submit behavior

On Send:

1. `console.log("[tree-request]", { name, notes, timestamp: new Date().toISOString() })`
2. Close the modal
3. Show `Alert.alert("Thanks!", "We'll look into adding it to the app.")` — matches the existing alert pattern at [app/tree/new.tsx:63](../../../app/tree/new.tsx#L63), no new toast library needed
4. Reset the form

No network call, no AsyncStorage write, no analytics event (those come when we wire it for real).

## Files touched

- `components/FruitTypeGrid.tsx` — append request tile, accept `onRequestTree?: () => void` prop
- `components/RequestTreeModal.tsx` — **new file**
- `app/tree/new.tsx` — add modal open/close state, pass `onRequestTree` to grid, render `<RequestTreeModal />`

## Testing

- Vitest unit test for `RequestTreeModal`: validates that Send is disabled until name has content, that submit fires the callback with trimmed name + notes, and that an empty notes field comes through as `undefined` (not empty string)
- Manual smoke check appended to `docs/testing.md`:
  - Open Add Tree → scroll to bottom of grid → tap "Request it" tile
  - Modal opens; Send is disabled
  - Type a name; Send enables
  - Tap Send; modal closes, alert appears, console shows `[tree-request]` line with name + notes + timestamp
  - Tap Cancel; modal closes without logging

## Future wiring (not part of this work)

When we're ready to send these somewhere real, the touch points are:

- Replace the `console.log` in `RequestTreeModal` submit handler with a mutation hook (e.g. `useRequestTree`)
- Add a `tree_type_requests` table via `npx supabase migration new` with `user_id`, `name`, `notes`, `created_at`, `status` columns + RLS allowing inserts by the requesting user
- Decide on a notification channel for us (email via Supabase function, Slack webhook, or just a dashboard query)

The mock UI doesn't lock any of those decisions in.
