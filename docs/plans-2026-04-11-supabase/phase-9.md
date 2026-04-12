# Phase 9: Post-Migration Cleanup & Offline Foundation

## Goal
Once Phases 1–8 land, remove artifacts that no longer make sense, and
set up the app for the offline-first experience that real users will
need (spotty connections, fully offline use in the yard).

Phase 8 already handles routine mock-import removal and loading/error
states. Phase 9 goes further: deletes dead scaffolding, makes
deliberate architectural decisions about offline support and settings
sync, and locks in the long-term shape of the app.

---

## 1. Delete obsolete Zustand stores

**Status: already done in earlier phases + Phase 8a.**

- `stores/tree-store.ts` — deleted (pre-Phase 8).
- `stores/orchard-store.ts` — deleted (pre-Phase 8). `refreshZoneFromApi`
  logic is already in the orchard-service / zone-lookup path.
- `stores/profile-store.ts` — **deleted in Phase 8a** (2026-04-12).
  Replaced by `hooks/use-profile.ts`.
- `stores/settings-store.ts` — keep. See Section 3.

Orphaned AsyncStorage keys (`fruit-tree-coach-profile`, etc.) will
clear on reinstall — no programmatic purge needed.

---

## 2. Delete obsolete screens & routes

- `app/trial.tsx` — delete. The sign-in gate replaces it. Remove its
  `Stack.Screen` registration in `app/_layout.tsx` too. Also remove the
  "Test: Open Trial Screen" dev button at the bottom of
  `app/(tabs)/index.tsx` (kept in Phase 8a because `trial.tsx` still
  exists).
- Hidden tab files (`app/(tabs)/trees.tsx`, `app/(tabs)/advice.tsx`,
  `app/(tabs)/settings.tsx`) — currently hidden via `href: null` but
  Expo Router still auto-registers them. If they're truly dead,
  **delete the files** and remove the `<Tabs.Screen>` entries from
  `app/(tabs)/_layout.tsx`. If any are placeholders for a real future
  feature, leave a one-line comment in the file saying so.
- `lib/mocks/*` — keep the files (useful as test fixtures per Phase 8)
  but verify zero imports from `app/` or `components/` remain.

---

## 3. Settings sync — recommended approach

Context: user wants multi-device (phone + iPad now, possibly web
later).

**Recommendation: hybrid — device-local by default, sync a small
whitelist.**

- **Stay device-local** (AsyncStorage via `settings-store`):
  - Notification enabled/disabled toggle
  - Notification time-of-day
  - Any haptics / sound toggles
  - Rationale: these are tied to the physical device. The user's iPad
    shouldn't buzz because they enabled notifications on their phone.
    This is the standard iOS/Android convention (Apple Health, Strava,
    Todoist all do this).

- **Sync via Supabase** (new `user_preferences` table, one row per
  user):
  - Measurement units (imperial vs metric)
  - Preferred language / region overrides
  - "Advanced mode" or onboarding-completed flags
  - Rationale: these are *about the user*, not the device, and feel
    broken if they reset when switching devices.

- **Don't build the sync table yet.** Ship settings-store as-is in
  Phase 7. Add the `user_preferences` table in Phase 9 only if you've
  added a preference that actually needs it. YAGNI — a table with one
  notification-time column is worse than no table, because it locks in
  the wrong shape.

**Action item for Phase 9:** document this split in `stores/settings-store.ts`
as a short header comment, so future-you doesn't accidentally put
units-preference in the local store.

---

## 4. Offline-first foundation

Context: user expects meaningful offline use (yard work, spotty signal,
travel). This needs to be designed in, not bolted on.

### 4a. TanStack Query persistence
- Install `@tanstack/react-query-persist-client` and
  `@tanstack/query-async-storage-persister`.
- Wrap the query client with `PersistQueryClientProvider` in
  `app/_layout.tsx`, backed by AsyncStorage (or MMKV if perf matters
  later).
- Set `networkMode: "offlineFirst"` on the query client.
- Result: trees, orchards, tasks, and profile all show cached data
  instantly on app open, even with no network.

### 4b. Optimistic mutations for the critical paths
Identify the actions users most need to do offline and make them
optimistic + queued:
- **Mark task done** — highest priority. User is outside, marks
  pruning done, expects it to stick.
- **Add a tree** — medium. Less common, but plausible.
- **Update tree notes** — medium.

Use TanStack Query's `onMutate` + `onError` rollback pattern. For
queued offline writes, use the built-in mutation persistence
(`persistQueryClient` covers this) or a lightweight mutation queue.

### 4c. Connectivity UI
- Add a thin "offline" banner at the top of the screen when
  `NetInfo.useNetInfo().isConnected === false`.
- Don't block the UI — just indicate state. Users should be able to
  keep working.
- Show a subtle indicator when mutations are queued and pending sync.

### 4d. What *shouldn't* work offline (set expectations)
- Sign-in / sign-up — requires network. Cache the session so returning
  users don't re-auth.
- Password reset — requires network.
- USDA zone lookup on new-orchard creation — cache last result; fall
  back to last-known zone if offline, or let the user enter manually.

### 4e. Deliverable
- `docs/offline-strategy.md` — one-page doc capturing the above so the
  decisions don't get lost.
- Query client setup in `lib/query-client.ts` updated.
- At least "mark task done" working offline end-to-end as the proof.

---

## 5. Final sweep

- Grep for `TODO`, `FIXME`, `MOCK_` in `app/` and `components/` — should
  be zero in production paths.
- Grep for `useTreeStore`, `useOrchardStore`, `useProfileStore` — should
  be zero.
- `npm run typecheck`, `npm test`, `npm run lint` all pass.
- Manual offline QA:
  - Turn on airplane mode, open app cold, see cached trees/tasks.
  - Mark a task done offline, turn network back on, confirm it synced.
  - Kill app offline, reopen, data still there.

---

## Files touched
- `stores/tree-store.ts`, `stores/profile-store.ts`,
  `stores/orchard-store.ts` — delete
- `stores/settings-store.ts` — add header comment documenting
  local-vs-sync split
- `app/trial.tsx` — delete
- `app/_layout.tsx` — remove trial route; wrap with persisted query
  client
- `app/(tabs)/_layout.tsx`, `app/(tabs)/trees.tsx`,
  `app/(tabs)/advice.tsx`, `app/(tabs)/settings.tsx` — delete dead tab
  files, remove registrations
- `lib/query-client.ts` — add persistence + offlineFirst
- `lib/zone-lookup.ts` — absorb `refreshZoneFromApi`
- `hooks/use-tasks.ts` — add optimistic mark-done
- `components/OfflineBanner.tsx` — new
- `docs/offline-strategy.md` — new

## Dependencies to add (ask first, per CLAUDE.md)
- `@tanstack/react-query-persist-client`
- `@tanstack/query-async-storage-persister`
- `@react-native-community/netinfo` (for offline banner)

## Out of scope (future phases)
- Full conflict resolution for concurrent multi-device edits — defer
  until there's a real web app or shared-orchard feature.
- CRDT or local-first sync engine (e.g. PowerSync, Replicache) — only
  if TanStack Query persistence proves insufficient.
- `user_preferences` table — only when a real sync-worthy preference
  exists.
