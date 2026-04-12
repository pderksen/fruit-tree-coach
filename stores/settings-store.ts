/**
 * Device-local app settings. Persisted to AsyncStorage on this device only —
 * NOT synced across the user's devices. This is deliberate.
 *
 * Belongs here (device-local):
 *   - Notification toggle, notification time, per-category notification prefs
 *   - Haptics / sound toggles
 *   Rationale: these are tied to the physical device. The user's iPad
 *   shouldn't buzz because they enabled notifications on their phone. Apple
 *   Health, Strava, and Todoist all work this way.
 *
 * Does NOT belong here (future `user_preferences` Supabase table):
 *   - Measurement units (imperial vs metric)
 *   - Language / region overrides
 *   - "Advanced mode" or onboarding-completed flags
 *   Rationale: these are about the user, not the device, and feel broken
 *   if they reset when switching devices.
 *
 * Do not create the sync table until a real sync-worthy preference exists.
 * An empty table locks in the wrong shape — YAGNI.
 */
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
