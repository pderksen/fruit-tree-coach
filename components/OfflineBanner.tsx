import { useNetInfo } from "@react-native-community/netinfo";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function OfflineBanner() {
  const { isConnected } = useNetInfo();
  if (isConnected !== false) return null;

  return (
    <SafeAreaView edges={["top"]} className="bg-amber-100">
      <View className="border-b border-amber-300 px-4 py-2">
        <Text className="text-xs font-semibold uppercase tracking-wide text-amber-900">
          You&apos;re offline. Changes will sync when you reconnect.
        </Text>
      </View>
    </SafeAreaView>
  );
}
