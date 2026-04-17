import { Ionicons } from "@expo/vector-icons";

type IconCategory = "tip" | "pruning-tool" | "tool" | "fertilizer" | "pest-control" | "other";

const CATEGORY_ICONS: Record<IconCategory, keyof typeof Ionicons.glyphMap> = {
  tip: "leaf",
  "pruning-tool": "cut-outline",
  tool: "build-outline",
  fertilizer: "nutrition-outline",
  "pest-control": "bug-outline",
  other: "leaf-outline",
};

interface CategoryIconProps {
  category: IconCategory;
  size?: number;
  color?: string;
}

export function CategoryIcon({
  category,
  size = 16,
  color = "#15803d",
}: CategoryIconProps) {
  const icon = CATEGORY_ICONS[category] ?? "leaf-outline";
  return <Ionicons name={icon} size={size} color={color} />;
}
