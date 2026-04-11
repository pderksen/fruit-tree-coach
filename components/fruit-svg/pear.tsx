import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function PearIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - pear shape */}
      <Path
        d="M32 10 C26 10, 22 16, 22 22 C22 28, 18 34, 18 42 C18 52, 24 58, 32 58 C40 58, 46 52, 46 42 C46 34, 42 28, 42 22 C42 16, 38 10, 32 10Z"
        fill="#C0CA33"
      />
      {/* Blush */}
      <Ellipse cx="38" cy="44" rx="6" ry="8" fill="#FFAB00" opacity={0.3} />
      {/* Highlight */}
      <Ellipse cx="26" cy="30" rx="4" ry="8" fill="#D4E157" opacity={0.5} />
      {/* Stem */}
      <Path d="M32 10 C32 6, 34 4, 36 3" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="38" cy="6" rx="5" ry="2.5" fill="#4CAF50" transform="rotate(-15 38 6)" />
      {/* Bottom */}
      <Ellipse cx="32" cy="57" rx="2" ry="1" fill="#9E9D24" opacity={0.5} />
    </Svg>
  );
}
