# Phase 5: Trees — Migrate to Supabase + TanStack Query

## Goal
Replace the local Zustand tree store with TanStack Query hooks backed
by the Supabase tree service. After this phase, all tree data lives in
the database.

## Current state
- `stores/tree-store.ts` manages trees in Zustand (no persistence)
- Initialized with `MOCK_TREES` — 4 sample trees
- Used by: home screen, orchard screen, tree detail, new-tree form
- `addTree` appends to the local array

## Tasks

### 1. Create TanStack Query hooks for trees
- **File:** `hooks/use-trees.ts`
- `useTrees(orchardId: string)` — fetches all trees for an orchard
  - Uses `useQuery` with key `["trees", orchardId]`
  - Calls `fetchTrees(orchardId)` from the service layer
- `useTree(treeId: string)` — fetches a single tree
  - Uses `useQuery` with key `["trees", "detail", treeId]`
- `useCreateTree()` — `useMutation` wrapping `createTree`
  - On success: invalidate `["trees"]` queries
- `useUpdateTree()` — `useMutation` wrapping `updateTree`
  - On success: invalidate `["trees"]` queries
- `useDeleteTree()` — `useMutation` wrapping `deleteTree`
  - On success: invalidate `["trees"]` queries

### 2. Update home screen
- **File:** `app/(tabs)/home.tsx`
- Replace `useTreeStore().trees` with `useTrees(orchardId)`
- Add loading state (skeleton or spinner while fetching)
- Add empty state: "No trees yet — add your first tree!"
- Handle error state

### 3. Update orchard screen
- **File:** `app/(tabs)/orchard.tsx`
- Replace store reads with `useTrees(orchardId)`
- Tree count, list rendering should come from the query

### 4. Update new-tree form
- **File:** `app/tree/new.tsx`
- Replace `useTreeStore().addTree()` with `useCreateTree().mutateAsync()`
- On success: invalidate queries, navigate to home
- Show loading state on the submit button during mutation
- Pass the current user's `orchardId` to the create payload

### 5. Update tree detail screen
- **File:** `app/tree/[id].tsx`
- Replace store lookup with `useTree(id)`
- Add loading/error states

### 6. Remove or gut `tree-store.ts`
- Once all consumers are migrated, remove the Zustand store
- Remove the `MOCK_TREES` import — trees come from Supabase now
- Keep `lib/mocks/trees.ts` file for test fixtures only

## Files changed
- `hooks/use-trees.ts` (new)
- `stores/tree-store.ts` (remove or simplify)
- `app/(tabs)/home.tsx` — use hooks
- `app/(tabs)/orchard.tsx` — use hooks
- `app/tree/new.tsx` — use mutation hook
- `app/tree/[id].tsx` — use query hook

## Verification
- Fresh account shows empty tree list (no mock data)
- Add a new tree -> appears on home screen and orchard screen
- Tree detail screen loads data from Supabase
- Edit a tree in Supabase dashboard -> pull-to-refresh shows updated data
- Delete the mock trees initialization -> app still works
- `npm run typecheck` passes
