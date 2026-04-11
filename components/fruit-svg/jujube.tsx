import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function JujubeIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - small oval */}
      <Ellipse cx="32" cy="36" rx="13" ry="16" fill="#C62828" />
      {/* Highlight */}
      <Ellipse cx="26" cy="30" rx="4" ry="6" fill="#E53935" opacity={0.5} />
      {/* Darker region */}
      <Ellipse cx="36" cy="44" rx="6" ry="8" fill="#B71C1C" opacity={0.3} />
      {/* Stem */}
      <Path d="M32 20 C32 16, 33 13, 34 10" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="13" rx="5" ry="2" fill="#66BB6A" transform="rotate(-20 37 13)" />
      {/* Small leaf */}
      <Ellipse cx="29" cy="14" rx="3.5" ry="1.5" fill="#4CAF50" transform="rotate(20 29 14)" />
    </Svg>
  );
}
