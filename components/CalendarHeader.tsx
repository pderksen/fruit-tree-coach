import { useRef, useEffect, useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ViewToken,
} from "react-native";

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
// Virtualized window of weeks around the anchor. 53 weeks each direction
// covers ~1 year of swiping before we'd need to re-anchor.
const WEEK_RADIUS = 53;
const TOTAL_WEEKS = WEEK_RADIUS * 2 + 1;

interface CalendarHeaderProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

/** Monday of the week containing `date`. */
function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const monday = new Date(d);
  monday.setDate(d.getDate() - ((day + 6) % 7));
  monday.setHours(0, 0, 0, 0);
  return monday;
}

/** Seven dates (Mon–Sun) starting at `monday`. */
function buildWeek(monday: Date): Date[] {
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

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

const WEEKDAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function CalendarHeader({
  selectedDate,
  onSelectDate,
}: CalendarHeaderProps) {
  const monthScrollRef = useRef<ScrollView>(null);
  const weekListRef = useRef<FlatList<Date>>(null);
  const [weekRowWidth, setWeekRowWidth] = useState(0);
  // `today` and `anchorMonday` are captured at mount. The parent owns
  // re-mounting via a `key` prop whenever it needs the strip to snap back
  // to the current day, so freezing them per-mount is fine — no churn
  // during the user's normal interactions.
  const today = useMemo(() => new Date(), []);
  const currentMonth = selectedDate.getMonth();
  const anchorMonday = useRef(getWeekStart(new Date())).current;

  const monthLabel = selectedDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Index math: each offset from anchor = one week.
  const weekMondayForIndex = useCallback(
    (index: number) => addDays(anchorMonday, (index - WEEK_RADIUS) * 7),
    [anchorMonday],
  );

  const indexForDate = useCallback(
    (date: Date) => {
      const monday = getWeekStart(date);
      const diffDays = Math.round(
        (monday.getTime() - anchorMonday.getTime()) / (1000 * 60 * 60 * 24),
      );
      return WEEK_RADIUS + Math.round(diffDays / 7);
    },
    [anchorMonday],
  );

  const weekIndices = useMemo(
    () => Array.from({ length: TOTAL_WEEKS }, (_, i) => weekMondayForIndex(i)),
    [weekMondayForIndex],
  );

  // Keep the list positioned on the selected week when selectedDate changes
  // from outside (e.g. month pill tap). Guarded by `isScrollingRef` so we
  // don't fight user-driven swipes.
  const isScrollingRef = useRef(false);
  const targetIndexRef = useRef(indexForDate(selectedDate));

  useEffect(() => {
    const idx = indexForDate(selectedDate);
    targetIndexRef.current = idx;
    if (!isScrollingRef.current && weekRowWidth > 0) {
      weekListRef.current?.scrollToIndex({ index: idx, animated: true });
    }
  }, [selectedDate, indexForDate, weekRowWidth]);

  // Scroll to current month pill when month changes
  useEffect(() => {
    const timer = setTimeout(() => {
      monthScrollRef.current?.scrollTo({
        x: Math.max(0, currentMonth * MONTH_PILL_WIDTH - MONTH_PILL_WIDTH),
        animated: true,
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

  const handleDayPress = useCallback(
    (date: Date) => {
      onSelectDate(date);
    },
    [onSelectDate],
  );

  // When a new week page settles, pick the same weekday in the new week so
  // month auto-sync is driven by `selectedDate` flowing up through the parent.
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (!isScrollingRef.current) return;
      if (viewableItems.length === 0) return;
      const centered = viewableItems[0];
      if (centered.index == null) return;
      targetIndexRef.current = centered.index;
    },
  ).current;

  const onMomentumScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      isScrollingRef.current = false;
      if (weekRowWidth === 0) return;
      const idx = Math.round(e.nativeEvent.contentOffset.x / weekRowWidth);
      const newMonday = weekMondayForIndex(idx);
      const currentWeekday = (selectedDate.getDay() + 6) % 7; // Mon=0..Sun=6
      const next = addDays(newMonday, currentWeekday);
      if (!isSameDay(next, selectedDate)) onSelectDate(next);
    },
    [weekRowWidth, weekMondayForIndex, selectedDate, onSelectDate],
  );

  const onScrollBeginDrag = useCallback(() => {
    isScrollingRef.current = true;
  }, []);

  const renderWeek = useCallback(
    ({ item: monday }: { item: Date }) => {
      const week = buildWeek(monday);
      return (
        <View
          style={{ width: weekRowWidth }}
          className="flex-row justify-between"
        >
          {week.map((date, i) => {
            const isToday = isSameDay(date, today);
            const isSelected = isSameDay(date, selectedDate);
            return (
              <Pressable
                key={i}
                onPress={() => handleDayPress(date)}
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
      );
    },
    [weekRowWidth, today, selectedDate, handleDayPress],
  );

  const getItemLayout = useCallback(
    (_: ArrayLike<Date> | null | undefined, index: number) => ({
      length: weekRowWidth,
      offset: weekRowWidth * index,
      index,
    }),
    [weekRowWidth],
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

      {/* Paged week swiper */}
      <View
        onLayout={(e) => setWeekRowWidth(e.nativeEvent.layout.width)}
        style={{ width: "100%" }}
      >
        {weekRowWidth > 0 && (
          <FlatList
            ref={weekListRef}
            data={weekIndices}
            keyExtractor={(d) => d.toISOString()}
            renderItem={renderWeek}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={indexForDate(selectedDate)}
            getItemLayout={getItemLayout}
            onScrollBeginDrag={onScrollBeginDrag}
            onMomentumScrollEnd={onMomentumScrollEnd}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
            decelerationRate="fast"
            removeClippedSubviews
            windowSize={5}
            initialNumToRender={3}
            maxToRenderPerBatch={3}
          />
        )}
      </View>
    </View>
  );
}
