-- photos: attached to a tree; optionally linked to a specific task
-- completion ("here's what my tree looked like after pruning").
-- Storage path follows {user_id}/{tree_id}/{photo_id}.jpg under the
-- private tree-photos bucket.

create table public.photos (
  id uuid primary key default extensions.uuid_generate_v4(),
  tree_id uuid not null references public.trees(id) on delete cascade,
  task_completion_id uuid references public.task_completions(id) on delete set null,
  storage_path text not null,
  caption text,
  taken_at timestamptz,
  created_at timestamptz not null default now()
);

create index photos_tree_id_taken_idx
  on public.photos (tree_id, taken_at desc nulls last, created_at desc);

alter table public.photos enable row level security;

create policy "Users can view own photos"
  on public.photos for select
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = photos.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can create photos"
  on public.photos for insert
  with check (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = photos.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can update own photos"
  on public.photos for update
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = photos.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

create policy "Users can delete own photos"
  on public.photos for delete
  using (
    exists (
      select 1 from public.trees
      join public.orchards on orchards.id = trees.orchard_id
      where trees.id = photos.tree_id
        and orchards.user_id = (select auth.uid())
    )
  );

-- Storage: private bucket for photo blobs. Path convention:
-- {user_id}/{tree_id}/{photo_id}.jpg. Storage RLS matches table RLS:
-- users can only access objects under their own user_id prefix.
insert into storage.buckets (id, name, public)
values ('tree-photos', 'tree-photos', false)
on conflict (id) do nothing;

create policy "Users can read own tree photos"
  on storage.objects for select
  using (
    bucket_id = 'tree-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can upload own tree photos"
  on storage.objects for insert
  with check (
    bucket_id = 'tree-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can update own tree photos"
  on storage.objects for update
  using (
    bucket_id = 'tree-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

create policy "Users can delete own tree photos"
  on storage.objects for delete
  using (
    bucket_id = 'tree-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );
