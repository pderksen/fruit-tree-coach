import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function MangoIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - kidney/oval shape */}
      <Path
        d="M20 28 C16 36, 18 48, 28 54 C38 60, 48 52, 50 40 C52 28, 46 16, 36 14 C26 12, 24 20, 20 28Z"
        fill="#FF9800"
      />
      {/* Red blush */}
      <Ellipse cx="28" cy="24" rx="8" ry="10" fill="#E53935" opacity={0.3} />
      {/* Yellow highlight */}
      <Ellipse cx="38" cy="44" rx="6" ry="8" fill="#FFC107" opacity={0.4} />
      {/* Highlight */}
      <Ellipse cx="30" cy="30" rx="4" ry="6" fill="#FFB74D" opacity={0.4} />
      {/* Stem */}
      <Path d="M36 14 C38 10, 40 8, 42 7" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
