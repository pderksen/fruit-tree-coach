import { supabase } from "@/lib/supabase";
import { guideSchema } from "@/lib/schemas";
import type { Guide } from "@/lib/types";

export async function fetchGuideByCategory(
  treeType: string,
  _category: string,
): Promise<Guide | null> {
  // Shipped guides are tree-wide "overview" docs covering every task
  // category in one walkthrough — see supabase/migrations/ guide inserts.
  // Route by tree type only; per-category guides are post-v1.
  const { data, error } = await supabase
    .from("guides")
    .select("id, content, source")
    .eq("tree_type", treeType)
    .eq("task_category", "overview")
    .eq("approved", true)
    .maybeSingle();
  if (error) throw error;
  return data ? guideSchema.parse(data) : null;
}
