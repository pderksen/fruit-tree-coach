# Phase 1: Supabase Project Setup & Database Schema

## Goal
Stand up the Supabase project, connect it to the app, and create the
database tables with Row Level Security so the backend is ready for
real data.

## Prerequisites
- Supabase account created (done)
- Project created in Supabase dashboard

## Tasks

### 1. Get API keys from Supabase dashboard
- Go to **Project Settings > API**
- Copy **Project URL** (e.g. `https://abcdefgh.supabase.co`)
- Copy **anon / public key** (the `eyJ...` string)

### 2. Create `.env` file
- **File:** `.env` (project root, already gitignored)
- Contents:
  ```
  EXPO_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
  EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-key-here
  ```
- `lib/supabase.ts` already reads these — no code changes needed

### 3. Create database tables
- Run in **Supabase SQL Editor**:
  ```sql
  create extension if not exists "uuid-ossp";

  create table public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    name text not null default '',
    created_at timestamptz not null default now()
  );

  create table public.orchards (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid not null references public.profiles(id) on delete cascade,
    name text not null default 'My Orchard',
    zip_code text,
    zone text,
    created_at timestamptz not null default now()
  );

  create table public.trees (
    id uuid primary key default uuid_generate_v4(),
    orchard_id uuid not null references public.orchards(id) on delete cascade,
    name text not null,
    type text not null,
    variety text,
    planted_year int,
    planted_date text,
    age_bracket text,
    description text,
    status_label text,
    status_description text,
    created_at timestamptz not null default now()
  );

  create table public.tasks (
    id uuid primary key default uuid_generate_v4(),
    tree_id uuid not null references public.trees(id) on delete cascade,
    title text not null,
    why text,
    done boolean not null default false,
    created_at timestamptz not null default now()
  );
  ```

### 4. Enable Row Level Security
- Run in SQL Editor:
  ```sql
  alter table public.profiles enable row level security;
  alter table public.orchards enable row level security;
  alter table public.trees enable row level security;
  alter table public.tasks enable row level security;
  ```

### 5. Create RLS policies
- **profiles:** select/update where `auth.uid() = id`
- **orchards:** select/insert/update/delete where `auth.uid() = user_id`
- **trees:** select/insert/update/delete where `orchard_id` belongs to the user
- **tasks:** select/insert/update/delete where `tree_id` -> `orchard_id` belongs to the user
- Insert policy on profiles must allow the trigger function to insert (use `with check (true)`)
- Full SQL is in the all-phases overview

### 6. Auto-create profile on sign-up
- Create a Postgres function + trigger:
  ```sql
  create or replace function public.handle_new_user()
  returns trigger as $$
  begin
    insert into public.profiles (id, name)
    values (new.id, coalesce(new.raw_user_meta_data->>'name', ''));
    return new;
  end;
  $$ language plpgsql security definer;

  create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user();
  ```

### 7. Configure auth settings (dashboard)
- **Authentication > Providers:** Email enabled (default)
- **Authentication > Settings:** Disable "Confirm email" for development
  (re-enable before launch)

## Verification
- `.env` file exists with real keys
- `lib/supabase.ts` client can connect (no code change needed)
- All four tables visible in Supabase Table Editor
- RLS is enabled (green shield icon on each table)
- Sign up a test user in Supabase dashboard > Authentication — verify
  a `profiles` row is auto-created
