# Authentication hardening (started 2026-04-14)

## Why this folder exists
Email/password auth is working end-to-end via Supabase
([lib/auth.ts](../../../lib/auth.ts),
[app/sign-in.tsx](../../../app/sign-in.tsx),
[hooks/use-session.ts](../../../hooks/use-session.ts)), but three
things still need to land before auth is App Store–ready:

1. **Sign in with Apple** and **Sign in with Google** are UI stubs —
   the buttons show a "Coming Soon" alert
   ([app/sign-in.tsx:271-289](../../../app/sign-in.tsx#L271-L289)).
   Apple's App Store rules **require** Sign in with Apple on iOS if
   any other third-party social login is offered, so these two ship
   together or not at all.
2. **Session tokens live in AsyncStorage**
   ([lib/supabase.ts:10](../../../lib/supabase.ts#L10)), not in the
   OS secure enclave. Industry standard is `expo-secure-store`
   (Keychain on iOS, Keystore on Android). Low exploit risk for a
   gardening app, but it's a trivial fix and a common review flag.
3. **No email verification gate** — new signups route straight to
   onboarding. Supabase sends the confirmation email but we don't
   act on it.

This folder tracks closing those gaps.

## Prerequisite: dev client must ship first

Both `expo-apple-authentication` and
`@react-native-google-signin/google-signin` include native code and
cannot run in Expo Go. The
[dev-client-migration](../dev-client-migration/all-phases.md) plan
must be complete before Phase 2 starts. Phase 1 (secure storage +
email verification) does not require a dev client and can proceed
independently.

## Phase 1: Token storage + email verification

No new native modules, no developer-portal setup. Pure Supabase +
JS changes.

- Add `expo-secure-store` dependency
- Write a thin adapter (`getItem`/`setItem`/`removeItem`) wrapping
  `SecureStore` and swap it into the Supabase client's `auth.storage`
  option in [lib/supabase.ts](../../../lib/supabase.ts)
- One-time migration: on app start, if legacy session keys exist in
  AsyncStorage, copy them into SecureStore and clear AsyncStorage
  (existing users don't get kicked out). Delete this shim after a
  reasonable window
- Decide email-verification UX (see open questions) and implement the
  chosen path in the post-signup flow
- Manual QA: sign up, sign in, sign out, reset password, kill &
  relaunch app (session persists), uninstall & reinstall (session
  gone, as expected)

See [phase-1.md](phase-1.md) for details.

## Phase 2: Sign in with Apple + Google

Blocked on dev client. Adds real social login behind the existing
UI stubs.

- Add `expo-apple-authentication` and
  `@react-native-google-signin/google-signin`
- Apple Developer portal: create Service ID, Key, configure Supabase
  Apple provider
- Google Cloud Console: create OAuth client IDs (iOS, Android, web),
  configure Supabase Google provider
- Wire the `SocialButton` components in
  [app/sign-in.tsx](../../../app/sign-in.tsx) to call
  `supabase.auth.signInWithIdToken({ provider, token })` with the
  token from each native SDK
- Android: use the official Apple-styled button fallback (web-based
  Apple flow), since Apple's native SDK is iOS-only
- Handle Apple's "name only on first sign-in" quirk — capture and
  persist `user_metadata.name` on the first success
- Configure deep-link scheme in `app.json` for OAuth callbacks if
  needed
- Test on physical iOS and Android devices (simulators/emulators are
  unreliable for social auth)

See [phase-2.md](phase-2.md) for details.

---

## Open questions to resolve before starting

These were deferred during planning — answer before Phase 1 begins,
or when Phase 2 becomes current.

1. **Email verification UX** — three options:
   - (a) Leave as-is: trust the email, don't block
   - (b) Hard gate: block all app access until the user clicks the
     confirmation link
   - (c) Soft gate: let them in but show a persistent banner and
     restrict destructive actions until confirmed
   Recommendation lean: (c). Cheapest to build, least friction, and
   we don't actually send email to users yet so the cost of an
   unverified address is low.

2. **Apple Developer account** — do we have the paid $99/yr account
   already? Required for Sign in with Apple. If not, this is a
   prerequisite to Phase 2 (and to any App Store submission anyway).

3. **Google Cloud Console** — free, but needs a project with OAuth
   consent screen approved and client IDs for iOS, Android, and web.
   Straightforward but ~1 hour of portal clicking.

4. **Name handling edge case** — Apple returns the user's name only
   on the very first sign-in. If a user deletes their Supabase
   account and re-signs-in with Apple, the name will be missing.
   Decide: fall back to email prefix, prompt for a name, or leave
   the field blank?

5. **Legacy AsyncStorage migration window** — how long do we keep
   the AsyncStorage → SecureStore copy-over shim before deleting it?
   Suggest: one full release cycle after Phase 1 ships, then remove.

---

## When to start this

Phase 1 can start any time — small, low-risk, no blockers.

Phase 2 waits on the dev-client migration. When that lands, batch
Phase 2 with the first round of real beta user testing so social
login gets exercised on actual devices before public launch.
