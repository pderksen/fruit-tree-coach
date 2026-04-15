import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import { Card } from "@/components/Card";
import { FruitIcon } from "@/components/FruitIcon";
import { useTasks } from "@/hooks/use-tasks";
import type { Tree } from "@/lib/types";

interface TreeCardProps {
  tree: Tree;
  onViewCareGuide: (treeId: string) => void;
}

export function TreeCard({ tree, onViewCareGuide }: TreeCardProps) {
  const { data: tasks } = useTasks(tree.id);
  const activeTask = tasks?.find((t) => t.status === "active");
  const lateTask = tasks?.find((t) => t.status === "late");
  const statusTask = lateTask ?? activeTask;
  const statusLine = statusTask?.title;
  const statusDescription = statusTask?.why;

  return (
    <Card
      variant={lateTask ? "warning" : "default"}
      className="mb-3 flex-row items-start gap-4 p-4"
      onPress={() => onViewCareGuide(tree.id)}
    >
      <View className="pt-1">
        <FruitIcon type={tree.type} size={36} />
      </View>
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-900">{tree.name}</Text>
        {statusLine ? (
          <Text className="mt-0.5 text-sm font-medium text-brand-600">
            {statusLine}
          </Text>
        ) : null}
        {statusDescription ? (
          <Text className="mt-1 text-sm leading-5 text-gray-600">
            {statusDescription}
          </Text>
        ) : null}
      </View>
      <View className="self-center">
        <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
      </View>
    </Card>
  );
}
