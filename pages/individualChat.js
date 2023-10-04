import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import Header from "../components/Header";

const ChatWindow = () => {
  return (
    <>
      <View style={styles.container}>
        <Header loggedIn={true} name={"Ayush Kamboj"} />
        <View style={styles.chatMessages}>
          <Text style={styles.messageOut}>
            This is an incoming message from a user
          </Text>
          <Text style={styles.messageIn}>
            This is a reply message from the user
          </Text>
          <Text style={styles.messageOut}>
            This is an incoming message from a user
          </Text>
          <Text style={styles.messageIn}>
            This is a reply message from the user
          </Text>
          <Text style={styles.messageOut}>
            This is an incoming message from a user
          </Text>
          <Text style={styles.messageIn}>
            This is a reply message from the user
          </Text>
          <Text style={styles.messageOut}>
            This is an incoming message from a user
          </Text>
          <Text style={styles.messageIn}>
            This is a reply message from the user
          </Text>
        </View>
        <View style={styles.sendMessageSection}>
          <View style={styles.messageInput}>
            <TextInput placeholder="Message..."></TextInput>
          </View>
          <Pressable style={styles.submitButton}>
            <Text>Send</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default ChatWindow;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#889BFF",
  },

  chatHeading: {
    fontSize: 32,
    textAlign: "center",
  },

  chatMessages: {
    padding: 20,
  },

  messageOut: {
    padding: 15,
    backgroundColor: "#B8CCFF",
    borderRadius: 20,
    marginVertical: 10,
    width: 200,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  messageIn: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#D8DCFF",
    marginVertical: 10,
    width: 200,
    alignSelf: "flex-end",
  },

  sendMessageSection: {
    flex: 1,
    flexDirection: "row",
  },

  messageInput: {
    width: 250,
    padding: 10,
    borderWidth: 2,
    borderRadius: 12,
    marginLeft: 20,
    marginBottom: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },

  submitButton: {
    width: 60,
    marginHorizontal: 20,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#D8DCFF",
  },
});
