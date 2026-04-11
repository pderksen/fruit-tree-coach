import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function GuavaIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Ellipse cx="32" cy="36" rx="17" ry="18" fill="#A5D6A7" />
      {/* Inner flesh peek */}
      <Ellipse cx="32" cy="40" rx="8" ry="8" fill="#F48FB1" opacity={0.4} />
      {/* Seeds hint */}
      <Circle cx="30" cy="40" r="1" fill="#C62828" opacity={0.5} />
      <Circle cx="34" cy="42" r="1" fill="#C62828" opacity={0.5} />
      <Circle cx="32" cy="38" r="1" fill="#C62828" opacity={0.5} />
      {/* Highlight */}
      <Ellipse cx="25" cy="30" rx="5" ry="6" fill="#C8E6C9" opacity={0.5} />
      {/* Stem */}
      <Path d="M32 18 C32 14, 33 11, 34 9" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="12" rx="5" ry="2.5" fill="#66BB6A" transform="rotate(-15 37 12)" />
    </Svg>
  );
}
