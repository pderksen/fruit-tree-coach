import { useRouter } from "expo-router";
import { useForm, useController } from "react-hook-form";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField } from "@/components/FormField";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { TypePicker } from "@/components/TypePicker";
import { FRUIT_TREE_TYPES } from "@/lib/types";

const addTreeSchema = z.object({
  name: z.string().min(1, "Give your tree a name"),
  type: z.string().min(1, "Pick a tree type"),
  variety: z.string().optional(),
  plantedYear: z.string().optional(),
  zipCode: z.string().regex(/^\d{5}$/, "Enter a 5-digit zip code"),
});

type AddTreeForm = z.infer<typeof addTreeSchema>;

export default function AddTreeScreen() {
  const router = useRouter();

  const { control, handleSubmit } = useForm<AddTreeForm>({
    resolver: zodResolver(addTreeSchema),
    defaultValues: {
      name: "",
      type: "",
      variety: "",
      plantedYear: "",
      zipCode: "",
    },
  });

  const typeField = useController({ name: "type", control });

  function onSubmit(data: AddTreeForm) {
    console.log("New tree:", data);
    router.back();
  }

  return (
    <Screen>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="mb-6 mt-2 text-base text-gray-500">
            Tell us about your tree. You can always update this later.
          </Text>

          <FormField<AddTreeForm>
            control={control}
            name="name"
            label="Tree name"
            placeholder="e.g. Backyard Apple"
          />

          <TypePicker
            label="Tree type"
            value={typeField.field.value}
            onChange={typeField.field.onChange}
            options={[...FRUIT_TREE_TYPES]}
            placeholder="Select a type…"
            error={typeField.fieldState.error?.message}
          />

          <FormField<AddTreeForm>
            control={control}
            name="variety"
            label="Variety (optional)"
            placeholder="e.g. Fuji, Redhaven"
          />

          <FormField<AddTreeForm>
            control={control}
            name="plantedYear"
            label="Year planted (optional)"
            placeholder="e.g. 2020"
            keyboardType="number-pad"
          />

          <FormField<AddTreeForm>
            control={control}
            name="zipCode"
            label="Zip code"
            placeholder="e.g. 97201"
            keyboardType="number-pad"
          />

          <View className="mt-4">
            <PrimaryButton title="Add tree" onPress={handleSubmit(onSubmit)} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
