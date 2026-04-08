import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import { Screen } from "@/components/Screen";

export default function CalendarScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Ionicons name="calendar-outline" size={48} color="#9ca3af" />
        <Text className="mt-3 text-lg font-semibold text-gray-900">
          Care Calendar
        </Text>
        <Text className="mt-1 text-center text-sm text-gray-500">
          Your upcoming tree care schedule will appear here.
        </Text>
      </View>
    </Screen>
  );
}
