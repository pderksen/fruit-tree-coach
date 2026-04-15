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
  isLast: boolean;
}

export function TimelineTask({ task }: TimelineTaskProps) {
  const router = useRouter();

  const isUrgent = task.status === "urgent";
  const isLate = task.status === "late";
  const variant: "default" | "warning" | "urgent" = isUrgent
    ? "urgent"
    : isLate
      ? "warning"
      : "default";

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
      <TimelineDot category={task.category} isOverdue={isUrgent || isLate} />

      {/* Task card */}
      <Card
        onPress={handlePress}
        variant={variant}
        className="mb-3 ml-3 flex-1 flex-row items-center p-4"
      >
        {task.treeType ? (
          <View className="mr-3">
            <FruitIcon type={task.treeType} size={32} />
          </View>
        ) : null}

        <View className="flex-1">
          <View className="flex-row items-center gap-2">
            <Text className="flex-shrink text-sm font-bold text-gray-900">
              {task.title}
            </Text>
            {isUrgent ? (
              <View className="flex-row items-center gap-1 rounded-full bg-red-100 px-2 py-0.5">
                <Ionicons name="warning" size={10} color="#dc2626" />
                <Text className="text-[10px] font-semibold text-red-700">
                  Urgent
                </Text>
              </View>
            ) : isLate ? (
              <View className="flex-row items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5">
                <Ionicons name="alert-circle" size={10} color="#d97706" />
                <Text className="text-[10px] font-semibold text-amber-700">
                  Late
                </Text>
              </View>
            ) : null}
          </View>
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
