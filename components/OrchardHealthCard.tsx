import { View, Text, Pressable } from "react-native";

interface OrchardHealthCardProps {
  readinessPercent: number;
  onStartChecklist: () => void;
}

export function OrchardHealthCard({
  readinessPercent,
  onStartChecklist,
}: OrchardHealthCardProps) {
  return (
    <View className="rounded-3xl bg-brand-800 p-5">
      <Text className="text-lg font-bold text-white">Orchard Health</Text>
      <Text className="mt-2 text-sm leading-5 text-green-100">
        Your trees are {readinessPercent}% ready for the season. A quick round
        of pruning and early mulching will set you up for a bountiful harvest.
      </Text>
      <Pressable
        className="mt-4 self-start rounded-full bg-white px-5 py-2.5"
        onPress={onStartChecklist}
      >
        <Text className="text-sm font-semibold text-brand-800">
          Start Weekly Checklist
        </Text>
      </Pressable>
    </View>
  );
}
