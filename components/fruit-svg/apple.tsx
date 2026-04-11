import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function AppleIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Ellipse cx="32" cy="38" rx="18" ry="20" fill="#E53935" />
      {/* Highlight */}
      <Ellipse cx="24" cy="30" rx="6" ry="8" fill="#EF5350" opacity={0.6} />
      {/* Stem */}
      <Path d="M32 18 C32 12, 34 10, 36 8" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="38" cy="12" rx="5" ry="3" fill="#4CAF50" transform="rotate(-20 38 12)" />
      {/* Bottom indent */}
      <Circle cx="32" cy="57" r="2" fill="#C62828" />
    </Svg>
  );
}
