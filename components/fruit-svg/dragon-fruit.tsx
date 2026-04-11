import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function DragonFruitIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Ellipse cx="32" cy="36" rx="16" ry="20" fill="#E91E63" />
      {/* Scale leaves */}
      <Path d="M18 28 C14 24, 16 20, 20 22" fill="#4CAF50" />
      <Path d="M46 28 C50 24, 48 20, 44 22" fill="#4CAF50" />
      <Path d="M20 40 C14 38, 14 34, 18 34" fill="#66BB6A" />
      <Path d="M44 40 C50 38, 50 34, 46 34" fill="#66BB6A" />
      <Path d="M26 16 C24 10, 28 10, 28 14" fill="#4CAF50" />
      <Path d="M38 16 C40 10, 36 10, 36 14" fill="#4CAF50" />
      {/* Inner white dots pattern */}
      <Circle cx="28" cy="34" r="1.5" fill="#FFFFFF" opacity={0.6} />
      <Circle cx="36" cy="38" r="1.5" fill="#FFFFFF" opacity={0.6} />
      <Circle cx="32" cy="42" r="1.5" fill="#FFFFFF" opacity={0.6} />
      <Circle cx="28" cy="44" r="1" fill="#FFFFFF" opacity={0.4} />
      <Circle cx="36" cy="30" r="1" fill="#FFFFFF" opacity={0.4} />
      {/* Highlight */}
      <Ellipse cx="26" cy="30" rx="4" ry="6" fill="#F06292" opacity={0.4} />
    </Svg>
  );
}
