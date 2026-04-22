import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { RefreshControl, View, Text, ScrollView, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DevTools } from "@/components/DevTools";
import { ErrorState } from "@/components/ErrorState";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { SeasonalForecast } from "@/components/SeasonalForecast";
import { TreeCard } from "@/components/TreeCard";
import { WateringInfoCard } from "@/components/WateringInfoCard";
import { useDefaultOrchard } from "@/hooks/use-orchards";
import { useAllTasks } from "@/hooks/use-tasks";
import { useTrees } from "@/hooks/use-trees";

export default function HomeScreen() {
  const router = useRouter();
  const orchard = useDefaultOrchard();
  const gardeningZone = orchard?.zone ?? "—";
  const treesQuery = useTrees(orchard?.id);
  const trees = treesQuery.data ?? [];
  const tasksQuery = useAllTasks(orchard?.id);
  const pendingTasks = tasksQuery.data ?? [];

  const isRefreshing = treesQuery.isRefetching || tasksQuery.isRefetching;
  const onRefresh = useCallback(() => {
    treesQuery.refetch();
    tasksQuery.refetch();
  }, [treesQuery, tasksQuery]);

  return (
    <SafeAreaView className="flex-1 bg-cream-50" edges={["top"]}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor="#15803d"
          />
        }
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
          <Pressable onPress={() => router.push("/profile")}>
            <View className="h-8 w-8 items-center justify-center rounded-full bg-brand-100">
              <Ionicons name="person" size={16} color="#15803d" />
            </View>
          </Pressable>
        </View>

        {/* Gardening Zone */}
        <Pressable
          onPress={() => router.push("/zone-info")}
          className="mx-5 mt-3 flex-row items-center justify-between rounded-2xl bg-brand-50 px-4 py-3 active:opacity-80"
          accessibilityRole="button"
          accessibilityLabel={`My gardening zone, Zone ${gardeningZone}. Tap to learn more.`}
          accessibilityHint="Opens an explanation of USDA gardening zones"
        >
          <View className="flex-row items-center gap-1.5">
            <Text className="text-sm font-medium text-brand-800">
              My Gardening Zone
            </Text>
            <Ionicons
              name="information-circle-outline"
              size={16}
              color="#15803d"
            />
          </View>
          <View className="flex-row items-center gap-1">
            <View className="rounded-full bg-brand-700 px-3 py-1">
              <Text className="text-sm font-bold text-white">
                Zone {gardeningZone}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#15803d" />
          </View>
        </Pressable>

        {/* Home Header Image */}
        <View className="px-5 pt-3">
          <Image
            source={require("@/assets/images/fruit-tree-coach-home-header.png")}
            style={{ width: "100%", height: 110 }}
            resizeMode="cover"
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
          {treesQuery.isLoading ? (
            <LoadingSpinner />
          ) : treesQuery.isError ? (
            <ErrorState
              message="Could not load your trees. Pull down to try again."
              onRetry={() => treesQuery.refetch()}
            />
          ) : trees.length === 0 ? (
            <View className="items-center rounded-2xl bg-white p-6">
              <Text className="text-base font-semibold text-gray-900">
                No trees yet
              </Text>
              <Text className="mt-1 text-center text-sm text-gray-500">
                Add your first tree to start getting care guidance.
              </Text>
              <Pressable
                className="mt-4 rounded-xl bg-brand-700 px-5 py-2.5"
                onPress={() => router.push("/tree/new")}
              >
                <Text className="text-sm font-semibold text-white">
                  + Add your first tree
                </Text>
              </Pressable>
            </View>
          ) : (
            trees.map((tree) => (
              <TreeCard
                key={tree.id}
                tree={tree}
                onViewCareGuide={(id) =>
                  router.push({ pathname: "/tree/[id]", params: { id } })
                }
              />
            ))
          )}
        </View>

        {/* Watering Info */}
        <View className="px-5 pt-5">
          <WateringInfoCard />
        </View>

        {/* Seasonal Forecast */}
        <View className="px-5 pt-2">
          <SeasonalForecast />
        </View>

        <DevTools
          buttons={[
            {
              label: "Test user login",
              onPress: () => router.push("/dev-login"),
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
