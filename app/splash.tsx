import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const logo = require("@/assets/images/fruit-tree-coach-logo.png") as number;

export default function SplashPage() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "bottom"]}>
      <View className="flex-1 items-center justify-center px-6">
        <Image
          source={logo}
          className="mb-6 h-40 w-40"
          resizeMode="contain"
        />
        <Text className="mb-2 text-2xl font-bold text-brand-700">
          Fruit Tree Coach
        </Text>
        <Text className="mb-10 text-center text-base text-gray-500">
          Know exactly what your fruit trees need, every week.
        </Text>

        <Pressable
          className="mb-4 w-full items-center rounded-xl bg-brand-700 px-6 py-4"
          onPress={() => router.push("/sign-in?mode=signup")}
        >
          <Text className="text-base font-semibold text-white">
            Start Free Trial
          </Text>
        </Pressable>

        <Pressable onPress={() => router.push("/sign-in?mode=login")}>
          <Text className="text-sm text-gray-500">
            Already have an account?{" "}
            <Text className="font-semibold text-brand-700">Sign in</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
