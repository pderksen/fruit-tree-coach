import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";

import { TaskStatusTag } from "@/components/TaskStatusTag";
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
              name="ellipse-outline"
              size={20}
              color="#9ca3af"
              style={{ marginRight: 10, marginTop: 1 }}
            />
          ) : (
            <View className="mr-3 mt-1.5 h-2.5 w-2.5 rounded-full bg-brand-500" />
          )}
          <View className="flex-1">
            <Text className="text-base font-semibold text-gray-900">
              {task.title}
            </Text>
            {task.displayWindow || task.description ? (
              <Text className="mt-0.5 text-sm text-gray-500">
                {task.displayWindow}
                {task.displayWindow && task.description ? " \u2022 " : ""}
                {task.description}
              </Text>
            ) : null}
            {task.status && task.status !== "active" ? (
              <View className="mt-2">
                <TaskStatusTag status={task.status} />
              </View>
            ) : null}
          </View>
        </Pressable>
      ))}
    </View>
  );
}
