import { Image, Text, View } from "react-native";

import { FRUIT_ICON_MAP } from "@/lib/fruit-icons";
import { TREE_EMOJI } from "@/lib/fruit-tree-data";
import type { FruitTreeType } from "@/lib/types";

interface FruitIconProps {
  type: FruitTreeType;
  /** Icon size in px (default 24) */
  size?: number;
}

/**
 * Renders the extracted fruit icon image when available,
 * otherwise falls back to the emoji from TREE_EMOJI in a
 * styled circular container.
 */
export function FruitIcon({ type, size = 24 }: FruitIconProps) {
  const source = FRUIT_ICON_MAP[type];

  if (source) {
    return (
      <Image
        source={source}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    );
  }

  const emoji = TREE_EMOJI[type] ?? "\uD83C\uDF33";
  // Scale font relative to container so emoji fills the space
  const fontSize = size * 0.7;

  return (
    <View
      className="items-center justify-center rounded-xl bg-cream-100"
      style={{ width: size, height: size }}
    >
      <Text style={{ fontSize, lineHeight: fontSize * 1.2 }}>{emoji}</Text>
    </View>
  );
}
