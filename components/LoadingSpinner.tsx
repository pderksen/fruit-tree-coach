import { ActivityIndicator, View } from "react-native";

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

export function LoadingSpinner({ fullScreen = false }: LoadingSpinnerProps) {
  return (
    <View
      className={
        fullScreen
          ? "flex-1 items-center justify-center"
          : "items-center py-8"
      }
    >
      <ActivityIndicator color="#15803d" />
    </View>
  );
}
