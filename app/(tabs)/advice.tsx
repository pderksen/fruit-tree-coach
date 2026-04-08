import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import { Screen } from "@/components/Screen";

export default function AdviceScreen() {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Ionicons name="bulb-outline" size={48} color="#9ca3af" />
        <Text className="mt-3 text-lg font-semibold text-gray-900">
          Expert Advice
        </Text>
        <Text className="mt-1 text-center text-sm text-gray-500">
          Tips and guidance for your fruit trees will appear here.
        </Text>
      </View>
    </Screen>
  );
}
