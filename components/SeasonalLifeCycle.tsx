import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { SeasonStage } from "@/lib/types";

interface Stage {
  key: SeasonStage;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const STAGES: Stage[] = [
  { key: "dormant", label: "Dormant", icon: "snow" },
  { key: "bloom", label: "Bloom", icon: "flower" },
  { key: "growth", label: "Growth", icon: "leaf" },
  { key: "harvest", label: "Harvest", icon: "basket" },
];

interface SeasonalLifeCycleProps {
  currentStage: SeasonStage;
}

export function SeasonalLifeCycle({ currentStage }: SeasonalLifeCycleProps) {
  return (
    <View className="rounded-2xl bg-white p-5">
      <Text className="mb-4 text-lg font-bold text-gray-900">
        Seasonal Life Cycle
      </Text>
      <View className="flex-row justify-between">
        {STAGES.map((stage) => {
          const isActive = stage.key === currentStage;
          return (
            <View key={stage.key} className="items-center">
              <View
                className={`h-12 w-12 items-center justify-center rounded-full ${
                  isActive ? "bg-brand-100" : "bg-gray-100"
                }`}
              >
                <Ionicons
                  name={stage.icon}
                  size={22}
                  color={isActive ? "#15803d" : "#9ca3af"}
                />
              </View>
              <Text
                className={`mt-2 text-xs font-semibold uppercase ${
                  isActive ? "text-brand-700" : "text-gray-400"
                }`}
              >
                {stage.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
