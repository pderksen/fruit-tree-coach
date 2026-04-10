import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { ExpertTip } from "@/lib/types";

interface ExpertTipsCardProps {
  tips: ExpertTip[];
}

export function ExpertTipsCard({ tips }: ExpertTipsCardProps) {
  if (tips.length === 0) return null;

  return (
    <View className="rounded-2xl bg-brand-50 p-5">
      <View className="mb-3 flex-row items-center gap-2">
        <Ionicons name="star" size={18} color="#15803d" />
        <Text className="text-sm font-bold text-brand-800">Expert Tips</Text>
      </View>

      {tips[0] ? (
        <View className="mb-3 rounded-xl bg-white p-4">
          <Text className="font-serif text-sm italic leading-5 text-gray-800">
            &ldquo;{tips[0].quote}&rdquo;
          </Text>
          <Text className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            &mdash; {tips[0].attribution}
          </Text>
        </View>
      ) : null}

      {tips[1] ? (
        <View className="rounded-xl border border-brand-200 bg-white p-4">
          <Text className="font-serif text-sm italic leading-5 text-gray-800">
            &ldquo;{tips[1].quote}&rdquo;
          </Text>
          <Text className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            &mdash; {tips[1].attribution}
          </Text>
        </View>
      ) : null}
    </View>
  );
}
