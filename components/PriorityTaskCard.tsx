import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TaskStatusTag } from "@/components/TaskStatusTag";
import type { Task } from "@/lib/types";

interface PriorityTaskCardProps {
  task: Task;
  onViewGuide?: () => void;
  onToggleDone?: () => void;
}

export function PriorityTaskCard({
  task,
  onViewGuide,
  onToggleDone,
}: PriorityTaskCardProps) {
  const borderColor =
    task.status === "late" || task.status === "urgent"
      ? "border-amber-500"
      : "border-brand-600";

  return (
    <View className={`rounded-2xl border-l-4 ${borderColor} bg-white p-5`}>
      <View className="flex-row items-start justify-between">
        <Pressable
          className="flex-1 flex-row items-start gap-3"
          onPress={onToggleDone}
          disabled={!onToggleDone}
        >
          {onToggleDone ? (
            <Ionicons
              name="ellipse-outline"
              size={22}
              color="#9ca3af"
              style={{ marginTop: 2 }}
            />
          ) : null}
          <View className="flex-1">
            <Text
              className="text-lg font-bold text-gray-900"
            >
              {task.title}
            </Text>
            {task.displayWindow ? (
              <Text className="mt-1 text-sm text-gray-500">
                {task.displayWindow}
              </Text>
            ) : null}
            {task.status && task.status !== "active" ? (
              <View className="mt-2">
                <TaskStatusTag status={task.status} />
              </View>
            ) : null}
          </View>
        </Pressable>
      </View>

      {task.description ? (
        <Text className="mt-3 text-sm leading-5 text-gray-600">
          {task.description}
        </Text>
      ) : null}

      {onViewGuide ? (
        <Pressable
          className="mt-4 flex-row items-center justify-center rounded-xl bg-brand-700 py-3.5"
          onPress={onViewGuide}
        >
          <Text className="text-sm font-semibold text-white">
            View Step-by-Step Guide
          </Text>
          <Ionicons
            name="arrow-forward"
            size={16}
            color="white"
            style={{ marginLeft: 6 }}
          />
        </Pressable>
      ) : null}
    </View>
  );
}
