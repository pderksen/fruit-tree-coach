import { useRouter } from "expo-router";
import { useForm, useController } from "react-hook-form";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Alert,
} from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AgePicker } from "@/components/AgePicker";
import { CoachTipCard } from "@/components/CoachTipCard";
import { FormField } from "@/components/FormField";
import { FruitTypeGrid } from "@/components/FruitTypeGrid";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { useDefaultOrchard } from "@/hooks/use-orchards";
import { useCreateTree } from "@/hooks/use-trees";
import { COACH_TIPS } from "@/lib/care/coach-tips";
import type { AgeBracket, FruitTreeType } from "@/lib/types";

const addTreeSchema = z.object({
  name: z.string().optional(),
  type: z.string().min(1, "Pick a tree type"),
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
        statusLabel: "Just planted",
        statusDescription: `Your new ${treeType.toLowerCase()} tree has been added to your orchard.`,
      });
      router.replace("/(tabs)");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please try again.";
      Alert.alert("Could not add tree", message);
    }
  }

  const coachTip = selectedType
    ? COACH_TIPS[selectedType as FruitTreeType]
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
            zone={zone}
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
              label="Varietal (optional)"
              placeholder="e.g. Honeycrisp, Meyer, Elberta"
            />

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
              title={createTree.isPending ? "Adding…" : "Add to My Orchard"}
              onPress={handleSubmit(onSubmit)}
              disabled={createTree.isPending}
            />
          </View>
          <Pressable className="mt-3 items-center py-2" onPress={() => router.replace("/(tabs)")}>
            <Text className="text-base font-medium text-gray-500">
              Save as Draft
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
