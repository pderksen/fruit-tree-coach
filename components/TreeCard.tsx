import { View, Text, Pressable } from "react-native";

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
  const statusLine = activeTask?.title;
  const statusDescription = activeTask?.why;

  return (
    <View className="mb-4 rounded-3xl bg-white p-5">
      <FruitIcon type={tree.type} size={36} />

      <Text className="mt-3 text-xl font-bold text-gray-900">{tree.name}</Text>
      {statusLine ? (
        <Text className="mt-0.5 text-sm font-medium text-brand-600">
          {statusLine}
        </Text>
      ) : null}
      {statusDescription ? (
        <Text className="mt-2 text-sm leading-5 text-gray-600">
          {statusDescription}
        </Text>
      ) : null}

      <Pressable
        className="mt-4 items-center rounded-xl border border-gray-200 py-3"
        onPress={() => onViewCareGuide(tree.id)}
      >
        <Text className="text-sm font-semibold text-gray-700">
          View Care Guide
        </Text>
      </Pressable>
    </View>
  );
}
