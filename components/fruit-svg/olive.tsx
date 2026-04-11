import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function OliveIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - small elongated oval */}
      <Ellipse cx="32" cy="36" rx="11" ry="15" fill="#689F38" />
      {/* Darker side */}
      <Ellipse cx="36" cy="40" rx="6" ry="10" fill="#33691E" opacity={0.3} />
      {/* Highlight */}
      <Ellipse cx="27" cy="30" rx="4" ry="5" fill="#8BC34A" opacity={0.5} />
      {/* Stem */}
      <Path d="M32 21 C32 16, 33 13, 34 10" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="13" rx="6" ry="2" fill="#558B2F" transform="rotate(-10 37 13)" />
      {/* Second leaf */}
      <Ellipse cx="28" cy="14" rx="5" ry="1.5" fill="#689F38" transform="rotate(15 28 14)" />
    </Svg>
  );
}
