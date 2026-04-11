import Svg, { Circle, Ellipse } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function OrangeIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Circle cx="32" cy="34" r="20" fill="#FF9800" />
      {/* Highlight */}
      <Ellipse cx="24" cy="26" rx="6" ry="8" fill="#FFB74D" opacity={0.5} />
      {/* Texture */}
      <Circle cx="32" cy="34" r="17" fill="none" stroke="#F57C00" strokeWidth="0.8" opacity={0.3} />
      {/* Stem nub */}
      <Circle cx="32" cy="14" r="3" fill="#4CAF50" />
      {/* Leaf */}
      <Ellipse cx="38" cy="11" rx="6" ry="2.5" fill="#4CAF50" transform="rotate(-15 38 11)" />
      {/* Navel */}
      <Circle cx="32" cy="53" r="2" fill="#E65100" opacity={0.4} />
    </Svg>
  );
}
