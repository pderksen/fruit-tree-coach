import { Pressable, Text } from "react-native";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function PrimaryButton({ title, onPress, disabled }: PrimaryButtonProps) {
  return (
    <Pressable
      className={`items-center rounded-xl bg-green-700 px-6 py-3.5 ${
        disabled ? "opacity-50" : ""
      }`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-base font-semibold text-white">{title}</Text>
    </Pressable>
  );
}
