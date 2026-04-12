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
  zone: z.string().regex(/^\d{1,2}[abAB]$/, "Enter a zone like 8b or 7a"),
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

  const [editingField, setEditingField] = useState<keyof ProfileFormValues | null>(null);
  const [isLookingUpZone, setIsLookingUpZone] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name, zipCode, zone: gardeningZone },
  });

  const startEditing = (field: keyof ProfileFormValues) => {
    reset({ name, zipCode, zone: gardeningZone });
    setEditingField(field);
  };

  const cancelEditing = () => setEditingField(null);

  const saveField = handleSubmit(async (data) => {
    if (data.name && data.name !== name) {
      await updateProfileMutation.mutateAsync({ name: data.name });
    }
    if (!defaultOrchard) {
      setEditingField(null);
      return;
    }
    if (data.zone && data.zone.toLowerCase() !== gardeningZone.toLowerCase()) {
      updateOrchardMutation.mutate({
        id: defaultOrchard.id,
        fields: { zone: data.zone.toLowerCase() },
      });
    }
    if (data.zipCode && data.zipCode !== zipCode) {
      // The mutation itself looks up the zone from the USDA API
      // when a zip is provided without an explicit zone.
      setIsLookingUpZone(true);
      try {
        const updated = await updateOrchardMutation.mutateAsync({
          id: defaultOrchard.id,
          fields: { zipCode: data.zipCode },
        });
        if (updated.zone) setValue("zone", updated.zone);
      } finally {
        setIsLookingUpZone(false);
      }
    }
    setEditingField(null);
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
          <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Account Info
          </Text>
          <EditableRow
            label="Name"
            icon="person-outline"
            value={name}
            field="name"
            editingField={editingField}
            control={control}
            error={errors.name?.message}
            onEdit={startEditing}
            onSave={saveField}
            onCancel={cancelEditing}
          />
          <EditableRow
            label="Zip Code"
            icon="location-outline"
            value={zipCode}
            field="zipCode"
            editingField={editingField}
            control={control}
            error={errors.zipCode?.message}
            onEdit={startEditing}
            onSave={saveField}
            onCancel={cancelEditing}
            keyboardType="number-pad"
          />
          <EditableRow
            label="Gardening Zone"
            icon="leaf-outline"
            value={isLookingUpZone ? `${gardeningZone} (updating…)` : gardeningZone}
            field="zone"
            editingField={editingField}
            control={control}
            error={errors.zone?.message}
            onEdit={startEditing}
            onSave={saveField}
            onCancel={cancelEditing}
            isLast
          />
        </View>

        {/* Additional info rows */}
        <View className="mt-4 rounded-2xl bg-white p-4">
          <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
            Details
          </Text>
          <InfoRow icon="mail-outline" label="Email" value={email || "—"} />
          <InfoRow
            icon="leaf-outline"
            label="Trees in orchard"
            value={String(treeCount)}
          />
          <InfoRow
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

// ── Editable row ────────────────────────────────────────────────────────
interface EditableRowProps {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  value: string;
  field: keyof ProfileFormValues;
  editingField: keyof ProfileFormValues | null;
  control: ReturnType<typeof useForm<ProfileFormValues>>["control"];
  error?: string;
  onEdit: (field: keyof ProfileFormValues) => void;
  onSave: () => void;
  onCancel: () => void;
  keyboardType?: "default" | "number-pad";
  isLast?: boolean;
}

function EditableRow({
  label,
  icon,
  value,
  field,
  editingField,
  control,
  error,
  onEdit,
  onSave,
  onCancel,
  keyboardType = "default",
  isLast = false,
}: EditableRowProps) {
  const isEditing = editingField === field;
  const borderClass = isLast ? "" : "border-b border-gray-100";

  if (isEditing) {
    return (
      <View className={`py-3 ${borderClass}`}>
        <View className="flex-row items-center gap-3">
          <Ionicons name={icon} size={18} color="#6b7280" />
          <Text className="text-sm text-gray-600">{label}</Text>
        </View>
        <View className="mt-2 flex-row items-center gap-2 pl-8">
          <Controller
            control={control}
            name={field}
            render={({ field: f }) => (
              <TextInput
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900"
                value={f.value}
                onChangeText={f.onChange}
                onBlur={f.onBlur}
                autoFocus
                keyboardType={keyboardType}
                autoCapitalize={field === "name" ? "words" : "none"}
              />
            )}
          />
          <Pressable onPress={onSave} className="rounded-lg bg-brand-700 px-3 py-2">
            <Text className="text-xs font-semibold text-white">Save</Text>
          </Pressable>
          <Pressable onPress={onCancel} className="px-2 py-2">
            <Ionicons name="close" size={18} color="#6b7280" />
          </Pressable>
        </View>
        {error && (
          <Text className="mt-1 pl-8 text-xs text-red-500">{error}</Text>
        )}
      </View>
    );
  }

  return (
    <Pressable
      onPress={() => onEdit(field)}
      className={`flex-row items-center justify-between py-3 ${borderClass}`}
    >
      <View className="flex-row items-center gap-3">
        <Ionicons name={icon} size={18} color="#6b7280" />
        <Text className="text-sm text-gray-600">{label}</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Text className="text-sm font-medium text-gray-900">{value}</Text>
        <Ionicons name="create-outline" size={14} color="#9ca3af" />
      </View>
    </Pressable>
  );
}

// ── Read-only info row ──────────────────────────────────────────────────
function InfoRow({
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
      <Text className="text-sm font-medium text-gray-900">{value}</Text>
    </View>
  );
}
