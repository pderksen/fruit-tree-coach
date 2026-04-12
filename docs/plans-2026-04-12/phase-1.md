# Phase 1: Dev client + location detection for onboarding

## Goal
Move off Expo Go onto an EAS-built custom dev client so `expo-location`
can power "Use my current location" on the onboarding ZIP screen (and
any future native-module needs).

## Why this is deferred
The onboarding ZIP screen (`app/onboarding-zip.tsx`) was built with the
location button in place, but Expo Go can't honor the
`NSLocationWhenInUseUsageDescription` string added to `app.json` — that
permission message only lands in a custom native build. Until we ship a
dev client, the screen hides the button at runtime via a check against
`Constants.executionEnvironment === ExecutionEnvironment.StoreClient`
and users enter ZIP manually.

## Current state
- `expo-location` is installed and the plugin + usage-description are
  wired into `app.json`
- `app/onboarding-zip.tsx` has the full detect-location flow
  (permission → `getCurrentPositionAsync` → `reverseGeocodeAsync` →
  populate the ZIP input). It's gated behind `!isExpoGo`
- Manual ZIP entry works in Expo Go today and will continue working in
  the dev client
- No `ios/` or `android/` folders exist — we've never run a native
  build

## Tasks

### 1. Add dev-client dependency
- `npx expo install expo-dev-client`
- Commit the `package.json` / lockfile change

### 2. Set up EAS
- Install `eas-cli` globally or use via `npx`
- `eas login` (personal Expo account)
- `eas build:configure` — generates `eas.json` with development,
  preview, production profiles
- Commit `eas.json`

### 3. First build
- `eas build --profile development --platform ios`
- `eas build --profile development --platform android`
- Both run on Expo's cloud; takes ~15–25 min each
- Install the resulting `.ipa` / `.apk` on the dev device/simulator

### 4. Update dev workflow
- `npm run dev` still works — but the QR code now opens the dev
  client, not Expo Go
- Document the new setup in the root `README.md` or `CLAUDE.md`
  "Environment setup" section so future-you doesn't forget
- Note: anyone else cloning the repo will need the dev client
  installed before `npm run dev` works for them

### 5. Remove the Expo Go gate
Once everyone on the project is on the dev client:
- Delete the `isExpoGo` check and `ExecutionEnvironment` import at the
  top of `app/onboarding-zip.tsx`
- Delete the `!isExpoGo && (<>...</>)` wrapper and unwrap the button
  back to always-rendered

### 6. QA the native flow
Follow the "Onboarding ZIP screen" checklist already in
`docs/testing.md` — those items were written for this moment:
permission dialog, grant, deny, non-US region, etc.

## Gotchas to watch for
- EAS free tier caps monthly build minutes — plan the first build
  when you have time to debug config without burning retries
- Android builds need an Expo-managed keystore (EAS creates one on
  first run and stores it) — don't lose access to the account
- iOS builds need an Apple Developer account ($99/yr) for installing
  on a physical device. The simulator build is free and doesn't need
  one
- After adding any native module (or changing `app.json` native
  config), you must rebuild the dev client — JS-only changes still
  hot-reload
- If `expo-location` is updated later, `npx expo install --fix` to
  re-align versions, then rebuild

## When to do this
- When manual-ZIP-only onboarding starts feeling clunky in user testing
- When the next native-module need comes up (push notifications beyond
  Expo's default, camera for tree photos, etc.) — batch the dev-client
  move with that work rather than doing it standalone
