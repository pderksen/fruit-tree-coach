import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function MandarinIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - small flattened citrus */}
      <Ellipse cx="32" cy="38" rx="20" ry="17" fill="#FB8C00" />
      {/* Highlight */}
      <Ellipse cx="24" cy="32" rx="6" ry="7" fill="#FFB74D" opacity={0.55} />
      {/* Section lines */}
      <Path d="M32 22 C32 38, 32 54, 32 54" stroke="#E65100" strokeWidth="0.8" opacity={0.3} />
      <Path d="M14 38 C26 36, 38 36, 50 38" stroke="#E65100" strokeWidth="0.8" opacity={0.3} />
      {/* Texture ring */}
      <Ellipse cx="32" cy="38" rx="17" ry="14" fill="none" stroke="#E65100" strokeWidth="0.6" opacity={0.2} />
      {/* Stem */}
      <Path d="M32 22 C32 17, 32 14, 32 11" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="38" cy="11" rx="6" ry="2.5" fill="#4CAF50" transform="rotate(-20 38 11)" />
      {/* Second leaf */}
      <Ellipse cx="26" cy="13" rx="4" ry="2" fill="#66BB6A" transform="rotate(20 26 13)" />
    </Svg>
  );
}
