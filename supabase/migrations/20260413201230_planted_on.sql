-- Replaces trees.planted_year (int) and trees.planted_date (text) with a
-- single trees.planted_on (date) column per the 2026-04-13 foundation
-- design. Age is computed from planted_on at render time. Text
-- planted_date values that don't parse as YYYY-MM-DD fall through to null.

alter table public.trees add column planted_on date;

update public.trees
set planted_on = coalesce(
  case
    when planted_date ~ '^\d{4}-\d{2}-\d{2}$'
      then planted_date::date
    else null
  end,
  case when planted_year is not null then make_date(planted_year, 1, 1) else null end
);

alter table public.trees drop column planted_year;
alter table public.trees drop column planted_date;
