import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

export async function successHaptic(): Promise<void> {
  if (Platform.OS === "web") return;
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } catch {
    // Older devices / simulators may throw — haptics are non-essential.
  }
}
