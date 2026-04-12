import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";

import type { Task } from "@/lib/types";

interface LaterTaskListProps {
  tasks: Task[];
  onToggleDone?: (task: Task) => void;
}

export function LaterTaskList({ tasks, onToggleDone }: LaterTaskListProps) {
  if (tasks.length === 0) return null;

  return (
    <View className="rounded-2xl bg-white p-5">
      {tasks.map((task, index) => (
        <Pressable
          key={task.id}
          onPress={onToggleDone ? () => onToggleDone(task) : undefined}
          disabled={!onToggleDone}
          className={`flex-row ${index > 0 ? "mt-4 border-t border-gray-100 pt-4" : ""}`}
        >
          {onToggleDone ? (
            <Ionicons
              name={task.done ? "checkmark-circle" : "ellipse-outline"}
              size={20}
              color={task.done ? "#16a34a" : "#9ca3af"}
              style={{ marginRight: 10, marginTop: 1 }}
            />
          ) : (
            <View className="mr-3 mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-500" />
          )}
          <View className="flex-1">
            <Text
              className={`text-base font-semibold ${task.done ? "text-gray-400 line-through" : "text-gray-900"}`}
            >
              {task.title}
            </Text>
            <Text className="mt-0.5 text-sm text-gray-500">
              {task.season}
              {task.description ? ` \u2022 ${task.description}` : ""}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
