import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Screen } from "@/components/Screen";
import { TaskCard } from "@/components/TaskCard";
import { MOCK_TASKS } from "@/lib/mocks/tasks";
import type { Task } from "@/lib/types";

export default function ThisWeekScreen() {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const pending = tasks.filter((t) => !t.done);

  function handleMarkDone(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: true } : t)));
  }

  return (
    <Screen>
      <View className="mb-4 mt-2">
        <Text className="text-2xl font-bold text-gray-900">This week</Text>
        <Text className="mt-1 text-base text-gray-500">
          {pending.length > 0
            ? `${pending.length} thing${pending.length === 1 ? "" : "s"} to do for your trees`
            : ""}
        </Text>
      </View>

      {pending.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Ionicons name="checkmark-circle-outline" size={48} color="#15803d" />
          <Text className="mt-3 text-lg font-semibold text-gray-900">
            You&apos;re all caught up
          </Text>
          <Text className="mt-1 text-sm text-gray-500">
            Nothing to do this week. Nice work!
          </Text>
        </View>
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
