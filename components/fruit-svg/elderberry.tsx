import Svg, { Circle, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function ElderberryIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Stem */}
      <Path d="M32 6 C32 10, 30 14, 28 18" stroke="#4E342E" strokeWidth="2" strokeLinecap="round" />
      <Path d="M32 6 C34 10, 36 14, 38 18" stroke="#4E342E" strokeWidth="2" strokeLinecap="round" />
      <Path d="M28 18 C26 22, 24 26, 24 28" stroke="#4E342E" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M38 18 C40 22, 40 26, 40 28" stroke="#4E342E" strokeWidth="1.5" strokeLinecap="round" />
      {/* Berry cluster */}
      <Circle cx="24" cy="32" r="5" fill="#311B92" />
      <Circle cx="32" cy="28" r="5" fill="#4527A0" />
      <Circle cx="40" cy="32" r="5" fill="#311B92" />
      <Circle cx="28" cy="40" r="5" fill="#4527A0" />
      <Circle cx="36" cy="40" r="5" fill="#311B92" />
      <Circle cx="32" cy="48" r="5" fill="#4527A0" />
      <Circle cx="24" cy="44" r="4" fill="#311B92" />
      <Circle cx="40" cy="44" r="4" fill="#4527A0" />
      {/* Highlights */}
      <Circle cx="23" cy="30" r="1.5" fill="#7C4DFF" opacity={0.4} />
      <Circle cx="31" cy="26" r="1.5" fill="#7C4DFF" opacity={0.4} />
      <Circle cx="39" cy="30" r="1.5" fill="#7C4DFF" opacity={0.4} />
    </Svg>
  );
}
