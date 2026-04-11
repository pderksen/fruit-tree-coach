import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function PomegranateIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Circle cx="32" cy="36" r="18" fill="#C62828" />
      {/* Highlight */}
      <Ellipse cx="24" cy="28" rx="5" ry="7" fill="#E53935" opacity={0.5} />
      {/* Crown */}
      <Path d="M26 16 C28 12, 26 8, 28 8" stroke="#BF360C" strokeWidth="2" strokeLinecap="round" />
      <Path d="M32 14 C32 10, 32 6, 32 6" stroke="#BF360C" strokeWidth="2" strokeLinecap="round" />
      <Path d="M38 16 C36 12, 38 8, 36 8" stroke="#BF360C" strokeWidth="2" strokeLinecap="round" />
      {/* Crown base */}
      <Ellipse cx="32" cy="18" rx="8" ry="3" fill="#D84315" />
      {/* Subtle darker region */}
      <Ellipse cx="36" cy="44" rx="8" ry="8" fill="#B71C1C" opacity={0.3} />
    </Svg>
  );
}
