import { supabase } from "@/lib/supabase";
import { guideSchema } from "@/lib/schemas";
import type { Guide } from "@/lib/types";

export async function fetchGuide(id: string): Promise<Guide | null> {
  const { data, error } = await supabase
    .from("guides")
    .select("id, content, source")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data ? guideSchema.parse(data) : null;
}

export async function fetchGuideByCategory(
  treeType: string,
  category: string,
): Promise<Guide | null> {
  const { data, error } = await supabase
    .from("guides")
    .select("id, content, source")
    .eq("tree_type", treeType)
    .eq("task_category", category)
    .eq("approved", true)
    .maybeSingle();
  if (error) throw error;
  return data ? guideSchema.parse(data) : null;
}
