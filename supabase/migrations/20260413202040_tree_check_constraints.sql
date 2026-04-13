-- Enforces app-layer contracts at the DB level per the 2026-04-13
-- foundation design. Today the app only writes these values via Zod
-- validation; the CHECKs catch direct-SQL mistakes (migration typos,
-- future admin tooling, manual fixes).

-- Data fix-ups before constraints:
-- - Normalize legacy lowercase tree types seeded via direct SQL.
-- - Delete the original per-task seed guides (dt1..dt15); they were
--   unapproved in migration 20260413000800 and superseded by the
--   (tree_type, task_category) lookup model. They have null
--   classification columns so they'd block the NOT NULL tighten.
update public.trees set type = 'Apple' where type = 'apple';
update public.trees set type = 'Peach' where type = 'peach';

delete from public.guides where tree_type is null or task_category is null;

alter table public.trees
  add constraint trees_type_check check (type in (
    'Apple','Pear','Peach','Cherry','Plum','Fig','Lemon','Orange','Lime',
    'Crabapple','Quince','Medlar','Apricot','Nectarine','Grapefruit',
    'Tangerine','Kumquat','Avocado','Pomegranate','Persimmon','Olive',
    'Jujube','Loquat','Mango','Guava','Papaya','Banana','Passion Fruit',
    'Dragon Fruit','Kiwi','Jackfruit','Starfruit','Coconut','Date Palm',
    'Mulberry','Pawpaw','Gooseberry','Elderberry'
  ));

alter table public.trees
  add constraint trees_age_bracket_check check (
    age_bracket is null or age_bracket in ('sapling','young','maturing','mature')
  );

alter table public.guides alter column tree_type set not null;
alter table public.guides alter column task_category set not null;
