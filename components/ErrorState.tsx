import { Pressable, Text, View } from "react-native";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  fullScreen?: boolean;
}

export function ErrorState({
  message = "Something went wrong.",
  onRetry,
  fullScreen = false,
}: ErrorStateProps) {
  return (
    <View
      className={
        fullScreen
          ? "flex-1 items-center justify-center px-6"
          : "items-center rounded-2xl bg-white p-6"
      }
    >
      <Text className="text-center text-sm text-red-500">{message}</Text>
      {onRetry ? (
        <Pressable
          onPress={onRetry}
          className="mt-4 rounded-xl bg-brand-700 px-5 py-2.5"
        >
          <Text className="text-sm font-semibold text-white">Try again</Text>
        </Pressable>
      ) : null}
    </View>
  );
}
