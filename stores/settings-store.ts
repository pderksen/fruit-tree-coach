import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface NotificationPreferences {
  pruning: boolean;
  fertilizing: boolean;
  pestControl: boolean;
  harvest: boolean;
}

interface SettingsStore {
  hasSeenNotificationPrompt: boolean;
  notificationsEnabled: boolean;
  notificationPreferences: NotificationPreferences;
  setHasSeenNotificationPrompt: (value: boolean) => void;
  setNotificationsEnabled: (value: boolean) => void;
  setNotificationPreferences: (prefs: Partial<NotificationPreferences>) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      hasSeenNotificationPrompt: false,
      notificationsEnabled: false,
      notificationPreferences: {
        pruning: true,
        fertilizing: true,
        pestControl: true,
        harvest: true,
      },
      setHasSeenNotificationPrompt: (value) =>
        set({ hasSeenNotificationPrompt: value }),
      setNotificationsEnabled: (value) =>
        set({ notificationsEnabled: value }),
      setNotificationPreferences: (prefs) =>
        set((state) => ({
          notificationPreferences: {
            ...state.notificationPreferences,
            ...prefs,
          },
        })),
    }),
    {
      name: "fruit-tree-coach-settings",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
