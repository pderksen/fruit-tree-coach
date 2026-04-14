import { View } from "react-native";

import { WateringGuideContent } from "@/components/WateringGuideContent";

export default function WateringGuideScreen() {
  return (
    <View className="flex-1 bg-gray-50 px-5">
      <WateringGuideContent showHeading={false} />
    </View>
  );
}
