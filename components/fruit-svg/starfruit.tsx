import Svg, { Ellipse, Path } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function StarfruitIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Star cross-section shape - 5 pointed */}
      <Path
        d="M32 8 L36 24 L52 24 L40 34 L44 52 L32 42 L20 52 L24 34 L12 24 L28 24 Z"
        fill="#CDDC39"
      />
      {/* Inner star for depth */}
      <Path
        d="M32 16 L34 26 L44 26 L37 33 L39 44 L32 38 L25 44 L27 33 L20 26 L30 26 Z"
        fill="#D4E157"
        opacity={0.5}
      />
      {/* Center */}
      <Ellipse cx="32" cy="30" rx="3" ry="3" fill="#AFB42B" opacity={0.5} />
      {/* Edge highlights */}
      <Path d="M32 8 L34 18" stroke="#E6EE9C" strokeWidth="1.5" opacity={0.4} />
      <Path d="M52 24 L42 26" stroke="#E6EE9C" strokeWidth="1.5" opacity={0.4} />
    </Svg>
  );
}
