import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CoachTipCardProps {
  tip: string;
}

export function CoachTipCard({ tip }: CoachTipCardProps) {
  return (
    <View className="rounded-2xl bg-brand-50 p-5">
      <View className="mb-2 flex-row items-center gap-2">
        <Ionicons name="star" size={18} color="#15803d" />
        <Text className="text-sm font-bold text-brand-800">Coach Tip</Text>
      </View>
      <Text className="text-sm leading-5 text-brand-900">{tip}</Text>
    </View>
  );
}
