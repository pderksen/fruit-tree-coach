import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export function WateringInfoCard() {
  const router = useRouter();

  return (
    <View className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <View className="flex-row items-center gap-2">
        <Ionicons name="water-outline" size={20} color="#1e40af" />
        <Text className="text-base font-bold text-blue-800">
          About Watering
        </Text>
      </View>
      <Text className="mt-2 text-sm leading-5 text-blue-700">
        This app assumes you handle regular watering and focuses on the
        trickier care: pruning, fertilizing, pest control, and harvest timing.
      </Text>
      <Pressable
        className="mt-3 flex-row items-center gap-1"
        onPress={() => router.push("/watering-guide")}
      >
        <Text className="text-sm font-medium text-blue-600">
          See watering details
        </Text>
        <Ionicons name="arrow-forward" size={14} color="#2563eb" />
      </Pressable>
    </View>
  );
}
