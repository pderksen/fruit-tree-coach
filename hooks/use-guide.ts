import { useQuery } from "@tanstack/react-query";

import {
  fetchGuide,
  fetchGuideByCategory,
} from "@/lib/services/guide-service";

export function useGuide(id: string | undefined) {
  return useQuery({
    queryKey: ["guides", id],
    queryFn: () => fetchGuide(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
  });
}

export function useGuideByCategory(
  treeType: string | undefined,
  category: string | undefined,
) {
  return useQuery({
    queryKey: ["guide", "by-category", treeType, category],
    queryFn: () => fetchGuideByCategory(treeType!, category!),
    enabled: !!treeType && !!category,
    staleTime: 1000 * 60 * 60,
  });
}
