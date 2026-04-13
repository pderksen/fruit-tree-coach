-- notifications_log: server-side record of push notifications sent,
-- for dedup and debugging. The app reads this for "recent activity"
-- views; writes happen via service role from a future notification
-- worker. kind is a text CHECK so it's easy to extend; exact values
-- will be finalized when the notification feature ships.

create table public.notifications_log (
  id uuid primary key default extensions.uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  tree_id uuid references public.trees(id) on delete set null,
  task_id uuid references public.tasks(id) on delete set null,
  kind text not null check (kind in ('task_active','task_late','weekly_digest')),
  sent_at timestamptz not null default now(),
  payload jsonb
);

create index notifications_log_user_sent_idx
  on public.notifications_log (user_id, sent_at desc);

create index notifications_log_task_kind_idx
  on public.notifications_log (task_id, kind, sent_at desc);

alter table public.notifications_log enable row level security;

create policy "Users can view own notifications"
  on public.notifications_log for select
  using (user_id = (select auth.uid()));

-- No INSERT/UPDATE/DELETE policies: writes happen via service role.
