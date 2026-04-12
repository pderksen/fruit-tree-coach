# Phase 9b: Offline-First Foundation

## Goal
Make offline a first-class experience: cached data renders on cold
start with no network, critical writes queue and replay when the
connection returns, and the user sees a non-blocking indicator of
connectivity state. Phase 9a handled cleanup prerequisites; this phase
is purely architectural (client-side only — no schema changes).

---

## 1. Dependencies to install

```
npx expo install @react-native-community/netinfo
npm install @tanstack/react-query-persist-client @tanstack/query-async-storage-persister
```

- `@react-native-async-storage/async-storage` is already installed (2.2.0).
- `@react-native-community/netinfo` is a native module — use
  `expo install` so Expo pins the SDK 54-compatible version.
- The two persister packages are JS-only and peer on `@tanstack/react-query`
  which is already installed (`^5.96.2`).

---

## 2. Query client — persistence + `offlineFirst`

**File:** `lib/query-client.ts`

Current state: plain `QueryClient` with `staleTime: 5min`, `retry: 2`.

Changes:
- Add `networkMode: "offlineFirst"` to `defaultOptions.queries` and
  `defaultOptions.mutations`. Queries will serve cache first instead of
  pausing when offline; mutations will be attempted and queued by the
  persister when they fail due to lack of connectivity.
- Bump `gcTime` (formerly `cacheTime`) to at least 24h so the persister
  has something to rehydrate. Default 5min will be garbage-collected
  before the user opens the app again.
- Export a `persister` built from
  `createAsyncStoragePersister({ storage: AsyncStorage, key: "ftc-rq-cache" })`.
- Keep the export shape compatible with the existing `QueryClientProvider`
  usage in `app/_layout.tsx` — we'll swap providers, not rebuild the
  client.

## 3. Wrap the app in `PersistQueryClientProvider`

**File:** `app/_layout.tsx`

- Replace `QueryClientProvider` import + usage with
  `PersistQueryClientProvider` from
  `@tanstack/react-query-persist-client`.
- Pass `persistOptions={{ persister, maxAge: 1000 * 60 * 60 * 24 * 7 }}`
  (7-day cache window — longer than a typical trip away from the app).
- Add a `buster` key tied to a bumpable constant (e.g. `"v1"`) so we
  can invalidate all persisted caches if we change the shape of cached
  data. Start at `"v1"`.
- Everything inside the provider stays the same (`DefaultOrchardBootstrap`,
  `Stack`, screens).

## 4. Optimistic mutations — audit and fill gaps

`useToggleTask` in `hooks/use-tasks.ts` is already optimistic with
snapshot-based rollback (good — nothing to change there). Audit the
other hooks and upgrade the three Phase 9b priority paths:

- **Mark task done** — `useToggleTask` already optimistic. ✅ leave.
- **Add a tree** — `useCreateTree` currently only invalidates on
  success. Add `onMutate` that inserts a temporary row with a
  client-generated `crypto.randomUUID()` into the `["trees", orchardId]`
  cache and rolls back on error. The optimistic row is replaced when
  the real row lands via `onSettled` invalidation.
- **Update tree notes** — `useUpdateTree` currently only invalidates.
  Add `onMutate` that patches the cache entry for the affected tree
  (both `["trees", orchardId]` list and `["trees", "detail", id]`
  detail), snapshot for rollback, invalidate on settle.

Scope limit: don't touch `useCreateTask`, `useDeleteTask`,
`useDeleteTree` — not in the Phase 9b priority list, and adding
optimism everywhere is a YAGNI trap.

## 5. Offline banner

**File:** `components/OfflineBanner.tsx` (new)

- Thin banner (≤32px tall) rendered at the top of `app/(tabs)/_layout.tsx`
  and any non-tab screen that should show it (keep it to the tab layout
  for now; sign-in/splash don't need it).
- Use `useNetInfo()` from `@react-native-community/netinfo`. Render
  only when `isConnected === false` (explicitly `false`, not `null` —
  null means "unknown yet" and flashing the banner on cold start is
  ugly).
- Copy: "You're offline. Changes will sync when you reconnect."
- Styling: `bg-amber-100 border-b border-amber-300 text-amber-900`
  small caps label. No interaction, no dismiss — purely informational.
- No queued-mutation counter in v1. If users ask for one, add later
  using `queryClient.getMutationCache().getAll()` filtered to pending.

## 6. Documentation

**File:** `docs/offline-strategy.md` (new, ~1 page)

Capture:
- Why offline is first-class for this app (yard work, spotty yards).
- What works offline: browsing cached trees/tasks, marking tasks done,
  adding trees, editing notes.
- What doesn't: sign-in, password reset, fresh USDA zone lookup
  (falls back to static table — wired in Phase 9a).
- How the cache is invalidated: 7-day `maxAge` + manual `buster` bump.
- Where to look when offline behavior breaks: query keys, persister
  key, NetInfo state.

Keep it a reference doc, not a tutorial — future-me reading this
needs to recover context fast.

---

## 7. Verification

- `npm run typecheck` passes.
- `npm test` passes (no test changes expected — persister is wrapping
  the same client).
- `npm run lint` passes.
- **Manual QA (Phase 9b-specific):**
  1. Airplane mode → cold-launch app → cached trees/tasks render.
  2. Airplane mode → mark a task done → banner shows → disable airplane
     mode → confirm task stays done (sync completed).
  3. Airplane mode → add a tree → optimistic row appears → enable
     network → confirm the temp-UUID row is replaced by the real row.
  4. Kill + reopen the app offline → data still there.
  5. Sign-in flow still fails cleanly offline (does NOT pretend to
     work).

---

## Files touched (expected)

- `lib/query-client.ts` — add persister, `offlineFirst`, `gcTime`.
- `app/_layout.tsx` — swap to `PersistQueryClientProvider`.
- `hooks/use-trees.ts` — optimistic `useCreateTree`, `useUpdateTree`.
- `components/OfflineBanner.tsx` — new.
- `app/(tabs)/_layout.tsx` — render `<OfflineBanner />` above tabs.
- `docs/offline-strategy.md` — new.
- `package.json` + lockfile — three new deps.

## Out of scope (future phases)

- Conflict resolution for concurrent multi-device edits (no web app
  or shared orchards yet).
- CRDT / local-first sync engines (PowerSync, Replicache, etc.) —
  only if TanStack Query persistence proves insufficient at scale.
- `user_preferences` table — only when a real sync-worthy preference
  exists (YAGNI, per CLAUDE.md).
- Switching persister storage from AsyncStorage to MMKV — revisit if
  cold-start rehydrate time becomes noticeable.
