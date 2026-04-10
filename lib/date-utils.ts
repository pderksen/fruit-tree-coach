/** Get the Monday of the week containing the given date. */
export function getWeekStart(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  // Sunday (0) → go back 6, else go back (day - 1)
  const diff = day === 0 ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

/** Get the Sunday of the week containing the given date. */
export function getWeekEnd(date: Date): Date {
  const start = getWeekStart(date);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return end;
}

/**
 * Format a week range label, e.g. "Apr 6 – 12" or "Mar 30 – Apr 5"
 * when the week spans two months.
 */
export function formatWeekRange(date: Date): string {
  const start = getWeekStart(date);
  const end = getWeekEnd(date);

  const startMonth = start.toLocaleDateString("en-US", { month: "short" });
  const endMonth = end.toLocaleDateString("en-US", { month: "short" });

  if (startMonth === endMonth) {
    return `${startMonth} ${start.getDate()} – ${end.getDate()}`;
  }
  return `${startMonth} ${start.getDate()} – ${endMonth} ${end.getDate()}`;
}

/** ISO date string for the Monday of the week, used as a grouping key. */
export function getWeekKey(date: Date): string {
  const start = getWeekStart(date);
  return start.toISOString().slice(0, 10);
}
