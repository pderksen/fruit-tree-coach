# Phase 9a: Post-Migration Cleanup

## Goal
Remove dead scaffolding left over from earlier phases, fix a latent
offline-resilience bug in the zone lookup, and document the settings
store split. No new dependencies. No architectural changes.

Phase 9b covers the offline-first foundation (persistence, optimistic
mutations, offline banner).

---

## 1. Obsolete Zustand stores — already done

- `stores/tree-store.ts` — deleted (pre-Phase 8).
- `stores/orchard-store.ts` — deleted (pre-Phase 8).
- `stores/profile-store.ts` — deleted in Phase 8a.
- `stores/settings-store.ts` — kept (device-local; see Section 4).

Orphaned AsyncStorage keys will clear on reinstall — no purge needed.

---

## 2. Obsolete screens & routes

- **Delete dead tab files** — these are hidden via `href: null` in
  `app/(tabs)/_layout.tsx` but Expo Router still auto-registers them:
  - `app/(tabs)/trees.tsx`
  - `app/(tabs)/advice.tsx`
  - `app/(tabs)/settings.tsx`
  - Remove the corresponding `<Tabs.Screen>` entries in
    `app/(tabs)/_layout.tsx`.

- **Keep `app/trial.tsx`** — retained as a dev-only test screen. Kept
  reachable via the existing launcher button on `app/dev-login.tsx`
  (dev-only route). Keep its `Stack.Screen` registration in
  `app/_layout.tsx`.

- **Remove production trial-launcher button** from
  `app/(tabs)/index.tsx` (the "Test: Open Trial Screen" block — it
  leaked into a production screen). The dev-login launcher is the only
  way in now.

- **Rewire splash CTA** — `app/splash.tsx` "Start Free Trial" button
  currently routes to `/trial` (pricing screen). Since the paywall
  isn't being shipped yet, point it to `/sign-in?mode=signup` so
  production users skip the unfinished pricing flow. The trial screen
  itself stays as a dev-only test surface.

- `lib/mocks/*` — keep as test fixtures; verify zero imports from
  `app/` or `components/` (exception: `MOCK_GUIDES` in
  `app/tree/guide/[taskId].tsx` — deferred to Phase 10).

---

## 3. Zone lookup — fix missing offline fallback

Context: `lib/zone-lookup.ts` exports **two** functions:

- `fetchZoneForZip(zip)` — hits `https://phzmapi.org/{zip}.json` (the
  community USDA Plant Hardiness Zone mirror). 5s timeout, returns
  `null` on any failure.
- `zipToZone(zip)` — hardcoded 3-digit-prefix table, zero network,
  less precise but always works.

The doc comment on `fetchZoneForZip` explicitly says *"Callers should
fall back to the static `zipToZone()` when this returns null."*

**Bug:** `hooks/use-orchards.ts` calls `fetchZoneForZip` but never
falls back to `zipToZone`. If phzmapi is down or the user is offline
when setting their zip, the zip gets saved but the zone stays blank.

**Fix:** in `useUpdateOrchard`, try the API first, fall back to the
static table. Two lines:

```ts
const zone = (await fetchZoneForZip(fields.zipCode)) ?? zipToZone(fields.zipCode);
if (zone) patch.zone = zone;
```

Also audit: any other caller of `fetchZoneForZip` (e.g. new-orchard
creation path, if separate) should use the same fallback pattern.

---

## 4. Settings store — document the local-vs-sync split

Add a header comment to `stores/settings-store.ts` capturing the
decision from Phase 9 Section 3:

- **Device-local** (this store, AsyncStorage): notification toggle,
  notification time, haptics, sound. Tied to the physical device.
- **User-synced** (future `user_preferences` table): units, language,
  onboarding flags. About the user, not the device.
- Don't build the sync table until a real synced preference exists —
  an empty table locks in the wrong shape.

This note already exists in `CLAUDE.md`; duplicating it at the code
site means the next person editing the store sees it without having
to read CLAUDE.md.

---

## 5. Final sweep

- Grep `app/` and `components/` for leftovers — should be zero in
  production paths:
  - `useTreeStore`, `useOrchardStore`, `useProfileStore`
  - `TODO`, `FIXME`
  - `MOCK_` (exception: `MOCK_GUIDES` in the guide screen — Phase 10).
- Run `npm run typecheck`, `npm test`, `npm run lint` — all pass.
- Manual QA deferred (consistent with Phase 8b); Phase 9b covers the
  offline QA pass.

---

## Files touched (expected)
- `app/(tabs)/trees.tsx`, `app/(tabs)/advice.tsx`,
  `app/(tabs)/settings.tsx` — delete
- `app/(tabs)/_layout.tsx` — remove three `<Tabs.Screen>` entries
- `app/(tabs)/index.tsx` — remove production trial-launcher button
- `app/splash.tsx` — rewire CTA to `/sign-in?mode=signup`
- `hooks/use-orchards.ts` — add `zipToZone` fallback
- `stores/settings-store.ts` — header comment

## Out of scope (→ Phase 9b)
- TanStack Query persistence + `networkMode: "offlineFirst"`
- Optimistic mutations (mark task done, add tree, update notes)
- `OfflineBanner` + `@react-native-community/netinfo`
- `docs/offline-strategy.md`
- Offline QA pass (airplane mode cold start, queued mutation sync)
