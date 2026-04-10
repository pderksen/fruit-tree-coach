import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMemo } from "react";
import { View, Text, ScrollView } from "react-native";

import { ExpertTipsCard } from "@/components/ExpertTipsCard";
import { LaterTaskList } from "@/components/LaterTaskList";
import { PriorityTaskCard } from "@/components/PriorityTaskCard";
import { Screen } from "@/components/Screen";
import { SeasonalLifeCycle } from "@/components/SeasonalLifeCycle";
import { TreeDetailHeader } from "@/components/TreeDetailHeader";
import {
  compareByUpcomingSeason,
  getRotatedSeasonOrder,
} from "@/lib/care/season-order";
import {
  CURRENT_SEASON_STAGE,
  MOCK_DETAILED_TASKS,
  MOCK_EXPERT_TIPS,
} from "@/lib/mocks/care-details";
import { MOCK_TREES } from "@/lib/mocks/trees";

export default function TreeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const tree = MOCK_TREES.find((t) => t.id === id);

  const allTasks = useMemo(
    () => MOCK_DETAILED_TASKS[id ?? ""] ?? [],
    [id],
  );
  const priorityTask = allTasks.find((t) => t.priority);
  const laterTasks = useMemo(() => {
    const raw = allTasks.filter((t) => !t.priority);
    const rotated = getRotatedSeasonOrder();
    return [...raw].sort((a, b) =>
      compareByUpcomingSeason(a.season, b.season, rotated),
    );
  }, [allTasks]);

  if (!tree) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Text className="text-base text-gray-500">Tree not found</Text>
        </View>
      </Screen>
    );
  }

  const tips = MOCK_EXPERT_TIPS[tree.type] ?? [];
  const currentStage = CURRENT_SEASON_STAGE[tree.type] ?? "dormant";

  return (
    <Screen bg="bg-cream-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <TreeDetailHeader tree={tree} />

        {/* What to do now */}
        <View className="mt-6">
          <View className="mb-3 flex-row items-center gap-2">
            <Text className="text-lg font-bold text-gray-900">
              What to do now
            </Text>
          </View>
          {priorityTask ? (
            <PriorityTaskCard
              task={priorityTask}
              onViewGuide={() => {
                router.push({
                  pathname: "/tree/guide/[taskId]",
                  params: { taskId: priorityTask.id },
                });
              }}
            />
          ) : (
            <View className="items-center rounded-2xl bg-white p-6">
              <Ionicons name="checkmark-circle" size={40} color="#16a34a" />
              <Text className="mt-2 text-base font-semibold text-gray-900">
                No tasks required right now
              </Text>
              <Text className="mt-1 text-center text-sm text-gray-500">
                Your {tree.name} is looking good. Check back next week.
              </Text>
            </View>
          )}
        </View>

        {/* What to do later */}
        <View className="mt-6">
          <Text className="mb-3 text-lg font-bold text-gray-900">
            What to do later
          </Text>
          {laterTasks.length > 0 ? (
            <LaterTaskList tasks={laterTasks} />
          ) : (
            <View className="items-center rounded-2xl bg-white p-6">
              <Text className="text-sm text-gray-500">
                No upcoming tasks on the horizon.
              </Text>
            </View>
          )}
        </View>

        {/* Expert Tips */}
        {tips.length > 0 ? (
          <View className="mt-6">
            <ExpertTipsCard tips={tips} />
          </View>
        ) : null}

        {/* Seasonal Life Cycle */}
        <View className="mt-6">
          <SeasonalLifeCycle currentStage={currentStage} />
        </View>

      </ScrollView>
    </Screen>
  );
}
