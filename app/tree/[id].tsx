import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";

import { ExpertTipsCard } from "@/components/ExpertTipsCard";
import { LaterTaskList } from "@/components/LaterTaskList";
import { PriorityTaskCard } from "@/components/PriorityTaskCard";
import { Screen } from "@/components/Screen";
import { SeasonalLifeCycle } from "@/components/SeasonalLifeCycle";
import { TreeDetailHeader } from "@/components/TreeDetailHeader";
import { VideoCard } from "@/components/VideoCard";
import {
  CURRENT_SEASON_STAGE,
  MOCK_DETAILED_TASKS,
  MOCK_EXPERT_TIPS,
} from "@/lib/mocks/care-details";
import { MOCK_TREES } from "@/lib/mocks/trees";

export default function TreeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const tree = MOCK_TREES.find((t) => t.id === id);

  if (!tree) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center">
          <Text className="text-base text-gray-500">Tree not found</Text>
        </View>
      </Screen>
    );
  }

  const allTasks = MOCK_DETAILED_TASKS[tree.id] ?? [];
  const priorityTask = allTasks.find((t) => t.priority);
  const laterTasks = allTasks.filter((t) => !t.priority);
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
        {priorityTask ? (
          <View className="mt-6">
            <View className="mb-3 flex-row items-center gap-2">
              <Text className="text-lg font-bold text-gray-900">
                What to do now
              </Text>
            </View>
            <PriorityTaskCard
              task={priorityTask}
              onViewGuide={() => {
                // TODO: navigate to step-by-step guide
              }}
            />
          </View>
        ) : null}

        {/* What to do later */}
        {laterTasks.length > 0 ? (
          <View className="mt-6">
            <Text className="mb-3 text-lg font-bold text-gray-900">
              What to do later
            </Text>
            <LaterTaskList tasks={laterTasks} />
          </View>
        ) : null}

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

        {/* Video */}
        <View className="mt-6">
          <VideoCard
            title={`Watch: How to care for your ${tree.type.toLowerCase()} tree`}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}
