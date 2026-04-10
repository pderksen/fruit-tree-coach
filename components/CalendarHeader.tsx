import { useRef, useEffect, useCallback } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const MONTH_PILL_WIDTH = 56;
const DAY_CELL_SIZE = 40;

interface CalendarHeaderProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

/** Get all dates in the week (Mon–Sun) containing `date`. */
function getWeekDates(date: Date): Date[] {
  const d = new Date(date);
  const day = d.getDay();
  const monday = new Date(d);
  monday.setDate(d.getDate() - ((day + 6) % 7));

  const week: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const wd = new Date(monday);
    wd.setDate(monday.getDate() + i);
    week.push(wd);
  }
  return week;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function CalendarHeader({
  selectedDate,
  onSelectDate,
}: CalendarHeaderProps) {
  const monthScrollRef = useRef<ScrollView>(null);
  const today = new Date();
  const currentMonth = selectedDate.getMonth();
  const weekDates = getWeekDates(selectedDate);

  const monthLabel = selectedDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Scroll to current month pill on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      monthScrollRef.current?.scrollTo({
        x: Math.max(0, currentMonth * MONTH_PILL_WIDTH - MONTH_PILL_WIDTH),
        animated: false,
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [currentMonth]);

  const handleMonthPress = useCallback(
    (monthIndex: number) => {
      const newDate = new Date(selectedDate);
      newDate.setMonth(monthIndex);
      newDate.setDate(1);
      onSelectDate(newDate);
    },
    [selectedDate, onSelectDate],
  );

  return (
    <View className="mb-3">
      {/* Month / year heading */}
      <Text className="mb-3 text-2xl font-bold text-gray-900">
        {monthLabel}
      </Text>

      {/* Horizontal month pills */}
      <ScrollView
        ref={monthScrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4"
        contentContainerStyle={{ gap: 8 }}
      >
        {MONTHS.map((label, i) => {
          const isActive = i === currentMonth;
          return (
            <Pressable
              key={label}
              onPress={() => handleMonthPress(i)}
              className={`items-center justify-center rounded-full px-4 py-1.5 ${
                isActive ? "bg-brand-700" : "bg-gray-100"
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  isActive ? "text-white" : "text-gray-600"
                }`}
              >
                {label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Day row for selected week */}
      <View className="flex-row justify-between">
        {weekDates.map((date, i) => {
          const isToday = isSameDay(date, today);
          const isSelected = isSameDay(date, selectedDate);

          return (
            <Pressable
              key={i}
              onPress={() => onSelectDate(date)}
              className="items-center"
              style={{ width: DAY_CELL_SIZE }}
            >
              <Text className="mb-1 text-xs text-gray-400">
                {WEEKDAY_LABELS[i]}
              </Text>
              <View
                className={`h-9 w-9 items-center justify-center rounded-full ${
                  isToday
                    ? "bg-brand-700"
                    : isSelected
                      ? "bg-brand-100"
                      : ""
                }`}
              >
                <Text
                  className={`text-sm font-semibold ${
                    isToday
                      ? "text-white"
                      : isSelected
                        ? "text-brand-700"
                        : "text-gray-700"
                  }`}
                >
                  {date.getDate()}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
