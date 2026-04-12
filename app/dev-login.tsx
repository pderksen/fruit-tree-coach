import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { signIn } from "@/lib/auth";

const logo = require("@/assets/images/fruit-tree-coach-logo.png") as number;

const DEV_USERS = [
  { name: "Phil", email: "phil@fruittreecoach.com" },
  { name: "Cori", email: "cori@fruittreecoach.com" },
  { name: "Test1", email: "test1@fruittreecoach.com" },
  { name: "Test2", email: "test2@fruittreecoach.com" },
] as const;

const DEV_PASSWORD = "password";

export default function DevLoginPage() {
  const router = useRouter();
  const [loadingEmail, setLoadingEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const pickUser = async (email: string) => {
    setError(null);
    setLoadingEmail(email);
    const result = await signIn(email, DEV_PASSWORD);
    setLoadingEmail(null);
    if (result.success) {
      router.replace("/(tabs)");
    } else {
      setError(result.error ?? "Sign-in failed");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "bottom"]}>
      <View className="flex-1 items-center px-6 pt-10">
        <Image
          source={logo}
          className="mb-4 h-24 w-24"
          resizeMode="contain"
        />
        <Text className="mb-1 text-xl font-bold text-brand-700">
          Fruit Tree Coach
        </Text>
        <View className="mb-6 rounded-full bg-amber-100 px-3 py-1">
          <Text className="text-xs font-semibold text-amber-800">
            DEV MODE
          </Text>
        </View>

        <Text className="mb-4 text-sm text-gray-500">Pick a test user</Text>

        {DEV_USERS.map((u) => (
          <Pressable
            key={u.email}
            className={`mb-3 w-full flex-row items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 ${
              loadingEmail === u.email ? "opacity-50" : ""
            }`}
            onPress={() => pickUser(u.email)}
            disabled={loadingEmail !== null}
          >
            <View>
              <Text className="text-base font-semibold text-gray-900">
                {u.name}
              </Text>
              <Text className="text-xs text-gray-500">{u.email}</Text>
            </View>
            {loadingEmail === u.email ? (
              <Text className="text-sm text-gray-400">Signing in…</Text>
            ) : (
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            )}
          </Pressable>
        ))}

        {error && (
          <Text className="mb-3 text-sm text-red-500">{error}</Text>
        )}

        <View className="my-4 w-full flex-row items-center gap-3">
          <View className="h-px flex-1 bg-gray-200" />
          <Text className="text-xs text-gray-400">production flows</Text>
          <View className="h-px flex-1 bg-gray-200" />
        </View>

        <Pressable
          className="mb-3 w-full items-center rounded-xl bg-brand-700 px-6 py-3.5"
          onPress={() => router.push("/trial")}
        >
          <Text className="text-base font-semibold text-white">
            Start Free Trial
          </Text>
        </Pressable>

        <Pressable
          className="w-full items-center rounded-xl border border-gray-200 bg-white px-6 py-3.5"
          onPress={() => router.push("/sign-in?mode=login")}
        >
          <Text className="text-base font-semibold text-gray-700">
            Sign up / Sign in
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
