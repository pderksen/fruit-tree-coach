import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

interface GardenerInsightProps {
  quote: string;
  pendingTasks: number;
  nextTask: string;
}

export function GardenerInsight({
  quote,
  pendingTasks,
  nextTask,
}: GardenerInsightProps) {
  return (
    <View className="rounded-3xl bg-cream-100 p-5">
      <View className="flex-row items-center gap-2">
        <Ionicons name="leaf" size={14} color="#15803d" />
        <Text className="text-xs font-semibold uppercase tracking-wider text-brand-700">
          Gardener&apos;s Insight
        </Text>
      </View>
      <Text className="mt-3 font-serif text-base italic leading-6 text-gray-800">
        &ldquo;{quote}&rdquo;
      </Text>
      <View className="mt-4 flex-row items-center justify-between border-t border-cream-200 pt-3">
        <Text className="text-xs text-gray-500">
          {pendingTasks} Tasks Pending
        </Text>
        <Text className="text-xs text-gray-500">Next: {nextTask}</Text>
      </View>
    </View>
  );
}
