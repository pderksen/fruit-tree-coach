import { describe, expect, it } from "vitest";

import { selectSeedableTemplates, type TaskTemplate } from "./task-templates";

function tpl(
  id: string,
  start: { month: number; day: number },
  end: { month: number; day: number },
): TaskTemplate {
  return {
    id,
    species: "Apple",
    title: id,
    why: "",
    description: "",
    category: "pruning",
    windowStart: start,
    windowEnd: end,
    source: "test",
  };
}

describe("selectSeedableTemplates", () => {
  const today = new Date(2026, 3, 15); // Apr 15, 2026

  it("keeps templates whose window is upcoming, active, late, or urgent", () => {
    const templates = [
      tpl("active", { month: 4, day: 1 }, { month: 5, day: 1 }),
      tpl("upcoming", { month: 4, day: 25 }, { month: 5, day: 10 }),
      tpl("late", { month: 3, day: 20 }, { month: 4, day: 5 }), // ended 10 days ago
      tpl("urgent", { month: 2, day: 20 }, { month: 3, day: 20 }), // ended 26 days ago
    ];
    const result = selectSeedableTemplates(templates, today);
    expect(result.map((t) => t.id)).toEqual([
      "active",
      "upcoming",
      "late",
      "urgent",
    ]);
  });

  it("drops templates whose window ended more than 28 days ago", () => {
    const templates = [
      tpl("stale", { month: 1, day: 1 }, { month: 2, day: 1 }), // ended 73 days ago
      tpl("keep", { month: 4, day: 1 }, { month: 5, day: 1 }),
    ];
    const result = selectSeedableTemplates(templates, today);
    expect(result.map((t) => t.id)).toEqual(["keep"]);
  });

  it("drops templates whose window starts more than 14 days out", () => {
    const templates = [
      tpl("far-future", { month: 7, day: 1 }, { month: 7, day: 14 }),
    ];
    expect(selectSeedableTemplates(templates, today)).toEqual([]);
  });
});
