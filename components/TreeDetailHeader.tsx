import { View, Text } from "react-native";

import { FruitIcon } from "@/components/FruitIcon";
import type { Tree } from "@/lib/types";
import { AGE_BRACKET_LABELS } from "@/lib/types";
import {
  SCIENTIFIC_NAME_MAP,
  FRUIT_CATEGORY_MAP,
} from "@/lib/fruit-tree-data";

interface TreeDetailHeaderProps {
  tree: Tree;
}

export function TreeDetailHeader({ tree }: TreeDetailHeaderProps) {
  const scientificName = SCIENTIFIC_NAME_MAP[tree.type];
  const category = FRUIT_CATEGORY_MAP[tree.type];
  const plantedYear = tree.plantedOn
    ? new Date(tree.plantedOn).getFullYear()
    : null;
  const currentYear = new Date().getFullYear();
  const age = plantedYear !== null ? currentYear - plantedYear : null;
  const ageDisplay =
    age !== null
      ? `${age} years old`
      : tree.ageBracket
        ? AGE_BRACKET_LABELS[tree.ageBracket]
        : null;

  return (
    <View className="items-center pb-4">
      <FruitIcon type={tree.type} size={72} />

      {/* Row 1: Tree name */}
      <Text className="mt-3 text-center text-2xl font-bold text-gray-900">
        {tree.name}
      </Text>

      {/* Row 2: Scientific name */}
      <Text className="mt-2 text-center text-sm text-gray-500">
        Scientific Name:{" "}
        <Text className="italic">{scientificName}</Text>
      </Text>

      {/* Row 3: Age */}
      {ageDisplay ? (
        <Text className="mt-1 text-center text-sm text-gray-500">
          Age: {ageDisplay}
        </Text>
      ) : null}

      {/* Row 4: Fruit category */}
      <Text className="mt-1 text-center text-sm text-gray-500">
        Fruit category: {category}
      </Text>

      {/* Description */}
      {tree.description ? (
        <Text className="mt-4 text-center text-sm leading-5 text-gray-600">
          {tree.description}
        </Text>
      ) : null}
    </View>
  );
}
