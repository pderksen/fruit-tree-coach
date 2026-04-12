import "../global.css";
import { Ionicons } from "@expo/vector-icons";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { persister, queryClient } from "@/lib/query-client";
import { useEnsureDefaultOrchard } from "@/hooks/use-orchards";
import { useSession } from "@/hooks/use-session";

const logo = require("@/assets/images/fruit-tree-coach-logo.png") as number;

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [minSplashDone, setMinSplashDone] = useState(false);
  const { isLoading, isAuthenticated } = useSession();
  const router = useRouter();
  const hasNavigated = useRef(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  // Minimum 2-second splash
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinSplashDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Navigate once splash + auth check are both done
  const ready = minSplashDone && !isLoading;

  useEffect(() => {
    if (!ready) return;
    if (hasNavigated.current) return;
    hasNavigated.current = true;

    if (__DEV__) {
      router.replace("/dev-login");
    } else if (isAuthenticated) {
      router.replace("/(tabs)");
    } else {
      router.replace("/splash");
    }
  }, [ready, isAuthenticated, router]);

  // Reset navigation flag when auth state changes (sign-out)
  useEffect(() => {
    if (ready) {
      hasNavigated.current = false;
    }
  }, [isAuthenticated, ready]);

  // Show branded splash while loading
  if (!ready) {
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
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        buster: "v1",
      }}
    >
      <DefaultOrchardBootstrap />
      <Stack
        screenOptions={{
          headerLeft: ({ canGoBack }) =>
            canGoBack ? (
              <Pressable onPress={() => router.back()} hitSlop={8}>
                <Ionicons name="chevron-back" size={28} color="#000" />
              </Pressable>
            ) : null,
        }}
      >
        <Stack.Screen
          name="splash"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="dev-login"
          options={{ headerShown: false }}
        />
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
    </PersistQueryClientProvider>
  );
}

function DefaultOrchardBootstrap() {
  useEnsureDefaultOrchard();
  return null;
}
