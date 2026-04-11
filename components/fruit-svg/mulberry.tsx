import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function MulberryIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Stem */}
      <Path d="M32 10 C32 14, 32 16, 32 20" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Berry cluster - elongated */}
      <Circle cx="28" cy="24" r="4" fill="#6A1B9A" />
      <Circle cx="36" cy="24" r="4" fill="#7B1FA2" />
      <Circle cx="32" cy="28" r="4" fill="#6A1B9A" />
      <Circle cx="26" cy="32" r="4" fill="#7B1FA2" />
      <Circle cx="34" cy="32" r="4" fill="#6A1B9A" />
      <Circle cx="38" cy="30" r="3.5" fill="#7B1FA2" />
      <Circle cx="30" cy="36" r="4" fill="#4A148C" />
      <Circle cx="36" cy="36" r="3.5" fill="#6A1B9A" />
      <Circle cx="32" cy="42" r="4" fill="#4A148C" />
      <Circle cx="28" cy="40" r="3" fill="#6A1B9A" />
      {/* Highlights */}
      <Ellipse cx="27" cy="23" rx="1.5" ry="1.5" fill="#AB47BC" opacity={0.4} />
      <Ellipse cx="35" cy="23" rx="1.5" ry="1.5" fill="#AB47BC" opacity={0.4} />
      {/* Leaf */}
      <Ellipse cx="37" cy="12" rx="5" ry="2.5" fill="#4CAF50" transform="rotate(-20 37 12)" />
    </Svg>
  );
}
