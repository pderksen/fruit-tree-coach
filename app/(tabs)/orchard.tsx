import { useRouter } from "expo-router";
import { View, Text, FlatList } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { TreeRow } from "@/components/TreeRow";
import { MOCK_TREES } from "@/lib/mocks/trees";

export default function OrchardScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="mb-4 mt-2">
        <Text className="text-2xl font-bold text-gray-900">My Orchard</Text>
      </View>

      <FlatList
        data={MOCK_TREES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TreeRow
            tree={item}
            onPress={() =>
              router.push({ pathname: "/tree/[id]", params: { id: item.id } })
            }
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      <View className="absolute bottom-6 left-5 right-5">
        <PrimaryButton
          title="+ Add tree"
          onPress={() => router.push("/tree/new")}
        />
      </View>
    </Screen>
  );
}
