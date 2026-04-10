import { Ionicons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import { useState } from "react";
import { View, Text, Modal, Pressable, Switch } from "react-native";

import { PrimaryButton } from "@/components/PrimaryButton";
import { useSettingsStore } from "@/stores/settings-store";

interface NotificationOptInModalProps {
  visible: boolean;
  onDismiss: () => void;
}

export function NotificationOptInModal({
  visible,
  onDismiss,
}: NotificationOptInModalProps) {
  const {
    notificationPreferences,
    setNotificationPreferences,
    setHasSeenNotificationPrompt,
    setNotificationsEnabled,
  } = useSettingsStore();

  const [showDeniedBanner, setShowDeniedBanner] = useState(false);

  const handleEnable = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    setHasSeenNotificationPrompt(true);

    if (status === "granted") {
      setNotificationsEnabled(true);
      onDismiss();
    } else {
      setShowDeniedBanner(true);
    }
  };

  const handleDismiss = () => {
    setHasSeenNotificationPrompt(true);
    onDismiss();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={handleDismiss}
    >
      <View className="flex-1 justify-end bg-black/40">
        <View className="rounded-t-3xl bg-white px-6 pb-10 pt-6">
          {/* Close button */}
          <Pressable
            onPress={handleDismiss}
            className="absolute right-5 top-5 z-10"
            hitSlop={12}
          >
            <Ionicons name="close" size={24} color="#6b7280" />
          </Pressable>

          {/* Icon */}
          <View className="mb-4 items-center">
            <View className="h-16 w-16 items-center justify-center rounded-full bg-brand-50">
              <Ionicons
                name="notifications-outline"
                size={32}
                color="#15803d"
              />
            </View>
          </View>

          {/* Heading + body */}
          <Text className="mb-2 text-center text-xl font-bold text-gray-900">
            Never miss a care task
          </Text>
          <Text className="mb-6 text-center text-sm leading-5 text-gray-500">
            Get reminders when it&apos;s time to prune, fertilize, or harvest
            your trees.
          </Text>

          {/* Category toggles */}
          <View className="mb-6 rounded-2xl bg-gray-50 px-4">
            <ToggleRow
              label="Pruning reminders"
              value={notificationPreferences.pruning}
              onValueChange={(v) => setNotificationPreferences({ pruning: v })}
            />
            <Divider />
            <ToggleRow
              label="Fertilizing reminders"
              value={notificationPreferences.fertilizing}
              onValueChange={(v) =>
                setNotificationPreferences({ fertilizing: v })
              }
            />
            <Divider />
            <ToggleRow
              label="Pest control alerts"
              value={notificationPreferences.pestControl}
              onValueChange={(v) =>
                setNotificationPreferences({ pestControl: v })
              }
            />
            <Divider />
            <ToggleRow
              label="Harvest timing"
              value={notificationPreferences.harvest}
              onValueChange={(v) => setNotificationPreferences({ harvest: v })}
            />
          </View>

          {/* Denied banner */}
          {showDeniedBanner && (
            <View className="mb-4 rounded-xl bg-amber-50 px-4 py-3">
              <Text className="text-center text-xs text-amber-700">
                You can enable notifications later in Settings.
              </Text>
            </View>
          )}

          {/* Buttons */}
          <PrimaryButton
            title="Enable Reminders"
            onPress={handleEnable}
          />
          <Pressable onPress={handleDismiss} className="mt-3 items-center py-2">
            <Text className="text-sm font-medium text-gray-400">Not now</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

function ToggleRow({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) {
  return (
    <View className="flex-row items-center justify-between py-3.5">
      <Text className="text-sm font-medium text-gray-700">{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#d1d5db", true: "#86efac" }}
        thumbColor={value ? "#15803d" : "#f4f4f5"}
      />
    </View>
  );
}

function Divider() {
  return <View className="h-px bg-gray-200" />;
}
