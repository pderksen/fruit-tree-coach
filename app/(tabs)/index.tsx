import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GardenerInsight } from "@/components/GardenerInsight";
import { OrchardHealthCard } from "@/components/OrchardHealthCard";
import { SeasonalForecast } from "@/components/SeasonalForecast";
import { TreeCard } from "@/components/TreeCard";
import { WateringInfoCard } from "@/components/WateringInfoCard";
import { MOCK_TASKS } from "@/lib/mocks/tasks";
import { useOrchardStore } from "@/stores/orchard-store";
import { useTreeStore } from "@/stores/tree-store";

export default function HomeScreen() {
  const router = useRouter();
  const trees = useTreeStore((s) => s.trees);
  const gardeningZone = useOrchardStore((s) => s.getDefaultOrchard().zone);
  const pendingTasks = MOCK_TASKS.filter((t) => !t.done);
  const nextTaskTitle = pendingTasks[0]?.title ?? "None";

  return (
    <SafeAreaView className="flex-1 bg-cream-50" edges={["top"]}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pb-2 pt-3">
          <View className="flex-row items-center gap-2">
            <Image
              source={require("@/assets/images/fruit-tree-coach-logo.png")}
              style={{ width: 22, height: 22 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-bold text-gray-900">
              Fruit Tree Coach
            </Text>
          </View>
          <View className="flex-row items-center gap-4">
            <Pressable>
              <Ionicons name="search-outline" size={22} color="#374151" />
            </Pressable>
            <Pressable onPress={() => router.push("/profile")}>
              <View className="h-8 w-8 items-center justify-center rounded-full bg-brand-100">
                <Ionicons name="person" size={16} color="#15803d" />
              </View>
            </Pressable>
          </View>
        </View>

        {/* Gardening Zone */}
        <View className="mx-5 mt-3 flex-row items-center justify-between rounded-2xl bg-brand-50 px-4 py-3">
          <Text className="text-sm font-medium text-brand-800">
            My Gardening Zone
          </Text>
          <View className="rounded-full bg-brand-700 px-3 py-1">
            <Text className="text-sm font-bold text-white">
              Zone {gardeningZone}
            </Text>
          </View>
        </View>

        {/* This Week Hero */}
        <View className="px-5 pt-4">
          <View className="flex-row items-center gap-3">
            <Text className="text-3xl font-bold text-gray-900">This Week</Text>
            <View className="rounded-full bg-brand-100 px-3 py-1">
              <Text className="text-xs font-semibold uppercase text-brand-700">
                Early Spring
              </Text>
            </View>
          </View>
          <Text className="mt-2 text-base leading-6 text-gray-600">
            The morning frost is lifting. Your trees are beginning to wake from
            their winter slumber.
          </Text>
        </View>

        {/* Orchard Health */}
        <View className="px-5 pt-5">
          <OrchardHealthCard
            readinessPercent={85}
            onStartChecklist={() => router.push("/(tabs)/calendar")}
          />
        </View>

        {/* Gardener's Insight */}
        <View className="px-5 pt-5">
          <GardenerInsight
            quote="The best time to plant a tree was 20 years ago. The second best time is today."
            pendingTasks={pendingTasks.length}
            nextTask={nextTaskTitle}
          />
        </View>

        {/* Your Collection */}
        <View className="px-5 pt-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold text-gray-900">
              My Backyard Orchard
            </Text>
            <Pressable
              onPress={() => router.push("/(tabs)/orchard")}
              className="flex-row items-center gap-1"
            >
              <Text className="text-sm font-medium text-brand-600">
                See All
              </Text>
              <Ionicons name="chevron-forward" size={14} color="#16a34a" />
            </Pressable>
          </View>
        </View>

        <View className="px-5 pt-3">
          {trees.map((tree) => (
            <TreeCard
              key={tree.id}
              tree={tree}
              onViewCareGuide={(id) =>
                router.push({ pathname: "/tree/[id]", params: { id } })
              }
            />
          ))}
        </View>

        {/* Watering Info */}
        <View className="px-5 pt-5">
          <WateringInfoCard />
        </View>

        {/* Seasonal Forecast */}
        <View className="px-5 pt-2">
          <SeasonalForecast />
        </View>

        {/* TEST: Launch trial screen */}
        <View className="px-5 pt-6">
          <Pressable
            className="items-center rounded-xl border border-dashed border-gray-300 py-3"
            onPress={() => router.push("/trial")}
          >
            <Text className="text-sm font-medium text-gray-400">
              Test: Open Trial Screen
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
