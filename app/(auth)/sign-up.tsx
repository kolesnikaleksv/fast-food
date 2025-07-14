import { Alert, Text, View } from "react-native";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { useState } from "react";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    console.log(form.password);
    if (!form.name || !form.email || !form.password)
      return Alert.alert(
        "Eroor",
        "Please enter valid email address & password.",
      );
    setIsSubmitting(true);
    try {
      // Call appwrite Sign Up function
      Alert.alert("Success", "User signed up successfully.");
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
        placeholder="Enter your full name"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        label="Full name"
      />
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
      <CustomButton title="Sign Up" isLoading={isSubmitting} onPress={submit} />
      <View className="flex justify-center mt-5 flex-row gap-2">
        <Text className="base-regular text-gray-100 ">
          Already have an account?
        </Text>
        <Link href={"/sign-in"} className="base-bold text-primary">
          <Text className="base-bold text-primary">Sign In</Text>
        </Link>
      </View>
    </View>
  );
};
export default SignUp;
