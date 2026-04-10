import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("@/assets/images/fruit-tree-coach-logo.png") as number;

type Plan = "monthly" | "yearly";

const FEATURES = [
  "Personalised weekly care plans",
  "Location-aware seasonal guidance",
  "Step-by-step pruning, fertilizing & thinning guides",
  "Expert tips from university extension sources",
];

export default function TrialPage() {
  const router = useRouter();
  const [plan, setPlan] = useState<Plan>("yearly");

  const priceLabel =
    plan === "monthly"
      ? "7 days free, then $5.99/mo"
      : "7 days free, then $59/yr (~$4.92/mo)";

  return (
    <SafeAreaView className="flex-1 bg-cream-50" edges={["top", "bottom"]}>
      {/* Close button */}
      <Pressable
        className="absolute right-4 top-3 z-10 p-2"
        onPress={() => router.dismiss()}
      >
        <Ionicons name="close" size={28} color="#6b7280" />
      </Pressable>

      <ScrollView
        contentContainerClassName="items-center px-6 pb-8 pt-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <Image
          source={logo}
          className="mb-4 h-24 w-24"
          resizeMode="contain"
        />

        {/* Headline */}
        <Text className="mb-2 text-center text-2xl font-bold text-gray-900">
          Start your free 7-day trial
        </Text>
        <Text className="mb-6 text-center text-base text-gray-500">
          Everything you need to keep your fruit trees thriving.
        </Text>

        {/* Features */}
        <View className="mb-8 w-full">
          {FEATURES.map((feature) => (
            <View key={feature} className="mb-3 flex-row items-start gap-3">
              <Ionicons name="checkmark-circle" size={22} color="#15803d" />
              <Text className="flex-1 text-base text-gray-700">{feature}</Text>
            </View>
          ))}
        </View>

        {/* Plan picker */}
        <View className="mb-4 w-full flex-row gap-3">
          <PlanCard
            label="Monthly"
            price="$5.99/mo"
            selected={plan === "monthly"}
            onPress={() => setPlan("monthly")}
          />
          <PlanCard
            label="Yearly"
            price="$59/yr"
            badge="Save 18%"
            selected={plan === "yearly"}
            onPress={() => setPlan("yearly")}
          />
        </View>

        {/* Price summary */}
        <Text className="mb-6 text-center text-sm text-gray-500">
          {priceLabel} — cancel anytime
        </Text>

        {/* CTA */}
        <Pressable
          className="mb-4 w-full items-center rounded-xl bg-brand-700 px-6 py-4"
          onPress={() => router.push("/sign-in?mode=signup")}
        >
          <Text className="text-base font-semibold text-white">
            Start Free Trial
          </Text>
        </Pressable>

        {/* Sign in link */}
        <Pressable onPress={() => router.push("/sign-in?mode=login")}>
          <Text className="text-sm text-gray-500">
            Already have an account?{" "}
            <Text className="font-semibold text-brand-700">Sign in</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function PlanCard({
  label,
  price,
  badge,
  selected,
  onPress,
}: {
  label: string;
  price: string;
  badge?: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      className={`flex-1 rounded-xl border-2 px-4 py-4 ${
        selected ? "border-brand-700 bg-green-50" : "border-gray-200 bg-white"
      }`}
      onPress={onPress}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-sm font-semibold text-gray-900">{label}</Text>
        {selected ? (
          <Ionicons name="checkmark-circle" size={20} color="#15803d" />
        ) : (
          <View className="h-5 w-5 rounded-full border-2 border-gray-300" />
        )}
      </View>
      <Text className="mt-1 text-lg font-bold text-gray-900">{price}</Text>
      {badge && (
        <View className="mt-2 self-start rounded-full bg-brand-700 px-2.5 py-0.5">
          <Text className="text-xs font-semibold text-white">{badge}</Text>
        </View>
      )}
    </Pressable>
  );
}
