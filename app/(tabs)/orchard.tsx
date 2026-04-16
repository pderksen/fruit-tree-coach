import { useRouter } from "expo-router";
import { View, Text, FlatList, RefreshControl } from "react-native";

import { ErrorState } from "@/components/ErrorState";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { TreeRow } from "@/components/TreeRow";
import { useDefaultOrchard } from "@/hooks/use-orchards";
import { useTrees } from "@/hooks/use-trees";

export default function OrchardScreen() {
  const router = useRouter();
  const defaultOrchard = useDefaultOrchard();
  const treesQuery = useTrees(defaultOrchard?.id);
  const trees = treesQuery.data ?? [];

  return (
    <Screen edges={["top"]}>
      <View className="mb-4 mt-2">
        <Text className="text-2xl font-bold text-gray-900">
          {defaultOrchard?.name ?? "My Orchard"}
        </Text>
        <Text className="mt-1 text-sm text-gray-500">
          {defaultOrchard?.zone
            ? `Zone ${defaultOrchard.zone}${defaultOrchard.zipCode ? ` · ${defaultOrchard.zipCode}` : ""}`
            : "Set your zip code in Profile"}
        </Text>
      </View>

      {treesQuery.isLoading ? (
        <LoadingSpinner />
      ) : treesQuery.isError ? (
        <ErrorState
          message="Could not load your trees."
          onRetry={() => treesQuery.refetch()}
        />
      ) : (
        <FlatList
          data={trees}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TreeRow
              tree={item}
              onPress={() =>
                router.push({ pathname: "/tree/[id]", params: { id: item.id } })
              }
            />
          )}
          ListEmptyComponent={
            <View className="items-center rounded-2xl bg-white p-6">
              <Text className="text-base font-semibold text-gray-900">
                No trees yet
              </Text>
              <Text className="mt-1 text-center text-sm text-gray-500">
                Tap &quot;Add tree&quot; below to plant your first one.
              </Text>
            </View>
          }
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={treesQuery.isRefetching}
              onRefresh={() => treesQuery.refetch()}
              tintColor="#15803d"
            />
          }
        />
      )}

      <View className="absolute bottom-6 left-5 right-5">
        <PrimaryButton
          title="+ Add tree"
          onPress={() => router.push("/tree/new")}
        />
      </View>
    </Screen>
  );
}
