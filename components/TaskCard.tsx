import { View, Text } from "react-native";

import { SecondaryButton } from "@/components/SecondaryButton";
import type { Task } from "@/lib/types";

interface TaskCardProps {
  task: Task;
  onMarkDone: (id: string) => void;
}

export function TaskCard({ task, onMarkDone }: TaskCardProps) {
  return (
    <View className="mb-3 rounded-2xl bg-white p-4 shadow-sm">
      <Text className="text-xs font-medium text-gray-500">
        {task.treeName}
      </Text>
      <Text className="mt-1 text-lg font-semibold text-gray-900">
        {task.title}
      </Text>
      <Text className="mt-1 text-sm text-gray-600">{task.why}</Text>
      <View className="mt-3 self-start">
        <SecondaryButton
          title="Mark done"
          onPress={() => onMarkDone(task.id)}
        />
      </View>
    </View>
  );
}
