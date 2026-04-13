-- Performance advisor follow-up: the new tables added in this foundation
-- cleanup left two FKs without covering indexes. Same fix pattern used
-- in 20260413202358 for the pre-existing tables.

create index if not exists notifications_log_tree_id_idx
  on public.notifications_log (tree_id);

create index if not exists photos_task_completion_id_idx
  on public.photos (task_completion_id);
