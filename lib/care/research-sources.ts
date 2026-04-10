/**
 * External research sources used for care recommendations.
 * Per CLAUDE.md, all horticultural advice must cite a known source.
 * ChatGPT-sourced info is cross-referenced with extension publications.
 */

export interface ResearchSource {
  name: string;
  url?: string;
  description: string;
}

export const RESEARCH_SOURCES: ResearchSource[] = [
  {
    name: "Oregon State University Extension — PNW 400",
    url: "https://extension.oregonstate.edu",
    description:
      "Pacific Northwest pest management handbook. Primary source for apple dormant pruning and pest spray timing.",
  },
  {
    name: "University of Minnesota Extension",
    url: "https://extension.umn.edu",
    description:
      "Apple thinning, harvest readiness, and Honeycrisp-specific care guidance.",
  },
  {
    name: "Clemson Cooperative Extension",
    url: "https://hgic.clemson.edu",
    description:
      "Peach care calendar, bud monitoring stages, and harvest timing for southeastern US varieties.",
  },
  {
    name: "UC IPM (Integrated Pest Management)",
    url: "https://ipm.ucanr.edu",
    description:
      "Peach leaf curl prevention and general stone fruit disease management.",
  },
  {
    name: "UC Davis — Citrus for the Home Garden",
    url: "https://anrcatalog.ucanr.edu",
    description:
      "Meyer lemon feeding schedules, citrus pest identification, and harvest guidance.",
  },
  {
    name: "Texas A&M AgriLife Extension",
    url: "https://agrilifeextension.tamu.edu",
    description:
      "Fig care, drainage requirements, fig beetle management, and harvest ripeness indicators.",
  },
  {
    name: "University of Georgia Extension",
    url: "https://extension.uga.edu",
    description:
      "Peach pruning techniques, open-vase training, and southeastern peach variety care.",
  },
  {
    name: "WSU Extension — Home Orchard Fertility",
    url: "https://extension.wsu.edu",
    description:
      "Apple and pome fruit fertilizing schedules and compost application guidance.",
  },
];
