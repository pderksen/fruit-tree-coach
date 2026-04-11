import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function GooseberryIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Circle cx="32" cy="36" r="16" fill="#8BC34A" />
      {/* Stripes */}
      <Path d="M22 28 C26 36, 26 44, 24 50" stroke="#689F38" strokeWidth="1.5" opacity={0.5} />
      <Path d="M28 22 C30 34, 30 46, 28 52" stroke="#689F38" strokeWidth="1.5" opacity={0.5} />
      <Path d="M36 22 C34 34, 34 46, 36 52" stroke="#689F38" strokeWidth="1.5" opacity={0.5} />
      <Path d="M42 28 C38 36, 38 44, 40 50" stroke="#689F38" strokeWidth="1.5" opacity={0.5} />
      {/* Highlight */}
      <Ellipse cx="26" cy="30" rx="4" ry="5" fill="#AED581" opacity={0.5} />
      {/* Stem */}
      <Path d="M32 20 C32 16, 33 14, 34 12" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Calyx */}
      <Path d="M30 52 C30 54, 32 56, 34 54" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}
