import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

interface OrchardStatsProps {
  trees: number;
  ready: number;
  late: number;
  waiting: number;
}

interface StatProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  iconColor: string;
  bgColor: string;
  value: number;
  label: string;
}

function Stat({ icon, iconColor, bgColor, value, label }: StatProps) {
  return (
    <View className="flex-1 items-center">
      <View
        className="mb-2 h-10 w-10 items-center justify-center rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        <Ionicons name={icon} size={20} color={iconColor} />
      </View>
      <Text className="text-xl font-bold text-gray-900">{value}</Text>
      <Text className="text-xs font-medium text-gray-500">{label}</Text>
    </View>
  );
}

export function OrchardStats({ trees, ready, late, waiting }: OrchardStatsProps) {
  return (
    <View className="flex-row rounded-2xl bg-white px-3 py-4">
      <Stat
        icon="leaf"
        iconColor="#15803d"
        bgColor="#dcfce7"
        value={trees}
        label="Trees"
      />
      <Stat
        icon="checkmark-circle"
        iconColor="#16a34a"
        bgColor="#dcfce7"
        value={ready}
        label="Ready"
      />
      <Stat
        icon="alert-circle"
        iconColor="#d97706"
        bgColor="#fef3c7"
        value={late}
        label="Late"
      />
      <Stat
        icon="hourglass"
        iconColor="#6b7280"
        bgColor="#f3f4f6"
        value={waiting}
        label="Waiting"
      />
    </View>
  );
}
