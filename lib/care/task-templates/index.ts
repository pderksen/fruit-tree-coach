/**
 * Care task templates keyed by species.
 *
 * Each template declares a seasonal window as month/day pairs. The
 * date-aware layer in `task-windows.ts` uses today's date to pick which
 * templates surface as active / upcoming / late.
 *
 * Per-species template arrays live in sibling files (one per tree).
 * This barrel re-exports the public API so callers can keep importing
 * from `@/lib/care/task-templates` unchanged.
 *
 * Sources are cited per CLAUDE.md — all horticultural advice must be
 * defensible. Windows are typical-zone ranges from the cited extension
 * guides; zone shift is intentionally deferred (see plan doc).
 */

import type { FruitTreeType, TaskCategory } from "@/lib/types";
import { computeTaskStatus, type MonthDay } from "@/lib/care/task-windows";

import { apple } from "./apple";
import { peach } from "./peach";
import { lemon } from "./lemon";
import { fig } from "./fig";
import { cherry } from "./cherry";
import { plum } from "./plum";
import { apricot } from "./apricot";
import { nectarine } from "./nectarine";

export interface TaskTemplate {
  id: string;
  species: FruitTreeType;
  title: string;
  why: string;
  description: string;
  category: TaskCategory;
  windowStart: MonthDay;
  windowEnd: MonthDay;
  source: string;
}

export const TASK_TEMPLATES: Partial<Record<FruitTreeType, TaskTemplate[]>> = {
  Apple: apple,
  Peach: peach,
  Lemon: lemon,
  Fig: fig,
  Cherry: cherry,
  Plum: plum,
  Apricot: apricot,
  Nectarine: nectarine,
};

export function getTemplatesForSpecies(species: FruitTreeType): TaskTemplate[] {
  return TASK_TEMPLATES[species] ?? [];
}

/**
 * When a user adds a tree, we only seed tasks that are still visible today —
 * skipping any whose window ended more than the urgent threshold (28 days) ago.
 * Those would render as hidden anyway, so seeding them just clutters the DB.
 */
export function selectSeedableTemplates(
  templates: TaskTemplate[],
  today: Date,
): TaskTemplate[] {
  return templates.filter(
    (t) =>
      computeTaskStatus(
        { windowStart: t.windowStart, windowEnd: t.windowEnd },
        today,
      ).status !== "hidden",
  );
}
