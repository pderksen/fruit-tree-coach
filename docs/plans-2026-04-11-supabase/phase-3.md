# Phase 3: Service Layer & Zod Schemas

## Goal
Create the data-access layer between the app and Supabase. Every query
and mutation goes through a typed service function. Every Supabase
response is validated with a Zod schema. No component or store ever
imports `supabase` directly.

## Why a service layer
- CLAUDE.md rule: "Don't put Supabase queries inside components"
- CLAUDE.md rule: "Every Supabase response is parsed through a Zod schema"
- Single place to change if the DB schema evolves
- Easy to mock in tests

## Tasks

### 1. Create Zod schemas for database rows
- **File:** `lib/schemas.ts`
- One schema per table, matching the DB column names (snake_case):
  ```ts
  profileRowSchema   = z.object({ id, name, created_at })
  orchardRowSchema   = z.object({ id, user_id, name, zip_code, zone, created_at })
  treeRowSchema      = z.object({ id, orchard_id, name, type, variety, ... })
  taskRowSchema      = z.object({ id, tree_id, title, why, done, created_at })
  ```
- Add transform helpers to convert snake_case DB rows to camelCase app types
  (e.g. `orchardRowSchema.transform(row => ({ ...row, userId: row.user_id }))`)
- Export both the raw row schemas and the transformed app-type schemas

### 2. Create profile service
- **File:** `lib/services/profile-service.ts`
- `fetchProfile(userId: string): Promise<Profile>`
- `updateProfile(userId: string, fields: { name?: string }): Promise<Profile>`
- Each function: query Supabase, parse with Zod schema, return typed result
- Throw on validation failure (unexpected shape = bug, not a user error)

### 3. Create orchard service
- **File:** `lib/services/orchard-service.ts`
- `fetchOrchards(userId: string): Promise<Orchard[]>`
- `createOrchard(orchard: NewOrchard): Promise<Orchard>`
- `updateOrchard(id: string, fields: Partial<Orchard>): Promise<Orchard>`
- `deleteOrchard(id: string): Promise<void>`

### 4. Create tree service
- **File:** `lib/services/tree-service.ts`
- `fetchTrees(orchardId: string): Promise<Tree[]>`
- `createTree(tree: NewTree): Promise<Tree>`
- `updateTree(id: string, fields: Partial<Tree>): Promise<Tree>`
- `deleteTree(id: string): Promise<void>`

### 5. Create task service
- **File:** `lib/services/task-service.ts`
- `fetchTasks(treeId: string): Promise<Task[]>`
- `fetchTasksByOrchard(orchardId: string): Promise<Task[]>` (join through trees)
- `createTask(task: NewTask): Promise<Task>`
- `updateTask(id: string, fields: Partial<Task>): Promise<Task>`
- `deleteTask(id: string): Promise<void>`

### 6. Add barrel export
- **File:** `lib/services/index.ts`
- Re-export all services for clean imports

## Design notes
- **snake_case -> camelCase**: DB uses `zip_code`, app uses `zipCode`. The Zod
  `.transform()` handles this at the boundary so the rest of the app never
  sees snake_case.
- **Error handling**: Service functions throw on Supabase errors. TanStack Query
  catches these and exposes them via `error` state.
- **New-entity types**: `NewOrchard`, `NewTree`, `NewTask` are the create payloads
  (omit `id`, `created_at`). Define these in `lib/schemas.ts` alongside the row schemas.

## Files changed
- `lib/schemas.ts` (new) — Zod schemas + transforms
- `lib/services/profile-service.ts` (new)
- `lib/services/orchard-service.ts` (new)
- `lib/services/tree-service.ts` (new)
- `lib/services/task-service.ts` (new)
- `lib/services/index.ts` (new)

## Verification
- `npm run typecheck` passes — all service return types match app types
- Write a quick smoke test: call `fetchOrchards` for the test user, verify
  Zod parses the response without errors
- `npm run lint` passes
