import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function TangeloIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - rounded with a distinctive neck (tangelo shape) */}
      <Ellipse cx="32" cy="38" rx="19" ry="17" fill="#F57C00" />
      {/* Neck/nipple at top - tangelo's signature */}
      <Path
        d="M27 22 C28 17, 36 17, 37 22 C37 24, 36 25, 32 25 C28 25, 27 24, 27 22 Z"
        fill="#F57C00"
      />
      {/* Highlight */}
      <Ellipse cx="24" cy="32" rx="6" ry="7" fill="#FFB74D" opacity={0.5} />
      {/* Section lines */}
      <Path d="M32 25 C32 38, 32 54, 32 54" stroke="#E65100" strokeWidth="0.8" opacity={0.3} />
      <Path d="M15 38 C26 36, 38 36, 49 38" stroke="#E65100" strokeWidth="0.8" opacity={0.3} />
      {/* Texture ring */}
      <Ellipse cx="32" cy="38" rx="16" ry="14" fill="none" stroke="#E65100" strokeWidth="0.6" opacity={0.2} />
      {/* Stem on top of neck */}
      <Path d="M32 17 C32 13, 32 11, 32 9" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="38" cy="9" rx="5.5" ry="2.5" fill="#4CAF50" transform="rotate(-20 38 9)" />
    </Svg>
  );
}
