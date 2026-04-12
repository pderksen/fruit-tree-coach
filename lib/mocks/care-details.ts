import type { Task } from "@/lib/types";

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

// EXPERT_TIPS → lib/care/expert-tips.ts
// COACH_TIPS → lib/care/coach-tips.ts
// CURRENT_SEASON_STAGE → lib/care/season-stage.ts
