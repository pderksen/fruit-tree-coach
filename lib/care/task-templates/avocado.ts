import type { TaskTemplate } from "./index";

/**
 * Avocado (Persea americana). Zone-boundary subtropical — frost
 * protection is the defining backyard task in 9b. Do NOT prune into
 * bare wood; avocado regenerates poorly from older wood. Harvest test
 * is stem-removal + off-tree softening, not touch. Sources: UC IPM
 * (Training and Pruning Avocado Trees), UC ANR Ventura Cooperative
 * Extension (Protecting Avocados from Frost; Answers to FAQs about
 * Avocados).
 */
export const avocado: TaskTemplate[] = [
  {
    id: "avocado-light-pruning",
    fruitType: "Avocado",
    title: "Light pruning and shaping",
    why: "Avocados don't need annual pruning to stay productive — aggressive cuts into bare wood often don't regrow.",
    description:
      "Before bloom (late February–March) or just after fruit set, thin only crossing branches and any wood hanging to the ground. Never cut into older bare wood — avocado regenerates poorly from it. Keep skirts low enough to shade the trunk (sunburn is a risk) but off the soil.",
    category: "pruning",
    windowStart: { month: 2, day: 15 },
    windowEnd: { month: 3, day: 21 },
    source: "UC IPM — Training and Pruning Avocado Trees",
  },
  {
    id: "avocado-spring-feeding",
    fruitType: "Avocado",
    title: "Spring feeding",
    why: "Avocados pull nitrogen steadily through bloom and fruit set in spring.",
    description:
      "Apply about 1/10 lb of actual nitrogen per year of tree age in late February (max 2 lbs on a mature tree) using a citrus-avocado fertilizer with zinc. Spread in a ring from 1 ft outside the trunk past the drip line and water in deeply. Split a second smaller dose into June if growth was light.",
    category: "feeding",
    windowStart: { month: 2, day: 15 },
    windowEnd: { month: 3, day: 14 },
    source: "UC ANR Ventura Cooperative Extension — Answers to FAQs about Avocados",
  },
  {
    id: "avocado-summer-monitoring",
    fruitType: "Avocado",
    title: "Sunburn, persea mite, and irrigation check",
    why: "Summer stress shows as sunburned bark, persea mite damage on leaves, and fruit drop from inconsistent water.",
    description:
      "Check monthly July–August. Whitewash any sun-exposed trunk or scaffold bark (50/50 white latex paint + water). Look for round tan blotches on the underside of leaves — persea mite; a strong water jet every few days knocks populations down. Keep soil moisture consistent — avocado is shallow-rooted and drops fruit when it dries out.",
    category: "monitoring",
    windowStart: { month: 7, day: 1 },
    windowEnd: { month: 7, day: 31 },
    source: "UC IPM — Avocado; UC ANR Ventura Cooperative Extension — Answers to FAQs about Avocados",
  },
  {
    id: "avocado-frost-protection",
    fruitType: "Avocado",
    title: "Frost protection check",
    why: "Avocado leaves are damaged below about 30°F and young trees can die outright in a hard freeze — frost prep is the single most important winter task.",
    description:
      "Before a forecast freeze, water the soil deeply the day before (moist soil retains heat), drape frame-held frost cloth over young trees all the way to the ground, and for severe cold run incandescent (not LED) outdoor string lights inside the cover for a few degrees of added warmth. Do not prune any frost damage until mid-summer — you need to see where the live wood is.",
    category: "protection",
    windowStart: { month: 11, day: 15 },
    windowEnd: { month: 12, day: 15 },
    source: "UC ANR Ventura Cooperative Extension — Protecting Avocados from Frost; Methods of Frost Protection",
  },
  {
    id: "avocado-harvest",
    fruitType: "Avocado",
    title: "Avocado harvest (test one fruit)",
    why: "Avocados do not ripen on the tree — they only soften after picking, so you test readiness by picking a sample and leaving it out.",
    description:
      "Pick one fruit that looks full-sized for the variety and leave it at room temperature for 7–10 days. If it softens evenly to yielding-to-firm-pressure, the tree is mature — pick the rest as you want to eat them. If it shrivels or stays rock-hard, wait a few weeks and retest. Hass harvest stretches November through spring; Bacon picks earlier (fall).",
    category: "harvesting",
    windowStart: { month: 11, day: 1 },
    windowEnd: { month: 12, day: 31 },
    source: "UC ANR Ventura Cooperative Extension — Answers to FAQs about Avocados",
  },
];
