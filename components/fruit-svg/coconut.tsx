import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function CoconutIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Shell */}
      <Circle cx="32" cy="36" r="20" fill="#6D4C41" />
      {/* Husk texture */}
      <Ellipse cx="32" cy="36" rx="18" ry="18" fill="#5D4037" />
      {/* Eyes */}
      <Circle cx="26" cy="32" r="3" fill="#3E2723" />
      <Circle cx="38" cy="32" r="3" fill="#3E2723" />
      <Circle cx="32" cy="40" r="2.5" fill="#3E2723" />
      {/* Top fiber */}
      <Path d="M24 18 C28 14, 36 14, 40 18" stroke="#8D6E63" strokeWidth="3" strokeLinecap="round" />
      {/* Highlight */}
      <Ellipse cx="26" cy="26" rx="4" ry="5" fill="#8D6E63" opacity={0.4} />
    </Svg>
  );
}
