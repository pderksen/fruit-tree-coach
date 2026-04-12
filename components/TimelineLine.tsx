import { View } from "react-native";

import type { TaskCategory } from "@/lib/types";

const CATEGORY_DOT_COLOR: Record<TaskCategory, string> = {
  pruning: "bg-brand-500",
  feeding: "bg-amber-500",
  monitoring: "bg-blue-500",
  protection: "bg-purple-500",
  harvesting: "bg-orange-500",
};

interface TimelineDotProps {
  category: TaskCategory | undefined;
  isOverdue: boolean;
}

export function TimelineDot({ category, isOverdue }: TimelineDotProps) {
  const dotColor = isOverdue
    ? "bg-red-500"
    : (category && CATEGORY_DOT_COLOR[category]) ?? "bg-gray-400";

  return (
    <View className="items-center" style={{ width: 24 }}>
      {/* Vertical line segment */}
      <View className="absolute bottom-0 top-0 w-0.5 bg-gray-200" />
      {/* Colored dot */}
      <View
        className={`z-10 mt-5 h-3 w-3 rounded-full ${dotColor}`}
        style={{
          shadowColor: isOverdue ? "#ef4444" : "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: isOverdue ? 0.3 : 0.1,
          shadowRadius: 2,
          elevation: 2,
        }}
      />
    </View>
  );
}
