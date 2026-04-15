/**
 * Date-aware task window logic.
 *
 * A task template declares a seasonal window as month/day pairs. At render
 * time we compare today against that window and classify the task as
 * upcoming / active / late / hidden. Pure functions only — callers pass
 * `today` so tests stay deterministic.
 */

export interface MonthDay {
  month: number; // 1-12
  day: number; // 1-31
}

export type TaskStatus = "upcoming" | "active" | "late" | "urgent";

export interface WindowedTask {
  windowStart?: MonthDay;
  windowEnd?: MonthDay;
  /** ISO timestamp of the latest completion for this task, if any. */
  lastCompletedAt?: string;
}

export interface TaskStatusResult {
  status: TaskStatus | "hidden";
  /** Human copy for the card, e.g. "This week", "Starts Apr 20", "Ended Apr 5". */
  displayWindow: string;
  /** Resolved start date for the nearest instance of the window, if any. */
  resolvedStart?: Date;
  /** Resolved end date for the nearest instance of the window, if any. */
  resolvedEnd?: Date;
}

const SLACK_DAYS_BEFORE = 14;
const LATE_DAYS_AFTER = 14;
const URGENT_DAYS_AFTER = 28;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function atMidnight(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function buildDate(year: number, md: MonthDay): Date {
  return new Date(year, md.month - 1, md.day);
}

function diffDays(a: Date, b: Date): number {
  return Math.round((a.getTime() - b.getTime()) / MS_PER_DAY);
}

/**
 * Resolve a (possibly year-wrapping) window to the concrete [start, end] pair
 * nearest to `today`. If windowEnd's month/day falls before windowStart's
 * (e.g. Dec 15 → Feb 1), the window wraps the new year — we pick whichever
 * instance minimizes distance from today.
 */
function resolveWindow(
  windowStart: MonthDay,
  windowEnd: MonthDay,
  today: Date,
): { start: Date; end: Date } {
  const year = today.getFullYear();
  const wrapsYear =
    windowEnd.month < windowStart.month ||
    (windowEnd.month === windowStart.month && windowEnd.day < windowStart.day);

  if (!wrapsYear) {
    return { start: buildDate(year, windowStart), end: buildDate(year, windowEnd) };
  }

  const candidates = [
    {
      start: buildDate(year - 1, windowStart),
      end: buildDate(year, windowEnd),
    },
    {
      start: buildDate(year, windowStart),
      end: buildDate(year + 1, windowEnd),
    },
  ];

  let best = candidates[0];
  let bestDist = Infinity;
  for (const c of candidates) {
    const dist =
      today < c.start
        ? c.start.getTime() - today.getTime()
        : today > c.end
          ? today.getTime() - c.end.getTime()
          : 0;
    if (dist < bestDist) {
      bestDist = dist;
      best = c;
    }
  }
  return best;
}

const SHORT_MONTHS = [
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
];

function formatShort(d: Date): string {
  return `${SHORT_MONTHS[d.getMonth()]} ${d.getDate()}`;
}

function formatDisplay(
  status: TaskStatus,
  start: Date,
  end: Date,
  today: Date,
): string {
  const daysToStart = diffDays(start, today);
  const daysToEnd = diffDays(end, today);
  if (status === "upcoming") return `Starts ${formatShort(start)}`;
  if (status === "late" || status === "urgent")
    return `Ended ${formatShort(end)}`;
  // active
  if (daysToEnd <= 7) return `Ends ${formatShort(end)}`;
  if (daysToStart >= -6) return "This week";
  return `Through ${formatShort(end)}`;
}

/**
 * Classify a task relative to today. Tasks without both window bounds are
 * treated as always-active (no seasonality).
 */
export function computeTaskStatus(
  task: WindowedTask,
  today: Date,
): TaskStatusResult {
  if (!task.windowStart || !task.windowEnd) {
    // Always-active task: if completed at any point, hide it. No cycle to reset.
    if (task.lastCompletedAt) {
      return { status: "hidden", displayWindow: "" };
    }
    return { status: "active", displayWindow: "" };
  }

  const t = atMidnight(today);
  const { start, end } = resolveWindow(task.windowStart, task.windowEnd, t);

  // If the task was completed on or after this window's start, it's done for
  // this cycle — hide it until next year's window approaches.
  if (task.lastCompletedAt) {
    const completed = new Date(task.lastCompletedAt);
    if (completed >= start) {
      return {
        status: "hidden",
        displayWindow: "",
        resolvedStart: start,
        resolvedEnd: end,
      };
    }
  }

  const daysToStart = diffDays(start, t);
  const daysAfterEnd = diffDays(t, end);

  let status: TaskStatusResult["status"];
  if (daysToStart > SLACK_DAYS_BEFORE) {
    status = "hidden";
  } else if (daysToStart > 0) {
    status = "upcoming";
  } else if (daysAfterEnd <= 0) {
    status = "active";
  } else if (daysAfterEnd <= LATE_DAYS_AFTER) {
    // First two weeks past window end: gentle reminder.
    status = "late";
  } else if (daysAfterEnd <= URGENT_DAYS_AFTER) {
    // Weeks 3–4 past window end: stronger signal, task really needs attention.
    status = "urgent";
  } else {
    // After 4 weeks, treat the window as missed and move on.
    status = "hidden";
  }

  return {
    status,
    displayWindow: status === "hidden" ? "" : formatDisplay(status, start, end, t),
    resolvedStart: start,
    resolvedEnd: end,
  };
}

/**
 * Filter + decorate: returns only tasks whose status is not `hidden`, each
 * annotated with its computed status and displayWindow. Input order is
 * preserved; callers can re-sort by status if desired.
 */
export function filterVisibleTasks<T extends WindowedTask>(
  tasks: T[],
  today: Date,
): (T & { status: TaskStatus; displayWindow: string })[] {
  const out: (T & { status: TaskStatus; displayWindow: string })[] = [];
  for (const task of tasks) {
    const { status, displayWindow } = computeTaskStatus(task, today);
    if (status === "hidden") continue;
    out.push({ ...task, status, displayWindow });
  }
  return out;
}
