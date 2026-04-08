import { View, Text, Pressable } from "react-native";

import { TREE_EMOJI } from "@/lib/types";
import type { FruitTreeType } from "@/lib/types";

const DEFAULT_TYPES: FruitTreeType[] = ["Apple", "Lemon", "Peach", "Fig"];

interface FruitTypeGridProps {
  selected: FruitTreeType | null;
  onSelect: (type: FruitTreeType) => void;
  types?: FruitTreeType[];
}

export function FruitTypeGrid({
  selected,
  onSelect,
  types = DEFAULT_TYPES,
}: FruitTypeGridProps) {
  return (
    <View className="flex-row flex-wrap justify-between gap-y-3">
      {types.map((type) => {
        const isSelected = selected === type;
        const emoji = TREE_EMOJI[type] ?? "\uD83C\uDF33";

        return (
          <Pressable
            key={type}
            className={`w-[48%] items-center rounded-2xl bg-white py-5 ${
              isSelected
                ? "border-2 border-brand-600"
                : "border-2 border-transparent"
            }`}
            onPress={() => onSelect(type)}
          >
            <Text className="text-4xl">{emoji}</Text>
            <Text className="mt-2 text-sm font-semibold text-gray-800">
              {type}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
