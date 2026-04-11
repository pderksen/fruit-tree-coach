import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function CrabappleIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - smaller, rounder than regular apple */}
      <Circle cx="32" cy="38" r="16" fill="#F44336" />
      {/* Highlight */}
      <Ellipse cx="26" cy="32" rx="5" ry="6" fill="#EF5350" opacity={0.5} />
      {/* Darker bottom */}
      <Ellipse cx="32" cy="48" rx="10" ry="6" fill="#C62828" opacity={0.3} />
      {/* Stem */}
      <Path d="M32 22 C32 16, 33 12, 35 9" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="12" rx="4" ry="2" fill="#66BB6A" transform="rotate(-25 37 12)" />
    </Svg>
  );
}
