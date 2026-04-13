import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function DateIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Cluster of dates - elongated brown ovals */}
      {/* Back row */}
      <Ellipse cx="22" cy="42" rx="6" ry="11" fill="#6D4C2F" />
      <Ellipse cx="42" cy="42" rx="6" ry="11" fill="#6D4C2F" />
      {/* Front center date - largest */}
      <Ellipse cx="32" cy="44" rx="7" ry="13" fill="#8B5A33" />
      {/* Highlights */}
      <Ellipse cx="30" cy="38" rx="2" ry="5" fill="#A67341" opacity={0.6} />
      <Ellipse cx="20" cy="38" rx="1.5" ry="4" fill="#9C6B3A" opacity={0.5} />
      <Ellipse cx="40" cy="38" rx="1.5" ry="4" fill="#9C6B3A" opacity={0.5} />
      {/* Darker shading on right side */}
      <Ellipse cx="34" cy="46" rx="3" ry="9" fill="#5D3F26" opacity={0.35} />
      {/* Stem joining the cluster */}
      <Path d="M32 31 C32 26, 32 22, 32 18" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      {/* Palm frond - left */}
      <Path d="M32 18 C25 14, 18 12, 12 10" stroke="#558B2F" strokeWidth="2" strokeLinecap="round" fill="none" />
      <Path d="M32 18 C26 16, 20 16, 14 16" stroke="#689F38" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity={0.8} />
      {/* Palm frond - right */}
      <Path d="M32 18 C39 14, 46 12, 52 10" stroke="#558B2F" strokeWidth="2" strokeLinecap="round" fill="none" />
      <Path d="M32 18 C38 16, 44 16, 50 16" stroke="#689F38" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity={0.8} />
      {/* Center frond */}
      <Path d="M32 18 C32 14, 32 10, 32 7" stroke="#558B2F" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
