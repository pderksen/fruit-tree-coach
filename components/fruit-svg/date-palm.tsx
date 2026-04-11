import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function DatePalmIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Cluster stem */}
      <Path d="M32 8 C32 12, 30 14, 28 16" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      <Path d="M32 8 C32 12, 34 14, 36 16" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      <Path d="M32 8 C32 14, 32 16, 32 18" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Dates - cluster of oval fruits */}
      <Ellipse cx="26" cy="24" rx="5" ry="7" fill="#8D6E63" />
      <Ellipse cx="32" cy="26" rx="5" ry="7" fill="#795548" />
      <Ellipse cx="38" cy="24" rx="5" ry="7" fill="#8D6E63" />
      <Ellipse cx="28" cy="36" rx="5" ry="7" fill="#6D4C41" />
      <Ellipse cx="36" cy="36" rx="5" ry="7" fill="#795548" />
      <Ellipse cx="32" cy="46" rx="5" ry="7" fill="#6D4C41" />
      {/* Highlights */}
      <Ellipse cx="25" cy="22" rx="2" ry="3" fill="#A1887F" opacity={0.4} />
      <Ellipse cx="37" cy="22" rx="2" ry="3" fill="#A1887F" opacity={0.4} />
    </Svg>
  );
}
