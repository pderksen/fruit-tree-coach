import Svg, { Circle, Ellipse } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function LimeIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Circle cx="32" cy="34" r="18" fill="#7CB342" />
      {/* Highlight */}
      <Ellipse cx="25" cy="28" rx="5" ry="7" fill="#9CCC65" opacity={0.5} />
      {/* Subtle texture */}
      <Circle cx="32" cy="34" r="15" fill="none" stroke="#558B2F" strokeWidth="0.8" opacity={0.3} />
      {/* Stem nub */}
      <Circle cx="32" cy="16" r="2.5" fill="#689F38" />
      {/* Leaf */}
      <Ellipse cx="37" cy="13" rx="5" ry="2" fill="#4CAF50" transform="rotate(-20 37 13)" />
      {/* Navel */}
      <Circle cx="32" cy="51" r="1.5" fill="#558B2F" opacity={0.5} />
    </Svg>
  );
}
