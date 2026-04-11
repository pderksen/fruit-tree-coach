import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Orchard } from "@/lib/types";
import { fetchZoneForZip, zipToZone } from "@/lib/zone-lookup";

const DEFAULT_ORCHARD_ID = "default";

function createDefaultOrchard(zipCode: string): Orchard {
  return {
    id: DEFAULT_ORCHARD_ID,
    name: "My Orchard",
    zipCode,
    zone: zipToZone(zipCode) ?? "7a",
    createdAt: new Date().toISOString(),
  };
}

interface OrchardStore {
  orchards: Orchard[];
  defaultOrchardId: string;
  getDefaultOrchard: () => Orchard;
  addOrchard: (orchard: Orchard) => void;
  updateOrchard: (id: string, fields: Partial<Pick<Orchard, "name" | "zipCode" | "zone">>) => void;
  /** Fetch the accurate zone from the USDA API and update the orchard. */
  refreshZoneFromApi: (id: string) => Promise<void>;
}

export const useOrchardStore = create<OrchardStore>()(
  persist(
    (set, get) => ({
      orchards: [createDefaultOrchard("97201")],
      defaultOrchardId: DEFAULT_ORCHARD_ID,

      getDefaultOrchard: () => {
        const { orchards, defaultOrchardId } = get();
        return orchards.find((o) => o.id === defaultOrchardId) ?? orchards[0];
      },

      addOrchard: (orchard) =>
        set((state) => ({ orchards: [...state.orchards, orchard] })),

      updateOrchard: (id, fields) =>
        set((state) => ({
          orchards: state.orchards.map((o) => {
            if (o.id !== id) return o;
            const updated = { ...o, ...fields };
            // When zip changes and zone wasn't explicitly set, use static fallback
            if (fields.zipCode && !fields.zone) {
              updated.zone = zipToZone(fields.zipCode) ?? o.zone;
            }
            return updated;
          }),
        })),

      refreshZoneFromApi: async (id) => {
        const orchard = get().orchards.find((o) => o.id === id);
        if (!orchard) return;
        const zone = await fetchZoneForZip(orchard.zipCode);
        if (zone) {
          set((state) => ({
            orchards: state.orchards.map((o) =>
              o.id === id ? { ...o, zone } : o,
            ),
          }));
        }
      },
    }),
    {
      name: "fruit-tree-coach-orchards",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
