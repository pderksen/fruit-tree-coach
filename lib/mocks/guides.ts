import type { FruitTreeType } from "@/lib/types";

export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
}

export interface ProductRecommendation {
  name: string;
  category: "fertilizer" | "pruning-tool" | "pest-control" | "other";
  description: string;
}

export interface Guide {
  id: string;
  taskId: string;
  treeType: FruitTreeType;
  title: string;
  introduction: string;
  steps: GuideStep[];
  toolsNeeded: string[];
  productRecommendations: ProductRecommendation[];
  source: string;
}

/**
 * Mock step-by-step guides keyed by task ID.
 * All horticultural advice cites an extension service source.
 */
export const MOCK_GUIDES: Record<string, Guide> = {
  // Source: Oregon State University Extension — PNW 400
  dt1: {
    id: "g1",
    taskId: "dt1",
    treeType: "Apple",
    title: "Winter Pruning Guide",
    introduction:
      "Pruning while the tree is dormant reduces disease risk and makes branch structure easy to see. Focus on the \"three Ds\": Dead, Damaged, and Diseased wood.",
    steps: [
      {
        stepNumber: 1,
        title: "Inspect the canopy",
        description:
          "Walk around the tree and identify dead, crossing, or downward-growing branches. Mark them mentally or with flagging tape.",
      },
      {
        stepNumber: 2,
        title: "Remove dead and diseased wood",
        description:
          "Cut dead branches back to the nearest healthy branch collar. Sterilise pruners between cuts if you see signs of disease.",
        tip: "Use a 10% bleach solution or isopropyl alcohol to sterilise tools.",
      },
      {
        stepNumber: 3,
        title: "Thin crossing branches",
        description:
          "Where two branches rub together, remove the weaker or more inward-facing one. This improves air circulation.",
      },
      {
        stepNumber: 4,
        title: "Open the centre",
        description:
          "For an open-vase shape, remove vigorous upright shoots (water sprouts) growing into the centre of the canopy.",
        tip: "A good rule: if a bird can fly through the canopy, airflow is sufficient.",
      },
      {
        stepNumber: 5,
        title: "Clean up",
        description:
          "Gather all pruned material and dispose of it away from the tree. Diseased wood should be burned or bagged, not composted.",
      },
    ],
    toolsNeeded: [
      "Bypass hand pruners (for branches up to 3/4\")",
      "Loppers (for branches 3/4\" to 1.5\")",
      "Pruning saw (for branches over 1.5\")",
      "Sterilising solution",
      "Flagging tape (optional)",
    ],
    productRecommendations: [
      {
        name: "Felco F-2 Bypass Pruners",
        category: "pruning-tool",
        description:
          "Industry-standard hand pruners with replaceable blades. Comfortable for extended use.",
      },
      {
        name: "Corona SL 4364 Bypass Loppers",
        category: "pruning-tool",
        description:
          "Lightweight aluminium handles with non-stick blade coating. Good reach for interior branches.",
      },
      {
        name: "Silky Zubat Curved Pruning Saw",
        category: "pruning-tool",
        description:
          "Razor-sharp curved blade cuts on the pull stroke. Ideal for limbs over 1.5\" diameter.",
      },
    ],
    source: "Oregon State University Extension — PNW 400",
  },

  // Source: University of Minnesota Extension — Apple Thinning
  dt2: {
    id: "g2",
    taskId: "dt2",
    treeType: "Apple",
    title: "Fruit Thinning Guide",
    introduction:
      "Thinning prevents limb breakage, improves fruit size, and encourages consistent annual bearing. Thin 4–6 weeks after full bloom.",
    steps: [
      {
        stepNumber: 1,
        title: "Wait for \"June drop\"",
        description:
          "The tree naturally drops some fruitlets. Wait until this finishes (usually 4 weeks after bloom) before hand-thinning.",
      },
      {
        stepNumber: 2,
        title: "Identify clusters",
        description:
          "Apple flowers come in clusters of 5–6. Each cluster may set 2–4 fruitlets. Keep only the largest, healthiest one per cluster.",
      },
      {
        stepNumber: 3,
        title: "Thin to one per cluster",
        description:
          "Gently twist off the smaller fruitlets, leaving the \"king\" fruit (usually the largest, centre fruit). Aim for 6–8\" spacing between remaining fruits.",
        tip: "Thinning early produces larger fruit. Every week you delay reduces the size benefit.",
      },
      {
        stepNumber: 4,
        title: "Check the load",
        description:
          "Step back and assess each limb. If a branch still looks heavily loaded, remove more. A mature tree can support roughly 1 fruit per 40 leaves.",
      },
    ],
    toolsNeeded: [
      "Your hands (no tools required for small fruitlets)",
      "Thinning scissors (optional, for tight clusters)",
    ],
    productRecommendations: [
      {
        name: "ARS Fruit Thinning Scissors",
        category: "pruning-tool",
        description:
          "Narrow-bladed scissors designed for precise fruitlet removal without damaging nearby fruit.",
      },
    ],
    source: "University of Minnesota Extension — Apple Thinning Guide",
  },

  // Source: UC Davis — Citrus for the Home Garden
  dt5: {
    id: "g3",
    taskId: "dt5",
    treeType: "Lemon",
    title: "Spring Feeding Guide",
    introduction:
      "Citrus are heavy feeders. A balanced spring application sets the stage for healthy growth and fruit set throughout the season.",
    steps: [
      {
        stepNumber: 1,
        title: "Choose the right fertilizer",
        description:
          "Use a citrus-specific fertilizer with an NPK ratio around 6-4-6 or 8-4-6, plus iron, zinc, and manganese micronutrients.",
        tip: "Avoid fertilizers high in nitrogen only — citrus need balanced nutrition.",
      },
      {
        stepNumber: 2,
        title: "Measure the application rate",
        description:
          "Follow the label for your tree size. For a mature Meyer lemon, roughly 1–1.5 lbs of actual nitrogen per year, split across 3 applications.",
      },
      {
        stepNumber: 3,
        title: "Apply evenly under the canopy",
        description:
          "Spread fertilizer in a ring from 1 foot away from the trunk out to just beyond the drip line. Avoid piling against the trunk.",
      },
      {
        stepNumber: 4,
        title: "Water in thoroughly",
        description:
          "Irrigate immediately after application to move nutrients into the root zone and prevent salt burn.",
      },
      {
        stepNumber: 5,
        title: "Schedule next feeding",
        description:
          "Plan a second application in early summer (June) and a third in late summer (August) for year-round nutrition.",
      },
    ],
    toolsNeeded: [
      "Citrus fertilizer",
      "Measuring cup or scale",
      "Garden hose or watering can",
    ],
    productRecommendations: [
      {
        name: "Espoma Citrus-tone (5-2-6)",
        category: "fertilizer",
        description:
          "Organic granular citrus fertilizer with Bio-tone microbes. Gentle, slow-release formula safe for containers.",
      },
      {
        name: "Dr. Earth Exotic Blend Citrus Fertilizer",
        category: "fertilizer",
        description:
          "OMRI-listed organic option with mycorrhizae. Good micronutrient profile for alkaline soils.",
      },
      {
        name: "Jobe's Citrus Fertilizer Spikes",
        category: "fertilizer",
        description:
          "Pre-measured spikes for easy container feeding. Convenient if you prefer less mess.",
      },
    ],
    source: "UC Davis — Citrus for the Home Garden",
  },

  // Source: Texas A&M AgriLife Extension — Figs
  dt6: {
    id: "g4",
    taskId: "dt6",
    treeType: "Fig",
    title: "Drainage Check Guide",
    introduction:
      "Figs tolerate drought but hate waterlogged soil. Poor drainage leads to root rot and decline. A quick spring check prevents problems.",
    steps: [
      {
        stepNumber: 1,
        title: "Dig a test hole",
        description:
          "Dig a hole about 12\" deep and 12\" wide near the drip line. Fill it with water and let it drain completely.",
      },
      {
        stepNumber: 2,
        title: "Refill and time it",
        description:
          "Fill the hole again and time how long it takes to drain. Ideal drainage is 1–3\" per hour.",
        tip: "If water sits for more than 6 hours, drainage needs improvement.",
      },
      {
        stepNumber: 3,
        title: "Amend if needed",
        description:
          "For heavy clay, work 3–4\" of compost into the top 12\" of soil around the root zone. Avoid amending just the planting hole — this creates a \"bathtub\" effect.",
      },
      {
        stepNumber: 4,
        title: "Apply mulch",
        description:
          "Spread 2–3\" of organic mulch (wood chips or straw) from 6\" away from the trunk out to the drip line. This retains moisture without waterlogging.",
        tip: "Keep mulch away from the trunk to prevent crown rot.",
      },
    ],
    toolsNeeded: [
      "Shovel",
      "Bucket or hose",
      "Timer",
      "Compost (if amending)",
      "Mulch material",
    ],
    productRecommendations: [
      {
        name: "Kellogg Garden Organics Raised Bed Mix",
        category: "other",
        description:
          "Compost-rich amendment ideal for improving heavy clay drainage around fruit trees.",
      },
      {
        name: "FibreDust Coco Coir Mulch",
        category: "other",
        description:
          "Sustainable coconut coir mulch that retains moisture while maintaining good aeration.",
      },
    ],
    source: "Texas A&M AgriLife Extension — Figs",
  },
};
