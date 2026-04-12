import type { FruitTreeType, SeasonStage } from "@/lib/types";

/**
 * Current season stage per fruit type.
 * Static lookup for April (early spring). Replace with date-driven logic
 * when seasonal forecast data moves to the backend.
 */
export const CURRENT_SEASON_STAGE: Partial<Record<FruitTreeType, SeasonStage>> = {
  Apple: "bloom",
  Pear: "bloom",
  Peach: "bloom",
  Cherry: "bloom",
  Plum: "bloom",
  Fig: "growth",
  Lemon: "growth",
  Orange: "growth",
  Lime: "growth",
};
