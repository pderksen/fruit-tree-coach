import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, View, Text } from "react-native";

import { Screen } from "@/components/Screen";

const SETTINGS_ROWS = [
  { label: "Notifications", icon: "notifications-outline" as const },
  { label: "Location", icon: "location-outline" as const },
  { label: "About", icon: "information-circle-outline" as const },
];

export default function SettingsScreen() {
  return (
    <Screen>
      <View className="mb-4 mt-2">
        <Text className="text-2xl font-bold text-gray-900">Settings</Text>
      </View>

      {SETTINGS_ROWS.map((row) => (
        <Pressable
          key={row.label}
          className="mb-3 flex-row items-center justify-between rounded-2xl bg-white p-4"
          onPress={() => Alert.alert("Coming soon")}
        >
          <View className="flex-row items-center gap-3">
            <Ionicons name={row.icon} size={22} color="#374151" />
            <Text className="text-base text-gray-900">{row.label}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
        </Pressable>
      ))}
    </Screen>
  );
}
