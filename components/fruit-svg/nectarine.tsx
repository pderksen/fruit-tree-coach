import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function NectarineIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Ellipse cx="32" cy="36" rx="17" ry="18" fill="#FF7043" />
      {/* Red blush */}
      <Ellipse cx="26" cy="32" rx="9" ry="10" fill="#E53935" opacity={0.4} />
      {/* Yellow area */}
      <Ellipse cx="38" cy="42" rx="8" ry="8" fill="#FFC107" opacity={0.3} />
      {/* Crease */}
      <Path d="M32 18 C31 28, 31 44, 32 54" stroke="#D84315" strokeWidth="1.5" opacity={0.4} />
      {/* Highlight - smooth skin */}
      <Ellipse cx="26" cy="28" rx="5" ry="6" fill="#FF8A65" opacity={0.5} />
      {/* Stem */}
      <Path d="M32 18 C32 14, 33 11, 34 9" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="12" rx="5" ry="2.5" fill="#4CAF50" transform="rotate(-15 37 12)" />
    </Svg>
  );
}
