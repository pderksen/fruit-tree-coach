import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function TangerineIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - slightly flattened orange */}
      <Ellipse cx="32" cy="36" rx="18" ry="16" fill="#FF6D00" />
      {/* Highlight */}
      <Ellipse cx="24" cy="30" rx="5" ry="6" fill="#FF9100" opacity={0.5} />
      {/* Section lines */}
      <Path d="M32 20 C32 36, 32 52, 32 52" stroke="#E65100" strokeWidth="0.8" opacity={0.3} />
      <Path d="M18 36 C28 34, 36 34, 46 36" stroke="#E65100" strokeWidth="0.8" opacity={0.3} />
      {/* Texture */}
      <Ellipse cx="32" cy="36" rx="15" ry="13" fill="none" stroke="#E65100" strokeWidth="0.6" opacity={0.2} />
      {/* Stem with leaf */}
      <Path d="M32 20 C32 16, 32 14, 32 12" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="12" rx="5" ry="2.5" fill="#4CAF50" transform="rotate(-20 37 12)" />
      {/* Second leaf */}
      <Ellipse cx="27" cy="13" rx="4" ry="2" fill="#66BB6A" transform="rotate(20 27 13)" />
    </Svg>
  );
}
