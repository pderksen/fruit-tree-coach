import type { Edge } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  children: React.ReactNode;
  bg?: string;
  edges?: Edge[];
}

export function Screen({ children, bg = "bg-gray-50", edges = [] }: ScreenProps) {
  return (
    <SafeAreaView className={`flex-1 ${bg} px-5 pt-2`} edges={edges}>
      {children}
    </SafeAreaView>
  );
}
