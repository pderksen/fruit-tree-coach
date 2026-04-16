import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { useController, useForm } from "react-hook-form";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AgePicker } from "@/components/AgePicker";
import { ErrorState } from "@/components/ErrorState";
import { FormField } from "@/components/FormField";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { useTree, useUpdateTree } from "@/hooks/use-trees";
import { TREE_CATEGORY_MAP } from "@/lib/fruit-tree-data";
import type { AgeBracket, FruitTreeType } from "@/lib/types";
import { AGE_BRACKET_LABELS } from "@/lib/types";

const editTreeSchema = z.object({
  variety: z.string().optional(),
  ageBracket: z.string().optional(),
});

type EditTreeForm = z.infer<typeof editTreeSchema>;

export default function EditTreeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const treeQuery = useTree(id);
  const tree = treeQuery.data;
  const updateTree = useUpdateTree();

  const { control, handleSubmit, reset, setValue, watch } = useForm<EditTreeForm>({
    resolver: zodResolver(editTreeSchema),
    defaultValues: { variety: "", ageBracket: "" },
  });

  const ageField = useController({ name: "ageBracket", control });

  // Prefill once the tree loads.
  useEffect(() => {
    if (!tree) return;
    reset({
      variety: tree.variety ?? "",
      ageBracket: tree.ageBracket ?? "",
    });
  }, [tree, reset]);

  async function onSubmit(data: EditTreeForm) {
    if (!tree) return;
    const variety = data.variety?.trim() || undefined;
    const ageBracket = (data.ageBracket as AgeBracket) || undefined;
    // Mirror the new-tree naming rule so the header stays consistent
    // with the variety the user just picked.
    const name = variety ? `${variety} ${tree.type}` : tree.type;
    try {
      await updateTree.mutateAsync({
        id: tree.id,
        fields: { name, variety, ageBracket },
      });
      router.back();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please try again.";
      Alert.alert("Could not save changes", message);
    }
  }

  if (treeQuery.isLoading) {
    return (
      <Screen>
        <LoadingSpinner fullScreen />
      </Screen>
    );
  }

  if (!tree) {
    return (
      <Screen>
        <ErrorState
          fullScreen
          message="Could not load tree."
          onRetry={() => treeQuery.refetch()}
        />
      </Screen>
    );
  }

  const selectedAge = watch("ageBracket") as AgeBracket | "" | null;
  const category = TREE_CATEGORY_MAP[tree.type as FruitTreeType];

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
          {/* Read-only fruit type */}
          <View className="mt-2 rounded-3xl bg-white p-5">
            <Text className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
              Fruit type
            </Text>
            <Text className="text-base font-semibold text-gray-900">
              {tree.type}
              {category ? (
                <Text className="text-sm font-normal text-gray-500">
                  {"  ·  " + category}
                </Text>
              ) : null}
            </Text>
            <Text className="mt-2 text-xs text-gray-500">
              Fruit type can&apos;t be changed. Delete and re-add the tree if
              it&apos;s wrong.
            </Text>
          </View>

          {/* Editable fields */}
          <View className="mt-4 rounded-3xl bg-white p-5">
            <FormField<EditTreeForm>
              control={control}
              name="variety"
              label="Varietal (optional)"
              placeholder="e.g. Honeycrisp, Meyer, Elberta"
            />

            <AgePicker
              label="Est. Age (Years)"
              value={(selectedAge as AgeBracket) || null}
              onChange={(v) => setValue("ageBracket", v)}
              error={ageField.fieldState.error?.message}
            />
            {selectedAge ? (
              <Text className="text-xs text-gray-500">
                Currently: {AGE_BRACKET_LABELS[selectedAge as AgeBracket]}
              </Text>
            ) : null}
          </View>

          {/* Actions */}
          <View className="mt-6">
            <PrimaryButton
              title={updateTree.isPending ? "Saving…" : "Save changes"}
              onPress={handleSubmit(onSubmit)}
              disabled={updateTree.isPending}
            />
          </View>
          <Pressable
            className="mt-3 items-center py-2"
            onPress={() => router.back()}
          >
            <Text className="text-base font-medium text-gray-500">Cancel</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
