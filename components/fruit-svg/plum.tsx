import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function PlumIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Ellipse cx="32" cy="36" rx="16" ry="18" fill="#5E35B1" />
      {/* Highlight */}
      <Ellipse cx="24" cy="30" rx="5" ry="8" fill="#7E57C2" opacity={0.5} />
      {/* Crease */}
      <Path d="M32 18 C31 28, 31 44, 32 54" stroke="#4527A0" strokeWidth="1.5" opacity={0.4} />
      {/* Bloom/wax look */}
      <Ellipse cx="32" cy="36" rx="14" ry="16" fill="#B39DDB" opacity={0.1} />
      {/* Stem */}
      <Path d="M32 18 C32 14, 33 11, 35 9" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="38" cy="11" rx="5" ry="2.5" fill="#4CAF50" transform="rotate(-15 38 11)" />
    </Svg>
  );
}
