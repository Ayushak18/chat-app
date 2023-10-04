import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Chat from "../components/ChatHome/individualChat";

export default ChatHome = () => {
  return (
    <>
      <View style={styles.container}>
        <Header loggedIn={false} />
        <View>
          <Chat />
          <Chat />
          <Chat />
          <Chat />
          <Chat />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    // paddingTop: 50,
    flex: 1,
    backgroundColor: "#889BFF",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
