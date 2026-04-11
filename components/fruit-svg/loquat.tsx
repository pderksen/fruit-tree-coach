import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function LoquatIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - slightly pear-shaped */}
      <Ellipse cx="32" cy="38" rx="14" ry="16" fill="#FFB300" />
      {/* Highlight */}
      <Ellipse cx="26" cy="32" rx="5" ry="6" fill="#FFCA28" opacity={0.5} />
      {/* Bottom calyx */}
      <Circle cx="32" cy="53" r="3" fill="#F57F17" opacity={0.5} />
      {/* Stem */}
      <Path d="M32 22 C32 16, 31 12, 30 9" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="34" cy="13" rx="6" ry="2.5" fill="#558B2F" transform="rotate(-10 34 13)" />
      {/* Spots */}
      <Circle cx="36" cy="42" r="1.5" fill="#FF8F00" opacity={0.4} />
      <Circle cx="28" cy="44" r="1" fill="#FF8F00" opacity={0.4} />
    </Svg>
  );
}
