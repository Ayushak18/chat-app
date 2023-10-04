import { StyleSheet, Text, View } from "react-native";

export default Header = (props) => {
  const { loggedIn, name } = props;
  //   console.log(props);
  if (loggedIn) {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.chatHeading}>{name} </Text>
        </View>
      </>
    );
  } else {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.chatHeading}>Chats </Text>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // paddingTop: 50,
    flex: 1,
    backgroundColor: "#a9beff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  chatHeading: {
    fontSize: 32,
    textAlign: "center",
  },
});
