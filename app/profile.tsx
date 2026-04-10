import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";

import { Screen } from "@/components/Screen";

interface ProfileRow {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const PROFILE_ROWS: ProfileRow[] = [
  { label: "Name", value: "Phil", icon: "person-outline" },
  { label: "Zip Code", value: "97201", icon: "location-outline" },
  { label: "Gardening Zone", value: "8b", icon: "leaf-outline" },
];

export default function ProfileScreen() {
  return (
    <Screen bg="bg-cream-50">
      {/* Avatar */}
      <View className="items-center pt-4 pb-6">
        <View className="h-20 w-20 items-center justify-center rounded-full bg-brand-100">
          <Ionicons name="person" size={36} color="#15803d" />
        </View>
        <Text className="mt-3 text-xl font-bold text-gray-900">Phil</Text>
        <Text className="mt-1 text-sm text-gray-500">Zone 8b · 97201</Text>
      </View>

      {/* Info rows */}
      <View className="rounded-2xl bg-white p-4">
        <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
          Account Info
        </Text>
        {PROFILE_ROWS.map((row) => (
          <View
            key={row.label}
            className="flex-row items-center justify-between border-b border-gray-100 py-3 last:border-b-0"
          >
            <View className="flex-row items-center gap-3">
              <Ionicons name={row.icon} size={18} color="#6b7280" />
              <Text className="text-sm text-gray-600">{row.label}</Text>
            </View>
            <Text className="text-sm font-medium text-gray-900">
              {row.value}
            </Text>
          </View>
        ))}
      </View>

      {/* Subscription */}
      <View className="mt-4 rounded-2xl bg-white p-4">
        <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
          Subscription
        </Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <Ionicons name="card-outline" size={18} color="#6b7280" />
            <Text className="text-sm text-gray-600">Plan</Text>
          </View>
          <View className="rounded-full bg-brand-100 px-3 py-1">
            <Text className="text-xs font-semibold text-brand-700">Free Trial</Text>
          </View>
        </View>
      </View>

      {/* Sign out */}
      <View className="mt-4">
        <Pressable className="items-center rounded-2xl bg-white py-4">
          <Text className="text-sm font-semibold text-red-500">Sign Out</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
