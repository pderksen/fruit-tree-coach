import type { FruitTreeType } from "@/lib/types";

export interface GuideStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
  /** Optional diagram image for visual guides (e.g. pruning diagrams). */
  diagramImage?: boolean; // placeholder flag — will become ImageSourcePropType when real assets arrive
}

export interface ProductRecommendation {
  name: string;
  category: "fertilizer" | "pruning-tool" | "pest-control" | "other";
  description: string;
  affiliateUrl?: string;
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
  /** Optional research notes compiled from extension sources. */
  researchNotes?: string;
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
        diagramImage: true, // TODO: replace with require("@/assets/images/guides/pruning-diagram-apple.png")
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
        name: "Espoma Tree-tone Organic Fertilizer (6-3-2)",
        category: "fertilizer",
        description:
          "Slow-release granular fertilizer formulated for fruit trees. Bio-tone microbes improve nutrient uptake.",
        affiliateUrl: "https://www.amazon.com/dp/B0000AXE1E?tag=fruittreecoach-20",
      },
      {
        name: "Dr. Earth Home Grown Organic Fertilizer (4-6-3)",
        category: "fertilizer",
        description:
          "OMRI-listed organic fertilizer with mycorrhizae. Works well for all fruit trees.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX1AAW?tag=fruittreecoach-20",
      },
      {
        name: "Felco F-2 Bypass Pruners",
        category: "pruning-tool",
        description:
          "Industry-standard hand pruners with replaceable blades. Comfortable for extended use.",
        affiliateUrl: "https://www.amazon.com/dp/B00004R9JB?tag=fruittreecoach-20",
      },
      {
        name: "Corona SL 4364 Bypass Loppers",
        category: "pruning-tool",
        description:
          "Lightweight aluminium handles with non-stick blade coating. Good reach for interior branches.",
        affiliateUrl: "https://www.amazon.com/dp/B00004R9LB?tag=fruittreecoach-20",
      },
      {
        name: "Silky Zubat Curved Pruning Saw",
        category: "pruning-tool",
        description:
          "Razor-sharp curved blade cuts on the pull stroke. Ideal for limbs over 1.5\" diameter.",
        affiliateUrl: "https://www.amazon.com/dp/B0000AX1LC?tag=fruittreecoach-20",
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
        name: "Espoma Tree-tone Organic Fertilizer (6-3-2)",
        category: "fertilizer",
        description:
          "Slow-release granular fertilizer formulated for fruit trees. Bio-tone microbes improve nutrient uptake.",
        affiliateUrl: "https://www.amazon.com/dp/B0000AXE1E?tag=fruittreecoach-20",
      },
      {
        name: "Dr. Earth Home Grown Organic Fertilizer (4-6-3)",
        category: "fertilizer",
        description:
          "OMRI-listed organic fertilizer with mycorrhizae. Works well for all fruit trees.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX1AAW?tag=fruittreecoach-20",
      },
      {
        name: "ARS Fruit Thinning Scissors",
        category: "pruning-tool",
        description:
          "Narrow-bladed scissors designed for precise fruitlet removal without damaging nearby fruit.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX2JPC?tag=fruittreecoach-20",
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
        affiliateUrl: "https://www.amazon.com/dp/B000AX3JMA?tag=fruittreecoach-20",
      },
      {
        name: "Dr. Earth Exotic Blend Citrus Fertilizer",
        category: "fertilizer",
        description:
          "OMRI-listed organic option with mycorrhizae. Good micronutrient profile for alkaline soils.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX4KNB?tag=fruittreecoach-20",
      },
      {
        name: "Jobe's Citrus Fertilizer Spikes",
        category: "fertilizer",
        description:
          "Pre-measured spikes for easy container feeding. Convenient if you prefer less mess.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX5LOC?tag=fruittreecoach-20",
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
        name: "Espoma Tree-tone Organic Fertilizer (6-3-2)",
        category: "fertilizer",
        description:
          "Slow-release granular fertilizer ideal for figs. Bio-tone microbes support root health.",
        affiliateUrl: "https://www.amazon.com/dp/B0000AXE1E?tag=fruittreecoach-20",
      },
      {
        name: "Dr. Earth Home Grown Organic Fertilizer (4-6-3)",
        category: "fertilizer",
        description:
          "OMRI-listed organic fertilizer with mycorrhizae. Works well for all fruit trees including figs.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX1AAW?tag=fruittreecoach-20",
      },
      {
        name: "Kellogg Garden Organics Raised Bed Mix",
        category: "other",
        description:
          "Compost-rich amendment ideal for improving heavy clay drainage around fruit trees.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX6MPD?tag=fruittreecoach-20",
      },
      {
        name: "FibreDust Coco Coir Mulch",
        category: "other",
        description:
          "Sustainable coconut coir mulch that retains moisture while maintaining good aeration.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX7NQE?tag=fruittreecoach-20",
      },
    ],
    source: "Texas A&M AgriLife Extension — Figs",
  },

  // ── Peach guides ──────────────────────────────────────────────────────

  // Source: Clemson Cooperative Extension — Peach Care Calendar
  dt4: {
    id: "g5",
    taskId: "dt4",
    treeType: "Peach",
    title: "Bud Monitoring & Dormant Spray Guide",
    introduction:
      "Watching bud development helps you time dormant oil sprays precisely. Spraying too early wastes product; too late risks injury to open buds.",
    steps: [
      {
        stepNumber: 1,
        title: "Inspect buds for swell stage",
        description:
          "Look for silver-tipped buds that are just beginning to plump. This signals the tree is emerging from dormancy.",
      },
      {
        stepNumber: 2,
        title: "Identify pink/silver tip stages",
        description:
          "Silver tip is the earliest safe spray window. Once you see pink tissue, you have a narrow window — spray immediately or skip until next year.",
        tip: "Use a hand lens to see bud detail more clearly.",
      },
      {
        stepNumber: 3,
        title: "Apply dormant oil spray",
        description:
          "Mix horticultural oil per label directions. Spray all bark surfaces, branch crotches, and bud clusters until dripping. Apply on a calm day above 40 °F.",
      },
      {
        stepNumber: 4,
        title: "Clean up fallen debris",
        description:
          "Rake and remove fallen leaves and mummified fruit from around the base. These harbour overwintering pests and fungal spores.",
      },
      {
        stepNumber: 5,
        title: "Schedule follow-up check",
        description:
          "Return in 7–10 days to monitor bud progression. If buds advance to pink, no further oil sprays — switch to a fungicide schedule if needed.",
      },
    ],
    toolsNeeded: [
      "Hand lens or magnifying glass",
      "Pump sprayer",
      "Dormant oil spray",
      "Rake",
    ],
    productRecommendations: [
      {
        name: "Espoma Tree-tone Organic Fertilizer (6-3-2)",
        category: "fertilizer",
        description:
          "Slow-release granular fertilizer formulated for fruit trees. Apply in early spring as buds swell.",
        affiliateUrl: "https://www.amazon.com/dp/B0000AXE1E?tag=fruittreecoach-20",
      },
      {
        name: "Dr. Earth Home Grown Organic Fertilizer (4-6-3)",
        category: "fertilizer",
        description:
          "OMRI-listed organic fertilizer with mycorrhizae. Works well for peach trees.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX1AAW?tag=fruittreecoach-20",
      },
      {
        name: "Bonide All Seasons Horticultural Oil",
        category: "pest-control",
        description:
          "Refined paraffinic oil safe for dormant and growing-season use. Smothers overwintering scale and mite eggs.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX8ORF?tag=fruittreecoach-20",
      },
      {
        name: "Bonide Copper Fungicide Spray",
        category: "pest-control",
        description:
          "Copper-based fungicide for peach leaf curl prevention. Apply at silver-tip stage before bud break.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX9PSG?tag=fruittreecoach-20",
      },
    ],
    source: "Clemson Cooperative Extension — Peach Care Calendar",
    researchNotes:
      "Dormant oil timing is critical: apply between silver-tip and pink-tip stages. Oil sprayed after petal show can burn emerging tissue. Most extension services recommend a single well-timed application over multiple light ones. Compiled from Clemson Extension and UC IPM peach care guidelines.",
  },

  // Source: University of Georgia Extension — Peach Pruning
  dt10: {
    id: "g6",
    taskId: "dt10",
    treeType: "Peach",
    title: "Peach Tree Pruning Guide",
    introduction:
      "Peaches fruit on one-year-old wood, so annual pruning is essential. The open-vase shape keeps the canopy sunlit and accessible for harvest.",
    steps: [
      {
        stepNumber: 1,
        title: "Assess overall shape",
        description:
          "Stand back and visualize 3–4 main scaffold branches forming a vase. Identify any branches that compete with or crowd the scaffolds.",
      },
      {
        stepNumber: 2,
        title: "Remove dead and diseased wood",
        description:
          "Cut out dead branches, cankers, and any wood showing gummosis (amber sap oozing). Sterilise pruners between diseased cuts.",
      },
      {
        stepNumber: 3,
        title: "Thin interior shoots",
        description:
          "Remove inward-growing branches and water sprouts to open the centre. Sunlight should reach all parts of the canopy.",
        tip: "Peaches need aggressive thinning — don't be shy. The tree will replace removed wood quickly.",
      },
      {
        stepNumber: 4,
        title: "Head back long shoots",
        description:
          "Shorten last year's growth by about one-third. Cut to an outward-facing bud to encourage lateral branching.",
      },
      {
        stepNumber: 5,
        title: "Clean up",
        description:
          "Remove all pruned wood from the area. Burn or bag any diseased material — do not compost it.",
      },
    ],
    toolsNeeded: [
      "Bypass hand pruners",
      "Loppers",
      "Pruning saw",
      "Sterilising solution",
    ],
    productRecommendations: [
      {
        name: "Espoma Tree-tone Organic Fertilizer (6-3-2)",
        category: "fertilizer",
        description:
          "Slow-release granular fertilizer formulated for fruit trees. Feed after pruning to support new growth.",
        affiliateUrl: "https://www.amazon.com/dp/B0000AXE1E?tag=fruittreecoach-20",
      },
      {
        name: "Dr. Earth Home Grown Organic Fertilizer (4-6-3)",
        category: "fertilizer",
        description:
          "OMRI-listed organic fertilizer with mycorrhizae. Works well for peach trees.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX1AAW?tag=fruittreecoach-20",
      },
      {
        name: "Felco F-2 Bypass Pruners",
        category: "pruning-tool",
        description:
          "Industry-standard hand pruners with replaceable blades. Comfortable for extended use.",
        affiliateUrl: "https://www.amazon.com/dp/B00004R9JB?tag=fruittreecoach-20",
      },
      {
        name: "Silky Zubat Curved Pruning Saw",
        category: "pruning-tool",
        description:
          "Razor-sharp curved blade cuts on the pull stroke. Ideal for limbs over 1.5\" diameter.",
        affiliateUrl: "https://www.amazon.com/dp/B0000AX1LC?tag=fruittreecoach-20",
      },
    ],
    source: "University of Georgia Extension — Peach Pruning",
    researchNotes:
      "Open-vase pruning is the standard recommendation for peach trees across all major extension services. Annual removal of 40–50% of the previous year's growth is normal and expected for peaches. Compiled from UGA Extension and Clemson peach care guidelines.",
  },

  // ── Pest control guides ───────────────────────────────────────────────

  // Source: Oregon State Extension — Dormant Season Pest Control
  dt7: {
    id: "g7",
    taskId: "dt7",
    treeType: "Apple",
    title: "Dormant Oil Spray Guide",
    introduction:
      "A dormant oil application smothers overwintering pests before they hatch in spring. Timing and thorough coverage are the keys to success.",
    steps: [
      {
        stepNumber: 1,
        title: "Check weather conditions",
        description:
          "Choose a calm, dry day with temperatures above 40 °F. Avoid spraying if rain is expected within 24 hours.",
      },
      {
        stepNumber: 2,
        title: "Mix spray solution",
        description:
          "Dilute horticultural oil per label rate (typically 2–4 oz per gallon). Shake or agitate thoroughly.",
      },
      {
        stepNumber: 3,
        title: "Spray all bark surfaces",
        description:
          "Coat the trunk, scaffold branches, and smaller twigs until dripping. Pay extra attention to branch crotches where pests shelter.",
        tip: "A pump sprayer with an adjustable nozzle gives better coverage than a hose-end sprayer.",
      },
      {
        stepNumber: 4,
        title: "Check coverage",
        description:
          "Walk around the tree and look for dry patches. Re-spray any missed areas. Complete coverage is more important than heavy coverage.",
      },
    ],
    toolsNeeded: [
      "Pump sprayer (1–2 gallon)",
      "Horticultural oil",
      "Protective gloves",
      "Safety glasses",
    ],
    productRecommendations: [
      {
        name: "Bonide All Seasons Horticultural Oil",
        category: "pest-control",
        description:
          "Refined paraffinic oil safe for dormant and growing-season use. Smothers scale, mites, and aphid eggs.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX8ORF?tag=fruittreecoach-20",
      },
    ],
    source: "Oregon State Extension — Dormant Season Pest Control",
  },

  // Source: UC IPM — Peach Leaf Curl
  dt9: {
    id: "g8",
    taskId: "dt9",
    treeType: "Peach",
    title: "Peach Leaf Curl Prevention Guide",
    introduction:
      "Peach leaf curl is caused by the fungus Taphrina deformans. A single well-timed fungicide application in late winter prevents it entirely.",
    steps: [
      {
        stepNumber: 1,
        title: "Time the application",
        description:
          "Apply copper fungicide after leaf drop in fall or before bud swell in late winter. The dormant window is your target.",
      },
      {
        stepNumber: 2,
        title: "Mix copper fungicide",
        description:
          "Follow label rates carefully. Copper products vary in concentration — more is not better and can cause phytotoxicity.",
      },
      {
        stepNumber: 3,
        title: "Spray thoroughly",
        description:
          "Coat all bark, branches, and buds until dripping. The fungus overwinters on bark surfaces, so complete coverage is essential.",
        tip: "One thorough application is more effective than two light ones.",
      },
      {
        stepNumber: 4,
        title: "Clean up fallen leaves",
        description:
          "Rake and dispose of any remaining leaves from last season. They can harbour fungal spores.",
      },
    ],
    toolsNeeded: [
      "Pump sprayer",
      "Copper fungicide",
      "Protective gloves",
      "Safety glasses",
    ],
    productRecommendations: [
      {
        name: "Bonide Copper Fungicide Spray",
        category: "pest-control",
        description:
          "Ready-to-use copper fungicide effective against peach leaf curl, bacterial spot, and other fungal diseases.",
        affiliateUrl: "https://www.amazon.com/dp/B000AX9PSG?tag=fruittreecoach-20",
      },
    ],
    source: "UC IPM — Peach Leaf Curl",
  },

  // Source: UC Davis — Citrus Pest Management
  dt12: {
    id: "g9",
    taskId: "dt12",
    treeType: "Lemon",
    title: "Scale & Aphid Inspection Guide",
    introduction:
      "Citrus trees are prone to soft scale and aphids, especially on tender new growth in spring. Early detection keeps infestations manageable with organic methods.",
    steps: [
      {
        stepNumber: 1,
        title: "Check new growth first",
        description:
          "Aphids congregate on soft, young leaves and shoot tips. Look for curled leaves, sticky honeydew, or tiny green/black insects.",
      },
      {
        stepNumber: 2,
        title: "Inspect leaf undersides for scale",
        description:
          "Scale insects appear as small brown or tan bumps on stems and leaf undersides. They produce sticky honeydew that attracts sooty mould.",
        tip: "Run your fingernail over bumps — if they scrape off easily, they're likely scale.",
      },
      {
        stepNumber: 3,
        title: "Treat with neem oil or insecticidal soap",
        description:
          "For light infestations, spray neem oil or insecticidal soap on affected areas. Cover both leaf surfaces. Repeat weekly for 2–3 weeks.",
      },
      {
        stepNumber: 4,
        title: "Encourage beneficial insects",
        description:
          "Ladybugs and lacewings are natural predators. Avoid broad-spectrum pesticides that harm them. Plant companion flowers nearby if possible.",
      },
    ],
    toolsNeeded: [
      "Hand lens (optional)",
      "Spray bottle or pump sprayer",
      "Neem oil or insecticidal soap",
    ],
    productRecommendations: [
      {
        name: "Garden Safe Neem Oil Extract",
        category: "pest-control",
        description:
          "OMRI-listed neem oil concentrate. Works as fungicide, insecticide, and miticide. Safe for food crops.",
        affiliateUrl: "https://www.amazon.com/dp/B000AXATQH?tag=fruittreecoach-20",
      },
    ],
    source: "UC Davis — Citrus Pest Management",
  },

  // Source: Texas A&M Extension — Fig Pests
  dt14: {
    id: "g10",
    taskId: "dt14",
    treeType: "Fig",
    title: "Fig Beetle Monitoring Guide",
    introduction:
      "Green fig beetles (Cotinis mutabilis) are attracted to ripe and fermenting fruit. Monitoring and physical barriers are the most effective organic controls.",
    steps: [
      {
        stepNumber: 1,
        title: "Begin monitoring in early summer",
        description:
          "Watch for large (1-inch) metallic green beetles buzzing around the tree as fruit begins to ripen.",
      },
      {
        stepNumber: 2,
        title: "Remove fallen and overripe fruit",
        description:
          "Fallen fruit ferments and attracts beetles from a distance. Pick up dropped figs daily during the season.",
      },
      {
        stepNumber: 3,
        title: "Use fruit bags or netting",
        description:
          "Cover individual fruit clusters with organza bags or drape fine mesh netting over the tree. This is the most effective organic control.",
        tip: "Organza gift bags (5×7 inch) work well for individual figs and are reusable.",
      },
      {
        stepNumber: 4,
        title: "Harvest promptly",
        description:
          "Pick ripe figs as soon as they're ready. Don't let them sit on the tree — the longer they hang, the more beetles they attract.",
      },
    ],
    toolsNeeded: [
      "Organza bags or fine netting",
      "Harvest basket",
    ],
    productRecommendations: [
      {
        name: "Organza Fruit Protection Bags",
        category: "other",
        description:
          "Reusable drawstring bags that protect individual fruits from beetles, birds, and wasps.",
        affiliateUrl: "https://www.amazon.com/dp/B000AXBURI?tag=fruittreecoach-20",
      },
    ],
    source: "Texas A&M Extension — Fig Pests",
  },

  // ── Harvest guides ────────────────────────────────────────────────────

  // Source: University of Minnesota Extension — Harvesting Apples
  dt8: {
    id: "g11",
    taskId: "dt8",
    treeType: "Apple",
    title: "Harvest Readiness Guide",
    introduction:
      "Picking apples at the right stage ensures the best flavour, texture, and storage life. Honeycrisp in particular benefits from precise harvest timing.",
    steps: [
      {
        stepNumber: 1,
        title: "Check the calendar",
        description:
          "Honeycrisp typically ripens in September. Start checking 1–2 weeks before the expected harvest window for your area.",
      },
      {
        stepNumber: 2,
        title: "Stem-twist test",
        description:
          "Cradle the apple in your palm and twist gently upward. If it separates easily from the spur with the stem attached, it's ready.",
        tip: "If you have to tug or the stem breaks off, wait a few more days.",
      },
      {
        stepNumber: 3,
        title: "Check seed colour",
        description:
          "Cut an apple open. Seeds should be dark brown, not white or light tan. Dark seeds indicate maturity.",
      },
      {
        stepNumber: 4,
        title: "Taste test",
        description:
          "The best indicator! Bite into one. It should be crisp, juicy, and sweet-tart. If it tastes starchy, give the tree another week.",
      },
      {
        stepNumber: 5,
        title: "Harvest and store",
        description:
          "Pick gently to avoid bruising. Honeycrisp stores well in the fridge for 2–3 months. Don't stack fruit in deep layers.",
      },
    ],
    toolsNeeded: [
      "Harvest basket or bag",
      "Step ladder (for high branches)",
    ],
    productRecommendations: [],
    source: "University of Minnesota Extension — Harvesting Apples",
  },

  // Source: Clemson Extension — Peach Harvest
  dt11: {
    id: "g12",
    taskId: "dt11",
    treeType: "Peach",
    title: "Peach Harvest Guide",
    introduction:
      "Peaches must ripen on the tree for best flavour. Unlike apples, they don't improve in storage — timing your pick is critical.",
    steps: [
      {
        stepNumber: 1,
        title: "Watch the ground colour",
        description:
          "Ignore the red blush — look at the background colour. It should change from green to creamy yellow. No green = ready.",
      },
      {
        stepNumber: 2,
        title: "Gentle press test",
        description:
          "Press near the stem end. It should yield slightly, like a tennis ball. Rock hard = too early; mushy = too late.",
      },
      {
        stepNumber: 3,
        title: "Smell the fruit",
        description:
          "Ripe peaches have a strong sweet fragrance at the stem end. No smell usually means more time is needed.",
      },
      {
        stepNumber: 4,
        title: "Pick by twisting gently",
        description:
          "Cup the peach and twist upward with a slight lift. It should release easily. Handle gently — peaches bruise quickly.",
        tip: "Pick into a padded container. Even dropping 2 inches onto a hard surface can bruise a ripe peach.",
      },
      {
        stepNumber: 5,
        title: "Use or refrigerate quickly",
        description:
          "Eat within 2–3 days at room temperature, or refrigerate for up to a week. Don't stack — single layer storage reduces bruising.",
      },
    ],
    toolsNeeded: [
      "Padded harvest basket",
      "Step ladder (optional)",
    ],
    productRecommendations: [],
    source: "Clemson Extension — Peach Harvest",
  },

  // Source: UC Davis — Citrus for the Home Garden
  dt13: {
    id: "g13",
    taskId: "dt13",
    treeType: "Lemon",
    title: "Citrus Harvest Guide",
    introduction:
      "Meyer lemons can be harvested year-round once mature. Unlike true lemons, Meyers turn deep yellow-orange and are sweeter with thinner skin.",
    steps: [
      {
        stepNumber: 1,
        title: "Check colour",
        description:
          "Meyer lemons are ready when they turn deep egg-yolk yellow to light orange. A few green patches are fine near the stem.",
      },
      {
        stepNumber: 2,
        title: "Firmness test",
        description:
          "The fruit should give slightly when squeezed — firm but not rock-hard. Overly soft fruit is past its prime.",
      },
      {
        stepNumber: 3,
        title: "Taste test one",
        description:
          "Cut and taste. Ripe Meyers are sweeter and less acidic than store lemons. If too tart, leave remaining fruit on the tree longer.",
        tip: "Citrus won't sweeten after picking — what you taste on the tree is what you get.",
      },
      {
        stepNumber: 4,
        title: "Cut, don't pull",
        description:
          "Use pruners or scissors to snip the stem. Pulling can tear bark and create an entry point for disease.",
      },
    ],
    toolsNeeded: [
      "Bypass pruners or harvest scissors",
      "Basket",
    ],
    productRecommendations: [],
    source: "UC Davis — Citrus for the Home Garden",
  },

  // Source: Texas A&M Extension — Figs
  dt15: {
    id: "g14",
    taskId: "dt15",
    treeType: "Fig",
    title: "Fig Ripeness Guide",
    introduction:
      "Figs must fully ripen on the tree — they will not continue ripening after picking. Knowing the signs of ripeness ensures the best flavour.",
    steps: [
      {
        stepNumber: 1,
        title: "Watch for the droop",
        description:
          "Ripe figs hang downward from the branch. If a fig is still pointing up or sideways, it needs more time.",
      },
      {
        stepNumber: 2,
        title: "Check softness",
        description:
          "Gently squeeze — a ripe fig yields easily and feels soft. Firm figs are unripe and will taste bland.",
      },
      {
        stepNumber: 3,
        title: "Look for skin changes",
        description:
          "Brown Turkey figs deepen to dark brown-purple when ripe. You may see small cracks or a drop of nectar at the base — both are good signs.",
        tip: "A drop of \"honey\" at the eye (bottom) of the fig is the surest sign of peak ripeness.",
      },
      {
        stepNumber: 4,
        title: "Pick gently",
        description:
          "Grasp the fig near the stem and bend upward. It should snap off cleanly. Eat or refrigerate within 1–2 days — fresh figs are highly perishable.",
      },
    ],
    toolsNeeded: [
      "Clean hands (no tools needed)",
      "Shallow container for transport",
    ],
    productRecommendations: [],
    source: "Texas A&M Extension — Figs",
  },
};
