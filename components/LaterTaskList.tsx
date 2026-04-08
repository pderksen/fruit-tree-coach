import { View, Text } from "react-native";

import type { DetailedTask } from "@/lib/types";

interface LaterTaskListProps {
  tasks: DetailedTask[];
}

export function LaterTaskList({ tasks }: LaterTaskListProps) {
  if (tasks.length === 0) return null;

  return (
    <View className="rounded-2xl bg-white p-5">
      {tasks.map((task, index) => (
        <View
          key={task.id}
          className={`flex-row ${index > 0 ? "mt-4 border-t border-gray-100 pt-4" : ""}`}
        >
          <View className="mr-3 mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-500" />
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900">
              {task.title}
            </Text>
            <Text className="mt-0.5 text-sm text-gray-500">
              {task.season}
              {task.description ? ` \u2022 ${task.description}` : ""}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
