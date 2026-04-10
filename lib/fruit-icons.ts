/**
 * Fruit icon map — maps FruitTreeType to extracted icon images.
 *
 * 15 types have icons from the master sheet (MAIN fruit icons.png).
 * Remaining types fall back to emoji via the FruitIcon component.
 *
 * TODO: Replace placeholder comments with require() calls once
 * individual PNGs are extracted from the master sheet into
 * assets/images/fruit-icons/.
 */

import type { FruitTreeType } from "@/lib/types";
import type { ImageSourcePropType } from "react-native";

/**
 * Types with icons on the master sheet (MAIN fruit icons.png):
 *   Apple, Orange, Peach, Plum, Fig, Lime, Apricot,
 *   Lemon, Pomegranate, Pear, Cherry, Grapefruit, Kiwi, Passion Fruit
 *
 * Skipped: green apple (row 2 col 1), duplicate peach (row 4 col 1)
 */
export const FRUIT_ICON_MAP: Partial<
  Record<FruitTreeType, ImageSourcePropType>
> = {
  // Uncomment each line after dropping the corresponding PNG into
  // assets/images/fruit-icons/
  // Apple: require("@/assets/images/fruit-icons/apple.png"),
  // Orange: require("@/assets/images/fruit-icons/orange.png"),
  // Peach: require("@/assets/images/fruit-icons/peach.png"),
  // Plum: require("@/assets/images/fruit-icons/plum.png"),
  // Fig: require("@/assets/images/fruit-icons/fig.png"),
  // Lime: require("@/assets/images/fruit-icons/lime.png"),
  // Apricot: require("@/assets/images/fruit-icons/apricot.png"),
  // Lemon: require("@/assets/images/fruit-icons/lemon.png"),
  // Pomegranate: require("@/assets/images/fruit-icons/pomegranate.png"),
  // Pear: require("@/assets/images/fruit-icons/pear.png"),
  // Cherry: require("@/assets/images/fruit-icons/cherry.png"),
  // Grapefruit: require("@/assets/images/fruit-icons/grapefruit.png"),
  // Kiwi: require("@/assets/images/fruit-icons/kiwi.png"),
  // "Passion Fruit": require("@/assets/images/fruit-icons/passion-fruit.png"),
};
