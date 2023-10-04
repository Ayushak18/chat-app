import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.topHeading}>Sign Up</Text>
      <Text style={styles.email}>Email/Phone Number</Text>
      <TextInput
        style={styles.emailInput}
        placeholder="Enter your email"
        // value={message}
        // onChangeText={(text) => setMessage(text)}
        // onSubmitEditing={() => alert(`Welcome to ${message}`)}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.passwordInput}
        placeholder="Enter your password"
        // value={message}
        // onChangeText={(text) => setMessage(text)}
        // onSubmitEditing={() => alert(`Welcome to ${message}`)}
      />

      <Text>Re-Enter Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.passwordInput}
        placeholder="Enter your password again"
        // value={message}
        // onChangeText={(text) => setMessage(text)}
        // onSubmitEditing={() => alert(`Welcome to ${message}`)}
      />

      <Pressable style={styles.submitButton}>
        <Text>Register</Text>
      </Pressable>
      <Text
        style={styles.goToLogin}
        onPress={() => console.log("Create Account")}
      >
        Already have account , Login
      </Text>

      {/* <View style={styles.submitButton}>
      <Button
        padding={50}
        // onPress={onPressLearnMore}
        color={"#842CF0"}
        title="Login"
        // accessibilityLabel="Learn more about this purple button"
      />
    </View> */}
      {/* <Text>
      Hey This Hey eee is ayush kamboj and Hey now I am using a different
      application
    </Text> */}

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#889BFF",
    // alignItems: "center",
    // justifyContent: "center",
  },

  topHeading: {
    textAlign: "center",
    fontSize: 30,
  },
  emailInput: {
    color: "#fff",
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginBottom: 50,
  },
  passwordInput: {
    // marginVertical: 20,
    color: "#fff",
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginBottom: 50,
  },
  submitButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "white",
  },
  goToLogin: {
    textDecorationLine: "underline",
    margin: 10,
    textAlign: "center",
  },
});
