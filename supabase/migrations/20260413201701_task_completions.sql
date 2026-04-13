-- task_completions: immutable append-only log of "user marked this task
-- done on this date." Replaces the tasks.done boolean dropped earlier.
-- tree_id is denormalized for query speed and to keep history queryable
-- even if a task row is later recreated.

create table public.task_completions (
  id uuid primary key default extensions.uuid_generate_v4(),
  task_id uuid not null references public.tasks(id) on delete cascade,
  tree_id uuid not null references public.trees(id) on delete cascade,
  completed_at timestamptz not null default now(),
  notes text,
  created_at timestamptz not null default now()
);

create index task_completions_tree_id_completed_at_idx
  on public.task_completions (tree_id, completed_at desc);

create index task_completions_task_id_completed_at_idx
  on public.task_completions (task_id, completed_at desc);

alter table public.task_completions enable row level security;

create policy "Users can view own task completions"
  on public.task_completions for select
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = task_completions.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can create task completions"
  on public.task_completions for insert
  with check (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = task_completions.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can delete own task completions"
  on public.task_completions for delete
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = task_completions.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

-- No UPDATE policy: completions are immutable history.
