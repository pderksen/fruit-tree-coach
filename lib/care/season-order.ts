/**
 * Season ordering utility.
 * Rotates the season list so the next upcoming season comes first,
 * allowing "What to do later" tasks to be sorted chronologically.
 */

const SEASON_ORDER = [
  "Early Spring",
  "Spring",
  "Late Spring",
  "Early Summer",
  "Summer",
  "Late Summer",
  "Fall",
  "Late Fall",
  "Winter",
  "Late Winter",
] as const;

/** Map each month (0-based) to its primary season. */
const MONTH_TO_SEASON: Record<number, string> = {
  0: "Winter",
  1: "Late Winter",
  2: "Early Spring",
  3: "Spring",
  4: "Late Spring",
  5: "Early Summer",
  6: "Summer",
  7: "Late Summer",
  8: "Fall",
  9: "Fall",
  10: "Late Fall",
  11: "Winter",
};

/**
 * Return the SEASON_ORDER array rotated so the current (or next) season
 * is at index 0. Tasks whose season appears earlier in the rotated list
 * should be shown first.
 */
export function getRotatedSeasonOrder(now: Date = new Date()): string[] {
  const currentSeason = MONTH_TO_SEASON[now.getMonth()];
  const idx = SEASON_ORDER.indexOf(currentSeason as (typeof SEASON_ORDER)[number]);
  const startIdx = idx === -1 ? 0 : idx;
  return [
    ...SEASON_ORDER.slice(startIdx),
    ...SEASON_ORDER.slice(0, startIdx),
  ];
}

/**
 * Sort comparator for DetailedTask objects by upcoming season.
 * Tasks without a `season` field sort to the end.
 */
export function compareByUpcomingSeason(
  aSeason: string | undefined,
  bSeason: string | undefined,
  rotatedOrder: string[],
): number {
  const aIdx = aSeason ? rotatedOrder.indexOf(aSeason) : rotatedOrder.length;
  const bIdx = bSeason ? rotatedOrder.indexOf(bSeason) : rotatedOrder.length;
  // Unknown seasons also sort to end
  const aFinal = aIdx === -1 ? rotatedOrder.length : aIdx;
  const bFinal = bIdx === -1 ? rotatedOrder.length : bIdx;
  return aFinal - bFinal;
}
