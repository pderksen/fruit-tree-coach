-- Phase 1 of AI-generated guides initiative (docs/plans-2026-04-12-guides)
-- Adds approval gate + (tree_type, task_category) lookup columns so the
-- generate-guide edge function can cache per (type, category) pair and
-- keep unapproved content hidden from users.

alter table public.guides
  add column if not exists approved boolean not null default false,
  add column if not exists tree_type text,
  add column if not exists task_category text;

-- Partial unique index — null values don't collide, so hand-seeded
-- rows without a type/category classification stay untouched.
create unique index if not exists guides_type_category_idx
  on public.guides (tree_type, task_category)
  where tree_type is not null and task_category is not null;

-- The 15 hand-written seed rows are already human-reviewed by virtue
-- of being hand-written. Flip them to approved so RLS keeps showing
-- them after the policy swap below.
update public.guides set approved = true;

-- Swap the select policy so only approved guides are readable by
-- authenticated users. Unapproved rows (future AI-generated ones
-- awaiting review) stay invisible to the client.
drop policy if exists "guides are readable by authenticated users" on public.guides;

create policy "approved guides are readable by authenticated users"
  on public.guides for select
  to authenticated
  using (approved = true);
