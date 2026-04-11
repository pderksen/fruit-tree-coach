import Svg, { Circle, Ellipse } from "react-native-svg";

import type { FruitSvgProps } from "./index";

export function KiwiIcon({ size = 24 }: FruitSvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Outer skin - brown fuzzy */}
      <Ellipse cx="32" cy="34" rx="18" ry="14" fill="#795548" />
      {/* Cut face - green flesh */}
      <Ellipse cx="32" cy="34" rx="14" ry="10" fill="#8BC34A" />
      {/* White center */}
      <Ellipse cx="32" cy="34" rx="4" ry="3" fill="#F1F8E9" />
      {/* Seed pattern - radiating */}
      <Circle cx="26" cy="30" r="1" fill="#33691E" />
      <Circle cx="24" cy="34" r="1" fill="#33691E" />
      <Circle cx="26" cy="38" r="1" fill="#33691E" />
      <Circle cx="38" cy="30" r="1" fill="#33691E" />
      <Circle cx="40" cy="34" r="1" fill="#33691E" />
      <Circle cx="38" cy="38" r="1" fill="#33691E" />
      <Circle cx="30" cy="26" r="1" fill="#33691E" />
      <Circle cx="34" cy="26" r="1" fill="#33691E" />
      <Circle cx="30" cy="42" r="1" fill="#33691E" />
      <Circle cx="34" cy="42" r="1" fill="#33691E" />
      {/* Skin edge highlight */}
      <Ellipse cx="26" cy="28" rx="4" ry="3" fill="#8D6E63" opacity={0.3} />
    </Svg>
  );
}
