-- Add outcome to task_completions so the table records both user-marked
-- completions and windows the user let expire ("missed"). A missed row is
-- inserted client-side the first time the tasks query sees a task past its
-- URGENT_DAYS_AFTER cutoff with no completion for the current window.
-- Both outcomes close the current cycle and hide the task until the next
-- season's window reopens.

alter table public.task_completions
  add column outcome text not null default 'completed'
  check (outcome in ('completed', 'missed'));

comment on column public.task_completions.outcome is
  'completed = user marked it done; missed = window expired without completion. Both close the current cycle.';
