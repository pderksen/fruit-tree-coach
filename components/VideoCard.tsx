import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface VideoCardProps {
  title: string;
  onPress?: () => void;
}

export function VideoCard({ title, onPress }: VideoCardProps) {
  return (
    <Pressable
      className="overflow-hidden rounded-2xl bg-brand-900"
      onPress={onPress}
    >
      {/* Placeholder for video thumbnail */}
      <View className="h-48 items-center justify-center bg-brand-800">
        <View className="h-14 w-14 items-center justify-center rounded-full bg-white/20">
          <Ionicons name="play" size={28} color="white" />
        </View>
      </View>
      <View className="px-4 py-3">
        <Text className="text-sm font-semibold text-white">{title}</Text>
      </View>
    </Pressable>
  );
}
