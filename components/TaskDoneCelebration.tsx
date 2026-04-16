import { useEffect, useMemo, useState } from "react";
import { AccessibilityInfo, useWindowDimensions, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import { FRUIT_SVG_MAP, type FruitSvgProps } from "@/lib/fruit-icons";
import type { FruitTreeType } from "@/lib/types";

const FRUIT_COUNT = 22;
const DURATION = 1800;
const TOTAL_MS = DURATION + 200;

interface TaskDoneCelebrationProps {
  fruitType?: FruitTreeType;
  onComplete: () => void;
}

interface FruitConfig {
  xPercent: number;
  size: number;
  delay: number;
  rotateStart: number;
  rotateEnd: number;
  drift: number;
  startYOffset: number;
}

function buildFruits(screenWidth: number, screenHeight: number): FruitConfig[] {
  const configs: FruitConfig[] = [];
  for (let i = 0; i < FRUIT_COUNT; i++) {
    configs.push({
      xPercent: Math.random(),
      size: 36 + Math.random() * 32,
      delay: Math.random() * 600,
      rotateStart: (Math.random() - 0.5) * 60,
      rotateEnd: (Math.random() - 0.5) * 240,
      drift: (Math.random() - 0.5) * screenWidth * 0.2,
      startYOffset: screenHeight * (0.1 + Math.random() * 0.7),
    });
  }
  return configs;
}

export function TaskDoneCelebration({
  fruitType,
  onComplete,
}: TaskDoneCelebrationProps) {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);
  const { width, height } = useWindowDimensions();
  const fruits = useMemo(() => buildFruits(width, height), [width, height]);

  useEffect(() => {
    let cancelled = false;
    AccessibilityInfo.isReduceMotionEnabled().then((value) => {
      if (!cancelled) setReduceMotion(value);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (reduceMotion === null) return;
    const total = reduceMotion ? 250 : TOTAL_MS;
    const timer = setTimeout(onComplete, total);
    return () => clearTimeout(timer);
  }, [reduceMotion, onComplete]);

  if (reduceMotion === null || reduceMotion) {
    return null;
  }

  const FruitIcon = fruitType ? FRUIT_SVG_MAP[fruitType] : null;
  if (!FruitIcon) return null;

  return (
    <View
      pointerEvents="none"
      style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {fruits.map((config, i) => (
        <Fruit
          key={i}
          config={config}
          Icon={FruitIcon}
          screenWidth={width}
          screenHeight={height}
        />
      ))}
    </View>
  );
}

function Fruit({
  config,
  Icon,
  screenWidth,
  screenHeight,
}: {
  config: FruitConfig;
  Icon: React.ComponentType<FruitSvgProps>;
  screenWidth: number;
  screenHeight: number;
}) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      config.delay,
      withTiming(1, { duration: DURATION, easing: Easing.out(Easing.cubic) }),
    );
  }, [progress, config.delay]);

  const animatedStyle = useAnimatedStyle(() => {
    const t = progress.value;
    const liftY = -config.startYOffset - screenHeight * 0.15 * t;
    const driftX = config.drift * t;
    const rotate = config.rotateStart + (config.rotateEnd - config.rotateStart) * t;
    const scale = t < 0.15 ? t / 0.15 : 1;
    const opacity = t < 0.1 ? t * 10 : t > 0.75 ? Math.max(0, 1 - (t - 0.75) * 4) : 1;
    return {
      opacity,
      transform: [
        { translateX: driftX },
        { translateY: liftY },
        { rotate: `${rotate}deg` },
        { scale },
      ],
    };
  });

  const leftPx = config.xPercent * screenWidth - config.size / 2;

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          left: leftPx,
          bottom: -config.size,
          width: config.size,
          height: config.size,
        },
        animatedStyle,
      ]}
    >
      <Icon size={config.size} />
    </Animated.View>
  );
}
