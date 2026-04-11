import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function FigIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - teardrop shape */}
      <Path
        d="M32 12 C26 12, 18 22, 18 38 C18 50, 24 56, 32 56 C40 56, 46 50, 46 38 C46 22, 38 12, 32 12Z"
        fill="#7B1FA2"
      />
      {/* Highlight */}
      <Ellipse cx="26" cy="32" rx="5" ry="8" fill="#9C27B0" opacity={0.4} />
      {/* Stem */}
      <Path d="M32 12 C32 8, 33 6, 34 5" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bottom opening */}
      <Ellipse cx="32" cy="55" rx="3" ry="1.5" fill="#4A148C" />
      {/* Subtle stripes */}
      <Path d="M26 20 C26 34, 26 48, 28 54" stroke="#9C27B0" strokeWidth="1" opacity={0.3} />
      <Path d="M38 20 C38 34, 38 48, 36 54" stroke="#9C27B0" strokeWidth="1" opacity={0.3} />
    </Svg>
  );
}
