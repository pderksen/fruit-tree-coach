import { useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useForm, useController } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormField } from "@/components/FormField";
import { PrimaryButton } from "@/components/PrimaryButton";

const requestSchema = z.object({
  name: z.string().min(1, "Tree name is required"),
  notes: z.string().optional(),
});

type RequestForm = z.infer<typeof requestSchema>;

export interface RequestTreeSubmission {
  name: string;
  notes: string | undefined;
}

interface RequestTreeModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (submission: RequestTreeSubmission) => void;
}

export function RequestTreeModal({
  visible,
  onClose,
  onSubmit,
}: RequestTreeModalProps) {
  const { control, handleSubmit, watch, reset } = useForm<RequestForm>({
    resolver: zodResolver(requestSchema),
    defaultValues: { name: "", notes: "" },
    mode: "onChange",
  });

  useEffect(() => {
    if (!visible) reset({ name: "", notes: "" });
  }, [visible, reset]);

  const name = watch("name");
  const notesController = useController({ name: "notes", control });
  const canSubmit = name.trim().length > 0;

  function submit(data: RequestForm) {
    const trimmedName = data.name.trim();
    const trimmedNotes = data.notes?.trim();
    onSubmit({
      name: trimmedName,
      notes: trimmedNotes && trimmedNotes.length > 0 ? trimmedNotes : undefined,
    });
    onClose();
  }

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType={Platform.OS === "ios" ? "slide" : "fade"}
      presentationStyle={Platform.OS === "ios" ? "pageSheet" : "overFullScreen"}
      transparent={Platform.OS !== "ios"}
    >
      <KeyboardAvoidingView
        className="flex-1 bg-cream-50"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ padding: 24, paddingBottom: 48 }}
          keyboardShouldPersistTaps="handled"
        >
          <Text className="text-2xl font-bold text-gray-900">
            Request a tree type
          </Text>
          <Text className="mb-6 mt-2 text-base leading-6 text-gray-500">
            We&apos;ll look into adding it to the app.
          </Text>

          <FormField
            control={control}
            name="name"
            label="Tree name"
            placeholder="e.g. Pawpaw"
            autoCapitalize="words"
          />

          <View className="mb-4">
            <Text className="mb-1.5 text-sm font-medium text-gray-700">
              Anything else? (optional)
            </Text>
            <TextInput
              className="min-h-[96px] rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900"
              value={notesController.field.value ?? ""}
              onChangeText={notesController.field.onChange}
              onBlur={notesController.field.onBlur}
              placeholder="Anything else? (variety, why you want it…)"
              placeholderTextColor="#9ca3af"
              multiline
              textAlignVertical="top"
            />
          </View>

          <View className="mt-2">
            <PrimaryButton
              title="Send request"
              onPress={handleSubmit(submit)}
              disabled={!canSubmit}
            />
          </View>
          <Pressable className="mt-3 items-center py-2" onPress={onClose}>
            <Text className="text-base font-medium text-gray-500">Cancel</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}
