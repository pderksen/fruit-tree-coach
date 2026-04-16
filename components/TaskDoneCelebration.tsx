import { useEffect, useState } from "react";
import { AccessibilityInfo, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { FRUIT_SVG_MAP } from "@/lib/fruit-icons";
import type { FruitTreeType } from "@/lib/types";

const SCENE_HEIGHT = 140;
const FRUIT_SIZE = 56;
const LEAF_COUNT = 8;
const LEAF_DURATION = 1500;
const FRUIT_DURATION = 600;

interface TaskDoneCelebrationProps {
  fruitType?: FruitTreeType;
  onComplete: () => void;
}

interface LeafConfig {
  startX: number;
  endX: number;
  rotateEnd: number;
  delay: number;
  size: number;
}

const LEAVES: LeafConfig[] = [
  { startX: -4, endX: -72, rotateEnd: -65, delay: 60, size: 16 },
  { startX: 2, endX: 56, rotateEnd: 50, delay: 0, size: 18 },
  { startX: -2, endX: -34, rotateEnd: -30, delay: 140, size: 14 },
  { startX: 4, endX: 28, rotateEnd: 25, delay: 200, size: 15 },
  { startX: 0, endX: -10, rotateEnd: 12, delay: 90, size: 17 },
  { startX: -6, endX: -52, rotateEnd: -45, delay: 280, size: 13 },
  { startX: 6, endX: 42, rotateEnd: 35, delay: 320, size: 16 },
  { startX: -1, endX: 14, rotateEnd: 18, delay: 380, size: 14 },
];

export function TaskDoneCelebration({
  fruitType,
  onComplete,
}: TaskDoneCelebrationProps) {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);

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
    const total = reduceMotion ? 250 : LEAF_DURATION + 100;
    const timer = setTimeout(onComplete, total);
    return () => clearTimeout(timer);
  }, [reduceMotion, onComplete]);

  if (reduceMotion === null || reduceMotion) {
    return null;
  }

  return (
    <View
      pointerEvents="none"
      style={{ height: SCENE_HEIGHT, alignItems: "center", justifyContent: "flex-end" }}
    >
      {LEAVES.slice(0, LEAF_COUNT).map((leaf, i) => (
        <Leaf key={i} config={leaf} />
      ))}
      <Fruit fruitType={fruitType} />
    </View>
  );
}

function Fruit({ fruitType }: { fruitType?: FruitTreeType }) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSequence(
      withTiming(1.15, { duration: FRUIT_DURATION * 0.7, easing: Easing.out(Easing.back(1.4)) }),
      withTiming(1, { duration: FRUIT_DURATION * 0.3, easing: Easing.out(Easing.quad) }),
    );
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const FruitIcon = fruitType ? FRUIT_SVG_MAP[fruitType] : null;
  if (!FruitIcon) return null;

  return (
    <Animated.View style={[{ position: "absolute", bottom: 4 }, animatedStyle]}>
      <FruitIcon size={FRUIT_SIZE} />
    </Animated.View>
  );
}

function Leaf({ config }: { config: LeafConfig }) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      config.delay,
      withTiming(1, { duration: LEAF_DURATION, easing: Easing.out(Easing.cubic) }),
    );
  }, [progress, config.delay]);

  const animatedStyle = useAnimatedStyle(() => {
    const t = progress.value;
    const liftY = -SCENE_HEIGHT * 0.85 * t;
    const driftX = config.startX + (config.endX - config.startX) * t;
    const rotate = config.rotateEnd * t;
    const opacity = t < 0.1 ? t * 10 : 1 - (t - 0.6) * 2.5;
    return {
      opacity: Math.max(0, Math.min(1, opacity)),
      transform: [
        { translateX: driftX },
        { translateY: liftY },
        { rotate: `${rotate}deg` },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          bottom: 8,
          width: config.size,
          height: config.size * 0.55,
          borderRadius: config.size,
          backgroundColor: "#4ade80",
        },
        animatedStyle,
      ]}
    />
  );
}
