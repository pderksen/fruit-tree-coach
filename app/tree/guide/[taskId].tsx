import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  LayoutAnimation,
  Linking,
  Pressable,
  View,
  Text,
  ScrollView,
} from "react-native";

import { CategoryIcon } from "@/components/CategoryIcon";
import { Screen } from "@/components/Screen";
import { TaskDoneCelebration } from "@/components/TaskDoneCelebration";
import { useGuideByCategory } from "@/hooks/use-guide";
import { useTask, useToggleTask } from "@/hooks/use-tasks";
import { successHaptic } from "@/lib/haptics";
import { TREE_EMOJI } from "@/lib/fruit-tree-data";
import type { Guide, ProductRecommendation, TaskCategory } from "@/lib/types";

export default function GuideScreen() {
  const { taskId } = useLocalSearchParams<{ taskId: string }>();
  const router = useRouter();
  const taskQuery = useTask(taskId);
  const toggleTask = useToggleTask();
  const task = taskQuery.data ?? null;
  const guideQuery = useGuideByCategory(task?.treeType, task?.category);
  const guide = guideQuery.data ?? undefined;
  const [celebrating, setCelebrating] = useState(false);

  if (taskQuery.isLoading || guideQuery.isLoading) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator color="#15803d" />
        </View>
      </Screen>
    );
  }

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

  const handleMarkDone = () => {
    if (!task || celebrating) return;
    setCelebrating(true);
    void successHaptic();
    toggleTask.mutate({ task, done: true });
  };

  const handleCelebrationComplete = () => {
    setCelebrating(false);
    router.back();
  };

  return (
    <Screen bg="bg-cream-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mt-2 flex-row flex-wrap gap-2">
          {task?.treeType && (
            <View className="flex-row items-center gap-1 rounded-full bg-brand-50 px-3 py-1">
              <Text className="text-sm">{TREE_EMOJI[task.treeType]}</Text>
              <Text className="text-xs font-semibold text-brand-700">
                {task.treeType} Tree
              </Text>
            </View>
          )}
          {task?.category && (
            <View className="flex-row items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
              <Text className="text-xs font-semibold capitalize text-gray-600">
                {task.category}
              </Text>
            </View>
          )}
        </View>
        <Text className="mt-3 text-2xl font-bold text-gray-900">
          {guide.title}
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
                <CategoryIcon category="tool" size={14} />
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
              <ProductCard key={i} product={product} />
            ))}
            <AffiliateDisclaimer products={guide.productRecommendations} />
          </View>
        )}

        {/* Source attribution */}
        <Text className="mt-6 text-xs text-gray-400">
          Source: {guide.source}
        </Text>

        {/* Research Notes (collapsible) */}
        {guide.researchNotes ? (
          <ResearchNotes notes={guide.researchNotes} />
        ) : null}

        {task ? (() => {
          const isCompleted =
            celebrating ||
            toggleTask.isSuccess ||
            task.lastCompletedOutcome === "completed";

          if (isCompleted) {
            return (
              <View className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl border-2 border-brand-600 bg-white py-4">
                <Text className="text-base font-semibold text-brand-700">
                  Completed
                </Text>
                <Ionicons name="checkmark" size={18} color="#15803d" />
              </View>
            );
          }

          return (
            <Pressable
              onPress={handleMarkDone}
              disabled={toggleTask.isPending}
              className="mt-6 flex-row items-center justify-center gap-2 rounded-2xl bg-brand-700 py-4 active:opacity-80"
            >
              {toggleTask.isPending ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <>
                  <Ionicons
                    name="checkmark-circle"
                    size={18}
                    color="white"
                  />
                  <Text className="text-base font-semibold text-white">
                    Mark as done
                  </Text>
                </>
              )}
            </Pressable>
          );
        })() : null}
      </ScrollView>
      {celebrating ? (
        <TaskDoneCelebration
          fruitType={task?.treeType}
          onComplete={handleCelebrationComplete}
        />
      ) : null}
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
            {"\u2B50"} {step.tip}
          </Text>
        </View>
      )}
      {step.diagramImage && (
        <View className="ml-10 mt-3 h-48 items-center justify-center rounded-xl bg-gray-100 border border-dashed border-gray-300">
          <Ionicons name="image-outline" size={32} color="#9ca3af" />
          <Text className="mt-2 text-xs text-gray-400">
            TODO: Pruning diagram
          </Text>
        </View>
      )}
    </View>
  );
}

function ResearchNotes({ notes }: { notes: string }) {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => !prev);
  };

  return (
    <View className="mt-6">
      <Pressable
        onPress={toggle}
        className="flex-row items-center justify-between rounded-2xl bg-white p-4"
      >
        <View className="flex-row items-center gap-2">
          <Ionicons name="document-text-outline" size={16} color="#6b7280" />
          <Text className="text-sm font-bold text-gray-900">
            Research Notes
          </Text>
        </View>
        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={16}
          color="#9ca3af"
        />
      </Pressable>
      {expanded && (
        <View className="mt-1 rounded-2xl bg-white px-4 pb-4">
          <Text className="text-xs leading-5 text-gray-500">{notes}</Text>
          <Text className="mt-2 text-xs italic text-gray-400">
            Compiled from multiple extension sources
          </Text>
        </View>
      )}
    </View>
  );
}

function ProductCard({ product }: { product: ProductRecommendation }) {
  const handlePress = () => {
    if (product.affiliateUrl) {
      Linking.openURL(product.affiliateUrl);
    }
  };

  const content = (
    <>
      <View className="flex-row items-center gap-2">
        <CategoryIcon category={product.category} />
        <Text className="flex-1 text-sm font-bold text-gray-900">
          {product.name}
        </Text>
      </View>
      <Text className="mt-1 text-xs leading-4 text-gray-500">
        {product.description}
      </Text>
      {product.affiliateUrl && (
        <View className="mt-2 flex-row items-center gap-1">
          <Ionicons name="open-outline" size={12} color="#16a34a" />
          <Text className="text-xs font-medium text-brand-600">
            View on Amazon
          </Text>
        </View>
      )}
    </>
  );

  if (product.affiliateUrl) {
    return (
      <Pressable onPress={handlePress} className="mb-3 rounded-2xl bg-white p-4">
        {content}
      </Pressable>
    );
  }

  return <View className="mb-3 rounded-2xl bg-white p-4">{content}</View>;
}

function AffiliateDisclaimer({ products }: { products: ProductRecommendation[] }) {
  const hasAffiliateLinks = products.some((p) => p.affiliateUrl);
  if (!hasAffiliateLinks) return null;

  return (
    <View className="mt-3 border-t border-gray-100 pt-3">
      <Text className="text-xs italic text-gray-400">
        By shopping through these links, we receive a small commission — at no
        cost to you. Thank you for supporting us!
      </Text>
    </View>
  );
}

