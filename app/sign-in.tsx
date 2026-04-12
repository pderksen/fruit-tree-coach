import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

import { FormField } from "@/components/FormField";
import { signIn, signUp, resetPassword } from "@/lib/auth";

const logo = require("@/assets/images/fruit-tree-coach-logo.png") as number;

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignUpValues = z.infer<typeof signUpSchema>;
type SignInValues = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const { mode: initialMode } = useLocalSearchParams<{ mode?: string }>();
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "bottom"]}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Close button */}
        <Pressable
          className="absolute right-4 top-3 z-10 p-2"
          onPress={() => router.dismiss()}
        >
          <Ionicons name="close" size={28} color="#6b7280" />
        </Pressable>

        <ScrollView
          contentContainerClassName="items-center px-6 pb-8 pt-8"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <Image
            source={logo}
            className="mb-6 h-20 w-20"
            resizeMode="contain"
          />

          <Text className="mb-8 text-2xl font-bold text-gray-900">
            {isSignUp ? "Create your account" : "Welcome back"}
          </Text>

          {/* Form */}
          {isSignUp ? (
            <SignUpForm
              onSuccess={() => router.replace("/onboarding-zip")}
            />
          ) : (
            <SignInForm
              onSuccess={() => router.replace("/(tabs)")}
            />
          )}

          {/* Divider */}
          <View className="my-6 w-full flex-row items-center gap-3">
            <View className="h-px flex-1 bg-gray-200" />
            <Text className="text-sm text-gray-400">or</Text>
            <View className="h-px flex-1 bg-gray-200" />
          </View>

          {/* Social auth */}
          <SocialButton
            icon="logo-apple"
            label={isSignUp ? "Sign up with Apple" : "Sign in with Apple"}
          />
          <SocialButton
            icon="logo-google"
            label={isSignUp ? "Sign up with Google" : "Sign in with Google"}
          />

          {/* Toggle mode */}
          <Pressable className="mt-6" onPress={() => setIsSignUp(!isSignUp)}>
            <Text className="text-sm text-gray-500">
              {isSignUp ? "Already have an account? " : "Don\u2019t have an account? "}
              <Text className="font-semibold text-brand-700">
                {isSignUp ? "Sign in" : "Sign up"}
              </Text>
            </Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function SignUpForm({ onSuccess }: { onSuccess: () => void }) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const methods = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = async (data: SignUpValues) => {
    setError(null);
    setLoading(true);
    const result = await signUp(data.name, data.email, data.password);
    setLoading(false);
    if (result.success) {
      onSuccess();
    } else {
      setError(result.error ?? "Something went wrong");
    }
  };

  return (
    <FormProvider {...methods}>
      <View className="w-full">
        <FormField<SignUpValues>
          name="name"
          control={methods.control}
          label="Name"
          placeholder="Your name"
          autoCapitalize="words"
        />
        <FormField<SignUpValues>
          name="email"
          control={methods.control}
          label="Email"
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FormField<SignUpValues>
          name="password"
          control={methods.control}
          label="Password"
          placeholder="At least 8 characters"
          secureTextEntry
        />

        {error && (
          <Text className="mb-3 text-sm text-red-500">{error}</Text>
        )}

        <Pressable
          className={`items-center rounded-xl bg-brand-700 px-6 py-3.5 ${loading ? "opacity-50" : ""}`}
          onPress={methods.handleSubmit(onSubmit)}
          disabled={loading}
        >
          <Text className="text-base font-semibold text-white">
            {loading ? "Creating account..." : "Create Account"}
          </Text>
        </Pressable>
      </View>
    </FormProvider>
  );
}

function SignInForm({ onSuccess }: { onSuccess: () => void }) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const methods = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: SignInValues) => {
    setError(null);
    setLoading(true);
    const result = await signIn(data.email, data.password);
    setLoading(false);
    if (result.success) {
      onSuccess();
    } else {
      setError(result.error ?? "Invalid email or password");
    }
  };

  const handleForgotPassword = async () => {
    const email = methods.getValues("email").trim();
    if (!email) {
      setError("Enter your email above, then tap Forgot password");
      return;
    }
    setError(null);
    setLoading(true);
    const result = await resetPassword(email);
    setLoading(false);
    if (result.success) {
      setResetSent(true);
    } else {
      setError(result.error ?? "Something went wrong");
    }
  };

  return (
    <FormProvider {...methods}>
      <View className="w-full">
        <FormField<SignInValues>
          name="email"
          control={methods.control}
          label="Email"
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FormField<SignInValues>
          name="password"
          control={methods.control}
          label="Password"
          placeholder="Your password"
          secureTextEntry
        />

        {error && (
          <Text className="mb-3 text-sm text-red-500">{error}</Text>
        )}

        {resetSent && (
          <Text className="mb-3 text-sm text-brand-700">
            Check your email for a password reset link.
          </Text>
        )}

        <Pressable
          className={`items-center rounded-xl bg-brand-700 px-6 py-3.5 ${loading ? "opacity-50" : ""}`}
          onPress={methods.handleSubmit(onSubmit)}
          disabled={loading}
        >
          <Text className="text-base font-semibold text-white">
            {loading ? "Signing in..." : "Sign In"}
          </Text>
        </Pressable>

        <Pressable
          className="mt-3 self-center"
          onPress={handleForgotPassword}
          disabled={loading}
        >
          <Text className="text-sm text-gray-400">Forgot password?</Text>
        </Pressable>
      </View>
    </FormProvider>
  );
}

function SocialButton({
  icon,
  label,
}: {
  icon: "logo-apple" | "logo-google";
  label: string;
}) {
  return (
    <Pressable
      className="mb-3 w-full flex-row items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-3.5"
      onPress={() =>
        Alert.alert("Coming Soon", "Social sign-in will be available soon.")
      }
    >
      <Ionicons name={icon} size={20} color="#374151" />
      <Text className="text-base font-medium text-gray-700">{label}</Text>
    </Pressable>
  );
}
