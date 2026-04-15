import { Pressable, type PressableProps, type ViewStyle } from "react-native";

interface CardProps extends PressableProps {
  variant?: "default" | "warning" | "urgent";
  className?: string;
}

const SHADOW: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 3,
  elevation: 1,
};

export function Card({
  variant = "default",
  className = "",
  style,
  children,
  ...pressableProps
}: CardProps) {
  const borderClass =
    variant === "urgent"
      ? "border-2 border-red-400"
      : variant === "warning"
        ? "border border-amber-300"
        : "border border-gray-200";

  return (
    <Pressable
      {...pressableProps}
      className={`rounded-2xl bg-white ${borderClass} ${className}`}
      style={[SHADOW, style as ViewStyle]}
    >
      {children}
    </Pressable>
  );
}
