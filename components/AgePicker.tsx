import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { AgeBracket } from "@/lib/types";
import { AGE_BRACKET_LABELS } from "@/lib/types";

const OPTIONS: AgeBracket[] = ["sapling", "young", "maturing", "mature"];

interface AgePickerProps {
  label: string;
  value: AgeBracket | null;
  onChange: (value: AgeBracket) => void;
  error?: string;
}

export function AgePicker({ label, value, onChange, error }: AgePickerProps) {
  const [open, setOpen] = useState(false);

  const displayText = value ? AGE_BRACKET_LABELS[value] : "Select age range";

  return (
    <View className="mb-4">
      <Text className="mb-1 text-sm font-medium text-gray-700">{label}</Text>
      <Pressable
        className={`flex-row items-center justify-between rounded-xl border px-4 py-3.5 ${
          error ? "border-red-400" : "border-gray-300"
        }`}
        onPress={() => setOpen(true)}
      >
        <Text
          className={value ? "text-base text-gray-900" : "text-base text-gray-400"}
        >
          {displayText}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#9ca3af" />
      </Pressable>
      {error ? (
        <Text className="mt-1 text-xs text-red-500">{error}</Text>
      ) : null}

      <Modal visible={open} transparent animationType="slide">
        <Pressable
          className="flex-1 justify-end bg-black/30"
          onPress={() => setOpen(false)}
        >
          <View className="rounded-t-3xl bg-white pb-8 pt-4">
            <Text className="mb-3 px-5 text-lg font-bold text-gray-900">
              {label}
            </Text>
            <FlatList
              data={OPTIONS}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                const isSelected = item === value;
                return (
                  <Pressable
                    className="flex-row items-center justify-between px-5 py-3.5"
                    onPress={() => {
                      onChange(item);
                      setOpen(false);
                    }}
                  >
                    <Text
                      className={`text-base ${
                        isSelected
                          ? "font-semibold text-brand-700"
                          : "text-gray-900"
                      }`}
                    >
                      {AGE_BRACKET_LABELS[item]}
                    </Text>
                    {isSelected ? (
                      <Ionicons name="checkmark" size={22} color="#15803d" />
                    ) : null}
                  </Pressable>
                );
              }}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
