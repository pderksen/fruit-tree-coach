import { useState } from "react";
import { View, Text, TextInput, type KeyboardTypeOptions } from "react-native";
import {
  useController,
  type UseControllerProps,
  type FieldValues,
} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export function FormField<T extends FieldValues>({
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
  autoCapitalize,
  ...controllerProps
}: FormFieldProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController(controllerProps);

  const [focused, setFocused] = useState(false);

  return (
    <View className="mb-4">
      <Text className="mb-1.5 text-sm font-medium text-gray-700">{label}</Text>
      <TextInput
        className={`rounded-xl border bg-white px-4 py-3 text-base text-gray-900 ${
          error
            ? "border-red-400"
            : focused
              ? "border-green-700"
              : "border-gray-300"
        }`}
        value={field.value}
        onChangeText={field.onChange}
        onBlur={() => {
          field.onBlur();
          setFocused(false);
        }}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
      {error?.message && (
        <Text className="mt-1 text-sm text-red-500">{error.message}</Text>
      )}
    </View>
  );
}
