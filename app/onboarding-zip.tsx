import { Ionicons } from "@expo/vector-icons";
import Constants, { ExecutionEnvironment } from "expo-constants";
import { useRouter } from "expo-router";
import * as Location from "expo-location";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useDefaultOrchard, useUpdateOrchard } from "@/hooks/use-orchards";

const logo = require("@/assets/images/fruit-tree-coach-logo.png") as number;

// Expo Go can't use expo-location's native permission flow because the new
// `NSLocationWhenInUseUsageDescription` we added in app.json only lands in a
// custom dev-client build. Hide the button until we ship one.
const isExpoGo =
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

export default function OnboardingZipScreen() {
  const router = useRouter();
  const defaultOrchard = useDefaultOrchard();
  const updateOrchard = useUpdateOrchard();

  const [zip, setZip] = useState("");
  const [detecting, setDetecting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageKind, setMessageKind] = useState<"error" | "success">("error");

  const isValidZip = /^\d{5}$/.test(zip);

  const detectLocation = async () => {
    setMessage(null);
    setDetecting(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setMessageKind("error");
        setMessage("Location permission denied. Enter your ZIP manually.");
        return;
      }
      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
      });
      const results = await Location.reverseGeocodeAsync({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      const postal = results[0]?.postalCode ?? "";
      // US ZIP codes come back as 5 digits; foreign postal codes may include
      // letters or dashes, which our zone lookup can't handle.
      if (/^\d{5}$/.test(postal)) {
        setZip(postal);
        setMessageKind("success");
        setMessage("Detected your ZIP. Change it if it's wrong.");
      } else {
        setMessageKind("error");
        setMessage("Couldn't detect a US ZIP code. Enter it manually.");
      }
    } catch {
      setMessageKind("error");
      setMessage("Couldn't get your location. Enter your ZIP manually.");
    } finally {
      setDetecting(false);
    }
  };

  const handleContinue = async () => {
    if (!defaultOrchard || !isValidZip) return;
    setSaving(true);
    try {
      await updateOrchard.mutateAsync({
        id: defaultOrchard.id,
        fields: { zipCode: zip },
      });
      router.replace("/(tabs)");
    } catch {
      setMessageKind("error");
      setMessage("Couldn't save. Check your connection and try again.");
      setSaving(false);
    }
  };

  const handleSkip = () => router.replace("/(tabs)");

  const waitingForOrchard = !defaultOrchard;

  return (
    <SafeAreaView className="flex-1 bg-cream-50" edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerClassName="px-6 pb-8 pt-6"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="items-center">
            <Image
              source={logo}
              className="mb-4 h-16 w-16"
              resizeMode="contain"
            />
            <Text className="text-center text-2xl font-bold text-gray-900">
              Where&apos;s your orchard?
            </Text>
            <Text className="mt-2 text-center text-sm text-gray-500">
              We use your ZIP code to time care recommendations for your
              climate.
            </Text>
          </View>

          <View className="mt-8 gap-3">
            {!isExpoGo && (
              <>
                <Pressable
                  onPress={detectLocation}
                  disabled={detecting}
                  className={`flex-row items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3.5 ${detecting ? "opacity-50" : ""}`}
                >
                  {detecting ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Ionicons name="locate-outline" size={20} color="#fff" />
                  )}
                  <Text className="text-base font-semibold text-white">
                    {detecting ? "Detecting…" : "Use my current location"}
                  </Text>
                </Pressable>

                <View className="my-2 flex-row items-center gap-3">
                  <View className="h-px flex-1 bg-gray-200" />
                  <Text className="text-sm text-gray-400">or enter it</Text>
                  <View className="h-px flex-1 bg-gray-200" />
                </View>
              </>
            )}

            <View>
              <Text className="mb-2 text-sm font-medium text-gray-700">
                ZIP code
              </Text>
              <TextInput
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
                placeholder="e.g. 94607"
                placeholderTextColor="#9ca3af"
                value={zip}
                onChangeText={(t) => {
                  setZip(t.replace(/\D/g, "").slice(0, 5));
                  if (message) setMessage(null);
                }}
                keyboardType="number-pad"
                maxLength={5}
                autoFocus={false}
              />
            </View>

            {message && (
              <Text
                className={`text-sm ${messageKind === "error" ? "text-red-500" : "text-brand-700"}`}
              >
                {message}
              </Text>
            )}
          </View>

          <View className="mt-8 gap-3">
            <Pressable
              onPress={handleContinue}
              disabled={!isValidZip || saving || waitingForOrchard}
              className={`items-center rounded-xl bg-brand-700 px-6 py-3.5 ${!isValidZip || saving || waitingForOrchard ? "opacity-40" : ""}`}
            >
              <Text className="text-base font-semibold text-white">
                {saving ? "Saving…" : "Continue"}
              </Text>
            </Pressable>

            <Pressable
              onPress={handleSkip}
              disabled={saving}
              className="items-center py-2"
            >
              <Text className="text-sm text-gray-500">Skip for now</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
