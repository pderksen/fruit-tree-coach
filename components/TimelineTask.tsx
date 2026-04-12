import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

import { FruitIcon } from "@/components/FruitIcon";
import { TimelineDot } from "@/components/TimelineLine";
import { formatWeekRange } from "@/lib/date-utils";
import type { Task } from "@/lib/types";

interface TimelineTaskProps {
  task: Task & { dueDate: string };
  isOverdue: boolean;
  isLast: boolean;
}

export function TimelineTask({ task, isOverdue, isLast }: TimelineTaskProps) {
  const router = useRouter();

  const weekLabel = formatWeekRange(new Date(task.dueDate));

  const handlePress = () => {
    router.push({
      pathname: "/tree/guide/[taskId]",
      params: { taskId: task.id },
    });
  };

  return (
    <View className="flex-row">
      {/* Timeline line + dot */}
      <TimelineDot category={task.category} isOverdue={isOverdue} />

      {/* Task card */}
      <Pressable
        onPress={handlePress}
        className={`mb-3 ml-3 flex-1 flex-row items-center rounded-2xl bg-white p-4 ${
          isOverdue ? "border border-red-200" : ""
        }`}
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.05,
          shadowRadius: 3,
          elevation: 1,
        }}
      >
        {task.treeType ? (
          <View className="mr-3">
            <FruitIcon type={task.treeType} size={32} />
          </View>
        ) : null}

        <View className="flex-1">
          <Text className="text-sm font-bold text-gray-900">{task.title}</Text>
          <Text className="mt-0.5 text-xs font-medium text-brand-600">
            {task.treeName}
          </Text>
          <Text className="mt-1 text-xs text-gray-400">{weekLabel}</Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={18}
          color="#9ca3af"
          style={{ marginLeft: 8 }}
        />
      </Pressable>
    </View>
  );
}
