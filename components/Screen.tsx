import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  children: React.ReactNode;
  bg?: string;
}

export function Screen({ children, bg = "bg-gray-50" }: ScreenProps) {
  return (
    <SafeAreaView className={`flex-1 ${bg} px-5 pt-2`} edges={["top"]}>
      {children}
    </SafeAreaView>
  );
}
