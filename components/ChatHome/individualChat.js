import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default Chat = () => {
  return (
    <>
      <TouchableOpacity onPress={() => console.log("Chat Clicked")}>
        <View style={styles.container}>
          <View style={styles.chat}>
            <View style={styles.chatNameImageSection}>
              <Image
                source={{
                  uri: "https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-login-interface-abstract-purple-user-icon-png-image_3917506.jpg",
                }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View style={styles.chatMessageSection}>
              <Text style={styles.chatName}>Ayush Kamboj </Text>
              <Text style={styles.chatMessage}>
                Hey I am Ayush Kamboj ....{" "}
              </Text>
              <Text style={styles.chatDate}>Aug 6 </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    paddingVertical: 5,
    paddingHorizontal: 10,

    // paddingTop: 50,
    // flex: 1,
    backgroundColor: "#889BFF",
    // alignItems: "center",
    // justifyContent: "center",
  },
  chat: {
    backgroundColor: "#D8DCFF",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  chatNameImageSection: {
    // justifyContent: "space-between",
  },

  chatName: {
    fontSize: 22,
    // marginLeft: 20,
  },

  chatMessageSection: {
    marginLeft: 20,
  },
  chatMessage: {
    fontSize: 18,
    color: "#818181",
    // textAlign: "right",
  },
  chatDate: {
    // textAlign: "right",
  },
});
