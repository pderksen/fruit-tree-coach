import type { Task, ExpertTip, FruitTreeType, SeasonStage } from "@/lib/types";

/**
 * Mock detailed tasks keyed by tree ID.
 * Sources cited per CLAUDE.md — all horticultural advice is defensible.
 */
export const MOCK_DETAILED_TASKS: Record<string, Task[]> = {
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
    {
      id: "dt7",
      treeId: "1",
      treeName: "Honeycrisp Apple",
      title: "Dormant oil spray",
      why: "Smothers overwintering scale, mites, and aphid eggs before they hatch.",
      done: false,
      priority: false,
      season: "Late Winter",
      // Source: Oregon State Extension — Dormant Season Pest Control
      description:
        "Apply horticultural oil when temps are above 40 °F and the tree is still dormant. Coat all bark surfaces thoroughly.",
    },
    {
      id: "dt8",
      treeId: "1",
      treeName: "Honeycrisp Apple",
      title: "Harvest readiness check",
      why: "Picking at the right time ensures best flavor and storage life.",
      done: false,
      priority: false,
      season: "Fall",
      // Source: University of Minnesota Extension — Harvesting Apples
      description:
        "Use the stem-twist test: cradle the apple and twist gently. If it separates easily, it's ready. Check seed color (dark brown = ripe) and flesh firmness.",
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
    {
      id: "dt9",
      treeId: "2",
      treeName: "Elberta Peach",
      title: "Peach leaf curl prevention",
      why: "Leaf curl fungus overwinters on bark — a single well-timed spray prevents it.",
      done: false,
      priority: false,
      season: "Late Winter",
      // Source: UC IPM — Peach Leaf Curl
      description:
        "Apply copper fungicide before bud break when buds are still dormant. One thorough application is usually sufficient for the season.",
    },
    {
      id: "dt10",
      treeId: "2",
      treeName: "Elberta Peach",
      title: "Peach tree pruning",
      why: "Peaches fruit on last year's wood — annual pruning encourages fresh fruiting wood.",
      done: false,
      priority: false,
      season: "Late Winter",
      // Source: University of Georgia Extension — Peach Pruning
      description:
        "Prune to an open-vase shape. Remove inward-growing branches and last year's fruiting wood to encourage new growth.",
    },
    {
      id: "dt11",
      treeId: "2",
      treeName: "Elberta Peach",
      title: "Harvest window",
      why: "Peaches don't improve after picking — timing is everything.",
      done: false,
      priority: false,
      season: "Summer",
      // Source: Clemson Extension — Peach Harvest
      description:
        "Check for full color change (no green on the ground color), slight softness when pressed near the stem, and a sweet fragrance. Twist gently to pick.",
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
    {
      id: "dt12",
      treeId: "3",
      treeName: "Meyer Lemon",
      title: "Scale and aphid inspection",
      why: "Early detection prevents colonies from establishing and weakening the tree.",
      done: false,
      priority: false,
      season: "Spring",
      // Source: UC Davis — Citrus Pest Management
      description:
        "Check undersides of leaves and stems for sticky honeydew, sooty mould, or small bumps (scale). Treat with neem oil or insecticidal soap if found.",
    },
    {
      id: "dt13",
      treeId: "3",
      treeName: "Meyer Lemon",
      title: "Citrus harvest",
      why: "Meyer lemons can be picked year-round once they reach full color.",
      done: false,
      priority: false,
      season: "Fall",
      // Source: UC Davis — Citrus for the Home Garden
      description:
        "Harvest when fruit is deep yellow and gives slightly to pressure. Taste-test one — citrus won't sweeten further after picking. Cut, don't pull, to avoid tearing bark.",
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
    {
      id: "dt14",
      treeId: "4",
      treeName: "Brown Turkey Fig",
      title: "Fig beetle monitoring",
      why: "Green fig beetles feed on ripe fruit — early monitoring reduces losses.",
      done: false,
      priority: false,
      season: "Summer",
      // Source: Texas A&M Extension — Fig Pests
      description:
        "Watch for large iridescent green beetles around ripening fruit. Use fruit bags or fine netting on clusters to protect the crop. Remove fallen fruit to reduce attraction.",
    },
    {
      id: "dt15",
      treeId: "4",
      treeName: "Brown Turkey Fig",
      title: "Fig ripeness check",
      why: "Figs must ripen on the tree — they stop ripening once picked.",
      done: false,
      priority: false,
      season: "Summer",
      // Source: Texas A&M Extension — Figs
      description:
        "Ripe figs droop on the stem, feel soft, and may show slight skin cracks. Color deepens to brown-purple for Brown Turkey. Pick gently to avoid bruising.",
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
