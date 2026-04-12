# Phase 9b: Offline-First Foundation

## Goal
Set up the app for real offline use (yard work, spotty connections,
travel). Offline is a first-class use case for this app, not an edge
case — this phase is where it becomes real.

Phase 9a handled the cleanup prerequisites. This phase is purely
architectural: new dependencies, persisted query cache, optimistic
mutations, connectivity UI.

---

## 1. TanStack Query persistence

- Install:
  - `@tanstack/react-query-persist-client`
  - `@tanstack/query-async-storage-persister`
- Wrap the query client with `PersistQueryClientProvider` in
  `app/_layout.tsx`, backed by AsyncStorage (swap to MMKV later if
  perf demands it).
- Set `networkMode: "offlineFirst"` on the query client.
- Result: trees, orchards, tasks, and profile all render cached data
  instantly on cold start, even with no network.

## 2. Optimistic mutations for critical paths

Identify actions users most need offline and make them optimistic +
queued with `onMutate` / `onError` rollback:

- **Mark task done** — highest priority. User is outside, marks
  pruning done, expects it to stick.
- **Add a tree** — medium priority.
- **Update tree notes** — medium priority.

Queued offline writes ride on the persisted mutation cache from
`persistQueryClient`; add a lightweight mutation queue only if that
proves insufficient.

## 3. Connectivity UI

- Install `@react-native-community/netinfo`.
- Add `components/OfflineBanner.tsx` — thin banner at top of screen
  when `NetInfo.useNetInfo().isConnected === false`.
- Don't block the UI — just indicate state. Users keep working.
- Show a subtle indicator when mutations are queued and pending sync.

## 4. What should NOT work offline (set expectations)

- Sign-in / sign-up — requires network. Cache the session so returning
  users don't re-auth.
- Password reset — requires network.
- USDA zone lookup — `fetchZoneForZip` already degrades gracefully to
  the static `zipToZone` table (wired up in Phase 9a). No additional
  work here, but verify the path still works under airplane mode.

## 5. Deliverable

- `docs/offline-strategy.md` — one-page doc capturing these decisions
  so they don't get lost.
- Query client setup in `lib/query-client.ts` updated.
- Wrapped provider in `app/_layout.tsx`.
- At least "mark task done" working offline end-to-end as the proof.

## 6. Dependencies to add (ask first, per CLAUDE.md)

- `@tanstack/react-query-persist-client`
- `@tanstack/query-async-storage-persister`
- `@react-native-community/netinfo`

## 7. Offline QA pass

- Airplane mode → open app cold → cached trees/tasks render.
- Mark a task done offline → toggle network on → confirm sync.
- Kill app offline → reopen → data still there.
- Change zip with network off → confirm `zipToZone` fallback populates
  the zone (sanity check for Phase 9a fix).

## Files touched (expected)
- `lib/query-client.ts` — add persistence + `offlineFirst`
- `app/_layout.tsx` — wrap with `PersistQueryClientProvider`
- `hooks/use-tasks.ts` — optimistic mark-done
- `hooks/use-trees.ts` — optimistic add-tree, update-notes
- `components/OfflineBanner.tsx` — new
- `docs/offline-strategy.md` — new

## Out of scope (future phases)
- Full conflict resolution for concurrent multi-device edits — defer
  until there's a web app or shared-orchard feature.
- CRDT / local-first sync engine (PowerSync, Replicache, etc.) —
  only if TanStack Query persistence proves insufficient.
- `user_preferences` table — only when a real sync-worthy preference
  exists.
