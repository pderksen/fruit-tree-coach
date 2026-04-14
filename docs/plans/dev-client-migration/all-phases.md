# Dev client migration (started 2026-04-12)

## Why this folder exists
The onboarding ZIP screen (`app/onboarding-zip.tsx`) was built with a
"Use my current location" button powered by `expo-location`, but the
native permission string added to `app.json` only lands in a custom
dev-client build — Expo Go can't honor it. The button is currently
gated behind a runtime `isExpoGo` check so manual ZIP entry works
today, with location detection unlocking once a dev client ships.

This folder tracks the move off Expo Go onto an EAS-built dev client.

## Phase 1: Dev client + location detection for onboarding

- Add `expo-dev-client` dependency
- Set up EAS (`eas login`, `eas build:configure`, commit `eas.json`)
- Build dev profile for iOS and Android, install on test devices
- Update dev workflow docs in `CLAUDE.md` Environment setup
- Remove the `isExpoGo` gate in `app/onboarding-zip.tsx`
- Run the "Onboarding ZIP screen" QA checklist in `docs/testing.md`

See [phase-1.md](phase-1.md) for details.

---

## When to start this

- When manual-ZIP-only onboarding starts feeling clunky in user testing
- When the next native-module need comes up (push notifications beyond
  Expo's default, camera for tree photos, etc.) — batch the dev-client
  move with that work rather than doing it standalone
