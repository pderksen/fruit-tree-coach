import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

import { useSession } from "@/hooks/use-session";
import {
  createOrchard,
  fetchOrchards,
  updateOrchard,
} from "@/lib/services/orchard-service";
import { fetchZoneForZip, zipToZone } from "@/lib/zone-lookup";
import type { OrchardWithUser } from "@/lib/schemas";

const orchardsKey = (userId: string | undefined) => ["orchards", userId];

export function useOrchards() {
  const { user } = useSession();
  const userId = user?.id;

  return useQuery({
    queryKey: orchardsKey(userId),
    queryFn: () => fetchOrchards(userId!),
    enabled: !!userId,
  });
}

export function useDefaultOrchard(): OrchardWithUser | undefined {
  const { data } = useOrchards();
  return data?.[0];
}

export function useCreateOrchard() {
  const queryClient = useQueryClient();
  const { user } = useSession();
  const userId = user?.id;

  return useMutation({
    mutationFn: createOrchard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: orchardsKey(userId) });
    },
  });
}

/**
 * Ensure the signed-in user has at least one orchard. Runs once the
 * orchards query resolves; if the list is empty, creates "My Orchard".
 * Idempotent — safe to call on every app load.
 */
export function useEnsureDefaultOrchard() {
  const { user } = useSession();
  const userId = user?.id;
  const { data, isSuccess } = useOrchards();
  const createMutation = useCreateOrchard();
  const attempted = useRef(false);

  useEffect(() => {
    if (!userId) {
      attempted.current = false;
      return;
    }
    if (!isSuccess || data === undefined) return;
    if (data.length > 0) return;
    if (attempted.current) return;
    attempted.current = true;
    createMutation.mutate({ userId, name: "My Orchard" });
  }, [userId, isSuccess, data, createMutation]);
}

export function useUpdateOrchard() {
  const queryClient = useQueryClient();
  const { user } = useSession();
  const userId = user?.id;

  return useMutation({
    mutationFn: async (args: {
      id: string;
      fields: { name?: string; zipCode?: string; zone?: string };
    }) => {
      const { id, fields } = args;
      const patch = { ...fields };
      // When the zip changes, look up the zone via the USDA API, falling
      // back to the static zip-prefix table if the API is unreachable
      // (offline, timeout, rate-limited). Keeps zip and zone in sync.
      if (fields.zipCode && fields.zone === undefined) {
        const zone =
          (await fetchZoneForZip(fields.zipCode)) ??
          zipToZone(fields.zipCode);
        if (zone) patch.zone = zone;
      }
      return updateOrchard(id, patch);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: orchardsKey(userId) });
    },
  });
}
