import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function CherryIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Stems */}
      <Path d="M32 8 C28 16, 24 24, 22 34" stroke="#4E342E" strokeWidth="2" strokeLinecap="round" />
      <Path d="M32 8 C36 16, 40 24, 42 34" stroke="#4E342E" strokeWidth="2" strokeLinecap="round" />
      {/* Leaf */}
      <Ellipse cx="32" cy="10" rx="6" ry="3" fill="#4CAF50" transform="rotate(10 32 10)" />
      {/* Left cherry */}
      <Circle cx="22" cy="44" r="12" fill="#C62828" />
      <Ellipse cx="18" cy="40" rx="3" ry="4" fill="#E53935" opacity={0.5} />
      {/* Right cherry */}
      <Circle cx="42" cy="44" r="12" fill="#D32F2F" />
      <Ellipse cx="38" cy="40" rx="3" ry="4" fill="#EF5350" opacity={0.5} />
    </Svg>
  );
}
