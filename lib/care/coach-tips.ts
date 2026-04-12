import type { FruitTreeType } from "@/lib/types";

/**
 * Coach tips shown on the new-tree form, keyed by fruit type.
 * Static reference content.
 */
export const COACH_TIPS: Partial<Record<FruitTreeType, string>> = {
  Apple: "Apple trees need a pollination partner nearby. Consider planting a second variety within 50 feet for the best fruit set.",
  Peach: "Peach trees are self-fertile — one tree is enough! Plant in a sunny, sheltered spot with good air drainage to prevent frost damage.",
  Lemon: "Lemon trees love at least 6–8 hours of direct sunlight. Ensure your chosen spot is the sunniest patch in your orchard.",
  Fig: "Figs thrive in warm, sheltered spots. Plant near a south-facing wall to maximize heat retention and protect from winter winds.",
  Pear: "Most pears need a cross-pollinator. Bartlett and Anjou make a great pairing for reliable fruit set.",
  Cherry: "Sweet cherries need another variety for cross-pollination, but sour cherries are self-fertile. Choose based on your space.",
  Plum: "European plums are mostly self-fertile, while Japanese plums need a pollinator. Check your variety before planting solo.",
  Orange: "Orange trees are evergreen and need consistent watering year-round. A thick mulch ring helps retain soil moisture.",
  Lime: "Lime trees are very frost-sensitive. In cooler climates, keep them in containers so you can bring them indoors for winter.",
};
