import "../global.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { queryClient } from "@/lib/query-client";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "splash",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{ headerBackTitle: "" }}
      >
        <Stack.Screen name="splash" options={{ headerShown: false }} />
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
