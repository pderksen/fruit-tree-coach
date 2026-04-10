import { View, Text, Pressable } from "react-native";

import { FruitIcon } from "@/components/FruitIcon";
import type { Tree } from "@/lib/types";

interface TreeCardProps {
  tree: Tree;
  onViewCareGuide: (treeId: string) => void;
}

export function TreeCard({ tree, onViewCareGuide }: TreeCardProps) {
  return (
    <View className="mb-4 rounded-3xl bg-white p-5">
      <FruitIcon type={tree.type} size={36} />

      <Text className="mt-3 text-xl font-bold text-gray-900">{tree.name}</Text>
      {tree.statusLabel ? (
        <Text className="mt-0.5 text-sm font-medium text-brand-600">
          {tree.statusLabel}
        </Text>
      ) : null}
      {tree.statusDescription ? (
        <Text className="mt-2 text-sm leading-5 text-gray-600">
          {tree.statusDescription}
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
