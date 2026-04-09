import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";

import { Screen } from "@/components/Screen";
import { MOCK_GUIDES, type Guide } from "@/lib/mocks/guides";

export default function GuideScreen() {
  const { taskId } = useLocalSearchParams<{ taskId: string }>();
  const guide = taskId ? MOCK_GUIDES[taskId] : undefined;

  if (!guide) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Ionicons name="document-text-outline" size={48} color="#9ca3af" />
          <Text className="mt-3 text-base text-gray-500">
            Guide not available yet.
          </Text>
        </View>
      </Screen>
    );
  }

  return (
    <Screen bg="bg-cream-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text className="mt-2 text-2xl font-bold text-gray-900">
          {guide.title}
        </Text>
        <Text className="mt-1 text-xs font-medium text-brand-600">
          {guide.source}
        </Text>
        <Text className="mt-3 text-sm leading-5 text-gray-600">
          {guide.introduction}
        </Text>

        {/* Steps */}
        <View className="mt-6">
          <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Steps
          </Text>
          {guide.steps.map((step) => (
            <StepCard key={step.stepNumber} step={step} />
          ))}
        </View>

        {/* Tools needed */}
        <View className="mt-6">
          <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Tools Needed
          </Text>
          <View className="rounded-2xl bg-white p-4">
            {guide.toolsNeeded.map((tool, i) => (
              <View key={i} className="flex-row items-start gap-2 py-1">
                <Ionicons name="build-outline" size={14} color="#6b7280" />
                <Text className="flex-1 text-sm text-gray-700">{tool}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Product recommendations */}
        {guide.productRecommendations.length > 0 && (
          <View className="mt-6">
            <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
              Recommended Products
            </Text>
            {guide.productRecommendations.map((product, i) => (
              <View key={i} className="mb-3 rounded-2xl bg-white p-4">
                <View className="flex-row items-center gap-2">
                  <CategoryIcon category={product.category} />
                  <Text className="flex-1 text-sm font-bold text-gray-900">
                    {product.name}
                  </Text>
                </View>
                <Text className="mt-1 text-xs leading-4 text-gray-500">
                  {product.description}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </Screen>
  );
}

function StepCard({ step }: { step: Guide["steps"][number] }) {
  return (
    <View className="mb-3 rounded-2xl bg-white p-4">
      <View className="flex-row items-center gap-3">
        <View className="h-7 w-7 items-center justify-center rounded-full bg-brand-100">
          <Text className="text-xs font-bold text-brand-700">
            {step.stepNumber}
          </Text>
        </View>
        <Text className="flex-1 text-sm font-bold text-gray-900">
          {step.title}
        </Text>
      </View>
      <Text className="mt-2 pl-10 text-sm leading-5 text-gray-600">
        {step.description}
      </Text>
      {step.tip && (
        <View className="ml-10 mt-2 rounded-xl bg-amber-50 px-3 py-2">
          <Text className="text-xs leading-4 text-amber-800">
            {"\uD83D\uDCA1"} {step.tip}
          </Text>
        </View>
      )}
    </View>
  );
}

function CategoryIcon({ category }: { category: string }) {
  const icon =
    category === "fertilizer"
      ? "leaf-outline"
      : category === "pruning-tool"
        ? "cut-outline"
        : category === "pest-control"
          ? "shield-outline"
          : "cube-outline";

  return <Ionicons name={icon} size={16} color="#15803d" />;
}
