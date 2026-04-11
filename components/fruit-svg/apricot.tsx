import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function ApricotIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Ellipse cx="32" cy="36" rx="16" ry="18" fill="#FFB74D" />
      {/* Blush */}
      <Ellipse cx="26" cy="34" rx="8" ry="10" fill="#FF8A65" opacity={0.5} />
      {/* Crease */}
      <Path d="M32 20 C32 36, 31 50, 32 54" stroke="#E65100" strokeWidth="1.5" opacity={0.4} />
      {/* Stem */}
      <Path d="M32 18 C32 14, 33 11, 34 9" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="12" rx="5" ry="2.5" fill="#66BB6A" transform="rotate(-15 37 12)" />
    </Svg>
  );
}
