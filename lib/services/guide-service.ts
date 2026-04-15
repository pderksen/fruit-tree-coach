import { supabase } from "@/lib/supabase";
import { guideSchema } from "@/lib/schemas";
import type { Guide } from "@/lib/types";

export async function fetchGuideByCategory(
  treeType: string,
  category: string | null | undefined,
): Promise<Guide | null> {
  // Prefer a per-task guide (e.g. Peach × pruning). Fall back to the
  // tree-wide overview when a per-task guide hasn't been written yet —
  // per-task coverage is being filled in tree-by-tree, see
  // docs/plans for the current rollout.
  if (category) {
    const { data, error } = await supabase
      .from("guides")
      .select("id, content, source")
      .eq("tree_type", treeType)
      .eq("task_category", category)
      .eq("approved", true)
      .maybeSingle();
    if (error) throw error;
    if (data) return guideSchema.parse(data);
  }

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
