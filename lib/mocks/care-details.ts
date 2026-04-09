import type { DetailedTask, ExpertTip, FruitTreeType, SeasonStage } from "@/lib/types";

/**
 * Mock detailed tasks keyed by tree ID.
 * Sources cited per CLAUDE.md — all horticultural advice is defensible.
 */
export const MOCK_DETAILED_TASKS: Record<string, DetailedTask[]> = {
  // Honeycrisp Apple
  "1": [
    {
      id: "dt1",
      treeId: "1",
      treeName: "Honeycrisp Apple",
      title: "Winter pruning",
      why: "Removing crossing branches improves air circulation and reduces disease risk.",
      done: false,
      priority: true,
      timeWindow: "Best window: Late February",
      // Source: Oregon State University Extension — PNW 400
      description:
        "The sap is still dormant, making it the perfect time to shape your tree. Focus on removing the \"three Ds\": Dead, Damaged, or Diseased branches.",
      season: "Late Winter",
    },
    {
      id: "dt2",
      treeId: "1",
      treeName: "Honeycrisp Apple",
      title: "Thinning fruits",
      why: "Prevents limb breakage and ensures larger fruit size.",
      done: false,
      priority: false,
      season: "Early Summer",
      // Source: University of Minnesota Extension — apple thinning guide
      description:
        "Remove excess fruit to prevent branch breakage and ensure the remaining fruit grows larger and sweeter.",
    },
    {
      id: "dt3",
      treeId: "1",
      treeName: "Honeycrisp Apple",
      title: "Organic Fertilizing",
      why: "Supports healthy spring growth and fruit set.",
      done: false,
      priority: false,
      season: "Early Spring",
      // Source: WSU Extension — Home Orchard Fertility
      description:
        "Apply compost around the drip line before bloom.",
    },
  ],
  // Elberta Peach
  "2": [
    {
      id: "dt4",
      treeId: "2",
      treeName: "Elberta Peach",
      title: "Bud monitoring",
      why: "Early detection of bud swell helps time pest sprays.",
      done: false,
      priority: true,
      timeWindow: "Best window: Early March",
      // Source: Clemson Cooperative Extension — Peach Care Calendar
      description:
        "Watch for pink bud tips — that signals the tree is breaking dormancy. A well-timed dormant oil spray now prevents scale and mite issues later.",
      season: "Early Spring",
    },
  ],
  // Meyer Lemon
  "3": [
    {
      id: "dt5",
      treeId: "3",
      treeName: "Meyer Lemon",
      title: "Spring feeding",
      why: "Citrus are heavy feeders and need consistent nutrition.",
      done: false,
      priority: true,
      timeWindow: "Best window: March–April",
      // Source: UC Davis — Citrus for the Home Garden
      description:
        "Apply a balanced citrus fertilizer. Meyer lemons benefit from micronutrients like iron and zinc, especially in alkaline soils.",
      season: "Spring",
    },
  ],
  // Brown Turkey Fig
  "4": [
    {
      id: "dt6",
      treeId: "4",
      treeName: "Brown Turkey Fig",
      title: "Check drainage",
      why: "Figs are drought-tolerant but hate wet feet.",
      done: false,
      priority: true,
      timeWindow: "Best window: Early Spring",
      // Source: Texas A&M AgriLife Extension — Figs
      description:
        "Ensure the soil around your fig drains freely. Amend heavy clay with compost. Mulch to retain moisture without waterlogging.",
      season: "Spring",
    },
  ],
};

/**
 * Expert tips keyed by fruit tree type.
 * Sources cited inline.
 */
export const MOCK_EXPERT_TIPS: Partial<Record<FruitTreeType, ExpertTip[]>> = {
  // Source: General horticultural wisdom, widely cited in extension literature
  Apple: [
    { quote: "Pruning helps air circulation. If a bird can't fly through your tree, it's too dense.", attribution: "Master Gardener Pete" },
    { quote: "Mulch like a donut, not a volcano. Keep it away from the trunk.", attribution: "Master Gardener Pete" },
  ],
  Peach: [
    { quote: "Peaches fruit on last year's wood — prune boldly to encourage fresh growth.", attribution: "Extension Horticulturist" },
    { quote: "A well-thinned peach tree gives you fewer but far superior fruits.", attribution: "Extension Horticulturist" },
  ],
  Lemon: [
    { quote: "Lemon trees love at least 6–8 hours of direct sunlight. Ensure your chosen spot is the sunniest patch in your orchard.", attribution: "Citrus Specialist" },
    { quote: "Yellow leaves on citrus often mean iron deficiency, not overwatering.", attribution: "Citrus Specialist" },
  ],
  Fig: [
    { quote: "Figs are forgiving — they thrive on neglect better than most fruit trees.", attribution: "Southern Garden Expert" },
    { quote: "Protect young figs from frost with burlap wrapping in their first few winters.", attribution: "Southern Garden Expert" },
  ],
  Pear: [
    { quote: "Pears ripen from the inside out — pick them firm and let them finish on the counter.", attribution: "Extension Horticulturist" },
    { quote: "Fire blight spreads in wet weather — prune only when it's dry.", attribution: "Extension Horticulturist" },
  ],
  Cherry: [
    { quote: "Cherries need cold winters to set fruit — 700+ chill hours for most varieties.", attribution: "Orchard Consultant" },
    { quote: "Bird netting is the cherry grower's best friend.", attribution: "Orchard Consultant" },
  ],
  Plum: [
    { quote: "Japanese plums bloom early — site them where late frost won't catch the blossoms.", attribution: "Extension Horticulturist" },
    { quote: "Thin plums to 4–6 inches apart for the best fruit size.", attribution: "Extension Horticulturist" },
  ],
  Orange: [
    { quote: "Don't prune orange trees heavily — they fruit on old and new wood alike.", attribution: "Citrus Specialist" },
    { quote: "A deep soak once a week beats daily sprinkles for citrus roots.", attribution: "Citrus Specialist" },
  ],
  Lime: [
    { quote: "Limes are the most cold-sensitive citrus — bring potted trees indoors below 50°F.", attribution: "Citrus Specialist" },
    { quote: "Pick limes when they give slightly to pressure, not when they turn yellow.", attribution: "Citrus Specialist" },
  ],
};

/**
 * Coach tips for the new tree form, keyed by fruit type.
 */
export const MOCK_COACH_TIPS: Partial<Record<FruitTreeType, string>> = {
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

/**
 * Current season stage per fruit type (mocked for early spring, April 2026).
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
