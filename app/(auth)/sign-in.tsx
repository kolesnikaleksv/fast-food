import { Alert, Text, View } from "react-native";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { useState } from "react";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    console.log(form.password);
    if (!form.email || !form.password)
      return Alert.alert(
        "Eroor",
        "Please enter valid email address & password.",
      );
    setIsSubmitting(true);
    try {
      // Call appwrite Sign in function
      Alert.alert("Success", "User signed in successfully.");
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-7 bg-white rounded-lg p-5 mt-5r">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="password"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" isLoading={isSubmitting} onPress={submit} />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100 ">
          Don't have an account?
        </Text>
        <Link href={"/sign-up"}>
          <Text className="base-bold text-primary">Sign Up</Text>
        </Link>
      </View>
    </View>
  );
};
export default SignIn;
