-- Performance: all existing RLS policies re-evaluate auth.uid() per row.
-- Rewriting to (select auth.uid()) lets Postgres cache the value once per
-- query. Applies to 14 policies across profiles, orchards, trees, tasks.
--
-- Security: (1) the profiles "Allow insert for new users" policy uses
-- WITH CHECK (true) — remove entirely since the handle_new_user trigger
-- is the sole creator. (2) handle_new_user has a mutable search_path —
-- pin it to prevent schema-shadow attacks. (3) add covering indexes on
-- orchards.user_id, trees.orchard_id, tasks.tree_id (advisor-flagged).

-- profiles
drop policy if exists "Allow insert for new users" on public.profiles;
drop policy if exists "Users can view own profile" on public.profiles;
drop policy if exists "Users can update own profile" on public.profiles;

create policy "Users can view own profile"
  on public.profiles for select
  using (id = (select auth.uid()));

create policy "Users can update own profile"
  on public.profiles for update
  using (id = (select auth.uid()));

-- orchards
drop policy if exists "Users can view own orchards" on public.orchards;
drop policy if exists "Users can create orchards" on public.orchards;
drop policy if exists "Users can update own orchards" on public.orchards;
drop policy if exists "Users can delete own orchards" on public.orchards;

create policy "Users can view own orchards"
  on public.orchards for select
  using (user_id = (select auth.uid()));

create policy "Users can create orchards"
  on public.orchards for insert
  with check (user_id = (select auth.uid()));

create policy "Users can update own orchards"
  on public.orchards for update
  using (user_id = (select auth.uid()));

create policy "Users can delete own orchards"
  on public.orchards for delete
  using (user_id = (select auth.uid()));

-- trees
drop policy if exists "Users can view own trees" on public.trees;
drop policy if exists "Users can create trees" on public.trees;
drop policy if exists "Users can update own trees" on public.trees;
drop policy if exists "Users can delete own trees" on public.trees;

create policy "Users can view own trees"
  on public.trees for select
  using (
    exists (
      select 1 from public.orchards
      where orchards.id = trees.orchard_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can create trees"
  on public.trees for insert
  with check (
    exists (
      select 1 from public.orchards
      where orchards.id = trees.orchard_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can update own trees"
  on public.trees for update
  using (
    exists (
      select 1 from public.orchards
      where orchards.id = trees.orchard_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can delete own trees"
  on public.trees for delete
  using (
    exists (
      select 1 from public.orchards
      where orchards.id = trees.orchard_id
        and orchards.user_id = (select auth.uid())
    )
  );

-- tasks
drop policy if exists "Users can view own tasks" on public.tasks;
drop policy if exists "Users can create tasks" on public.tasks;
drop policy if exists "Users can update own tasks" on public.tasks;
drop policy if exists "Users can delete own tasks" on public.tasks;

create policy "Users can view own tasks"
  on public.tasks for select
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = tasks.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can create tasks"
  on public.tasks for insert
  with check (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = tasks.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can update own tasks"
  on public.tasks for update
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = tasks.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can delete own tasks"
  on public.tasks for delete
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = tasks.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

-- handle_new_user: pin search_path. Body is unchanged from the current
-- definition (verified against pg_get_functiondef before writing this
-- migration).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data->>'name', ''));
  return new;
end;
$$;

-- FK-covering indexes (performance advisor).
create index if not exists orchards_user_id_idx on public.orchards (user_id);
create index if not exists trees_orchard_id_idx on public.trees (orchard_id);
create index if not exists tasks_tree_id_idx on public.tasks (tree_id);
