import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useSession } from "@/hooks/use-session";
import { fetchProfile, updateProfile } from "@/lib/services/profile-service";

const profileKey = (userId: string | undefined) => ["profile", userId];

export function useProfile() {
  const { user } = useSession();
  const userId = user?.id;

  return useQuery({
    queryKey: profileKey(userId),
    queryFn: () => fetchProfile(userId!),
    enabled: !!userId,
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const { user } = useSession();
  const userId = user?.id;

  return useMutation({
    mutationFn: (fields: { name?: string }) => updateProfile(userId!, fields),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: profileKey(userId) });
    },
  });
}
