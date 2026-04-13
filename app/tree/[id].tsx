import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useMemo } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";

import { ErrorState } from "@/components/ErrorState";
import { ExpertTipsCard } from "@/components/ExpertTipsCard";
import { LaterTaskList } from "@/components/LaterTaskList";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PriorityTaskCard } from "@/components/PriorityTaskCard";
import { Screen } from "@/components/Screen";
import { SeasonalLifeCycle } from "@/components/SeasonalLifeCycle";
import { TreeDetailHeader } from "@/components/TreeDetailHeader";
import { useTasks, useToggleTask } from "@/hooks/use-tasks";
import { useDeleteTree, useTree } from "@/hooks/use-trees";
import { EXPERT_TIPS } from "@/lib/care/expert-tips";
import type { SeasonStage, Task } from "@/lib/types";

// Rough month → life-cycle stage mapping for the "Seasonal Life Cycle"
// display. Deliberately generic (not species-aware) — species-specific
// staging lives in the task template windows.
function currentStageForMonth(month: number): SeasonStage {
  if (month >= 2 && month <= 4) return "bloom";
  if (month >= 5 && month <= 8) return "growth";
  if (month >= 9 && month <= 10) return "harvest";
  return "dormant";
}

export default function TreeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const treeQuery = useTree(id);
  const tree = treeQuery.data;
  const deleteTreeMutation = useDeleteTree();
  const tasksQuery = useTasks(id);
  const toggleTaskMutation = useToggleTask();

  const handleToggleTask = (task: Task) => {
    toggleTaskMutation.mutate({ id: task.id, done: !task.done });
  };

  const handleDelete = () => {
    if (!tree) return;
    Alert.alert(
      "Delete tree?",
      `This will permanently remove ${tree.name} and its care history.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteTreeMutation.mutate(tree.id, {
              onSuccess: () => router.back(),
              onError: () =>
                Alert.alert(
                  "Couldn't delete tree",
                  "Please check your connection and try again.",
                ),
            });
          },
        },
      ],
    );
  };

  const allTasks = useMemo(() => tasksQuery.data ?? [], [tasksQuery.data]);
  const pendingTasks = useMemo(
    () => allTasks.filter((t) => !t.done),
    [allTasks],
  );
  // Priority = the first task that's currently in its window. Late tasks
  // are shown in "later" with an amber warning tag so they don't dominate.
  const priorityTask = pendingTasks.find((t) => t.status === "active");
  const laterTasks = useMemo(() => {
    const rank = (s?: Task["status"]) =>
      s === "active" ? 0 : s === "late" ? 1 : 2;
    return pendingTasks
      .filter((t) => t.id !== priorityTask?.id)
      .sort((a, b) => rank(a.status) - rank(b.status));
  }, [pendingTasks, priorityTask]);

  const isRefreshing = treeQuery.isRefetching || tasksQuery.isRefetching;
  const onRefresh = useCallback(() => {
    treeQuery.refetch();
    tasksQuery.refetch();
  }, [treeQuery, tasksQuery]);

  if (treeQuery.isLoading) {
    return (
      <Screen>
        <LoadingSpinner fullScreen />
      </Screen>
    );
  }

  if (!tree) {
    return (
      <Screen>
        {treeQuery.isError ? (
          <ErrorState
            fullScreen
            message="Could not load tree."
            onRetry={() => treeQuery.refetch()}
          />
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-base text-gray-500">Tree not found</Text>
          </View>
        )}
      </Screen>
    );
  }

  const tips = EXPERT_TIPS[tree.type] ?? [];
  const currentStage = currentStageForMonth(new Date().getMonth());

  return (
    <Screen bg="bg-cream-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor="#15803d"
          />
        }
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
              onToggleDone={() => handleToggleTask(priorityTask)}
              onViewGuide={() => {
                router.push({
                  pathname: "/tree/guide/[taskId]",
                  params: { taskId: priorityTask.id },
                });
              }}
            />
          ) : pendingTasks.length === 0 ? (
            <View className="items-center rounded-2xl bg-white p-6">
              <Text className="text-2xl">🌱</Text>
              <Text className="mt-2 text-base font-semibold text-gray-900">
                Your {tree.name} is just growing
              </Text>
              <Text className="mt-1 text-center text-sm text-gray-500">
                No tasks this week. Check back soon.
              </Text>
            </View>
          ) : (
            <View className="items-center rounded-2xl bg-white p-6">
              <Ionicons name="leaf" size={40} color="#16a34a" />
              <Text className="mt-2 text-base font-semibold text-gray-900">
                Nothing urgent right now
              </Text>
              <Text className="mt-1 text-center text-sm text-gray-500">
                See what&apos;s coming up below.
              </Text>
            </View>
          )}
        </View>

        {/* What to do later */}
        {laterTasks.length > 0 ? (
          <View className="mt-6">
            <Text className="mb-3 text-lg font-bold text-gray-900">
              What to do later
            </Text>
            <LaterTaskList tasks={laterTasks} onToggleDone={handleToggleTask} />
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

        {/* Delete tree */}
        <View className="mt-8">
          <Pressable
            onPress={handleDelete}
            disabled={deleteTreeMutation.isPending}
            className="flex-row items-center justify-center gap-2 rounded-2xl border border-red-200 bg-white p-4 active:bg-red-50"
          >
            {deleteTreeMutation.isPending ? (
              <ActivityIndicator color="#dc2626" />
            ) : (
              <>
                <Ionicons name="trash-outline" size={18} color="#dc2626" />
                <Text className="text-base font-semibold text-red-600">
                  Delete tree
                </Text>
              </>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </Screen>
  );
}
