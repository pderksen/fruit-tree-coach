# Plans

Active initiatives. One folder per initiative, each with an
`all-phases.md` roadmap and per-phase files as needed. No dates in
folder names — git history tracks when work started. Delete a plan
folder once the work ships; git preserves the record.

## Active

- [dev-client-migration](dev-client-migration/all-phases.md) — move off
  Expo Go onto an EAS-built custom dev client so `expo-location` (and
  future native modules) can run. Triggered when manual-ZIP onboarding
  feels clunky or the next native-module need lands.
- [batch-generated-guides](batch-generated-guides/all-phases.md) —
  generate the remaining ~60–80 (tree type, task category) care guides
  in reviewable SQL migration batches. Phase 1 (schema gate) shipped;
  Phase 2 (pilot + template) is current.
