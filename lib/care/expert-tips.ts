import type { ExpertTip, FruitTreeType } from "@/lib/types";

/**
 * Expert tips keyed by fruit tree type.
 * Static reference content — not user-specific.
 * Attributions point to the specific extension service, university program,
 * or published gardening outlet the guidance is drawn from.
 */
export const EXPERT_TIPS: Partial<Record<FruitTreeType, ExpertTip[]>> = {
  Apple: [
    { quote: "Pruning helps air circulation. If a bird can't fly through your tree, it's too dense.", attribution: "Penn State Extension" },
    { quote: "Mulch like a donut, not a volcano. Keep it away from the trunk.", attribution: "UMN Extension" },
  ],
  Peach: [
    { quote: "Peaches fruit on last year's wood — prune boldly to encourage fresh growth.", attribution: "Clemson Cooperative Extension" },
    { quote: "A well-thinned peach tree gives you fewer but far superior fruits.", attribution: "UGA Cooperative Extension" },
  ],
  Lemon: [
    { quote: "Lemon trees love at least 6–8 hours of direct sunlight. Ensure your chosen spot is the sunniest patch in your orchard.", attribution: "UC ANR Master Gardeners" },
    { quote: "Yellow leaves on citrus often mean iron deficiency, not overwatering.", attribution: "UF/IFAS Extension" },
  ],
  Fig: [
    { quote: "Figs are forgiving — they thrive on neglect better than most fruit trees.", attribution: "Homestead and Chill" },
    { quote: "Protect young figs from frost with burlap wrapping in their first few winters.", attribution: "NC State Extension" },
  ],
  Pear: [
    { quote: "Pears ripen from the inside out — pick them firm and let them finish on the counter.", attribution: "OSU Extension Service" },
    { quote: "Fire blight spreads in wet weather — prune only when it's dry.", attribution: "Cornell Cooperative Extension" },
  ],
  Cherry: [
    { quote: "Cherries need cold winters to set fruit — 700+ chill hours for most varieties.", attribution: "WSU Extension" },
    { quote: "Bird netting is the cherry grower's best friend.", attribution: "Epic Gardening" },
  ],
  Plum: [
    { quote: "Japanese plums bloom early — site them where late frost won't catch the blossoms.", attribution: "UC ANR Master Gardeners" },
    { quote: "Thin plums to 4–6 inches apart for the best fruit size.", attribution: "Utah State Extension" },
  ],
  Orange: [
    { quote: "Don't prune orange trees heavily — they fruit on old and new wood alike.", attribution: "UF/IFAS Extension" },
    { quote: "A deep soak once a week beats daily sprinkles for citrus roots.", attribution: "UC ANR Master Gardeners" },
  ],
  Lime: [
    { quote: "Limes are the most cold-sensitive citrus — bring potted trees indoors below 50°F.", attribution: "UF/IFAS Extension" },
    { quote: "Pick limes when they give slightly to pressure, not when they turn yellow.", attribution: "Texas A&M AgriLife Extension" },
  ],
};
