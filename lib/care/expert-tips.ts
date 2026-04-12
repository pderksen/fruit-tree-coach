import type { ExpertTip, FruitTreeType } from "@/lib/types";

/**
 * Expert tips keyed by fruit tree type.
 * Static reference content — not user-specific.
 */
export const EXPERT_TIPS: Partial<Record<FruitTreeType, ExpertTip[]>> = {
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
