import { View, Text } from "react-native";

import type { ExpertTip } from "@/lib/types";

interface TipCardProps {
  tip: ExpertTip;
}

export function TipCard({ tip }: TipCardProps) {
  return (
    <View className="mb-3 rounded-2xl bg-white p-4">
      <Text className="font-serif text-sm italic leading-5 text-gray-800">
        &ldquo;{tip.quote}&rdquo;
      </Text>
      <Text className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
        &mdash; {tip.attribution}
      </Text>
    </View>
  );
}
