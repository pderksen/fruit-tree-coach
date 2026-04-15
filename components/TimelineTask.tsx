import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";

import { Card } from "@/components/Card";
import { FruitIcon } from "@/components/FruitIcon";
import { TimelineDot } from "@/components/TimelineLine";
import type { Task } from "@/lib/types";

const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface TimelineTaskProps {
  task: Task & { dueDate: string };
  isOverdue: boolean;
  isLast: boolean;
}

export function TimelineTask({ task, isOverdue, isLast }: TimelineTaskProps) {
  const router = useRouter();

  const windowLabel =
    task.windowStart && task.windowEnd
      ? `${SHORT_MONTHS[task.windowStart.month - 1]} ${task.windowStart.day} – ${SHORT_MONTHS[task.windowEnd.month - 1]} ${task.windowEnd.day}`
      : "";

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
      <Card
        onPress={handlePress}
        variant={isOverdue ? "warning" : "default"}
        className="mb-3 ml-3 flex-1 flex-row items-center p-4"
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
          {windowLabel ? (
            <Text className="mt-1 text-xs text-gray-400">{windowLabel}</Text>
          ) : null}
        </View>

        <Ionicons
          name="chevron-forward"
          size={18}
          color="#9ca3af"
          style={{ marginLeft: 8 }}
        />
      </Card>
    </View>
  );
}
