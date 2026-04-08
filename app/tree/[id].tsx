import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Screen } from "@/components/Screen";
import { TaskCard } from "@/components/TaskCard";
import { MOCK_TASKS } from "@/lib/mocks/tasks";
import { MOCK_TREES } from "@/lib/mocks/trees";
import type { Task } from "@/lib/types";

export default function TreeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const tree = MOCK_TREES.find((t) => t.id === id);

  const [tasks, setTasks] = useState<Task[]>(
    MOCK_TASKS.filter((t) => t.treeId === id),
  );

  function handleMarkDone(taskId: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, done: true } : t)),
    );
  }

  if (!tree) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Text className="text-base text-gray-500">Tree not found</Text>
        </View>
      </Screen>
    );
  }

  const pending = tasks.filter((t) => !t.done);

  return (
    <Screen>
      <View className="mb-6">
        <Text className="text-2xl font-bold text-gray-900">{tree.name}</Text>
        <Text className="mt-1 text-base text-gray-500">{tree.type}</Text>
        {tree.variety && (
          <Text className="text-sm text-gray-500">
            Variety: {tree.variety}
          </Text>
        )}
        {tree.plantedYear && (
          <Text className="text-sm text-gray-500">
            Planted: {tree.plantedYear}
          </Text>
        )}
        <Text className="text-sm text-gray-500">Zip: {tree.zipCode}</Text>
      </View>

      <Text className="mb-3 text-lg font-semibold text-gray-900">
        Upcoming care
      </Text>

      {pending.length === 0 ? (
        <Text className="text-sm text-gray-500">
          No upcoming tasks for this tree.
        </Text>
      ) : (
        <FlatList
          data={pending}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard task={item} onMarkDone={handleMarkDone} />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Screen>
  );
}
