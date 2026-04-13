-- Date-aware care tasks.
--
-- Replaces free-text `time_window` / `season` / stored `priority` on
-- `tasks` with structured month/day windows that the client evaluates
-- against today's date. See docs/plans-2026-04-12/date-aware-tasks.md.

-- 1. Drop legacy columns.
alter table public.tasks drop column if exists time_window;
alter table public.tasks drop column if exists season;
alter table public.tasks drop column if exists priority;

-- 2. Add structured window + template reference columns.
alter table public.tasks add column if not exists template_id text;
alter table public.tasks add column if not exists window_start_month int
  check (window_start_month between 1 and 12);
alter table public.tasks add column if not exists window_start_day int
  check (window_start_day between 1 and 31);
alter table public.tasks add column if not exists window_end_month int
  check (window_end_month between 1 and 12);
alter table public.tasks add column if not exists window_end_day int
  check (window_end_day between 1 and 31);

-- 3. Option A: wipe all existing tasks. App is pre-launch, test data is
--    disposable per CLAUDE.md. Tasks will be re-seeded from templates.
delete from public.tasks;

-- 4. Re-seed task templates for every existing tree whose species has
--    templates. Templates mirror lib/care/task-templates.ts — keep both
--    in sync when adding species.
insert into public.tasks (
  tree_id, title, why, description, category, template_id,
  window_start_month, window_start_day, window_end_month, window_end_day, done
)
select
  t.id,
  tpl.title, tpl.why, tpl.description, tpl.category, tpl.template_id,
  tpl.window_start_month, tpl.window_start_day,
  tpl.window_end_month, tpl.window_end_day,
  false
from public.trees t
join (
  values
    -- Apple
    ('Apple', 'apple-winter-pruning', 'Winter pruning',
      'Removing crossing branches improves air circulation and reduces disease risk.',
      'The sap is still dormant, making it the perfect time to shape your tree. Focus on removing the three Ds: Dead, Damaged, or Diseased branches.',
      'pruning', 2, 1, 3, 15),
    ('Apple', 'apple-dormant-oil', 'Dormant oil spray',
      'Smothers overwintering scale, mites, and aphid eggs before they hatch.',
      'Apply horticultural oil when temps are above 40 °F and the tree is still dormant. Coat all bark surfaces thoroughly.',
      'protection', 2, 15, 3, 20),
    ('Apple', 'apple-spring-feeding', 'Organic fertilizing',
      'Supports healthy spring growth and fruit set.',
      'Apply compost around the drip line before bloom.',
      'feeding', 3, 15, 4, 30),
    ('Apple', 'apple-thinning', 'Thinning fruits',
      'Prevents limb breakage and ensures larger fruit size.',
      'Remove excess fruit to prevent branch breakage and ensure the remaining fruit grows larger and sweeter.',
      'monitoring', 5, 20, 6, 30),
    ('Apple', 'apple-harvest-check', 'Harvest readiness check',
      'Picking at the right time ensures best flavor and storage life.',
      'Use the stem-twist test: cradle the apple and twist gently. If it separates easily, it is ready. Check seed color (dark brown = ripe) and flesh firmness.',
      'harvesting', 9, 1, 10, 31),

    -- Peach
    ('Peach', 'peach-leaf-curl-prevention', 'Peach leaf curl prevention',
      'Leaf curl fungus overwinters on bark — a single well-timed spray prevents it.',
      'Apply copper fungicide before bud break when buds are still dormant. One thorough application is usually sufficient for the season.',
      'protection', 1, 15, 2, 28),
    ('Peach', 'peach-winter-pruning', 'Peach tree pruning',
      'Peaches fruit on last year''s wood — annual pruning encourages fresh fruiting wood.',
      'Prune to an open-vase shape. Remove inward-growing branches and last year''s fruiting wood to encourage new growth.',
      'pruning', 2, 1, 3, 15),
    ('Peach', 'peach-bud-monitoring', 'Bud monitoring',
      'Early detection of bud swell helps time pest sprays.',
      'Watch for pink bud tips — that signals the tree is breaking dormancy. A well-timed dormant oil spray now prevents scale and mite issues later.',
      'monitoring', 2, 20, 3, 25),
    ('Peach', 'peach-bloom-thinning', 'Bloom and fruit thinning',
      'Thinning early produces larger, sweeter peaches and protects limbs.',
      'Once fruit reaches marble size, thin to leave 6–8 inches between peaches. Remove any doubles and smaller fruit first.',
      'monitoring', 4, 1, 5, 15),
    ('Peach', 'peach-harvest', 'Harvest window',
      'Peaches don''t improve after picking — timing is everything.',
      'Check for full color change (no green on the ground color), slight softness when pressed near the stem, and a sweet fragrance. Twist gently to pick.',
      'harvesting', 7, 1, 8, 31),

    -- Lemon
    ('Lemon', 'lemon-spring-feeding', 'Spring feeding',
      'Citrus are heavy feeders and need consistent nutrition.',
      'Apply a balanced citrus fertilizer. Meyer lemons benefit from micronutrients like iron and zinc, especially in alkaline soils.',
      'feeding', 3, 1, 4, 30),
    ('Lemon', 'lemon-pest-inspection', 'Scale and aphid inspection',
      'Early detection prevents colonies from establishing and weakening the tree.',
      'Check undersides of leaves and stems for sticky honeydew, sooty mold, or small bumps (scale). Treat with neem oil or insecticidal soap if found.',
      'monitoring', 4, 1, 6, 30),
    ('Lemon', 'lemon-summer-feeding', 'Summer feeding',
      'Citrus need 3–4 feedings per year to sustain fruit development.',
      'Apply citrus fertilizer again during active growth. Water deeply before and after feeding.',
      'feeding', 6, 1, 7, 31),
    ('Lemon', 'lemon-harvest', 'Citrus harvest',
      'Meyer lemons can be picked once they reach full color.',
      'Harvest when fruit is deep yellow and gives slightly to pressure. Taste-test one — citrus won''t sweeten further after picking. Cut, don''t pull, to avoid tearing bark.',
      'harvesting', 10, 1, 2, 28),

    -- Fig
    ('Fig', 'fig-drainage-check', 'Check drainage',
      'Figs are drought-tolerant but hate wet feet.',
      'Ensure the soil around your fig drains freely. Amend heavy clay with compost. Mulch to retain moisture without waterlogging.',
      'monitoring', 3, 15, 4, 30),
    ('Fig', 'fig-beetle-monitoring', 'Fig beetle monitoring',
      'Green fig beetles feed on ripe fruit — early monitoring reduces losses.',
      'Watch for large iridescent green beetles around ripening fruit. Use fruit bags or fine netting on clusters to protect the crop. Remove fallen fruit to reduce attraction.',
      'monitoring', 6, 15, 8, 31),
    ('Fig', 'fig-ripeness-check', 'Fig ripeness check',
      'Figs must ripen on the tree — they stop ripening once picked.',
      'Ripe figs droop on the stem, feel soft, and may show slight skin cracks. Color deepens to brown-purple for Brown Turkey. Pick gently to avoid bruising.',
      'harvesting', 7, 15, 9, 15)
) as tpl (species, template_id, title, why, description, category,
          window_start_month, window_start_day, window_end_month, window_end_day)
  on t.type = tpl.species;
