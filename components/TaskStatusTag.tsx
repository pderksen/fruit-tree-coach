import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import type { TaskStatus } from "@/lib/types";

interface TaskStatusTagProps {
  status: TaskStatus;
}

export function TaskStatusTag({ status }: TaskStatusTagProps) {
  if (status === "active") return null;

  if (status === "upcoming") {
    return (
      <View className="flex-row items-center gap-1 self-start rounded-full bg-gray-100 px-2.5 py-1">
        <Text className="text-xs font-semibold text-gray-600">Coming up</Text>
      </View>
    );
  }

  // late
  return (
    <View className="flex-row items-center gap-1 self-start rounded-full bg-amber-100 px-2.5 py-1">
      <Ionicons name="warning" size={12} color="#b45309" />
      <Text className="text-xs font-semibold text-amber-800">
        Do this as soon as possible
      </Text>
    </View>
  );
}
