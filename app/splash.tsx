import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";

const logo = require("@/assets/images/fruit-tree-coach-logo.png") as number;

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={logo}
        className="mb-6 h-40 w-40"
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold text-brand-700">
        Fruit Tree Coach
      </Text>
    </View>
  );
}
