import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function KumquatIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - small elongated oval */}
      <Ellipse cx="32" cy="36" rx="10" ry="16" fill="#FF9800" />
      {/* Highlight */}
      <Ellipse cx="28" cy="30" rx="4" ry="6" fill="#FFB74D" opacity={0.5} />
      {/* Subtle texture */}
      <Ellipse cx="32" cy="36" rx="8" ry="14" fill="none" stroke="#F57C00" strokeWidth="0.8" opacity={0.3} />
      {/* Stem */}
      <Path d="M32 20 C32 16, 32 14, 33 12" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="36" cy="14" rx="5" ry="2" fill="#4CAF50" transform="rotate(-15 36 14)" />
      {/* Second smaller leaf */}
      <Ellipse cx="29" cy="15" rx="3.5" ry="1.5" fill="#66BB6A" transform="rotate(25 29 15)" />
    </Svg>
  );
}
