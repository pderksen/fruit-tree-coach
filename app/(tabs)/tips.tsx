import { useMemo } from "react";
import { View, Text, SectionList } from "react-native";

import { Screen } from "@/components/Screen";
import { TipCard } from "@/components/TipCard";
import { TREE_EMOJI } from "@/lib/fruit-tree-data";
import { MOCK_EXPERT_TIPS } from "@/lib/mocks/care-details";
import { MOCK_TREES } from "@/lib/mocks/trees";
import type { ExpertTip } from "@/lib/types";

interface TipSection {
  title: string;
  data: ExpertTip[];
}

export default function TipsScreen() {
  const sections: TipSection[] = useMemo(() => {
    const seen = new Set<string>();
    const result: TipSection[] = [];

    for (const tree of MOCK_TREES) {
      if (seen.has(tree.type)) continue;
      seen.add(tree.type);

      const tips = MOCK_EXPERT_TIPS[tree.type];
      if (!tips || tips.length === 0) continue;

      const emoji = TREE_EMOJI[tree.type] ?? "\uD83C\uDF33";
      result.push({ title: `${emoji} ${tree.type}`, data: tips });
    }

    return result;
  }, []);

  return (
    <Screen>
      <View className="mb-2 mt-2">
        <Text className="text-2xl font-bold text-gray-900">
          Tips for Your Trees
        </Text>
        <Text className="mt-1 text-sm text-gray-500">
          Expert guidance for your orchard
        </Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.quote}-${index}`}
        renderItem={({ item }) => <TipCard tip={item} />}
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
              Add trees to see personalised tips.
            </Text>
          </View>
        }
      />
    </Screen>
  );
}
