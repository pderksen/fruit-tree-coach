import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProfileStore {
  name: string;
  updateProfile: (fields: Partial<Pick<ProfileStore, "name">>) => void;
}

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      name: "Phil",
      updateProfile: (fields) => set(fields),
    }),
    {
      name: "fruit-tree-coach-profile",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
