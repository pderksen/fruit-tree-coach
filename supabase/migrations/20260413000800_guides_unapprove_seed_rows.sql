-- Middle-ground cleanup for the original hand-seeded per-task guides.
-- The 15 rows dt1..dt15 were written during early UI development when
-- only Apple, Peach, Lemon, and Fig had coverage. The app has since
-- pivoted to one overview guide per tree type (migrations 20260413000000
-- through 20260413000700) as the primary guide surface.
--
-- We keep the rows in the table (optionality + zero storage cost) but
-- set approved = false so RLS hides them from users. If we later want
-- to surface per-task depth on specific (tree_type, task_category)
-- pairs, we can flip individual rows back to approved = true then.
--
-- Note: dt3 is intentionally absent from the original seed — only
-- 14 of the dt* IDs exist in practice (dt1, dt2, dt4..dt15).

update public.guides
   set approved = false
 where id in (
   'dt1','dt2','dt4','dt5','dt6','dt7','dt8',
   'dt9','dt10','dt11','dt12','dt13','dt14','dt15'
 );
