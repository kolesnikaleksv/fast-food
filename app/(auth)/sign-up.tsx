import { Button, Text, View } from "react-native";
import { router } from "expo-router";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Button title="Sign up" onPress={() => router.push("/sign-in")} />
    </View>
  );
};
export default SignUp;
