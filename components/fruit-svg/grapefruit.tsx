import Svg, { Circle, Ellipse } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function GrapefruitIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Circle cx="32" cy="34" r="20" fill="#FFAB91" />
      {/* Highlight */}
      <Ellipse cx="24" cy="28" rx="6" ry="8" fill="#FFCCBC" opacity={0.5} />
      {/* Subtle texture */}
      <Circle cx="32" cy="34" r="18" fill="none" stroke="#FF8A65" strokeWidth="1" opacity={0.3} />
      {/* Stem nub */}
      <Circle cx="32" cy="14" r="3" fill="#FFA726" />
      {/* Leaf */}
      <Ellipse cx="38" cy="12" rx="5" ry="2.5" fill="#4CAF50" transform="rotate(-20 38 12)" />
      {/* Navel */}
      <Circle cx="32" cy="53" r="2" fill="#E64A19" opacity={0.4} />
    </Svg>
  );
}
