import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { useForm, useController } from "react-hook-form";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AgePicker } from "@/components/AgePicker";
import { FormField } from "@/components/FormField";
import { FruitTypeGrid } from "@/components/FruitTypeGrid";
import { PrimaryButton } from "@/components/PrimaryButton";
import {
  RequestTreeModal,
  type RequestTreeSubmission,
} from "@/components/RequestTreeModal";
import { Screen } from "@/components/Screen";
import { useDefaultOrchard } from "@/hooks/use-orchards";
import { useCreateTree } from "@/hooks/use-trees";
import type { AgeBracket, FruitTreeType } from "@/lib/types";

const addTreeSchema = z.object({
  name: z.string().optional(),
  type: z.string().min(1, "Pick a fruit type"),
  ageBracket: z.string().optional(),
});

type AddTreeForm = z.infer<typeof addTreeSchema>;

export default function AddTreeScreen() {
  const router = useRouter();
  const defaultOrchard = useDefaultOrchard();
  const zone = defaultOrchard?.zone ?? "";
  const createTree = useCreateTree();

  const { control, handleSubmit, setValue, watch } = useForm<AddTreeForm>({
    resolver: zodResolver(addTreeSchema),
    defaultValues: { name: "", type: "", ageBracket: "" },
  });

  const typeField = useController({ name: "type", control });
  const selectedType = typeField.field.value as FruitTreeType | "";

  const [requestModalVisible, setRequestModalVisible] = useState(false);
  const scrollRef = useRef<ScrollView>(null);
  const formCardYRef = useRef(0);

  const hasScrolledToFormRef = useRef(false);

  function handleTypeSelect(t: FruitTreeType) {
    typeField.field.onChange(t);
    if (!hasScrolledToFormRef.current) {
      hasScrolledToFormRef.current = true;
      scrollRef.current?.scrollTo({ y: formCardYRef.current, animated: true });
    }
  }

  function handleAgeChange(age: AgeBracket) {
    setValue("ageBracket", age);
  }

  function handleTreeRequest(submission: RequestTreeSubmission) {
    console.log("[tree-request]", {
      ...submission,
      timestamp: new Date().toISOString(),
    });
    Alert.alert("Thanks!", "We'll look into adding it to the app.");
  }

  async function onSubmit(data: AddTreeForm) {
    if (!defaultOrchard) return;
    const treeType = data.type as FruitTreeType;
    const variety = data.name || undefined;
    try {
      await createTree.mutateAsync({
        orchardId: defaultOrchard.id,
        name: variety ? `${variety} ${treeType}` : treeType,
        type: treeType,
        variety,
        ageBracket: (data.ageBracket as AgeBracket) || undefined,
      });
      router.replace("/(tabs)");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please try again.";
      Alert.alert("Could not add tree", message);
    }
  }

  return (
    <Screen bg="bg-cream-50">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
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
            Select Fruit Type
          </Text>
          <FruitTypeGrid
            selected={selectedType || null}
            onSelect={handleTypeSelect}
            zone={zone}
            onRequestTree={() => setRequestModalVisible(true)}
          />
          {typeField.fieldState.error ? (
            <Text className="mt-1 text-xs text-red-500">
              {typeField.fieldState.error.message}
            </Text>
          ) : null}

          {/* Form card */}
          <View
            className="mt-6 rounded-3xl bg-white p-5"
            onLayout={(e) => {
              formCardYRef.current = e.nativeEvent.layout.y;
            }}
          >
            <FormField<AddTreeForm>
              control={control}
              name="name"
              label="Varietal (optional)"
              placeholder="e.g. Honeycrisp, Meyer, Elberta"
            />

            <AgePicker
              label="Est. Age (Years)"
              value={watch("ageBracket") as AgeBracket | null || null}
              onChange={handleAgeChange}
            />
          </View>

          {/* Actions */}
          <View className="mt-6">
            <PrimaryButton
              title={createTree.isPending ? "Adding…" : "Add to My Orchard"}
              onPress={handleSubmit(onSubmit)}
              disabled={createTree.isPending}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <RequestTreeModal
        visible={requestModalVisible}
        onClose={() => setRequestModalVisible(false)}
        onSubmit={handleTreeRequest}
      />
    </Screen>
  );
}
