import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function LemonIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - oval with pointed ends */}
      <Path
        d="M14 34 C14 24, 22 16, 32 16 C42 16, 50 24, 50 34 C50 44, 42 52, 32 52 C22 52, 14 44, 14 34Z"
        fill="#FDD835"
      />
      {/* Pointed tips */}
      <Path d="M14 34 C10 33, 8 34, 9 35" fill="#FDD835" />
      <Path d="M50 34 C54 33, 56 34, 55 35" fill="#FDD835" />
      {/* Highlight */}
      <Ellipse cx="26" cy="28" rx="6" ry="7" fill="#FFEE58" opacity={0.5} />
      {/* Texture dots */}
      <Ellipse cx="32" cy="34" rx="16" ry="16" fill="none" stroke="#F9A825" strokeWidth="0.8" opacity={0.3} />
      {/* Stem nub */}
      <Path d="M32 16 C32 14, 33 12, 34 11" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="12" rx="5" ry="2.5" fill="#4CAF50" transform="rotate(-10 37 12)" />
    </Svg>
  );
}
