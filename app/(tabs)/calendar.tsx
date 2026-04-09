import { useMemo } from "react";
import { View, Text, SectionList } from "react-native";

import { CalendarTaskRow } from "@/components/CalendarTaskRow";
import { Screen } from "@/components/Screen";
import {
  MOCK_CALENDAR_TASKS,
  type CalendarTask,
} from "@/lib/mocks/calendar-tasks";

/** Group tasks by ISO week label (e.g. "Apr 7 – 13"). */
function groupByWeek(tasks: CalendarTask[]) {
  const sorted = [...tasks].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
  );

  const sections = new Map<string, CalendarTask[]>();

  for (const task of sorted) {
    const d = new Date(task.dueDate);
    const day = d.getDay();
    const monday = new Date(d);
    monday.setDate(d.getDate() - ((day + 6) % 7));
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const fmt = (dt: Date) =>
      dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    const key = `${fmt(monday)} – ${fmt(sunday)}`;

    if (!sections.has(key)) sections.set(key, []);
    sections.get(key)!.push(task);
  }

  return Array.from(sections.entries()).map(([title, data]) => ({
    title,
    data,
  }));
}

export default function CalendarScreen() {
  const sections = useMemo(() => groupByWeek(MOCK_CALENDAR_TASKS), []);

  return (
    <Screen>
      <View className="mb-2 mt-2">
        <Text className="text-2xl font-bold text-gray-900">Care Calendar</Text>
        <Text className="mt-1 text-sm text-gray-500">
          Upcoming tasks for your orchard
        </Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CalendarTaskRow task={item} />}
        renderSectionHeader={({ section }) => (
          <View className="mb-2 mt-4">
            <Text className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {section.title}
            </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
    </Screen>
  );
}
