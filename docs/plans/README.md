# Plans

Active initiatives. One folder per initiative, each with an
`all-phases.md` roadmap and per-phase files as needed. No dates in
folder names — git history tracks when work started. Delete a plan
folder once the work ships; git preserves the record.

## Active

- [auth](auth/all-phases.md) — harden authentication: move session
  tokens to secure storage, add email verification, wire up Sign in
  with Apple and Google behind existing UI stubs. Phase 2 blocked on
  dev-client migration.
- [dev-client-migration](dev-client-migration/all-phases.md) — move off
  Expo Go onto an EAS-built custom dev client so `expo-location` (and
  future native modules) can run. Triggered when manual-ZIP onboarding
  feels clunky or the next native-module need lands.
- [batch-generated-guides](batch-generated-guides/all-phases.md) —
  generate the remaining ~60–80 (tree type, task category) care guides
  in reviewable SQL migration batches. Phases A (Apple/Lemon/Fig),
  B (stone fruit), and C (citrus — 7 trees) shipped 2026-04-16. Phase
  D (pome + subtropical) is next.
