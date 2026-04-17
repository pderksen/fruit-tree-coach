-- Retire the task_category = 'overview' guide fallback.
--
-- Per-task guide coverage shipped for all 25 trees in FRUIT_TREE_TYPES
-- as of 2026-04-17 (Phase E, batch-generated-guides plan). Every
-- task_category declared by any template now has a dedicated per-task
-- guide, so the tree-wide overview fallback is no longer reachable
-- via the UI. See docs/plans/batch-generated-guides/all-phases.md.
--
-- Deletes 25 rows (one overview per tree). Post-delete row count: 97.
-- Forward-only: to restore, re-run the earlier overview seed migrations
-- (preserved in git history).

DELETE FROM guides WHERE task_category = 'overview';
