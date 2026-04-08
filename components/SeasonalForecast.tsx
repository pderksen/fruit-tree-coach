import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

interface Milestone {
  label: string;
  detail: string;
  icon: keyof typeof Ionicons.glyphMap;
  done: boolean;
}

const MILESTONES: Milestone[] = [
  {
    label: "Winter Dormancy Ends",
    detail: "Completed March 1st",
    icon: "checkmark-circle",
    done: true,
  },
  {
    label: "Early Sap Flow",
    detail: "Current Stage \u00b7 Watch for weeping",
    icon: "water",
    done: false,
  },
  {
    label: "First Blossom",
    detail: "Estimated April 20th",
    icon: "flower",
    done: false,
  },
];

export function SeasonalForecast() {
  return (
    <View className="mb-8 rounded-3xl bg-white p-5">
      <Text className="text-xl font-bold text-gray-900">
        Seasonal Forecast
      </Text>
      <View className="mt-4">
        {MILESTONES.map((m, i) => (
          <View key={m.label} className="flex-row items-start gap-3 pb-4">
            {/* Timeline connector */}
            <View className="items-center">
              <Ionicons
                name={m.icon}
                size={22}
                color={m.done ? "#15803d" : "#9ca3af"}
              />
              {i < MILESTONES.length - 1 && (
                <View className="mt-1 h-6 w-0.5 bg-gray-200" />
              )}
            </View>
            <View className="flex-1">
              <Text
                className={`text-sm font-semibold ${m.done ? "text-brand-700" : "text-gray-900"}`}
              >
                {m.label}
              </Text>
              <Text className="mt-0.5 text-xs text-gray-500">{m.detail}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
