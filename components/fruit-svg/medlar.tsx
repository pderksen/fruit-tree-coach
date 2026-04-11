import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function MedlarIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - round, slightly flattened */}
      <Ellipse cx="32" cy="36" rx="16" ry="14" fill="#A1887F" />
      {/* Highlight */}
      <Ellipse cx="26" cy="30" rx="5" ry="5" fill="#BCAAA4" opacity={0.5} />
      {/* Crown/calyx - open star shape */}
      <Path d="M26 48 C28 52, 30 54, 32 52" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M32 52 C34 54, 36 52, 38 48" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M24 46 C24 50, 26 52, 26 48" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
      <Path d="M40 46 C40 50, 38 52, 38 48" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
      {/* Stem */}
      <Path d="M32 22 C32 16, 33 13, 34 10" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="37" cy="13" rx="5" ry="2" fill="#66BB6A" transform="rotate(-15 37 13)" />
      {/* Russet spots */}
      <Circle cx="36" cy="38" r="2" fill="#795548" opacity={0.3} />
      <Circle cx="28" cy="40" r="1.5" fill="#795548" opacity={0.3} />
    </Svg>
  );
}
