import { Pressable, type PressableProps, type ViewStyle } from "react-native";

interface CardProps extends PressableProps {
  variant?: "default" | "warning";
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
    variant === "warning" ? "border border-red-200" : "border border-brand-200";

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
