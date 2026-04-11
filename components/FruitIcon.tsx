import { FRUIT_SVG_MAP } from "@/components/fruit-svg";
import type { FruitTreeType } from "@/lib/types";

interface FruitIconProps {
  type: FruitTreeType;
  /** Icon size in px (default 24) */
  size?: number;
}

/**
 * Renders the SVG fruit icon for a given tree type.
 * All 34 fruit types have dedicated SVG illustrations.
 */
export function FruitIcon({ type, size = 24 }: FruitIconProps) {
  const SvgIcon = FRUIT_SVG_MAP[type];
  return <SvgIcon size={size} />;
}
