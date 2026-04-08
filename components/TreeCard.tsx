import { View, Text, Pressable } from "react-native";

import type { Tree, TreeCategory } from "@/lib/types";
import { TREE_CATEGORY_MAP } from "@/lib/types";

const TREE_EMOJI: Record<string, string> = {
  Apple: "\uD83C\uDF4E",
  Peach: "\uD83C\uDF51",
  Lemon: "\uD83C\uDF4B",
  Fig: "\uD83C\uDF43",
  Pear: "\uD83C\uDF50",
  Cherry: "\uD83C\uDF52",
  Plum: "\uD83C\uDF51",
  Orange: "\uD83C\uDF4A",
  Lime: "\uD83C\uDF4B",
};

const CATEGORY_COLOR: Record<TreeCategory, string> = {
  "Pome Fruit": "bg-red-50 text-red-700",
  "Stone Fruit": "bg-orange-50 text-orange-700",
  Citrus: "bg-yellow-50 text-yellow-700",
  Ficus: "bg-green-50 text-green-700",
};

interface TreeCardProps {
  tree: Tree;
  onViewCareGuide: (treeId: string) => void;
}

export function TreeCard({ tree, onViewCareGuide }: TreeCardProps) {
  const category = TREE_CATEGORY_MAP[tree.type];
  const emoji = TREE_EMOJI[tree.type] ?? "\uD83C\uDF33";
  const categoryColors = CATEGORY_COLOR[category];
  const [badgeBg, badgeText] = categoryColors.split(" ");

  return (
    <View className="mb-4 rounded-3xl bg-white p-5">
      <View className="flex-row items-start justify-between">
        <Text className="text-3xl">{emoji}</Text>
        <View className={`rounded-full px-3 py-1 ${badgeBg}`}>
          <Text className={`text-xs font-semibold uppercase ${badgeText}`}>
            {category}
          </Text>
        </View>
      </View>

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
