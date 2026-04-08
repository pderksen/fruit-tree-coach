import { useState } from "react";
import { useRouter } from "expo-router";
import { useForm, useController } from "react-hook-form";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from "react-native";
import DateTimePicker, {
  type DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AgePicker } from "@/components/AgePicker";
import { CoachTipCard } from "@/components/CoachTipCard";
import { FormField } from "@/components/FormField";
import { FruitTypeGrid } from "@/components/FruitTypeGrid";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { MOCK_COACH_TIPS } from "@/lib/mocks/care-details";
import type { AgeBracket, FruitTreeType } from "@/lib/types";

const addTreeSchema = z.object({
  name: z.string().min(1, "Give your tree a nickname"),
  type: z.string().min(1, "Pick a tree type"),
  plantedDate: z.string().optional(),
  ageBracket: z.string().optional(),
});

type AddTreeForm = z.infer<typeof addTreeSchema>;

export default function AddTreeScreen() {
  const router = useRouter();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { control, handleSubmit, setValue, watch } = useForm<AddTreeForm>({
    resolver: zodResolver(addTreeSchema),
    defaultValues: { name: "", type: "", plantedDate: "", ageBracket: "" },
  });

  const typeField = useController({ name: "type", control });
  const selectedType = typeField.field.value as FruitTreeType | "";

  const plantedDateValue = watch("plantedDate");
  const displayDate = plantedDateValue
    ? new Date(plantedDateValue).toLocaleDateString()
    : "";

  function handleDateChange(_event: DateTimePickerEvent, date?: Date) {
    setShowDatePicker(Platform.OS === "ios");
    if (date) {
      setValue("plantedDate", date.toISOString());
    }
  }

  function onSubmit(data: AddTreeForm) {
    // TODO: persist to Supabase via TanStack Query mutation
    console.log("New tree:", data);
    router.back();
  }

  const coachTip = selectedType
    ? MOCK_COACH_TIPS[selectedType as FruitTreeType]
    : null;

  return (
    <Screen bg="bg-cream-50">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero */}
          <Text className="mt-2 text-3xl font-bold text-gray-900">
            Plant a New Legacy
          </Text>
          <Text className="mb-6 mt-2 text-base leading-6 text-gray-500">
            Every great orchard starts with a single sapling. Tell us about
            the newest addition to your garden.
          </Text>

          {/* Tree type selector */}
          <Text className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
            Select Tree Type
          </Text>
          <FruitTypeGrid
            selected={selectedType || null}
            onSelect={(t) => typeField.field.onChange(t)}
          />
          {typeField.fieldState.error ? (
            <Text className="mt-1 text-xs text-red-500">
              {typeField.fieldState.error.message}
            </Text>
          ) : null}

          {/* Form card */}
          <View className="mt-6 rounded-3xl bg-white p-5">
            <FormField<AddTreeForm>
              control={control}
              name="name"
              label="Tree Nickname"
              placeholder="e.g. My Backyard Meyer"
            />

            {/* Date picker */}
            <View className="mb-4">
              <Text className="mb-1 text-sm font-medium text-gray-700">
                Planting Date
              </Text>
              <Pressable
                className="flex-row items-center justify-between rounded-xl border border-gray-300 px-4 py-3.5"
                onPress={() => setShowDatePicker(true)}
              >
                <Text
                  className={
                    displayDate
                      ? "text-base text-gray-900"
                      : "text-base text-gray-400"
                  }
                >
                  {displayDate || "mm/dd/yyyy"}
                </Text>
                <Text className="text-gray-400">&#x1F4C5;</Text>
              </Pressable>
              {showDatePicker ? (
                <DateTimePicker
                  value={
                    plantedDateValue
                      ? new Date(plantedDateValue)
                      : new Date()
                  }
                  mode="date"
                  display="default"
                  maximumDate={new Date()}
                  onChange={handleDateChange}
                />
              ) : null}
            </View>

            <AgePicker
              label="Est. Age (Years)"
              value={watch("ageBracket") as AgeBracket | null || null}
              onChange={(v) => setValue("ageBracket", v)}
            />
          </View>

          {/* Coach tip */}
          {coachTip ? (
            <View className="mt-5">
              <CoachTipCard tip={coachTip} />
            </View>
          ) : null}

          {/* Actions */}
          <View className="mt-6">
            <PrimaryButton
              title="Add to My Orchard"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <Pressable className="mt-3 items-center py-2" onPress={() => router.back()}>
            <Text className="text-base font-medium text-gray-500">
              Save as Draft
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
