import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function PawpawIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - oblong/kidney shape */}
      <Ellipse cx="32" cy="36" rx="12" ry="18" fill="#8BC34A" />
      {/* Yellowing */}
      <Ellipse cx="34" cy="42" rx="8" ry="10" fill="#CDDC39" opacity={0.3} />
      {/* Brown spots (ripe) */}
      <Ellipse cx="28" cy="34" rx="2" ry="3" fill="#5D4037" opacity={0.2} />
      <Ellipse cx="34" cy="30" rx="1.5" ry="2" fill="#5D4037" opacity={0.2} />
      {/* Highlight */}
      <Ellipse cx="28" cy="28" rx="4" ry="6" fill="#AED581" opacity={0.5} />
      {/* Stem */}
      <Path d="M32 18 C32 14, 33 11, 34 9" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="11" rx="5" ry="2" fill="#558B2F" transform="rotate(-15 37 11)" />
    </Svg>
  );
}
