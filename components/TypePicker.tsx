import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, Pressable, Modal, FlatList } from "react-native";

interface TypePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  error?: string;
}

export function TypePicker({
  label,
  value,
  onChange,
  options,
  placeholder = "Select…",
  error,
}: TypePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <View className="mb-4">
      <Text className="mb-1.5 text-sm font-medium text-gray-700">{label}</Text>
      <Pressable
        className={`flex-row items-center justify-between rounded-xl border bg-white px-4 py-3 ${
          error ? "border-red-400" : "border-gray-300"
        }`}
        onPress={() => setOpen(true)}
      >
        <Text
          className={`text-base ${value ? "text-gray-900" : "text-gray-400"}`}
        >
          {value || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={18} color="#9ca3af" />
      </Pressable>
      {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}

      <Modal visible={open} transparent animationType="fade">
        <Pressable
          className="flex-1 justify-end bg-black/40"
          onPress={() => setOpen(false)}
        >
          <Pressable
            className="rounded-t-3xl bg-white pb-8 pt-4"
            onPress={() => {
              /* prevent close when tapping content */
            }}
          >
            <Text className="mb-3 px-5 text-lg font-semibold text-gray-900">
              {label}
            </Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  className="flex-row items-center justify-between px-5 py-3"
                  onPress={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                >
                  <Text
                    className={`text-base ${
                      item === value
                        ? "font-semibold text-green-700"
                        : "text-gray-900"
                    }`}
                  >
                    {item}
                  </Text>
                  {item === value && (
                    <Ionicons name="checkmark" size={20} color="#15803d" />
                  )}
                </Pressable>
              )}
            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}
