import { View, Text } from "react-native";

import { Badge } from "@/components/Badge";
import { FruitIcon } from "@/components/FruitIcon";
import type { Tree } from "@/lib/types";
import { SCIENTIFIC_NAME_MAP } from "@/lib/fruit-tree-data";

interface TreeDetailHeaderProps {
  tree: Tree;
}

export function TreeDetailHeader({ tree }: TreeDetailHeaderProps) {
  const scientificName = SCIENTIFIC_NAME_MAP[tree.type];
  const currentYear = new Date().getFullYear();
  const age = tree.plantedYear ? currentYear - tree.plantedYear : null;
  const ageLabel = age !== null ? `${age} years old` : null;

  return (
    <View className="items-center pb-4">
      <FruitIcon type={tree.type} size={72} />
      <Text className="mt-3 text-2xl font-bold text-gray-900">
        {tree.name}
      </Text>
      <View className="mt-3 flex-row gap-2">
        <Badge label={scientificName} variant="green" />
        {ageLabel ? <Badge label={ageLabel} variant="olive" /> : null}
      </View>
      {tree.description ? (
        <Text className="mt-4 text-center text-sm leading-5 text-gray-600">
          {tree.description}
        </Text>
      ) : null}
    </View>
  );
}
