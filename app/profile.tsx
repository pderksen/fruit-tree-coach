import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Alert,
  Pressable,
  ScrollView,
  TextInput,
  View,
  Text,
} from "react-native";
import { z } from "zod";

import { ErrorState } from "@/components/ErrorState";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Screen } from "@/components/Screen";
import { useDefaultOrchard, useUpdateOrchard } from "@/hooks/use-orchards";
import { useProfile, useUpdateProfile } from "@/hooks/use-profile";
import { useSession } from "@/hooks/use-session";
import { useTrees } from "@/hooks/use-trees";
import { signOut } from "@/lib/auth";

// ── Validation ──────────────────────────────────────────────────────────
const profileSchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "50 characters max"),
  zipCode: z.string().regex(/^\d{5}$/, "Must be a 5-digit zip code"),
});
type ProfileFormValues = z.infer<typeof profileSchema>;

// ── Screen ──────────────────────────────────────────────────────────────
export default function ProfileScreen() {
  const router = useRouter();
  const { user } = useSession();
  const profileQuery = useProfile();
  const updateProfileMutation = useUpdateProfile();
  const name = profileQuery.data?.name ?? "";
  const email = user?.email ?? "";
  const defaultOrchard = useDefaultOrchard();
  const updateOrchardMutation = useUpdateOrchard();
  const treesQuery = useTrees(defaultOrchard?.id);
  const treeCount = treesQuery.data?.length ?? 0;
  const appVersion = Constants.expoConfig?.version ?? "1.0.0";

  const zipCode = defaultOrchard?.zipCode ?? "";
  const gardeningZone = defaultOrchard?.zone ?? "";

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name, zipCode },
  });

  const startEditing = () => {
    reset({ name, zipCode });
    setIsEditing(true);
  };

  const cancelEditing = () => {
    reset({ name, zipCode });
    setIsEditing(false);
  };

  const saveAll = handleSubmit(async (data) => {
    setIsSaving(true);
    try {
      if (data.name !== name) {
        await updateProfileMutation.mutateAsync({ name: data.name });
      }
      if (defaultOrchard && data.zipCode !== zipCode) {
        // The mutation looks up the USDA zone from the zip code,
        // so updating the zip also refreshes the gardening zone.
        await updateOrchardMutation.mutateAsync({
          id: defaultOrchard.id,
          fields: { zipCode: data.zipCode },
        });
      }
      setIsEditing(false);
    } finally {
      setIsSaving(false);
    }
  });

  const handleSignOut = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: async () => {
          await signOut();
          router.replace("/splash");
        },
      },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This will permanently delete your account and all data. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => router.replace("/splash"),
        },
      ],
    );
  };

  const handleManageSubscription = () => {
    Alert.alert("Coming Soon", "Subscription management will be available in a future update.");
  };

  const handleRestorePurchases = () => {
    Alert.alert("Coming Soon", "Purchase restoration will be available in a future update.");
  };

  if (profileQuery.isLoading) {
    return (
      <Screen bg="bg-cream-50">
        <LoadingSpinner fullScreen />
      </Screen>
    );
  }

  if (profileQuery.isError) {
    return (
      <Screen bg="bg-cream-50">
        <ErrorState
          fullScreen
          message="Could not load your profile."
          onRetry={() => profileQuery.refetch()}
        />
      </Screen>
    );
  }

  return (
    <Screen bg="bg-cream-50">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar */}
        <View className="items-center pt-4 pb-6">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-brand-100">
            <Ionicons name="person" size={36} color="#15803d" />
          </View>
          <Text className="mt-3 text-xl font-bold text-gray-900">{name}</Text>
        </View>

        {/* Editable account info */}
        <View className="rounded-2xl bg-white p-4">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Account Info
            </Text>
            {!isEditing && (
              <Pressable onPress={startEditing} hitSlop={8}>
                <Text className="text-sm font-semibold text-brand-700">Edit</Text>
              </Pressable>
            )}
          </View>

          {isEditing ? (
            <>
              <EditField
                label="Name"
                icon="person-outline"
                field="name"
                control={control}
                error={errors.name?.message}
                autoCapitalize="words"
              />
              <EditField
                label="Zip Code"
                icon="location-outline"
                field="zipCode"
                control={control}
                error={errors.zipCode?.message}
                keyboardType="number-pad"
              />
              <View className="py-3">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                    <Ionicons name="leaf-outline" size={18} color="#6b7280" />
                    <Text className="text-sm text-gray-600">Gardening Zone</Text>
                  </View>
                  <Text className="text-sm font-medium text-gray-900">
                    {gardeningZone || "—"}
                  </Text>
                </View>
                <Text className="mt-1 pl-8 text-xs text-gray-400">
                  Auto-detected from your zip code
                </Text>
              </View>
              <View className="mt-4 flex-row gap-2">
                <Pressable
                  onPress={cancelEditing}
                  disabled={isSaving}
                  className="flex-1 items-center rounded-xl border border-gray-200 py-3"
                >
                  <Text className="text-sm font-semibold text-gray-700">Cancel</Text>
                </Pressable>
                <Pressable
                  onPress={saveAll}
                  disabled={isSaving}
                  className="flex-1 items-center rounded-xl bg-brand-700 py-3"
                >
                  <Text className="text-sm font-semibold text-white">
                    {isSaving ? "Saving…" : "Save"}
                  </Text>
                </Pressable>
              </View>
            </>
          ) : (
            <>
              <ReadRow icon="person-outline" label="Name" value={name} />
              <ReadRow icon="location-outline" label="Zip Code" value={zipCode} />
              <ReadRow
                icon="leaf-outline"
                label="Gardening Zone"
                value={gardeningZone}
                isLast
              />
            </>
          )}
        </View>

        {/* Additional info rows */}
        <View className="mt-4 rounded-2xl bg-white p-4">
          <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Details
          </Text>
          <ReadRow icon="mail-outline" label="Email" value={email || "—"} />
          <ReadRow
            icon="leaf-outline"
            label="Trees in orchard"
            value={String(treeCount)}
          />
          <ReadRow
            icon="information-circle-outline"
            label="App version"
            value={appVersion}
            isLast
          />
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
              <Text className="text-xs font-semibold text-brand-700">
                Free Trial
              </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-between mt-3 border-t border-gray-100 pt-3">
            <View className="flex-row items-center gap-3">
              <Ionicons name="time-outline" size={18} color="#6b7280" />
              <Text className="text-sm text-gray-600">Trial expires</Text>
            </View>
            <Text className="text-sm font-medium text-gray-900">—</Text>
          </View>
          <View className="mt-4 gap-2">
            <Pressable
              onPress={handleManageSubscription}
              className="items-center rounded-xl bg-brand-700 py-3"
            >
              <Text className="text-sm font-semibold text-white">
                Manage Subscription
              </Text>
            </Pressable>
            <Pressable
              onPress={handleRestorePurchases}
              className="items-center rounded-xl border border-gray-200 py-3"
            >
              <Text className="text-sm font-semibold text-gray-700">
                Restore Purchases
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Sign out */}
        <View className="mt-4">
          <Pressable
            onPress={handleSignOut}
            className="items-center rounded-2xl bg-white py-4"
          >
            <Text className="text-sm font-semibold text-red-500">Sign Out</Text>
          </Pressable>
        </View>

        {/* Danger zone */}
        <View className="mt-6">
          <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Danger Zone
          </Text>
          <Pressable
            onPress={handleDeleteAccount}
            className="items-center rounded-2xl border border-red-200 bg-white py-4"
          >
            <Text className="text-sm font-semibold text-red-500">
              Delete Account
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </Screen>
  );
}

// ── Edit field ──────────────────────────────────────────────────────────
interface EditFieldProps {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  field: keyof ProfileFormValues;
  control: ReturnType<typeof useForm<ProfileFormValues>>["control"];
  error?: string;
  keyboardType?: "default" | "number-pad";
  autoCapitalize?: "none" | "words";
  isLast?: boolean;
}

function EditField({
  label,
  icon,
  field,
  control,
  error,
  keyboardType = "default",
  autoCapitalize = "none",
  isLast = false,
}: EditFieldProps) {
  const borderClass = isLast ? "" : "border-b border-gray-100";
  return (
    <View className={`py-3 ${borderClass}`}>
      <View className="flex-row items-center gap-3">
        <Ionicons name={icon} size={18} color="#6b7280" />
        <Text className="text-sm text-gray-600">{label}</Text>
      </View>
      <Controller
        control={control}
        name={field}
        render={({ field: f }) => (
          <TextInput
            className="mt-2 ml-8 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900"
            value={f.value}
            onChangeText={f.onChange}
            onBlur={f.onBlur}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
          />
        )}
      />
      {error && (
        <Text className="mt-1 pl-8 text-xs text-red-500">{error}</Text>
      )}
    </View>
  );
}

// ── Read-only row ───────────────────────────────────────────────────────
function ReadRow({
  icon,
  label,
  value,
  isLast = false,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  isLast?: boolean;
}) {
  const borderClass = isLast ? "" : "border-b border-gray-100";
  return (
    <View className={`flex-row items-center justify-between py-3 ${borderClass}`}>
      <View className="flex-row items-center gap-3">
        <Ionicons name={icon} size={18} color="#6b7280" />
        <Text className="text-sm text-gray-600">{label}</Text>
      </View>
      <Text className="text-sm font-medium text-gray-900">{value || "—"}</Text>
    </View>
  );
}
