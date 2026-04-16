import { Screen } from "@/components/Screen";
import { WateringGuideContent } from "@/components/WateringGuideContent";

export default function WateringScreen() {
  return (
    <Screen edges={["top"]}>
      <WateringGuideContent />
    </Screen>
  );
}
