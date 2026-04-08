import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-green-800">Fruit Tree Coach</Text>
      <Text className="mt-2 text-base text-gray-500">
        Your personal fruit tree care guide
      </Text>
    </View>
  );
}
