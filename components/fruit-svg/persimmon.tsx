import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function PersimmonIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - round, slightly flat */}
      <Ellipse cx="32" cy="38" rx="18" ry="16" fill="#FF6D00" />
      {/* Highlight */}
      <Ellipse cx="24" cy="32" rx="6" ry="7" fill="#FF9100" opacity={0.5} />
      {/* Subtle section lines */}
      <Path d="M20 38 C28 34, 36 34, 44 38" stroke="#E65100" strokeWidth="1" opacity={0.3} />
      <Path d="M32 22 C32 34, 32 46, 32 54" stroke="#E65100" strokeWidth="1" opacity={0.2} />
      {/* Calyx - 4 leaves on top */}
      <Path d="M26 22 C28 18, 24 16, 22 20" fill="#4CAF50" />
      <Path d="M32 20 C32 16, 36 15, 36 19" fill="#388E3C" />
      <Path d="M38 22 C36 18, 40 16, 42 20" fill="#4CAF50" />
      <Path d="M32 20 C32 16, 28 15, 28 19" fill="#388E3C" />
      {/* Stem */}
      <Path d="M32 18 C32 14, 32 12, 32 10" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
    </Svg>
  );
}
