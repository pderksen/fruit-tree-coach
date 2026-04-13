import { useQuery } from "@tanstack/react-query";

import { fetchGuideByCategory } from "@/lib/services/guide-service";

export function useGuideByCategory(
  treeType: string | undefined,
  category: string | undefined,
) {
  return useQuery({
    queryKey: ["guides", "by-category", treeType, category],
    queryFn: () => fetchGuideByCategory(treeType!, category!),
    enabled: !!treeType && !!category,
    staleTime: 1000 * 60 * 60,
  });
}
