-- Drops fields and index identified as dead in the 2026-04-13 database
-- foundation design: status_label/status_description were written once at
-- tree creation and never updated; tasks.done is replaced by the
-- task_completions table (added in a later migration); tasks.guide_task_id
-- is replaced by a functional lookup on (tree.type, task.category);
-- tasks_due_date_idx was flagged unused by the performance advisor.

alter table public.trees drop column if exists status_label;
alter table public.trees drop column if exists status_description;

alter table public.tasks drop column if exists done;
alter table public.tasks drop column if exists guide_task_id;

drop index if exists public.tasks_due_date_idx;
