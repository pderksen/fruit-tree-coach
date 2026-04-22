import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

import { useDefaultOrchard } from "@/hooks/use-orchards";

// Content is based on the USDA Plant Hardiness Zone Map (2023 revision),
// the same source used in lib/zone-lookup.ts.

interface InfoSectionProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  children: React.ReactNode;
}

function InfoSection({ icon, title, children }: InfoSectionProps) {
  return (
    <View className="mb-4 rounded-2xl bg-white p-4">
      <View className="flex-row items-center gap-2">
        <Ionicons name={icon} size={18} color="#15803d" />
        <Text className="text-base font-bold text-gray-900">{title}</Text>
      </View>
      <View className="mt-2">{children}</View>
    </View>
  );
}

export default function ZoneInfoScreen() {
  const orchard = useDefaultOrchard();
  const zone = orchard?.zone;
  const zipCode = orchard?.zipCode;

  return (
    <ScrollView
      className="flex-1 bg-cream-50"
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-5 pt-4">
        {zone ? (
          <View className="mb-5 items-center rounded-2xl bg-brand-700 px-4 py-6">
            <Text className="text-sm font-medium text-brand-100">
              Your Gardening Zone
            </Text>
            <Text className="mt-1 text-4xl font-bold text-white">
              Zone {zone}
            </Text>
            {zipCode ? (
              <Text className="mt-2 text-xs text-brand-100">
                Based on ZIP code {zipCode}
              </Text>
            ) : null}
          </View>
        ) : (
          <View className="mb-5 rounded-2xl bg-white px-4 py-5">
            <Text className="text-center text-sm text-gray-500">
              Set your ZIP code to see your zone.
            </Text>
          </View>
        )}

        <InfoSection icon="leaf-outline" title="What is a gardening zone?">
          <Text className="text-sm leading-5 text-gray-700">
            A gardening zone — officially a USDA Plant Hardiness Zone —
            tells you how cold your winters get, on average. The map
            divides the US into 13 zones based on the average lowest
            winter temperature in each area.
          </Text>
          <Text className="mt-2 text-sm leading-5 text-gray-700">
            Lower numbers are colder (Zone 3 is northern Minnesota);
            higher numbers are warmer (Zone 10 is south Florida). Each
            zone is split into &quot;a&quot; (colder half) and
            &quot;b&quot; (warmer half).
          </Text>
        </InfoSection>

        <InfoSection
          icon="nutrition-outline"
          title="Why it matters for fruit trees"
        >
          <Text className="text-sm leading-5 text-gray-700">
            Fruit trees are picky about winter cold. Each variety has a
            zone range it can survive in — plant one outside its range
            and it&apos;ll struggle or die.
          </Text>
          <Text className="mt-2 text-sm leading-5 text-gray-700">
            Your zone also shapes{" "}
            <Text className="font-semibold">when</Text> to do things:
            pruning, fertilizing, and protecting from frost all shift
            earlier or later depending on how your winter runs. The
            care guidance in this app uses your zone to time each task
            for your area.
          </Text>
        </InfoSection>

        <InfoSection icon="location-outline" title="How we picked yours">
          <Text className="text-sm leading-5 text-gray-700">
            We looked up your zone from the ZIP code you entered,
            using the 2023 USDA Plant Hardiness Zone Map. If you live
            somewhere with unusual microclimates — a valley, a coast,
            or high elevation — your actual zone could be a half-step
            warmer or cooler than the map suggests.
          </Text>
          <Text className="mt-2 text-sm leading-5 text-gray-700">
            You can change your ZIP anytime from your Profile if you
            move or want to test a different area.
          </Text>
        </InfoSection>
      </View>
    </ScrollView>
  );
}
