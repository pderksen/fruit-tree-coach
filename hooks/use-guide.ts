import { useQuery } from "@tanstack/react-query";

import { fetchGuide } from "@/lib/services/guide-service";

export function useGuide(id: string | undefined) {
  return useQuery({
    queryKey: ["guides", id],
    queryFn: () => fetchGuide(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
  });
}
