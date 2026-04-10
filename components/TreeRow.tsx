import { Ionicons } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";

import { FruitIcon } from "@/components/FruitIcon";
import type { Tree } from "@/lib/types";

interface TreeRowProps {
  tree: Tree;
  onPress: () => void;
}

export function TreeRow({ tree, onPress }: TreeRowProps) {
  return (
    <Pressable
      className="mb-3 flex-row items-center justify-between rounded-2xl bg-white p-4"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-3">
        <FruitIcon type={tree.type} size={32} />
        <View>
          <Text className="text-base font-semibold text-gray-900">
            {tree.name}
          </Text>
          <Text className="mt-0.5 text-sm text-gray-500">
            {tree.type} · {tree.zipCode}
          </Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
    </Pressable>
  );
}
