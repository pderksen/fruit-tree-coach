import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  children: React.ReactNode;
}

export function Screen({ children }: ScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 px-5 pt-2" edges={["top"]}>
      {children}
    </SafeAreaView>
  );
}
