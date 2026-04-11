import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function PeachIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Ellipse cx="32" cy="36" rx="18" ry="18" fill="#FFAB91" />
      {/* Red blush */}
      <Ellipse cx="26" cy="30" rx="10" ry="12" fill="#E57373" opacity={0.4} />
      {/* Crease */}
      <Path d="M32 18 C31 28, 31 44, 32 54" stroke="#D84315" strokeWidth="1.5" opacity={0.4} />
      {/* Fuzz highlight */}
      <Ellipse cx="24" cy="28" rx="5" ry="7" fill="#FFCCBC" opacity={0.5} />
      {/* Stem */}
      <Path d="M32 18 C32 14, 33 10, 35 8" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="38" cy="11" rx="6" ry="2.5" fill="#4CAF50" transform="rotate(-15 38 11)" />
    </Svg>
  );
}
