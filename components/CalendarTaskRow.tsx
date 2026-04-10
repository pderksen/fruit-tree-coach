import { View, Text } from "react-native";

import { FruitIcon } from "@/components/FruitIcon";
import type { CalendarTask } from "@/lib/mocks/calendar-tasks";

const CATEGORY_ICON: Record<CalendarTask["category"], string> = {
  pruning: "\u2702\uFE0F",
  feeding: "\uD83C\uDF3F",
  monitoring: "\uD83D\uDD0D",
  harvesting: "\uD83E\uDDF1",
  protection: "\uD83D\uDEE1\uFE0F",
};

interface CalendarTaskRowProps {
  task: CalendarTask;
}

export function CalendarTaskRow({ task }: CalendarTaskRowProps) {
  const categoryIcon = CATEGORY_ICON[task.category];
  const day = new Date(task.dueDate).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <View className="mb-3 flex-row rounded-2xl bg-white p-4">
      <View className="mr-3">
        <FruitIcon type={task.treeType} size={32} />
      </View>
      <View className="flex-1">
        <View className="flex-row items-center gap-2">
          <Text className="text-sm font-bold text-gray-900">{task.title}</Text>
          <Text className="text-sm">{categoryIcon}</Text>
        </View>
        <Text className="mt-0.5 text-xs font-medium text-brand-600">
          {task.treeName}
        </Text>
        <Text className="mt-1 text-xs leading-4 text-gray-500">
          {task.description}
        </Text>
      </View>
      <Text className="ml-2 text-xs text-gray-400">{day}</Text>
    </View>
  );
}
