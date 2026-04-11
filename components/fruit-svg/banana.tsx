import Svg, { Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function BananaIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Path
        d="M18 50 C14 44, 12 32, 18 22 C24 12, 36 8, 48 12 C44 14, 34 16, 26 26 C18 36, 20 46, 22 52Z"
        fill="#FFD54F"
      />
      {/* Shadow edge */}
      <Path
        d="M22 52 C20 46, 18 36, 26 26 C30 20, 36 17, 42 15"
        stroke="#F9A825"
        strokeWidth="2"
        fill="none"
        opacity={0.5}
      />
      {/* Stem tip */}
      <Path d="M48 12 C50 10, 50 8, 48 7" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bottom tip */}
      <Path d="M18 50 C16 52, 17 54, 18 53" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
