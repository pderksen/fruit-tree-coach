import Svg, { Circle, Ellipse } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function PassionFruitIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <Ellipse cx="32" cy="34" rx="17" ry="16" fill="#7B1FA2" />
      {/* Wrinkled texture */}
      <Ellipse cx="32" cy="34" rx="14" ry="13" fill="none" stroke="#9C27B0" strokeWidth="1" opacity={0.4} />
      <Ellipse cx="32" cy="34" rx="10" ry="9" fill="none" stroke="#9C27B0" strokeWidth="0.8" opacity={0.3} />
      {/* Highlight */}
      <Ellipse cx="24" cy="28" rx="5" ry="6" fill="#AB47BC" opacity={0.4} />
      {/* Spots/dimples */}
      <Circle cx="26" cy="38" r="1.5" fill="#4A148C" opacity={0.3} />
      <Circle cx="38" cy="32" r="1.5" fill="#4A148C" opacity={0.3} />
      <Circle cx="34" cy="42" r="1.5" fill="#4A148C" opacity={0.3} />
      {/* Stem area */}
      <Circle cx="32" cy="18" r="2.5" fill="#6A1B9A" />
      {/* Small leaf */}
      <Ellipse cx="37" cy="16" rx="4" ry="2" fill="#4CAF50" transform="rotate(-20 37 16)" />
    </Svg>
  );
}
