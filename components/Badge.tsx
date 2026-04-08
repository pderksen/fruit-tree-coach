import { View, Text } from "react-native";

type BadgeVariant = "green" | "olive" | "gray";

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  green: "bg-brand-100 text-brand-800",
  olive: "bg-yellow-100 text-yellow-800",
  gray: "bg-gray-100 text-gray-700",
};

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export function Badge({ label, variant = "green" }: BadgeProps) {
  const [bgClass, textClass] = VARIANT_STYLES[variant].split(" ");
  return (
    <View className={`rounded-full px-3 py-1 ${bgClass}`}>
      <Text className={`text-xs font-semibold uppercase ${textClass}`}>
        {label}
      </Text>
    </View>
  );
}
