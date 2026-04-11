import "../global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { queryClient } from "@/lib/query-client";

const logo = require("@/assets/images/fruit-tree-coach-logo.png") as number;

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
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

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{ headerBackTitle: "" }}
      >
        <Stack.Screen
          name="trial"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-in"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "Home" }} />
        <Stack.Screen
          name="tree/[id]"
          options={{ title: "Tree details" }}
        />
        <Stack.Screen
          name="tree/new"
          options={{ title: "New Tree" }}
        />
        <Stack.Screen
          name="tree/guide/[taskId]"
          options={{ title: "Step-by-Step Guide" }}
        />
        <Stack.Screen
          name="profile"
          options={{ title: "Profile" }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
