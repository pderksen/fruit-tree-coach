import Svg, { Circle, Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function AvocadoIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body - pear shape */}
      <Path
        d="M32 8 C24 8, 16 20, 16 36 C16 50, 22 58, 32 58 C42 58, 48 50, 48 36 C48 20, 40 8, 32 8Z"
        fill="#558B2F"
      />
      {/* Inner flesh */}
      <Ellipse cx="32" cy="38" rx="10" ry="13" fill="#C5E1A5" />
      {/* Pit */}
      <Circle cx="32" cy="40" r="6" fill="#795548" />
      {/* Pit highlight */}
      <Circle cx="30" cy="38" r="2" fill="#8D6E63" opacity={0.6} />
    </Svg>
  );
}
