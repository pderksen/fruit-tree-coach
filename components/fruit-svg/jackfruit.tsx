import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function JackfruitIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - large oval */}
      <Ellipse cx="32" cy="34" rx="16" ry="22" fill="#FBC02D" />
      {/* Spiky texture bumps */}
      <Circle cx="24" cy="24" r="2.5" fill="#F9A825" />
      <Circle cx="32" cy="20" r="2.5" fill="#F9A825" />
      <Circle cx="40" cy="24" r="2.5" fill="#F9A825" />
      <Circle cx="22" cy="34" r="2.5" fill="#F9A825" />
      <Circle cx="30" cy="30" r="2.5" fill="#F9A825" />
      <Circle cx="38" cy="30" r="2.5" fill="#F9A825" />
      <Circle cx="26" cy="42" r="2.5" fill="#F9A825" />
      <Circle cx="34" cy="38" r="2.5" fill="#F9A825" />
      <Circle cx="42" cy="34" r="2.5" fill="#F9A825" />
      <Circle cx="30" cy="48" r="2.5" fill="#F9A825" />
      <Circle cx="38" cy="44" r="2.5" fill="#F9A825" />
      {/* Stem */}
      <Path d="M32 12 C32 8, 32 6, 33 4" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Highlight */}
      <Ellipse cx="26" cy="26" rx="4" ry="6" fill="#FDD835" opacity={0.4} />
    </Svg>
  );
}
