-- v1 narrows the supported fruit tree list to a curated 25-tree set.
-- See lib/fruit-tree-data.ts FRUIT_TREE_TYPES — this CHECK must match it
-- exactly (enforced by lib/fruit-tree-data.test.ts).
--
-- Forward-only: replaces the broader 38-tree CHECK from
-- 20260413202040_tree_check_constraints.sql. To revert, write a new
-- migration adding the removed types back.
--
-- Trees table is clean of the removed types as of writing (Apple,
-- Cherry, Peach only), but a defensive normalization is not needed.
-- Guides for removed types are deleted outright — they're seed
-- content, not user data.

-- 1. Drop and re-add the trees CHECK with the v1 list.
alter table public.trees drop constraint if exists trees_type_check;

alter table public.trees
  add constraint trees_type_check check (type in (
    'Apple','Apricot','Avocado','Cherry','Date','Fig','Grapefruit',
    'Guava','Kumquat','Lemon','Lime','Mandarin','Mango','Mulberry',
    'Nectarine','Olive','Orange','Pawpaw','Peach','Pear','Persimmon',
    'Plum','Pomegranate','Tangelo','Tangerine'
  ));

-- 2. Delete guide rows for removed tree types.
delete from public.guides
where tree_type in (
  'Banana','Coconut','Crabapple','Date Palm','Dragon Fruit','Elderberry',
  'Gooseberry','Jackfruit','Jujube','Kiwi','Loquat','Medlar','Papaya',
  'Passion Fruit','Quince','Starfruit'
);
