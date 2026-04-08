import { Pressable, Text } from "react-native";

interface SecondaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function SecondaryButton({
  title,
  onPress,
  disabled,
}: SecondaryButtonProps) {
  return (
    <Pressable
      className={`items-center rounded-xl border border-green-700 px-6 py-3 ${
        disabled ? "opacity-50" : ""
      }`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-base font-semibold text-green-700">{title}</Text>
    </Pressable>
  );
}
