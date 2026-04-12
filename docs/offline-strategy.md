# Offline Strategy

Fruit Tree Coach is used outdoors (yard work, rural acreage, spotty
signal). Offline is a first-class use case, not an edge case. This
doc captures what works offline, what doesn't, and the levers to pull
when something breaks.

## What works offline

- **Browsing cached data** — trees, tasks, orchard, and profile
  render from the persisted TanStack Query cache on cold start.
- **Marking tasks done** — `useToggleTask` is optimistic with
  snapshot-based rollback. The mutation is queued by the persister
  and replays when connectivity returns.
- **Adding a tree** — `useCreateTree` inserts a temporary `temp-*`
  UUID into the cached list, then gets replaced by the real row once
  the mutation lands.
- **Updating tree notes / fields** — `useUpdateTree` patches both the
  list and detail cache entries, with rollback on error.

## What does NOT work offline

- **Sign-in / sign-up** — requires live Supabase auth.
- **Password reset** — requires email delivery.
- **Fresh USDA zone lookup via phzmapi** — degrades to the static
  `zipToZone` prefix table (wired in Phase 9a in
  `hooks/use-orchards.ts`).

## How it's wired

- **Persister:** `lib/query-client.ts` exports an AsyncStorage-backed
  persister (`createAsyncStoragePersister`, key `ftc-rq-cache`).
- **Provider:** `app/_layout.tsx` uses `PersistQueryClientProvider`
  with `maxAge: 7 days` and `buster: "v1"`.
- **Network mode:** both queries and mutations default to
  `networkMode: "offlineFirst"` — queries serve cache without
  pausing, mutations attempt + queue when offline.
- **`gcTime`:** 7 days, so rehydrated cache isn't immediately garbage
  collected.
- **Connectivity UI:** `components/OfflineBanner.tsx` uses
  `@react-native-community/netinfo`. Renders only when
  `isConnected === false` (not `null`, to avoid flashing during the
  initial NetInfo probe). Mounted above the tab bar in
  `app/(tabs)/_layout.tsx`.

## Invalidating the persisted cache

Bump the `buster` string in `app/_layout.tsx` whenever cached shape
changes in a way that old caches would render incorrectly (new
required fields, renamed keys, etc.). `maxAge` also puts a 7-day
ceiling on any cached payload.

## Where to look when offline behavior breaks

- **Data not rehydrating on cold start:** confirm the provider is
  `PersistQueryClientProvider`, not `QueryClientProvider`. Check the
  persister `key` hasn't changed. Inspect AsyncStorage for the
  `ftc-rq-cache` entry.
- **Banner always / never showing:** `useNetInfo().isConnected` can
  be `null` on first render — we guard for that explicitly. On
  simulators, toggle "Network Link Conditioner" or airplane mode on
  the device.
- **Queued mutation didn't replay:** mutations only persist if they
  were registered on the query client (i.e. via `useMutation`). Ad-hoc
  `queryClient.getMutationCache()` pushes don't persist.
- **Optimistic row stuck with `temp-*` id:** the real row didn't land
  and invalidation never ran — check `onSettled` in the hook and the
  Supabase error in logs.

## Out of scope (revisit if needed)

- Conflict resolution for concurrent multi-device edits (no web app
  or shared orchards yet).
- Local-first sync engines (PowerSync, Replicache). Only if
  TanStack Query persistence proves insufficient.
- Switching the persister from AsyncStorage to MMKV. Revisit if cold
  rehydrate time becomes noticeable.
- Queued-mutation count UI. Can be derived from
  `queryClient.getMutationCache().getAll()` if users ask.
