import { Pressable, Text, View } from "react-native";

type DevButton = {
  label: string;
  onPress: () => void;
};

type DevToolsProps = {
  buttons: DevButton[];
};

export function DevTools({ buttons }: DevToolsProps) {
  if (!__DEV__) return null;

  return (
    <View className="mx-5 mt-8 border-t border-dashed border-gray-300 pt-3">
      <Text className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
        Dev
      </Text>
      <View className="mt-3 gap-2">
        {buttons.map((btn) => (
          <Pressable
            key={btn.label}
            onPress={btn.onPress}
            className="items-center rounded-xl border border-dashed border-gray-300 px-5 py-3"
          >
            <Text className="text-sm font-medium text-gray-500">
              {btn.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
