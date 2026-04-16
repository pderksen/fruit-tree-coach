import { useMemo } from "react";
import { View, Text, Pressable } from "react-native";

import { FruitIcon } from "@/components/FruitIcon";
import { FRUIT_TREE_TYPES, TREE_CATEGORY_MAP } from "@/lib/fruit-tree-data";
import type { TreeCategory } from "@/lib/fruit-tree-data";
import type { FruitTreeType } from "@/lib/types";

const CATEGORY_ORDER: TreeCategory[] = [
  "Citrus",
  "Stone Fruit",
  "Pome Fruit",
  "Tropical / Subtropical",
  "Other",
];

interface FruitTypeGridProps {
  selected: FruitTreeType | null;
  onSelect: (type: FruitTreeType) => void;
  zone?: string;
  onRequestTree?: () => void;
}

export function FruitTypeGrid({ selected, onSelect, onRequestTree }: FruitTypeGridProps) {
  const grouped = useMemo(() => {
    const map = new Map<TreeCategory, FruitTreeType[]>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const t of FRUIT_TREE_TYPES) {
      const cat = TREE_CATEGORY_MAP[t];
      map.get(cat)!.push(t);
    }
    return Array.from(map.entries());
  }, []);

  return (
    <View>
      {grouped.map(([category, types]) => (
        <View key={category} className="mb-4">
          <Text className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
            {category}
          </Text>
          <TypeRow types={types} selected={selected} onSelect={onSelect} />
        </View>
      ))}

      {onRequestTree && (
        <Pressable
          className="mt-2 flex-row items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-transparent px-4 py-4"
          onPress={onRequestTree}
        >
          <Text className="text-sm font-medium text-gray-600">
            Don&apos;t see your tree?{" "}
            <Text className="font-semibold text-brand-700">Request it</Text>
          </Text>
        </Pressable>
      )}
    </View>
  );
}

function TypeRow({
  types,
  selected,
  onSelect,
}: {
  types: FruitTreeType[];
  selected: FruitTreeType | null;
  onSelect: (type: FruitTreeType) => void;
}) {
  return (
    <View className="flex-row flex-wrap" style={{ gap: 8 }}>
      {types.map((type) => {
        const isSelected = selected === type;
        return (
          <Pressable
            key={type}
            className={`items-center rounded-2xl bg-white py-3 ${
              isSelected
                ? "border-2 border-brand-600"
                : "border-2 border-gray-200"
            }`}
            style={{ flexBasis: "22%", flexGrow: 1, maxWidth: "24%" }}
            onPress={() => onSelect(type)}
          >
            <FruitIcon type={type} size={32} />
            <Text
              className="mt-1 text-center text-xs font-semibold text-gray-800"
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {type}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
