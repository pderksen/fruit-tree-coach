import { Ionicons } from "@expo/vector-icons";
import { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { CalendarHeader } from "@/components/CalendarHeader";
import { NotificationOptInModal } from "@/components/NotificationOptInModal";
import { Screen } from "@/components/Screen";
import { TimelineTask } from "@/components/TimelineTask";
import { formatWeekRange, getWeekKey, getWeekStart } from "@/lib/date-utils";
import {
  MOCK_CALENDAR_TASKS,
  type CalendarTask,
} from "@/lib/mocks/calendar-tasks";
import { useSettingsStore } from "@/stores/settings-store";

/** Group tasks by week (Monday–Sunday) and sort chronologically. */
function groupByWeek(tasks: CalendarTask[]) {
  const sorted = [...tasks].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
  );

  const groups = new Map<string, CalendarTask[]>();
  for (const task of sorted) {
    const key = getWeekKey(new Date(task.dueDate));
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(task);
  }

  return Array.from(groups.entries()).map(([weekKey, items]) => ({
    weekKey,
    weekStart: getWeekStart(new Date(weekKey)),
    label: formatWeekRange(new Date(weekKey)),
    items,
  }));
}

export default function CalendarScreen() {
  const today = useMemo(() => new Date(), []);
  const [selectedDate, setSelectedDate] = useState(today);
  const scrollRef = useRef<ScrollView>(null);
  const hasSeenPrompt = useSettingsStore((s) => s.hasSeenNotificationPrompt);
  const [showNotifModal, setShowNotifModal] = useState(!hasSeenPrompt);

  const filteredTasks = useMemo(() => {
    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();
    return MOCK_CALENDAR_TASKS.filter((t) => {
      const d = new Date(t.dueDate);
      return d.getMonth() === selectedMonth && d.getFullYear() === selectedYear;
    });
  }, [selectedDate]);

  const groups = useMemo(() => groupByWeek(filteredTasks), [filteredTasks]);

  const isOverdue = useCallback(
    (task: CalendarTask) => {
      const due = new Date(task.dueDate);
      due.setHours(23, 59, 59, 999);
      return due < today;
    },
    [today],
  );

  const currentWeekKey = getWeekKey(today);

  const handleDismissNotif = useCallback(() => {
    setShowNotifModal(false);
  }, []);

  const totalTasks = filteredTasks.length;

  return (
    <Screen>
      <View className="mb-1 mt-2 flex-row items-center justify-between">
        <Text className="text-sm text-gray-500">
          {totalTasks} {totalTasks === 1 ? "task" : "tasks"} this month
        </Text>
      </View>

      <CalendarHeader
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />

      {groups.length > 0 ? (
        <ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {groups.map((group, gi) => {
            const isThisWeek = group.weekKey === currentWeekKey;

            return (
              <View key={group.weekKey} className="mb-2">
                <View className="mb-2 ml-8 flex-row items-center gap-2">
                  <Text className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {group.label}
                  </Text>
                  {isThisWeek && (
                    <View className="rounded-full bg-brand-700 px-2 py-0.5">
                      <Text className="text-xs font-semibold text-white">
                        This week
                      </Text>
                    </View>
                  )}
                </View>

                {group.items.map((task, ti) => (
                  <TimelineTask
                    key={task.id}
                    task={task}
                    isOverdue={isOverdue(task)}
                    isLast={
                      gi === groups.length - 1 && ti === group.items.length - 1
                    }
                  />
                ))}
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Ionicons name="checkmark-circle" size={48} color="#16a34a" />
          <Text className="mt-3 text-base font-semibold text-gray-900">
            All caught up!
          </Text>
          <Text className="mt-1 text-sm text-gray-500">
            No tasks scheduled for this month.
          </Text>
        </View>
      )}

      <NotificationOptInModal
        visible={showNotifModal}
        onDismiss={handleDismissNotif}
      />
    </Screen>
  );
}
