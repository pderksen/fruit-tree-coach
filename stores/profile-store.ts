import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProfileStore {
  name: string;
  zipCode: string;
  gardeningZone: string;
  updateProfile: (fields: Partial<Pick<ProfileStore, "name" | "zipCode" | "gardeningZone">>) => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      name: "Phil",
      zipCode: "97201",
      gardeningZone: "8b",
      updateProfile: (fields) => set(fields),
    }),
    {
      name: "fruit-tree-coach-profile",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
