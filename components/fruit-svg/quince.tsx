import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function QuinceIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - lumpy pear/apple hybrid shape */}
      <Path
        d="M32 14 C24 14, 18 22, 18 34 C18 46, 24 54, 32 54 C40 54, 46 46, 46 34 C46 22, 40 14, 32 14Z"
        fill="#FDD835"
      />
      {/* Fuzz texture */}
      <Ellipse cx="32" cy="34" rx="12" ry="16" fill="#FFF176" opacity={0.2} />
      {/* Highlight */}
      <Ellipse cx="24" cy="28" rx="5" ry="6" fill="#FFEE58" opacity={0.5} />
      {/* Green tinge near stem */}
      <Ellipse cx="30" cy="18" rx="4" ry="4" fill="#AED581" opacity={0.3} />
      {/* Stem */}
      <Path d="M32 14 C32 10, 33 7, 34 5" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="8" rx="5" ry="2.5" fill="#66BB6A" transform="rotate(-15 37 8)" />
      {/* Bottom navel */}
      <Circle cx="32" cy="53" r="2" fill="#F9A825" opacity={0.5} />
    </Svg>
  );
}
