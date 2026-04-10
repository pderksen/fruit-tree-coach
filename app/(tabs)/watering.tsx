import { Ionicons } from "@expo/vector-icons";
import { useMemo } from "react";
import { View, Text, SectionList } from "react-native";

import { Screen } from "@/components/Screen";
import { TREE_CATEGORY_MAP } from "@/lib/fruit-tree-data";
import { getWateringGuide, type WateringGuide } from "@/lib/care/watering";
import { useTreeStore } from "@/stores/tree-store";
import type { FruitTreeType } from "@/lib/types";

interface WateringSection {
  title: string;
  treeType: FruitTreeType;
  data: [WateringGuide]; // SectionList needs a data array
}

function SignList({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: "red" | "amber";
}) {
  const iconColor = color === "red" ? "#ef4444" : "#f59e0b";
  return (
    <View className="mt-3">
      <Text className="text-xs font-bold uppercase tracking-wider text-gray-400">
        {title}
      </Text>
      {items.map((item) => (
        <View key={item} className="mt-1.5 flex-row items-start gap-2">
          <Ionicons
            name={color === "red" ? "water" : "sunny-outline"}
            size={14}
            color={iconColor}
            style={{ marginTop: 2 }}
          />
          <Text className="flex-1 text-sm text-gray-600">{item}</Text>
        </View>
      ))}
    </View>
  );
}

function WateringCard({ guide }: { guide: WateringGuide }) {
  return (
    <View className="mb-4 rounded-2xl bg-white p-4">
      {/* Schedule */}
      <View className="flex-row items-start gap-3">
        <Ionicons name="time-outline" size={18} color="#15803d" />
        <View className="flex-1">
          <Text className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Frequency
          </Text>
          <Text className="mt-0.5 text-sm text-gray-800">
            {guide.frequency}
          </Text>
        </View>
      </View>

      <View className="mt-3 flex-row items-start gap-3">
        <Ionicons name="water-outline" size={18} color="#15803d" />
        <View className="flex-1">
          <Text className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Amount
          </Text>
          <Text className="mt-0.5 text-sm text-gray-800">{guide.amount}</Text>
        </View>
      </View>

      <View className="mt-3 flex-row items-start gap-3">
        <Ionicons name="sunny-outline" size={18} color="#15803d" />
        <View className="flex-1">
          <Text className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Best Time to Water
          </Text>
          <Text className="mt-0.5 text-sm text-gray-800">
            {guide.bestTime}
          </Text>
        </View>
      </View>

      {/* Signs */}
      <SignList
        title="Signs of Over-Watering"
        items={guide.signs.overWatering}
        color="red"
      />
      <SignList
        title="Signs of Under-Watering"
        items={guide.signs.underWatering}
        color="amber"
      />

      {/* Tip */}
      <View className="mt-4 rounded-xl bg-brand-50 p-3">
        <View className="flex-row items-start gap-2">
          <Ionicons name="bulb-outline" size={16} color="#15803d" />
          <Text className="flex-1 text-sm leading-5 text-brand-800">
            {guide.tip}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function WateringScreen() {
  const trees = useTreeStore((s) => s.trees);

  const sections: WateringSection[] = useMemo(() => {
    const seen = new Set<FruitTreeType>();
    const result: WateringSection[] = [];

    for (const tree of trees) {
      if (seen.has(tree.type)) continue;
      seen.add(tree.type);

      const guide = getWateringGuide(tree.type);
      const category = TREE_CATEGORY_MAP[tree.type];
      result.push({
        title: `${tree.type} (${category})`,
        treeType: tree.type,
        data: [guide],
      });
    }

    return result;
  }, [trees]);

  return (
    <Screen>
      <View className="mb-2 mt-2">
        <Text className="text-2xl font-bold text-gray-900">Watering Guide</Text>
        <Text className="mt-1 text-sm text-gray-500">
          How much and when to water your trees
        </Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <WateringCard guide={item} />}
        renderSectionHeader={({ section }) => (
          <View className="mb-2 mt-4">
            <Text className="text-sm font-bold text-gray-700">
              {section.title}
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <Text className="text-sm text-gray-400">
              Add trees to see watering guides.
            </Text>
          </View>
        }
      />
    </Screen>
  );
}
