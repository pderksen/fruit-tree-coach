import { describe, expect, it } from "vitest";

import {
  computeTaskStatus,
  filterVisibleTasks,
  type MonthDay,
} from "./task-windows";

const feb1: MonthDay = { month: 2, day: 1 };
const mar15: MonthDay = { month: 3, day: 15 };
const dec15: MonthDay = { month: 12, day: 15 };

function d(y: number, m: number, day: number): Date {
  return new Date(y, m - 1, day);
}

describe("computeTaskStatus", () => {
  it("hidden when today is more than 14 days before window start", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 1, 1),
    );
    expect(result.status).toBe("hidden");
    expect(result.displayWindow).toBe("");
  });

  it("upcoming when within 14 days before window start", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 1, 25),
    );
    expect(result.status).toBe("upcoming");
    expect(result.displayWindow).toBe("Starts Feb 1");
  });

  it("active on the start boundary", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 2, 1),
    );
    expect(result.status).toBe("active");
  });

  it("active mid-window shows 'This week' early", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 2, 5),
    );
    expect(result.status).toBe("active");
    expect(result.displayWindow).toBe("This week");
  });

  it("active near end shows 'Ends {date}'", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 3, 12),
    );
    expect(result.status).toBe("active");
    expect(result.displayWindow).toBe("Ends Mar 15");
  });

  it("active on the end boundary", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 3, 15),
    );
    expect(result.status).toBe("active");
  });

  it("late within 14 days after window end", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 3, 25),
    );
    expect(result.status).toBe("late");
    expect(result.displayWindow).toBe("Ended Mar 15");
  });

  it("urgent between 15 and 28 days after window end", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 4, 5), // 21 days after Mar 15
    );
    expect(result.status).toBe("urgent");
    expect(result.displayWindow).toBe("Ended Mar 15");
  });

  it("hidden more than 28 days after window end (auto-moves on)", () => {
    const result = computeTaskStatus(
      { windowStart: feb1, windowEnd: mar15 },
      d(2026, 4, 15), // 31 days after Mar 15
    );
    expect(result.status).toBe("hidden");
  });

  it("always-active when window bounds missing", () => {
    const result = computeTaskStatus({}, d(2026, 7, 1));
    expect(result.status).toBe("active");
    expect(result.displayWindow).toBe("");
  });

  describe("year-wrapping windows (Dec 15 -> Feb 1)", () => {
    const wrap = { windowStart: dec15, windowEnd: feb1 };

    it("active in late December", () => {
      expect(computeTaskStatus(wrap, d(2026, 12, 20)).status).toBe("active");
    });

    it("active in mid-January", () => {
      expect(computeTaskStatus(wrap, d(2026, 1, 15)).status).toBe("active");
    });

    it("upcoming in early December", () => {
      expect(computeTaskStatus(wrap, d(2026, 12, 5)).status).toBe("upcoming");
    });

    it("late in mid-February", () => {
      expect(computeTaskStatus(wrap, d(2026, 2, 10)).status).toBe("late");
    });

    it("hidden in summer (beyond 28-day urgent window)", () => {
      expect(computeTaskStatus(wrap, d(2026, 7, 1)).status).toBe("hidden");
    });
  });
});

describe("filterVisibleTasks", () => {
  it("drops hidden tasks and annotates the rest with urgency", () => {
    const tasks = [
      { id: "a", windowStart: feb1, windowEnd: mar15 }, // 41 days past end -> hidden
      { id: "b", windowStart: { month: 4, day: 1 }, windowEnd: { month: 5, day: 1 } }, // active
      { id: "c" }, // no window -> always-active
      { id: "d", windowStart: { month: 7, day: 1 }, windowEnd: { month: 7, day: 14 } }, // too far upcoming
    ];
    const result = filterVisibleTasks(tasks, d(2026, 4, 25));
    expect(result.map((t) => t.id)).toEqual(["b", "c"]);
    expect(result[0].status).toBe("active");
    expect(result[1].status).toBe("active");
  });

  it("preserves input order", () => {
    const tasks = [
      { id: "b", windowStart: { month: 4, day: 1 }, windowEnd: { month: 5, day: 1 } },
      { id: "a", windowStart: { month: 4, day: 10 }, windowEnd: { month: 4, day: 20 } },
    ];
    const result = filterVisibleTasks(tasks, d(2026, 4, 15));
    expect(result.map((t) => t.id)).toEqual(["b", "a"]);
  });
});
