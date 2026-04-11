import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function PapayaIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - large pear shape */}
      <Path
        d="M32 8 C24 8, 18 18, 18 34 C18 50, 24 58, 32 58 C40 58, 46 50, 46 34 C46 18, 40 8, 32 8Z"
        fill="#FFB300"
      />
      {/* Orange flesh inside hint */}
      <Ellipse cx="32" cy="40" rx="8" ry="12" fill="#FF7043" opacity={0.3} />
      {/* Seeds cluster */}
      <Circle cx="30" cy="38" r="1.5" fill="#424242" opacity={0.5} />
      <Circle cx="34" cy="40" r="1.5" fill="#424242" opacity={0.5} />
      <Circle cx="32" cy="44" r="1.5" fill="#424242" opacity={0.5} />
      {/* Green streaks at top */}
      <Ellipse cx="28" cy="14" rx="3" ry="5" fill="#66BB6A" opacity={0.4} />
      <Ellipse cx="36" cy="14" rx="3" ry="5" fill="#66BB6A" opacity={0.4} />
      {/* Highlight */}
      <Ellipse cx="26" cy="28" rx="4" ry="8" fill="#FFCA28" opacity={0.4} />
      {/* Stem */}
      <Path d="M32 8 C32 5, 33 4, 34 3" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
