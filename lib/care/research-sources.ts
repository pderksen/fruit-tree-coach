/**
 * External research sources used for care recommendations.
 * Per CLAUDE.md, all horticultural advice must cite a known source.
 *
 * Ranked by reliability and relevance for backyard fruit tree care.
 * Primary (institutional) sources are used for timing, rates, pests, and
 * regional accuracy. Secondary sources supplement with practical
 * explanation, visuals, and homeowner-friendly wording.
 */

export interface ResearchSource {
  name: string;
  url?: string;
  description: string;
  tier: "primary" | "secondary";
}

// ── Primary backbone: institutional / university sources ────────────────

export const RESEARCH_SOURCES: ResearchSource[] = [
  // 1. Local Cooperative Extension (not a single URL — varies by state)
  {
    name: "Local Cooperative Extension",
    url: "https://nifa.usda.gov/land-grant-colleges-and-universities-702702",
    description:
      "Best starting point for any region. Matches local climate, pest pressure, chill hours, and seasonal timing.",
    tier: "primary",
  },
  // 2. UC IPM / UC ANR — especially strong for pests and diseases
  {
    name: "UC IPM (Integrated Pest Management)",
    url: "https://ipm.ucanr.edu",
    description:
      "Fruit-tree pests and diseases, backyard orchard management, and homeowner-friendly diagnosis. Use first for pest/disease topics.",
    tier: "primary",
  },
  {
    name: "UC Davis / UC ANR — Citrus & Home Garden",
    url: "https://anrcatalog.ucanr.edu",
    description:
      "Meyer lemon feeding schedules, citrus pest identification, harvest guidance, and general home garden fruit culture.",
    tier: "primary",
  },
  // 3. Oregon State Extension — excellent all-around
  {
    name: "Oregon State University Extension — PNW 400",
    url: "https://extension.oregonstate.edu",
    description:
      "Pruning, thinning, pests, and orchard basics for home growers. Especially useful for thinning guidance.",
    tier: "primary",
  },
  // 4. Penn State Extension — strong for pruning and training systems
  {
    name: "Penn State Extension",
    url: "https://extension.psu.edu",
    description:
      "Pruning, training systems, and seasonal timing for home orchard care. Start here for pruning topics alongside Oregon State.",
    tier: "primary",
  },
  // 5. Washington State University Extension
  {
    name: "WSU Extension",
    url: "https://extension.wsu.edu",
    description:
      "Organic and lower-input pest and disease management for backyard fruit trees. Home orchard fertility guidance.",
    tier: "primary",
  },
  // 6. University of Minnesota Extension
  {
    name: "University of Minnesota Extension",
    url: "https://extension.umn.edu",
    description:
      "Clear homeowner guidance for apples, pears, and stone fruit. Apple thinning, harvest readiness, Honeycrisp-specific care.",
    tier: "primary",
  },
  // Additional institutional sources used in current guides
  {
    name: "Clemson Cooperative Extension",
    url: "https://hgic.clemson.edu",
    description:
      "Peach care calendar, bud monitoring stages, and harvest timing for southeastern US varieties.",
    tier: "primary",
  },
  {
    name: "Texas A&M AgriLife Extension",
    url: "https://agrilifeextension.tamu.edu",
    description:
      "Fig care, drainage requirements, fig beetle management, and harvest ripeness indicators.",
    tier: "primary",
  },
  {
    name: "University of Georgia Extension",
    url: "https://extension.uga.edu",
    description:
      "Peach pruning techniques, open-vase training, and southeastern peach variety care.",
    tier: "primary",
  },

  // ── Secondary layer: high-quality gardening publishers ────────────────

  // 7. Epic Gardening
  {
    name: "Epic Gardening",
    url: "https://www.epicgardening.com",
    description:
      "Practical explanations, seasonal care checklists, and plain-English how-tos. Strong secondary source.",
    tier: "secondary",
  },
  // 8. Dave Wilson Nursery
  {
    name: "Dave Wilson Nursery",
    url: "https://www.davewilson.com",
    description:
      "Backyard fruit tree culture, pruning for size control, and home orchard concepts.",
    tier: "secondary",
  },
  // 9. Homestead and Chill
  {
    name: "Homestead and Chill",
    url: "https://homesteadandchill.com",
    description:
      "Practical, organic-leaning fruit tree care and real-world how-to content.",
    tier: "secondary",
  },
  // 10. GrowVeg
  {
    name: "GrowVeg",
    url: "https://www.growveg.com",
    description:
      "Simple explanations of techniques like thinning and summer pruning.",
    tier: "secondary",
  },
];
