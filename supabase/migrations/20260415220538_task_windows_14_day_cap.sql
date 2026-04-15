-- Cap every seeded task window at 14 days from its start date.
--
-- Previously task windows mirrored extension-service seasonal ranges
-- (e.g. Apr 1 – May 15). Users found the broad windows confusing: the
-- UI showed "this week" for over a month, and there was no clear
-- signal that a task was overdue. The new model uses the recommended
-- start date from each source and gives users a uniform 14-day window
-- to complete the task. After that, tasks surface as "late" but stay
-- visible and actionable.

update public.tasks set window_end_month = 2,  window_end_day = 14 where template_id = 'apple-winter-pruning';
update public.tasks set window_end_month = 2,  window_end_day = 28 where template_id = 'apple-dormant-oil';
update public.tasks set window_end_month = 3,  window_end_day = 28 where template_id = 'apple-spring-feeding';
update public.tasks set window_end_month = 6,  window_end_day = 2  where template_id = 'apple-thinning';
update public.tasks set window_end_month = 9,  window_end_day = 14 where template_id = 'apple-harvest-check';

update public.tasks set window_end_month = 1,  window_end_day = 28 where template_id = 'peach-leaf-curl-prevention';
update public.tasks set window_end_month = 2,  window_end_day = 14 where template_id = 'peach-winter-pruning';
update public.tasks set window_end_month = 3,  window_end_day = 5  where template_id = 'peach-bud-monitoring';
update public.tasks set window_end_month = 4,  window_end_day = 14 where template_id = 'peach-bloom-thinning';
update public.tasks set window_end_month = 7,  window_end_day = 14 where template_id = 'peach-harvest';

update public.tasks set window_end_month = 3,  window_end_day = 14 where template_id = 'lemon-spring-feeding';
update public.tasks set window_end_month = 4,  window_end_day = 14 where template_id = 'lemon-pest-inspection';
update public.tasks set window_end_month = 6,  window_end_day = 14 where template_id = 'lemon-summer-feeding';
update public.tasks set window_end_month = 10, window_end_day = 14 where template_id = 'lemon-harvest';

update public.tasks set window_end_month = 3,  window_end_day = 28 where template_id = 'fig-drainage-check';
update public.tasks set window_end_month = 6,  window_end_day = 28 where template_id = 'fig-beetle-monitoring';
update public.tasks set window_end_month = 7,  window_end_day = 28 where template_id = 'fig-ripeness-check';
